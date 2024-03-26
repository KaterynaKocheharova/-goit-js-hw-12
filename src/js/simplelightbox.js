// ======================================= INLCUDING SIMPLE LIGHTBOX
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let myLightboxGallery;

export function handleLightbox() {
    if (!myLightboxGallery) {
      myLightboxGallery = new SimpleLightbox('.gallery a');
    } else {
      myLightboxGallery.refresh();
    }
}

