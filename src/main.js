// ======================================= INCLUDING IZITOAST
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// // ======================================= INLCUDING SIMPLE LIGHTBOX
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// ======================================= IMPORTS
import { refs } from './js/elements';
import { showEl, hideEl } from './js/is-open';
import { findImages } from './js/pixabay.api';
import { imagesRenderTemplate } from './js/render-functions';

// ======================================== EVENT LISTENERS
refs.imageSearchForm.addEventListener('submit', onImgSubmit);
// ======================================== HANDLE FORM SUBMIT
let searchImage;

function onImgSubmit(event) {
  event.preventDefault();
  // ====================================== GETTING IMAGE FOR REQUEST
  searchImage = event.currentTarget.elements.searchImage.value.trim();
  refs.gallery.innerHTML = '';
  event.currentTarget.reset();
  // ==================================== CHECKING FOR EMPTY FIELDS
  if (searchImage === '') {
    iziToast.warning({
      message: 'Write what image you want to search for',
      position: 'topRight',
    });
    return;
  }
  // ====================================== ADDING LOADER
  showEl(refs.loader);
  // ===================================== MAKING A REQUEST
  hideEl(refs.loadMoreBtn);
  findImages(searchImage)
    .then(async response => {
      if (!response.length) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#fafafb',
          messageSize: '16px',
          maxWidth: '432px',
          backgroundColor: 'rgb(239, 64, 64)',
          position: 'topRight',
          progressBarColor: 'rgb(181, 27, 27)',
          // icon: 'icon-error-sign',
        });
        refs.gallery.innerHTML = '';
        hideEl(refs.loadMoreBtn);
        return;
      }
      // ============================== RENDERING IMAGES
      const imagesMarkup = await imagesRenderTemplate(response);
      refs.gallery.insertAdjacentHTML('beforeend', imagesMarkup);
      // ============================== REMOVING LOADER; MOVING IT BELOW LIST
      hideEl(refs.loader);
      refs.loader.style.order = '3';
    })
}
