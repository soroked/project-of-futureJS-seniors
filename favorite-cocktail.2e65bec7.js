var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},c={},s=e.parcelRequired7c6;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in c){var s=c[e];delete c[e];var o={id:e,exports:{}};return t[e]=o,s.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){c[e]=t},e.parcelRequired7c6=s),s("kyEFX").register(JSON.parse('{"l5gq4":"favorite-cocktail.2e65bec7.js","hm5VY":"icons.21e32ba9.svg","2KzFz":"index.4e8e6f5a.js","lYlXK":"favorite-ingredients.afb4c120.js"}'));s("2shzp");var o,i=s("b7Ypn");i=s("b7Ypn");function a(e){const t=new URL(o);return e.map(((e,c)=>` \n        <li class="item-card-cocktails favorite-cocktails-dark-bg" data-index="${c}">\n            <img src="${e.drinkThumb}" class="img-card-cocktails" width="307" height="200" alt="${e.drink.slice(0,17)}">\n            <div class="wraper-card" >\n            <h2 class="name-card-cocktails favorite-cocktails-dark">${e.drink}</h2>\n            <p class="description-card-cocktails favorite-cocktails-dark">${e.description}</p>\n            \n            <ul class="list-btn-card">\n            <li class="item-btn-card">\n            <button type="button" class="btn-card-cocktails favorite-cocktails-dark favorite-cocktails-dark-bg">Learn more</button>\n            </li>\n            <li class="item-btn-card item-card-deleted">\n            <button type="button" class="btn-card-deleted favorite-cocktails-dark">\n             <svg class="icon-card-deleted "><use href=${t.pathname+"#icon-trash-01"}></use></svg>\n            </button>\n            </li>\n            </ul>\n            </div>\n           \n        </li>\n    `)).join("")}function r(e){const t=localStorage.getItem(e);try{if(t){console.log("Не пустой локал");const e=JSON.parse(t);0===e.length&&(console.log("Пусто после удаления"),localStorage.removeItem("cocktails"),i.refsM.erroreImg.classList.remove("is-hidden-img-favorite")),i.refsM.gellery.innerHTML=a(e)}else i.refsM.erroreImg.classList.remove("is-hidden-img-favorite"),console.log("Пустой локал")}catch(e){console.log(e)}}function n(e,t){const c=localStorage.getItem(e);try{const s=JSON.parse(c);s.splice(t,1);const o=JSON.stringify(s);localStorage.setItem(e,o)}catch(e){console.log(e)}}o=new URL(s("kyEFX").resolve("hm5VY"),import.meta.url).toString(),s("2UYQc"),s("8MCbW");var l;i=s("b7Ypn");function d(e,t){if(e.target.classList.contains("btn-card-deleted")){const c=e.target.closest(".item-card-cocktails");if(c){n(t,Array.from(c.parentNode.children).indexOf(c)),r(t),function(e){const t=e.querySelector(".name-card-cocktails").textContent;i.refsM.notify.textContent=`Your deleted favorites cocktails: ${t}`,i.refsM.notify.classList.remove("is-hidden-favorite"),setTimeout((()=>{i.refsM.notify.classList.add("is-hidden-favorite")}),2e3)}(c)}}}const f=document.body,g=document.getElementById("themeSwitch");"light"===localStorage.getItem("switcher")?g.checked=!1:(g.checked=!0,f.classList.toggle("dark"),g.classList.add("dark")),g.addEventListener("click",(()=>{g.classList.toggle("dark"),f.classList.toggle("dark"),"light"===localStorage.getItem("switcher")?localStorage.setItem("switcher","dark"):localStorage.setItem("switcher","light")}));r("cocktails"),null===(l=i.refsM.gellery)||void 0===l||l.addEventListener("click",(e=>{d(e,"cocktails")}));
//# sourceMappingURL=favorite-cocktail.2e65bec7.js.map
