import{S as p,i as n}from"./assets/vendor-5b791d57.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function u(s){const a=new URLSearchParams({key:"42878081-96b370588af70c81d3a302fb0",q:s,image_type:"photo",orientation:"horizontal",order:"latest",safesearch:!0});return fetch(`https://pixabay.com/api/?${a}`).then(o=>{if(o.ok)return o.json();throw new Error("response.code")})}const l=document.querySelector(".images-gallery");function f(s){try{let a;const t=s.hits.map(({webformatURL:e,largeImageURL:r,tags:i,likes:c,views:g,downloads:m,comments:d})=>`
        <li class="gallery-item">
          <a class="image-link" href="${r}">
            <img class="gallery-image" src="${e}" alt="${i}" loading="lazy"/>
          </a>
  
          <div class="tags-container">
            <div class="tag">
              <p class="tag-name">likes</p>
              <span class="tag-details">${c}</span>
            </div>
            <div class="tag">
              <p class="tag-name">views</p>
              <span class="tag-details">${g}</span>
            </div>
            <div class="tag">
              <p class="tag-name">downloads</p>
              <span class="tag-details">${m}</span>
            </div>
            <div class="tag">
              <p class="tag-name">comments</p>
              <span class="tag-details">${d}</span>
            </div>
          </div>
        </li>
        `).join("");l.innerHTML=t,a?a.refresh():a=new p(".gallery a")}catch{console.error("Error rendering images:",error),iziToast.error({message:"Failed to render images. Please try again later.",position:"topRight"})}}const h=document.querySelector(".image-search-form");h.addEventListener("submit",y);function y(s){s.preventDefault();const a='<span class="loader"></span>';l.innerHTML=a;const o=s.currentTarget.elements.searchImage.value.trim();if(o===""){n.warning({message:"Write what image you want to search for",position:"topRight"});return}s.currentTarget.reset(),u(o).then(t=>{t.hits.length?f(t):n.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",maxWidth:"432px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",progressBarColor:"rgb(181, 27, 27)"})}).catch(t=>{console.error("Error fetching images:",t),n.error({message:"Failed to fetch images. Please try again later.",position:"topRight"})})}
//# sourceMappingURL=commonHelpers.js.map
