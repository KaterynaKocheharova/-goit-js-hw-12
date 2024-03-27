// ======================================= IMPORTS
import { refs } from './js/elements';
// import { handleEmptyField } from './js/form-validation';
import { showEl, hideEl } from './js/is-open';
import { findImages } from './js/pixabay.api';
import { imagesRenderTemplate } from './js/render-functions';
import { warning, error } from './js/izi-toast';
import { handleLightbox } from './js/simplelightbox';
import { smoothScroll } from './js/scrolling';

// ======================================== EVENT LISTENERS
refs.imageSearchForm.addEventListener('submit', onImgSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadMoreImg);

// ======================================== PAGE
let page = 1;
let limit = 15;
let totalImg;
let maxPage;

// ======================================== ON IMG SUBMIT
let searchImage;

function onImgSubmit(event) {
  event.preventDefault();
  refs.gallery.innerHTML = '';
  hideEl(refs.loadMoreBtn);
  showEl(refs.loader);
  page = 1;

  searchImage = event.currentTarget.elements.searchImage.value.trim();
  event.currentTarget.reset();

  // checking for empty fields
  if (searchImage === '') {
    warning('Write what image you want to search for');
    hideEl(refs.loader);
    return;
  }

  // making a request
  findImages(searchImage, page, limit)
    .then(response => {
      // checking if images exist
      if (!response.data.totalHits) {
        error(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        hideEl(refs.loader);
        return;
      }

      totalImg = response.data.totalHits;
      maxPage = Math.ceil(totalImg / limit);

      // rendering images
      const imagesMarkup = imagesRenderTemplate(response.data.hits);
      refs.gallery.innerHTML = imagesMarkup;
      page += 1;
      hideEl(refs.loader);

      // adding lightbox
      handleLightbox();
      // smooth scrolling
      smoothScroll();
    })
    .finally(() => {
      if (!totalImg < limit) {
        showEl(refs.loadMoreBtn);
        error("We're sorry, but you've reached the end of search results");
      }
    });
}

// ================================================ ON LOAD MORE IMG
function onLoadMoreImg() {
  refs.loader.style.order = 3;
  showEl(refs.loader);

  // checking if there are more images
  if (page > maxPage) {
    hideEl(refs.loadMoreBtn);
    hideEl(refs.loader);
    return error("We're sorry, but you've reached the end of search results");
  }
  // making a request
  findImages(searchImage, page, limit)
    .then(response => {
      if (response.data.totalHits > limit) {
        hideEl(refs.loadMoreBtn);
        return;
      }
      const imagesMarkup = imagesRenderTemplate(response.data.hits);
      refs.gallery.insertAdjacentHTML('beforeend', imagesMarkup);
      hideEl(refs.loader);
      showEl(refs.loadMoreBtn);
      page += 1;
      handleLightbox();
    })
    .catch(error => {
      console.log(error);
    });
}
