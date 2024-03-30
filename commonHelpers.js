import{a as w,i as p,S as L}from"./assets/vendor-47133a02.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const r={imageSearchForm:document.querySelector(".image-search-form"),gallery:document.querySelector(".images-gallery"),loader:document.querySelector(".loader-container"),loadMoreBtn:document.querySelector(".load-more-btn")};function m(e){e.classList.add("is-open")}function s(e){e.classList.remove("is-open")}const S=w.create({baseURL:"https://pixabay.com/api/"});async function f(e,a,n){const i={key:"42878081-96b370588af70c81d3a302fb0",q:e,image_type:"photo",orientation:"horizontal",order:"latest",safesearch:!0,per_page:n,page:a};return await S.get("",{params:i})}function h(e){const a=M(e);r.gallery.insertAdjacentHTML("beforeend",a)}function M(e){return e.map(x).join("")}function x({webformatURL:e,largeImageURL:a,tags:n,likes:i,views:t,downloads:o,comments:l}){return`<li class="gallery-item">
  <a class="image-link" href="${a}">
    <img
      class="gallery-image"
      src="${e}"
      alt="${n}"
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
</li>`}function B(e){p.warning({message:e,position:"topRight"})}function d(e){p.error({message:e,position:"topRight",messageColor:"#fafafb",messageSize:"16px",maxWidth:"432px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",progressBarColor:"rgb(181, 27, 27)"})}function I(){const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}r.imageSearchForm.addEventListener("submit",$);r.loadMoreBtn.addEventListener("click",P);let g,c=0,u=15,y=0,v=new L(".gallery a");async function $(e){if(e.preventDefault(),r.gallery.innerHTML="",m(r.loader),g=e.currentTarget.elements.searchImage.value.trim(""),g===""){d("Write what image you want to search for"),s(r.loader);return}e.currentTarget.reset(),c=1,s(r.loadMoreBtn),s(r.gallery);try{const a=await f(g,c,u);if(a.data.totalHits===0){d("No images found"),s(r.loader);return}h(a.data.hits),m(r.gallery),v.refresh(),y=Math.ceil(a.data.totalHits/u),b(r.loadMoreBtn)}catch(a){d(`Error: ${a}`)}s(r.loader)}async function P(){m(r.loader),c+=1;try{const e=await f(g,c,u);h(e.data.hits),v.refresh(),I(),b(r.loadMoreBtn)}catch(e){d(`Error: ${e}`)}s(r.loader)}function b(e){c>=y?(s(e),B("You've reached the end of the collection")):m(e)}
//# sourceMappingURL=commonHelpers.js.map
