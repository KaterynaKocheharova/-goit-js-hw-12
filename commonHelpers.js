import{a as w,i as f,S as L}from"./assets/vendor-47133a02.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const a={imageSearchForm:document.querySelector(".image-search-form"),gallery:document.querySelector(".images-gallery"),loader:document.querySelector(".loader-container"),loadMoreBtn:document.querySelector(".load-more-btn"),searchContainer:document.querySelector(".search-container")};function u(e){e.classList.add("is-open")}function l(e){e.classList.remove("is-open")}const S=w.create({baseURL:"https://pixabay.com/api/"});async function h(e,t,s){const i={key:"42878081-96b370588af70c81d3a302fb0",q:e,image_type:"photo",orientation:"horizontal",order:"latest",safesearch:!0,per_page:s,page:t};return await S.get("",{params:i})}function y(e){return e.map(B).join("")}function B({webformatURL:e,largeImageURL:t,tags:s,likes:i,views:r,downloads:o,comments:n}){return`<li class="gallery-item">
  <a class="image-link" href="${t}">
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
      <span class="tag-details">${r}</span>
    </div>
    <div class="tag">
      <p class="tag-name">downloads</p>
      <span class="tag-details">${o}</span>
    </div>
    <div class="tag">
      <p class="tag-name">comments</p>
      <span class="tag-details">${n}</span>
    </div>
  </div>
</li>`}function v(e){f.warning({message:e,position:"topRight"})}function d(e){f.error({message:e,position:"topRight",messageColor:"#fafafb",messageSize:"16px",maxWidth:"432px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",progressBarColor:"rgb(181, 27, 27)"})}function x(){const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}a.imageSearchForm.addEventListener("submit",I);a.loadMoreBtn.addEventListener("click",T);let c=0,g=100,p,b,M=new L(".gallery a"),m;async function I(e){if(e.preventDefault(),a.gallery.innerHTML="",l(a.loadMoreBtn),u(a.loader),m=e.currentTarget.elements.searchImage.value.trim(""),m===""){d("Write what image you want to search for");return}e.currentTarget.reset(),c=1;try{const t=await h(m,c,g);if(t.data.totalHits===0){d("No images found"),l(a.loader);return}const s=y(t.data.hits);a.gallery.innerHTML=s,p=t.data.totalHits,b=Math.ceil(t.data.totalHits/g),p<=g?v("You've reached the end of the collection. No more images are left"):u(a.loadMoreBtn),l(a.loader),M.refresh()}catch(t){d(`Error: ${t}`)}}async function T(){c+=1,l(a.loadMoreBtn),a.loader.style.order=5,a.loadMoreBtn.style.order=4,u(a.loader);try{const e=await h(m,c,g),t=y(e.data.hits);a.gallery.insertAdjacentHTML("beforeend",t),setTimeout(()=>{x()},50),c>b?v("You've reached the end of the collection. No more images are left"):u(a.loadMoreBtn),l(a.loader),M.refresh()}catch(e){d(`Error: ${e}`)}}
//# sourceMappingURL=commonHelpers.js.map
