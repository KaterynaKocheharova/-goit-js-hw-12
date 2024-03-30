import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// ======================================= IMPORTS
import { refs } from './js/elements';
import { showEl, hideEl } from './js/is-open';
import { findImages } from './js/pixabay.api';
import { renderImg } from './js/render-functions';
import { warningMessage, errorMessage } from './js/izi-toast';
import { turnSmoothScroll } from './js/smooth-scroll';

// ======================================== EVENT LISTENERS
refs.imageSearchForm.addEventListener('submit', onImgSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadMoreImg);

// ======================================== PAGE VARIABLES
let searchImage;
let currentPage = 0;
let limitPerPage = 15;
let maxNumPage = 0;

// ======================================= LIGHTBOX INITIALIZATION
let lightbox = new SimpleLightbox('.gallery a');

// ======================================== ON IMG SUBMIT
async function onImgSubmit(event) {
  event.preventDefault();
  refs.gallery.innerHTML = '';
  showEl(refs.loader);
  searchImage = event.currentTarget.elements.searchImage.value.trim('');
  // checking for empty fields
  if (searchImage === '') {
    errorMessage('Write what image you want to search for');
    hideEl(refs.loader);
    return;
  }
  event.currentTarget.reset();
  currentPage = 1;

  hideEl(refs.loadMoreBtn);
  hideEl(refs.gallery);
  try {
    const res = await findImages(searchImage, currentPage, limitPerPage);
    // checking if images are present
    if (res.data.totalHits === 0) {
      errorMessage('No images found');
      hideEl(refs.loader);
      return;
    }
    // rendering images
    renderImg(res.data.hits);
    showEl(refs.gallery);
    lightbox.refresh();
    // calculate the max num of images
    maxNumPage = Math.ceil(res.data.totalHits / limitPerPage);
    // checking for the last page
    checkLoadMoreBtnState(refs.loadMoreBtn);
  } catch (err) {
    errorMessage(`Error: ${err}`);
  }
  hideEl(refs.loader);
}

// ================================================ ON LOAD MORE IMG

async function onLoadMoreImg() {
  showEl(refs.loader);
  currentPage += 1;

  try {
    // making request
    const res = await findImages(searchImage, currentPage, limitPerPage);
    // rendering images
    renderImg(res.data.hits);
    lightbox.refresh();
    turnSmoothScroll();
    checkLoadMoreBtnState(refs.loadMoreBtn);
  } catch (err) {
    errorMessage(`Error: ${err}`);
  }
  hideEl(refs.loader);
}

// ========================================= CHECK LOAD MORE STATE ========================================

function checkLoadMoreBtnState(btn) {
  if (currentPage >= maxNumPage) {
    hideEl(btn);
    warningMessage("You've reached the end of the collection");
  } else {
    showEl(btn);
  }
}
