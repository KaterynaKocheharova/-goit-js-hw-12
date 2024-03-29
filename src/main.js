import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// ======================================= IMPORTS
import { refs } from './js/elements';
import { showEl, hideEl } from './js/is-open';
import { findImages } from './js/pixabay.api';
import { imagesRenderTemplate } from './js/render-functions';
import { warningMessage, errorMessage } from './js/izi-toast';
import { turnSmoothScroll } from './js/smooth-scroll';

// ======================================== EVENT LISTENERS
refs.imageSearchForm.addEventListener('submit', onImgSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadMoreImg);

// ======================================== PAGE VARIABLES

let currentPage = 0;
let limitPerPage = 15;
let totalImg;
let maxNumPage;

// ======================================= LIGHTBOX INITIALIZATION
let lightbox = new SimpleLightbox('.gallery a');

// ======================================== ON IMG SUBMIT
let searchImage;

async function onImgSubmit(event) {
  event.preventDefault();
  refs.gallery.innerHTML = '';
  hideEl(refs.loadMoreBtn);
  showEl(refs.loader);
  searchImage = event.currentTarget.elements.searchImage.value.trim('');
  // checking for empty fields
  if (searchImage === '') {
    errorMessage('Write what image you want to search for');
    return;
  }

  event.currentTarget.reset();
  currentPage = 1;

  try {
    const res = await findImages(searchImage, currentPage, limitPerPage);
    // checking if images are present
    if (res.data.totalHits === 0) {
      errorMessage('No images found');
      hideEl(refs.loader);
      return;
    }
    // rendering images
    const galleryMarkup = imagesRenderTemplate(res.data.hits);
    refs.gallery.innerHTML = galleryMarkup;
    // calculate num of img and the maximum possible page num
    totalImg = res.data.totalHits;
    maxNumPage = Math.ceil(res.data.totalHits / limitPerPage);

    // checking for the last page
    if (totalImg <= limitPerPage) {
      warningMessage(
        "You've reached the end of the collection. No more images are left"
      );
    } else {
      // adding load more btn
      showEl(refs.loadMoreBtn);
    }
    hideEl(refs.loader);
    lightbox.refresh();
  } catch (err) {
    errorMessage(`Error: ${err}`)
  }
}

// ================================================ ON LOAD MORE IMG

async function onLoadMoreImg() {
  hideEl(refs.loadMoreBtn);
  refs.loadMoreBtn.style.order = 4;
  refs.loader.style.order = 5;
  showEl(refs.loader);
 
  currentPage += 1;

  try {
    // making request
    const res = await findImages(searchImage, currentPage, limitPerPage);
    // rendering images
    const galleryMarkup = imagesRenderTemplate(res.data.hits);
    refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup);
    setTimeout(() => {
      turnSmoothScroll();
    }, 50);
    // checking for the last page
    if (currentPage >= maxNumPage || limitPerPage * currentPage >= totalImg) {
      warningMessage(
        "You've reached the end of the collection. No more images are left"
      );
    } else {
      // adding load more btn
      showEl(refs.loadMoreBtn);
    }
    hideEl(refs.loader);
    lightbox.refresh();
  } catch (err) {
    errorMessage(`Error: ${err}`)
  }
}
