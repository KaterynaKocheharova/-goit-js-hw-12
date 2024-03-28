import{a as S,i as f,S as w}from"./assets/vendor-47133a02.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const r={imageSearchForm:document.querySelector(".image-search-form"),gallery:document.querySelector(".images-gallery"),loader:document.querySelector(".loader-container"),loadMoreBtn:document.querySelector(".load-more-btn"),searchContainer:document.querySelector(".search-container")};function m(e){e.classList.add("is-open")}function l(e){e.classList.remove("is-open")}async function h(e,a,s){const i=new URLSearchParams({key:"42878081-96b370588af70c81d3a302fb0",q:e,image_type:"photo",orientation:"horizontal",order:"latest",safesearch:!0,per_page:s,page:a});return await S.get(`https://pixabay.com/api/?${i}`)}function y(e){return e.map(L).join("")}function L({webformatURL:e,largeImageURL:a,tags:s,likes:i,views:t,downloads:o,comments:n}){return`<li class="gallery-item">
  <a class="image-link" href="${a}">
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
      <span class="tag-details">${n}</span>
    </div>
  </div>
</li>`}function v(e){f.warning({message:e,position:"topRight"})}function u(e){f.error({message:e,position:"topRight",messageColor:"#fafafb",messageSize:"16px",maxWidth:"432px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",progressBarColor:"rgb(181, 27, 27)"})}function B(){const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}r.imageSearchForm.addEventListener("submit",P);r.loadMoreBtn.addEventListener("click",I);let c=0,d=100,p,b,M=new w(".gallery a"),g;async function P(e){if(e.preventDefault(),r.gallery.innerHTML="",g=e.currentTarget.elements.searchImage.value.trim(""),g===""){u("Write what image you want to search for");return}e.currentTarget.reset(),c=1,l(r.loadMoreBtn),m(r.loader);const a=await h(g,c,d);if(a.data.totalHits===0){u("No images found"),l(r.loader);return}const s=y(a.data.hits);r.gallery.innerHTML=s,p=a.data.totalHits,b=Math.ceil(a.data.totalHits/d),p<=d?v("You've reached the end of the collection. No more images are left"):m(r.loadMoreBtn),l(r.loader),M.refresh()}async function I(){c+=1,l(r.loadMoreBtn),r.loader.style.order=5,r.loadMoreBtn.style.order=4,m(r.loader);const e=await h(g,c,d),a=y(e.data.hits);r.gallery.insertAdjacentHTML("beforeend",a),setTimeout(()=>{B()},50),c>b?v("You've reached the end of the collection. No more images are left"):m(r.loadMoreBtn),l(r.loader),M.refresh()}
//# sourceMappingURL=commonHelpers.js.map
