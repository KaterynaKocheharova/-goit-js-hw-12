// ======================================= INCLUDING IZITOAST
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// ======================================= FUNCTIONS IMPORTS
import { findImages } from './js/pixabay.api';
import { renderImages } from './js/render-functions';

// ======================================= VARIABLES IMPORTS

import { gallery } from './js/variables';

// ======================================= FORM 
const imageSearchForm = document.querySelector('.image-search-form');
imageSearchForm.addEventListener('submit', handleImageSearchFormSubmit);

// ======================================== HANDLE FORM SUBMIT

function handleImageSearchFormSubmit(event) {
  event.preventDefault();

// ======================================== ADDING LOADER

  const loaderMarkup = `<span class="loader"></span>`;
  gallery.innerHTML = loaderMarkup;

  const imageToSearchFor =
    event.currentTarget.elements.searchImage.value.trim();

  if (imageToSearchFor === '') {
    iziToast.warning({
      message: 'Write what image you want to search for',
      position: 'topRight',
    });
    return;
  }

  event.currentTarget.reset();

  // ================================== MAKING REQUEST
  findImages(imageToSearchFor)
    .then(response => {
      if (!response.hits.length) {
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
      } else {
      // ============================== RENDERING IMAGES
        renderImages(response);
      }
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      iziToast.error({
        message: 'Failed to fetch images. Please try again later.',
        position: 'topRight',
      });
    });
}







