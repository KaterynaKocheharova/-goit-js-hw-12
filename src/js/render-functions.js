// ======================================== RENDER TEMPLATE

export function imagesRenderTemplate(imagesData) {
  return imagesData.map(imageTemplate).join('');
}

function imageTemplate({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  downloads,
  comments,
}) {
  return `<li class="gallery-item">
  <a class="image-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
      loading="lazy"
      width="360"
      height="152"
    />
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
</li>`;
}



