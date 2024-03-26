import{a as g,i as d}from"./assets/vendor-db34b893.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();const s={imageSearchForm:document.querySelector(".image-search-form"),gallery:document.querySelector(".images-gallery"),loader:document.querySelector(".loader-container"),loadMoreBtn:document.querySelector(".load-more-btn")};function m(e){e.classList.add("is-open")}function l(e){e.classList.remove("is-open")}async function u(e){const r=new URLSearchParams({key:"42878081-96b370588af70c81d3a302fb0",q:e,image_type:"photo",orientation:"horizontal",order:"latest",safesearch:!0});return(await g.get(`https://pixabay.com/api/?${r}`)).data.hits}function p(e){return e.map(f).join("")}function f({webformatURL:e,largeImageURL:r,tags:o,likes:n,views:t,downloads:a,comments:i}){return`<li class="gallery-item">
  <a class="image-link" href="${r}">
    <img
      class="gallery-image"
      src="${e}"
      alt="${o}"
      loading="lazy"
      width="360"
      height="152"
    />
  </a>

  <div class="tags-container">
    <div class="tag">
      <p class="tag-name">likes</p>
      <span class="tag-details">${n}</span>
    </div>
    <div class="tag">
      <p class="tag-name">views</p>
      <span class="tag-details">${t}</span>
    </div>
    <div class="tag">
      <p class="tag-name">downloads</p>
      <span class="tag-details">${a}</span>
    </div>
    <div class="tag">
      <p class="tag-name">comments</p>
      <span class="tag-details">${i}</span>
    </div>
  </div>
</li>`}function h(e){d.warning({message:e,position:"topRight"})}function y(e){d.error({message:e,position:"topRight",messageColor:"#fafafb",messageSize:"16px",maxWidth:"432px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",progressBarColor:"rgb(181, 27, 27)"})}s.imageSearchForm.addEventListener("submit",v);let c;function v(e){if(e.preventDefault(),c=e.currentTarget.elements.searchImage.value.trim(),s.gallery.innerHTML="",e.currentTarget.reset(),c===""){h("Write what image you want to search for");return}m(s.loader),l(s.loadMoreBtn),u(c).then(r=>{if(!r.length){y("Sorry, there are no images matching your search query. Please try again!"),l(s.loadMoreBtn);return}const o=p(r);s.gallery.innerHTML=o,l(s.loader)})}
//# sourceMappingURL=commonHelpers.js.map
