// ============================================= INCLUDING AXIOS
import axios from 'axios';

// ============================================= MAKING REQUEST
export async function findImages(image, page, limit) {

// =========================================== SEARCH PARAMS
const imageSearchParams = new URLSearchParams({
  key: '42878081-96b370588af70c81d3a302fb0',
  q: image,
  image_type: 'photo',
  orientation: 'horizontal',
  order: 'latest',
  safesearch: true,
  per_page: limit,
  page: page,
});
const response = await axios.get(
  `https://pixabay.com/api/?${imageSearchParams}`
);
console.log(response)
return response;
}
