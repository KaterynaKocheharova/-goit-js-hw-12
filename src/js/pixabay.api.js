// ============================================= INCLUDING IZITOAST
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// ============================================= MAKING REQUEST 
export function findImages(image) {

// ============================================ SEARCH PARAMS
  const imageSearchParams = new URLSearchParams({
    key: '42878081-96b370588af70c81d3a302fb0',
    q: image,
    image_type: 'photo',
    orientation: 'horizontal',
    order: 'latest',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${imageSearchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('response.code');
        return;
      } else {
        return response.json();
      }
    })
}
