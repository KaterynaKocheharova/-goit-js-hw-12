// // ======================================= INLCUDING SIMPLE LIGHTBOX
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// ======================================= IMPORTS
import { refs } from './js/elements';
import { showEl, hideEl } from './js/is-open';
import { findImages } from './js/pixabay.api';
import { imagesRenderTemplate } from './js/render-functions';
import { warning, error } from './js/izi-toast';

// ======================================== EVENT LISTENERS
refs.imageSearchForm.addEventListener('submit', onImgSubmit);
refs.loadMoreBtn.addEventListener("click", onLoadMoreImg);

// ======================================== PAGE

let page = 1;
let limit = 15;
let totalImg;
let maxPage;

// ======================================== ON IMG SUBMIT
let searchImage;

function onImgSubmit(event) {
  event.preventDefault();
  searchImage = event.currentTarget.elements.searchImage.value.trim();
  refs.gallery.innerHTML = '';
  event.currentTarget.reset();

  // checking for empty fields
  if (searchImage === '') {
    warning('Write what image you want to search for');
    return;
  }
  showEl(refs.loader);
  hideEl(refs.loadMoreBtn);
  page = 1;
  // making a request
  findImages(searchImage, page, limit).then(response => {
    // checking if images exist
    if (!response.data.totalHits) {
      error(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      hideEl(refs.loadMoreBtn);
      return;
    }

    totalImg = response.data.totalHits;
    maxPage = Math.ceil(totalImg / 15);
    // rendering images
    const imagesMarkup = imagesRenderTemplate(response.data.hits);
    refs.gallery.innerHTML = imagesMarkup;
    hideEl(refs.loader);
    showEl(refs.loadMoreBtn);
  });
}

// ================================================ ON LOAD MORE IMG
function onLoadMoreImg() {
  page += 1;
  refs.loader.style.order = 3;
  showEl(refs.loader);
  // making a request
  findImages(searchImage, page, limit).then(response => {
    // checking if there are more images
    if (page > maxPage ) {
      error("We're sorry, but you've reached the end of search results");
      hideEl(refs.loadMoreBtn);
      return;
    }

    const imagesMarkup = imagesRenderTemplate(response.data.hits);
    refs.gallery.insertAdjacentHTML("beforeend", imagesMarkup);
    hideEl(refs.loader);
    showEl(refs.loadMoreBtn);
  })
}
