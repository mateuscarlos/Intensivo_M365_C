function yg(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();var Ca=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function js(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wf={exports:{}},ao={},Sf={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bi=Symbol.for("react.element"),xg=Symbol.for("react.portal"),kg=Symbol.for("react.fragment"),wg=Symbol.for("react.strict_mode"),Sg=Symbol.for("react.profiler"),Cg=Symbol.for("react.provider"),Eg=Symbol.for("react.context"),bg=Symbol.for("react.forward_ref"),Pg=Symbol.for("react.suspense"),_g=Symbol.for("react.memo"),zg=Symbol.for("react.lazy"),tc=Symbol.iterator;function Lg(e){return e===null||typeof e!="object"?null:(e=tc&&e[tc]||e["@@iterator"],typeof e=="function"?e:null)}var Cf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ef=Object.assign,bf={};function Sr(e,n,t){this.props=e,this.context=n,this.refs=bf,this.updater=t||Cf}Sr.prototype.isReactComponent={};Sr.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Sr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Pf(){}Pf.prototype=Sr.prototype;function Ns(e,n,t){this.props=e,this.context=n,this.refs=bf,this.updater=t||Cf}var Rs=Ns.prototype=new Pf;Rs.constructor=Ns;Ef(Rs,Sr.prototype);Rs.isPureReactComponent=!0;var rc=Array.isArray,_f=Object.prototype.hasOwnProperty,Ms={current:null},zf={key:!0,ref:!0,__self:!0,__source:!0};function Lf(e,n,t){var r,i={},a=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(a=""+n.key),n)_f.call(n,r)&&!zf.hasOwnProperty(r)&&(i[r]=n[r]);var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:bi,type:e,key:a,ref:o,props:i,_owner:Ms.current}}function Og(e,n){return{$$typeof:bi,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Fs(e){return typeof e=="object"&&e!==null&&e.$$typeof===bi}function Tg(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ic=/\/+/g;function Io(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Tg(""+e.key):n.toString(36)}function sa(e,n,t,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case bi:case xg:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Io(o,0):r,rc(i)?(t="",e!=null&&(t=e.replace(ic,"$&/")+"/"),sa(i,n,t,"",function(u){return u})):i!=null&&(Fs(i)&&(i=Og(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ic,"$&/")+"/")+e)),n.push(i)),1;if(o=0,r=r===""?".":r+":",rc(e))for(var l=0;l<e.length;l++){a=e[l];var s=r+Io(a,l);o+=sa(a,n,t,s,i)}else if(s=Lg(e),typeof s=="function")for(e=s.call(e),l=0;!(a=e.next()).done;)a=a.value,s=r+Io(a,l++),o+=sa(a,n,t,s,i);else if(a==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function Mi(e,n,t){if(e==null)return e;var r=[],i=0;return sa(e,r,"","",function(a){return n.call(t,a,i++)}),r}function Ig(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Re={current:null},ua={transition:null},Ag={ReactCurrentDispatcher:Re,ReactCurrentBatchConfig:ua,ReactCurrentOwner:Ms};function Of(){throw Error("act(...) is not supported in production builds of React.")}G.Children={map:Mi,forEach:function(e,n,t){Mi(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Mi(e,function(){n++}),n},toArray:function(e){return Mi(e,function(n){return n})||[]},only:function(e){if(!Fs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=Sr;G.Fragment=kg;G.Profiler=Sg;G.PureComponent=Ns;G.StrictMode=wg;G.Suspense=Pg;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ag;G.act=Of;G.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ef({},e.props),i=e.key,a=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(a=n.ref,o=Ms.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in n)_f.call(n,s)&&!zf.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&l!==void 0?l[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:bi,type:e.type,key:i,ref:a,props:r,_owner:o}};G.createContext=function(e){return e={$$typeof:Eg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Cg,_context:e},e.Consumer=e};G.createElement=Lf;G.createFactory=function(e){var n=Lf.bind(null,e);return n.type=e,n};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:bg,render:e}};G.isValidElement=Fs;G.lazy=function(e){return{$$typeof:zg,_payload:{_status:-1,_result:e},_init:Ig}};G.memo=function(e,n){return{$$typeof:_g,type:e,compare:n===void 0?null:n}};G.startTransition=function(e){var n=ua.transition;ua.transition={};try{e()}finally{ua.transition=n}};G.unstable_act=Of;G.useCallback=function(e,n){return Re.current.useCallback(e,n)};G.useContext=function(e){return Re.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return Re.current.useDeferredValue(e)};G.useEffect=function(e,n){return Re.current.useEffect(e,n)};G.useId=function(){return Re.current.useId()};G.useImperativeHandle=function(e,n,t){return Re.current.useImperativeHandle(e,n,t)};G.useInsertionEffect=function(e,n){return Re.current.useInsertionEffect(e,n)};G.useLayoutEffect=function(e,n){return Re.current.useLayoutEffect(e,n)};G.useMemo=function(e,n){return Re.current.useMemo(e,n)};G.useReducer=function(e,n,t){return Re.current.useReducer(e,n,t)};G.useRef=function(e){return Re.current.useRef(e)};G.useState=function(e){return Re.current.useState(e)};G.useSyncExternalStore=function(e,n,t){return Re.current.useSyncExternalStore(e,n,t)};G.useTransition=function(){return Re.current.useTransition()};G.version="18.3.1";Sf.exports=G;var L=Sf.exports;const et=js(L),Dg=yg({__proto__:null,default:et},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg=L,Ng=Symbol.for("react.element"),Rg=Symbol.for("react.fragment"),Mg=Object.prototype.hasOwnProperty,Fg=jg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bg={key:!0,ref:!0,__self:!0,__source:!0};function Tf(e,n,t){var r,i={},a=null,o=null;t!==void 0&&(a=""+t),n.key!==void 0&&(a=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)Mg.call(n,r)&&!Bg.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Ng,type:e,key:a,ref:o,props:i,_owner:Fg.current}}ao.Fragment=Rg;ao.jsx=Tf;ao.jsxs=Tf;wf.exports=ao;var w=wf.exports,_l={},If={exports:{}},nn={},Af={exports:{}},Df={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(A,q){var y=A.length;A.push(q);e:for(;0<y;){var B=y-1>>>1,U=A[B];if(0<i(U,q))A[B]=q,A[y]=U,y=B;else break e}}function t(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var q=A[0],y=A.pop();if(y!==q){A[0]=y;e:for(var B=0,U=A.length,k=U>>>1;B<k;){var oe=2*(B+1)-1,ke=A[oe],le=oe+1,Sn=A[le];if(0>i(ke,y))le<U&&0>i(Sn,ke)?(A[B]=Sn,A[le]=y,B=le):(A[B]=ke,A[oe]=y,B=oe);else if(le<U&&0>i(Sn,y))A[B]=Sn,A[le]=y,B=le;else break e}}return q}function i(A,q){var y=A.sortIndex-q.sortIndex;return y!==0?y:A.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var s=[],u=[],d=1,c=null,f=3,p=!1,g=!1,x=!1,b=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(A){for(var q=t(u);q!==null;){if(q.callback===null)r(u);else if(q.startTime<=A)r(u),q.sortIndex=q.expirationTime,n(s,q);else break;q=t(u)}}function E(A){if(x=!1,v(A),!g)if(t(s)!==null)g=!0,V(P);else{var q=t(u);q!==null&&ee(E,q.startTime-A)}}function P(A,q){g=!1,x&&(x=!1,m(I),I=-1),p=!0;var y=f;try{for(v(q),c=t(s);c!==null&&(!(c.expirationTime>q)||A&&!j());){var B=c.callback;if(typeof B=="function"){c.callback=null,f=c.priorityLevel;var U=B(c.expirationTime<=q);q=e.unstable_now(),typeof U=="function"?c.callback=U:c===t(s)&&r(s),v(q)}else r(s);c=t(s)}if(c!==null)var k=!0;else{var oe=t(u);oe!==null&&ee(E,oe.startTime-q),k=!1}return k}finally{c=null,f=y,p=!1}}var C=!1,z=null,I=-1,R=5,S=-1;function j(){return!(e.unstable_now()-S<R)}function F(){if(z!==null){var A=e.unstable_now();S=A;var q=!0;try{q=z(!0,A)}finally{q?W():(C=!1,z=null)}}else C=!1}var W;if(typeof h=="function")W=function(){h(F)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,N=Z.port2;Z.port1.onmessage=F,W=function(){N.postMessage(null)}}else W=function(){b(F,0)};function V(A){z=A,C||(C=!0,W())}function ee(A,q){I=b(function(){A(e.unstable_now())},q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){g||p||(g=!0,V(P))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(A){switch(f){case 1:case 2:case 3:var q=3;break;default:q=f}var y=f;f=q;try{return A()}finally{f=y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,q){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var y=f;f=A;try{return q()}finally{f=y}},e.unstable_scheduleCallback=function(A,q,y){var B=e.unstable_now();switch(typeof y=="object"&&y!==null?(y=y.delay,y=typeof y=="number"&&0<y?B+y:B):y=B,A){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=y+U,A={id:d++,callback:q,priorityLevel:A,startTime:y,expirationTime:U,sortIndex:-1},y>B?(A.sortIndex=y,n(u,A),t(s)===null&&A===t(u)&&(x?(m(I),I=-1):x=!0,ee(E,y-B))):(A.sortIndex=U,n(s,A),g||p||(g=!0,V(P))),A},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(A){var q=f;return function(){var y=f;f=q;try{return A.apply(this,arguments)}finally{f=y}}}})(Df);Af.exports=Df;var qg=Af.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug=L,en=qg;function O(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jf=new Set,ii={};function Nt(e,n){pr(e,n),pr(e+"Capture",n)}function pr(e,n){for(ii[e]=n,e=0;e<n.length;e++)jf.add(n[e])}var Rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zl=Object.prototype.hasOwnProperty,$g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ac={},oc={};function Vg(e){return zl.call(oc,e)?!0:zl.call(ac,e)?!1:$g.test(e)?oc[e]=!0:(ac[e]=!0,!1)}function Qg(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Hg(e,n,t,r){if(n===null||typeof n>"u"||Qg(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Me(e,n,t,r,i,a,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=a,this.removeEmptyString=o}var Pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Pe[e]=new Me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Pe[n]=new Me(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Pe[e]=new Me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Pe[e]=new Me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Pe[e]=new Me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Pe[e]=new Me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Pe[e]=new Me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Pe[e]=new Me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Pe[e]=new Me(e,5,!1,e.toLowerCase(),null,!1,!1)});var Bs=/[\-:]([a-z])/g;function qs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Bs,qs);Pe[n]=new Me(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Bs,qs);Pe[n]=new Me(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Bs,qs);Pe[n]=new Me(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Pe[e]=new Me(e,1,!1,e.toLowerCase(),null,!1,!1)});Pe.xlinkHref=new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Pe[e]=new Me(e,1,!1,e.toLowerCase(),null,!0,!0)});function Us(e,n,t,r){var i=Pe.hasOwnProperty(n)?Pe[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Hg(n,t,i,r)&&(t=null),r||i===null?Vg(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var qn=Ug.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fi=Symbol.for("react.element"),Wt=Symbol.for("react.portal"),Kt=Symbol.for("react.fragment"),$s=Symbol.for("react.strict_mode"),Ll=Symbol.for("react.profiler"),Nf=Symbol.for("react.provider"),Rf=Symbol.for("react.context"),Vs=Symbol.for("react.forward_ref"),Ol=Symbol.for("react.suspense"),Tl=Symbol.for("react.suspense_list"),Qs=Symbol.for("react.memo"),Kn=Symbol.for("react.lazy"),Mf=Symbol.for("react.offscreen"),lc=Symbol.iterator;function Lr(e){return e===null||typeof e!="object"?null:(e=lc&&e[lc]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Object.assign,Ao;function Br(e){if(Ao===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ao=n&&n[1]||""}return`
`+Ao+e}var Do=!1;function jo(e,n){if(!e||Do)return"";Do=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,l=a.length-1;1<=o&&0<=l&&i[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==a[l]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{Do=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Br(e):""}function Wg(e){switch(e.tag){case 5:return Br(e.type);case 16:return Br("Lazy");case 13:return Br("Suspense");case 19:return Br("SuspenseList");case 0:case 2:case 15:return e=jo(e.type,!1),e;case 11:return e=jo(e.type.render,!1),e;case 1:return e=jo(e.type,!0),e;default:return""}}function Il(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kt:return"Fragment";case Wt:return"Portal";case Ll:return"Profiler";case $s:return"StrictMode";case Ol:return"Suspense";case Tl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Rf:return(e.displayName||"Context")+".Consumer";case Nf:return(e._context.displayName||"Context")+".Provider";case Vs:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Qs:return n=e.displayName||null,n!==null?n:Il(e.type)||"Memo";case Kn:n=e._payload,e=e._init;try{return Il(e(n))}catch{}}return null}function Kg(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Il(n);case 8:return n===$s?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function dt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ff(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Gg(e){var n=Ff(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,a=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Bi(e){e._valueTracker||(e._valueTracker=Gg(e))}function Bf(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Ff(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Ea(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Al(e,n){var t=n.checked;return pe({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function sc(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=dt(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function qf(e,n){n=n.checked,n!=null&&Us(e,"checked",n,!1)}function Dl(e,n){qf(e,n);var t=dt(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?jl(e,n.type,t):n.hasOwnProperty("defaultValue")&&jl(e,n.type,dt(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function uc(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function jl(e,n,t){(n!=="number"||Ea(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var qr=Array.isArray;function or(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+dt(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Nl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(O(91));return pe({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cc(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(O(92));if(qr(t)){if(1<t.length)throw Error(O(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:dt(t)}}function Uf(e,n){var t=dt(n.value),r=dt(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function dc(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function $f(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?$f(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qi,Vf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(qi=qi||document.createElement("div"),qi.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=qi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ai(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Qr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yg=["Webkit","ms","Moz","O"];Object.keys(Qr).forEach(function(e){Yg.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Qr[n]=Qr[e]})});function Qf(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Qr.hasOwnProperty(e)&&Qr[e]?(""+n).trim():n+"px"}function Hf(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=Qf(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var Xg=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ml(e,n){if(n){if(Xg[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(O(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(O(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(O(61))}if(n.style!=null&&typeof n.style!="object")throw Error(O(62))}}function Fl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bl=null;function Hs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ql=null,lr=null,sr=null;function fc(e){if(e=zi(e)){if(typeof ql!="function")throw Error(O(280));var n=e.stateNode;n&&(n=co(n),ql(e.stateNode,e.type,n))}}function Wf(e){lr?sr?sr.push(e):sr=[e]:lr=e}function Kf(){if(lr){var e=lr,n=sr;if(sr=lr=null,fc(e),n)for(e=0;e<n.length;e++)fc(n[e])}}function Gf(e,n){return e(n)}function Yf(){}var No=!1;function Xf(e,n,t){if(No)return e(n,t);No=!0;try{return Gf(e,n,t)}finally{No=!1,(lr!==null||sr!==null)&&(Yf(),Kf())}}function oi(e,n){var t=e.stateNode;if(t===null)return null;var r=co(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(O(231,n,typeof t));return t}var Ul=!1;if(Rn)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){Ul=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{Ul=!1}function Jg(e,n,t,r,i,a,o,l,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(d){this.onError(d)}}var Hr=!1,ba=null,Pa=!1,$l=null,Zg={onError:function(e){Hr=!0,ba=e}};function ev(e,n,t,r,i,a,o,l,s){Hr=!1,ba=null,Jg.apply(Zg,arguments)}function nv(e,n,t,r,i,a,o,l,s){if(ev.apply(this,arguments),Hr){if(Hr){var u=ba;Hr=!1,ba=null}else throw Error(O(198));Pa||(Pa=!0,$l=u)}}function Rt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Jf(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function pc(e){if(Rt(e)!==e)throw Error(O(188))}function tv(e){var n=e.alternate;if(!n){if(n=Rt(e),n===null)throw Error(O(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===t)return pc(i),e;if(a===r)return pc(i),n;a=a.sibling}throw Error(O(188))}if(t.return!==r.return)t=i,r=a;else{for(var o=!1,l=i.child;l;){if(l===t){o=!0,t=i,r=a;break}if(l===r){o=!0,r=i,t=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===t){o=!0,t=a,r=i;break}if(l===r){o=!0,r=a,t=i;break}l=l.sibling}if(!o)throw Error(O(189))}}if(t.alternate!==r)throw Error(O(190))}if(t.tag!==3)throw Error(O(188));return t.stateNode.current===t?e:n}function Zf(e){return e=tv(e),e!==null?ep(e):null}function ep(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ep(e);if(n!==null)return n;e=e.sibling}return null}var np=en.unstable_scheduleCallback,mc=en.unstable_cancelCallback,rv=en.unstable_shouldYield,iv=en.unstable_requestPaint,he=en.unstable_now,av=en.unstable_getCurrentPriorityLevel,Ws=en.unstable_ImmediatePriority,tp=en.unstable_UserBlockingPriority,_a=en.unstable_NormalPriority,ov=en.unstable_LowPriority,rp=en.unstable_IdlePriority,oo=null,_n=null;function lv(e){if(_n&&typeof _n.onCommitFiberRoot=="function")try{_n.onCommitFiberRoot(oo,e,void 0,(e.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:cv,sv=Math.log,uv=Math.LN2;function cv(e){return e>>>=0,e===0?32:31-(sv(e)/uv|0)|0}var Ui=64,$i=4194304;function Ur(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function za(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=t&268435455;if(o!==0){var l=o&~i;l!==0?r=Ur(l):(a&=o,a!==0&&(r=Ur(a)))}else o=t&~i,o!==0?r=Ur(o):a!==0&&(r=Ur(a));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,a=n&-n,i>=a||i===16&&(a&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-yn(n),i=1<<t,r|=e[t],n&=~i;return r}function dv(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fv(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-yn(a),l=1<<o,s=i[o];s===-1?(!(l&t)||l&r)&&(i[o]=dv(l,n)):s<=n&&(e.expiredLanes|=l),a&=~l}}function Vl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ip(){var e=Ui;return Ui<<=1,!(Ui&4194240)&&(Ui=64),e}function Ro(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Pi(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-yn(n),e[n]=t}function pv(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-yn(t),a=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~a}}function Ks(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-yn(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var ne=0;function ap(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var op,Gs,lp,sp,up,Ql=!1,Vi=[],nt=null,tt=null,rt=null,li=new Map,si=new Map,Yn=[],mv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hc(e,n){switch(e){case"focusin":case"focusout":nt=null;break;case"dragenter":case"dragleave":tt=null;break;case"mouseover":case"mouseout":rt=null;break;case"pointerover":case"pointerout":li.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":si.delete(n.pointerId)}}function Tr(e,n,t,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},n!==null&&(n=zi(n),n!==null&&Gs(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function hv(e,n,t,r,i){switch(n){case"focusin":return nt=Tr(nt,e,n,t,r,i),!0;case"dragenter":return tt=Tr(tt,e,n,t,r,i),!0;case"mouseover":return rt=Tr(rt,e,n,t,r,i),!0;case"pointerover":var a=i.pointerId;return li.set(a,Tr(li.get(a)||null,e,n,t,r,i)),!0;case"gotpointercapture":return a=i.pointerId,si.set(a,Tr(si.get(a)||null,e,n,t,r,i)),!0}return!1}function cp(e){var n=Et(e.target);if(n!==null){var t=Rt(n);if(t!==null){if(n=t.tag,n===13){if(n=Jf(t),n!==null){e.blockedOn=n,up(e.priority,function(){lp(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ca(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Hl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Bl=r,t.target.dispatchEvent(r),Bl=null}else return n=zi(t),n!==null&&Gs(n),e.blockedOn=t,!1;n.shift()}return!0}function gc(e,n,t){ca(e)&&t.delete(n)}function gv(){Ql=!1,nt!==null&&ca(nt)&&(nt=null),tt!==null&&ca(tt)&&(tt=null),rt!==null&&ca(rt)&&(rt=null),li.forEach(gc),si.forEach(gc)}function Ir(e,n){e.blockedOn===n&&(e.blockedOn=null,Ql||(Ql=!0,en.unstable_scheduleCallback(en.unstable_NormalPriority,gv)))}function ui(e){function n(i){return Ir(i,e)}if(0<Vi.length){Ir(Vi[0],e);for(var t=1;t<Vi.length;t++){var r=Vi[t];r.blockedOn===e&&(r.blockedOn=null)}}for(nt!==null&&Ir(nt,e),tt!==null&&Ir(tt,e),rt!==null&&Ir(rt,e),li.forEach(n),si.forEach(n),t=0;t<Yn.length;t++)r=Yn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Yn.length&&(t=Yn[0],t.blockedOn===null);)cp(t),t.blockedOn===null&&Yn.shift()}var ur=qn.ReactCurrentBatchConfig,La=!0;function vv(e,n,t,r){var i=ne,a=ur.transition;ur.transition=null;try{ne=1,Ys(e,n,t,r)}finally{ne=i,ur.transition=a}}function yv(e,n,t,r){var i=ne,a=ur.transition;ur.transition=null;try{ne=4,Ys(e,n,t,r)}finally{ne=i,ur.transition=a}}function Ys(e,n,t,r){if(La){var i=Hl(e,n,t,r);if(i===null)Wo(e,n,r,Oa,t),hc(e,r);else if(hv(i,e,n,t,r))r.stopPropagation();else if(hc(e,r),n&4&&-1<mv.indexOf(e)){for(;i!==null;){var a=zi(i);if(a!==null&&op(a),a=Hl(e,n,t,r),a===null&&Wo(e,n,r,Oa,t),a===i)break;i=a}i!==null&&r.stopPropagation()}else Wo(e,n,r,null,t)}}var Oa=null;function Hl(e,n,t,r){if(Oa=null,e=Hs(r),e=Et(e),e!==null)if(n=Rt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Jf(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Oa=e,null}function dp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(av()){case Ws:return 1;case tp:return 4;case _a:case ov:return 16;case rp:return 536870912;default:return 16}default:return 16}}var Jn=null,Xs=null,da=null;function fp(){if(da)return da;var e,n=Xs,t=n.length,r,i="value"in Jn?Jn.value:Jn.textContent,a=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[a-r];r++);return da=i.slice(e,1<r?1-r:void 0)}function fa(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Qi(){return!0}function vc(){return!1}function tn(e){function n(t,r,i,a,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Qi:vc,this.isPropagationStopped=vc,this}return pe(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Qi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Qi)},persist:function(){},isPersistent:Qi}),n}var Cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Js=tn(Cr),_i=pe({},Cr,{view:0,detail:0}),xv=tn(_i),Mo,Fo,Ar,lo=pe({},_i,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ar&&(Ar&&e.type==="mousemove"?(Mo=e.screenX-Ar.screenX,Fo=e.screenY-Ar.screenY):Fo=Mo=0,Ar=e),Mo)},movementY:function(e){return"movementY"in e?e.movementY:Fo}}),yc=tn(lo),kv=pe({},lo,{dataTransfer:0}),wv=tn(kv),Sv=pe({},_i,{relatedTarget:0}),Bo=tn(Sv),Cv=pe({},Cr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ev=tn(Cv),bv=pe({},Cr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pv=tn(bv),_v=pe({},Cr,{data:0}),xc=tn(_v),zv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ov={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ov[e])?!!n[e]:!1}function Zs(){return Tv}var Iv=pe({},_i,{key:function(e){if(e.key){var n=zv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=fa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zs,charCode:function(e){return e.type==="keypress"?fa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Av=tn(Iv),Dv=pe({},lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kc=tn(Dv),jv=pe({},_i,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zs}),Nv=tn(jv),Rv=pe({},Cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mv=tn(Rv),Fv=pe({},lo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bv=tn(Fv),qv=[9,13,27,32],eu=Rn&&"CompositionEvent"in window,Wr=null;Rn&&"documentMode"in document&&(Wr=document.documentMode);var Uv=Rn&&"TextEvent"in window&&!Wr,pp=Rn&&(!eu||Wr&&8<Wr&&11>=Wr),wc=" ",Sc=!1;function mp(e,n){switch(e){case"keyup":return qv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gt=!1;function $v(e,n){switch(e){case"compositionend":return hp(n);case"keypress":return n.which!==32?null:(Sc=!0,wc);case"textInput":return e=n.data,e===wc&&Sc?null:e;default:return null}}function Vv(e,n){if(Gt)return e==="compositionend"||!eu&&mp(e,n)?(e=fp(),da=Xs=Jn=null,Gt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return pp&&n.locale!=="ko"?null:n.data;default:return null}}var Qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Qv[e.type]:n==="textarea"}function gp(e,n,t,r){Wf(r),n=Ta(n,"onChange"),0<n.length&&(t=new Js("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Kr=null,ci=null;function Hv(e){_p(e,0)}function so(e){var n=Jt(e);if(Bf(n))return e}function Wv(e,n){if(e==="change")return n}var vp=!1;if(Rn){var qo;if(Rn){var Uo="oninput"in document;if(!Uo){var Ec=document.createElement("div");Ec.setAttribute("oninput","return;"),Uo=typeof Ec.oninput=="function"}qo=Uo}else qo=!1;vp=qo&&(!document.documentMode||9<document.documentMode)}function bc(){Kr&&(Kr.detachEvent("onpropertychange",yp),ci=Kr=null)}function yp(e){if(e.propertyName==="value"&&so(ci)){var n=[];gp(n,ci,e,Hs(e)),Xf(Hv,n)}}function Kv(e,n,t){e==="focusin"?(bc(),Kr=n,ci=t,Kr.attachEvent("onpropertychange",yp)):e==="focusout"&&bc()}function Gv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return so(ci)}function Yv(e,n){if(e==="click")return so(n)}function Xv(e,n){if(e==="input"||e==="change")return so(n)}function Jv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var wn=typeof Object.is=="function"?Object.is:Jv;function di(e,n){if(wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!zl.call(n,i)||!wn(e[i],n[i]))return!1}return!0}function Pc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _c(e,n){var t=Pc(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Pc(t)}}function xp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?xp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function kp(){for(var e=window,n=Ea();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ea(e.document)}return n}function nu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Zv(e){var n=kp(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&xp(t.ownerDocument.documentElement,t)){if(r!==null&&nu(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=_c(t,a);var o=_c(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ey=Rn&&"documentMode"in document&&11>=document.documentMode,Yt=null,Wl=null,Gr=null,Kl=!1;function zc(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Kl||Yt==null||Yt!==Ea(r)||(r=Yt,"selectionStart"in r&&nu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gr&&di(Gr,r)||(Gr=r,r=Ta(Wl,"onSelect"),0<r.length&&(n=new Js("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Yt)))}function Hi(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Xt={animationend:Hi("Animation","AnimationEnd"),animationiteration:Hi("Animation","AnimationIteration"),animationstart:Hi("Animation","AnimationStart"),transitionend:Hi("Transition","TransitionEnd")},$o={},wp={};Rn&&(wp=document.createElement("div").style,"AnimationEvent"in window||(delete Xt.animationend.animation,delete Xt.animationiteration.animation,delete Xt.animationstart.animation),"TransitionEvent"in window||delete Xt.transitionend.transition);function uo(e){if($o[e])return $o[e];if(!Xt[e])return e;var n=Xt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in wp)return $o[e]=n[t];return e}var Sp=uo("animationend"),Cp=uo("animationiteration"),Ep=uo("animationstart"),bp=uo("transitionend"),Pp=new Map,Lc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pt(e,n){Pp.set(e,n),Nt(n,[e])}for(var Vo=0;Vo<Lc.length;Vo++){var Qo=Lc[Vo],ny=Qo.toLowerCase(),ty=Qo[0].toUpperCase()+Qo.slice(1);pt(ny,"on"+ty)}pt(Sp,"onAnimationEnd");pt(Cp,"onAnimationIteration");pt(Ep,"onAnimationStart");pt("dblclick","onDoubleClick");pt("focusin","onFocus");pt("focusout","onBlur");pt(bp,"onTransitionEnd");pr("onMouseEnter",["mouseout","mouseover"]);pr("onMouseLeave",["mouseout","mouseover"]);pr("onPointerEnter",["pointerout","pointerover"]);pr("onPointerLeave",["pointerout","pointerover"]);Nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ry=new Set("cancel close invalid load scroll toggle".split(" ").concat($r));function Oc(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,nv(r,n,void 0,e),e.currentTarget=null}function _p(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var a=void 0;if(n)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==a&&i.isPropagationStopped())break e;Oc(i,l,u),a=s}else for(o=0;o<r.length;o++){if(l=r[o],s=l.instance,u=l.currentTarget,l=l.listener,s!==a&&i.isPropagationStopped())break e;Oc(i,l,u),a=s}}}if(Pa)throw e=$l,Pa=!1,$l=null,e}function se(e,n){var t=n[Zl];t===void 0&&(t=n[Zl]=new Set);var r=e+"__bubble";t.has(r)||(zp(n,e,2,!1),t.add(r))}function Ho(e,n,t){var r=0;n&&(r|=4),zp(t,e,r,n)}var Wi="_reactListening"+Math.random().toString(36).slice(2);function fi(e){if(!e[Wi]){e[Wi]=!0,jf.forEach(function(t){t!=="selectionchange"&&(ry.has(t)||Ho(t,!1,e),Ho(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Wi]||(n[Wi]=!0,Ho("selectionchange",!1,n))}}function zp(e,n,t,r){switch(dp(n)){case 1:var i=vv;break;case 4:i=yv;break;default:i=Ys}t=i.bind(null,n,t,e),i=void 0,!Ul||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Wo(e,n,t,r,i){var a=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Et(l),o===null)return;if(s=o.tag,s===5||s===6){r=a=o;continue e}l=l.parentNode}}r=r.return}Xf(function(){var u=a,d=Hs(t),c=[];e:{var f=Pp.get(e);if(f!==void 0){var p=Js,g=e;switch(e){case"keypress":if(fa(t)===0)break e;case"keydown":case"keyup":p=Av;break;case"focusin":g="focus",p=Bo;break;case"focusout":g="blur",p=Bo;break;case"beforeblur":case"afterblur":p=Bo;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=yc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=wv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Nv;break;case Sp:case Cp:case Ep:p=Ev;break;case bp:p=Mv;break;case"scroll":p=xv;break;case"wheel":p=Bv;break;case"copy":case"cut":case"paste":p=Pv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=kc}var x=(n&4)!==0,b=!x&&e==="scroll",m=x?f!==null?f+"Capture":null:f;x=[];for(var h=u,v;h!==null;){v=h;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,m!==null&&(E=oi(h,m),E!=null&&x.push(pi(h,E,v)))),b)break;h=h.return}0<x.length&&(f=new p(f,g,null,t,d),c.push({event:f,listeners:x}))}}if(!(n&7)){e:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&t!==Bl&&(g=t.relatedTarget||t.fromElement)&&(Et(g)||g[Mn]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=u,g=g?Et(g):null,g!==null&&(b=Rt(g),g!==b||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(x=yc,E="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=kc,E="onPointerLeave",m="onPointerEnter",h="pointer"),b=p==null?f:Jt(p),v=g==null?f:Jt(g),f=new x(E,h+"leave",p,t,d),f.target=b,f.relatedTarget=v,E=null,Et(d)===u&&(x=new x(m,h+"enter",g,t,d),x.target=v,x.relatedTarget=b,E=x),b=E,p&&g)n:{for(x=p,m=g,h=0,v=x;v;v=Ut(v))h++;for(v=0,E=m;E;E=Ut(E))v++;for(;0<h-v;)x=Ut(x),h--;for(;0<v-h;)m=Ut(m),v--;for(;h--;){if(x===m||m!==null&&x===m.alternate)break n;x=Ut(x),m=Ut(m)}x=null}else x=null;p!==null&&Tc(c,f,p,x,!1),g!==null&&b!==null&&Tc(c,b,g,x,!0)}}e:{if(f=u?Jt(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var P=Wv;else if(Cc(f))if(vp)P=Xv;else{P=Gv;var C=Kv}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(P=Yv);if(P&&(P=P(e,u))){gp(c,P,t,d);break e}C&&C(e,f,u),e==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&jl(f,"number",f.value)}switch(C=u?Jt(u):window,e){case"focusin":(Cc(C)||C.contentEditable==="true")&&(Yt=C,Wl=u,Gr=null);break;case"focusout":Gr=Wl=Yt=null;break;case"mousedown":Kl=!0;break;case"contextmenu":case"mouseup":case"dragend":Kl=!1,zc(c,t,d);break;case"selectionchange":if(ey)break;case"keydown":case"keyup":zc(c,t,d)}var z;if(eu)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Gt?mp(e,t)&&(I="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(I="onCompositionStart");I&&(pp&&t.locale!=="ko"&&(Gt||I!=="onCompositionStart"?I==="onCompositionEnd"&&Gt&&(z=fp()):(Jn=d,Xs="value"in Jn?Jn.value:Jn.textContent,Gt=!0)),C=Ta(u,I),0<C.length&&(I=new xc(I,e,null,t,d),c.push({event:I,listeners:C}),z?I.data=z:(z=hp(t),z!==null&&(I.data=z)))),(z=Uv?$v(e,t):Vv(e,t))&&(u=Ta(u,"onBeforeInput"),0<u.length&&(d=new xc("onBeforeInput","beforeinput",null,t,d),c.push({event:d,listeners:u}),d.data=z))}_p(c,n)})}function pi(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ta(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=oi(e,t),a!=null&&r.unshift(pi(e,a,i)),a=oi(e,n),a!=null&&r.push(pi(e,a,i))),e=e.return}return r}function Ut(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Tc(e,n,t,r,i){for(var a=n._reactName,o=[];t!==null&&t!==r;){var l=t,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=oi(t,a),s!=null&&o.unshift(pi(t,s,l))):i||(s=oi(t,a),s!=null&&o.push(pi(t,s,l)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var iy=/\r\n?/g,ay=/\u0000|\uFFFD/g;function Ic(e){return(typeof e=="string"?e:""+e).replace(iy,`
`).replace(ay,"")}function Ki(e,n,t){if(n=Ic(n),Ic(e)!==n&&t)throw Error(O(425))}function Ia(){}var Gl=null,Yl=null;function Xl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Jl=typeof setTimeout=="function"?setTimeout:void 0,oy=typeof clearTimeout=="function"?clearTimeout:void 0,Ac=typeof Promise=="function"?Promise:void 0,ly=typeof queueMicrotask=="function"?queueMicrotask:typeof Ac<"u"?function(e){return Ac.resolve(null).then(e).catch(sy)}:Jl;function sy(e){setTimeout(function(){throw e})}function Ko(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),ui(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);ui(n)}function it(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Dc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Er=Math.random().toString(36).slice(2),Pn="__reactFiber$"+Er,mi="__reactProps$"+Er,Mn="__reactContainer$"+Er,Zl="__reactEvents$"+Er,uy="__reactListeners$"+Er,cy="__reactHandles$"+Er;function Et(e){var n=e[Pn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Mn]||t[Pn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Dc(e);e!==null;){if(t=e[Pn])return t;e=Dc(e)}return n}e=t,t=e.parentNode}return null}function zi(e){return e=e[Pn]||e[Mn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(O(33))}function co(e){return e[mi]||null}var es=[],Zt=-1;function mt(e){return{current:e}}function ue(e){0>Zt||(e.current=es[Zt],es[Zt]=null,Zt--)}function ae(e,n){Zt++,es[Zt]=e.current,e.current=n}var ft={},Te=mt(ft),Ue=mt(!1),Ot=ft;function mr(e,n){var t=e.type.contextTypes;if(!t)return ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in t)i[a]=n[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function $e(e){return e=e.childContextTypes,e!=null}function Aa(){ue(Ue),ue(Te)}function jc(e,n,t){if(Te.current!==ft)throw Error(O(168));ae(Te,n),ae(Ue,t)}function Lp(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(O(108,Kg(e)||"Unknown",i));return pe({},t,r)}function Da(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ft,Ot=Te.current,ae(Te,e),ae(Ue,Ue.current),!0}function Nc(e,n,t){var r=e.stateNode;if(!r)throw Error(O(169));t?(e=Lp(e,n,Ot),r.__reactInternalMemoizedMergedChildContext=e,ue(Ue),ue(Te),ae(Te,e)):ue(Ue),ae(Ue,t)}var An=null,fo=!1,Go=!1;function Op(e){An===null?An=[e]:An.push(e)}function dy(e){fo=!0,Op(e)}function ht(){if(!Go&&An!==null){Go=!0;var e=0,n=ne;try{var t=An;for(ne=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}An=null,fo=!1}catch(i){throw An!==null&&(An=An.slice(e+1)),np(Ws,ht),i}finally{ne=n,Go=!1}}return null}var er=[],nr=0,ja=null,Na=0,rn=[],an=0,Tt=null,Dn=1,jn="";function wt(e,n){er[nr++]=Na,er[nr++]=ja,ja=e,Na=n}function Tp(e,n,t){rn[an++]=Dn,rn[an++]=jn,rn[an++]=Tt,Tt=e;var r=Dn;e=jn;var i=32-yn(r)-1;r&=~(1<<i),t+=1;var a=32-yn(n)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Dn=1<<32-yn(n)+i|t<<i|r,jn=a+e}else Dn=1<<a|t<<i|r,jn=e}function tu(e){e.return!==null&&(wt(e,1),Tp(e,1,0))}function ru(e){for(;e===ja;)ja=er[--nr],er[nr]=null,Na=er[--nr],er[nr]=null;for(;e===Tt;)Tt=rn[--an],rn[an]=null,jn=rn[--an],rn[an]=null,Dn=rn[--an],rn[an]=null}var Je=null,Xe=null,ce=!1,vn=null;function Ip(e,n){var t=ln(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Rc(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Je=e,Xe=it(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Je=e,Xe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Tt!==null?{id:Dn,overflow:jn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=ln(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Je=e,Xe=null,!0):!1;default:return!1}}function ns(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ts(e){if(ce){var n=Xe;if(n){var t=n;if(!Rc(e,n)){if(ns(e))throw Error(O(418));n=it(t.nextSibling);var r=Je;n&&Rc(e,n)?Ip(r,t):(e.flags=e.flags&-4097|2,ce=!1,Je=e)}}else{if(ns(e))throw Error(O(418));e.flags=e.flags&-4097|2,ce=!1,Je=e}}}function Mc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Je=e}function Gi(e){if(e!==Je)return!1;if(!ce)return Mc(e),ce=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Xl(e.type,e.memoizedProps)),n&&(n=Xe)){if(ns(e))throw Ap(),Error(O(418));for(;n;)Ip(e,n),n=it(n.nextSibling)}if(Mc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(O(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Xe=it(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Xe=null}}else Xe=Je?it(e.stateNode.nextSibling):null;return!0}function Ap(){for(var e=Xe;e;)e=it(e.nextSibling)}function hr(){Xe=Je=null,ce=!1}function iu(e){vn===null?vn=[e]:vn.push(e)}var fy=qn.ReactCurrentBatchConfig;function Dr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(O(309));var r=t.stateNode}if(!r)throw Error(O(147,e));var i=r,a=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===a?n.ref:(n=function(o){var l=i.refs;o===null?delete l[a]:l[a]=o},n._stringRef=a,n)}if(typeof e!="string")throw Error(O(284));if(!t._owner)throw Error(O(290,e))}return e}function Yi(e,n){throw e=Object.prototype.toString.call(n),Error(O(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Fc(e){var n=e._init;return n(e._payload)}function Dp(e){function n(m,h){if(e){var v=m.deletions;v===null?(m.deletions=[h],m.flags|=16):v.push(h)}}function t(m,h){if(!e)return null;for(;h!==null;)n(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=st(m,h),m.index=0,m.sibling=null,m}function a(m,h,v){return m.index=v,e?(v=m.alternate,v!==null?(v=v.index,v<h?(m.flags|=2,h):v):(m.flags|=2,h)):(m.flags|=1048576,h)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,h,v,E){return h===null||h.tag!==6?(h=tl(v,m.mode,E),h.return=m,h):(h=i(h,v),h.return=m,h)}function s(m,h,v,E){var P=v.type;return P===Kt?d(m,h,v.props.children,E,v.key):h!==null&&(h.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Kn&&Fc(P)===h.type)?(E=i(h,v.props),E.ref=Dr(m,h,v),E.return=m,E):(E=xa(v.type,v.key,v.props,null,m.mode,E),E.ref=Dr(m,h,v),E.return=m,E)}function u(m,h,v,E){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=rl(v,m.mode,E),h.return=m,h):(h=i(h,v.children||[]),h.return=m,h)}function d(m,h,v,E,P){return h===null||h.tag!==7?(h=Lt(v,m.mode,E,P),h.return=m,h):(h=i(h,v),h.return=m,h)}function c(m,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=tl(""+h,m.mode,v),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Fi:return v=xa(h.type,h.key,h.props,null,m.mode,v),v.ref=Dr(m,null,h),v.return=m,v;case Wt:return h=rl(h,m.mode,v),h.return=m,h;case Kn:var E=h._init;return c(m,E(h._payload),v)}if(qr(h)||Lr(h))return h=Lt(h,m.mode,v,null),h.return=m,h;Yi(m,h)}return null}function f(m,h,v,E){var P=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:l(m,h,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Fi:return v.key===P?s(m,h,v,E):null;case Wt:return v.key===P?u(m,h,v,E):null;case Kn:return P=v._init,f(m,h,P(v._payload),E)}if(qr(v)||Lr(v))return P!==null?null:d(m,h,v,E,null);Yi(m,v)}return null}function p(m,h,v,E,P){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(v)||null,l(h,m,""+E,P);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Fi:return m=m.get(E.key===null?v:E.key)||null,s(h,m,E,P);case Wt:return m=m.get(E.key===null?v:E.key)||null,u(h,m,E,P);case Kn:var C=E._init;return p(m,h,v,C(E._payload),P)}if(qr(E)||Lr(E))return m=m.get(v)||null,d(h,m,E,P,null);Yi(h,E)}return null}function g(m,h,v,E){for(var P=null,C=null,z=h,I=h=0,R=null;z!==null&&I<v.length;I++){z.index>I?(R=z,z=null):R=z.sibling;var S=f(m,z,v[I],E);if(S===null){z===null&&(z=R);break}e&&z&&S.alternate===null&&n(m,z),h=a(S,h,I),C===null?P=S:C.sibling=S,C=S,z=R}if(I===v.length)return t(m,z),ce&&wt(m,I),P;if(z===null){for(;I<v.length;I++)z=c(m,v[I],E),z!==null&&(h=a(z,h,I),C===null?P=z:C.sibling=z,C=z);return ce&&wt(m,I),P}for(z=r(m,z);I<v.length;I++)R=p(z,m,I,v[I],E),R!==null&&(e&&R.alternate!==null&&z.delete(R.key===null?I:R.key),h=a(R,h,I),C===null?P=R:C.sibling=R,C=R);return e&&z.forEach(function(j){return n(m,j)}),ce&&wt(m,I),P}function x(m,h,v,E){var P=Lr(v);if(typeof P!="function")throw Error(O(150));if(v=P.call(v),v==null)throw Error(O(151));for(var C=P=null,z=h,I=h=0,R=null,S=v.next();z!==null&&!S.done;I++,S=v.next()){z.index>I?(R=z,z=null):R=z.sibling;var j=f(m,z,S.value,E);if(j===null){z===null&&(z=R);break}e&&z&&j.alternate===null&&n(m,z),h=a(j,h,I),C===null?P=j:C.sibling=j,C=j,z=R}if(S.done)return t(m,z),ce&&wt(m,I),P;if(z===null){for(;!S.done;I++,S=v.next())S=c(m,S.value,E),S!==null&&(h=a(S,h,I),C===null?P=S:C.sibling=S,C=S);return ce&&wt(m,I),P}for(z=r(m,z);!S.done;I++,S=v.next())S=p(z,m,I,S.value,E),S!==null&&(e&&S.alternate!==null&&z.delete(S.key===null?I:S.key),h=a(S,h,I),C===null?P=S:C.sibling=S,C=S);return e&&z.forEach(function(F){return n(m,F)}),ce&&wt(m,I),P}function b(m,h,v,E){if(typeof v=="object"&&v!==null&&v.type===Kt&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Fi:e:{for(var P=v.key,C=h;C!==null;){if(C.key===P){if(P=v.type,P===Kt){if(C.tag===7){t(m,C.sibling),h=i(C,v.props.children),h.return=m,m=h;break e}}else if(C.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Kn&&Fc(P)===C.type){t(m,C.sibling),h=i(C,v.props),h.ref=Dr(m,C,v),h.return=m,m=h;break e}t(m,C);break}else n(m,C);C=C.sibling}v.type===Kt?(h=Lt(v.props.children,m.mode,E,v.key),h.return=m,m=h):(E=xa(v.type,v.key,v.props,null,m.mode,E),E.ref=Dr(m,h,v),E.return=m,m=E)}return o(m);case Wt:e:{for(C=v.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){t(m,h.sibling),h=i(h,v.children||[]),h.return=m,m=h;break e}else{t(m,h);break}else n(m,h);h=h.sibling}h=rl(v,m.mode,E),h.return=m,m=h}return o(m);case Kn:return C=v._init,b(m,h,C(v._payload),E)}if(qr(v))return g(m,h,v,E);if(Lr(v))return x(m,h,v,E);Yi(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(t(m,h.sibling),h=i(h,v),h.return=m,m=h):(t(m,h),h=tl(v,m.mode,E),h.return=m,m=h),o(m)):t(m,h)}return b}var gr=Dp(!0),jp=Dp(!1),Ra=mt(null),Ma=null,tr=null,au=null;function ou(){au=tr=Ma=null}function lu(e){var n=Ra.current;ue(Ra),e._currentValue=n}function rs(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function cr(e,n){Ma=e,au=tr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(qe=!0),e.firstContext=null)}function un(e){var n=e._currentValue;if(au!==e)if(e={context:e,memoizedValue:n,next:null},tr===null){if(Ma===null)throw Error(O(308));tr=e,Ma.dependencies={lanes:0,firstContext:e}}else tr=tr.next=e;return n}var bt=null;function su(e){bt===null?bt=[e]:bt.push(e)}function Np(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,su(n)):(t.next=i.next,i.next=t),n.interleaved=t,Fn(e,r)}function Fn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Gn=!1;function uu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rp(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function at(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Fn(e,t)}return i=r.interleaved,i===null?(n.next=n,su(r)):(n.next=i.next,i.next=n),r.interleaved=n,Fn(e,t)}function pa(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ks(e,t)}}function Bc(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,a=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};a===null?i=a=o:a=a.next=o,t=t.next}while(t!==null);a===null?i=a=n:a=a.next=n}else i=a=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Fa(e,n,t,r){var i=e.updateQueue;Gn=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,o===null?a=u:o.next=u,o=s;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=s))}if(a!==null){var c=i.baseState;o=0,d=u=s=null,l=a;do{var f=l.lane,p=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,x=l;switch(f=n,p=t,x.tag){case 1:if(g=x.payload,typeof g=="function"){c=g.call(p,c,f);break e}c=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,f=typeof g=="function"?g.call(p,c,f):g,f==null)break e;c=pe({},c,f);break e;case 2:Gn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=p,s=c):d=d.next=p,o|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(s=c),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=d,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else a===null&&(i.shared.lanes=0);At|=o,e.lanes=o,e.memoizedState=c}}function qc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(O(191,i));i.call(r)}}}var Li={},zn=mt(Li),hi=mt(Li),gi=mt(Li);function Pt(e){if(e===Li)throw Error(O(174));return e}function cu(e,n){switch(ae(gi,n),ae(hi,e),ae(zn,Li),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Rl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Rl(n,e)}ue(zn),ae(zn,n)}function vr(){ue(zn),ue(hi),ue(gi)}function Mp(e){Pt(gi.current);var n=Pt(zn.current),t=Rl(n,e.type);n!==t&&(ae(hi,e),ae(zn,t))}function du(e){hi.current===e&&(ue(zn),ue(hi))}var de=mt(0);function Ba(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Yo=[];function fu(){for(var e=0;e<Yo.length;e++)Yo[e]._workInProgressVersionPrimary=null;Yo.length=0}var ma=qn.ReactCurrentDispatcher,Xo=qn.ReactCurrentBatchConfig,It=0,fe=null,ye=null,we=null,qa=!1,Yr=!1,vi=0,py=0;function _e(){throw Error(O(321))}function pu(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!wn(e[t],n[t]))return!1;return!0}function mu(e,n,t,r,i,a){if(It=a,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ma.current=e===null||e.memoizedState===null?vy:yy,e=t(r,i),Yr){a=0;do{if(Yr=!1,vi=0,25<=a)throw Error(O(301));a+=1,we=ye=null,n.updateQueue=null,ma.current=xy,e=t(r,i)}while(Yr)}if(ma.current=Ua,n=ye!==null&&ye.next!==null,It=0,we=ye=fe=null,qa=!1,n)throw Error(O(300));return e}function hu(){var e=vi!==0;return vi=0,e}function En(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?fe.memoizedState=we=e:we=we.next=e,we}function cn(){if(ye===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var n=we===null?fe.memoizedState:we.next;if(n!==null)we=n,ye=e;else{if(e===null)throw Error(O(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},we===null?fe.memoizedState=we=e:we=we.next=e}return we}function yi(e,n){return typeof n=="function"?n(e):n}function Jo(e){var n=cn(),t=n.queue;if(t===null)throw Error(O(311));t.lastRenderedReducer=e;var r=ye,i=r.baseQueue,a=t.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,t.pending=null}if(i!==null){a=i.next,r=r.baseState;var l=o=null,s=null,u=a;do{var d=u.lane;if((It&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=c,o=r):s=s.next=c,fe.lanes|=d,At|=d}u=u.next}while(u!==null&&u!==a);s===null?o=r:s.next=l,wn(r,n.memoizedState)||(qe=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do a=i.lane,fe.lanes|=a,At|=a,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Zo(e){var n=cn(),t=n.queue;if(t===null)throw Error(O(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,a=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);wn(a,n.memoizedState)||(qe=!0),n.memoizedState=a,n.baseQueue===null&&(n.baseState=a),t.lastRenderedState=a}return[a,r]}function Fp(){}function Bp(e,n){var t=fe,r=cn(),i=n(),a=!wn(r.memoizedState,i);if(a&&(r.memoizedState=i,qe=!0),r=r.queue,gu($p.bind(null,t,r,e),[e]),r.getSnapshot!==n||a||we!==null&&we.memoizedState.tag&1){if(t.flags|=2048,xi(9,Up.bind(null,t,r,i,n),void 0,null),Se===null)throw Error(O(349));It&30||qp(t,n,i)}return i}function qp(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=fe.updateQueue,n===null?(n={lastEffect:null,stores:null},fe.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Up(e,n,t,r){n.value=t,n.getSnapshot=r,Vp(n)&&Qp(e)}function $p(e,n,t){return t(function(){Vp(n)&&Qp(e)})}function Vp(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!wn(e,t)}catch{return!0}}function Qp(e){var n=Fn(e,1);n!==null&&xn(n,e,1,-1)}function Uc(e){var n=En();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yi,lastRenderedState:e},n.queue=e,e=e.dispatch=gy.bind(null,fe,e),[n.memoizedState,e]}function xi(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=fe.updateQueue,n===null?(n={lastEffect:null,stores:null},fe.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Hp(){return cn().memoizedState}function ha(e,n,t,r){var i=En();fe.flags|=e,i.memoizedState=xi(1|n,t,void 0,r===void 0?null:r)}function po(e,n,t,r){var i=cn();r=r===void 0?null:r;var a=void 0;if(ye!==null){var o=ye.memoizedState;if(a=o.destroy,r!==null&&pu(r,o.deps)){i.memoizedState=xi(n,t,a,r);return}}fe.flags|=e,i.memoizedState=xi(1|n,t,a,r)}function $c(e,n){return ha(8390656,8,e,n)}function gu(e,n){return po(2048,8,e,n)}function Wp(e,n){return po(4,2,e,n)}function Kp(e,n){return po(4,4,e,n)}function Gp(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Yp(e,n,t){return t=t!=null?t.concat([e]):null,po(4,4,Gp.bind(null,n,e),t)}function vu(){}function Xp(e,n){var t=cn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&pu(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Jp(e,n){var t=cn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&pu(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Zp(e,n,t){return It&21?(wn(t,n)||(t=ip(),fe.lanes|=t,At|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,qe=!0),e.memoizedState=t)}function my(e,n){var t=ne;ne=t!==0&&4>t?t:4,e(!0);var r=Xo.transition;Xo.transition={};try{e(!1),n()}finally{ne=t,Xo.transition=r}}function em(){return cn().memoizedState}function hy(e,n,t){var r=lt(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},nm(e))tm(n,t);else if(t=Np(e,n,t,r),t!==null){var i=Ne();xn(t,e,r,i),rm(t,n,r)}}function gy(e,n,t){var r=lt(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(nm(e))tm(n,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=n.lastRenderedReducer,a!==null))try{var o=n.lastRenderedState,l=a(o,t);if(i.hasEagerState=!0,i.eagerState=l,wn(l,o)){var s=n.interleaved;s===null?(i.next=i,su(n)):(i.next=s.next,s.next=i),n.interleaved=i;return}}catch{}finally{}t=Np(e,n,i,r),t!==null&&(i=Ne(),xn(t,e,r,i),rm(t,n,r))}}function nm(e){var n=e.alternate;return e===fe||n!==null&&n===fe}function tm(e,n){Yr=qa=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function rm(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ks(e,t)}}var Ua={readContext:un,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useInsertionEffect:_e,useLayoutEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useMutableSource:_e,useSyncExternalStore:_e,useId:_e,unstable_isNewReconciler:!1},vy={readContext:un,useCallback:function(e,n){return En().memoizedState=[e,n===void 0?null:n],e},useContext:un,useEffect:$c,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,ha(4194308,4,Gp.bind(null,n,e),t)},useLayoutEffect:function(e,n){return ha(4194308,4,e,n)},useInsertionEffect:function(e,n){return ha(4,2,e,n)},useMemo:function(e,n){var t=En();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=En();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=hy.bind(null,fe,e),[r.memoizedState,e]},useRef:function(e){var n=En();return e={current:e},n.memoizedState=e},useState:Uc,useDebugValue:vu,useDeferredValue:function(e){return En().memoizedState=e},useTransition:function(){var e=Uc(!1),n=e[0];return e=my.bind(null,e[1]),En().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=fe,i=En();if(ce){if(t===void 0)throw Error(O(407));t=t()}else{if(t=n(),Se===null)throw Error(O(349));It&30||qp(r,n,t)}i.memoizedState=t;var a={value:t,getSnapshot:n};return i.queue=a,$c($p.bind(null,r,a,e),[e]),r.flags|=2048,xi(9,Up.bind(null,r,a,t,n),void 0,null),t},useId:function(){var e=En(),n=Se.identifierPrefix;if(ce){var t=jn,r=Dn;t=(r&~(1<<32-yn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=vi++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=py++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},yy={readContext:un,useCallback:Xp,useContext:un,useEffect:gu,useImperativeHandle:Yp,useInsertionEffect:Wp,useLayoutEffect:Kp,useMemo:Jp,useReducer:Jo,useRef:Hp,useState:function(){return Jo(yi)},useDebugValue:vu,useDeferredValue:function(e){var n=cn();return Zp(n,ye.memoizedState,e)},useTransition:function(){var e=Jo(yi)[0],n=cn().memoizedState;return[e,n]},useMutableSource:Fp,useSyncExternalStore:Bp,useId:em,unstable_isNewReconciler:!1},xy={readContext:un,useCallback:Xp,useContext:un,useEffect:gu,useImperativeHandle:Yp,useInsertionEffect:Wp,useLayoutEffect:Kp,useMemo:Jp,useReducer:Zo,useRef:Hp,useState:function(){return Zo(yi)},useDebugValue:vu,useDeferredValue:function(e){var n=cn();return ye===null?n.memoizedState=e:Zp(n,ye.memoizedState,e)},useTransition:function(){var e=Zo(yi)[0],n=cn().memoizedState;return[e,n]},useMutableSource:Fp,useSyncExternalStore:Bp,useId:em,unstable_isNewReconciler:!1};function hn(e,n){if(e&&e.defaultProps){n=pe({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function is(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:pe({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var mo={isMounted:function(e){return(e=e._reactInternals)?Rt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Ne(),i=lt(e),a=Nn(r,i);a.payload=n,t!=null&&(a.callback=t),n=at(e,a,i),n!==null&&(xn(n,e,i,r),pa(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Ne(),i=lt(e),a=Nn(r,i);a.tag=1,a.payload=n,t!=null&&(a.callback=t),n=at(e,a,i),n!==null&&(xn(n,e,i,r),pa(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ne(),r=lt(e),i=Nn(t,r);i.tag=2,n!=null&&(i.callback=n),n=at(e,i,r),n!==null&&(xn(n,e,r,t),pa(n,e,r))}};function Vc(e,n,t,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):n.prototype&&n.prototype.isPureReactComponent?!di(t,r)||!di(i,a):!0}function im(e,n,t){var r=!1,i=ft,a=n.contextType;return typeof a=="object"&&a!==null?a=un(a):(i=$e(n)?Ot:Te.current,r=n.contextTypes,a=(r=r!=null)?mr(e,i):ft),n=new n(t,a),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=mo,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),n}function Qc(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&mo.enqueueReplaceState(n,n.state,null)}function as(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},uu(e);var a=n.contextType;typeof a=="object"&&a!==null?i.context=un(a):(a=$e(n)?Ot:Te.current,i.context=mr(e,a)),i.state=e.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(is(e,n,a,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&mo.enqueueReplaceState(i,i.state,null),Fa(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function yr(e,n){try{var t="",r=n;do t+=Wg(r),r=r.return;while(r);var i=t}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:n,stack:i,digest:null}}function el(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function os(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var ky=typeof WeakMap=="function"?WeakMap:Map;function am(e,n,t){t=Nn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Va||(Va=!0,gs=r),os(e,n)},t}function om(e,n,t){t=Nn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){os(e,n)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(t.callback=function(){os(e,n),typeof r!="function"&&(ot===null?ot=new Set([this]):ot.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Hc(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new ky;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Dy.bind(null,e,n,t),n.then(e,e))}function Wc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Kc(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Nn(-1,1),n.tag=2,at(t,n,1))),t.lanes|=1),e)}var wy=qn.ReactCurrentOwner,qe=!1;function De(e,n,t,r){n.child=e===null?jp(n,null,t,r):gr(n,e.child,t,r)}function Gc(e,n,t,r,i){t=t.render;var a=n.ref;return cr(n,i),r=mu(e,n,t,r,a,i),t=hu(),e!==null&&!qe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Bn(e,n,i)):(ce&&t&&tu(n),n.flags|=1,De(e,n,r,i),n.child)}function Yc(e,n,t,r,i){if(e===null){var a=t.type;return typeof a=="function"&&!bu(a)&&a.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=a,lm(e,n,a,r,i)):(e=xa(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(t=t.compare,t=t!==null?t:di,t(o,r)&&e.ref===n.ref)return Bn(e,n,i)}return n.flags|=1,e=st(a,r),e.ref=n.ref,e.return=n,n.child=e}function lm(e,n,t,r,i){if(e!==null){var a=e.memoizedProps;if(di(a,r)&&e.ref===n.ref)if(qe=!1,n.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(qe=!0);else return n.lanes=e.lanes,Bn(e,n,i)}return ls(e,n,t,r,i)}function sm(e,n,t){var r=n.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(ir,Ke),Ke|=t;else{if(!(t&1073741824))return e=a!==null?a.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ae(ir,Ke),Ke|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:t,ae(ir,Ke),Ke|=r}else a!==null?(r=a.baseLanes|t,n.memoizedState=null):r=t,ae(ir,Ke),Ke|=r;return De(e,n,i,t),n.child}function um(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function ls(e,n,t,r,i){var a=$e(t)?Ot:Te.current;return a=mr(n,a),cr(n,i),t=mu(e,n,t,r,a,i),r=hu(),e!==null&&!qe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Bn(e,n,i)):(ce&&r&&tu(n),n.flags|=1,De(e,n,t,i),n.child)}function Xc(e,n,t,r,i){if($e(t)){var a=!0;Da(n)}else a=!1;if(cr(n,i),n.stateNode===null)ga(e,n),im(n,t,r),as(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,l=n.memoizedProps;o.props=l;var s=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=un(u):(u=$e(t)?Ot:Te.current,u=mr(n,u));var d=t.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Qc(n,o,r,u),Gn=!1;var f=n.memoizedState;o.state=f,Fa(n,r,o,i),s=n.memoizedState,l!==r||f!==s||Ue.current||Gn?(typeof d=="function"&&(is(n,t,d,r),s=n.memoizedState),(l=Gn||Vc(n,t,l,r,f,s,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),o.props=r,o.state=s,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,Rp(e,n),l=n.memoizedProps,u=n.type===n.elementType?l:hn(n.type,l),o.props=u,c=n.pendingProps,f=o.context,s=t.contextType,typeof s=="object"&&s!==null?s=un(s):(s=$e(t)?Ot:Te.current,s=mr(n,s));var p=t.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||f!==s)&&Qc(n,o,r,s),Gn=!1,f=n.memoizedState,o.state=f,Fa(n,r,o,i);var g=n.memoizedState;l!==c||f!==g||Ue.current||Gn?(typeof p=="function"&&(is(n,t,p,r),g=n.memoizedState),(u=Gn||Vc(n,t,u,r,f,g,s)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,s)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=g),o.props=r,o.state=g,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),r=!1)}return ss(e,n,t,r,a,i)}function ss(e,n,t,r,i,a){um(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&Nc(n,t,!1),Bn(e,n,a);r=n.stateNode,wy.current=n;var l=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=gr(n,e.child,null,a),n.child=gr(n,null,l,a)):De(e,n,l,a),n.memoizedState=r.state,i&&Nc(n,t,!0),n.child}function cm(e){var n=e.stateNode;n.pendingContext?jc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&jc(e,n.context,!1),cu(e,n.containerInfo)}function Jc(e,n,t,r,i){return hr(),iu(i),n.flags|=256,De(e,n,t,r),n.child}var us={dehydrated:null,treeContext:null,retryLane:0};function cs(e){return{baseLanes:e,cachePool:null,transitions:null}}function dm(e,n,t){var r=n.pendingProps,i=de.current,a=!1,o=(n.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(a=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ae(de,i&1),e===null)return ts(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,a?(r=n.mode,a=n.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=vo(o,r,0,null),e=Lt(e,r,t,null),a.return=n,e.return=n,a.sibling=e,n.child=a,n.child.memoizedState=cs(t),n.memoizedState=us,e):yu(n,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Sy(e,n,o,r,l,i,t);if(a){a=r.fallback,o=n.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=st(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?a=st(l,a):(a=Lt(a,o,t,null),a.flags|=2),a.return=n,r.return=n,r.sibling=a,n.child=r,r=a,a=n.child,o=e.child.memoizedState,o=o===null?cs(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~t,n.memoizedState=us,r}return a=e.child,e=a.sibling,r=st(a,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function yu(e,n){return n=vo({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Xi(e,n,t,r){return r!==null&&iu(r),gr(n,e.child,null,t),e=yu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Sy(e,n,t,r,i,a,o){if(t)return n.flags&256?(n.flags&=-257,r=el(Error(O(422))),Xi(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(a=r.fallback,i=n.mode,r=vo({mode:"visible",children:r.children},i,0,null),a=Lt(a,i,o,null),a.flags|=2,r.return=n,a.return=n,r.sibling=a,n.child=r,n.mode&1&&gr(n,e.child,null,o),n.child.memoizedState=cs(o),n.memoizedState=us,a);if(!(n.mode&1))return Xi(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(O(419)),r=el(a,r,void 0),Xi(e,n,o,r)}if(l=(o&e.childLanes)!==0,qe||l){if(r=Se,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Fn(e,i),xn(r,e,i,-1))}return Eu(),r=el(Error(O(421))),Xi(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=jy.bind(null,e),i._reactRetry=n,null):(e=a.treeContext,Xe=it(i.nextSibling),Je=n,ce=!0,vn=null,e!==null&&(rn[an++]=Dn,rn[an++]=jn,rn[an++]=Tt,Dn=e.id,jn=e.overflow,Tt=n),n=yu(n,r.children),n.flags|=4096,n)}function Zc(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),rs(e.return,n,t)}function nl(e,n,t,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(a.isBackwards=n,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=t,a.tailMode=i)}function fm(e,n,t){var r=n.pendingProps,i=r.revealOrder,a=r.tail;if(De(e,n,r.children,t),r=de.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zc(e,t,n);else if(e.tag===19)Zc(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ae(de,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&Ba(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),nl(n,!1,i,t,a);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&Ba(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}nl(n,!0,t,null,a);break;case"together":nl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ga(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Bn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),At|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(O(153));if(n.child!==null){for(e=n.child,t=st(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=st(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Cy(e,n,t){switch(n.tag){case 3:cm(n),hr();break;case 5:Mp(n);break;case 1:$e(n.type)&&Da(n);break;case 4:cu(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;ae(Ra,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(ae(de,de.current&1),n.flags|=128,null):t&n.child.childLanes?dm(e,n,t):(ae(de,de.current&1),e=Bn(e,n,t),e!==null?e.sibling:null);ae(de,de.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return fm(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(de,de.current),r)break;return null;case 22:case 23:return n.lanes=0,sm(e,n,t)}return Bn(e,n,t)}var pm,ds,mm,hm;pm=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ds=function(){};mm=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Pt(zn.current);var a=null;switch(t){case"input":i=Al(e,i),r=Al(e,r),a=[];break;case"select":i=pe({},i,{value:void 0}),r=pe({},r,{value:void 0}),a=[];break;case"textarea":i=Nl(e,i),r=Nl(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ia)}Ml(t,r);var o;t=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ii.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(t||(t={}),t[o]=s[o])}else t||(a||(a=[]),a.push(u,t)),t=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(a=a||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ii.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&se("scroll",e),a||l===s||(a=[])):(a=a||[]).push(u,s))}t&&(a=a||[]).push("style",t);var u=a;(n.updateQueue=u)&&(n.flags|=4)}};hm=function(e,n,t,r){t!==r&&(n.flags|=4)};function jr(e,n){if(!ce)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Ey(e,n,t){var r=n.pendingProps;switch(ru(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(n),null;case 1:return $e(n.type)&&Aa(),ze(n),null;case 3:return r=n.stateNode,vr(),ue(Ue),ue(Te),fu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Gi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,vn!==null&&(xs(vn),vn=null))),ds(e,n),ze(n),null;case 5:du(n);var i=Pt(gi.current);if(t=n.type,e!==null&&n.stateNode!=null)mm(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(O(166));return ze(n),null}if(e=Pt(zn.current),Gi(n)){r=n.stateNode,t=n.type;var a=n.memoizedProps;switch(r[Pn]=n,r[mi]=a,e=(n.mode&1)!==0,t){case"dialog":se("cancel",r),se("close",r);break;case"iframe":case"object":case"embed":se("load",r);break;case"video":case"audio":for(i=0;i<$r.length;i++)se($r[i],r);break;case"source":se("error",r);break;case"img":case"image":case"link":se("error",r),se("load",r);break;case"details":se("toggle",r);break;case"input":sc(r,a),se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},se("invalid",r);break;case"textarea":cc(r,a),se("invalid",r)}Ml(t,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&Ki(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&Ki(r.textContent,l,e),i=["children",""+l]):ii.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&se("scroll",r)}switch(t){case"input":Bi(r),uc(r,a,!0);break;case"textarea":Bi(r),dc(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Ia)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$f(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[Pn]=n,e[mi]=r,pm(e,n,!1,!1),n.stateNode=e;e:{switch(o=Fl(t,r),t){case"dialog":se("cancel",e),se("close",e),i=r;break;case"iframe":case"object":case"embed":se("load",e),i=r;break;case"video":case"audio":for(i=0;i<$r.length;i++)se($r[i],e);i=r;break;case"source":se("error",e),i=r;break;case"img":case"image":case"link":se("error",e),se("load",e),i=r;break;case"details":se("toggle",e),i=r;break;case"input":sc(e,r),i=Al(e,r),se("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=pe({},r,{value:void 0}),se("invalid",e);break;case"textarea":cc(e,r),i=Nl(e,r),se("invalid",e);break;default:i=r}Ml(t,i),l=i;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="style"?Hf(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Vf(e,s)):a==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&ai(e,s):typeof s=="number"&&ai(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ii.hasOwnProperty(a)?s!=null&&a==="onScroll"&&se("scroll",e):s!=null&&Us(e,a,s,o))}switch(t){case"input":Bi(e),uc(e,r,!1);break;case"textarea":Bi(e),dc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?or(e,!!r.multiple,a,!1):r.defaultValue!=null&&or(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ia)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ze(n),null;case 6:if(e&&n.stateNode!=null)hm(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(O(166));if(t=Pt(gi.current),Pt(zn.current),Gi(n)){if(r=n.stateNode,t=n.memoizedProps,r[Pn]=n,(a=r.nodeValue!==t)&&(e=Je,e!==null))switch(e.tag){case 3:Ki(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ki(r.nodeValue,t,(e.mode&1)!==0)}a&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Pn]=n,n.stateNode=r}return ze(n),null;case 13:if(ue(de),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ce&&Xe!==null&&n.mode&1&&!(n.flags&128))Ap(),hr(),n.flags|=98560,a=!1;else if(a=Gi(n),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(O(318));if(a=n.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(O(317));a[Pn]=n}else hr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ze(n),a=!1}else vn!==null&&(xs(vn),vn=null),a=!0;if(!a)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||de.current&1?xe===0&&(xe=3):Eu())),n.updateQueue!==null&&(n.flags|=4),ze(n),null);case 4:return vr(),ds(e,n),e===null&&fi(n.stateNode.containerInfo),ze(n),null;case 10:return lu(n.type._context),ze(n),null;case 17:return $e(n.type)&&Aa(),ze(n),null;case 19:if(ue(de),a=n.memoizedState,a===null)return ze(n),null;if(r=(n.flags&128)!==0,o=a.rendering,o===null)if(r)jr(a,!1);else{if(xe!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=Ba(e),o!==null){for(n.flags|=128,jr(a,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)a=t,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ae(de,de.current&1|2),n.child}e=e.sibling}a.tail!==null&&he()>xr&&(n.flags|=128,r=!0,jr(a,!1),n.lanes=4194304)}else{if(!r)if(e=Ba(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),jr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!ce)return ze(n),null}else 2*he()-a.renderingStartTime>xr&&t!==1073741824&&(n.flags|=128,r=!0,jr(a,!1),n.lanes=4194304);a.isBackwards?(o.sibling=n.child,n.child=o):(t=a.last,t!==null?t.sibling=o:n.child=o,a.last=o)}return a.tail!==null?(n=a.tail,a.rendering=n,a.tail=n.sibling,a.renderingStartTime=he(),n.sibling=null,t=de.current,ae(de,r?t&1|2:t&1),n):(ze(n),null);case 22:case 23:return Cu(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Ke&1073741824&&(ze(n),n.subtreeFlags&6&&(n.flags|=8192)):ze(n),null;case 24:return null;case 25:return null}throw Error(O(156,n.tag))}function by(e,n){switch(ru(n),n.tag){case 1:return $e(n.type)&&Aa(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return vr(),ue(Ue),ue(Te),fu(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return du(n),null;case 13:if(ue(de),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(O(340));hr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ue(de),null;case 4:return vr(),null;case 10:return lu(n.type._context),null;case 22:case 23:return Cu(),null;case 24:return null;default:return null}}var Ji=!1,Le=!1,Py=typeof WeakSet=="function"?WeakSet:Set,M=null;function rr(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){me(e,n,r)}else t.current=null}function fs(e,n,t){try{t()}catch(r){me(e,n,r)}}var ed=!1;function _y(e,n){if(Gl=La,e=kp(),nu(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{t.nodeType,a.nodeType}catch{t=null;break e}var o=0,l=-1,s=-1,u=0,d=0,c=e,f=null;n:for(;;){for(var p;c!==t||i!==0&&c.nodeType!==3||(l=o+i),c!==a||r!==0&&c.nodeType!==3||(s=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(p=c.firstChild)!==null;)f=c,c=p;for(;;){if(c===e)break n;if(f===t&&++u===i&&(l=o),f===a&&++d===r&&(s=o),(p=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=p}t=l===-1||s===-1?null:{start:l,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Yl={focusedElem:e,selectionRange:t},La=!1,M=n;M!==null;)if(n=M,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,M=e;else for(;M!==null;){n=M;try{var g=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,b=g.memoizedState,m=n.stateNode,h=m.getSnapshotBeforeUpdate(n.elementType===n.type?x:hn(n.type,x),b);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=n.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(E){me(n,n.return,E)}if(e=n.sibling,e!==null){e.return=n.return,M=e;break}M=n.return}return g=ed,ed=!1,g}function Xr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&fs(n,t,a)}i=i.next}while(i!==r)}}function ho(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function ps(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function gm(e){var n=e.alternate;n!==null&&(e.alternate=null,gm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Pn],delete n[mi],delete n[Zl],delete n[uy],delete n[cy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vm(e){return e.tag===5||e.tag===3||e.tag===4}function nd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ms(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Ia));else if(r!==4&&(e=e.child,e!==null))for(ms(e,n,t),e=e.sibling;e!==null;)ms(e,n,t),e=e.sibling}function hs(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(hs(e,n,t),e=e.sibling;e!==null;)hs(e,n,t),e=e.sibling}var Ee=null,gn=!1;function Vn(e,n,t){for(t=t.child;t!==null;)ym(e,n,t),t=t.sibling}function ym(e,n,t){if(_n&&typeof _n.onCommitFiberUnmount=="function")try{_n.onCommitFiberUnmount(oo,t)}catch{}switch(t.tag){case 5:Le||rr(t,n);case 6:var r=Ee,i=gn;Ee=null,Vn(e,n,t),Ee=r,gn=i,Ee!==null&&(gn?(e=Ee,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Ee.removeChild(t.stateNode));break;case 18:Ee!==null&&(gn?(e=Ee,t=t.stateNode,e.nodeType===8?Ko(e.parentNode,t):e.nodeType===1&&Ko(e,t),ui(e)):Ko(Ee,t.stateNode));break;case 4:r=Ee,i=gn,Ee=t.stateNode.containerInfo,gn=!0,Vn(e,n,t),Ee=r,gn=i;break;case 0:case 11:case 14:case 15:if(!Le&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&fs(t,n,o),i=i.next}while(i!==r)}Vn(e,n,t);break;case 1:if(!Le&&(rr(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){me(t,n,l)}Vn(e,n,t);break;case 21:Vn(e,n,t);break;case 22:t.mode&1?(Le=(r=Le)||t.memoizedState!==null,Vn(e,n,t),Le=r):Vn(e,n,t);break;default:Vn(e,n,t)}}function td(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Py),n.forEach(function(r){var i=Ny.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function fn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var a=e,o=n,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ee=l.stateNode,gn=!1;break e;case 3:Ee=l.stateNode.containerInfo,gn=!0;break e;case 4:Ee=l.stateNode.containerInfo,gn=!0;break e}l=l.return}if(Ee===null)throw Error(O(160));ym(a,o,i),Ee=null,gn=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){me(i,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)xm(n,e),n=n.sibling}function xm(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(fn(n,e),Cn(e),r&4){try{Xr(3,e,e.return),ho(3,e)}catch(x){me(e,e.return,x)}try{Xr(5,e,e.return)}catch(x){me(e,e.return,x)}}break;case 1:fn(n,e),Cn(e),r&512&&t!==null&&rr(t,t.return);break;case 5:if(fn(n,e),Cn(e),r&512&&t!==null&&rr(t,t.return),e.flags&32){var i=e.stateNode;try{ai(i,"")}catch(x){me(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=t!==null?t.memoizedProps:a,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&qf(i,a),Fl(l,o);var u=Fl(l,a);for(o=0;o<s.length;o+=2){var d=s[o],c=s[o+1];d==="style"?Hf(i,c):d==="dangerouslySetInnerHTML"?Vf(i,c):d==="children"?ai(i,c):Us(i,d,c,u)}switch(l){case"input":Dl(i,a);break;case"textarea":Uf(i,a);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var p=a.value;p!=null?or(i,!!a.multiple,p,!1):f!==!!a.multiple&&(a.defaultValue!=null?or(i,!!a.multiple,a.defaultValue,!0):or(i,!!a.multiple,a.multiple?[]:"",!1))}i[mi]=a}catch(x){me(e,e.return,x)}}break;case 6:if(fn(n,e),Cn(e),r&4){if(e.stateNode===null)throw Error(O(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(x){me(e,e.return,x)}}break;case 3:if(fn(n,e),Cn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{ui(n.containerInfo)}catch(x){me(e,e.return,x)}break;case 4:fn(n,e),Cn(e);break;case 13:fn(n,e),Cn(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(wu=he())),r&4&&td(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(Le=(u=Le)||d,fn(n,e),Le=u):fn(n,e),Cn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(M=e,d=e.child;d!==null;){for(c=M=d;M!==null;){switch(f=M,p=f.child,f.tag){case 0:case 11:case 14:case 15:Xr(4,f,f.return);break;case 1:rr(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){r=f,t=f.return;try{n=r,g.props=n.memoizedProps,g.state=n.memoizedState,g.componentWillUnmount()}catch(x){me(r,t,x)}}break;case 5:rr(f,f.return);break;case 22:if(f.memoizedState!==null){id(c);continue}}p!==null?(p.return=f,M=p):id(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=c.stateNode,s=c.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Qf("display",o))}catch(x){me(e,e.return,x)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(x){me(e,e.return,x)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:fn(n,e),Cn(e),r&4&&td(e);break;case 21:break;default:fn(n,e),Cn(e)}}function Cn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(vm(t)){var r=t;break e}t=t.return}throw Error(O(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ai(i,""),r.flags&=-33);var a=nd(e);hs(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=nd(e);ms(e,l,o);break;default:throw Error(O(161))}}catch(s){me(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function zy(e,n,t){M=e,km(e)}function km(e,n,t){for(var r=(e.mode&1)!==0;M!==null;){var i=M,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ji;if(!o){var l=i.alternate,s=l!==null&&l.memoizedState!==null||Le;l=Ji;var u=Le;if(Ji=o,(Le=s)&&!u)for(M=i;M!==null;)o=M,s=o.child,o.tag===22&&o.memoizedState!==null?ad(i):s!==null?(s.return=o,M=s):ad(i);for(;a!==null;)M=a,km(a),a=a.sibling;M=i,Ji=l,Le=u}rd(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,M=a):rd(e)}}function rd(e){for(;M!==null;){var n=M;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Le||ho(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Le)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:hn(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=n.updateQueue;a!==null&&qc(n,a,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}qc(n,o,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&ui(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}Le||n.flags&512&&ps(n)}catch(f){me(n,n.return,f)}}if(n===e){M=null;break}if(t=n.sibling,t!==null){t.return=n.return,M=t;break}M=n.return}}function id(e){for(;M!==null;){var n=M;if(n===e){M=null;break}var t=n.sibling;if(t!==null){t.return=n.return,M=t;break}M=n.return}}function ad(e){for(;M!==null;){var n=M;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{ho(4,n)}catch(s){me(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(s){me(n,i,s)}}var a=n.return;try{ps(n)}catch(s){me(n,a,s)}break;case 5:var o=n.return;try{ps(n)}catch(s){me(n,o,s)}}}catch(s){me(n,n.return,s)}if(n===e){M=null;break}var l=n.sibling;if(l!==null){l.return=n.return,M=l;break}M=n.return}}var Ly=Math.ceil,$a=qn.ReactCurrentDispatcher,xu=qn.ReactCurrentOwner,sn=qn.ReactCurrentBatchConfig,J=0,Se=null,ve=null,be=0,Ke=0,ir=mt(0),xe=0,ki=null,At=0,go=0,ku=0,Jr=null,Be=null,wu=0,xr=1/0,In=null,Va=!1,gs=null,ot=null,Zi=!1,Zn=null,Qa=0,Zr=0,vs=null,va=-1,ya=0;function Ne(){return J&6?he():va!==-1?va:va=he()}function lt(e){return e.mode&1?J&2&&be!==0?be&-be:fy.transition!==null?(ya===0&&(ya=ip()),ya):(e=ne,e!==0||(e=window.event,e=e===void 0?16:dp(e.type)),e):1}function xn(e,n,t,r){if(50<Zr)throw Zr=0,vs=null,Error(O(185));Pi(e,t,r),(!(J&2)||e!==Se)&&(e===Se&&(!(J&2)&&(go|=t),xe===4&&Xn(e,be)),Ve(e,r),t===1&&J===0&&!(n.mode&1)&&(xr=he()+500,fo&&ht()))}function Ve(e,n){var t=e.callbackNode;fv(e,n);var r=za(e,e===Se?be:0);if(r===0)t!==null&&mc(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&mc(t),n===1)e.tag===0?dy(od.bind(null,e)):Op(od.bind(null,e)),ly(function(){!(J&6)&&ht()}),t=null;else{switch(ap(r)){case 1:t=Ws;break;case 4:t=tp;break;case 16:t=_a;break;case 536870912:t=rp;break;default:t=_a}t=zm(t,wm.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function wm(e,n){if(va=-1,ya=0,J&6)throw Error(O(327));var t=e.callbackNode;if(dr()&&e.callbackNode!==t)return null;var r=za(e,e===Se?be:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Ha(e,r);else{n=r;var i=J;J|=2;var a=Cm();(Se!==e||be!==n)&&(In=null,xr=he()+500,zt(e,n));do try{Iy();break}catch(l){Sm(e,l)}while(!0);ou(),$a.current=a,J=i,ve!==null?n=0:(Se=null,be=0,n=xe)}if(n!==0){if(n===2&&(i=Vl(e),i!==0&&(r=i,n=ys(e,i))),n===1)throw t=ki,zt(e,0),Xn(e,r),Ve(e,he()),t;if(n===6)Xn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Oy(i)&&(n=Ha(e,r),n===2&&(a=Vl(e),a!==0&&(r=a,n=ys(e,a))),n===1))throw t=ki,zt(e,0),Xn(e,r),Ve(e,he()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(O(345));case 2:St(e,Be,In);break;case 3:if(Xn(e,r),(r&130023424)===r&&(n=wu+500-he(),10<n)){if(za(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ne(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Jl(St.bind(null,e,Be,In),n);break}St(e,Be,In);break;case 4:if(Xn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-yn(r);a=1<<o,o=n[o],o>i&&(i=o),r&=~a}if(r=i,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ly(r/1960))-r,10<r){e.timeoutHandle=Jl(St.bind(null,e,Be,In),r);break}St(e,Be,In);break;case 5:St(e,Be,In);break;default:throw Error(O(329))}}}return Ve(e,he()),e.callbackNode===t?wm.bind(null,e):null}function ys(e,n){var t=Jr;return e.current.memoizedState.isDehydrated&&(zt(e,n).flags|=256),e=Ha(e,n),e!==2&&(n=Be,Be=t,n!==null&&xs(n)),e}function xs(e){Be===null?Be=e:Be.push.apply(Be,e)}function Oy(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],a=i.getSnapshot;i=i.value;try{if(!wn(a(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xn(e,n){for(n&=~ku,n&=~go,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-yn(n),r=1<<t;e[t]=-1,n&=~r}}function od(e){if(J&6)throw Error(O(327));dr();var n=za(e,0);if(!(n&1))return Ve(e,he()),null;var t=Ha(e,n);if(e.tag!==0&&t===2){var r=Vl(e);r!==0&&(n=r,t=ys(e,r))}if(t===1)throw t=ki,zt(e,0),Xn(e,n),Ve(e,he()),t;if(t===6)throw Error(O(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,St(e,Be,In),Ve(e,he()),null}function Su(e,n){var t=J;J|=1;try{return e(n)}finally{J=t,J===0&&(xr=he()+500,fo&&ht())}}function Dt(e){Zn!==null&&Zn.tag===0&&!(J&6)&&dr();var n=J;J|=1;var t=sn.transition,r=ne;try{if(sn.transition=null,ne=1,e)return e()}finally{ne=r,sn.transition=t,J=n,!(J&6)&&ht()}}function Cu(){Ke=ir.current,ue(ir)}function zt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,oy(t)),ve!==null)for(t=ve.return;t!==null;){var r=t;switch(ru(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Aa();break;case 3:vr(),ue(Ue),ue(Te),fu();break;case 5:du(r);break;case 4:vr();break;case 13:ue(de);break;case 19:ue(de);break;case 10:lu(r.type._context);break;case 22:case 23:Cu()}t=t.return}if(Se=e,ve=e=st(e.current,null),be=Ke=n,xe=0,ki=null,ku=go=At=0,Be=Jr=null,bt!==null){for(n=0;n<bt.length;n++)if(t=bt[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,a=t.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}t.pending=r}bt=null}return e}function Sm(e,n){do{var t=ve;try{if(ou(),ma.current=Ua,qa){for(var r=fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}qa=!1}if(It=0,we=ye=fe=null,Yr=!1,vi=0,xu.current=null,t===null||t.return===null){xe=1,ki=n,ve=null;break}e:{var a=e,o=t.return,l=t,s=n;if(n=be,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=Wc(o);if(p!==null){p.flags&=-257,Kc(p,o,l,a,n),p.mode&1&&Hc(a,u,n),n=p,s=u;var g=n.updateQueue;if(g===null){var x=new Set;x.add(s),n.updateQueue=x}else g.add(s);break e}else{if(!(n&1)){Hc(a,u,n),Eu();break e}s=Error(O(426))}}else if(ce&&l.mode&1){var b=Wc(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Kc(b,o,l,a,n),iu(yr(s,l));break e}}a=s=yr(s,l),xe!==4&&(xe=2),Jr===null?Jr=[a]:Jr.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,n&=-n,a.lanes|=n;var m=am(a,s,n);Bc(a,m);break e;case 1:l=s;var h=a.type,v=a.stateNode;if(!(a.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ot===null||!ot.has(v)))){a.flags|=65536,n&=-n,a.lanes|=n;var E=om(a,l,n);Bc(a,E);break e}}a=a.return}while(a!==null)}bm(t)}catch(P){n=P,ve===t&&t!==null&&(ve=t=t.return);continue}break}while(!0)}function Cm(){var e=$a.current;return $a.current=Ua,e===null?Ua:e}function Eu(){(xe===0||xe===3||xe===2)&&(xe=4),Se===null||!(At&268435455)&&!(go&268435455)||Xn(Se,be)}function Ha(e,n){var t=J;J|=2;var r=Cm();(Se!==e||be!==n)&&(In=null,zt(e,n));do try{Ty();break}catch(i){Sm(e,i)}while(!0);if(ou(),J=t,$a.current=r,ve!==null)throw Error(O(261));return Se=null,be=0,xe}function Ty(){for(;ve!==null;)Em(ve)}function Iy(){for(;ve!==null&&!rv();)Em(ve)}function Em(e){var n=_m(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,n===null?bm(e):ve=n,xu.current=null}function bm(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=by(t,n),t!==null){t.flags&=32767,ve=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{xe=6,ve=null;return}}else if(t=Ey(t,n,Ke),t!==null){ve=t;return}if(n=n.sibling,n!==null){ve=n;return}ve=n=e}while(n!==null);xe===0&&(xe=5)}function St(e,n,t){var r=ne,i=sn.transition;try{sn.transition=null,ne=1,Ay(e,n,t,r)}finally{sn.transition=i,ne=r}return null}function Ay(e,n,t,r){do dr();while(Zn!==null);if(J&6)throw Error(O(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(O(177));e.callbackNode=null,e.callbackPriority=0;var a=t.lanes|t.childLanes;if(pv(e,a),e===Se&&(ve=Se=null,be=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Zi||(Zi=!0,zm(_a,function(){return dr(),null})),a=(t.flags&15990)!==0,t.subtreeFlags&15990||a){a=sn.transition,sn.transition=null;var o=ne;ne=1;var l=J;J|=4,xu.current=null,_y(e,t),xm(t,e),Zv(Yl),La=!!Gl,Yl=Gl=null,e.current=t,zy(t),iv(),J=l,ne=o,sn.transition=a}else e.current=t;if(Zi&&(Zi=!1,Zn=e,Qa=i),a=e.pendingLanes,a===0&&(ot=null),lv(t.stateNode),Ve(e,he()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Va)throw Va=!1,e=gs,gs=null,e;return Qa&1&&e.tag!==0&&dr(),a=e.pendingLanes,a&1?e===vs?Zr++:(Zr=0,vs=e):Zr=0,ht(),null}function dr(){if(Zn!==null){var e=ap(Qa),n=sn.transition,t=ne;try{if(sn.transition=null,ne=16>e?16:e,Zn===null)var r=!1;else{if(e=Zn,Zn=null,Qa=0,J&6)throw Error(O(331));var i=J;for(J|=4,M=e.current;M!==null;){var a=M,o=a.child;if(M.flags&16){var l=a.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(M=u;M!==null;){var d=M;switch(d.tag){case 0:case 11:case 15:Xr(8,d,a)}var c=d.child;if(c!==null)c.return=d,M=c;else for(;M!==null;){d=M;var f=d.sibling,p=d.return;if(gm(d),d===u){M=null;break}if(f!==null){f.return=p,M=f;break}M=p}}}var g=a.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var b=x.sibling;x.sibling=null,x=b}while(x!==null)}}M=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,M=o;else e:for(;M!==null;){if(a=M,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Xr(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,M=m;break e}M=a.return}}var h=e.current;for(M=h;M!==null;){o=M;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,M=v;else e:for(o=h;M!==null;){if(l=M,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ho(9,l)}}catch(P){me(l,l.return,P)}if(l===o){M=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,M=E;break e}M=l.return}}if(J=i,ht(),_n&&typeof _n.onPostCommitFiberRoot=="function")try{_n.onPostCommitFiberRoot(oo,e)}catch{}r=!0}return r}finally{ne=t,sn.transition=n}}return!1}function ld(e,n,t){n=yr(t,n),n=am(e,n,1),e=at(e,n,1),n=Ne(),e!==null&&(Pi(e,1,n),Ve(e,n))}function me(e,n,t){if(e.tag===3)ld(e,e,t);else for(;n!==null;){if(n.tag===3){ld(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ot===null||!ot.has(r))){e=yr(t,e),e=om(n,e,1),n=at(n,e,1),e=Ne(),n!==null&&(Pi(n,1,e),Ve(n,e));break}}n=n.return}}function Dy(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Ne(),e.pingedLanes|=e.suspendedLanes&t,Se===e&&(be&t)===t&&(xe===4||xe===3&&(be&130023424)===be&&500>he()-wu?zt(e,0):ku|=t),Ve(e,n)}function Pm(e,n){n===0&&(e.mode&1?(n=$i,$i<<=1,!($i&130023424)&&($i=4194304)):n=1);var t=Ne();e=Fn(e,n),e!==null&&(Pi(e,n,t),Ve(e,t))}function jy(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Pm(e,t)}function Ny(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(O(314))}r!==null&&r.delete(n),Pm(e,t)}var _m;_m=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ue.current)qe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return qe=!1,Cy(e,n,t);qe=!!(e.flags&131072)}else qe=!1,ce&&n.flags&1048576&&Tp(n,Na,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;ga(e,n),e=n.pendingProps;var i=mr(n,Te.current);cr(n,t),i=mu(null,n,r,e,i,t);var a=hu();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,$e(r)?(a=!0,Da(n)):a=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,uu(n),i.updater=mo,n.stateNode=i,i._reactInternals=n,as(n,r,e,t),n=ss(null,n,r,!0,a,t)):(n.tag=0,ce&&a&&tu(n),De(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(ga(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=My(r),e=hn(r,e),i){case 0:n=ls(null,n,r,e,t);break e;case 1:n=Xc(null,n,r,e,t);break e;case 11:n=Gc(null,n,r,e,t);break e;case 14:n=Yc(null,n,r,hn(r.type,e),t);break e}throw Error(O(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:hn(r,i),ls(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:hn(r,i),Xc(e,n,r,i,t);case 3:e:{if(cm(n),e===null)throw Error(O(387));r=n.pendingProps,a=n.memoizedState,i=a.element,Rp(e,n),Fa(n,r,null,t);var o=n.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=a,n.memoizedState=a,n.flags&256){i=yr(Error(O(423)),n),n=Jc(e,n,r,t,i);break e}else if(r!==i){i=yr(Error(O(424)),n),n=Jc(e,n,r,t,i);break e}else for(Xe=it(n.stateNode.containerInfo.firstChild),Je=n,ce=!0,vn=null,t=jp(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(hr(),r===i){n=Bn(e,n,t);break e}De(e,n,r,t)}n=n.child}return n;case 5:return Mp(n),e===null&&ts(n),r=n.type,i=n.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,Xl(r,i)?o=null:a!==null&&Xl(r,a)&&(n.flags|=32),um(e,n),De(e,n,o,t),n.child;case 6:return e===null&&ts(n),null;case 13:return dm(e,n,t);case 4:return cu(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=gr(n,null,r,t):De(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:hn(r,i),Gc(e,n,r,i,t);case 7:return De(e,n,n.pendingProps,t),n.child;case 8:return De(e,n,n.pendingProps.children,t),n.child;case 12:return De(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,a=n.memoizedProps,o=i.value,ae(Ra,r._currentValue),r._currentValue=o,a!==null)if(wn(a.value,o)){if(a.children===i.children&&!Ue.current){n=Bn(e,n,t);break e}}else for(a=n.child,a!==null&&(a.return=n);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(a.tag===1){s=Nn(-1,t&-t),s.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}a.lanes|=t,s=a.alternate,s!==null&&(s.lanes|=t),rs(a.return,t,n),l.lanes|=t;break}s=s.next}}else if(a.tag===10)o=a.type===n.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(O(341));o.lanes|=t,l=o.alternate,l!==null&&(l.lanes|=t),rs(o,t,n),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===n){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}De(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,cr(n,t),i=un(i),r=r(i),n.flags|=1,De(e,n,r,t),n.child;case 14:return r=n.type,i=hn(r,n.pendingProps),i=hn(r.type,i),Yc(e,n,r,i,t);case 15:return lm(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:hn(r,i),ga(e,n),n.tag=1,$e(r)?(e=!0,Da(n)):e=!1,cr(n,t),im(n,r,i),as(n,r,i,t),ss(null,n,r,!0,e,t);case 19:return fm(e,n,t);case 22:return sm(e,n,t)}throw Error(O(156,n.tag))};function zm(e,n){return np(e,n)}function Ry(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ln(e,n,t,r){return new Ry(e,n,t,r)}function bu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function My(e){if(typeof e=="function")return bu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Vs)return 11;if(e===Qs)return 14}return 2}function st(e,n){var t=e.alternate;return t===null?(t=ln(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function xa(e,n,t,r,i,a){var o=2;if(r=e,typeof e=="function")bu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Kt:return Lt(t.children,i,a,n);case $s:o=8,i|=8;break;case Ll:return e=ln(12,t,n,i|2),e.elementType=Ll,e.lanes=a,e;case Ol:return e=ln(13,t,n,i),e.elementType=Ol,e.lanes=a,e;case Tl:return e=ln(19,t,n,i),e.elementType=Tl,e.lanes=a,e;case Mf:return vo(t,i,a,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Nf:o=10;break e;case Rf:o=9;break e;case Vs:o=11;break e;case Qs:o=14;break e;case Kn:o=16,r=null;break e}throw Error(O(130,e==null?e:typeof e,""))}return n=ln(o,t,n,i),n.elementType=e,n.type=r,n.lanes=a,n}function Lt(e,n,t,r){return e=ln(7,e,r,n),e.lanes=t,e}function vo(e,n,t,r){return e=ln(22,e,r,n),e.elementType=Mf,e.lanes=t,e.stateNode={isHidden:!1},e}function tl(e,n,t){return e=ln(6,e,null,n),e.lanes=t,e}function rl(e,n,t){return n=ln(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Fy(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ro(0),this.expirationTimes=Ro(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ro(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pu(e,n,t,r,i,a,o,l,s){return e=new Fy(e,n,t,l,s),n===1?(n=1,a===!0&&(n|=8)):n=0,a=ln(3,null,null,n),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},uu(a),e}function By(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Lm(e){if(!e)return ft;e=e._reactInternals;e:{if(Rt(e)!==e||e.tag!==1)throw Error(O(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if($e(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(O(171))}if(e.tag===1){var t=e.type;if($e(t))return Lp(e,t,n)}return n}function Om(e,n,t,r,i,a,o,l,s){return e=Pu(t,r,!0,e,i,a,o,l,s),e.context=Lm(null),t=e.current,r=Ne(),i=lt(t),a=Nn(r,i),a.callback=n??null,at(t,a,i),e.current.lanes=i,Pi(e,i,r),Ve(e,r),e}function yo(e,n,t,r){var i=n.current,a=Ne(),o=lt(i);return t=Lm(t),n.context===null?n.context=t:n.pendingContext=t,n=Nn(a,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=at(i,n,o),e!==null&&(xn(e,i,o,a),pa(e,i,o)),o}function Wa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sd(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function _u(e,n){sd(e,n),(e=e.alternate)&&sd(e,n)}function qy(){return null}var Tm=typeof reportError=="function"?reportError:function(e){console.error(e)};function zu(e){this._internalRoot=e}xo.prototype.render=zu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(O(409));yo(e,n,null,null)};xo.prototype.unmount=zu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Dt(function(){yo(null,e,null,null)}),n[Mn]=null}};function xo(e){this._internalRoot=e}xo.prototype.unstable_scheduleHydration=function(e){if(e){var n=sp();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Yn.length&&n!==0&&n<Yn[t].priority;t++);Yn.splice(t,0,e),t===0&&cp(e)}};function Lu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ko(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ud(){}function Uy(e,n,t,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=Wa(o);a.call(u)}}var o=Om(n,r,e,0,null,!1,!1,"",ud);return e._reactRootContainer=o,e[Mn]=o.current,fi(e.nodeType===8?e.parentNode:e),Dt(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Wa(s);l.call(u)}}var s=Pu(e,0,!1,null,null,!1,!1,"",ud);return e._reactRootContainer=s,e[Mn]=s.current,fi(e.nodeType===8?e.parentNode:e),Dt(function(){yo(n,s,t,r)}),s}function wo(e,n,t,r,i){var a=t._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var l=i;i=function(){var s=Wa(o);l.call(s)}}yo(n,o,e,i)}else o=Uy(t,n,e,i,r);return Wa(o)}op=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Ur(n.pendingLanes);t!==0&&(Ks(n,t|1),Ve(n,he()),!(J&6)&&(xr=he()+500,ht()))}break;case 13:Dt(function(){var r=Fn(e,1);if(r!==null){var i=Ne();xn(r,e,1,i)}}),_u(e,1)}};Gs=function(e){if(e.tag===13){var n=Fn(e,134217728);if(n!==null){var t=Ne();xn(n,e,134217728,t)}_u(e,134217728)}};lp=function(e){if(e.tag===13){var n=lt(e),t=Fn(e,n);if(t!==null){var r=Ne();xn(t,e,n,r)}_u(e,n)}};sp=function(){return ne};up=function(e,n){var t=ne;try{return ne=e,n()}finally{ne=t}};ql=function(e,n,t){switch(n){case"input":if(Dl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=co(r);if(!i)throw Error(O(90));Bf(r),Dl(r,i)}}}break;case"textarea":Uf(e,t);break;case"select":n=t.value,n!=null&&or(e,!!t.multiple,n,!1)}};Gf=Su;Yf=Dt;var $y={usingClientEntryPoint:!1,Events:[zi,Jt,co,Wf,Kf,Su]},Nr={findFiberByHostInstance:Et,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vy={bundleType:Nr.bundleType,version:Nr.version,rendererPackageName:Nr.rendererPackageName,rendererConfig:Nr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zf(e),e===null?null:e.stateNode},findFiberByHostInstance:Nr.findFiberByHostInstance||qy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ea.isDisabled&&ea.supportsFiber)try{oo=ea.inject(Vy),_n=ea}catch{}}nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$y;nn.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lu(n))throw Error(O(200));return By(e,n,null,t)};nn.createRoot=function(e,n){if(!Lu(e))throw Error(O(299));var t=!1,r="",i=Tm;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Pu(e,1,!1,null,null,t,!1,r,i),e[Mn]=n.current,fi(e.nodeType===8?e.parentNode:e),new zu(n)};nn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(O(188)):(e=Object.keys(e).join(","),Error(O(268,e)));return e=Zf(n),e=e===null?null:e.stateNode,e};nn.flushSync=function(e){return Dt(e)};nn.hydrate=function(e,n,t){if(!ko(n))throw Error(O(200));return wo(null,e,n,!0,t)};nn.hydrateRoot=function(e,n,t){if(!Lu(e))throw Error(O(405));var r=t!=null&&t.hydratedSources||null,i=!1,a="",o=Tm;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Om(n,null,e,1,t??null,i,!1,a,o),e[Mn]=n.current,fi(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new xo(n)};nn.render=function(e,n,t){if(!ko(n))throw Error(O(200));return wo(null,e,n,!1,t)};nn.unmountComponentAtNode=function(e){if(!ko(e))throw Error(O(40));return e._reactRootContainer?(Dt(function(){wo(null,null,e,!1,function(){e._reactRootContainer=null,e[Mn]=null})}),!0):!1};nn.unstable_batchedUpdates=Su;nn.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!ko(t))throw Error(O(200));if(e==null||e._reactInternals===void 0)throw Error(O(38));return wo(e,n,t,!1,r)};nn.version="18.3.1-next-f1338f8080-20240426";function Im(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Im)}catch(e){console.error(e)}}Im(),If.exports=nn;var Qy=If.exports,cd=Qy;_l.createRoot=cd.createRoot,_l.hydrateRoot=cd.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wi(){return wi=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},wi.apply(this,arguments)}var _t;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(_t||(_t={}));const dd="popstate";function Hy(e){e===void 0&&(e={});function n(r,i){let{pathname:a,search:o,hash:l}=r.location;return ks("",{pathname:a,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(r,i){return typeof i=="string"?i:Ka(i)}return Ky(n,t,null,e)}function Ce(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Am(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Wy(){return Math.random().toString(36).substr(2,8)}function fd(e,n){return{usr:e.state,key:e.key,idx:n}}function ks(e,n,t,r){return t===void 0&&(t=null),wi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Oi(n):n,{state:t,key:n&&n.key||r||Wy()})}function Ka(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function Oi(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function Ky(e,n,t,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,l=_t.Pop,s=null,u=d();u==null&&(u=0,o.replaceState(wi({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function c(){l=_t.Pop;let b=d(),m=b==null?null:b-u;u=b,s&&s({action:l,location:x.location,delta:m})}function f(b,m){l=_t.Push;let h=ks(x.location,b,m);u=d()+1;let v=fd(h,u),E=x.createHref(h);try{o.pushState(v,"",E)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;i.location.assign(E)}a&&s&&s({action:l,location:x.location,delta:1})}function p(b,m){l=_t.Replace;let h=ks(x.location,b,m);u=d();let v=fd(h,u),E=x.createHref(h);o.replaceState(v,"",E),a&&s&&s({action:l,location:x.location,delta:0})}function g(b){let m=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof b=="string"?b:Ka(b);return h=h.replace(/ $/,"%20"),Ce(m,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,m)}let x={get action(){return l},get location(){return e(i,o)},listen(b){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(dd,c),s=b,()=>{i.removeEventListener(dd,c),s=null}},createHref(b){return n(i,b)},createURL:g,encodeLocation(b){let m=g(b);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:p,go(b){return o.go(b)}};return x}var pd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(pd||(pd={}));function Gy(e,n,t){return t===void 0&&(t="/"),Yy(e,n,t)}function Yy(e,n,t,r){let i=typeof n=="string"?Oi(n):n,a=kr(i.pathname||"/",t);if(a==null)return null;let o=Dm(e);Xy(o);let l=null;for(let s=0;l==null&&s<o.length;++s){let u=s1(a);l=o1(o[s],u)}return l}function Dm(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let i=(a,o,l)=>{let s={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};s.relativePath.startsWith("/")&&(Ce(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=ut([r,s.relativePath]),d=t.concat(s);a.children&&a.children.length>0&&(Ce(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Dm(a.children,n,d,u)),!(a.path==null&&!a.index)&&n.push({path:u,score:i1(u,a.index),routesMeta:d})};return e.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))i(a,o);else for(let s of jm(a.path))i(a,o,s)}),n}function jm(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,i=t.endsWith("?"),a=t.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=jm(r.join("/")),l=[];return l.push(...o.map(s=>s===""?a:[a,s].join("/"))),i&&l.push(...o),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function Xy(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:a1(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Jy=/^:[\w-]+$/,Zy=3,e1=2,n1=1,t1=10,r1=-2,md=e=>e==="*";function i1(e,n){let t=e.split("/"),r=t.length;return t.some(md)&&(r+=r1),n&&(r+=e1),t.filter(i=>!md(i)).reduce((i,a)=>i+(Jy.test(a)?Zy:a===""?n1:t1),r)}function a1(e,n){return e.length===n.length&&e.slice(0,-1).every((r,i)=>r===n[i])?e[e.length-1]-n[n.length-1]:0}function o1(e,n,t){let{routesMeta:r}=e,i={},a="/",o=[];for(let l=0;l<r.length;++l){let s=r[l],u=l===r.length-1,d=a==="/"?n:n.slice(a.length)||"/",c=ws({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},d),f=s.route;if(!c)return null;Object.assign(i,c.params),o.push({params:i,pathname:ut([a,c.pathname]),pathnameBase:f1(ut([a,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(a=ut([a,c.pathnameBase]))}return o}function ws(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=l1(e.path,e.caseSensitive,e.end),i=n.match(t);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:f,isOptional:p}=d;if(f==="*"){let x=l[c]||"";o=a.slice(0,a.length-x.length).replace(/(.)\/+$/,"$1")}const g=l[c];return p&&!g?u[f]=void 0:u[f]=(g||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:o,pattern:e}}function l1(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Am(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),r]}function s1(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Am(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function kr(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function u1(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:i=""}=typeof e=="string"?Oi(e):e;return{pathname:t?t.startsWith("/")?t:c1(t,n):n,search:p1(r),hash:m1(i)}}function c1(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function il(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function d1(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Nm(e,n){let t=d1(e);return n?t.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Rm(e,n,t,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Oi(e):(i=wi({},e),Ce(!i.pathname||!i.pathname.includes("?"),il("?","pathname","search",i)),Ce(!i.pathname||!i.pathname.includes("#"),il("#","pathname","hash",i)),Ce(!i.search||!i.search.includes("#"),il("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,l;if(o==null)l=t;else{let c=n.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),c-=1;i.pathname=f.join("/")}l=c>=0?n[c]:"/"}let s=u1(i,l),u=o&&o!=="/"&&o.endsWith("/"),d=(a||o===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(u||d)&&(s.pathname+="/"),s}const ut=e=>e.join("/").replace(/\/\/+/g,"/"),f1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),p1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,m1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function h1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Mm=["post","put","patch","delete"];new Set(Mm);const g1=["get",...Mm];new Set(g1);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ga(){return Ga=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ga.apply(this,arguments)}const So=L.createContext(null),Fm=L.createContext(null),gt=L.createContext(null),Ou=L.createContext(null),vt=L.createContext({outlet:null,matches:[],isDataRoute:!1}),Bm=L.createContext(null);function v1(e,n){let{relative:t}=n===void 0?{}:n;Ti()||Ce(!1);let{basename:r,navigator:i}=L.useContext(gt),{hash:a,pathname:o,search:l}=Eo(e,{relative:t}),s=o;return r!=="/"&&(s=o==="/"?r:ut([r,o])),i.createHref({pathname:s,search:l,hash:a})}function Ti(){return L.useContext(Ou)!=null}function Ii(){return Ti()||Ce(!1),L.useContext(Ou).location}function qm(e){L.useContext(gt).static||L.useLayoutEffect(e)}function Co(){let{isDataRoute:e}=L.useContext(vt);return e?O1():y1()}function y1(){Ti()||Ce(!1);let e=L.useContext(So),{basename:n,future:t,navigator:r}=L.useContext(gt),{matches:i}=L.useContext(vt),{pathname:a}=Ii(),o=JSON.stringify(Nm(i,t.v7_relativeSplatPath)),l=L.useRef(!1);return qm(()=>{l.current=!0}),L.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let c=Rm(u,JSON.parse(o),a,d.relative==="path");e==null&&n!=="/"&&(c.pathname=c.pathname==="/"?n:ut([n,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[n,r,o,a,e])}function Tu(){let{matches:e}=L.useContext(vt),n=e[e.length-1];return n?n.params:{}}function Eo(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=L.useContext(gt),{matches:i}=L.useContext(vt),{pathname:a}=Ii(),o=JSON.stringify(Nm(i,r.v7_relativeSplatPath));return L.useMemo(()=>Rm(e,JSON.parse(o),a,t==="path"),[e,o,a,t])}function x1(e,n){return k1(e)}function k1(e,n,t,r){Ti()||Ce(!1);let{navigator:i}=L.useContext(gt),{matches:a}=L.useContext(vt),o=a[a.length-1],l=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let u=Ii(),d;d=u;let c=d.pathname||"/",f=c;if(s!=="/"){let x=s.replace(/^\//,"").split("/");f="/"+c.replace(/^\//,"").split("/").slice(x.length).join("/")}let p=Gy(e,{pathname:f});return b1(p&&p.map(x=>Object.assign({},x,{params:Object.assign({},l,x.params),pathname:ut([s,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?s:ut([s,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),a,t,r)}function w1(){let e=L1(),n=h1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},n),t?L.createElement("pre",{style:i},t):null,null)}const S1=L.createElement(w1,null);class C1 extends L.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?L.createElement(vt.Provider,{value:this.props.routeContext},L.createElement(Bm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function E1(e){let{routeContext:n,match:t,children:r}=e,i=L.useContext(So);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),L.createElement(vt.Provider,{value:n},r)}function b1(e,n,t,r){var i;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var a;if(!t)return null;if(t.errors)e=t.matches;else if((a=r)!=null&&a.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let o=e,l=(i=t)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(c=>c.route.id&&(l==null?void 0:l[c.route.id])!==void 0);d>=0||Ce(!1),o=o.slice(0,Math.min(o.length,d+1))}let s=!1,u=-1;if(t&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let c=o[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:f,errors:p}=t,g=c.route.loader&&f[c.route.id]===void 0&&(!p||p[c.route.id]===void 0);if(c.route.lazy||g){s=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,c,f)=>{let p,g=!1,x=null,b=null;t&&(p=l&&c.route.id?l[c.route.id]:void 0,x=c.route.errorElement||S1,s&&(u<0&&f===0?(T1("route-fallback"),g=!0,b=null):u===f&&(g=!0,b=c.route.hydrateFallbackElement||null)));let m=n.concat(o.slice(0,f+1)),h=()=>{let v;return p?v=x:g?v=b:c.route.Component?v=L.createElement(c.route.Component,null):c.route.element?v=c.route.element:v=d,L.createElement(E1,{match:c,routeContext:{outlet:d,matches:m,isDataRoute:t!=null},children:v})};return t&&(c.route.ErrorBoundary||c.route.errorElement||f===0)?L.createElement(C1,{location:t.location,revalidation:t.revalidation,component:x,error:p,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):h()},null)}var Um=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Um||{}),$m=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}($m||{});function P1(e){let n=L.useContext(So);return n||Ce(!1),n}function _1(e){let n=L.useContext(Fm);return n||Ce(!1),n}function z1(e){let n=L.useContext(vt);return n||Ce(!1),n}function Vm(e){let n=z1(),t=n.matches[n.matches.length-1];return t.route.id||Ce(!1),t.route.id}function L1(){var e;let n=L.useContext(Bm),t=_1(),r=Vm();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function O1(){let{router:e}=P1(Um.UseNavigateStable),n=Vm($m.UseNavigateStable),t=L.useRef(!1);return qm(()=>{t.current=!0}),L.useCallback(function(i,a){a===void 0&&(a={}),t.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ga({fromRouteId:n},a)))},[e,n])}const hd={};function T1(e,n,t){hd[e]||(hd[e]=!0)}function I1(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function A1(e){let{basename:n="/",children:t=null,location:r,navigationType:i=_t.Pop,navigator:a,static:o=!1,future:l}=e;Ti()&&Ce(!1);let s=n.replace(/^\/*/,"/"),u=L.useMemo(()=>({basename:s,navigator:a,static:o,future:Ga({v7_relativeSplatPath:!1},l)}),[s,l,a,o]);typeof r=="string"&&(r=Oi(r));let{pathname:d="/",search:c="",hash:f="",state:p=null,key:g="default"}=r,x=L.useMemo(()=>{let b=kr(d,s);return b==null?null:{location:{pathname:b,search:c,hash:f,state:p,key:g},navigationType:i}},[s,d,c,f,p,g,i]);return x==null?null:L.createElement(gt.Provider,{value:u},L.createElement(Ou.Provider,{children:t,value:x}))}new Promise(()=>{});/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ya(){return Ya=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ya.apply(this,arguments)}function Qm(e,n){if(e==null)return{};var t={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(n.indexOf(i)>=0)&&(t[i]=e[i]);return t}function D1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function j1(e,n){return e.button===0&&(!n||n==="_self")&&!D1(e)}const N1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],R1=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],M1="6";try{window.__reactRouterVersion=M1}catch{}const F1=L.createContext({isTransitioning:!1}),B1="startTransition",gd=Dg[B1];function q1(e){let{basename:n,children:t,future:r,window:i}=e,a=L.useRef();a.current==null&&(a.current=Hy({window:i,v5Compat:!0}));let o=a.current,[l,s]=L.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=L.useCallback(c=>{u&&gd?gd(()=>s(c)):s(c)},[s,u]);return L.useLayoutEffect(()=>o.listen(d),[o,d]),L.useEffect(()=>I1(r),[r]),L.createElement(A1,{basename:n,children:t,location:l.location,navigationType:l.action,navigator:o,future:r})}const U1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ye=L.forwardRef(function(n,t){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:l,target:s,to:u,preventScrollReset:d,viewTransition:c}=n,f=Qm(n,N1),{basename:p}=L.useContext(gt),g,x=!1;if(typeof u=="string"&&$1.test(u)&&(g=u,U1))try{let v=new URL(window.location.href),E=u.startsWith("//")?new URL(v.protocol+u):new URL(u),P=kr(E.pathname,p);E.origin===v.origin&&P!=null?u=P+E.search+E.hash:x=!0}catch{}let b=v1(u,{relative:i}),m=H1(u,{replace:o,state:l,target:s,preventScrollReset:d,relative:i,viewTransition:c});function h(v){r&&r(v),v.defaultPrevented||m(v)}return L.createElement("a",Ya({},f,{href:g||b,onClick:x||a?r:h,ref:t,target:s}))}),V1=L.forwardRef(function(n,t){let{"aria-current":r="page",caseSensitive:i=!1,className:a="",end:o=!1,style:l,to:s,viewTransition:u,children:d}=n,c=Qm(n,R1),f=Eo(s,{relative:c.relative}),p=Ii(),g=L.useContext(Fm),{navigator:x,basename:b}=L.useContext(gt),m=g!=null&&W1(f)&&u===!0,h=x.encodeLocation?x.encodeLocation(f).pathname:f.pathname,v=p.pathname,E=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;i||(v=v.toLowerCase(),E=E?E.toLowerCase():null,h=h.toLowerCase()),E&&b&&(E=kr(E,b)||E);const P=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let C=v===h||!o&&v.startsWith(h)&&v.charAt(P)==="/",z=E!=null&&(E===h||!o&&E.startsWith(h)&&E.charAt(h.length)==="/"),I={isActive:C,isPending:z,isTransitioning:m},R=C?r:void 0,S;typeof a=="function"?S=a(I):S=[a,C?"active":null,z?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let j=typeof l=="function"?l(I):l;return L.createElement(Ye,Ya({},c,{"aria-current":R,className:S,ref:t,style:j,to:s,viewTransition:u}),typeof d=="function"?d(I):d)});var Ss;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ss||(Ss={}));var vd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(vd||(vd={}));function Q1(e){let n=L.useContext(So);return n||Ce(!1),n}function H1(e,n){let{target:t,replace:r,state:i,preventScrollReset:a,relative:o,viewTransition:l}=n===void 0?{}:n,s=Co(),u=Ii(),d=Eo(e,{relative:o});return L.useCallback(c=>{if(j1(c,t)){c.preventDefault();let f=r!==void 0?r:Ka(u)===Ka(d);s(e,{replace:f,state:i,preventScrollReset:a,relative:o,viewTransition:l})}},[u,s,d,r,i,t,e,a,o,l])}function W1(e,n){n===void 0&&(n={});let t=L.useContext(F1);t==null&&Ce(!1);let{basename:r}=Q1(Ss.useViewTransitionState),i=Eo(e,{relative:n.relative});if(!t.isTransitioning)return!1;let a=kr(t.currentLocation.pathname,r)||t.currentLocation.pathname,o=kr(t.nextLocation.pathname,r)||t.nextLocation.pathname;return ws(i.pathname,o)!=null||ws(i.pathname,a)!=null}const K1="_container_1ocd1_1",G1="_logoArea_1ocd1_21",Y1="_logoMark_1ocd1_33",X1="_nav_1ocd1_53",J1="_navLink_1ocd1_63",Z1="_active_1ocd1_89",$t={container:K1,logoArea:G1,logoMark:Y1,nav:X1,navLink:J1,active:Z1},ex=[{to:"/",label:"Início"},{to:"/lessons",label:"Lições"},{to:"/quizzes",label:"Quizzes"},{to:"/playground",label:"Playground"},{to:"/challenges",label:"Desafios"}];function nx(){return w.jsxs("header",{className:$t.container,children:[w.jsxs("div",{className:$t.logoArea,children:[w.jsx("span",{className:$t.logoMark,children:"⚙️"}),w.jsxs("div",{children:[w.jsx("strong",{children:"CS Learning Hub"}),w.jsx("p",{children:"Aprenda C# com prática guiada"})]})]}),w.jsx("nav",{className:$t.nav,children:ex.map(e=>w.jsx(V1,{to:e.to,className:({isActive:n})=>[$t.navLink,n?$t.active:""].join(" "),end:e.to==="/",children:e.label},e.to))})]})}const Xa=[{id:"challenge-aula01-faixas-energia",title:"Classificador de Faixas de Energia",difficulty:"Fácil",description:'Receba uma lista de medições inteiras e retorne uma lista de rótulos ("Baixa", "Normal", "Alta") usando `switch` expression com padrões relacionais.',sampleInput:"[12, 55, 103]",sampleOutput:'["Baixa", "Normal", "Alta"]',acceptanceCriteria:["Mapear faixas: < 40 é Baixa, 40 a 99 é Normal, >= 100 é Alta","Usar `switch` expression com padrões de comparação","Retornar uma nova lista sem modificar a coleção original"],hints:["Crie um método auxiliar que converte uma leitura em rótulo.",'Valide entradas negativas retornando "Baixa" por padrão.'],topics:["Fundamentos","Fluxo"]},{id:"challenge-aula02-metricas-janela",title:"Médias Móveis com Span",difficulty:"Fácil",description:"Implemente uma função que calcula a média móvel de tamanho `k` sobre um array de `double` sem criar arrays temporários.",sampleInput:"valores = [4, 6, 8, 10], k = 2",sampleOutput:"[5, 7, 9]",acceptanceCriteria:["Lançar `ArgumentException` quando `k` < 1 ou maior que o tamanho do array","Usar `Span<double>` ou `ReadOnlySpan<double>` no processamento","Retornar `IEnumerable<double>` com as médias na ordem correta"],hints:["Calcule a soma incremental removendo o elemento que sai da janela.","Use `AsSpan()` para evitar cópias de memória."],topics:["Arrays","Listas","Complexidade"]},{id:"challenge-aula03-sinalizador-email",title:"Primeiro Caractere Único",difficulty:"Fácil",description:"Dado um texto, retorne o índice do primeiro caractere que aparece apenas uma vez ou -1 caso não exista.",sampleInput:'"microsoft"',sampleOutput:"0",acceptanceCriteria:["Ignorar diferença entre maiúsculas e minúsculas","Retornar -1 quando todas as ocorrências são repetidas","Complexidade O(n) utilizando dicionário de frequências"],hints:["Normalize a string com `ToLowerInvariant()`.","Percorra a string duas vezes: contagem e verificação."],topics:["Strings","Dicionários"]},{id:"challenge-aula04-menor-substring",title:"Menor Substring Cobertura",difficulty:"Médio",description:"Encontre a menor substring de `s` que contenha todos os caracteres de `t` (com multiplicidade).",sampleInput:'s = "ADOBECODEBANC", t = "ABC"',sampleOutput:'"BANC"',acceptanceCriteria:["Retornar string vazia quando não for possível","Manter contagens corretas para caracteres repetidos","Complexidade O(n) com sliding window"],hints:["Use dois ponteiros e um dicionário de frequências.","Controle a quantidade de caracteres válidos dentro da janela."],topics:["Two Pointers","Sliding Window"]},{id:"challenge-aula05-editor-undo",title:"Editor com Undo e Redo",difficulty:"Médio",description:"Construa um editor de texto simples que suporte comandos `TYPE`, `UNDO` e `REDO` preservando o histórico.",sampleInput:"TYPE a; TYPE b; UNDO; TYPE c; REDO",sampleOutput:'"ac"',acceptanceCriteria:["`UNDO` desfaz a última operação TYPE ativa","`REDO` reaplica a operação desfeita mais recente","Limpar a pilha de redo quando um novo TYPE ocorrer"],hints:["Use duas pilhas: uma para ações aplicadas e outra para desfazer.","Armazene apenas o caractere digitado para reduzir memória."],topics:["Pilhas","Filas"]},{id:"challenge-aula06-rotas-bfs",title:"Menor Número de Voos",difficulty:"Médio",description:"Dado um mapa de conexões entre cidades, encontre o número mínimo de voos entre origem e destino usando BFS.",sampleInput:'rotas = [("GRU", "LHR"), ("GRU", "JFK"), ("JFK", "LHR")], origem = GRU, destino = LHR',sampleOutput:"1",acceptanceCriteria:["Retornar -1 quando não houver caminho","Construir lista de adjacência a partir do input","Retornar também o caminho reconstruído (lista de aeroportos)"],hints:["Rastreie predecessores durante o BFS para reconstruir o caminho.","Use `Queue<string>` para percorrer os níveis."],topics:["Grafos","BFS"]},{id:"challenge-aula07-planejador-cursos",title:"Planejador de Cursos",difficulty:"Médio",description:"Receba pares pré-requisito->curso e devolva uma ordem válida de estudo ou detecte ciclo.",sampleInput:'[["Algoritmos", "Estruturas"], ["Estruturas", "Grafos"], ["Grafos", "DP"]]',sampleOutput:'["Algoritmos", "Estruturas", "Grafos", "DP"]',acceptanceCriteria:["Retornar lista vazia quando houver ciclo","Usar ordenação topológica com Kahn ou DFS","Aceitar múltiplos cursos sem dependências"],hints:["Um contador de graus de entrada ajuda a escolher nós sem dependências.","DFS com pilha de recursão também identifica ciclos."],topics:["Topological Sort","Bipartição"]},{id:"challenge-aula08-agenda-salas",title:"Agendamento de Salas com Heap",difficulty:"Médio",description:"Dada uma lista de reuniões com início e fim, calcule o número mínimo de salas necessárias.",sampleInput:"[(9:00, 10:00), (9:30, 11:00), (11:00, 12:00)]",sampleOutput:"2",acceptanceCriteria:["Ordenar as reuniões por horário de início","Usar min-heap para controlar horários de término","Retornar contador máximo de salas simultâneas"],hints:["`PriorityQueue<int,int>` pode armazenar horários de saída.","Remova da heap reuniões finalizadas antes da próxima começar."],topics:["Heaps","Greedy"]},{id:"challenge-aula09-formas-memorizadas",title:"Contagem de Escadas",difficulty:"Médio",description:"Calcule quantas maneiras diferentes existem para subir `n` degraus podendo avançar 1 ou 2 por vez.",sampleInput:"n = 5",sampleOutput:"8",acceptanceCriteria:["Usar recursão com memoização","Retornar 1 quando n <= 1","Evitar recomputar subproblemas repetidos"],hints:["Guarde resultados em `Dictionary<int,int>`.","A relação é `f(n) = f(n-1) + f(n-2)`."],topics:["Programação Dinâmica","Subproblemas"]},{id:"challenge-aula10-sequencia-comum",title:"Maior Subsequência Comum",difficulty:"Difícil",description:"Implemente o cálculo bottom-up do comprimento da maior subsequência comum entre duas strings.",sampleInput:'a = "azure", b = "amarelo"',sampleOutput:"3",acceptanceCriteria:["Montar tabela (m+1)x(n+1) preenchida iterativamente","Retornar também uma subsequência reconstruída","Complexidade O(m*n) e memória otimizada para O(n) opcional"],hints:["Percorra as strings e use tabela com base em prefixos.","Armazene decisões para recuperar a subsequência ao final."],topics:["Programação Dinâmica","Tabulação"]},{id:"challenge-aula11-monitoramento-sql",title:"Dashboard de Pedidos",difficulty:"Médio",description:"Escreva uma consulta SQL que classifique clientes por volume mensal e gere alertas em C# quando ultrapassar limite.",sampleInput:"Pedidos(cliente, valor, data) + limite = 50000",sampleOutput:"Clientes ordenados com campo Alerta = true/false",acceptanceCriteria:["Usar `SUM(valor)` e `OVER (PARTITION BY cliente, MONTH(data))`","Gerar objeto DTO em C# com nível de alerta","Registrar log estruturado quando alerta for true"],hints:["Combine SQL parametrizado com Dapper ou EF Core.","Use logger assíncrono para registrar eventos críticos."],topics:["SQL","Depuração","Tratamento de Erros"]},{id:"challenge-aula12-circuit-breaker",title:"Simulador de Circuit Breaker",difficulty:"Difícil",description:"Modele um serviço que faz chamadas HTTP e aplica circuit breaker com estados Fechado, Aberto e Meio-Aberto.",sampleInput:"falhas consecutivas = 5, tempo de reset = 30s",sampleOutput:"Sequência de estados conforme respostas falham ou sucedem",acceptanceCriteria:["Transicionar para Aberto após N falhas consecutivas","Testar Meio-Aberto após tempo configurado","Expor métricas de sucesso/falha e último estado"],hints:["Use `Timer` ou `Stopwatch` para controlar o período de reset.","Registre eventos no logger para inspeção posterior."],topics:["DevOps","Resiliência"]}],tx="_container_1szue_1",rx="_header_1szue_15",ix="_difficulty_1szue_29",ax="_section_1szue_87",Qn={container:tx,header:rx,difficulty:ix,section:ax};function ox(){const{challengeId:e}=Tu(),n=Co(),t=Xa.find(r=>r.id===e);return t?w.jsxs("div",{className:Qn.container,children:[w.jsxs("header",{className:Qn.header,children:[w.jsxs("div",{children:[w.jsx("span",{className:Qn.difficulty,children:t.difficulty}),w.jsx("h1",{children:t.title}),w.jsx("p",{children:t.description})]}),w.jsx(Ye,{to:"/challenges",children:"Explorar todos"})]}),w.jsxs("section",{className:Qn.section,children:[w.jsx("h2",{children:"Entrada de exemplo"}),w.jsx("pre",{children:w.jsx("code",{children:t.sampleInput})})]}),w.jsxs("section",{className:Qn.section,children:[w.jsx("h2",{children:"Saída esperada"}),w.jsx("pre",{children:w.jsx("code",{children:t.sampleOutput})})]}),w.jsxs("section",{className:Qn.section,children:[w.jsx("h2",{children:"Critérios de aceitação"}),w.jsx("ul",{children:t.acceptanceCriteria.map(r=>w.jsx("li",{children:r},r))})]}),w.jsxs("section",{className:Qn.section,children:[w.jsx("h2",{children:"Dicas"}),w.jsx("ul",{children:t.hints.map(r=>w.jsx("li",{children:r},r))})]})]}):w.jsxs("div",{className:Qn.container,children:[w.jsx("h1",{children:"Desafio não encontrado"}),w.jsx("button",{type:"button",onClick:()=>n(-1),children:"Voltar"})]})}const lx="_card_id03v_1",sx="_badge_id03v_39",ux="_topics_id03v_79",cx="_link_id03v_119",na={card:lx,badge:sx,topics:ux,link:cx},dx={Fácil:"#10b981",Médio:"#f59e0b",Difícil:"#ef4444"};function Hm({challenge:e}){return w.jsxs("article",{className:na.card,children:[w.jsxs("header",{children:[w.jsx("span",{className:na.badge,style:{backgroundColor:dx[e.difficulty]},children:e.difficulty}),w.jsx("h3",{children:e.title})]}),w.jsx("p",{children:e.description}),w.jsxs("footer",{children:[w.jsx("div",{className:na.topics,children:e.topics.map(n=>w.jsx("span",{children:n},n))}),w.jsx(Ye,{to:`/challenges/${e.id}`,className:na.link,children:"Ver detalhes"})]})]})}const fx="_container_35wt3_1",px="_header_35wt3_15",mx="_grid_35wt3_69",al={container:fx,header:px,grid:mx};function hx(){return w.jsxs("div",{className:al.container,children:[w.jsxs("header",{className:al.header,children:[w.jsxs("div",{children:[w.jsx("h1",{children:"Desafios de código"}),w.jsx("p",{children:"Treine as habilidades mais cobradas em entrevistas, com critérios de aceitação claros."})]}),w.jsxs("span",{children:[Xa.length," desafios"]})]}),w.jsx("div",{className:al.grid,children:Xa.map(e=>w.jsx(Hm,{challenge:e},e.id))})]})}const gx=`# 📘 Aula 01 — Fundamentos do C# e Pensamento Algorítmico\r
\r
## 🎯 Objetivos da Aula\r
- Entender o funcionamento de um programa C#.\r
- Trabalhar com variáveis, tipos e operadores.\r
- Aplicar estruturas condicionais e de repetição.\r
- Compreender o raciocínio algorítmico (entrada → processamento → saída).\r
- Construir pequenos programas no terminal.\r
\r
---\r
\r
## 🧠 1. Estrutura de um Programa C#\r
\r
Um programa C# sempre começa no método \`Main()\` dentro de uma classe.\r
Exemplo básico:\r
\r
\`\`\`csharp\r
using System;\r
\r
class Program {\r
    static void Main() {\r
        Console.WriteLine("Hello, World!");\r
    }\r
}\r
\`\`\`\r
\r
O método \`Main\` é o ponto de entrada da aplicação.\r
\`Console.WriteLine\` imprime algo no terminal.\r
\r
---\r
\r
## 💡 2. Tipos de Dados e Variáveis\r
\r
Variáveis armazenam valores temporários na memória.\r
\r
| Tipo | Exemplo | Uso |\r
|------|----------|-----|\r
| \`int\` | \`int idade = 25;\` | Números inteiros |\r
| \`double\` | \`double preco = 9.99;\` | Números decimais |\r
| \`string\` | \`string nome = "Mateus";\` | Texto |\r
| \`bool\` | \`bool ativo = true;\` | Verdadeiro ou falso |\r
| \`char\` | \`char letra = 'A';\` | Um único caractere |\r
\r
> 💬 Dica Feynman: pense em variáveis como “caixinhas com rótulos” onde guardamos valores.\r
\r
---\r
\r
## ⚙️ 3. Operadores em C#\r
\r
| Categoria | Operadores | Descrição |\r
|------------|-------------|------------|\r
| Aritméticos | \`+\`, \`-\`, \`*\`, \`/\`, \`%\` | Soma, subtração, multiplicação, divisão, resto |\r
| Comparação | \`==\`, \`!=\`, \`<\`, \`>\`, \`<=\`, \`>=\` | Comparam valores |\r
| Lógicos | \`&&\`, \`||\`, \`!\` | E, OU, NÃO |\r
\r
Exemplo:\r
\`\`\`csharp\r
int a = 5, b = 3;\r
bool maior = a > b; // true\r
\`\`\`\r
\r
---\r
\r
## 🔁 4. Controle de Fluxo\r
\r
### Condicional (if/else)\r
\`\`\`csharp\r
int idade = 18;\r
if (idade >= 18)\r
    Console.WriteLine("Maior de idade");\r
else\r
    Console.WriteLine("Menor de idade");\r
\`\`\`\r
\r
### Estrutura switch\r
\`\`\`csharp\r
string cor = "azul";\r
switch (cor) {\r
    case "vermelho": Console.WriteLine("Cor quente"); break;\r
    case "azul": Console.WriteLine("Cor fria"); break;\r
    default: Console.WriteLine("Neutra"); break;\r
}\r
\`\`\`\r
\r
### Loops\r
\`\`\`csharp\r
for (int i = 0; i < 5; i++)\r
    Console.WriteLine(i);\r
\r
int j = 0;\r
while (j < 5) {\r
    Console.WriteLine(j);\r
    j++;\r
}\r
\`\`\`\r
\r
---\r
\r
## 💻 5. Exemplo Prático\r
\r
Programa para ler três números e calcular a média:\r
\r
\`\`\`csharp\r
using System;\r
using System.Linq;\r
\r
class Program {\r
    static void Main() {\r
        Console.Write("Digite três números separados por espaço: ");\r
        var nums = Console.ReadLine().Split().Select(double.Parse).ToArray();\r
        double media = nums.Average();\r
        Console.WriteLine($"Média = {media:F2}");\r
    }\r
}\r
\`\`\`\r
\r
Saída:\r
\`\`\`\r
Digite três números separados por espaço: 10 20 30\r
Média = 20.00\r
\`\`\`\r
\r
---\r
\r
## 🧩 6. Exercícios da Aula 01\r
\r
**Ex 1.** Peça um número ao usuário e diga se ele é par ou ímpar.  \r
**Ex 2.** Peça três números e mostre qual é o maior.  \r
**Ex 3.** Peça um número e mostre sua tabuada de 1 a 10.  \r
**Ex 4.** Leia um número \`N\` e faça uma contagem regressiva até 0.  \r
**Ex 5.** Leia um número \`N\` e mostre a soma dos números pares de 1 até \`N\`.\r
\r
---\r
\r
## 💪 7. Desafio Extra\r
\r
**FizzBuzz**  \r
Imprima os números de 1 a 100:  \r
- Se múltiplo de 3 → “Fizz”  \r
- Se múltiplo de 5 → “Buzz”  \r
- Se múltiplo de ambos → “FizzBuzz”  \r
Senão, imprima o número.\r
\r
---\r
\r
## 🧠 8. Feynman — Explicação com Suas Palavras\r
\r
Responda:\r
1. O que é um programa e o que ele faz?\r
2. Como o computador “decide” dentro de um \`if\`?\r
3. Por que precisamos de loops?\r
4. O que é uma variável e para que serve?\r
5. Dê um exemplo de algoritmo no seu cotidiano (ex: preparar café).\r
\r
📝 Escreva suas respostas em até **150 palavras**.\r
`,vx=`# 📘 Aula 02 — Arrays e Listas em C#\r
\r
## 🎯 Objetivos da Aula\r
- Entender a diferença entre **array** e **lista**.\r
- Manipular coleções de dados sequenciais.\r
- Compreender a **complexidade de tempo** (Big-O).\r
- Escrever algoritmos que percorrem e processam coleções.\r
- Aplicar boas práticas de iteração e busca.\r
\r
---\r
\r
## 🧩 1. Arrays — Estruturas Fixas\r
\r
Um **array** armazena múltiplos valores do mesmo tipo em sequência.\r
\r
\`\`\`csharp\r
int[] numeros = { 10, 20, 30, 40 };\r
Console.WriteLine(numeros[0]); // 10\r
numeros[2] = 99;\r
Console.WriteLine(numeros.Length); // 4\r
\`\`\`\r
\r
- O índice começa em **0**.\r
- O tamanho do array é **fixo** após a criação.\r
\r
💡 **Analogia Feynman:** pense em um array como uma “gaveteira” com número fixo de compartimentos.\r
\r
---\r
\r
## 🧠 2. List<T> — Estruturas Dinâmicas\r
\r
Listas podem crescer ou diminuir durante a execução.\r
\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
\r
class Program {\r
    static void Main() {\r
        List<int> lista = new List<int> { 1, 2, 3 };\r
        lista.Add(4);\r
        lista.Remove(2);\r
        Console.WriteLine(string.Join(", ", lista)); // 1, 3, 4\r
    }\r
}\r
\`\`\`\r
\r
Principais métodos:\r
| Método | Função |\r
|--------|--------|\r
| \`.Add(valor)\` | Adiciona ao final |\r
| \`.Remove(valor)\` | Remove o primeiro valor igual |\r
| \`.Count\` | Número de elementos |\r
| \`.Sort()\` | Ordena a lista |\r
| \`.Contains(x)\` | Verifica se contém |\r
\r
---\r
\r
## ⚙️ 3. Iterando e Processando\r
\r
Podemos usar \`for\`, \`foreach\` ou LINQ para percorrer listas.\r
\r
\`\`\`csharp\r
List<int> numeros = new List<int> { 5, 3, 8 };\r
foreach (var n in numeros)\r
    Console.WriteLine(n);\r
\`\`\`\r
\r
Com LINQ:\r
\`\`\`csharp\r
using System.Linq;\r
var quadrados = numeros.Select(x => x * x);\r
Console.WriteLine(string.Join(", ", quadrados)); // 25, 9, 64\r
\`\`\`\r
\r
---\r
\r
## ⏱️ 4. Complexidade Big-O\r
\r
Big-O mede quanto tempo (ou memória) um algoritmo gasta conforme o tamanho da entrada cresce.\r
\r
| Operação | Complexidade | Exemplo |\r
|-----------|---------------|----------|\r
| Acesso direto | O(1) | \`array[i]\` |\r
| Percorrer tudo | O(n) | \`foreach\` |\r
| Ordenar | O(n log n) | \`.Sort()\` |\r
| Busca linear | O(n) | \`lista.Contains(x)\` |\r
| Busca binária | O(log n) | com dados ordenados |\r
\r
💡 **Analogia Feynman:**\r
Imagine procurar uma palavra em um dicionário:\r
- Folhear página a página → O(n)\r
- Usar índice alfabético → O(log n)\r
\r
---\r
\r
## 💻 5. Exemplo Prático\r
\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
\r
class Program {\r
    static void Main() {\r
        List<int> numeros = new List<int> { 5, 2, 9, 1, 5, 6 };\r
        numeros.Sort();\r
        Console.WriteLine("Ordenados: " + string.Join(", ", numeros));\r
\r
        double media = numeros.Average();\r
        Console.WriteLine($"Média: {media:F2}");\r
    }\r
}\r
\`\`\`\r
\r
Saída:\r
\`\`\`\r
Ordenados: 1, 2, 5, 5, 6, 9\r
Média: 4,67\r
\`\`\`\r
\r
---\r
\r
## 🧩 6. Exercícios da Aula 02\r
\r
**Ex 1.** Crie um array com 5 números inteiros e exiba a soma total.  \r
**Ex 2.** Leia \`N\` números e mostre o maior e o menor valor.  \r
**Ex 3.** Dada uma lista, remova todos os números duplicados mantendo a ordem original.  \r
**Ex 4.** Ordene uma lista de nomes em ordem alfabética.  \r
**Ex 5.** Crie um programa que leia notas (até digitar “-1”) e mostre média, maior e menor nota.\r
\r
---\r
\r
## 💪 7. Desafio Extra\r
\r
**Rotacionar Array:**  \r
Dado um array \`[1, 2, 3, 4, 5]\` e \`k = 2\`, a rotação à direita deve gerar \`[4, 5, 1, 2, 3]\`.\r
\r
---\r
\r
## 🧠 8. Feynman — Explicação com Suas Palavras\r
\r
Responda:\r
1. O que diferencia um array de uma lista?\r
2. O que significa dizer que uma operação é O(n)?\r
3. Por que devemos conhecer a complexidade de tempo?\r
4. Dê um exemplo de quando uma lista seria melhor que um array.\r
5. Como você explicaria Big-O para alguém de fora da computação?\r
\r
📝 Escreva suas respostas em até **150 palavras**.\r
`,yx=`# 📘 Aula 03 — Strings e Dicionários em C#\r
\r
## 🎯 Objetivos da Aula\r
- Compreender o funcionamento das **strings** em C#.\r
- Aprender sobre **imutabilidade** e operações comuns de texto.\r
- Usar **Dicionários (Dictionary<TKey, TValue>)** para mapeamento e contagem.\r
- Manipular e analisar textos com eficiência.\r
- Desenvolver algoritmos de contagem e busca de padrões.\r
\r
---\r
\r
## 🧩 1. Strings em C#\r
\r
Uma **string** é uma sequência de caracteres imutável — ou seja, não pode ser alterada após criada.\r
\r
\`\`\`csharp\r
string nome = "Microsoft";\r
Console.WriteLine(nome.Length); // 9\r
Console.WriteLine(nome.ToUpper()); // MICROSOFT\r
Console.WriteLine(nome.Substring(0, 5)); // Micro\r
\`\`\`\r
\r
💡 **Imutabilidade:**  \r
Cada operação em uma string cria uma **nova string** na memória.  \r
Por isso, em manipulações intensas, usamos \`StringBuilder\`.\r
\r
---\r
\r
## ⚙️ 2. StringBuilder — Para Modificações Frequentes\r
\r
\`\`\`csharp\r
using System.Text;\r
\r
StringBuilder sb = new StringBuilder("Olá");\r
sb.Append(" mundo");\r
sb.Replace("mundo", "C#");\r
Console.WriteLine(sb.ToString()); // Olá C#\r
\`\`\`\r
\r
\`StringBuilder\` é mais eficiente para concatenar muitas partes de texto.\r
\r
---\r
\r
## 🔠 3. Métodos Úteis de String\r
\r
| Método | Descrição |\r
|--------|------------|\r
| \`ToUpper()\` / \`ToLower()\` | Converte para maiúsculas/minúsculas |\r
| \`Contains("palavra")\` | Verifica se contém substring |\r
| \`Split(' ')\` | Divide em partes |\r
| \`Replace("a","b")\` | Substitui ocorrências |\r
| \`Trim()\` | Remove espaços extras |\r
| \`StartsWith()\` / \`EndsWith()\` | Verifica início/fim |\r
\r
Exemplo:\r
\`\`\`csharp\r
string frase = "  Hello C# World  ";\r
var partes = frase.Trim().Split(' ');\r
Console.WriteLine(partes.Length); // 3\r
\`\`\`\r
\r
---\r
\r
## 🧮 4. Dicionários (Dictionary<TKey, TValue>)\r
\r
Um **dicionário** armazena pares **chave → valor**.\r
\r
\`\`\`csharp\r
using System;\r
using System.Collections.Generic;\r
\r
class Program {\r
    static void Main() {\r
        var capitais = new Dictionary<string, string>();\r
        capitais["Brasil"] = "Brasília";\r
        capitais["EUA"] = "Washington";\r
        capitais["Japão"] = "Tóquio";\r
\r
        Console.WriteLine(capitais["EUA"]); // Washington\r
    }\r
}\r
\`\`\`\r
\r
Verificando chaves:\r
\`\`\`csharp\r
if (capitais.ContainsKey("Brasil"))\r
    Console.WriteLine("Existe!");\r
\`\`\`\r
\r
---\r
\r
## 🔢 5. Exemplo: Contando Frequência de Letras\r
\r
\`\`\`csharp\r
string texto = "microsoft";\r
var freq = new Dictionary<char, int>();\r
\r
foreach (char c in texto) {\r
    if (freq.ContainsKey(c))\r
        freq[c]++;\r
    else\r
        freq[c] = 1;\r
}\r
\r
foreach (var kv in freq)\r
    Console.WriteLine($"{kv.Key} → {kv.Value}");\r
\`\`\`\r
\r
Saída:\r
\`\`\`\r
m → 1\r
i → 1\r
c → 1\r
r → 1\r
o → 2\r
s → 1\r
f → 1\r
t → 1\r
\`\`\`\r
\r
---\r
\r
## 🧩 6. Exercícios da Aula 03\r
\r
**Ex 1.** Peça uma palavra e conte quantas letras ela possui.  \r
**Ex 2.** Peça uma frase e conte quantas vezes a letra “a” aparece.  \r
**Ex 3.** Receba duas palavras e diga se são palíndromos entre si (ex: “amor” / “roma”).  \r
**Ex 4.** Leia um texto e mostre a frequência de cada letra.  \r
**Ex 5.** Dado um texto, encontre a palavra mais longa.\r
\r
---\r
\r
## 💪 7. Desafio Extra\r
\r
**Análise de Texto Completa:**  \r
Peça um parágrafo e mostre:\r
- Número total de palavras.\r
- Quantas palavras únicas existem.\r
- A palavra mais repetida.\r
\r
Use \`Split\`, \`ToLower\` e \`Dictionary<string,int>\`.\r
\r
---\r
\r
## 🧠 8. Feynman — Explicação com Suas Palavras\r
\r
Responda:\r
1. Por que \`string\` é imutável?\r
2. Quando usar \`StringBuilder\` em vez de \`string\`?\r
3. O que é uma chave e um valor em um dicionário?\r
4. Por que o dicionário é eficiente para contagem de frequência?\r
5. Explique um exemplo do dia a dia que usa mapeamento chave → valor.\r
\r
📝 Escreva suas respostas em até **150 palavras**.\r
`,xx=`# 📘 Aula 04 — Two Pointers e Sliding Window\r
\r
## 🎯 Objetivos da Aula\r
- Entender o conceito de **Two Pointers** e **Sliding Window**.\r
- Resolver problemas clássicos de arrays e strings com eficiência.\r
- Reduzir complexidade de O(n²) para O(n).\r
- Aplicar lógica de movimentação simultânea de ponteiros.\r
- Desenvolver soluções otimizadas no estilo **HackerRank/LeetCode**.\r
\r
---\r
\r
## 🧠 1. Conceito de Two Pointers\r
\r
A técnica **Two Pointers (dois ponteiros)** usa duas variáveis (índices) que percorrem uma estrutura ao mesmo tempo.\r
\r
💡 **Analogia Feynman:** imagine duas pessoas caminhando em uma estrada (array):\r
- Uma anda rápido (ponteiro direito);\r
- Outra anda devagar (ponteiro esquerdo);\r
- Elas se aproximam, se afastam ou percorrem a estrada para encontrar um padrão.\r
\r
---\r
\r
### 📍 Exemplo 1 — Remover Duplicados em Array Ordenado\r
\r
\`\`\`csharp\r
int RemoveDuplicados(int[] nums) {\r
    if (nums.Length == 0) return 0;\r
    int i = 0;\r
    for (int j = 1; j < nums.Length; j++) {\r
        if (nums[j] != nums[i]) {\r
            i++;\r
            nums[i] = nums[j];\r
        }\r
    }\r
    return i + 1;\r
}\r
\`\`\`\r
\r
- **Entrada:** \`[1,1,2,2,3]\`\r
- **Saída:** \`3\` (Array final: \`[1,2,3,_,_]\`)\r
- **Complexidade:** O(n)\r
\r
---\r
\r
## 🧮 2. Conceito de Sliding Window\r
\r
A técnica **Sliding Window (janela deslizante)** mantém uma *subestrutura contínua* dentro de uma sequência.\r
A janela se expande ou contrai conforme a condição do problema.\r
\r
💡 **Analogia:**  \r
Pense em uma janela de vidro deslizando sobre uma linha de números — você vê apenas uma parte da sequência de cada vez.\r
\r
---\r
\r
### 📍 Exemplo 2 — Maior Soma de Subarray de Tamanho Fixo K\r
\r
\`\`\`csharp\r
int MaxSomaSubarray(int[] arr, int k) {\r
    int soma = 0, maxSoma = 0;\r
\r
    for (int i = 0; i < k; i++)\r
        soma += arr[i];\r
    maxSoma = soma;\r
\r
    for (int i = k; i < arr.Length; i++) {\r
        soma += arr[i] - arr[i - k];\r
        maxSoma = Math.Max(maxSoma, soma);\r
    }\r
\r
    return maxSoma;\r
}\r
\`\`\`\r
\r
- **Entrada:** \`[2,1,5,1,3,2], k=3\`\r
- **Saída:** \`9\` (subarray \`[5,1,3]\`)\r
\r
---\r
\r
### 📍 Exemplo 3 — Substring Mais Longa sem Caracteres Repetidos\r
\r
\`\`\`csharp\r
int LongestSubstringSemRepetir(string s) {\r
    var mapa = new Dictionary<char, int>();\r
    int inicio = 0, maxLen = 0;\r
\r
    for (int fim = 0; fim < s.Length; fim++) {\r
        char c = s[fim];\r
        if (mapa.ContainsKey(c) && mapa[c] >= inicio)\r
            inicio = mapa[c] + 1;\r
        mapa[c] = fim;\r
        maxLen = Math.Max(maxLen, fim - inicio + 1);\r
    }\r
\r
    return maxLen;\r
}\r
\`\`\`\r
\r
- **Entrada:** \`"abcabcbb"\`\r
- **Saída:** \`3\` (substring \`"abc"\`)\r
- **Complexidade:** O(n)\r
\r
---\r
\r
## 🧩 3. Quando Usar Cada Técnica\r
\r
| Técnica | Uso Ideal | Exemplo |\r
|----------|------------|----------|\r
| **Two Pointers** | Comparar ou mover índices (arrays ordenados) | Remover duplicados, somas em pares |\r
| **Sliding Window** | Subarray ou substring contínua | Soma máxima, janela sem repetição |\r
\r
---\r
\r
## 💻 4. Exemplo Prático — Soma de Pares Igual a Alvo\r
\r
\`\`\`csharp\r
bool TemParComSoma(int[] arr, int alvo) {\r
    int i = 0, j = arr.Length - 1;\r
    Array.Sort(arr);\r
\r
    while (i < j) {\r
        int soma = arr[i] + arr[j];\r
        if (soma == alvo) return true;\r
        else if (soma < alvo) i++;\r
        else j--;\r
    }\r
\r
    return false;\r
}\r
\`\`\`\r
\r
**Entrada:** \`[1, 4, 2, 7, 11, 15]\`, alvo = 9  \r
**Saída:** \`true\` (2 + 7)\r
\r
---\r
\r
## 🧩 5. Exercícios da Aula 04\r
\r
**Ex 1.** Dado um array ordenado, remova os elementos duplicados in-place e retorne o novo comprimento.  \r
**Ex 2.** Dado um array e um valor \`k\`, encontre a maior soma de subarray contínuo de tamanho \`k\`.  \r
**Ex 3.** Dada uma string, encontre o tamanho da substring mais longa sem caracteres repetidos.  \r
**Ex 4.** Encontre todos os pares de números que somam um valor alvo.  \r
**Ex 5.** Dado um array binário (0 e 1), encontre o comprimento máximo de subarray com número igual de 0s e 1s.\r
\r
---\r
\r
## 💪 6. Desafio Extra — Subarray com Soma Máxima (Kadane)\r
\r
\`\`\`csharp\r
int MaxSubarray(int[] nums) {\r
    int maxAtual = nums[0];\r
    int maxGlobal = nums[0];\r
    for (int i = 1; i < nums.Length; i++) {\r
        maxAtual = Math.Max(nums[i], maxAtual + nums[i]);\r
        if (maxAtual > maxGlobal)\r
            maxGlobal = maxAtual;\r
    }\r
    return maxGlobal;\r
}\r
\`\`\`\r
\r
**Entrada:** \`[-2,1,-3,4,-1,2,1,-5,4]\`  \r
**Saída:** \`6\` (subarray \`[4,-1,2,1]\`)  \r
**Complexidade:** O(n)\r
\r
---\r
\r
## 🧠 7. Feynman — Explicação com Suas Palavras\r
\r
Responda:\r
1. O que diferencia *Two Pointers* de *Sliding Window*?\r
2. Por que essas técnicas são mais eficientes que loops duplos?\r
3. Como a janela “desliza” sobre o array?\r
4. Qual é a relação entre espaço e tempo nesses algoritmos?\r
5. Dê um exemplo da vida real que usa o conceito de “janela deslizante”.\r
\r
📝 Escreva suas respostas em até **150 palavras**.\r
`,kx=`# 📘 Aula 05 — Recursão e Backtracking\r
\r
## 🎯 Objetivos da Aula\r
- Entender o conceito de **recursão** e como ela funciona internamente.\r
- Identificar **casos base** e **casos recursivos**.\r
- Compreender como o **backtracking** resolve problemas explorando caminhos possíveis.\r
- Resolver problemas clássicos de recursão como *fatorial*, *Fibonacci* e *subconjuntos*.\r
- Analisar o custo computacional e os riscos (stack overflow).\r
\r
---\r
\r
## 🧠 1. O Que é Recursão?\r
\r
**Recursão** é quando uma função chama a si mesma para resolver subproblemas menores.\r
\r
💡 **Analogia Feynman:**  \r
Pense em um espelho diante de outro espelho — a imagem se repete infinitamente, até que algo (o **caso base**) interrompe a repetição.\r
\r
---\r
\r
### 📍 Estrutura de uma Função Recursiva\r
\r
\`\`\`csharp\r
Tipo NomeFuncao(Tipo parametro) {\r
    if (condicaoBase)\r
        return resultado; // Caso base\r
    else\r
        return NomeFuncao(novoParametro); // Chamada recursiva\r
}\r
\`\`\`\r
\r
Sem um **caso base**, a função entrará em **loop infinito** até estourar a pilha (Stack Overflow).\r
\r
---\r
\r
## 🧮 2. Exemplo 1 — Fatorial\r
\r
\`\`\`csharp\r
int Fatorial(int n) {\r
    if (n == 0) return 1;  // Caso base\r
    return n * Fatorial(n - 1); // Chamada recursiva\r
}\r
\`\`\`\r
\r
📊 **Execução:**  \r
\`Fatorial(4)\` → \`4 * Fatorial(3)\` → \`4 * 3 * Fatorial(2)\` → \`4 * 3 * 2 * 1\` → \`24\`\r
\r
---\r
\r
## 🌀 3. Exemplo 2 — Fibonacci\r
\r
\`\`\`csharp\r
int Fibonacci(int n) {\r
    if (n <= 1) return n;\r
    return Fibonacci(n - 1) + Fibonacci(n - 2);\r
}\r
\`\`\`\r
\r
⚠️ **Cuidado:** essa versão é **ineficiente** (complexidade O(2ⁿ)) — várias chamadas repetem os mesmos cálculos.  \r
Soluções mais eficientes usam **memoização** ou **programação dinâmica**.\r
\r
---\r
\r
## 🧩 4. Exemplo 3 — Soma de Array\r
\r
\`\`\`csharp\r
int SomaArray(int[] arr, int n) {\r
    if (n == 0) return 0;\r
    return arr[n - 1] + SomaArray(arr, n - 1);\r
}\r
\`\`\`\r
\r
Entrada: \`[1, 2, 3, 4]\`  \r
Saída: \`10\`\r
\r
---\r
\r
## 🧭 5. Introdução ao Backtracking\r
\r
**Backtracking** é uma forma de recursão que **explora todas as possibilidades** e “volta atrás” quando uma escolha não leva à solução.\r
\r
💡 **Analogia Feynman:**  \r
É como um labirinto: você tenta um caminho; se der errado, volta e tenta outro.\r
\r
---\r
\r
### 📍 Exemplo 4 — Geração de Subconjuntos\r
\r
\`\`\`csharp\r
void GeraSubconjuntos(List<int> atual, int[] nums, int i) {\r
    if (i == nums.Length) {\r
        Console.WriteLine(string.Join(", ", atual));\r
        return;\r
    }\r
    // Sem incluir o número\r
    GeraSubconjuntos(atual, nums, i + 1);\r
\r
    // Incluindo o número\r
    atual.Add(nums[i]);\r
    GeraSubconjuntos(atual, nums, i + 1);\r
    atual.RemoveAt(atual.Count - 1); // Backtrack\r
}\r
\`\`\`\r
\r
Entrada: \`[1,2]\`  \r
Saída:\r
\`\`\`\r
[]\r
[2]\r
[1]\r
[1,2]\r
\`\`\`\r
\r
---\r
\r
### 📍 Exemplo 5 — Permutações de String\r
\r
\`\`\`csharp\r
void Permutacoes(string prefixo, string resto) {\r
    if (resto.Length == 0)\r
        Console.WriteLine(prefixo);\r
    else {\r
        for (int i = 0; i < resto.Length; i++) {\r
            string novoPrefixo = prefixo + resto[i];\r
            string novoResto = resto.Remove(i, 1);\r
            Permutacoes(novoPrefixo, novoResto);\r
        }\r
    }\r
}\r
\`\`\`\r
\r
Entrada: \`"ABC"\`  \r
Saída:\r
\`\`\`\r
ABC\r
ACB\r
BAC\r
BCA\r
CAB\r
CBA\r
\`\`\`\r
\r
---\r
\r
## 🧩 6. Exercícios da Aula 05\r
\r
**Ex 1.** Implemente uma função recursiva para calcular o fatorial de \`n\`.  \r
**Ex 2.** Crie uma função recursiva que some os números de 1 até \`n\`.  \r
**Ex 3.** Implemente Fibonacci de forma recursiva e conte o número de chamadas.  \r
**Ex 4.** Escreva uma função que gere todas as combinações binárias de um número \`n\`.  \r
**Ex 5.** Gere todas as permutações possíveis de uma lista de inteiros.\r
\r
---\r
\r
## 💪 7. Desafio Extra — N-Queens Simplificado\r
\r
Coloque \`n\` rainhas em um tabuleiro \`n x n\` de modo que nenhuma ataque outra.\r
\r
💡 Dica: use **backtracking** com:\r
- Uma função recursiva que tenta colocar uma rainha em cada linha.\r
- Verifique se a posição é segura antes de seguir.\r
- “Volte” (backtrack) se não houver solução possível.\r
\r
---\r
\r
## 🧠 8. Feynman — Explicação com Suas Palavras\r
\r
Responda:\r
1. Qual a diferença entre recursão e iteração?\r
2. Por que toda função recursiva precisa de um caso base?\r
3. Como o backtracking “volta atrás”?\r
4. Cite um exemplo prático do dia a dia que pode ser resolvido por backtracking.\r
5. O que acontece se a recursão não parar?\r
\r
📝 Escreva suas respostas em até **150 palavras**.\r
`,wx=`# 📘 Aula 06 — Estruturas de Dados: Pilhas e Filas (Stacks & Queues)

## 🎯 Objetivos da Aula
- Compreender o funcionamento das estruturas **Pilha (Stack)** e **Fila (Queue)**.
- Aprender suas principais operações e complexidades.
- Resolver problemas práticos com pilhas e filas.
- Entender como essas estruturas são implementadas na prática.
- Desenvolver algoritmos baseados nessas abstrações.

---

## 🧠 1. Conceito de Pilha (Stack)

Uma **pilha** segue o princípio **LIFO** — *Last In, First Out* (o último a entrar é o primeiro a sair).  
Imagine uma pilha de pratos: você só consegue retirar o de cima.

### Principais Operações:
| Operação | Descrição | Complexidade |
|-----------|------------|---------------|
| \`Push\` | Adiciona elemento no topo | O(1) |
| \`Pop\` | Remove o elemento do topo | O(1) |
| \`Peek\` | Consulta o elemento do topo | O(1) |
| \`Count\` | Retorna o número de elementos | O(1) |

---

### 📍 Exemplo 1 — Uso de Stack em C#

\`\`\`csharp
using System;
using System.Collections.Generic;

class Program {
    static void Main() {
        Stack<string> pilha = new Stack<string>();
        pilha.Push("A");
        pilha.Push("B");
        pilha.Push("C");

        Console.WriteLine(pilha.Pop()); // C
        Console.WriteLine(pilha.Peek()); // B
        Console.WriteLine(pilha.Count);  // 2
    }
}
\`\`\`

---

## 🔄 2. Conceito de Fila (Queue)

Uma **fila** segue o princípio **FIFO** — *First In, First Out* (o primeiro a entrar é o primeiro a sair).  
Pense em uma fila de atendimento: quem chega primeiro é atendido primeiro.

### Principais Operações:
| Operação | Descrição | Complexidade |
|-----------|------------|---------------|
| \`Enqueue\` | Adiciona no final da fila | O(1) |
| \`Dequeue\` | Remove do início | O(1) |
| \`Peek\` | Consulta o primeiro elemento | O(1) |
| \`Count\` | Retorna o número de elementos | O(1) |

---

### 📍 Exemplo 2 — Uso de Queue em C#

\`\`\`csharp
using System;
using System.Collections.Generic;

class Program {
    static void Main() {
        Queue<string> fila = new Queue<string>();
        fila.Enqueue("Mateus");
        fila.Enqueue("Ana");
        fila.Enqueue("João");

        Console.WriteLine(fila.Dequeue()); // Mateus
        Console.WriteLine(fila.Peek());    // Ana
        Console.WriteLine(fila.Count);     // 2
    }
}
\`\`\`

---

## 💡 3. Aplicações Reais

| Estrutura | Exemplo Real | Descrição |
|------------|---------------|------------|
| **Stack** | Função “Desfazer” (Ctrl+Z) | Cada ação é empilhada e removida ao desfazer |
| **Stack** | Avaliação de expressões | Usada em cálculos matemáticos e compiladores |
| **Queue** | Impressoras | Trabalham com tarefas na ordem de chegada |
| **Queue** | Sistemas de mensagens | Kafka, RabbitMQ, Azure Service Bus |

---

## 🧩 4. Exemplo — Verificação de Parênteses Balanceados

\`\`\`csharp
bool ParentesesBalanceados(string s) {
    Stack<char> pilha = new Stack<char>();
    foreach (char c in s) {
        if (c == '(' || c == '[' || c == '{')
            pilha.Push(c);
        else if (c == ')' || c == ']' || c == '}') {
            if (pilha.Count == 0) return false;
            char topo = pilha.Pop();
            if ((c == ')' && topo != '(') ||
                (c == ']' && topo != '[') ||
                (c == '}' && topo != '{'))
                return false;
        }
    }
    return pilha.Count == 0;
}
\`\`\`

**Entrada:** \`"{[()]}"\`  
**Saída:** \`true\`

---

## ⚙️ 5. Exemplo — Simulação de Atendimento com Fila

\`\`\`csharp
using System;
using System.Collections.Generic;

class Program {
    static void Main() {
        Queue<string> fila = new Queue<string>();
        fila.Enqueue("Cliente 1");
        fila.Enqueue("Cliente 2");
        fila.Enqueue("Cliente 3");

        while (fila.Count > 0) {
            Console.WriteLine($"Atendendo: {fila.Dequeue()}");
        }
    }
}
\`\`\`

Saída:
\`\`\`
Atendendo: Cliente 1
Atendendo: Cliente 2
Atendendo: Cliente 3
\`\`\`

---

## 🧩 6. Exercícios da Aula 06

**Ex 1.** Implemente uma pilha que armazena inteiros e suporte operações \`Push\`, \`Pop\` e \`Peek\`.  
**Ex 2.** Use uma fila para simular uma linha de atendimento de 5 pessoas.  
**Ex 3.** Verifique se uma palavra é palíndromo usando uma pilha.  
**Ex 4.** Converta uma expressão infixa em pós-fixa usando uma pilha.  
**Ex 5.** Crie uma fila circular de tamanho fixo (FIFO).

---

## 💪 7. Desafio Extra — Avaliação de Expressão Pós-Fixa

Dada uma expressão como \`"3 4 + 2 *"\`, avalie o resultado usando uma pilha.  
Passos:
1. Leia os tokens (números e operadores).  
2. Quando encontrar número → empilhe.  
3. Quando encontrar operador → desempilhe dois, aplique a operação e empilhe o resultado.  
4. No final, reste apenas um valor na pilha.

Entrada: \`"3 4 + 2 *"\`  
Saída: \`14\`

---

## 🧠 8. Feynman — Explicação com Suas Palavras

Responda:
1. Qual a diferença entre pilha e fila?
2. Quando usar LIFO e quando usar FIFO?
3. O que acontece se tentar remover de uma estrutura vazia?
4. Por que pilhas são úteis em funções recursivas?
5. Dê um exemplo real que envolva uma fila.

📝 Escreva suas respostas em até **150 palavras**.
`,Sx=`# 📘 Aula 07 — Estruturas de Dados: Listas Ligadas (Linked Lists)

## 🎯 Objetivos da Aula
- Entender o funcionamento interno de uma **lista ligada**.
- Compreender como os **nós (nodes)** se conectam na memória.
- Implementar operações básicas: inserção, remoção, busca e iteração.
- Diferenciar **listas simples**, **duplamente ligadas** e **circulares**.
- Resolver problemas comuns em entrevistas com Linked Lists.

---

## 🧠 1. Conceito de Lista Ligada

Uma **lista ligada** é uma estrutura onde cada elemento (**nó**) contém:
1. Um **valor**.
2. Uma **referência** (ponteiro) para o próximo nó.

Diferente de arrays, **os elementos não ocupam posições contíguas na memória**, o que permite inserções e remoções rápidas, mas dificulta o acesso direto por índice.

💡 **Analogia Feynman:**  
Pense em uma corrente: cada elo sabe quem é o próximo, mas não quem veio antes.

---

## 🧩 2. Estrutura de um Nó

\`\`\`csharp
class Node {
    public int Valor;
    public Node Proximo;

    public Node(int valor) {
        Valor = valor;
        Proximo = null;
    }
}
\`\`\`

---

## 🏗️ 3. Implementando uma Lista Ligada Simples

\`\`\`csharp
class ListaLigada {
    private Node cabeca;

    public void InserirNoFinal(int valor) {
        Node novo = new Node(valor);
        if (cabeca == null) {
            cabeca = novo;
            return;
        }
        Node atual = cabeca;
        while (atual.Proximo != null) {
            atual = atual.Proximo;
        }
        atual.Proximo = novo;
    }

    public void Imprimir() {
        Node atual = cabeca;
        while (atual != null) {
            Console.Write(atual.Valor + " -> ");
            atual = atual.Proximo;
        }
        Console.WriteLine("null");
    }
}
\`\`\`

**Exemplo de uso:**

\`\`\`csharp
var lista = new ListaLigada();
lista.InserirNoFinal(10);
lista.InserirNoFinal(20);
lista.InserirNoFinal(30);
lista.Imprimir();
\`\`\`

📊 **Saída:**
\`\`\`
10 -> 20 -> 30 -> null
\`\`\`

---

## ⚙️ 4. Operações Básicas

| Operação | Descrição | Complexidade |
|-----------|------------|---------------|
| **Inserir no início** | Novo nó aponta para o antigo início | O(1) |
| **Inserir no final** | Percorre até o último e adiciona | O(n) |
| **Remover nó** | Atualiza ponteiros e libera memória | O(n) |
| **Buscar valor** | Percorre até encontrar | O(n) |

---

### 📍 Inserir no Início

\`\`\`csharp
public void InserirNoInicio(int valor) {
    Node novo = new Node(valor);
    novo.Proximo = cabeca;
    cabeca = novo;
}
\`\`\`

---

### 📍 Remover um Valor

\`\`\`csharp
public void Remover(int valor) {
    if (cabeca == null) return;

    if (cabeca.Valor == valor) {
        cabeca = cabeca.Proximo;
        return;
    }

    Node atual = cabeca;
    while (atual.Proximo != null && atual.Proximo.Valor != valor) {
        atual = atual.Proximo;
    }

    if (atual.Proximo != null)
        atual.Proximo = atual.Proximo.Proximo;
}
\`\`\`

---

## 🔁 5. Lista Duplamente Ligada

Cada nó possui **duas referências**: para o **anterior** e o **próximo**.

\`\`\`csharp
class NodeDuplo {
    public int Valor;
    public NodeDuplo Anterior;
    public NodeDuplo Proximo;
    public NodeDuplo(int valor) { Valor = valor; }
}
\`\`\`

**Vantagens:**
- Pode ser percorrida em ambas as direções.
- Remoção mais fácil.

**Desvantagens:**
- Maior uso de memória.
- Implementação mais complexa.

---

## 🔁 6. Lista Circular

O último nó aponta de volta para o primeiro.  
Ideal para sistemas que precisam de iteração contínua (como playlists ou buffers circulares).

\`\`\`csharp
class ListaCircular {
    private Node cabeca;

    public void Inserir(int valor) {
        Node novo = new Node(valor);
        if (cabeca == null) {
            cabeca = novo;
            novo.Proximo = cabeca;
            return;
        }

        Node atual = cabeca;
        while (atual.Proximo != cabeca)
            atual = atual.Proximo;

        atual.Proximo = novo;
        novo.Proximo = cabeca;
    }
}
\`\`\`

---

## 🧩 7. Exercícios da Aula 07

**Ex 1.** Crie uma lista ligada e adicione elementos no início e no final.  
**Ex 2.** Implemente uma função \`Buscar(int valor)\` que retorne \`true\` se o valor estiver na lista.  
**Ex 3.** Escreva uma função que conte o número de nós.  
**Ex 4.** Inverta uma lista ligada (sem usar listas auxiliares).  
**Ex 5.** Implemente uma lista duplamente ligada com métodos \`Adicionar\`, \`Remover\` e \`Imprimir\`.

---

## 💪 8. Desafio Extra — Detectar Ciclo em uma Lista

Use o **algoritmo de Floyd (Tartaruga e Lebre)** para detectar se há um ciclo em uma lista.

\`\`\`csharp
bool TemCiclo(Node cabeca) {
    Node lento = cabeca;
    Node rapido = cabeca;

    while (rapido != null && rapido.Proximo != null) {
        lento = lento.Proximo;
        rapido = rapido.Proximo.Proximo;

        if (lento == rapido)
            return true;
    }

    return false;
}
\`\`\`

**Entrada:** Lista com ciclo (ex: 1→2→3→4→2)  
**Saída:** \`true\`

---

## 🧠 9. Feynman — Explicação com Suas Palavras

Responda:
1. O que é um nó em uma lista ligada?
2. Qual a diferença entre lista ligada e array?
3. Quando usar uma lista ligada em vez de um vetor?
4. O que é uma lista circular?
5. Como o algoritmo da tartaruga e lebre detecta ciclos?

📝 Escreva suas respostas em até **150 palavras**.
`,Cx=`# 📘 Aula 08 — Árvores Binárias e Busca Binária (Binary Trees & BSTs)

## 🎯 Objetivos da Aula
- Entender o conceito de **árvores binárias** e **árvores de busca binária (BST)**.
- Criar e manipular nós de árvores em C#.
- Implementar operações básicas: inserção, busca, percursos e remoção.
- Explorar percursos clássicos: **pré-ordem**, **em-ordem** e **pós-ordem**.
- Resolver problemas clássicos de entrevistas usando árvores binárias.

---

## 🌳 1. O Que é uma Árvore Binária?

Uma **árvore binária** é uma estrutura hierárquica composta por **nós**:
- Cada nó tem **até dois filhos**: esquerdo e direito.
- O nó mais alto é chamado de **raiz**.
- Nós sem filhos são chamados de **folhas**.

💡 **Analogia Feynman:**  
Pense em uma árvore genealógica: cada pessoa (nó) tem dois filhos possíveis, conectados hierarquicamente.

---

## 🧩 2. Estrutura Básica de um Nó

\`\`\`csharp
class Node {
    public int Valor;
    public Node Esquerda;
    public Node Direita;

    public Node(int valor) {
        Valor = valor;
        Esquerda = null;
        Direita = null;
    }
}
\`\`\`

---

## 🌲 3. Árvore de Busca Binária (BST)

A **BST (Binary Search Tree)** é uma árvore binária com a seguinte propriedade:
- Todos os valores à **esquerda** de um nó são **menores** que ele.
- Todos os valores à **direita** são **maiores**.

Isso permite **buscas e inserções eficientes**, geralmente em **O(log n)**.

---

### 📍 Exemplo — Inserção em uma BST

\`\`\`csharp
class BST {
    public Node Raiz;

    public void Inserir(int valor) {
        Raiz = InserirRecursivo(Raiz, valor);
    }

    private Node InserirRecursivo(Node raiz, int valor) {
        if (raiz == null) return new Node(valor);

        if (valor < raiz.Valor)
            raiz.Esquerda = InserirRecursivo(raiz.Esquerda, valor);
        else if (valor > raiz.Valor)
            raiz.Direita = InserirRecursivo(raiz.Direita, valor);

        return raiz;
    }
}
\`\`\`

**Exemplo de uso:**

\`\`\`csharp
var bst = new BST();
bst.Inserir(50);
bst.Inserir(30);
bst.Inserir(70);
bst.Inserir(20);
bst.Inserir(40);
bst.Inserir(60);
bst.Inserir(80);
\`\`\`

---

## 🔎 4. Busca em uma BST

\`\`\`csharp
bool Buscar(Node raiz, int valor) {
    if (raiz == null) return false;
    if (raiz.Valor == valor) return true;
    if (valor < raiz.Valor) return Buscar(raiz.Esquerda, valor);
    else return Buscar(raiz.Direita, valor);
}
\`\`\`

**Entrada:** valor = 40 → **Saída:** \`true\`  
**Complexidade:** O(log n)

---

## 🔁 5. Percursos (Traversals)

### 1️⃣ Pré-Ordem (Root → Left → Right)

\`\`\`csharp
void PreOrdem(Node raiz) {
    if (raiz == null) return;
    Console.Write(raiz.Valor + " ");
    PreOrdem(raiz.Esquerda);
    PreOrdem(raiz.Direita);
}
\`\`\`

### 2️⃣ Em-Ordem (Left → Root → Right)

\`\`\`csharp
void EmOrdem(Node raiz) {
    if (raiz == null) return;
    EmOrdem(raiz.Esquerda);
    Console.Write(raiz.Valor + " ");
    EmOrdem(raiz.Direita);
}
\`\`\`

### 3️⃣ Pós-Ordem (Left → Right → Root)

\`\`\`csharp
void PosOrdem(Node raiz) {
    if (raiz == null) return;
    PosOrdem(raiz.Esquerda);
    PosOrdem(raiz.Direita);
    Console.Write(raiz.Valor + " ");
}
\`\`\`

---

## 🌿 6. Menor e Maior Elemento

\`\`\`csharp
int Minimo(Node raiz) {
    while (raiz.Esquerda != null)
        raiz = raiz.Esquerda;
    return raiz.Valor;
}

int Maximo(Node raiz) {
    while (raiz.Direita != null)
        raiz = raiz.Direita;
    return raiz.Valor;
}
\`\`\`

**Entrada:** \`[50, 30, 70, 20, 40, 60, 80]\`  
**Saída:** \`Min=20, Max=80\`

---

## ❌ 7. Remover um Elemento

\`\`\`csharp
Node Remover(Node raiz, int valor) {
    if (raiz == null) return raiz;

    if (valor < raiz.Valor)
        raiz.Esquerda = Remover(raiz.Esquerda, valor);
    else if (valor > raiz.Valor)
        raiz.Direita = Remover(raiz.Direita, valor);
    else {
        // Caso 1: sem filhos
        if (raiz.Esquerda == null) return raiz.Direita;
        else if (raiz.Direita == null) return raiz.Esquerda;

        // Caso 2: dois filhos
        raiz.Valor = Minimo(raiz.Direita);
        raiz.Direita = Remover(raiz.Direita, raiz.Valor);
    }
    return raiz;
}
\`\`\`

---

## 🧩 8. Exercícios da Aula 08

**Ex 1.** Implemente uma árvore binária simples com inserção e percurso em ordem.  
**Ex 2.** Adicione uma função que conte o número total de nós.  
**Ex 3.** Crie um método que calcule a **altura da árvore**.  
**Ex 4.** Implemente uma função para retornar o **mínimo e máximo** da BST.  
**Ex 5.** Faça uma função que retorne \`true\` se a árvore for uma **BST válida**.

---

## 💪 9. Desafio Extra — Caminho da Raiz até a Folha com Soma Alvo

Dado um valor alvo, determine se há um caminho da **raiz até uma folha** cuja soma dos valores dos nós seja igual ao alvo.

\`\`\`csharp
bool TemCaminhoComSoma(Node raiz, int soma) {
    if (raiz == null) return false;
    if (raiz.Esquerda == null && raiz.Direita == null && raiz.Valor == soma)
        return true;
    return TemCaminhoComSoma(raiz.Esquerda, soma - raiz.Valor) ||
           TemCaminhoComSoma(raiz.Direita, soma - raiz.Valor);
}
\`\`\`

**Entrada:** soma = 100, árvore \`[50,30,20,40,70,60,80]\`  
**Saída:** \`true\` (50 + 30 + 20 = 100)

---

## 🧠 10. Feynman — Explicação com Suas Palavras

Responda:
1. Qual a principal diferença entre árvore binária e BST?  
2. Por que o percurso em ordem imprime os valores ordenados em uma BST?  
3. O que acontece ao remover um nó com dois filhos?  
4. Como a busca binária reduz o número de comparações?  
5. Cite um exemplo real de estrutura de árvore.

📝 Escreva suas respostas em até **150 palavras**.
`,Ex=`# 📘 Aula 09 — Algoritmos de Ordenação e Busca (Sorting & Searching)

## 🎯 Objetivos da Aula
- Entender os principais algoritmos de **ordenação (sorting)** e **busca (searching)**.
- Compreender suas **complexidades de tempo e espaço**.
- Saber quando escolher cada tipo de algoritmo.
- Implementar soluções eficientes em C#.
- Aplicar técnicas clássicas em cenários reais de entrevistas.

---

## 🧠 1. Introdução

A ordenação e a busca são pilares da ciência da computação.  
Quase todo problema de dados envolve **organizar e localizar informações**.

💡 **Analogia Feynman:**  
Imagine uma pilha de cartas embaralhadas.  
Você pode:
1. **Ordená-las** (por número/cor) → *Sorting*  
2. **Procurar uma específica** (como o Ás de Copas) → *Searching*

---

## ⏱️ 2. Complexidade dos Algoritmos

| Algoritmo | Melhor Caso | Médio | Pior | Tipo |
|------------|--------------|--------|-------|------|
| **Bubble Sort** | O(n) | O(n²) | O(n²) | Comparativo |
| **Insertion Sort** | O(n) | O(n²) | O(n²) | Comparativo |
| **Merge Sort** | O(n log n) | O(n log n) | O(n log n) | Divisão e Conquista |
| **Quick Sort** | O(n log n) | O(n log n) | O(n²) | Divisão e Conquista |
| **Binary Search** | O(1) | O(log n) | O(log n) | Busca binária |

---

## 🧩 3. Bubble Sort — O mais simples

💡 **Ideia:** comparar pares adjacentes e trocar se estiverem fora de ordem.

\`\`\`csharp
void BubbleSort(int[] arr) {
    for (int i = 0; i < arr.Length - 1; i++) {
        for (int j = 0; j < arr.Length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
\`\`\`

**Entrada:** \`[5, 3, 8, 4, 2]\`  
**Saída:** \`[2, 3, 4, 5, 8]\`  

📊 **Complexidade:** O(n²)

---

## 🧩 4. Insertion Sort — Ordenação por inserção

💡 **Ideia:** percorre o array, “inserindo” cada elemento na posição correta do lado esquerdo já ordenado.

\`\`\`csharp
void InsertionSort(int[] arr) {
    for (int i = 1; i < arr.Length; i++) {
        int chave = arr[i];
        int j = i - 1;

        while (j >= 0 && arr[j] > chave) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = chave;
    }
}
\`\`\`

**Entrada:** \`[5, 3, 4, 1, 2]\`  
**Saída:** \`[1, 2, 3, 4, 5]\`

📊 **Complexidade:** O(n²), mas eficiente para listas pequenas.

---

## ⚙️ 5. Merge Sort — Dividir e Conquistar

💡 **Ideia:** divide o array em metades, ordena cada metade e as mescla (*merge*).

\`\`\`csharp
void MergeSort(int[] arr, int esquerda, int direita) {
    if (esquerda < direita) {
        int meio = (esquerda + direita) / 2;
        MergeSort(arr, esquerda, meio);
        MergeSort(arr, meio + 1, direita);
        Merge(arr, esquerda, meio, direita);
    }
}

void Merge(int[] arr, int esquerda, int meio, int direita) {
    int[] temp = new int[direita - esquerda + 1];
    int i = esquerda, j = meio + 1, k = 0;

    while (i <= meio && j <= direita)
        temp[k++] = (arr[i] <= arr[j]) ? arr[i++] : arr[j++];

    while (i <= meio) temp[k++] = arr[i++];
    while (j <= direita) temp[k++] = arr[j++];

    for (k = 0; k < temp.Length; k++)
        arr[esquerda + k] = temp[k];
}
\`\`\`

**Entrada:** \`[38, 27, 43, 3, 9, 82, 10]\`  
**Saída:** \`[3, 9, 10, 27, 38, 43, 82]\`

📊 **Complexidade:** O(n log n)  
💾 **Espaço extra:** O(n)

---

## ⚡ 6. Quick Sort — O mais usado

💡 **Ideia:** escolhe um *pivô*, separa os menores à esquerda e os maiores à direita, e repete o processo.

\`\`\`csharp
void QuickSort(int[] arr, int inicio, int fim) {
    if (inicio < fim) {
        int pivo = Particionar(arr, inicio, fim);
        QuickSort(arr, inicio, pivo - 1);
        QuickSort(arr, pivo + 1, fim);
    }
}

int Particionar(int[] arr, int inicio, int fim) {
    int pivo = arr[fim];
    int i = inicio - 1;

    for (int j = inicio; j < fim; j++) {
        if (arr[j] < pivo) {
            i++;
            (arr[i], arr[j]) = (arr[j], arr[i]);
        }
    }

    (arr[i + 1], arr[fim]) = (arr[fim], arr[i + 1]);
    return i + 1;
}
\`\`\`

**Entrada:** \`[10, 7, 8, 9, 1, 5]\`  
**Saída:** \`[1, 5, 7, 8, 9, 10]\`

📊 **Complexidade Média:** O(n log n)  
⚠️ **Pior caso (array ordenado):** O(n²)

---

## 🔍 7. Busca Linear

💡 **Ideia:** percorre todos os elementos até encontrar o valor desejado.

\`\`\`csharp
int BuscaLinear(int[] arr, int alvo) {
    for (int i = 0; i < arr.Length; i++)
        if (arr[i] == alvo)
            return i;
    return -1;
}
\`\`\`

**Complexidade:** O(n)

---

## ⚡ 8. Busca Binária

💡 **Ideia:** busca eficiente **apenas em arrays ordenados**.  
Divide o espaço de busca ao meio a cada iteração.

\`\`\`csharp
int BuscaBinaria(int[] arr, int alvo) {
    int esquerda = 0, direita = arr.Length - 1;
    while (esquerda <= direita) {
        int meio = (esquerda + direita) / 2;
        if (arr[meio] == alvo) return meio;
        if (arr[meio] < alvo) esquerda = meio + 1;
        else direita = meio - 1;
    }
    return -1;
}
\`\`\`

**Entrada:** \`[1, 3, 5, 7, 9]\`, alvo = \`7\`  
**Saída:** \`índice 3\`

📊 **Complexidade:** O(log n)

---

## 🧩 9. Exercícios da Aula 09

**Ex 1.** Implemente o Bubble Sort e conte o número de trocas realizadas.  
**Ex 2.** Use o Insertion Sort para ordenar uma lista de strings em ordem alfabética.  
**Ex 3.** Aplique o Merge Sort em uma lista de 20 números aleatórios.  
**Ex 4.** Implemente a busca binária e teste com 10 valores diferentes.  
**Ex 5.** Compare o tempo de execução do Quick Sort e do Merge Sort com 1.000 elementos.

---

## 💪 10. Desafio Extra — Encontre o K-ésimo Maior Elemento

Implemente uma função que encontre o **k-ésimo maior elemento** de um array **sem ordenar totalmente** (usando Quickselect).

\`\`\`csharp
int QuickSelect(int[] arr, int esquerda, int direita, int k) {
    if (esquerda == direita) return arr[esquerda];

    int pivoIndex = Particionar(arr, esquerda, direita);
    int posicao = pivoIndex - esquerda + 1;

    if (posicao == k) return arr[pivoIndex];
    else if (k < posicao) return QuickSelect(arr, esquerda, pivoIndex - 1, k);
    else return QuickSelect(arr, pivoIndex + 1, direita, k - posicao);
}
\`\`\`

**Entrada:** \`[3,2,1,5,6,4]\`, k = 2  
**Saída:** \`5\`

📊 **Complexidade Média:** O(n)

---

## 🧠 11. Feynman — Explicação com Suas Palavras

Responda:
1. Qual algoritmo é mais rápido em geral: Merge ou Quick Sort?
2. Por que a busca binária é tão eficiente?
3. Quando usar Bubble Sort mesmo sendo lento?
4. Como a recursão é usada no Merge e Quick Sort?
5. O que acontece se aplicar busca binária em um array não ordenado?

📝 Escreva suas respostas em até **150 palavras**.
`,bx=`# 📘 Aula 10 — Programação Dinâmica e Entrevista Técnica (Dynamic Programming & Mock Interview)

## 🎯 Objetivos da Aula
- Compreender o conceito e a motivação da **Programação Dinâmica (DP)**.
- Aprender a resolver problemas complexos por meio de **subproblemas** e **memorização**.
- Implementar algoritmos clássicos de DP em C#.
- Desenvolver raciocínio técnico para entrevistas.
- Simular uma entrevista técnica real com problemas Microsoft.

---

## 🧠 1. O Que é Programação Dinâmica?

A **Programação Dinâmica (DP)** é uma técnica usada para resolver problemas **recorrentes** e **sobrepostos**, armazenando resultados de subproblemas para evitar recomputação.

💡 **Analogia Feynman:**  
Imagine escalar uma escada de 100 degraus.  
Você pode subir 1 ou 2 degraus por vez.  
Ao invés de recalcular todos os caminhos possíveis a cada passo, você **lembra** quantas formas havia de chegar nos degraus anteriores.

---

## ⚙️ 2. Tipos de DP

| Tipo | Descrição | Exemplo |
|------|------------|----------|
| **Top-Down (Memorização)** | Usa recursão e guarda resultados já calculados. | Fibonacci recursivo com cache |
| **Bottom-Up (Tabulação)** | Usa laços para preencher uma tabela iterativamente. | Caminhos em grade (matriz) |

---

## 🧩 3. Exemplo Clássico: Fibonacci

### 🧮 Solução Recursiva (ineficiente)

\`\`\`csharp
int Fib(int n) {
    if (n <= 1) return n;
    return Fib(n - 1) + Fib(n - 2);
}
\`\`\`

📊 **Complexidade:** O(2ⁿ)

---

### ⚡ Solução com DP (Top-Down)

\`\`\`csharp
Dictionary<int, int> memo = new Dictionary<int, int>();

int FibDP(int n) {
    if (n <= 1) return n;
    if (memo.ContainsKey(n)) return memo[n];

    memo[n] = FibDP(n - 1) + FibDP(n - 2);
    return memo[n];
}
\`\`\`

📊 **Complexidade:** O(n)

---

### 🧮 Solução com DP (Bottom-Up)

\`\`\`csharp
int FibTab(int n) {
    if (n <= 1) return n;
    int[] dp = new int[n + 1];
    dp[0] = 0; dp[1] = 1;

    for (int i = 2; i <= n; i++)
        dp[i] = dp[i - 1] + dp[i - 2];

    return dp[n];
}
\`\`\`

📊 **Complexidade:** O(n)  
💾 **Espaço:** O(n)

---

## 🎒 4. Problema da Mochila (Knapsack Problem)

**Descrição:** Dado um conjunto de itens com peso e valor, determine o valor máximo que pode ser carregado em uma mochila com capacidade limitada.

\`\`\`csharp
int Mochila(int[] peso, int[] valor, int capacidade, int n) {
    if (n == 0 || capacidade == 0) return 0;

    if (peso[n - 1] > capacidade)
        return Mochila(peso, valor, capacidade, n - 1);

    else
        return Math.Max(
            valor[n - 1] + Mochila(peso, valor, capacidade - peso[n - 1], n - 1),
            Mochila(peso, valor, capacidade, n - 1)
        );
}
\`\`\`

📊 **Complexidade:** O(2ⁿ) (recursiva) — pode ser otimizada com DP.

---

### ⚙️ Solução DP (Bottom-Up)

\`\`\`csharp
int MochilaDP(int[] peso, int[] valor, int capacidade) {
    int n = peso.Length;
    int[,] dp = new int[n + 1, capacidade + 1];

    for (int i = 0; i <= n; i++) {
        for (int w = 0; w <= capacidade; w++) {
            if (i == 0 || w == 0)
                dp[i, w] = 0;
            else if (peso[i - 1] <= w)
                dp[i, w] = Math.Max(valor[i - 1] + dp[i - 1, w - peso[i - 1]], dp[i - 1, w]);
            else
                dp[i, w] = dp[i - 1, w];
        }
    }
    return dp[n, capacidade];
}
\`\`\`

**Entrada:** pesos \`[1,3,4,5]\`, valores \`[1,4,5,7]\`, capacidade \`7\`  
**Saída:** \`9\`

---

## 🧩 5. Subsequência Comum Máxima (LCS)

**Descrição:** Dadas duas strings, encontre o comprimento da maior subsequência comum.

\`\`\`csharp
int LCS(string s1, string s2, int m, int n) {
    if (m == 0 || n == 0) return 0;

    if (s1[m - 1] == s2[n - 1])
        return 1 + LCS(s1, s2, m - 1, n - 1);
    else
        return Math.Max(LCS(s1, s2, m - 1, n), LCS(s1, s2, m, n - 1));
}
\`\`\`

### 🔁 Solução DP (Bottom-Up)

\`\`\`csharp
int LCS_DP(string s1, string s2) {
    int m = s1.Length, n = s2.Length;
    int[,] dp = new int[m + 1, n + 1];

    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (s1[i - 1] == s2[j - 1])
                dp[i, j] = 1 + dp[i - 1, j - 1];
            else
                dp[i, j] = Math.Max(dp[i - 1, j], dp[i, j - 1]);
        }
    }
    return dp[m, n];
}
\`\`\`

**Entrada:** \`"ABCBDAB"\` e \`"BDCABA"\`  
**Saída:** \`4\` (BCBA)

---

## 🧩 6. Exercícios da Aula 10

**Ex 1.** Implemente Fibonacci usando DP (Top-Down e Bottom-Up).  
**Ex 2.** Resolva o problema da mochila com 5 itens e capacidade 10.  
**Ex 3.** Crie uma função que conte o número de formas de subir uma escada de \`n\` degraus (1 ou 2 por vez).  
**Ex 4.** Implemente o LCS para duas strings e exiba a subsequência resultante.  
**Ex 5.** Escreva uma função DP para calcular o mínimo de moedas necessárias para atingir um valor alvo.

---

## 💪 7. Desafio Final — Mock Interview Microsoft

**Problema:**  
Dado um array de inteiros, encontre o **subarray contíguo** com a **maior soma possível**.

💡 **Dica:** Esse é o **Algoritmo de Kadane**, clássico em entrevistas.

\`\`\`csharp
int MaxSubArray(int[] nums) {
    int maxAtual = nums[0], maxTotal = nums[0];

    for (int i = 1; i < nums.Length; i++) {
        maxAtual = Math.Max(nums[i], maxAtual + nums[i]);
        maxTotal = Math.Max(maxTotal, maxAtual);
    }

    return maxTotal;
}
\`\`\`

**Entrada:** \`[-2,1,-3,4,-1,2,1,-5,4]\`  
**Saída:** \`6\` (subarray \`[4,-1,2,1]\`)

📊 **Complexidade:** O(n)

---

## 🧠 8. Feynman — Explicação com Suas Palavras

Responda:
1. O que é Programação Dinâmica e quando aplicá-la?
2. Qual a diferença entre memorização e tabulação?
3. Por que DP é mais eficiente que recursão simples?
4. Como o problema da mochila se aplica a decisões reais?
5. Como você explicaria o algoritmo de Kadane a um colega?

📝 Escreva suas respostas em até **200 palavras**.

---

## 🧭 Conclusão

Parabéns! 🎉  
Você completou o ciclo de preparação intensiva para o teste técnico da Microsoft M365.

A partir daqui:
- Pratique os problemas novamente no **HackerRank**.  
- Foque em **limpeza de código**, **nomes claros** e **explicações curtas, mas completas**.  
- Lembre-se: o entrevistador avalia **como você pensa**, não só se acerta o código.

> ✨ “First, solve the problem. Then, write the code.” – John Johnson
`,Px=`# 📘 Aula 11 — Estruturas Avançadas e Análise de Complexidade

## 🎯 Objetivos da Aula
- Compreender e aplicar estruturas de dados avançadas: **HashSet**, **Dictionary**, **Heap** (fila de prioridade).
- Entender o conceito de **tabela de dispersão (hash table)** e funções hash.
- Representar e manipular **grafos** (listas de adjacência e matriz de adjacência).
- Analisar **complexidade de tempo e espaço** (Big O).
- Resolver exercícios com foco em otimização e análise.

---

## 🧠 1. Revisão de Complexidade (Big O)

| Operação | Exemplo | Complexidade |
|-----------|----------|---------------|
| Acesso direto | Array[i] | O(1) |
| Busca linear | foreach | O(n) |
| Busca binária | Array ordenado | O(log n) |
| Inserção/remover em HashSet | O(1) médio |
| Ordenação (QuickSort, MergeSort) | O(n log n) |
| DFS/BFS em grafo | O(V + E) |

📘 **Lembre:**  
- O(1): tempo constante.  
- O(n): tempo proporcional ao tamanho dos dados.  
- O(n²): tempo quadrático (crescimento rápido).

---

## ⚙️ 2. HashSet e Dictionary

### 🧩 HashSet
Uma estrutura que **armazenar valores únicos** e permite buscas rápidas.

\`\`\`csharp
var set = new HashSet<int>();
set.Add(10);
set.Add(20);
set.Add(10); // ignorado

Console.WriteLine(set.Contains(20)); // true
\`\`\`

**Complexidade média:**  
- Inserção: O(1)  
- Busca: O(1)

---

### 📒 Dictionary<TKey, TValue>
Permite armazenar pares **chave → valor**.

\`\`\`csharp
var dict = new Dictionary<string, int>();
dict["Alice"] = 25;
dict["Bob"] = 30;

foreach (var kv in dict)
    Console.WriteLine($"{kv.Key} tem {kv.Value} anos");
\`\`\`

🧮 **Função hash:**  
O Dictionary calcula um *hash code* da chave para armazenar rapidamente o valor.

---

## 🏗️ 3. Heap (Priority Queue)

### 📦 O que é
Uma estrutura que mantém sempre o **menor (ou maior) elemento no topo**.

\`\`\`csharp
var pq = new PriorityQueue<string, int>();
pq.Enqueue("Tarefa baixa", 3);
pq.Enqueue("Tarefa alta", 1);
pq.Enqueue("Tarefa média", 2);

while (pq.Count > 0)
    Console.WriteLine(pq.Dequeue()); // ordem: alta, média, baixa
\`\`\`

📊 **Complexidade:**  
- Inserção: O(log n)  
- Remoção (Dequeue): O(log n)

---

## 🕸️ 4. Grafos

### 🌐 Representação com Lista de Adjacência
\`\`\`csharp
var grafo = new Dictionary<int, List<int>> {
    [0] = new List<int> {1, 2},
    [1] = new List<int> {2},
    [2] = new List<int> {0, 3},
    [3] = new List<int> {3}
};
\`\`\`

### 🔍 Busca em Largura (BFS)
\`\`\`csharp
void BFS(Dictionary<int, List<int>> g, int inicio) {
    var visitado = new HashSet<int>();
    var fila = new Queue<int>();
    fila.Enqueue(inicio);

    while (fila.Count > 0) {
        int v = fila.Dequeue();
        if (!visitado.Add(v)) continue;
        Console.WriteLine($"Visitando: {v}");
        foreach (var viz in g[v]) fila.Enqueue(viz);
    }
}
\`\`\`

### 🧭 Busca em Profundidade (DFS)
\`\`\`csharp
void DFS(Dictionary<int, List<int>> g, int v, HashSet<int> vis) {
    if (vis.Contains(v)) return;
    vis.Add(v);
    Console.WriteLine($"Visitando: {v}");
    foreach (var viz in g[v]) DFS(g, viz, vis);
}
\`\`\`

---

## 🧩 5. Análise de Complexidade na Prática

### Exemplo 1 — Busca Linear
\`\`\`csharp
bool Encontrar(int[] arr, int alvo) {
    foreach (var x in arr)
        if (x == alvo) return true;
    return false;
}
\`\`\`
⏱️ O(n)

### Exemplo 2 — Busca Binária
\`\`\`csharp
bool BuscaBinaria(int[] arr, int alvo) {
    int ini = 0, fim = arr.Length - 1;
    while (ini <= fim) {
        int mid = (ini + fim) / 2;
        if (arr[mid] == alvo) return true;
        if (arr[mid] < alvo) ini = mid + 1;
        else fim = mid - 1;
    }
    return false;
}
\`\`\`
⏱️ O(log n)

---

## 🧩 6. Exercícios da Aula 11

**Ex 1.** Crie um \`HashSet<string>\` para armazenar nomes únicos de alunos e mostre todos ordenados alfabeticamente.  
**Ex 2.** Use um \`Dictionary<string, int>\` para contar quantas vezes cada palavra aparece em uma frase.  
**Ex 3.** Implemente uma fila de prioridade de tarefas com nomes e prioridades.  
**Ex 4.** Represente um grafo simples e implemente DFS e BFS.  
**Ex 5.** Compare empiricamente o tempo de busca em uma \`List<int>\` e em um \`HashSet<int>\` para 1 milhão de elementos.

---

## 🧠 7. Feynman — Explicação com Suas Palavras

1. O que é uma função hash e como ela afeta a performance de um \`Dictionary\`?  
2. Qual a diferença entre HashSet e List?  
3. Quando é vantajoso usar uma fila de prioridade?  
4. Como a BFS e a DFS exploram os grafos de maneiras diferentes?  
5. Qual a diferença prática entre O(log n) e O(n)?  

📝 Escreva suas respostas e explique como se estivesse ensinando a um colega.

---

## 🧭 Conclusão

Você agora domina as estruturas fundamentais usadas em sistemas reais e entrevistas técnicas.  
Esses conceitos são essenciais para lidar com performance, otimização e arquitetura eficiente.

> ⚡ **Dica Microsoft:** Dominar estruturas de dados é dominar o tempo. O código mais rápido é aquele que entende o problema.
`,_x=`# 🎯 Aula 12 — Simulação Completa de Entrevista Técnica (Mock Interview Microsoft)

## 🧭 Objetivos da Aula
- Simular uma entrevista técnica real para vaga de **Software Engineer M365 (Microsoft)**.
- Consolidar conceitos de **algoritmos, estruturas de dados e design de sistemas**.
- Praticar **raciocínio, comunicação e explicação do código** durante o processo.
- Aplicar o **método Feynman** para revisar e fixar o conhecimento.

---

## 🧠 1. Estrutura de uma Entrevista Técnica

As entrevistas técnicas da Microsoft seguem um formato padronizado:

| Etapa | Descrição |
|-------|------------|
| **Introdução (5 min)** | O entrevistador se apresenta e pede para você se apresentar brevemente. |
| **Problema técnico (30-40 min)** | Um ou dois desafios de codificação são apresentados. |
| **Discussão (10-15 min)** | O entrevistador analisa sua abordagem, complexidade e clareza. |
| **Perguntas finais (5 min)** | Você pode fazer perguntas sobre a equipe e o projeto. |

🗣️ **O que eles avaliam:**
1. Capacidade de **raciocínio lógico** e **estruturar o problema**.  
2. Clareza na **comunicação e justificativa das decisões**.  
3. Código limpo, modular e eficiente.  
4. Entendimento de **trade-offs de performance**.

---

## ⚙️ 2. Estratégia de Resolução (Método Microsoft)

1. **Ouça e reformule o problema** com suas palavras.  
2. **Defina entradas e saídas** claramente.  
3. **Proponha exemplos e casos de teste.**  
4. **Explique a abordagem** antes de começar a codar.  
5. **Implemente passo a passo**, validando resultados.  
6. **Analise a complexidade** (tempo e espaço).  
7. **Refatore se houver tempo.**

---

## 💡 3. Problemas Fáceis (Aquecimento)

### Ex 1 — Inverter uma string
Implemente uma função que inverte uma string sem usar métodos prontos.

\`\`\`csharp
string Inverter(string s) {
    char[] arr = s.ToCharArray();
    Array.Reverse(arr);
    return new string(arr);
}
\`\`\`

**Perguntas possíveis do entrevistador:**
- Como ficaria se a string fosse muito grande?
- O que muda se você quiser inverter as palavras e não os caracteres?

---

### Ex 2 — Soma de pares com alvo
Dado um array de inteiros e um valor alvo, retorne os pares cuja soma seja igual ao alvo.

\`\`\`csharp
int[] nums = {2, 7, 11, 15};
int alvo = 9;
// resultado: [2, 7]
\`\`\`

**Dica:** Use um HashSet para obter O(n) de tempo.

---

## ⚔️ 4. Problemas Intermediários

### Ex 3 — Substring mais longa sem repetição
\`\`\`csharp
int LongestSubstring(string s) {
    var mapa = new Dictionary<char, int>();
    int inicio = 0, max = 0;
    for (int i = 0; i < s.Length; i++) {
        if (mapa.ContainsKey(s[i]) && mapa[s[i]] >= inicio)
            inicio = mapa[s[i]] + 1;
        mapa[s[i]] = i;
        max = Math.Max(max, i - inicio + 1);
    }
    return max;
}
\`\`\`

📊 Complexidade: O(n)

**Perguntas:**
- Qual é o trade-off entre usar um dicionário e um array fixo de 128 posições?  
- Como adaptar para Unicode completo?

---

### Ex 4 — Mesclar intervalos
Dada uma lista de intervalos \`[início, fim]\`, una os sobrepostos.

\`\`\`csharp
List<(int, int)> Mesclar(List<(int, int)> intervals) {
    intervals.Sort((a, b) => a.Item1.CompareTo(b.Item1));
    var res = new List<(int, int)> { intervals[0] };
    foreach (var cur in intervals.Skip(1)) {
        var last = res[^1];
        if (cur.Item1 <= last.Item2)
            res[^1] = (last.Item1, Math.Max(last.Item2, cur.Item2));
        else
            res.Add(cur);
    }
    return res;
}
\`\`\`

**Pergunta:** Como otimizar se os intervalos já estiverem ordenados?

---

## 🧩 5. Problemas Avançados (Microsoft-level)

### Ex 5 — Caminho mínimo em um grafo (BFS)
\`\`\`csharp
int BFSMinSteps(Dictionary<int, List<int>> g, int inicio, int destino) {
    var fila = new Queue<(int, int)>(); // nó, passos
    var visitado = new HashSet<int>();
    fila.Enqueue((inicio, 0));

    while (fila.Count > 0) {
        var (v, dist) = fila.Dequeue();
        if (v == destino) return dist;
        if (!visitado.Add(v)) continue;
        foreach (var viz in g[v]) fila.Enqueue((viz, dist + 1));
    }
    return -1;
}
\`\`\`

**Discussão:**  
- Qual é a complexidade de tempo e espaço?  
- Quando seria melhor usar Dijkstra?

---

### Ex 6 — Subconjunto de soma alvo (Programação Dinâmica)
\`\`\`csharp
bool SubsetSum(int[] nums, int alvo) {
    bool[,] dp = new bool[nums.Length + 1, alvo + 1];
    for (int i = 0; i <= nums.Length; i++) dp[i, 0] = true;

    for (int i = 1; i <= nums.Length; i++) {
        for (int j = 1; j <= alvo; j++) {
            dp[i, j] = dp[i - 1, j];
            if (j >= nums[i - 1])
                dp[i, j] = dp[i, j] || dp[i - 1, j - nums[i - 1]];
        }
    }
    return dp[nums.Length, alvo];
}
\`\`\`

**Pergunta:** Como otimizar o espaço da matriz DP?

---

## 🧩 6. Simulação de Entrevista Completa (Mock Microsoft)

**Situação:** Você é convidado a resolver o seguinte problema durante 40 minutos.

> **Problema:** Dado um conjunto de palavras, encontre todas as combinações que formam anagramas.

**Exemplo:**
\`\`\`text
Entrada: ["bat", "tab", "tap", "pat", "cat"]
Saída: [["bat", "tab"], ["tap", "pat"], ["cat"]]
\`\`\`

**Raciocínio:**
1. Duas palavras são anagramas se tiverem as mesmas letras ordenadas.  
2. Podemos agrupar palavras por sua forma ordenada (\`key\`).  

**Implementação:**
\`\`\`csharp
List<List<string>> AgruparAnagramas(string[] palavras) {
    var grupos = new Dictionary<string, List<string>>();
    foreach (var p in palavras) {
        var key = new string(p.OrderBy(c => c).ToArray());
        if (!grupos.ContainsKey(key)) grupos[key] = new List<string>();
        grupos[key].Add(p);
    }
    return grupos.Values.ToList();
}
\`\`\`

**Discussão:**
- Complexidade de tempo: O(n * m log m)  
  (n = número de palavras, m = tamanho médio de cada palavra)

---

## 🧠 7. Feynman — Explique o que Você Aprendeu

1. Como você definiria a abordagem para um problema novo?  
2. Quais são as etapas principais de raciocínio antes de codar?  
3. Como explicar a complexidade de um algoritmo sem parecer decorado?  
4. Como se manter calmo e analítico sob pressão?  
5. O que faria diferente em uma próxima entrevista?

🧾 Escreva suas respostas, como se estivesse ensinando alguém.

---

## 🧭 Conclusão

🎓 Parabéns! Você completou o programa de preparação para o processo seletivo **Microsoft 365**.  
Você agora possui:  
- Fundamentos sólidos em C# e .NET.  
- Entendimento profundo de algoritmos e estruturas de dados.  
- Experiência simulada em entrevistas técnicas reais.  

> “**Grandes engenheiros não memorizam soluções, entendem problemas.**” — Bill Gates

---

🚀 **Próximo passo:** revise seus códigos, pratique desafios no HackerRank e refine sua comunicação técnica.
`,zx=Object.assign({"../content/lessons/Aula01_M365.md":gx,"../content/lessons/Aula02_M365.md":vx,"../content/lessons/Aula03_M365.md":yx,"../content/lessons/Aula04_M365.md":xx,"../content/lessons/Aula05_M365.md":kx,"../content/lessons/Aula06_M365.md":wx,"../content/lessons/Aula07_M365.md":Sx,"../content/lessons/Aula08_M365.md":Cx,"../content/lessons/Aula09_M365.md":Ex,"../content/lessons/Aula10_M365.md":bx,"../content/lessons/Aula11_M365.md":Px,"../content/lessons/Aula12_M365.md":_x}),Lx={Aula01_M365:{level:"Iniciante",duration:"45 min",topics:["Fundamentos","Variáveis","Fluxo"],summary:"Fundamentos do C#, variáveis, operadores e controle de fluxo com pensamento algorítmico."},Aula02_M365:{level:"Iniciante",duration:"50 min",topics:["Arrays","Listas","Complexidade"],summary:"Diferenças entre arrays e listas, processamento de coleções e análise Big-O."},Aula03_M365:{level:"Iniciante",duration:"45 min",topics:["Strings","Dicionários","Mapeamentos"],summary:"Manipulação de strings, uso de StringBuilder e contagem com dicionários."},Aula04_M365:{level:"Intermediário",duration:"50 min",topics:["Two Pointers","Sliding Window","Substrings"],summary:"Resolução de problemas com dois ponteiros e janelas deslizantes para subarrays eficientes."},Aula05_M365:{level:"Intermediário",duration:"45 min",topics:["Pilhas","Filas","Expressões"],summary:"Aplicações de pilhas e filas em validação de expressões e simulações."},Aula06_M365:{level:"Intermediário",duration:"55 min",topics:["Grafos","DFS","BFS"],summary:"Representação de grafos, busca em profundidade e largura com casos práticos."},Aula07_M365:{level:"Intermediário",duration:"55 min",topics:["Grafos","Topological Sort","Bipartição"],summary:"Ordenação topológica, detecção de ciclos e verificação de bipartição em grafos."},Aula08_M365:{level:"Intermediário",duration:"50 min",topics:["Heaps","Greedy","Prioridades"],summary:"Estruturas de heap e estratégias gananciosas para alocação de recursos."},Aula09_M365:{level:"Avançado",duration:"55 min",topics:["Programação Dinâmica","Subproblemas"],summary:"Introdução à programação dinâmica com memorização e exemplos clássicos."},Aula10_M365:{level:"Avançado",duration:"60 min",topics:["Programação Dinâmica","Tabulação"],summary:"DP em grade, coin change e abordagem bottom-up para otimização."},Aula11_M365:{level:"Intermediário",duration:"50 min",topics:["SQL","Depuração","Tratamento de Erros"],summary:"Consultas SQL, funções de janela e estratégias de debugging em C#."},Aula12_M365:{level:"Avançado",duration:"70 min",topics:["DevOps","Resiliência","Simulado"],summary:"Boas práticas de DevOps, resiliência e simulado final multi-disciplinar."}};function Ox(e){const n=e.match(/^#\s+(.*)$/m);return n?n[1].trim():"Lição sem título"}function Tx(e){const n=e.match(/##\s+🎯[^\n]*\n([\s\S]*?)(?:\n-{3,}|^##\s+)/m);return n?n[1].split(`
`).map(t=>t.trim().replace(/^[-*]\s*/,"")).filter(t=>t.length>0):[]}function Ix(e){const n=e.match(/(\d{2})/),t=n?Number.parseInt(n[1],10):0;return{id:e.replace(/\.md$/i,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,""),order:t}}const Ja=Object.entries(zx).map(([e,n])=>{const t=e.split("/").pop()??"lesson",r=t.replace(/\.md$/i,""),{id:i,order:a}=Ix(t),o=Ox(n),l=Tx(n),s=Lx[r]??{level:"Intermediário",duration:"45 min",topics:[]},u=s.summary??l[0]??"Veja o conteúdo completo da lição.";return{id:i,order:a,title:o,level:s.level,duration:s.duration,summary:u,objectives:l,topics:s.topics,content:n.trim()}}).sort((e,n)=>e.order-n.order),Za=[{id:"quiz-aula01",title:"Aula 01 • Fundamentos e Fluxo",description:"Revise tipos, operadores e estruturas de controle em C#.",topic:"Fundamentos",duration:"12 min",questions:[{id:"aula01-q1",question:"Qual palavra-chave define uma constante avaliada em tempo de compilação?",options:[{label:"const",value:"const"},{label:"readonly",value:"readonly"},{label:"static",value:"static"},{label:"var",value:"var"}],answer:"const",explanation:"Use `const` para valores imutáveis conhecidos em tempo de compilação; `readonly` é avaliado em tempo de execução."},{id:"aula01-q2",question:"Qual chamada converte com segurança uma `string` em `int` sem lançar exceção?",options:[{label:"int.Parse(valor)",value:"int.Parse"},{label:"Convert.ToInt32(valor)",value:"Convert"},{label:"int.TryParse(valor, out var numero)",value:"int.TryParse"},{label:"(int)valor",value:"cast"}],answer:"int.TryParse",explanation:"`int.TryParse` devolve `false` em vez de lançar exceção, permitindo fluxo de controle seguro."},{id:"aula01-q3",question:"Qual expressão condicional é mais legível para retornar rótulos com base em faixas numéricas?",options:[{label:"Operador ternário aninhado",value:"ternary"},{label:"`switch` expression com padrões relacionais",value:"switch"},{label:"`if` encadeado",value:"if"},{label:"`goto`",value:"goto"}],answer:"switch",explanation:"O `switch` expression moderno permite padrões como `>=` e `<` produzindo código declarativo e fácil de testar."}]},{id:"quiz-aula02",title:"Aula 02 • Arrays e Listas",description:"Compare coleções lineares e complexidade de operações básicas.",topic:"Coleções",duration:"12 min",questions:[{id:"aula02-q1",question:"Quando uma `List<T>` deve ser preferida a um array?",options:[{label:"Quando o tamanho varia em tempo de execução",value:"dinamico"},{label:"Quando os dados são somente leitura",value:"readonly"},{label:"Quando preciso de acesso indexado O(1)",value:"indexado"},{label:"Quando os dados são em blocos fixos",value:"fixo"}],answer:"dinamico",explanation:"`List<T>` cresce dinamicamente e evita realocações manuais para tamanhos variáveis."},{id:"aula02-q2",question:"Qual é a complexidade amortizada de `List<T>.Add` em .NET?",options:[{label:"O(1)",value:"O(1)"},{label:"O(log n)",value:"O(log n)"},{label:"O(n)",value:"O(n)"},{label:"O(n log n)",value:"O(n log n)"}],answer:"O(1)",explanation:"Inserções são O(1) amortizado; realocações ocasionais distribuem o custo ao longo das inserções."},{id:"aula02-q3",question:"Qual estrutura reduz custo de cópias ao percorrer fatias de um array grande?",options:[{label:"`Span<T>`",value:"span"},{label:"`Queue<T>`",value:"queue"},{label:"`LinkedList<T>`",value:"linked"},{label:"`HashSet<T>`",value:"hashset"}],answer:"span",explanation:"`Span<T>` cria uma janela sobre o array sem alocar novas estruturas, ideal para análises de desempenho."}]},{id:"quiz-aula03",title:"Aula 03 • Strings e Dicionários",description:"Teste manipulação eficiente de texto e contagem baseada em mapas.",topic:"Strings",duration:"12 min",questions:[{id:"aula03-q1",question:"Qual classe reduz alocações ao concatenar em um laço?",options:[{label:"`StringBuilder`",value:"StringBuilder"},{label:"`string.Concat`",value:"Concat"},{label:"Interpolação de string",value:"Interpolacao"},{label:"`string.Join`",value:"Join"}],answer:"StringBuilder",explanation:"`StringBuilder` reutiliza buffers internos e minimiza cópias, ideal para cenários iterativos."},{id:"aula03-q2",question:"Qual abordagem encontra a primeira ocorrência de um caractere que não se repete?",options:[{label:"Varredura única com `Dictionary<char,int>`",value:"dic"},{label:"Ordenar a string e percorrer",value:"sort"},{label:"Converter para `HashSet<char>`",value:"hashset"},{label:"Usar `Regex`",value:"regex"}],answer:"dic",explanation:"Contar frequências em um dicionário e percorrer novamente preserva a ordem original."},{id:"aula03-q3",question:"Qual método normaliza comparações evitando diferenças de cultura?",options:[{label:"`string.Equals` com `StringComparison.OrdinalIgnoreCase`",value:"equals"},{label:"`ToLower()`",value:"tolower"},{label:"`CompareInfo.Compare`",value:"compare"},{label:"`ReferenceEquals`",value:"reference"}],answer:"equals",explanation:"`StringComparison.OrdinalIgnoreCase` garante comportamento consistente independente de cultura."}]},{id:"quiz-aula04",title:"Aula 04 • Two Pointers e Sliding Window",description:"Aplique técnicas de ponteiros duplos em problemas de substring e subarray.",topic:"Two Pointers",duration:"15 min",questions:[{id:"aula04-q1",question:"Quando preferir dois ponteiros em vez de uma busca dupla O(n²)?",options:[{label:"Quando o array está ordenado",value:"ordenado"},{label:"Quando a entrada é aleatória",value:"random"},{label:"Quando há hashing disponível",value:"hashing"},{label:"Quando uso recursão",value:"recursao"}],answer:"ordenado",explanation:"Arrays ordenados permitem mover ponteiros extremos para aproximar o alvo em O(n)."},{id:"aula04-q2",question:"Qual estrutura acompanha frequências em uma janela deslizante de caracteres?",options:[{label:"`Dictionary<char,int>`",value:"dictionary"},{label:"`Stack<char>`",value:"stack"},{label:"`PriorityQueue<char,int>`",value:"priority"},{label:"`Queue<char>`",value:"queue"}],answer:"dictionary",explanation:"Dicionários permitem atualizar contagens conforme a janela expande ou contrai."},{id:"aula04-q3",question:"Qual condição encerra o movimento do ponteiro esquerdo ao buscar a menor janela válida?",options:[{label:"Quando a contagem mínima é violada",value:"violada"},{label:"Quando a janela alcança o fim",value:"fim"},{label:"Quando o alvo é negativo",value:"negativo"},{label:"Quando o ponteiro direito moveu duas posições",value:"duas"}],answer:"violada",explanation:"Reduzir a janela até quebrar a condição mantém a solução mínima e correta."}]},{id:"quiz-aula05",title:"Aula 05 • Pilhas e Filas",description:"Domine fluxos FIFO e LIFO em problemas inspirados em editores e simulações.",topic:"Estruturas Lineares",duration:"12 min",questions:[{id:"aula05-q1",question:"Qual situação modela melhor uma `Queue<T>`?",options:[{label:"Compilar parênteses balanceados",value:"parenteses"},{label:"Processar requisições em ordem de chegada",value:"fifo"},{label:"Implementar desfazer/refazer",value:"undo"},{label:"Percorrer profundidade",value:"dfs"}],answer:"fifo",explanation:"Filas preservam ordem de chegada, crucial em simulações de atendimento e BFS."},{id:"aula05-q2",question:"Qual é a complexidade de `Push` e `Pop` em `Stack<T>`?",options:[{label:"O(1)",value:"O(1)"},{label:"O(log n)",value:"O(log n)"},{label:"O(n)",value:"O(n)"},{label:"O(n log n)",value:"O(n log n)"}],answer:"O(1)",explanation:"Pilhas são implementadas sobre arrays dinâmicos e oferecem operações O(1) amortizadas."},{id:"aula05-q3",question:"Qual técnica detecta pares válidos em uma expressão matemática?",options:[{label:"Empilhar aberturas e verificar ao fechar",value:"stack"},{label:"Ordenar os caracteres",value:"ordenar"},{label:"Contar caracteres total",value:"contagem"},{label:"Usar recursão profunda",value:"recursao"}],answer:"stack",explanation:"Padrões de validação de parênteses se resolvem empilhando aberturas e conferindo pares ao fechar."}]},{id:"quiz-aula06",title:"Aula 06 • Grafos e Buscas",description:"Reforce percursos BFS/DFS e modelagem de adjacência.",topic:"Grafos",duration:"15 min",questions:[{id:"aula06-q1",question:"Qual representação é mais eficiente para grafos esparsos?",options:[{label:"Matriz de adjacência",value:"matriz"},{label:"Lista de adjacência",value:"lista"},{label:"Matriz de incidência",value:"incidencia"},{label:"Lista ordenada de arestas",value:"arestas"}],answer:"lista",explanation:"Listas de adjacência evitam armazenar zeros e reduzem memória em grafos esparsos."},{id:"aula06-q2",question:"Qual busca encontra o caminho mais curto em grafos não ponderados?",options:[{label:"DFS",value:"dfs"},{label:"BFS",value:"bfs"},{label:"Dijkstra",value:"dijkstra"},{label:"Bellman-Ford",value:"bellman"}],answer:"bfs",explanation:"BFS visita níveis em ordem, garantindo o menor número de arestas até o destino."},{id:"aula06-q3",question:"Qual estratégia evita loops infinitos em DFS?",options:[{label:"Marcador de visitados",value:"visitados"},{label:"Reiniciar a pilha",value:"reset"},{label:"Usar fila",value:"fila"},{label:"Remover arestas duplicadas",value:"duplicadas"}],answer:"visitados",explanation:"Controlar nós visitados impede revisitar ciclos e garante término."}]},{id:"quiz-aula07",title:"Aula 07 • Ordenação Topológica e Bipartição",description:"Verifique dependências direcionais e cores alternadas em grafos.",topic:"Grafos Avançados",duration:"15 min",questions:[{id:"aula07-q1",question:"Qual condição torna impossível uma ordenação topológica?",options:[{label:"Grafo com ciclo dirigido",value:"ciclo"},{label:"Grafo disconexo",value:"disconexo"},{label:"Grafo com pesos",value:"pesos"},{label:"Grafo bipartido",value:"bipartido"}],answer:"ciclo",explanation:"Ciclos dirigidos criam dependências circulares que impedem uma ordem linear."},{id:"aula07-q2",question:"Qual algoritmo detecta ciclo em grafo direcionado durante ordenação topológica?",options:[{label:"Kahn com contagem de graus",value:"kahn"},{label:"Prim",value:"prim"},{label:"Kruskal",value:"kruskal"},{label:"Floyd-Warshall",value:"floyd"}],answer:"kahn",explanation:"Se restarem vértices com grau de entrada não reduzido a zero, há ciclo detectado pelo algoritmo de Kahn."},{id:"aula07-q3",question:"Como verificar bipartição em grafo não direcionado?",options:[{label:"Colorir com BFS alternando cores",value:"colorir"},{label:"Ordenar vértices",value:"ordenar"},{label:"Executar Prim",value:"prim"},{label:"Usar matriz identidade",value:"identidade"}],answer:"colorir",explanation:"BFS/DFS alternando cores detecta conflitos que invalidam a bipartição."}]},{id:"quiz-aula08",title:"Aula 08 • Heaps e Estratégias Gulosas",description:"Confirme domínio de filas de prioridade e escolhas ótimas locais.",topic:"Heaps",duration:"15 min",questions:[{id:"aula08-q1",question:"Qual coleção .NET implementa uma min-heap pronta para uso?",options:[{label:"`PriorityQueue<TElement,TPriority>`",value:"priorityqueue"},{label:"`SortedDictionary<TKey,TValue>`",value:"sorteddictionary"},{label:"`SortedList<TKey,TValue>`",value:"sortedlist"},{label:"`ConcurrentQueue<T>`",value:"concurrentqueue"}],answer:"priorityqueue",explanation:"`PriorityQueue` expõe inserção O(log n) e extração do menor elemento de forma direta."},{id:"aula08-q2",question:"Qual técnica garante solução ótima em problemas de interval scheduling?",options:[{label:"Ordenar por tempo de término e selecionar guloso",value:"guloso"},{label:"Backtracking completo",value:"backtracking"},{label:"Programação dinâmica",value:"dp"},{label:"Busca binária",value:"busca"}],answer:"guloso",explanation:"Escolher sempre o intervalo que termina mais cedo maximiza a quantidade de tarefas agendadas."},{id:"aula08-q3",question:"Qual estrutura auxilia a manter os maiores N elementos vistos até agora?",options:[{label:"Heap mínima com tamanho fixo",value:"heap"},{label:"Lista ordenada",value:"lista"},{label:"Pilha",value:"pilha"},{label:"Dicionário",value:"dicionario"}],answer:"heap",explanation:"Uma min-heap limitada descarta automaticamente o menor elemento ao inserir novo item relevante."}]},{id:"quiz-aula09",title:"Aula 09 • Programação Dinâmica com Memorização",description:"Acompanhe subproblemas e otimizações top-down.",topic:"DP Memo",duration:"15 min",questions:[{id:"aula09-q1",question:"Qual característica define um problema adequado para DP?",options:[{label:"Subproblemas sobrepostos",value:"subproblemas"},{label:"Independência total",value:"independente"},{label:"Ordenação necessária",value:"ordenacao"},{label:"Dados em fluxo",value:"stream"}],answer:"subproblemas",explanation:"DP aproveita subproblemas recursivos que se repetem e podem ser armazenados."},{id:"aula09-q2",question:"Qual estrutura costuma armazenar resultados memorizados?",options:[{label:"Dictionary ou array indexado",value:"memo"},{label:"Queue",value:"queue"},{label:"Stack",value:"stack"},{label:"PriorityQueue",value:"priority"}],answer:"memo",explanation:"Memoização associa argumentos do subproblema a resultados já computados em mapas ou arrays."},{id:"aula09-q3",question:"Qual problema clássico memorizado soma combinações para atingir alvo?",options:[{label:"Coin Change (top-down)",value:"coin"},{label:"Prim MST",value:"prim"},{label:"Busca binária",value:"binary"},{label:"Merge Sort",value:"merge"}],answer:"coin",explanation:"Coin Change usa memoização para evitar recomputar combinações de moedas."}]},{id:"quiz-aula10",title:"Aula 10 • Programação Dinâmica Tabulada",description:"Construa soluções bottom-up em tabelas iterativas.",topic:"DP Bottom-Up",duration:"15 min",questions:[{id:"aula10-q1",question:"Qual é a principal diferença entre memoização e tabulação?",options:[{label:"Tabulação preenche iterativamente do menor subproblema",value:"iterativo"},{label:"Memoização usa mais memória",value:"memoria"},{label:"Tabulação exige recursão",value:"recursivo"},{label:"Memoização não usa pilha",value:"pilha"}],answer:"iterativo",explanation:"Tabulação resolve subproblemas em ordem iterativa sem pilha recursiva."},{id:"aula10-q2",question:"Qual ordem de preenchimento resolve DP em grade (caminhos únicos)?",options:[{label:"Varredura linha por linha da origem ao destino",value:"linhas"},{label:"Varredura diagonal",value:"diagonal"},{label:"Varredura aleatória",value:"aleatorio"},{label:"Busca em largura",value:"bfs"}],answer:"linhas",explanation:"Percorrer linhas/colunas garante que subproblemas vizinhos já foram calculados."},{id:"aula10-q3",question:"Qual otimização reduz memória em DP de subsequências?",options:[{label:"Usar apenas duas linhas (rolling array)",value:"rolling"},{label:"Aplicar heap",value:"heap"},{label:"Usar set",value:"set"},{label:"Converter em recursão",value:"recursao"}],answer:"rolling",explanation:"Rolling array mantém resultados da linha atual e anterior, reduzindo a tabela para O(n)."}]},{id:"quiz-aula11",title:"Aula 11 • SQL, Depuração e Erros",description:"Consolide técnicas de consulta, logging e tratamento de exceções.",topic:"Produtividade",duration:"12 min",questions:[{id:"aula11-q1",question:"Qual cláusula SQL calcula rankings mantendo empates?",options:[{label:"`DENSE_RANK()`",value:"dense"},{label:"`ROW_NUMBER()`",value:"row"},{label:"`RANK()`",value:"rank"},{label:"`NTILE()`",value:"ntile"}],answer:"dense",explanation:"`DENSE_RANK` não cria saltos após empates, comum em dashboards de resultados."},{id:"aula11-q2",question:"Qual bloco captura exceções específicas mantendo rastros úteis?",options:[{label:"`catch (SpecificException ex)`",value:"specific"},{label:"`catch (Exception)`",value:"generic"},{label:"`catch` vazio",value:"empty"},{label:"`finally`",value:"finally"}],answer:"specific",explanation:"Capturar tipos específicos evita ocultar erros e permite mensagens orientadas."},{id:"aula11-q3",question:"Qual abordagem de logging evita bloquear threads em produção?",options:[{label:"Logger assíncrono com buffering",value:"async"},{label:"`Console.WriteLine` direto",value:"console"},{label:"Armazenar em lista estática",value:"lista"},{label:"Escrever arquivo a cada linha",value:"arquivo"}],answer:"async",explanation:"Buffers assíncronos amortizam escrita e reduzem impacto em threads de requisição."}]},{id:"quiz-aula12",title:"Aula 12 • DevOps e Resiliência",description:"Avalie práticas de observabilidade, pipelines e estratégias tolerantes a falhas.",topic:"DevOps",duration:"15 min",questions:[{id:"aula12-q1",question:"Qual métrica monitora latência em APIs críticas?",options:[{label:"Apdex ou percentis de tempo de resposta",value:"apdex"},{label:"Uso de disco",value:"disco"},{label:"Contagem de commits",value:"commits"},{label:"Tamanho do repositório",value:"repo"}],answer:"apdex",explanation:"Apdex e percentis oferecem visibilidade de desempenho percebido por usuários."},{id:"aula12-q2",question:"Qual prática garante rollback rápido em pipelines?",options:[{label:"Deploy blue-green com alternância de tráfego",value:"bluegreen"},{label:"Deploy manual em produção",value:"manual"},{label:"Comprimir logs",value:"logs"},{label:"Desabilitar testes",value:"notestes"}],answer:"bluegreen",explanation:"Blue-green mantém duas versões e permite revertê-las trocando o roteamento."},{id:"aula12-q3",question:"Qual padrão evita sobrecarga cascata ao chamar serviços externos?",options:[{label:"Circuit breaker",value:"circuit"},{label:"Retry infinito",value:"retry"},{label:"Thread.Sleep",value:"sleep"},{label:"Cache sempre",value:"cache"}],answer:"circuit",explanation:"Circuit breakers abrem o circuito após falhas sucessivas, protegendo o sistema contra colapso."}]}],Ax="_card_1fdrt_1",Dx="_level_1fdrt_37",jx="_summary_1fdrt_65",Nx="_topics_1fdrt_75",Rx="_link_1fdrt_125",Rr={card:Ax,level:Dx,summary:jx,topics:Nx,link:Rx};function Wm({lesson:e}){return w.jsxs("article",{className:Rr.card,children:[w.jsxs("div",{children:[w.jsx("p",{className:Rr.level,children:e.level}),w.jsx("h3",{children:e.title}),e.topics.length?w.jsx("div",{className:Rr.topics,children:e.topics.map(n=>w.jsx("span",{children:n},n))}):null,w.jsx("p",{className:Rr.summary,children:e.summary})]}),w.jsxs("footer",{children:[w.jsx("span",{children:e.duration}),w.jsx(Ye,{to:`/lessons/${e.id}`,className:Rr.link,children:"Ver detalhado"})]})]})}const Mx="_card_1cop7_1",Fx="_topic_1cop7_49",Bx="_link_1cop7_111",ol={card:Mx,topic:Fx,link:Bx};function Km({quiz:e}){return w.jsxs("article",{className:ol.card,children:[w.jsxs("header",{children:[w.jsx("span",{className:ol.topic,children:e.topic}),w.jsx("h3",{children:e.title})]}),w.jsx("p",{children:e.description}),w.jsxs("footer",{children:[w.jsx("span",{children:e.duration}),w.jsx(Ye,{to:`/quizzes/${e.id}`,className:ol.link,children:"Começar"})]})]})}const qx="_container_fd49z_1",Ux="_hero_fd49z_15",$x="_actions_fd49z_53",Vx="_ctaPrimary_fd49z_67",Qx="_ctaSecondary_fd49z_69",Hx="_sectionHeader_fd49z_103",Wx="_grid_fd49z_139",pn={container:qx,hero:Ux,actions:$x,ctaPrimary:Vx,ctaSecondary:Qx,sectionHeader:Hx,grid:Wx};function Kx(){return w.jsxs("div",{className:pn.container,children:[w.jsx("section",{className:pn.hero,children:w.jsxs("div",{children:[w.jsx("h1",{children:"Construa fluência em C# com prática guiada"}),w.jsx("p",{children:"Avance pelas lições, valide o conhecimento com quizzes, experimente no playground e conquiste desafios inspirados em entrevistas técnicas."}),w.jsxs("div",{className:pn.actions,children:[w.jsx(Ye,{to:"/lessons",className:pn.ctaPrimary,children:"Começar pelas lições"}),w.jsx(Ye,{to:"/playground",className:pn.ctaSecondary,children:"Abrir playground"})]})]})}),w.jsxs("section",{children:[w.jsxs("div",{className:pn.sectionHeader,children:[w.jsx("h2",{children:"Lições em destaque"}),w.jsx(Ye,{to:"/lessons",children:"Ver todas as lições"})]}),w.jsx("div",{className:pn.grid,children:Ja.slice(0,2).map(e=>w.jsx(Wm,{lesson:e},e.id))})]}),w.jsxs("section",{children:[w.jsxs("div",{className:pn.sectionHeader,children:[w.jsx("h2",{children:"Quizzes para revisar"}),w.jsx(Ye,{to:"/quizzes",children:"Ver todos os quizzes"})]}),w.jsx("div",{className:pn.grid,children:Za.slice(0,2).map(e=>w.jsx(Km,{quiz:e},e.id))})]}),w.jsxs("section",{children:[w.jsxs("div",{className:pn.sectionHeader,children:[w.jsx("h2",{children:"Desafios selecionados"}),w.jsx(Ye,{to:"/challenges",children:"Ver todos os desafios"})]}),w.jsx("div",{className:pn.grid,children:Xa.slice(0,2).map(e=>w.jsx(Hm,{challenge:e},e.id))})]})]})}function Gx(e,n){const t={};return(e[e.length-1]===""?[...e,""]:e).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}const Yx=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Xx=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Jx={};function yd(e,n){return(Jx.jsx?Xx:Yx).test(e)}const Zx=/[ \t\n\f\r]/g;function e0(e){return typeof e=="object"?e.type==="text"?xd(e.value):!1:xd(e)}function xd(e){return e.replace(Zx,"")===""}class Ai{constructor(n,t,r){this.normal=t,this.property=n,r&&(this.space=r)}}Ai.prototype.normal={};Ai.prototype.property={};Ai.prototype.space=void 0;function Gm(e,n){const t={},r={};for(const i of e)Object.assign(t,i.property),Object.assign(r,i.normal);return new Ai(t,r,n)}function Cs(e){return e.toLowerCase()}class Qe{constructor(n,t){this.attribute=t,this.property=n}}Qe.prototype.attribute="";Qe.prototype.booleanish=!1;Qe.prototype.boolean=!1;Qe.prototype.commaOrSpaceSeparated=!1;Qe.prototype.commaSeparated=!1;Qe.prototype.defined=!1;Qe.prototype.mustUseProperty=!1;Qe.prototype.number=!1;Qe.prototype.overloadedBoolean=!1;Qe.prototype.property="";Qe.prototype.spaceSeparated=!1;Qe.prototype.space=void 0;let n0=0;const H=Mt(),ge=Mt(),Es=Mt(),T=Mt(),ie=Mt(),fr=Mt(),We=Mt();function Mt(){return 2**++n0}const bs=Object.freeze(Object.defineProperty({__proto__:null,boolean:H,booleanish:ge,commaOrSpaceSeparated:We,commaSeparated:fr,number:T,overloadedBoolean:Es,spaceSeparated:ie},Symbol.toStringTag,{value:"Module"})),ll=Object.keys(bs);class Iu extends Qe{constructor(n,t,r,i){let a=-1;if(super(n,t),kd(this,"space",i),typeof r=="number")for(;++a<ll.length;){const o=ll[a];kd(this,ll[a],(r&bs[o])===bs[o])}}}Iu.prototype.defined=!0;function kd(e,n,t){t&&(e[n]=t)}function br(e){const n={},t={};for(const[r,i]of Object.entries(e.properties)){const a=new Iu(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(a.mustUseProperty=!0),n[r]=a,t[Cs(r)]=r,t[Cs(a.attribute)]=r}return new Ai(n,t,e.space)}const Ym=br({properties:{ariaActiveDescendant:null,ariaAtomic:ge,ariaAutoComplete:null,ariaBusy:ge,ariaChecked:ge,ariaColCount:T,ariaColIndex:T,ariaColSpan:T,ariaControls:ie,ariaCurrent:null,ariaDescribedBy:ie,ariaDetails:null,ariaDisabled:ge,ariaDropEffect:ie,ariaErrorMessage:null,ariaExpanded:ge,ariaFlowTo:ie,ariaGrabbed:ge,ariaHasPopup:null,ariaHidden:ge,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ie,ariaLevel:T,ariaLive:null,ariaModal:ge,ariaMultiLine:ge,ariaMultiSelectable:ge,ariaOrientation:null,ariaOwns:ie,ariaPlaceholder:null,ariaPosInSet:T,ariaPressed:ge,ariaReadOnly:ge,ariaRelevant:null,ariaRequired:ge,ariaRoleDescription:ie,ariaRowCount:T,ariaRowIndex:T,ariaRowSpan:T,ariaSelected:ge,ariaSetSize:T,ariaSort:null,ariaValueMax:T,ariaValueMin:T,ariaValueNow:T,ariaValueText:null,role:null},transform(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}});function Xm(e,n){return n in e?e[n]:n}function Jm(e,n){return Xm(e,n.toLowerCase())}const t0=br({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:fr,acceptCharset:ie,accessKey:ie,action:null,allow:null,allowFullScreen:H,allowPaymentRequest:H,allowUserMedia:H,alt:null,as:null,async:H,autoCapitalize:null,autoComplete:ie,autoFocus:H,autoPlay:H,blocking:ie,capture:null,charSet:null,checked:H,cite:null,className:ie,cols:T,colSpan:null,content:null,contentEditable:ge,controls:H,controlsList:ie,coords:T|fr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:H,defer:H,dir:null,dirName:null,disabled:H,download:Es,draggable:ge,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:H,formTarget:null,headers:ie,height:T,hidden:Es,high:T,href:null,hrefLang:null,htmlFor:ie,httpEquiv:ie,id:null,imageSizes:null,imageSrcSet:null,inert:H,inputMode:null,integrity:null,is:null,isMap:H,itemId:null,itemProp:ie,itemRef:ie,itemScope:H,itemType:ie,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:H,low:T,manifest:null,max:null,maxLength:T,media:null,method:null,min:null,minLength:T,multiple:H,muted:H,name:null,nonce:null,noModule:H,noValidate:H,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:H,optimum:T,pattern:null,ping:ie,placeholder:null,playsInline:H,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:H,referrerPolicy:null,rel:ie,required:H,reversed:H,rows:T,rowSpan:T,sandbox:ie,scope:null,scoped:H,seamless:H,selected:H,shadowRootClonable:H,shadowRootDelegatesFocus:H,shadowRootMode:null,shape:null,size:T,sizes:null,slot:null,span:T,spellCheck:ge,src:null,srcDoc:null,srcLang:null,srcSet:null,start:T,step:null,style:null,tabIndex:T,target:null,title:null,translate:null,type:null,typeMustMatch:H,useMap:null,value:ge,width:T,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:ie,axis:null,background:null,bgColor:null,border:T,borderColor:null,bottomMargin:T,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:H,declare:H,event:null,face:null,frame:null,frameBorder:null,hSpace:T,leftMargin:T,link:null,longDesc:null,lowSrc:null,marginHeight:T,marginWidth:T,noResize:H,noHref:H,noShade:H,noWrap:H,object:null,profile:null,prompt:null,rev:null,rightMargin:T,rules:null,scheme:null,scrolling:ge,standby:null,summary:null,text:null,topMargin:T,valueType:null,version:null,vAlign:null,vLink:null,vSpace:T,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:H,disableRemotePlayback:H,prefix:null,property:null,results:T,security:null,unselectable:null},space:"html",transform:Jm}),r0=br({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:We,accentHeight:T,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:T,amplitude:T,arabicForm:null,ascent:T,attributeName:null,attributeType:null,azimuth:T,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:T,by:null,calcMode:null,capHeight:T,className:ie,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:T,diffuseConstant:T,direction:null,display:null,dur:null,divisor:T,dominantBaseline:null,download:H,dx:null,dy:null,edgeMode:null,editable:null,elevation:T,enableBackground:null,end:null,event:null,exponent:T,externalResourcesRequired:null,fill:null,fillOpacity:T,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:fr,g2:fr,glyphName:fr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:T,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:T,horizOriginX:T,horizOriginY:T,id:null,ideographic:T,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:T,k:T,k1:T,k2:T,k3:T,k4:T,kernelMatrix:We,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:T,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:T,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:T,overlineThickness:T,paintOrder:null,panose1:null,path:null,pathLength:T,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ie,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:T,pointsAtY:T,pointsAtZ:T,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:We,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:We,rev:We,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:We,requiredFeatures:We,requiredFonts:We,requiredFormats:We,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:T,specularExponent:T,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:T,strikethroughThickness:T,string:null,stroke:null,strokeDashArray:We,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:T,strokeOpacity:T,strokeWidth:null,style:null,surfaceScale:T,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:We,tabIndex:T,tableValues:null,target:null,targetX:T,targetY:T,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:We,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:T,underlineThickness:T,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:T,values:null,vAlphabetic:T,vMathematical:T,vectorEffect:null,vHanging:T,vIdeographic:T,version:null,vertAdvY:T,vertOriginX:T,vertOriginY:T,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:T,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Xm}),Zm=br({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,n){return"xlink:"+n.slice(5).toLowerCase()}}),eh=br({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Jm}),nh=br({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,n){return"xml:"+n.slice(3).toLowerCase()}}),i0={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},a0=/[A-Z]/g,wd=/-[a-z]/g,o0=/^data[-\w.:]+$/i;function l0(e,n){const t=Cs(n);let r=n,i=Qe;if(t in e.normal)return e.property[e.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&o0.test(n)){if(n.charAt(4)==="-"){const a=n.slice(5).replace(wd,u0);r="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{const a=n.slice(4);if(!wd.test(a)){let o=a.replace(a0,s0);o.charAt(0)!=="-"&&(o="-"+o),n="data"+o}}i=Iu}return new i(r,n)}function s0(e){return"-"+e.toLowerCase()}function u0(e){return e.charAt(1).toUpperCase()}const c0=Gm([Ym,t0,Zm,eh,nh],"html"),Au=Gm([Ym,r0,Zm,eh,nh],"svg");function d0(e){return e.join(" ").trim()}var Du={},Sd=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,f0=/\n/g,p0=/^\s*/,m0=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,h0=/^:\s*/,g0=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,v0=/^[;\s]*/,y0=/^\s+|\s+$/g,x0=`
`,Cd="/",Ed="*",Ct="",k0="comment",w0="declaration",S0=function(e,n){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];n=n||{};var t=1,r=1;function i(g){var x=g.match(f0);x&&(t+=x.length);var b=g.lastIndexOf(x0);r=~b?g.length-b:r+g.length}function a(){var g={line:t,column:r};return function(x){return x.position=new o(g),u(),x}}function o(g){this.start=g,this.end={line:t,column:r},this.source=n.source}o.prototype.content=e;function l(g){var x=new Error(n.source+":"+t+":"+r+": "+g);if(x.reason=g,x.filename=n.source,x.line=t,x.column=r,x.source=e,!n.silent)throw x}function s(g){var x=g.exec(e);if(x){var b=x[0];return i(b),e=e.slice(b.length),x}}function u(){s(p0)}function d(g){var x;for(g=g||[];x=c();)x!==!1&&g.push(x);return g}function c(){var g=a();if(!(Cd!=e.charAt(0)||Ed!=e.charAt(1))){for(var x=2;Ct!=e.charAt(x)&&(Ed!=e.charAt(x)||Cd!=e.charAt(x+1));)++x;if(x+=2,Ct===e.charAt(x-1))return l("End of comment missing");var b=e.slice(2,x-2);return r+=2,i(b),e=e.slice(x),r+=2,g({type:k0,comment:b})}}function f(){var g=a(),x=s(m0);if(x){if(c(),!s(h0))return l("property missing ':'");var b=s(g0),m=g({type:w0,property:bd(x[0].replace(Sd,Ct)),value:b?bd(b[0].replace(Sd,Ct)):Ct});return s(v0),m}}function p(){var g=[];d(g);for(var x;x=f();)x!==!1&&(g.push(x),d(g));return g}return u(),p()};function bd(e){return e?e.replace(y0,Ct):Ct}var C0=Ca&&Ca.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Du,"__esModule",{value:!0});Du.default=b0;const E0=C0(S0);function b0(e,n){let t=null;if(!e||typeof e!="string")return t;const r=(0,E0.default)(e),i=typeof n=="function";return r.forEach(a=>{if(a.type!=="declaration")return;const{property:o,value:l}=a;i?n(o,l,a):l&&(t=t||{},t[o]=l)}),t}var bo={};Object.defineProperty(bo,"__esModule",{value:!0});bo.camelCase=void 0;var P0=/^--[a-zA-Z0-9_-]+$/,_0=/-([a-z])/g,z0=/^[^-]+$/,L0=/^-(webkit|moz|ms|o|khtml)-/,O0=/^-(ms)-/,T0=function(e){return!e||z0.test(e)||P0.test(e)},I0=function(e,n){return n.toUpperCase()},Pd=function(e,n){return"".concat(n,"-")},A0=function(e,n){return n===void 0&&(n={}),T0(e)?e:(e=e.toLowerCase(),n.reactCompat?e=e.replace(O0,Pd):e=e.replace(L0,Pd),e.replace(_0,I0))};bo.camelCase=A0;var D0=Ca&&Ca.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},j0=D0(Du),N0=bo;function Ps(e,n){var t={};return!e||typeof e!="string"||(0,j0.default)(e,function(r,i){r&&i&&(t[(0,N0.camelCase)(r,n)]=i)}),t}Ps.default=Ps;var R0=Ps;const M0=js(R0),th=rh("end"),ju=rh("start");function rh(e){return n;function n(t){const r=t&&t.position&&t.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function F0(e){const n=ju(e),t=th(e);if(n&&t)return{start:n,end:t}}function ei(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?_d(e.position):"start"in e||"end"in e?_d(e):"line"in e||"column"in e?_s(e):""}function _s(e){return zd(e&&e.line)+":"+zd(e&&e.column)}function _d(e){return _s(e&&e.start)+"-"+_s(e&&e.end)}function zd(e){return e&&typeof e=="number"?e:1}class Ie extends Error{constructor(n,t,r){super(),typeof t=="string"&&(r=t,t=void 0);let i="",a={},o=!1;if(t&&("line"in t&&"column"in t?a={place:t}:"start"in t&&"end"in t?a={place:t}:"type"in t?a={ancestors:[t],place:t.position}:a={...t}),typeof n=="string"?i=n:!a.cause&&n&&(o=!0,i=n.message,a.cause=n),!a.ruleId&&!a.source&&typeof r=="string"){const s=r.indexOf(":");s===-1?a.ruleId=r:(a.source=r.slice(0,s),a.ruleId=r.slice(s+1))}if(!a.place&&a.ancestors&&a.ancestors){const s=a.ancestors[a.ancestors.length-1];s&&(a.place=s.position)}const l=a.place&&"start"in a.place?a.place.start:a.place;this.ancestors=a.ancestors||void 0,this.cause=a.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=ei(a.place)||"1:1",this.place=a.place||void 0,this.reason=this.message,this.ruleId=a.ruleId||void 0,this.source=a.source||void 0,this.stack=o&&a.cause&&typeof a.cause.stack=="string"?a.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Ie.prototype.file="";Ie.prototype.name="";Ie.prototype.reason="";Ie.prototype.message="";Ie.prototype.stack="";Ie.prototype.column=void 0;Ie.prototype.line=void 0;Ie.prototype.ancestors=void 0;Ie.prototype.cause=void 0;Ie.prototype.fatal=void 0;Ie.prototype.place=void 0;Ie.prototype.ruleId=void 0;Ie.prototype.source=void 0;const Nu={}.hasOwnProperty,B0=new Map,q0=/[A-Z]/g,U0=new Set(["table","tbody","thead","tfoot","tr"]),$0=new Set(["td","th"]),ih="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function V0(e,n){if(!n||n.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const t=n.filePath||void 0;let r;if(n.development){if(typeof n.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=J0(t,n.jsxDEV)}else{if(typeof n.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof n.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=X0(t,n.jsx,n.jsxs)}const i={Fragment:n.Fragment,ancestors:[],components:n.components||{},create:r,elementAttributeNameCase:n.elementAttributeNameCase||"react",evaluater:n.createEvaluater?n.createEvaluater():void 0,filePath:t,ignoreInvalidStyle:n.ignoreInvalidStyle||!1,passKeys:n.passKeys!==!1,passNode:n.passNode||!1,schema:n.space==="svg"?Au:c0,stylePropertyNameCase:n.stylePropertyNameCase||"dom",tableCellAlignToStyle:n.tableCellAlignToStyle!==!1},a=ah(i,e,void 0);return a&&typeof a!="string"?a:i.create(e,i.Fragment,{children:a||void 0},void 0)}function ah(e,n,t){if(n.type==="element")return Q0(e,n,t);if(n.type==="mdxFlowExpression"||n.type==="mdxTextExpression")return H0(e,n);if(n.type==="mdxJsxFlowElement"||n.type==="mdxJsxTextElement")return K0(e,n,t);if(n.type==="mdxjsEsm")return W0(e,n);if(n.type==="root")return G0(e,n,t);if(n.type==="text")return Y0(e,n)}function Q0(e,n,t){const r=e.schema;let i=r;n.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Au,e.schema=i),e.ancestors.push(n);const a=lh(e,n.tagName,!1),o=Z0(e,n);let l=Mu(e,n);return U0.has(n.tagName)&&(l=l.filter(function(s){return typeof s=="string"?!e0(s):!0})),oh(e,o,a,n),Ru(o,l),e.ancestors.pop(),e.schema=r,e.create(n,a,o,t)}function H0(e,n){if(n.data&&n.data.estree&&e.evaluater){const r=n.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Si(e,n.position)}function W0(e,n){if(n.data&&n.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(n.data.estree);Si(e,n.position)}function K0(e,n,t){const r=e.schema;let i=r;n.name==="svg"&&r.space==="html"&&(i=Au,e.schema=i),e.ancestors.push(n);const a=n.name===null?e.Fragment:lh(e,n.name,!0),o=ek(e,n),l=Mu(e,n);return oh(e,o,a,n),Ru(o,l),e.ancestors.pop(),e.schema=r,e.create(n,a,o,t)}function G0(e,n,t){const r={};return Ru(r,Mu(e,n)),e.create(n,e.Fragment,r,t)}function Y0(e,n){return n.value}function oh(e,n,t,r){typeof t!="string"&&t!==e.Fragment&&e.passNode&&(n.node=r)}function Ru(e,n){if(n.length>0){const t=n.length>1?n:n[0];t&&(e.children=t)}}function X0(e,n,t){return r;function r(i,a,o,l){const u=Array.isArray(o.children)?t:n;return l?u(a,o,l):u(a,o)}}function J0(e,n){return t;function t(r,i,a,o){const l=Array.isArray(a.children),s=ju(r);return n(i,a,o,l,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function Z0(e,n){const t={};let r,i;for(i in n.properties)if(i!=="children"&&Nu.call(n.properties,i)){const a=nk(e,i,n.properties[i]);if(a){const[o,l]=a;e.tableCellAlignToStyle&&o==="align"&&typeof l=="string"&&$0.has(n.tagName)?r=l:t[o]=l}}if(r){const a=t.style||(t.style={});a[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return t}function ek(e,n){const t={};for(const r of n.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const a=r.data.estree.body[0];a.type;const o=a.expression;o.type;const l=o.properties[0];l.type,Object.assign(t,e.evaluater.evaluateExpression(l.argument))}else Si(e,n.position);else{const i=r.name;let a;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const l=r.value.data.estree.body[0];l.type,a=e.evaluater.evaluateExpression(l.expression)}else Si(e,n.position);else a=r.value===null?!0:r.value;t[i]=a}return t}function Mu(e,n){const t=[];let r=-1;const i=e.passKeys?new Map:B0;for(;++r<n.children.length;){const a=n.children[r];let o;if(e.passKeys){const s=a.type==="element"?a.tagName:a.type==="mdxJsxFlowElement"||a.type==="mdxJsxTextElement"?a.name:void 0;if(s){const u=i.get(s)||0;o=s+"-"+u,i.set(s,u+1)}}const l=ah(e,a,o);l!==void 0&&t.push(l)}return t}function nk(e,n,t){const r=l0(e.schema,n);if(!(t==null||typeof t=="number"&&Number.isNaN(t))){if(Array.isArray(t)&&(t=r.commaSeparated?Gx(t):d0(t)),r.property==="style"){let i=typeof t=="object"?t:tk(e,String(t));return e.stylePropertyNameCase==="css"&&(i=rk(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?i0[r.property]||r.property:r.attribute,t]}}function tk(e,n){try{return M0(n,{reactCompat:!0})}catch(t){if(e.ignoreInvalidStyle)return{};const r=t,i=new Ie("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=ih+"#cannot-parse-style-attribute",i}}function lh(e,n,t){let r;if(!t)r={type:"Literal",value:n};else if(n.includes(".")){const i=n.split(".");let a=-1,o;for(;++a<i.length;){const l=yd(i[a])?{type:"Identifier",name:i[a]}:{type:"Literal",value:i[a]};o=o?{type:"MemberExpression",object:o,property:l,computed:!!(a&&l.type==="Literal"),optional:!1}:l}r=o}else r=yd(n)&&!/^[a-z]/.test(n)?{type:"Identifier",name:n}:{type:"Literal",value:n};if(r.type==="Literal"){const i=r.value;return Nu.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Si(e)}function Si(e,n){const t=new Ie("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:n,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw t.file=e.filePath||void 0,t.url=ih+"#cannot-handle-mdx-estrees-without-createevaluater",t}function rk(e){const n={};let t;for(t in e)Nu.call(e,t)&&(n[ik(t)]=e[t]);return n}function ik(e){let n=e.replace(q0,ak);return n.slice(0,3)==="ms-"&&(n="-"+n),n}function ak(e){return"-"+e.toLowerCase()}const sl={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},ok={};function Fu(e,n){const t=ok,r=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,i=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return sh(e,r,i)}function sh(e,n,t){if(lk(e)){if("value"in e)return e.type==="html"&&!t?"":e.value;if(n&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Ld(e.children,n,t)}return Array.isArray(e)?Ld(e,n,t):""}function Ld(e,n,t){const r=[];let i=-1;for(;++i<e.length;)r[i]=sh(e[i],n,t);return r.join("")}function lk(e){return!!(e&&typeof e=="object")}const Od=document.createElement("i");function Bu(e){const n="&"+e+";";Od.innerHTML=n;const t=Od.textContent;return t.charCodeAt(t.length-1)===59&&e!=="semi"||t===n?!1:t}function Ze(e,n,t,r){const i=e.length;let a=0,o;if(n<0?n=-n>i?0:i+n:n=n>i?i:n,t=t>0?t:0,r.length<1e4)o=Array.from(r),o.unshift(n,t),e.splice(...o);else for(t&&e.splice(n,t);a<r.length;)o=r.slice(a,a+1e4),o.unshift(n,0),e.splice(...o),a+=1e4,n+=1e4}function on(e,n){return e.length>0?(Ze(e,e.length,0,n),e):n}const Td={}.hasOwnProperty;function uh(e){const n={};let t=-1;for(;++t<e.length;)sk(n,e[t]);return n}function sk(e,n){let t;for(t in n){const i=(Td.call(e,t)?e[t]:void 0)||(e[t]={}),a=n[t];let o;if(a)for(o in a){Td.call(i,o)||(i[o]=[]);const l=a[o];uk(i[o],Array.isArray(l)?l:l?[l]:[])}}}function uk(e,n){let t=-1;const r=[];for(;++t<n.length;)(n[t].add==="after"?e:r).push(n[t]);Ze(e,0,0,r)}function ch(e,n){const t=Number.parseInt(e,n);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}function kn(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const je=yt(/[A-Za-z]/),Oe=yt(/[\dA-Za-z]/),ck=yt(/[#-'*+\--9=?A-Z^-~]/);function eo(e){return e!==null&&(e<32||e===127)}const zs=yt(/\d/),dk=yt(/[\dA-Fa-f]/),fk=yt(/[!-/:-@[-`{-~]/);function $(e){return e!==null&&e<-2}function re(e){return e!==null&&(e<0||e===32)}function K(e){return e===-2||e===-1||e===32}const Po=yt(new RegExp("\\p{P}|\\p{S}","u")),jt=yt(/\s/);function yt(e){return n;function n(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function Pr(e){const n=[];let t=-1,r=0,i=0;for(;++t<e.length;){const a=e.charCodeAt(t);let o="";if(a===37&&Oe(e.charCodeAt(t+1))&&Oe(e.charCodeAt(t+2)))i=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(o=String.fromCharCode(a));else if(a>55295&&a<57344){const l=e.charCodeAt(t+1);a<56320&&l>56319&&l<57344?(o=String.fromCharCode(a,l),i=1):o="�"}else o=String.fromCharCode(a);o&&(n.push(e.slice(r,t),encodeURIComponent(o)),r=t+i+1,o=""),i&&(t+=i,i=0)}return n.join("")+e.slice(r)}function X(e,n,t,r){const i=r?r-1:Number.POSITIVE_INFINITY;let a=0;return o;function o(s){return K(s)?(e.enter(t),l(s)):n(s)}function l(s){return K(s)&&a++<i?(e.consume(s),l):(e.exit(t),n(s))}}const pk={tokenize:mk};function mk(e){const n=e.attempt(this.parser.constructs.contentInitial,r,i);let t;return n;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),X(e,n,"linePrefix")}function i(l){return e.enter("paragraph"),a(l)}function a(l){const s=e.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=s),t=s,o(l)}function o(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return $(l)?(e.consume(l),e.exit("chunkText"),a):(e.consume(l),o)}}const hk={tokenize:gk},Id={tokenize:vk};function gk(e){const n=this,t=[];let r=0,i,a,o;return l;function l(v){if(r<t.length){const E=t[r];return n.containerState=E[1],e.attempt(E[0].continuation,s,u)(v)}return u(v)}function s(v){if(r++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,i&&h();const E=n.events.length;let P=E,C;for(;P--;)if(n.events[P][0]==="exit"&&n.events[P][1].type==="chunkFlow"){C=n.events[P][1].end;break}m(r);let z=E;for(;z<n.events.length;)n.events[z][1].end={...C},z++;return Ze(n.events,P+1,0,n.events.slice(E)),n.events.length=z,u(v)}return l(v)}function u(v){if(r===t.length){if(!i)return f(v);if(i.currentConstruct&&i.currentConstruct.concrete)return g(v);n.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(Id,d,c)(v)}function d(v){return i&&h(),m(r),f(v)}function c(v){return n.parser.lazy[n.now().line]=r!==t.length,o=n.now().offset,g(v)}function f(v){return n.containerState={},e.attempt(Id,p,g)(v)}function p(v){return r++,t.push([n.currentConstruct,n.containerState]),f(v)}function g(v){if(v===null){i&&h(),m(0),e.consume(v);return}return i=i||n.parser.flow(n.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:a}),x(v)}function x(v){if(v===null){b(e.exit("chunkFlow"),!0),m(0),e.consume(v);return}return $(v)?(e.consume(v),b(e.exit("chunkFlow")),r=0,n.interrupt=void 0,l):(e.consume(v),x)}function b(v,E){const P=n.sliceStream(v);if(E&&P.push(null),v.previous=a,a&&(a.next=v),a=v,i.defineSkip(v.start),i.write(P),n.parser.lazy[v.start.line]){let C=i.events.length;for(;C--;)if(i.events[C][1].start.offset<o&&(!i.events[C][1].end||i.events[C][1].end.offset>o))return;const z=n.events.length;let I=z,R,S;for(;I--;)if(n.events[I][0]==="exit"&&n.events[I][1].type==="chunkFlow"){if(R){S=n.events[I][1].end;break}R=!0}for(m(r),C=z;C<n.events.length;)n.events[C][1].end={...S},C++;Ze(n.events,I+1,0,n.events.slice(z)),n.events.length=C}}function m(v){let E=t.length;for(;E-- >v;){const P=t[E];n.containerState=P[1],P[0].exit.call(n,e)}t.length=v}function h(){i.write([null]),a=void 0,i=void 0,n.containerState._closeFlow=void 0}}function vk(e,n,t){return X(e,e.attempt(this.parser.constructs.document,n,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function wr(e){if(e===null||re(e)||jt(e))return 1;if(Po(e))return 2}function _o(e,n,t){const r=[];let i=-1;for(;++i<e.length;){const a=e[i].resolveAll;a&&!r.includes(a)&&(n=a(n,t),r.push(a))}return n}const Ls={name:"attention",resolveAll:yk,tokenize:xk};function yk(e,n){let t=-1,r,i,a,o,l,s,u,d;for(;++t<e.length;)if(e[t][0]==="enter"&&e[t][1].type==="attentionSequence"&&e[t][1]._close){for(r=t;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&n.sliceSerialize(e[r][1]).charCodeAt(0)===n.sliceSerialize(e[t][1]).charCodeAt(0)){if((e[r][1]._close||e[t][1]._open)&&(e[t][1].end.offset-e[t][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[t][1].end.offset-e[t][1].start.offset)%3))continue;s=e[r][1].end.offset-e[r][1].start.offset>1&&e[t][1].end.offset-e[t][1].start.offset>1?2:1;const c={...e[r][1].end},f={...e[t][1].start};Ad(c,-s),Ad(f,s),o={type:s>1?"strongSequence":"emphasisSequence",start:c,end:{...e[r][1].end}},l={type:s>1?"strongSequence":"emphasisSequence",start:{...e[t][1].start},end:f},a={type:s>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[t][1].start}},i={type:s>1?"strong":"emphasis",start:{...o.start},end:{...l.end}},e[r][1].end={...o.start},e[t][1].start={...l.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=on(u,[["enter",e[r][1],n],["exit",e[r][1],n]])),u=on(u,[["enter",i,n],["enter",o,n],["exit",o,n],["enter",a,n]]),u=on(u,_o(n.parser.constructs.insideSpan.null,e.slice(r+1,t),n)),u=on(u,[["exit",a,n],["enter",l,n],["exit",l,n],["exit",i,n]]),e[t][1].end.offset-e[t][1].start.offset?(d=2,u=on(u,[["enter",e[t][1],n],["exit",e[t][1],n]])):d=0,Ze(e,r-1,t-r+3,u),t=r+u.length-d-2;break}}for(t=-1;++t<e.length;)e[t][1].type==="attentionSequence"&&(e[t][1].type="data");return e}function xk(e,n){const t=this.parser.constructs.attentionMarkers.null,r=this.previous,i=wr(r);let a;return o;function o(s){return a=s,e.enter("attentionSequence"),l(s)}function l(s){if(s===a)return e.consume(s),l;const u=e.exit("attentionSequence"),d=wr(s),c=!d||d===2&&i||t.includes(s),f=!i||i===2&&d||t.includes(r);return u._open=!!(a===42?c:c&&(i||!f)),u._close=!!(a===42?f:f&&(d||!c)),n(s)}}function Ad(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const kk={name:"autolink",tokenize:wk};function wk(e,n,t){let r=0;return i;function i(p){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),a}function a(p){return je(p)?(e.consume(p),o):p===64?t(p):u(p)}function o(p){return p===43||p===45||p===46||Oe(p)?(r=1,l(p)):u(p)}function l(p){return p===58?(e.consume(p),r=0,s):(p===43||p===45||p===46||Oe(p))&&r++<32?(e.consume(p),l):(r=0,u(p))}function s(p){return p===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),n):p===null||p===32||p===60||eo(p)?t(p):(e.consume(p),s)}function u(p){return p===64?(e.consume(p),d):ck(p)?(e.consume(p),u):t(p)}function d(p){return Oe(p)?c(p):t(p)}function c(p){return p===46?(e.consume(p),r=0,d):p===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),n):f(p)}function f(p){if((p===45||Oe(p))&&r++<63){const g=p===45?f:c;return e.consume(p),g}return t(p)}}const Di={partial:!0,tokenize:Sk};function Sk(e,n,t){return r;function r(a){return K(a)?X(e,i,"linePrefix")(a):i(a)}function i(a){return a===null||$(a)?n(a):t(a)}}const dh={continuation:{tokenize:Ek},exit:bk,name:"blockQuote",tokenize:Ck};function Ck(e,n,t){const r=this;return i;function i(o){if(o===62){const l=r.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(o),e.exit("blockQuoteMarker"),a}return t(o)}function a(o){return K(o)?(e.enter("blockQuotePrefixWhitespace"),e.consume(o),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(o))}}function Ek(e,n,t){const r=this;return i;function i(o){return K(o)?X(e,a,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):a(o)}function a(o){return e.attempt(dh,n,t)(o)}}function bk(e){e.exit("blockQuote")}const fh={name:"characterEscape",tokenize:Pk};function Pk(e,n,t){return r;function r(a){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(a),e.exit("escapeMarker"),i}function i(a){return fk(a)?(e.enter("characterEscapeValue"),e.consume(a),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):t(a)}}const ph={name:"characterReference",tokenize:_k};function _k(e,n,t){const r=this;let i=0,a,o;return l;function l(c){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),s}function s(c){return c===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(c),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),a=31,o=Oe,d(c))}function u(c){return c===88||c===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(c),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),a=6,o=dk,d):(e.enter("characterReferenceValue"),a=7,o=zs,d(c))}function d(c){if(c===59&&i){const f=e.exit("characterReferenceValue");return o===Oe&&!Bu(r.sliceSerialize(f))?t(c):(e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),e.exit("characterReference"),n)}return o(c)&&i++<a?(e.consume(c),d):t(c)}}const Dd={partial:!0,tokenize:Lk},jd={concrete:!0,name:"codeFenced",tokenize:zk};function zk(e,n,t){const r=this,i={partial:!0,tokenize:P};let a=0,o=0,l;return s;function s(C){return u(C)}function u(C){const z=r.events[r.events.length-1];return a=z&&z[1].type==="linePrefix"?z[2].sliceSerialize(z[1],!0).length:0,l=C,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(C)}function d(C){return C===l?(o++,e.consume(C),d):o<3?t(C):(e.exit("codeFencedFenceSequence"),K(C)?X(e,c,"whitespace")(C):c(C))}function c(C){return C===null||$(C)?(e.exit("codeFencedFence"),r.interrupt?n(C):e.check(Dd,x,E)(C)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(C))}function f(C){return C===null||$(C)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),c(C)):K(C)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),X(e,p,"whitespace")(C)):C===96&&C===l?t(C):(e.consume(C),f)}function p(C){return C===null||$(C)?c(C):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),g(C))}function g(C){return C===null||$(C)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),c(C)):C===96&&C===l?t(C):(e.consume(C),g)}function x(C){return e.attempt(i,E,b)(C)}function b(C){return e.enter("lineEnding"),e.consume(C),e.exit("lineEnding"),m}function m(C){return a>0&&K(C)?X(e,h,"linePrefix",a+1)(C):h(C)}function h(C){return C===null||$(C)?e.check(Dd,x,E)(C):(e.enter("codeFlowValue"),v(C))}function v(C){return C===null||$(C)?(e.exit("codeFlowValue"),h(C)):(e.consume(C),v)}function E(C){return e.exit("codeFenced"),n(C)}function P(C,z,I){let R=0;return S;function S(N){return C.enter("lineEnding"),C.consume(N),C.exit("lineEnding"),j}function j(N){return C.enter("codeFencedFence"),K(N)?X(C,F,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(N):F(N)}function F(N){return N===l?(C.enter("codeFencedFenceSequence"),W(N)):I(N)}function W(N){return N===l?(R++,C.consume(N),W):R>=o?(C.exit("codeFencedFenceSequence"),K(N)?X(C,Z,"whitespace")(N):Z(N)):I(N)}function Z(N){return N===null||$(N)?(C.exit("codeFencedFence"),z(N)):I(N)}}}function Lk(e,n,t){const r=this;return i;function i(o){return o===null?t(o):(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),a)}function a(o){return r.parser.lazy[r.now().line]?t(o):n(o)}}const ul={name:"codeIndented",tokenize:Tk},Ok={partial:!0,tokenize:Ik};function Tk(e,n,t){const r=this;return i;function i(u){return e.enter("codeIndented"),X(e,a,"linePrefix",5)(u)}function a(u){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?o(u):t(u)}function o(u){return u===null?s(u):$(u)?e.attempt(Ok,o,s)(u):(e.enter("codeFlowValue"),l(u))}function l(u){return u===null||$(u)?(e.exit("codeFlowValue"),o(u)):(e.consume(u),l)}function s(u){return e.exit("codeIndented"),n(u)}}function Ik(e,n,t){const r=this;return i;function i(o){return r.parser.lazy[r.now().line]?t(o):$(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),i):X(e,a,"linePrefix",5)(o)}function a(o){const l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?n(o):$(o)?i(o):t(o)}}const Ak={name:"codeText",previous:jk,resolve:Dk,tokenize:Nk};function Dk(e){let n=e.length-4,t=3,r,i;if((e[t][1].type==="lineEnding"||e[t][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(r=t;++r<n;)if(e[r][1].type==="codeTextData"){e[t][1].type="codeTextPadding",e[n][1].type="codeTextPadding",t+=2,n-=2;break}}for(r=t-1,n++;++r<=n;)i===void 0?r!==n&&e[r][1].type!=="lineEnding"&&(i=r):(r===n||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),n-=r-i-2,r=i+2),i=void 0);return e}function jk(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Nk(e,n,t){let r=0,i,a;return o;function o(c){return e.enter("codeText"),e.enter("codeTextSequence"),l(c)}function l(c){return c===96?(e.consume(c),r++,l):(e.exit("codeTextSequence"),s(c))}function s(c){return c===null?t(c):c===32?(e.enter("space"),e.consume(c),e.exit("space"),s):c===96?(a=e.enter("codeTextSequence"),i=0,d(c)):$(c)?(e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),s):(e.enter("codeTextData"),u(c))}function u(c){return c===null||c===32||c===96||$(c)?(e.exit("codeTextData"),s(c)):(e.consume(c),u)}function d(c){return c===96?(e.consume(c),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),n(c)):(a.type="codeTextData",u(c))}}class Rk{constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,t){const r=t??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(n,r):n>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(n,t,r){const i=t||0;this.setCursor(Math.trunc(n));const a=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&Mr(this.left,r),a.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(n){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(n)}pushMany(n){this.setCursor(Number.POSITIVE_INFINITY),Mr(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),Mr(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){const t=this.left.splice(n,Number.POSITIVE_INFINITY);Mr(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-n,Number.POSITIVE_INFINITY);Mr(this.left,t.reverse())}}}function Mr(e,n){let t=0;if(n.length<1e4)e.push(...n);else for(;t<n.length;)e.push(...n.slice(t,t+1e4)),t+=1e4}function mh(e){const n={};let t=-1,r,i,a,o,l,s,u;const d=new Rk(e);for(;++t<d.length;){for(;t in n;)t=n[t];if(r=d.get(t),t&&r[1].type==="chunkFlow"&&d.get(t-1)[1].type==="listItemPrefix"&&(s=r[1]._tokenizer.events,a=0,a<s.length&&s[a][1].type==="lineEndingBlank"&&(a+=2),a<s.length&&s[a][1].type==="content"))for(;++a<s.length&&s[a][1].type!=="content";)s[a][1].type==="chunkText"&&(s[a][1]._isInFirstContentOfListItem=!0,a++);if(r[0]==="enter")r[1].contentType&&(Object.assign(n,Mk(d,t)),t=n[t],u=!0);else if(r[1]._container){for(a=t,i=void 0;a--;)if(o=d.get(a),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),o[1].type="lineEnding",i=a);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},l=d.slice(i,t),l.unshift(r),d.splice(i,t-i+1,l))}}return Ze(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function Mk(e,n){const t=e.get(n)[1],r=e.get(n)[2];let i=n-1;const a=[];let o=t._tokenizer;o||(o=r.parser[t.contentType](t.start),t._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));const l=o.events,s=[],u={};let d,c,f=-1,p=t,g=0,x=0;const b=[x];for(;p;){for(;e.get(++i)[1]!==p;);a.push(i),p._tokenizer||(d=r.sliceStream(p),p.next||d.push(null),c&&o.defineSkip(p.start),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(d),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),c=p,p=p.next}for(p=t;++f<l.length;)l[f][0]==="exit"&&l[f-1][0]==="enter"&&l[f][1].type===l[f-1][1].type&&l[f][1].start.line!==l[f][1].end.line&&(x=f+1,b.push(x),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(o.events=[],p?(p._tokenizer=void 0,p.previous=void 0):b.pop(),f=b.length;f--;){const m=l.slice(b[f],b[f+1]),h=a.pop();s.push([h,h+m.length-1]),e.splice(h,2,m)}for(s.reverse(),f=-1;++f<s.length;)u[g+s[f][0]]=g+s[f][1],g+=s[f][1]-s[f][0]-1;return u}const Fk={resolve:qk,tokenize:Uk},Bk={partial:!0,tokenize:$k};function qk(e){return mh(e),e}function Uk(e,n){let t;return r;function r(l){return e.enter("content"),t=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?a(l):$(l)?e.check(Bk,o,a)(l):(e.consume(l),i)}function a(l){return e.exit("chunkContent"),e.exit("content"),n(l)}function o(l){return e.consume(l),e.exit("chunkContent"),t.next=e.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,i}}function $k(e,n,t){const r=this;return i;function i(o){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),X(e,a,"linePrefix")}function a(o){if(o===null||$(o))return t(o);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?n(o):e.interrupt(r.parser.constructs.flow,t,n)(o)}}function hh(e,n,t,r,i,a,o,l,s){const u=s||Number.POSITIVE_INFINITY;let d=0;return c;function c(m){return m===60?(e.enter(r),e.enter(i),e.enter(a),e.consume(m),e.exit(a),f):m===null||m===32||m===41||eo(m)?t(m):(e.enter(r),e.enter(o),e.enter(l),e.enter("chunkString",{contentType:"string"}),x(m))}function f(m){return m===62?(e.enter(a),e.consume(m),e.exit(a),e.exit(i),e.exit(r),n):(e.enter(l),e.enter("chunkString",{contentType:"string"}),p(m))}function p(m){return m===62?(e.exit("chunkString"),e.exit(l),f(m)):m===null||m===60||$(m)?t(m):(e.consume(m),m===92?g:p)}function g(m){return m===60||m===62||m===92?(e.consume(m),p):p(m)}function x(m){return!d&&(m===null||m===41||re(m))?(e.exit("chunkString"),e.exit(l),e.exit(o),e.exit(r),n(m)):d<u&&m===40?(e.consume(m),d++,x):m===41?(e.consume(m),d--,x):m===null||m===32||m===40||eo(m)?t(m):(e.consume(m),m===92?b:x)}function b(m){return m===40||m===41||m===92?(e.consume(m),x):x(m)}}function gh(e,n,t,r,i,a){const o=this;let l=0,s;return u;function u(p){return e.enter(r),e.enter(i),e.consume(p),e.exit(i),e.enter(a),d}function d(p){return l>999||p===null||p===91||p===93&&!s||p===94&&!l&&"_hiddenFootnoteSupport"in o.parser.constructs?t(p):p===93?(e.exit(a),e.enter(i),e.consume(p),e.exit(i),e.exit(r),n):$(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),c(p))}function c(p){return p===null||p===91||p===93||$(p)||l++>999?(e.exit("chunkString"),d(p)):(e.consume(p),s||(s=!K(p)),p===92?f:c)}function f(p){return p===91||p===92||p===93?(e.consume(p),l++,c):c(p)}}function vh(e,n,t,r,i,a){let o;return l;function l(f){return f===34||f===39||f===40?(e.enter(r),e.enter(i),e.consume(f),e.exit(i),o=f===40?41:f,s):t(f)}function s(f){return f===o?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),n):(e.enter(a),u(f))}function u(f){return f===o?(e.exit(a),s(o)):f===null?t(f):$(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),X(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(f))}function d(f){return f===o||f===null||$(f)?(e.exit("chunkString"),u(f)):(e.consume(f),f===92?c:d)}function c(f){return f===o||f===92?(e.consume(f),d):d(f)}}function ni(e,n){let t;return r;function r(i){return $(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),t=!0,r):K(i)?X(e,r,t?"linePrefix":"lineSuffix")(i):n(i)}}const Vk={name:"definition",tokenize:Hk},Qk={partial:!0,tokenize:Wk};function Hk(e,n,t){const r=this;let i;return a;function a(p){return e.enter("definition"),o(p)}function o(p){return gh.call(r,e,l,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function l(p){return i=kn(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),s):t(p)}function s(p){return re(p)?ni(e,u)(p):u(p)}function u(p){return hh(e,d,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function d(p){return e.attempt(Qk,c,c)(p)}function c(p){return K(p)?X(e,f,"whitespace")(p):f(p)}function f(p){return p===null||$(p)?(e.exit("definition"),r.parser.defined.push(i),n(p)):t(p)}}function Wk(e,n,t){return r;function r(l){return re(l)?ni(e,i)(l):t(l)}function i(l){return vh(e,a,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function a(l){return K(l)?X(e,o,"whitespace")(l):o(l)}function o(l){return l===null||$(l)?n(l):t(l)}}const Kk={name:"hardBreakEscape",tokenize:Gk};function Gk(e,n,t){return r;function r(a){return e.enter("hardBreakEscape"),e.consume(a),i}function i(a){return $(a)?(e.exit("hardBreakEscape"),n(a)):t(a)}}const Yk={name:"headingAtx",resolve:Xk,tokenize:Jk};function Xk(e,n){let t=e.length-2,r=3,i,a;return e[r][1].type==="whitespace"&&(r+=2),t-2>r&&e[t][1].type==="whitespace"&&(t-=2),e[t][1].type==="atxHeadingSequence"&&(r===t-1||t-4>r&&e[t-2][1].type==="whitespace")&&(t-=r+1===t?2:4),t>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[t][1].end},a={type:"chunkText",start:e[r][1].start,end:e[t][1].end,contentType:"text"},Ze(e,r,t-r+1,[["enter",i,n],["enter",a,n],["exit",a,n],["exit",i,n]])),e}function Jk(e,n,t){let r=0;return i;function i(d){return e.enter("atxHeading"),a(d)}function a(d){return e.enter("atxHeadingSequence"),o(d)}function o(d){return d===35&&r++<6?(e.consume(d),o):d===null||re(d)?(e.exit("atxHeadingSequence"),l(d)):t(d)}function l(d){return d===35?(e.enter("atxHeadingSequence"),s(d)):d===null||$(d)?(e.exit("atxHeading"),n(d)):K(d)?X(e,l,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function s(d){return d===35?(e.consume(d),s):(e.exit("atxHeadingSequence"),l(d))}function u(d){return d===null||d===35||re(d)?(e.exit("atxHeadingText"),l(d)):(e.consume(d),u)}}const Zk=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Nd=["pre","script","style","textarea"],ew={concrete:!0,name:"htmlFlow",resolveTo:rw,tokenize:iw},nw={partial:!0,tokenize:ow},tw={partial:!0,tokenize:aw};function rw(e){let n=e.length;for(;n--&&!(e[n][0]==="enter"&&e[n][1].type==="htmlFlow"););return n>1&&e[n-2][1].type==="linePrefix"&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2)),e}function iw(e,n,t){const r=this;let i,a,o,l,s;return u;function u(k){return d(k)}function d(k){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(k),c}function c(k){return k===33?(e.consume(k),f):k===47?(e.consume(k),a=!0,x):k===63?(e.consume(k),i=3,r.interrupt?n:y):je(k)?(e.consume(k),o=String.fromCharCode(k),b):t(k)}function f(k){return k===45?(e.consume(k),i=2,p):k===91?(e.consume(k),i=5,l=0,g):je(k)?(e.consume(k),i=4,r.interrupt?n:y):t(k)}function p(k){return k===45?(e.consume(k),r.interrupt?n:y):t(k)}function g(k){const oe="CDATA[";return k===oe.charCodeAt(l++)?(e.consume(k),l===oe.length?r.interrupt?n:F:g):t(k)}function x(k){return je(k)?(e.consume(k),o=String.fromCharCode(k),b):t(k)}function b(k){if(k===null||k===47||k===62||re(k)){const oe=k===47,ke=o.toLowerCase();return!oe&&!a&&Nd.includes(ke)?(i=1,r.interrupt?n(k):F(k)):Zk.includes(o.toLowerCase())?(i=6,oe?(e.consume(k),m):r.interrupt?n(k):F(k)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?t(k):a?h(k):v(k))}return k===45||Oe(k)?(e.consume(k),o+=String.fromCharCode(k),b):t(k)}function m(k){return k===62?(e.consume(k),r.interrupt?n:F):t(k)}function h(k){return K(k)?(e.consume(k),h):S(k)}function v(k){return k===47?(e.consume(k),S):k===58||k===95||je(k)?(e.consume(k),E):K(k)?(e.consume(k),v):S(k)}function E(k){return k===45||k===46||k===58||k===95||Oe(k)?(e.consume(k),E):P(k)}function P(k){return k===61?(e.consume(k),C):K(k)?(e.consume(k),P):v(k)}function C(k){return k===null||k===60||k===61||k===62||k===96?t(k):k===34||k===39?(e.consume(k),s=k,z):K(k)?(e.consume(k),C):I(k)}function z(k){return k===s?(e.consume(k),s=null,R):k===null||$(k)?t(k):(e.consume(k),z)}function I(k){return k===null||k===34||k===39||k===47||k===60||k===61||k===62||k===96||re(k)?P(k):(e.consume(k),I)}function R(k){return k===47||k===62||K(k)?v(k):t(k)}function S(k){return k===62?(e.consume(k),j):t(k)}function j(k){return k===null||$(k)?F(k):K(k)?(e.consume(k),j):t(k)}function F(k){return k===45&&i===2?(e.consume(k),V):k===60&&i===1?(e.consume(k),ee):k===62&&i===4?(e.consume(k),B):k===63&&i===3?(e.consume(k),y):k===93&&i===5?(e.consume(k),q):$(k)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(nw,U,W)(k)):k===null||$(k)?(e.exit("htmlFlowData"),W(k)):(e.consume(k),F)}function W(k){return e.check(tw,Z,U)(k)}function Z(k){return e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),N}function N(k){return k===null||$(k)?W(k):(e.enter("htmlFlowData"),F(k))}function V(k){return k===45?(e.consume(k),y):F(k)}function ee(k){return k===47?(e.consume(k),o="",A):F(k)}function A(k){if(k===62){const oe=o.toLowerCase();return Nd.includes(oe)?(e.consume(k),B):F(k)}return je(k)&&o.length<8?(e.consume(k),o+=String.fromCharCode(k),A):F(k)}function q(k){return k===93?(e.consume(k),y):F(k)}function y(k){return k===62?(e.consume(k),B):k===45&&i===2?(e.consume(k),y):F(k)}function B(k){return k===null||$(k)?(e.exit("htmlFlowData"),U(k)):(e.consume(k),B)}function U(k){return e.exit("htmlFlow"),n(k)}}function aw(e,n,t){const r=this;return i;function i(o){return $(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),a):t(o)}function a(o){return r.parser.lazy[r.now().line]?t(o):n(o)}}function ow(e,n,t){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Di,n,t)}}const lw={name:"htmlText",tokenize:sw};function sw(e,n,t){const r=this;let i,a,o;return l;function l(y){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(y),s}function s(y){return y===33?(e.consume(y),u):y===47?(e.consume(y),P):y===63?(e.consume(y),v):je(y)?(e.consume(y),I):t(y)}function u(y){return y===45?(e.consume(y),d):y===91?(e.consume(y),a=0,g):je(y)?(e.consume(y),h):t(y)}function d(y){return y===45?(e.consume(y),p):t(y)}function c(y){return y===null?t(y):y===45?(e.consume(y),f):$(y)?(o=c,ee(y)):(e.consume(y),c)}function f(y){return y===45?(e.consume(y),p):c(y)}function p(y){return y===62?V(y):y===45?f(y):c(y)}function g(y){const B="CDATA[";return y===B.charCodeAt(a++)?(e.consume(y),a===B.length?x:g):t(y)}function x(y){return y===null?t(y):y===93?(e.consume(y),b):$(y)?(o=x,ee(y)):(e.consume(y),x)}function b(y){return y===93?(e.consume(y),m):x(y)}function m(y){return y===62?V(y):y===93?(e.consume(y),m):x(y)}function h(y){return y===null||y===62?V(y):$(y)?(o=h,ee(y)):(e.consume(y),h)}function v(y){return y===null?t(y):y===63?(e.consume(y),E):$(y)?(o=v,ee(y)):(e.consume(y),v)}function E(y){return y===62?V(y):v(y)}function P(y){return je(y)?(e.consume(y),C):t(y)}function C(y){return y===45||Oe(y)?(e.consume(y),C):z(y)}function z(y){return $(y)?(o=z,ee(y)):K(y)?(e.consume(y),z):V(y)}function I(y){return y===45||Oe(y)?(e.consume(y),I):y===47||y===62||re(y)?R(y):t(y)}function R(y){return y===47?(e.consume(y),V):y===58||y===95||je(y)?(e.consume(y),S):$(y)?(o=R,ee(y)):K(y)?(e.consume(y),R):V(y)}function S(y){return y===45||y===46||y===58||y===95||Oe(y)?(e.consume(y),S):j(y)}function j(y){return y===61?(e.consume(y),F):$(y)?(o=j,ee(y)):K(y)?(e.consume(y),j):R(y)}function F(y){return y===null||y===60||y===61||y===62||y===96?t(y):y===34||y===39?(e.consume(y),i=y,W):$(y)?(o=F,ee(y)):K(y)?(e.consume(y),F):(e.consume(y),Z)}function W(y){return y===i?(e.consume(y),i=void 0,N):y===null?t(y):$(y)?(o=W,ee(y)):(e.consume(y),W)}function Z(y){return y===null||y===34||y===39||y===60||y===61||y===96?t(y):y===47||y===62||re(y)?R(y):(e.consume(y),Z)}function N(y){return y===47||y===62||re(y)?R(y):t(y)}function V(y){return y===62?(e.consume(y),e.exit("htmlTextData"),e.exit("htmlText"),n):t(y)}function ee(y){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(y),e.exit("lineEnding"),A}function A(y){return K(y)?X(e,q,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(y):q(y)}function q(y){return e.enter("htmlTextData"),o(y)}}const qu={name:"labelEnd",resolveAll:fw,resolveTo:pw,tokenize:mw},uw={tokenize:hw},cw={tokenize:gw},dw={tokenize:vw};function fw(e){let n=-1;const t=[];for(;++n<e.length;){const r=e[n][1];if(t.push(e[n]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",n+=i}}return e.length!==t.length&&Ze(e,0,e.length,t),e}function pw(e,n){let t=e.length,r=0,i,a,o,l;for(;t--;)if(i=e[t][1],a){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[t][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(o){if(e[t][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(a=t,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(o=t);const s={type:e[a][1].type==="labelLink"?"link":"image",start:{...e[a][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[a][1].start},end:{...e[o][1].end}},d={type:"labelText",start:{...e[a+r+2][1].end},end:{...e[o-2][1].start}};return l=[["enter",s,n],["enter",u,n]],l=on(l,e.slice(a+1,a+r+3)),l=on(l,[["enter",d,n]]),l=on(l,_o(n.parser.constructs.insideSpan.null,e.slice(a+r+4,o-3),n)),l=on(l,[["exit",d,n],e[o-2],e[o-1],["exit",u,n]]),l=on(l,e.slice(o+1)),l=on(l,[["exit",s,n]]),Ze(e,a,e.length,l),e}function mw(e,n,t){const r=this;let i=r.events.length,a,o;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){a=r.events[i][1];break}return l;function l(f){return a?a._inactive?c(f):(o=r.parser.defined.includes(kn(r.sliceSerialize({start:a.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),s):t(f)}function s(f){return f===40?e.attempt(uw,d,o?d:c)(f):f===91?e.attempt(cw,d,o?u:c)(f):o?d(f):c(f)}function u(f){return e.attempt(dw,d,c)(f)}function d(f){return n(f)}function c(f){return a._balanced=!0,t(f)}}function hw(e,n,t){return r;function r(c){return e.enter("resource"),e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),i}function i(c){return re(c)?ni(e,a)(c):a(c)}function a(c){return c===41?d(c):hh(e,o,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(c)}function o(c){return re(c)?ni(e,s)(c):d(c)}function l(c){return t(c)}function s(c){return c===34||c===39||c===40?vh(e,u,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(c):d(c)}function u(c){return re(c)?ni(e,d)(c):d(c)}function d(c){return c===41?(e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),e.exit("resource"),n):t(c)}}function gw(e,n,t){const r=this;return i;function i(l){return gh.call(r,e,a,o,"reference","referenceMarker","referenceString")(l)}function a(l){return r.parser.defined.includes(kn(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?n(l):t(l)}function o(l){return t(l)}}function vw(e,n,t){return r;function r(a){return e.enter("reference"),e.enter("referenceMarker"),e.consume(a),e.exit("referenceMarker"),i}function i(a){return a===93?(e.enter("referenceMarker"),e.consume(a),e.exit("referenceMarker"),e.exit("reference"),n):t(a)}}const yw={name:"labelStartImage",resolveAll:qu.resolveAll,tokenize:xw};function xw(e,n,t){const r=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),a}function a(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),o):t(l)}function o(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(l):n(l)}}const kw={name:"labelStartLink",resolveAll:qu.resolveAll,tokenize:ww};function ww(e,n,t){const r=this;return i;function i(o){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),e.exit("labelLink"),a}function a(o){return o===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(o):n(o)}}const cl={name:"lineEnding",tokenize:Sw};function Sw(e,n){return t;function t(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),X(e,n,"linePrefix")}}const ka={name:"thematicBreak",tokenize:Cw};function Cw(e,n,t){let r=0,i;return a;function a(u){return e.enter("thematicBreak"),o(u)}function o(u){return i=u,l(u)}function l(u){return u===i?(e.enter("thematicBreakSequence"),s(u)):r>=3&&(u===null||$(u))?(e.exit("thematicBreak"),n(u)):t(u)}function s(u){return u===i?(e.consume(u),r++,s):(e.exit("thematicBreakSequence"),K(u)?X(e,l,"whitespace")(u):l(u))}}const Fe={continuation:{tokenize:_w},exit:Lw,name:"list",tokenize:Pw},Ew={partial:!0,tokenize:Ow},bw={partial:!0,tokenize:zw};function Pw(e,n,t){const r=this,i=r.events[r.events.length-1];let a=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return l;function l(p){const g=r.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(g==="listUnordered"?!r.containerState.marker||p===r.containerState.marker:zs(p)){if(r.containerState.type||(r.containerState.type=g,e.enter(g,{_container:!0})),g==="listUnordered")return e.enter("listItemPrefix"),p===42||p===45?e.check(ka,t,u)(p):u(p);if(!r.interrupt||p===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),s(p)}return t(p)}function s(p){return zs(p)&&++o<10?(e.consume(p),s):(!r.interrupt||o<2)&&(r.containerState.marker?p===r.containerState.marker:p===41||p===46)?(e.exit("listItemValue"),u(p)):t(p)}function u(p){return e.enter("listItemMarker"),e.consume(p),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||p,e.check(Di,r.interrupt?t:d,e.attempt(Ew,f,c))}function d(p){return r.containerState.initialBlankLine=!0,a++,f(p)}function c(p){return K(p)?(e.enter("listItemPrefixWhitespace"),e.consume(p),e.exit("listItemPrefixWhitespace"),f):t(p)}function f(p){return r.containerState.size=a+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(p)}}function _w(e,n,t){const r=this;return r.containerState._closeFlow=void 0,e.check(Di,i,a);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,X(e,n,"listItemIndent",r.containerState.size+1)(l)}function a(l){return r.containerState.furtherBlankLines||!K(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(bw,n,o)(l))}function o(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,X(e,e.attempt(Fe,n,t),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function zw(e,n,t){const r=this;return X(e,i,"listItemIndent",r.containerState.size+1);function i(a){const o=r.events[r.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?n(a):t(a)}}function Lw(e){e.exit(this.containerState.type)}function Ow(e,n,t){const r=this;return X(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(a){const o=r.events[r.events.length-1];return!K(a)&&o&&o[1].type==="listItemPrefixWhitespace"?n(a):t(a)}}const Rd={name:"setextUnderline",resolveTo:Tw,tokenize:Iw};function Tw(e,n){let t=e.length,r,i,a;for(;t--;)if(e[t][0]==="enter"){if(e[t][1].type==="content"){r=t;break}e[t][1].type==="paragraph"&&(i=t)}else e[t][1].type==="content"&&e.splice(t,1),!a&&e[t][1].type==="definition"&&(a=t);const o={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",a?(e.splice(i,0,["enter",o,n]),e.splice(a+1,0,["exit",e[r][1],n]),e[r][1].end={...e[a][1].end}):e[r][1]=o,e.push(["exit",o,n]),e}function Iw(e,n,t){const r=this;let i;return a;function a(u){let d=r.events.length,c;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){c=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||c)?(e.enter("setextHeadingLine"),i=u,o(u)):t(u)}function o(u){return e.enter("setextHeadingLineSequence"),l(u)}function l(u){return u===i?(e.consume(u),l):(e.exit("setextHeadingLineSequence"),K(u)?X(e,s,"lineSuffix")(u):s(u))}function s(u){return u===null||$(u)?(e.exit("setextHeadingLine"),n(u)):t(u)}}const Aw={tokenize:Dw};function Dw(e){const n=this,t=e.attempt(Di,r,e.attempt(this.parser.constructs.flowInitial,i,X(e,e.attempt(this.parser.constructs.flow,i,e.attempt(Fk,i)),"linePrefix")));return t;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEndingBlank"),e.consume(a),e.exit("lineEndingBlank"),n.currentConstruct=void 0,t}function i(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),n.currentConstruct=void 0,t}}const jw={resolveAll:xh()},Nw=yh("string"),Rw=yh("text");function yh(e){return{resolveAll:xh(e==="text"?Mw:void 0),tokenize:n};function n(t){const r=this,i=this.parser.constructs[e],a=t.attempt(i,o,l);return o;function o(d){return u(d)?a(d):l(d)}function l(d){if(d===null){t.consume(d);return}return t.enter("data"),t.consume(d),s}function s(d){return u(d)?(t.exit("data"),a(d)):(t.consume(d),s)}function u(d){if(d===null)return!0;const c=i[d];let f=-1;if(c)for(;++f<c.length;){const p=c[f];if(!p.previous||p.previous.call(r,r.previous))return!0}return!1}}}function xh(e){return n;function n(t,r){let i=-1,a;for(;++i<=t.length;)a===void 0?t[i]&&t[i][1].type==="data"&&(a=i,i++):(!t[i]||t[i][1].type!=="data")&&(i!==a+2&&(t[a][1].end=t[i-1][1].end,t.splice(a+2,i-a-2),i=a+2),a=void 0);return e?e(t,r):t}}function Mw(e,n){let t=0;for(;++t<=e.length;)if((t===e.length||e[t][1].type==="lineEnding")&&e[t-1][1].type==="data"){const r=e[t-1][1],i=n.sliceStream(r);let a=i.length,o=-1,l=0,s;for(;a--;){const u=i[a];if(typeof u=="string"){for(o=u.length;u.charCodeAt(o-1)===32;)l++,o--;if(o)break;o=-1}else if(u===-2)s=!0,l++;else if(u!==-1){a++;break}}if(n._contentTypeTextTrailing&&t===e.length&&(l=0),l){const u={type:t===e.length||s||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:a?o:r.start._bufferIndex+o,_index:r.start._index+a,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(t,0,["enter",u,n],["exit",u,n]),t+=2)}t++}return e}const Fw={42:Fe,43:Fe,45:Fe,48:Fe,49:Fe,50:Fe,51:Fe,52:Fe,53:Fe,54:Fe,55:Fe,56:Fe,57:Fe,62:dh},Bw={91:Vk},qw={[-2]:ul,[-1]:ul,32:ul},Uw={35:Yk,42:ka,45:[Rd,ka],60:ew,61:Rd,95:ka,96:jd,126:jd},$w={38:ph,92:fh},Vw={[-5]:cl,[-4]:cl,[-3]:cl,33:yw,38:ph,42:Ls,60:[kk,lw],91:kw,92:[Kk,fh],93:qu,95:Ls,96:Ak},Qw={null:[Ls,jw]},Hw={null:[42,95]},Ww={null:[]},Kw=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Hw,contentInitial:Bw,disable:Ww,document:Fw,flow:Uw,flowInitial:qw,insideSpan:Qw,string:$w,text:Vw},Symbol.toStringTag,{value:"Module"}));function Gw(e,n,t){let r={_bufferIndex:-1,_index:0,line:t&&t.line||1,column:t&&t.column||1,offset:t&&t.offset||0};const i={},a=[];let o=[],l=[];const s={attempt:z(P),check:z(C),consume:h,enter:v,exit:E,interrupt:z(C,{interrupt:!0})},u={code:null,containerState:{},defineSkip:x,events:[],now:g,parser:e,previous:null,sliceSerialize:f,sliceStream:p,write:c};let d=n.tokenize.call(u,s);return n.resolveAll&&a.push(n),u;function c(j){return o=on(o,j),b(),o[o.length-1]!==null?[]:(I(n,0),u.events=_o(a,u.events,u),u.events)}function f(j,F){return Xw(p(j),F)}function p(j){return Yw(o,j)}function g(){const{_bufferIndex:j,_index:F,line:W,column:Z,offset:N}=r;return{_bufferIndex:j,_index:F,line:W,column:Z,offset:N}}function x(j){i[j.line]=j.column,S()}function b(){let j;for(;r._index<o.length;){const F=o[r._index];if(typeof F=="string")for(j=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===j&&r._bufferIndex<F.length;)m(F.charCodeAt(r._bufferIndex));else m(F)}}function m(j){d=d(j)}function h(j){$(j)?(r.line++,r.column=1,r.offset+=j===-3?2:1,S()):j!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=j}function v(j,F){const W=F||{};return W.type=j,W.start=g(),u.events.push(["enter",W,u]),l.push(W),W}function E(j){const F=l.pop();return F.end=g(),u.events.push(["exit",F,u]),F}function P(j,F){I(j,F.from)}function C(j,F){F.restore()}function z(j,F){return W;function W(Z,N,V){let ee,A,q,y;return Array.isArray(Z)?U(Z):"tokenize"in Z?U([Z]):B(Z);function B(le){return Sn;function Sn($n){const Ft=$n!==null&&le[$n],Bt=$n!==null&&le.null,Ri=[...Array.isArray(Ft)?Ft:Ft?[Ft]:[],...Array.isArray(Bt)?Bt:Bt?[Bt]:[]];return U(Ri)($n)}}function U(le){return ee=le,A=0,le.length===0?V:k(le[A])}function k(le){return Sn;function Sn($n){return y=R(),q=le,le.partial||(u.currentConstruct=le),le.name&&u.parser.constructs.disable.null.includes(le.name)?ke():le.tokenize.call(F?Object.assign(Object.create(u),F):u,s,oe,ke)($n)}}function oe(le){return j(q,y),N}function ke(le){return y.restore(),++A<ee.length?k(ee[A]):V}}}function I(j,F){j.resolveAll&&!a.includes(j)&&a.push(j),j.resolve&&Ze(u.events,F,u.events.length-F,j.resolve(u.events.slice(F),u)),j.resolveTo&&(u.events=j.resolveTo(u.events,u))}function R(){const j=g(),F=u.previous,W=u.currentConstruct,Z=u.events.length,N=Array.from(l);return{from:Z,restore:V};function V(){r=j,u.previous=F,u.currentConstruct=W,u.events.length=Z,l=N,S()}}function S(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function Yw(e,n){const t=n.start._index,r=n.start._bufferIndex,i=n.end._index,a=n.end._bufferIndex;let o;if(t===i)o=[e[t].slice(r,a)];else{if(o=e.slice(t,i),r>-1){const l=o[0];typeof l=="string"?o[0]=l.slice(r):o.shift()}a>0&&o.push(e[i].slice(0,a))}return o}function Xw(e,n){let t=-1;const r=[];let i;for(;++t<e.length;){const a=e[t];let o;if(typeof a=="string")o=a;else switch(a){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=n?" ":"	";break}case-1:{if(!n&&i)continue;o=" ";break}default:o=String.fromCharCode(a)}i=a===-2,r.push(o)}return r.join("")}function Jw(e){const r={constructs:uh([Kw,...(e||{}).extensions||[]]),content:i(pk),defined:[],document:i(hk),flow:i(Aw),lazy:{},string:i(Nw),text:i(Rw)};return r;function i(a){return o;function o(l){return Gw(r,a,l)}}}function Zw(e){for(;!mh(e););return e}const Md=/[\0\t\n\r]/g;function eS(){let e=1,n="",t=!0,r;return i;function i(a,o,l){const s=[];let u,d,c,f,p;for(a=n+(typeof a=="string"?a.toString():new TextDecoder(o||void 0).decode(a)),c=0,n="",t&&(a.charCodeAt(0)===65279&&c++,t=void 0);c<a.length;){if(Md.lastIndex=c,u=Md.exec(a),f=u&&u.index!==void 0?u.index:a.length,p=a.charCodeAt(f),!u){n=a.slice(c);break}if(p===10&&c===f&&r)s.push(-3),r=void 0;else switch(r&&(s.push(-5),r=void 0),c<f&&(s.push(a.slice(c,f)),e+=f-c),p){case 0:{s.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,s.push(-2);e++<d;)s.push(-1);break}case 10:{s.push(-4),e=1;break}default:r=!0,e=1}c=f+1}return l&&(r&&s.push(-5),n&&s.push(n),s.push(null)),s}}const nS=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function tS(e){return e.replace(nS,rS)}function rS(e,n,t){if(n)return n;if(t.charCodeAt(0)===35){const i=t.charCodeAt(1),a=i===120||i===88;return ch(t.slice(a?2:1),a?16:10)}return Bu(t)||e}const kh={}.hasOwnProperty;function iS(e,n,t){return typeof n!="string"&&(t=n,n=void 0),aS(t)(Zw(Jw(t).document().write(eS()(e,n,!0))))}function aS(e){const n={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:a(ec),autolinkProtocol:R,autolinkEmail:R,atxHeading:a(Xu),blockQuote:a(Bt),characterEscape:R,characterReference:R,codeFenced:a(Ri),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:a(Ri,o),codeText:a(ug,o),codeTextData:R,data:R,codeFlowValue:R,definition:a(cg),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:a(dg),hardBreakEscape:a(Ju),hardBreakTrailing:a(Ju),htmlFlow:a(Zu,o),htmlFlowData:R,htmlText:a(Zu,o),htmlTextData:R,image:a(fg),label:o,link:a(ec),listItem:a(pg),listItemValue:f,listOrdered:a(nc,c),listUnordered:a(nc),paragraph:a(mg),reference:k,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:a(Xu),strong:a(hg),thematicBreak:a(vg)},exit:{atxHeading:s(),atxHeadingSequence:P,autolink:s(),autolinkEmail:Ft,autolinkProtocol:$n,blockQuote:s(),characterEscapeValue:S,characterReferenceMarkerHexadecimal:ke,characterReferenceMarkerNumeric:ke,characterReferenceValue:le,characterReference:Sn,codeFenced:s(b),codeFencedFence:x,codeFencedFenceInfo:p,codeFencedFenceMeta:g,codeFlowValue:S,codeIndented:s(m),codeText:s(N),codeTextData:S,data:S,definition:s(),definitionDestinationString:E,definitionLabelString:h,definitionTitleString:v,emphasis:s(),hardBreakEscape:s(F),hardBreakTrailing:s(F),htmlFlow:s(W),htmlFlowData:S,htmlText:s(Z),htmlTextData:S,image:s(ee),label:q,labelText:A,lineEnding:j,link:s(V),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:oe,resourceDestinationString:y,resourceTitleString:B,resource:U,setextHeading:s(I),setextHeadingLineSequence:z,setextHeadingText:C,strong:s(),thematicBreak:s()}};wh(n,(e||{}).mdastExtensions||[]);const t={};return r;function r(_){let D={type:"root",children:[]};const Q={stack:[D],tokenStack:[],config:n,enter:l,exit:u,buffer:o,resume:d,data:t},Y=[];let te=-1;for(;++te<_.length;)if(_[te][1].type==="listOrdered"||_[te][1].type==="listUnordered")if(_[te][0]==="enter")Y.push(te);else{const dn=Y.pop();te=i(_,dn,te)}for(te=-1;++te<_.length;){const dn=n[_[te][0]];kh.call(dn,_[te][1].type)&&dn[_[te][1].type].call(Object.assign({sliceSerialize:_[te][2].sliceSerialize},Q),_[te][1])}if(Q.tokenStack.length>0){const dn=Q.tokenStack[Q.tokenStack.length-1];(dn[1]||Fd).call(Q,void 0,dn[0])}for(D.position={start:Hn(_.length>0?_[0][1].start:{line:1,column:1,offset:0}),end:Hn(_.length>0?_[_.length-2][1].end:{line:1,column:1,offset:0})},te=-1;++te<n.transforms.length;)D=n.transforms[te](D)||D;return D}function i(_,D,Q){let Y=D-1,te=-1,dn=!1,xt,On,_r,zr;for(;++Y<=Q;){const He=_[Y];switch(He[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{He[0]==="enter"?te++:te--,zr=void 0;break}case"lineEndingBlank":{He[0]==="enter"&&(xt&&!zr&&!te&&!_r&&(_r=Y),zr=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:zr=void 0}if(!te&&He[0]==="enter"&&He[1].type==="listItemPrefix"||te===-1&&He[0]==="exit"&&(He[1].type==="listUnordered"||He[1].type==="listOrdered")){if(xt){let qt=Y;for(On=void 0;qt--;){const Tn=_[qt];if(Tn[1].type==="lineEnding"||Tn[1].type==="lineEndingBlank"){if(Tn[0]==="exit")continue;On&&(_[On][1].type="lineEndingBlank",dn=!0),Tn[1].type="lineEnding",On=qt}else if(!(Tn[1].type==="linePrefix"||Tn[1].type==="blockQuotePrefix"||Tn[1].type==="blockQuotePrefixWhitespace"||Tn[1].type==="blockQuoteMarker"||Tn[1].type==="listItemIndent"))break}_r&&(!On||_r<On)&&(xt._spread=!0),xt.end=Object.assign({},On?_[On][1].start:He[1].end),_.splice(On||Y,0,["exit",xt,He[2]]),Y++,Q++}if(He[1].type==="listItemPrefix"){const qt={type:"listItem",_spread:!1,start:Object.assign({},He[1].start),end:void 0};xt=qt,_.splice(Y,0,["enter",qt,He[2]]),Y++,Q++,_r=void 0,zr=!0}}}return _[D][1]._spread=dn,Q}function a(_,D){return Q;function Q(Y){l.call(this,_(Y),Y),D&&D.call(this,Y)}}function o(){this.stack.push({type:"fragment",children:[]})}function l(_,D,Q){this.stack[this.stack.length-1].children.push(_),this.stack.push(_),this.tokenStack.push([D,Q||void 0]),_.position={start:Hn(D.start),end:void 0}}function s(_){return D;function D(Q){_&&_.call(this,Q),u.call(this,Q)}}function u(_,D){const Q=this.stack.pop(),Y=this.tokenStack.pop();if(Y)Y[0].type!==_.type&&(D?D.call(this,_,Y[0]):(Y[1]||Fd).call(this,_,Y[0]));else throw new Error("Cannot close `"+_.type+"` ("+ei({start:_.start,end:_.end})+"): it’s not open");Q.position.end=Hn(_.end)}function d(){return Fu(this.stack.pop())}function c(){this.data.expectingFirstListItemValue=!0}function f(_){if(this.data.expectingFirstListItemValue){const D=this.stack[this.stack.length-2];D.start=Number.parseInt(this.sliceSerialize(_),10),this.data.expectingFirstListItemValue=void 0}}function p(){const _=this.resume(),D=this.stack[this.stack.length-1];D.lang=_}function g(){const _=this.resume(),D=this.stack[this.stack.length-1];D.meta=_}function x(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function b(){const _=this.resume(),D=this.stack[this.stack.length-1];D.value=_.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function m(){const _=this.resume(),D=this.stack[this.stack.length-1];D.value=_.replace(/(\r?\n|\r)$/g,"")}function h(_){const D=this.resume(),Q=this.stack[this.stack.length-1];Q.label=D,Q.identifier=kn(this.sliceSerialize(_)).toLowerCase()}function v(){const _=this.resume(),D=this.stack[this.stack.length-1];D.title=_}function E(){const _=this.resume(),D=this.stack[this.stack.length-1];D.url=_}function P(_){const D=this.stack[this.stack.length-1];if(!D.depth){const Q=this.sliceSerialize(_).length;D.depth=Q}}function C(){this.data.setextHeadingSlurpLineEnding=!0}function z(_){const D=this.stack[this.stack.length-1];D.depth=this.sliceSerialize(_).codePointAt(0)===61?1:2}function I(){this.data.setextHeadingSlurpLineEnding=void 0}function R(_){const Q=this.stack[this.stack.length-1].children;let Y=Q[Q.length-1];(!Y||Y.type!=="text")&&(Y=gg(),Y.position={start:Hn(_.start),end:void 0},Q.push(Y)),this.stack.push(Y)}function S(_){const D=this.stack.pop();D.value+=this.sliceSerialize(_),D.position.end=Hn(_.end)}function j(_){const D=this.stack[this.stack.length-1];if(this.data.atHardBreak){const Q=D.children[D.children.length-1];Q.position.end=Hn(_.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(D.type)&&(R.call(this,_),S.call(this,_))}function F(){this.data.atHardBreak=!0}function W(){const _=this.resume(),D=this.stack[this.stack.length-1];D.value=_}function Z(){const _=this.resume(),D=this.stack[this.stack.length-1];D.value=_}function N(){const _=this.resume(),D=this.stack[this.stack.length-1];D.value=_}function V(){const _=this.stack[this.stack.length-1];if(this.data.inReference){const D=this.data.referenceType||"shortcut";_.type+="Reference",_.referenceType=D,delete _.url,delete _.title}else delete _.identifier,delete _.label;this.data.referenceType=void 0}function ee(){const _=this.stack[this.stack.length-1];if(this.data.inReference){const D=this.data.referenceType||"shortcut";_.type+="Reference",_.referenceType=D,delete _.url,delete _.title}else delete _.identifier,delete _.label;this.data.referenceType=void 0}function A(_){const D=this.sliceSerialize(_),Q=this.stack[this.stack.length-2];Q.label=tS(D),Q.identifier=kn(D).toLowerCase()}function q(){const _=this.stack[this.stack.length-1],D=this.resume(),Q=this.stack[this.stack.length-1];if(this.data.inReference=!0,Q.type==="link"){const Y=_.children;Q.children=Y}else Q.alt=D}function y(){const _=this.resume(),D=this.stack[this.stack.length-1];D.url=_}function B(){const _=this.resume(),D=this.stack[this.stack.length-1];D.title=_}function U(){this.data.inReference=void 0}function k(){this.data.referenceType="collapsed"}function oe(_){const D=this.resume(),Q=this.stack[this.stack.length-1];Q.label=D,Q.identifier=kn(this.sliceSerialize(_)).toLowerCase(),this.data.referenceType="full"}function ke(_){this.data.characterReferenceType=_.type}function le(_){const D=this.sliceSerialize(_),Q=this.data.characterReferenceType;let Y;Q?(Y=ch(D,Q==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Y=Bu(D);const te=this.stack[this.stack.length-1];te.value+=Y}function Sn(_){const D=this.stack.pop();D.position.end=Hn(_.end)}function $n(_){S.call(this,_);const D=this.stack[this.stack.length-1];D.url=this.sliceSerialize(_)}function Ft(_){S.call(this,_);const D=this.stack[this.stack.length-1];D.url="mailto:"+this.sliceSerialize(_)}function Bt(){return{type:"blockquote",children:[]}}function Ri(){return{type:"code",lang:null,meta:null,value:""}}function ug(){return{type:"inlineCode",value:""}}function cg(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function dg(){return{type:"emphasis",children:[]}}function Xu(){return{type:"heading",depth:0,children:[]}}function Ju(){return{type:"break"}}function Zu(){return{type:"html",value:""}}function fg(){return{type:"image",title:null,url:"",alt:null}}function ec(){return{type:"link",title:null,url:"",children:[]}}function nc(_){return{type:"list",ordered:_.type==="listOrdered",start:null,spread:_._spread,children:[]}}function pg(_){return{type:"listItem",spread:_._spread,checked:null,children:[]}}function mg(){return{type:"paragraph",children:[]}}function hg(){return{type:"strong",children:[]}}function gg(){return{type:"text",value:""}}function vg(){return{type:"thematicBreak"}}}function Hn(e){return{line:e.line,column:e.column,offset:e.offset}}function wh(e,n){let t=-1;for(;++t<n.length;){const r=n[t];Array.isArray(r)?wh(e,r):oS(e,r)}}function oS(e,n){let t;for(t in n)if(kh.call(n,t))switch(t){case"canContainEols":{const r=n[t];r&&e[t].push(...r);break}case"transforms":{const r=n[t];r&&e[t].push(...r);break}case"enter":case"exit":{const r=n[t];r&&Object.assign(e[t],r);break}}}function Fd(e,n){throw e?new Error("Cannot close `"+e.type+"` ("+ei({start:e.start,end:e.end})+"): a different token (`"+n.type+"`, "+ei({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+ei({start:n.start,end:n.end})+") is still open")}function lS(e){const n=this;n.parser=t;function t(r){return iS(r,{...n.data("settings"),...e,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function sS(e,n){const t={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(n),!0)};return e.patch(n,t),e.applyData(n,t)}function uS(e,n){const t={type:"element",tagName:"br",properties:{},children:[]};return e.patch(n,t),[e.applyData(n,t),{type:"text",value:`
`}]}function cS(e,n){const t=n.value?n.value+`
`:"",r={};n.lang&&(r.className=["language-"+n.lang]);let i={type:"element",tagName:"code",properties:r,children:[{type:"text",value:t}]};return n.meta&&(i.data={meta:n.meta}),e.patch(n,i),i=e.applyData(n,i),i={type:"element",tagName:"pre",properties:{},children:[i]},e.patch(n,i),i}function dS(e,n){const t={type:"element",tagName:"del",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function fS(e,n){const t={type:"element",tagName:"em",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function pS(e,n){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(n.identifier).toUpperCase(),i=Pr(r.toLowerCase()),a=e.footnoteOrder.indexOf(r);let o,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=a+1,l+=1,e.footnoteCounts.set(r,l);const s={type:"element",tagName:"a",properties:{href:"#"+t+"fn-"+i,id:t+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};e.patch(n,s);const u={type:"element",tagName:"sup",properties:{},children:[s]};return e.patch(n,u),e.applyData(n,u)}function mS(e,n){const t={type:"element",tagName:"h"+n.depth,properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function hS(e,n){if(e.options.allowDangerousHtml){const t={type:"raw",value:n.value};return e.patch(n,t),e.applyData(n,t)}}function Sh(e,n){const t=n.referenceType;let r="]";if(t==="collapsed"?r+="[]":t==="full"&&(r+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return[{type:"text",value:"!["+n.alt+r}];const i=e.all(n),a=i[0];a&&a.type==="text"?a.value="["+a.value:i.unshift({type:"text",value:"["});const o=i[i.length-1];return o&&o.type==="text"?o.value+=r:i.push({type:"text",value:r}),i}function gS(e,n){const t=String(n.identifier).toUpperCase(),r=e.definitionById.get(t);if(!r)return Sh(e,n);const i={src:Pr(r.url||""),alt:n.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const a={type:"element",tagName:"img",properties:i,children:[]};return e.patch(n,a),e.applyData(n,a)}function vS(e,n){const t={src:Pr(n.url)};n.alt!==null&&n.alt!==void 0&&(t.alt=n.alt),n.title!==null&&n.title!==void 0&&(t.title=n.title);const r={type:"element",tagName:"img",properties:t,children:[]};return e.patch(n,r),e.applyData(n,r)}function yS(e,n){const t={type:"text",value:n.value.replace(/\r?\n|\r/g," ")};e.patch(n,t);const r={type:"element",tagName:"code",properties:{},children:[t]};return e.patch(n,r),e.applyData(n,r)}function xS(e,n){const t=String(n.identifier).toUpperCase(),r=e.definitionById.get(t);if(!r)return Sh(e,n);const i={href:Pr(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const a={type:"element",tagName:"a",properties:i,children:e.all(n)};return e.patch(n,a),e.applyData(n,a)}function kS(e,n){const t={href:Pr(n.url)};n.title!==null&&n.title!==void 0&&(t.title=n.title);const r={type:"element",tagName:"a",properties:t,children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function wS(e,n,t){const r=e.all(n),i=t?SS(t):Ch(n),a={},o=[];if(typeof n.checked=="boolean"){const d=r[0];let c;d&&d.type==="element"&&d.tagName==="p"?c=d:(c={type:"element",tagName:"p",properties:{},children:[]},r.unshift(c)),c.children.length>0&&c.children.unshift({type:"text",value:" "}),c.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:n.checked,disabled:!0},children:[]}),a.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const d=r[l];(i||l!==0||d.type!=="element"||d.tagName!=="p")&&o.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?o.push(...d.children):o.push(d)}const s=r[r.length-1];s&&(i||s.type!=="element"||s.tagName!=="p")&&o.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:a,children:o};return e.patch(n,u),e.applyData(n,u)}function SS(e){let n=!1;if(e.type==="list"){n=e.spread||!1;const t=e.children;let r=-1;for(;!n&&++r<t.length;)n=Ch(t[r])}return n}function Ch(e){const n=e.spread;return n??e.children.length>1}function CS(e,n){const t={},r=e.all(n);let i=-1;for(typeof n.start=="number"&&n.start!==1&&(t.start=n.start);++i<r.length;){const o=r[i];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){t.className=["contains-task-list"];break}}const a={type:"element",tagName:n.ordered?"ol":"ul",properties:t,children:e.wrap(r,!0)};return e.patch(n,a),e.applyData(n,a)}function ES(e,n){const t={type:"element",tagName:"p",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function bS(e,n){const t={type:"root",children:e.wrap(e.all(n))};return e.patch(n,t),e.applyData(n,t)}function PS(e,n){const t={type:"element",tagName:"strong",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function _S(e,n){const t=e.all(n),r=t.shift(),i=[];if(r){const o={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(n.children[0],o),i.push(o)}if(t.length>0){const o={type:"element",tagName:"tbody",properties:{},children:e.wrap(t,!0)},l=ju(n.children[1]),s=th(n.children[n.children.length-1]);l&&s&&(o.position={start:l,end:s}),i.push(o)}const a={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(n,a),e.applyData(n,a)}function zS(e,n,t){const r=t?t.children:void 0,a=(r?r.indexOf(n):1)===0?"th":"td",o=t&&t.type==="table"?t.align:void 0,l=o?o.length:n.children.length;let s=-1;const u=[];for(;++s<l;){const c=n.children[s],f={},p=o?o[s]:void 0;p&&(f.align=p);let g={type:"element",tagName:a,properties:f,children:[]};c&&(g.children=e.all(c),e.patch(c,g),g=e.applyData(c,g)),u.push(g)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(n,d),e.applyData(n,d)}function LS(e,n){const t={type:"element",tagName:"td",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}const Bd=9,qd=32;function OS(e){const n=String(e),t=/\r?\n|\r/g;let r=t.exec(n),i=0;const a=[];for(;r;)a.push(Ud(n.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=t.exec(n);return a.push(Ud(n.slice(i),i>0,!1)),a.join("")}function Ud(e,n,t){let r=0,i=e.length;if(n){let a=e.codePointAt(r);for(;a===Bd||a===qd;)r++,a=e.codePointAt(r)}if(t){let a=e.codePointAt(i-1);for(;a===Bd||a===qd;)i--,a=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function TS(e,n){const t={type:"text",value:OS(String(n.value))};return e.patch(n,t),e.applyData(n,t)}function IS(e,n){const t={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(n,t),e.applyData(n,t)}const AS={blockquote:sS,break:uS,code:cS,delete:dS,emphasis:fS,footnoteReference:pS,heading:mS,html:hS,imageReference:gS,image:vS,inlineCode:yS,linkReference:xS,link:kS,listItem:wS,list:CS,paragraph:ES,root:bS,strong:PS,table:_S,tableCell:LS,tableRow:zS,text:TS,thematicBreak:IS,toml:ta,yaml:ta,definition:ta,footnoteDefinition:ta};function ta(){}const Eh=-1,zo=0,ti=1,no=2,Uu=3,$u=4,Vu=5,Qu=6,bh=7,Ph=8,$d=typeof self=="object"?self:globalThis,DS=(e,n)=>{const t=(i,a)=>(e.set(a,i),i),r=i=>{if(e.has(i))return e.get(i);const[a,o]=n[i];switch(a){case zo:case Eh:return t(o,i);case ti:{const l=t([],i);for(const s of o)l.push(r(s));return l}case no:{const l=t({},i);for(const[s,u]of o)l[r(s)]=r(u);return l}case Uu:return t(new Date(o),i);case $u:{const{source:l,flags:s}=o;return t(new RegExp(l,s),i)}case Vu:{const l=t(new Map,i);for(const[s,u]of o)l.set(r(s),r(u));return l}case Qu:{const l=t(new Set,i);for(const s of o)l.add(r(s));return l}case bh:{const{name:l,message:s}=o;return t(new $d[l](s),i)}case Ph:return t(BigInt(o),i);case"BigInt":return t(Object(BigInt(o)),i);case"ArrayBuffer":return t(new Uint8Array(o).buffer,o);case"DataView":{const{buffer:l}=new Uint8Array(o);return t(new DataView(l),o)}}return t(new $d[a](o),i)};return r},Vd=e=>DS(new Map,e)(0),Vt="",{toString:jS}={},{keys:NS}=Object,Fr=e=>{const n=typeof e;if(n!=="object"||!e)return[zo,n];const t=jS.call(e).slice(8,-1);switch(t){case"Array":return[ti,Vt];case"Object":return[no,Vt];case"Date":return[Uu,Vt];case"RegExp":return[$u,Vt];case"Map":return[Vu,Vt];case"Set":return[Qu,Vt];case"DataView":return[ti,t]}return t.includes("Array")?[ti,t]:t.includes("Error")?[bh,t]:[no,t]},ra=([e,n])=>e===zo&&(n==="function"||n==="symbol"),RS=(e,n,t,r)=>{const i=(o,l)=>{const s=r.push(o)-1;return t.set(l,s),s},a=o=>{if(t.has(o))return t.get(o);let[l,s]=Fr(o);switch(l){case zo:{let d=o;switch(s){case"bigint":l=Ph,d=o.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+s);d=null;break;case"undefined":return i([Eh],o)}return i([l,d],o)}case ti:{if(s){let f=o;return s==="DataView"?f=new Uint8Array(o.buffer):s==="ArrayBuffer"&&(f=new Uint8Array(o)),i([s,[...f]],o)}const d=[],c=i([l,d],o);for(const f of o)d.push(a(f));return c}case no:{if(s)switch(s){case"BigInt":return i([s,o.toString()],o);case"Boolean":case"Number":case"String":return i([s,o.valueOf()],o)}if(n&&"toJSON"in o)return a(o.toJSON());const d=[],c=i([l,d],o);for(const f of NS(o))(e||!ra(Fr(o[f])))&&d.push([a(f),a(o[f])]);return c}case Uu:return i([l,o.toISOString()],o);case $u:{const{source:d,flags:c}=o;return i([l,{source:d,flags:c}],o)}case Vu:{const d=[],c=i([l,d],o);for(const[f,p]of o)(e||!(ra(Fr(f))||ra(Fr(p))))&&d.push([a(f),a(p)]);return c}case Qu:{const d=[],c=i([l,d],o);for(const f of o)(e||!ra(Fr(f)))&&d.push(a(f));return c}}const{message:u}=o;return i([l,{name:s,message:u}],o)};return a},Qd=(e,{json:n,lossy:t}={})=>{const r=[];return RS(!(n||t),!!n,new Map,r)(e),r},to=typeof structuredClone=="function"?(e,n)=>n&&("json"in n||"lossy"in n)?Vd(Qd(e,n)):structuredClone(e):(e,n)=>Vd(Qd(e,n));function MS(e,n){const t=[{type:"text",value:"↩"}];return n>1&&t.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(n)}]}),t}function FS(e,n){return"Back to reference "+(e+1)+(n>1?"-"+n:"")}function BS(e){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",t=e.options.footnoteBackContent||MS,r=e.options.footnoteBackLabel||FS,i=e.options.footnoteLabel||"Footnotes",a=e.options.footnoteLabelTagName||"h2",o=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let s=-1;for(;++s<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[s]);if(!u)continue;const d=e.all(u),c=String(u.identifier).toUpperCase(),f=Pr(c.toLowerCase());let p=0;const g=[],x=e.footnoteCounts.get(c);for(;x!==void 0&&++p<=x;){g.length>0&&g.push({type:"text",value:" "});let h=typeof t=="string"?t:t(s,p);typeof h=="string"&&(h={type:"text",value:h}),g.push({type:"element",tagName:"a",properties:{href:"#"+n+"fnref-"+f+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(s,p),className:["data-footnote-backref"]},children:Array.isArray(h)?h:[h]})}const b=d[d.length-1];if(b&&b.type==="element"&&b.tagName==="p"){const h=b.children[b.children.length-1];h&&h.type==="text"?h.value+=" ":b.children.push({type:"text",value:" "}),b.children.push(...g)}else d.push(...g);const m={type:"element",tagName:"li",properties:{id:n+"fn-"+f},children:e.wrap(d,!0)};e.patch(u,m),l.push(m)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:a,properties:{...to(o),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const Lo=function(e){if(e==null)return VS;if(typeof e=="function")return Oo(e);if(typeof e=="object")return Array.isArray(e)?qS(e):US(e);if(typeof e=="string")return $S(e);throw new Error("Expected function, string, or object as test")};function qS(e){const n=[];let t=-1;for(;++t<e.length;)n[t]=Lo(e[t]);return Oo(r);function r(...i){let a=-1;for(;++a<n.length;)if(n[a].apply(this,i))return!0;return!1}}function US(e){const n=e;return Oo(t);function t(r){const i=r;let a;for(a in e)if(i[a]!==n[a])return!1;return!0}}function $S(e){return Oo(n);function n(t){return t&&t.type===e}}function Oo(e){return n;function n(t,r,i){return!!(QS(t)&&e.call(this,t,typeof r=="number"?r:void 0,i||void 0))}}function VS(){return!0}function QS(e){return e!==null&&typeof e=="object"&&"type"in e}const _h=[],HS=!0,Os=!1,WS="skip";function zh(e,n,t,r){let i;typeof n=="function"&&typeof t!="function"?(r=t,t=n):i=n;const a=Lo(i),o=r?-1:1;l(e,void 0,[])();function l(s,u,d){const c=s&&typeof s=="object"?s:{};if(typeof c.type=="string"){const p=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(s.type+(p?"<"+p+">":""))+")"})}return f;function f(){let p=_h,g,x,b;if((!n||a(s,u,d[d.length-1]||void 0))&&(p=KS(t(s,d)),p[0]===Os))return p;if("children"in s&&s.children){const m=s;if(m.children&&p[0]!==WS)for(x=(r?m.children.length:-1)+o,b=d.concat(m);x>-1&&x<m.children.length;){const h=m.children[x];if(g=l(h,x,b)(),g[0]===Os)return g;x=typeof g[1]=="number"?g[1]:x+o}}return p}}}function KS(e){return Array.isArray(e)?e:typeof e=="number"?[HS,e]:e==null?_h:[e]}function Hu(e,n,t,r){let i,a,o;typeof n=="function"&&typeof t!="function"?(a=void 0,o=n,i=t):(a=n,o=t,i=r),zh(e,a,l,i);function l(s,u){const d=u[u.length-1],c=d?d.children.indexOf(s):void 0;return o(s,c,d)}}const Ts={}.hasOwnProperty,GS={};function YS(e,n){const t=n||GS,r=new Map,i=new Map,a=new Map,o={...AS,...t.handlers},l={all:u,applyData:JS,definitionById:r,footnoteById:i,footnoteCounts:a,footnoteOrder:[],handlers:o,one:s,options:t,patch:XS,wrap:eC};return Hu(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const c=d.type==="definition"?r:i,f=String(d.identifier).toUpperCase();c.has(f)||c.set(f,d)}}),l;function s(d,c){const f=d.type,p=l.handlers[f];if(Ts.call(l.handlers,f)&&p)return p(l,d,c);if(l.options.passThrough&&l.options.passThrough.includes(f)){if("children"in d){const{children:x,...b}=d,m=to(b);return m.children=l.all(d),m}return to(d)}return(l.options.unknownHandler||ZS)(l,d,c)}function u(d){const c=[];if("children"in d){const f=d.children;let p=-1;for(;++p<f.length;){const g=l.one(f[p],d);if(g){if(p&&f[p-1].type==="break"&&(!Array.isArray(g)&&g.type==="text"&&(g.value=Hd(g.value)),!Array.isArray(g)&&g.type==="element")){const x=g.children[0];x&&x.type==="text"&&(x.value=Hd(x.value))}Array.isArray(g)?c.push(...g):c.push(g)}}}return c}}function XS(e,n){e.position&&(n.position=F0(e))}function JS(e,n){let t=n;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,a=e.data.hProperties;if(typeof r=="string")if(t.type==="element")t.tagName=r;else{const o="children"in t?t.children:[t];t={type:"element",tagName:r,properties:{},children:o}}t.type==="element"&&a&&Object.assign(t.properties,to(a)),"children"in t&&t.children&&i!==null&&i!==void 0&&(t.children=i)}return t}function ZS(e,n){const t=n.data||{},r="value"in n&&!(Ts.call(t,"hProperties")||Ts.call(t,"hChildren"))?{type:"text",value:n.value}:{type:"element",tagName:"div",properties:{},children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function eC(e,n){const t=[];let r=-1;for(n&&t.push({type:"text",value:`
`});++r<e.length;)r&&t.push({type:"text",value:`
`}),t.push(e[r]);return n&&e.length>0&&t.push({type:"text",value:`
`}),t}function Hd(e){let n=0,t=e.charCodeAt(n);for(;t===9||t===32;)n++,t=e.charCodeAt(n);return e.slice(n)}function Wd(e,n){const t=YS(e,n),r=t.one(e,void 0),i=BS(t),a=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&a.children.push({type:"text",value:`
`},i),a}function nC(e,n){return e&&"run"in e?async function(t,r){const i=Wd(t,{file:r,...n});await e.run(i,r)}:function(t,r){return Wd(t,{file:r,...e||n})}}function Kd(e){if(e)throw e}var wa=Object.prototype.hasOwnProperty,Lh=Object.prototype.toString,Gd=Object.defineProperty,Yd=Object.getOwnPropertyDescriptor,Xd=function(n){return typeof Array.isArray=="function"?Array.isArray(n):Lh.call(n)==="[object Array]"},Jd=function(n){if(!n||Lh.call(n)!=="[object Object]")return!1;var t=wa.call(n,"constructor"),r=n.constructor&&n.constructor.prototype&&wa.call(n.constructor.prototype,"isPrototypeOf");if(n.constructor&&!t&&!r)return!1;var i;for(i in n);return typeof i>"u"||wa.call(n,i)},Zd=function(n,t){Gd&&t.name==="__proto__"?Gd(n,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):n[t.name]=t.newValue},ef=function(n,t){if(t==="__proto__")if(wa.call(n,t)){if(Yd)return Yd(n,t).value}else return;return n[t]},tC=function e(){var n,t,r,i,a,o,l=arguments[0],s=1,u=arguments.length,d=!1;for(typeof l=="boolean"&&(d=l,l=arguments[1]||{},s=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});s<u;++s)if(n=arguments[s],n!=null)for(t in n)r=ef(l,t),i=ef(n,t),l!==i&&(d&&i&&(Jd(i)||(a=Xd(i)))?(a?(a=!1,o=r&&Xd(r)?r:[]):o=r&&Jd(r)?r:{},Zd(l,{name:t,newValue:e(d,o,i)})):typeof i<"u"&&Zd(l,{name:t,newValue:i}));return l};const dl=js(tC);function Is(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function rC(){const e=[],n={run:t,use:r};return n;function t(...i){let a=-1;const o=i.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);l(null,...i);function l(s,...u){const d=e[++a];let c=-1;if(s){o(s);return}for(;++c<i.length;)(u[c]===null||u[c]===void 0)&&(u[c]=i[c]);i=u,d?iC(d,l)(...u):o(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),n}}function iC(e,n){let t;return r;function r(...o){const l=e.length>o.length;let s;l&&o.push(i);try{s=e.apply(this,o)}catch(u){const d=u;if(l&&t)throw d;return i(d)}l||(s&&s.then&&typeof s.then=="function"?s.then(a,i):s instanceof Error?i(s):a(s))}function i(o,...l){t||(t=!0,n(o,...l))}function a(o){i(null,o)}}const bn={basename:aC,dirname:oC,extname:lC,join:sC,sep:"/"};function aC(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');ji(e);let t=0,r=-1,i=e.length,a;if(n===void 0||n.length===0||n.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(a){t=i+1;break}}else r<0&&(a=!0,r=i+1);return r<0?"":e.slice(t,r)}if(n===e)return"";let o=-1,l=n.length-1;for(;i--;)if(e.codePointAt(i)===47){if(a){t=i+1;break}}else o<0&&(a=!0,o=i+1),l>-1&&(e.codePointAt(i)===n.codePointAt(l--)?l<0&&(r=i):(l=-1,r=o));return t===r?r=o:r<0&&(r=e.length),e.slice(t,r)}function oC(e){if(ji(e),e.length===0)return".";let n=-1,t=e.length,r;for(;--t;)if(e.codePointAt(t)===47){if(r){n=t;break}}else r||(r=!0);return n<0?e.codePointAt(0)===47?"/":".":n===1&&e.codePointAt(0)===47?"//":e.slice(0,n)}function lC(e){ji(e);let n=e.length,t=-1,r=0,i=-1,a=0,o;for(;n--;){const l=e.codePointAt(n);if(l===47){if(o){r=n+1;break}continue}t<0&&(o=!0,t=n+1),l===46?i<0?i=n:a!==1&&(a=1):i>-1&&(a=-1)}return i<0||t<0||a===0||a===1&&i===t-1&&i===r+1?"":e.slice(i,t)}function sC(...e){let n=-1,t;for(;++n<e.length;)ji(e[n]),e[n]&&(t=t===void 0?e[n]:t+"/"+e[n]);return t===void 0?".":uC(t)}function uC(e){ji(e);const n=e.codePointAt(0)===47;let t=cC(e,!n);return t.length===0&&!n&&(t="."),t.length>0&&e.codePointAt(e.length-1)===47&&(t+="/"),n?"/"+t:t}function cC(e,n){let t="",r=0,i=-1,a=0,o=-1,l,s;for(;++o<=e.length;){if(o<e.length)l=e.codePointAt(o);else{if(l===47)break;l=47}if(l===47){if(!(i===o-1||a===1))if(i!==o-1&&a===2){if(t.length<2||r!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(s=t.lastIndexOf("/"),s!==t.length-1){s<0?(t="",r=0):(t=t.slice(0,s),r=t.length-1-t.lastIndexOf("/")),i=o,a=0;continue}}else if(t.length>0){t="",r=0,i=o,a=0;continue}}n&&(t=t.length>0?t+"/..":"..",r=2)}else t.length>0?t+="/"+e.slice(i+1,o):t=e.slice(i+1,o),r=o-i-1;i=o,a=0}else l===46&&a>-1?a++:a=-1}return t}function ji(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const dC={cwd:fC};function fC(){return"/"}function As(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function pC(e){if(typeof e=="string")e=new URL(e);else if(!As(e)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return mC(e)}function mC(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const n=e.pathname;let t=-1;for(;++t<n.length;)if(n.codePointAt(t)===37&&n.codePointAt(t+1)===50){const r=n.codePointAt(t+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(n)}const fl=["history","path","basename","stem","extname","dirname"];class Oh{constructor(n){let t;n?As(n)?t={path:n}:typeof n=="string"||hC(n)?t={value:n}:t=n:t={},this.cwd="cwd"in t?"":dC.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<fl.length;){const a=fl[r];a in t&&t[a]!==void 0&&t[a]!==null&&(this[a]=a==="history"?[...t[a]]:t[a])}let i;for(i in t)fl.includes(i)||(this[i]=t[i])}get basename(){return typeof this.path=="string"?bn.basename(this.path):void 0}set basename(n){ml(n,"basename"),pl(n,"basename"),this.path=bn.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?bn.dirname(this.path):void 0}set dirname(n){nf(this.basename,"dirname"),this.path=bn.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?bn.extname(this.path):void 0}set extname(n){if(pl(n,"extname"),nf(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=bn.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){As(n)&&(n=pC(n)),ml(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?bn.basename(this.path,this.extname):void 0}set stem(n){ml(n,"stem"),pl(n,"stem"),this.path=bn.join(this.dirname||"",n+(this.extname||""))}fail(n,t,r){const i=this.message(n,t,r);throw i.fatal=!0,i}info(n,t,r){const i=this.message(n,t,r);return i.fatal=void 0,i}message(n,t,r){const i=new Ie(n,t,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function pl(e,n){if(e&&e.includes(bn.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+bn.sep+"`")}function ml(e,n){if(!e)throw new Error("`"+n+"` cannot be empty")}function nf(e,n){if(!e)throw new Error("Setting `"+n+"` requires `path` to be set too")}function hC(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const gC=function(e){const r=this.constructor.prototype,i=r[e],a=function(){return i.apply(a,arguments)};return Object.setPrototypeOf(a,r),a},vC={}.hasOwnProperty;class Wu extends gC{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=rC()}copy(){const n=new Wu;let t=-1;for(;++t<this.attachers.length;){const r=this.attachers[t];n.use(...r)}return n.data(dl(!0,{},this.namespace)),n}data(n,t){return typeof n=="string"?arguments.length===2?(vl("data",this.frozen),this.namespace[n]=t,this):vC.call(this.namespace,n)&&this.namespace[n]||void 0:n?(vl("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=t.call(n,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const t=ia(n),r=this.parser||this.Parser;return hl("parse",r),r(String(t),t)}process(n,t){const r=this;return this.freeze(),hl("process",this.parser||this.Parser),gl("process",this.compiler||this.Compiler),t?i(void 0,t):new Promise(i);function i(a,o){const l=ia(n),s=r.parse(l);r.run(s,l,function(d,c,f){if(d||!c||!f)return u(d);const p=c,g=r.stringify(p,f);kC(g)?f.value=g:f.result=g,u(d,f)});function u(d,c){d||!c?o(d):a?a(c):t(void 0,c)}}}processSync(n){let t=!1,r;return this.freeze(),hl("processSync",this.parser||this.Parser),gl("processSync",this.compiler||this.Compiler),this.process(n,i),rf("processSync","process",t),r;function i(a,o){t=!0,Kd(a),r=o}}run(n,t,r){tf(n),this.freeze();const i=this.transformers;return!r&&typeof t=="function"&&(r=t,t=void 0),r?a(void 0,r):new Promise(a);function a(o,l){const s=ia(t);i.run(n,s,u);function u(d,c,f){const p=c||n;d?l(d):o?o(p):r(void 0,p,f)}}}runSync(n,t){let r=!1,i;return this.run(n,t,a),rf("runSync","run",r),i;function a(o,l){Kd(o),i=l,r=!0}}stringify(n,t){this.freeze();const r=ia(t),i=this.compiler||this.Compiler;return gl("stringify",i),tf(n),i(n,r)}use(n,...t){const r=this.attachers,i=this.namespace;if(vl("use",this.frozen),n!=null)if(typeof n=="function")s(n,t);else if(typeof n=="object")Array.isArray(n)?l(n):o(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function a(u){if(typeof u=="function")s(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...c]=u;s(d,c)}else o(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function o(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(u.plugins),u.settings&&(i.settings=dl(!0,i.settings,u.settings))}function l(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const c=u[d];a(c)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function s(u,d){let c=-1,f=-1;for(;++c<r.length;)if(r[c][0]===u){f=c;break}if(f===-1)r.push([u,...d]);else if(d.length>0){let[p,...g]=d;const x=r[f][1];Is(x)&&Is(p)&&(p=dl(!0,x,p)),r[f]=[u,p,...g]}}}}const yC=new Wu().freeze();function hl(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function gl(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function vl(e,n){if(n)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function tf(e){if(!Is(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function rf(e,n,t){if(!t)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}function ia(e){return xC(e)?e:new Oh(e)}function xC(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function kC(e){return typeof e=="string"||wC(e)}function wC(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const SC="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",af=[],of={allowDangerousHtml:!0},CC=/^(https?|ircs?|mailto|xmpp)$/i,EC=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function bC(e){const n=PC(e),t=_C(e);return zC(n.runSync(n.parse(t),t),e)}function PC(e){const n=e.rehypePlugins||af,t=e.remarkPlugins||af,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...of}:of;return yC().use(lS).use(t).use(nC,r).use(n)}function _C(e){const n=e.children||"",t=new Oh;return typeof n=="string"&&(t.value=n),t}function zC(e,n){const t=n.allowedElements,r=n.allowElement,i=n.components,a=n.disallowedElements,o=n.skipHtml,l=n.unwrapDisallowed,s=n.urlTransform||LC;for(const d of EC)Object.hasOwn(n,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+SC+d.id,void 0);return n.className&&(e={type:"element",tagName:"div",properties:{className:n.className},children:e.type==="root"?e.children:[e]}),Hu(e,u),V0(e,{Fragment:w.Fragment,components:i,ignoreInvalidStyle:!0,jsx:w.jsx,jsxs:w.jsxs,passKeys:!0,passNode:!0});function u(d,c,f){if(d.type==="raw"&&f&&typeof c=="number")return o?f.children.splice(c,1):f.children[c]={type:"text",value:d.value},c;if(d.type==="element"){let p;for(p in sl)if(Object.hasOwn(sl,p)&&Object.hasOwn(d.properties,p)){const g=d.properties[p],x=sl[p];(x===null||x.includes(d.tagName))&&(d.properties[p]=s(String(g||""),p,d))}}if(d.type==="element"){let p=t?!t.includes(d.tagName):a?a.includes(d.tagName):!1;if(!p&&r&&typeof c=="number"&&(p=!r(d,c,f)),p&&f&&typeof c=="number")return l&&d.children?f.children.splice(c,1,...d.children):f.children.splice(c,1),c}}}function LC(e){const n=e.indexOf(":"),t=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return n===-1||i!==-1&&n>i||t!==-1&&n>t||r!==-1&&n>r||CC.test(e.slice(0,n))?e:""}function lf(e,n){const t=String(e);if(typeof n!="string")throw new TypeError("Expected character");let r=0,i=t.indexOf(n);for(;i!==-1;)r++,i=t.indexOf(n,i+n.length);return r}function OC(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function TC(e,n,t){const i=Lo((t||{}).ignore||[]),a=IC(n);let o=-1;for(;++o<a.length;)zh(e,"text",l);function l(u,d){let c=-1,f;for(;++c<d.length;){const p=d[c],g=f?f.children:void 0;if(i(p,g?g.indexOf(p):void 0,f))return;f=p}if(f)return s(u,d)}function s(u,d){const c=d[d.length-1],f=a[o][0],p=a[o][1];let g=0;const b=c.children.indexOf(u);let m=!1,h=[];f.lastIndex=0;let v=f.exec(u.value);for(;v;){const E=v.index,P={index:v.index,input:v.input,stack:[...d,u]};let C=p(...v,P);if(typeof C=="string"&&(C=C.length>0?{type:"text",value:C}:void 0),C===!1?f.lastIndex=E+1:(g!==E&&h.push({type:"text",value:u.value.slice(g,E)}),Array.isArray(C)?h.push(...C):C&&h.push(C),g=E+v[0].length,m=!0),!f.global)break;v=f.exec(u.value)}return m?(g<u.value.length&&h.push({type:"text",value:u.value.slice(g)}),c.children.splice(b,1,...h)):h=[u],b+h.length}}function IC(e){const n=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const t=!e[0]||Array.isArray(e[0])?e:[e];let r=-1;for(;++r<t.length;){const i=t[r];n.push([AC(i[0]),DC(i[1])])}return n}function AC(e){return typeof e=="string"?new RegExp(OC(e),"g"):e}function DC(e){return typeof e=="function"?e:function(){return e}}const yl="phrasing",xl=["autolink","link","image","label"];function jC(){return{transforms:[UC],enter:{literalAutolink:RC,literalAutolinkEmail:kl,literalAutolinkHttp:kl,literalAutolinkWww:kl},exit:{literalAutolink:qC,literalAutolinkEmail:BC,literalAutolinkHttp:MC,literalAutolinkWww:FC}}}function NC(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:yl,notInConstruct:xl},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:yl,notInConstruct:xl},{character:":",before:"[ps]",after:"\\/",inConstruct:yl,notInConstruct:xl}]}}function RC(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function kl(e){this.config.enter.autolinkProtocol.call(this,e)}function MC(e){this.config.exit.autolinkProtocol.call(this,e)}function FC(e){this.config.exit.data.call(this,e);const n=this.stack[this.stack.length-1];n.type,n.url="http://"+this.sliceSerialize(e)}function BC(e){this.config.exit.autolinkEmail.call(this,e)}function qC(e){this.exit(e)}function UC(e){TC(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,$C],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),VC]],{ignore:["link","linkReference"]})}function $C(e,n,t,r,i){let a="";if(!Th(i)||(/^w/i.test(n)&&(t=n+t,n="",a="http://"),!QC(t)))return!1;const o=HC(t+r);if(!o[0])return!1;const l={type:"link",title:null,url:a+n+o[0],children:[{type:"text",value:n+o[0]}]};return o[1]?[l,{type:"text",value:o[1]}]:l}function VC(e,n,t,r){return!Th(r,!0)||/[-\d_]$/.test(t)?!1:{type:"link",title:null,url:"mailto:"+n+"@"+t,children:[{type:"text",value:n+"@"+t}]}}function QC(e){const n=e.split(".");return!(n.length<2||n[n.length-1]&&(/_/.test(n[n.length-1])||!/[a-zA-Z\d]/.test(n[n.length-1]))||n[n.length-2]&&(/_/.test(n[n.length-2])||!/[a-zA-Z\d]/.test(n[n.length-2])))}function HC(e){const n=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!n)return[e,void 0];e=e.slice(0,n.index);let t=n[0],r=t.indexOf(")");const i=lf(e,"(");let a=lf(e,")");for(;r!==-1&&i>a;)e+=t.slice(0,r+1),t=t.slice(r+1),r=t.indexOf(")"),a++;return[e,t]}function Th(e,n){const t=e.input.charCodeAt(e.index-1);return(e.index===0||jt(t)||Po(t))&&(!n||t!==47)}Ih.peek=nE;function WC(){this.buffer()}function KC(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function GC(){this.buffer()}function YC(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function XC(e){const n=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=kn(this.sliceSerialize(e)).toLowerCase(),t.label=n}function JC(e){this.exit(e)}function ZC(e){const n=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=kn(this.sliceSerialize(e)).toLowerCase(),t.label=n}function eE(e){this.exit(e)}function nE(){return"["}function Ih(e,n,t,r){const i=t.createTracker(r);let a=i.move("[^");const o=t.enter("footnoteReference"),l=t.enter("reference");return a+=i.move(t.safe(t.associationId(e),{after:"]",before:a})),l(),o(),a+=i.move("]"),a}function tE(){return{enter:{gfmFootnoteCallString:WC,gfmFootnoteCall:KC,gfmFootnoteDefinitionLabelString:GC,gfmFootnoteDefinition:YC},exit:{gfmFootnoteCallString:XC,gfmFootnoteCall:JC,gfmFootnoteDefinitionLabelString:ZC,gfmFootnoteDefinition:eE}}}function rE(e){let n=!1;return e&&e.firstLineBlank&&(n=!0),{handlers:{footnoteDefinition:t,footnoteReference:Ih},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function t(r,i,a,o){const l=a.createTracker(o);let s=l.move("[^");const u=a.enter("footnoteDefinition"),d=a.enter("label");return s+=l.move(a.safe(a.associationId(r),{before:s,after:"]"})),d(),s+=l.move("]:"),r.children&&r.children.length>0&&(l.shift(4),s+=l.move((n?`
`:" ")+a.indentLines(a.containerFlow(r,l.current()),n?Ah:iE))),u(),s}}function iE(e,n,t){return n===0?e:Ah(e,n,t)}function Ah(e,n,t){return(t?"":"    ")+e}const aE=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];Dh.peek=cE;function oE(){return{canContainEols:["delete"],enter:{strikethrough:sE},exit:{strikethrough:uE}}}function lE(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:aE}],handlers:{delete:Dh}}}function sE(e){this.enter({type:"delete",children:[]},e)}function uE(e){this.exit(e)}function Dh(e,n,t,r){const i=t.createTracker(r),a=t.enter("strikethrough");let o=i.move("~~");return o+=t.containerPhrasing(e,{...i.current(),before:o,after:"~"}),o+=i.move("~~"),a(),o}function cE(){return"~"}function dE(e){return e.length}function fE(e,n){const t=n||{},r=(t.align||[]).concat(),i=t.stringLength||dE,a=[],o=[],l=[],s=[];let u=0,d=-1;for(;++d<e.length;){const x=[],b=[];let m=-1;for(e[d].length>u&&(u=e[d].length);++m<e[d].length;){const h=pE(e[d][m]);if(t.alignDelimiters!==!1){const v=i(h);b[m]=v,(s[m]===void 0||v>s[m])&&(s[m]=v)}x.push(h)}o[d]=x,l[d]=b}let c=-1;if(typeof r=="object"&&"length"in r)for(;++c<u;)a[c]=sf(r[c]);else{const x=sf(r);for(;++c<u;)a[c]=x}c=-1;const f=[],p=[];for(;++c<u;){const x=a[c];let b="",m="";x===99?(b=":",m=":"):x===108?b=":":x===114&&(m=":");let h=t.alignDelimiters===!1?1:Math.max(1,s[c]-b.length-m.length);const v=b+"-".repeat(h)+m;t.alignDelimiters!==!1&&(h=b.length+h+m.length,h>s[c]&&(s[c]=h),p[c]=h),f[c]=v}o.splice(1,0,f),l.splice(1,0,p),d=-1;const g=[];for(;++d<o.length;){const x=o[d],b=l[d];c=-1;const m=[];for(;++c<u;){const h=x[c]||"";let v="",E="";if(t.alignDelimiters!==!1){const P=s[c]-(b[c]||0),C=a[c];C===114?v=" ".repeat(P):C===99?P%2?(v=" ".repeat(P/2+.5),E=" ".repeat(P/2-.5)):(v=" ".repeat(P/2),E=v):E=" ".repeat(P)}t.delimiterStart!==!1&&!c&&m.push("|"),t.padding!==!1&&!(t.alignDelimiters===!1&&h==="")&&(t.delimiterStart!==!1||c)&&m.push(" "),t.alignDelimiters!==!1&&m.push(v),m.push(h),t.alignDelimiters!==!1&&m.push(E),t.padding!==!1&&m.push(" "),(t.delimiterEnd!==!1||c!==u-1)&&m.push("|")}g.push(t.delimiterEnd===!1?m.join("").replace(/ +$/,""):m.join(""))}return g.join(`
`)}function pE(e){return e==null?"":String(e)}function sf(e){const n=typeof e=="string"?e.codePointAt(0):0;return n===67||n===99?99:n===76||n===108?108:n===82||n===114?114:0}function mE(e,n,t,r){const i=t.enter("blockquote"),a=t.createTracker(r);a.move("> "),a.shift(2);const o=t.indentLines(t.containerFlow(e,a.current()),hE);return i(),o}function hE(e,n,t){return">"+(t?"":" ")+e}function gE(e,n){return uf(e,n.inConstruct,!0)&&!uf(e,n.notInConstruct,!1)}function uf(e,n,t){if(typeof n=="string"&&(n=[n]),!n||n.length===0)return t;let r=-1;for(;++r<n.length;)if(e.includes(n[r]))return!0;return!1}function cf(e,n,t,r){let i=-1;for(;++i<t.unsafe.length;)if(t.unsafe[i].character===`
`&&gE(t.stack,t.unsafe[i]))return/[ \t]/.test(r.before)?"":" ";return`\\
`}function vE(e,n){const t=String(e);let r=t.indexOf(n),i=r,a=0,o=0;if(typeof n!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++a>o&&(o=a):a=1,i=r+n.length,r=t.indexOf(n,i);return o}function yE(e,n){return!!(n.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function xE(e){const n=e.options.fence||"`";if(n!=="`"&&n!=="~")throw new Error("Cannot serialize code with `"+n+"` for `options.fence`, expected `` ` `` or `~`");return n}function kE(e,n,t,r){const i=xE(t),a=e.value||"",o=i==="`"?"GraveAccent":"Tilde";if(yE(e,t)){const c=t.enter("codeIndented"),f=t.indentLines(a,wE);return c(),f}const l=t.createTracker(r),s=i.repeat(Math.max(vE(a,i)+1,3)),u=t.enter("codeFenced");let d=l.move(s);if(e.lang){const c=t.enter(`codeFencedLang${o}`);d+=l.move(t.safe(e.lang,{before:d,after:" ",encode:["`"],...l.current()})),c()}if(e.lang&&e.meta){const c=t.enter(`codeFencedMeta${o}`);d+=l.move(" "),d+=l.move(t.safe(e.meta,{before:d,after:`
`,encode:["`"],...l.current()})),c()}return d+=l.move(`
`),a&&(d+=l.move(a+`
`)),d+=l.move(s),u(),d}function wE(e,n,t){return(t?"":"    ")+e}function Ku(e){const n=e.options.quote||'"';if(n!=='"'&&n!=="'")throw new Error("Cannot serialize title with `"+n+"` for `options.quote`, expected `\"`, or `'`");return n}function SE(e,n,t,r){const i=Ku(t),a=i==='"'?"Quote":"Apostrophe",o=t.enter("definition");let l=t.enter("label");const s=t.createTracker(r);let u=s.move("[");return u+=s.move(t.safe(t.associationId(e),{before:u,after:"]",...s.current()})),u+=s.move("]: "),l(),!e.url||/[\0- \u007F]/.test(e.url)?(l=t.enter("destinationLiteral"),u+=s.move("<"),u+=s.move(t.safe(e.url,{before:u,after:">",...s.current()})),u+=s.move(">")):(l=t.enter("destinationRaw"),u+=s.move(t.safe(e.url,{before:u,after:e.title?" ":`
`,...s.current()}))),l(),e.title&&(l=t.enter(`title${a}`),u+=s.move(" "+i),u+=s.move(t.safe(e.title,{before:u,after:i,...s.current()})),u+=s.move(i),l()),o(),u}function CE(e){const n=e.options.emphasis||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize emphasis with `"+n+"` for `options.emphasis`, expected `*`, or `_`");return n}function Ci(e){return"&#x"+e.toString(16).toUpperCase()+";"}function ro(e,n,t){const r=wr(e),i=wr(n);return r===void 0?i===void 0?t==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}jh.peek=EE;function jh(e,n,t,r){const i=CE(t),a=t.enter("emphasis"),o=t.createTracker(r),l=o.move(i);let s=o.move(t.containerPhrasing(e,{after:i,before:l,...o.current()}));const u=s.charCodeAt(0),d=ro(r.before.charCodeAt(r.before.length-1),u,i);d.inside&&(s=Ci(u)+s.slice(1));const c=s.charCodeAt(s.length-1),f=ro(r.after.charCodeAt(0),c,i);f.inside&&(s=s.slice(0,-1)+Ci(c));const p=o.move(i);return a(),t.attentionEncodeSurroundingInfo={after:f.outside,before:d.outside},l+s+p}function EE(e,n,t){return t.options.emphasis||"*"}function bE(e,n){let t=!1;return Hu(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return t=!0,Os}),!!((!e.depth||e.depth<3)&&Fu(e)&&(n.options.setext||t))}function PE(e,n,t,r){const i=Math.max(Math.min(6,e.depth||1),1),a=t.createTracker(r);if(bE(e,t)){const d=t.enter("headingSetext"),c=t.enter("phrasing"),f=t.containerPhrasing(e,{...a.current(),before:`
`,after:`
`});return c(),d(),f+`
`+(i===1?"=":"-").repeat(f.length-(Math.max(f.lastIndexOf("\r"),f.lastIndexOf(`
`))+1))}const o="#".repeat(i),l=t.enter("headingAtx"),s=t.enter("phrasing");a.move(o+" ");let u=t.containerPhrasing(e,{before:"# ",after:`
`,...a.current()});return/^[\t ]/.test(u)&&(u=Ci(u.charCodeAt(0))+u.slice(1)),u=u?o+" "+u:o,t.options.closeAtx&&(u+=" "+o),s(),l(),u}Nh.peek=_E;function Nh(e){return e.value||""}function _E(){return"<"}Rh.peek=zE;function Rh(e,n,t,r){const i=Ku(t),a=i==='"'?"Quote":"Apostrophe",o=t.enter("image");let l=t.enter("label");const s=t.createTracker(r);let u=s.move("![");return u+=s.move(t.safe(e.alt,{before:u,after:"]",...s.current()})),u+=s.move("]("),l(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(l=t.enter("destinationLiteral"),u+=s.move("<"),u+=s.move(t.safe(e.url,{before:u,after:">",...s.current()})),u+=s.move(">")):(l=t.enter("destinationRaw"),u+=s.move(t.safe(e.url,{before:u,after:e.title?" ":")",...s.current()}))),l(),e.title&&(l=t.enter(`title${a}`),u+=s.move(" "+i),u+=s.move(t.safe(e.title,{before:u,after:i,...s.current()})),u+=s.move(i),l()),u+=s.move(")"),o(),u}function zE(){return"!"}Mh.peek=LE;function Mh(e,n,t,r){const i=e.referenceType,a=t.enter("imageReference");let o=t.enter("label");const l=t.createTracker(r);let s=l.move("![");const u=t.safe(e.alt,{before:s,after:"]",...l.current()});s+=l.move(u+"]["),o();const d=t.stack;t.stack=[],o=t.enter("reference");const c=t.safe(t.associationId(e),{before:s,after:"]",...l.current()});return o(),t.stack=d,a(),i==="full"||!u||u!==c?s+=l.move(c+"]"):i==="shortcut"?s=s.slice(0,-1):s+=l.move("]"),s}function LE(){return"!"}Fh.peek=OE;function Fh(e,n,t){let r=e.value||"",i="`",a=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++a<t.unsafe.length;){const o=t.unsafe[a],l=t.compilePattern(o);let s;if(o.atBreak)for(;s=l.exec(r);){let u=s.index;r.charCodeAt(u)===10&&r.charCodeAt(u-1)===13&&u--,r=r.slice(0,u)+" "+r.slice(s.index+1)}}return i+r+i}function OE(){return"`"}function Bh(e,n){const t=Fu(e);return!!(!n.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(t===e.url||"mailto:"+t===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}qh.peek=TE;function qh(e,n,t,r){const i=Ku(t),a=i==='"'?"Quote":"Apostrophe",o=t.createTracker(r);let l,s;if(Bh(e,t)){const d=t.stack;t.stack=[],l=t.enter("autolink");let c=o.move("<");return c+=o.move(t.containerPhrasing(e,{before:c,after:">",...o.current()})),c+=o.move(">"),l(),t.stack=d,c}l=t.enter("link"),s=t.enter("label");let u=o.move("[");return u+=o.move(t.containerPhrasing(e,{before:u,after:"](",...o.current()})),u+=o.move("]("),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=t.enter("destinationLiteral"),u+=o.move("<"),u+=o.move(t.safe(e.url,{before:u,after:">",...o.current()})),u+=o.move(">")):(s=t.enter("destinationRaw"),u+=o.move(t.safe(e.url,{before:u,after:e.title?" ":")",...o.current()}))),s(),e.title&&(s=t.enter(`title${a}`),u+=o.move(" "+i),u+=o.move(t.safe(e.title,{before:u,after:i,...o.current()})),u+=o.move(i),s()),u+=o.move(")"),l(),u}function TE(e,n,t){return Bh(e,t)?"<":"["}Uh.peek=IE;function Uh(e,n,t,r){const i=e.referenceType,a=t.enter("linkReference");let o=t.enter("label");const l=t.createTracker(r);let s=l.move("[");const u=t.containerPhrasing(e,{before:s,after:"]",...l.current()});s+=l.move(u+"]["),o();const d=t.stack;t.stack=[],o=t.enter("reference");const c=t.safe(t.associationId(e),{before:s,after:"]",...l.current()});return o(),t.stack=d,a(),i==="full"||!u||u!==c?s+=l.move(c+"]"):i==="shortcut"?s=s.slice(0,-1):s+=l.move("]"),s}function IE(){return"["}function Gu(e){const n=e.options.bullet||"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bullet`, expected `*`, `+`, or `-`");return n}function AE(e){const n=Gu(e),t=e.options.bulletOther;if(!t)return n==="*"?"-":"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(t===n)throw new Error("Expected `bullet` (`"+n+"`) and `bulletOther` (`"+t+"`) to be different");return t}function DE(e){const n=e.options.bulletOrdered||".";if(n!=="."&&n!==")")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOrdered`, expected `.` or `)`");return n}function $h(e){const n=e.options.rule||"*";if(n!=="*"&&n!=="-"&&n!=="_")throw new Error("Cannot serialize rules with `"+n+"` for `options.rule`, expected `*`, `-`, or `_`");return n}function jE(e,n,t,r){const i=t.enter("list"),a=t.bulletCurrent;let o=e.ordered?DE(t):Gu(t);const l=e.ordered?o==="."?")":".":AE(t);let s=n&&t.bulletLastUsed?o===t.bulletLastUsed:!1;if(!e.ordered){const d=e.children?e.children[0]:void 0;if((o==="*"||o==="-")&&d&&(!d.children||!d.children[0])&&t.stack[t.stack.length-1]==="list"&&t.stack[t.stack.length-2]==="listItem"&&t.stack[t.stack.length-3]==="list"&&t.stack[t.stack.length-4]==="listItem"&&t.indexStack[t.indexStack.length-1]===0&&t.indexStack[t.indexStack.length-2]===0&&t.indexStack[t.indexStack.length-3]===0&&(s=!0),$h(t)===o&&d){let c=-1;for(;++c<e.children.length;){const f=e.children[c];if(f&&f.type==="listItem"&&f.children&&f.children[0]&&f.children[0].type==="thematicBreak"){s=!0;break}}}}s&&(o=l),t.bulletCurrent=o;const u=t.containerFlow(e,r);return t.bulletLastUsed=o,t.bulletCurrent=a,i(),u}function NE(e){const n=e.options.listItemIndent||"one";if(n!=="tab"&&n!=="one"&&n!=="mixed")throw new Error("Cannot serialize items with `"+n+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return n}function RE(e,n,t,r){const i=NE(t);let a=t.bulletCurrent||Gu(t);n&&n.type==="list"&&n.ordered&&(a=(typeof n.start=="number"&&n.start>-1?n.start:1)+(t.options.incrementListMarker===!1?0:n.children.indexOf(e))+a);let o=a.length+1;(i==="tab"||i==="mixed"&&(n&&n.type==="list"&&n.spread||e.spread))&&(o=Math.ceil(o/4)*4);const l=t.createTracker(r);l.move(a+" ".repeat(o-a.length)),l.shift(o);const s=t.enter("listItem"),u=t.indentLines(t.containerFlow(e,l.current()),d);return s(),u;function d(c,f,p){return f?(p?"":" ".repeat(o))+c:(p?a:a+" ".repeat(o-a.length))+c}}function ME(e,n,t,r){const i=t.enter("paragraph"),a=t.enter("phrasing"),o=t.containerPhrasing(e,r);return a(),i(),o}const FE=Lo(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function BE(e,n,t,r){return(e.children.some(function(o){return FE(o)})?t.containerPhrasing:t.containerFlow).call(t,e,r)}function qE(e){const n=e.options.strong||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize strong with `"+n+"` for `options.strong`, expected `*`, or `_`");return n}Vh.peek=UE;function Vh(e,n,t,r){const i=qE(t),a=t.enter("strong"),o=t.createTracker(r),l=o.move(i+i);let s=o.move(t.containerPhrasing(e,{after:i,before:l,...o.current()}));const u=s.charCodeAt(0),d=ro(r.before.charCodeAt(r.before.length-1),u,i);d.inside&&(s=Ci(u)+s.slice(1));const c=s.charCodeAt(s.length-1),f=ro(r.after.charCodeAt(0),c,i);f.inside&&(s=s.slice(0,-1)+Ci(c));const p=o.move(i+i);return a(),t.attentionEncodeSurroundingInfo={after:f.outside,before:d.outside},l+s+p}function UE(e,n,t){return t.options.strong||"*"}function $E(e,n,t,r){return t.safe(e.value,r)}function VE(e){const n=e.options.ruleRepetition||3;if(n<3)throw new Error("Cannot serialize rules with repetition `"+n+"` for `options.ruleRepetition`, expected `3` or more");return n}function QE(e,n,t){const r=($h(t)+(t.options.ruleSpaces?" ":"")).repeat(VE(t));return t.options.ruleSpaces?r.slice(0,-1):r}const Qh={blockquote:mE,break:cf,code:kE,definition:SE,emphasis:jh,hardBreak:cf,heading:PE,html:Nh,image:Rh,imageReference:Mh,inlineCode:Fh,link:qh,linkReference:Uh,list:jE,listItem:RE,paragraph:ME,root:BE,strong:Vh,text:$E,thematicBreak:QE};function HE(){return{enter:{table:WE,tableData:df,tableHeader:df,tableRow:GE},exit:{codeText:YE,table:KE,tableData:wl,tableHeader:wl,tableRow:wl}}}function WE(e){const n=e._align;this.enter({type:"table",align:n.map(function(t){return t==="none"?null:t}),children:[]},e),this.data.inTable=!0}function KE(e){this.exit(e),this.data.inTable=void 0}function GE(e){this.enter({type:"tableRow",children:[]},e)}function wl(e){this.exit(e)}function df(e){this.enter({type:"tableCell",children:[]},e)}function YE(e){let n=this.resume();this.data.inTable&&(n=n.replace(/\\([\\|])/g,XE));const t=this.stack[this.stack.length-1];t.type,t.value=n,this.exit(e)}function XE(e,n){return n==="|"?n:e}function JE(e){const n=e||{},t=n.tableCellPadding,r=n.tablePipeAlign,i=n.stringLength,a=t?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:f,table:o,tableCell:s,tableRow:l}};function o(p,g,x,b){return u(d(p,x,b),p.align)}function l(p,g,x,b){const m=c(p,x,b),h=u([m]);return h.slice(0,h.indexOf(`
`))}function s(p,g,x,b){const m=x.enter("tableCell"),h=x.enter("phrasing"),v=x.containerPhrasing(p,{...b,before:a,after:a});return h(),m(),v}function u(p,g){return fE(p,{align:g,alignDelimiters:r,padding:t,stringLength:i})}function d(p,g,x){const b=p.children;let m=-1;const h=[],v=g.enter("table");for(;++m<b.length;)h[m]=c(b[m],g,x);return v(),h}function c(p,g,x){const b=p.children;let m=-1;const h=[],v=g.enter("tableRow");for(;++m<b.length;)h[m]=s(b[m],p,g,x);return v(),h}function f(p,g,x){let b=Qh.inlineCode(p,g,x);return x.stack.includes("tableCell")&&(b=b.replace(/\|/g,"\\$&")),b}}function ZE(){return{exit:{taskListCheckValueChecked:ff,taskListCheckValueUnchecked:ff,paragraph:nb}}}function eb(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:tb}}}function ff(e){const n=this.stack[this.stack.length-2];n.type,n.checked=e.type==="taskListCheckValueChecked"}function nb(e){const n=this.stack[this.stack.length-2];if(n&&n.type==="listItem"&&typeof n.checked=="boolean"){const t=this.stack[this.stack.length-1];t.type;const r=t.children[0];if(r&&r.type==="text"){const i=n.children;let a=-1,o;for(;++a<i.length;){const l=i[a];if(l.type==="paragraph"){o=l;break}}o===t&&(r.value=r.value.slice(1),r.value.length===0?t.children.shift():t.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,t.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function tb(e,n,t,r){const i=e.children[0],a=typeof e.checked=="boolean"&&i&&i.type==="paragraph",o="["+(e.checked?"x":" ")+"] ",l=t.createTracker(r);a&&l.move(o);let s=Qh.listItem(e,n,t,{...r,...l.current()});return a&&(s=s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,u)),s;function u(d){return d+o}}function rb(){return[jC(),tE(),oE(),HE(),ZE()]}function ib(e){return{extensions:[NC(),rE(e),lE(),JE(e),eb()]}}const ab={tokenize:db,partial:!0},Hh={tokenize:fb,partial:!0},Wh={tokenize:pb,partial:!0},Kh={tokenize:mb,partial:!0},ob={tokenize:hb,partial:!0},Gh={name:"wwwAutolink",tokenize:ub,previous:Xh},Yh={name:"protocolAutolink",tokenize:cb,previous:Jh},Un={name:"emailAutolink",tokenize:sb,previous:Zh},Ln={};function lb(){return{text:Ln}}let kt=48;for(;kt<123;)Ln[kt]=Un,kt++,kt===58?kt=65:kt===91&&(kt=97);Ln[43]=Un;Ln[45]=Un;Ln[46]=Un;Ln[95]=Un;Ln[72]=[Un,Yh];Ln[104]=[Un,Yh];Ln[87]=[Un,Gh];Ln[119]=[Un,Gh];function sb(e,n,t){const r=this;let i,a;return o;function o(c){return!Ds(c)||!Zh.call(r,r.previous)||Yu(r.events)?t(c):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),l(c))}function l(c){return Ds(c)?(e.consume(c),l):c===64?(e.consume(c),s):t(c)}function s(c){return c===46?e.check(ob,d,u)(c):c===45||c===95||Oe(c)?(a=!0,e.consume(c),s):d(c)}function u(c){return e.consume(c),i=!0,s}function d(c){return a&&i&&je(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),n(c)):t(c)}}function ub(e,n,t){const r=this;return i;function i(o){return o!==87&&o!==119||!Xh.call(r,r.previous)||Yu(r.events)?t(o):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(ab,e.attempt(Hh,e.attempt(Wh,a),t),t)(o))}function a(o){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),n(o)}}function cb(e,n,t){const r=this;let i="",a=!1;return o;function o(c){return(c===72||c===104)&&Jh.call(r,r.previous)&&!Yu(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(c),e.consume(c),l):t(c)}function l(c){if(je(c)&&i.length<5)return i+=String.fromCodePoint(c),e.consume(c),l;if(c===58){const f=i.toLowerCase();if(f==="http"||f==="https")return e.consume(c),s}return t(c)}function s(c){return c===47?(e.consume(c),a?u:(a=!0,s)):t(c)}function u(c){return c===null||eo(c)||re(c)||jt(c)||Po(c)?t(c):e.attempt(Hh,e.attempt(Wh,d),t)(c)}function d(c){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),n(c)}}function db(e,n,t){let r=0;return i;function i(o){return(o===87||o===119)&&r<3?(r++,e.consume(o),i):o===46&&r===3?(e.consume(o),a):t(o)}function a(o){return o===null?t(o):n(o)}}function fb(e,n,t){let r,i,a;return o;function o(u){return u===46||u===95?e.check(Kh,s,l)(u):u===null||re(u)||jt(u)||u!==45&&Po(u)?s(u):(a=!0,e.consume(u),o)}function l(u){return u===95?r=!0:(i=r,r=void 0),e.consume(u),o}function s(u){return i||r||!a?t(u):n(u)}}function pb(e,n){let t=0,r=0;return i;function i(o){return o===40?(t++,e.consume(o),i):o===41&&r<t?a(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?e.check(Kh,n,a)(o):o===null||re(o)||jt(o)?n(o):(e.consume(o),i)}function a(o){return o===41&&r++,e.consume(o),i}}function mb(e,n,t){return r;function r(l){return l===33||l===34||l===39||l===41||l===42||l===44||l===46||l===58||l===59||l===63||l===95||l===126?(e.consume(l),r):l===38?(e.consume(l),a):l===93?(e.consume(l),i):l===60||l===null||re(l)||jt(l)?n(l):t(l)}function i(l){return l===null||l===40||l===91||re(l)||jt(l)?n(l):r(l)}function a(l){return je(l)?o(l):t(l)}function o(l){return l===59?(e.consume(l),r):je(l)?(e.consume(l),o):t(l)}}function hb(e,n,t){return r;function r(a){return e.consume(a),i}function i(a){return Oe(a)?t(a):n(a)}}function Xh(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||re(e)}function Jh(e){return!je(e)}function Zh(e){return!(e===47||Ds(e))}function Ds(e){return e===43||e===45||e===46||e===95||Oe(e)}function Yu(e){let n=e.length,t=!1;for(;n--;){const r=e[n][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){t=!0;break}if(r._gfmAutolinkLiteralWalkedInto){t=!1;break}}return e.length>0&&!t&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),t}const gb={tokenize:Eb,partial:!0};function vb(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:wb,continuation:{tokenize:Sb},exit:Cb}},text:{91:{name:"gfmFootnoteCall",tokenize:kb},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:yb,resolveTo:xb}}}}function yb(e,n,t){const r=this;let i=r.events.length;const a=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o;for(;i--;){const s=r.events[i][1];if(s.type==="labelImage"){o=s;break}if(s.type==="gfmFootnoteCall"||s.type==="labelLink"||s.type==="label"||s.type==="image"||s.type==="link")break}return l;function l(s){if(!o||!o._balanced)return t(s);const u=kn(r.sliceSerialize({start:o.end,end:r.now()}));return u.codePointAt(0)!==94||!a.includes(u.slice(1))?t(s):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(s),e.exit("gfmFootnoteCallLabelMarker"),n(s))}}function xb(e,n){let t=e.length;for(;t--;)if(e[t][1].type==="labelImage"&&e[t][0]==="enter"){e[t][1];break}e[t+1][1].type="data",e[t+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},e[t+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:"gfmFootnoteCallMarker",start:Object.assign({},e[t+3][1].end),end:Object.assign({},e[t+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;const a={type:"gfmFootnoteCallString",start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},o={type:"chunkString",contentType:"string",start:Object.assign({},a.start),end:Object.assign({},a.end)},l=[e[t+1],e[t+2],["enter",r,n],e[t+3],e[t+4],["enter",i,n],["exit",i,n],["enter",a,n],["enter",o,n],["exit",o,n],["exit",a,n],e[e.length-2],e[e.length-1],["exit",r,n]];return e.splice(t,e.length-t+1,...l),e}function kb(e,n,t){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let a=0,o;return l;function l(c){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),s}function s(c){return c!==94?t(c):(e.enter("gfmFootnoteCallMarker"),e.consume(c),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",u)}function u(c){if(a>999||c===93&&!o||c===null||c===91||re(c))return t(c);if(c===93){e.exit("chunkString");const f=e.exit("gfmFootnoteCallString");return i.includes(kn(r.sliceSerialize(f)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),n):t(c)}return re(c)||(o=!0),a++,e.consume(c),c===92?d:u}function d(c){return c===91||c===92||c===93?(e.consume(c),a++,u):u(c)}}function wb(e,n,t){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let a,o=0,l;return s;function s(g){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionLabelMarker"),u}function u(g){return g===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",d):t(g)}function d(g){if(o>999||g===93&&!l||g===null||g===91||re(g))return t(g);if(g===93){e.exit("chunkString");const x=e.exit("gfmFootnoteDefinitionLabelString");return a=kn(r.sliceSerialize(x)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),f}return re(g)||(l=!0),o++,e.consume(g),g===92?c:d}function c(g){return g===91||g===92||g===93?(e.consume(g),o++,d):d(g)}function f(g){return g===58?(e.enter("definitionMarker"),e.consume(g),e.exit("definitionMarker"),i.includes(a)||i.push(a),X(e,p,"gfmFootnoteDefinitionWhitespace")):t(g)}function p(g){return n(g)}}function Sb(e,n,t){return e.check(Di,n,e.attempt(gb,n,t))}function Cb(e){e.exit("gfmFootnoteDefinition")}function Eb(e,n,t){const r=this;return X(e,i,"gfmFootnoteDefinitionIndent",5);function i(a){const o=r.events[r.events.length-1];return o&&o[1].type==="gfmFootnoteDefinitionIndent"&&o[2].sliceSerialize(o[1],!0).length===4?n(a):t(a)}}function bb(e){let t=(e||{}).singleTilde;const r={name:"strikethrough",tokenize:a,resolveAll:i};return t==null&&(t=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(o,l){let s=-1;for(;++s<o.length;)if(o[s][0]==="enter"&&o[s][1].type==="strikethroughSequenceTemporary"&&o[s][1]._close){let u=s;for(;u--;)if(o[u][0]==="exit"&&o[u][1].type==="strikethroughSequenceTemporary"&&o[u][1]._open&&o[s][1].end.offset-o[s][1].start.offset===o[u][1].end.offset-o[u][1].start.offset){o[s][1].type="strikethroughSequence",o[u][1].type="strikethroughSequence";const d={type:"strikethrough",start:Object.assign({},o[u][1].start),end:Object.assign({},o[s][1].end)},c={type:"strikethroughText",start:Object.assign({},o[u][1].end),end:Object.assign({},o[s][1].start)},f=[["enter",d,l],["enter",o[u][1],l],["exit",o[u][1],l],["enter",c,l]],p=l.parser.constructs.insideSpan.null;p&&Ze(f,f.length,0,_o(p,o.slice(u+1,s),l)),Ze(f,f.length,0,[["exit",c,l],["enter",o[s][1],l],["exit",o[s][1],l],["exit",d,l]]),Ze(o,u-1,s-u+3,f),s=u+f.length-2;break}}for(s=-1;++s<o.length;)o[s][1].type==="strikethroughSequenceTemporary"&&(o[s][1].type="data");return o}function a(o,l,s){const u=this.previous,d=this.events;let c=0;return f;function f(g){return u===126&&d[d.length-1][1].type!=="characterEscape"?s(g):(o.enter("strikethroughSequenceTemporary"),p(g))}function p(g){const x=wr(u);if(g===126)return c>1?s(g):(o.consume(g),c++,p);if(c<2&&!t)return s(g);const b=o.exit("strikethroughSequenceTemporary"),m=wr(g);return b._open=!m||m===2&&!!x,b._close=!x||x===2&&!!m,l(g)}}}class Pb{constructor(){this.map=[]}add(n,t,r){_b(this,n,t,r)}consume(n){if(this.map.sort(function(a,o){return a[0]-o[0]}),this.map.length===0)return;let t=this.map.length;const r=[];for(;t>0;)t-=1,r.push(n.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),n.length=this.map[t][0];r.push(n.slice()),n.length=0;let i=r.pop();for(;i;){for(const a of i)n.push(a);i=r.pop()}this.map.length=0}}function _b(e,n,t,r){let i=0;if(!(t===0&&r.length===0)){for(;i<e.map.length;){if(e.map[i][0]===n){e.map[i][1]+=t,e.map[i][2].push(...r);return}i+=1}e.map.push([n,t,r])}}function zb(e,n){let t=!1;const r=[];for(;n<e.length;){const i=e[n];if(t){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[n+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[n-1][1].type==="tableDelimiterMarker"){const a=r.length-1;r[a]=r[a]==="left"?"center":"right"}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(t=!0);n+=1}return r}function Lb(){return{flow:{null:{name:"table",tokenize:Ob,resolveAll:Tb}}}}function Ob(e,n,t){const r=this;let i=0,a=0,o;return l;function l(S){let j=r.events.length-1;for(;j>-1;){const Z=r.events[j][1].type;if(Z==="lineEnding"||Z==="linePrefix")j--;else break}const F=j>-1?r.events[j][1].type:null,W=F==="tableHead"||F==="tableRow"?C:s;return W===C&&r.parser.lazy[r.now().line]?t(S):W(S)}function s(S){return e.enter("tableHead"),e.enter("tableRow"),u(S)}function u(S){return S===124||(o=!0,a+=1),d(S)}function d(S){return S===null?t(S):$(S)?a>1?(a=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),p):t(S):K(S)?X(e,d,"whitespace")(S):(a+=1,o&&(o=!1,i+=1),S===124?(e.enter("tableCellDivider"),e.consume(S),e.exit("tableCellDivider"),o=!0,d):(e.enter("data"),c(S)))}function c(S){return S===null||S===124||re(S)?(e.exit("data"),d(S)):(e.consume(S),S===92?f:c)}function f(S){return S===92||S===124?(e.consume(S),c):c(S)}function p(S){return r.interrupt=!1,r.parser.lazy[r.now().line]?t(S):(e.enter("tableDelimiterRow"),o=!1,K(S)?X(e,g,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(S):g(S))}function g(S){return S===45||S===58?b(S):S===124?(o=!0,e.enter("tableCellDivider"),e.consume(S),e.exit("tableCellDivider"),x):P(S)}function x(S){return K(S)?X(e,b,"whitespace")(S):b(S)}function b(S){return S===58?(a+=1,o=!0,e.enter("tableDelimiterMarker"),e.consume(S),e.exit("tableDelimiterMarker"),m):S===45?(a+=1,m(S)):S===null||$(S)?E(S):P(S)}function m(S){return S===45?(e.enter("tableDelimiterFiller"),h(S)):P(S)}function h(S){return S===45?(e.consume(S),h):S===58?(o=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(S),e.exit("tableDelimiterMarker"),v):(e.exit("tableDelimiterFiller"),v(S))}function v(S){return K(S)?X(e,E,"whitespace")(S):E(S)}function E(S){return S===124?g(S):S===null||$(S)?!o||i!==a?P(S):(e.exit("tableDelimiterRow"),e.exit("tableHead"),n(S)):P(S)}function P(S){return t(S)}function C(S){return e.enter("tableRow"),z(S)}function z(S){return S===124?(e.enter("tableCellDivider"),e.consume(S),e.exit("tableCellDivider"),z):S===null||$(S)?(e.exit("tableRow"),n(S)):K(S)?X(e,z,"whitespace")(S):(e.enter("data"),I(S))}function I(S){return S===null||S===124||re(S)?(e.exit("data"),z(S)):(e.consume(S),S===92?R:I)}function R(S){return S===92||S===124?(e.consume(S),I):I(S)}}function Tb(e,n){let t=-1,r=!0,i=0,a=[0,0,0,0],o=[0,0,0,0],l=!1,s=0,u,d,c;const f=new Pb;for(;++t<e.length;){const p=e[t],g=p[1];p[0]==="enter"?g.type==="tableHead"?(l=!1,s!==0&&(pf(f,n,s,u,d),d=void 0,s=0),u={type:"table",start:Object.assign({},g.start),end:Object.assign({},g.end)},f.add(t,0,[["enter",u,n]])):g.type==="tableRow"||g.type==="tableDelimiterRow"?(r=!0,c=void 0,a=[0,0,0,0],o=[0,t+1,0,0],l&&(l=!1,d={type:"tableBody",start:Object.assign({},g.start),end:Object.assign({},g.end)},f.add(t,0,[["enter",d,n]])),i=g.type==="tableDelimiterRow"?2:d?3:1):i&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")?(r=!1,o[2]===0&&(a[1]!==0&&(o[0]=o[1],c=aa(f,n,a,i,void 0,c),a=[0,0,0,0]),o[2]=t)):g.type==="tableCellDivider"&&(r?r=!1:(a[1]!==0&&(o[0]=o[1],c=aa(f,n,a,i,void 0,c)),a=o,o=[a[1],t,0,0])):g.type==="tableHead"?(l=!0,s=t):g.type==="tableRow"||g.type==="tableDelimiterRow"?(s=t,a[1]!==0?(o[0]=o[1],c=aa(f,n,a,i,t,c)):o[1]!==0&&(c=aa(f,n,o,i,t,c)),i=0):i&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")&&(o[3]=t)}for(s!==0&&pf(f,n,s,u,d),f.consume(n.events),t=-1;++t<n.events.length;){const p=n.events[t];p[0]==="enter"&&p[1].type==="table"&&(p[1]._align=zb(n.events,t))}return e}function aa(e,n,t,r,i,a){const o=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",l="tableContent";t[0]!==0&&(a.end=Object.assign({},Ht(n.events,t[0])),e.add(t[0],0,[["exit",a,n]]));const s=Ht(n.events,t[1]);if(a={type:o,start:Object.assign({},s),end:Object.assign({},s)},e.add(t[1],0,[["enter",a,n]]),t[2]!==0){const u=Ht(n.events,t[2]),d=Ht(n.events,t[3]),c={type:l,start:Object.assign({},u),end:Object.assign({},d)};if(e.add(t[2],0,[["enter",c,n]]),r!==2){const f=n.events[t[2]],p=n.events[t[3]];if(f[1].end=Object.assign({},p[1].end),f[1].type="chunkText",f[1].contentType="text",t[3]>t[2]+1){const g=t[2]+1,x=t[3]-t[2]-1;e.add(g,x,[])}}e.add(t[3]+1,0,[["exit",c,n]])}return i!==void 0&&(a.end=Object.assign({},Ht(n.events,i)),e.add(i,0,[["exit",a,n]]),a=void 0),a}function pf(e,n,t,r,i){const a=[],o=Ht(n.events,t);i&&(i.end=Object.assign({},o),a.push(["exit",i,n])),r.end=Object.assign({},o),a.push(["exit",r,n]),e.add(t+1,0,a)}function Ht(e,n){const t=e[n],r=t[0]==="enter"?"start":"end";return t[1][r]}const Ib={name:"tasklistCheck",tokenize:Db};function Ab(){return{text:{91:Ib}}}function Db(e,n,t){const r=this;return i;function i(s){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?t(s):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),a)}function a(s){return re(s)?(e.enter("taskListCheckValueUnchecked"),e.consume(s),e.exit("taskListCheckValueUnchecked"),o):s===88||s===120?(e.enter("taskListCheckValueChecked"),e.consume(s),e.exit("taskListCheckValueChecked"),o):t(s)}function o(s){return s===93?(e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),l):t(s)}function l(s){return $(s)?n(s):K(s)?e.check({tokenize:jb},n,t)(s):t(s)}}function jb(e,n,t){return X(e,r,"whitespace");function r(i){return i===null?t(i):n(i)}}function Nb(e){return uh([lb(),vb(),bb(e),Lb(),Ab()])}const Rb={};function Mb(e){const n=this,t=e||Rb,r=n.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),a=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),o=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(Nb(t)),a.push(rb()),o.push(ib(t))}const Fb="_container_1erb7_1",Bb="_header_1erb7_15",qb="_level_1erb7_29",Ub="_summary_1erb7_69",$b="_objectives_1erb7_83",Vb="_meta_1erb7_109",Qb="_badge_1erb7_123",Hb="_topics_1erb7_139",Wb="_backLink_1erb7_169",Kb="_markdown_1erb7_191",mn={container:Fb,header:Bb,level:qb,summary:Ub,objectives:$b,meta:Vb,badge:Qb,topics:Hb,backLink:Wb,markdown:Kb};function Gb(){const{lessonId:e}=Tu(),n=Co(),t=L.useMemo(()=>Ja.find(r=>r.id===e),[e]);return t?w.jsxs("div",{className:mn.container,children:[w.jsxs("div",{className:mn.header,children:[w.jsxs("div",{children:[w.jsx("span",{className:mn.level,children:t.level}),w.jsx("h1",{children:t.title}),w.jsx("p",{className:mn.summary,children:t.summary}),t.objectives.length?w.jsx("ul",{className:mn.objectives,children:t.objectives.map(r=>w.jsx("li",{children:r},r))}):null]}),w.jsxs("div",{className:mn.meta,children:[w.jsx("span",{className:mn.badge,children:t.duration}),t.topics.length?w.jsx("div",{className:mn.topics,children:t.topics.map(r=>w.jsx("span",{children:r},r))}):null,w.jsx(Ye,{to:"/lessons",className:mn.backLink,children:"Ver todas"})]})]}),w.jsx("article",{className:mn.markdown,children:w.jsx(bC,{remarkPlugins:[Mb],children:t.content})})]}):w.jsxs("div",{className:mn.container,children:[w.jsx("h1",{children:"Ops, lição não encontrada."}),w.jsx("p",{children:"Verifique o link ou retorne à lista completa para escolher outra lição."}),w.jsx("button",{type:"button",onClick:()=>n(-1),children:"Voltar"})]})}const Yb="_container_1jynk_1",Xb="_header_1jynk_15",Jb="_grid_1jynk_69",Sl={container:Yb,header:Xb,grid:Jb};function Zb(){return w.jsxs("div",{className:Sl.container,children:[w.jsxs("header",{className:Sl.header,children:[w.jsxs("div",{children:[w.jsx("h1",{children:"Lições estruturadas"}),w.jsx("p",{children:"Construa sua base passo a passo, utilizando explicações curtas e apontando recursos oficiais."})]}),w.jsxs("span",{children:[Ja.length," lições"]})]}),w.jsx("div",{className:Sl.grid,children:Ja.map(e=>w.jsx(Wm,{lesson:e},e.id))})]})}const eP="_container_84oyr_1",nP={container:eP};function tP(){return w.jsxs("div",{className:nP.container,children:[w.jsx("h1",{children:"404 — Página não encontrada"}),w.jsx("p",{children:"Talvez o conteúdo tenha sido movido. Volte para a página inicial e continue seus estudos."}),w.jsx(Ye,{to:"/",children:"Ir para o início"})]})}function mf(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function rP(e){if(Array.isArray(e))return e}function iP(e,n,t){return(n=dP(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function aP(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,i,a,o,l=[],s=!0,u=!1;try{if(a=(t=t.call(e)).next,n!==0)for(;!(s=(r=a.call(t)).done)&&(l.push(r.value),l.length!==n);s=!0);}catch(d){u=!0,i=d}finally{try{if(!s&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(u)throw i}}return l}}function oP(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hf(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function gf(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?hf(Object(t),!0).forEach(function(r){iP(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):hf(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function lP(e,n){if(e==null)return{};var t,r,i=sP(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)===-1&&{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function sP(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)!==-1)continue;t[r]=e[r]}return t}function uP(e,n){return rP(e)||aP(e,n)||fP(e,n)||oP()}function cP(e,n){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function dP(e){var n=cP(e,"string");return typeof n=="symbol"?n:n+""}function fP(e,n){if(e){if(typeof e=="string")return mf(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?mf(e,n):void 0}}function pP(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function vf(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function yf(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?vf(Object(t),!0).forEach(function(r){pP(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):vf(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function mP(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(r){return n.reduceRight(function(i,a){return a(i)},r)}}function Vr(e){return function n(){for(var t=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return i.length>=e.length?e.apply(this,i):function(){for(var o=arguments.length,l=new Array(o),s=0;s<o;s++)l[s]=arguments[s];return n.apply(t,[].concat(i,l))}}}function io(e){return{}.toString.call(e).includes("Object")}function hP(e){return!Object.keys(e).length}function Ei(e){return typeof e=="function"}function gP(e,n){return Object.prototype.hasOwnProperty.call(e,n)}function vP(e,n){return io(n)||ct("changeType"),Object.keys(n).some(function(t){return!gP(e,t)})&&ct("changeField"),n}function yP(e){Ei(e)||ct("selectorType")}function xP(e){Ei(e)||io(e)||ct("handlerType"),io(e)&&Object.values(e).some(function(n){return!Ei(n)})&&ct("handlersType")}function kP(e){e||ct("initialIsRequired"),io(e)||ct("initialType"),hP(e)&&ct("initialContent")}function wP(e,n){throw new Error(e[n]||e.default)}var SP={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},ct=Vr(wP)(SP),oa={changes:vP,selector:yP,handler:xP,initial:kP};function CP(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};oa.initial(e),oa.handler(n);var t={current:e},r=Vr(PP)(t,n),i=Vr(bP)(t),a=Vr(oa.changes)(e),o=Vr(EP)(t);function l(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return oa.selector(u),u(t.current)}function s(u){mP(r,i,a,o)(u)}return[l,s]}function EP(e,n){return Ei(n)?n(e.current):n}function bP(e,n){return e.current=yf(yf({},e.current),n),n}function PP(e,n,t){return Ei(n)?n(e.current):Object.keys(t).forEach(function(r){var i;return(i=n[r])===null||i===void 0?void 0:i.call(n,e.current[r])}),t}var _P={create:CP},zP={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.54.0/min/vs"}};function LP(e){return function n(){for(var t=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return i.length>=e.length?e.apply(this,i):function(){for(var o=arguments.length,l=new Array(o),s=0;s<o;s++)l[s]=arguments[s];return n.apply(t,[].concat(i,l))}}}function OP(e){return{}.toString.call(e).includes("Object")}function TP(e){return e||xf("configIsRequired"),OP(e)||xf("configType"),e.urls?(IP(),{paths:{vs:e.urls.monacoBase}}):e}function IP(){console.warn(eg.deprecation)}function AP(e,n){throw new Error(e[n]||e.default)}var eg={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},xf=LP(AP)(eg),DP={config:TP},jP=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return function(i){return t.reduceRight(function(a,o){return o(a)},i)}};function ng(e,n){return Object.keys(n).forEach(function(t){n[t]instanceof Object&&e[t]&&Object.assign(n[t],ng(e[t],n[t]))}),gf(gf({},e),n)}var NP={type:"cancelation",msg:"operation is manually canceled"};function Cl(e){var n=!1,t=new Promise(function(r,i){e.then(function(a){return n?i(NP):r(a)}),e.catch(i)});return t.cancel=function(){return n=!0},t}var RP=["monaco"],MP=_P.create({config:zP,isInitialized:!1,resolve:null,reject:null,monaco:null}),tg=uP(MP,2),Ni=tg[0],To=tg[1];function FP(e){var n=DP.config(e),t=n.monaco,r=lP(n,RP);To(function(i){return{config:ng(i.config,r),monaco:t}})}function BP(){var e=Ni(function(n){var t=n.monaco,r=n.isInitialized,i=n.resolve;return{monaco:t,isInitialized:r,resolve:i}});if(!e.isInitialized){if(To({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),Cl(El);if(window.monaco&&window.monaco.editor)return rg(window.monaco),e.resolve(window.monaco),Cl(El);jP(qP,$P)(VP)}return Cl(El)}function qP(e){return document.body.appendChild(e)}function UP(e){var n=document.createElement("script");return e&&(n.src=e),n}function $P(e){var n=Ni(function(r){var i=r.config,a=r.reject;return{config:i,reject:a}}),t=UP("".concat(n.config.paths.vs,"/loader.js"));return t.onload=function(){return e()},t.onerror=n.reject,t}function VP(){var e=Ni(function(t){var r=t.config,i=t.resolve,a=t.reject;return{config:r,resolve:i,reject:a}}),n=window.require;n.config(e.config),n(["vs/editor/editor.main"],function(t){var r=t.m;rg(r),e.resolve(r)},function(t){e.reject(t)})}function rg(e){Ni().monaco||To({monaco:e})}function QP(){return Ni(function(e){var n=e.monaco;return n})}var El=new Promise(function(e,n){return To({resolve:e,reject:n})}),ig={config:FP,init:BP,__getMonacoInstance:QP},HP={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},bl=HP,WP={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},KP=WP;function GP({children:e}){return et.createElement("div",{style:KP.container},e)}var YP=GP,XP=YP;function JP({width:e,height:n,isEditorReady:t,loading:r,_ref:i,className:a,wrapperProps:o}){return et.createElement("section",{style:{...bl.wrapper,width:e,height:n},...o},!t&&et.createElement(XP,null,r),et.createElement("div",{ref:i,style:{...bl.fullWidth,...!t&&bl.hide},className:a}))}var ZP=JP,ag=L.memo(ZP);function e_(e){L.useEffect(e,[])}var og=e_;function n_(e,n,t=!0){let r=L.useRef(!0);L.useEffect(r.current||!t?()=>{r.current=!1}:e,n)}var Ge=n_;function ri(){}function ar(e,n,t,r){return t_(e,r)||r_(e,n,t,r)}function t_(e,n){return e.editor.getModel(lg(e,n))}function r_(e,n,t,r){return e.editor.createModel(n,t,r?lg(e,r):void 0)}function lg(e,n){return e.Uri.parse(n)}function i_({original:e,modified:n,language:t,originalLanguage:r,modifiedLanguage:i,originalModelPath:a,modifiedModelPath:o,keepCurrentOriginalModel:l=!1,keepCurrentModifiedModel:s=!1,theme:u="light",loading:d="Loading...",options:c={},height:f="100%",width:p="100%",className:g,wrapperProps:x={},beforeMount:b=ri,onMount:m=ri}){let[h,v]=L.useState(!1),[E,P]=L.useState(!0),C=L.useRef(null),z=L.useRef(null),I=L.useRef(null),R=L.useRef(m),S=L.useRef(b),j=L.useRef(!1);og(()=>{let N=ig.init();return N.then(V=>(z.current=V)&&P(!1)).catch(V=>(V==null?void 0:V.type)!=="cancelation"&&console.error("Monaco initialization: error:",V)),()=>C.current?Z():N.cancel()}),Ge(()=>{if(C.current&&z.current){let N=C.current.getOriginalEditor(),V=ar(z.current,e||"",r||t||"text",a||"");V!==N.getModel()&&N.setModel(V)}},[a],h),Ge(()=>{if(C.current&&z.current){let N=C.current.getModifiedEditor(),V=ar(z.current,n||"",i||t||"text",o||"");V!==N.getModel()&&N.setModel(V)}},[o],h),Ge(()=>{let N=C.current.getModifiedEditor();N.getOption(z.current.editor.EditorOption.readOnly)?N.setValue(n||""):n!==N.getValue()&&(N.executeEdits("",[{range:N.getModel().getFullModelRange(),text:n||"",forceMoveMarkers:!0}]),N.pushUndoStop())},[n],h),Ge(()=>{var N,V;(V=(N=C.current)==null?void 0:N.getModel())==null||V.original.setValue(e||"")},[e],h),Ge(()=>{let{original:N,modified:V}=C.current.getModel();z.current.editor.setModelLanguage(N,r||t||"text"),z.current.editor.setModelLanguage(V,i||t||"text")},[t,r,i],h),Ge(()=>{var N;(N=z.current)==null||N.editor.setTheme(u)},[u],h),Ge(()=>{var N;(N=C.current)==null||N.updateOptions(c)},[c],h);let F=L.useCallback(()=>{var ee;if(!z.current)return;S.current(z.current);let N=ar(z.current,e||"",r||t||"text",a||""),V=ar(z.current,n||"",i||t||"text",o||"");(ee=C.current)==null||ee.setModel({original:N,modified:V})},[t,n,i,e,r,a,o]),W=L.useCallback(()=>{var N;!j.current&&I.current&&(C.current=z.current.editor.createDiffEditor(I.current,{automaticLayout:!0,...c}),F(),(N=z.current)==null||N.editor.setTheme(u),v(!0),j.current=!0)},[c,u,F]);L.useEffect(()=>{h&&R.current(C.current,z.current)},[h]),L.useEffect(()=>{!E&&!h&&W()},[E,h,W]);function Z(){var V,ee,A,q;let N=(V=C.current)==null?void 0:V.getModel();l||((ee=N==null?void 0:N.original)==null||ee.dispose()),s||((A=N==null?void 0:N.modified)==null||A.dispose()),(q=C.current)==null||q.dispose()}return et.createElement(ag,{width:p,height:f,isEditorReady:h,loading:d,_ref:I,className:g,wrapperProps:x})}var a_=i_;L.memo(a_);function o_(e){let n=L.useRef();return L.useEffect(()=>{n.current=e},[e]),n.current}var l_=o_,la=new Map;function s_({defaultValue:e,defaultLanguage:n,defaultPath:t,value:r,language:i,path:a,theme:o="light",line:l,loading:s="Loading...",options:u={},overrideServices:d={},saveViewState:c=!0,keepCurrentModel:f=!1,width:p="100%",height:g="100%",className:x,wrapperProps:b={},beforeMount:m=ri,onMount:h=ri,onChange:v,onValidate:E=ri}){let[P,C]=L.useState(!1),[z,I]=L.useState(!0),R=L.useRef(null),S=L.useRef(null),j=L.useRef(null),F=L.useRef(h),W=L.useRef(m),Z=L.useRef(),N=L.useRef(r),V=l_(a),ee=L.useRef(!1),A=L.useRef(!1);og(()=>{let B=ig.init();return B.then(U=>(R.current=U)&&I(!1)).catch(U=>(U==null?void 0:U.type)!=="cancelation"&&console.error("Monaco initialization: error:",U)),()=>S.current?y():B.cancel()}),Ge(()=>{var U,k,oe,ke;let B=ar(R.current,e||r||"",n||i||"",a||t||"");B!==((U=S.current)==null?void 0:U.getModel())&&(c&&la.set(V,(k=S.current)==null?void 0:k.saveViewState()),(oe=S.current)==null||oe.setModel(B),c&&((ke=S.current)==null||ke.restoreViewState(la.get(a))))},[a],P),Ge(()=>{var B;(B=S.current)==null||B.updateOptions(u)},[u],P),Ge(()=>{!S.current||r===void 0||(S.current.getOption(R.current.editor.EditorOption.readOnly)?S.current.setValue(r):r!==S.current.getValue()&&(A.current=!0,S.current.executeEdits("",[{range:S.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),S.current.pushUndoStop(),A.current=!1))},[r],P),Ge(()=>{var U,k;let B=(U=S.current)==null?void 0:U.getModel();B&&i&&((k=R.current)==null||k.editor.setModelLanguage(B,i))},[i],P),Ge(()=>{var B;l!==void 0&&((B=S.current)==null||B.revealLine(l))},[l],P),Ge(()=>{var B;(B=R.current)==null||B.editor.setTheme(o)},[o],P);let q=L.useCallback(()=>{var B;if(!(!j.current||!R.current)&&!ee.current){W.current(R.current);let U=a||t,k=ar(R.current,r||e||"",n||i||"",U||"");S.current=(B=R.current)==null?void 0:B.editor.create(j.current,{model:k,automaticLayout:!0,...u},d),c&&S.current.restoreViewState(la.get(U)),R.current.editor.setTheme(o),l!==void 0&&S.current.revealLine(l),C(!0),ee.current=!0}},[e,n,t,r,i,a,u,d,c,o,l]);L.useEffect(()=>{P&&F.current(S.current,R.current)},[P]),L.useEffect(()=>{!z&&!P&&q()},[z,P,q]),N.current=r,L.useEffect(()=>{var B,U;P&&v&&((B=Z.current)==null||B.dispose(),Z.current=(U=S.current)==null?void 0:U.onDidChangeModelContent(k=>{A.current||v(S.current.getValue(),k)}))},[P,v]),L.useEffect(()=>{if(P){let B=R.current.editor.onDidChangeMarkers(U=>{var oe;let k=(oe=S.current.getModel())==null?void 0:oe.uri;if(k&&U.find(ke=>ke.path===k.path)){let ke=R.current.editor.getModelMarkers({resource:k});E==null||E(ke)}});return()=>{B==null||B.dispose()}}return()=>{}},[P,E]);function y(){var B,U;(B=Z.current)==null||B.dispose(),f?c&&la.set(a,S.current.saveViewState()):(U=S.current.getModel())==null||U.dispose(),S.current.dispose()}return et.createElement(ag,{width:p,height:g,isEditorReady:P,loading:s,_ref:j,className:x,wrapperProps:b})}var u_=s_,c_=L.memo(u_),d_=c_;const Sa=[{id:"snippet-hello",title:"Entrada e saída básica",description:"Leia o nome do usuário e escreva uma mensagem de boas-vindas.",code:`using System;

Console.Write("Digite seu nome: " );
var nome = Console.ReadLine();

Console.WriteLine($"Olá, {nome}!");`},{id:"snippet-linq",title:"Filtrando com LINQ",description:"Liste alunos aprovados usando expressão fluente.",code:`using System;
using System.Linq;

var alunos = new[]
{
    new { Nome = "Ana", Nota = 92 },
    new { Nome = "Bruno", Nota = 78 },
    new { Nome = "Carla", Nota = 88 }
};

var aprovados = alunos
    .Where(a => a.Nota >= 80)
    .Select(a => a.Nome);

foreach (var aluno in aprovados)
{
    Console.WriteLine(aluno);
}`}],f_="_container_1j3zf_1",p_="_header_1j3zf_15",m_="_selector_1j3zf_51",h_="_description_1j3zf_91",g_="_editorContainer_1j3zf_101",v_="_controls_1j3zf_113",y_="_result_1j3zf_143",x_="_howTo_1j3zf_179",Wn={container:f_,header:p_,selector:m_,description:h_,editorContainer:g_,controls:v_,result:y_,howTo:x_},Qt=Sa[0];function k_(){const[e,n]=L.useState((Qt==null?void 0:Qt.id)??""),[t,r]=L.useState((Qt==null?void 0:Qt.code)??""),[i,a]=L.useState(null),o=L.useMemo(()=>Sa.find(u=>u.id===e),[e]),l=u=>{n(u);const d=Sa.find(c=>c.id===u);d&&(r(d.code),a(null))},s=()=>{const u=new Date().toLocaleTimeString(),d=["A execução real do código C# não acontece no navegador.","Use `dotnet-script` localmente ou o serviço try.dot.net para validar o snippet.","Dica: salve este arquivo como Program.cs e execute `dotnet run`."];o&&d.unshift(`Simulação baseada no snippet: ${o.title}`),a({timestamp:u,notes:d})};return w.jsxs("div",{className:Wn.container,children:[w.jsxs("header",{className:Wn.header,children:[w.jsxs("div",{children:[w.jsx("h1",{children:"Playground de código"}),w.jsx("p",{children:"Pratique a sintaxe C# com snippets curados. Clique em executar para receber orientações de teste no mundo real."})]}),w.jsxs("div",{className:Wn.selector,children:[w.jsx("label",{htmlFor:"snippetSelect",children:"Snippet inicial"}),w.jsx("select",{id:"snippetSelect",value:e,onChange:u=>l(u.target.value),children:Sa.map(u=>w.jsx("option",{value:u.id,children:u.title},u.id))})]})]}),o?w.jsx("p",{className:Wn.description,children:o.description}):null,w.jsx("div",{className:Wn.editorContainer,children:w.jsx(d_,{height:"420px",defaultLanguage:"csharp",theme:"vs-dark",value:t,onChange:u=>r(u??""),options:{automaticLayout:!0,minimap:{enabled:!1},fontSize:14,tabSize:4}})}),w.jsx("div",{className:Wn.controls,children:w.jsx("button",{type:"button",onClick:s,children:"Executar (simulação)"})}),i?w.jsxs("section",{className:Wn.result,children:[w.jsxs("h2",{children:["Resultado da simulação — ",i.timestamp]}),w.jsx("ul",{children:i.notes.map(u=>w.jsx("li",{children:u},u))})]}):null,w.jsxs("section",{className:Wn.howTo,children:[w.jsx("h2",{children:"Como executar o código de verdade"}),w.jsxs("ol",{children:[w.jsxs("li",{children:["Instale o .NET SDK 8 e verifique com ",w.jsx("code",{children:"dotnet --version"}),"."]}),w.jsxs("li",{children:["Crie um projeto temporário: ",w.jsx("code",{children:"dotnet new console -n Playground"}),"."]}),w.jsxs("li",{children:["Substitua o conteúdo de ",w.jsx("code",{children:"Program.cs"})," pelo snippet acima."]}),w.jsxs("li",{children:["Execute com ",w.jsx("code",{children:"dotnet run"})," ou ",w.jsx("code",{children:"dotnet watch run"})," para recarregar automaticamente."]})]})]})]})}const w_="_container_1o76a_1",S_="_header_1o76a_15",C_="_meta_1o76a_51",E_="_progress_1o76a_91",b_="_questions_1o76a_141",P_="_questionCard_1o76a_153",__="_options_1o76a_199",z_="_option_1o76a_199",L_="_selected_1o76a_243",O_="_correct_1o76a_251",T_="_wrong_1o76a_261",I_="_feedbackPositive_1o76a_271",A_="_feedbackNegative_1o76a_283",D_="_explanation_1o76a_295",Ae={container:w_,header:S_,meta:C_,progress:E_,questions:b_,questionCard:P_,options:__,option:z_,selected:L_,correct:O_,wrong:T_,feedbackPositive:I_,feedbackNegative:A_,explanation:D_};function j_(){const{quizId:e}=Tu(),n=Co(),[t,r]=L.useState({}),i=L.useMemo(()=>Za.find(u=>u.id===e),[e]);if(!i)return w.jsxs("div",{className:Ae.container,children:[w.jsx("h1",{children:"Quiz não encontrado"}),w.jsx("button",{type:"button",onClick:()=>n(-1),children:"Voltar"})]});const a=i.questions.reduce((u,d)=>t[d.id]===d.answer?u+1:u,0),o=Object.keys(t).length,l=(u,d)=>{r(c=>({...c,[u]:d}))},s=()=>r({});return w.jsxs("div",{className:Ae.container,children:[w.jsxs("header",{className:Ae.header,children:[w.jsxs("div",{children:[w.jsx("h1",{children:i.title}),w.jsx("p",{children:i.description})]}),w.jsxs("div",{className:Ae.meta,children:[w.jsx("span",{children:i.duration}),w.jsx(Ye,{to:"/quizzes",children:"Ver lista"})]})]}),w.jsxs("section",{className:Ae.progress,children:[w.jsxs("p",{children:["Respondido: ",o,"/",i.questions.length]}),w.jsxs("p",{children:["Pontuação parcial: ",a," ponto",a===1?"":"s"]}),w.jsx("button",{type:"button",onClick:s,children:"Limpar respostas"})]}),w.jsx("section",{className:Ae.questions,children:i.questions.map((u,d)=>{const c=t[u.id],f=c===u.answer,p=!!c;return w.jsxs("article",{className:Ae.questionCard,children:[w.jsxs("header",{children:[w.jsxs("span",{children:["Questão ",d+1]}),w.jsx("h2",{children:u.question})]}),w.jsx("div",{className:Ae.options,children:u.options.map(g=>{const x=g.value===c,b=p&&x;return w.jsx("button",{type:"button",onClick:()=>l(u.id,g.value),className:[Ae.option,x?Ae.selected:"",b&&f?Ae.correct:"",b&&!f?Ae.wrong:""].join(" "),children:g.label},g.value)})}),p?w.jsx("p",{className:f?Ae.feedbackPositive:Ae.feedbackNegative,children:f?"Resposta correta!":`Resposta correta: ${u.answer}`}):null,p?w.jsx("p",{className:Ae.explanation,children:u.explanation}):null]},u.id)})})]})}const N_="_container_y144u_1",R_="_header_y144u_15",M_="_grid_y144u_69",Pl={container:N_,header:R_,grid:M_};function F_(){return w.jsxs("div",{className:Pl.container,children:[w.jsxs("header",{className:Pl.header,children:[w.jsxs("div",{children:[w.jsx("h1",{children:"Quizzes interativos"}),w.jsx("p",{children:"Verifique sua retenção de conteúdo com feedback imediato."})]}),w.jsxs("span",{children:[Za.length," quizzes"]})]}),w.jsx("div",{className:Pl.grid,children:Za.map(e=>w.jsx(Km,{quiz:e},e.id))})]})}function B_(){return x1([{path:"/",element:w.jsx(Kx,{})},{path:"/lessons",element:w.jsx(Zb,{})},{path:"/lessons/:lessonId",element:w.jsx(Gb,{})},{path:"/quizzes",element:w.jsx(F_,{})},{path:"/quizzes/:quizId",element:w.jsx(j_,{})},{path:"/playground",element:w.jsx(k_,{})},{path:"/challenges",element:w.jsx(hx,{})},{path:"/challenges/:challengeId",element:w.jsx(ox,{})},{path:"*",element:w.jsx(tP,{})}])??null}const q_="_appShell_u767s_1",U_="_mainContent_u767s_17",kf={appShell:q_,mainContent:U_};function $_(){return w.jsxs("div",{className:kf.appShell,children:[w.jsx(nx,{}),w.jsx("main",{className:kf.mainContent,children:w.jsx(B_,{})})]})}const sg=document.getElementById("root");if(!sg)throw new Error("Elemento root não encontrado");_l.createRoot(sg).render(w.jsx(et.StrictMode,{children:w.jsx(q1,{children:w.jsx($_,{})})}));
//# sourceMappingURL=index-BqK_d2Ll.js.map
