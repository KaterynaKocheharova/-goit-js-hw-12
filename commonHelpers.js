import{a as S,i as p,S as L}from"./assets/vendor-47133a02.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();const o={imageSearchForm:document.querySelector(".image-search-form"),gallery:document.querySelector(".images-gallery"),loader:document.querySelector(".loader-container"),loadMoreBtn:document.querySelector(".load-more-btn"),searchContainer:document.querySelector(".search-container")};function m(e){e.classList.add("is-open")}function l(e){e.classList.remove("is-open")}async function h(e,t,s){const n=new URLSearchParams({key:"42878081-96b370588af70c81d3a302fb0",q:e,image_type:"photo",orientation:"horizontal",order:"latest",safesearch:!0,per_page:s,page:t});return await S.get(`https://pixabay.com/api/?${n}`)}function y(e){return e.map(w).join("")}function w({webformatURL:e,largeImageURL:t,tags:s,likes:n,views:a,downloads:r,comments:i}){return`<li class="gallery-item">
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
</li>`}function v(e){p.warning({message:e,position:"topRight"})}function u(e){p.error({message:e,position:"topRight",messageColor:"#fafafb",messageSize:"16px",maxWidth:"432px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",progressBarColor:"rgb(181, 27, 27)"})}function B(){const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}o.imageSearchForm.addEventListener("submit",P);o.loadMoreBtn.addEventListener("click",I);let c=0,d=15,f,b,M=new L(".gallery a"),g;function P(e){if(e.preventDefault(),o.gallery.innerHTML="",g=e.currentTarget.elements.searchImage.value.trim(""),g===""){u("Write what image you want to search for");return}e.currentTarget.reset(),c=1,l(o.loadMoreBtn),m(o.loader),h(g,c,d).then(t=>{if(t.data.totalHits===0){u("No images found"),l(o.loader);return}const s=y(t.data.hits);return o.gallery.innerHTML=s,t}).then(t=>{f=t.data.totalHits,b=Math.ceil(t.data.totalHits/d)}).then(()=>{f<=d?v("You've reached the end of the collection. No more images are left"):m(o.loadMoreBtn),l(o.loader)}).catch(t=>{console.log(t)}).finally(()=>{M.refresh()})}function I(){c+=1,l(o.loadMoreBtn),o.loader.style.order=5,o.loadMoreBtn.style.order=4,m(o.loader),h(g,c,d).then(e=>{console.log(e);const t=y(e.data.hits);o.gallery.insertAdjacentHTML("beforeend",t),B()}).catch(e=>{console.log(e)}).finally(()=>{c>b?v("You've reached the end of the collection. No more images are left"):m(o.loadMoreBtn),l(o.loader),M.refresh()})}
//# sourceMappingURL=commonHelpers.js.map
