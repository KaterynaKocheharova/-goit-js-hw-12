// ======================================= INLCUDING SIMPLE LIGHTBOX
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// ======================================== VAFRIABLES IMPORT
import { gallery } from './variables.js';

// ======================================== RENDERING IMAGES
export function renderImages(response) {
  try {
    let myLightboxGallery;
    const images = response.hits;
    // creating markup
    const galleryMarkup = images
      .map(
        ({
          webformatURL,
          largeImageURL,
          tags,
          likes,
          views,
          downloads,
          comments,
        }) =>
          `
        <li class="gallery-item">
          <a class="image-link" href="${largeImageURL}">
            <img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy"/>
          </a>
  
          <div class="tags-container">
            <div class="tag">
              <p class="tag-name">likes</p>
              <span class="tag-details">${likes}</span>
            </div>
            <div class="tag">
              <p class="tag-name">views</p>
              <span class="tag-details">${views}</span>
            </div>
            <div class="tag">
              <p class="tag-name">downloads</p>
              <span class="tag-details">${downloads}</span>
            </div>
            <div class="tag">
              <p class="tag-name">comments</p>
              <span class="tag-details">${comments}</span>
            </div>
          </div>
        </li>
        `
      )
      .join('');

    gallery.innerHTML = galleryMarkup;

    // ================================== ADDING SIMPLE LIGHTBOX
    if (!myLightboxGallery) {
      myLightboxGallery = new SimpleLightbox('.gallery a');
    } else {
      myLightboxGallery.refresh();
    }
  } catch {
    console.error('Error rendering images:', error);
    iziToast.error({
      message: 'Failed to render images. Please try again later.',
      position: 'topRight',
    });
  }
}
