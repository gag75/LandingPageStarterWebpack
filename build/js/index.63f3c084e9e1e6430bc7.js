webpackJsonp([0],[function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),r=(n.n(i),n(2)),l=(n.n(r),n(3)),a=(n.n(l),n(4)),s=new a.a({title:"Сладости. Это меню. Отрой меня",items:[{title:"Конфеты",href:"candy"},{title:"Пирожки",href:"pie"},{title:"Пряники",href:"cookies"}]});document.body.appendChild(s.getElem()),s.getElem().addEventListener("menu-select",function(e){alert(e.detail.value)}),s.getElem().addEventListener("menu-open",function(){console.log("open")}),s.getElem().addEventListener("menu-close",function(){console.log("close")})},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=n(5),l=n.n(r),a=n(8),s=(n.n(a),function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}()),o=function(){function e(t){var n=this,r=t.title,l=t.items;i(this,e),this._title=r,this._items=l,this._render(),this.isOpen=!1,this._titleElem=this._elem.querySelector(".title"),this._titleElem.onclick=function(){n.toggle()},this._elem.onclick=this.onClick.bind(this),this._elem.addEventListener("transitionend",function(){var e=n._elem.classList.contains("open");if(e!==n.isOpen){var t=e?"menu-open":"menu-close";n._elem.dispatchEvent(new CustomEvent(t,{bubble:!0})),n.isOpen=n._elem.classList.contains("open")}})}return s(e,[{key:"onClick",value:function(e){var t=e.target.closest("a");t&&this._elem.contains(t)&&(e.preventDefault(),this._elem.dispatchEvent(new CustomEvent("menu-select",{bubble:!0,detail:{value:t.innerHTML}})))}},{key:"_render",value:function(){var e=document.createElement("div");e.innerHTML=l()({title:this._title,items:this._items}),this._elem=e.firstElementChild}},{key:"toggle",value:function(){this._elem.classList.toggle("open")}},{key:"getElem",value:function(){return this._elem}}]),e}();t.a=o},function(e,t,n){function i(e){var t,n="",i=e||{};return function(e,i){n=n+'\n<div class="menu"><span class="title">'+r.escape(null==(t=i)?"":t)+"</span>\n  <ul>",function(){var i=e;if("number"==typeof i.length)for(var l=0,a=i.length;l<a;l++){var s=i[l];n=n+"\n    <li><a"+r.attr("href",s.href,!0,!0)+">"+r.escape(null==(t=s.title)?"":t)+"</a></li>"}else{var a=0;for(var l in i){a++;var s=i[l];n=n+"\n    <li><a"+r.attr("href",s.href,!0,!0)+">"+r.escape(null==(t=s.title)?"":t)+"</a></li>"}}}.call(this),n+="\n  </ul>\n</div>"}.call(this,"items"in i?i.items:"undefined"!=typeof items?items:void 0,"title"in i?i.title:"undefined"!=typeof title?title:void 0),n}var r=n(6);e.exports=i},function(e,t,n){"use strict";function i(e,t){if(1===arguments.length){for(var n=e[0],r=1;r<e.length;r++)n=i(n,e[r]);return n}for(var l in t)if("class"===l){var a=e[l]||[];e[l]=(Array.isArray(a)?a:[a]).concat(t[l]||[])}else if("style"===l){var a=s(e[l]),o=s(t[l]);e[l]=a+o}else e[l]=t[l];return e}function r(e,t){for(var n,i="",r="",l=Array.isArray(t),s=0;s<e.length;s++)(n=a(e[s]))&&(l&&t[s]&&(n=u(n)),i=i+r+n,r=" ");return i}function l(e){var t="",n="";for(var i in e)i&&e[i]&&v.call(e,i)&&(t=t+n+i,n=" ");return t}function a(e,t){return Array.isArray(e)?r(e,t):e&&"object"==typeof e?l(e):e||""}function s(e){if(!e)return"";if("object"==typeof e){var t="";for(var n in e)v.call(e,n)&&(t=t+n+":"+e[n]+";");return t}return e+="",";"!==e[e.length-1]?e+";":e}function o(e,t,n,i){return!1!==t&&null!=t&&(t||"class"!==e&&"style"!==e)?!0===t?" "+(i?e:e+'="'+e+'"'):("function"==typeof t.toJSON&&(t=t.toJSON()),"string"==typeof t||(t=JSON.stringify(t),n||-1===t.indexOf('"'))?(n&&(t=u(t))," "+e+'="'+t+'"'):" "+e+"='"+t.replace(/'/g,"&#39;")+"'"):""}function c(e,t){var n="";for(var i in e)if(v.call(e,i)){var r=e[i];if("class"===i){r=a(r),n=o(i,r,!1,t)+n;continue}"style"===i&&(r=s(r)),n+=o(i,r,!1,t)}return n}function u(e){var t=""+e,n=h.exec(t);if(!n)return e;var i,r,l,a="";for(i=n.index,r=0;i<t.length;i++){switch(t.charCodeAt(i)){case 34:l="&quot;";break;case 38:l="&amp;";break;case 60:l="&lt;";break;case 62:l="&gt;";break;default:continue}r!==i&&(a+=t.substring(r,i)),r=i+1,a+=l}return r!==i?a+t.substring(r,i):a}function f(e,t,i,r){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&t||r))throw e.message+=" on line "+i,e;try{r=r||n(7).readFileSync(t,"utf8")}catch(t){f(e,null,i)}var l=3,a=r.split("\n"),s=Math.max(i-l,0),o=Math.min(a.length,i+l),l=a.slice(s,o).map(function(e,t){var n=t+s+1;return(n==i?"  > ":"    ")+n+"| "+e}).join("\n");throw e.path=t,e.message=(t||"Pug")+":"+i+"\n"+l+"\n\n"+e.message,e}var v=Object.prototype.hasOwnProperty;t.merge=i,t.classes=a,t.style=s,t.attr=o,t.attrs=c;var h=/["&<>]/;t.escape=u,t.rethrow=f},function(e,t){},function(e,t){}],[0]);