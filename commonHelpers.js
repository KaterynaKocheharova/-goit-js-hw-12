import{a as S,i as h,S as M}from"./assets/vendor-b2578120.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const r={imageSearchForm:document.querySelector(".image-search-form"),gallery:document.querySelector(".images-gallery"),loader:document.querySelector(".loader-container"),loadMoreBtn:document.querySelector(".load-more-btn")};function g(e){e.classList.add("is-open")}function c(e){e.classList.remove("is-open")}async function y(e,a,s){const n=new URLSearchParams({key:"42878081-96b370588af70c81d3a302fb0",q:e,image_type:"photo",orientation:"horizontal",order:"latest",safesearch:!0,per_page:s,page:a}),t=await S.get(`https://pixabay.com/api/?${n}`);return console.log(t),t}function w(e){return e.map(B).join("")}function B({webformatURL:e,largeImageURL:a,tags:s,likes:n,views:t,downloads:o,comments:l}){return`<li class="gallery-item">
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
      <span class="tag-details">${n}</span>
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
</li>`}function T(e){h.warning({message:e,position:"topRight"})}function b(e){h.error({message:e,position:"topRight",messageColor:"#fafafb",messageSize:"16px",maxWidth:"432px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",progressBarColor:"rgb(181, 27, 27)"})}let m;function v(){m?m.refresh():m=new M(".gallery a")}let p=0;function x(){const a=document.querySelector(".gallery-item").getBoundingClientRect()*2;window.addEventListener("scroll",function(){let s=window.pageYOffset||document.documentElement.scrollTop;s>p?window.scrollBy(0,a):window.scrollBy(0,-a),p=s<=0?0:s},!1)}r.imageSearchForm.addEventListener("submit",I);r.loadMoreBtn.addEventListener("click",q);let i=1,f=100,u,L,d;function I(e){if(e.preventDefault(),d=e.currentTarget.elements.searchImage.value.trim(),r.gallery.innerHTML="",e.currentTarget.reset(),d===""){T("Write what image you want to search for");return}g(r.loader),c(r.loadMoreBtn),i=1,y(d,i,f).then(a=>{if(!a.data.totalHits){b("Sorry, there are no images matching your search query. Please try again!"),c(r.loadMoreBtn);return}u=a.data.totalHits,console.log(u),L=Math.ceil(u/f);const s=w(a.data.hits);r.gallery.innerHTML=s,i+=1,c(r.loader),g(r.loadMoreBtn),v(),x()})}function q(){if(r.loader.style.order=3,g(r.loader),i>=L)return c(r.loadMoreBtn),b("We're sorry, but you've reached the end of search results");y(d,i,f).then(e=>{const a=w(e.data.hits);r.gallery.insertAdjacentHTML("beforeend",a),c(r.loader),g(r.loadMoreBtn),i+=1,v()}).catch(e=>{console.log(e)})}
//# sourceMappingURL=commonHelpers.js.map
