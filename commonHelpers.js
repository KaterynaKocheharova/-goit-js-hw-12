import{a as g,i as d}from"./assets/vendor-b9f84ab9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const s={imageSearchForm:document.querySelector(".image-search-form"),gallery:document.querySelector(".images-gallery"),loader:document.querySelector(".loader-container"),loadMoreBtn:document.querySelector(".load-more-btn")};function m(a){a.classList.add("is-open")}function l(a){a.classList.remove("is-open")}async function u(a){const r=new URLSearchParams({key:"42878081-96b370588af70c81d3a302fb0",q:a,image_type:"photo",orientation:"horizontal",order:"latest",safesearch:!0});return(await g.get(`https://pixabay.com/api/?${r}`)).data.hits}function p(a){return a.map(f).join("")}function f({webformatURL:a,largeImageURL:r,tags:o,likes:n,views:e,downloads:t,comments:i}){return`<li class="gallery-item">
  <a class="image-link" href="${r}">
    <img
      class="gallery-image"
      src="${a}"
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
      <span class="tag-details">${e}</span>
    </div>
    <div class="tag">
      <p class="tag-name">downloads</p>
      <span class="tag-details">${t}</span>
    </div>
    <div class="tag">
      <p class="tag-name">comments</p>
      <span class="tag-details">${i}</span>
    </div>
  </div>
</li>`}s.imageSearchForm.addEventListener("submit",h);let c;function h(a){if(a.preventDefault(),c=a.currentTarget.elements.searchImage.value.trim(),s.gallery.innerHTML="",a.currentTarget.reset(),c===""){d.warning({message:"Write what image you want to search for",position:"topRight"});return}m(s.loader),l(s.loadMoreBtn),u(c).then(async r=>{if(!r.length){d.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",maxWidth:"432px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",progressBarColor:"rgb(181, 27, 27)"}),s.gallery.innerHTML="",l(s.loadMoreBtn);return}const o=await p(r);s.gallery.insertAdjacentHTML("beforeend",o),l(s.loader),s.loader.style.order="3"})}
//# sourceMappingURL=commonHelpers.js.map
