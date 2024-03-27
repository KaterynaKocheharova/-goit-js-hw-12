import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// ======================================= IMPORTS
import { refs } from './js/elements';
import { showEl, hideEl } from './js/is-open';
import { findImages } from './js/pixabay.api';
import { imagesRenderTemplate } from './js/render-functions';
import { warningMessage, errorMessage } from './js/izi-toast';

// ======================================== EVENT LISTENERS
refs.imageSearchForm.addEventListener('submit', onImgSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadMoreImg);

// ======================================== PAGE

let currentPage = 0;
let limitPerPage = 15;
let totalImg;
let maxNumPage;
let lightbox = new SimpleLightbox('.gallery a');

// ======================================== ON IMG SUBMIT
let searchImage;

function onImgSubmit(event) {
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
  findImages(searchImage, currentPage, limitPerPage)
    .then(res => {
      // rendering images
      const galleryMarkup = imagesRenderTemplate(res.data.hits);
      refs.gallery.innerHTML = galleryMarkup;
      return res;
    })
    // calculating the total num of img and the maximum possible page num
    .then(res => {
      totalImg = res.data.totalHits;
      maxNumPage = Math.ceil(res.data.totalHits / limitPerPage);
    })
    .catch(error => {
      console.log(error);
    })
    // checking for the last page
    .finally(() => {
      if (totalImg <= limitPerPage) {
        warningMessage(
          "You've reached the end of the collection. No more images are left"
        );
      } else {
        // adding load more btn
        showEl(refs.loadMoreBtn);
        if (!lightbox) {
          lightbox = new SimpleLightbox('.gallery a');
        } else {
          lightbox.refresh();
        }
      }
      hideEl(refs.loader);
    });
}

// ================================================ ON LOAD MORE IMG

function onLoadMoreImg(event) {
console.log(searchImage);
  currentPage += 1;
  hideEl(refs.loadMoreBtn);
  refs.loader.style.order = 3;
  showEl(refs.loader);

  findImages(searchImage, currentPage, limitPerPage)
    .then(res => {
      console.log(res)
      // rendering images
      const galleryMarkup = imagesRenderTemplate(res.data.hits);
      refs.gallery.insertAdjacentHTML("beforeend", galleryMarkup);
    })
    .catch(error => {
      console.log(error);
    })
    // checking for the last page
    .finally(() => {
      if (currentPage > maxNumPage) {
        warningMessage(
          "You've reached the end of the collection. No more images are left"
        );
      } else {
        // adding load more btn
        showEl(refs.loadMoreBtn);
        lightbox.refresh();
      }
      hideEl(refs.loader);
    });
}
