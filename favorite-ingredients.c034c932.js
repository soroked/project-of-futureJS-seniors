var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},a=t.parcelRequired7c6;null==a&&((a=function(t){if(t in e)return e[t].exports;if(t in n){var a=n[t];delete n[t];var i={id:t,exports:{}};return e[t]=i,a.call(i.exports,i,i.exports),i.exports}var d=new Error("Cannot find module '"+t+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(t,e){n[t]=e},t.parcelRequired7c6=a);var i=a("2shzp");a("b2XdZ");var d=a("9B8F0"),r=a("2rjAp");function l(t){(function(t){return i.default.get(`https://drinkify.b.goit.study/api/v1/ingredients/${t}`)})(t).then((t=>{const e=d.create(`\n                    <div class="modal modal-ingridient mw-modal-dark">\n                    <div class="ingridient-card">\n                    <h2 class="title-modal-ingridient mw-text-main-dark">${t.data[0].title}</h2>\n                    <p class="type-ingridient-modal-ingridient mw-text-secondary-dark">${t.data[0].type}</p>\n                    <div class="line mw-btn-dark"> </div>\n                    <p class="paragraph-modal-ingridient mw-text-secondary-dark"><span class="span-paragraph-modal-ingridient mw-text-main-dark">${t.data[0].title}</span> ${t.data[0].description}</p>\n                    <ul class="list-modal-ingridients ">\n                    <li class="item-modal-ingridients mw-text-third-dark">\n                    <p class="text-modal mw-text-third-dark">Type: ${t.data[0].type}</p>\n                    </li>\n                    <li class="item-modal-ingridients mw-text-third-dark">\n                    <p class="text-modal mw-text-third-dark">\n                    Country of origin: ${t.data[0].country}</p>\n                    </li>\n                    <li class="item-modal-ingridients mw-text-third-dark">\n                    <p class="text-modal mw-text-third-dark"> Alcohol by volume: ${t.data[0].abv}</p>\n                    </li>\n                    <li class="item-modal-ingridients mw-text-third-dark">\n                    <p class="text-modal mw-text-third-dark">Flavour: ${t.data[0].flavour}</p>\n                    </li>\n                    </ul>\n                    </div>\n                    <div class="buttons">\n                    <button class="add-btn-modal-ingridient">ADD TO FAVORITE</button>\n                    <button class="back-btn-modal-ingridient mw-text-main-dark mw-btn-dark ">Back</button>\n                    </div>\n                    </div></div>\n                    `);e.show();let n=JSON.parse(localStorage.getItem("favorites"))||[],a="ADD TO FAVORITE";a=(null==n?void 0:n.some((e=>e._id===t.data[0]._id)))?"REMOVE FROM FAVORITE":"ADD TO FAVORITE";const i=document.querySelector(".add-btn-modal-ingredient");i.addEventListener("click",(function(e){if(console.log("asd"),"BUTTON"===e.target.nodeName||e.target.classList.contains("add-btn-modal-ingredient")){const a=e.target.dataset.value,d=t.data[0];n=JSON.parse(localStorage.getItem("favorites"))||[];const r=n.findIndex((t=>t._id===a));if(r<0)return n.push(d),i.innerHTML="REMOVE FROM FAVORITE",void localStorage.setItem("favorites",JSON.stringify(n));n.splice(r,1),i.innerHTML="ADD TO FAVORITE",localStorage.setItem("favorites",JSON.stringify(n))}}));const l=document.querySelector(".back-btn-modal-ingridient");document.querySelector(".add-btn-modal-ingridient").addEventListener("click",(e=>{(0,r.addToFavorites)(t.data[0])})),l.addEventListener("click",(function(){e.close()}))}))}document.querySelector(".ingredients-gallery").addEventListener("click",(function(t){if("BUTTON"!==t.target.nodeName||t.target.classList.contains("delete-btn"))return;l(t.target.dataset.id)}));
//# sourceMappingURL=favorite-ingredients.c034c932.js.map
