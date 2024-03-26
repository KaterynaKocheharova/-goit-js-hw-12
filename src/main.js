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
  // making a request
  findImages(searchImage).then(response => {

    // checking if images exist
    if (!response.length) {
      error(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      hideEl(refs.loadMoreBtn);
      return;
    }
    // rendering images
    const imagesMarkup = imagesRenderTemplate(response);
    refs.gallery.innerHTML = imagesMarkup;
    hideEl(refs.loader);
  });
}
