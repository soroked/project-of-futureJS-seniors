function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},n.parcelRequired7c6=o),o.register("kyEFX",(function(t,n){var r,a;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},a=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("kyEFX").register(JSON.parse('{"5ZPII":"index.dc684f68.js","4f0jT":"hero-error-mobile.0d2f4064.png","7OJhJ":"hero-error-tablet.15d5f5cf.png","5UbS1":"favorite-cocktail.82fbbb00.css","lYlXK":"favorite-ingredients.bcbe486f.js","2KzFz":"index.53bacea7.js"}'));var i,s=o("b2XdZ"),l=o("2UYQc"),c=o("8MCbW");function u(e,t,n){var r,a,o,i,s;function l(){var c=Date.now()-i;c<t&&c>=0?r=setTimeout(l,t-c):(r=null,n||(s=e.apply(o,a),o=a=null))}null==t&&(t=100);var c=function(){o=this,a=arguments,i=Date.now();var c=n&&!r;return r||(r=setTimeout(l,t)),c&&(s=e.apply(o,a),o=a=null),s};return c.clear=function(){r&&(clearTimeout(r),r=null)},c.flush=function(){r&&(s=e.apply(o,a),o=a=null,clearTimeout(r),r=null)},c}u.debounce=u,i=u;var d,f=o("gwRpK");d=new URL(o("kyEFX").resolve("4f0jT"),import.meta.url).toString();const p=new URL(d);var v;v=new URL(o("kyEFX").resolve("7OJhJ"),import.meta.url).toString();const g=new URL(v),m=`<div class="error-img-container"><picture>\n  <source media="(min-width: 768px)"\n  type="image/webp"\n  srcset="${g}" >\n\n  <source media="(min-width: 768px)"\n  type="image/png"\n  srcset="${g}" >\n\n  <source media="(min-width: 320px)"\n  type="image/webp"\n  srcset="${p}" >\n\n  <source media="(min-width: 320px)"\n  type="image/png"\n  srcset="${p}" >\n\n  <img class="hero-error-img" src="${p}" alt="cocktails" >\n  </picture>\n  <p class="hero-error-text hero-dark">Sorry, we <span class="hero-text-accent">didn’t find</span> any cocktail for you</p>\n  </div>`;var b=o("9mNu8");f.default.form.addEventListener("submit",L),f.default.searchDropdown.addEventListener("click",L);let h=[];window.addEventListener("load",c.updateValueBasedOnScreenWidth),window.addEventListener("resize",t(i)(c.updateValueBasedOnScreenWidth,300)),window.addEventListener("load",L);let w=!0;async function L(e){var t,n;e.preventDefault();let r="";if(!(null===(t=e.target.classList)||void 0===t?void 0:t.contains("button-list-js"))){"BUTTON"===e.target.nodeName?r=e.target.dataset.value:"FORM"===e.target.nodeName&&(r=null===(n=e.currentTarget.elements)||void 0===n?void 0:n.search.value.trim());try{let e=null;w?(e=await(0,s.getRandomCocktails)((0,c.updateValueBasedOnScreenWidth)()),w=!1):(f.default.titileCocktail.innerHTML="Searching results",e=await(0,s.getCocktails)(r)),h=e.data;let t=[];t.push(e.data),(0,l.renderMarkupCard)(1,(0,c.updateValueBasedOnScreenWidth)(),...t,f.default.list,f.default.listPag,f.default.titileCocktail);document.querySelector(".hero-search-cards").addEventListener("click",(function(e){if(e.target.classList.contains("button-learn-more")){const t=e.target.dataset.value;return(0,b.modalInstanceCoctail)(t.replaceAll("+"," "))}}))}catch(e){f.default.listPag.innerHTML="",f.default.list.innerHTML=m,f.default.titileCocktail.scrollIntoView({behavior:"smooth",block:"start"})}finally{f.default.form.reset(),f.default.buttonSpan.innerHTML="A"}}}var S;document.querySelector(".hero-search-cards").addEventListener("click",(function(e){if("use"===e.target.nodeName||e.target.classList.contains("button-add-fav")||e.target.classList.contains("icon-add-fav")){const t=e.target.closest(".button-add-fav"),n=t.dataset.value,r=h.find((e=>e._id===n)),a=JSON.parse(localStorage.getItem("cocktails"))||[],o=a.findIndex((e=>e._id===n));if(o<0)return t.classList.add("button-add-fav-active"),a.push(r),void localStorage.setItem("cocktails",JSON.stringify(a));t.classList.remove("button-add-fav-active"),a.splice(o,1),localStorage.setItem("cocktails",JSON.stringify(a))}}));const y={searchButtonWrapper:document.querySelector(".button-search-wrapper-js"),searchButton:document.querySelector(".button-search-js"),searchDropdown:document.querySelector(".button-dropdown-js"),buttonListEl:document.querySelector(".button-list-js"),buttonSpan:document.querySelector(".button-search-span-js")},E=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"];function k(e,t,n){return'<div class="button-rows">'+e.slice(t,n).map((e=>`<button class="button-item" data-value=${e}>${e}</button>`)).join("")+"</div>"}const T=k(E,0,14),H=k(E,14,27),O=k(E,27),_=k(E,0,19),x=k(E,19);y.buttonListEl&&(y.buttonListEl.innerHTML=T+H+O+_+x),null===(S=y.searchButtonWrapper)||void 0===S||S.addEventListener("click",(function(e){if("BUTTON"===e.target.nodeName)return y.buttonSpan.innerHTML=e.target.dataset.value,y.searchDropdown.classList.toggle("hidden"),void y.searchButtonWrapper.classList.toggle("active");e.currentTarget.classList.contains("button-search-wrapper-js")&&(y.searchDropdown.classList.toggle("hidden"),y.searchButtonWrapper.classList.toggle("active"))})),o("9mNu8");
//# sourceMappingURL=index.dc684f68.js.map