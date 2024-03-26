let lastScrollTop = 0;
export function smoothScroll() {
    const galleryItem = document.querySelector(".gallery-item")
    const scrollHeight = galleryItem.getBoundingClientRect() * 2;
    window.addEventListener('scroll', function() {
        let st = window.pageYOffset || document.documentElement.scrollTop; 
        if (st > lastScrollTop){
            window.scrollBy(0, scrollHeight); // Scroll down
        } else {
            window.scrollBy(0, -scrollHeight); // Scroll up
        }
        lastScrollTop = st <= 0 ? 0 : st; 
    }, false);
}