!function(){function t(t,e,n,a){Object.defineProperty(t,e,{get:n,set:a,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=e.parcelRequired7c6;null==r&&((r=function(t){if(t in n)return n[t].exports;if(t in a){var e=a[t];delete a[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){a[t]=e},e.parcelRequired7c6=r),r.register("iE7OH",(function(e,n){var a,r;t(e.exports,"register",(function(){return a}),(function(t){return a=t})),t(e.exports,"resolve",(function(){return r}),(function(t){return r=t}));var i={};a=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)i[e[n]]=t[e[n]]},r=function(t){var e=i[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),r.register("hrrt1",(function(e,n){t(e.exports,"getCocktails",(function(){return o})),t(e.exports,"getRandomCocktails",(function(){return c}));var a=r("dIxxU"),i="https://drinkify.b.goit.study/api/v1/";function o(t){var e={f:t};return a.default.get(i+"cocktails/search/",{params:e})}function c(t){var e={r:t};return a.default.get(i+"cocktails/",{params:e})}})),r.register("24ctr",(function(e,n){t(e.exports,"modalInstanceCoctail",(function(){return u}));var a=r("dIxxU"),i=r("hrrt1"),o=r("dyT35"),c=r("3NGmv"),l=document.querySelector(".deleted-notify"),s=new URL(r("1wvOr")),d="#icon-x";function u(t){(0,i.getCocktails)(t).then((function(t){var e,n=t.data[0].ingredients.map((function(t){return'<li class="item-modal-coctail-ingridients mw-text-third-dark" data-value='.concat(t.ingredientId,'>\n                    <p class="link-modal-coctail-ingridient mw-text-third-dark">\n                    ').concat(t.title,"\n                    </p>\n                    </li>")})).join(""),r=JSON.parse(localStorage.getItem("cocktails"))||[];e=(null==r?void 0:r.some((function(e){return e._id===t.data[0]._id})))?"REMOVE FROM FAVORITE":"ADD TO FAVORITE";var i=o.create('\n                    <div class="modal-coctail mw-modal-dark">\n                    <div class="photo-card-coctail dark-photo-card-coctail">\n                    <div class="photo-info">\n                    <img class="photo-coctail" src="'.concat(t.data[0].drinkThumb,'" alt="" title="" height="277" loading="lazy"/>\n                    <div class="info-modal-coctail">\n                    \n                    <h2 class="main-title-modal-coctail visually-hidden  mw-text-main-dark">').concat(t.data[0].drink,'</h2>\n\n                    <p class="title-modal-coctail-categories mw-text-main-dark">INGREDIENTS:</p>\n\n                    <p class="text-modal-coctail-type mw-text-secondary-dark">Per cocktail</p>\n\n                    <ul class="list-modal-coctail-ingridients">')+n+'</ul>\n                     </div></div>\n                    <p class="title-modal-coctail-categories mw-text-main-dark">INSTRUCTIONS:</p>\n                    \n                    <p class="paragrapg-modal-coctail mw-text-secondary-dark">\n                    '.concat(t.data[0].instructions,'\n                    </p>\n                    <div class="buttons">\n                    <button class="add-btn-modal-coctail" data-value=').concat(t.data[0]._id,">").concat(e,'</button>\n                    <button class="back-btn-modal-coctail mw-text-first-dark mw-btn-dark">Back</button>\n                    </div>\n                    <button type="button" class="modal-coctail-close-btn">\n            <svg class="icon-off mw-text-first-dark" width="24" height="24"><use href=').concat(s.pathname+d,"></use></svg>\n          </button>\n                    </div>\n                    </div>\n                    "));i.show(),document.querySelector(".basicLightbox").id="general";var u=document.querySelector(".add-btn-modal-coctail");u.addEventListener("click",(function(e){document.querySelector('.button-add-fav[data-name="foo"]');if("BUTTON"===e.target.nodeName||e.target.classList.contains("add-button-modal-coctail")){var n=e.target.dataset.value;document.querySelectorAll('[data-value="'.concat(n,'"]'))[0].classList.toggle("button-add-fav-active");var a=t.data[0],i=(r=JSON.parse(localStorage.getItem("cocktails"))||[]).findIndex((function(t){return t._id===n}));if(i<0)return r.push(a),u.innerHTML="REMOVE FROM FAVORITE",void localStorage.setItem("cocktails",JSON.stringify(r));r.splice(i,1),u.innerHTML="ADD TO FAVORITE",localStorage.setItem("cocktails",JSON.stringify(r)),(0,c.parseLocal)("cocktails")}}));var m=document.querySelector(".list-modal-coctail-ingridients"),f=document.querySelector(".back-btn-modal-coctail"),p=document.querySelector(".modal-coctail-close-btn");document.querySelector(".modal-coctail");function v(){i.close()}m.addEventListener("click",(function(t){t.preventDefault(),t.target.parentElement.classList.contains("item-modal-coctail-ingridients")&&function(t){return a.default.get("https://drinkify.b.goit.study/api/v1/ingredients/"+"".concat(t))}(t.target.closest(".item-modal-coctail-ingridients").dataset.value).then((function(t){if(!t.data[0].description||!t.data[0].type)return v(),e=t.data[0].title,l.textContent="На жаль дані тимчасово відсутні: ".concat(e),l.classList.remove("is-hidden-favorite"),void setTimeout((function(){l.classList.add("is-hidden-favorite")}),2e3);var e,n,a=JSON.parse(localStorage.getItem("favorites"))||[];n=(null==a?void 0:a.some((function(e){return e._id===t.data[0]._id})))?"REMOVE FROM FAVORITE":"ADD TO FAVORITE";var r=o.create('\n                    <div class="modal-ingredient mw-modal-dark">\n                    <div class="ingridient-card">\n                    <h2 class="title-modal-ingridient mw-text-main-dark">'.concat(t.data[0].title,'</h2>\n                    <p class="type-ingridient-modal-ingridient mw-text-secondary-dark">').concat(t.data[0].type,'</p>\n                    <div class="line mw-btn-dark"> </div>\n                    <p class="paragraph-modal-ingridient mw-text-secondary-dark"><span class="span-paragraph-modal-ingridient mw-text-main-dark">').concat(t.data[0].title,"</span> ").concat(t.data[0].description,'</p>\n                    <ul class="list-modal-ingridients ">\n                    <li class="item-modal-ingridients mw-text-third-dark">\n                    <p class="text-modal mw-text-third-dark">Type: ').concat(t.data[0].type,'</p>\n                    </li>\n                    <li class="item-modal-ingridients mw-text-third-dark">\n                    <p class="text-modal mw-text-third-dark">\n                    Country of origin: ').concat(t.data[0].country,'</p>\n                    </li>\n                    <li class="item-modal-ingridients mw-text-third-dark">\n                    <p class="text-modal mw-text-third-dark"> Alcohol by volume: ').concat(t.data[0].abv,'</p>\n                    </li>\n                    <li class="item-modal-ingridients mw-text-third-dark">\n                    <p class="text-modal mw-text-third-dark">Flavour: ').concat(t.data[0].flavour,'</p>\n                    </li>\n                    </ul>\n                    </div>\n                    <div class="buttons">\n                    <button class="add-btn-modal-ingridient" data-value=').concat(t.data[0]._id,">").concat(n,'</button>\n                    <button class="back-btn-modal-ingridient mw-text-first-dark mw-btn-dark">Back</button>\n                    </div>\n                    <button type="button" class="modal-ingredient-close-btn">\n            <svg class="icon-off mw-text-first-dark" width="24" height="24"><use href=').concat(s.pathname+d,"></use></svg>\n          </button>\n                    </div></div>"));r.show();var i=document.querySelector(".add-btn-modal-ingridient");i.addEventListener("click",(function(e){if("BUTTON"===e.target.nodeName||e.target.classList.contains("add-btn-modal-ingridient")){var n=e.target.dataset.value,r=t.data[0],o=(a=JSON.parse(localStorage.getItem("favorites"))||[]).findIndex((function(t){return t._id===n}));return o<0?(a.push(r),i.innerHTML="REMOVE FROM FAVORITE",void localStorage.setItem("favorites",JSON.stringify(a))):(a.splice(o,1),i.innerHTML="ADD TO FAVORITE",void localStorage.setItem("favorites",JSON.stringify(a)))}}));var c=document.querySelector(".back-btn-modal-ingridient"),u=document.querySelector(".modal-ingredient-close-btn");function m(){r.close()}c.addEventListener("click",m),u.addEventListener("click",m)}))})),f.addEventListener("click",v),p.addEventListener("click",v)}))}})),r.register("3NGmv",(function(e,n){t(e.exports,"parseLocal",(function(){return o})),t(e.exports,"removeItemFromLocalStorage",(function(){return c}));var a=r("lkBFd"),i=r("33B9a");function o(t){var e=localStorage.getItem(t);try{if(e){var n=JSON.parse(e);0===n.length&&(localStorage.removeItem("cocktails"),a.refsM.erroreImg.classList.remove("is-hidden-img-favorite")),(0,i.renderMarkupCardFav)(1,6,n,a.refsM.gellery,a.refsM.pagination)}else a.refsM.erroreImg.classList.remove("is-hidden-img-favorite")}catch(t){}}function c(t,e){var n=localStorage.getItem(t);try{var a=JSON.parse(n);a.splice(e,1);var r=JSON.stringify(a);localStorage.setItem(t,r)}catch(t){}}})),r.register("lkBFd",(function(e,n){t(e.exports,"refsM",(function(){return a}));var a={form:document.querySelector(".search-cocktails"),gellery:document.querySelector(".gellery"),notify:document.querySelector(".deleted-notify"),pagination:document.querySelector(".pagination-list-favorite"),erroreImg:document.querySelector(".alex-error-img-container "),titleFav:document.querySelector(".title-fav")}})),r.register("33B9a",(function(e,n){t(e.exports,"renderMarkupCardFav",(function(){return o}));var a=r("aaRFF"),i=r("lkBFd");function o(t,e,n,r,c){var l=(t-1)*e,s=l+e,d=n.slice(l,s),u=Math.ceil(n.length/e);(0,a.createPagination)(u,t,n,r,c,i.refsM.titleFav,o),r.innerHTML=d.map((function(t,e){var n=t.drink.split(" ").join("+");return'        \n         <li class="cocktail-item karina-dark-theme-bg item-card-cocktails " data-index="'.concat(e,'">\n            <img class="cocktail-img" src=').concat(t.drinkThumb," alt=").concat(t.drink,'>\n            <h3 class="cocktail-title karina-dark-theme">').concat(t.drink,'</h3>\n            <p class="cocktail-description karina-dark-theme">').concat(t.description,'</p>\n            <div class="button-div">\n            <button data-value=').concat(n,' class="button-learn-more karina-dark-theme-btn karina-dark-theme btn-learn-favorite-eduard">LEARN MORE</button>\n          <button data-value=').concat(t._id,' class="button-add-fav btn-card-deleted">\n           <svg\n              class="delete-icon"\n              xmlns="http://www.w3.org/2000/svg"\n              width="18"\n              height="18"\n              viewBox="0 0 18 18"\n              fill="none"\n            >\n              <path\n                d="M11 4.5V3.9C11 3.05992 11 2.63988 10.8365 2.31901C10.6927 2.03677 10.4632 1.8073 10.181 1.66349C9.86012 1.5 9.44008 1.5 8.6 1.5H7.4C6.55992 1.5 6.13988 1.5 5.81901 1.66349C5.53677 1.8073 5.3073 2.03677 5.16349 2.31901C5 2.63988 5 3.05992 5 3.9V4.5M6.5 8.625V12.375M9.5 8.625V12.375M1.25 4.5H14.75M13.25 4.5V12.9C13.25 14.1601 13.25 14.7902 13.0048 15.2715C12.789 15.6948 12.4448 16.039 12.0215 16.2548C11.5402 16.5 10.9101 16.5 9.65 16.5H6.35C5.08988 16.5 4.45982 16.5 3.97852 16.2548C3.55516 16.039 3.21095 15.6948 2.99524 15.2715C2.75 14.7902 2.75 14.1601 2.75 12.9V4.5"\n                stroke="#FDFDFF"\n                stroke-width="1.5"\n                stroke-linecap="round"\n                stroke-linejoin="round"\n              />\n            </svg>\n          </button>\n            </div>\n           </li>\n          \n          ')})).join("")}})),r.register("aaRFF",(function(e,n){t(e.exports,"createPagination",(function(){return l}));var a=r("5JgHl"),i=r("hBSW2"),o=!0,c=!0;function l(t,e,n,r,s,d,u,m){var f="",p=null,v=e-1,g=e+1;if(c||null==d||d.scrollIntoView({behavior:"smooth"}),n.length){c=!1,f+=e>1?'<li class="prev"><span>&#60</span></li>':'<li class="prev empty"><span>&#60</span></li>',e>2&&(f+='<li class="numb"><span>1</span></li>',e>3&&(f+='<li class="dots"><span>...</span></li>')),e>6&&(e===t?v-=2:e===t-1&&(v-=1),1===e?g+=2:2===e&&(g+=1));for(var k=v;k<=g;k+=1)k>t||(0===k&&(k+=1),p=e===k?"active-pagination":"",1!==t&&(f+='<li class="numb '.concat(p,' "><span>').concat(k,"</span></li>")));e<t-1&&(e<t-2&&(f+='<li class="dots"><span>...</span></li>'),f+='<li class="numb"><span>'.concat(t,"</span></li>")),f+=e<t?'<li class="next"><span>&#62</span></li>':'<li class="next empty"><span>&#62</span></li>',s.innerHTML=f;var h=document.querySelector(".prev"),b=document.querySelector(".next");h&&h.addEventListener("click",(function(){return y(e-1)})),b&&b.addEventListener("click",(function(){return y(e+1)})),document.querySelectorAll(".numb").forEach((function(t){t.addEventListener("click",(function(){return y(parseInt(t.innerText))}))})),o&&(document.addEventListener("keyup",(function(n){if("ArrowLeft"===n.key){if(1===e)return;y(e-=1)}if("ArrowRight"===n.key){if(e===t)return;y(e+=1)}})),o=!1)}else s.innerHTML="";function y(e){l(t,e,n,r,s,d),(0,a.renderMarkupCard)(e,(0,i.updateValueBasedOnScreenWidth)(),n,r,s),u&&u(e,6,n,r,s),m&&m(e,6,n,r,s)}}})),r.register("5JgHl",(function(e,n){t(e.exports,"renderMarkupCard",(function(){return o}));var a=r("aaRFF"),i=r("fJ3EV");function o(t,e,n,o,c){var l=(t-1)*e,s=l+e,d=n.slice(l,s),u=Math.ceil(n.length/e);(0,a.createPagination)(u,t,n,o,c,i.default.titileCocktail);var m=new URL(r("1wvOr")),f=JSON.parse(localStorage.getItem("cocktails"))||[];o.innerHTML=d.map((function(t){var e,n=null===(e=t.drink)||void 0===e?void 0:e.split(" ").join("+"),a=(null==f?void 0:f.some((function(e){return e._id===t._id})))?"button-add-fav-active":"";return'        \n         <li class="cocktail-item karina-dark-theme-bg">\n            <img class="cocktail-img" src='.concat(t.drinkThumb,' alt="').concat(t.drink,'">\n            <h3 class="cocktail-title karina-dark-theme">').concat(t.drink,'</h3>\n            <p class="cocktail-description karina-dark-theme">').concat(t.description,'</p>\n            <div class="button-div">\n            <button data-value=').concat(n,' class="button-learn-more karina-dark-theme-btn karina-dark-theme">LEARN MORE</button>\n          <button data-value=').concat(t._id,' class="button-add-fav ').concat(a,'">\n          <svg class="icon-add-fav"><use href=').concat(m.pathname+"#icon-heart","></use></svg>\n        </svg></button>\n            </div>\n           </li>\n          \n          ")})).join("")}})),r.register("fJ3EV",(function(e,n){t(e.exports,"default",(function(){return a}));var a={form:document.querySelector(".hero-search-form"),input:document.querySelector(".hero-form-input"),list:document.querySelector(".hero-search-cards"),searchButtonWrapper:document.querySelector(".button-search-wrapper-js"),buttonSpan:document.querySelector(".button-search-span-js"),searchDropdown:document.querySelector(".button-dropdown-js"),listPag:document.querySelector(".pagination-list"),titileCocktail:document.querySelector(".cocktail-main-title")}})),r.register("1wvOr",(function(t,e){t.exports=r("aNJCr").getBundleURL("akQyS")+r("iE7OH").resolve("d9SZC")})),r.register("aNJCr",(function(e,n){var a;t(e.exports,"getBundleURL",(function(){return a}),(function(t){return a=t}));var r={};function i(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}a=function(t){var e=r[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return i(t[2])}return"/"}(),r[t]=e),e}})),r.register("hBSW2",(function(e,n){function a(){if(window.innerWidth>=1280){return 9}return 8}t(e.exports,"updateValueBasedOnScreenWidth",(function(){return a}))})),r("iE7OH").register(JSON.parse('{"akQyS":"index.f64ba2aa.js","5UbS1":"favorite-cocktail.c60f634f.css","d9SZC":"icons.35462022.svg"}'))}();
//# sourceMappingURL=index.f64ba2aa.js.map
