
import axios from 'axios';

export async function findImages(image, page, limit) {

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
return response;
}
