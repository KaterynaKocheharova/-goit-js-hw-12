import{a as S,i as p,S as L}from"./assets/vendor-47133a02.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();const o={imageSearchForm:document.querySelector(".image-search-form"),gallery:document.querySelector(".images-gallery"),loader:document.querySelector(".loader-container"),loadMoreBtn:document.querySelector(".load-more-btn")};function m(t){t.classList.add("is-open")}function l(t){t.classList.remove("is-open")}async function h(t,e,s){const n=new URLSearchParams({key:"42878081-96b370588af70c81d3a302fb0",q:t,image_type:"photo",orientation:"horizontal",order:"latest",safesearch:!0,per_page:s,page:e});return await S.get(`https://pixabay.com/api/?${n}`)}function y(t){return t.map(w).join("")}function w({webformatURL:t,largeImageURL:e,tags:s,likes:n,views:a,downloads:r,comments:i}){return`<li class="gallery-item">
  <a class="image-link" href="${e}">
    <img
      class="gallery-image"
      src="${t}"
      alt="${s}"
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
      <span class="tag-details">${a}</span>
    </div>
    <div class="tag">
      <p class="tag-name">downloads</p>
      <span class="tag-details">${r}</span>
    </div>
    <div class="tag">
      <p class="tag-name">comments</p>
      <span class="tag-details">${i}</span>
    </div>
  </div>
</li>`}function v(t){p.warning({message:t,position:"topRight"})}function u(t){p.error({message:t,position:"topRight",messageColor:"#fafafb",messageSize:"16px",maxWidth:"432px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",progressBarColor:"rgb(181, 27, 27)"})}function P(){const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy(0,e*2)}o.imageSearchForm.addEventListener("submit",B);o.loadMoreBtn.addEventListener("click",I);let c=0,g=15,f,b,M=new L(".gallery a"),d;function B(t){if(t.preventDefault(),o.gallery.innerHTML="",d=t.currentTarget.elements.searchImage.value.trim(""),d===""){u("Write what image you want to search for");return}t.currentTarget.reset(),c=1,l(o.loadMoreBtn),m(o.loader),h(d,c,g).then(e=>{if(e.data.totalHits===0){u("No images found"),l(o.loader);return}const s=y(e.data.hits);return o.gallery.innerHTML=s,e}).then(e=>{f=e.data.totalHits,b=Math.ceil(e.data.totalHits/g)}).then(()=>{f<=g?v("You've reached the end of the collection. No more images are left"):m(o.loadMoreBtn),l(o.loader)}).catch(e=>{console.log(e)}).finally(()=>{M.refresh()})}function I(t){console.log(d),c+=1,l(o.loadMoreBtn),o.loader.style.order=3,m(o.loader),h(d,c,g).then(e=>{console.log(e);const s=y(e.data.hits);o.gallery.insertAdjacentHTML("beforeend",s),P()}).catch(e=>{console.log(e)}).finally(()=>{c>b?v("You've reached the end of the collection. No more images are left"):m(o.loadMoreBtn),l(o.loader),M.refresh()})}
//# sourceMappingURL=commonHelpers.js.map
