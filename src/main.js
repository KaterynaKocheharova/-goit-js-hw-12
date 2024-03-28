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

// ======================================== PAGE

let currentPage = 0;
let limitPerPage = 100;
let totalImg;
let maxNumPage;
let lightbox = new SimpleLightbox('.gallery a');

// ======================================== ON IMG SUBMIT
let searchImage;

async function onImgSubmit(event) {
  event.preventDefault();
  refs.gallery.innerHTML = '';
  searchImage = event.currentTarget.elements.searchImage.value.trim('');
  // checking for empty fields
  if (searchImage === '') {
    errorMessage('Write what image you want to search for');
    return;
  }

  event.currentTarget.reset();
  currentPage = 1;

  hideEl(refs.loadMoreBtn);
  showEl(refs.loader);
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
  // tal num of img and the maximum possible page num
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
}

// ================================================ ON LOAD MORE IMG

async function onLoadMoreImg() {
  currentPage += 1;
  hideEl(refs.loadMoreBtn);

  refs.loader.style.order = 5;
  refs.loadMoreBtn.style.order = 4;
  showEl(refs.loader);

  // refs.loadMoreBtn.textContent = "Loading images, please wait";

  const res = await findImages(searchImage, currentPage, limitPerPage);
  // rendering images
  const galleryMarkup = imagesRenderTemplate(res.data.hits);
  refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup);
  setTimeout(() => {
    turnSmoothScroll();
  }, 50);
  // checking for the last page
  if (currentPage > maxNumPage) {
    warningMessage(
      "You've reached the end of the collection. No more images are left"
    );
  } else {
    // adding load more btn
    showEl(refs.loadMoreBtn);
  }
  hideEl(refs.loader);
  lightbox.refresh();
}
