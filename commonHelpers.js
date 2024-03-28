import{a as w,i as f,S as L}from"./assets/vendor-47133a02.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const r={imageSearchForm:document.querySelector(".image-search-form"),gallery:document.querySelector(".images-gallery"),loader:document.querySelector(".loader-container"),loadMoreBtn:document.querySelector(".load-more-btn")};function u(e){e.classList.add("is-open")}function l(e){e.classList.remove("is-open")}const S=w.create({baseURL:"https://pixabay.com/api/"});async function h(e,t,s){const i={key:"42878081-96b370588af70c81d3a302fb0",q:e,image_type:"photo",orientation:"horizontal",order:"latest",safesearch:!0,per_page:s,page:t};return await S.get("",{params:i})}function y(e){return e.map(B).join("")}function B({webformatURL:e,largeImageURL:t,tags:s,likes:i,views:a,downloads:o,comments:n}){return`<li class="gallery-item">
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
      <span class="tag-details">${a}</span>
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
</li>`}function v(e){f.warning({message:e,position:"topRight"})}function d(e){f.error({message:e,position:"topRight",messageColor:"#fafafb",messageSize:"16px",maxWidth:"432px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",progressBarColor:"rgb(181, 27, 27)"})}function x(){const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}r.imageSearchForm.addEventListener("submit",I);r.loadMoreBtn.addEventListener("click",T);let c=0,g=15,p,b,M=new L(".gallery a"),m;async function I(e){if(e.preventDefault(),r.gallery.innerHTML="",l(r.loadMoreBtn),u(r.loader),m=e.currentTarget.elements.searchImage.value.trim(""),m===""){d("Write what image you want to search for");return}e.currentTarget.reset(),c=1;try{const t=await h(m,c,g);if(t.data.totalHits===0){d("No images found"),l(r.loader);return}const s=y(t.data.hits);r.gallery.innerHTML=s,p=t.data.totalHits,b=Math.ceil(t.data.totalHits/g),p<=g?v("You've reached the end of the collection. No more images are left"):u(r.loadMoreBtn),l(r.loader),M.refresh()}catch(t){d(`Error: ${t}`)}}async function T(){l(r.loadMoreBtn),r.loadMoreBtn.style.order=4,r.loader.style.order=5,u(r.loader),c+=1;try{const e=await h(m,c,g),t=y(e.data.hits);r.gallery.insertAdjacentHTML("beforeend",t),setTimeout(()=>{x()},50),c>b?v("You've reached the end of the collection. No more images are left"):u(r.loadMoreBtn),l(r.loader),M.refresh()}catch(e){d(`Error: ${e}`)}}
//# sourceMappingURL=commonHelpers.js.map
