export function turnSmoothScroll() {
        const galleryItem = document.querySelector(".gallery-item");
        const itemHeight = galleryItem.getBoundingClientRect().height;
        window.scrollBy({
            top: itemHeight * 2,
            behavior: "smooth",
          });
}
  
