!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},r=t.parcelRequired7c6;null==r&&((r=function(t){if(t in e)return e[t].exports;if(t in n){var r=n[t];delete n[t];var i={id:t,exports:{}};return e[t]=i,r.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){n[t]=e},t.parcelRequired7c6=r),r.register("bpxeT",(function(t,e){"use strict";function n(t,e,n,r,i,a,o){try{var c=t[a](o),l=c.value}catch(t){return void n(t)}c.done?e(l):Promise.resolve(l).then(r,i)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(i,a){var o=t.apply(e,r);function c(t){n(o,i,a,c,l,"next",t)}function l(t){n(o,i,a,c,l,"throw",t)}c(void 0)}))}}})),r.register("2TvXO",(function(t,e){var n=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var i=e&&e.prototype instanceof v?e:v,a=Object.create(i.prototype),o=new _(r||[]);return a._invoke=function(t,e,n){var r=u;return function(i,a){if(r===h)throw new Error("Generator is already running");if(r===m){if("throw"===i)throw a;return R()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var c=O(o,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===u)throw r=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var l=d(t,e,n);if("normal"===l.type){if(r=n.done?m:f,l.arg===p)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=m,n.method="throw",n.arg=l.arg)}}}(t,n,o),a}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var u="suspendedStart",f="suspendedYield",h="executing",m="completed",p={};function v(){}function g(){}function y(){}var w={};l(w,a,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(N([])));x&&x!==n&&r.call(x,a)&&(w=x);var k=y.prototype=v.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function n(i,a,o,c){var l=d(t[i],t,a);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==typeof u&&r.call(u,"__await")?e.resolve(u.__await).then((function(t){n("next",t,o,c)}),(function(t){n("throw",t,o,c)})):e.resolve(u).then((function(t){s.value=t,o(s)}),(function(t){return n("throw",t,o,c)}))}c(l.arg)}var i;this._invoke=function(t,r){function a(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(a,a):a()}}function O(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,O(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var i=d(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,p;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function N(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function n(){for(;++i<t.length;)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}return{next:R}}function R(){return{value:e,done:!0}}return g.prototype=y,l(k,"constructor",y),l(y,"constructor",g),g.displayName=l(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,c,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},E(L.prototype),l(L.prototype,o,(function(){return this})),t.AsyncIterator=L,t.async=function(e,n,r,i,a){void 0===a&&(a=Promise);var o=new L(s(e,n,r,i),a);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},E(k),l(k,c,"Generator"),l(k,a,(function(){return this})),l(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=N,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return c.type="throw",c.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(l&&s){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;T(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:N(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})),r.register("24ctr",(function(t,e){var n,i,a,o;n=t.exports,i="modalInstanceCoctail",a=function(){return m},Object.defineProperty(n,i,{get:a,set:o,enumerable:!0,configurable:!0});var c=r("dIxxU"),l=r("hrrt1"),s=r("dyT35"),d=r("6NpaF"),u=new URL(r("1wvOr")),f="#icon-x";var h="";function m(t){h!==t&&(h=t,(0,l.getCocktails)(t).then((function(t){var e,n=t.data[0].ingredients.map((function(t){return'<li class="item-modal-coctail-ingridients mw-text-third-dark" data-value='.concat(t.ingredientId,'>\n                    <p class="link-modal-coctail-ingridient mw-text-third-dark">\n                    ').concat(t.title,"\n                    </p>\n                    </li>")})).join(""),r=JSON.parse(localStorage.getItem("cocktails"))||[];e=(null==r?void 0:r.some((function(e){return e._id===t.data[0]._id})))?"REMOVE FROM FAVORITE":"ADD TO FAVORITE";var i=s.create('\n                    <div class="modal-coctail mw-modal-dark">\n                    <div class="photo-card-coctail dark-photo-card-coctail">\n                    <div class="photo-info">\n                    <img class="photo-coctail" src="'.concat(t.data[0].drinkThumb,'" alt="" title="" height="277" loading="lazy"/>\n                    <div class="info-modal-coctail">\n                    \n                    <h2 class="main-title-modal-coctail visually-hidden  mw-text-main-dark">').concat(t.data[0].drink,'</h2>\n\n                    <p class="title-modal-coctail-categories mw-text-main-dark">INGREDIENTS:</p>\n\n                    <p class="text-modal-coctail-type mw-text-secondary-dark">Per cocktail</p>\n\n                    <ul class="list-modal-coctail-ingridients">')+n+'</ul>\n                     </div></div>\n                    <p class="title-modal-coctail-categories mw-text-main-dark">INSTRUCTIONS:</p>\n                    \n                    <p class="paragrapg-modal-coctail mw-text-secondary-dark">\n                    '.concat(t.data[0].instructions,'\n                    </p>\n                    <div class="buttons">\n                    <button class="add-btn-modal-coctail" data-value=').concat(t.data[0]._id,">").concat(e,'</button>\n                    <button class="back-btn-modal-coctail mw-text-first-dark mw-btn-dark">Back</button>\n                    </div>\n                    <button type="button" class="modal-coctail-close-btn">\n            <svg class="icon-off mw-text-first-dark" width="24" height="24"><use href=').concat(u.pathname+f,"></use></svg>\n          </button>\n                    </div>\n                    </div>\n                    "));i.show(),document.querySelector(".basicLightbox").id="general";var a=document.querySelector(".add-btn-modal-coctail");a.addEventListener("click",(function(e){if("BUTTON"===e.target.nodeName||e.target.classList.contains("add-button-modal-coctail")){var n=e.target.dataset.value,i=t.data[0],o=(r=JSON.parse(localStorage.getItem("cocktails"))||[]).findIndex((function(t){return t._id===n}));if(o<0)return r.push(i),a.innerHTML="REMOVE FROM FAVORITE",void localStorage.setItem("cocktails",JSON.stringify(r));r.splice(o,1),a.innerHTML="ADD TO FAVORITE",localStorage.setItem("cocktails",JSON.stringify(r))}}));var o=document.querySelector("button-add-fav");console.log(o);var l=document.querySelector(".list-modal-coctail-ingridients"),h=document.querySelector(".back-btn-modal-coctail"),m=document.querySelector(".modal-coctail-close-btn"),p=document.querySelector(".modal-coctail");function v(){i.close()}l.addEventListener("click",(function(t){if(t.preventDefault(),t.target.parentElement.classList.contains("item-modal-coctail-ingridients")){var e=t.target.closest(".item-modal-coctail-ingridients").dataset.value;p.classList.add("is-hidden-modal"),function(t){return c.default.get("https://drinkify.b.goit.study/api/v1/ingredients/"+"".concat(t))}(e).then((function(t){var e=s.create('\n                    <div class="modal-ingredient mw-modal-dark">\n                    <div class="ingridient-card">\n                    <h2 class="title-modal-ingridient mw-text-main-dark">'.concat(t.data[0].title,'</h2>\n                    <p class="type-ingridient-modal-ingridient mw-text-secondary-dark">').concat(t.data[0].type,'</p>\n                    <div class="line mw-btn-dark"> </div>\n                    <p class="paragraph-modal-ingridient mw-text-secondary-dark"><span class="span-paragraph-modal-ingridient mw-text-main-dark">').concat(t.data[0].title,"</span> ").concat(t.data[0].description,'</p>\n                    <ul class="list-modal-ingridients ">\n                    <li class="item-modal-ingridients mw-text-third-dark">\n                    <p class="text-modal mw-text-third-dark">Type: ').concat(t.data[0].type,'</p>\n                    </li>\n                    <li class="item-modal-ingridients mw-text-third-dark">\n                    <p class="text-modal mw-text-third-dark">\n                    Country of origin: ').concat(t.data[0].country,'</p>\n                    </li>\n                    <li class="item-modal-ingridients mw-text-third-dark">\n                    <p class="text-modal mw-text-third-dark"> Alcohol by volume: ').concat(t.data[0].abv,'</p>\n                    </li>\n                    <li class="item-modal-ingridients mw-text-third-dark">\n                    <p class="text-modal mw-text-third-dark">Flavour: ').concat(t.data[0].flavour,'</p>\n                    </li>\n                    </ul>\n                    </div>\n                    <div class="buttons">\n                    <button class="add-btn-modal-ingridient">ADD TO FAVORITE</button>\n                    <button class="back-btn-modal-ingridient mw-text-first-dark mw-btn-dark">Back</button>\n                    </div>\n                    <button type="button" class="modal-ingredient-close-btn">\n            <svg class="icon-off mw-text-first-dark" width="24" height="24"><use href=').concat(u.pathname+f,"></use></svg>\n          </button>\n                    </div></div>\n                    "));e.show();var n=document.querySelector(".back-btn-modal-ingridient"),r=document.querySelector(".modal-ingredient-close-btn");function i(){e.close(),p.classList.remove("is-hidden-modal")}document.querySelector(".add-btn-modal-ingridient").addEventListener("click",(function(e){(0,d.addToFavorites)(t.data[0])})),n.addEventListener("click",i),r.addEventListener("click",i)}))}})),h.addEventListener("click",v),m.addEventListener("click",v)})))}})),r.register("1wvOr",(function(t,e){t.exports=r("aNJCr").getBundleURL("akQyS")+r("iE7OH").resolve("d9SZC")})),r("iE7OH").register(JSON.parse('{"akQyS":"index.782ae2eb.js","5UbS1":"favorite-cocktail.558106db.css","d9SZC":"icons.35462022.svg"}'))}();
//# sourceMappingURL=index.782ae2eb.js.map
