var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},c={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in c){var i=c[e];delete c[e];var a={id:e,exports:{}};return t[e]=a,i.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){c[e]=t},e.parcelRequired7c6=i),i("kyEFX").register(JSON.parse('{"l5gq4":"favorite-cocktail.27717a1c.js","hm5VY":"icons.9fef98d3.svg","7jf6y":"favorite-ingredients.24d6759b.js","lYlXK":"favorite-ingredients.afb4c120.js"}'));i("2shzp");var a,r=i("b7Ypn");r=i("b7Ypn");function s(e){const t=new URL(a);return e.map(((e,c)=>` \n        <li class="item-card-cocktails favorite-cocktails-dark-bg" data-index="${c}">\n            <img src="${e.drinkThumb}" class="img-card-cocktails" width="307" height="200" alt="${e.drink.slice(0,17)}">\n            <div class="wraper-card" >\n            <h2 class="name-card-cocktails favorite-cocktails-dark">${e.drink}</h2>\n            <p class="description-card-cocktails favorite-cocktails-dark">${e.description}</p>\n            \n            <ul class="list-btn-card">\n            <li class="item-btn-card">\n            <button type="button" class="btn-card-cocktails favorite-cocktails-dark favorite-cocktails-dark-bg">Learn more</button>\n            </li>\n            <li class="item-btn-card item-card-deleted">\n            <button type="button" class="btn-card-deleted favorite-cocktails-dark">\n             <svg class="icon-card-deleted "><use href=${t.pathname+"#icon-trash-01"}></use></svg>\n            </button>\n            </li>\n            </ul>\n            </div>\n           \n        </li>\n    `)).join("")}function o(e){const t=localStorage.getItem(e);try{if(t){const e=JSON.parse(t);0===e.length&&(localStorage.removeItem("cocktails"),r.refsM.erroreImg.classList.remove("is-hidden-img-favorite")),r.refsM.gellery.innerHTML=s(e)}else r.refsM.erroreImg.classList.remove("is-hidden-img-favorite")}catch(e){}}function n(e,t){const c=localStorage.getItem(e);try{const i=JSON.parse(c);i.splice(t,1);const a=JSON.stringify(i);localStorage.setItem(e,a)}catch(e){}}a=new URL(i("kyEFX").resolve("hm5VY"),import.meta.url).toString(),i("2UYQc"),i("8MCbW");var l;r=i("b7Ypn");function d(e,t){if(e.target.classList.contains("btn-card-deleted")){const c=e.target.closest(".item-card-cocktails");if(c){n(t,Array.from(c.parentNode.children).indexOf(c)),o(t),function(e){const t=e.querySelector(".name-card-cocktails").textContent;r.refsM.notify.textContent=`Your deleted favorites cocktails: ${t}`,r.refsM.notify.classList.remove("is-hidden-favorite"),setTimeout((()=>{r.refsM.notify.classList.add("is-hidden-favorite")}),2e3)}(c)}}}const f=document.body,g=document.getElementById("themeSwitch");"light"!==localStorage.getItem("switcher")&&localStorage.getItem("switcher")?(g.checked=!0,f.classList.toggle("dark"),g.classList.add("dark")):g.checked=!1,g.addEventListener("click",(()=>{g.classList.toggle("dark"),f.classList.toggle("dark"),"light"!==localStorage.getItem("switcher")&&localStorage.getItem("switcher")?localStorage.setItem("switcher","light"):localStorage.setItem("switcher","dark")}));o("cocktails"),null===(l=r.refsM.gellery)||void 0===l||l.addEventListener("click",(e=>{d(e,"cocktails")}));
//# sourceMappingURL=favorite-cocktail.27717a1c.js.map
