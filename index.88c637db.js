!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a),a("iE7OH").register(JSON.parse('{"EVgbq":"index.88c637db.js","cyB0G":"hero-error-mobile.0d2f4064.png","61FrV":"hero-error-tablet.15d5f5cf.png","5UbS1":"favorite-cocktail.558106db.css","i0yIm":"favorite-ingredients.a8f493d3.js","2mJtI":"favorite-ingredients.7909c7bf.js","akQyS":"index.782ae2eb.js"}'));var s=document.getElementById("themeSwitch"),o=document.body;s.checked=!1,s.addEventListener("click",(function(){if(s.checked)return s.classList.toggle("dark"),o.classList.toggle("dark"),console.log("dark"),localStorage.setItem(g,"dark"),p.classList.toggle("is-hidden-hero"),void u.classList.toggle("is-hidden-hero");o.classList.remove("dark"),p.classList.toggle("is-hidden-hero"),u.classList.toggle("is-hidden-hero"),localStorage.setItem(g,"light")}));var i,c,d,l,u=document.querySelector(".picture-hero-dark"),p=document.querySelector(".picture-hero-light"),g="switcher";"light"!==localStorage.getItem("switcher")&&localStorage.getItem("switcher")?(p.classList.add("is-hidden-hero"),u.classList.remove("is-hidden-hero")):(p.classList.remove("is-hidden-hero"),u.classList.add("is-hidden-hero")),function(){if("dark"===localStorage.getItem(g))return o.classList.toggle("dark"),void(s.checked=!0);o.classList.remove("dark"),s.checked=!1}(),i=document.querySelector(".js-menu-container"),c=document.querySelector(".js-open-menu"),d=document.querySelector(".js-close-menu"),l=function(){var e="true"===c.getAttribute("aria-expanded")||!1;c.setAttribute("aria-expanded",!e),i.classList.toggle("is-open")},c.addEventListener("click",l),d.addEventListener("click",l),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(e){e.matches&&(i.classList.remove("is-open"),c.setAttribute("aria-expanded",!1))}));var h,v=a("bpxeT"),f=a("8nrFW"),m=a("2TvXO"),b=a("hrrt1"),L=a("5JgHl"),S=a("hBSW2");function w(e,t,r){var n,a,s,o,i;function c(){var d=Date.now()-o;d<t&&d>=0?n=setTimeout(c,t-d):(n=null,r||(i=e.apply(s,a),s=a=null))}null==t&&(t=100);var d=function(){s=this,a=arguments,o=Date.now();var d=r&&!n;return n||(n=setTimeout(c,t)),d&&(i=e.apply(s,a),s=a=null),i};return d.clear=function(){n&&(clearTimeout(n),n=null)},d.flush=function(){n&&(i=e.apply(s,a),s=a=null,clearTimeout(n),n=null)},d}w.debounce=w,h=w;var k,y=a("fJ3EV");k=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("cyB0G");var E,x=new URL(k);E=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("61FrV");var H=new URL(E),T='<div class="error-img-container"><picture>\n  <source media="(min-width: 768px)"\n  type="image/webp"\n  srcset="'.concat(H,'" >\n\n  <source media="(min-width: 768px)"\n  type="image/png"\n  srcset="').concat(H,'" >\n\n  <source media="(min-width: 320px)"\n  type="image/webp"\n  srcset="').concat(x,'" >\n\n  <source media="(min-width: 320px)"\n  type="image/png"\n  srcset="').concat(x,'" >\n\n  <img class="hero-error-img" src="').concat(x,'" alt="cocktails" >\n  </picture>\n  <p class="hero-error-text hero-dark">Sorry, we <span class="hero-text-accent">didn’t find</span> any cocktail for you</p>\n  </div>'),O=a("24ctr");y.default.form.addEventListener("submit",N),y.default.searchDropdown.addEventListener("click",N);JSON.parse(localStorage.getItem("cocktails"));var _=1,B=[];window.addEventListener("load",S.updateValueBasedOnScreenWidth),window.addEventListener("resize",e(h)(S.updateValueBasedOnScreenWidth,300)),window.addEventListener("load",N);var q,I=!0;function N(e){return R.apply(this,arguments)}function R(){return(R=e(v)(e(m).mark((function t(r){var n,a,s,o,i,c;return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=function(e){if(e.target.classList.contains("button-learn-more")){var t=e.target.dataset.value;return(0,O.modalInstanceCoctail)(t.replaceAll("+"," "))}},r.preventDefault(),s="",!(null===(n=r.target.classList)||void 0===n?void 0:n.contains("button-list-js"))){t.next=6;break}return t.abrupt("return");case 6:if("BUTTON"===r.target.nodeName?s=r.target.dataset.value:"FORM"===r.target.nodeName&&(s=null===(a=r.currentTarget.elements)||void 0===a?void 0:a.search.value.trim()),t.prev=7,o=null,!I){t.next=16;break}return t.next=12,(0,b.getRandomCocktails)((0,S.updateValueBasedOnScreenWidth)());case 12:o=t.sent,I=!1,t.next=19;break;case 16:return t.next=18,(0,b.getCocktails)(s);case 18:o=t.sent;case 19:B=o.data,(i=[]).push(o.data),L.renderMarkupCard.apply(void 0,[_,(0,S.updateValueBasedOnScreenWidth)()].concat(e(f)(i),[y.default.list,y.default.listPag])),document.querySelector(".hero-search-cards").addEventListener("click",c),t.next=33;break;case 28:t.prev=28,t.t0=t.catch(7),listPag.innerHTML="",y.default.list.innerHTML=T,y.default.scrollErrorPicture.scrollIntoView({behavior:"smooth",block:"end"});case 33:return t.prev=33,y.default.form.reset(),y.default.buttonSpan.innerHTML="A",t.finish(33);case 37:case"end":return t.stop()}}),t,null,[[7,28,33,37]])})))).apply(this,arguments)}document.querySelector(".hero-search-cards").addEventListener("click",(function(e){if("use"===e.target.nodeName||e.target.classList.contains("button-add-fav")||e.target.classList.contains("icon-add-fav")){var t=e.target.closest(".button-add-fav"),r=t.dataset.value,n=B.find((function(e){return e._id===r})),a=JSON.parse(localStorage.getItem("cocktails"))||[],s=a.findIndex((function(e){return e._id===r}));if(console.dir(t),s<0)return t.classList.add("button-add-fav-active"),a.push(n),void localStorage.setItem("cocktails",JSON.stringify(a));t.classList.remove("button-add-fav-active"),a.splice(s,1),localStorage.setItem("cocktails",JSON.stringify(a))}}));var j={searchButtonWrapper:document.querySelector(".button-search-wrapper-js"),searchButton:document.querySelector(".button-search-js"),searchDropdown:document.querySelector(".button-dropdown-js"),buttonListEl:document.querySelector(".button-list-js"),buttonSpan:document.querySelector(".button-search-span-js")},A=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"];function F(e,t,r){return'<div class="button-rows">'+e.slice(t,r).map((function(e){return'<button class="button-item" data-value='.concat(e,">").concat(e,"</button>")})).join("")+"</div>"}var V=F(A,0,14),J=F(A,14,27),M=F(A,27),W=F(A,0,19),D=F(A,19);j.buttonListEl&&(j.buttonListEl.innerHTML=V+J+M+W+D),null===(q=j.searchButtonWrapper)||void 0===q||q.addEventListener("click",(function(e){if("BUTTON"===e.target.nodeName)return j.buttonSpan.innerHTML=e.target.dataset.value,j.searchDropdown.classList.toggle("hidden"),void j.searchButtonWrapper.classList.toggle("active");e.currentTarget.classList.contains("button-search-wrapper-js")&&(j.searchDropdown.classList.toggle("hidden"),j.searchButtonWrapper.classList.toggle("active"))})),a("24ctr")}();
//# sourceMappingURL=index.88c637db.js.map
