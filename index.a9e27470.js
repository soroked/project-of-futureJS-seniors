var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},e={},n=t.parcelRequired7c6;null==n&&((n=function(t){if(t in a)return a[t].exports;if(t in e){var n=e[t];delete e[t];var i={id:t,exports:{}};return a[t]=i,n.call(i.exports,i,i.exports),i.exports}var d=new Error("Cannot find module '"+t+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(t,a){e[t]=a},t.parcelRequired7c6=n),n.register("9mNu8",(function(t,a){var e,i,d,o;e=t.exports,i="modalInstanceCoctail",d=function(){return g},Object.defineProperty(e,i,{get:d,set:o,enumerable:!0,configurable:!0});var l=n("2shzp"),s=n("b2XdZ"),c=n("9B8F0");n("2rjAp");const r=new URL(n("gGYkG")),m="#icon-x";let u="";function g(t){u!==t&&(u=t,(0,s.getCocktails)(t).then((t=>{const a=t.data[0].ingredients.map((t=>`<li class="item-modal-coctail-ingridients mw-text-third-dark" data-value=${t.ingredientId}>\n                    <p class="link-modal-coctail-ingridient mw-text-third-dark">\n                    ${t.title}\n                    </p>\n                    </li>`)).join("");let e=JSON.parse(localStorage.getItem("cocktails"))||[],n="ADD TO FAVORITE";n=(null==e?void 0:e.some((a=>a._id===t.data[0]._id)))?"REMOVE FROM FAVORITE":"ADD TO FAVORITE";const i=c.create(`\n                    <div class="modal-coctail mw-modal-dark">\n                    <div class="photo-card-coctail dark-photo-card-coctail">\n                    <div class="photo-info">\n                    <img class="photo-coctail" src="${t.data[0].drinkThumb}" alt="" title="" height="277" loading="lazy"/>\n                    <div class="info-modal-coctail">\n                    \n                    <h2 class="main-title-modal-coctail visually-hidden  mw-text-main-dark">${t.data[0].drink}</h2>\n\n                    <p class="title-modal-coctail-categories mw-text-main-dark">INGREDIENTS:</p>\n\n                    <p class="text-modal-coctail-type mw-text-secondary-dark">Per cocktail</p>\n\n                    <ul class="list-modal-coctail-ingridients">`+a+`</ul>\n                     </div></div>\n                    <p class="title-modal-coctail-categories mw-text-main-dark">INSTRUCTIONS:</p>\n                    \n                    <p class="paragrapg-modal-coctail mw-text-secondary-dark">\n                    ${t.data[0].instructions}\n                    </p>\n                    <div class="buttons">\n                    <button class="add-btn-modal-coctail" data-value=${t.data[0]._id}>${n}</button>\n                    <button class="back-btn-modal-coctail mw-text-first-dark mw-btn-dark">Back</button>\n                    </div>\n                    <button type="button" class="modal-coctail-close-btn">\n            <svg class="icon-off mw-text-first-dark" width="24" height="24"><use href=${r.pathname+m}></use></svg>\n          </button>\n                    </div>\n                    </div>\n                    `);i.show();document.querySelector(".basicLightbox").id="general";const d=document.querySelector(".add-btn-modal-coctail");d.addEventListener("click",(function(a){if("BUTTON"===a.target.nodeName||a.target.classList.contains("add-button-modal-coctail")){const n=a.target.dataset.value,i=t.data[0];e=JSON.parse(localStorage.getItem("cocktails"))||[];const o=e.findIndex((t=>t._id===n));if(o<0)return e.push(i),d.innerHTML="REMOVE FROM FAVORITE",void localStorage.setItem("cocktails",JSON.stringify(e));e.splice(o,1),d.innerHTML="ADD TO FAVORITE",localStorage.setItem("cocktails",JSON.stringify(e))}}));document.querySelector("button-add-fav");const o=document.querySelector(".list-modal-coctail-ingridients"),s=document.querySelector(".back-btn-modal-coctail"),u=document.querySelector(".modal-coctail-close-btn"),g=document.querySelector(".modal-coctail");function p(){i.close()}o.addEventListener("click",(function(t){if(t.preventDefault(),t.target.parentElement.classList.contains("item-modal-coctail-ingridients")){const a=t.target.closest(".item-modal-coctail-ingridients").dataset.value;g.classList.add("is-hidden-modal"),function(t){return l.default.get(`https://drinkify.b.goit.study/api/v1/ingredients/${t}`)}(a).then((t=>{let a=JSON.parse(localStorage.getItem("favorites"))||[],e="ADD TO FAVORITE";e=(null==a?void 0:a.some((a=>a._id===t.data[0]._id)))?"REMOVE FROM FAVORITE":"ADD TO FAVORITE";const n=c.create(`\n                    <div class="modal-ingredient mw-modal-dark">\n                    <div class="ingridient-card">\n                    <h2 class="title-modal-ingridient mw-text-main-dark">${t.data[0].title}</h2>\n                    <p class="type-ingridient-modal-ingridient mw-text-secondary-dark">${t.data[0].type}</p>\n                    <div class="line mw-btn-dark"> </div>\n                    <p class="paragraph-modal-ingridient mw-text-secondary-dark"><span class="span-paragraph-modal-ingridient mw-text-main-dark">${t.data[0].title}</span> ${t.data[0].description}</p>\n                    <ul class="list-modal-ingridients ">\n                    <li class="item-modal-ingridients mw-text-third-dark">\n                    <p class="text-modal mw-text-third-dark">Type: ${t.data[0].type}</p>\n                    </li>\n                    <li class="item-modal-ingridients mw-text-third-dark">\n                    <p class="text-modal mw-text-third-dark">\n                    Country of origin: ${t.data[0].country}</p>\n                    </li>\n                    <li class="item-modal-ingridients mw-text-third-dark">\n                    <p class="text-modal mw-text-third-dark"> Alcohol by volume: ${t.data[0].abv}</p>\n                    </li>\n                    <li class="item-modal-ingridients mw-text-third-dark">\n                    <p class="text-modal mw-text-third-dark">Flavour: ${t.data[0].flavour}</p>\n                    </li>\n                    </ul>\n                    </div>\n                    <div class="buttons">\n                    <button class="add-btn-modal-ingridient" data-value=${t.data[0]._id}>${e}</button>\n                    <button class="back-btn-modal-ingridient mw-text-first-dark mw-btn-dark">Back</button>\n                    </div>\n                    <button type="button" class="modal-ingredient-close-btn">\n            <svg class="icon-off mw-text-first-dark" width="24" height="24"><use href=${r.pathname+m}></use></svg>\n          </button>\n                    </div></div>\n                    `);n.show();const i=document.querySelector(".add-btn-modal-ingridient");i.addEventListener("click",(function(e){if("BUTTON"===e.target.nodeName||e.target.classList.contains("add-btn-modal-ingridient")){const n=e.target.dataset.value,d=t.data[0];a=JSON.parse(localStorage.getItem("favorites"))||[];const o=a.findIndex((t=>t._id===n));return o<0?(a.push(d),i.innerHTML="REMOVE FROM FAVORITE",void localStorage.setItem("favorites",JSON.stringify(a))):(a.splice(o,1),i.innerHTML="ADD TO FAVORITE",void localStorage.setItem("favorites",JSON.stringify(a)))}}));const d=document.querySelector(".back-btn-modal-ingridient"),o=document.querySelector(".modal-ingredient-close-btn");document.querySelector(".add-btn-modal-ingridient");function l(){n.close(),g.classList.remove("is-hidden-modal")}d.addEventListener("click",l),o.addEventListener("click",l)}))}})),s.addEventListener("click",p),u.addEventListener("click",p)})))}})),n.register("gGYkG",(function(t,a){t.exports=new URL(n("kyEFX").resolve("hm5VY"),import.meta.url).toString()})),n("kyEFX").register(JSON.parse('{"2KzFz":"index.a9e27470.js","5UbS1":"favorite-cocktail.fd5cafb4.css","hm5VY":"icons.35462022.svg"}'));
//# sourceMappingURL=index.a9e27470.js.map
