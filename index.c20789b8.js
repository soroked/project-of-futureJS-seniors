!function(){var t=document.querySelector(".pagination-list"),n=5;function e(n,e){var s="",c=e-1,o=e+1;e>1&&(s+='<li class="prev"><span>&#60</span></li>'),e>2&&(s+='<li class="numb"><span>1</span></li>',e>3&&(s+='<li class="dots"><span>...</span></li>')),e===n?c-=2:e===n-1&&(c-=1),1===e?o+=2:2===e&&(o+=1);for(var i=c;i<=o;i+=1)i>n||(0===i&&(i+=1),s+='<li class="numb '.concat(e===i?"active":"",' "><span>').concat(i,"</span></li>"));e<n-1&&(e<n-2&&(s+='<li class="dots"><span>...</span></li>'),s+='<li class="numb"><span>'.concat(n,"</span></li>")),e<n&&(s+='<li class="next"><span>&#62</span></li>'),t.innerHTML=s;var u=document.querySelector(".prev"),l=document.querySelector(".next");u&&u.addEventListener("click",(function(){return r(e-1)})),l&&l.addEventListener("click",(function(){return r(e+1)})),document.querySelectorAll(".numb").forEach((function(t){t.addEventListener("click",(function(){return r(parseInt(t.innerText))}))})),document.addEventListener("keydown",a)}function r(t){e(20,t)}function a(t){if("ArrowLeft"===t.key){if(1===n)return;r(n-=1)}if("ArrowRight"===t.key){if(20===n)return;r(n+=1)}}e(20,n);var s={searchButtonWrapper:document.querySelector(".button-search-wrapper-js"),searchButton:document.querySelector(".button-search-js"),searchDropdown:document.querySelector(".button-dropdown-js"),buttonListEl:document.querySelector(".button-list-js"),buttonSpan:document.querySelector(".button-search-span-js")},c=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"];function o(t,n,e){return'<div class="button-rows">'+t.slice(n,e).map((function(t){return'<button class="button-item" data-value='.concat(t,">").concat(t,"</button>")})).join("")+"</div>"}var i=o(c,0,14),u=o(c,14,27),l=o(c,27),d=o(c,0,19),p=o(c,19);s.buttonListEl.innerHTML=i+u+l+d+p,s.searchButtonWrapper.addEventListener("click",(function(t){if("BUTTON"===t.target.nodeName)return s.buttonSpan.innerHTML=t.target.dataset.value,s.searchDropdown.classList.toggle("hidden"),void s.searchButtonWrapper.classList.toggle("active");t.currentTarget.classList.contains("button-search-wrapper-js")&&(s.searchDropdown.classList.toggle("hidden"),s.searchButtonWrapper.classList.toggle("active"))}))}();
//# sourceMappingURL=index.c20789b8.js.map
