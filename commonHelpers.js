import{a as S,i as y,S as M}from"./assets/vendor-b2578120.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const a={imageSearchForm:document.querySelector(".image-search-form"),gallery:document.querySelector(".images-gallery"),loader:document.querySelector(".loader-container"),loadMoreBtn:document.querySelector(".load-more-btn")};function m(e){e.classList.add("is-open")}function n(e){e.classList.remove("is-open")}async function w(e,r,s){const i=new URLSearchParams({key:"42878081-96b370588af70c81d3a302fb0",q:e,image_type:"photo",orientation:"horizontal",order:"latest",safesearch:!0,per_page:s,page:r}),t=await S.get(`https://pixabay.com/api/?${i}`);return console.log(t),t}function b(e){return e.map(B).join("")}function B({webformatURL:e,largeImageURL:r,tags:s,likes:i,views:t,downloads:o,comments:c}){return`<li class="gallery-item">
  <a class="image-link" href="${r}">
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
      <span class="tag-details">${c}</span>
    </div>
  </div>
</li>`}function T(e){y.warning({message:e,position:"topRight"})}function p(e){y.error({message:e,position:"topRight",messageColor:"#fafafb",messageSize:"16px",maxWidth:"432px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",progressBarColor:"rgb(181, 27, 27)"})}let u;function v(){u?u.refresh():u=new M(".gallery a")}let h=0;function x(){const r=document.querySelector(".gallery-item").getBoundingClientRect()*2;window.addEventListener("scroll",function(){let s=window.pageYOffset||document.documentElement.scrollTop;s>h?window.scrollBy(0,r):window.scrollBy(0,-r),h=s<=0?0:s},!1)}a.imageSearchForm.addEventListener("submit",I);a.loadMoreBtn.addEventListener("click",q);let l=1,d=15,f,L,g;function I(e){if(e.preventDefault(),a.gallery.innerHTML="",n(a.loadMoreBtn),m(a.loader),l=1,g=e.currentTarget.elements.searchImage.value.trim(),e.currentTarget.reset(),g===""){T("Write what image you want to search for"),n(a.loader);return}w(g,l,d).then(r=>{if(!r.data.totalHits){p("Sorry, there are no images matching your search query. Please try again!"),n(a.loader);return}f=r.data.totalHits,L=Math.ceil(f/d);const s=b(r.data.hits);a.gallery.innerHTML=s,l+=1,n(a.loader),v(),x()}).finally(()=>{!f<d&&(m(a.loadMoreBtn),p("We're sorry, but you've reached the end of search results"))})}function q(){if(a.loader.style.order=3,m(a.loader),l>L)return n(a.loadMoreBtn),n(a.loader),p("We're sorry, but you've reached the end of search results");w(g,l,d).then(e=>{if(e.data.totalHits>d){n(a.loadMoreBtn);return}const r=b(e.data.hits);a.gallery.insertAdjacentHTML("beforeend",r),n(a.loader),m(a.loadMoreBtn),l+=1,v()}).catch(e=>{console.log(e)})}
//# sourceMappingURL=commonHelpers.js.map
