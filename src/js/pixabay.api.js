
import axios from 'axios';

const Axios = axios.create({
  baseURL: "https://pixabay.com/api/"
})




export async function findImages(image, page, limit) {

const params = {
  key: '42878081-96b370588af70c81d3a302fb0',
  q: image,
  image_type: 'photo',
  orientation: 'horizontal',
  order: 'latest',
  safesearch: true,
  per_page: limit,
  page: page,
};

const response = await Axios.get(
  ``, { params }
);

return response;
}
