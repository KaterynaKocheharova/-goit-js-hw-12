import{a as L,i as p,S as h}from"./assets/vendor-47133a02.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const r={imageSearchForm:document.querySelector(".image-search-form"),gallery:document.querySelector(".images-gallery"),loader:document.querySelector(".loader-container"),loadMoreBtn:document.querySelector(".load-more-btn")};function m(t){t.classList.add("is-open")}function u(t){t.classList.remove("is-open")}async function y(t,e,s){const n=new URLSearchParams({key:"42878081-96b370588af70c81d3a302fb0",q:t,image_type:"photo",orientation:"horizontal",order:"latest",safesearch:!0,per_page:s,page:e});return await L.get(`https://pixabay.com/api/?${n}`)}function v(t){return t.map(w).join("")}function w({webformatURL:t,largeImageURL:e,tags:s,likes:n,views:a,downloads:o,comments:l}){return`<li class="gallery-item">
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
      <span class="tag-details">${o}</span>
    </div>
    <div class="tag">
      <p class="tag-name">comments</p>
      <span class="tag-details">${l}</span>
    </div>
  </div>
</li>`}function b(t){p.warning({message:t,position:"topRight"})}function S(t){p.error({message:t,position:"topRight",messageColor:"#fafafb",messageSize:"16px",maxWidth:"432px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",progressBarColor:"rgb(181, 27, 27)"})}r.imageSearchForm.addEventListener("submit",P);r.loadMoreBtn.addEventListener("click",x);let c=0,g=15,f,M,i,d;function P(t){if(t.preventDefault(),r.gallery.innerHTML="",d=t.currentTarget.elements.searchImage.value.trim(""),d===""){S("Write what image you want to search for");return}t.currentTarget.reset(),c=1,u(r.loadMoreBtn),m(r.loader),y(d,c,g).then(e=>{const s=v(e.data.hits);return r.gallery.innerHTML=s,e}).then(e=>{f=e.data.totalHits,M=Math.ceil(e.data.totalHits/g)}).catch(e=>{console.log(e)}).finally(()=>{f<=g?b("You've reached the end of the collection. No more images are left"):(m(r.loadMoreBtn),i?i.refresh():i=new h(".gallery a")),u(r.loader)})}function x(t){console.log(d),c+=1,u(r.loadMoreBtn),r.loader.style.order=3,m(r.loader),y(d,c,g).then(e=>{console.log(e);const s=v(e.data.hits);r.gallery.insertAdjacentHTML("beforeend",s)}).catch(e=>{console.log(e)}).finally(()=>{c>M?b("You've reached the end of the collection. No more images are left"):(m(r.loadMoreBtn),i?i.refresh():i=new h(".gallery a")),u(r.loader)})}
//# sourceMappingURL=commonHelpers.js.map
