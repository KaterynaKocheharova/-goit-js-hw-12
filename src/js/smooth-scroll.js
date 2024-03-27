export function turnSmoothScroll() {
const galleryItem = document.querySelector(".gallery-item");
const itemHeight = galleryItem.getBoundingClientRect().height;

window.scrollBy(0, itemHeight * 2);
}
  
