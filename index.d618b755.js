!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},r=t.parcelRequired7c6;null==r&&((r=function(t){if(t in e)return e[t].exports;if(t in n){var r=n[t];delete n[t];var a={id:t,exports:{}};return e[t]=a,r.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){n[t]=e},t.parcelRequired7c6=r),r.register("bpxeT",(function(t,e){"use strict";function n(t,e,n,r,a,i,o){try{var c=t[i](o),l=c.value}catch(t){return void n(t)}c.done?e(l):Promise.resolve(l).then(r,a)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(a,i){var o=t.apply(e,r);function c(t){n(o,a,i,c,l,"next",t)}function l(t){n(o,a,i,c,l,"throw",t)}c(void 0)}))}}})),r.register("2TvXO",(function(t,e){var n=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var a=e&&e.prototype instanceof v?e:v,i=Object.create(a.prototype),o=new _(r||[]);return i._invoke=function(t,e,n){var r=u;return function(a,i){if(r===h)throw new Error("Generator is already running");if(r===m){if("throw"===a)throw i;return I()}for(n.method=a,n.arg=i;;){var o=n.delegate;if(o){var c=L(o,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===u)throw r=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var l=d(t,e,n);if("normal"===l.type){if(r=n.done?m:f,l.arg===p)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=m,n.method="throw",n.arg=l.arg)}}}(t,n,o),i}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var u="suspendedStart",f="suspendedYield",h="executing",m="completed",p={};function v(){}function g(){}function y(){}var w={};l(w,i,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(N([])));x&&x!==n&&r.call(x,i)&&(w=x);var k=y.prototype=v.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function n(a,i,o,c){var l=d(t[a],t,i);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==typeof u&&r.call(u,"__await")?e.resolve(u.__await).then((function(t){n("next",t,o,c)}),(function(t){n("throw",t,o,c)})):e.resolve(u).then((function(t){s.value=t,o(s)}),(function(t){return n("throw",t,o,c)}))}c(l.arg)}var a;this._invoke=function(t,r){function i(){return new e((function(e,a){n(t,r,e,a)}))}return a=a?a.then(i,i):i()}}function L(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,L(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var a=d(r,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,p;var i=a.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function N(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function n(){for(;++a<t.length;)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}return{next:I}}function I(){return{value:e,done:!0}}return g.prototype=y,l(k,"constructor",y),l(y,"constructor",g),g.displayName=l(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,c,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},E(O.prototype),l(O.prototype,o,(function(){return this})),t.AsyncIterator=O,t.async=function(e,n,r,a,i){void 0===i&&(i=Promise);var o=new O(s(e,n,r,a),i);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},E(k),l(k,c,"Generator"),l(k,i,(function(){return this})),l(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=N,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return c.type="throw",c.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],c=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(l&&s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;T(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:N(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})),r.register("24ctr",(function(t,e){var n,a,i,o;n=t.exports,a="modalInstanceCoctail",i=function(){return h},Object.defineProperty(n,a,{get:i,set:o,enumerable:!0,configurable:!0});var c=r("dIxxU"),l=r("hrrt1"),s=r("dyT35");r("6NpaF");var d=new URL(r("1wvOr")),u="#icon-x";var f="";function h(t){f!==t&&(f=t,(0,l.getCocktails)(t).then((function(t){var e,n=t.data[0].ingredients.map((function(t){return'<li class="item-modal-coctail-ingridients mw-text-third-dark" data-value='.concat(t.ingredientId,'>\n                    <p class="link-modal-coctail-ingridient mw-text-third-dark">\n                    ').concat(t.title,"\n                    </p>\n                    </li>")})).join(""),r=JSON.parse(localStorage.getItem("cocktails"))||[];e=(null==r?void 0:r.some((function(e){return e._id===t.data[0]._id})))?"REMOVE FROM FAVORITE":"ADD TO FAVORITE";var a=s.create('\n                    <div class="modal-coctail mw-modal-dark">\n                    <div class="photo-card-coctail dark-photo-card-coctail">\n                    <div class="photo-info">\n                    <img class="photo-coctail" src="'.concat(t.data[0].drinkThumb,'" alt="" title="" height="277" loading="lazy"/>\n                    <div class="info-modal-coctail">\n                    \n                    <h2 class="main-title-modal-coctail visually-hidden  mw-text-main-dark">').concat(t.data[0].drink,'</h2>\n\n                    <p class="title-modal-coctail-categories mw-text-main-dark">INGREDIENTS:</p>\n\n                    <p class="text-modal-coctail-type mw-text-secondary-dark">Per cocktail</p>\n\n                    <ul class="list-modal-coctail-ingridients">')+n+'</ul>\n                     </div></div>\n                    <p class="title-modal-coctail-categories mw-text-main-dark">INSTRUCTIONS:</p>\n                    \n                    <p class="paragrapg-modal-coctail mw-text-secondary-dark">\n                    '.concat(t.data[0].instructions,'\n                    </p>\n                    <div class="buttons">\n                    <button class="add-btn-modal-coctail" data-value=').concat(t.data[0]._id,">").concat(e,'</button>\n                    <button class="back-btn-modal-coctail mw-text-first-dark mw-btn-dark">Back</button>\n                    </div>\n                    <button type="button" class="modal-coctail-close-btn">\n            <svg class="icon-off mw-text-first-dark" width="24" height="24"><use href=').concat(d.pathname+u,"></use></svg>\n          </button>\n                    </div>\n                    </div>\n                    "));a.show(),document.querySelector(".basicLightbox").id="general";var i=document.querySelector(".add-btn-modal-coctail");i.addEventListener("click",(function(e){if("BUTTON"===e.target.nodeName||e.target.classList.contains("add-button-modal-coctail")){var n=e.target.dataset.value,a=t.data[0],o=(r=JSON.parse(localStorage.getItem("cocktails"))||[]).findIndex((function(t){return t._id===n}));if(o<0)return r.push(a),i.innerHTML="REMOVE FROM FAVORITE",void localStorage.setItem("cocktails",JSON.stringify(r));r.splice(o,1),i.innerHTML="ADD TO FAVORITE",localStorage.setItem("cocktails",JSON.stringify(r))}}));var o=document.querySelector("button-add-fav");console.log(o);var l=document.querySelector(".list-modal-coctail-ingridients"),f=document.querySelector(".back-btn-modal-coctail"),h=document.querySelector(".modal-coctail-close-btn"),m=document.querySelector(".modal-coctail");function p(){a.close()}l.addEventListener("click",(function(t){if(t.preventDefault(),t.target.parentElement.classList.contains("item-modal-coctail-ingridients")){var e=t.target.closest(".item-modal-coctail-ingridients").dataset.value;m.classList.add("is-hidden-modal"),function(t){return c.default.get("https://drinkify.b.goit.study/api/v1/ingredients/"+"".concat(t))}(e).then((function(t){var e=JSON.parse(localStorage.getItem("favorites"))||[];console.log(e);var n;n=(null==e?void 0:e.some((function(e){return e._id===t.data[0]._id})))?"REMOVE FROM FAVORITE":"ADD TO FAVORITE";var r=s.create('\n                    <div class="modal-ingredient mw-modal-dark">\n                    <div class="ingridient-card">\n                    <h2 class="title-modal-ingridient mw-text-main-dark">'.concat(t.data[0].title,'</h2>\n                    <p class="type-ingridient-modal-ingridient mw-text-secondary-dark">').concat(t.data[0].type,'</p>\n                    <div class="line mw-btn-dark"> </div>\n                    <p class="paragraph-modal-ingridient mw-text-secondary-dark"><span class="span-paragraph-modal-ingridient mw-text-main-dark">').concat(t.data[0].title,"</span> ").concat(t.data[0].description,'</p>\n                    <ul class="list-modal-ingridients ">\n                    <li class="item-modal-ingridients mw-text-third-dark">\n                    <p class="text-modal mw-text-third-dark">Type: ').concat(t.data[0].type,'</p>\n                    </li>\n                    <li class="item-modal-ingridients mw-text-third-dark">\n                    <p class="text-modal mw-text-third-dark">\n                    Country of origin: ').concat(t.data[0].country,'</p>\n                    </li>\n                    <li class="item-modal-ingridients mw-text-third-dark">\n                    <p class="text-modal mw-text-third-dark"> Alcohol by volume: ').concat(t.data[0].abv,'</p>\n                    </li>\n                    <li class="item-modal-ingridients mw-text-third-dark">\n                    <p class="text-modal mw-text-third-dark">Flavour: ').concat(t.data[0].flavour,'</p>\n                    </li>\n                    </ul>\n                    </div>\n                    <div class="buttons">\n                    <button class="add-btn-modal-ingridient" data-value=').concat(t.data[0]._id,">").concat(n,'</button>\n                    <button class="back-btn-modal-ingridient mw-text-first-dark mw-btn-dark">Back</button>\n                    </div>\n                    <button type="button" class="modal-ingredient-close-btn">\n            <svg class="icon-off mw-text-first-dark" width="24" height="24"><use href=').concat(d.pathname+u,"></use></svg>\n          </button>\n                    </div></div>\n                    "));r.show();var a=document.querySelector(".add-btn-modal-ingridient");a.addEventListener("click",(function(n){if("BUTTON"===n.target.nodeName||n.target.classList.contains("add-btn-modal-ingridient")){var r=n.target.dataset.value,i=t.data[0],o=(e=JSON.parse(localStorage.getItem("favorites"))||[]).findIndex((function(t){return t._id===r}));return o<0?(e.push(i),a.innerHTML="REMOVE FROM FAVORITE",void localStorage.setItem("favorites",JSON.stringify(e))):(e.splice(o,1),a.innerHTML="ADD TO FAVORITE",void localStorage.setItem("favorites",JSON.stringify(e)))}}));var i=document.querySelector(".back-btn-modal-ingridient"),o=document.querySelector(".modal-ingredient-close-btn");document.querySelector(".add-btn-modal-ingridient");function c(){r.close(),m.classList.remove("is-hidden-modal")}i.addEventListener("click",c),o.addEventListener("click",c)}))}})),f.addEventListener("click",p),h.addEventListener("click",p)})))}})),r.register("1wvOr",(function(t,e){t.exports=r("aNJCr").getBundleURL("akQyS")+r("iE7OH").resolve("d9SZC")})),r("iE7OH").register(JSON.parse('{"akQyS":"index.d618b755.js","5UbS1":"favorite-cocktail.d35eaac7.css","d9SZC":"icons.35462022.svg"}'))}();
//# sourceMappingURL=index.d618b755.js.map
