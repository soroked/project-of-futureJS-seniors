!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequired7c6;function r(e){return'\n    <li class="ingredient-card ingredient-dark-card" data-value='.concat(e._id,'>\n      <h2 class="ingredient-header favorite-ingredients-dark">').concat(e.title,'</h2>\n      <p class="alcoholic-ing alcoholic-dark-ing">').concat(e.type,'</p>\n      <p class="ingredient-description favorite-ingredients-dark">').concat(e.description,'</p>\n      <div class="ingredient-btns">\n      <button class="ingredient-learn-more-btn favorite-ingredients-dark learn-more-btn add-to-favorites openLearnMore" data-id="').concat(e._id,'">Learn More</button>\n      <button class="delete-btn" data-id="').concat(e._id,'">\n        <svg\n              class="delete-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              width="18"\n              height="18"\n              viewBox="0 0 18 18"\n              fill="none"\n            >\n              <path\n                d="M11 4.5V3.9C11 3.05992 11 2.63988 10.8365 2.31901C10.6927 2.03677 10.4632 1.8073 10.181 1.66349C9.86012 1.5 9.44008 1.5 8.6 1.5H7.4C6.55992 1.5 6.13988 1.5 5.81901 1.66349C5.53677 1.8073 5.3073 2.03677 5.16349 2.31901C5 2.63988 5 3.05992 5 3.9V4.5M6.5 8.625V12.375M9.5 8.625V12.375M1.25 4.5H14.75M13.25 4.5V12.9C13.25 14.1601 13.25 14.7902 13.0048 15.2715C12.789 15.6948 12.4448 16.039 12.0215 16.2548C11.5402 16.5 10.9101 16.5 9.65 16.5H6.35C5.08988 16.5 4.45982 16.5 3.97852 16.2548C3.55516 16.039 3.21095 15.6948 2.99524 15.2715C2.75 14.7902 2.75 14.1601 2.75 12.9V4.5"\n                stroke="#FDFDFF"\n                stroke-width="1.5"\n                stroke-linecap="round"\n                stroke-linejoin="round"\n              />\n            </svg>\n      </button>\n      </div>\n    </li>\n  ')}null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,i.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=i),i("6JpON");var a=i("6NpaF"),o=document.querySelector(".not-found-container"),d=document.querySelector(".ingredients-gallery"),s=document.body,c=document.getElementById("themeSwitch");"light"===localStorage.getItem("switcher")?c.checked=!1:(c.checked=!0,s.classList.toggle("dark"),c.classList.add("dark")),c.addEventListener("click",(function(){c.classList.toggle("dark"),s.classList.toggle("dark"),"light"===localStorage.getItem("switcher")?localStorage.setItem("switcher","dark"):localStorage.setItem("switcher","light")}));var l=JSON.parse(localStorage.getItem("favorites"));0===l.length?o.classList.remove("fav-ingr-is-hidden"):(o.classList.add("fav-ingr-is-hidden"),l.forEach((function(e){var t=r(e);d.innerHTML+=t}))),d.addEventListener("click",(function(e){l=JSON.parse(localStorage.getItem("favorites"));var t=e.target;t.classList.contains("delete-icon")&&(t=t.closest(".delete-btn"));if(t.classList.contains("add-to-favorites")){var n=t.getAttribute("data-id"),i=l.find((function(e){return e._id===n}));i&&(0,a.addToFavorites)(i)}else if(t.classList.contains("delete-btn")){var r=t.getAttribute("data-id"),d=l.findIndex((function(e){return e._id===r}));if(-1!==d){var s=(0,a.removeFromFavoritesByIndex)(d);t.closest(".ingredient-card").remove(),s||o.classList.remove("fav-ingr-is-hidden")}}else if(t.classList.contains("learn-more-btn")){var c=t.getAttribute("data-id");console.log("IngredientId:",c)}}))}();
//# sourceMappingURL=favorite-ingredients.46a26da2.js.map
