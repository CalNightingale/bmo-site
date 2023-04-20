"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[309],{3211:function(e,n,t){t.d(n,{M:function(){return r}});function r(e,n,{checkForDefaultPrevented:t=!0}={}){return function(r){if(null==e||e(r),!1===t||!r.defaultPrevented)return null==n?void 0:n(r)}}},5349:function(e,n,t){t.d(n,{F:function(){return u},e:function(){return o}});var r=t(6006);function u(...e){return n=>e.forEach(e=>{var t;"function"==typeof(t=e)?t(n):null!=t&&(t.current=n)})}function o(...e){return(0,r.useCallback)(u(...e),e)}},104:function(e,n,t){t.d(n,{b:function(){return o},k:function(){return u}});var r=t(6006);function u(e,n){let t=(0,r.createContext)(n);function u(e){let{children:n,...u}=e,o=(0,r.useMemo)(()=>u,Object.values(u));return(0,r.createElement)(t.Provider,{value:o},n)}return u.displayName=e+"Provider",[u,function(u){let o=(0,r.useContext)(t);if(o)return o;if(void 0!==n)return n;throw Error(`\`${u}\` must be used within \`${e}\``)}]}function o(e,n=[]){let t=[],u=()=>{let n=t.map(e=>(0,r.createContext)(e));return function(t){let u=(null==t?void 0:t[e])||n;return(0,r.useMemo)(()=>({[`__scope${e}`]:{...t,[e]:u}}),[t,u])}};return u.scopeName=e,[function(n,u){let o=(0,r.createContext)(u),i=t.length;function l(n){let{scope:t,children:u,...l}=n,s=(null==t?void 0:t[e][i])||o,a=(0,r.useMemo)(()=>l,Object.values(l));return(0,r.createElement)(s.Provider,{value:a},u)}return t=[...t,u],l.displayName=n+"Provider",[l,function(t,l){let s=(null==l?void 0:l[e][i])||o,a=(0,r.useContext)(s);if(a)return a;if(void 0!==u)return u;throw Error(`\`${t}\` must be used within \`${n}\``)}]},function(...e){let n=e[0];if(1===e.length)return n;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let u=t.reduce((n,{useScope:t,scopeName:r})=>{let u=t(e),o=u[`__scope${r}`];return{...n,...o}},{});return(0,r.useMemo)(()=>({[`__scope${n.scopeName}`]:u}),[u])}};return t.scopeName=n.scopeName,t}(u,...n)]}},3321:function(e,n,t){let r;t.d(n,{XB:function(){return f}});var u=t(431),o=t(6006),i=t(3211),l=t(1444),s=t(5349),a=t(8988);let c="dismissableLayer.update",d=(0,o.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=(0,o.forwardRef)((e,n)=>{var t;let{disableOutsidePointerEvents:f=!1,onEscapeKeyDown:p,onPointerDownOutside:E,onFocusOutside:h,onInteractOutside:y,onDismiss:b,...N}=e,C=(0,o.useContext)(d),[g,w]=(0,o.useState)(null),O=null!==(t=null==g?void 0:g.ownerDocument)&&void 0!==t?t:null==globalThis?void 0:globalThis.document,[,P]=(0,o.useState)({}),T=(0,s.e)(n,e=>w(e)),L=Array.from(C.layers),[D]=[...C.layersWithOutsidePointerEventsDisabled].slice(-1),M=L.indexOf(D),S=g?L.indexOf(g):-1,k=C.layersWithOutsidePointerEventsDisabled.size>0,W=S>=M,_=function(e,n=null==globalThis?void 0:globalThis.document){let t=(0,a.W)(e),r=(0,o.useRef)(!1),u=(0,o.useRef)(()=>{});return(0,o.useEffect)(()=>{let e=e=>{if(e.target&&!r.current){let r={originalEvent:e};function o(){m("dismissableLayer.pointerDownOutside",t,r,{discrete:!0})}"touch"===e.pointerType?(n.removeEventListener("click",u.current),u.current=o,n.addEventListener("click",u.current,{once:!0})):o()}r.current=!1},o=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(o),n.removeEventListener("pointerdown",e),n.removeEventListener("click",u.current)}},[n,t]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let n=e.target,t=[...C.branches].some(e=>e.contains(n));!W||t||(null==E||E(e),null==y||y(e),e.defaultPrevented||null==b||b())},O),A=function(e,n=null==globalThis?void 0:globalThis.document){let t=(0,a.W)(e),r=(0,o.useRef)(!1);return(0,o.useEffect)(()=>{let e=e=>{e.target&&!r.current&&m("dismissableLayer.focusOutside",t,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,t]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let n=e.target,t=[...C.branches].some(e=>e.contains(n));t||(null==h||h(e),null==y||y(e),e.defaultPrevented||null==b||b())},O);return!function(e,n=null==globalThis?void 0:globalThis.document){let t=(0,a.W)(e);(0,o.useEffect)(()=>{let e=e=>{"Escape"===e.key&&t(e)};return n.addEventListener("keydown",e),()=>n.removeEventListener("keydown",e)},[t,n])}(e=>{let n=S===C.layers.size-1;n&&(null==p||p(e),!e.defaultPrevented&&b&&(e.preventDefault(),b()))},O),(0,o.useEffect)(()=>{if(g)return f&&(0===C.layersWithOutsidePointerEventsDisabled.size&&(r=O.body.style.pointerEvents,O.body.style.pointerEvents="none"),C.layersWithOutsidePointerEventsDisabled.add(g)),C.layers.add(g),v(),()=>{f&&1===C.layersWithOutsidePointerEventsDisabled.size&&(O.body.style.pointerEvents=r)}},[g,O,f,C]),(0,o.useEffect)(()=>()=>{g&&(C.layers.delete(g),C.layersWithOutsidePointerEventsDisabled.delete(g),v())},[g,C]),(0,o.useEffect)(()=>{let e=()=>P({});return document.addEventListener(c,e),()=>document.removeEventListener(c,e)},[]),(0,o.createElement)(l.WV.div,(0,u.Z)({},N,{ref:T,style:{pointerEvents:k?W?"auto":"none":void 0,...e.style},onFocusCapture:(0,i.M)(e.onFocusCapture,A.onFocusCapture),onBlurCapture:(0,i.M)(e.onBlurCapture,A.onBlurCapture),onPointerDownCapture:(0,i.M)(e.onPointerDownCapture,_.onPointerDownCapture)}))});function v(){let e=new CustomEvent(c);document.dispatchEvent(e)}function m(e,n,t,{discrete:r}){let u=t.originalEvent.target,o=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:t});n&&u.addEventListener(e,n,{once:!0}),r?(0,l.jH)(u,o):u.dispatchEvent(o)}},2769:function(e,n,t){t.d(n,{M:function(){return s}});var r,u=t(6006),o=t(7708);let i=(r||(r=t.t(u,2)))["useId".toString()]||(()=>void 0),l=0;function s(e){let[n,t]=u.useState(i());return(0,o.b)(()=>{e||t(e=>null!=e?e:String(l++))},[e]),e||(n?`radix-${n}`:"")}},436:function(e,n,t){t.d(n,{z:function(){return l}});var r=t(6006),u=t(8431),o=t(5349),i=t(7708);let l=e=>{let{present:n,children:t}=e,l=function(e){var n;let[t,o]=(0,r.useState)(),l=(0,r.useRef)({}),a=(0,r.useRef)(e),c=(0,r.useRef)("none"),[d,f]=(n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,r.useReducer)((e,t)=>{let r=n[e][t];return null!=r?r:e},e?"mounted":"unmounted"));return(0,r.useEffect)(()=>{let e=s(l.current);c.current="mounted"===d?e:"none"},[d]),(0,i.b)(()=>{let n=l.current,t=a.current;if(t!==e){let r=c.current,u=s(n);e?f("MOUNT"):"none"===u||(null==n?void 0:n.display)==="none"?f("UNMOUNT"):t&&r!==u?f("ANIMATION_OUT"):f("UNMOUNT"),a.current=e}},[e,f]),(0,i.b)(()=>{if(t){let e=e=>{let n=s(l.current),r=n.includes(e.animationName);e.target===t&&r&&(0,u.flushSync)(()=>f("ANIMATION_END"))},n=e=>{e.target===t&&(c.current=s(l.current))};return t.addEventListener("animationstart",n),t.addEventListener("animationcancel",e),t.addEventListener("animationend",e),()=>{t.removeEventListener("animationstart",n),t.removeEventListener("animationcancel",e),t.removeEventListener("animationend",e)}}f("ANIMATION_END")},[t,f]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:(0,r.useCallback)(e=>{e&&(l.current=getComputedStyle(e)),o(e)},[])}}(n),a="function"==typeof t?t({present:l.isPresent}):r.Children.only(t),c=(0,o.e)(l.ref,a.ref);return"function"==typeof t||l.isPresent?(0,r.cloneElement)(a,{ref:c}):null};function s(e){return(null==e?void 0:e.animationName)||"none"}l.displayName="Presence"},1444:function(e,n,t){t.d(n,{WV:function(){return l},jH:function(){return s}});var r=t(431),u=t(6006),o=t(8431),i=t(6955);let l=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"].reduce((e,n)=>{let t=(0,u.forwardRef)((e,t)=>{let{asChild:o,...l}=e,s=o?i.g7:n;return(0,u.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,u.createElement)(s,(0,r.Z)({},l,{ref:t}))});return t.displayName=`Primitive.${n}`,{...e,[n]:t}},{});function s(e,n){e&&(0,o.flushSync)(()=>e.dispatchEvent(n))}},6955:function(e,n,t){t.d(n,{g7:function(){return i}});var r=t(431),u=t(6006),o=t(5349);let i=(0,u.forwardRef)((e,n)=>{let{children:t,...o}=e,i=u.Children.toArray(t),s=i.find(a);if(s){let e=s.props.children,t=i.map(n=>n!==s?n:u.Children.count(e)>1?u.Children.only(null):(0,u.isValidElement)(e)?e.props.children:null);return(0,u.createElement)(l,(0,r.Z)({},o,{ref:n}),(0,u.isValidElement)(e)?(0,u.cloneElement)(e,void 0,t):null)}return(0,u.createElement)(l,(0,r.Z)({},o,{ref:n}),t)});i.displayName="Slot";let l=(0,u.forwardRef)((e,n)=>{let{children:t,...r}=e;return(0,u.isValidElement)(t)?(0,u.cloneElement)(t,{...function(e,n){let t={...n};for(let r in n){let u=e[r],o=n[r],i=/^on[A-Z]/.test(r);i?u&&o?t[r]=(...e)=>{o(...e),u(...e)}:u&&(t[r]=u):"style"===r?t[r]={...u,...o}:"className"===r&&(t[r]=[u,o].filter(Boolean).join(" "))}return{...e,...t}}(r,t.props),ref:(0,o.F)(n,t.ref)}):u.Children.count(t)>1?u.Children.only(null):null});l.displayName="SlotClone";let s=({children:e})=>(0,u.createElement)(u.Fragment,null,e);function a(e){return(0,u.isValidElement)(e)&&e.type===s}},8988:function(e,n,t){t.d(n,{W:function(){return u}});var r=t(6006);function u(e){let n=(0,r.useRef)(e);return(0,r.useEffect)(()=>{n.current=e}),(0,r.useMemo)(()=>(...e)=>{var t;return null===(t=n.current)||void 0===t?void 0:t.call(n,...e)},[])}},8446:function(e,n,t){t.d(n,{T:function(){return o}});var r=t(6006),u=t(8988);function o({prop:e,defaultProp:n,onChange:t=()=>{}}){let[o,i]=function({defaultProp:e,onChange:n}){let t=(0,r.useState)(e),[o]=t,i=(0,r.useRef)(o),l=(0,u.W)(n);return(0,r.useEffect)(()=>{i.current!==o&&(l(o),i.current=o)},[o,i,l]),t}({defaultProp:n,onChange:t}),l=void 0!==e,s=(0,u.W)(t),a=(0,r.useCallback)(n=>{if(l){let t="function"==typeof n?n(e):n;t!==e&&s(t)}else i(n)},[l,e,i,s]);return[l?e:o,a]}},7708:function(e,n,t){t.d(n,{b:function(){return u}});var r=t(6006);let u=(null==globalThis?void 0:globalThis.document)?r.useLayoutEffect:()=>{}},431:function(e,n,t){t.d(n,{Z:function(){return r}});function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}}}]);