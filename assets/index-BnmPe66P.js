function Fw(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function sv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ov={exports:{}},su={},av={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fo=Symbol.for("react.element"),Uw=Symbol.for("react.portal"),jw=Symbol.for("react.fragment"),zw=Symbol.for("react.strict_mode"),Bw=Symbol.for("react.profiler"),$w=Symbol.for("react.provider"),Hw=Symbol.for("react.context"),Ww=Symbol.for("react.forward_ref"),Kw=Symbol.for("react.suspense"),Gw=Symbol.for("react.memo"),qw=Symbol.for("react.lazy"),fm=Symbol.iterator;function Qw(t){return t===null||typeof t!="object"?null:(t=fm&&t[fm]||t["@@iterator"],typeof t=="function"?t:null)}var lv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},uv=Object.assign,cv={};function ns(t,e,n){this.props=t,this.context=e,this.refs=cv,this.updater=n||lv}ns.prototype.isReactComponent={};ns.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ns.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function hv(){}hv.prototype=ns.prototype;function xf(t,e,n){this.props=t,this.context=e,this.refs=cv,this.updater=n||lv}var Nf=xf.prototype=new hv;Nf.constructor=xf;uv(Nf,ns.prototype);Nf.isPureReactComponent=!0;var dm=Array.isArray,fv=Object.prototype.hasOwnProperty,Of={current:null},dv={key:!0,ref:!0,__self:!0,__source:!0};function pv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)fv.call(e,r)&&!dv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Fo,type:t,key:s,ref:o,props:i,_owner:Of.current}}function Yw(t,e){return{$$typeof:Fo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fo}function Xw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var pm=/\/+/g;function lc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Xw(""+t.key):e.toString(36)}function Ha(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Fo:case Uw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+lc(o,0):r,dm(i)?(n="",t!=null&&(n=t.replace(pm,"$&/")+"/"),Ha(i,e,n,"",function(h){return h})):i!=null&&(bf(i)&&(i=Yw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(pm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",dm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+lc(s,l);o+=Ha(s,e,n,u,i)}else if(u=Qw(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+lc(s,l++),o+=Ha(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ea(t,e,n){if(t==null)return t;var r=[],i=0;return Ha(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Jw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ot={current:null},Wa={transition:null},Zw={ReactCurrentDispatcher:ot,ReactCurrentBatchConfig:Wa,ReactCurrentOwner:Of};function mv(){throw Error("act(...) is not supported in production builds of React.")}J.Children={map:Ea,forEach:function(t,e,n){Ea(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ea(t,function(){e++}),e},toArray:function(t){return Ea(t,function(e){return e})||[]},only:function(t){if(!bf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};J.Component=ns;J.Fragment=jw;J.Profiler=Bw;J.PureComponent=xf;J.StrictMode=zw;J.Suspense=Kw;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zw;J.act=mv;J.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=uv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Of.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)fv.call(e,u)&&!dv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Fo,type:t.type,key:i,ref:s,props:r,_owner:o}};J.createContext=function(t){return t={$$typeof:Hw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$w,_context:t},t.Consumer=t};J.createElement=pv;J.createFactory=function(t){var e=pv.bind(null,t);return e.type=t,e};J.createRef=function(){return{current:null}};J.forwardRef=function(t){return{$$typeof:Ww,render:t}};J.isValidElement=bf;J.lazy=function(t){return{$$typeof:qw,_payload:{_status:-1,_result:t},_init:Jw}};J.memo=function(t,e){return{$$typeof:Gw,type:t,compare:e===void 0?null:e}};J.startTransition=function(t){var e=Wa.transition;Wa.transition={};try{t()}finally{Wa.transition=e}};J.unstable_act=mv;J.useCallback=function(t,e){return ot.current.useCallback(t,e)};J.useContext=function(t){return ot.current.useContext(t)};J.useDebugValue=function(){};J.useDeferredValue=function(t){return ot.current.useDeferredValue(t)};J.useEffect=function(t,e){return ot.current.useEffect(t,e)};J.useId=function(){return ot.current.useId()};J.useImperativeHandle=function(t,e,n){return ot.current.useImperativeHandle(t,e,n)};J.useInsertionEffect=function(t,e){return ot.current.useInsertionEffect(t,e)};J.useLayoutEffect=function(t,e){return ot.current.useLayoutEffect(t,e)};J.useMemo=function(t,e){return ot.current.useMemo(t,e)};J.useReducer=function(t,e,n){return ot.current.useReducer(t,e,n)};J.useRef=function(t){return ot.current.useRef(t)};J.useState=function(t){return ot.current.useState(t)};J.useSyncExternalStore=function(t,e,n){return ot.current.useSyncExternalStore(t,e,n)};J.useTransition=function(){return ot.current.useTransition()};J.version="18.3.1";av.exports=J;var B=av.exports;const Df=sv(B),eT=Fw({__proto__:null,default:Df},[B]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tT=B,nT=Symbol.for("react.element"),rT=Symbol.for("react.fragment"),iT=Object.prototype.hasOwnProperty,sT=tT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oT={key:!0,ref:!0,__self:!0,__source:!0};function gv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)iT.call(e,r)&&!oT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:nT,type:t,key:s,ref:o,props:i,_owner:sT.current}}su.Fragment=rT;su.jsx=gv;su.jsxs=gv;ov.exports=su;var j=ov.exports,yv={exports:{}},wt={},vv={exports:{}},_v={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,q){var Q=z.length;z.push(q);e:for(;0<Q;){var ge=Q-1>>>1,se=z[ge];if(0<i(se,q))z[ge]=q,z[Q]=se,Q=ge;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var q=z[0],Q=z.pop();if(Q!==q){z[0]=Q;e:for(var ge=0,se=z.length,Ie=se>>>1;ge<Ie;){var an=2*(ge+1)-1,ln=z[an],un=an+1,cn=z[un];if(0>i(ln,Q))un<se&&0>i(cn,ln)?(z[ge]=cn,z[un]=Q,ge=un):(z[ge]=ln,z[an]=Q,ge=an);else if(un<se&&0>i(cn,Q))z[ge]=cn,z[un]=Q,ge=un;else break e}}return q}function i(z,q){var Q=z.sortIndex-q.sortIndex;return Q!==0?Q:z.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],d=1,p=null,y=3,P=!1,k=!1,x=!1,N=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(z){for(var q=n(h);q!==null;){if(q.callback===null)r(h);else if(q.startTime<=z)r(h),q.sortIndex=q.expirationTime,e(u,q);else break;q=n(h)}}function b(z){if(x=!1,T(z),!k)if(n(u)!==null)k=!0,hs(L);else{var q=n(h);q!==null&&on(b,q.startTime-z)}}function L(z,q){k=!1,x&&(x=!1,_(g),g=-1),P=!0;var Q=y;try{for(T(q),p=n(u);p!==null&&(!(p.expirationTime>q)||z&&!A());){var ge=p.callback;if(typeof ge=="function"){p.callback=null,y=p.priorityLevel;var se=ge(p.expirationTime<=q);q=t.unstable_now(),typeof se=="function"?p.callback=se:p===n(u)&&r(u),T(q)}else r(u);p=n(u)}if(p!==null)var Ie=!0;else{var an=n(h);an!==null&&on(b,an.startTime-q),Ie=!1}return Ie}finally{p=null,y=Q,P=!1}}var U=!1,w=null,g=-1,E=5,I=-1;function A(){return!(t.unstable_now()-I<E)}function R(){if(w!==null){var z=t.unstable_now();I=z;var q=!0;try{q=w(!0,z)}finally{q?S():(U=!1,w=null)}}else U=!1}var S;if(typeof v=="function")S=function(){v(R)};else if(typeof MessageChannel<"u"){var St=new MessageChannel,Ar=St.port2;St.port1.onmessage=R,S=function(){Ar.postMessage(null)}}else S=function(){N(R,0)};function hs(z){w=z,U||(U=!0,S())}function on(z,q){g=N(function(){z(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){k||P||(k=!0,hs(L))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(y){case 1:case 2:case 3:var q=3;break;default:q=y}var Q=y;y=q;try{return z()}finally{y=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Q=y;y=z;try{return q()}finally{y=Q}},t.unstable_scheduleCallback=function(z,q,Q){var ge=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ge+Q:ge):Q=ge,z){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=Q+se,z={id:d++,callback:q,priorityLevel:z,startTime:Q,expirationTime:se,sortIndex:-1},Q>ge?(z.sortIndex=Q,e(h,z),n(u)===null&&z===n(h)&&(x?(_(g),g=-1):x=!0,on(b,Q-ge))):(z.sortIndex=se,e(u,z),k||P||(k=!0,hs(L))),z},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(z){var q=y;return function(){var Q=y;y=q;try{return z.apply(this,arguments)}finally{y=Q}}}})(_v);vv.exports=_v;var aT=vv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lT=B,Et=aT;function M(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ev=new Set,oo={};function ri(t,e){zi(t,e),zi(t+"Capture",e)}function zi(t,e){for(oo[t]=e,t=0;t<e.length;t++)Ev.add(e[t])}var Sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xc=Object.prototype.hasOwnProperty,uT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mm={},gm={};function cT(t){return Xc.call(gm,t)?!0:Xc.call(mm,t)?!1:uT.test(t)?gm[t]=!0:(mm[t]=!0,!1)}function hT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function fT(t,e,n,r){if(e===null||typeof e>"u"||hT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function at(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var $e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$e[t]=new at(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$e[e]=new at(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$e[t]=new at(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$e[t]=new at(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$e[t]=new at(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$e[t]=new at(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$e[t]=new at(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$e[t]=new at(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$e[t]=new at(t,5,!1,t.toLowerCase(),null,!1,!1)});var Lf=/[\-:]([a-z])/g;function Mf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Lf,Mf);$e[e]=new at(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Lf,Mf);$e[e]=new at(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Lf,Mf);$e[e]=new at(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$e[t]=new at(t,1,!1,t.toLowerCase(),null,!1,!1)});$e.xlinkHref=new at("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$e[t]=new at(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vf(t,e,n,r){var i=$e.hasOwnProperty(e)?$e[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(fT(e,n,i,r)&&(n=null),r||i===null?cT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var On=lT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wa=Symbol.for("react.element"),mi=Symbol.for("react.portal"),gi=Symbol.for("react.fragment"),Ff=Symbol.for("react.strict_mode"),Jc=Symbol.for("react.profiler"),wv=Symbol.for("react.provider"),Tv=Symbol.for("react.context"),Uf=Symbol.for("react.forward_ref"),Zc=Symbol.for("react.suspense"),eh=Symbol.for("react.suspense_list"),jf=Symbol.for("react.memo"),Bn=Symbol.for("react.lazy"),Iv=Symbol.for("react.offscreen"),ym=Symbol.iterator;function As(t){return t===null||typeof t!="object"?null:(t=ym&&t[ym]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,uc;function Ls(t){if(uc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);uc=e&&e[1]||""}return`
`+uc+t}var cc=!1;function hc(t,e){if(!t||cc)return"";cc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{cc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ls(t):""}function dT(t){switch(t.tag){case 5:return Ls(t.type);case 16:return Ls("Lazy");case 13:return Ls("Suspense");case 19:return Ls("SuspenseList");case 0:case 2:case 15:return t=hc(t.type,!1),t;case 11:return t=hc(t.type.render,!1),t;case 1:return t=hc(t.type,!0),t;default:return""}}function th(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gi:return"Fragment";case mi:return"Portal";case Jc:return"Profiler";case Ff:return"StrictMode";case Zc:return"Suspense";case eh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Tv:return(t.displayName||"Context")+".Consumer";case wv:return(t._context.displayName||"Context")+".Provider";case Uf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jf:return e=t.displayName||null,e!==null?e:th(t.type)||"Memo";case Bn:e=t._payload,t=t._init;try{return th(t(e))}catch{}}return null}function pT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return th(e);case 8:return e===Ff?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Sv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function mT(t){var e=Sv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ta(t){t._valueTracker||(t._valueTracker=mT(t))}function Av(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Sv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function hl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nh(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function vm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=fr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Pv(t,e){e=e.checked,e!=null&&Vf(t,"checked",e,!1)}function rh(t,e){Pv(t,e);var n=fr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ih(t,e.type,n):e.hasOwnProperty("defaultValue")&&ih(t,e.type,fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function _m(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ih(t,e,n){(e!=="number"||hl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ms=Array.isArray;function xi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+fr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function sh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(M(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Em(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(M(92));if(Ms(n)){if(1<n.length)throw Error(M(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:fr(n)}}function kv(t,e){var n=fr(e.value),r=fr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function wm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Cv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Cv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ia,Rv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ia=Ia||document.createElement("div"),Ia.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ia.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ao(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Hs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gT=["Webkit","ms","Moz","O"];Object.keys(Hs).forEach(function(t){gT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Hs[e]=Hs[t]})});function xv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Hs.hasOwnProperty(t)&&Hs[t]?(""+e).trim():e+"px"}function Nv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=xv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var yT=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ah(t,e){if(e){if(yT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(M(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(M(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(M(61))}if(e.style!=null&&typeof e.style!="object")throw Error(M(62))}}function lh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uh=null;function zf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ch=null,Ni=null,Oi=null;function Tm(t){if(t=zo(t)){if(typeof ch!="function")throw Error(M(280));var e=t.stateNode;e&&(e=cu(e),ch(t.stateNode,t.type,e))}}function Ov(t){Ni?Oi?Oi.push(t):Oi=[t]:Ni=t}function bv(){if(Ni){var t=Ni,e=Oi;if(Oi=Ni=null,Tm(t),e)for(t=0;t<e.length;t++)Tm(e[t])}}function Dv(t,e){return t(e)}function Lv(){}var fc=!1;function Mv(t,e,n){if(fc)return t(e,n);fc=!0;try{return Dv(t,e,n)}finally{fc=!1,(Ni!==null||Oi!==null)&&(Lv(),bv())}}function lo(t,e){var n=t.stateNode;if(n===null)return null;var r=cu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(M(231,e,typeof n));return n}var hh=!1;if(Sn)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){hh=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{hh=!1}function vT(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(d){this.onError(d)}}var Ws=!1,fl=null,dl=!1,fh=null,_T={onError:function(t){Ws=!0,fl=t}};function ET(t,e,n,r,i,s,o,l,u){Ws=!1,fl=null,vT.apply(_T,arguments)}function wT(t,e,n,r,i,s,o,l,u){if(ET.apply(this,arguments),Ws){if(Ws){var h=fl;Ws=!1,fl=null}else throw Error(M(198));dl||(dl=!0,fh=h)}}function ii(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Vv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Im(t){if(ii(t)!==t)throw Error(M(188))}function TT(t){var e=t.alternate;if(!e){if(e=ii(t),e===null)throw Error(M(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Im(i),t;if(s===r)return Im(i),e;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?t:e}function Fv(t){return t=TT(t),t!==null?Uv(t):null}function Uv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Uv(t);if(e!==null)return e;t=t.sibling}return null}var jv=Et.unstable_scheduleCallback,Sm=Et.unstable_cancelCallback,IT=Et.unstable_shouldYield,ST=Et.unstable_requestPaint,Se=Et.unstable_now,AT=Et.unstable_getCurrentPriorityLevel,Bf=Et.unstable_ImmediatePriority,zv=Et.unstable_UserBlockingPriority,pl=Et.unstable_NormalPriority,PT=Et.unstable_LowPriority,Bv=Et.unstable_IdlePriority,ou=null,Jt=null;function kT(t){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(ou,t,void 0,(t.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:xT,CT=Math.log,RT=Math.LN2;function xT(t){return t>>>=0,t===0?32:31-(CT(t)/RT|0)|0}var Sa=64,Aa=4194304;function Vs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ml(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Vs(l):(s&=o,s!==0&&(r=Vs(s)))}else o=n&~i,o!==0?r=Vs(o):s!==0&&(r=Vs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ut(e),i=1<<n,r|=t[n],e&=~i;return r}function NT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function OT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ut(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=NT(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function dh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function $v(){var t=Sa;return Sa<<=1,!(Sa&4194240)&&(Sa=64),t}function dc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Uo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ut(e),t[e]=n}function bT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ut(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function $f(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ut(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ie=0;function Hv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Wv,Hf,Kv,Gv,qv,ph=!1,Pa=[],er=null,tr=null,nr=null,uo=new Map,co=new Map,Hn=[],DT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Am(t,e){switch(t){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":uo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":co.delete(e.pointerId)}}function ks(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=zo(e),e!==null&&Hf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function LT(t,e,n,r,i){switch(e){case"focusin":return er=ks(er,t,e,n,r,i),!0;case"dragenter":return tr=ks(tr,t,e,n,r,i),!0;case"mouseover":return nr=ks(nr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return uo.set(s,ks(uo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,co.set(s,ks(co.get(s)||null,t,e,n,r,i)),!0}return!1}function Qv(t){var e=Dr(t.target);if(e!==null){var n=ii(e);if(n!==null){if(e=n.tag,e===13){if(e=Vv(n),e!==null){t.blockedOn=e,qv(t.priority,function(){Kv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ka(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=mh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);uh=r,n.target.dispatchEvent(r),uh=null}else return e=zo(n),e!==null&&Hf(e),t.blockedOn=n,!1;e.shift()}return!0}function Pm(t,e,n){Ka(t)&&n.delete(e)}function MT(){ph=!1,er!==null&&Ka(er)&&(er=null),tr!==null&&Ka(tr)&&(tr=null),nr!==null&&Ka(nr)&&(nr=null),uo.forEach(Pm),co.forEach(Pm)}function Cs(t,e){t.blockedOn===e&&(t.blockedOn=null,ph||(ph=!0,Et.unstable_scheduleCallback(Et.unstable_NormalPriority,MT)))}function ho(t){function e(i){return Cs(i,t)}if(0<Pa.length){Cs(Pa[0],t);for(var n=1;n<Pa.length;n++){var r=Pa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(er!==null&&Cs(er,t),tr!==null&&Cs(tr,t),nr!==null&&Cs(nr,t),uo.forEach(e),co.forEach(e),n=0;n<Hn.length;n++)r=Hn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Hn.length&&(n=Hn[0],n.blockedOn===null);)Qv(n),n.blockedOn===null&&Hn.shift()}var bi=On.ReactCurrentBatchConfig,gl=!0;function VT(t,e,n,r){var i=ie,s=bi.transition;bi.transition=null;try{ie=1,Wf(t,e,n,r)}finally{ie=i,bi.transition=s}}function FT(t,e,n,r){var i=ie,s=bi.transition;bi.transition=null;try{ie=4,Wf(t,e,n,r)}finally{ie=i,bi.transition=s}}function Wf(t,e,n,r){if(gl){var i=mh(t,e,n,r);if(i===null)Ic(t,e,r,yl,n),Am(t,r);else if(LT(i,t,e,n,r))r.stopPropagation();else if(Am(t,r),e&4&&-1<DT.indexOf(t)){for(;i!==null;){var s=zo(i);if(s!==null&&Wv(s),s=mh(t,e,n,r),s===null&&Ic(t,e,r,yl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ic(t,e,r,null,n)}}var yl=null;function mh(t,e,n,r){if(yl=null,t=zf(r),t=Dr(t),t!==null)if(e=ii(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Vv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yl=t,null}function Yv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(AT()){case Bf:return 1;case zv:return 4;case pl:case PT:return 16;case Bv:return 536870912;default:return 16}default:return 16}}var Yn=null,Kf=null,Ga=null;function Xv(){if(Ga)return Ga;var t,e=Kf,n=e.length,r,i="value"in Yn?Yn.value:Yn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ga=i.slice(t,1<r?1-r:void 0)}function qa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ka(){return!0}function km(){return!1}function Tt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ka:km,this.isPropagationStopped=km,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ka)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ka)},persist:function(){},isPersistent:ka}),e}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gf=Tt(rs),jo=Ee({},rs,{view:0,detail:0}),UT=Tt(jo),pc,mc,Rs,au=Ee({},jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Rs&&(Rs&&t.type==="mousemove"?(pc=t.screenX-Rs.screenX,mc=t.screenY-Rs.screenY):mc=pc=0,Rs=t),pc)},movementY:function(t){return"movementY"in t?t.movementY:mc}}),Cm=Tt(au),jT=Ee({},au,{dataTransfer:0}),zT=Tt(jT),BT=Ee({},jo,{relatedTarget:0}),gc=Tt(BT),$T=Ee({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),HT=Tt($T),WT=Ee({},rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),KT=Tt(WT),GT=Ee({},rs,{data:0}),Rm=Tt(GT),qT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},QT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},YT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function XT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=YT[t])?!!e[t]:!1}function qf(){return XT}var JT=Ee({},jo,{key:function(t){if(t.key){var e=qT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=qa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?QT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qf,charCode:function(t){return t.type==="keypress"?qa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ZT=Tt(JT),eI=Ee({},au,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xm=Tt(eI),tI=Ee({},jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qf}),nI=Tt(tI),rI=Ee({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),iI=Tt(rI),sI=Ee({},au,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),oI=Tt(sI),aI=[9,13,27,32],Qf=Sn&&"CompositionEvent"in window,Ks=null;Sn&&"documentMode"in document&&(Ks=document.documentMode);var lI=Sn&&"TextEvent"in window&&!Ks,Jv=Sn&&(!Qf||Ks&&8<Ks&&11>=Ks),Nm=" ",Om=!1;function Zv(t,e){switch(t){case"keyup":return aI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function e0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yi=!1;function uI(t,e){switch(t){case"compositionend":return e0(e);case"keypress":return e.which!==32?null:(Om=!0,Nm);case"textInput":return t=e.data,t===Nm&&Om?null:t;default:return null}}function cI(t,e){if(yi)return t==="compositionend"||!Qf&&Zv(t,e)?(t=Xv(),Ga=Kf=Yn=null,yi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Jv&&e.locale!=="ko"?null:e.data;default:return null}}var hI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!hI[t.type]:e==="textarea"}function t0(t,e,n,r){Ov(r),e=vl(e,"onChange"),0<e.length&&(n=new Gf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Gs=null,fo=null;function fI(t){f0(t,0)}function lu(t){var e=Ei(t);if(Av(e))return t}function dI(t,e){if(t==="change")return e}var n0=!1;if(Sn){var yc;if(Sn){var vc="oninput"in document;if(!vc){var Dm=document.createElement("div");Dm.setAttribute("oninput","return;"),vc=typeof Dm.oninput=="function"}yc=vc}else yc=!1;n0=yc&&(!document.documentMode||9<document.documentMode)}function Lm(){Gs&&(Gs.detachEvent("onpropertychange",r0),fo=Gs=null)}function r0(t){if(t.propertyName==="value"&&lu(fo)){var e=[];t0(e,fo,t,zf(t)),Mv(fI,e)}}function pI(t,e,n){t==="focusin"?(Lm(),Gs=e,fo=n,Gs.attachEvent("onpropertychange",r0)):t==="focusout"&&Lm()}function mI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return lu(fo)}function gI(t,e){if(t==="click")return lu(e)}function yI(t,e){if(t==="input"||t==="change")return lu(e)}function vI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zt=typeof Object.is=="function"?Object.is:vI;function po(t,e){if(zt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Xc.call(e,i)||!zt(t[i],e[i]))return!1}return!0}function Mm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vm(t,e){var n=Mm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mm(n)}}function i0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?i0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function s0(){for(var t=window,e=hl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=hl(t.document)}return e}function Yf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function _I(t){var e=s0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&i0(n.ownerDocument.documentElement,n)){if(r!==null&&Yf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Vm(n,s);var o=Vm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var EI=Sn&&"documentMode"in document&&11>=document.documentMode,vi=null,gh=null,qs=null,yh=!1;function Fm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yh||vi==null||vi!==hl(r)||(r=vi,"selectionStart"in r&&Yf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qs&&po(qs,r)||(qs=r,r=vl(gh,"onSelect"),0<r.length&&(e=new Gf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=vi)))}function Ca(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var _i={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionend:Ca("Transition","TransitionEnd")},_c={},o0={};Sn&&(o0=document.createElement("div").style,"AnimationEvent"in window||(delete _i.animationend.animation,delete _i.animationiteration.animation,delete _i.animationstart.animation),"TransitionEvent"in window||delete _i.transitionend.transition);function uu(t){if(_c[t])return _c[t];if(!_i[t])return t;var e=_i[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in o0)return _c[t]=e[n];return t}var a0=uu("animationend"),l0=uu("animationiteration"),u0=uu("animationstart"),c0=uu("transitionend"),h0=new Map,Um="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(t,e){h0.set(t,e),ri(e,[t])}for(var Ec=0;Ec<Um.length;Ec++){var wc=Um[Ec],wI=wc.toLowerCase(),TI=wc[0].toUpperCase()+wc.slice(1);Er(wI,"on"+TI)}Er(a0,"onAnimationEnd");Er(l0,"onAnimationIteration");Er(u0,"onAnimationStart");Er("dblclick","onDoubleClick");Er("focusin","onFocus");Er("focusout","onBlur");Er(c0,"onTransitionEnd");zi("onMouseEnter",["mouseout","mouseover"]);zi("onMouseLeave",["mouseout","mouseover"]);zi("onPointerEnter",["pointerout","pointerover"]);zi("onPointerLeave",["pointerout","pointerover"]);ri("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ri("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ri("onBeforeInput",["compositionend","keypress","textInput","paste"]);ri("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ri("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ri("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),II=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fs));function jm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,wT(r,e,void 0,t),t.currentTarget=null}function f0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;jm(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;jm(i,l,h),s=u}}}if(dl)throw t=fh,dl=!1,fh=null,t}function he(t,e){var n=e[Th];n===void 0&&(n=e[Th]=new Set);var r=t+"__bubble";n.has(r)||(d0(e,t,2,!1),n.add(r))}function Tc(t,e,n){var r=0;e&&(r|=4),d0(n,t,r,e)}var Ra="_reactListening"+Math.random().toString(36).slice(2);function mo(t){if(!t[Ra]){t[Ra]=!0,Ev.forEach(function(n){n!=="selectionchange"&&(II.has(n)||Tc(n,!1,t),Tc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ra]||(e[Ra]=!0,Tc("selectionchange",!1,e))}}function d0(t,e,n,r){switch(Yv(e)){case 1:var i=VT;break;case 4:i=FT;break;default:i=Wf}n=i.bind(null,e,n,t),i=void 0,!hh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ic(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Dr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Mv(function(){var h=s,d=zf(n),p=[];e:{var y=h0.get(t);if(y!==void 0){var P=Gf,k=t;switch(t){case"keypress":if(qa(n)===0)break e;case"keydown":case"keyup":P=ZT;break;case"focusin":k="focus",P=gc;break;case"focusout":k="blur",P=gc;break;case"beforeblur":case"afterblur":P=gc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=Cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=zT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=nI;break;case a0:case l0:case u0:P=HT;break;case c0:P=iI;break;case"scroll":P=UT;break;case"wheel":P=oI;break;case"copy":case"cut":case"paste":P=KT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=xm}var x=(e&4)!==0,N=!x&&t==="scroll",_=x?y!==null?y+"Capture":null:y;x=[];for(var v=h,T;v!==null;){T=v;var b=T.stateNode;if(T.tag===5&&b!==null&&(T=b,_!==null&&(b=lo(v,_),b!=null&&x.push(go(v,b,T)))),N)break;v=v.return}0<x.length&&(y=new P(y,k,null,n,d),p.push({event:y,listeners:x}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",P=t==="mouseout"||t==="pointerout",y&&n!==uh&&(k=n.relatedTarget||n.fromElement)&&(Dr(k)||k[An]))break e;if((P||y)&&(y=d.window===d?d:(y=d.ownerDocument)?y.defaultView||y.parentWindow:window,P?(k=n.relatedTarget||n.toElement,P=h,k=k?Dr(k):null,k!==null&&(N=ii(k),k!==N||k.tag!==5&&k.tag!==6)&&(k=null)):(P=null,k=h),P!==k)){if(x=Cm,b="onMouseLeave",_="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=xm,b="onPointerLeave",_="onPointerEnter",v="pointer"),N=P==null?y:Ei(P),T=k==null?y:Ei(k),y=new x(b,v+"leave",P,n,d),y.target=N,y.relatedTarget=T,b=null,Dr(d)===h&&(x=new x(_,v+"enter",k,n,d),x.target=T,x.relatedTarget=N,b=x),N=b,P&&k)t:{for(x=P,_=k,v=0,T=x;T;T=di(T))v++;for(T=0,b=_;b;b=di(b))T++;for(;0<v-T;)x=di(x),v--;for(;0<T-v;)_=di(_),T--;for(;v--;){if(x===_||_!==null&&x===_.alternate)break t;x=di(x),_=di(_)}x=null}else x=null;P!==null&&zm(p,y,P,x,!1),k!==null&&N!==null&&zm(p,N,k,x,!0)}}e:{if(y=h?Ei(h):window,P=y.nodeName&&y.nodeName.toLowerCase(),P==="select"||P==="input"&&y.type==="file")var L=dI;else if(bm(y))if(n0)L=yI;else{L=mI;var U=pI}else(P=y.nodeName)&&P.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(L=gI);if(L&&(L=L(t,h))){t0(p,L,n,d);break e}U&&U(t,y,h),t==="focusout"&&(U=y._wrapperState)&&U.controlled&&y.type==="number"&&ih(y,"number",y.value)}switch(U=h?Ei(h):window,t){case"focusin":(bm(U)||U.contentEditable==="true")&&(vi=U,gh=h,qs=null);break;case"focusout":qs=gh=vi=null;break;case"mousedown":yh=!0;break;case"contextmenu":case"mouseup":case"dragend":yh=!1,Fm(p,n,d);break;case"selectionchange":if(EI)break;case"keydown":case"keyup":Fm(p,n,d)}var w;if(Qf)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else yi?Zv(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(Jv&&n.locale!=="ko"&&(yi||g!=="onCompositionStart"?g==="onCompositionEnd"&&yi&&(w=Xv()):(Yn=d,Kf="value"in Yn?Yn.value:Yn.textContent,yi=!0)),U=vl(h,g),0<U.length&&(g=new Rm(g,t,null,n,d),p.push({event:g,listeners:U}),w?g.data=w:(w=e0(n),w!==null&&(g.data=w)))),(w=lI?uI(t,n):cI(t,n))&&(h=vl(h,"onBeforeInput"),0<h.length&&(d=new Rm("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:h}),d.data=w))}f0(p,e)})}function go(t,e,n){return{instance:t,listener:e,currentTarget:n}}function vl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=lo(t,n),s!=null&&r.unshift(go(t,s,i)),s=lo(t,e),s!=null&&r.push(go(t,s,i))),t=t.return}return r}function di(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=lo(n,s),u!=null&&o.unshift(go(n,u,l))):i||(u=lo(n,s),u!=null&&o.push(go(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var SI=/\r\n?/g,AI=/\u0000|\uFFFD/g;function Bm(t){return(typeof t=="string"?t:""+t).replace(SI,`
`).replace(AI,"")}function xa(t,e,n){if(e=Bm(e),Bm(t)!==e&&n)throw Error(M(425))}function _l(){}var vh=null,_h=null;function Eh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wh=typeof setTimeout=="function"?setTimeout:void 0,PI=typeof clearTimeout=="function"?clearTimeout:void 0,$m=typeof Promise=="function"?Promise:void 0,kI=typeof queueMicrotask=="function"?queueMicrotask:typeof $m<"u"?function(t){return $m.resolve(null).then(t).catch(CI)}:wh;function CI(t){setTimeout(function(){throw t})}function Sc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ho(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ho(e)}function rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Hm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var is=Math.random().toString(36).slice(2),qt="__reactFiber$"+is,yo="__reactProps$"+is,An="__reactContainer$"+is,Th="__reactEvents$"+is,RI="__reactListeners$"+is,xI="__reactHandles$"+is;function Dr(t){var e=t[qt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[An]||n[qt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hm(t);t!==null;){if(n=t[qt])return n;t=Hm(t)}return e}t=n,n=t.parentNode}return null}function zo(t){return t=t[qt]||t[An],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ei(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(M(33))}function cu(t){return t[yo]||null}var Ih=[],wi=-1;function wr(t){return{current:t}}function fe(t){0>wi||(t.current=Ih[wi],Ih[wi]=null,wi--)}function le(t,e){wi++,Ih[wi]=t.current,t.current=e}var dr={},et=wr(dr),ct=wr(!1),Hr=dr;function Bi(t,e){var n=t.type.contextTypes;if(!n)return dr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ht(t){return t=t.childContextTypes,t!=null}function El(){fe(ct),fe(et)}function Wm(t,e,n){if(et.current!==dr)throw Error(M(168));le(et,e),le(ct,n)}function p0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(M(108,pT(t)||"Unknown",i));return Ee({},n,r)}function wl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||dr,Hr=et.current,le(et,t),le(ct,ct.current),!0}function Km(t,e,n){var r=t.stateNode;if(!r)throw Error(M(169));n?(t=p0(t,e,Hr),r.__reactInternalMemoizedMergedChildContext=t,fe(ct),fe(et),le(et,t)):fe(ct),le(ct,n)}var pn=null,hu=!1,Ac=!1;function m0(t){pn===null?pn=[t]:pn.push(t)}function NI(t){hu=!0,m0(t)}function Tr(){if(!Ac&&pn!==null){Ac=!0;var t=0,e=ie;try{var n=pn;for(ie=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}pn=null,hu=!1}catch(i){throw pn!==null&&(pn=pn.slice(t+1)),jv(Bf,Tr),i}finally{ie=e,Ac=!1}}return null}var Ti=[],Ii=0,Tl=null,Il=0,At=[],Pt=0,Wr=null,mn=1,gn="";function xr(t,e){Ti[Ii++]=Il,Ti[Ii++]=Tl,Tl=t,Il=e}function g0(t,e,n){At[Pt++]=mn,At[Pt++]=gn,At[Pt++]=Wr,Wr=t;var r=mn;t=gn;var i=32-Ut(r)-1;r&=~(1<<i),n+=1;var s=32-Ut(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,mn=1<<32-Ut(e)+i|n<<i|r,gn=s+t}else mn=1<<s|n<<i|r,gn=t}function Xf(t){t.return!==null&&(xr(t,1),g0(t,1,0))}function Jf(t){for(;t===Tl;)Tl=Ti[--Ii],Ti[Ii]=null,Il=Ti[--Ii],Ti[Ii]=null;for(;t===Wr;)Wr=At[--Pt],At[Pt]=null,gn=At[--Pt],At[Pt]=null,mn=At[--Pt],At[Pt]=null}var yt=null,gt=null,pe=!1,Lt=null;function y0(t,e){var n=kt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Gm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yt=t,gt=rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yt=t,gt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Wr!==null?{id:mn,overflow:gn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=kt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yt=t,gt=null,!0):!1;default:return!1}}function Sh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ah(t){if(pe){var e=gt;if(e){var n=e;if(!Gm(t,e)){if(Sh(t))throw Error(M(418));e=rr(n.nextSibling);var r=yt;e&&Gm(t,e)?y0(r,n):(t.flags=t.flags&-4097|2,pe=!1,yt=t)}}else{if(Sh(t))throw Error(M(418));t.flags=t.flags&-4097|2,pe=!1,yt=t}}}function qm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yt=t}function Na(t){if(t!==yt)return!1;if(!pe)return qm(t),pe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Eh(t.type,t.memoizedProps)),e&&(e=gt)){if(Sh(t))throw v0(),Error(M(418));for(;e;)y0(t,e),e=rr(e.nextSibling)}if(qm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gt=rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gt=null}}else gt=yt?rr(t.stateNode.nextSibling):null;return!0}function v0(){for(var t=gt;t;)t=rr(t.nextSibling)}function $i(){gt=yt=null,pe=!1}function Zf(t){Lt===null?Lt=[t]:Lt.push(t)}var OI=On.ReactCurrentBatchConfig;function xs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,t))}return t}function Oa(t,e){throw t=Object.prototype.toString.call(e),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Qm(t){var e=t._init;return e(t._payload)}function _0(t){function e(_,v){if(t){var T=_.deletions;T===null?(_.deletions=[v],_.flags|=16):T.push(v)}}function n(_,v){if(!t)return null;for(;v!==null;)e(_,v),v=v.sibling;return null}function r(_,v){for(_=new Map;v!==null;)v.key!==null?_.set(v.key,v):_.set(v.index,v),v=v.sibling;return _}function i(_,v){return _=ar(_,v),_.index=0,_.sibling=null,_}function s(_,v,T){return _.index=T,t?(T=_.alternate,T!==null?(T=T.index,T<v?(_.flags|=2,v):T):(_.flags|=2,v)):(_.flags|=1048576,v)}function o(_){return t&&_.alternate===null&&(_.flags|=2),_}function l(_,v,T,b){return v===null||v.tag!==6?(v=Oc(T,_.mode,b),v.return=_,v):(v=i(v,T),v.return=_,v)}function u(_,v,T,b){var L=T.type;return L===gi?d(_,v,T.props.children,b,T.key):v!==null&&(v.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Bn&&Qm(L)===v.type)?(b=i(v,T.props),b.ref=xs(_,v,T),b.return=_,b):(b=tl(T.type,T.key,T.props,null,_.mode,b),b.ref=xs(_,v,T),b.return=_,b)}function h(_,v,T,b){return v===null||v.tag!==4||v.stateNode.containerInfo!==T.containerInfo||v.stateNode.implementation!==T.implementation?(v=bc(T,_.mode,b),v.return=_,v):(v=i(v,T.children||[]),v.return=_,v)}function d(_,v,T,b,L){return v===null||v.tag!==7?(v=Ur(T,_.mode,b,L),v.return=_,v):(v=i(v,T),v.return=_,v)}function p(_,v,T){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Oc(""+v,_.mode,T),v.return=_,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case wa:return T=tl(v.type,v.key,v.props,null,_.mode,T),T.ref=xs(_,null,v),T.return=_,T;case mi:return v=bc(v,_.mode,T),v.return=_,v;case Bn:var b=v._init;return p(_,b(v._payload),T)}if(Ms(v)||As(v))return v=Ur(v,_.mode,T,null),v.return=_,v;Oa(_,v)}return null}function y(_,v,T,b){var L=v!==null?v.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return L!==null?null:l(_,v,""+T,b);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case wa:return T.key===L?u(_,v,T,b):null;case mi:return T.key===L?h(_,v,T,b):null;case Bn:return L=T._init,y(_,v,L(T._payload),b)}if(Ms(T)||As(T))return L!==null?null:d(_,v,T,b,null);Oa(_,T)}return null}function P(_,v,T,b,L){if(typeof b=="string"&&b!==""||typeof b=="number")return _=_.get(T)||null,l(v,_,""+b,L);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case wa:return _=_.get(b.key===null?T:b.key)||null,u(v,_,b,L);case mi:return _=_.get(b.key===null?T:b.key)||null,h(v,_,b,L);case Bn:var U=b._init;return P(_,v,T,U(b._payload),L)}if(Ms(b)||As(b))return _=_.get(T)||null,d(v,_,b,L,null);Oa(v,b)}return null}function k(_,v,T,b){for(var L=null,U=null,w=v,g=v=0,E=null;w!==null&&g<T.length;g++){w.index>g?(E=w,w=null):E=w.sibling;var I=y(_,w,T[g],b);if(I===null){w===null&&(w=E);break}t&&w&&I.alternate===null&&e(_,w),v=s(I,v,g),U===null?L=I:U.sibling=I,U=I,w=E}if(g===T.length)return n(_,w),pe&&xr(_,g),L;if(w===null){for(;g<T.length;g++)w=p(_,T[g],b),w!==null&&(v=s(w,v,g),U===null?L=w:U.sibling=w,U=w);return pe&&xr(_,g),L}for(w=r(_,w);g<T.length;g++)E=P(w,_,g,T[g],b),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?g:E.key),v=s(E,v,g),U===null?L=E:U.sibling=E,U=E);return t&&w.forEach(function(A){return e(_,A)}),pe&&xr(_,g),L}function x(_,v,T,b){var L=As(T);if(typeof L!="function")throw Error(M(150));if(T=L.call(T),T==null)throw Error(M(151));for(var U=L=null,w=v,g=v=0,E=null,I=T.next();w!==null&&!I.done;g++,I=T.next()){w.index>g?(E=w,w=null):E=w.sibling;var A=y(_,w,I.value,b);if(A===null){w===null&&(w=E);break}t&&w&&A.alternate===null&&e(_,w),v=s(A,v,g),U===null?L=A:U.sibling=A,U=A,w=E}if(I.done)return n(_,w),pe&&xr(_,g),L;if(w===null){for(;!I.done;g++,I=T.next())I=p(_,I.value,b),I!==null&&(v=s(I,v,g),U===null?L=I:U.sibling=I,U=I);return pe&&xr(_,g),L}for(w=r(_,w);!I.done;g++,I=T.next())I=P(w,_,g,I.value,b),I!==null&&(t&&I.alternate!==null&&w.delete(I.key===null?g:I.key),v=s(I,v,g),U===null?L=I:U.sibling=I,U=I);return t&&w.forEach(function(R){return e(_,R)}),pe&&xr(_,g),L}function N(_,v,T,b){if(typeof T=="object"&&T!==null&&T.type===gi&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case wa:e:{for(var L=T.key,U=v;U!==null;){if(U.key===L){if(L=T.type,L===gi){if(U.tag===7){n(_,U.sibling),v=i(U,T.props.children),v.return=_,_=v;break e}}else if(U.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Bn&&Qm(L)===U.type){n(_,U.sibling),v=i(U,T.props),v.ref=xs(_,U,T),v.return=_,_=v;break e}n(_,U);break}else e(_,U);U=U.sibling}T.type===gi?(v=Ur(T.props.children,_.mode,b,T.key),v.return=_,_=v):(b=tl(T.type,T.key,T.props,null,_.mode,b),b.ref=xs(_,v,T),b.return=_,_=b)}return o(_);case mi:e:{for(U=T.key;v!==null;){if(v.key===U)if(v.tag===4&&v.stateNode.containerInfo===T.containerInfo&&v.stateNode.implementation===T.implementation){n(_,v.sibling),v=i(v,T.children||[]),v.return=_,_=v;break e}else{n(_,v);break}else e(_,v);v=v.sibling}v=bc(T,_.mode,b),v.return=_,_=v}return o(_);case Bn:return U=T._init,N(_,v,U(T._payload),b)}if(Ms(T))return k(_,v,T,b);if(As(T))return x(_,v,T,b);Oa(_,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,v!==null&&v.tag===6?(n(_,v.sibling),v=i(v,T),v.return=_,_=v):(n(_,v),v=Oc(T,_.mode,b),v.return=_,_=v),o(_)):n(_,v)}return N}var Hi=_0(!0),E0=_0(!1),Sl=wr(null),Al=null,Si=null,ed=null;function td(){ed=Si=Al=null}function nd(t){var e=Sl.current;fe(Sl),t._currentValue=e}function Ph(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Di(t,e){Al=t,ed=Si=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ut=!0),t.firstContext=null)}function Rt(t){var e=t._currentValue;if(ed!==t)if(t={context:t,memoizedValue:e,next:null},Si===null){if(Al===null)throw Error(M(308));Si=t,Al.dependencies={lanes:0,firstContext:t}}else Si=Si.next=t;return e}var Lr=null;function rd(t){Lr===null?Lr=[t]:Lr.push(t)}function w0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,rd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Pn(t,r)}function Pn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $n=!1;function id(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function T0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function En(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ir(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ne&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Pn(t,n)}return i=r.interleaved,i===null?(e.next=e,rd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Pn(t,n)}function Qa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$f(t,n)}}function Ym(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Pl(t,e,n,r){var i=t.updateQueue;$n=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=h:l.next=h,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=h=u=null,l=s;do{var y=l.lane,P=l.eventTime;if((r&y)===y){d!==null&&(d=d.next={eventTime:P,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=t,x=l;switch(y=e,P=n,x.tag){case 1:if(k=x.payload,typeof k=="function"){p=k.call(P,p,y);break e}p=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=x.payload,y=typeof k=="function"?k.call(P,p,y):k,y==null)break e;p=Ee({},p,y);break e;case 2:$n=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else P={eventTime:P,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(h=d=P,u=p):d=d.next=P,o|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Gr|=o,t.lanes=o,t.memoizedState=p}}function Xm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var Bo={},Zt=wr(Bo),vo=wr(Bo),_o=wr(Bo);function Mr(t){if(t===Bo)throw Error(M(174));return t}function sd(t,e){switch(le(_o,e),le(vo,t),le(Zt,Bo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:oh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=oh(e,t)}fe(Zt),le(Zt,e)}function Wi(){fe(Zt),fe(vo),fe(_o)}function I0(t){Mr(_o.current);var e=Mr(Zt.current),n=oh(e,t.type);e!==n&&(le(vo,t),le(Zt,n))}function od(t){vo.current===t&&(fe(Zt),fe(vo))}var ve=wr(0);function kl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Pc=[];function ad(){for(var t=0;t<Pc.length;t++)Pc[t]._workInProgressVersionPrimary=null;Pc.length=0}var Ya=On.ReactCurrentDispatcher,kc=On.ReactCurrentBatchConfig,Kr=0,_e=null,xe=null,be=null,Cl=!1,Qs=!1,Eo=0,bI=0;function Ge(){throw Error(M(321))}function ld(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!zt(t[n],e[n]))return!1;return!0}function ud(t,e,n,r,i,s){if(Kr=s,_e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ya.current=t===null||t.memoizedState===null?VI:FI,t=n(r,i),Qs){s=0;do{if(Qs=!1,Eo=0,25<=s)throw Error(M(301));s+=1,be=xe=null,e.updateQueue=null,Ya.current=UI,t=n(r,i)}while(Qs)}if(Ya.current=Rl,e=xe!==null&&xe.next!==null,Kr=0,be=xe=_e=null,Cl=!1,e)throw Error(M(300));return t}function cd(){var t=Eo!==0;return Eo=0,t}function Wt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?_e.memoizedState=be=t:be=be.next=t,be}function xt(){if(xe===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=xe.next;var e=be===null?_e.memoizedState:be.next;if(e!==null)be=e,xe=t;else{if(t===null)throw Error(M(310));xe=t,t={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},be===null?_e.memoizedState=be=t:be=be.next=t}return be}function wo(t,e){return typeof e=="function"?e(t):e}function Cc(t){var e=xt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var d=h.lane;if((Kr&d)===d)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:d,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,_e.lanes|=d,Gr|=d}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,zt(r,e.memoizedState)||(ut=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,_e.lanes|=s,Gr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Rc(t){var e=xt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);zt(s,e.memoizedState)||(ut=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function S0(){}function A0(t,e){var n=_e,r=xt(),i=e(),s=!zt(r.memoizedState,i);if(s&&(r.memoizedState=i,ut=!0),r=r.queue,hd(C0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||be!==null&&be.memoizedState.tag&1){if(n.flags|=2048,To(9,k0.bind(null,n,r,i,e),void 0,null),Le===null)throw Error(M(349));Kr&30||P0(n,e,i)}return i}function P0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function k0(t,e,n,r){e.value=n,e.getSnapshot=r,R0(e)&&x0(t)}function C0(t,e,n){return n(function(){R0(e)&&x0(t)})}function R0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zt(t,n)}catch{return!0}}function x0(t){var e=Pn(t,1);e!==null&&jt(e,t,1,-1)}function Jm(t){var e=Wt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wo,lastRenderedState:t},e.queue=t,t=t.dispatch=MI.bind(null,_e,t),[e.memoizedState,t]}function To(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function N0(){return xt().memoizedState}function Xa(t,e,n,r){var i=Wt();_e.flags|=t,i.memoizedState=To(1|e,n,void 0,r===void 0?null:r)}function fu(t,e,n,r){var i=xt();r=r===void 0?null:r;var s=void 0;if(xe!==null){var o=xe.memoizedState;if(s=o.destroy,r!==null&&ld(r,o.deps)){i.memoizedState=To(e,n,s,r);return}}_e.flags|=t,i.memoizedState=To(1|e,n,s,r)}function Zm(t,e){return Xa(8390656,8,t,e)}function hd(t,e){return fu(2048,8,t,e)}function O0(t,e){return fu(4,2,t,e)}function b0(t,e){return fu(4,4,t,e)}function D0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function L0(t,e,n){return n=n!=null?n.concat([t]):null,fu(4,4,D0.bind(null,e,t),n)}function fd(){}function M0(t,e){var n=xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ld(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function V0(t,e){var n=xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ld(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function F0(t,e,n){return Kr&21?(zt(n,e)||(n=$v(),_e.lanes|=n,Gr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ut=!0),t.memoizedState=n)}function DI(t,e){var n=ie;ie=n!==0&&4>n?n:4,t(!0);var r=kc.transition;kc.transition={};try{t(!1),e()}finally{ie=n,kc.transition=r}}function U0(){return xt().memoizedState}function LI(t,e,n){var r=or(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},j0(t))z0(e,n);else if(n=w0(t,e,n,r),n!==null){var i=st();jt(n,t,r,i),B0(n,e,r)}}function MI(t,e,n){var r=or(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(j0(t))z0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,zt(l,o)){var u=e.interleaved;u===null?(i.next=i,rd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=w0(t,e,i,r),n!==null&&(i=st(),jt(n,t,r,i),B0(n,e,r))}}function j0(t){var e=t.alternate;return t===_e||e!==null&&e===_e}function z0(t,e){Qs=Cl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function B0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$f(t,n)}}var Rl={readContext:Rt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},VI={readContext:Rt,useCallback:function(t,e){return Wt().memoizedState=[t,e===void 0?null:e],t},useContext:Rt,useEffect:Zm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xa(4194308,4,D0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xa(4,2,t,e)},useMemo:function(t,e){var n=Wt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Wt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=LI.bind(null,_e,t),[r.memoizedState,t]},useRef:function(t){var e=Wt();return t={current:t},e.memoizedState=t},useState:Jm,useDebugValue:fd,useDeferredValue:function(t){return Wt().memoizedState=t},useTransition:function(){var t=Jm(!1),e=t[0];return t=DI.bind(null,t[1]),Wt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=_e,i=Wt();if(pe){if(n===void 0)throw Error(M(407));n=n()}else{if(n=e(),Le===null)throw Error(M(349));Kr&30||P0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Zm(C0.bind(null,r,s,t),[t]),r.flags|=2048,To(9,k0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Wt(),e=Le.identifierPrefix;if(pe){var n=gn,r=mn;n=(r&~(1<<32-Ut(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Eo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=bI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},FI={readContext:Rt,useCallback:M0,useContext:Rt,useEffect:hd,useImperativeHandle:L0,useInsertionEffect:O0,useLayoutEffect:b0,useMemo:V0,useReducer:Cc,useRef:N0,useState:function(){return Cc(wo)},useDebugValue:fd,useDeferredValue:function(t){var e=xt();return F0(e,xe.memoizedState,t)},useTransition:function(){var t=Cc(wo)[0],e=xt().memoizedState;return[t,e]},useMutableSource:S0,useSyncExternalStore:A0,useId:U0,unstable_isNewReconciler:!1},UI={readContext:Rt,useCallback:M0,useContext:Rt,useEffect:hd,useImperativeHandle:L0,useInsertionEffect:O0,useLayoutEffect:b0,useMemo:V0,useReducer:Rc,useRef:N0,useState:function(){return Rc(wo)},useDebugValue:fd,useDeferredValue:function(t){var e=xt();return xe===null?e.memoizedState=t:F0(e,xe.memoizedState,t)},useTransition:function(){var t=Rc(wo)[0],e=xt().memoizedState;return[t,e]},useMutableSource:S0,useSyncExternalStore:A0,useId:U0,unstable_isNewReconciler:!1};function bt(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function kh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var du={isMounted:function(t){return(t=t._reactInternals)?ii(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=st(),i=or(t),s=En(r,i);s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,i),e!==null&&(jt(e,t,i,r),Qa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=st(),i=or(t),s=En(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,i),e!==null&&(jt(e,t,i,r),Qa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=st(),r=or(t),i=En(n,r);i.tag=2,e!=null&&(i.callback=e),e=ir(t,i,r),e!==null&&(jt(e,t,r,n),Qa(e,t,r))}};function eg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!po(n,r)||!po(i,s):!0}function $0(t,e,n){var r=!1,i=dr,s=e.contextType;return typeof s=="object"&&s!==null?s=Rt(s):(i=ht(e)?Hr:et.current,r=e.contextTypes,s=(r=r!=null)?Bi(t,i):dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=du,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function tg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&du.enqueueReplaceState(e,e.state,null)}function Ch(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},id(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Rt(s):(s=ht(e)?Hr:et.current,i.context=Bi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(kh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&du.enqueueReplaceState(i,i.state,null),Pl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ki(t,e){try{var n="",r=e;do n+=dT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function xc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Rh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var jI=typeof WeakMap=="function"?WeakMap:Map;function H0(t,e,n){n=En(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Nl||(Nl=!0,Uh=r),Rh(t,e)},n}function W0(t,e,n){n=En(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Rh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Rh(t,e),typeof r!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ng(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new jI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=eS.bind(null,t,e,n),e.then(t,t))}function rg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ig(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=En(-1,1),e.tag=2,ir(n,e,1))),n.lanes|=1),t)}var zI=On.ReactCurrentOwner,ut=!1;function it(t,e,n,r){e.child=t===null?E0(e,null,n,r):Hi(e,t.child,n,r)}function sg(t,e,n,r,i){n=n.render;var s=e.ref;return Di(e,i),r=ud(t,e,n,r,s,i),n=cd(),t!==null&&!ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,kn(t,e,i)):(pe&&n&&Xf(e),e.flags|=1,it(t,e,r,i),e.child)}function og(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ed(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,K0(t,e,s,r,i)):(t=tl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:po,n(o,r)&&t.ref===e.ref)return kn(t,e,i)}return e.flags|=1,t=ar(s,r),t.ref=e.ref,t.return=e,e.child=t}function K0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(po(s,r)&&t.ref===e.ref)if(ut=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ut=!0);else return e.lanes=t.lanes,kn(t,e,i)}return xh(t,e,n,r,i)}function G0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(Pi,mt),mt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,le(Pi,mt),mt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,le(Pi,mt),mt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,le(Pi,mt),mt|=r;return it(t,e,i,n),e.child}function q0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function xh(t,e,n,r,i){var s=ht(n)?Hr:et.current;return s=Bi(e,s),Di(e,i),n=ud(t,e,n,r,s,i),r=cd(),t!==null&&!ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,kn(t,e,i)):(pe&&r&&Xf(e),e.flags|=1,it(t,e,n,i),e.child)}function ag(t,e,n,r,i){if(ht(n)){var s=!0;wl(e)}else s=!1;if(Di(e,i),e.stateNode===null)Ja(t,e),$0(e,n,r),Ch(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Rt(h):(h=ht(n)?Hr:et.current,h=Bi(e,h));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&tg(e,o,r,h),$n=!1;var y=e.memoizedState;o.state=y,Pl(e,r,o,i),u=e.memoizedState,l!==r||y!==u||ct.current||$n?(typeof d=="function"&&(kh(e,n,d,r),u=e.memoizedState),(l=$n||eg(e,n,l,r,y,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,T0(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:bt(e.type,l),o.props=h,p=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Rt(u):(u=ht(n)?Hr:et.current,u=Bi(e,u));var P=n.getDerivedStateFromProps;(d=typeof P=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||y!==u)&&tg(e,o,r,u),$n=!1,y=e.memoizedState,o.state=y,Pl(e,r,o,i);var k=e.memoizedState;l!==p||y!==k||ct.current||$n?(typeof P=="function"&&(kh(e,n,P,r),k=e.memoizedState),(h=$n||eg(e,n,h,r,y,k,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),o.props=r,o.state=k,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return Nh(t,e,n,r,s,i)}function Nh(t,e,n,r,i,s){q0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Km(e,n,!1),kn(t,e,s);r=e.stateNode,zI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Hi(e,t.child,null,s),e.child=Hi(e,null,l,s)):it(t,e,l,s),e.memoizedState=r.state,i&&Km(e,n,!0),e.child}function Q0(t){var e=t.stateNode;e.pendingContext?Wm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Wm(t,e.context,!1),sd(t,e.containerInfo)}function lg(t,e,n,r,i){return $i(),Zf(i),e.flags|=256,it(t,e,n,r),e.child}var Oh={dehydrated:null,treeContext:null,retryLane:0};function bh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Y0(t,e,n){var r=e.pendingProps,i=ve.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),le(ve,i&1),t===null)return Ah(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=gu(o,r,0,null),t=Ur(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=bh(n),e.memoizedState=Oh,t):dd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return BI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ar(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=ar(l,s):(s=Ur(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?bh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Oh,r}return s=t.child,t=s.sibling,r=ar(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function dd(t,e){return e=gu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ba(t,e,n,r){return r!==null&&Zf(r),Hi(e,t.child,null,n),t=dd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function BI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=xc(Error(M(422))),ba(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=gu({mode:"visible",children:r.children},i,0,null),s=Ur(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Hi(e,t.child,null,o),e.child.memoizedState=bh(o),e.memoizedState=Oh,s);if(!(e.mode&1))return ba(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(M(419)),r=xc(s,r,void 0),ba(t,e,o,r)}if(l=(o&t.childLanes)!==0,ut||l){if(r=Le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Pn(t,i),jt(r,t,i,-1))}return _d(),r=xc(Error(M(421))),ba(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=tS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,gt=rr(i.nextSibling),yt=e,pe=!0,Lt=null,t!==null&&(At[Pt++]=mn,At[Pt++]=gn,At[Pt++]=Wr,mn=t.id,gn=t.overflow,Wr=e),e=dd(e,r.children),e.flags|=4096,e)}function ug(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ph(t.return,e,n)}function Nc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function X0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(it(t,e,r.children,n),r=ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ug(t,n,e);else if(t.tag===19)ug(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(le(ve,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&kl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Nc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&kl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Nc(e,!0,n,null,s);break;case"together":Nc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ja(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function kn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(M(153));if(e.child!==null){for(t=e.child,n=ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function $I(t,e,n){switch(e.tag){case 3:Q0(e),$i();break;case 5:I0(e);break;case 1:ht(e.type)&&wl(e);break;case 4:sd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;le(Sl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(le(ve,ve.current&1),e.flags|=128,null):n&e.child.childLanes?Y0(t,e,n):(le(ve,ve.current&1),t=kn(t,e,n),t!==null?t.sibling:null);le(ve,ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return X0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),le(ve,ve.current),r)break;return null;case 22:case 23:return e.lanes=0,G0(t,e,n)}return kn(t,e,n)}var J0,Dh,Z0,e_;J0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Dh=function(){};Z0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Mr(Zt.current);var s=null;switch(n){case"input":i=nh(t,i),r=nh(t,r),s=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),s=[];break;case"textarea":i=sh(t,i),r=sh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=_l)}ah(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(oo.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(oo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&he("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};e_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ns(t,e){if(!pe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function qe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function HI(t,e,n){var r=e.pendingProps;switch(Jf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(e),null;case 1:return ht(e.type)&&El(),qe(e),null;case 3:return r=e.stateNode,Wi(),fe(ct),fe(et),ad(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Na(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Lt!==null&&(Bh(Lt),Lt=null))),Dh(t,e),qe(e),null;case 5:od(e);var i=Mr(_o.current);if(n=e.type,t!==null&&e.stateNode!=null)Z0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(M(166));return qe(e),null}if(t=Mr(Zt.current),Na(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[qt]=e,r[yo]=s,t=(e.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(i=0;i<Fs.length;i++)he(Fs[i],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":vm(r,s),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},he("invalid",r);break;case"textarea":Em(r,s),he("invalid",r)}ah(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&xa(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&xa(r.textContent,l,t),i=["children",""+l]):oo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&he("scroll",r)}switch(n){case"input":Ta(r),_m(r,s,!0);break;case"textarea":Ta(r),wm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=_l)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Cv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[qt]=e,t[yo]=r,J0(t,e,!1,!1),e.stateNode=t;e:{switch(o=lh(n,r),n){case"dialog":he("cancel",t),he("close",t),i=r;break;case"iframe":case"object":case"embed":he("load",t),i=r;break;case"video":case"audio":for(i=0;i<Fs.length;i++)he(Fs[i],t);i=r;break;case"source":he("error",t),i=r;break;case"img":case"image":case"link":he("error",t),he("load",t),i=r;break;case"details":he("toggle",t),i=r;break;case"input":vm(t,r),i=nh(t,r),he("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),he("invalid",t);break;case"textarea":Em(t,r),i=sh(t,r),he("invalid",t);break;default:i=r}ah(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Nv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Rv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ao(t,u):typeof u=="number"&&ao(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&he("scroll",t):u!=null&&Vf(t,s,u,o))}switch(n){case"input":Ta(t),_m(t,r,!1);break;case"textarea":Ta(t),wm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+fr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?xi(t,!!r.multiple,s,!1):r.defaultValue!=null&&xi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=_l)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qe(e),null;case 6:if(t&&e.stateNode!=null)e_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(M(166));if(n=Mr(_o.current),Mr(Zt.current),Na(e)){if(r=e.stateNode,n=e.memoizedProps,r[qt]=e,(s=r.nodeValue!==n)&&(t=yt,t!==null))switch(t.tag){case 3:xa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&xa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qt]=e,e.stateNode=r}return qe(e),null;case 13:if(fe(ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pe&&gt!==null&&e.mode&1&&!(e.flags&128))v0(),$i(),e.flags|=98560,s=!1;else if(s=Na(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(M(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(M(317));s[qt]=e}else $i(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qe(e),s=!1}else Lt!==null&&(Bh(Lt),Lt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ve.current&1?Ne===0&&(Ne=3):_d())),e.updateQueue!==null&&(e.flags|=4),qe(e),null);case 4:return Wi(),Dh(t,e),t===null&&mo(e.stateNode.containerInfo),qe(e),null;case 10:return nd(e.type._context),qe(e),null;case 17:return ht(e.type)&&El(),qe(e),null;case 19:if(fe(ve),s=e.memoizedState,s===null)return qe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ns(s,!1);else{if(Ne!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=kl(t),o!==null){for(e.flags|=128,Ns(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return le(ve,ve.current&1|2),e.child}t=t.sibling}s.tail!==null&&Se()>Gi&&(e.flags|=128,r=!0,Ns(s,!1),e.lanes=4194304)}else{if(!r)if(t=kl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ns(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pe)return qe(e),null}else 2*Se()-s.renderingStartTime>Gi&&n!==1073741824&&(e.flags|=128,r=!0,Ns(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Se(),e.sibling=null,n=ve.current,le(ve,r?n&1|2:n&1),e):(qe(e),null);case 22:case 23:return vd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?mt&1073741824&&(qe(e),e.subtreeFlags&6&&(e.flags|=8192)):qe(e),null;case 24:return null;case 25:return null}throw Error(M(156,e.tag))}function WI(t,e){switch(Jf(e),e.tag){case 1:return ht(e.type)&&El(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Wi(),fe(ct),fe(et),ad(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return od(e),null;case 13:if(fe(ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(M(340));$i()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return fe(ve),null;case 4:return Wi(),null;case 10:return nd(e.type._context),null;case 22:case 23:return vd(),null;case 24:return null;default:return null}}var Da=!1,Xe=!1,KI=typeof WeakSet=="function"?WeakSet:Set,$=null;function Ai(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(t,e,r)}else n.current=null}function Lh(t,e,n){try{n()}catch(r){Te(t,e,r)}}var cg=!1;function GI(t,e){if(vh=gl,t=s0(),Yf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,d=0,p=t,y=null;t:for(;;){for(var P;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(P=p.firstChild)!==null;)y=p,p=P;for(;;){if(p===t)break t;if(y===n&&++h===i&&(l=o),y===s&&++d===r&&(u=o),(P=p.nextSibling)!==null)break;p=y,y=p.parentNode}p=P}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(_h={focusedElem:t,selectionRange:n},gl=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var x=k.memoizedProps,N=k.memoizedState,_=e.stateNode,v=_.getSnapshotBeforeUpdate(e.elementType===e.type?x:bt(e.type,x),N);_.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(b){Te(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return k=cg,cg=!1,k}function Ys(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Lh(e,n,s)}i=i.next}while(i!==r)}}function pu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Mh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function t_(t){var e=t.alternate;e!==null&&(t.alternate=null,t_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[qt],delete e[yo],delete e[Th],delete e[RI],delete e[xI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function n_(t){return t.tag===5||t.tag===3||t.tag===4}function hg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||n_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=_l));else if(r!==4&&(t=t.child,t!==null))for(Vh(t,e,n),t=t.sibling;t!==null;)Vh(t,e,n),t=t.sibling}function Fh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Fh(t,e,n),t=t.sibling;t!==null;)Fh(t,e,n),t=t.sibling}var Fe=null,Dt=!1;function Fn(t,e,n){for(n=n.child;n!==null;)r_(t,e,n),n=n.sibling}function r_(t,e,n){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(ou,n)}catch{}switch(n.tag){case 5:Xe||Ai(n,e);case 6:var r=Fe,i=Dt;Fe=null,Fn(t,e,n),Fe=r,Dt=i,Fe!==null&&(Dt?(t=Fe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Fe.removeChild(n.stateNode));break;case 18:Fe!==null&&(Dt?(t=Fe,n=n.stateNode,t.nodeType===8?Sc(t.parentNode,n):t.nodeType===1&&Sc(t,n),ho(t)):Sc(Fe,n.stateNode));break;case 4:r=Fe,i=Dt,Fe=n.stateNode.containerInfo,Dt=!0,Fn(t,e,n),Fe=r,Dt=i;break;case 0:case 11:case 14:case 15:if(!Xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Lh(n,e,o),i=i.next}while(i!==r)}Fn(t,e,n);break;case 1:if(!Xe&&(Ai(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,e,l)}Fn(t,e,n);break;case 21:Fn(t,e,n);break;case 22:n.mode&1?(Xe=(r=Xe)||n.memoizedState!==null,Fn(t,e,n),Xe=r):Fn(t,e,n);break;default:Fn(t,e,n)}}function fg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new KI),e.forEach(function(r){var i=nS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ot(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Fe=l.stateNode,Dt=!1;break e;case 3:Fe=l.stateNode.containerInfo,Dt=!0;break e;case 4:Fe=l.stateNode.containerInfo,Dt=!0;break e}l=l.return}if(Fe===null)throw Error(M(160));r_(s,o,i),Fe=null,Dt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Te(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)i_(e,t),e=e.sibling}function i_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ot(e,t),Ht(t),r&4){try{Ys(3,t,t.return),pu(3,t)}catch(x){Te(t,t.return,x)}try{Ys(5,t,t.return)}catch(x){Te(t,t.return,x)}}break;case 1:Ot(e,t),Ht(t),r&512&&n!==null&&Ai(n,n.return);break;case 5:if(Ot(e,t),Ht(t),r&512&&n!==null&&Ai(n,n.return),t.flags&32){var i=t.stateNode;try{ao(i,"")}catch(x){Te(t,t.return,x)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Pv(i,s),lh(l,o);var h=lh(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?Nv(i,p):d==="dangerouslySetInnerHTML"?Rv(i,p):d==="children"?ao(i,p):Vf(i,d,p,h)}switch(l){case"input":rh(i,s);break;case"textarea":kv(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var P=s.value;P!=null?xi(i,!!s.multiple,P,!1):y!==!!s.multiple&&(s.defaultValue!=null?xi(i,!!s.multiple,s.defaultValue,!0):xi(i,!!s.multiple,s.multiple?[]:"",!1))}i[yo]=s}catch(x){Te(t,t.return,x)}}break;case 6:if(Ot(e,t),Ht(t),r&4){if(t.stateNode===null)throw Error(M(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(x){Te(t,t.return,x)}}break;case 3:if(Ot(e,t),Ht(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ho(e.containerInfo)}catch(x){Te(t,t.return,x)}break;case 4:Ot(e,t),Ht(t);break;case 13:Ot(e,t),Ht(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(gd=Se())),r&4&&fg(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Xe=(h=Xe)||d,Ot(e,t),Xe=h):Ot(e,t),Ht(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!d&&t.mode&1)for($=t,d=t.child;d!==null;){for(p=$=d;$!==null;){switch(y=$,P=y.child,y.tag){case 0:case 11:case 14:case 15:Ys(4,y,y.return);break;case 1:Ai(y,y.return);var k=y.stateNode;if(typeof k.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(x){Te(r,n,x)}}break;case 5:Ai(y,y.return);break;case 22:if(y.memoizedState!==null){pg(p);continue}}P!==null?(P.return=y,$=P):pg(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=xv("display",o))}catch(x){Te(t,t.return,x)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(x){Te(t,t.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ot(e,t),Ht(t),r&4&&fg(t);break;case 21:break;default:Ot(e,t),Ht(t)}}function Ht(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(n_(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ao(i,""),r.flags&=-33);var s=hg(t);Fh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=hg(t);Vh(t,l,o);break;default:throw Error(M(161))}}catch(u){Te(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function qI(t,e,n){$=t,s_(t)}function s_(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Da;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Xe;l=Da;var h=Xe;if(Da=o,(Xe=u)&&!h)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?mg(i):u!==null?(u.return=o,$=u):mg(i);for(;s!==null;)$=s,s_(s),s=s.sibling;$=i,Da=l,Xe=h}dg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):dg(t)}}function dg(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xe||pu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Xe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:bt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Xm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Xm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var d=h.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&ho(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Xe||e.flags&512&&Mh(e)}catch(y){Te(e,e.return,y)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function pg(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function mg(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{pu(4,e)}catch(u){Te(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Te(e,i,u)}}var s=e.return;try{Mh(e)}catch(u){Te(e,s,u)}break;case 5:var o=e.return;try{Mh(e)}catch(u){Te(e,o,u)}}}catch(u){Te(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var QI=Math.ceil,xl=On.ReactCurrentDispatcher,pd=On.ReactCurrentOwner,Ct=On.ReactCurrentBatchConfig,ne=0,Le=null,Ce=null,Be=0,mt=0,Pi=wr(0),Ne=0,Io=null,Gr=0,mu=0,md=0,Xs=null,lt=null,gd=0,Gi=1/0,dn=null,Nl=!1,Uh=null,sr=null,La=!1,Xn=null,Ol=0,Js=0,jh=null,Za=-1,el=0;function st(){return ne&6?Se():Za!==-1?Za:Za=Se()}function or(t){return t.mode&1?ne&2&&Be!==0?Be&-Be:OI.transition!==null?(el===0&&(el=$v()),el):(t=ie,t!==0||(t=window.event,t=t===void 0?16:Yv(t.type)),t):1}function jt(t,e,n,r){if(50<Js)throw Js=0,jh=null,Error(M(185));Uo(t,n,r),(!(ne&2)||t!==Le)&&(t===Le&&(!(ne&2)&&(mu|=n),Ne===4&&Wn(t,Be)),ft(t,r),n===1&&ne===0&&!(e.mode&1)&&(Gi=Se()+500,hu&&Tr()))}function ft(t,e){var n=t.callbackNode;OT(t,e);var r=ml(t,t===Le?Be:0);if(r===0)n!==null&&Sm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Sm(n),e===1)t.tag===0?NI(gg.bind(null,t)):m0(gg.bind(null,t)),kI(function(){!(ne&6)&&Tr()}),n=null;else{switch(Hv(r)){case 1:n=Bf;break;case 4:n=zv;break;case 16:n=pl;break;case 536870912:n=Bv;break;default:n=pl}n=d_(n,o_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function o_(t,e){if(Za=-1,el=0,ne&6)throw Error(M(327));var n=t.callbackNode;if(Li()&&t.callbackNode!==n)return null;var r=ml(t,t===Le?Be:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=bl(t,r);else{e=r;var i=ne;ne|=2;var s=l_();(Le!==t||Be!==e)&&(dn=null,Gi=Se()+500,Fr(t,e));do try{JI();break}catch(l){a_(t,l)}while(!0);td(),xl.current=s,ne=i,Ce!==null?e=0:(Le=null,Be=0,e=Ne)}if(e!==0){if(e===2&&(i=dh(t),i!==0&&(r=i,e=zh(t,i))),e===1)throw n=Io,Fr(t,0),Wn(t,r),ft(t,Se()),n;if(e===6)Wn(t,r);else{if(i=t.current.alternate,!(r&30)&&!YI(i)&&(e=bl(t,r),e===2&&(s=dh(t),s!==0&&(r=s,e=zh(t,s))),e===1))throw n=Io,Fr(t,0),Wn(t,r),ft(t,Se()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(M(345));case 2:Nr(t,lt,dn);break;case 3:if(Wn(t,r),(r&130023424)===r&&(e=gd+500-Se(),10<e)){if(ml(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){st(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=wh(Nr.bind(null,t,lt,dn),e);break}Nr(t,lt,dn);break;case 4:if(Wn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ut(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*QI(r/1960))-r,10<r){t.timeoutHandle=wh(Nr.bind(null,t,lt,dn),r);break}Nr(t,lt,dn);break;case 5:Nr(t,lt,dn);break;default:throw Error(M(329))}}}return ft(t,Se()),t.callbackNode===n?o_.bind(null,t):null}function zh(t,e){var n=Xs;return t.current.memoizedState.isDehydrated&&(Fr(t,e).flags|=256),t=bl(t,e),t!==2&&(e=lt,lt=n,e!==null&&Bh(e)),t}function Bh(t){lt===null?lt=t:lt.push.apply(lt,t)}function YI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!zt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wn(t,e){for(e&=~md,e&=~mu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ut(e),r=1<<n;t[n]=-1,e&=~r}}function gg(t){if(ne&6)throw Error(M(327));Li();var e=ml(t,0);if(!(e&1))return ft(t,Se()),null;var n=bl(t,e);if(t.tag!==0&&n===2){var r=dh(t);r!==0&&(e=r,n=zh(t,r))}if(n===1)throw n=Io,Fr(t,0),Wn(t,e),ft(t,Se()),n;if(n===6)throw Error(M(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Nr(t,lt,dn),ft(t,Se()),null}function yd(t,e){var n=ne;ne|=1;try{return t(e)}finally{ne=n,ne===0&&(Gi=Se()+500,hu&&Tr())}}function qr(t){Xn!==null&&Xn.tag===0&&!(ne&6)&&Li();var e=ne;ne|=1;var n=Ct.transition,r=ie;try{if(Ct.transition=null,ie=1,t)return t()}finally{ie=r,Ct.transition=n,ne=e,!(ne&6)&&Tr()}}function vd(){mt=Pi.current,fe(Pi)}function Fr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,PI(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(Jf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&El();break;case 3:Wi(),fe(ct),fe(et),ad();break;case 5:od(r);break;case 4:Wi();break;case 13:fe(ve);break;case 19:fe(ve);break;case 10:nd(r.type._context);break;case 22:case 23:vd()}n=n.return}if(Le=t,Ce=t=ar(t.current,null),Be=mt=e,Ne=0,Io=null,md=mu=Gr=0,lt=Xs=null,Lr!==null){for(e=0;e<Lr.length;e++)if(n=Lr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Lr=null}return t}function a_(t,e){do{var n=Ce;try{if(td(),Ya.current=Rl,Cl){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Cl=!1}if(Kr=0,be=xe=_e=null,Qs=!1,Eo=0,pd.current=null,n===null||n.return===null){Ne=1,Io=e,Ce=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Be,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var y=d.alternate;y?(d.updateQueue=y.updateQueue,d.memoizedState=y.memoizedState,d.lanes=y.lanes):(d.updateQueue=null,d.memoizedState=null)}var P=rg(o);if(P!==null){P.flags&=-257,ig(P,o,l,s,e),P.mode&1&&ng(s,h,e),e=P,u=h;var k=e.updateQueue;if(k===null){var x=new Set;x.add(u),e.updateQueue=x}else k.add(u);break e}else{if(!(e&1)){ng(s,h,e),_d();break e}u=Error(M(426))}}else if(pe&&l.mode&1){var N=rg(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),ig(N,o,l,s,e),Zf(Ki(u,l));break e}}s=u=Ki(u,l),Ne!==4&&(Ne=2),Xs===null?Xs=[s]:Xs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var _=H0(s,u,e);Ym(s,_);break e;case 1:l=u;var v=s.type,T=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(sr===null||!sr.has(T)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=W0(s,l,e);Ym(s,b);break e}}s=s.return}while(s!==null)}c_(n)}catch(L){e=L,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function l_(){var t=xl.current;return xl.current=Rl,t===null?Rl:t}function _d(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Le===null||!(Gr&268435455)&&!(mu&268435455)||Wn(Le,Be)}function bl(t,e){var n=ne;ne|=2;var r=l_();(Le!==t||Be!==e)&&(dn=null,Fr(t,e));do try{XI();break}catch(i){a_(t,i)}while(!0);if(td(),ne=n,xl.current=r,Ce!==null)throw Error(M(261));return Le=null,Be=0,Ne}function XI(){for(;Ce!==null;)u_(Ce)}function JI(){for(;Ce!==null&&!IT();)u_(Ce)}function u_(t){var e=f_(t.alternate,t,mt);t.memoizedProps=t.pendingProps,e===null?c_(t):Ce=e,pd.current=null}function c_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=WI(n,e),n!==null){n.flags&=32767,Ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ne=6,Ce=null;return}}else if(n=HI(n,e,mt),n!==null){Ce=n;return}if(e=e.sibling,e!==null){Ce=e;return}Ce=e=t}while(e!==null);Ne===0&&(Ne=5)}function Nr(t,e,n){var r=ie,i=Ct.transition;try{Ct.transition=null,ie=1,ZI(t,e,n,r)}finally{Ct.transition=i,ie=r}return null}function ZI(t,e,n,r){do Li();while(Xn!==null);if(ne&6)throw Error(M(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(M(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(bT(t,s),t===Le&&(Ce=Le=null,Be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||La||(La=!0,d_(pl,function(){return Li(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ct.transition,Ct.transition=null;var o=ie;ie=1;var l=ne;ne|=4,pd.current=null,GI(t,n),i_(n,t),_I(_h),gl=!!vh,_h=vh=null,t.current=n,qI(n),ST(),ne=l,ie=o,Ct.transition=s}else t.current=n;if(La&&(La=!1,Xn=t,Ol=i),s=t.pendingLanes,s===0&&(sr=null),kT(n.stateNode),ft(t,Se()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Nl)throw Nl=!1,t=Uh,Uh=null,t;return Ol&1&&t.tag!==0&&Li(),s=t.pendingLanes,s&1?t===jh?Js++:(Js=0,jh=t):Js=0,Tr(),null}function Li(){if(Xn!==null){var t=Hv(Ol),e=Ct.transition,n=ie;try{if(Ct.transition=null,ie=16>t?16:t,Xn===null)var r=!1;else{if(t=Xn,Xn=null,Ol=0,ne&6)throw Error(M(331));var i=ne;for(ne|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for($=h;$!==null;){var d=$;switch(d.tag){case 0:case 11:case 15:Ys(8,d,s)}var p=d.child;if(p!==null)p.return=d,$=p;else for(;$!==null;){d=$;var y=d.sibling,P=d.return;if(t_(d),d===h){$=null;break}if(y!==null){y.return=P,$=y;break}$=P}}}var k=s.alternate;if(k!==null){var x=k.child;if(x!==null){k.child=null;do{var N=x.sibling;x.sibling=null,x=N}while(x!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ys(9,s,s.return)}var _=s.sibling;if(_!==null){_.return=s.return,$=_;break e}$=s.return}}var v=t.current;for($=v;$!==null;){o=$;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,$=T;else e:for(o=v;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:pu(9,l)}}catch(L){Te(l,l.return,L)}if(l===o){$=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,$=b;break e}$=l.return}}if(ne=i,Tr(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(ou,t)}catch{}r=!0}return r}finally{ie=n,Ct.transition=e}}return!1}function yg(t,e,n){e=Ki(n,e),e=H0(t,e,1),t=ir(t,e,1),e=st(),t!==null&&(Uo(t,1,e),ft(t,e))}function Te(t,e,n){if(t.tag===3)yg(t,t,n);else for(;e!==null;){if(e.tag===3){yg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sr===null||!sr.has(r))){t=Ki(n,t),t=W0(e,t,1),e=ir(e,t,1),t=st(),e!==null&&(Uo(e,1,t),ft(e,t));break}}e=e.return}}function eS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=st(),t.pingedLanes|=t.suspendedLanes&n,Le===t&&(Be&n)===n&&(Ne===4||Ne===3&&(Be&130023424)===Be&&500>Se()-gd?Fr(t,0):md|=n),ft(t,e)}function h_(t,e){e===0&&(t.mode&1?(e=Aa,Aa<<=1,!(Aa&130023424)&&(Aa=4194304)):e=1);var n=st();t=Pn(t,e),t!==null&&(Uo(t,e,n),ft(t,n))}function tS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),h_(t,n)}function nS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(e),h_(t,n)}var f_;f_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ct.current)ut=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ut=!1,$I(t,e,n);ut=!!(t.flags&131072)}else ut=!1,pe&&e.flags&1048576&&g0(e,Il,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ja(t,e),t=e.pendingProps;var i=Bi(e,et.current);Di(e,n),i=ud(null,e,r,t,i,n);var s=cd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ht(r)?(s=!0,wl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,id(e),i.updater=du,e.stateNode=i,i._reactInternals=e,Ch(e,r,t,n),e=Nh(null,e,r,!0,s,n)):(e.tag=0,pe&&s&&Xf(e),it(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ja(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=iS(r),t=bt(r,t),i){case 0:e=xh(null,e,r,t,n);break e;case 1:e=ag(null,e,r,t,n);break e;case 11:e=sg(null,e,r,t,n);break e;case 14:e=og(null,e,r,bt(r.type,t),n);break e}throw Error(M(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),xh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),ag(t,e,r,i,n);case 3:e:{if(Q0(e),t===null)throw Error(M(387));r=e.pendingProps,s=e.memoizedState,i=s.element,T0(t,e),Pl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ki(Error(M(423)),e),e=lg(t,e,r,n,i);break e}else if(r!==i){i=Ki(Error(M(424)),e),e=lg(t,e,r,n,i);break e}else for(gt=rr(e.stateNode.containerInfo.firstChild),yt=e,pe=!0,Lt=null,n=E0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($i(),r===i){e=kn(t,e,n);break e}it(t,e,r,n)}e=e.child}return e;case 5:return I0(e),t===null&&Ah(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Eh(r,i)?o=null:s!==null&&Eh(r,s)&&(e.flags|=32),q0(t,e),it(t,e,o,n),e.child;case 6:return t===null&&Ah(e),null;case 13:return Y0(t,e,n);case 4:return sd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Hi(e,null,r,n):it(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),sg(t,e,r,i,n);case 7:return it(t,e,e.pendingProps,n),e.child;case 8:return it(t,e,e.pendingProps.children,n),e.child;case 12:return it(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,le(Sl,r._currentValue),r._currentValue=o,s!==null)if(zt(s.value,o)){if(s.children===i.children&&!ct.current){e=kn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=En(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var d=h.pending;d===null?u.next=u:(u.next=d.next,d.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Ph(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(M(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ph(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}it(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Di(e,n),i=Rt(i),r=r(i),e.flags|=1,it(t,e,r,n),e.child;case 14:return r=e.type,i=bt(r,e.pendingProps),i=bt(r.type,i),og(t,e,r,i,n);case 15:return K0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),Ja(t,e),e.tag=1,ht(r)?(t=!0,wl(e)):t=!1,Di(e,n),$0(e,r,i),Ch(e,r,i,n),Nh(null,e,r,!0,t,n);case 19:return X0(t,e,n);case 22:return G0(t,e,n)}throw Error(M(156,e.tag))};function d_(t,e){return jv(t,e)}function rS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(t,e,n,r){return new rS(t,e,n,r)}function Ed(t){return t=t.prototype,!(!t||!t.isReactComponent)}function iS(t){if(typeof t=="function")return Ed(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Uf)return 11;if(t===jf)return 14}return 2}function ar(t,e){var n=t.alternate;return n===null?(n=kt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function tl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ed(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case gi:return Ur(n.children,i,s,e);case Ff:o=8,i|=8;break;case Jc:return t=kt(12,n,e,i|2),t.elementType=Jc,t.lanes=s,t;case Zc:return t=kt(13,n,e,i),t.elementType=Zc,t.lanes=s,t;case eh:return t=kt(19,n,e,i),t.elementType=eh,t.lanes=s,t;case Iv:return gu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case wv:o=10;break e;case Tv:o=9;break e;case Uf:o=11;break e;case jf:o=14;break e;case Bn:o=16,r=null;break e}throw Error(M(130,t==null?t:typeof t,""))}return e=kt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ur(t,e,n,r){return t=kt(7,t,r,e),t.lanes=n,t}function gu(t,e,n,r){return t=kt(22,t,r,e),t.elementType=Iv,t.lanes=n,t.stateNode={isHidden:!1},t}function Oc(t,e,n){return t=kt(6,t,null,e),t.lanes=n,t}function bc(t,e,n){return e=kt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function sS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dc(0),this.expirationTimes=dc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wd(t,e,n,r,i,s,o,l,u){return t=new sS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=kt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},id(s),t}function oS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function p_(t){if(!t)return dr;t=t._reactInternals;e:{if(ii(t)!==t||t.tag!==1)throw Error(M(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ht(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(M(171))}if(t.tag===1){var n=t.type;if(ht(n))return p0(t,n,e)}return e}function m_(t,e,n,r,i,s,o,l,u){return t=wd(n,r,!0,t,i,s,o,l,u),t.context=p_(null),n=t.current,r=st(),i=or(n),s=En(r,i),s.callback=e??null,ir(n,s,i),t.current.lanes=i,Uo(t,i,r),ft(t,r),t}function yu(t,e,n,r){var i=e.current,s=st(),o=or(i);return n=p_(n),e.context===null?e.context=n:e.pendingContext=n,e=En(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ir(i,e,o),t!==null&&(jt(t,i,o,s),Qa(t,i,o)),o}function Dl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function vg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Td(t,e){vg(t,e),(t=t.alternate)&&vg(t,e)}function aS(){return null}var g_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Id(t){this._internalRoot=t}vu.prototype.render=Id.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(M(409));yu(t,e,null,null)};vu.prototype.unmount=Id.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qr(function(){yu(null,t,null,null)}),e[An]=null}};function vu(t){this._internalRoot=t}vu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Gv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Hn.length&&e!==0&&e<Hn[n].priority;n++);Hn.splice(n,0,t),n===0&&Qv(t)}};function Sd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _g(){}function lS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=Dl(o);s.call(h)}}var o=m_(e,r,t,0,null,!1,!1,"",_g);return t._reactRootContainer=o,t[An]=o.current,mo(t.nodeType===8?t.parentNode:t),qr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=Dl(u);l.call(h)}}var u=wd(t,0,!1,null,null,!1,!1,"",_g);return t._reactRootContainer=u,t[An]=u.current,mo(t.nodeType===8?t.parentNode:t),qr(function(){yu(e,u,n,r)}),u}function Eu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Dl(o);l.call(u)}}yu(e,o,t,i)}else o=lS(n,e,t,i,r);return Dl(o)}Wv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Vs(e.pendingLanes);n!==0&&($f(e,n|1),ft(e,Se()),!(ne&6)&&(Gi=Se()+500,Tr()))}break;case 13:qr(function(){var r=Pn(t,1);if(r!==null){var i=st();jt(r,t,1,i)}}),Td(t,1)}};Hf=function(t){if(t.tag===13){var e=Pn(t,134217728);if(e!==null){var n=st();jt(e,t,134217728,n)}Td(t,134217728)}};Kv=function(t){if(t.tag===13){var e=or(t),n=Pn(t,e);if(n!==null){var r=st();jt(n,t,e,r)}Td(t,e)}};Gv=function(){return ie};qv=function(t,e){var n=ie;try{return ie=t,e()}finally{ie=n}};ch=function(t,e,n){switch(e){case"input":if(rh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=cu(r);if(!i)throw Error(M(90));Av(r),rh(r,i)}}}break;case"textarea":kv(t,n);break;case"select":e=n.value,e!=null&&xi(t,!!n.multiple,e,!1)}};Dv=yd;Lv=qr;var uS={usingClientEntryPoint:!1,Events:[zo,Ei,cu,Ov,bv,yd]},Os={findFiberByHostInstance:Dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cS={bundleType:Os.bundleType,version:Os.version,rendererPackageName:Os.rendererPackageName,rendererConfig:Os.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:On.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Fv(t),t===null?null:t.stateNode},findFiberByHostInstance:Os.findFiberByHostInstance||aS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ma=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ma.isDisabled&&Ma.supportsFiber)try{ou=Ma.inject(cS),Jt=Ma}catch{}}wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uS;wt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sd(e))throw Error(M(200));return oS(t,e,null,n)};wt.createRoot=function(t,e){if(!Sd(t))throw Error(M(299));var n=!1,r="",i=g_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=wd(t,1,!1,null,null,n,!1,r,i),t[An]=e.current,mo(t.nodeType===8?t.parentNode:t),new Id(e)};wt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=Fv(e),t=t===null?null:t.stateNode,t};wt.flushSync=function(t){return qr(t)};wt.hydrate=function(t,e,n){if(!_u(e))throw Error(M(200));return Eu(null,t,e,!0,n)};wt.hydrateRoot=function(t,e,n){if(!Sd(t))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=g_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=m_(e,null,t,1,n??null,i,!1,s,o),t[An]=e.current,mo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new vu(e)};wt.render=function(t,e,n){if(!_u(e))throw Error(M(200));return Eu(null,t,e,!1,n)};wt.unmountComponentAtNode=function(t){if(!_u(t))throw Error(M(40));return t._reactRootContainer?(qr(function(){Eu(null,null,t,!1,function(){t._reactRootContainer=null,t[An]=null})}),!0):!1};wt.unstable_batchedUpdates=yd;wt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!_u(n))throw Error(M(200));if(t==null||t._reactInternals===void 0)throw Error(M(38));return Eu(t,e,n,!1,r)};wt.version="18.3.1-next-f1338f8080-20240426";function y_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y_)}catch(t){console.error(t)}}y_(),yv.exports=wt;var hS=yv.exports,v_,Eg=hS;v_=Eg.createRoot,Eg.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function So(){return So=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},So.apply(this,arguments)}var Jn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Jn||(Jn={}));const wg="popstate";function fS(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return $h("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ll(i)}return pS(e,n,null,t)}function Re(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function __(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function dS(){return Math.random().toString(36).substr(2,8)}function Tg(t,e){return{usr:t.state,key:t.key,idx:e}}function $h(t,e,n,r){return n===void 0&&(n=null),So({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ss(e):e,{state:n,key:e&&e.key||r||dS()})}function Ll(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ss(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function pS(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Jn.Pop,u=null,h=d();h==null&&(h=0,o.replaceState(So({},o.state,{idx:h}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=Jn.Pop;let N=d(),_=N==null?null:N-h;h=N,u&&u({action:l,location:x.location,delta:_})}function y(N,_){l=Jn.Push;let v=$h(x.location,N,_);h=d()+1;let T=Tg(v,h),b=x.createHref(v);try{o.pushState(T,"",b)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(b)}s&&u&&u({action:l,location:x.location,delta:1})}function P(N,_){l=Jn.Replace;let v=$h(x.location,N,_);h=d();let T=Tg(v,h),b=x.createHref(v);o.replaceState(T,"",b),s&&u&&u({action:l,location:x.location,delta:0})}function k(N){let _=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof N=="string"?N:Ll(N);return v=v.replace(/ $/,"%20"),Re(_,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,_)}let x={get action(){return l},get location(){return t(i,o)},listen(N){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(wg,p),u=N,()=>{i.removeEventListener(wg,p),u=null}},createHref(N){return e(i,N)},createURL:k,encodeLocation(N){let _=k(N);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:y,replace:P,go(N){return o.go(N)}};return x}var Ig;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ig||(Ig={}));function mS(t,e,n){return n===void 0&&(n="/"),gS(t,e,n,!1)}function gS(t,e,n,r){let i=typeof e=="string"?ss(e):e,s=Ad(i.pathname||"/",n);if(s==null)return null;let o=E_(t);yS(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let h=CS(s);l=PS(o[u],h,r)}return l}function E_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Re(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let h=lr([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(Re(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),E_(s.children,e,d,h)),!(s.path==null&&!s.index)&&e.push({path:h,score:SS(h,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of w_(s.path))i(s,o,u)}),e}function w_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=w_(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function yS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:AS(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const vS=/^:[\w-]+$/,_S=3,ES=2,wS=1,TS=10,IS=-2,Sg=t=>t==="*";function SS(t,e){let n=t.split("/"),r=n.length;return n.some(Sg)&&(r+=IS),e&&(r+=ES),n.filter(i=>!Sg(i)).reduce((i,s)=>i+(vS.test(s)?_S:s===""?wS:TS),r)}function AS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function PS(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],h=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=Ag({path:u.relativePath,caseSensitive:u.caseSensitive,end:h},d),y=u.route;if(!p&&h&&n&&!r[r.length-1].route.index&&(p=Ag({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:lr([s,p.pathname]),pathnameBase:OS(lr([s,p.pathnameBase])),route:y}),p.pathnameBase!=="/"&&(s=lr([s,p.pathnameBase]))}return o}function Ag(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=kS(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((h,d,p)=>{let{paramName:y,isOptional:P}=d;if(y==="*"){let x=l[p]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const k=l[p];return P&&!k?h[y]=void 0:h[y]=(k||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:o,pattern:t}}function kS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),__(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function CS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return __(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ad(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function RS(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ss(t):t;return{pathname:n?n.startsWith("/")?n:xS(n,e):e,search:bS(r),hash:DS(i)}}function xS(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Dc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function NS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function T_(t,e){let n=NS(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function I_(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ss(t):(i=So({},t),Re(!i.pathname||!i.pathname.includes("?"),Dc("?","pathname","search",i)),Re(!i.pathname||!i.pathname.includes("#"),Dc("#","pathname","hash",i)),Re(!i.search||!i.search.includes("#"),Dc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let y=o.split("/");for(;y[0]==="..";)y.shift(),p-=1;i.pathname=y.join("/")}l=p>=0?e[p]:"/"}let u=RS(i,l),h=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(h||d)&&(u.pathname+="/"),u}const lr=t=>t.join("/").replace(/\/\/+/g,"/"),OS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),bS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,DS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function LS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const S_=["post","put","patch","delete"];new Set(S_);const MS=["get",...S_];new Set(MS);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ao(){return Ao=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ao.apply(this,arguments)}const Pd=B.createContext(null),VS=B.createContext(null),si=B.createContext(null),wu=B.createContext(null),oi=B.createContext({outlet:null,matches:[],isDataRoute:!1}),A_=B.createContext(null);function FS(t,e){let{relative:n}=e===void 0?{}:e;$o()||Re(!1);let{basename:r,navigator:i}=B.useContext(si),{hash:s,pathname:o,search:l}=C_(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:lr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function $o(){return B.useContext(wu)!=null}function Tu(){return $o()||Re(!1),B.useContext(wu).location}function P_(t){B.useContext(si).static||B.useLayoutEffect(t)}function k_(){let{isDataRoute:t}=B.useContext(oi);return t?XS():US()}function US(){$o()||Re(!1);let t=B.useContext(Pd),{basename:e,future:n,navigator:r}=B.useContext(si),{matches:i}=B.useContext(oi),{pathname:s}=Tu(),o=JSON.stringify(T_(i,n.v7_relativeSplatPath)),l=B.useRef(!1);return P_(()=>{l.current=!0}),B.useCallback(function(h,d){if(d===void 0&&(d={}),!l.current)return;if(typeof h=="number"){r.go(h);return}let p=I_(h,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:lr([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,o,s,t])}function C_(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=B.useContext(si),{matches:i}=B.useContext(oi),{pathname:s}=Tu(),o=JSON.stringify(T_(i,r.v7_relativeSplatPath));return B.useMemo(()=>I_(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function jS(t,e){return zS(t,e)}function zS(t,e,n,r){$o()||Re(!1);let{navigator:i}=B.useContext(si),{matches:s}=B.useContext(oi),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let h=Tu(),d;if(e){var p;let N=typeof e=="string"?ss(e):e;u==="/"||(p=N.pathname)!=null&&p.startsWith(u)||Re(!1),d=N}else d=h;let y=d.pathname||"/",P=y;if(u!=="/"){let N=u.replace(/^\//,"").split("/");P="/"+y.replace(/^\//,"").split("/").slice(N.length).join("/")}let k=mS(t,{pathname:P}),x=KS(k&&k.map(N=>Object.assign({},N,{params:Object.assign({},l,N.params),pathname:lr([u,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?u:lr([u,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),s,n,r);return e&&x?B.createElement(wu.Provider,{value:{location:Ao({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Jn.Pop}},x):x}function BS(){let t=YS(),e=LS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return B.createElement(B.Fragment,null,B.createElement("h2",null,"Unexpected Application Error!"),B.createElement("h3",{style:{fontStyle:"italic"}},e),n?B.createElement("pre",{style:i},n):null,null)}const $S=B.createElement(BS,null);class HS extends B.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?B.createElement(oi.Provider,{value:this.props.routeContext},B.createElement(A_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function WS(t){let{routeContext:e,match:n,children:r}=t,i=B.useContext(Pd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),B.createElement(oi.Provider,{value:e},r)}function KS(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||Re(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=d),p.route.id){let{loaderData:y,errors:P}=n,k=p.route.loader&&y[p.route.id]===void 0&&(!P||P[p.route.id]===void 0);if(p.route.lazy||k){u=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((d,p,y)=>{let P,k=!1,x=null,N=null;n&&(P=l&&p.route.id?l[p.route.id]:void 0,x=p.route.errorElement||$S,u&&(h<0&&y===0?(k=!0,N=null):h===y&&(k=!0,N=p.route.hydrateFallbackElement||null)));let _=e.concat(o.slice(0,y+1)),v=()=>{let T;return P?T=x:k?T=N:p.route.Component?T=B.createElement(p.route.Component,null):p.route.element?T=p.route.element:T=d,B.createElement(WS,{match:p,routeContext:{outlet:d,matches:_,isDataRoute:n!=null},children:T})};return n&&(p.route.ErrorBoundary||p.route.errorElement||y===0)?B.createElement(HS,{location:n.location,revalidation:n.revalidation,component:x,error:P,children:v(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):v()},null)}var R_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(R_||{}),Ml=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ml||{});function GS(t){let e=B.useContext(Pd);return e||Re(!1),e}function qS(t){let e=B.useContext(VS);return e||Re(!1),e}function QS(t){let e=B.useContext(oi);return e||Re(!1),e}function x_(t){let e=QS(),n=e.matches[e.matches.length-1];return n.route.id||Re(!1),n.route.id}function YS(){var t;let e=B.useContext(A_),n=qS(Ml.UseRouteError),r=x_(Ml.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function XS(){let{router:t}=GS(R_.UseNavigateStable),e=x_(Ml.UseNavigateStable),n=B.useRef(!1);return P_(()=>{n.current=!0}),B.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ao({fromRouteId:e},s)))},[t,e])}function Hh(t){Re(!1)}function JS(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Jn.Pop,navigator:s,static:o=!1,future:l}=t;$o()&&Re(!1);let u=e.replace(/^\/*/,"/"),h=B.useMemo(()=>({basename:u,navigator:s,static:o,future:Ao({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=ss(r));let{pathname:d="/",search:p="",hash:y="",state:P=null,key:k="default"}=r,x=B.useMemo(()=>{let N=Ad(d,u);return N==null?null:{location:{pathname:N,search:p,hash:y,state:P,key:k},navigationType:i}},[u,d,p,y,P,k,i]);return x==null?null:B.createElement(si.Provider,{value:h},B.createElement(wu.Provider,{children:n,value:x}))}function ZS(t){let{children:e,location:n}=t;return jS(Wh(e),n)}new Promise(()=>{});function Wh(t,e){e===void 0&&(e=[]);let n=[];return B.Children.forEach(t,(r,i)=>{if(!B.isValidElement(r))return;let s=[...e,i];if(r.type===B.Fragment){n.push.apply(n,Wh(r.props.children,s));return}r.type!==Hh&&Re(!1),!r.props.index||!r.props.children||Re(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Wh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Kh(){return Kh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Kh.apply(this,arguments)}function eA(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function tA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function nA(t,e){return t.button===0&&(!e||e==="_self")&&!tA(t)}const rA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],iA="6";try{window.__reactRouterVersion=iA}catch{}const sA="startTransition",Pg=eT[sA];function oA(t){let{basename:e,children:n,future:r,window:i}=t,s=B.useRef();s.current==null&&(s.current=fS({window:i,v5Compat:!0}));let o=s.current,[l,u]=B.useState({action:o.action,location:o.location}),{v7_startTransition:h}=r||{},d=B.useCallback(p=>{h&&Pg?Pg(()=>u(p)):u(p)},[u,h]);return B.useLayoutEffect(()=>o.listen(d),[o,d]),B.createElement(JS,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const aA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",lA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Un=B.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:h,preventScrollReset:d,unstable_viewTransition:p}=e,y=eA(e,rA),{basename:P}=B.useContext(si),k,x=!1;if(typeof h=="string"&&lA.test(h)&&(k=h,aA))try{let T=new URL(window.location.href),b=h.startsWith("//")?new URL(T.protocol+h):new URL(h),L=Ad(b.pathname,P);b.origin===T.origin&&L!=null?h=L+b.search+b.hash:x=!0}catch{}let N=FS(h,{relative:i}),_=uA(h,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,unstable_viewTransition:p});function v(T){r&&r(T),T.defaultPrevented||_(T)}return B.createElement("a",Kh({},y,{href:k||N,onClick:x||s?r:v,ref:n,target:u}))});var kg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(kg||(kg={}));var Cg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Cg||(Cg={}));function uA(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,u=k_(),h=Tu(),d=C_(t,{relative:o});return B.useCallback(p=>{if(nA(p,n)){p.preventDefault();let y=r!==void 0?r:Ll(h)===Ll(d);u(t,{replace:y,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[h,u,d,r,i,n,t,s,o,l])}const cA="/Proyectointegrador/assets/logo-BhaLGS-b.png";var Rg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},hA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},O_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let y=(l&15)<<2|h>>6,P=h&63;u||(P=64,o||(y=64)),r.push(n[d],n[p],n[y],n[P])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(N_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new fA;const y=s<<2|l>>4;if(r.push(y),h!==64){const P=l<<4&240|h>>2;if(r.push(P),p!==64){const k=h<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dA=function(t){const e=N_(t);return O_.encodeByteArray(e,!0)},Vl=function(t){return dA(t).replace(/\./g,"")},b_=function(t){try{return O_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA=()=>pA().__FIREBASE_DEFAULTS__,gA=()=>{if(typeof process>"u"||typeof Rg>"u")return;const t=Rg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&b_(t[1]);return e&&JSON.parse(e)},Iu=()=>{try{return mA()||gA()||yA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},D_=t=>{var e,n;return(n=(e=Iu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},vA=t=>{const e=D_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},L_=()=>{var t;return(t=Iu())===null||t===void 0?void 0:t.config},M_=t=>{var e;return(e=Iu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Vl(JSON.stringify(n)),Vl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function TA(){var t;const e=(t=Iu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function IA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function SA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function AA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function PA(){const t=tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function kA(){return!TA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function CA(){try{return typeof indexedDB=="object"}catch{return!1}}function RA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA="FirebaseError";class bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=xA,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ho.prototype.create)}}class Ho{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?NA(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new bn(i,l,r)}}function NA(t,e){return t.replace(OA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const OA=/\{\$([^}]+)}/g;function bA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(xg(s)&&xg(o)){if(!Fl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function xg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Us(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function js(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function DA(t,e){const n=new LA(t,e);return n.subscribe.bind(n)}class LA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");MA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Lc),i.error===void 0&&(i.error=Lc),i.complete===void 0&&(i.complete=Lc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function MA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Lc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t){return t&&t._delegate?t._delegate:t}class Qr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new _A;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(UA(e))try{this.getOrInitializeService({instanceIdentifier:Or})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Or){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Or){return this.instances.has(e)}getOptions(e=Or){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:FA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Or){return this.component?this.component.multipleInstances?e:Or:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function FA(t){return t===Or?void 0:t}function UA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new VA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const zA={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},BA=Z.INFO,$A={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},HA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=$A[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kd{constructor(e){this.name=e,this._logLevel=BA,this._logHandler=HA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const WA=(t,e)=>e.some(n=>t instanceof n);let Ng,Og;function KA(){return Ng||(Ng=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function GA(){return Og||(Og=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const V_=new WeakMap,Gh=new WeakMap,F_=new WeakMap,Mc=new WeakMap,Cd=new WeakMap;function qA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ur(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&V_.set(n,t)}).catch(()=>{}),Cd.set(e,t),e}function QA(t){if(Gh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Gh.set(t,e)}let qh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Gh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||F_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ur(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function YA(t){qh=t(qh)}function XA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Vc(this),e,...n);return F_.set(r,e.sort?e.sort():[e]),ur(r)}:GA().includes(t)?function(...e){return t.apply(Vc(this),e),ur(V_.get(this))}:function(...e){return ur(t.apply(Vc(this),e))}}function JA(t){return typeof t=="function"?XA(t):(t instanceof IDBTransaction&&QA(t),WA(t,KA())?new Proxy(t,qh):t)}function ur(t){if(t instanceof IDBRequest)return qA(t);if(Mc.has(t))return Mc.get(t);const e=JA(t);return e!==t&&(Mc.set(t,e),Cd.set(e,t)),e}const Vc=t=>Cd.get(t);function ZA(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=ur(o);return r&&o.addEventListener("upgradeneeded",u=>{r(ur(o.result),u.oldVersion,u.newVersion,ur(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const e2=["get","getKey","getAll","getAllKeys","count"],t2=["put","add","delete","clear"],Fc=new Map;function bg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fc.get(e))return Fc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=t2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||e2.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Fc.set(e,s),s}YA(t=>({...t,get:(e,n,r)=>bg(e,n)||t.get(e,n,r),has:(e,n)=>!!bg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(r2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function r2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qh="@firebase/app",Dg="0.10.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new kd("@firebase/app"),i2="@firebase/app-compat",s2="@firebase/analytics-compat",o2="@firebase/analytics",a2="@firebase/app-check-compat",l2="@firebase/app-check",u2="@firebase/auth",c2="@firebase/auth-compat",h2="@firebase/database",f2="@firebase/data-connect",d2="@firebase/database-compat",p2="@firebase/functions",m2="@firebase/functions-compat",g2="@firebase/installations",y2="@firebase/installations-compat",v2="@firebase/messaging",_2="@firebase/messaging-compat",E2="@firebase/performance",w2="@firebase/performance-compat",T2="@firebase/remote-config",I2="@firebase/remote-config-compat",S2="@firebase/storage",A2="@firebase/storage-compat",P2="@firebase/firestore",k2="@firebase/vertexai-preview",C2="@firebase/firestore-compat",R2="firebase",x2="10.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh="[DEFAULT]",N2={[Qh]:"fire-core",[i2]:"fire-core-compat",[o2]:"fire-analytics",[s2]:"fire-analytics-compat",[l2]:"fire-app-check",[a2]:"fire-app-check-compat",[u2]:"fire-auth",[c2]:"fire-auth-compat",[h2]:"fire-rtdb",[f2]:"fire-data-connect",[d2]:"fire-rtdb-compat",[p2]:"fire-fn",[m2]:"fire-fn-compat",[g2]:"fire-iid",[y2]:"fire-iid-compat",[v2]:"fire-fcm",[_2]:"fire-fcm-compat",[E2]:"fire-perf",[w2]:"fire-perf-compat",[T2]:"fire-rc",[I2]:"fire-rc-compat",[S2]:"fire-gcs",[A2]:"fire-gcs-compat",[P2]:"fire-fst",[C2]:"fire-fst-compat",[k2]:"fire-vertex","fire-js":"fire-js",[R2]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=new Map,O2=new Map,Xh=new Map;function Lg(t,e){try{t.container.addComponent(e)}catch(n){Cn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qi(t){const e=t.name;if(Xh.has(e))return Cn.debug(`There were multiple attempts to register component ${e}.`),!1;Xh.set(e,t);for(const n of Ul.values())Lg(n,t);for(const n of O2.values())Lg(n,t);return!0}function Rd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Qt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},cr=new Ho("app","Firebase",b2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=x2;function U_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Yh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw cr.create("bad-app-name",{appName:String(i)});if(n||(n=L_()),!n)throw cr.create("no-options");const s=Ul.get(i);if(s){if(Fl(n,s.options)&&Fl(r,s.config))return s;throw cr.create("duplicate-app",{appName:i})}const o=new jA(i);for(const u of Xh.values())o.addComponent(u);const l=new D2(n,r,o);return Ul.set(i,l),l}function j_(t=Yh){const e=Ul.get(t);if(!e&&t===Yh&&L_())return U_();if(!e)throw cr.create("no-app",{appName:t});return e}function hr(t,e,n){var r;let i=(r=N2[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cn.warn(l.join(" "));return}qi(new Qr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L2="firebase-heartbeat-database",M2=1,Po="firebase-heartbeat-store";let Uc=null;function z_(){return Uc||(Uc=ZA(L2,M2,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Po)}catch(n){console.warn(n)}}}}).catch(t=>{throw cr.create("idb-open",{originalErrorMessage:t.message})})),Uc}async function V2(t){try{const n=(await z_()).transaction(Po),r=await n.objectStore(Po).get(B_(t));return await n.done,r}catch(e){if(e instanceof bn)Cn.warn(e.message);else{const n=cr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cn.warn(n.message)}}}async function Mg(t,e){try{const r=(await z_()).transaction(Po,"readwrite");await r.objectStore(Po).put(e,B_(t)),await r.done}catch(n){if(n instanceof bn)Cn.warn(n.message);else{const r=cr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cn.warn(r.message)}}}function B_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F2=1024,U2=30*24*60*60*1e3;class j2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new B2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Vg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=U2}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Cn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Vg(),{heartbeatsToSend:r,unsentEntries:i}=z2(this._heartbeatsCache.heartbeats),s=Vl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Cn.warn(n),""}}}function Vg(){return new Date().toISOString().substring(0,10)}function z2(t,e=F2){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Fg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Fg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class B2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return CA()?RA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await V2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Mg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Mg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Fg(t){return Vl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $2(t){qi(new Qr("platform-logger",e=>new n2(e),"PRIVATE")),qi(new Qr("heartbeat",e=>new j2(e),"PRIVATE")),hr(Qh,Dg,t),hr(Qh,Dg,"esm2017"),hr("fire-js","")}$2("");var H2="firebase",W2="10.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hr(H2,W2,"app");function xd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function $_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const K2=$_,H_=new Ho("auth","Firebase",$_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=new kd("@firebase/auth");function G2(t,...e){jl.logLevel<=Z.WARN&&jl.warn(`Auth (${os}): ${t}`,...e)}function nl(t,...e){jl.logLevel<=Z.ERROR&&jl.error(`Auth (${os}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t,...e){throw Nd(t,...e)}function en(t,...e){return Nd(t,...e)}function W_(t,e,n){const r=Object.assign(Object.assign({},K2()),{[e]:n});return new Ho("auth","Firebase",r).create(e,{appName:t.name})}function wn(t){return W_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Nd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return H_.create(t,...e)}function K(t,e,...n){if(!t)throw Nd(e,...n)}function yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw nl(e),new Error(e)}function Rn(t,e){t||yn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function q2(){return Ug()==="http:"||Ug()==="https:"}function Ug(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(q2()||SA()||"connection"in navigator)?navigator.onLine:!0}function Y2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rn(n>e,"Short delay should be less than long delay!"),this.isMobile=wA()||AA()}get(){return Q2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(t,e){Rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J2=new Ko(3e4,6e4);function Ir(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Sr(t,e,n,r,i={}){return G_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Wo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return IA()||(h.referrerPolicy="no-referrer"),K_.fetch()(q_(t,t.config.apiHost,n,l),h)})}async function G_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},X2),e);try{const i=new eP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Va(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Va(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Va(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Va(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw W_(t,d,h);$t(t,d)}}catch(i){if(i instanceof bn)throw i;$t(t,"network-request-failed",{message:String(i)})}}async function Go(t,e,n,r,i={}){const s=await Sr(t,e,n,r,i);return"mfaPendingCredential"in s&&$t(t,"multi-factor-auth-required",{_serverResponse:s}),s}function q_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Od(t.config,i):`${t.config.apiScheme}://${i}`}function Z2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class eP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(en(this.auth,"network-request-failed")),J2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Va(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=en(t,e,r);return i.customData._tokenResponse=n,i}function jg(t){return t!==void 0&&t.enterprise!==void 0}class tP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Z2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function nP(t,e){return Sr(t,"GET","/v2/recaptchaConfig",Ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rP(t,e){return Sr(t,"POST","/v1/accounts:delete",e)}async function Q_(t,e){return Sr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iP(t,e=!1){const n=Bt(t),r=await n.getIdToken(e),i=bd(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Zs(jc(i.auth_time)),issuedAtTime:Zs(jc(i.iat)),expirationTime:Zs(jc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function jc(t){return Number(t)*1e3}function bd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return nl("JWT malformed, contained fewer than 3 sections"),null;try{const i=b_(n);return i?JSON.parse(i):(nl("Failed to decode base64 JWT payload"),null)}catch(i){return nl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function zg(t){const e=bd(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof bn&&sP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function sP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zs(this.lastLoginAt),this.creationTime=Zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ko(t,Q_(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Y_(s.providerUserInfo):[],l=lP(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=u?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Zh(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function aP(t){const e=Bt(t);await zl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Y_(t){return t.map(e=>{var{providerId:n}=e,r=xd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uP(t,e){const n=await G_(t,{},async()=>{const r=Wo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=q_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",K_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function cP(t,e){return Sr(t,"POST","/v2/accounts:revokeToken",Ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=zg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await uP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Mi;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mi,this.toJSON())}_performRefresh(){return yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class vn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=xd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new oP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Zh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ko(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return iP(this,e)}reload(){return aP(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await zl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qt(this.auth.app))return Promise.reject(wn(this.auth));const e=await this.getIdToken();return await ko(this,rP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,P=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,k=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(l=n.tenantId)!==null&&l!==void 0?l:void 0,N=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,_=(h=n.createdAt)!==null&&h!==void 0?h:void 0,v=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:T,emailVerified:b,isAnonymous:L,providerData:U,stsTokenManager:w}=n;K(T&&w,e,"internal-error");const g=Mi.fromJSON(this.name,w);K(typeof T=="string",e,"internal-error"),jn(p,e.name),jn(y,e.name),K(typeof b=="boolean",e,"internal-error"),K(typeof L=="boolean",e,"internal-error"),jn(P,e.name),jn(k,e.name),jn(x,e.name),jn(N,e.name),jn(_,e.name),jn(v,e.name);const E=new vn({uid:T,auth:e,email:y,emailVerified:b,displayName:p,isAnonymous:L,photoURL:k,phoneNumber:P,tenantId:x,stsTokenManager:g,createdAt:_,lastLoginAt:v});return U&&Array.isArray(U)&&(E.providerData=U.map(I=>Object.assign({},I))),N&&(E._redirectEventId=N),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new Mi;i.updateFromServerResponse(n);const s=new vn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await zl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Y_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Mi;l.updateFromIdToken(r);const u=new vn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Zh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg=new Map;function _n(t){Rn(t instanceof Function,"Expected a class definition");let e=Bg.get(t);return e?(Rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Bg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}X_.type="NONE";const $g=X_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(t,e,n){return`firebase:${t}:${e}:${n}`}class Vi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=rl(this.userKey,i.apiKey,s),this.fullPersistenceKey=rl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vi(_n($g),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||_n($g);const o=rl(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const d=await h._get(o);if(d){const p=vn._fromJSON(e,d);h!==s&&(l=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Vi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Vi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(t1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(J_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(r1(e))return"Blackberry";if(i1(e))return"Webos";if(Z_(e))return"Safari";if((e.includes("chrome/")||e1(e))&&!e.includes("edge/"))return"Chrome";if(n1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function J_(t=tt()){return/firefox\//i.test(t)}function Z_(t=tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function e1(t=tt()){return/crios\//i.test(t)}function t1(t=tt()){return/iemobile/i.test(t)}function n1(t=tt()){return/android/i.test(t)}function r1(t=tt()){return/blackberry/i.test(t)}function i1(t=tt()){return/webos/i.test(t)}function Dd(t=tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function hP(t=tt()){var e;return Dd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fP(){return PA()&&document.documentMode===10}function s1(t=tt()){return Dd(t)||n1(t)||i1(t)||r1(t)||/windows phone/i.test(t)||t1(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1(t,e=[]){let n;switch(t){case"Browser":n=Hg(tt());break;case"Worker":n=`${Hg(tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${os}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pP(t,e={}){return Sr(t,"GET","/v2/passwordPolicy",Ir(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP=6;class gP{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:mP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wg(this),this.idTokenSubscription=new Wg(this),this.beforeStateQueue=new dP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=H_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_n(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Vi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Q_(this,{idToken:e}),r=await vn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Qt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Y2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qt(this.app))return Promise.reject(wn(this));const n=e?Bt(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qt(this.app)?Promise.reject(wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qt(this.app)?Promise.reject(wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await pP(this),n=new gP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ho("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await cP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_n(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Vi.create(this,[_n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=o1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&G2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ai(t){return Bt(t)}class Wg{constructor(e){this.auth=e,this.observer=null,this.addObserver=DA(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Su={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vP(t){Su=t}function a1(t){return Su.loadJS(t)}function _P(){return Su.recaptchaEnterpriseScript}function EP(){return Su.gapiScript}function wP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const TP="recaptcha-enterprise",IP="NO_RECAPTCHA";class SP{constructor(e){this.type=TP,this.auth=ai(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{nP(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new tP(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;jg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(IP)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&jg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=_P();u.length!==0&&(u+=l),a1(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function Kg(t,e,n,r=!1){const i=new SP(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ef(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Kg(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Kg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AP(t,e){const n=Rd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Fl(s,e??{}))return i;$t(i,"already-initialized")}return n.initialize({options:e})}function PP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function kP(t,e,n){const r=ai(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=l1(e),{host:o,port:l}=CP(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),RP()}function l1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function CP(t){const e=l1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Gg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Gg(o)}}}function Gg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function RP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return yn("not implemented")}_getIdTokenResponse(e){return yn("not implemented")}_linkToIdToken(e,n){return yn("not implemented")}_getReauthenticationResolver(e){return yn("not implemented")}}async function xP(t,e){return Sr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NP(t,e){return Go(t,"POST","/v1/accounts:signInWithPassword",Ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OP(t,e){return Go(t,"POST","/v1/accounts:signInWithEmailLink",Ir(t,e))}async function bP(t,e){return Go(t,"POST","/v1/accounts:signInWithEmailLink",Ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co extends Ld{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Co(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Co(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ef(e,n,"signInWithPassword",NP);case"emailLink":return OP(e,{email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ef(e,r,"signUpPassword",xP);case"emailLink":return bP(e,{idToken:n,email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fi(t,e){return Go(t,"POST","/v1/accounts:signInWithIdp",Ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP="http://localhost";class Yr extends Ld{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=xd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Yr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Fi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Fi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fi(e,n)}buildRequest(){const e={requestUri:DP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Wo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function MP(t){const e=Us(js(t)).link,n=e?Us(js(e)).deep_link_id:null,r=Us(js(t)).deep_link_id;return(r?Us(js(r)).link:null)||r||n||e||t}class Md{constructor(e){var n,r,i,s,o,l;const u=Us(js(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,p=LP((i=u.mode)!==null&&i!==void 0?i:null);K(h&&d&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=MP(e);try{return new Md(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(){this.providerId=as.PROVIDER_ID}static credential(e,n){return Co._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Md.parseLink(n);return K(r,"argument-error"),Co._fromEmailAndCode(e,r.code,r.tenantId)}}as.PROVIDER_ID="password";as.EMAIL_PASSWORD_SIGN_IN_METHOD="password";as.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends u1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends qo{constructor(){super("facebook.com")}static credential(e){return Yr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends qo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Gn.credential(n,r)}catch{return null}}}Gn.GOOGLE_SIGN_IN_METHOD="google.com";Gn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends qo{constructor(){super("github.com")}static credential(e){return Yr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.GITHUB_SIGN_IN_METHOD="github.com";qn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends qo{constructor(){super("twitter.com")}static credential(e,n){return Yr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.TWITTER_SIGN_IN_METHOD="twitter.com";Qn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VP(t,e){return Go(t,"POST","/v1/accounts:signUp",Ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await vn._fromIdTokenResponse(e,r,i),o=qg(r);return new Xr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=qg(r);return new Xr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function qg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl extends bn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Bl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Bl(e,n,r,i)}}function c1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Bl._fromErrorAndOperation(t,s,e,r):s})}async function FP(t,e,n=!1){const r=await ko(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UP(t,e,n=!1){const{auth:r}=t;if(Qt(r.app))return Promise.reject(wn(r));const i="reauthenticate";try{const s=await ko(t,c1(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=bd(s.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),Xr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&$t(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h1(t,e,n=!1){if(Qt(t.app))return Promise.reject(wn(t));const r="signIn",i=await c1(t,r,e),s=await Xr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function jP(t,e){return h1(ai(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f1(t){const e=ai(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function zP(t,e,n){if(Qt(t.app))return Promise.reject(wn(t));const r=ai(t),o=await ef(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",VP).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&f1(t),u}),l=await Xr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function BP(t,e,n){return Qt(t.app)?Promise.reject(wn(t)):jP(Bt(t),as.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&f1(t),r})}function $P(t,e,n,r){return Bt(t).onIdTokenChanged(e,n,r)}function HP(t,e,n){return Bt(t).beforeAuthStateChanged(e,n)}const $l="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($l,"1"),this.storage.removeItem($l),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP=1e3,KP=10;class p1 extends d1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=s1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);fP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,KP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},WP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}p1.type="LOCAL";const GP=p1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1 extends d1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}m1.type="SESSION";const g1=m1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Au(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await qP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Au.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Vd("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const y=p;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(){return window}function YP(t){tn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y1(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function XP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ZP(){return y1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1="firebaseLocalStorageDb",ek=1,Hl="firebaseLocalStorage",_1="fbase_key";class Qo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pu(t,e){return t.transaction([Hl],e?"readwrite":"readonly").objectStore(Hl)}function tk(){const t=indexedDB.deleteDatabase(v1);return new Qo(t).toPromise()}function tf(){const t=indexedDB.open(v1,ek);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Hl,{keyPath:_1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Hl)?e(r):(r.close(),await tk(),e(await tf()))})})}async function Qg(t,e,n){const r=Pu(t,!0).put({[_1]:e,value:n});return new Qo(r).toPromise()}async function nk(t,e){const n=Pu(t,!1).get(e),r=await new Qo(n).toPromise();return r===void 0?null:r.value}function Yg(t,e){const n=Pu(t,!0).delete(e);return new Qo(n).toPromise()}const rk=800,ik=3;class E1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ik)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return y1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Au._getInstance(ZP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await XP(),!this.activeServiceWorker)return;this.sender=new QP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tf();return await Qg(e,$l,"1"),await Yg(e,$l),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>nk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Pu(i,!1).getAll();return new Qo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}E1.type="LOCAL";const sk=E1;new Ko(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ok(t,e){return e?_n(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd extends Ld{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Fi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Fi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ak(t){return h1(t.auth,new Fd(t),t.bypassAuthState)}function lk(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),UP(n,new Fd(t),t.bypassAuthState)}async function uk(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),FP(n,new Fd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ak;case"linkViaPopup":case"linkViaRedirect":return uk;case"reauthViaPopup":case"reauthViaRedirect":return lk;default:$t(this.auth,"internal-error")}}resolve(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck=new Ko(2e3,1e4);class ki extends w1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ki.currentPopupAction&&ki.currentPopupAction.cancel(),ki.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Rn(this.filter.length===1,"Popup operations only handle one event");const e=Vd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ki.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ck.get())};e()}}ki.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk="pendingRedirect",il=new Map;class fk extends w1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=il.get(this.auth._key());if(!e){try{const r=await dk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}il.set(this.auth._key(),e)}return this.bypassAuthState||il.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dk(t,e){const n=gk(e),r=mk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function pk(t,e){il.set(t._key(),e)}function mk(t){return _n(t._redirectPersistence)}function gk(t){return rl(hk,t.config.apiKey,t.name)}async function yk(t,e,n=!1){if(Qt(t.app))return Promise.reject(wn(t));const r=ai(t),i=ok(r,e),o=await new fk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk=10*60*1e3;class _k{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ek(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!T1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(en(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xg(e))}saveEventToCache(e){this.cachedEventUids.add(Xg(e)),this.lastProcessedEventTime=Date.now()}}function Xg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function T1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ek(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return T1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wk(t,e={}){return Sr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ik=/^https?/;async function Sk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await wk(t);for(const n of e)try{if(Ak(n))return}catch{}$t(t,"unauthorized-domain")}function Ak(t){const e=Jh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Ik.test(n))return!1;if(Tk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=new Ko(3e4,6e4);function Jg(){const t=tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function kk(t){return new Promise((e,n)=>{var r,i,s;function o(){Jg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jg(),n(en(t,"network-request-failed"))},timeout:Pk.get()})}if(!((i=(r=tn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=tn().gapi)===null||s===void 0)&&s.load)o();else{const l=wP("iframefcb");return tn()[l]=()=>{gapi.load?o():n(en(t,"network-request-failed"))},a1(`${EP()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw sl=null,e})}let sl=null;function Ck(t){return sl=sl||kk(t),sl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=new Ko(5e3,15e3),xk="__/auth/iframe",Nk="emulator/auth/iframe",Ok={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Dk(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Od(e,Nk):`https://${t.config.authDomain}/${xk}`,r={apiKey:e.apiKey,appName:t.name,v:os},i=bk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Wo(r).slice(1)}`}async function Lk(t){const e=await Ck(t),n=tn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:Dk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ok,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=en(t,"network-request-failed"),l=tn().setTimeout(()=>{s(o)},Rk.get());function u(){tn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vk=500,Fk=600,Uk="_blank",jk="http://localhost";class Zg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zk(t,e,n,r=Vk,i=Fk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Mk),{width:r.toString(),height:i.toString(),top:s,left:o}),h=tt().toLowerCase();n&&(l=e1(h)?Uk:n),J_(h)&&(e=e||jk,u.scrollbars="yes");const d=Object.entries(u).reduce((y,[P,k])=>`${y}${P}=${k},`,"");if(hP(h)&&l!=="_self")return Bk(e||"",l),new Zg(null);const p=window.open(e||"",l,d);K(p,t,"popup-blocked");try{p.focus()}catch{}return new Zg(p)}function Bk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k="__/auth/handler",Hk="emulator/auth/handler",Wk=encodeURIComponent("fac");async function ey(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:os,eventId:i};if(e instanceof u1){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",bA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof qo){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),h=u?`#${Wk}=${encodeURIComponent(u)}`:"";return`${Kk(t)}?${Wo(l).slice(1)}${h}`}function Kk({config:t}){return t.emulator?Od(t,Hk):`https://${t.authDomain}/${$k}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc="webStorageSupport";class Gk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=g1,this._completeRedirectFn=yk,this._overrideRedirectResult=pk}async _openPopup(e,n,r,i){var s;Rn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ey(e,n,r,Jh(),i);return zk(e,o,Vd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ey(e,n,r,Jh(),i);return YP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Rn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Lk(e),r=new _k(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zc,{type:zc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[zc];o!==void 0&&n(!!o),$t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Sk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return s1()||Z_()||Dd()}}const qk=Gk;var ty="@firebase/auth",ny="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Xk(t){qi(new Qr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:o1(t)},h=new yP(r,i,s,u);return PP(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),qi(new Qr("auth-internal",e=>{const n=ai(e.getProvider("auth").getImmediate());return(r=>new Qk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hr(ty,ny,Yk(t)),hr(ty,ny,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk=5*60,Zk=M_("authIdTokenMaxAge")||Jk;let ry=null;const eC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Zk)return;const i=n==null?void 0:n.token;ry!==i&&(ry=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function tC(t=j_()){const e=Rd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=AP(t,{popupRedirectResolver:qk,persistence:[sk,GP,g1]}),r=M_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=eC(s.toString());HP(n,o,()=>o(n.currentUser)),$P(n,l=>o(l))}}const i=D_("auth");return i&&kP(n,`http://${i}`),n}function nC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}vP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=en("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",nC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Xk("Browser");var iy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var I1;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,g){function E(){}E.prototype=g.prototype,w.D=g.prototype,w.prototype=new E,w.prototype.constructor=w,w.C=function(I,A,R){for(var S=Array(arguments.length-2),St=2;St<arguments.length;St++)S[St-2]=arguments[St];return g.prototype[A].apply(I,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,g,E){E||(E=0);var I=Array(16);if(typeof g=="string")for(var A=0;16>A;++A)I[A]=g.charCodeAt(E++)|g.charCodeAt(E++)<<8|g.charCodeAt(E++)<<16|g.charCodeAt(E++)<<24;else for(A=0;16>A;++A)I[A]=g[E++]|g[E++]<<8|g[E++]<<16|g[E++]<<24;g=w.g[0],E=w.g[1],A=w.g[2];var R=w.g[3],S=g+(R^E&(A^R))+I[0]+3614090360&4294967295;g=E+(S<<7&4294967295|S>>>25),S=R+(A^g&(E^A))+I[1]+3905402710&4294967295,R=g+(S<<12&4294967295|S>>>20),S=A+(E^R&(g^E))+I[2]+606105819&4294967295,A=R+(S<<17&4294967295|S>>>15),S=E+(g^A&(R^g))+I[3]+3250441966&4294967295,E=A+(S<<22&4294967295|S>>>10),S=g+(R^E&(A^R))+I[4]+4118548399&4294967295,g=E+(S<<7&4294967295|S>>>25),S=R+(A^g&(E^A))+I[5]+1200080426&4294967295,R=g+(S<<12&4294967295|S>>>20),S=A+(E^R&(g^E))+I[6]+2821735955&4294967295,A=R+(S<<17&4294967295|S>>>15),S=E+(g^A&(R^g))+I[7]+4249261313&4294967295,E=A+(S<<22&4294967295|S>>>10),S=g+(R^E&(A^R))+I[8]+1770035416&4294967295,g=E+(S<<7&4294967295|S>>>25),S=R+(A^g&(E^A))+I[9]+2336552879&4294967295,R=g+(S<<12&4294967295|S>>>20),S=A+(E^R&(g^E))+I[10]+4294925233&4294967295,A=R+(S<<17&4294967295|S>>>15),S=E+(g^A&(R^g))+I[11]+2304563134&4294967295,E=A+(S<<22&4294967295|S>>>10),S=g+(R^E&(A^R))+I[12]+1804603682&4294967295,g=E+(S<<7&4294967295|S>>>25),S=R+(A^g&(E^A))+I[13]+4254626195&4294967295,R=g+(S<<12&4294967295|S>>>20),S=A+(E^R&(g^E))+I[14]+2792965006&4294967295,A=R+(S<<17&4294967295|S>>>15),S=E+(g^A&(R^g))+I[15]+1236535329&4294967295,E=A+(S<<22&4294967295|S>>>10),S=g+(A^R&(E^A))+I[1]+4129170786&4294967295,g=E+(S<<5&4294967295|S>>>27),S=R+(E^A&(g^E))+I[6]+3225465664&4294967295,R=g+(S<<9&4294967295|S>>>23),S=A+(g^E&(R^g))+I[11]+643717713&4294967295,A=R+(S<<14&4294967295|S>>>18),S=E+(R^g&(A^R))+I[0]+3921069994&4294967295,E=A+(S<<20&4294967295|S>>>12),S=g+(A^R&(E^A))+I[5]+3593408605&4294967295,g=E+(S<<5&4294967295|S>>>27),S=R+(E^A&(g^E))+I[10]+38016083&4294967295,R=g+(S<<9&4294967295|S>>>23),S=A+(g^E&(R^g))+I[15]+3634488961&4294967295,A=R+(S<<14&4294967295|S>>>18),S=E+(R^g&(A^R))+I[4]+3889429448&4294967295,E=A+(S<<20&4294967295|S>>>12),S=g+(A^R&(E^A))+I[9]+568446438&4294967295,g=E+(S<<5&4294967295|S>>>27),S=R+(E^A&(g^E))+I[14]+3275163606&4294967295,R=g+(S<<9&4294967295|S>>>23),S=A+(g^E&(R^g))+I[3]+4107603335&4294967295,A=R+(S<<14&4294967295|S>>>18),S=E+(R^g&(A^R))+I[8]+1163531501&4294967295,E=A+(S<<20&4294967295|S>>>12),S=g+(A^R&(E^A))+I[13]+2850285829&4294967295,g=E+(S<<5&4294967295|S>>>27),S=R+(E^A&(g^E))+I[2]+4243563512&4294967295,R=g+(S<<9&4294967295|S>>>23),S=A+(g^E&(R^g))+I[7]+1735328473&4294967295,A=R+(S<<14&4294967295|S>>>18),S=E+(R^g&(A^R))+I[12]+2368359562&4294967295,E=A+(S<<20&4294967295|S>>>12),S=g+(E^A^R)+I[5]+4294588738&4294967295,g=E+(S<<4&4294967295|S>>>28),S=R+(g^E^A)+I[8]+2272392833&4294967295,R=g+(S<<11&4294967295|S>>>21),S=A+(R^g^E)+I[11]+1839030562&4294967295,A=R+(S<<16&4294967295|S>>>16),S=E+(A^R^g)+I[14]+4259657740&4294967295,E=A+(S<<23&4294967295|S>>>9),S=g+(E^A^R)+I[1]+2763975236&4294967295,g=E+(S<<4&4294967295|S>>>28),S=R+(g^E^A)+I[4]+1272893353&4294967295,R=g+(S<<11&4294967295|S>>>21),S=A+(R^g^E)+I[7]+4139469664&4294967295,A=R+(S<<16&4294967295|S>>>16),S=E+(A^R^g)+I[10]+3200236656&4294967295,E=A+(S<<23&4294967295|S>>>9),S=g+(E^A^R)+I[13]+681279174&4294967295,g=E+(S<<4&4294967295|S>>>28),S=R+(g^E^A)+I[0]+3936430074&4294967295,R=g+(S<<11&4294967295|S>>>21),S=A+(R^g^E)+I[3]+3572445317&4294967295,A=R+(S<<16&4294967295|S>>>16),S=E+(A^R^g)+I[6]+76029189&4294967295,E=A+(S<<23&4294967295|S>>>9),S=g+(E^A^R)+I[9]+3654602809&4294967295,g=E+(S<<4&4294967295|S>>>28),S=R+(g^E^A)+I[12]+3873151461&4294967295,R=g+(S<<11&4294967295|S>>>21),S=A+(R^g^E)+I[15]+530742520&4294967295,A=R+(S<<16&4294967295|S>>>16),S=E+(A^R^g)+I[2]+3299628645&4294967295,E=A+(S<<23&4294967295|S>>>9),S=g+(A^(E|~R))+I[0]+4096336452&4294967295,g=E+(S<<6&4294967295|S>>>26),S=R+(E^(g|~A))+I[7]+1126891415&4294967295,R=g+(S<<10&4294967295|S>>>22),S=A+(g^(R|~E))+I[14]+2878612391&4294967295,A=R+(S<<15&4294967295|S>>>17),S=E+(R^(A|~g))+I[5]+4237533241&4294967295,E=A+(S<<21&4294967295|S>>>11),S=g+(A^(E|~R))+I[12]+1700485571&4294967295,g=E+(S<<6&4294967295|S>>>26),S=R+(E^(g|~A))+I[3]+2399980690&4294967295,R=g+(S<<10&4294967295|S>>>22),S=A+(g^(R|~E))+I[10]+4293915773&4294967295,A=R+(S<<15&4294967295|S>>>17),S=E+(R^(A|~g))+I[1]+2240044497&4294967295,E=A+(S<<21&4294967295|S>>>11),S=g+(A^(E|~R))+I[8]+1873313359&4294967295,g=E+(S<<6&4294967295|S>>>26),S=R+(E^(g|~A))+I[15]+4264355552&4294967295,R=g+(S<<10&4294967295|S>>>22),S=A+(g^(R|~E))+I[6]+2734768916&4294967295,A=R+(S<<15&4294967295|S>>>17),S=E+(R^(A|~g))+I[13]+1309151649&4294967295,E=A+(S<<21&4294967295|S>>>11),S=g+(A^(E|~R))+I[4]+4149444226&4294967295,g=E+(S<<6&4294967295|S>>>26),S=R+(E^(g|~A))+I[11]+3174756917&4294967295,R=g+(S<<10&4294967295|S>>>22),S=A+(g^(R|~E))+I[2]+718787259&4294967295,A=R+(S<<15&4294967295|S>>>17),S=E+(R^(A|~g))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(A+(S<<21&4294967295|S>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+R&4294967295}r.prototype.u=function(w,g){g===void 0&&(g=w.length);for(var E=g-this.blockSize,I=this.B,A=this.h,R=0;R<g;){if(A==0)for(;R<=E;)i(this,w,R),R+=this.blockSize;if(typeof w=="string"){for(;R<g;)if(I[A++]=w.charCodeAt(R++),A==this.blockSize){i(this,I),A=0;break}}else for(;R<g;)if(I[A++]=w[R++],A==this.blockSize){i(this,I),A=0;break}}this.h=A,this.o+=g},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;var E=8*this.o;for(g=w.length-8;g<w.length;++g)w[g]=E&255,E/=256;for(this.u(w),w=Array(16),g=E=0;4>g;++g)for(var I=0;32>I;I+=8)w[E++]=this.g[g]>>>I&255;return w};function s(w,g){var E=l;return Object.prototype.hasOwnProperty.call(E,w)?E[w]:E[w]=g(w)}function o(w,g){this.h=g;for(var E=[],I=!0,A=w.length-1;0<=A;A--){var R=w[A]|0;I&&R==g||(E[A]=R,I=!1)}this.g=E}var l={};function u(w){return-128<=w&&128>w?s(w,function(g){return new o([g|0],0>g?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return N(h(-w));for(var g=[],E=1,I=0;w>=E;I++)g[I]=w/E|0,E*=4294967296;return new o(g,0)}function d(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return N(d(w.substring(1),g));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(g,8)),I=p,A=0;A<w.length;A+=8){var R=Math.min(8,w.length-A),S=parseInt(w.substring(A,A+R),g);8>R?(R=h(Math.pow(g,R)),I=I.j(R).add(h(S))):(I=I.j(E),I=I.add(h(S)))}return I}var p=u(0),y=u(1),P=u(16777216);t=o.prototype,t.m=function(){if(x(this))return-N(this).m();for(var w=0,g=1,E=0;E<this.g.length;E++){var I=this.i(E);w+=(0<=I?I:4294967296+I)*g,g*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(k(this))return"0";if(x(this))return"-"+N(this).toString(w);for(var g=h(Math.pow(w,6)),E=this,I="";;){var A=b(E,g).g;E=_(E,A.j(g));var R=((0<E.g.length?E.g[0]:E.h)>>>0).toString(w);if(E=A,k(E))return R+I;for(;6>R.length;)R="0"+R;I=R+I}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function k(w){if(w.h!=0)return!1;for(var g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function x(w){return w.h==-1}t.l=function(w){return w=_(this,w),x(w)?-1:k(w)?0:1};function N(w){for(var g=w.g.length,E=[],I=0;I<g;I++)E[I]=~w.g[I];return new o(E,~w.h).add(y)}t.abs=function(){return x(this)?N(this):this},t.add=function(w){for(var g=Math.max(this.g.length,w.g.length),E=[],I=0,A=0;A<=g;A++){var R=I+(this.i(A)&65535)+(w.i(A)&65535),S=(R>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);I=S>>>16,R&=65535,S&=65535,E[A]=S<<16|R}return new o(E,E[E.length-1]&-2147483648?-1:0)};function _(w,g){return w.add(N(g))}t.j=function(w){if(k(this)||k(w))return p;if(x(this))return x(w)?N(this).j(N(w)):N(N(this).j(w));if(x(w))return N(this.j(N(w)));if(0>this.l(P)&&0>w.l(P))return h(this.m()*w.m());for(var g=this.g.length+w.g.length,E=[],I=0;I<2*g;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(var A=0;A<w.g.length;A++){var R=this.i(I)>>>16,S=this.i(I)&65535,St=w.i(A)>>>16,Ar=w.i(A)&65535;E[2*I+2*A]+=S*Ar,v(E,2*I+2*A),E[2*I+2*A+1]+=R*Ar,v(E,2*I+2*A+1),E[2*I+2*A+1]+=S*St,v(E,2*I+2*A+1),E[2*I+2*A+2]+=R*St,v(E,2*I+2*A+2)}for(I=0;I<g;I++)E[I]=E[2*I+1]<<16|E[2*I];for(I=g;I<2*g;I++)E[I]=0;return new o(E,0)};function v(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function T(w,g){this.g=w,this.h=g}function b(w,g){if(k(g))throw Error("division by zero");if(k(w))return new T(p,p);if(x(w))return g=b(N(w),g),new T(N(g.g),N(g.h));if(x(g))return g=b(w,N(g)),new T(N(g.g),g.h);if(30<w.g.length){if(x(w)||x(g))throw Error("slowDivide_ only works with positive integers.");for(var E=y,I=g;0>=I.l(w);)E=L(E),I=L(I);var A=U(E,1),R=U(I,1);for(I=U(I,2),E=U(E,2);!k(I);){var S=R.add(I);0>=S.l(w)&&(A=A.add(E),R=S),I=U(I,1),E=U(E,1)}return g=_(w,A.j(g)),new T(A,g)}for(A=p;0<=w.l(g);){for(E=Math.max(1,Math.floor(w.m()/g.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),R=h(E),S=R.j(g);x(S)||0<S.l(w);)E-=I,R=h(E),S=R.j(g);k(R)&&(R=y),A=A.add(R),w=_(w,S)}return new T(A,w)}t.A=function(w){return b(this,w).h},t.and=function(w){for(var g=Math.max(this.g.length,w.g.length),E=[],I=0;I<g;I++)E[I]=this.i(I)&w.i(I);return new o(E,this.h&w.h)},t.or=function(w){for(var g=Math.max(this.g.length,w.g.length),E=[],I=0;I<g;I++)E[I]=this.i(I)|w.i(I);return new o(E,this.h|w.h)},t.xor=function(w){for(var g=Math.max(this.g.length,w.g.length),E=[],I=0;I<g;I++)E[I]=this.i(I)^w.i(I);return new o(E,this.h^w.h)};function L(w){for(var g=w.g.length+1,E=[],I=0;I<g;I++)E[I]=w.i(I)<<1|w.i(I-1)>>>31;return new o(E,w.h)}function U(w,g){var E=g>>5;g%=32;for(var I=w.g.length-E,A=[],R=0;R<I;R++)A[R]=0<g?w.i(R+E)>>>g|w.i(R+E+1)<<32-g:w.i(R+E);return new o(A,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,I1=o}).apply(typeof iy<"u"?iy:typeof self<"u"?self:typeof window<"u"?window:{});var Fa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var S1,zs,A1,ol,nf,P1,k1,C1;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,f){return a==Array.prototype||a==Object.prototype||(a[c]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fa=="object"&&Fa];for(var c=0;c<a.length;++c){var f=a[c];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var C=a[m];if(!(C in f))break e;f=f[C]}a=a[a.length-1],m=f[a],c=c(m),c!=m&&c!=null&&e(f,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var f=0,m=!1,C={next:function(){if(!m&&f<a.length){var O=f++;return{value:c(O,a[O]),done:!1}}return m=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function d(a,c,f){return a.call.apply(a.bind,arguments)}function p(a,c,f){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,m),a.apply(c,C)}}return function(){return a.apply(c,arguments)}}function y(a,c,f){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,y.apply(null,arguments)}function P(a,c){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function k(a,c){function f(){}f.prototype=c.prototype,a.aa=c.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(m,C,O){for(var F=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)F[oe-2]=arguments[oe];return c.prototype[C].apply(m,F)}}function x(a){const c=a.length;if(0<c){const f=Array(c);for(let m=0;m<c;m++)f[m]=a[m];return f}return[]}function N(a,c){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(u(m)){const C=a.length||0,O=m.length||0;a.length=C+O;for(let F=0;F<O;F++)a[C+F]=m[F]}else a.push(m)}}class _{constructor(c,f){this.i=c,this.j=f,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function v(a){return/^[\s\xa0]*$/.test(a)}function T(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function b(a){return b[" "](a),a}b[" "]=function(){};var L=T().indexOf("Gecko")!=-1&&!(T().toLowerCase().indexOf("webkit")!=-1&&T().indexOf("Edge")==-1)&&!(T().indexOf("Trident")!=-1||T().indexOf("MSIE")!=-1)&&T().indexOf("Edge")==-1;function U(a,c,f){for(const m in a)c.call(f,a[m],m,a)}function w(a,c){for(const f in a)c.call(void 0,a[f],f,a)}function g(a){const c={};for(const f in a)c[f]=a[f];return c}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,c){let f,m;for(let C=1;C<arguments.length;C++){m=arguments[C];for(f in m)a[f]=m[f];for(let O=0;O<E.length;O++)f=E[O],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function A(a){var c=1;a=a.split(":");const f=[];for(;0<c&&a.length;)f.push(a.shift()),c--;return a.length&&f.push(a.join(":")),f}function R(a){l.setTimeout(()=>{throw a},0)}function S(){var a=q;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class St{constructor(){this.h=this.g=null}add(c,f){const m=Ar.get();m.set(c,f),this.h?this.h.next=m:this.g=m,this.h=m}}var Ar=new _(()=>new hs,a=>a.reset());class hs{constructor(){this.next=this.g=this.h=null}set(c,f){this.h=c,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let on,z=!1,q=new St,Q=()=>{const a=l.Promise.resolve(void 0);on=()=>{a.then(ge)}};var ge=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(f){R(f)}var c=Ar;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}z=!1};function se(){this.s=this.s,this.C=this.C}se.prototype.s=!1,se.prototype.ma=function(){this.s||(this.s=!0,this.N())},se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var an=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,c),l.removeEventListener("test",f,c)}catch{}return a}();function ln(a,c){if(Ie.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(L){e:{try{b(c.nodeName);var C=!0;break e}catch{}C=!1}C||(c=null)}}else f=="mouseover"?c=a.fromElement:f=="mouseout"&&(c=a.toElement);this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:un[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ln.aa.h.call(this)}}k(ln,Ie);var un={2:"touch",3:"pen",4:"mouse"};ln.prototype.h=function(){ln.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var cn="closure_listenable_"+(1e6*Math.random()|0),aw=0;function lw(a,c,f,m,C){this.listener=a,this.proxy=null,this.src=c,this.type=f,this.capture=!!m,this.ha=C,this.key=++aw,this.da=this.fa=!1}function na(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ra(a){this.src=a,this.g={},this.h=0}ra.prototype.add=function(a,c,f,m,C){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var F=ju(a,c,m,C);return-1<F?(c=a[F],f||(c.fa=!1)):(c=new lw(c,this.src,O,!!m,C),c.fa=f,a.push(c)),c};function Uu(a,c){var f=c.type;if(f in a.g){var m=a.g[f],C=Array.prototype.indexOf.call(m,c,void 0),O;(O=0<=C)&&Array.prototype.splice.call(m,C,1),O&&(na(c),a.g[f].length==0&&(delete a.g[f],a.h--))}}function ju(a,c,f,m){for(var C=0;C<a.length;++C){var O=a[C];if(!O.da&&O.listener==c&&O.capture==!!f&&O.ha==m)return C}return-1}var zu="closure_lm_"+(1e6*Math.random()|0),Bu={};function dp(a,c,f,m,C){if(Array.isArray(c)){for(var O=0;O<c.length;O++)dp(a,c[O],f,m,C);return null}return f=gp(f),a&&a[cn]?a.K(c,f,h(m)?!!m.capture:!!m,C):uw(a,c,f,!1,m,C)}function uw(a,c,f,m,C,O){if(!c)throw Error("Invalid event type");var F=h(C)?!!C.capture:!!C,oe=Hu(a);if(oe||(a[zu]=oe=new ra(a)),f=oe.add(c,f,m,F,O),f.proxy)return f;if(m=cw(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)an||(C=F),C===void 0&&(C=!1),a.addEventListener(c.toString(),m,C);else if(a.attachEvent)a.attachEvent(mp(c.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function cw(){function a(f){return c.call(a.src,a.listener,f)}const c=hw;return a}function pp(a,c,f,m,C){if(Array.isArray(c))for(var O=0;O<c.length;O++)pp(a,c[O],f,m,C);else m=h(m)?!!m.capture:!!m,f=gp(f),a&&a[cn]?(a=a.i,c=String(c).toString(),c in a.g&&(O=a.g[c],f=ju(O,f,m,C),-1<f&&(na(O[f]),Array.prototype.splice.call(O,f,1),O.length==0&&(delete a.g[c],a.h--)))):a&&(a=Hu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=ju(c,f,m,C)),(f=-1<a?c[a]:null)&&$u(f))}function $u(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[cn])Uu(c.i,a);else{var f=a.type,m=a.proxy;c.removeEventListener?c.removeEventListener(f,m,a.capture):c.detachEvent?c.detachEvent(mp(f),m):c.addListener&&c.removeListener&&c.removeListener(m),(f=Hu(c))?(Uu(f,a),f.h==0&&(f.src=null,c[zu]=null)):na(a)}}}function mp(a){return a in Bu?Bu[a]:Bu[a]="on"+a}function hw(a,c){if(a.da)a=!0;else{c=new ln(c,this);var f=a.listener,m=a.ha||a.src;a.fa&&$u(a),a=f.call(m,c)}return a}function Hu(a){return a=a[zu],a instanceof ra?a:null}var Wu="__closure_events_fn_"+(1e9*Math.random()>>>0);function gp(a){return typeof a=="function"?a:(a[Wu]||(a[Wu]=function(c){return a.handleEvent(c)}),a[Wu])}function He(){se.call(this),this.i=new ra(this),this.M=this,this.F=null}k(He,se),He.prototype[cn]=!0,He.prototype.removeEventListener=function(a,c,f,m){pp(this,a,c,f,m)};function nt(a,c){var f,m=a.F;if(m)for(f=[];m;m=m.F)f.push(m);if(a=a.M,m=c.type||c,typeof c=="string")c=new Ie(c,a);else if(c instanceof Ie)c.target=c.target||a;else{var C=c;c=new Ie(m,a),I(c,C)}if(C=!0,f)for(var O=f.length-1;0<=O;O--){var F=c.g=f[O];C=ia(F,m,!0,c)&&C}if(F=c.g=a,C=ia(F,m,!0,c)&&C,C=ia(F,m,!1,c)&&C,f)for(O=0;O<f.length;O++)F=c.g=f[O],C=ia(F,m,!1,c)&&C}He.prototype.N=function(){if(He.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var f=a.g[c],m=0;m<f.length;m++)na(f[m]);delete a.g[c],a.h--}}this.F=null},He.prototype.K=function(a,c,f,m){return this.i.add(String(a),c,!1,f,m)},He.prototype.L=function(a,c,f,m){return this.i.add(String(a),c,!0,f,m)};function ia(a,c,f,m){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var C=!0,O=0;O<c.length;++O){var F=c[O];if(F&&!F.da&&F.capture==f){var oe=F.listener,Ve=F.ha||F.src;F.fa&&Uu(a.i,F),C=oe.call(Ve,m)!==!1&&C}}return C&&!m.defaultPrevented}function yp(a,c,f){if(typeof a=="function")f&&(a=y(a,f));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function vp(a){a.g=yp(()=>{a.g=null,a.i&&(a.i=!1,vp(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class fw extends se{constructor(c,f){super(),this.m=c,this.l=f,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:vp(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fs(a){se.call(this),this.h=a,this.g={}}k(fs,se);var _p=[];function Ep(a){U(a.g,function(c,f){this.g.hasOwnProperty(f)&&$u(c)},a),a.g={}}fs.prototype.N=function(){fs.aa.N.call(this),Ep(this)},fs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ku=l.JSON.stringify,dw=l.JSON.parse,pw=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Gu(){}Gu.prototype.h=null;function wp(a){return a.h||(a.h=a.i())}function Tp(){}var ds={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function qu(){Ie.call(this,"d")}k(qu,Ie);function Qu(){Ie.call(this,"c")}k(Qu,Ie);var Pr={},Ip=null;function sa(){return Ip=Ip||new He}Pr.La="serverreachability";function Sp(a){Ie.call(this,Pr.La,a)}k(Sp,Ie);function ps(a){const c=sa();nt(c,new Sp(c))}Pr.STAT_EVENT="statevent";function Ap(a,c){Ie.call(this,Pr.STAT_EVENT,a),this.stat=c}k(Ap,Ie);function rt(a){const c=sa();nt(c,new Ap(c,a))}Pr.Ma="timingevent";function Pp(a,c){Ie.call(this,Pr.Ma,a),this.size=c}k(Pp,Ie);function ms(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function gs(){this.g=!0}gs.prototype.xa=function(){this.g=!1};function mw(a,c,f,m,C,O){a.info(function(){if(a.g)if(O)for(var F="",oe=O.split("&"),Ve=0;Ve<oe.length;Ve++){var re=oe[Ve].split("=");if(1<re.length){var We=re[0];re=re[1];var Ke=We.split("_");F=2<=Ke.length&&Ke[1]=="type"?F+(We+"="+re+"&"):F+(We+"=redacted&")}}else F=null;else F=O;return"XMLHTTP REQ ("+m+") [attempt "+C+"]: "+c+`
`+f+`
`+F})}function gw(a,c,f,m,C,O,F){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+C+"]: "+c+`
`+f+`
`+O+" "+F})}function ui(a,c,f,m){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+vw(a,f)+(m?" "+m:"")})}function yw(a,c){a.info(function(){return"TIMEOUT: "+c})}gs.prototype.info=function(){};function vw(a,c){if(!a.g)return c;if(!c)return null;try{var f=JSON.parse(c);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var m=f[a];if(!(2>m.length)){var C=m[1];if(Array.isArray(C)&&!(1>C.length)){var O=C[0];if(O!="noop"&&O!="stop"&&O!="close")for(var F=1;F<C.length;F++)C[F]=""}}}}return Ku(f)}catch{return c}}var oa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},kp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Yu;function aa(){}k(aa,Gu),aa.prototype.g=function(){return new XMLHttpRequest},aa.prototype.i=function(){return{}},Yu=new aa;function Ln(a,c,f,m){this.j=a,this.i=c,this.l=f,this.R=m||1,this.U=new fs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Cp}function Cp(){this.i=null,this.g="",this.h=!1}var Rp={},Xu={};function Ju(a,c,f){a.L=1,a.v=ha(hn(c)),a.m=f,a.P=!0,xp(a,null)}function xp(a,c){a.F=Date.now(),la(a),a.A=hn(a.v);var f=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Hp(f.i,"t",m),a.C=0,f=a.j.J,a.h=new Cp,a.g=lm(a.j,f?c:null,!a.m),0<a.O&&(a.M=new fw(y(a.Y,a,a.g),a.O)),c=a.U,f=a.g,m=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(_p[0]=C.toString()),C=_p);for(var O=0;O<C.length;O++){var F=dp(f,C[O],m||c.handleEvent,!1,c.h||c);if(!F)break;c.g[F.key]=F}c=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),ps(),mw(a.i,a.u,a.A,a.l,a.R,a.m)}Ln.prototype.ca=function(a){a=a.target;const c=this.M;c&&fn(a)==3?c.j():this.Y(a)},Ln.prototype.Y=function(a){try{if(a==this.g)e:{const Ke=fn(this.g);var c=this.g.Ba();const fi=this.g.Z();if(!(3>Ke)&&(Ke!=3||this.g&&(this.h.h||this.g.oa()||Xp(this.g)))){this.J||Ke!=4||c==7||(c==8||0>=fi?ps(3):ps(2)),Zu(this);var f=this.g.Z();this.X=f;t:if(Np(this)){var m=Xp(this.g);a="";var C=m.length,O=fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){kr(this),ys(this);var F="";break t}this.h.i=new l.TextDecoder}for(c=0;c<C;c++)this.h.h=!0,a+=this.h.i.decode(m[c],{stream:!(O&&c==C-1)});m.length=0,this.h.g+=a,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=f==200,gw(this.i,this.u,this.A,this.l,this.R,Ke,f),this.o){if(this.T&&!this.K){t:{if(this.g){var oe,Ve=this.g;if((oe=Ve.g?Ve.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(oe)){var re=oe;break t}}re=null}if(f=re)ui(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ec(this,f);else{this.o=!1,this.s=3,rt(12),kr(this),ys(this);break e}}if(this.P){f=!0;let Nt;for(;!this.J&&this.C<F.length;)if(Nt=_w(this,F),Nt==Xu){Ke==4&&(this.s=4,rt(14),f=!1),ui(this.i,this.l,null,"[Incomplete Response]");break}else if(Nt==Rp){this.s=4,rt(15),ui(this.i,this.l,F,"[Invalid Chunk]"),f=!1;break}else ui(this.i,this.l,Nt,null),ec(this,Nt);if(Np(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ke!=4||F.length!=0||this.h.h||(this.s=1,rt(16),f=!1),this.o=this.o&&f,!f)ui(this.i,this.l,F,"[Invalid Chunked Response]"),kr(this),ys(this);else if(0<F.length&&!this.W){this.W=!0;var We=this.j;We.g==this&&We.ba&&!We.M&&(We.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),oc(We),We.M=!0,rt(11))}}else ui(this.i,this.l,F,null),ec(this,F);Ke==4&&kr(this),this.o&&!this.J&&(Ke==4?im(this.j,this):(this.o=!1,la(this)))}else Mw(this.g),f==400&&0<F.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),kr(this),ys(this)}}}catch{}finally{}};function Np(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function _w(a,c){var f=a.C,m=c.indexOf(`
`,f);return m==-1?Xu:(f=Number(c.substring(f,m)),isNaN(f)?Rp:(m+=1,m+f>c.length?Xu:(c=c.slice(m,m+f),a.C=m+f,c)))}Ln.prototype.cancel=function(){this.J=!0,kr(this)};function la(a){a.S=Date.now()+a.I,Op(a,a.I)}function Op(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ms(y(a.ba,a),c)}function Zu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Ln.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(yw(this.i,this.A),this.L!=2&&(ps(),rt(17)),kr(this),this.s=2,ys(this)):Op(this,this.S-a)};function ys(a){a.j.G==0||a.J||im(a.j,a)}function kr(a){Zu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Ep(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function ec(a,c){try{var f=a.j;if(f.G!=0&&(f.g==a||tc(f.h,a))){if(!a.K&&tc(f.h,a)&&f.G==3){try{var m=f.Da.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var C=m;if(C[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)ya(f),ma(f);else break e;sc(f),rt(18)}}else f.za=C[1],0<f.za-f.T&&37500>C[2]&&f.F&&f.v==0&&!f.C&&(f.C=ms(y(f.Za,f),6e3));if(1>=Lp(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Rr(f,11)}else if((a.K||f.g==a)&&ya(f),!v(c))for(C=f.Da.g.parse(c),c=0;c<C.length;c++){let re=C[c];if(f.T=re[0],re=re[1],f.G==2)if(re[0]=="c"){f.K=re[1],f.ia=re[2];const We=re[3];We!=null&&(f.la=We,f.j.info("VER="+f.la));const Ke=re[4];Ke!=null&&(f.Aa=Ke,f.j.info("SVER="+f.Aa));const fi=re[5];fi!=null&&typeof fi=="number"&&0<fi&&(m=1.5*fi,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const Nt=a.g;if(Nt){const _a=Nt.g?Nt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_a){var O=m.h;O.g||_a.indexOf("spdy")==-1&&_a.indexOf("quic")==-1&&_a.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(nc(O,O.h),O.h=null))}if(m.D){const ac=Nt.g?Nt.g.getResponseHeader("X-HTTP-Session-Id"):null;ac&&(m.ya=ac,ce(m.I,m.D,ac))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var F=a;if(m.qa=am(m,m.J?m.ia:null,m.W),F.K){Mp(m.h,F);var oe=F,Ve=m.L;Ve&&(oe.I=Ve),oe.B&&(Zu(oe),la(oe)),m.g=F}else nm(m);0<f.i.length&&ga(f)}else re[0]!="stop"&&re[0]!="close"||Rr(f,7);else f.G==3&&(re[0]=="stop"||re[0]=="close"?re[0]=="stop"?Rr(f,7):ic(f):re[0]!="noop"&&f.l&&f.l.ta(re),f.v=0)}}ps(4)}catch{}}var Ew=class{constructor(a,c){this.g=a,this.map=c}};function bp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Dp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Lp(a){return a.h?1:a.g?a.g.size:0}function tc(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function nc(a,c){a.g?a.g.add(c):a.h=c}function Mp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}bp.prototype.cancel=function(){if(this.i=Vp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Vp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const f of a.g.values())c=c.concat(f.D);return c}return x(a.i)}function ww(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],f=a.length,m=0;m<f;m++)c.push(a[m]);return c}c=[],f=0;for(m in a)c[f++]=a[m];return c}function Tw(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var f=0;f<a;f++)c.push(f);return c}c=[],f=0;for(const m in a)c[f++]=m;return c}}}function Fp(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var f=Tw(a),m=ww(a),C=m.length,O=0;O<C;O++)c.call(void 0,m[O],f&&f[O],a)}var Up=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Iw(a,c){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var m=a[f].indexOf("="),C=null;if(0<=m){var O=a[f].substring(0,m);C=a[f].substring(m+1)}else O=a[f];c(O,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Cr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Cr){this.h=a.h,ua(this,a.j),this.o=a.o,this.g=a.g,ca(this,a.s),this.l=a.l;var c=a.i,f=new Es;f.i=c.i,c.g&&(f.g=new Map(c.g),f.h=c.h),jp(this,f),this.m=a.m}else a&&(c=String(a).match(Up))?(this.h=!1,ua(this,c[1]||"",!0),this.o=vs(c[2]||""),this.g=vs(c[3]||"",!0),ca(this,c[4]),this.l=vs(c[5]||"",!0),jp(this,c[6]||"",!0),this.m=vs(c[7]||"")):(this.h=!1,this.i=new Es(null,this.h))}Cr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(_s(c,zp,!0),":");var f=this.g;return(f||c=="file")&&(a.push("//"),(c=this.o)&&a.push(_s(c,zp,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(_s(f,f.charAt(0)=="/"?Pw:Aw,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",_s(f,Cw)),a.join("")};function hn(a){return new Cr(a)}function ua(a,c,f){a.j=f?vs(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function ca(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function jp(a,c,f){c instanceof Es?(a.i=c,Rw(a.i,a.h)):(f||(c=_s(c,kw)),a.i=new Es(c,a.h))}function ce(a,c,f){a.i.set(c,f)}function ha(a){return ce(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function vs(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function _s(a,c,f){return typeof a=="string"?(a=encodeURI(a).replace(c,Sw),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Sw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var zp=/[#\/\?@]/g,Aw=/[#\?:]/g,Pw=/[#\?]/g,kw=/[#\?@]/g,Cw=/#/g;function Es(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Mn(a){a.g||(a.g=new Map,a.h=0,a.i&&Iw(a.i,function(c,f){a.add(decodeURIComponent(c.replace(/\+/g," ")),f)}))}t=Es.prototype,t.add=function(a,c){Mn(this),this.i=null,a=ci(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(c),this.h+=1,this};function Bp(a,c){Mn(a),c=ci(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function $p(a,c){return Mn(a),c=ci(a,c),a.g.has(c)}t.forEach=function(a,c){Mn(this),this.g.forEach(function(f,m){f.forEach(function(C){a.call(c,C,m,this)},this)},this)},t.na=function(){Mn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),f=[];for(let m=0;m<c.length;m++){const C=a[m];for(let O=0;O<C.length;O++)f.push(c[m])}return f},t.V=function(a){Mn(this);let c=[];if(typeof a=="string")$p(this,a)&&(c=c.concat(this.g.get(ci(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)c=c.concat(a[f])}return c},t.set=function(a,c){return Mn(this),this.i=null,a=ci(this,a),$p(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function Hp(a,c,f){Bp(a,c),0<f.length&&(a.i=null,a.g.set(ci(a,c),x(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var f=0;f<c.length;f++){var m=c[f];const O=encodeURIComponent(String(m)),F=this.V(m);for(m=0;m<F.length;m++){var C=O;F[m]!==""&&(C+="="+encodeURIComponent(String(F[m]))),a.push(C)}}return this.i=a.join("&")};function ci(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function Rw(a,c){c&&!a.j&&(Mn(a),a.i=null,a.g.forEach(function(f,m){var C=m.toLowerCase();m!=C&&(Bp(this,m),Hp(this,C,f))},a)),a.j=c}function xw(a,c){const f=new gs;if(l.Image){const m=new Image;m.onload=P(Vn,f,"TestLoadImage: loaded",!0,c,m),m.onerror=P(Vn,f,"TestLoadImage: error",!1,c,m),m.onabort=P(Vn,f,"TestLoadImage: abort",!1,c,m),m.ontimeout=P(Vn,f,"TestLoadImage: timeout",!1,c,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else c(!1)}function Nw(a,c){const f=new gs,m=new AbortController,C=setTimeout(()=>{m.abort(),Vn(f,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:m.signal}).then(O=>{clearTimeout(C),O.ok?Vn(f,"TestPingServer: ok",!0,c):Vn(f,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(C),Vn(f,"TestPingServer: error",!1,c)})}function Vn(a,c,f,m,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),m(f)}catch{}}function Ow(){this.g=new pw}function bw(a,c,f){const m=f||"";try{Fp(a,function(C,O){let F=C;h(C)&&(F=Ku(C)),c.push(m+O+"="+encodeURIComponent(F))})}catch(C){throw c.push(m+"type="+encodeURIComponent("_badmap")),C}}function fa(a){this.l=a.Ub||null,this.j=a.eb||!1}k(fa,Gu),fa.prototype.g=function(){return new da(this.l,this.j)},fa.prototype.i=function(a){return function(){return a}}({});function da(a,c){He.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(da,He),t=da.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,Ts(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ws(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ts(this)),this.g&&(this.readyState=3,Ts(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Wp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Wp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?ws(this):Ts(this),this.readyState==3&&Wp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ws(this))},t.Qa=function(a){this.g&&(this.response=a,ws(this))},t.ga=function(){this.g&&ws(this)};function ws(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ts(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var f=c.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=c.next();return a.join(`\r
`)};function Ts(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(da.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Kp(a){let c="";return U(a,function(f,m){c+=m,c+=":",c+=f,c+=`\r
`}),c}function rc(a,c,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=Kp(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):ce(a,c,f))}function we(a){He.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(we,He);var Dw=/^https?$/i,Lw=["POST","PUT"];t=we.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Yu.g(),this.v=this.o?wp(this.o):wp(Yu),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(O){Gp(this,O);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var C in m)f.set(C,m[C]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const O of m.keys())f.set(O,m.get(O));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Lw,c,void 0))||m||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,F]of f)this.g.setRequestHeader(O,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Yp(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){Gp(this,O)}};function Gp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,qp(a),pa(a)}function qp(a){a.A||(a.A=!0,nt(a,"complete"),nt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,nt(this,"complete"),nt(this,"abort"),pa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pa(this,!0)),we.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Qp(this):this.bb())},t.bb=function(){Qp(this)};function Qp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||fn(a)!=4||a.Z()!=2)){if(a.u&&fn(a)==4)yp(a.Ea,0,a);else if(nt(a,"readystatechange"),fn(a)==4){a.h=!1;try{const F=a.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var f;if(!(f=c)){var m;if(m=F===0){var C=String(a.D).match(Up)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),m=!Dw.test(C?C.toLowerCase():"")}f=m}if(f)nt(a,"complete"),nt(a,"success");else{a.m=6;try{var O=2<fn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",qp(a)}}finally{pa(a)}}}}function pa(a,c){if(a.g){Yp(a);const f=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||nt(a,"ready");try{f.onreadystatechange=m}catch{}}}function Yp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function fn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<fn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),dw(c)}};function Xp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Mw(a){const c={};a=(a.g&&2<=fn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(v(a[m]))continue;var f=A(a[m]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=c[C]||[];c[C]=O,O.push(f)}w(c,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Is(a,c,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||c}function Jp(a){this.Aa=0,this.i=[],this.j=new gs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Is("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Is("baseRetryDelayMs",5e3,a),this.cb=Is("retryDelaySeedMs",1e4,a),this.Wa=Is("forwardChannelMaxRetries",2,a),this.wa=Is("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new bp(a&&a.concurrentRequestLimit),this.Da=new Ow,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Jp.prototype,t.la=8,t.G=1,t.connect=function(a,c,f,m){rt(0),this.W=a,this.H=c||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=am(this,null,this.W),ga(this)};function ic(a){if(Zp(a),a.G==3){var c=a.U++,f=hn(a.I);if(ce(f,"SID",a.K),ce(f,"RID",c),ce(f,"TYPE","terminate"),Ss(a,f),c=new Ln(a,a.j,c),c.L=2,c.v=ha(hn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=c.v,f=!0),f||(c.g=lm(c.j,null),c.g.ea(c.v)),c.F=Date.now(),la(c)}om(a)}function ma(a){a.g&&(oc(a),a.g.cancel(),a.g=null)}function Zp(a){ma(a),a.u&&(l.clearTimeout(a.u),a.u=null),ya(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ga(a){if(!Dp(a.h)&&!a.s){a.s=!0;var c=a.Ga;on||Q(),z||(on(),z=!0),q.add(c,a),a.B=0}}function Vw(a,c){return Lp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ms(y(a.Ga,a,c),sm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Ln(this,this.j,a);let O=this.o;if(this.S&&(O?(O=g(O),I(O,this.S)):O=this.S),this.m!==null||this.O||(C.H=O,O=null),this.P)e:{for(var c=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,4096<c){c=f;break e}if(c===4096||f===this.i.length-1){c=f+1;break e}}c=1e3}else c=1e3;c=tm(this,C,c),f=hn(this.I),ce(f,"RID",a),ce(f,"CVER",22),this.D&&ce(f,"X-HTTP-Session-Id",this.D),Ss(this,f),O&&(this.O?c="headers="+encodeURIComponent(String(Kp(O)))+"&"+c:this.m&&rc(f,this.m,O)),nc(this.h,C),this.Ua&&ce(f,"TYPE","init"),this.P?(ce(f,"$req",c),ce(f,"SID","null"),C.T=!0,Ju(C,f,null)):Ju(C,f,c),this.G=2}}else this.G==3&&(a?em(this,a):this.i.length==0||Dp(this.h)||em(this))};function em(a,c){var f;c?f=c.l:f=a.U++;const m=hn(a.I);ce(m,"SID",a.K),ce(m,"RID",f),ce(m,"AID",a.T),Ss(a,m),a.m&&a.o&&rc(m,a.m,a.o),f=new Ln(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),c&&(a.i=c.D.concat(a.i)),c=tm(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),nc(a.h,f),Ju(f,m,c)}function Ss(a,c){a.H&&U(a.H,function(f,m){ce(c,m,f)}),a.l&&Fp({},function(f,m){ce(c,m,f)})}function tm(a,c,f){f=Math.min(a.i.length,f);var m=a.l?y(a.l.Na,a.l,a):null;e:{var C=a.i;let O=-1;for(;;){const F=["count="+f];O==-1?0<f?(O=C[0].g,F.push("ofs="+O)):O=0:F.push("ofs="+O);let oe=!0;for(let Ve=0;Ve<f;Ve++){let re=C[Ve].g;const We=C[Ve].map;if(re-=O,0>re)O=Math.max(0,C[Ve].g-100),oe=!1;else try{bw(We,F,"req"+re+"_")}catch{m&&m(We)}}if(oe){m=F.join("&");break e}}}return a=a.i.splice(0,f),c.D=a,m}function nm(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;on||Q(),z||(on(),z=!0),q.add(c,a),a.v=0}}function sc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ms(y(a.Fa,a),sm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,rm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ms(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),ma(this),rm(this))};function oc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function rm(a){a.g=new Ln(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=hn(a.qa);ce(c,"RID","rpc"),ce(c,"SID",a.K),ce(c,"AID",a.T),ce(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&ce(c,"TO",a.ja),ce(c,"TYPE","xmlhttp"),Ss(a,c),a.m&&a.o&&rc(c,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=ha(hn(c)),f.m=null,f.P=!0,xp(f,a)}t.Za=function(){this.C!=null&&(this.C=null,ma(this),sc(this),rt(19))};function ya(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function im(a,c){var f=null;if(a.g==c){ya(a),oc(a),a.g=null;var m=2}else if(tc(a.h,c))f=c.D,Mp(a.h,c),m=1;else return;if(a.G!=0){if(c.o)if(m==1){f=c.m?c.m.length:0,c=Date.now()-c.F;var C=a.B;m=sa(),nt(m,new Pp(m,f)),ga(a)}else nm(a);else if(C=c.s,C==3||C==0&&0<c.X||!(m==1&&Vw(a,c)||m==2&&sc(a)))switch(f&&0<f.length&&(c=a.h,c.i=c.i.concat(f)),C){case 1:Rr(a,5);break;case 4:Rr(a,10);break;case 3:Rr(a,6);break;default:Rr(a,2)}}}function sm(a,c){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*c}function Rr(a,c){if(a.j.info("Error code "+c),c==2){var f=y(a.fb,a),m=a.Xa;const C=!m;m=new Cr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ua(m,"https"),ha(m),C?xw(m.toString(),f):Nw(m.toString(),f)}else rt(2);a.G=0,a.l&&a.l.sa(c),om(a),Zp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function om(a){if(a.G=0,a.ka=[],a.l){const c=Vp(a.h);(c.length!=0||a.i.length!=0)&&(N(a.ka,c),N(a.ka,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.ra()}}function am(a,c,f){var m=f instanceof Cr?hn(f):new Cr(f);if(m.g!="")c&&(m.g=c+"."+m.g),ca(m,m.s);else{var C=l.location;m=C.protocol,c=c?c+"."+C.hostname:C.hostname,C=+C.port;var O=new Cr(null);m&&ua(O,m),c&&(O.g=c),C&&ca(O,C),f&&(O.l=f),m=O}return f=a.D,c=a.ya,f&&c&&ce(m,f,c),ce(m,"VER",a.la),Ss(a,m),m}function lm(a,c,f){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new we(new fa({eb:f})):new we(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function um(){}t=um.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function va(){}va.prototype.g=function(a,c){return new pt(a,c)};function pt(a,c){He.call(this),this.g=new Jp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!v(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!v(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new hi(this)}k(pt,He),pt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},pt.prototype.close=function(){ic(this.g)},pt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Ku(a),a=f);c.i.push(new Ew(c.Ya++,a)),c.G==3&&ga(c)},pt.prototype.N=function(){this.g.l=null,delete this.j,ic(this.g),delete this.g,pt.aa.N.call(this)};function cm(a){qu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const f in c){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}k(cm,qu);function hm(){Qu.call(this),this.status=1}k(hm,Qu);function hi(a){this.g=a}k(hi,um),hi.prototype.ua=function(){nt(this.g,"a")},hi.prototype.ta=function(a){nt(this.g,new cm(a))},hi.prototype.sa=function(a){nt(this.g,new hm)},hi.prototype.ra=function(){nt(this.g,"b")},va.prototype.createWebChannel=va.prototype.g,pt.prototype.send=pt.prototype.o,pt.prototype.open=pt.prototype.m,pt.prototype.close=pt.prototype.close,C1=function(){return new va},k1=function(){return sa()},P1=Pr,nf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},oa.NO_ERROR=0,oa.TIMEOUT=8,oa.HTTP_ERROR=6,ol=oa,kp.COMPLETE="complete",A1=kp,Tp.EventType=ds,ds.OPEN="a",ds.CLOSE="b",ds.ERROR="c",ds.MESSAGE="d",He.prototype.listen=He.prototype.K,zs=Tp,we.prototype.listenOnce=we.prototype.L,we.prototype.getLastError=we.prototype.Ka,we.prototype.getLastErrorCode=we.prototype.Ba,we.prototype.getStatus=we.prototype.Z,we.prototype.getResponseJson=we.prototype.Oa,we.prototype.getResponseText=we.prototype.oa,we.prototype.send=we.prototype.ea,we.prototype.setWithCredentials=we.prototype.Ha,S1=we}).apply(typeof Fa<"u"?Fa:typeof self<"u"?self:typeof window<"u"?window:{});const sy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ls="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=new kd("@firebase/firestore");function bs(){return Jr.logLevel}function W(t,...e){if(Jr.logLevel<=Z.DEBUG){const n=e.map(Ud);Jr.debug(`Firestore (${ls}): ${t}`,...n)}}function Zr(t,...e){if(Jr.logLevel<=Z.ERROR){const n=e.map(Ud);Jr.error(`Firestore (${ls}): ${t}`,...n)}}function Wl(t,...e){if(Jr.logLevel<=Z.WARN){const n=e.map(Ud);Jr.warn(`Firestore (${ls}): ${t}`,...n)}}function Ud(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${ls}) INTERNAL ASSERTION FAILED: `+t;throw Zr(e),new Error(e)}function Ae(t,e){t||ee()}function ue(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ye.UNAUTHENTICATED))}shutdown(){}}class iC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class sC{constructor(e){this.t=e,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ae(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new jr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new jr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new jr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ae(typeof r.accessToken=="string"),new R1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ae(e===null||typeof e=="string"),new Ye(e)}}class oC{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class aC{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new oC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class lC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ae(this.o===void 0);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ae(typeof n.token=="string"),this.R=n.token,new lC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=cC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function Qi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Me(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ye(e)}static min(){return new ye(new Me(0,0))}static max(){return new ye(new Me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ro.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ro?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ke extends Ro{construct(e,n,r){return new ke(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ke(n)}static emptyPath(){return new ke([])}}const hC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends Ro{construct(e,n,r){return new ze(e,n,r)}static isValidIdentifier(e){return hC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ze(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new G(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new G(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new G(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(n)}static emptyPath(){return new ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(ke.fromString(e))}static fromName(e){return new Y(ke.fromString(e).popFirst(5))}static empty(){return new Y(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new ke(e.slice()))}}function fC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ye.fromTimestamp(r===1e9?new Me(n+1,0):new Me(n,r));return new pr(i,Y.empty(),e)}function dC(t){return new pr(t.readTime,t.key,-1)}class pr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new pr(ye.min(),Y.empty(),-1)}static max(){return new pr(ye.max(),Y.empty(),-1)}}function pC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N1(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==mC)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new D((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof D?n:D.resolve(n)}catch(n){return D.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):D.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):D.reject(n)}static resolve(e){return new D((n,r)=>{n(e)})}static reject(e){return new D((n,r)=>{r(e)})}static waitFor(e){return new D((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=D.resolve(!1);for(const r of e)n=n.next(i=>i?D.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new D((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(d=>{o[h]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new D((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function yC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ku(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}O1.oe=-1;function jd(t){return t==null}function Kl(t){return t===0&&1/t==-1/0}function vC(t){return typeof t=="number"&&Number.isInteger(t)&&!Kl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Yo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function b1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n){this.comparator=e,this.root=n||Ue.EMPTY}insert(e,n){return new dt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new dt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ua(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ua(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ua(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ua(this.root,e,this.comparator,!0)}}class Ua{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ue.RED,this.left=i??Ue.EMPTY,this.right=s??Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ue(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ue.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ue(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.comparator=e,this.data=new dt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ay(this.data.getIterator())}getIteratorFrom(e){return new ay(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ze(this.comparator);return n.data=e,n}}class ay{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new Ft([])}unionWith(e){let n=new Ze(ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ft(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Qi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new _C("Invalid base64 string: "+s):s}}(e);return new nn(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new nn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nn.EMPTY_BYTE_STRING=new nn("");const EC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ei(t){if(Ae(!!t),typeof t=="string"){let e=0;const n=EC.exec(t);if(Ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function xo(t){return typeof t=="string"?nn.fromBase64String(t):nn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function D1(t){const e=t.mapValue.fields.__previous_value__;return zd(e)?D1(e):e}function Gl(t){const e=ei(t.mapValue.fields.__local_write_time__.timestampValue);return new Me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class ql{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ql("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ql&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Yi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zd(t)?4:IC(t)?9007199254740991:TC(t)?10:11:ee()}function rn(t,e){if(t===e)return!0;const n=Yi(t);if(n!==Yi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Gl(t).isEqual(Gl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ei(i.timestampValue),l=ei(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return xo(i.bytesValue).isEqual(xo(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return je(i.geoPointValue.latitude)===je(s.geoPointValue.latitude)&&je(i.geoPointValue.longitude)===je(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return je(i.integerValue)===je(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=je(i.doubleValue),l=je(s.doubleValue);return o===l?Kl(o)===Kl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Qi(t.arrayValue.values||[],e.arrayValue.values||[],rn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(oy(o)!==oy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!rn(o[u],l[u])))return!1;return!0}(t,e);default:return ee()}}function No(t,e){return(t.values||[]).find(n=>rn(n,e))!==void 0}function Xi(t,e){if(t===e)return 0;const n=Yi(t),r=Yi(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=je(s.integerValue||s.doubleValue),u=je(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return ly(t.timestampValue,e.timestampValue);case 4:return ly(Gl(t),Gl(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(s,o){const l=xo(s),u=xo(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const d=ae(l[h],u[h]);if(d!==0)return d}return ae(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ae(je(s.latitude),je(o.latitude));return l!==0?l:ae(je(s.longitude),je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return uy(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,d;const p=s.fields||{},y=o.fields||{},P=(l=p.value)===null||l===void 0?void 0:l.arrayValue,k=(u=y.value)===null||u===void 0?void 0:u.arrayValue,x=ae(((h=P==null?void 0:P.values)===null||h===void 0?void 0:h.length)||0,((d=k==null?void 0:k.values)===null||d===void 0?void 0:d.length)||0);return x!==0?x:uy(P,k)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ja.mapValue&&o===ja.mapValue)return 0;if(s===ja.mapValue)return 1;if(o===ja.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},d=Object.keys(h);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const y=ae(u[p],d[p]);if(y!==0)return y;const P=Xi(l[u[p]],h[d[p]]);if(P!==0)return P}return ae(u.length,d.length)}(t.mapValue,e.mapValue);default:throw ee()}}function ly(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=ei(t),r=ei(e),i=ae(n.seconds,r.seconds);return i!==0?i:ae(n.nanos,r.nanos)}function uy(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Xi(n[i],r[i]);if(s)return s}return ae(n.length,r.length)}function Ji(t){return rf(t)}function rf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ei(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return xo(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=rf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${rf(n.fields[o])}`;return i+"}"}(t.mapValue):ee()}function sf(t){return!!t&&"integerValue"in t}function Bd(t){return!!t&&"arrayValue"in t}function al(t){return!!t&&"mapValue"in t}function TC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function eo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Yo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=eo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=eo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function IC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.value=e}static empty(){return new Vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!al(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=eo(n)}setAll(e){let n=ze.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=eo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());al(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return rn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];al(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Yo(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Vt(eo(this.value))}}function L1(t){const e=[];return Yo(t.fields,(n,r)=>{const i=new ze([n]);if(al(r)){const s=L1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ft(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Mt(e,0,ye.min(),ye.min(),ye.min(),Vt.empty(),0)}static newFoundDocument(e,n,r,i){return new Mt(e,1,n,ye.min(),r,i,0)}static newNoDocument(e,n){return new Mt(e,2,n,ye.min(),ye.min(),Vt.empty(),0)}static newUnknownDocument(e,n){return new Mt(e,3,n,ye.min(),ye.min(),Vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ye.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ye.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,n){this.position=e,this.inclusive=n}}function cy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=Xi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function hy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!rn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n="asc"){this.field=e,this.dir=n}}function SC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{}class De extends M1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new PC(e,n,r):n==="array-contains"?new RC(e,r):n==="in"?new xC(e,r):n==="not-in"?new NC(e,r):n==="array-contains-any"?new OC(e,r):new De(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new kC(e,r):new CC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Xi(n,this.value)):n!==null&&Yi(this.value)===Yi(n)&&this.matchesComparison(Xi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class mr extends M1{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new mr(e,n)}matches(e){return V1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function V1(t){return t.op==="and"}function F1(t){return AC(t)&&V1(t)}function AC(t){for(const e of t.filters)if(e instanceof mr)return!1;return!0}function of(t){if(t instanceof De)return t.field.canonicalString()+t.op.toString()+Ji(t.value);if(F1(t))return t.filters.map(e=>of(e)).join(",");{const e=t.filters.map(n=>of(n)).join(",");return`${t.op}(${e})`}}function U1(t,e){return t instanceof De?function(r,i){return i instanceof De&&r.op===i.op&&r.field.isEqual(i.field)&&rn(r.value,i.value)}(t,e):t instanceof mr?function(r,i){return i instanceof mr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&U1(o,i.filters[l]),!0):!1}(t,e):void ee()}function j1(t){return t instanceof De?function(n){return`${n.field.canonicalString()} ${n.op} ${Ji(n.value)}`}(t):t instanceof mr?function(n){return n.op.toString()+" {"+n.getFilters().map(j1).join(" ,")+"}"}(t):"Filter"}class PC extends De{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class kC extends De{constructor(e,n){super(e,"in",n),this.keys=z1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class CC extends De{constructor(e,n){super(e,"not-in",n),this.keys=z1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function z1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class RC extends De{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Bd(n)&&No(n.arrayValue,this.value)}}class xC extends De{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&No(this.value.arrayValue,n)}}class NC extends De{constructor(e,n){super(e,"not-in",n)}matches(e){if(No(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!No(this.value.arrayValue,n)}}class OC extends De{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Bd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>No(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function fy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new bC(t,e,n,r,i,s,o)}function $d(t){const e=ue(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>of(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),jd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ji(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ji(r)).join(",")),e.ue=n}return e.ue}function Hd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!SC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!U1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!hy(t.startAt,e.startAt)&&hy(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function DC(t,e,n,r,i,s,o,l){return new Cu(t,e,n,r,i,s,o,l)}function LC(t){return new Cu(t)}function dy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function MC(t){return t.collectionGroup!==null}function to(t){const e=ue(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ze(ze.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Yl(s,r))}),n.has(ze.keyField().canonicalString())||e.ce.push(new Yl(ze.keyField(),r))}return e.ce}function zr(t){const e=ue(t);return e.le||(e.le=VC(e,to(t))),e.le}function VC(t,e){if(t.limitType==="F")return fy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Yl(i.field,s)});const n=t.endAt?new Ql(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ql(t.startAt.position,t.startAt.inclusive):null;return fy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function af(t,e,n){return new Cu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function B1(t,e){return Hd(zr(t),zr(e))&&t.limitType===e.limitType}function $1(t){return`${$d(zr(t))}|lt:${t.limitType}`}function Ds(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>j1(i)).join(", ")}]`),jd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ji(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ji(i)).join(",")),`Target(${r})`}(zr(t))}; limitType=${t.limitType})`}function Wd(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Y.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of to(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=cy(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,to(r),i)||r.endAt&&!function(o,l,u){const h=cy(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,to(r),i))}(t,e)}function FC(t){return(e,n)=>{let r=!1;for(const i of to(t)){const s=UC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function UC(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Xi(u,h):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Yo(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return b1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=new dt(Y.comparator);function Xl(){return jC}const H1=new dt(Y.comparator);function za(...t){let e=H1;for(const n of t)e=e.insert(n.key,n);return e}function W1(t){let e=H1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Vr(){return no()}function K1(){return no()}function no(){return new us(t=>t.toString(),(t,e)=>t.isEqual(e))}const zC=new dt(Y.comparator),BC=new Ze(Y.comparator);function Je(...t){let e=BC;for(const n of t)e=e.add(n);return e}const $C=new Ze(ae);function HC(){return $C}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Kl(e)?"-0":e}}function G1(t){return{integerValue:""+t}}function WC(t,e){return vC(e)?G1(e):Kd(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(){this._=void 0}}function KC(t,e,n){return t instanceof Jl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&zd(s)&&(s=D1(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Oo?Q1(t,e):t instanceof bo?Y1(t,e):function(i,s){const o=q1(i,s),l=py(o)+py(i.Pe);return sf(o)&&sf(i.Pe)?G1(l):Kd(i.serializer,l)}(t,e)}function GC(t,e,n){return t instanceof Oo?Q1(t,e):t instanceof bo?Y1(t,e):n}function q1(t,e){return t instanceof Zl?function(r){return sf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Jl extends Ru{}class Oo extends Ru{constructor(e){super(),this.elements=e}}function Q1(t,e){const n=X1(e);for(const r of t.elements)n.some(i=>rn(i,r))||n.push(r);return{arrayValue:{values:n}}}class bo extends Ru{constructor(e){super(),this.elements=e}}function Y1(t,e){let n=X1(e);for(const r of t.elements)n=n.filter(i=>!rn(i,r));return{arrayValue:{values:n}}}class Zl extends Ru{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function py(t){return je(t.integerValue||t.doubleValue)}function X1(t){return Bd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function qC(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Oo&&i instanceof Oo||r instanceof bo&&i instanceof bo?Qi(r.elements,i.elements,rn):r instanceof Zl&&i instanceof Zl?rn(r.Pe,i.Pe):r instanceof Jl&&i instanceof Jl}(t.transform,e.transform)}class QC{constructor(e,n){this.version=e,this.transformResults=n}}class Tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Tn}static exists(e){return new Tn(void 0,e)}static updateTime(e){return new Tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ll(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class xu{}function J1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new eE(t.key,Tn.none()):new Xo(t.key,t.data,Tn.none());{const n=t.data,r=Vt.empty();let i=new Ze(ze.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new li(t.key,r,new Ft(i.toArray()),Tn.none())}}function YC(t,e,n){t instanceof Xo?function(i,s,o){const l=i.value.clone(),u=gy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof li?function(i,s,o){if(!ll(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=gy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Z1(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ro(t,e,n,r){return t instanceof Xo?function(s,o,l,u){if(!ll(s.precondition,o))return l;const h=s.value.clone(),d=yy(s.fieldTransforms,u,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof li?function(s,o,l,u){if(!ll(s.precondition,o))return l;const h=yy(s.fieldTransforms,u,o),d=o.data;return d.setAll(Z1(s)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return ll(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function XC(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=q1(r.transform,i||null);s!=null&&(n===null&&(n=Vt.empty()),n.set(r.field,s))}return n||null}function my(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Qi(r,i,(s,o)=>qC(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Xo extends xu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class li extends xu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Z1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function gy(t,e,n){const r=new Map;Ae(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,GC(o,l,n[i]))}return r}function yy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,KC(s,o,e))}return r}class eE extends xu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class JC extends xu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&YC(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ro(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ro(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=K1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=J1(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ye.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Je())}isEqual(e){return this.batchId===e.batchId&&Qi(this.mutations,e.mutations,(n,r)=>my(n,r))&&Qi(this.baseMutations,e.baseMutations,(n,r)=>my(n,r))}}class Gd{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ae(e.mutations.length===r.length);let i=function(){return zC}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Gd(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe,te;function tR(t){switch(t){default:return ee();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function nR(t){if(t===void 0)return Zr("GRPC error has no .code"),V.UNKNOWN;switch(t){case Pe.OK:return V.OK;case Pe.CANCELLED:return V.CANCELLED;case Pe.UNKNOWN:return V.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return V.INTERNAL;case Pe.UNAVAILABLE:return V.UNAVAILABLE;case Pe.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Pe.NOT_FOUND:return V.NOT_FOUND;case Pe.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Pe.ABORTED:return V.ABORTED;case Pe.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Pe.DATA_LOSS:return V.DATA_LOSS;default:return ee()}}(te=Pe||(Pe={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new I1([4294967295,4294967295],0);class rR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function lf(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function iR(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function sR(t,e){return lf(t,e.toTimestamp())}function Ui(t){return Ae(!!t),ye.fromTimestamp(function(n){const r=ei(n);return new Me(r.seconds,r.nanos)}(t))}function tE(t,e){return uf(t,e).canonicalString()}function uf(t,e){const n=function(i){return new ke(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function oR(t){const e=ke.fromString(t);return Ae(pR(e)),e}function cf(t,e){return tE(t.databaseId,e.path)}function aR(t){const e=oR(t);return e.length===4?ke.emptyPath():uR(e)}function lR(t){return new ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function uR(t){return Ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function vy(t,e,n){return{name:cf(t,e),fields:n.value.mapValue.fields}}function cR(t,e){let n;if(e instanceof Xo)n={update:vy(t,e.key,e.value)};else if(e instanceof eE)n={delete:cf(t,e.key)};else if(e instanceof li)n={update:vy(t,e.key,e.data),updateMask:dR(e.fieldMask)};else{if(!(e instanceof JC))return ee();n={verify:cf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Jl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Oo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof bo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Zl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:sR(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ee()}(t,e.precondition)),n}function hR(t,e){return t&&t.length>0?(Ae(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Ui(i.updateTime):Ui(s);return o.isEqual(ye.min())&&(o=Ui(s)),new QC(o,i.transformResults||[])}(n,e))):[]}function fR(t){let e=aR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ae(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const y=nE(p);return y instanceof mr&&F1(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(y=>function(k){return new Yl(pi(k.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(p){let y;return y=typeof p=="object"?p.value:p,jd(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(p){const y=!!p.before,P=p.values||[];return new Ql(P,y)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const y=!p.before,P=p.values||[];return new Ql(P,y)}(n.endAt)),DC(e,i,o,s,l,"F",u,h)}function nE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=pi(n.unaryFilter.field);return De.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=pi(n.unaryFilter.field);return De.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=pi(n.unaryFilter.field);return De.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=pi(n.unaryFilter.field);return De.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(n){return De.create(pi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return mr.create(n.compositeFilter.filters.map(r=>nE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ee()}}(n.compositeFilter.op))}(t):ee()}function pi(t){return ze.fromServerFormat(t.fieldPath)}function dR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function pR(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e){this.ct=e}}function gR(t){const e=fR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?af(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(){this.un=new vR}addToCollectionParentIndex(e,n){return this.un.add(n),D.resolve()}getCollectionParents(e,n){return D.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return D.resolve()}deleteFieldIndex(e,n){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,n){return D.resolve()}getDocumentsMatchingTarget(e,n){return D.resolve(null)}getIndexType(e,n){return D.resolve(0)}getFieldIndexes(e,n){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,n){return D.resolve(pr.min())}getMinOffsetFromCollectionGroup(e,n){return D.resolve(pr.min())}updateCollectionGroup(e,n,r){return D.resolve()}updateIndexEntries(e,n){return D.resolve()}}class vR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ze(ke.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ze(ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Zi(0)}static kn(){return new Zi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(){this.changes=new us(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?D.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ro(r.mutation,i,Ft.empty(),Me.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Je()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Je()){const i=Vr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=za();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Vr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Je()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Xl();const o=no(),l=function(){return no()}();return n.forEach((u,h)=>{const d=r.get(h.key);i.has(h.key)&&(d===void 0||d.mutation instanceof li)?s=s.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),ro(d.mutation,h,d.mutation.getFieldMask(),Me.now())):o.set(h.key,Ft.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>{var p;return l.set(h,new ER(d,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=no();let i=new dt((o,l)=>o-l),s=Je();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let d=r.get(u)||Ft.empty();d=l.applyToLocalView(h,d),r.set(u,d);const p=(i.get(l.batchId)||Je()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,d=u.value,p=K1();d.forEach(y=>{if(!s.has(y)){const P=J1(n.get(y),r.get(y));P!==null&&p.set(y,P),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return D.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):MC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):D.resolve(Vr());let l=-1,u=s;return o.next(h=>D.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?D.resolve():this.remoteDocumentCache.getEntry(e,d).next(y=>{u=u.insert(d,y)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,Je())).next(d=>({batchId:l,changes:W1(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let i=za();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=za();return this.indexManager.getCollectionParents(e,s).next(l=>D.forEach(l,u=>{const h=function(p,y){return new Cu(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(d=>{d.forEach((p,y)=>{o=o.insert(p,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,Mt.newInvalidDocument(d)))});let l=za();return o.forEach((u,h)=>{const d=s.get(u);d!==void 0&&ro(d.mutation,h,Ft.empty(),Me.now()),Wd(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return D.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ui(i.createTime)}}(n)),D.resolve()}getNamedQuery(e,n){return D.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:gR(i.bundledQuery),readTime:Ui(i.readTime)}}(n)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(){this.overlays=new dt(Y.comparator),this.Ir=new Map}getOverlay(e,n){return D.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Vr();return D.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),D.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),D.resolve()}getOverlaysForCollection(e,n,r){const i=Vr(),s=n.length+1,o=new Y(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return D.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new dt((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=s.get(h.largestBatchId);d===null&&(d=Vr(),s=s.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=Vr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=i)););return D.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new eR(n,r));let s=this.Ir.get(n);s===void 0&&(s=Je(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(){this.sessionToken=nn.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,D.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(){this.Tr=new Ze(Oe.Er),this.dr=new Ze(Oe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Oe(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Oe(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Y(new ke([])),r=new Oe(n,e),i=new Oe(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Y(new ke([])),r=new Oe(n,e),i=new Oe(n,e+1);let s=Je();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Oe(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Oe{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Y.comparator(e.key,n.key)||ae(e.wr,n.wr)}static Ar(e,n){return ae(e.wr,n.wr)||Y.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ze(Oe.Er)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ZC(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Oe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,n){return D.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return D.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Oe(n,0),i=new Oe(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),D.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ze(ae);return n.forEach(i=>{const s=new Oe(i,0),o=new Oe(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),D.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Y.isDocumentKey(s)||(s=s.child(""));const o=new Oe(new Y(s),0);let l=new Ze(ae);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},o),D.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ae(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return D.forEach(n.mutations,i=>{const s=new Oe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Oe(n,0),i=this.br.firstAfterOrEqual(r);return D.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e){this.Mr=e,this.docs=function(){return new dt(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return D.resolve(r?r.document.mutableCopy():Mt.newInvalidDocument(n))}getEntries(e,n){let r=Xl();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Mt.newInvalidDocument(i))}),D.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Xl();const o=n.path,l=new Y(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:d}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||pC(dC(d),r)<=0||(i.has(d.key)||Wd(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return D.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ee()}Or(e,n){return D.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new kR(this)}getSize(e){return D.resolve(this.size)}}class kR extends _R{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),D.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e){this.persistence=e,this.Nr=new us(n=>$d(n),Hd),this.lastRemoteSnapshotVersion=ye.min(),this.highestTargetId=0,this.Lr=0,this.Br=new qd,this.targetCount=0,this.kr=Zi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),D.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Zi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,D.resolve()}updateTargetData(e,n){return this.Kn(n),D.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),D.waitFor(s).next(()=>i)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return D.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),D.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),D.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),D.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return D.resolve(r)}containsKey(e,n){return D.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e,n){this.qr={},this.overlays={},this.Qr=new O1(0),this.Kr=!1,this.Kr=!0,this.$r=new SR,this.referenceDelegate=e(this),this.Ur=new CR(this),this.indexManager=new yR,this.remoteDocumentCache=function(i){return new PR(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new mR(n),this.Gr=new TR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new IR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new AR(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new xR(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return D.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class xR extends gC{constructor(e){super(),this.currentSequenceNumber=e}}class Qd{constructor(e){this.persistence=e,this.Jr=new qd,this.Yr=null}static Zr(e){return new Qd(e)}get Xr(){if(this.Yr)return this.Yr;throw ee()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),D.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),D.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Xr,r=>{const i=Y.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,ye.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return D.or([()=>D.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=Je(),i=Je();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Yd(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return kA()?8:yC(tt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new NR;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(bs()<=Z.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Ds(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),D.resolve()):(bs()<=Z.DEBUG&&W("QueryEngine","Query:",Ds(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(bs()<=Z.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Ds(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,zr(n))):D.resolve())}Yi(e,n){if(dy(n))return D.resolve(null);let r=zr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=af(n,null,"F"),r=zr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Je(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,af(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return dy(n)||i.isEqual(ye.min())?D.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?D.resolve(null):(bs()<=Z.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ds(n)),this.rs(e,o,n,fC(i,-1)).next(l=>l))})}ts(e,n){let r=new Ze(FC(e));return n.forEach((i,s)=>{Wd(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return bs()<=Z.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Ds(n)),this.Ji.getDocumentsMatchingQuery(e,n,pr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new dt(ae),this._s=new us(s=>$d(s),Hd),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wR(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function DR(t,e,n,r){return new bR(t,e,n,r)}async function rE(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=Je();for(const h of i){o.push(h.batchId);for(const d of h.mutations)u=u.add(d.key)}for(const h of s){l.push(h.batchId);for(const d of h.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function LR(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,d){const p=h.batch,y=p.keys();let P=D.resolve();return y.forEach(k=>{P=P.next(()=>d.getEntry(u,k)).next(x=>{const N=h.docVersions.get(k);Ae(N!==null),x.version.compareTo(N)<0&&(p.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),d.addEntry(x)))})}),P.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Je();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function MR(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function VR(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class _y{constructor(){this.activeTargetIds=HC()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class FR{constructor(){this.so=new _y,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new _y,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ba=null;function Bc(){return Ba===null?Ba=function(){return 268435456+Math.round(2147483648*Math.random())}():Ba++,"0x"+Ba.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="WebChannelConnection";class BR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Bc(),u=this.xo(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,u,h,i).then(d=>(W("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw Wl("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ls}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=jR[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Bc();return new Promise((o,l)=>{const u=new S1;u.setWithCredentials(!0),u.listenOnce(A1.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ol.NO_ERROR:const d=u.getResponseJson();W(Qe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case ol.TIMEOUT:W(Qe,`RPC '${e}' ${s} timed out`),l(new G(V.DEADLINE_EXCEEDED,"Request time out"));break;case ol.HTTP_ERROR:const p=u.getStatus();if(W(Qe,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const P=y==null?void 0:y.error;if(P&&P.status&&P.message){const k=function(N){const _=N.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(_)>=0?_:V.UNKNOWN}(P.status);l(new G(k,P.message))}else l(new G(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new G(V.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{W(Qe,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);W(Qe,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=Bc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=C1(),l=k1(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");W(Qe,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);let y=!1,P=!1;const k=new zR({Io:N=>{P?W(Qe,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(y||(W(Qe,`Opening RPC '${e}' stream ${i} transport.`),p.open(),y=!0),W(Qe,`RPC '${e}' stream ${i} sending:`,N),p.send(N))},To:()=>p.close()}),x=(N,_,v)=>{N.listen(_,T=>{try{v(T)}catch(b){setTimeout(()=>{throw b},0)}})};return x(p,zs.EventType.OPEN,()=>{P||(W(Qe,`RPC '${e}' stream ${i} transport opened.`),k.yo())}),x(p,zs.EventType.CLOSE,()=>{P||(P=!0,W(Qe,`RPC '${e}' stream ${i} transport closed`),k.So())}),x(p,zs.EventType.ERROR,N=>{P||(P=!0,Wl(Qe,`RPC '${e}' stream ${i} transport errored:`,N),k.So(new G(V.UNAVAILABLE,"The operation could not be completed")))}),x(p,zs.EventType.MESSAGE,N=>{var _;if(!P){const v=N.data[0];Ae(!!v);const T=v,b=T.error||((_=T[0])===null||_===void 0?void 0:_.error);if(b){W(Qe,`RPC '${e}' stream ${i} received error:`,b);const L=b.status;let U=function(E){const I=Pe[E];if(I!==void 0)return nR(I)}(L),w=b.message;U===void 0&&(U=V.INTERNAL,w="Unknown error status: "+L+" with message "+b.message),P=!0,k.So(new G(U,w)),p.close()}else W(Qe,`RPC '${e}' stream ${i} received:`,v),k.bo(v)}}),x(l,P1.STAT_EVENT,N=>{N.stat===nf.PROXY?W(Qe,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===nf.NOPROXY&&W(Qe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}function $c(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(t){return new rR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new iE(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Zr(n.toString()),Zr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new G(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class HR extends $R{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ae(!!e.streamToken),this.lastStreamToken=e.streamToken,Ae(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=hR(e.writeResults,e.commitTime),r=Ui(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=lR(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>cR(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new G(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,uf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(V.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,uf(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class KR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Zr(n),this.D_=!1):W("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Zo(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=ue(u);h.L_.add(4),await Jo(h),h.q_.set("Unknown"),h.L_.delete(4),await Ou(h)}(this))})}),this.q_=new KR(r,i)}}async function Ou(t){if(Zo(t))for(const e of t.B_)await e(!0)}async function Jo(t){for(const e of t.B_)await e(!1)}function Zo(t){return ue(t).L_.size===0}async function sE(t,e,n){if(!ku(e))throw e;t.L_.add(1),await Jo(t),t.q_.set("Offline"),n||(n=()=>MR(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ou(t)})}function oE(t,e){return e().catch(n=>sE(t,n,e))}async function bu(t){const e=ue(t),n=gr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;qR(e);)try{const i=await VR(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,QR(e,i)}catch(i){await sE(e,i)}aE(e)&&lE(e)}function qR(t){return Zo(t)&&t.O_.length<10}function QR(t,e){t.O_.push(e);const n=gr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function aE(t){return Zo(t)&&!gr(t).n_()&&t.O_.length>0}function lE(t){gr(t).start()}async function YR(t){gr(t).p_()}async function XR(t){const e=gr(t);for(const n of t.O_)e.m_(n.mutations)}async function JR(t,e,n){const r=t.O_.shift(),i=Gd.from(r,e,n);await oE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await bu(t)}async function ZR(t,e){e&&gr(t).V_&&await async function(r,i){if(function(o){return tR(o)&&o!==V.ABORTED}(i.code)){const s=r.O_.shift();gr(r).s_(),await oE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await bu(r)}}(t,e),aE(t)&&lE(t)}async function wy(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=Zo(n);n.L_.add(3),await Jo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ou(n)}async function ex(t,e){const n=ue(t);e?(n.L_.delete(2),await Ou(n)):e||(n.L_.add(2),await Jo(n),n.q_.set("Unknown"))}function gr(t){return t.U_||(t.U_=function(n,r,i){const s=ue(n);return s.w_(),new HR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:YR.bind(null,t),mo:ZR.bind(null,t),f_:XR.bind(null,t),g_:JR.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await bu(t)):(await t.U_.stop(),t.O_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new jr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Xd(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function uE(t,e){if(Zr("AsyncQueue",`${e}: ${t}`),ku(t))return new G(V.UNAVAILABLE,`${e}: ${t}`);throw t}class tx{constructor(){this.queries=Ty(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ue(n),s=i.queries;i.queries=Ty(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new G(V.ABORTED,"Firestore shutting down"))}}function Ty(){return new us(t=>$1(t),B1)}function nx(t){t.Y_.forEach(e=>{e.next()})}var Iy,Sy;(Sy=Iy||(Iy={})).ea="default",Sy.Cache="cache";class rx{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new us(l=>$1(l),B1),this.Ma=new Map,this.xa=new Set,this.Oa=new dt(Y.comparator),this.Na=new Map,this.La=new qd,this.Ba={},this.ka=new Map,this.qa=Zi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function ix(t,e,n){const r=lx(t);try{const i=await function(o,l){const u=ue(o),h=Me.now(),d=l.reduce((P,k)=>P.add(k.key),Je());let p,y;return u.persistence.runTransaction("Locally write mutations","readwrite",P=>{let k=Xl(),x=Je();return u.cs.getEntries(P,d).next(N=>{k=N,k.forEach((_,v)=>{v.isValidDocument()||(x=x.add(_))})}).next(()=>u.localDocuments.getOverlayedDocuments(P,k)).next(N=>{p=N;const _=[];for(const v of l){const T=XC(v,p.get(v.key).overlayedDocument);T!=null&&_.push(new li(v.key,T,L1(T.value.mapValue),Tn.exists(!0)))}return u.mutationQueue.addMutationBatch(P,h,_,l)}).next(N=>{y=N;const _=N.applyToLocalDocumentSet(p,x);return u.documentOverlayCache.saveOverlays(P,N.batchId,_)})}).then(()=>({batchId:y.batchId,changes:W1(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new dt(ae)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,n),await Du(r,i.changes),await bu(r.remoteStore)}catch(i){const s=uE(i,"Failed to persist write");n.reject(s)}}function Ay(t,e,n){const r=ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ue(o);u.onlineState=l;let h=!1;u.queries.forEach((d,p)=>{for(const y of p.j_)y.Z_(l)&&(h=!0)}),h&&nx(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function sx(t,e){const n=ue(t),r=e.batch.batchId;try{const i=await LR(n.localStore,e);hE(n,r,null),cE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Du(n,i)}catch(i){await N1(i)}}async function ox(t,e,n){const r=ue(t);try{const i=await function(o,l){const u=ue(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(Ae(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>u.localDocuments.getDocuments(h,d))})}(r.localStore,e);hE(r,e,n),cE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Du(r,i)}catch(i){await N1(i)}}function cE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function hE(t,e,n){const r=ue(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}async function Du(t,e,n){const r=ue(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=void 0)===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){i.push(h);const p=Yd.Wi(u.targetId,h);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){const d=ue(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>D.forEach(h,y=>D.forEach(y.$i,P=>d.persistence.referenceDelegate.addReference(p,y.targetId,P)).next(()=>D.forEach(y.Ui,P=>d.persistence.referenceDelegate.removeReference(p,y.targetId,P)))))}catch(p){if(!ku(p))throw p;W("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const y=p.targetId;if(!p.fromCache){const P=d.os.get(y),k=P.snapshotVersion,x=P.withLastLimboFreeSnapshotVersion(k);d.os=d.os.insert(y,x)}}}(r.localStore,s))}async function ax(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await rE(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new G(V.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Du(n,r.hs)}}function lx(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ox.bind(null,e),e}class eu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Nu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return DR(this.persistence,new OR,e.initialUser,this.serializer)}Ga(e){return new RR(Qd.Zr,this.serializer)}Wa(e){return new FR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}eu.provider={build:()=>new eu};class hf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ay(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ax.bind(null,this.syncEngine),await ex(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new tx}()}createDatastore(e){const n=Nu(e.databaseInfo.databaseId),r=function(s){return new BR(s)}(e.databaseInfo);return function(s,o,l,u){return new WR(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new GR(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Ay(this.syncEngine,n,0),function(){return Ey.D()?new Ey:new UR}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,d){const p=new rx(i,s,o,l,u,h);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ue(i);W("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Jo(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}hf.provider={build:()=>new hf};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ye.UNAUTHENTICATED,this.clientId=x1.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{W("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new jr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=uE(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Hc(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await rE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Py(t,e){t.asyncQueue.verifyOperationInProgress();const n=await cx(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>wy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>wy(e.remoteStore,i)),t._onlineComponents=e}async function cx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await Hc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Wl("Error using user provided cache. Falling back to memory cache: "+n),await Hc(t,new eu)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await Hc(t,new eu);return t._offlineComponents}async function hx(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await Py(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await Py(t,new hf))),t._onlineComponents}function fx(t){return hx(t).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dx(t,e,n){if(!n)throw new G(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function px(t,e,n,r){if(e===!0&&r===!0)throw new G(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Cy(t){if(!Y.isDocumentKey(t))throw new G(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Jd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function ff(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Jd(t);throw new G(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}px("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new G(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new G(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new G(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ry({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ry(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new rC;switch(r.type){case"firstParty":return new aC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ky.get(n);r&&(W("ComponentProvider","Removing Datastore"),ky.delete(n),r.terminate())}(this),Promise.resolve()}}function mx(t,e,n,r={}){var i;const s=(t=ff(t,Zd))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Wl("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Ye.MOCK_USER;else{l=EA(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new G(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ye(h)}t._authCredentials=new iC(new R1(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ep(this.firestore,e,this._query)}}class In{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Do(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new In(this.firestore,e,this._key)}}class Do extends ep{constructor(e,n,r){super(e,n,LC(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new In(this.firestore,null,new Y(e))}withConverter(e){return new Do(this.firestore,e,this._path)}}function gx(t,e,...n){if(t=Bt(t),arguments.length===1&&(e=x1.newId()),dx("doc","path",e),t instanceof Zd){const r=ke.fromString(e,...n);return Cy(r),new In(t,null,new Y(r))}{if(!(t instanceof In||t instanceof Do))throw new G(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return Cy(r),new In(t.firestore,t instanceof Do?t.converter:null,new Y(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new iE(this,"async_queue_retry"),this.Vu=()=>{const r=$c();r&&W("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=$c();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=$c();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new jr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ku(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Zr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Xd.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&ee()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class dE extends Zd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new xy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new xy(e),this._firestoreClient=void 0,await e}}}function yx(t,e){const n=typeof t=="object"?t:j_(),r=typeof t=="string"?t:"(default)",i=Rd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=vA("firestore");s&&mx(i,...s)}return i}function vx(t){if(t._terminated)throw new G(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||_x(t),t._firestoreClient}function _x(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,d){return new wC(l,u,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,fE(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new ux(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Lo(nn.fromBase64String(e))}catch(n){throw new G(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Lo(nn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ex=/^__.*__$/;class wx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new li(e,this.data,this.fieldMask,n,this.fieldTransforms):new Xo(e,this.data,n,this.fieldTransforms)}}function vE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class tp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new tp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return tu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(vE(this.Cu)&&Ex.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Tx{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Nu(e)}Qu(e,n,r,i=!1){return new tp({Cu:e,methodName:n,qu:r,path:ze.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ix(t){const e=t._freezeSettings(),n=Nu(t._databaseId);return new Tx(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Sx(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);TE("Data must be an object, but it was:",o,r);const l=EE(r,o);let u,h;if(s.merge)u=new Ft(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const y=Ax(e,p,n);if(!o.contains(y))throw new G(V.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);Cx(d,y)||d.push(y)}u=new Ft(d),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new wx(new Vt(l),u,h)}function _E(t,e){if(wE(t=Bt(t)))return TE("Unsupported field value:",e,t),EE(t,e);if(t instanceof mE)return function(r,i){if(!vE(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=_E(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Bt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return WC(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Me.fromDate(r);return{timestampValue:lf(i.serializer,s)}}if(r instanceof Me){const s=new Me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:lf(i.serializer,s)}}if(r instanceof gE)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Lo)return{bytesValue:iR(i.serializer,r._byteString)};if(r instanceof In){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:tE(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof yE)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Kd(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Jd(r)}`)}(t,e)}function EE(t,e){const n={};return b1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yo(t,(r,i)=>{const s=_E(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function wE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Me||t instanceof gE||t instanceof Lo||t instanceof In||t instanceof mE||t instanceof yE)}function TE(t,e,n){if(!wE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Jd(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Ax(t,e,n){if((e=Bt(e))instanceof pE)return e._internalPath;if(typeof e=="string")return kx(t,e);throw tu("Field path arguments must be of type string or ",t,!1,void 0,n)}const Px=new RegExp("[~\\*/\\[\\]]");function kx(t,e,n){if(e.search(Px)>=0)throw tu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new pE(...e.split("."))._internalPath}catch{throw tu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function tu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new G(V.INVALID_ARGUMENT,l+t+u)}function Cx(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rx(t,e,n){let r;return r=t?t.toFirestore(e):e,r}function xx(t,e,n){t=ff(t,In);const r=ff(t.firestore,dE),i=Rx(t.converter,e);return Nx(r,[Sx(Ix(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Tn.none())])}function Nx(t,e){return function(r,i){const s=new jr;return r.asyncQueue.enqueueAndForget(async()=>ix(await fx(r),i,s)),s.promise}(vx(t),e)}(function(e,n=!0){(function(i){ls=i})(os),qi(new Qr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new dE(new sC(r.getProvider("auth-internal")),new uC(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new G(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ql(h.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),hr(sy,"4.7.3",e),hr(sy,"4.7.3","esm2017")})();const Ox={apiKey:"AIzaSyA9wYfjjjjp6w8QhslmOu72idKolgsXXCo",authDomain:"proyectointeg-e37de.firebaseapp.com",projectId:"proyectointeg-e37de",storageBucket:"proyectointeg-e37de.appspot.com",messagingSenderId:"1073149596999",appId:"1:1073149596999:web:1c3753054380b74332a862",measurementId:"G-8QZ7R79ZLR"},IE=U_(Ox),Ny=tC(IE),bx=yx(IE);function Dx(){const[t,e]=B.useState(""),[n,r]=B.useState(""),[i,s]=B.useState(""),[o,l]=B.useState(!1),[u,h]=B.useState(""),[d,p]=B.useState(""),y=k_(),P=(_,v)=>{v(_.target.value),p(""),h("")},k=_=>{if(_.preventDefault(),!t||!n){p("Por favor, completa todos los campos.");return}BP(Ny,t,n).then(v=>{console.log("Usuario logueado:",v.user),p(""),y("/home")}).catch(v=>{N(v.code)})},x=async _=>{if(_.preventDefault(),!t||!n||!i){p("Por favor, completa todos los campos.");return}if(n.length<6){p("La contraseña debe tener al menos 6 caracteres.");return}try{const T=(await zP(Ny,t,n)).user;console.log("Usuario registrado:",T),await xx(gx(bx,"users",T.uid),{name:i,email:t}),p(""),y("/home")}catch(v){N(v.code)}},N=_=>{switch(_){case"auth/email-already-in-use":h("El correo ya está en uso. Por favor, usa otro o inicia sesión.");break;case"auth/invalid-email":h("El formato del correo es inválido.");break;case"auth/wrong-password":h("La contraseña es incorrecta.");break;case"auth/user-not-found":h("No se encontró una cuenta con este correo.");break;default:h("Error inesperado. Inténtalo de nuevo.")}};return j.jsxs("div",{className:"login-container",children:[j.jsxs("div",{className:"login-form",children:[j.jsx("h2",{children:o?"Registro de Usuario":"Inicio de Sesión"}),d&&j.jsx("div",{className:"alert",children:d}),u&&j.jsx("p",{className:"error",children:u}),j.jsxs("form",{onSubmit:o?x:k,children:[o&&j.jsxs("div",{className:"input-group",children:[j.jsx("label",{children:"Nombre Completo"}),j.jsx("input",{type:"text",value:i,onChange:_=>P(_,s),placeholder:"Nombre Completo",required:!0})]}),j.jsxs("div",{className:"input-group",children:[j.jsx("label",{children:"Correo Electrónico"}),j.jsx("input",{type:"email",value:t,onChange:_=>P(_,e),placeholder:"Correo Electrónico",required:!0})]}),j.jsxs("div",{className:"input-group",children:[j.jsx("label",{children:"Contraseña"}),j.jsx("input",{type:"password",value:n,onChange:_=>P(_,r),placeholder:"Contraseña",required:!0})]}),j.jsx("button",{type:"submit",className:"login-button",children:o?"Registrarse":"Login"})]}),j.jsxs("div",{className:"toggle-form",children:[j.jsx("p",{children:o?"¿Ya tienes cuenta?":"¿No tienes cuenta?"}),j.jsx("button",{onClick:()=>l(!o),children:o?"Inicia sesión":"Regístrate"})]})]}),j.jsx("div",{className:"login-image",children:j.jsx("img",{src:cA,alt:"Logo"})})]})}const Oy=()=>{};let np={},SE={},AE=null,PE={mark:Oy,measure:Oy};try{typeof window<"u"&&(np=window),typeof document<"u"&&(SE=document),typeof MutationObserver<"u"&&(AE=MutationObserver),typeof performance<"u"&&(PE=performance)}catch{}const{userAgent:by=""}=np.navigator||{},yr=np,de=SE,Dy=AE,$a=PE;yr.document;const Dn=!!de.documentElement&&!!de.head&&typeof de.addEventListener=="function"&&typeof de.createElement=="function",kE=~by.indexOf("MSIE")||~by.indexOf("Trident/");var me="classic",CE="duotone",vt="sharp",_t="sharp-duotone",Lx=[me,CE,vt,_t],Mx={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Ly={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Vx=["kit"],Fx=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Ux=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,jx={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},zx={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Bx={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},$x={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Hx={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Wx={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},RE={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Kx=["solid","regular","light","thin","duotone","brands"],xE=[1,2,3,4,5,6,7,8,9,10],Gx=xE.concat([11,12,13,14,15,16,17,18,19,20]),Bs={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},qx=[...Object.keys($x),...Kx,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Bs.GROUP,Bs.SWAP_OPACITY,Bs.PRIMARY,Bs.SECONDARY].concat(xE.map(t=>"".concat(t,"x"))).concat(Gx.map(t=>"w-".concat(t))),Qx={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Yx={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Xx={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},My={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const xn="___FONT_AWESOME___",df=16,NE="fa",OE="svg-inline--fa",ti="data-fa-i2svg",pf="data-fa-pseudo-element",Jx="data-fa-pseudo-element-pending",rp="data-prefix",ip="data-icon",Vy="fontawesome-i2svg",Zx="async",eN=["HTML","HEAD","STYLE","SCRIPT"],bE=(()=>{try{return!0}catch{return!1}})(),DE=[me,vt,_t];function ea(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[me]}})}const LE={...RE};LE[me]={...RE[me],...Ly.kit,...Ly["kit-duotone"]};const Br=ea(LE),mf={...Wx};mf[me]={...mf[me],...My.kit,...My["kit-duotone"]};const Mo=ea(mf),gf={...Hx};gf[me]={...gf[me],...Xx.kit};const $r=ea(gf),yf={...Bx};yf[me]={...yf[me],...Yx.kit};const tN=ea(yf),nN=Fx,ME="fa-layers-text",rN=Ux,iN={...Mx};ea(iN);const sN=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Wc=Bs,es=new Set;Object.keys(Mo[me]).map(es.add.bind(es));Object.keys(Mo[vt]).map(es.add.bind(es));Object.keys(Mo[_t]).map(es.add.bind(es));const oN=[...Vx,...qx],io=yr.FontAwesomeConfig||{};function aN(t){var e=de.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function lN(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}de&&typeof de.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const i=lN(aN(n));i!=null&&(io[r]=i)});const VE={styleDefault:"solid",familyDefault:"classic",cssPrefix:NE,replacementClass:OE,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};io.familyPrefix&&(io.cssPrefix=io.familyPrefix);const ts={...VE,...io};ts.autoReplaceSvg||(ts.observeMutations=!1);const H={};Object.keys(VE).forEach(t=>{Object.defineProperty(H,t,{enumerable:!0,set:function(e){ts[t]=e,so.forEach(n=>n(H))},get:function(){return ts[t]}})});Object.defineProperty(H,"familyPrefix",{enumerable:!0,set:function(t){ts.cssPrefix=t,so.forEach(e=>e(H))},get:function(){return ts.cssPrefix}});yr.FontAwesomeConfig=H;const so=[];function uN(t){return so.push(t),()=>{so.splice(so.indexOf(t),1)}}const zn=df,Yt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function cN(t){if(!t||!Dn)return;const e=de.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=de.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return de.head.insertBefore(e,r),t}const hN="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Vo(){let t=12,e="";for(;t-- >0;)e+=hN[Math.random()*62|0];return e}function cs(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function sp(t){return t.classList?cs(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function FE(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function fN(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(FE(t[n]),'" '),"").trim()}function Lu(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function op(t){return t.size!==Yt.size||t.x!==Yt.x||t.y!==Yt.y||t.rotate!==Yt.rotate||t.flipX||t.flipY}function dN(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(s," ").concat(o," ").concat(l)},h={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:h}}function pN(t){let{transform:e,width:n=df,height:r=df,startCentered:i=!1}=t,s="";return i&&kE?s+="translate(".concat(e.x/zn-n/2,"em, ").concat(e.y/zn-r/2,"em) "):i?s+="translate(calc(-50% + ".concat(e.x/zn,"em), calc(-50% + ").concat(e.y/zn,"em)) "):s+="translate(".concat(e.x/zn,"em, ").concat(e.y/zn,"em) "),s+="scale(".concat(e.size/zn*(e.flipX?-1:1),", ").concat(e.size/zn*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var mN=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function UE(){const t=NE,e=OE,n=H.cssPrefix,r=H.replacementClass;let i=mN;if(n!==t||r!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return i}let Fy=!1;function Kc(){H.autoAddCss&&!Fy&&(cN(UE()),Fy=!0)}var gN={mixout(){return{dom:{css:UE,insertCss:Kc}}},hooks(){return{beforeDOMElementCreation(){Kc()},beforeI2svg(){Kc()}}}};const Nn=yr||{};Nn[xn]||(Nn[xn]={});Nn[xn].styles||(Nn[xn].styles={});Nn[xn].hooks||(Nn[xn].hooks={});Nn[xn].shims||(Nn[xn].shims=[]);var Xt=Nn[xn];const jE=[],zE=function(){de.removeEventListener("DOMContentLoaded",zE),nu=1,jE.map(t=>t())};let nu=!1;Dn&&(nu=(de.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(de.readyState),nu||de.addEventListener("DOMContentLoaded",zE));function yN(t){Dn&&(nu?setTimeout(t,0):jE.push(t))}function ta(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?FE(t):"<".concat(e," ").concat(fN(n),">").concat(r.map(ta).join(""),"</").concat(e,">")}function Uy(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Gc=function(e,n,r,i){var s=Object.keys(e),o=s.length,l=n,u,h,d;for(r===void 0?(u=1,d=e[s[0]]):(u=0,d=r);u<o;u++)h=s[u],d=l(d,e[h],h,e);return d};function vN(t){const e=[];let n=0;const r=t.length;for(;n<r;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function vf(t){const e=vN(t);return e.length===1?e[0].toString(16):null}function _N(t,e){const n=t.length;let r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function jy(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function _f(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=jy(e);typeof Xt.hooks.addPack=="function"&&!r?Xt.hooks.addPack(t,jy(e)):Xt.styles[t]={...Xt.styles[t]||{},...i},t==="fas"&&_f("fa",e)}const{styles:br,shims:EN}=Xt,wN={[me]:Object.values($r[me]),[vt]:Object.values($r[vt]),[_t]:Object.values($r[_t])};let ap=null,BE={},$E={},HE={},WE={},KE={};const TN={[me]:Object.keys(Br[me]),[vt]:Object.keys(Br[vt]),[_t]:Object.keys(Br[_t])};function IN(t){return~oN.indexOf(t)}function SN(t,e){const n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!IN(i)?i:null}const GE=()=>{const t=r=>Gc(br,(i,s,o)=>(i[o]=Gc(s,r,{}),i),{});BE=t((r,i,s)=>(i[3]&&(r[i[3]]=s),i[2]&&i[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=s}),r)),$E=t((r,i,s)=>(r[s]=s,i[2]&&i[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=s}),r)),KE=t((r,i,s)=>{const o=i[2];return r[s]=s,o.forEach(l=>{r[l]=s}),r});const e="far"in br||H.autoFetchSvg,n=Gc(EN,(r,i)=>{const s=i[0];let o=i[1];const l=i[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});HE=n.names,WE=n.unicodes,ap=Mu(H.styleDefault,{family:H.familyDefault})};uN(t=>{ap=Mu(t.styleDefault,{family:H.familyDefault})});GE();function lp(t,e){return(BE[t]||{})[e]}function AN(t,e){return($E[t]||{})[e]}function Zn(t,e){return(KE[t]||{})[e]}function qE(t){return HE[t]||{prefix:null,iconName:null}}function PN(t){const e=WE[t],n=lp("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function vr(){return ap}const up=()=>({prefix:null,iconName:null,rest:[]});function Mu(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=me}=e,r=Br[n][t],i=Mo[n][t]||Mo[n][r],s=t in Xt.styles?t:null;return i||s||null}const kN={[me]:Object.keys($r[me]),[vt]:Object.keys($r[vt]),[_t]:Object.keys($r[_t])};function Vu(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[me]:"".concat(H.cssPrefix,"-").concat(me),[vt]:"".concat(H.cssPrefix,"-").concat(vt),[_t]:"".concat(H.cssPrefix,"-").concat(_t)};let i=null,s=me;const o=Lx.filter(u=>u!==CE);o.forEach(u=>{(t.includes(r[u])||t.some(h=>kN[u].includes(h)))&&(s=u)});const l=t.reduce((u,h)=>{const d=SN(H.cssPrefix,h);if(br[h]?(h=wN[s].includes(h)?tN[s][h]:h,i=h,u.prefix=h):TN[s].indexOf(h)>-1?(i=h,u.prefix=Mu(h,{family:s})):d?u.iconName=d:h!==H.replacementClass&&!o.some(p=>h===r[p])&&u.rest.push(h),!n&&u.prefix&&u.iconName){const p=i==="fa"?qE(u.iconName):{},y=Zn(u.prefix,u.iconName);p.prefix&&(i=null),u.iconName=p.iconName||y||u.iconName,u.prefix=p.prefix||u.prefix,u.prefix==="far"&&!br.far&&br.fas&&!H.autoFetchSvg&&(u.prefix="fas")}return u},up());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===vt&&(br.fass||H.autoFetchSvg)&&(l.prefix="fass",l.iconName=Zn(l.prefix,l.iconName)||l.iconName),!l.prefix&&s===_t&&(br.fasds||H.autoFetchSvg)&&(l.prefix="fasds",l.iconName=Zn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=vr()||"fas"),l}class CN{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...i[s]},_f(s,i[s]);const o=$r[me][s];o&&_f(o,i[s]),GE()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:s,iconName:o,icon:l}=r[i],u=l[2];e[s]||(e[s]={}),u.length>0&&u.forEach(h=>{typeof h=="string"&&(e[s][h]=l)}),e[s][o]=l}),e}}let zy=[],Ci={};const ji={},RN=Object.keys(ji);function xN(t,e){let{mixoutsTo:n}=e;return zy=t,Ci={},Object.keys(ji).forEach(r=>{RN.indexOf(r)===-1&&delete ji[r]}),zy.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(s=>{typeof i[s]=="function"&&(n[s]=i[s]),typeof i[s]=="object"&&Object.keys(i[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{Ci[o]||(Ci[o]=[]),Ci[o].push(s[o])})}r.provides&&r.provides(ji)}),n}function Ef(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(Ci[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function ni(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(Ci[t]||[]).forEach(s=>{s.apply(null,n)})}function _r(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ji[t]?ji[t].apply(null,e):void 0}function wf(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||vr();if(e)return e=Zn(n,e)||e,Uy(QE.definitions,n,e)||Uy(Xt.styles,n,e)}const QE=new CN,NN=()=>{H.autoReplaceSvg=!1,H.observeMutations=!1,ni("noAuto")},ON={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Dn?(ni("beforeI2svg",t),_r("pseudoElements2svg",t),_r("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;H.autoReplaceSvg===!1&&(H.autoReplaceSvg=!0),H.observeMutations=!0,yN(()=>{DN({autoReplaceSvgRoot:e}),ni("watch",t)})}},bN={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Zn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Mu(t[0]);return{prefix:n,iconName:Zn(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(H.cssPrefix,"-"))>-1||t.match(nN))){const e=Vu(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||vr(),iconName:Zn(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=vr();return{prefix:e,iconName:Zn(e,t)||t}}}},It={noAuto:NN,config:H,dom:ON,parse:bN,library:QE,findIconDefinition:wf,toHtml:ta},DN=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=de}=t;(Object.keys(Xt.styles).length>0||H.autoFetchSvg)&&Dn&&H.autoReplaceSvg&&It.dom.i2svg({node:e})};function Fu(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>ta(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Dn)return;const n=de.createElement("div");return n.innerHTML=t.html,n.children}}),t}function LN(t){let{children:e,main:n,mask:r,attributes:i,styles:s,transform:o}=t;if(op(o)&&n.found&&!r.found){const{width:l,height:u}=n,h={x:l/u/2,y:.5};i.style=Lu({...s,"transform-origin":"".concat(h.x+o.x/16,"em ").concat(h.y+o.y/16,"em")})}return[{tag:"svg",attributes:i,children:e}]}function MN(t){let{prefix:e,iconName:n,children:r,attributes:i,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(H.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:o},children:r}]}]}function cp(t){const{icons:{main:e,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:l,maskId:u,titleId:h,extra:d,watchable:p=!1}=t,{width:y,height:P}=n.found?n:e,k=r==="fak",x=[H.replacementClass,i?"".concat(H.cssPrefix,"-").concat(i):""].filter(L=>d.classes.indexOf(L)===-1).filter(L=>L!==""||!!L).concat(d.classes).join(" ");let N={children:[],attributes:{...d.attributes,"data-prefix":r,"data-icon":i,class:x,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(P)}};const _=k&&!~d.classes.indexOf("fa-fw")?{width:"".concat(y/P*16*.0625,"em")}:{};p&&(N.attributes[ti]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(h||Vo())},children:[l]}),delete N.attributes.title);const v={...N,prefix:r,iconName:i,main:e,mask:n,maskId:u,transform:s,symbol:o,styles:{..._,...d.styles}},{children:T,attributes:b}=n.found&&e.found?_r("generateAbstractMask",v)||{children:[],attributes:{}}:_r("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=T,v.attributes=b,o?MN(v):LN(v)}function By(t){const{content:e,width:n,height:r,transform:i,title:s,extra:o,watchable:l=!1}=t,u={...o.attributes,...s?{title:s}:{},class:o.classes.join(" ")};l&&(u[ti]="");const h={...o.styles};op(i)&&(h.transform=pN({transform:i,startCentered:!0,width:n,height:r}),h["-webkit-transform"]=h.transform);const d=Lu(h);d.length>0&&(u.style=d);const p=[];return p.push({tag:"span",attributes:u,children:[e]}),s&&p.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),p}function VN(t){const{content:e,title:n,extra:r}=t,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},s=Lu(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:qc}=Xt;function Tf(t){const e=t[0],n=t[1],[r]=t.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(H.cssPrefix,"-").concat(Wc.GROUP)},children:[{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(Wc.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(Wc.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:i}}const FN={found:!1,width:512,height:512};function UN(t,e){!bE&&!H.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function If(t,e){let n=e;return e==="fa"&&H.styleDefault!==null&&(e=vr()),new Promise((r,i)=>{if(n==="fa"){const s=qE(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&qc[e]&&qc[e][t]){const s=qc[e][t];return r(Tf(s))}UN(t,e),r({...FN,icon:H.showMissingIcons&&t?_r("missingIconAbstract")||{}:{}})})}const $y=()=>{},Sf=H.measurePerformance&&$a&&$a.mark&&$a.measure?$a:{mark:$y,measure:$y},$s='FA "6.6.0"',jN=t=>(Sf.mark("".concat($s," ").concat(t," begins")),()=>YE(t)),YE=t=>{Sf.mark("".concat($s," ").concat(t," ends")),Sf.measure("".concat($s," ").concat(t),"".concat($s," ").concat(t," begins"),"".concat($s," ").concat(t," ends"))};var hp={begin:jN,end:YE};const ul=()=>{};function Hy(t){return typeof(t.getAttribute?t.getAttribute(ti):null)=="string"}function zN(t){const e=t.getAttribute?t.getAttribute(rp):null,n=t.getAttribute?t.getAttribute(ip):null;return e&&n}function BN(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(H.replacementClass)}function $N(){return H.autoReplaceSvg===!0?cl.replace:cl[H.autoReplaceSvg]||cl.replace}function HN(t){return de.createElementNS("http://www.w3.org/2000/svg",t)}function WN(t){return de.createElement(t)}function XE(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?HN:WN}=e;if(typeof t=="string")return de.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){r.appendChild(XE(s,{ceFn:n}))}),r}function KN(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const cl={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(XE(n),e)}),e.getAttribute(ti)===null&&H.keepOriginalSource){let n=de.createComment(KN(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~sp(e).indexOf(H.replacementClass))return cl.replace(t);const r=new RegExp("".concat(H.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,l)=>(l===H.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const i=n.map(s=>ta(s)).join(`
`);e.setAttribute(ti,""),e.innerHTML=i}};function Wy(t){t()}function JE(t,e){const n=typeof e=="function"?e:ul;if(t.length===0)n();else{let r=Wy;H.mutateApproach===Zx&&(r=yr.requestAnimationFrame||Wy),r(()=>{const i=$N(),s=hp.begin("mutate");t.map(i),s(),n()})}}let fp=!1;function ZE(){fp=!0}function Af(){fp=!1}let ru=null;function Ky(t){if(!Dy||!H.observeMutations)return;const{treeCallback:e=ul,nodeCallback:n=ul,pseudoElementsCallback:r=ul,observeMutationsRoot:i=de}=t;ru=new Dy(s=>{if(fp)return;const o=vr();cs(s).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!Hy(l.addedNodes[0])&&(H.searchPseudoElements&&r(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&H.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&Hy(l.target)&&~sN.indexOf(l.attributeName))if(l.attributeName==="class"&&zN(l.target)){const{prefix:u,iconName:h}=Vu(sp(l.target));l.target.setAttribute(rp,u||o),h&&l.target.setAttribute(ip,h)}else BN(l.target)&&n(l.target)})}),Dn&&ru.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function GN(){ru&&ru.disconnect()}function qN(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,i)=>{const s=i.split(":"),o=s[0],l=s.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function QN(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let i=Vu(sp(t));return i.prefix||(i.prefix=vr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=AN(i.prefix,t.innerText)||lp(i.prefix,vf(t.innerText))),!i.iconName&&H.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function YN(t){const e=cs(t.attributes).reduce((i,s)=>(i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return H.autoA11y&&(n?e["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(r||Vo()):(e["aria-hidden"]="true",e.focusable="false")),e}function XN(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Yt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Gy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=QN(t),s=YN(t),o=Ef("parseNodeAttributes",{},t);let l=e.styleParser?qN(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Yt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s},...o}}const{styles:JN}=Xt;function ew(t){const e=H.autoReplaceSvg==="nest"?Gy(t,{styleParser:!1}):Gy(t);return~e.extra.classes.indexOf(ME)?_r("generateLayersText",t,e):_r("generateSvgReplacementMutation",t,e)}let sn=new Set;DE.map(t=>{sn.add("fa-".concat(t))});Object.keys(Br[me]).map(sn.add.bind(sn));Object.keys(Br[vt]).map(sn.add.bind(sn));Object.keys(Br[_t]).map(sn.add.bind(sn));sn=[...sn];function qy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Dn)return Promise.resolve();const n=de.documentElement.classList,r=d=>n.add("".concat(Vy,"-").concat(d)),i=d=>n.remove("".concat(Vy,"-").concat(d)),s=H.autoFetchSvg?sn:DE.map(d=>"fa-".concat(d)).concat(Object.keys(JN));s.includes("fa")||s.push("fa");const o=[".".concat(ME,":not([").concat(ti,"])")].concat(s.map(d=>".".concat(d,":not([").concat(ti,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=cs(t.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();const u=hp.begin("onTree"),h=l.reduce((d,p)=>{try{const y=ew(p);y&&d.push(y)}catch(y){bE||y.name==="MissingIcon"&&console.error(y)}return d},[]);return new Promise((d,p)=>{Promise.all(h).then(y=>{JE(y,()=>{r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),u(),d()})}).catch(y=>{u(),p(y)})})}function ZN(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ew(t).then(n=>{n&&JE([n],e)})}function eO(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:wf(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:wf(i||{})),t(r,{...n,mask:i})}}const tO=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Yt,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:l=null,classes:u=[],attributes:h={},styles:d={}}=e;if(!t)return;const{prefix:p,iconName:y,icon:P}=t;return Fu({type:"icon",...t},()=>(ni("beforeDOMElementCreation",{iconDefinition:t,params:e}),H.autoA11y&&(o?h["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(l||Vo()):(h["aria-hidden"]="true",h.focusable="false")),cp({icons:{main:Tf(P),mask:i?Tf(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:y,transform:{...Yt,...n},symbol:r,title:o,maskId:s,titleId:l,extra:{attributes:h,styles:d,classes:u}})))};var nO={mixout(){return{icon:eO(tO)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=qy,t.nodeCallback=ZN,t}}},provides(t){t.i2svg=function(e){const{node:n=de,callback:r=()=>{}}=e;return qy(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:i,titleId:s,prefix:o,transform:l,symbol:u,mask:h,maskId:d,extra:p}=n;return new Promise((y,P)=>{Promise.all([If(r,o),h.iconName?If(h.iconName,h.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(k=>{let[x,N]=k;y([e,cp({icons:{main:x,mask:N},prefix:o,iconName:r,transform:l,symbol:u,maskId:d,title:i,titleId:s,extra:p,watchable:!0})])}).catch(P)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:i,transform:s,styles:o}=e;const l=Lu(o);l.length>0&&(r.style=l);let u;return op(s)&&(u=_r("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:r}}}},rO={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Fu({type:"layer"},()=>{ni("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(i=>{Array.isArray(i)?i.map(s=>{r=r.concat(s.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(H.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},iO={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=e;return Fu({type:"counter",content:t},()=>(ni("beforeDOMElementCreation",{content:t,params:e}),VN({content:t.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat(H.cssPrefix,"-layers-counter"),...r]}})))}}}},sO={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Yt,title:r=null,classes:i=[],attributes:s={},styles:o={}}=e;return Fu({type:"text",content:t},()=>(ni("beforeDOMElementCreation",{content:t,params:e}),By({content:t,transform:{...Yt,...n},title:r,extra:{attributes:s,styles:o,classes:["".concat(H.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:i,extra:s}=n;let o=null,l=null;if(kE){const u=parseInt(getComputedStyle(e).fontSize,10),h=e.getBoundingClientRect();o=h.width/u,l=h.height/u}return H.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,By({content:e.innerHTML,width:o,height:l,transform:i,title:r,extra:s,watchable:!0})])}}};const oO=new RegExp('"',"ug"),Qy=[1105920,1112319],Yy={FontAwesome:{normal:"fas",400:"fas"},...zx,...jx,...Qx},Pf=Object.keys(Yy).reduce((t,e)=>(t[e.toLowerCase()]=Yy[e],t),{}),aO=Object.keys(Pf).reduce((t,e)=>{const n=Pf[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function lO(t){const e=t.replace(oO,""),n=_N(e,0),r=n>=Qy[0]&&n<=Qy[1],i=e.length===2?e[0]===e[1]:!1;return{value:vf(i?e[0]:e),isSecondary:r||i}}function uO(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(Pf[n]||{})[i]||aO[n]}function Xy(t,e){const n="".concat(Jx).concat(e.replace(":","-"));return new Promise((r,i)=>{if(t.getAttribute(n)!==null)return r();const o=cs(t.children).filter(y=>y.getAttribute(pf)===e)[0],l=yr.getComputedStyle(t,e),u=l.getPropertyValue("font-family"),h=u.match(rN),d=l.getPropertyValue("font-weight"),p=l.getPropertyValue("content");if(o&&!h)return t.removeChild(o),r();if(h&&p!=="none"&&p!==""){const y=l.getPropertyValue("content");let P=uO(u,d);const{value:k,isSecondary:x}=lO(y),N=h[0].startsWith("FontAwesome");let _=lp(P,k),v=_;if(N){const T=PN(k);T.iconName&&T.prefix&&(_=T.iconName,P=T.prefix)}if(_&&!x&&(!o||o.getAttribute(rp)!==P||o.getAttribute(ip)!==v)){t.setAttribute(n,v),o&&t.removeChild(o);const T=XN(),{extra:b}=T;b.attributes[pf]=e,If(_,P).then(L=>{const U=cp({...T,icons:{main:L,mask:up()},prefix:P,iconName:v,extra:b,watchable:!0}),w=de.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(w,t.firstChild):t.appendChild(w),w.outerHTML=U.map(g=>ta(g)).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function cO(t){return Promise.all([Xy(t,"::before"),Xy(t,"::after")])}function hO(t){return t.parentNode!==document.head&&!~eN.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(pf)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Jy(t){if(Dn)return new Promise((e,n)=>{const r=cs(t.querySelectorAll("*")).filter(hO).map(cO),i=hp.begin("searchPseudoElements");ZE(),Promise.all(r).then(()=>{i(),Af(),e()}).catch(()=>{i(),Af(),n()})})}var fO={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Jy,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=de}=e;H.searchPseudoElements&&Jy(n)}}};let Zy=!1;var dO={mixout(){return{dom:{unwatch(){ZE(),Zy=!0}}}},hooks(){return{bootstrap(){Ky(Ef("mutationObserverCallbacks",{}))},noAuto(){GN()},watch(t){const{observeMutationsRoot:e}=t;Zy?Af():Ky(Ef("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const ev=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),s=i[0];let o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var pO={mixout(){return{parse:{transform:t=>ev(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=ev(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:i,iconWidth:s}=e;const o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),h="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(h)},p={transform:"translate(".concat(s/2*-1," -256)")},y={outer:o,inner:d,path:p};return{tag:"g",attributes:{...y.outer},children:[{tag:"g",attributes:{...y.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...y.path}}]}]}}}};const Qc={x:0,y:0,width:"100%",height:"100%"};function tv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function mO(t){return t.tag==="g"?t.children:[t]}var gO={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Vu(n.split(" ").map(i=>i.trim())):up();return r.prefix||(r.prefix=vr()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:i,mask:s,maskId:o,transform:l}=e;const{width:u,icon:h}=i,{width:d,icon:p}=s,y=dN({transform:l,containerWidth:d,iconWidth:u}),P={tag:"rect",attributes:{...Qc,fill:"white"}},k=h.children?{children:h.children.map(tv)}:{},x={tag:"g",attributes:{...y.inner},children:[tv({tag:h.tag,attributes:{...h.attributes,...y.path},...k})]},N={tag:"g",attributes:{...y.outer},children:[x]},_="mask-".concat(o||Vo()),v="clip-".concat(o||Vo()),T={tag:"mask",attributes:{...Qc,id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[P,N]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:mO(p)},T]};return n.push(b,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(_,")"),...Qc}}),{children:n,attributes:r}}}},yO={provides(t){let e=!1;yr.matchMedia&&(e=yr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...i,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},vO={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},_O=[gN,nO,rO,iO,sO,fO,dO,pO,gO,yO,vO];xN(_O,{mixoutsTo:It});It.noAuto;It.config;It.library;It.dom;const kf=It.parse;It.findIconDefinition;It.toHtml;const EO=It.icon;It.layer;It.text;It.counter;var tw={exports:{}},wO="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",TO=wO,IO=TO;function nw(){}function rw(){}rw.resetWarningCache=nw;var SO=function(){function t(r,i,s,o,l,u){if(u!==IO){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:rw,resetWarningCache:nw};return n.PropTypes=n,n};tw.exports=SO();var AO=tw.exports;const X=sv(AO);function nv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Gt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?nv(Object(n),!0).forEach(function(r){Ri(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):nv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function iu(t){"@babel/helpers - typeof";return iu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},iu(t)}function Ri(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function PO(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function kO(t,e){if(t==null)return{};var n=PO(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Cf(t){return CO(t)||RO(t)||xO(t)||NO()}function CO(t){if(Array.isArray(t))return Rf(t)}function RO(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function xO(t,e){if(t){if(typeof t=="string")return Rf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Rf(t,e)}}function Rf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function NO(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function OO(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,l=t.flash,u=t.spin,h=t.spinPulse,d=t.spinReverse,p=t.pulse,y=t.fixedWidth,P=t.inverse,k=t.border,x=t.listItem,N=t.flip,_=t.size,v=t.rotation,T=t.pull,b=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":l,"fa-spin":u,"fa-spin-reverse":d,"fa-spin-pulse":h,"fa-pulse":p,"fa-fw":y,"fa-inverse":P,"fa-border":k,"fa-li":x,"fa-flip":N===!0,"fa-flip-horizontal":N==="horizontal"||N==="both","fa-flip-vertical":N==="vertical"||N==="both"},Ri(e,"fa-".concat(_),typeof _<"u"&&_!==null),Ri(e,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),Ri(e,"fa-pull-".concat(T),typeof T<"u"&&T!==null),Ri(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(b).map(function(L){return b[L]?L:null}).filter(function(L){return L})}function bO(t){return t=t-0,t===t}function iw(t){return bO(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var DO=["style"];function LO(t){return t.charAt(0).toUpperCase()+t.slice(1)}function MO(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=iw(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[LO(i)]=s:e[i]=s,e},{})}function sw(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(u){return sw(t,u)}),i=Object.keys(e.attributes||{}).reduce(function(u,h){var d=e.attributes[h];switch(h){case"class":u.attrs.className=d,delete e.attributes.class;break;case"style":u.attrs.style=MO(d);break;default:h.indexOf("aria-")===0||h.indexOf("data-")===0?u.attrs[h.toLowerCase()]=d:u.attrs[iw(h)]=d}return u},{attrs:{}}),s=n.style,o=s===void 0?{}:s,l=kO(n,DO);return i.attrs.style=Gt(Gt({},i.attrs.style),o),t.apply(void 0,[e.tag,Gt(Gt({},i.attrs),l)].concat(Cf(r)))}var ow=!1;try{ow=!0}catch{}function VO(){if(!ow&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function rv(t){if(t&&iu(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(kf.icon)return kf.icon(t);if(t===null)return null;if(t&&iu(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Yc(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ri({},t,e):{}}var iv={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Kt=Df.forwardRef(function(t,e){var n=Gt(Gt({},iv),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,l=n.title,u=n.titleId,h=n.maskId,d=rv(r),p=Yc("classes",[].concat(Cf(OO(n)),Cf((o||"").split(" ")))),y=Yc("transform",typeof n.transform=="string"?kf.transform(n.transform):n.transform),P=Yc("mask",rv(i)),k=EO(d,Gt(Gt(Gt(Gt({},p),y),P),{},{symbol:s,title:l,titleId:u,maskId:h}));if(!k)return VO("Could not find icon",d),null;var x=k.abstract,N={ref:e};return Object.keys(n).forEach(function(_){iv.hasOwnProperty(_)||(N[_]=n[_])}),FO(x[0],N)});Kt.displayName="FontAwesomeIcon";Kt.propTypes={beat:X.bool,border:X.bool,beatFade:X.bool,bounce:X.bool,className:X.string,fade:X.bool,flash:X.bool,mask:X.oneOfType([X.object,X.array,X.string]),maskId:X.string,fixedWidth:X.bool,inverse:X.bool,flip:X.oneOf([!0,!1,"horizontal","vertical","both"]),icon:X.oneOfType([X.object,X.array,X.string]),listItem:X.bool,pull:X.oneOf(["right","left"]),pulse:X.bool,rotation:X.oneOf([0,90,180,270]),shake:X.bool,size:X.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:X.bool,spinPulse:X.bool,spinReverse:X.bool,symbol:X.oneOfType([X.bool,X.string]),title:X.string,titleId:X.string,transform:X.oneOfType([X.string,X.object]),swapOpacity:X.bool};var FO=sw.bind(null,Df.createElement);const UO={prefix:"fas",iconName:"file-lines",icon:[384,512,[128441,128462,61686,"file-alt","file-text"],"f15c","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM112 256l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]},jO=UO,zO={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},BO=zO,$O={prefix:"fas",iconName:"square-check",icon:[448,512,[9745,9989,61510,"check-square"],"f14a","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},HO=$O,WO={prefix:"fas",iconName:"list",icon:[512,512,["list-squares"],"f03a","M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z"]},KO={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z"]},GO={prefix:"fas",iconName:"chart-bar",icon:[512,512,["bar-chart"],"f080","M32 32c17.7 0 32 14.3 32 32l0 336c0 8.8 7.2 16 16 16l400 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 480c-44.2 0-80-35.8-80-80L0 64C0 46.3 14.3 32 32 32zm96 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32zm32 64l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 96l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},qO={prefix:"fas",iconName:"file-contract",icon:[384,512,[],"f56c","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM80 64l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 96c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm54.2 253.8c-6.1 20.3-24.8 34.2-46 34.2L80 416c-8.8 0-16-7.2-16-16s7.2-16 16-16l8.2 0c7.1 0 13.3-4.6 15.3-11.4l14.9-49.5c3.4-11.3 13.8-19.1 25.6-19.1s22.2 7.7 25.6 19.1l11.6 38.6c7.4-6.2 16.8-9.7 26.8-9.7c15.9 0 30.4 9 37.5 23.2l4.4 8.8 54.1 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-6.1 0-11.6-3.4-14.3-8.8l-8.8-17.7c-1.7-3.4-5.1-5.5-8.8-5.5s-7.2 2.1-8.8 5.5l-8.8 17.7c-2.9 5.9-9.2 9.4-15.7 8.8s-12.1-5.1-13.9-11.3L144 349l-9.8 32.8z"]},QO={prefix:"fas",iconName:"book",icon:[448,512,[128212],"f02d","M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]};function YO(){return j.jsxs("div",{className:"container",children:[j.jsxs("aside",{className:"sidebar",children:[j.jsxs("div",{className:"profile",children:[j.jsx("img",{src:"https://via.placeholder.com/50",alt:"Avatar",className:"avatar"}),j.jsx("h4",{children:"Nombre de Usuario"}),j.jsx("p",{children:"correo@ejemplo.com"})]}),j.jsx("nav",{children:j.jsxs("ul",{children:[j.jsx("li",{children:j.jsxs(Un,{to:"/home",children:[j.jsx(Kt,{icon:QO}),j.jsx("span",{children:"Cursos"})]})}),j.jsx("li",{children:j.jsxs(Un,{to:"/listas",children:[j.jsx(Kt,{icon:WO}),j.jsx("span",{children:"Listas"})]})}),j.jsx("li",{children:j.jsxs(Un,{to:"/asistencias",children:[j.jsx(Kt,{icon:HO}),j.jsx("span",{children:"Asistencias"})]})}),j.jsx("li",{children:j.jsxs(Un,{to:"/graficas",children:[j.jsx(Kt,{icon:GO}),j.jsx("span",{children:"Gráficas"})]})}),j.jsx("li",{children:j.jsxs(Un,{to:"/reportes",children:[j.jsx(Kt,{icon:jO}),j.jsx("span",{children:"Reportes"})]})}),j.jsx("li",{children:j.jsxs(Un,{to:"/constancias",children:[j.jsx(Kt,{icon:qO}),j.jsx("span",{children:"Constancias"})]})}),j.jsx("li",{children:j.jsxs(Un,{to:"/personal",children:[j.jsx(Kt,{icon:KO}),j.jsx("span",{children:"Personal"})]})})]})}),j.jsx("div",{className:"settings",children:j.jsxs(Un,{to:"/",children:[j.jsx(Kt,{icon:BO}),j.jsx("span",{children:"Cerrar Sesión"})]})})]}),j.jsxs("main",{className:"main-content",children:[j.jsx("h1",{children:"Bienvenido al Panel"}),j.jsx("p",{children:"Aquí puedes ver el contenido seleccionado desde el menú."})]})]})}function XO(){return j.jsxs(oA,{basename:"/Proyectointegrador",children:[" ",j.jsxs(ZS,{children:[j.jsx(Hh,{path:"/",element:j.jsx(Dx,{})})," ",j.jsx(Hh,{path:"/home",element:j.jsx(YO,{})})," "]})]})}v_(document.getElementById("root")).render(j.jsx(B.StrictMode,{children:j.jsx(XO,{})}));
