!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var i=t[e];delete t[e];var a={id:e,exports:{}};return n[e]=a,i.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=i);var a=i("6NpaF"),r=i("aaRFF");function o(e,n,t,i,a){var d=(e-1)*n,s=d+n,l=t.slice(d,s),c=Math.ceil(t.length/n);(0,r.createPagination)(c,e,t,i,a,o),i.innerHTML=l.map((function(e){return'\n    <li class="ingredient-card ingredient-dark-card" data-value='.concat(e._id,'>\n      <h2 class="ingredient-header favorite-ingredients-dark">').concat(e.title,'</h2>\n      <p class="alcoholic-ing alcoholic-dark-ing">').concat(e.type,'</p>\n      <p class="ingredient-description favorite-ingredients-dark">').concat(e.description,'</p>\n      <div class="ingredient-btns">\n      <button class="ingredient-learn-more-btn favorite-ingredients-dark learn-more-btn add-to-favorites openLearnMore" data-id="').concat(e._id,'">Learn More</button>\n      <button class="delete-btn" data-id="').concat(e._id,'">\n        <svg\n              class="delete-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              width="18"\n              height="18"\n              viewBox="0 0 18 18"\n              fill="none"\n            >\n              <path\n                d="M11 4.5V3.9C11 3.05992 11 2.63988 10.8365 2.31901C10.6927 2.03677 10.4632 1.8073 10.181 1.66349C9.86012 1.5 9.44008 1.5 8.6 1.5H7.4C6.55992 1.5 6.13988 1.5 5.81901 1.66349C5.53677 1.8073 5.3073 2.03677 5.16349 2.31901C5 2.63988 5 3.05992 5 3.9V4.5M6.5 8.625V12.375M9.5 8.625V12.375M1.25 4.5H14.75M13.25 4.5V12.9C13.25 14.1601 13.25 14.7902 13.0048 15.2715C12.789 15.6948 12.4448 16.039 12.0215 16.2548C11.5402 16.5 10.9101 16.5 9.65 16.5H6.35C5.08988 16.5 4.45982 16.5 3.97852 16.2548C3.55516 16.039 3.21095 15.6948 2.99524 15.2715C2.75 14.7902 2.75 14.1601 2.75 12.9V4.5"\n                stroke="#FDFDFF"\n                stroke-width="1.5"\n                stroke-linecap="round"\n                stroke-linejoin="round"\n              />\n            </svg>\n      </button>\n      </div>\n    </li>\n  ')})).join("")}var d=document.querySelector(".not-found-container"),s=document.querySelector(".ingredients-gallery"),l=document.querySelector(".pagination-list-ing"),c=JSON.parse(localStorage.getItem("favorites"));0===c.length?d.classList.remove("fav-ingr-is-hidden"):(d.classList.add("fav-ingr-is-hidden"),o(1,6,c,s,l)),s.addEventListener("click",(function(e){c=JSON.parse(localStorage.getItem("favorites"));var n=e.target;n.classList.contains("delete-icon")&&(n=n.closest(".delete-btn"));if(n.classList.contains("add-to-favorites")){var t=n.getAttribute("data-id"),i=c.find((function(e){return e._id===t}));i&&(0,a.addToFavorites)(i)}else if(n.classList.contains("delete-btn")){var r=n.getAttribute("data-id"),g=c.findIndex((function(e){return e._id===r}));if(-1!==g){var f=(0,a.removeFromFavoritesByIndex)(g);n.closest(".ingredient-card").remove(),f||d.classList.remove("fav-ingr-is-hidden")}}else if(n.classList.contains("learn-more-btn"))n.getAttribute("data-id");o(1,6,c=JSON.parse(localStorage.getItem("favorites")),s,l),c.length||location.reload()}))}();
//# sourceMappingURL=favorite-ingredients.4f9c9ac7.js.map
