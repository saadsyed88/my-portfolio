"use strict";exports.id=701,exports.ids=[701],exports.modules={2169:(e,t,n)=>{n.d(t,{Z:()=>r});/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(9224).Z)("AlignJustify",[["line",{x1:"3",x2:"21",y1:"6",y2:"6",key:"4m8b97"}],["line",{x1:"3",x2:"21",y1:"12",y2:"12",key:"10d38w"}],["line",{x1:"3",x2:"21",y1:"18",y2:"18",key:"kwyyxn"}]])},7180:(e,t,n)=>{n.d(t,{Z:()=>r});/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(9224).Z)("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]])},8714:(e,t,n)=>{n.d(t,{Z:()=>r});/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(9224).Z)("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]])},4513:(e,t,n)=>{n.d(t,{Z:()=>r});/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(9224).Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},8428:(e,t,n)=>{var r=n(4767);n.o(r,"redirect")&&n.d(t,{redirect:function(){return r.redirect}}),n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}})},1331:(e,t,n)=>{let r;n.d(t,{x8:()=>eU,VY:()=>eY,dk:()=>eq,aV:()=>eX,h_:()=>eV,fC:()=>ez,Dx:()=>eH,xz:()=>eK});var o,a=n(5651),u=n(3729),i=n(5222),l=n(1405),c=n(8462),s=n(9048),d=n(3183),f=n(2409),v=n(2256);let p="dismissableLayer.update",m=(0,u.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),h=(0,u.forwardRef)((e,t)=>{var n;let{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:c,onPointerDownOutside:s,onFocusOutside:d,onInteractOutside:h,onDismiss:E,...b}=e,w=(0,u.useContext)(m),[C,k]=(0,u.useState)(null),D=null!==(n=null==C?void 0:C.ownerDocument)&&void 0!==n?n:null==globalThis?void 0:globalThis.document,[,R]=(0,u.useState)({}),O=(0,l.e)(t,e=>k(e)),M=Array.from(w.layers),[S]=[...w.layersWithOutsidePointerEventsDisabled].slice(-1),P=M.indexOf(S),T=C?M.indexOf(C):-1,x=w.layersWithOutsidePointerEventsDisabled.size>0,L=T>=P,A=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,v.W)(e),r=(0,u.useRef)(!1),o=(0,u.useRef)(()=>{});return(0,u.useEffect)(()=>{let e=e=>{if(e.target&&!r.current){let r={originalEvent:e};function a(){y("dismissableLayer.pointerDownOutside",n,r,{discrete:!0})}"touch"===e.pointerType?(t.removeEventListener("click",o.current),o.current=a,t.addEventListener("click",o.current,{once:!0})):a()}else t.removeEventListener("click",o.current);r.current=!1},a=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(a),t.removeEventListener("pointerdown",e),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...w.branches].some(e=>e.contains(t));!L||n||(null==s||s(e),null==h||h(e),e.defaultPrevented||null==E||E())},D),W=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,v.W)(e),r=(0,u.useRef)(!1);return(0,u.useEffect)(()=>{let e=e=>{e.target&&!r.current&&y("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target;[...w.branches].some(e=>e.contains(t))||(null==d||d(e),null==h||h(e),e.defaultPrevented||null==E||E())},D);return function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,v.W)(e);(0,u.useEffect)(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)},[n,t])}(e=>{T!==w.layers.size-1||(null==c||c(e),!e.defaultPrevented&&E&&(e.preventDefault(),E()))},D),(0,u.useEffect)(()=>{if(C)return o&&(0===w.layersWithOutsidePointerEventsDisabled.size&&(r=D.body.style.pointerEvents,D.body.style.pointerEvents="none"),w.layersWithOutsidePointerEventsDisabled.add(C)),w.layers.add(C),g(),()=>{o&&1===w.layersWithOutsidePointerEventsDisabled.size&&(D.body.style.pointerEvents=r)}},[C,D,o,w]),(0,u.useEffect)(()=>()=>{C&&(w.layers.delete(C),w.layersWithOutsidePointerEventsDisabled.delete(C),g())},[C,w]),(0,u.useEffect)(()=>{let e=()=>R({});return document.addEventListener(p,e),()=>document.removeEventListener(p,e)},[]),(0,u.createElement)(f.WV.div,(0,a.Z)({},b,{ref:O,style:{pointerEvents:x?L?"auto":"none":void 0,...e.style},onFocusCapture:(0,i.M)(e.onFocusCapture,W.onFocusCapture),onBlurCapture:(0,i.M)(e.onBlurCapture,W.onBlurCapture),onPointerDownCapture:(0,i.M)(e.onPointerDownCapture,A.onPointerDownCapture)}))});function g(){let e=new CustomEvent(p);document.dispatchEvent(e)}function y(e,t,n,{discrete:r}){let o=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?(0,f.jH)(o,a):o.dispatchEvent(a)}let E="focusScope.autoFocusOnMount",b="focusScope.autoFocusOnUnmount",w={bubbles:!1,cancelable:!0},C=(0,u.forwardRef)((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:i,...c}=e,[s,d]=(0,u.useState)(null),p=(0,v.W)(o),m=(0,v.W)(i),h=(0,u.useRef)(null),g=(0,l.e)(t,e=>d(e)),y=(0,u.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,u.useEffect)(()=>{if(r){function e(e){if(y.paused||!s)return;let t=e.target;s.contains(t)?h.current=t:R(h.current,{select:!0})}function t(e){if(y.paused||!s)return;let t=e.relatedTarget;null===t||s.contains(t)||R(h.current,{select:!0})}document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&R(s)});return s&&n.observe(s,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,s,y.paused]),(0,u.useEffect)(()=>{if(s){O.add(y);let e=document.activeElement;if(!s.contains(e)){let t=new CustomEvent(E,w);s.addEventListener(E,p),s.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(R(r,{select:t}),document.activeElement!==n)return}(k(s).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&R(s))}return()=>{s.removeEventListener(E,p),setTimeout(()=>{let t=new CustomEvent(b,w);s.addEventListener(b,m),s.dispatchEvent(t),t.defaultPrevented||R(null!=e?e:document.body,{select:!0}),s.removeEventListener(b,m),O.remove(y)},0)}}},[s,p,m,y]);let C=(0,u.useCallback)(e=>{if(!n&&!r||y.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,a]=function(e){let t=k(e);return[D(t,e),D(t.reverse(),e)]}(t);r&&a?e.shiftKey||o!==a?e.shiftKey&&o===r&&(e.preventDefault(),n&&R(a,{select:!0})):(e.preventDefault(),n&&R(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,y.paused]);return(0,u.createElement)(f.WV.div,(0,a.Z)({tabIndex:-1},c,{ref:g,onKeyDown:C}))});function k(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function D(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function R(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}let O=function(){let e=[];return{add(t){let n=e[0];t!==n&&(null==n||n.pause()),(e=M(e,t)).unshift(t)},remove(t){var n;null===(n=(e=M(e,t))[0])||void 0===n||n.resume()}}}();function M(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}var S=n(1202);let P=(0,u.forwardRef)((e,t)=>{var n;let{container:r=null==globalThis?void 0:null===(n=globalThis.document)||void 0===n?void 0:n.body,...o}=e;return r?S.createPortal((0,u.createElement)(f.WV.div,(0,a.Z)({},o,{ref:t})),r):null});var T=n(3234);let x=0;function L(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}var A=function(){return(A=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function W(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;var _="right-scroll-bar-position",F="width-before-scroll-bar";function N(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var I=new WeakMap;function Z(e){return e}var j=function(e){void 0===e&&(e={});var t,n,r,o=(void 0===t&&(t=Z),n=[],r=!1,{read:function(){if(r)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:null},useMedium:function(e){var o=t(e,r);return n.push(o),function(){n=n.filter(function(e){return e!==o})}},assignSyncMedium:function(e){for(r=!0;n.length;){var t=n;n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){r=!0;var t=[];if(n.length){var o=n;n=[],o.forEach(e),t=n}var a=function(){var n=t;t=[],n.forEach(e)},u=function(){return Promise.resolve().then(a)};u(),n={push:function(e){t.push(e),u()},filter:function(e){return t=t.filter(e),n}}}});return o.options=A({async:!0,ssr:!1},e),o}(),B=function(){},z=u.forwardRef(function(e,t){var n,r,o,a,i=u.useRef(null),l=u.useState({onScrollCapture:B,onWheelCapture:B,onTouchMoveCapture:B}),c=l[0],s=l[1],d=e.forwardProps,f=e.children,v=e.className,p=e.removeScrollBar,m=e.enabled,h=e.shards,g=e.sideCar,y=e.noIsolation,E=e.inert,b=e.allowPinchZoom,w=e.as,C=W(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),k=(n=[i,t],r=function(e){return n.forEach(function(t){return N(t,e)})},(o=(0,u.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,a=o.facade,u.useLayoutEffect(function(){var e=I.get(a);if(e){var t=new Set(e),r=new Set(n),o=a.current;t.forEach(function(e){r.has(e)||N(e,null)}),r.forEach(function(e){t.has(e)||N(e,o)})}I.set(a,n)},[n]),a),D=A(A({},C),c);return u.createElement(u.Fragment,null,m&&u.createElement(g,{sideCar:j,removeScrollBar:p,shards:h,noIsolation:y,inert:E,setCallbacks:s,allowPinchZoom:!!b,lockRef:i}),d?u.cloneElement(u.Children.only(f),A(A({},D),{ref:k})):u.createElement(void 0===w?"div":w,A({},D,{className:v,ref:k}),f))});z.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},z.classNames={fullWidth:F,zeroRight:_};var K=function(e){var t=e.sideCar,n=W(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return u.createElement(r,A({},n))};K.isSideCarExport=!0;var V=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=o||n.nc;return t&&e.setAttribute("nonce",t),e}())){var a,u;(a=t).styleSheet?a.styleSheet.cssText=r:a.appendChild(document.createTextNode(r)),u=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(u)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},X=function(){var e=V();return function(t,n){u.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Y=function(){var e=X();return function(t){return e(t.styles,t.dynamic),null}},H={left:0,top:0,right:0,gap:0},q=Y(),U="data-scroll-locked",J=function(e,t,n,r){var o=e.left,a=e.top,u=e.right,i=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(i,"px ").concat(r,";\n  }\n  body[").concat(U,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(u,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(i,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(i,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(_," {\n    right: ").concat(i,"px ").concat(r,";\n  }\n  \n  .").concat(F," {\n    margin-right: ").concat(i,"px ").concat(r,";\n  }\n  \n  .").concat(_," .").concat(_," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(F," .").concat(F," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(U,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(i,"px;\n  }\n")},G=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r,a=u.useMemo(function(){return H},[o]);return u.useEffect(function(){return document.body.setAttribute(U,""),function(){document.body.removeAttribute(U)}},[]),u.createElement(q,{styles:J(a,!t,o,n?"":"!important")})},Q=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},$=function(e,t){var n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),ee(e,n)){var r=et(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body);return!1},ee=function(e,t){return"v"===e?Q(t,"overflowY"):Q(t,"overflowX")},et=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},en=function(e,t,n,r,o){var a,u=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),i=u*r,l=n.target,c=t.contains(l),s=!1,d=i>0,f=0,v=0;do{var p=et(e,l),m=p[0],h=p[1]-p[2]-u*m;(m||h)&&ee(e,l)&&(f+=h,v+=m),l=l.parentNode}while(!c&&l!==document.body||c&&(t.contains(l)||t===l));return d&&(o&&0===f||!o&&i>f)?s=!0:!d&&(o&&0===v||!o&&-i>v)&&(s=!0),s},er=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},eo=function(e){return[e.deltaX,e.deltaY]},ea=function(e){return e&&"current"in e?e.current:e},eu=0,ei=[];let el=(j.useMedium(function(e){var t=u.useRef([]),n=u.useRef([0,0]),r=u.useRef(),o=u.useState(eu++)[0],a=u.useState(function(){return Y()})[0],i=u.useRef(e);u.useEffect(function(){i.current=e},[e]),u.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(ea),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var l=u.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!i.current.allowPinchZoom;var o,a=er(e),u=n.current,l="deltaX"in e?e.deltaX:u[0]-a[0],c="deltaY"in e?e.deltaY:u[1]-a[1],s=e.target,d=Math.abs(l)>Math.abs(c)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=$(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=$(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(l||c)&&(r.current=o),!o)return!0;var v=r.current||o;return en(v,t,e,"h"===v?l:c,!0)},[]),c=u.useCallback(function(e){if(ei.length&&ei[ei.length-1]===a){var n="deltaY"in e?eo(e):er(e),r=t.current.filter(function(t){var r;return t.name===e.type&&t.target===e.target&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(i.current.shards||[]).map(ea).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?l(e,o[0]):!i.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),s=u.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),d=u.useCallback(function(e){n.current=er(e),r.current=void 0},[]),f=u.useCallback(function(t){s(t.type,eo(t),t.target,l(t,e.lockRef.current))},[]),v=u.useCallback(function(t){s(t.type,er(t),t.target,l(t,e.lockRef.current))},[]);u.useEffect(function(){return ei.push(a),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:v}),document.addEventListener("wheel",c,!1),document.addEventListener("touchmove",c,!1),document.addEventListener("touchstart",d,!1),function(){ei=ei.filter(function(e){return e!==a}),document.removeEventListener("wheel",c,!1),document.removeEventListener("touchmove",c,!1),document.removeEventListener("touchstart",d,!1)}},[]);var p=e.removeScrollBar,m=e.inert;return u.createElement(u.Fragment,null,m?u.createElement(a,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,p?u.createElement(G,{gapMode:"margin"}):null)}),K);var ec=u.forwardRef(function(e,t){return u.createElement(z,A({},e,{ref:t,sideCar:el}))});ec.classNames=z.classNames;var es=new WeakMap,ed=new WeakMap,ef={},ev=0,ep=function(e){return e&&(e.host||ep(e.parentNode))},em=function(e,t,n,r){var o=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=ep(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});ef[n]||(ef[n]=new WeakMap);var a=ef[n],u=[],i=new Set,l=new Set(o),c=function(e){!e||i.has(e)||(i.add(e),c(e.parentNode))};o.forEach(c);var s=function(e){!e||l.has(e)||Array.prototype.forEach.call(e.children,function(e){if(i.has(e))s(e);else{var t=e.getAttribute(r),o=null!==t&&"false"!==t,l=(es.get(e)||0)+1,c=(a.get(e)||0)+1;es.set(e,l),a.set(e,c),u.push(e),1===l&&o&&ed.set(e,!0),1===c&&e.setAttribute(n,"true"),o||e.setAttribute(r,"true")}})};return s(t),i.clear(),ev++,function(){u.forEach(function(e){var t=es.get(e)-1,o=a.get(e)-1;es.set(e,t),a.set(e,o),t||(ed.has(e)||e.removeAttribute(r),ed.delete(e)),o||e.removeAttribute(n)}),--ev||(es=new WeakMap,es=new WeakMap,ed=new WeakMap,ef={})}},eh=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r,o=Array.from(Array.isArray(e)?e:[e]),a=t||(r=e,"undefined"==typeof document?null:(Array.isArray(r)?r[0]:r).ownerDocument.body);return a?(o.push.apply(o,Array.from(a.querySelectorAll("[aria-live]"))),em(o,a,n,"aria-hidden")):function(){return null}},eg=n(2751);let ey="Dialog",[eE,eb]=(0,c.b)(ey),[ew,eC]=eE(ey),ek=(0,u.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=eC("DialogTrigger",n),c=(0,l.e)(t,o.triggerRef);return(0,u.createElement)(f.WV.button,(0,a.Z)({type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":eZ(o.open)},r,{ref:c,onClick:(0,i.M)(e.onClick,o.onOpenToggle)}))}),eD="DialogPortal",[eR,eO]=eE(eD,{forceMount:void 0}),eM="DialogOverlay",eS=(0,u.forwardRef)((e,t)=>{let n=eO(eM,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,i=eC(eM,e.__scopeDialog);return i.modal?(0,u.createElement)(T.z,{present:r||i.open},(0,u.createElement)(eP,(0,a.Z)({},o,{ref:t}))):null}),eP=(0,u.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=eC(eM,n);return(0,u.createElement)(ec,{as:eg.g7,allowPinchZoom:!0,shards:[o.contentRef]},(0,u.createElement)(f.WV.div,(0,a.Z)({"data-state":eZ(o.open)},r,{ref:t,style:{pointerEvents:"auto",...r.style}})))}),eT="DialogContent",ex=(0,u.forwardRef)((e,t)=>{let n=eO(eT,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,i=eC(eT,e.__scopeDialog);return(0,u.createElement)(T.z,{present:r||i.open},i.modal?(0,u.createElement)(eL,(0,a.Z)({},o,{ref:t})):(0,u.createElement)(eA,(0,a.Z)({},o,{ref:t})))}),eL=(0,u.forwardRef)((e,t)=>{let n=eC(eT,e.__scopeDialog),r=(0,u.useRef)(null),o=(0,l.e)(t,n.contentRef,r);return(0,u.useEffect)(()=>{let e=r.current;if(e)return eh(e)},[]),(0,u.createElement)(eW,(0,a.Z)({},e,{ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,i.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,i.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,i.M)(e.onFocusOutside,e=>e.preventDefault())}))}),eA=(0,u.forwardRef)((e,t)=>{let n=eC(eT,e.__scopeDialog),r=(0,u.useRef)(!1),o=(0,u.useRef)(!1);return(0,u.createElement)(eW,(0,a.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var a,u;null===(a=e.onCloseAutoFocus)||void 0===a||a.call(e,t),t.defaultPrevented||(r.current||null===(u=n.triggerRef.current)||void 0===u||u.focus(),t.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:t=>{var a,u;null===(a=e.onInteractOutside)||void 0===a||a.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(o.current=!0));let i=t.target;(null===(u=n.triggerRef.current)||void 0===u?void 0:u.contains(i))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}}))}),eW=(0,u.forwardRef)((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:i,...c}=e,s=eC(eT,n),d=(0,u.useRef)(null),f=(0,l.e)(t,d);return(0,u.useEffect)(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:L()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:L()),x++,()=>{1===x&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),x--}},[]),(0,u.createElement)(u.Fragment,null,(0,u.createElement)(C,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:i},(0,u.createElement)(h,(0,a.Z)({role:"dialog",id:s.contentId,"aria-describedby":s.descriptionId,"aria-labelledby":s.titleId,"data-state":eZ(s.open)},c,{ref:f,onDismiss:()=>s.onOpenChange(!1)}))),!1)}),e_="DialogTitle",eF=(0,u.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=eC(e_,n);return(0,u.createElement)(f.WV.h2,(0,a.Z)({id:o.titleId},r,{ref:t}))}),eN=(0,u.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=eC("DialogDescription",n);return(0,u.createElement)(f.WV.p,(0,a.Z)({id:o.descriptionId},r,{ref:t}))}),eI=(0,u.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=eC("DialogClose",n);return(0,u.createElement)(f.WV.button,(0,a.Z)({type:"button"},r,{ref:t,onClick:(0,i.M)(e.onClick,()=>o.onOpenChange(!1))}))});function eZ(e){return e?"open":"closed"}let[ej,eB]=(0,c.k)("DialogTitleWarning",{contentName:eT,titleName:e_,docsSlug:"dialog"}),ez=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:a,modal:i=!0}=e,l=(0,u.useRef)(null),c=(0,u.useRef)(null),[f=!1,v]=(0,d.T)({prop:r,defaultProp:o,onChange:a});return(0,u.createElement)(ew,{scope:t,triggerRef:l,contentRef:c,contentId:(0,s.M)(),titleId:(0,s.M)(),descriptionId:(0,s.M)(),open:f,onOpenChange:v,onOpenToggle:(0,u.useCallback)(()=>v(e=>!e),[v]),modal:i},n)},eK=ek,eV=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:o}=e,a=eC(eD,t);return(0,u.createElement)(eR,{scope:t,forceMount:n},u.Children.map(r,e=>(0,u.createElement)(T.z,{present:n||a.open},(0,u.createElement)(P,{asChild:!0,container:o},e))))},eX=eS,eY=ex,eH=eF,eq=eN,eU=eI}};