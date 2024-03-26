import{a as b,i as u}from"./assets/vendor-db34b893.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const a={imageSearchForm:document.querySelector(".image-search-form"),gallery:document.querySelector(".images-gallery"),loader:document.querySelector(".loader-container"),loadMoreBtn:document.querySelector(".load-more-btn")};function g(e){e.classList.add("is-open")}function c(e){e.classList.remove("is-open")}async function p(e,r,s){const i=new URLSearchParams({key:"42878081-96b370588af70c81d3a302fb0",q:e,image_type:"photo",orientation:"horizontal",order:"latest",safesearch:!0,per_page:s,page:r});return await b.get(`https://pixabay.com/api/?${i}`)}function f(e){return e.map(M).join("")}function M({webformatURL:e,largeImageURL:r,tags:s,likes:i,views:t,downloads:o,comments:l}){return`<li class="gallery-item">
  <a class="image-link" href="${r}">
    <img
      class="gallery-image"
      src="${e}"
      alt="${s}"
      loading="lazy"
      width="360"
      height="152"
    />
  </a>

  <div class="tags-container">
    <div class="tag">
      <p class="tag-name">likes</p>
      <span class="tag-details">${i}</span>
    </div>
    <div class="tag">
      <p class="tag-name">views</p>
      <span class="tag-details">${t}</span>
    </div>
    <div class="tag">
      <p class="tag-name">downloads</p>
      <span class="tag-details">${o}</span>
    </div>
    <div class="tag">
      <p class="tag-name">comments</p>
      <span class="tag-details">${l}</span>
    </div>
  </div>
</li>`}function L(e){u.warning({message:e,position:"topRight"})}function h(e){u.error({message:e,position:"topRight",messageColor:"#fafafb",messageSize:"16px",maxWidth:"432px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",progressBarColor:"rgb(181, 27, 27)"})}a.imageSearchForm.addEventListener("submit",S);a.loadMoreBtn.addEventListener("click",w);let n=1,y=100,m,v,d;function S(e){if(e.preventDefault(),d=e.currentTarget.elements.searchImage.value.trim(),a.gallery.innerHTML="",e.currentTarget.reset(),d===""){L("Write what image you want to search for");return}g(a.loader),c(a.loadMoreBtn),n=1,p(d,n,y).then(r=>{if(!r.data.totalHits){h("Sorry, there are no images matching your search query. Please try again!"),c(a.loadMoreBtn);return}m=r.data.totalHits-1,console.log(m),v=Math.ceil(m/15);const s=f(r.data.hits);a.gallery.innerHTML=s,n+=1,c(a.loader),g(a.loadMoreBtn)})}function w(){if(a.loader.style.order=3,g(a.loader),n>v){h("We're sorry, but you've reached the end of search results"),c(a.loadMoreBtn);return}p(d,n,y).then(e=>{const r=f(e.data.hits);a.gallery.insertAdjacentHTML("beforeend",r),c(a.loader),g(a.loadMoreBtn),n+=1}).catch(e=>{console.log(e)})}
//# sourceMappingURL=commonHelpers.js.map
