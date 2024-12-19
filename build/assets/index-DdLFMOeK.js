function SI(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const s in i)if(s!=="default"&&!(s in n)){const a=Object.getOwnPropertyDescriptor(i,s);a&&Object.defineProperty(n,s,a.get?a:{enumerable:!0,get:()=>i[s]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function j0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Uf={exports:{}},Al={},Ff={exports:{}},ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b_;function RI(){if(b_)return ze;b_=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),E=Symbol.iterator;function T(F){return F===null||typeof F!="object"?null:(F=E&&F[E]||F["@@iterator"],typeof F=="function"?F:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,L={};function N(F,X,ve){this.props=F,this.context=X,this.refs=L,this.updater=ve||A}N.prototype.isReactComponent={},N.prototype.setState=function(F,X){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,X,"setState")},N.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function K(){}K.prototype=N.prototype;function j(F,X,ve){this.props=F,this.context=X,this.refs=L,this.updater=ve||A}var q=j.prototype=new K;q.constructor=j,b(q,N.prototype),q.isPureReactComponent=!0;var x=Array.isArray,ee=Object.prototype.hasOwnProperty,oe={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function S(F,X,ve){var ye,be={},Fe=null,je=null;if(X!=null)for(ye in X.ref!==void 0&&(je=X.ref),X.key!==void 0&&(Fe=""+X.key),X)ee.call(X,ye)&&!R.hasOwnProperty(ye)&&(be[ye]=X[ye]);var Me=arguments.length-2;if(Me===1)be.children=ve;else if(1<Me){for(var Je=Array(Me),st=0;st<Me;st++)Je[st]=arguments[st+2];be.children=Je}if(F&&F.defaultProps)for(ye in Me=F.defaultProps,Me)be[ye]===void 0&&(be[ye]=Me[ye]);return{$$typeof:n,type:F,key:Fe,ref:je,props:be,_owner:oe.current}}function k(F,X){return{$$typeof:n,type:F.type,key:X,ref:F.ref,props:F.props,_owner:F._owner}}function D(F){return typeof F=="object"&&F!==null&&F.$$typeof===n}function M(F){var X={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(ve){return X[ve]})}var V=/\/+/g;function P(F,X){return typeof F=="object"&&F!==null&&F.key!=null?M(""+F.key):X.toString(36)}function it(F,X,ve,ye,be){var Fe=typeof F;(Fe==="undefined"||Fe==="boolean")&&(F=null);var je=!1;if(F===null)je=!0;else switch(Fe){case"string":case"number":je=!0;break;case"object":switch(F.$$typeof){case n:case e:je=!0}}if(je)return je=F,be=be(je),F=ye===""?"."+P(je,0):ye,x(be)?(ve="",F!=null&&(ve=F.replace(V,"$&/")+"/"),it(be,X,ve,"",function(st){return st})):be!=null&&(D(be)&&(be=k(be,ve+(!be.key||je&&je.key===be.key?"":(""+be.key).replace(V,"$&/")+"/")+F)),X.push(be)),1;if(je=0,ye=ye===""?".":ye+":",x(F))for(var Me=0;Me<F.length;Me++){Fe=F[Me];var Je=ye+P(Fe,Me);je+=it(Fe,X,ve,Je,be)}else if(Je=T(F),typeof Je=="function")for(F=Je.call(F),Me=0;!(Fe=F.next()).done;)Fe=Fe.value,Je=ye+P(Fe,Me++),je+=it(Fe,X,ve,Je,be);else if(Fe==="object")throw X=String(F),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.");return je}function ct(F,X,ve){if(F==null)return F;var ye=[],be=0;return it(F,ye,"","",function(Fe){return X.call(ve,Fe,be++)}),ye}function Xe(F){if(F._status===-1){var X=F._result;X=X(),X.then(function(ve){(F._status===0||F._status===-1)&&(F._status=1,F._result=ve)},function(ve){(F._status===0||F._status===-1)&&(F._status=2,F._result=ve)}),F._status===-1&&(F._status=0,F._result=X)}if(F._status===1)return F._result.default;throw F._result}var Ne={current:null},se={transition:null},me={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:se,ReactCurrentOwner:oe};function ce(){throw Error("act(...) is not supported in production builds of React.")}return ze.Children={map:ct,forEach:function(F,X,ve){ct(F,function(){X.apply(this,arguments)},ve)},count:function(F){var X=0;return ct(F,function(){X++}),X},toArray:function(F){return ct(F,function(X){return X})||[]},only:function(F){if(!D(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},ze.Component=N,ze.Fragment=t,ze.Profiler=s,ze.PureComponent=j,ze.StrictMode=i,ze.Suspense=f,ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,ze.act=ce,ze.cloneElement=function(F,X,ve){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var ye=b({},F.props),be=F.key,Fe=F.ref,je=F._owner;if(X!=null){if(X.ref!==void 0&&(Fe=X.ref,je=oe.current),X.key!==void 0&&(be=""+X.key),F.type&&F.type.defaultProps)var Me=F.type.defaultProps;for(Je in X)ee.call(X,Je)&&!R.hasOwnProperty(Je)&&(ye[Je]=X[Je]===void 0&&Me!==void 0?Me[Je]:X[Je])}var Je=arguments.length-2;if(Je===1)ye.children=ve;else if(1<Je){Me=Array(Je);for(var st=0;st<Je;st++)Me[st]=arguments[st+2];ye.children=Me}return{$$typeof:n,type:F.type,key:be,ref:Fe,props:ye,_owner:je}},ze.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:a,_context:F},F.Consumer=F},ze.createElement=S,ze.createFactory=function(F){var X=S.bind(null,F);return X.type=F,X},ze.createRef=function(){return{current:null}},ze.forwardRef=function(F){return{$$typeof:d,render:F}},ze.isValidElement=D,ze.lazy=function(F){return{$$typeof:_,_payload:{_status:-1,_result:F},_init:Xe}},ze.memo=function(F,X){return{$$typeof:m,type:F,compare:X===void 0?null:X}},ze.startTransition=function(F){var X=se.transition;se.transition={};try{F()}finally{se.transition=X}},ze.unstable_act=ce,ze.useCallback=function(F,X){return Ne.current.useCallback(F,X)},ze.useContext=function(F){return Ne.current.useContext(F)},ze.useDebugValue=function(){},ze.useDeferredValue=function(F){return Ne.current.useDeferredValue(F)},ze.useEffect=function(F,X){return Ne.current.useEffect(F,X)},ze.useId=function(){return Ne.current.useId()},ze.useImperativeHandle=function(F,X,ve){return Ne.current.useImperativeHandle(F,X,ve)},ze.useInsertionEffect=function(F,X){return Ne.current.useInsertionEffect(F,X)},ze.useLayoutEffect=function(F,X){return Ne.current.useLayoutEffect(F,X)},ze.useMemo=function(F,X){return Ne.current.useMemo(F,X)},ze.useReducer=function(F,X,ve){return Ne.current.useReducer(F,X,ve)},ze.useRef=function(F){return Ne.current.useRef(F)},ze.useState=function(F){return Ne.current.useState(F)},ze.useSyncExternalStore=function(F,X,ve){return Ne.current.useSyncExternalStore(F,X,ve)},ze.useTransition=function(){return Ne.current.useTransition()},ze.version="18.3.1",ze}var N_;function nm(){return N_||(N_=1,Ff.exports=RI()),Ff.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_;function AI(){if(D_)return Al;D_=1;var n=nm(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,m){var _,E={},T=null,A=null;m!==void 0&&(T=""+m),f.key!==void 0&&(T=""+f.key),f.ref!==void 0&&(A=f.ref);for(_ in f)i.call(f,_)&&!a.hasOwnProperty(_)&&(E[_]=f[_]);if(d&&d.defaultProps)for(_ in f=d.defaultProps,f)E[_]===void 0&&(E[_]=f[_]);return{$$typeof:e,type:d,key:T,ref:A,props:E,_owner:s.current}}return Al.Fragment=t,Al.jsx=u,Al.jsxs=u,Al}var O_;function kI(){return O_||(O_=1,Uf.exports=AI()),Uf.exports}var Z=kI(),Y=nm();const We=j0(Y),CI=SI({__proto__:null,default:We},[Y]);var Bc={},jf={exports:{}},Fn={},Bf={exports:{}},zf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L_;function PI(){return L_||(L_=1,function(n){function e(se,me){var ce=se.length;se.push(me);e:for(;0<ce;){var F=ce-1>>>1,X=se[F];if(0<s(X,me))se[F]=me,se[ce]=X,ce=F;else break e}}function t(se){return se.length===0?null:se[0]}function i(se){if(se.length===0)return null;var me=se[0],ce=se.pop();if(ce!==me){se[0]=ce;e:for(var F=0,X=se.length,ve=X>>>1;F<ve;){var ye=2*(F+1)-1,be=se[ye],Fe=ye+1,je=se[Fe];if(0>s(be,ce))Fe<X&&0>s(je,be)?(se[F]=je,se[Fe]=ce,F=Fe):(se[F]=be,se[ye]=ce,F=ye);else if(Fe<X&&0>s(je,ce))se[F]=je,se[Fe]=ce,F=Fe;else break e}}return me}function s(se,me){var ce=se.sortIndex-me.sortIndex;return ce!==0?ce:se.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var f=[],m=[],_=1,E=null,T=3,A=!1,b=!1,L=!1,N=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,j=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function q(se){for(var me=t(m);me!==null;){if(me.callback===null)i(m);else if(me.startTime<=se)i(m),me.sortIndex=me.expirationTime,e(f,me);else break;me=t(m)}}function x(se){if(L=!1,q(se),!b)if(t(f)!==null)b=!0,Xe(ee);else{var me=t(m);me!==null&&Ne(x,me.startTime-se)}}function ee(se,me){b=!1,L&&(L=!1,K(S),S=-1),A=!0;var ce=T;try{for(q(me),E=t(f);E!==null&&(!(E.expirationTime>me)||se&&!M());){var F=E.callback;if(typeof F=="function"){E.callback=null,T=E.priorityLevel;var X=F(E.expirationTime<=me);me=n.unstable_now(),typeof X=="function"?E.callback=X:E===t(f)&&i(f),q(me)}else i(f);E=t(f)}if(E!==null)var ve=!0;else{var ye=t(m);ye!==null&&Ne(x,ye.startTime-me),ve=!1}return ve}finally{E=null,T=ce,A=!1}}var oe=!1,R=null,S=-1,k=5,D=-1;function M(){return!(n.unstable_now()-D<k)}function V(){if(R!==null){var se=n.unstable_now();D=se;var me=!0;try{me=R(!0,se)}finally{me?P():(oe=!1,R=null)}}else oe=!1}var P;if(typeof j=="function")P=function(){j(V)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,ct=it.port2;it.port1.onmessage=V,P=function(){ct.postMessage(null)}}else P=function(){N(V,0)};function Xe(se){R=se,oe||(oe=!0,P())}function Ne(se,me){S=N(function(){se(n.unstable_now())},me)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(se){se.callback=null},n.unstable_continueExecution=function(){b||A||(b=!0,Xe(ee))},n.unstable_forceFrameRate=function(se){0>se||125<se?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<se?Math.floor(1e3/se):5},n.unstable_getCurrentPriorityLevel=function(){return T},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(se){switch(T){case 1:case 2:case 3:var me=3;break;default:me=T}var ce=T;T=me;try{return se()}finally{T=ce}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(se,me){switch(se){case 1:case 2:case 3:case 4:case 5:break;default:se=3}var ce=T;T=se;try{return me()}finally{T=ce}},n.unstable_scheduleCallback=function(se,me,ce){var F=n.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?F+ce:F):ce=F,se){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=ce+X,se={id:_++,callback:me,priorityLevel:se,startTime:ce,expirationTime:X,sortIndex:-1},ce>F?(se.sortIndex=ce,e(m,se),t(f)===null&&se===t(m)&&(L?(K(S),S=-1):L=!0,Ne(x,ce-F))):(se.sortIndex=X,e(f,se),b||A||(b=!0,Xe(ee))),se},n.unstable_shouldYield=M,n.unstable_wrapCallback=function(se){var me=T;return function(){var ce=T;T=me;try{return se.apply(this,arguments)}finally{T=ce}}}}(zf)),zf}var M_;function xI(){return M_||(M_=1,Bf.exports=PI()),Bf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V_;function bI(){if(V_)return Fn;V_=1;var n=nm(),e=xI();function t(r){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+r,l=1;l<arguments.length;l++)o+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+r+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function a(r,o){u(r,o),u(r+"Capture",o)}function u(r,o){for(s[r]=o,r=0;r<o.length;r++)i.add(o[r])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},E={};function T(r){return f.call(E,r)?!0:f.call(_,r)?!1:m.test(r)?E[r]=!0:(_[r]=!0,!1)}function A(r,o,l,h){if(l!==null&&l.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function b(r,o,l,h){if(o===null||typeof o>"u"||A(r,o,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function L(r,o,l,h,p,y,w){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=r,this.type=o,this.sanitizeURL=y,this.removeEmptyString=w}var N={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){N[r]=new L(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var o=r[0];N[o]=new L(o,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){N[r]=new L(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){N[r]=new L(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){N[r]=new L(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){N[r]=new L(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){N[r]=new L(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){N[r]=new L(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){N[r]=new L(r,5,!1,r.toLowerCase(),null,!1,!1)});var K=/[\-:]([a-z])/g;function j(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var o=r.replace(K,j);N[o]=new L(o,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var o=r.replace(K,j);N[o]=new L(o,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var o=r.replace(K,j);N[o]=new L(o,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){N[r]=new L(r,1,!1,r.toLowerCase(),null,!1,!1)}),N.xlinkHref=new L("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){N[r]=new L(r,1,!1,r.toLowerCase(),null,!0,!0)});function q(r,o,l,h){var p=N.hasOwnProperty(o)?N[o]:null;(p!==null?p.type!==0:h||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(b(o,l,p,h)&&(l=null),h||p===null?T(o)&&(l===null?r.removeAttribute(o):r.setAttribute(o,""+l)):p.mustUseProperty?r[p.propertyName]=l===null?p.type===3?!1:"":l:(o=p.attributeName,h=p.attributeNamespace,l===null?r.removeAttribute(o):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?r.setAttributeNS(h,o,l):r.setAttribute(o,l))))}var x=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ee=Symbol.for("react.element"),oe=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),M=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),it=Symbol.for("react.suspense_list"),ct=Symbol.for("react.memo"),Xe=Symbol.for("react.lazy"),Ne=Symbol.for("react.offscreen"),se=Symbol.iterator;function me(r){return r===null||typeof r!="object"?null:(r=se&&r[se]||r["@@iterator"],typeof r=="function"?r:null)}var ce=Object.assign,F;function X(r){if(F===void 0)try{throw Error()}catch(l){var o=l.stack.trim().match(/\n( *(at )?)/);F=o&&o[1]||""}return`
`+F+r}var ve=!1;function ye(r,o){if(!r||ve)return"";ve=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(W){var h=W}Reflect.construct(r,[],o)}else{try{o.call()}catch(W){h=W}r.call(o.prototype)}else{try{throw Error()}catch(W){h=W}r()}}catch(W){if(W&&h&&typeof W.stack=="string"){for(var p=W.stack.split(`
`),y=h.stack.split(`
`),w=p.length-1,C=y.length-1;1<=w&&0<=C&&p[w]!==y[C];)C--;for(;1<=w&&0<=C;w--,C--)if(p[w]!==y[C]){if(w!==1||C!==1)do if(w--,C--,0>C||p[w]!==y[C]){var O=`
`+p[w].replace(" at new "," at ");return r.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",r.displayName)),O}while(1<=w&&0<=C);break}}}finally{ve=!1,Error.prepareStackTrace=l}return(r=r?r.displayName||r.name:"")?X(r):""}function be(r){switch(r.tag){case 5:return X(r.type);case 16:return X("Lazy");case 13:return X("Suspense");case 19:return X("SuspenseList");case 0:case 2:case 15:return r=ye(r.type,!1),r;case 11:return r=ye(r.type.render,!1),r;case 1:return r=ye(r.type,!0),r;default:return""}}function Fe(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case R:return"Fragment";case oe:return"Portal";case k:return"Profiler";case S:return"StrictMode";case P:return"Suspense";case it:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case M:return(r.displayName||"Context")+".Consumer";case D:return(r._context.displayName||"Context")+".Provider";case V:var o=r.render;return r=r.displayName,r||(r=o.displayName||o.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case ct:return o=r.displayName||null,o!==null?o:Fe(r.type)||"Memo";case Xe:o=r._payload,r=r._init;try{return Fe(r(o))}catch{}}return null}function je(r){var o=r.type;switch(r.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=o.render,r=r.displayName||r.name||"",o.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fe(o);case 8:return o===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function Me(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Je(r){var o=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function st(r){var o=Je(r)?"checked":"value",l=Object.getOwnPropertyDescriptor(r.constructor.prototype,o),h=""+r[o];if(!r.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,y=l.set;return Object.defineProperty(r,o,{configurable:!0,get:function(){return p.call(this)},set:function(w){h=""+w,y.call(this,w)}}),Object.defineProperty(r,o,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(w){h=""+w},stopTracking:function(){r._valueTracker=null,delete r[o]}}}}function tr(r){r._valueTracker||(r._valueTracker=st(r))}function ji(r){if(!r)return!1;var o=r._valueTracker;if(!o)return!0;var l=o.getValue(),h="";return r&&(h=Je(r)?r.checked?"true":"false":r.value),r=h,r!==l?(o.setValue(r),!0):!1}function Ur(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function si(r,o){var l=o.checked;return ce({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??r._wrapperState.initialChecked})}function nr(r,o){var l=o.defaultValue==null?"":o.defaultValue,h=o.checked!=null?o.checked:o.defaultChecked;l=Me(o.value!=null?o.value:l),r._wrapperState={initialChecked:h,initialValue:l,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function Bi(r,o){o=o.checked,o!=null&&q(r,"checked",o,!1)}function ai(r,o){Bi(r,o);var l=Me(o.value),h=o.type;if(l!=null)h==="number"?(l===0&&r.value===""||r.value!=l)&&(r.value=""+l):r.value!==""+l&&(r.value=""+l);else if(h==="submit"||h==="reset"){r.removeAttribute("value");return}o.hasOwnProperty("value")?Fr(r,o.type,l):o.hasOwnProperty("defaultValue")&&Fr(r,o.type,Me(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(r.defaultChecked=!!o.defaultChecked)}function li(r,o,l){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var h=o.type;if(!(h!=="submit"&&h!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+r._wrapperState.initialValue,l||o===r.value||(r.value=o),r.defaultValue=o}l=r.name,l!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,l!==""&&(r.name=l)}function Fr(r,o,l){(o!=="number"||Ur(r.ownerDocument)!==r)&&(l==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+l&&(r.defaultValue=""+l))}var Qt=Array.isArray;function rr(r,o,l,h){if(r=r.options,o){o={};for(var p=0;p<l.length;p++)o["$"+l[p]]=!0;for(l=0;l<r.length;l++)p=o.hasOwnProperty("$"+r[l].value),r[l].selected!==p&&(r[l].selected=p),p&&h&&(r[l].defaultSelected=!0)}else{for(l=""+Me(l),o=null,p=0;p<r.length;p++){if(r[p].value===l){r[p].selected=!0,h&&(r[p].defaultSelected=!0);return}o!==null||r[p].disabled||(o=r[p])}o!==null&&(o.selected=!0)}}function zi(r,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return ce({},o,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function ui(r,o){var l=o.value;if(l==null){if(l=o.children,o=o.defaultValue,l!=null){if(o!=null)throw Error(t(92));if(Qt(l)){if(1<l.length)throw Error(t(93));l=l[0]}o=l}o==null&&(o=""),l=o}r._wrapperState={initialValue:Me(l)}}function $i(r,o){var l=Me(o.value),h=Me(o.defaultValue);l!=null&&(l=""+l,l!==r.value&&(r.value=l),o.defaultValue==null&&r.defaultValue!==l&&(r.defaultValue=l)),h!=null&&(r.defaultValue=""+h)}function qi(r){var o=r.textContent;o===r._wrapperState.initialValue&&o!==""&&o!==null&&(r.value=o)}function Tt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bt(r,o){return r==null||r==="http://www.w3.org/1999/xhtml"?Tt(o):r==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var zn,Mo=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,l,h,p){MSApp.execUnsafeLocalFunction(function(){return r(o,l,h,p)})}:r}(function(r,o){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=o;else{for(zn=zn||document.createElement("div"),zn.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=zn.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;o.firstChild;)r.appendChild(o.firstChild)}});function _r(r,o){if(o){var l=r.firstChild;if(l&&l===r.lastChild&&l.nodeType===3){l.nodeValue=o;return}}r.textContent=o}var ci={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jr=["Webkit","ms","Moz","O"];Object.keys(ci).forEach(function(r){jr.forEach(function(o){o=o+r.charAt(0).toUpperCase()+r.substring(1),ci[o]=ci[r]})});function Vo(r,o,l){return o==null||typeof o=="boolean"||o===""?"":l||typeof o!="number"||o===0||ci.hasOwnProperty(r)&&ci[r]?(""+o).trim():o+"px"}function H(r,o){r=r.style;for(var l in o)if(o.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=Vo(l,o[l],h);l==="float"&&(l="cssFloat"),h?r.setProperty(l,p):r[l]=p}}var Q=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function te(r,o){if(o){if(Q[r]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function fe(r,o){if(r.indexOf("-")===-1)return typeof o.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ce=null;function Re(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Pe=null,we=null,pe=null;function Ze(r){if(r=hl(r)){if(typeof Pe!="function")throw Error(t(280));var o=r.stateNode;o&&(o=nc(o),Pe(r.stateNode,r.type,o))}}function dt(r){we?pe?pe.push(r):pe=[r]:we=r}function Ge(){if(we){var r=we,o=pe;if(pe=we=null,Ze(r),o)for(r=0;r<o.length;r++)Ze(o[r])}}function at(r,o){return r(o)}function It(){}var rn=!1;function $n(r,o,l){if(rn)return r(o,l);rn=!0;try{return at(r,o,l)}finally{rn=!1,(we!==null||pe!==null)&&(It(),Ge())}}function ft(r,o){var l=r.stateNode;if(l===null)return null;var h=nc(l);if(h===null)return null;l=h[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(r=r.type,h=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!h;break e;default:r=!1}if(r)return null;if(l&&typeof l!="function")throw Error(t(231,o,typeof l));return l}var Br=!1;if(d)try{var Lt={};Object.defineProperty(Lt,"passive",{get:function(){Br=!0}}),window.addEventListener("test",Lt,Lt),window.removeEventListener("test",Lt,Lt)}catch{Br=!1}function on(r,o,l,h,p,y,w,C,O){var W=Array.prototype.slice.call(arguments,3);try{o.apply(l,W)}catch(re){this.onError(re)}}var ir=!1,zr=null,Sn=!1,hi=null,tt={onError:function(r){ir=!0,zr=r}};function Yt(r,o,l,h,p,y,w,C,O){ir=!1,zr=null,on.apply(tt,arguments)}function qn(r,o,l,h,p,y,w,C,O){if(Yt.apply(this,arguments),ir){if(ir){var W=zr;ir=!1,zr=null}else throw Error(t(198));Sn||(Sn=!0,hi=W)}}function Rn(r){var o=r,l=r;if(r.alternate)for(;o.return;)o=o.return;else{r=o;do o=r,o.flags&4098&&(l=o.return),r=o.return;while(r)}return o.tag===3?l:null}function pt(r){if(r.tag===13){var o=r.memoizedState;if(o===null&&(r=r.alternate,r!==null&&(o=r.memoizedState)),o!==null)return o.dehydrated}return null}function sn(r){if(Rn(r)!==r)throw Error(t(188))}function Uo(r){var o=r.alternate;if(!o){if(o=Rn(r),o===null)throw Error(t(188));return o!==r?null:r}for(var l=r,h=o;;){var p=l.return;if(p===null)break;var y=p.alternate;if(y===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===y.child){for(y=p.child;y;){if(y===l)return sn(p),r;if(y===h)return sn(p),o;y=y.sibling}throw Error(t(188))}if(l.return!==h.return)l=p,h=y;else{for(var w=!1,C=p.child;C;){if(C===l){w=!0,l=p,h=y;break}if(C===h){w=!0,h=p,l=y;break}C=C.sibling}if(!w){for(C=y.child;C;){if(C===l){w=!0,l=y,h=p;break}if(C===h){w=!0,h=y,l=p;break}C=C.sibling}if(!w)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?r:o}function Fo(r){return r=Uo(r),r!==null?xs(r):null}function xs(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var o=xs(r);if(o!==null)return o;r=r.sibling}return null}var bs=e.unstable_scheduleCallback,Ka=e.unstable_cancelCallback,Pu=e.unstable_shouldYield,dd=e.unstable_requestPaint,gt=e.unstable_now,xu=e.unstable_getCurrentPriorityLevel,jo=e.unstable_ImmediatePriority,Wi=e.unstable_UserBlockingPriority,or=e.unstable_NormalPriority,Ga=e.unstable_LowPriority,bu=e.unstable_IdlePriority,Bo=null,Wn=null;function Nu(r){if(Wn&&typeof Wn.onCommitFiberRoot=="function")try{Wn.onCommitFiberRoot(Bo,r,void 0,(r.current.flags&128)===128)}catch{}}var An=Math.clz32?Math.clz32:Ou,Qa=Math.log,Du=Math.LN2;function Ou(r){return r>>>=0,r===0?32:31-(Qa(r)/Du|0)|0}var Ns=64,Ds=4194304;function Hi(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function zo(r,o){var l=r.pendingLanes;if(l===0)return 0;var h=0,p=r.suspendedLanes,y=r.pingedLanes,w=l&268435455;if(w!==0){var C=w&~p;C!==0?h=Hi(C):(y&=w,y!==0&&(h=Hi(y)))}else w=l&~p,w!==0?h=Hi(w):y!==0&&(h=Hi(y));if(h===0)return 0;if(o!==0&&o!==h&&!(o&p)&&(p=h&-h,y=o&-o,p>=y||p===16&&(y&4194240)!==0))return o;if(h&4&&(h|=l&16),o=r.entangledLanes,o!==0)for(r=r.entanglements,o&=h;0<o;)l=31-An(o),p=1<<l,h|=r[l],o&=~p;return h}function fd(r,o){switch(r){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function di(r,o){for(var l=r.suspendedLanes,h=r.pingedLanes,p=r.expirationTimes,y=r.pendingLanes;0<y;){var w=31-An(y),C=1<<w,O=p[w];O===-1?(!(C&l)||C&h)&&(p[w]=fd(C,o)):O<=o&&(r.expiredLanes|=C),y&=~C}}function Hn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function $o(){var r=Ns;return Ns<<=1,!(Ns&4194240)&&(Ns=64),r}function Ki(r){for(var o=[],l=0;31>l;l++)o.push(r);return o}function Gi(r,o,l){r.pendingLanes|=o,o!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,o=31-An(o),r[o]=l}function mt(r,o){var l=r.pendingLanes&~o;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=o,r.mutableReadLanes&=o,r.entangledLanes&=o,o=r.entanglements;var h=r.eventTimes;for(r=r.expirationTimes;0<l;){var p=31-An(l),y=1<<p;o[p]=0,h[p]=-1,r[p]=-1,l&=~y}}function Qi(r,o){var l=r.entangledLanes|=o;for(r=r.entanglements;l;){var h=31-An(l),p=1<<h;p&o|r[h]&o&&(r[h]|=o),l&=~p}}var He=0;function Yi(r){return r&=-r,1<r?4<r?r&268435455?16:536870912:4:1}var Lu,Os,Mu,Vu,Uu,Ya=!1,$r=[],an=null,vr=null,wr=null,Xi=new Map,sr=new Map,qr=[],pd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fu(r,o){switch(r){case"focusin":case"focusout":an=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":Xi.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":sr.delete(o.pointerId)}}function Nn(r,o,l,h,p,y){return r===null||r.nativeEvent!==y?(r={blockedOn:o,domEventName:l,eventSystemFlags:h,nativeEvent:y,targetContainers:[p]},o!==null&&(o=hl(o),o!==null&&Os(o)),r):(r.eventSystemFlags|=h,o=r.targetContainers,p!==null&&o.indexOf(p)===-1&&o.push(p),r)}function md(r,o,l,h,p){switch(o){case"focusin":return an=Nn(an,r,o,l,h,p),!0;case"dragenter":return vr=Nn(vr,r,o,l,h,p),!0;case"mouseover":return wr=Nn(wr,r,o,l,h,p),!0;case"pointerover":var y=p.pointerId;return Xi.set(y,Nn(Xi.get(y)||null,r,o,l,h,p)),!0;case"gotpointercapture":return y=p.pointerId,sr.set(y,Nn(sr.get(y)||null,r,o,l,h,p)),!0}return!1}function ju(r){var o=Go(r.target);if(o!==null){var l=Rn(o);if(l!==null){if(o=l.tag,o===13){if(o=pt(l),o!==null){r.blockedOn=o,Uu(r.priority,function(){Mu(l)});return}}else if(o===3&&l.stateNode.current.memoizedState.isDehydrated){r.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}r.blockedOn=null}function fi(r){if(r.blockedOn!==null)return!1;for(var o=r.targetContainers;0<o.length;){var l=Ls(r.domEventName,r.eventSystemFlags,o[0],r.nativeEvent);if(l===null){l=r.nativeEvent;var h=new l.constructor(l.type,l);Ce=h,l.target.dispatchEvent(h),Ce=null}else return o=hl(l),o!==null&&Os(o),r.blockedOn=l,!1;o.shift()}return!0}function qo(r,o,l){fi(r)&&l.delete(o)}function Bu(){Ya=!1,an!==null&&fi(an)&&(an=null),vr!==null&&fi(vr)&&(vr=null),wr!==null&&fi(wr)&&(wr=null),Xi.forEach(qo),sr.forEach(qo)}function Er(r,o){r.blockedOn===o&&(r.blockedOn=null,Ya||(Ya=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Bu)))}function Tr(r){function o(p){return Er(p,r)}if(0<$r.length){Er($r[0],r);for(var l=1;l<$r.length;l++){var h=$r[l];h.blockedOn===r&&(h.blockedOn=null)}}for(an!==null&&Er(an,r),vr!==null&&Er(vr,r),wr!==null&&Er(wr,r),Xi.forEach(o),sr.forEach(o),l=0;l<qr.length;l++)h=qr[l],h.blockedOn===r&&(h.blockedOn=null);for(;0<qr.length&&(l=qr[0],l.blockedOn===null);)ju(l),l.blockedOn===null&&qr.shift()}var pi=x.ReactCurrentBatchConfig,Ji=!0;function St(r,o,l,h){var p=He,y=pi.transition;pi.transition=null;try{He=1,Xa(r,o,l,h)}finally{He=p,pi.transition=y}}function gd(r,o,l,h){var p=He,y=pi.transition;pi.transition=null;try{He=4,Xa(r,o,l,h)}finally{He=p,pi.transition=y}}function Xa(r,o,l,h){if(Ji){var p=Ls(r,o,l,h);if(p===null)kd(r,o,h,Wo,l),Fu(r,h);else if(md(p,r,o,l,h))h.stopPropagation();else if(Fu(r,h),o&4&&-1<pd.indexOf(r)){for(;p!==null;){var y=hl(p);if(y!==null&&Lu(y),y=Ls(r,o,l,h),y===null&&kd(r,o,h,Wo,l),y===p)break;p=y}p!==null&&h.stopPropagation()}else kd(r,o,h,null,l)}}var Wo=null;function Ls(r,o,l,h){if(Wo=null,r=Re(h),r=Go(r),r!==null)if(o=Rn(r),o===null)r=null;else if(l=o.tag,l===13){if(r=pt(o),r!==null)return r;r=null}else if(l===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;r=null}else o!==r&&(r=null);return Wo=r,null}function Ja(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xu()){case jo:return 1;case Wi:return 4;case or:case Ga:return 16;case bu:return 536870912;default:return 16}default:return 16}}var Kn=null,Ms=null,Dn=null;function Za(){if(Dn)return Dn;var r,o=Ms,l=o.length,h,p="value"in Kn?Kn.value:Kn.textContent,y=p.length;for(r=0;r<l&&o[r]===p[r];r++);var w=l-r;for(h=1;h<=w&&o[l-h]===p[y-h];h++);return Dn=p.slice(r,1<h?1-h:void 0)}function Vs(r){var o=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&o===13&&(r=13)):r=o,r===10&&(r=13),32<=r||r===13?r:0}function Wr(){return!0}function el(){return!1}function ln(r){function o(l,h,p,y,w){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=y,this.target=w,this.currentTarget=null;for(var C in r)r.hasOwnProperty(C)&&(l=r[C],this[C]=l?l(y):y[C]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?Wr:el,this.isPropagationStopped=el,this}return ce(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Wr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Wr)},persist:function(){},isPersistent:Wr}),o}var Ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Us=ln(Ir),Hr=ce({},Ir,{view:0,detail:0}),yd=ln(Hr),Fs,mi,Zi,Ho=ce({},Hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kr,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Zi&&(Zi&&r.type==="mousemove"?(Fs=r.screenX-Zi.screenX,mi=r.screenY-Zi.screenY):mi=Fs=0,Zi=r),Fs)},movementY:function(r){return"movementY"in r?r.movementY:mi}}),js=ln(Ho),tl=ce({},Ho,{dataTransfer:0}),zu=ln(tl),Bs=ce({},Hr,{relatedTarget:0}),zs=ln(Bs),$u=ce({},Ir,{animationName:0,elapsedTime:0,pseudoElement:0}),gi=ln($u),qu=ce({},Ir,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Wu=ln(qu),Hu=ce({},Ir,{data:0}),nl=ln(Hu),$s={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ku={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gu(r){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(r):(r=Ku[r])?!!o[r]:!1}function Kr(){return Gu}var c=ce({},Hr,{key:function(r){if(r.key){var o=$s[r.key]||r.key;if(o!=="Unidentified")return o}return r.type==="keypress"?(r=Vs(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?kn[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kr,charCode:function(r){return r.type==="keypress"?Vs(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Vs(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),g=ln(c),v=ce({},Ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),I=ln(v),B=ce({},Hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kr}),G=ln(B),ue=ce({},Ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),lt=ln(ue),$t=ce({},Ho,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Qe=ln($t),Xt=[9,13,27,32],Ut=d&&"CompositionEvent"in window,ar=null;d&&"documentMode"in document&&(ar=document.documentMode);var Gn=d&&"TextEvent"in window&&!ar,Ko=d&&(!Ut||ar&&8<ar&&11>=ar),qs=" ",Rg=!1;function Ag(r,o){switch(r){case"keyup":return Xt.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kg(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Ws=!1;function ET(r,o){switch(r){case"compositionend":return kg(o);case"keypress":return o.which!==32?null:(Rg=!0,qs);case"textInput":return r=o.data,r===qs&&Rg?null:r;default:return null}}function TT(r,o){if(Ws)return r==="compositionend"||!Ut&&Ag(r,o)?(r=Za(),Dn=Ms=Kn=null,Ws=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Ko&&o.locale!=="ko"?null:o.data;default:return null}}var IT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cg(r){var o=r&&r.nodeName&&r.nodeName.toLowerCase();return o==="input"?!!IT[r.type]:o==="textarea"}function Pg(r,o,l,h){dt(h),o=Zu(o,"onChange"),0<o.length&&(l=new Us("onChange","change",null,l,h),r.push({event:l,listeners:o}))}var rl=null,il=null;function ST(r){Kg(r,0)}function Qu(r){var o=Ys(r);if(ji(o))return r}function RT(r,o){if(r==="change")return o}var xg=!1;if(d){var _d;if(d){var vd="oninput"in document;if(!vd){var bg=document.createElement("div");bg.setAttribute("oninput","return;"),vd=typeof bg.oninput=="function"}_d=vd}else _d=!1;xg=_d&&(!document.documentMode||9<document.documentMode)}function Ng(){rl&&(rl.detachEvent("onpropertychange",Dg),il=rl=null)}function Dg(r){if(r.propertyName==="value"&&Qu(il)){var o=[];Pg(o,il,r,Re(r)),$n(ST,o)}}function AT(r,o,l){r==="focusin"?(Ng(),rl=o,il=l,rl.attachEvent("onpropertychange",Dg)):r==="focusout"&&Ng()}function kT(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Qu(il)}function CT(r,o){if(r==="click")return Qu(o)}function PT(r,o){if(r==="input"||r==="change")return Qu(o)}function xT(r,o){return r===o&&(r!==0||1/r===1/o)||r!==r&&o!==o}var Sr=typeof Object.is=="function"?Object.is:xT;function ol(r,o){if(Sr(r,o))return!0;if(typeof r!="object"||r===null||typeof o!="object"||o===null)return!1;var l=Object.keys(r),h=Object.keys(o);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!f.call(o,p)||!Sr(r[p],o[p]))return!1}return!0}function Og(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Lg(r,o){var l=Og(r);r=0;for(var h;l;){if(l.nodeType===3){if(h=r+l.textContent.length,r<=o&&h>=o)return{node:l,offset:o-r};r=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Og(l)}}function Mg(r,o){return r&&o?r===o?!0:r&&r.nodeType===3?!1:o&&o.nodeType===3?Mg(r,o.parentNode):"contains"in r?r.contains(o):r.compareDocumentPosition?!!(r.compareDocumentPosition(o)&16):!1:!1}function Vg(){for(var r=window,o=Ur();o instanceof r.HTMLIFrameElement;){try{var l=typeof o.contentWindow.location.href=="string"}catch{l=!1}if(l)r=o.contentWindow;else break;o=Ur(r.document)}return o}function wd(r){var o=r&&r.nodeName&&r.nodeName.toLowerCase();return o&&(o==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||o==="textarea"||r.contentEditable==="true")}function bT(r){var o=Vg(),l=r.focusedElem,h=r.selectionRange;if(o!==l&&l&&l.ownerDocument&&Mg(l.ownerDocument.documentElement,l)){if(h!==null&&wd(l)){if(o=h.start,r=h.end,r===void 0&&(r=o),"selectionStart"in l)l.selectionStart=o,l.selectionEnd=Math.min(r,l.value.length);else if(r=(o=l.ownerDocument||document)&&o.defaultView||window,r.getSelection){r=r.getSelection();var p=l.textContent.length,y=Math.min(h.start,p);h=h.end===void 0?y:Math.min(h.end,p),!r.extend&&y>h&&(p=h,h=y,y=p),p=Lg(l,y);var w=Lg(l,h);p&&w&&(r.rangeCount!==1||r.anchorNode!==p.node||r.anchorOffset!==p.offset||r.focusNode!==w.node||r.focusOffset!==w.offset)&&(o=o.createRange(),o.setStart(p.node,p.offset),r.removeAllRanges(),y>h?(r.addRange(o),r.extend(w.node,w.offset)):(o.setEnd(w.node,w.offset),r.addRange(o)))}}for(o=[],r=l;r=r.parentNode;)r.nodeType===1&&o.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<o.length;l++)r=o[l],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var NT=d&&"documentMode"in document&&11>=document.documentMode,Hs=null,Ed=null,sl=null,Td=!1;function Ug(r,o,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Td||Hs==null||Hs!==Ur(h)||(h=Hs,"selectionStart"in h&&wd(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),sl&&ol(sl,h)||(sl=h,h=Zu(Ed,"onSelect"),0<h.length&&(o=new Us("onSelect","select",null,o,l),r.push({event:o,listeners:h}),o.target=Hs)))}function Yu(r,o){var l={};return l[r.toLowerCase()]=o.toLowerCase(),l["Webkit"+r]="webkit"+o,l["Moz"+r]="moz"+o,l}var Ks={animationend:Yu("Animation","AnimationEnd"),animationiteration:Yu("Animation","AnimationIteration"),animationstart:Yu("Animation","AnimationStart"),transitionend:Yu("Transition","TransitionEnd")},Id={},Fg={};d&&(Fg=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function Xu(r){if(Id[r])return Id[r];if(!Ks[r])return r;var o=Ks[r],l;for(l in o)if(o.hasOwnProperty(l)&&l in Fg)return Id[r]=o[l];return r}var jg=Xu("animationend"),Bg=Xu("animationiteration"),zg=Xu("animationstart"),$g=Xu("transitionend"),qg=new Map,Wg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function eo(r,o){qg.set(r,o),a(o,[r])}for(var Sd=0;Sd<Wg.length;Sd++){var Rd=Wg[Sd],DT=Rd.toLowerCase(),OT=Rd[0].toUpperCase()+Rd.slice(1);eo(DT,"on"+OT)}eo(jg,"onAnimationEnd"),eo(Bg,"onAnimationIteration"),eo(zg,"onAnimationStart"),eo("dblclick","onDoubleClick"),eo("focusin","onFocus"),eo("focusout","onBlur"),eo($g,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LT=new Set("cancel close invalid load scroll toggle".split(" ").concat(al));function Hg(r,o,l){var h=r.type||"unknown-event";r.currentTarget=l,qn(h,o,void 0,r),r.currentTarget=null}function Kg(r,o){o=(o&4)!==0;for(var l=0;l<r.length;l++){var h=r[l],p=h.event;h=h.listeners;e:{var y=void 0;if(o)for(var w=h.length-1;0<=w;w--){var C=h[w],O=C.instance,W=C.currentTarget;if(C=C.listener,O!==y&&p.isPropagationStopped())break e;Hg(p,C,W),y=O}else for(w=0;w<h.length;w++){if(C=h[w],O=C.instance,W=C.currentTarget,C=C.listener,O!==y&&p.isPropagationStopped())break e;Hg(p,C,W),y=O}}}if(Sn)throw r=hi,Sn=!1,hi=null,r}function vt(r,o){var l=o[Dd];l===void 0&&(l=o[Dd]=new Set);var h=r+"__bubble";l.has(h)||(Gg(o,r,2,!1),l.add(h))}function Ad(r,o,l){var h=0;o&&(h|=4),Gg(l,r,h,o)}var Ju="_reactListening"+Math.random().toString(36).slice(2);function ll(r){if(!r[Ju]){r[Ju]=!0,i.forEach(function(l){l!=="selectionchange"&&(LT.has(l)||Ad(l,!1,r),Ad(l,!0,r))});var o=r.nodeType===9?r:r.ownerDocument;o===null||o[Ju]||(o[Ju]=!0,Ad("selectionchange",!1,o))}}function Gg(r,o,l,h){switch(Ja(o)){case 1:var p=St;break;case 4:p=gd;break;default:p=Xa}l=p.bind(null,o,l,r),p=void 0,!Br||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(p=!0),h?p!==void 0?r.addEventListener(o,l,{capture:!0,passive:p}):r.addEventListener(o,l,!0):p!==void 0?r.addEventListener(o,l,{passive:p}):r.addEventListener(o,l,!1)}function kd(r,o,l,h,p){var y=h;if(!(o&1)&&!(o&2)&&h!==null)e:for(;;){if(h===null)return;var w=h.tag;if(w===3||w===4){var C=h.stateNode.containerInfo;if(C===p||C.nodeType===8&&C.parentNode===p)break;if(w===4)for(w=h.return;w!==null;){var O=w.tag;if((O===3||O===4)&&(O=w.stateNode.containerInfo,O===p||O.nodeType===8&&O.parentNode===p))return;w=w.return}for(;C!==null;){if(w=Go(C),w===null)return;if(O=w.tag,O===5||O===6){h=y=w;continue e}C=C.parentNode}}h=h.return}$n(function(){var W=y,re=Re(l),ae=[];e:{var ne=qg.get(r);if(ne!==void 0){var de=Us,_e=r;switch(r){case"keypress":if(Vs(l)===0)break e;case"keydown":case"keyup":de=g;break;case"focusin":_e="focus",de=zs;break;case"focusout":_e="blur",de=zs;break;case"beforeblur":case"afterblur":de=zs;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=js;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=zu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=G;break;case jg:case Bg:case zg:de=gi;break;case $g:de=lt;break;case"scroll":de=yd;break;case"wheel":de=Qe;break;case"copy":case"cut":case"paste":de=Wu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=I}var Ee=(o&4)!==0,Mt=!Ee&&r==="scroll",z=Ee?ne!==null?ne+"Capture":null:ne;Ee=[];for(var U=W,$;U!==null;){$=U;var le=$.stateNode;if($.tag===5&&le!==null&&($=le,z!==null&&(le=ft(U,z),le!=null&&Ee.push(ul(U,le,$)))),Mt)break;U=U.return}0<Ee.length&&(ne=new de(ne,_e,null,l,re),ae.push({event:ne,listeners:Ee}))}}if(!(o&7)){e:{if(ne=r==="mouseover"||r==="pointerover",de=r==="mouseout"||r==="pointerout",ne&&l!==Ce&&(_e=l.relatedTarget||l.fromElement)&&(Go(_e)||_e[yi]))break e;if((de||ne)&&(ne=re.window===re?re:(ne=re.ownerDocument)?ne.defaultView||ne.parentWindow:window,de?(_e=l.relatedTarget||l.toElement,de=W,_e=_e?Go(_e):null,_e!==null&&(Mt=Rn(_e),_e!==Mt||_e.tag!==5&&_e.tag!==6)&&(_e=null)):(de=null,_e=W),de!==_e)){if(Ee=js,le="onMouseLeave",z="onMouseEnter",U="mouse",(r==="pointerout"||r==="pointerover")&&(Ee=I,le="onPointerLeave",z="onPointerEnter",U="pointer"),Mt=de==null?ne:Ys(de),$=_e==null?ne:Ys(_e),ne=new Ee(le,U+"leave",de,l,re),ne.target=Mt,ne.relatedTarget=$,le=null,Go(re)===W&&(Ee=new Ee(z,U+"enter",_e,l,re),Ee.target=$,Ee.relatedTarget=Mt,le=Ee),Mt=le,de&&_e)t:{for(Ee=de,z=_e,U=0,$=Ee;$;$=Gs($))U++;for($=0,le=z;le;le=Gs(le))$++;for(;0<U-$;)Ee=Gs(Ee),U--;for(;0<$-U;)z=Gs(z),$--;for(;U--;){if(Ee===z||z!==null&&Ee===z.alternate)break t;Ee=Gs(Ee),z=Gs(z)}Ee=null}else Ee=null;de!==null&&Qg(ae,ne,de,Ee,!1),_e!==null&&Mt!==null&&Qg(ae,Mt,_e,Ee,!0)}}e:{if(ne=W?Ys(W):window,de=ne.nodeName&&ne.nodeName.toLowerCase(),de==="select"||de==="input"&&ne.type==="file")var Ie=RT;else if(Cg(ne))if(xg)Ie=PT;else{Ie=kT;var Ae=AT}else(de=ne.nodeName)&&de.toLowerCase()==="input"&&(ne.type==="checkbox"||ne.type==="radio")&&(Ie=CT);if(Ie&&(Ie=Ie(r,W))){Pg(ae,Ie,l,re);break e}Ae&&Ae(r,ne,W),r==="focusout"&&(Ae=ne._wrapperState)&&Ae.controlled&&ne.type==="number"&&Fr(ne,"number",ne.value)}switch(Ae=W?Ys(W):window,r){case"focusin":(Cg(Ae)||Ae.contentEditable==="true")&&(Hs=Ae,Ed=W,sl=null);break;case"focusout":sl=Ed=Hs=null;break;case"mousedown":Td=!0;break;case"contextmenu":case"mouseup":case"dragend":Td=!1,Ug(ae,l,re);break;case"selectionchange":if(NT)break;case"keydown":case"keyup":Ug(ae,l,re)}var ke;if(Ut)e:{switch(r){case"compositionstart":var Oe="onCompositionStart";break e;case"compositionend":Oe="onCompositionEnd";break e;case"compositionupdate":Oe="onCompositionUpdate";break e}Oe=void 0}else Ws?Ag(r,l)&&(Oe="onCompositionEnd"):r==="keydown"&&l.keyCode===229&&(Oe="onCompositionStart");Oe&&(Ko&&l.locale!=="ko"&&(Ws||Oe!=="onCompositionStart"?Oe==="onCompositionEnd"&&Ws&&(ke=Za()):(Kn=re,Ms="value"in Kn?Kn.value:Kn.textContent,Ws=!0)),Ae=Zu(W,Oe),0<Ae.length&&(Oe=new nl(Oe,r,null,l,re),ae.push({event:Oe,listeners:Ae}),ke?Oe.data=ke:(ke=kg(l),ke!==null&&(Oe.data=ke)))),(ke=Gn?ET(r,l):TT(r,l))&&(W=Zu(W,"onBeforeInput"),0<W.length&&(re=new nl("onBeforeInput","beforeinput",null,l,re),ae.push({event:re,listeners:W}),re.data=ke))}Kg(ae,o)})}function ul(r,o,l){return{instance:r,listener:o,currentTarget:l}}function Zu(r,o){for(var l=o+"Capture",h=[];r!==null;){var p=r,y=p.stateNode;p.tag===5&&y!==null&&(p=y,y=ft(r,l),y!=null&&h.unshift(ul(r,y,p)),y=ft(r,o),y!=null&&h.push(ul(r,y,p))),r=r.return}return h}function Gs(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Qg(r,o,l,h,p){for(var y=o._reactName,w=[];l!==null&&l!==h;){var C=l,O=C.alternate,W=C.stateNode;if(O!==null&&O===h)break;C.tag===5&&W!==null&&(C=W,p?(O=ft(l,y),O!=null&&w.unshift(ul(l,O,C))):p||(O=ft(l,y),O!=null&&w.push(ul(l,O,C)))),l=l.return}w.length!==0&&r.push({event:o,listeners:w})}var MT=/\r\n?/g,VT=/\u0000|\uFFFD/g;function Yg(r){return(typeof r=="string"?r:""+r).replace(MT,`
`).replace(VT,"")}function ec(r,o,l){if(o=Yg(o),Yg(r)!==o&&l)throw Error(t(425))}function tc(){}var Cd=null,Pd=null;function xd(r,o){return r==="textarea"||r==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var bd=typeof setTimeout=="function"?setTimeout:void 0,UT=typeof clearTimeout=="function"?clearTimeout:void 0,Xg=typeof Promise=="function"?Promise:void 0,FT=typeof queueMicrotask=="function"?queueMicrotask:typeof Xg<"u"?function(r){return Xg.resolve(null).then(r).catch(jT)}:bd;function jT(r){setTimeout(function(){throw r})}function Nd(r,o){var l=o,h=0;do{var p=l.nextSibling;if(r.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){r.removeChild(p),Tr(o);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);Tr(o)}function to(r){for(;r!=null;r=r.nextSibling){var o=r.nodeType;if(o===1||o===3)break;if(o===8){if(o=r.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return r}function Jg(r){r=r.previousSibling;for(var o=0;r;){if(r.nodeType===8){var l=r.data;if(l==="$"||l==="$!"||l==="$?"){if(o===0)return r;o--}else l==="/$"&&o++}r=r.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),Gr="__reactFiber$"+Qs,cl="__reactProps$"+Qs,yi="__reactContainer$"+Qs,Dd="__reactEvents$"+Qs,BT="__reactListeners$"+Qs,zT="__reactHandles$"+Qs;function Go(r){var o=r[Gr];if(o)return o;for(var l=r.parentNode;l;){if(o=l[yi]||l[Gr]){if(l=o.alternate,o.child!==null||l!==null&&l.child!==null)for(r=Jg(r);r!==null;){if(l=r[Gr])return l;r=Jg(r)}return o}r=l,l=r.parentNode}return null}function hl(r){return r=r[Gr]||r[yi],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function Ys(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function nc(r){return r[cl]||null}var Od=[],Xs=-1;function no(r){return{current:r}}function wt(r){0>Xs||(r.current=Od[Xs],Od[Xs]=null,Xs--)}function yt(r,o){Xs++,Od[Xs]=r.current,r.current=o}var ro={},mn=no(ro),On=no(!1),Qo=ro;function Js(r,o){var l=r.type.contextTypes;if(!l)return ro;var h=r.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===o)return h.__reactInternalMemoizedMaskedChildContext;var p={},y;for(y in l)p[y]=o[y];return h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=o,r.__reactInternalMemoizedMaskedChildContext=p),p}function Ln(r){return r=r.childContextTypes,r!=null}function rc(){wt(On),wt(mn)}function Zg(r,o,l){if(mn.current!==ro)throw Error(t(168));yt(mn,o),yt(On,l)}function ey(r,o,l){var h=r.stateNode;if(o=o.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in o))throw Error(t(108,je(r)||"Unknown",p));return ce({},l,h)}function ic(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||ro,Qo=mn.current,yt(mn,r),yt(On,On.current),!0}function ty(r,o,l){var h=r.stateNode;if(!h)throw Error(t(169));l?(r=ey(r,o,Qo),h.__reactInternalMemoizedMergedChildContext=r,wt(On),wt(mn),yt(mn,r)):wt(On),yt(On,l)}var _i=null,oc=!1,Ld=!1;function ny(r){_i===null?_i=[r]:_i.push(r)}function $T(r){oc=!0,ny(r)}function io(){if(!Ld&&_i!==null){Ld=!0;var r=0,o=He;try{var l=_i;for(He=1;r<l.length;r++){var h=l[r];do h=h(!0);while(h!==null)}_i=null,oc=!1}catch(p){throw _i!==null&&(_i=_i.slice(r+1)),bs(jo,io),p}finally{He=o,Ld=!1}}return null}var Zs=[],ea=0,sc=null,ac=0,lr=[],ur=0,Yo=null,vi=1,wi="";function Xo(r,o){Zs[ea++]=ac,Zs[ea++]=sc,sc=r,ac=o}function ry(r,o,l){lr[ur++]=vi,lr[ur++]=wi,lr[ur++]=Yo,Yo=r;var h=vi;r=wi;var p=32-An(h)-1;h&=~(1<<p),l+=1;var y=32-An(o)+p;if(30<y){var w=p-p%5;y=(h&(1<<w)-1).toString(32),h>>=w,p-=w,vi=1<<32-An(o)+p|l<<p|h,wi=y+r}else vi=1<<y|l<<p|h,wi=r}function Md(r){r.return!==null&&(Xo(r,1),ry(r,1,0))}function Vd(r){for(;r===sc;)sc=Zs[--ea],Zs[ea]=null,ac=Zs[--ea],Zs[ea]=null;for(;r===Yo;)Yo=lr[--ur],lr[ur]=null,wi=lr[--ur],lr[ur]=null,vi=lr[--ur],lr[ur]=null}var Qn=null,Yn=null,Rt=!1,Rr=null;function iy(r,o){var l=fr(5,null,null,0);l.elementType="DELETED",l.stateNode=o,l.return=r,o=r.deletions,o===null?(r.deletions=[l],r.flags|=16):o.push(l)}function oy(r,o){switch(r.tag){case 5:var l=r.type;return o=o.nodeType!==1||l.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(r.stateNode=o,Qn=r,Yn=to(o.firstChild),!0):!1;case 6:return o=r.pendingProps===""||o.nodeType!==3?null:o,o!==null?(r.stateNode=o,Qn=r,Yn=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(l=Yo!==null?{id:vi,overflow:wi}:null,r.memoizedState={dehydrated:o,treeContext:l,retryLane:1073741824},l=fr(18,null,null,0),l.stateNode=o,l.return=r,r.child=l,Qn=r,Yn=null,!0):!1;default:return!1}}function Ud(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Fd(r){if(Rt){var o=Yn;if(o){var l=o;if(!oy(r,o)){if(Ud(r))throw Error(t(418));o=to(l.nextSibling);var h=Qn;o&&oy(r,o)?iy(h,l):(r.flags=r.flags&-4097|2,Rt=!1,Qn=r)}}else{if(Ud(r))throw Error(t(418));r.flags=r.flags&-4097|2,Rt=!1,Qn=r}}}function sy(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;Qn=r}function lc(r){if(r!==Qn)return!1;if(!Rt)return sy(r),Rt=!0,!1;var o;if((o=r.tag!==3)&&!(o=r.tag!==5)&&(o=r.type,o=o!=="head"&&o!=="body"&&!xd(r.type,r.memoizedProps)),o&&(o=Yn)){if(Ud(r))throw ay(),Error(t(418));for(;o;)iy(r,o),o=to(o.nextSibling)}if(sy(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,o=0;r;){if(r.nodeType===8){var l=r.data;if(l==="/$"){if(o===0){Yn=to(r.nextSibling);break e}o--}else l!=="$"&&l!=="$!"&&l!=="$?"||o++}r=r.nextSibling}Yn=null}}else Yn=Qn?to(r.stateNode.nextSibling):null;return!0}function ay(){for(var r=Yn;r;)r=to(r.nextSibling)}function ta(){Yn=Qn=null,Rt=!1}function jd(r){Rr===null?Rr=[r]:Rr.push(r)}var qT=x.ReactCurrentBatchConfig;function dl(r,o,l){if(r=l.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,r));var p=h,y=""+r;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===y?o.ref:(o=function(w){var C=p.refs;w===null?delete C[y]:C[y]=w},o._stringRef=y,o)}if(typeof r!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,r))}return r}function uc(r,o){throw r=Object.prototype.toString.call(o),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":r))}function ly(r){var o=r._init;return o(r._payload)}function uy(r){function o(z,U){if(r){var $=z.deletions;$===null?(z.deletions=[U],z.flags|=16):$.push(U)}}function l(z,U){if(!r)return null;for(;U!==null;)o(z,U),U=U.sibling;return null}function h(z,U){for(z=new Map;U!==null;)U.key!==null?z.set(U.key,U):z.set(U.index,U),U=U.sibling;return z}function p(z,U){return z=fo(z,U),z.index=0,z.sibling=null,z}function y(z,U,$){return z.index=$,r?($=z.alternate,$!==null?($=$.index,$<U?(z.flags|=2,U):$):(z.flags|=2,U)):(z.flags|=1048576,U)}function w(z){return r&&z.alternate===null&&(z.flags|=2),z}function C(z,U,$,le){return U===null||U.tag!==6?(U=Nf($,z.mode,le),U.return=z,U):(U=p(U,$),U.return=z,U)}function O(z,U,$,le){var Ie=$.type;return Ie===R?re(z,U,$.props.children,le,$.key):U!==null&&(U.elementType===Ie||typeof Ie=="object"&&Ie!==null&&Ie.$$typeof===Xe&&ly(Ie)===U.type)?(le=p(U,$.props),le.ref=dl(z,U,$),le.return=z,le):(le=Dc($.type,$.key,$.props,null,z.mode,le),le.ref=dl(z,U,$),le.return=z,le)}function W(z,U,$,le){return U===null||U.tag!==4||U.stateNode.containerInfo!==$.containerInfo||U.stateNode.implementation!==$.implementation?(U=Df($,z.mode,le),U.return=z,U):(U=p(U,$.children||[]),U.return=z,U)}function re(z,U,$,le,Ie){return U===null||U.tag!==7?(U=os($,z.mode,le,Ie),U.return=z,U):(U=p(U,$),U.return=z,U)}function ae(z,U,$){if(typeof U=="string"&&U!==""||typeof U=="number")return U=Nf(""+U,z.mode,$),U.return=z,U;if(typeof U=="object"&&U!==null){switch(U.$$typeof){case ee:return $=Dc(U.type,U.key,U.props,null,z.mode,$),$.ref=dl(z,null,U),$.return=z,$;case oe:return U=Df(U,z.mode,$),U.return=z,U;case Xe:var le=U._init;return ae(z,le(U._payload),$)}if(Qt(U)||me(U))return U=os(U,z.mode,$,null),U.return=z,U;uc(z,U)}return null}function ne(z,U,$,le){var Ie=U!==null?U.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return Ie!==null?null:C(z,U,""+$,le);if(typeof $=="object"&&$!==null){switch($.$$typeof){case ee:return $.key===Ie?O(z,U,$,le):null;case oe:return $.key===Ie?W(z,U,$,le):null;case Xe:return Ie=$._init,ne(z,U,Ie($._payload),le)}if(Qt($)||me($))return Ie!==null?null:re(z,U,$,le,null);uc(z,$)}return null}function de(z,U,$,le,Ie){if(typeof le=="string"&&le!==""||typeof le=="number")return z=z.get($)||null,C(U,z,""+le,Ie);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case ee:return z=z.get(le.key===null?$:le.key)||null,O(U,z,le,Ie);case oe:return z=z.get(le.key===null?$:le.key)||null,W(U,z,le,Ie);case Xe:var Ae=le._init;return de(z,U,$,Ae(le._payload),Ie)}if(Qt(le)||me(le))return z=z.get($)||null,re(U,z,le,Ie,null);uc(U,le)}return null}function _e(z,U,$,le){for(var Ie=null,Ae=null,ke=U,Oe=U=0,en=null;ke!==null&&Oe<$.length;Oe++){ke.index>Oe?(en=ke,ke=null):en=ke.sibling;var nt=ne(z,ke,$[Oe],le);if(nt===null){ke===null&&(ke=en);break}r&&ke&&nt.alternate===null&&o(z,ke),U=y(nt,U,Oe),Ae===null?Ie=nt:Ae.sibling=nt,Ae=nt,ke=en}if(Oe===$.length)return l(z,ke),Rt&&Xo(z,Oe),Ie;if(ke===null){for(;Oe<$.length;Oe++)ke=ae(z,$[Oe],le),ke!==null&&(U=y(ke,U,Oe),Ae===null?Ie=ke:Ae.sibling=ke,Ae=ke);return Rt&&Xo(z,Oe),Ie}for(ke=h(z,ke);Oe<$.length;Oe++)en=de(ke,z,Oe,$[Oe],le),en!==null&&(r&&en.alternate!==null&&ke.delete(en.key===null?Oe:en.key),U=y(en,U,Oe),Ae===null?Ie=en:Ae.sibling=en,Ae=en);return r&&ke.forEach(function(po){return o(z,po)}),Rt&&Xo(z,Oe),Ie}function Ee(z,U,$,le){var Ie=me($);if(typeof Ie!="function")throw Error(t(150));if($=Ie.call($),$==null)throw Error(t(151));for(var Ae=Ie=null,ke=U,Oe=U=0,en=null,nt=$.next();ke!==null&&!nt.done;Oe++,nt=$.next()){ke.index>Oe?(en=ke,ke=null):en=ke.sibling;var po=ne(z,ke,nt.value,le);if(po===null){ke===null&&(ke=en);break}r&&ke&&po.alternate===null&&o(z,ke),U=y(po,U,Oe),Ae===null?Ie=po:Ae.sibling=po,Ae=po,ke=en}if(nt.done)return l(z,ke),Rt&&Xo(z,Oe),Ie;if(ke===null){for(;!nt.done;Oe++,nt=$.next())nt=ae(z,nt.value,le),nt!==null&&(U=y(nt,U,Oe),Ae===null?Ie=nt:Ae.sibling=nt,Ae=nt);return Rt&&Xo(z,Oe),Ie}for(ke=h(z,ke);!nt.done;Oe++,nt=$.next())nt=de(ke,z,Oe,nt.value,le),nt!==null&&(r&&nt.alternate!==null&&ke.delete(nt.key===null?Oe:nt.key),U=y(nt,U,Oe),Ae===null?Ie=nt:Ae.sibling=nt,Ae=nt);return r&&ke.forEach(function(II){return o(z,II)}),Rt&&Xo(z,Oe),Ie}function Mt(z,U,$,le){if(typeof $=="object"&&$!==null&&$.type===R&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case ee:e:{for(var Ie=$.key,Ae=U;Ae!==null;){if(Ae.key===Ie){if(Ie=$.type,Ie===R){if(Ae.tag===7){l(z,Ae.sibling),U=p(Ae,$.props.children),U.return=z,z=U;break e}}else if(Ae.elementType===Ie||typeof Ie=="object"&&Ie!==null&&Ie.$$typeof===Xe&&ly(Ie)===Ae.type){l(z,Ae.sibling),U=p(Ae,$.props),U.ref=dl(z,Ae,$),U.return=z,z=U;break e}l(z,Ae);break}else o(z,Ae);Ae=Ae.sibling}$.type===R?(U=os($.props.children,z.mode,le,$.key),U.return=z,z=U):(le=Dc($.type,$.key,$.props,null,z.mode,le),le.ref=dl(z,U,$),le.return=z,z=le)}return w(z);case oe:e:{for(Ae=$.key;U!==null;){if(U.key===Ae)if(U.tag===4&&U.stateNode.containerInfo===$.containerInfo&&U.stateNode.implementation===$.implementation){l(z,U.sibling),U=p(U,$.children||[]),U.return=z,z=U;break e}else{l(z,U);break}else o(z,U);U=U.sibling}U=Df($,z.mode,le),U.return=z,z=U}return w(z);case Xe:return Ae=$._init,Mt(z,U,Ae($._payload),le)}if(Qt($))return _e(z,U,$,le);if(me($))return Ee(z,U,$,le);uc(z,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,U!==null&&U.tag===6?(l(z,U.sibling),U=p(U,$),U.return=z,z=U):(l(z,U),U=Nf($,z.mode,le),U.return=z,z=U),w(z)):l(z,U)}return Mt}var na=uy(!0),cy=uy(!1),cc=no(null),hc=null,ra=null,Bd=null;function zd(){Bd=ra=hc=null}function $d(r){var o=cc.current;wt(cc),r._currentValue=o}function qd(r,o,l){for(;r!==null;){var h=r.alternate;if((r.childLanes&o)!==o?(r.childLanes|=o,h!==null&&(h.childLanes|=o)):h!==null&&(h.childLanes&o)!==o&&(h.childLanes|=o),r===l)break;r=r.return}}function ia(r,o){hc=r,Bd=ra=null,r=r.dependencies,r!==null&&r.firstContext!==null&&(r.lanes&o&&(Mn=!0),r.firstContext=null)}function cr(r){var o=r._currentValue;if(Bd!==r)if(r={context:r,memoizedValue:o,next:null},ra===null){if(hc===null)throw Error(t(308));ra=r,hc.dependencies={lanes:0,firstContext:r}}else ra=ra.next=r;return o}var Jo=null;function Wd(r){Jo===null?Jo=[r]:Jo.push(r)}function hy(r,o,l,h){var p=o.interleaved;return p===null?(l.next=l,Wd(o)):(l.next=p.next,p.next=l),o.interleaved=l,Ei(r,h)}function Ei(r,o){r.lanes|=o;var l=r.alternate;for(l!==null&&(l.lanes|=o),l=r,r=r.return;r!==null;)r.childLanes|=o,l=r.alternate,l!==null&&(l.childLanes|=o),l=r,r=r.return;return l.tag===3?l.stateNode:null}var oo=!1;function Hd(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dy(r,o){r=r.updateQueue,o.updateQueue===r&&(o.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Ti(r,o){return{eventTime:r,lane:o,tag:0,payload:null,callback:null,next:null}}function so(r,o,l){var h=r.updateQueue;if(h===null)return null;if(h=h.shared,et&2){var p=h.pending;return p===null?o.next=o:(o.next=p.next,p.next=o),h.pending=o,Ei(r,l)}return p=h.interleaved,p===null?(o.next=o,Wd(h)):(o.next=p.next,p.next=o),h.interleaved=o,Ei(r,l)}function dc(r,o,l){if(o=o.updateQueue,o!==null&&(o=o.shared,(l&4194240)!==0)){var h=o.lanes;h&=r.pendingLanes,l|=h,o.lanes=l,Qi(r,l)}}function fy(r,o){var l=r.updateQueue,h=r.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,y=null;if(l=l.firstBaseUpdate,l!==null){do{var w={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};y===null?p=y=w:y=y.next=w,l=l.next}while(l!==null);y===null?p=y=o:y=y.next=o}else p=y=o;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:y,shared:h.shared,effects:h.effects},r.updateQueue=l;return}r=l.lastBaseUpdate,r===null?l.firstBaseUpdate=o:r.next=o,l.lastBaseUpdate=o}function fc(r,o,l,h){var p=r.updateQueue;oo=!1;var y=p.firstBaseUpdate,w=p.lastBaseUpdate,C=p.shared.pending;if(C!==null){p.shared.pending=null;var O=C,W=O.next;O.next=null,w===null?y=W:w.next=W,w=O;var re=r.alternate;re!==null&&(re=re.updateQueue,C=re.lastBaseUpdate,C!==w&&(C===null?re.firstBaseUpdate=W:C.next=W,re.lastBaseUpdate=O))}if(y!==null){var ae=p.baseState;w=0,re=W=O=null,C=y;do{var ne=C.lane,de=C.eventTime;if((h&ne)===ne){re!==null&&(re=re.next={eventTime:de,lane:0,tag:C.tag,payload:C.payload,callback:C.callback,next:null});e:{var _e=r,Ee=C;switch(ne=o,de=l,Ee.tag){case 1:if(_e=Ee.payload,typeof _e=="function"){ae=_e.call(de,ae,ne);break e}ae=_e;break e;case 3:_e.flags=_e.flags&-65537|128;case 0:if(_e=Ee.payload,ne=typeof _e=="function"?_e.call(de,ae,ne):_e,ne==null)break e;ae=ce({},ae,ne);break e;case 2:oo=!0}}C.callback!==null&&C.lane!==0&&(r.flags|=64,ne=p.effects,ne===null?p.effects=[C]:ne.push(C))}else de={eventTime:de,lane:ne,tag:C.tag,payload:C.payload,callback:C.callback,next:null},re===null?(W=re=de,O=ae):re=re.next=de,w|=ne;if(C=C.next,C===null){if(C=p.shared.pending,C===null)break;ne=C,C=ne.next,ne.next=null,p.lastBaseUpdate=ne,p.shared.pending=null}}while(!0);if(re===null&&(O=ae),p.baseState=O,p.firstBaseUpdate=W,p.lastBaseUpdate=re,o=p.shared.interleaved,o!==null){p=o;do w|=p.lane,p=p.next;while(p!==o)}else y===null&&(p.shared.lanes=0);ts|=w,r.lanes=w,r.memoizedState=ae}}function py(r,o,l){if(r=o.effects,o.effects=null,r!==null)for(o=0;o<r.length;o++){var h=r[o],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(t(191,p));p.call(h)}}}var fl={},Qr=no(fl),pl=no(fl),ml=no(fl);function Zo(r){if(r===fl)throw Error(t(174));return r}function Kd(r,o){switch(yt(ml,o),yt(pl,r),yt(Qr,fl),r=o.nodeType,r){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:bt(null,"");break;default:r=r===8?o.parentNode:o,o=r.namespaceURI||null,r=r.tagName,o=bt(o,r)}wt(Qr),yt(Qr,o)}function oa(){wt(Qr),wt(pl),wt(ml)}function my(r){Zo(ml.current);var o=Zo(Qr.current),l=bt(o,r.type);o!==l&&(yt(pl,r),yt(Qr,l))}function Gd(r){pl.current===r&&(wt(Qr),wt(pl))}var Ct=no(0);function pc(r){for(var o=r;o!==null;){if(o.tag===13){var l=o.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if(o.flags&128)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var Qd=[];function Yd(){for(var r=0;r<Qd.length;r++)Qd[r]._workInProgressVersionPrimary=null;Qd.length=0}var mc=x.ReactCurrentDispatcher,Xd=x.ReactCurrentBatchConfig,es=0,Pt=null,qt=null,Jt=null,gc=!1,gl=!1,yl=0,WT=0;function gn(){throw Error(t(321))}function Jd(r,o){if(o===null)return!1;for(var l=0;l<o.length&&l<r.length;l++)if(!Sr(r[l],o[l]))return!1;return!0}function Zd(r,o,l,h,p,y){if(es=y,Pt=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,mc.current=r===null||r.memoizedState===null?QT:YT,r=l(h,p),gl){y=0;do{if(gl=!1,yl=0,25<=y)throw Error(t(301));y+=1,Jt=qt=null,o.updateQueue=null,mc.current=XT,r=l(h,p)}while(gl)}if(mc.current=vc,o=qt!==null&&qt.next!==null,es=0,Jt=qt=Pt=null,gc=!1,o)throw Error(t(300));return r}function ef(){var r=yl!==0;return yl=0,r}function Yr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?Pt.memoizedState=Jt=r:Jt=Jt.next=r,Jt}function hr(){if(qt===null){var r=Pt.alternate;r=r!==null?r.memoizedState:null}else r=qt.next;var o=Jt===null?Pt.memoizedState:Jt.next;if(o!==null)Jt=o,qt=r;else{if(r===null)throw Error(t(310));qt=r,r={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},Jt===null?Pt.memoizedState=Jt=r:Jt=Jt.next=r}return Jt}function _l(r,o){return typeof o=="function"?o(r):o}function tf(r){var o=hr(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var h=qt,p=h.baseQueue,y=l.pending;if(y!==null){if(p!==null){var w=p.next;p.next=y.next,y.next=w}h.baseQueue=p=y,l.pending=null}if(p!==null){y=p.next,h=h.baseState;var C=w=null,O=null,W=y;do{var re=W.lane;if((es&re)===re)O!==null&&(O=O.next={lane:0,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),h=W.hasEagerState?W.eagerState:r(h,W.action);else{var ae={lane:re,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null};O===null?(C=O=ae,w=h):O=O.next=ae,Pt.lanes|=re,ts|=re}W=W.next}while(W!==null&&W!==y);O===null?w=h:O.next=C,Sr(h,o.memoizedState)||(Mn=!0),o.memoizedState=h,o.baseState=w,o.baseQueue=O,l.lastRenderedState=h}if(r=l.interleaved,r!==null){p=r;do y=p.lane,Pt.lanes|=y,ts|=y,p=p.next;while(p!==r)}else p===null&&(l.lanes=0);return[o.memoizedState,l.dispatch]}function nf(r){var o=hr(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var h=l.dispatch,p=l.pending,y=o.memoizedState;if(p!==null){l.pending=null;var w=p=p.next;do y=r(y,w.action),w=w.next;while(w!==p);Sr(y,o.memoizedState)||(Mn=!0),o.memoizedState=y,o.baseQueue===null&&(o.baseState=y),l.lastRenderedState=y}return[y,h]}function gy(){}function yy(r,o){var l=Pt,h=hr(),p=o(),y=!Sr(h.memoizedState,p);if(y&&(h.memoizedState=p,Mn=!0),h=h.queue,rf(wy.bind(null,l,h,r),[r]),h.getSnapshot!==o||y||Jt!==null&&Jt.memoizedState.tag&1){if(l.flags|=2048,vl(9,vy.bind(null,l,h,p,o),void 0,null),Zt===null)throw Error(t(349));es&30||_y(l,o,p)}return p}function _y(r,o,l){r.flags|=16384,r={getSnapshot:o,value:l},o=Pt.updateQueue,o===null?(o={lastEffect:null,stores:null},Pt.updateQueue=o,o.stores=[r]):(l=o.stores,l===null?o.stores=[r]:l.push(r))}function vy(r,o,l,h){o.value=l,o.getSnapshot=h,Ey(o)&&Ty(r)}function wy(r,o,l){return l(function(){Ey(o)&&Ty(r)})}function Ey(r){var o=r.getSnapshot;r=r.value;try{var l=o();return!Sr(r,l)}catch{return!0}}function Ty(r){var o=Ei(r,1);o!==null&&Pr(o,r,1,-1)}function Iy(r){var o=Yr();return typeof r=="function"&&(r=r()),o.memoizedState=o.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_l,lastRenderedState:r},o.queue=r,r=r.dispatch=GT.bind(null,Pt,r),[o.memoizedState,r]}function vl(r,o,l,h){return r={tag:r,create:o,destroy:l,deps:h,next:null},o=Pt.updateQueue,o===null?(o={lastEffect:null,stores:null},Pt.updateQueue=o,o.lastEffect=r.next=r):(l=o.lastEffect,l===null?o.lastEffect=r.next=r:(h=l.next,l.next=r,r.next=h,o.lastEffect=r)),r}function Sy(){return hr().memoizedState}function yc(r,o,l,h){var p=Yr();Pt.flags|=r,p.memoizedState=vl(1|o,l,void 0,h===void 0?null:h)}function _c(r,o,l,h){var p=hr();h=h===void 0?null:h;var y=void 0;if(qt!==null){var w=qt.memoizedState;if(y=w.destroy,h!==null&&Jd(h,w.deps)){p.memoizedState=vl(o,l,y,h);return}}Pt.flags|=r,p.memoizedState=vl(1|o,l,y,h)}function Ry(r,o){return yc(8390656,8,r,o)}function rf(r,o){return _c(2048,8,r,o)}function Ay(r,o){return _c(4,2,r,o)}function ky(r,o){return _c(4,4,r,o)}function Cy(r,o){if(typeof o=="function")return r=r(),o(r),function(){o(null)};if(o!=null)return r=r(),o.current=r,function(){o.current=null}}function Py(r,o,l){return l=l!=null?l.concat([r]):null,_c(4,4,Cy.bind(null,o,r),l)}function of(){}function xy(r,o){var l=hr();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&Jd(o,h[1])?h[0]:(l.memoizedState=[r,o],r)}function by(r,o){var l=hr();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&Jd(o,h[1])?h[0]:(r=r(),l.memoizedState=[r,o],r)}function Ny(r,o,l){return es&21?(Sr(l,o)||(l=$o(),Pt.lanes|=l,ts|=l,r.baseState=!0),o):(r.baseState&&(r.baseState=!1,Mn=!0),r.memoizedState=l)}function HT(r,o){var l=He;He=l!==0&&4>l?l:4,r(!0);var h=Xd.transition;Xd.transition={};try{r(!1),o()}finally{He=l,Xd.transition=h}}function Dy(){return hr().memoizedState}function KT(r,o,l){var h=co(r);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},Oy(r))Ly(o,l);else if(l=hy(r,o,l,h),l!==null){var p=Pn();Pr(l,r,h,p),My(l,o,h)}}function GT(r,o,l){var h=co(r),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(Oy(r))Ly(o,p);else{var y=r.alternate;if(r.lanes===0&&(y===null||y.lanes===0)&&(y=o.lastRenderedReducer,y!==null))try{var w=o.lastRenderedState,C=y(w,l);if(p.hasEagerState=!0,p.eagerState=C,Sr(C,w)){var O=o.interleaved;O===null?(p.next=p,Wd(o)):(p.next=O.next,O.next=p),o.interleaved=p;return}}catch{}finally{}l=hy(r,o,p,h),l!==null&&(p=Pn(),Pr(l,r,h,p),My(l,o,h))}}function Oy(r){var o=r.alternate;return r===Pt||o!==null&&o===Pt}function Ly(r,o){gl=gc=!0;var l=r.pending;l===null?o.next=o:(o.next=l.next,l.next=o),r.pending=o}function My(r,o,l){if(l&4194240){var h=o.lanes;h&=r.pendingLanes,l|=h,o.lanes=l,Qi(r,l)}}var vc={readContext:cr,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useInsertionEffect:gn,useLayoutEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useMutableSource:gn,useSyncExternalStore:gn,useId:gn,unstable_isNewReconciler:!1},QT={readContext:cr,useCallback:function(r,o){return Yr().memoizedState=[r,o===void 0?null:o],r},useContext:cr,useEffect:Ry,useImperativeHandle:function(r,o,l){return l=l!=null?l.concat([r]):null,yc(4194308,4,Cy.bind(null,o,r),l)},useLayoutEffect:function(r,o){return yc(4194308,4,r,o)},useInsertionEffect:function(r,o){return yc(4,2,r,o)},useMemo:function(r,o){var l=Yr();return o=o===void 0?null:o,r=r(),l.memoizedState=[r,o],r},useReducer:function(r,o,l){var h=Yr();return o=l!==void 0?l(o):o,h.memoizedState=h.baseState=o,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:o},h.queue=r,r=r.dispatch=KT.bind(null,Pt,r),[h.memoizedState,r]},useRef:function(r){var o=Yr();return r={current:r},o.memoizedState=r},useState:Iy,useDebugValue:of,useDeferredValue:function(r){return Yr().memoizedState=r},useTransition:function(){var r=Iy(!1),o=r[0];return r=HT.bind(null,r[1]),Yr().memoizedState=r,[o,r]},useMutableSource:function(){},useSyncExternalStore:function(r,o,l){var h=Pt,p=Yr();if(Rt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=o(),Zt===null)throw Error(t(349));es&30||_y(h,o,l)}p.memoizedState=l;var y={value:l,getSnapshot:o};return p.queue=y,Ry(wy.bind(null,h,y,r),[r]),h.flags|=2048,vl(9,vy.bind(null,h,y,l,o),void 0,null),l},useId:function(){var r=Yr(),o=Zt.identifierPrefix;if(Rt){var l=wi,h=vi;l=(h&~(1<<32-An(h)-1)).toString(32)+l,o=":"+o+"R"+l,l=yl++,0<l&&(o+="H"+l.toString(32)),o+=":"}else l=WT++,o=":"+o+"r"+l.toString(32)+":";return r.memoizedState=o},unstable_isNewReconciler:!1},YT={readContext:cr,useCallback:xy,useContext:cr,useEffect:rf,useImperativeHandle:Py,useInsertionEffect:Ay,useLayoutEffect:ky,useMemo:by,useReducer:tf,useRef:Sy,useState:function(){return tf(_l)},useDebugValue:of,useDeferredValue:function(r){var o=hr();return Ny(o,qt.memoizedState,r)},useTransition:function(){var r=tf(_l)[0],o=hr().memoizedState;return[r,o]},useMutableSource:gy,useSyncExternalStore:yy,useId:Dy,unstable_isNewReconciler:!1},XT={readContext:cr,useCallback:xy,useContext:cr,useEffect:rf,useImperativeHandle:Py,useInsertionEffect:Ay,useLayoutEffect:ky,useMemo:by,useReducer:nf,useRef:Sy,useState:function(){return nf(_l)},useDebugValue:of,useDeferredValue:function(r){var o=hr();return qt===null?o.memoizedState=r:Ny(o,qt.memoizedState,r)},useTransition:function(){var r=nf(_l)[0],o=hr().memoizedState;return[r,o]},useMutableSource:gy,useSyncExternalStore:yy,useId:Dy,unstable_isNewReconciler:!1};function Ar(r,o){if(r&&r.defaultProps){o=ce({},o),r=r.defaultProps;for(var l in r)o[l]===void 0&&(o[l]=r[l]);return o}return o}function sf(r,o,l,h){o=r.memoizedState,l=l(h,o),l=l==null?o:ce({},o,l),r.memoizedState=l,r.lanes===0&&(r.updateQueue.baseState=l)}var wc={isMounted:function(r){return(r=r._reactInternals)?Rn(r)===r:!1},enqueueSetState:function(r,o,l){r=r._reactInternals;var h=Pn(),p=co(r),y=Ti(h,p);y.payload=o,l!=null&&(y.callback=l),o=so(r,y,p),o!==null&&(Pr(o,r,p,h),dc(o,r,p))},enqueueReplaceState:function(r,o,l){r=r._reactInternals;var h=Pn(),p=co(r),y=Ti(h,p);y.tag=1,y.payload=o,l!=null&&(y.callback=l),o=so(r,y,p),o!==null&&(Pr(o,r,p,h),dc(o,r,p))},enqueueForceUpdate:function(r,o){r=r._reactInternals;var l=Pn(),h=co(r),p=Ti(l,h);p.tag=2,o!=null&&(p.callback=o),o=so(r,p,h),o!==null&&(Pr(o,r,h,l),dc(o,r,h))}};function Vy(r,o,l,h,p,y,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(h,y,w):o.prototype&&o.prototype.isPureReactComponent?!ol(l,h)||!ol(p,y):!0}function Uy(r,o,l){var h=!1,p=ro,y=o.contextType;return typeof y=="object"&&y!==null?y=cr(y):(p=Ln(o)?Qo:mn.current,h=o.contextTypes,y=(h=h!=null)?Js(r,p):ro),o=new o(l,y),r.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=wc,r.stateNode=o,o._reactInternals=r,h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=p,r.__reactInternalMemoizedMaskedChildContext=y),o}function Fy(r,o,l,h){r=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(l,h),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(l,h),o.state!==r&&wc.enqueueReplaceState(o,o.state,null)}function af(r,o,l,h){var p=r.stateNode;p.props=l,p.state=r.memoizedState,p.refs={},Hd(r);var y=o.contextType;typeof y=="object"&&y!==null?p.context=cr(y):(y=Ln(o)?Qo:mn.current,p.context=Js(r,y)),p.state=r.memoizedState,y=o.getDerivedStateFromProps,typeof y=="function"&&(sf(r,o,y,l),p.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(o=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),o!==p.state&&wc.enqueueReplaceState(p,p.state,null),fc(r,l,p,h),p.state=r.memoizedState),typeof p.componentDidMount=="function"&&(r.flags|=4194308)}function sa(r,o){try{var l="",h=o;do l+=be(h),h=h.return;while(h);var p=l}catch(y){p=`
Error generating stack: `+y.message+`
`+y.stack}return{value:r,source:o,stack:p,digest:null}}function lf(r,o,l){return{value:r,source:null,stack:l??null,digest:o??null}}function uf(r,o){try{console.error(o.value)}catch(l){setTimeout(function(){throw l})}}var JT=typeof WeakMap=="function"?WeakMap:Map;function jy(r,o,l){l=Ti(-1,l),l.tag=3,l.payload={element:null};var h=o.value;return l.callback=function(){kc||(kc=!0,Sf=h),uf(r,o)},l}function By(r,o,l){l=Ti(-1,l),l.tag=3;var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var p=o.value;l.payload=function(){return h(p)},l.callback=function(){uf(r,o)}}var y=r.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(l.callback=function(){uf(r,o),typeof h!="function"&&(lo===null?lo=new Set([this]):lo.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})}),l}function zy(r,o,l){var h=r.pingCache;if(h===null){h=r.pingCache=new JT;var p=new Set;h.set(o,p)}else p=h.get(o),p===void 0&&(p=new Set,h.set(o,p));p.has(l)||(p.add(l),r=dI.bind(null,r,o,l),o.then(r,r))}function $y(r){do{var o;if((o=r.tag===13)&&(o=r.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return r;r=r.return}while(r!==null);return null}function qy(r,o,l,h,p){return r.mode&1?(r.flags|=65536,r.lanes=p,r):(r===o?r.flags|=65536:(r.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(o=Ti(-1,1),o.tag=2,so(l,o,1))),l.lanes|=1),r)}var ZT=x.ReactCurrentOwner,Mn=!1;function Cn(r,o,l,h){o.child=r===null?cy(o,null,l,h):na(o,r.child,l,h)}function Wy(r,o,l,h,p){l=l.render;var y=o.ref;return ia(o,p),h=Zd(r,o,l,h,y,p),l=ef(),r!==null&&!Mn?(o.updateQueue=r.updateQueue,o.flags&=-2053,r.lanes&=~p,Ii(r,o,p)):(Rt&&l&&Md(o),o.flags|=1,Cn(r,o,h,p),o.child)}function Hy(r,o,l,h,p){if(r===null){var y=l.type;return typeof y=="function"&&!bf(y)&&y.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(o.tag=15,o.type=y,Ky(r,o,y,h,p)):(r=Dc(l.type,null,h,o,o.mode,p),r.ref=o.ref,r.return=o,o.child=r)}if(y=r.child,!(r.lanes&p)){var w=y.memoizedProps;if(l=l.compare,l=l!==null?l:ol,l(w,h)&&r.ref===o.ref)return Ii(r,o,p)}return o.flags|=1,r=fo(y,h),r.ref=o.ref,r.return=o,o.child=r}function Ky(r,o,l,h,p){if(r!==null){var y=r.memoizedProps;if(ol(y,h)&&r.ref===o.ref)if(Mn=!1,o.pendingProps=h=y,(r.lanes&p)!==0)r.flags&131072&&(Mn=!0);else return o.lanes=r.lanes,Ii(r,o,p)}return cf(r,o,l,h,p)}function Gy(r,o,l){var h=o.pendingProps,p=h.children,y=r!==null?r.memoizedState:null;if(h.mode==="hidden")if(!(o.mode&1))o.memoizedState={baseLanes:0,cachePool:null,transitions:null},yt(la,Xn),Xn|=l;else{if(!(l&1073741824))return r=y!==null?y.baseLanes|l:l,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:r,cachePool:null,transitions:null},o.updateQueue=null,yt(la,Xn),Xn|=r,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=y!==null?y.baseLanes:l,yt(la,Xn),Xn|=h}else y!==null?(h=y.baseLanes|l,o.memoizedState=null):h=l,yt(la,Xn),Xn|=h;return Cn(r,o,p,l),o.child}function Qy(r,o){var l=o.ref;(r===null&&l!==null||r!==null&&r.ref!==l)&&(o.flags|=512,o.flags|=2097152)}function cf(r,o,l,h,p){var y=Ln(l)?Qo:mn.current;return y=Js(o,y),ia(o,p),l=Zd(r,o,l,h,y,p),h=ef(),r!==null&&!Mn?(o.updateQueue=r.updateQueue,o.flags&=-2053,r.lanes&=~p,Ii(r,o,p)):(Rt&&h&&Md(o),o.flags|=1,Cn(r,o,l,p),o.child)}function Yy(r,o,l,h,p){if(Ln(l)){var y=!0;ic(o)}else y=!1;if(ia(o,p),o.stateNode===null)Tc(r,o),Uy(o,l,h),af(o,l,h,p),h=!0;else if(r===null){var w=o.stateNode,C=o.memoizedProps;w.props=C;var O=w.context,W=l.contextType;typeof W=="object"&&W!==null?W=cr(W):(W=Ln(l)?Qo:mn.current,W=Js(o,W));var re=l.getDerivedStateFromProps,ae=typeof re=="function"||typeof w.getSnapshotBeforeUpdate=="function";ae||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(C!==h||O!==W)&&Fy(o,w,h,W),oo=!1;var ne=o.memoizedState;w.state=ne,fc(o,h,w,p),O=o.memoizedState,C!==h||ne!==O||On.current||oo?(typeof re=="function"&&(sf(o,l,re,h),O=o.memoizedState),(C=oo||Vy(o,l,C,h,ne,O,W))?(ae||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(o.flags|=4194308)):(typeof w.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=h,o.memoizedState=O),w.props=h,w.state=O,w.context=W,h=C):(typeof w.componentDidMount=="function"&&(o.flags|=4194308),h=!1)}else{w=o.stateNode,dy(r,o),C=o.memoizedProps,W=o.type===o.elementType?C:Ar(o.type,C),w.props=W,ae=o.pendingProps,ne=w.context,O=l.contextType,typeof O=="object"&&O!==null?O=cr(O):(O=Ln(l)?Qo:mn.current,O=Js(o,O));var de=l.getDerivedStateFromProps;(re=typeof de=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(C!==ae||ne!==O)&&Fy(o,w,h,O),oo=!1,ne=o.memoizedState,w.state=ne,fc(o,h,w,p);var _e=o.memoizedState;C!==ae||ne!==_e||On.current||oo?(typeof de=="function"&&(sf(o,l,de,h),_e=o.memoizedState),(W=oo||Vy(o,l,W,h,ne,_e,O)||!1)?(re||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(h,_e,O),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(h,_e,O)),typeof w.componentDidUpdate=="function"&&(o.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof w.componentDidUpdate!="function"||C===r.memoizedProps&&ne===r.memoizedState||(o.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||C===r.memoizedProps&&ne===r.memoizedState||(o.flags|=1024),o.memoizedProps=h,o.memoizedState=_e),w.props=h,w.state=_e,w.context=O,h=W):(typeof w.componentDidUpdate!="function"||C===r.memoizedProps&&ne===r.memoizedState||(o.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||C===r.memoizedProps&&ne===r.memoizedState||(o.flags|=1024),h=!1)}return hf(r,o,l,h,y,p)}function hf(r,o,l,h,p,y){Qy(r,o);var w=(o.flags&128)!==0;if(!h&&!w)return p&&ty(o,l,!1),Ii(r,o,y);h=o.stateNode,ZT.current=o;var C=w&&typeof l.getDerivedStateFromError!="function"?null:h.render();return o.flags|=1,r!==null&&w?(o.child=na(o,r.child,null,y),o.child=na(o,null,C,y)):Cn(r,o,C,y),o.memoizedState=h.state,p&&ty(o,l,!0),o.child}function Xy(r){var o=r.stateNode;o.pendingContext?Zg(r,o.pendingContext,o.pendingContext!==o.context):o.context&&Zg(r,o.context,!1),Kd(r,o.containerInfo)}function Jy(r,o,l,h,p){return ta(),jd(p),o.flags|=256,Cn(r,o,l,h),o.child}var df={dehydrated:null,treeContext:null,retryLane:0};function ff(r){return{baseLanes:r,cachePool:null,transitions:null}}function Zy(r,o,l){var h=o.pendingProps,p=Ct.current,y=!1,w=(o.flags&128)!==0,C;if((C=w)||(C=r!==null&&r.memoizedState===null?!1:(p&2)!==0),C?(y=!0,o.flags&=-129):(r===null||r.memoizedState!==null)&&(p|=1),yt(Ct,p&1),r===null)return Fd(o),r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?(o.mode&1?r.data==="$!"?o.lanes=8:o.lanes=1073741824:o.lanes=1,null):(w=h.children,r=h.fallback,y?(h=o.mode,y=o.child,w={mode:"hidden",children:w},!(h&1)&&y!==null?(y.childLanes=0,y.pendingProps=w):y=Oc(w,h,0,null),r=os(r,h,l,null),y.return=o,r.return=o,y.sibling=r,o.child=y,o.child.memoizedState=ff(l),o.memoizedState=df,r):pf(o,w));if(p=r.memoizedState,p!==null&&(C=p.dehydrated,C!==null))return eI(r,o,w,h,C,p,l);if(y){y=h.fallback,w=o.mode,p=r.child,C=p.sibling;var O={mode:"hidden",children:h.children};return!(w&1)&&o.child!==p?(h=o.child,h.childLanes=0,h.pendingProps=O,o.deletions=null):(h=fo(p,O),h.subtreeFlags=p.subtreeFlags&14680064),C!==null?y=fo(C,y):(y=os(y,w,l,null),y.flags|=2),y.return=o,h.return=o,h.sibling=y,o.child=h,h=y,y=o.child,w=r.child.memoizedState,w=w===null?ff(l):{baseLanes:w.baseLanes|l,cachePool:null,transitions:w.transitions},y.memoizedState=w,y.childLanes=r.childLanes&~l,o.memoizedState=df,h}return y=r.child,r=y.sibling,h=fo(y,{mode:"visible",children:h.children}),!(o.mode&1)&&(h.lanes=l),h.return=o,h.sibling=null,r!==null&&(l=o.deletions,l===null?(o.deletions=[r],o.flags|=16):l.push(r)),o.child=h,o.memoizedState=null,h}function pf(r,o){return o=Oc({mode:"visible",children:o},r.mode,0,null),o.return=r,r.child=o}function Ec(r,o,l,h){return h!==null&&jd(h),na(o,r.child,null,l),r=pf(o,o.pendingProps.children),r.flags|=2,o.memoizedState=null,r}function eI(r,o,l,h,p,y,w){if(l)return o.flags&256?(o.flags&=-257,h=lf(Error(t(422))),Ec(r,o,w,h)):o.memoizedState!==null?(o.child=r.child,o.flags|=128,null):(y=h.fallback,p=o.mode,h=Oc({mode:"visible",children:h.children},p,0,null),y=os(y,p,w,null),y.flags|=2,h.return=o,y.return=o,h.sibling=y,o.child=h,o.mode&1&&na(o,r.child,null,w),o.child.memoizedState=ff(w),o.memoizedState=df,y);if(!(o.mode&1))return Ec(r,o,w,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var C=h.dgst;return h=C,y=Error(t(419)),h=lf(y,h,void 0),Ec(r,o,w,h)}if(C=(w&r.childLanes)!==0,Mn||C){if(h=Zt,h!==null){switch(w&-w){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=p&(h.suspendedLanes|w)?0:p,p!==0&&p!==y.retryLane&&(y.retryLane=p,Ei(r,p),Pr(h,r,p,-1))}return xf(),h=lf(Error(t(421))),Ec(r,o,w,h)}return p.data==="$?"?(o.flags|=128,o.child=r.child,o=fI.bind(null,r),p._reactRetry=o,null):(r=y.treeContext,Yn=to(p.nextSibling),Qn=o,Rt=!0,Rr=null,r!==null&&(lr[ur++]=vi,lr[ur++]=wi,lr[ur++]=Yo,vi=r.id,wi=r.overflow,Yo=o),o=pf(o,h.children),o.flags|=4096,o)}function e_(r,o,l){r.lanes|=o;var h=r.alternate;h!==null&&(h.lanes|=o),qd(r.return,o,l)}function mf(r,o,l,h,p){var y=r.memoizedState;y===null?r.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(y.isBackwards=o,y.rendering=null,y.renderingStartTime=0,y.last=h,y.tail=l,y.tailMode=p)}function t_(r,o,l){var h=o.pendingProps,p=h.revealOrder,y=h.tail;if(Cn(r,o,h.children,l),h=Ct.current,h&2)h=h&1|2,o.flags|=128;else{if(r!==null&&r.flags&128)e:for(r=o.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&e_(r,l,o);else if(r.tag===19)e_(r,l,o);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===o)break e;for(;r.sibling===null;){if(r.return===null||r.return===o)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}h&=1}if(yt(Ct,h),!(o.mode&1))o.memoizedState=null;else switch(p){case"forwards":for(l=o.child,p=null;l!==null;)r=l.alternate,r!==null&&pc(r)===null&&(p=l),l=l.sibling;l=p,l===null?(p=o.child,o.child=null):(p=l.sibling,l.sibling=null),mf(o,!1,p,l,y);break;case"backwards":for(l=null,p=o.child,o.child=null;p!==null;){if(r=p.alternate,r!==null&&pc(r)===null){o.child=p;break}r=p.sibling,p.sibling=l,l=p,p=r}mf(o,!0,l,null,y);break;case"together":mf(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function Tc(r,o){!(o.mode&1)&&r!==null&&(r.alternate=null,o.alternate=null,o.flags|=2)}function Ii(r,o,l){if(r!==null&&(o.dependencies=r.dependencies),ts|=o.lanes,!(l&o.childLanes))return null;if(r!==null&&o.child!==r.child)throw Error(t(153));if(o.child!==null){for(r=o.child,l=fo(r,r.pendingProps),o.child=l,l.return=o;r.sibling!==null;)r=r.sibling,l=l.sibling=fo(r,r.pendingProps),l.return=o;l.sibling=null}return o.child}function tI(r,o,l){switch(o.tag){case 3:Xy(o),ta();break;case 5:my(o);break;case 1:Ln(o.type)&&ic(o);break;case 4:Kd(o,o.stateNode.containerInfo);break;case 10:var h=o.type._context,p=o.memoizedProps.value;yt(cc,h._currentValue),h._currentValue=p;break;case 13:if(h=o.memoizedState,h!==null)return h.dehydrated!==null?(yt(Ct,Ct.current&1),o.flags|=128,null):l&o.child.childLanes?Zy(r,o,l):(yt(Ct,Ct.current&1),r=Ii(r,o,l),r!==null?r.sibling:null);yt(Ct,Ct.current&1);break;case 19:if(h=(l&o.childLanes)!==0,r.flags&128){if(h)return t_(r,o,l);o.flags|=128}if(p=o.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),yt(Ct,Ct.current),h)break;return null;case 22:case 23:return o.lanes=0,Gy(r,o,l)}return Ii(r,o,l)}var n_,gf,r_,i_;n_=function(r,o){for(var l=o.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},gf=function(){},r_=function(r,o,l,h){var p=r.memoizedProps;if(p!==h){r=o.stateNode,Zo(Qr.current);var y=null;switch(l){case"input":p=si(r,p),h=si(r,h),y=[];break;case"select":p=ce({},p,{value:void 0}),h=ce({},h,{value:void 0}),y=[];break;case"textarea":p=zi(r,p),h=zi(r,h),y=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(r.onclick=tc)}te(l,h);var w;l=null;for(W in p)if(!h.hasOwnProperty(W)&&p.hasOwnProperty(W)&&p[W]!=null)if(W==="style"){var C=p[W];for(w in C)C.hasOwnProperty(w)&&(l||(l={}),l[w]="")}else W!=="dangerouslySetInnerHTML"&&W!=="children"&&W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&W!=="autoFocus"&&(s.hasOwnProperty(W)?y||(y=[]):(y=y||[]).push(W,null));for(W in h){var O=h[W];if(C=p!=null?p[W]:void 0,h.hasOwnProperty(W)&&O!==C&&(O!=null||C!=null))if(W==="style")if(C){for(w in C)!C.hasOwnProperty(w)||O&&O.hasOwnProperty(w)||(l||(l={}),l[w]="");for(w in O)O.hasOwnProperty(w)&&C[w]!==O[w]&&(l||(l={}),l[w]=O[w])}else l||(y||(y=[]),y.push(W,l)),l=O;else W==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,C=C?C.__html:void 0,O!=null&&C!==O&&(y=y||[]).push(W,O)):W==="children"?typeof O!="string"&&typeof O!="number"||(y=y||[]).push(W,""+O):W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&(s.hasOwnProperty(W)?(O!=null&&W==="onScroll"&&vt("scroll",r),y||C===O||(y=[])):(y=y||[]).push(W,O))}l&&(y=y||[]).push("style",l);var W=y;(o.updateQueue=W)&&(o.flags|=4)}},i_=function(r,o,l,h){l!==h&&(o.flags|=4)};function wl(r,o){if(!Rt)switch(r.tailMode){case"hidden":o=r.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?r.tail=null:l.sibling=null;break;case"collapsed":l=r.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?o||r.tail===null?r.tail=null:r.tail.sibling=null:h.sibling=null}}function yn(r){var o=r.alternate!==null&&r.alternate.child===r.child,l=0,h=0;if(o)for(var p=r.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=r,p=p.sibling;else for(p=r.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=r,p=p.sibling;return r.subtreeFlags|=h,r.childLanes=l,o}function nI(r,o,l){var h=o.pendingProps;switch(Vd(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yn(o),null;case 1:return Ln(o.type)&&rc(),yn(o),null;case 3:return h=o.stateNode,oa(),wt(On),wt(mn),Yd(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(lc(o)?o.flags|=4:r===null||r.memoizedState.isDehydrated&&!(o.flags&256)||(o.flags|=1024,Rr!==null&&(kf(Rr),Rr=null))),gf(r,o),yn(o),null;case 5:Gd(o);var p=Zo(ml.current);if(l=o.type,r!==null&&o.stateNode!=null)r_(r,o,l,h,p),r.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!h){if(o.stateNode===null)throw Error(t(166));return yn(o),null}if(r=Zo(Qr.current),lc(o)){h=o.stateNode,l=o.type;var y=o.memoizedProps;switch(h[Gr]=o,h[cl]=y,r=(o.mode&1)!==0,l){case"dialog":vt("cancel",h),vt("close",h);break;case"iframe":case"object":case"embed":vt("load",h);break;case"video":case"audio":for(p=0;p<al.length;p++)vt(al[p],h);break;case"source":vt("error",h);break;case"img":case"image":case"link":vt("error",h),vt("load",h);break;case"details":vt("toggle",h);break;case"input":nr(h,y),vt("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!y.multiple},vt("invalid",h);break;case"textarea":ui(h,y),vt("invalid",h)}te(l,y),p=null;for(var w in y)if(y.hasOwnProperty(w)){var C=y[w];w==="children"?typeof C=="string"?h.textContent!==C&&(y.suppressHydrationWarning!==!0&&ec(h.textContent,C,r),p=["children",C]):typeof C=="number"&&h.textContent!==""+C&&(y.suppressHydrationWarning!==!0&&ec(h.textContent,C,r),p=["children",""+C]):s.hasOwnProperty(w)&&C!=null&&w==="onScroll"&&vt("scroll",h)}switch(l){case"input":tr(h),li(h,y,!0);break;case"textarea":tr(h),qi(h);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(h.onclick=tc)}h=p,o.updateQueue=h,h!==null&&(o.flags|=4)}else{w=p.nodeType===9?p:p.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=Tt(l)),r==="http://www.w3.org/1999/xhtml"?l==="script"?(r=w.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof h.is=="string"?r=w.createElement(l,{is:h.is}):(r=w.createElement(l),l==="select"&&(w=r,h.multiple?w.multiple=!0:h.size&&(w.size=h.size))):r=w.createElementNS(r,l),r[Gr]=o,r[cl]=h,n_(r,o,!1,!1),o.stateNode=r;e:{switch(w=fe(l,h),l){case"dialog":vt("cancel",r),vt("close",r),p=h;break;case"iframe":case"object":case"embed":vt("load",r),p=h;break;case"video":case"audio":for(p=0;p<al.length;p++)vt(al[p],r);p=h;break;case"source":vt("error",r),p=h;break;case"img":case"image":case"link":vt("error",r),vt("load",r),p=h;break;case"details":vt("toggle",r),p=h;break;case"input":nr(r,h),p=si(r,h),vt("invalid",r);break;case"option":p=h;break;case"select":r._wrapperState={wasMultiple:!!h.multiple},p=ce({},h,{value:void 0}),vt("invalid",r);break;case"textarea":ui(r,h),p=zi(r,h),vt("invalid",r);break;default:p=h}te(l,p),C=p;for(y in C)if(C.hasOwnProperty(y)){var O=C[y];y==="style"?H(r,O):y==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Mo(r,O)):y==="children"?typeof O=="string"?(l!=="textarea"||O!=="")&&_r(r,O):typeof O=="number"&&_r(r,""+O):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(s.hasOwnProperty(y)?O!=null&&y==="onScroll"&&vt("scroll",r):O!=null&&q(r,y,O,w))}switch(l){case"input":tr(r),li(r,h,!1);break;case"textarea":tr(r),qi(r);break;case"option":h.value!=null&&r.setAttribute("value",""+Me(h.value));break;case"select":r.multiple=!!h.multiple,y=h.value,y!=null?rr(r,!!h.multiple,y,!1):h.defaultValue!=null&&rr(r,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(r.onclick=tc)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return yn(o),null;case 6:if(r&&o.stateNode!=null)i_(r,o,r.memoizedProps,h);else{if(typeof h!="string"&&o.stateNode===null)throw Error(t(166));if(l=Zo(ml.current),Zo(Qr.current),lc(o)){if(h=o.stateNode,l=o.memoizedProps,h[Gr]=o,(y=h.nodeValue!==l)&&(r=Qn,r!==null))switch(r.tag){case 3:ec(h.nodeValue,l,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&ec(h.nodeValue,l,(r.mode&1)!==0)}y&&(o.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[Gr]=o,o.stateNode=h}return yn(o),null;case 13:if(wt(Ct),h=o.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Rt&&Yn!==null&&o.mode&1&&!(o.flags&128))ay(),ta(),o.flags|=98560,y=!1;else if(y=lc(o),h!==null&&h.dehydrated!==null){if(r===null){if(!y)throw Error(t(318));if(y=o.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(t(317));y[Gr]=o}else ta(),!(o.flags&128)&&(o.memoizedState=null),o.flags|=4;yn(o),y=!1}else Rr!==null&&(kf(Rr),Rr=null),y=!0;if(!y)return o.flags&65536?o:null}return o.flags&128?(o.lanes=l,o):(h=h!==null,h!==(r!==null&&r.memoizedState!==null)&&h&&(o.child.flags|=8192,o.mode&1&&(r===null||Ct.current&1?Wt===0&&(Wt=3):xf())),o.updateQueue!==null&&(o.flags|=4),yn(o),null);case 4:return oa(),gf(r,o),r===null&&ll(o.stateNode.containerInfo),yn(o),null;case 10:return $d(o.type._context),yn(o),null;case 17:return Ln(o.type)&&rc(),yn(o),null;case 19:if(wt(Ct),y=o.memoizedState,y===null)return yn(o),null;if(h=(o.flags&128)!==0,w=y.rendering,w===null)if(h)wl(y,!1);else{if(Wt!==0||r!==null&&r.flags&128)for(r=o.child;r!==null;){if(w=pc(r),w!==null){for(o.flags|=128,wl(y,!1),h=w.updateQueue,h!==null&&(o.updateQueue=h,o.flags|=4),o.subtreeFlags=0,h=l,l=o.child;l!==null;)y=l,r=h,y.flags&=14680066,w=y.alternate,w===null?(y.childLanes=0,y.lanes=r,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=w.childLanes,y.lanes=w.lanes,y.child=w.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=w.memoizedProps,y.memoizedState=w.memoizedState,y.updateQueue=w.updateQueue,y.type=w.type,r=w.dependencies,y.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),l=l.sibling;return yt(Ct,Ct.current&1|2),o.child}r=r.sibling}y.tail!==null&&gt()>ua&&(o.flags|=128,h=!0,wl(y,!1),o.lanes=4194304)}else{if(!h)if(r=pc(w),r!==null){if(o.flags|=128,h=!0,l=r.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),wl(y,!0),y.tail===null&&y.tailMode==="hidden"&&!w.alternate&&!Rt)return yn(o),null}else 2*gt()-y.renderingStartTime>ua&&l!==1073741824&&(o.flags|=128,h=!0,wl(y,!1),o.lanes=4194304);y.isBackwards?(w.sibling=o.child,o.child=w):(l=y.last,l!==null?l.sibling=w:o.child=w,y.last=w)}return y.tail!==null?(o=y.tail,y.rendering=o,y.tail=o.sibling,y.renderingStartTime=gt(),o.sibling=null,l=Ct.current,yt(Ct,h?l&1|2:l&1),o):(yn(o),null);case 22:case 23:return Pf(),h=o.memoizedState!==null,r!==null&&r.memoizedState!==null!==h&&(o.flags|=8192),h&&o.mode&1?Xn&1073741824&&(yn(o),o.subtreeFlags&6&&(o.flags|=8192)):yn(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function rI(r,o){switch(Vd(o),o.tag){case 1:return Ln(o.type)&&rc(),r=o.flags,r&65536?(o.flags=r&-65537|128,o):null;case 3:return oa(),wt(On),wt(mn),Yd(),r=o.flags,r&65536&&!(r&128)?(o.flags=r&-65537|128,o):null;case 5:return Gd(o),null;case 13:if(wt(Ct),r=o.memoizedState,r!==null&&r.dehydrated!==null){if(o.alternate===null)throw Error(t(340));ta()}return r=o.flags,r&65536?(o.flags=r&-65537|128,o):null;case 19:return wt(Ct),null;case 4:return oa(),null;case 10:return $d(o.type._context),null;case 22:case 23:return Pf(),null;case 24:return null;default:return null}}var Ic=!1,_n=!1,iI=typeof WeakSet=="function"?WeakSet:Set,ge=null;function aa(r,o){var l=r.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){Nt(r,o,h)}else l.current=null}function yf(r,o,l){try{l()}catch(h){Nt(r,o,h)}}var o_=!1;function oI(r,o){if(Cd=Ji,r=Vg(),wd(r)){if("selectionStart"in r)var l={start:r.selectionStart,end:r.selectionEnd};else e:{l=(l=r.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,y=h.focusNode;h=h.focusOffset;try{l.nodeType,y.nodeType}catch{l=null;break e}var w=0,C=-1,O=-1,W=0,re=0,ae=r,ne=null;t:for(;;){for(var de;ae!==l||p!==0&&ae.nodeType!==3||(C=w+p),ae!==y||h!==0&&ae.nodeType!==3||(O=w+h),ae.nodeType===3&&(w+=ae.nodeValue.length),(de=ae.firstChild)!==null;)ne=ae,ae=de;for(;;){if(ae===r)break t;if(ne===l&&++W===p&&(C=w),ne===y&&++re===h&&(O=w),(de=ae.nextSibling)!==null)break;ae=ne,ne=ae.parentNode}ae=de}l=C===-1||O===-1?null:{start:C,end:O}}else l=null}l=l||{start:0,end:0}}else l=null;for(Pd={focusedElem:r,selectionRange:l},Ji=!1,ge=o;ge!==null;)if(o=ge,r=o.child,(o.subtreeFlags&1028)!==0&&r!==null)r.return=o,ge=r;else for(;ge!==null;){o=ge;try{var _e=o.alternate;if(o.flags&1024)switch(o.tag){case 0:case 11:case 15:break;case 1:if(_e!==null){var Ee=_e.memoizedProps,Mt=_e.memoizedState,z=o.stateNode,U=z.getSnapshotBeforeUpdate(o.elementType===o.type?Ee:Ar(o.type,Ee),Mt);z.__reactInternalSnapshotBeforeUpdate=U}break;case 3:var $=o.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(le){Nt(o,o.return,le)}if(r=o.sibling,r!==null){r.return=o.return,ge=r;break}ge=o.return}return _e=o_,o_=!1,_e}function El(r,o,l){var h=o.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&r)===r){var y=p.destroy;p.destroy=void 0,y!==void 0&&yf(o,l,y)}p=p.next}while(p!==h)}}function Sc(r,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&r)===r){var h=l.create;l.destroy=h()}l=l.next}while(l!==o)}}function _f(r){var o=r.ref;if(o!==null){var l=r.stateNode;switch(r.tag){case 5:r=l;break;default:r=l}typeof o=="function"?o(r):o.current=r}}function s_(r){var o=r.alternate;o!==null&&(r.alternate=null,s_(o)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(o=r.stateNode,o!==null&&(delete o[Gr],delete o[cl],delete o[Dd],delete o[BT],delete o[zT])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function a_(r){return r.tag===5||r.tag===3||r.tag===4}function l_(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||a_(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function vf(r,o,l){var h=r.tag;if(h===5||h===6)r=r.stateNode,o?l.nodeType===8?l.parentNode.insertBefore(r,o):l.insertBefore(r,o):(l.nodeType===8?(o=l.parentNode,o.insertBefore(r,l)):(o=l,o.appendChild(r)),l=l._reactRootContainer,l!=null||o.onclick!==null||(o.onclick=tc));else if(h!==4&&(r=r.child,r!==null))for(vf(r,o,l),r=r.sibling;r!==null;)vf(r,o,l),r=r.sibling}function wf(r,o,l){var h=r.tag;if(h===5||h===6)r=r.stateNode,o?l.insertBefore(r,o):l.appendChild(r);else if(h!==4&&(r=r.child,r!==null))for(wf(r,o,l),r=r.sibling;r!==null;)wf(r,o,l),r=r.sibling}var un=null,kr=!1;function ao(r,o,l){for(l=l.child;l!==null;)u_(r,o,l),l=l.sibling}function u_(r,o,l){if(Wn&&typeof Wn.onCommitFiberUnmount=="function")try{Wn.onCommitFiberUnmount(Bo,l)}catch{}switch(l.tag){case 5:_n||aa(l,o);case 6:var h=un,p=kr;un=null,ao(r,o,l),un=h,kr=p,un!==null&&(kr?(r=un,l=l.stateNode,r.nodeType===8?r.parentNode.removeChild(l):r.removeChild(l)):un.removeChild(l.stateNode));break;case 18:un!==null&&(kr?(r=un,l=l.stateNode,r.nodeType===8?Nd(r.parentNode,l):r.nodeType===1&&Nd(r,l),Tr(r)):Nd(un,l.stateNode));break;case 4:h=un,p=kr,un=l.stateNode.containerInfo,kr=!0,ao(r,o,l),un=h,kr=p;break;case 0:case 11:case 14:case 15:if(!_n&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var y=p,w=y.destroy;y=y.tag,w!==void 0&&(y&2||y&4)&&yf(l,o,w),p=p.next}while(p!==h)}ao(r,o,l);break;case 1:if(!_n&&(aa(l,o),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(C){Nt(l,o,C)}ao(r,o,l);break;case 21:ao(r,o,l);break;case 22:l.mode&1?(_n=(h=_n)||l.memoizedState!==null,ao(r,o,l),_n=h):ao(r,o,l);break;default:ao(r,o,l)}}function c_(r){var o=r.updateQueue;if(o!==null){r.updateQueue=null;var l=r.stateNode;l===null&&(l=r.stateNode=new iI),o.forEach(function(h){var p=pI.bind(null,r,h);l.has(h)||(l.add(h),h.then(p,p))})}}function Cr(r,o){var l=o.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var y=r,w=o,C=w;e:for(;C!==null;){switch(C.tag){case 5:un=C.stateNode,kr=!1;break e;case 3:un=C.stateNode.containerInfo,kr=!0;break e;case 4:un=C.stateNode.containerInfo,kr=!0;break e}C=C.return}if(un===null)throw Error(t(160));u_(y,w,p),un=null,kr=!1;var O=p.alternate;O!==null&&(O.return=null),p.return=null}catch(W){Nt(p,o,W)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)h_(o,r),o=o.sibling}function h_(r,o){var l=r.alternate,h=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Cr(o,r),Xr(r),h&4){try{El(3,r,r.return),Sc(3,r)}catch(Ee){Nt(r,r.return,Ee)}try{El(5,r,r.return)}catch(Ee){Nt(r,r.return,Ee)}}break;case 1:Cr(o,r),Xr(r),h&512&&l!==null&&aa(l,l.return);break;case 5:if(Cr(o,r),Xr(r),h&512&&l!==null&&aa(l,l.return),r.flags&32){var p=r.stateNode;try{_r(p,"")}catch(Ee){Nt(r,r.return,Ee)}}if(h&4&&(p=r.stateNode,p!=null)){var y=r.memoizedProps,w=l!==null?l.memoizedProps:y,C=r.type,O=r.updateQueue;if(r.updateQueue=null,O!==null)try{C==="input"&&y.type==="radio"&&y.name!=null&&Bi(p,y),fe(C,w);var W=fe(C,y);for(w=0;w<O.length;w+=2){var re=O[w],ae=O[w+1];re==="style"?H(p,ae):re==="dangerouslySetInnerHTML"?Mo(p,ae):re==="children"?_r(p,ae):q(p,re,ae,W)}switch(C){case"input":ai(p,y);break;case"textarea":$i(p,y);break;case"select":var ne=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!y.multiple;var de=y.value;de!=null?rr(p,!!y.multiple,de,!1):ne!==!!y.multiple&&(y.defaultValue!=null?rr(p,!!y.multiple,y.defaultValue,!0):rr(p,!!y.multiple,y.multiple?[]:"",!1))}p[cl]=y}catch(Ee){Nt(r,r.return,Ee)}}break;case 6:if(Cr(o,r),Xr(r),h&4){if(r.stateNode===null)throw Error(t(162));p=r.stateNode,y=r.memoizedProps;try{p.nodeValue=y}catch(Ee){Nt(r,r.return,Ee)}}break;case 3:if(Cr(o,r),Xr(r),h&4&&l!==null&&l.memoizedState.isDehydrated)try{Tr(o.containerInfo)}catch(Ee){Nt(r,r.return,Ee)}break;case 4:Cr(o,r),Xr(r);break;case 13:Cr(o,r),Xr(r),p=r.child,p.flags&8192&&(y=p.memoizedState!==null,p.stateNode.isHidden=y,!y||p.alternate!==null&&p.alternate.memoizedState!==null||(If=gt())),h&4&&c_(r);break;case 22:if(re=l!==null&&l.memoizedState!==null,r.mode&1?(_n=(W=_n)||re,Cr(o,r),_n=W):Cr(o,r),Xr(r),h&8192){if(W=r.memoizedState!==null,(r.stateNode.isHidden=W)&&!re&&r.mode&1)for(ge=r,re=r.child;re!==null;){for(ae=ge=re;ge!==null;){switch(ne=ge,de=ne.child,ne.tag){case 0:case 11:case 14:case 15:El(4,ne,ne.return);break;case 1:aa(ne,ne.return);var _e=ne.stateNode;if(typeof _e.componentWillUnmount=="function"){h=ne,l=ne.return;try{o=h,_e.props=o.memoizedProps,_e.state=o.memoizedState,_e.componentWillUnmount()}catch(Ee){Nt(h,l,Ee)}}break;case 5:aa(ne,ne.return);break;case 22:if(ne.memoizedState!==null){p_(ae);continue}}de!==null?(de.return=ne,ge=de):p_(ae)}re=re.sibling}e:for(re=null,ae=r;;){if(ae.tag===5){if(re===null){re=ae;try{p=ae.stateNode,W?(y=p.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(C=ae.stateNode,O=ae.memoizedProps.style,w=O!=null&&O.hasOwnProperty("display")?O.display:null,C.style.display=Vo("display",w))}catch(Ee){Nt(r,r.return,Ee)}}}else if(ae.tag===6){if(re===null)try{ae.stateNode.nodeValue=W?"":ae.memoizedProps}catch(Ee){Nt(r,r.return,Ee)}}else if((ae.tag!==22&&ae.tag!==23||ae.memoizedState===null||ae===r)&&ae.child!==null){ae.child.return=ae,ae=ae.child;continue}if(ae===r)break e;for(;ae.sibling===null;){if(ae.return===null||ae.return===r)break e;re===ae&&(re=null),ae=ae.return}re===ae&&(re=null),ae.sibling.return=ae.return,ae=ae.sibling}}break;case 19:Cr(o,r),Xr(r),h&4&&c_(r);break;case 21:break;default:Cr(o,r),Xr(r)}}function Xr(r){var o=r.flags;if(o&2){try{e:{for(var l=r.return;l!==null;){if(a_(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(_r(p,""),h.flags&=-33);var y=l_(r);wf(r,y,p);break;case 3:case 4:var w=h.stateNode.containerInfo,C=l_(r);vf(r,C,w);break;default:throw Error(t(161))}}catch(O){Nt(r,r.return,O)}r.flags&=-3}o&4096&&(r.flags&=-4097)}function sI(r,o,l){ge=r,d_(r)}function d_(r,o,l){for(var h=(r.mode&1)!==0;ge!==null;){var p=ge,y=p.child;if(p.tag===22&&h){var w=p.memoizedState!==null||Ic;if(!w){var C=p.alternate,O=C!==null&&C.memoizedState!==null||_n;C=Ic;var W=_n;if(Ic=w,(_n=O)&&!W)for(ge=p;ge!==null;)w=ge,O=w.child,w.tag===22&&w.memoizedState!==null?m_(p):O!==null?(O.return=w,ge=O):m_(p);for(;y!==null;)ge=y,d_(y),y=y.sibling;ge=p,Ic=C,_n=W}f_(r)}else p.subtreeFlags&8772&&y!==null?(y.return=p,ge=y):f_(r)}}function f_(r){for(;ge!==null;){var o=ge;if(o.flags&8772){var l=o.alternate;try{if(o.flags&8772)switch(o.tag){case 0:case 11:case 15:_n||Sc(5,o);break;case 1:var h=o.stateNode;if(o.flags&4&&!_n)if(l===null)h.componentDidMount();else{var p=o.elementType===o.type?l.memoizedProps:Ar(o.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var y=o.updateQueue;y!==null&&py(o,y,h);break;case 3:var w=o.updateQueue;if(w!==null){if(l=null,o.child!==null)switch(o.child.tag){case 5:l=o.child.stateNode;break;case 1:l=o.child.stateNode}py(o,w,l)}break;case 5:var C=o.stateNode;if(l===null&&o.flags&4){l=C;var O=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&l.focus();break;case"img":O.src&&(l.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var W=o.alternate;if(W!==null){var re=W.memoizedState;if(re!==null){var ae=re.dehydrated;ae!==null&&Tr(ae)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}_n||o.flags&512&&_f(o)}catch(ne){Nt(o,o.return,ne)}}if(o===r){ge=null;break}if(l=o.sibling,l!==null){l.return=o.return,ge=l;break}ge=o.return}}function p_(r){for(;ge!==null;){var o=ge;if(o===r){ge=null;break}var l=o.sibling;if(l!==null){l.return=o.return,ge=l;break}ge=o.return}}function m_(r){for(;ge!==null;){var o=ge;try{switch(o.tag){case 0:case 11:case 15:var l=o.return;try{Sc(4,o)}catch(O){Nt(o,l,O)}break;case 1:var h=o.stateNode;if(typeof h.componentDidMount=="function"){var p=o.return;try{h.componentDidMount()}catch(O){Nt(o,p,O)}}var y=o.return;try{_f(o)}catch(O){Nt(o,y,O)}break;case 5:var w=o.return;try{_f(o)}catch(O){Nt(o,w,O)}}}catch(O){Nt(o,o.return,O)}if(o===r){ge=null;break}var C=o.sibling;if(C!==null){C.return=o.return,ge=C;break}ge=o.return}}var aI=Math.ceil,Rc=x.ReactCurrentDispatcher,Ef=x.ReactCurrentOwner,dr=x.ReactCurrentBatchConfig,et=0,Zt=null,Ft=null,cn=0,Xn=0,la=no(0),Wt=0,Tl=null,ts=0,Ac=0,Tf=0,Il=null,Vn=null,If=0,ua=1/0,Si=null,kc=!1,Sf=null,lo=null,Cc=!1,uo=null,Pc=0,Sl=0,Rf=null,xc=-1,bc=0;function Pn(){return et&6?gt():xc!==-1?xc:xc=gt()}function co(r){return r.mode&1?et&2&&cn!==0?cn&-cn:qT.transition!==null?(bc===0&&(bc=$o()),bc):(r=He,r!==0||(r=window.event,r=r===void 0?16:Ja(r.type)),r):1}function Pr(r,o,l,h){if(50<Sl)throw Sl=0,Rf=null,Error(t(185));Gi(r,l,h),(!(et&2)||r!==Zt)&&(r===Zt&&(!(et&2)&&(Ac|=l),Wt===4&&ho(r,cn)),Un(r,h),l===1&&et===0&&!(o.mode&1)&&(ua=gt()+500,oc&&io()))}function Un(r,o){var l=r.callbackNode;di(r,o);var h=zo(r,r===Zt?cn:0);if(h===0)l!==null&&Ka(l),r.callbackNode=null,r.callbackPriority=0;else if(o=h&-h,r.callbackPriority!==o){if(l!=null&&Ka(l),o===1)r.tag===0?$T(y_.bind(null,r)):ny(y_.bind(null,r)),FT(function(){!(et&6)&&io()}),l=null;else{switch(Yi(h)){case 1:l=jo;break;case 4:l=Wi;break;case 16:l=or;break;case 536870912:l=bu;break;default:l=or}l=R_(l,g_.bind(null,r))}r.callbackPriority=o,r.callbackNode=l}}function g_(r,o){if(xc=-1,bc=0,et&6)throw Error(t(327));var l=r.callbackNode;if(ca()&&r.callbackNode!==l)return null;var h=zo(r,r===Zt?cn:0);if(h===0)return null;if(h&30||h&r.expiredLanes||o)o=Nc(r,h);else{o=h;var p=et;et|=2;var y=v_();(Zt!==r||cn!==o)&&(Si=null,ua=gt()+500,rs(r,o));do try{cI();break}catch(C){__(r,C)}while(!0);zd(),Rc.current=y,et=p,Ft!==null?o=0:(Zt=null,cn=0,o=Wt)}if(o!==0){if(o===2&&(p=Hn(r),p!==0&&(h=p,o=Af(r,p))),o===1)throw l=Tl,rs(r,0),ho(r,h),Un(r,gt()),l;if(o===6)ho(r,h);else{if(p=r.current.alternate,!(h&30)&&!lI(p)&&(o=Nc(r,h),o===2&&(y=Hn(r),y!==0&&(h=y,o=Af(r,y))),o===1))throw l=Tl,rs(r,0),ho(r,h),Un(r,gt()),l;switch(r.finishedWork=p,r.finishedLanes=h,o){case 0:case 1:throw Error(t(345));case 2:is(r,Vn,Si);break;case 3:if(ho(r,h),(h&130023424)===h&&(o=If+500-gt(),10<o)){if(zo(r,0)!==0)break;if(p=r.suspendedLanes,(p&h)!==h){Pn(),r.pingedLanes|=r.suspendedLanes&p;break}r.timeoutHandle=bd(is.bind(null,r,Vn,Si),o);break}is(r,Vn,Si);break;case 4:if(ho(r,h),(h&4194240)===h)break;for(o=r.eventTimes,p=-1;0<h;){var w=31-An(h);y=1<<w,w=o[w],w>p&&(p=w),h&=~y}if(h=p,h=gt()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*aI(h/1960))-h,10<h){r.timeoutHandle=bd(is.bind(null,r,Vn,Si),h);break}is(r,Vn,Si);break;case 5:is(r,Vn,Si);break;default:throw Error(t(329))}}}return Un(r,gt()),r.callbackNode===l?g_.bind(null,r):null}function Af(r,o){var l=Il;return r.current.memoizedState.isDehydrated&&(rs(r,o).flags|=256),r=Nc(r,o),r!==2&&(o=Vn,Vn=l,o!==null&&kf(o)),r}function kf(r){Vn===null?Vn=r:Vn.push.apply(Vn,r)}function lI(r){for(var o=r;;){if(o.flags&16384){var l=o.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],y=p.getSnapshot;p=p.value;try{if(!Sr(y(),p))return!1}catch{return!1}}}if(l=o.child,o.subtreeFlags&16384&&l!==null)l.return=o,o=l;else{if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function ho(r,o){for(o&=~Tf,o&=~Ac,r.suspendedLanes|=o,r.pingedLanes&=~o,r=r.expirationTimes;0<o;){var l=31-An(o),h=1<<l;r[l]=-1,o&=~h}}function y_(r){if(et&6)throw Error(t(327));ca();var o=zo(r,0);if(!(o&1))return Un(r,gt()),null;var l=Nc(r,o);if(r.tag!==0&&l===2){var h=Hn(r);h!==0&&(o=h,l=Af(r,h))}if(l===1)throw l=Tl,rs(r,0),ho(r,o),Un(r,gt()),l;if(l===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=o,is(r,Vn,Si),Un(r,gt()),null}function Cf(r,o){var l=et;et|=1;try{return r(o)}finally{et=l,et===0&&(ua=gt()+500,oc&&io())}}function ns(r){uo!==null&&uo.tag===0&&!(et&6)&&ca();var o=et;et|=1;var l=dr.transition,h=He;try{if(dr.transition=null,He=1,r)return r()}finally{He=h,dr.transition=l,et=o,!(et&6)&&io()}}function Pf(){Xn=la.current,wt(la)}function rs(r,o){r.finishedWork=null,r.finishedLanes=0;var l=r.timeoutHandle;if(l!==-1&&(r.timeoutHandle=-1,UT(l)),Ft!==null)for(l=Ft.return;l!==null;){var h=l;switch(Vd(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&rc();break;case 3:oa(),wt(On),wt(mn),Yd();break;case 5:Gd(h);break;case 4:oa();break;case 13:wt(Ct);break;case 19:wt(Ct);break;case 10:$d(h.type._context);break;case 22:case 23:Pf()}l=l.return}if(Zt=r,Ft=r=fo(r.current,null),cn=Xn=o,Wt=0,Tl=null,Tf=Ac=ts=0,Vn=Il=null,Jo!==null){for(o=0;o<Jo.length;o++)if(l=Jo[o],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,y=l.pending;if(y!==null){var w=y.next;y.next=p,h.next=w}l.pending=h}Jo=null}return r}function __(r,o){do{var l=Ft;try{if(zd(),mc.current=vc,gc){for(var h=Pt.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}gc=!1}if(es=0,Jt=qt=Pt=null,gl=!1,yl=0,Ef.current=null,l===null||l.return===null){Wt=1,Tl=o,Ft=null;break}e:{var y=r,w=l.return,C=l,O=o;if(o=cn,C.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var W=O,re=C,ae=re.tag;if(!(re.mode&1)&&(ae===0||ae===11||ae===15)){var ne=re.alternate;ne?(re.updateQueue=ne.updateQueue,re.memoizedState=ne.memoizedState,re.lanes=ne.lanes):(re.updateQueue=null,re.memoizedState=null)}var de=$y(w);if(de!==null){de.flags&=-257,qy(de,w,C,y,o),de.mode&1&&zy(y,W,o),o=de,O=W;var _e=o.updateQueue;if(_e===null){var Ee=new Set;Ee.add(O),o.updateQueue=Ee}else _e.add(O);break e}else{if(!(o&1)){zy(y,W,o),xf();break e}O=Error(t(426))}}else if(Rt&&C.mode&1){var Mt=$y(w);if(Mt!==null){!(Mt.flags&65536)&&(Mt.flags|=256),qy(Mt,w,C,y,o),jd(sa(O,C));break e}}y=O=sa(O,C),Wt!==4&&(Wt=2),Il===null?Il=[y]:Il.push(y),y=w;do{switch(y.tag){case 3:y.flags|=65536,o&=-o,y.lanes|=o;var z=jy(y,O,o);fy(y,z);break e;case 1:C=O;var U=y.type,$=y.stateNode;if(!(y.flags&128)&&(typeof U.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(lo===null||!lo.has($)))){y.flags|=65536,o&=-o,y.lanes|=o;var le=By(y,C,o);fy(y,le);break e}}y=y.return}while(y!==null)}E_(l)}catch(Ie){o=Ie,Ft===l&&l!==null&&(Ft=l=l.return);continue}break}while(!0)}function v_(){var r=Rc.current;return Rc.current=vc,r===null?vc:r}function xf(){(Wt===0||Wt===3||Wt===2)&&(Wt=4),Zt===null||!(ts&268435455)&&!(Ac&268435455)||ho(Zt,cn)}function Nc(r,o){var l=et;et|=2;var h=v_();(Zt!==r||cn!==o)&&(Si=null,rs(r,o));do try{uI();break}catch(p){__(r,p)}while(!0);if(zd(),et=l,Rc.current=h,Ft!==null)throw Error(t(261));return Zt=null,cn=0,Wt}function uI(){for(;Ft!==null;)w_(Ft)}function cI(){for(;Ft!==null&&!Pu();)w_(Ft)}function w_(r){var o=S_(r.alternate,r,Xn);r.memoizedProps=r.pendingProps,o===null?E_(r):Ft=o,Ef.current=null}function E_(r){var o=r;do{var l=o.alternate;if(r=o.return,o.flags&32768){if(l=rI(l,o),l!==null){l.flags&=32767,Ft=l;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{Wt=6,Ft=null;return}}else if(l=nI(l,o,Xn),l!==null){Ft=l;return}if(o=o.sibling,o!==null){Ft=o;return}Ft=o=r}while(o!==null);Wt===0&&(Wt=5)}function is(r,o,l){var h=He,p=dr.transition;try{dr.transition=null,He=1,hI(r,o,l,h)}finally{dr.transition=p,He=h}return null}function hI(r,o,l,h){do ca();while(uo!==null);if(et&6)throw Error(t(327));l=r.finishedWork;var p=r.finishedLanes;if(l===null)return null;if(r.finishedWork=null,r.finishedLanes=0,l===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var y=l.lanes|l.childLanes;if(mt(r,y),r===Zt&&(Ft=Zt=null,cn=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||Cc||(Cc=!0,R_(or,function(){return ca(),null})),y=(l.flags&15990)!==0,l.subtreeFlags&15990||y){y=dr.transition,dr.transition=null;var w=He;He=1;var C=et;et|=4,Ef.current=null,oI(r,l),h_(l,r),bT(Pd),Ji=!!Cd,Pd=Cd=null,r.current=l,sI(l),dd(),et=C,He=w,dr.transition=y}else r.current=l;if(Cc&&(Cc=!1,uo=r,Pc=p),y=r.pendingLanes,y===0&&(lo=null),Nu(l.stateNode),Un(r,gt()),o!==null)for(h=r.onRecoverableError,l=0;l<o.length;l++)p=o[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(kc)throw kc=!1,r=Sf,Sf=null,r;return Pc&1&&r.tag!==0&&ca(),y=r.pendingLanes,y&1?r===Rf?Sl++:(Sl=0,Rf=r):Sl=0,io(),null}function ca(){if(uo!==null){var r=Yi(Pc),o=dr.transition,l=He;try{if(dr.transition=null,He=16>r?16:r,uo===null)var h=!1;else{if(r=uo,uo=null,Pc=0,et&6)throw Error(t(331));var p=et;for(et|=4,ge=r.current;ge!==null;){var y=ge,w=y.child;if(ge.flags&16){var C=y.deletions;if(C!==null){for(var O=0;O<C.length;O++){var W=C[O];for(ge=W;ge!==null;){var re=ge;switch(re.tag){case 0:case 11:case 15:El(8,re,y)}var ae=re.child;if(ae!==null)ae.return=re,ge=ae;else for(;ge!==null;){re=ge;var ne=re.sibling,de=re.return;if(s_(re),re===W){ge=null;break}if(ne!==null){ne.return=de,ge=ne;break}ge=de}}}var _e=y.alternate;if(_e!==null){var Ee=_e.child;if(Ee!==null){_e.child=null;do{var Mt=Ee.sibling;Ee.sibling=null,Ee=Mt}while(Ee!==null)}}ge=y}}if(y.subtreeFlags&2064&&w!==null)w.return=y,ge=w;else e:for(;ge!==null;){if(y=ge,y.flags&2048)switch(y.tag){case 0:case 11:case 15:El(9,y,y.return)}var z=y.sibling;if(z!==null){z.return=y.return,ge=z;break e}ge=y.return}}var U=r.current;for(ge=U;ge!==null;){w=ge;var $=w.child;if(w.subtreeFlags&2064&&$!==null)$.return=w,ge=$;else e:for(w=U;ge!==null;){if(C=ge,C.flags&2048)try{switch(C.tag){case 0:case 11:case 15:Sc(9,C)}}catch(Ie){Nt(C,C.return,Ie)}if(C===w){ge=null;break e}var le=C.sibling;if(le!==null){le.return=C.return,ge=le;break e}ge=C.return}}if(et=p,io(),Wn&&typeof Wn.onPostCommitFiberRoot=="function")try{Wn.onPostCommitFiberRoot(Bo,r)}catch{}h=!0}return h}finally{He=l,dr.transition=o}}return!1}function T_(r,o,l){o=sa(l,o),o=jy(r,o,1),r=so(r,o,1),o=Pn(),r!==null&&(Gi(r,1,o),Un(r,o))}function Nt(r,o,l){if(r.tag===3)T_(r,r,l);else for(;o!==null;){if(o.tag===3){T_(o,r,l);break}else if(o.tag===1){var h=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(lo===null||!lo.has(h))){r=sa(l,r),r=By(o,r,1),o=so(o,r,1),r=Pn(),o!==null&&(Gi(o,1,r),Un(o,r));break}}o=o.return}}function dI(r,o,l){var h=r.pingCache;h!==null&&h.delete(o),o=Pn(),r.pingedLanes|=r.suspendedLanes&l,Zt===r&&(cn&l)===l&&(Wt===4||Wt===3&&(cn&130023424)===cn&&500>gt()-If?rs(r,0):Tf|=l),Un(r,o)}function I_(r,o){o===0&&(r.mode&1?(o=Ds,Ds<<=1,!(Ds&130023424)&&(Ds=4194304)):o=1);var l=Pn();r=Ei(r,o),r!==null&&(Gi(r,o,l),Un(r,l))}function fI(r){var o=r.memoizedState,l=0;o!==null&&(l=o.retryLane),I_(r,l)}function pI(r,o){var l=0;switch(r.tag){case 13:var h=r.stateNode,p=r.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=r.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(o),I_(r,l)}var S_;S_=function(r,o,l){if(r!==null)if(r.memoizedProps!==o.pendingProps||On.current)Mn=!0;else{if(!(r.lanes&l)&&!(o.flags&128))return Mn=!1,tI(r,o,l);Mn=!!(r.flags&131072)}else Mn=!1,Rt&&o.flags&1048576&&ry(o,ac,o.index);switch(o.lanes=0,o.tag){case 2:var h=o.type;Tc(r,o),r=o.pendingProps;var p=Js(o,mn.current);ia(o,l),p=Zd(null,o,h,r,p,l);var y=ef();return o.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,Ln(h)?(y=!0,ic(o)):y=!1,o.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Hd(o),p.updater=wc,o.stateNode=p,p._reactInternals=o,af(o,h,r,l),o=hf(null,o,h,!0,y,l)):(o.tag=0,Rt&&y&&Md(o),Cn(null,o,p,l),o=o.child),o;case 16:h=o.elementType;e:{switch(Tc(r,o),r=o.pendingProps,p=h._init,h=p(h._payload),o.type=h,p=o.tag=gI(h),r=Ar(h,r),p){case 0:o=cf(null,o,h,r,l);break e;case 1:o=Yy(null,o,h,r,l);break e;case 11:o=Wy(null,o,h,r,l);break e;case 14:o=Hy(null,o,h,Ar(h.type,r),l);break e}throw Error(t(306,h,""))}return o;case 0:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Ar(h,p),cf(r,o,h,p,l);case 1:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Ar(h,p),Yy(r,o,h,p,l);case 3:e:{if(Xy(o),r===null)throw Error(t(387));h=o.pendingProps,y=o.memoizedState,p=y.element,dy(r,o),fc(o,h,null,l);var w=o.memoizedState;if(h=w.element,y.isDehydrated)if(y={element:h,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},o.updateQueue.baseState=y,o.memoizedState=y,o.flags&256){p=sa(Error(t(423)),o),o=Jy(r,o,h,l,p);break e}else if(h!==p){p=sa(Error(t(424)),o),o=Jy(r,o,h,l,p);break e}else for(Yn=to(o.stateNode.containerInfo.firstChild),Qn=o,Rt=!0,Rr=null,l=cy(o,null,h,l),o.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ta(),h===p){o=Ii(r,o,l);break e}Cn(r,o,h,l)}o=o.child}return o;case 5:return my(o),r===null&&Fd(o),h=o.type,p=o.pendingProps,y=r!==null?r.memoizedProps:null,w=p.children,xd(h,p)?w=null:y!==null&&xd(h,y)&&(o.flags|=32),Qy(r,o),Cn(r,o,w,l),o.child;case 6:return r===null&&Fd(o),null;case 13:return Zy(r,o,l);case 4:return Kd(o,o.stateNode.containerInfo),h=o.pendingProps,r===null?o.child=na(o,null,h,l):Cn(r,o,h,l),o.child;case 11:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Ar(h,p),Wy(r,o,h,p,l);case 7:return Cn(r,o,o.pendingProps,l),o.child;case 8:return Cn(r,o,o.pendingProps.children,l),o.child;case 12:return Cn(r,o,o.pendingProps.children,l),o.child;case 10:e:{if(h=o.type._context,p=o.pendingProps,y=o.memoizedProps,w=p.value,yt(cc,h._currentValue),h._currentValue=w,y!==null)if(Sr(y.value,w)){if(y.children===p.children&&!On.current){o=Ii(r,o,l);break e}}else for(y=o.child,y!==null&&(y.return=o);y!==null;){var C=y.dependencies;if(C!==null){w=y.child;for(var O=C.firstContext;O!==null;){if(O.context===h){if(y.tag===1){O=Ti(-1,l&-l),O.tag=2;var W=y.updateQueue;if(W!==null){W=W.shared;var re=W.pending;re===null?O.next=O:(O.next=re.next,re.next=O),W.pending=O}}y.lanes|=l,O=y.alternate,O!==null&&(O.lanes|=l),qd(y.return,l,o),C.lanes|=l;break}O=O.next}}else if(y.tag===10)w=y.type===o.type?null:y.child;else if(y.tag===18){if(w=y.return,w===null)throw Error(t(341));w.lanes|=l,C=w.alternate,C!==null&&(C.lanes|=l),qd(w,l,o),w=y.sibling}else w=y.child;if(w!==null)w.return=y;else for(w=y;w!==null;){if(w===o){w=null;break}if(y=w.sibling,y!==null){y.return=w.return,w=y;break}w=w.return}y=w}Cn(r,o,p.children,l),o=o.child}return o;case 9:return p=o.type,h=o.pendingProps.children,ia(o,l),p=cr(p),h=h(p),o.flags|=1,Cn(r,o,h,l),o.child;case 14:return h=o.type,p=Ar(h,o.pendingProps),p=Ar(h.type,p),Hy(r,o,h,p,l);case 15:return Ky(r,o,o.type,o.pendingProps,l);case 17:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Ar(h,p),Tc(r,o),o.tag=1,Ln(h)?(r=!0,ic(o)):r=!1,ia(o,l),Uy(o,h,p),af(o,h,p,l),hf(null,o,h,!0,r,l);case 19:return t_(r,o,l);case 22:return Gy(r,o,l)}throw Error(t(156,o.tag))};function R_(r,o){return bs(r,o)}function mI(r,o,l,h){this.tag=r,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fr(r,o,l,h){return new mI(r,o,l,h)}function bf(r){return r=r.prototype,!(!r||!r.isReactComponent)}function gI(r){if(typeof r=="function")return bf(r)?1:0;if(r!=null){if(r=r.$$typeof,r===V)return 11;if(r===ct)return 14}return 2}function fo(r,o){var l=r.alternate;return l===null?(l=fr(r.tag,o,r.key,r.mode),l.elementType=r.elementType,l.type=r.type,l.stateNode=r.stateNode,l.alternate=r,r.alternate=l):(l.pendingProps=o,l.type=r.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=r.flags&14680064,l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,o=r.dependencies,l.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},l.sibling=r.sibling,l.index=r.index,l.ref=r.ref,l}function Dc(r,o,l,h,p,y){var w=2;if(h=r,typeof r=="function")bf(r)&&(w=1);else if(typeof r=="string")w=5;else e:switch(r){case R:return os(l.children,p,y,o);case S:w=8,p|=8;break;case k:return r=fr(12,l,o,p|2),r.elementType=k,r.lanes=y,r;case P:return r=fr(13,l,o,p),r.elementType=P,r.lanes=y,r;case it:return r=fr(19,l,o,p),r.elementType=it,r.lanes=y,r;case Ne:return Oc(l,p,y,o);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case D:w=10;break e;case M:w=9;break e;case V:w=11;break e;case ct:w=14;break e;case Xe:w=16,h=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return o=fr(w,l,o,p),o.elementType=r,o.type=h,o.lanes=y,o}function os(r,o,l,h){return r=fr(7,r,h,o),r.lanes=l,r}function Oc(r,o,l,h){return r=fr(22,r,h,o),r.elementType=Ne,r.lanes=l,r.stateNode={isHidden:!1},r}function Nf(r,o,l){return r=fr(6,r,null,o),r.lanes=l,r}function Df(r,o,l){return o=fr(4,r.children!==null?r.children:[],r.key,o),o.lanes=l,o.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},o}function yI(r,o,l,h,p){this.tag=o,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ki(0),this.expirationTimes=Ki(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ki(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Of(r,o,l,h,p,y,w,C,O){return r=new yI(r,o,l,C,O),o===1?(o=1,y===!0&&(o|=8)):o=0,y=fr(3,null,null,o),r.current=y,y.stateNode=r,y.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hd(y),r}function _I(r,o,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oe,key:h==null?null:""+h,children:r,containerInfo:o,implementation:l}}function A_(r){if(!r)return ro;r=r._reactInternals;e:{if(Rn(r)!==r||r.tag!==1)throw Error(t(170));var o=r;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(Ln(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(r.tag===1){var l=r.type;if(Ln(l))return ey(r,l,o)}return o}function k_(r,o,l,h,p,y,w,C,O){return r=Of(l,h,!0,r,p,y,w,C,O),r.context=A_(null),l=r.current,h=Pn(),p=co(l),y=Ti(h,p),y.callback=o??null,so(l,y,p),r.current.lanes=p,Gi(r,p,h),Un(r,h),r}function Lc(r,o,l,h){var p=o.current,y=Pn(),w=co(p);return l=A_(l),o.context===null?o.context=l:o.pendingContext=l,o=Ti(y,w),o.payload={element:r},h=h===void 0?null:h,h!==null&&(o.callback=h),r=so(p,o,w),r!==null&&(Pr(r,p,w,y),dc(r,p,w)),w}function Mc(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function C_(r,o){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var l=r.retryLane;r.retryLane=l!==0&&l<o?l:o}}function Lf(r,o){C_(r,o),(r=r.alternate)&&C_(r,o)}function vI(){return null}var P_=typeof reportError=="function"?reportError:function(r){console.error(r)};function Mf(r){this._internalRoot=r}Vc.prototype.render=Mf.prototype.render=function(r){var o=this._internalRoot;if(o===null)throw Error(t(409));Lc(r,o,null,null)},Vc.prototype.unmount=Mf.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var o=r.containerInfo;ns(function(){Lc(null,r,null,null)}),o[yi]=null}};function Vc(r){this._internalRoot=r}Vc.prototype.unstable_scheduleHydration=function(r){if(r){var o=Vu();r={blockedOn:null,target:r,priority:o};for(var l=0;l<qr.length&&o!==0&&o<qr[l].priority;l++);qr.splice(l,0,r),l===0&&ju(r)}};function Vf(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Uc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function x_(){}function wI(r,o,l,h,p){if(p){if(typeof h=="function"){var y=h;h=function(){var W=Mc(w);y.call(W)}}var w=k_(o,h,r,0,null,!1,!1,"",x_);return r._reactRootContainer=w,r[yi]=w.current,ll(r.nodeType===8?r.parentNode:r),ns(),w}for(;p=r.lastChild;)r.removeChild(p);if(typeof h=="function"){var C=h;h=function(){var W=Mc(O);C.call(W)}}var O=Of(r,0,!1,null,null,!1,!1,"",x_);return r._reactRootContainer=O,r[yi]=O.current,ll(r.nodeType===8?r.parentNode:r),ns(function(){Lc(o,O,l,h)}),O}function Fc(r,o,l,h,p){var y=l._reactRootContainer;if(y){var w=y;if(typeof p=="function"){var C=p;p=function(){var O=Mc(w);C.call(O)}}Lc(o,w,r,p)}else w=wI(l,o,r,p,h);return Mc(w)}Lu=function(r){switch(r.tag){case 3:var o=r.stateNode;if(o.current.memoizedState.isDehydrated){var l=Hi(o.pendingLanes);l!==0&&(Qi(o,l|1),Un(o,gt()),!(et&6)&&(ua=gt()+500,io()))}break;case 13:ns(function(){var h=Ei(r,1);if(h!==null){var p=Pn();Pr(h,r,1,p)}}),Lf(r,1)}},Os=function(r){if(r.tag===13){var o=Ei(r,134217728);if(o!==null){var l=Pn();Pr(o,r,134217728,l)}Lf(r,134217728)}},Mu=function(r){if(r.tag===13){var o=co(r),l=Ei(r,o);if(l!==null){var h=Pn();Pr(l,r,o,h)}Lf(r,o)}},Vu=function(){return He},Uu=function(r,o){var l=He;try{return He=r,o()}finally{He=l}},Pe=function(r,o,l){switch(o){case"input":if(ai(r,l),o=l.name,l.type==="radio"&&o!=null){for(l=r;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<l.length;o++){var h=l[o];if(h!==r&&h.form===r.form){var p=nc(h);if(!p)throw Error(t(90));ji(h),ai(h,p)}}}break;case"textarea":$i(r,l);break;case"select":o=l.value,o!=null&&rr(r,!!l.multiple,o,!1)}},at=Cf,It=ns;var EI={usingClientEntryPoint:!1,Events:[hl,Ys,nc,dt,Ge,Cf]},Rl={findFiberByHostInstance:Go,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},TI={bundleType:Rl.bundleType,version:Rl.version,rendererPackageName:Rl.rendererPackageName,rendererConfig:Rl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Fo(r),r===null?null:r.stateNode},findFiberByHostInstance:Rl.findFiberByHostInstance||vI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jc.isDisabled&&jc.supportsFiber)try{Bo=jc.inject(TI),Wn=jc}catch{}}return Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=EI,Fn.createPortal=function(r,o){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vf(o))throw Error(t(200));return _I(r,o,null,l)},Fn.createRoot=function(r,o){if(!Vf(r))throw Error(t(299));var l=!1,h="",p=P_;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(p=o.onRecoverableError)),o=Of(r,1,!1,null,null,l,!1,h,p),r[yi]=o.current,ll(r.nodeType===8?r.parentNode:r),new Mf(o)},Fn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var o=r._reactInternals;if(o===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=Fo(o),r=r===null?null:r.stateNode,r},Fn.flushSync=function(r){return ns(r)},Fn.hydrate=function(r,o,l){if(!Uc(o))throw Error(t(200));return Fc(null,r,o,!0,l)},Fn.hydrateRoot=function(r,o,l){if(!Vf(r))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,p=!1,y="",w=P_;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(y=l.identifierPrefix),l.onRecoverableError!==void 0&&(w=l.onRecoverableError)),o=k_(o,null,r,1,l??null,p,!1,y,w),r[yi]=o.current,ll(r),h)for(r=0;r<h.length;r++)l=h[r],p=l._getVersion,p=p(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,p]:o.mutableSourceEagerHydrationData.push(l,p);return new Vc(o)},Fn.render=function(r,o,l){if(!Uc(o))throw Error(t(200));return Fc(null,r,o,!1,l)},Fn.unmountComponentAtNode=function(r){if(!Uc(r))throw Error(t(40));return r._reactRootContainer?(ns(function(){Fc(null,null,r,!1,function(){r._reactRootContainer=null,r[yi]=null})}),!0):!1},Fn.unstable_batchedUpdates=Cf,Fn.unstable_renderSubtreeIntoContainer=function(r,o,l,h){if(!Uc(l))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Fc(r,o,l,!1,h)},Fn.version="18.3.1-next-f1338f8080-20240426",Fn}var U_;function NI(){if(U_)return jf.exports;U_=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),jf.exports=bI(),jf.exports}var F_;function DI(){if(F_)return Bc;F_=1;var n=NI();return Bc.createRoot=n.createRoot,Bc.hydrateRoot=n.hydrateRoot,Bc}var OI=DI();const LI=j0(OI);/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function At(){return At=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},At.apply(this,arguments)}var Ht;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Ht||(Ht={}));const j_="popstate";function MI(n){n===void 0&&(n={});function e(i,s){let{pathname:a,search:u,hash:d}=i.location;return Kl("",{pathname:a,search:u,hash:d},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function t(i,s){return typeof s=="string"?s:ms(s)}return UI(e,t,null,n)}function $e(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Ra(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function VI(){return Math.random().toString(36).substr(2,8)}function B_(n,e){return{usr:n.state,key:n.key,idx:e}}function Kl(n,e,t,i){return t===void 0&&(t=null),At({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?bo(e):e,{state:t,key:e&&e.key||i||VI()})}function ms(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function bo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function UI(n,e,t,i){i===void 0&&(i={});let{window:s=document.defaultView,v5Compat:a=!1}=i,u=s.history,d=Ht.Pop,f=null,m=_();m==null&&(m=0,u.replaceState(At({},u.state,{idx:m}),""));function _(){return(u.state||{idx:null}).idx}function E(){d=Ht.Pop;let N=_(),K=N==null?null:N-m;m=N,f&&f({action:d,location:L.location,delta:K})}function T(N,K){d=Ht.Push;let j=Kl(L.location,N,K);m=_()+1;let q=B_(j,m),x=L.createHref(j);try{u.pushState(q,"",x)}catch(ee){if(ee instanceof DOMException&&ee.name==="DataCloneError")throw ee;s.location.assign(x)}a&&f&&f({action:d,location:L.location,delta:1})}function A(N,K){d=Ht.Replace;let j=Kl(L.location,N,K);m=_();let q=B_(j,m),x=L.createHref(j);u.replaceState(q,"",x),a&&f&&f({action:d,location:L.location,delta:0})}function b(N){let K=s.location.origin!=="null"?s.location.origin:s.location.href,j=typeof N=="string"?N:ms(N);return $e(K,"No window.location.(origin|href) available to create URL for href: "+j),new URL(j,K)}let L={get action(){return d},get location(){return n(s,u)},listen(N){if(f)throw new Error("A history only accepts one active listener");return s.addEventListener(j_,E),f=N,()=>{s.removeEventListener(j_,E),f=null}},createHref(N){return e(s,N)},createURL:b,encodeLocation(N){let K=b(N);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:T,replace:A,go(N){return u.go(N)}};return L}var Kt;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Kt||(Kt={}));const FI=new Set(["lazy","caseSensitive","path","id","index","children"]);function jI(n){return n.index===!0}function cp(n,e,t,i){return t===void 0&&(t=[]),i===void 0&&(i={}),n.map((s,a)=>{let u=[...t,a],d=typeof s.id=="string"?s.id:u.join("-");if($e(s.index!==!0||!s.children,"Cannot specify children on an index route"),$e(!i[d],'Found a route id collision on id "'+d+`".  Route id's must be globally unique within Data Router usages`),jI(s)){let f=At({},s,e(s),{id:d});return i[d]=f,f}else{let f=At({},s,e(s),{id:d,children:void 0});return i[d]=f,s.children&&(f.children=cp(s.children,e,u,i)),f}})}function ga(n,e,t){t===void 0&&(t="/");let i=typeof e=="string"?bo(e):e,s=Fa(i.pathname||"/",t);if(s==null)return null;let a=B0(n);BI(a);let u=null;for(let d=0;u==null&&d<a.length;++d)u=YI(a[d],ZI(s));return u}function B0(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let s=(a,u,d)=>{let f={relativePath:d===void 0?a.path||"":d,caseSensitive:a.caseSensitive===!0,childrenIndex:u,route:a};f.relativePath.startsWith("/")&&($e(f.relativePath.startsWith(i),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(i.length));let m=bi([i,f.relativePath]),_=t.concat(f);a.children&&a.children.length>0&&($e(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+m+'".')),B0(a.children,e,_,m)),!(a.path==null&&!a.index)&&e.push({path:m,score:GI(m,a.index),routesMeta:_})};return n.forEach((a,u)=>{var d;if(a.path===""||!((d=a.path)!=null&&d.includes("?")))s(a,u);else for(let f of z0(a.path))s(a,u,f)}),e}function z0(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,s=t.endsWith("?"),a=t.replace(/\?$/,"");if(i.length===0)return s?[a,""]:[a];let u=z0(i.join("/")),d=[];return d.push(...u.map(f=>f===""?a:[a,f].join("/"))),s&&d.push(...u),d.map(f=>n.startsWith("/")&&f===""?"/":f)}function BI(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:QI(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const zI=/^:\w+$/,$I=3,qI=2,WI=1,HI=10,KI=-2,z_=n=>n==="*";function GI(n,e){let t=n.split("/"),i=t.length;return t.some(z_)&&(i+=KI),e&&(i+=qI),t.filter(s=>!z_(s)).reduce((s,a)=>s+(zI.test(a)?$I:a===""?WI:HI),i)}function QI(n,e){return n.length===e.length&&n.slice(0,-1).every((i,s)=>i===e[s])?n[n.length-1]-e[e.length-1]:0}function YI(n,e){let{routesMeta:t}=n,i={},s="/",a=[];for(let u=0;u<t.length;++u){let d=t[u],f=u===t.length-1,m=s==="/"?e:e.slice(s.length)||"/",_=XI({path:d.relativePath,caseSensitive:d.caseSensitive,end:f},m);if(!_)return null;Object.assign(i,_.params);let E=d.route;a.push({params:i,pathname:bi([s,_.pathname]),pathnameBase:rS(bi([s,_.pathnameBase])),route:E}),_.pathnameBase!=="/"&&(s=bi([s,_.pathnameBase]))}return a}function XI(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=JI(n.path,n.caseSensitive,n.end),s=e.match(t);if(!s)return null;let a=s[0],u=a.replace(/(.)\/+$/,"$1"),d=s.slice(1);return{params:i.reduce((m,_,E)=>{if(_==="*"){let T=d[E]||"";u=a.slice(0,a.length-T.length).replace(/(.)\/+$/,"$1")}return m[_]=eS(d[E]||"",_),m},{}),pathname:a,pathnameBase:u,pattern:n}}function JI(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Ra(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],s="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(u,d)=>(i.push(d),"/([^\\/]+)"));return n.endsWith("*")?(i.push("*"),s+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":n!==""&&n!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),i]}function ZI(n){try{return decodeURI(n)}catch(e){return Ra(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function eS(n,e){try{return decodeURIComponent(n)}catch(t){return Ra(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+n+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+t+").")),n}}function Fa(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function tS(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:s=""}=typeof n=="string"?bo(n):n;return{pathname:t?t.startsWith("/")?t:nS(t,e):e,search:iS(i),hash:oS(s)}}function nS(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function $f(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function cu(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Nh(n,e,t,i){i===void 0&&(i=!1);let s;typeof n=="string"?s=bo(n):(s=At({},n),$e(!s.pathname||!s.pathname.includes("?"),$f("?","pathname","search",s)),$e(!s.pathname||!s.pathname.includes("#"),$f("#","pathname","hash",s)),$e(!s.search||!s.search.includes("#"),$f("#","search","hash",s)));let a=n===""||s.pathname==="",u=a?"/":s.pathname,d;if(i||u==null)d=t;else{let E=e.length-1;if(u.startsWith("..")){let T=u.split("/");for(;T[0]==="..";)T.shift(),E-=1;s.pathname=T.join("/")}d=E>=0?e[E]:"/"}let f=tS(s,d),m=u&&u!=="/"&&u.endsWith("/"),_=(a||u===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(m||_)&&(f.pathname+="/"),f}const bi=n=>n.join("/").replace(/\/\/+/g,"/"),rS=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),iS=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,oS=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;class rm{constructor(e,t,i,s){s===void 0&&(s=!1),this.status=e,this.statusText=t||"",this.internal=s,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}}function $0(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const q0=["post","put","patch","delete"],sS=new Set(q0),aS=["get",...q0],lS=new Set(aS),uS=new Set([301,302,303,307,308]),cS=new Set([307,308]),qf={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},hS={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},kl={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},W0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dS=n=>({hasErrorBoundary:!!n.hasErrorBoundary});function fS(n){const e=n.window?n.window:typeof window<"u"?window:void 0,t=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",i=!t;$e(n.routes.length>0,"You must provide a non-empty routes array to createRouter");let s;if(n.mapRouteProperties)s=n.mapRouteProperties;else if(n.detectErrorBoundary){let H=n.detectErrorBoundary;s=Q=>({hasErrorBoundary:H(Q)})}else s=dS;let a={},u=cp(n.routes,s,void 0,a),d,f=n.basename||"/",m=At({v7_normalizeFormMethod:!1,v7_prependBasename:!1},n.future),_=null,E=new Set,T=null,A=null,b=null,L=n.hydrationData!=null,N=ga(u,n.history.location,f),K=null;if(N==null){let H=pr(404,{pathname:n.history.location.pathname}),{matches:Q,route:te}=Y_(u);N=Q,K={[te.id]:H}}let j=!N.some(H=>H.route.lazy)&&(!N.some(H=>H.route.loader)||n.hydrationData!=null),q,x={historyAction:n.history.action,location:n.history.location,matches:N,initialized:j,navigation:qf,restoreScrollPosition:n.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:n.hydrationData&&n.hydrationData.loaderData||{},actionData:n.hydrationData&&n.hydrationData.actionData||null,errors:n.hydrationData&&n.hydrationData.errors||K,fetchers:new Map,blockers:new Map},ee=Ht.Pop,oe=!1,R,S=!1,k=!1,D=[],M=[],V=new Map,P=0,it=-1,ct=new Map,Xe=new Set,Ne=new Map,se=new Map,me=new Map,ce=!1;function F(){return _=n.history.listen(H=>{let{action:Q,location:te,delta:fe}=H;if(ce){ce=!1;return}Ra(me.size===0||fe!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let Ce=bt({currentLocation:x.location,nextLocation:te,historyAction:Q});if(Ce&&fe!=null){ce=!0,n.history.go(fe*-1),Tt(Ce,{state:"blocked",location:te,proceed(){Tt(Ce,{state:"proceeding",proceed:void 0,reset:void 0,location:te}),n.history.go(fe)},reset(){let Re=new Map(x.blockers);Re.set(Ce,kl),ye({blockers:Re})}});return}return Me(Q,te)}),x.initialized||Me(Ht.Pop,x.location),q}function X(){_&&_(),E.clear(),R&&R.abort(),x.fetchers.forEach((H,Q)=>Fr(Q)),x.blockers.forEach((H,Q)=>qi(Q))}function ve(H){return E.add(H),()=>E.delete(H)}function ye(H){x=At({},x,H),E.forEach(Q=>Q(x))}function be(H,Q){var te,fe;let Ce=x.actionData!=null&&x.navigation.formMethod!=null&&xr(x.navigation.formMethod)&&x.navigation.state==="loading"&&((te=H.state)==null?void 0:te._isRedirect)!==!0,Re;Q.actionData?Object.keys(Q.actionData).length>0?Re=Q.actionData:Re=null:Ce?Re=x.actionData:Re=null;let Pe=Q.loaderData?Q_(x.loaderData,Q.loaderData,Q.matches||[],Q.errors):x.loaderData,we=x.blockers;we.size>0&&(we=new Map(we),we.forEach((Ze,dt)=>we.set(dt,kl)));let pe=oe===!0||x.navigation.formMethod!=null&&xr(x.navigation.formMethod)&&((fe=H.state)==null?void 0:fe._isRedirect)!==!0;d&&(u=d,d=void 0),S||ee===Ht.Pop||(ee===Ht.Push?n.history.push(H,H.state):ee===Ht.Replace&&n.history.replace(H,H.state)),ye(At({},Q,{actionData:Re,loaderData:Pe,historyAction:ee,location:H,initialized:!0,navigation:qf,revalidation:"idle",restoreScrollPosition:jr(H,Q.matches||x.matches),preventScrollReset:pe,blockers:we})),ee=Ht.Pop,oe=!1,S=!1,k=!1,D=[],M=[]}async function Fe(H,Q){if(typeof H=="number"){n.history.go(H);return}let te=hp(x.location,x.matches,f,m.v7_prependBasename,H,Q==null?void 0:Q.fromRouteId,Q==null?void 0:Q.relative),{path:fe,submission:Ce,error:Re}=$_(m.v7_normalizeFormMethod,!1,te,Q),Pe=x.location,we=Kl(x.location,fe,Q&&Q.state);we=At({},we,n.history.encodeLocation(we));let pe=Q&&Q.replace!=null?Q.replace:void 0,Ze=Ht.Push;pe===!0?Ze=Ht.Replace:pe===!1||Ce!=null&&xr(Ce.formMethod)&&Ce.formAction===x.location.pathname+x.location.search&&(Ze=Ht.Replace);let dt=Q&&"preventScrollReset"in Q?Q.preventScrollReset===!0:void 0,Ge=bt({currentLocation:Pe,nextLocation:we,historyAction:Ze});if(Ge){Tt(Ge,{state:"blocked",location:we,proceed(){Tt(Ge,{state:"proceeding",proceed:void 0,reset:void 0,location:we}),Fe(H,Q)},reset(){let at=new Map(x.blockers);at.set(Ge,kl),ye({blockers:at})}});return}return await Me(Ze,we,{submission:Ce,pendingError:Re,preventScrollReset:dt,replace:Q&&Q.replace})}function je(){if(ai(),ye({revalidation:"loading"}),x.navigation.state!=="submitting"){if(x.navigation.state==="idle"){Me(x.historyAction,x.location,{startUninterruptedRevalidation:!0});return}Me(ee||x.historyAction,x.navigation.location,{overrideNavigation:x.navigation})}}async function Me(H,Q,te){R&&R.abort(),R=null,ee=H,S=(te&&te.startUninterruptedRevalidation)===!0,ci(x.location,x.matches),oe=(te&&te.preventScrollReset)===!0;let fe=d||u,Ce=te&&te.overrideNavigation,Re=ga(fe,Q,f);if(!Re){let at=pr(404,{pathname:Q.pathname}),{matches:It,route:rn}=Y_(fe);zn(),be(Q,{matches:It,loaderData:{},errors:{[rn.id]:at}});return}if(x.initialized&&!k&&_S(x.location,Q)&&!(te&&te.submission&&xr(te.submission.formMethod))){be(Q,{matches:Re});return}R=new AbortController;let Pe=Pl(n.history,Q,R.signal,te&&te.submission),we,pe;if(te&&te.pendingError)pe={[ya(Re).route.id]:te.pendingError};else if(te&&te.submission&&xr(te.submission.formMethod)){let at=await Je(Pe,Q,te.submission,Re,{replace:te.replace});if(at.shortCircuited)return;we=at.pendingActionData,pe=at.pendingActionError,Ce=zc(Q,te.submission),Pe=new Request(Pe.url,{signal:Pe.signal})}let{shortCircuited:Ze,loaderData:dt,errors:Ge}=await st(Pe,Q,Re,Ce,te&&te.submission,te&&te.fetcherSubmission,te&&te.replace,we,pe);Ze||(R=null,be(Q,At({matches:Re},we?{actionData:we}:{},{loaderData:dt,errors:Ge})))}async function Je(H,Q,te,fe,Ce){Ce===void 0&&(Ce={}),ai();let Re=IS(Q,te);ye({navigation:Re});let Pe,we=fp(fe,Q);if(!we.route.action&&!we.route.lazy)Pe={type:Kt.error,error:pr(405,{method:H.method,pathname:Q.pathname,routeId:we.route.id})};else if(Pe=await Cl("action",H,we,fe,a,s,f),H.signal.aborted)return{shortCircuited:!0};if(va(Pe)){let pe;return Ce&&Ce.replace!=null?pe=Ce.replace:pe=Pe.location===x.location.pathname+x.location.search,await nr(x,Pe,{submission:te,replace:pe}),{shortCircuited:!0}}if(jl(Pe)){let pe=ya(fe,we.route.id);return(Ce&&Ce.replace)!==!0&&(ee=Ht.Push),{pendingActionData:{},pendingActionError:{[pe.route.id]:Pe.error}}}if(as(Pe))throw pr(400,{type:"defer-action"});return{pendingActionData:{[we.route.id]:Pe.data}}}async function st(H,Q,te,fe,Ce,Re,Pe,we,pe){let Ze=fe||zc(Q,Ce),dt=Ce||Re||Z_(Ze),Ge=d||u,[at,It]=q_(n.history,x,te,dt,Q,k,D,M,Ne,Xe,Ge,f,we,pe);if(zn(tt=>!(te&&te.some(Yt=>Yt.route.id===tt))||at&&at.some(Yt=>Yt.route.id===tt)),it=++P,at.length===0&&It.length===0){let tt=zi();return be(Q,At({matches:te,loaderData:{},errors:pe||null},we?{actionData:we}:{},tt?{fetchers:new Map(x.fetchers)}:{})),{shortCircuited:!0}}if(!S){It.forEach(Yt=>{let qn=x.fetchers.get(Yt.key),Rn=xl(void 0,qn?qn.data:void 0);x.fetchers.set(Yt.key,Rn)});let tt=we||x.actionData;ye(At({navigation:Ze},tt?Object.keys(tt).length===0?{actionData:null}:{actionData:tt}:{},It.length>0?{fetchers:new Map(x.fetchers)}:{}))}It.forEach(tt=>{V.has(tt.key)&&Qt(tt.key),tt.controller&&V.set(tt.key,tt.controller)});let rn=()=>It.forEach(tt=>Qt(tt.key));R&&R.signal.addEventListener("abort",rn);let{results:$n,loaderResults:ft,fetcherResults:Br}=await Bi(x.matches,te,at,It,H);if(H.signal.aborted)return{shortCircuited:!0};R&&R.signal.removeEventListener("abort",rn),It.forEach(tt=>V.delete(tt.key));let Lt=X_($n);if(Lt){if(Lt.idx>=at.length){let tt=It[Lt.idx-at.length].key;Xe.add(tt)}return await nr(x,Lt.result,{replace:Pe}),{shortCircuited:!0}}let{loaderData:on,errors:ir}=G_(x,te,at,ft,pe,It,Br,se);se.forEach((tt,Yt)=>{tt.subscribe(qn=>{(qn||tt.done)&&se.delete(Yt)})});let zr=zi(),Sn=ui(it),hi=zr||Sn||It.length>0;return At({loaderData:on,errors:ir},hi?{fetchers:new Map(x.fetchers)}:{})}function tr(H){return x.fetchers.get(H)||hS}function ji(H,Q,te,fe){if(i)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");V.has(H)&&Qt(H);let Ce=d||u,Re=hp(x.location,x.matches,f,m.v7_prependBasename,te,Q,fe==null?void 0:fe.relative),Pe=ga(Ce,Re,f);if(!Pe){li(H,Q,pr(404,{pathname:Re}));return}let{path:we,submission:pe,error:Ze}=$_(m.v7_normalizeFormMethod,!0,Re,fe);if(Ze){li(H,Q,Ze);return}let dt=fp(Pe,we);if(oe=(fe&&fe.preventScrollReset)===!0,pe&&xr(pe.formMethod)){Ur(H,Q,we,dt,Pe,pe);return}Ne.set(H,{routeId:Q,path:we}),si(H,Q,we,dt,Pe,pe)}async function Ur(H,Q,te,fe,Ce,Re){if(ai(),Ne.delete(H),!fe.route.action&&!fe.route.lazy){let pt=pr(405,{method:Re.formMethod,pathname:te,routeId:Q});li(H,Q,pt);return}let Pe=x.fetchers.get(H),we=SS(Re,Pe);x.fetchers.set(H,we),ye({fetchers:new Map(x.fetchers)});let pe=new AbortController,Ze=Pl(n.history,te,pe.signal,Re);V.set(H,pe);let dt=P,Ge=await Cl("action",Ze,fe,Ce,a,s,f);if(Ze.signal.aborted){V.get(H)===pe&&V.delete(H);return}if(va(Ge))if(V.delete(H),it>dt){let pt=da(void 0);x.fetchers.set(H,pt),ye({fetchers:new Map(x.fetchers)});return}else{Xe.add(H);let pt=xl(Re);return x.fetchers.set(H,pt),ye({fetchers:new Map(x.fetchers)}),nr(x,Ge,{submission:Re,isFetchActionRedirect:!0})}if(jl(Ge)){li(H,Q,Ge.error);return}if(as(Ge))throw pr(400,{type:"defer-action"});let at=x.navigation.location||x.location,It=Pl(n.history,at,pe.signal),rn=d||u,$n=x.navigation.state!=="idle"?ga(rn,x.navigation.location,f):x.matches;$e($n,"Didn't find any matches after fetcher action");let ft=++P;ct.set(H,ft);let Br=xl(Re,Ge.data);x.fetchers.set(H,Br);let[Lt,on]=q_(n.history,x,$n,Re,at,k,D,M,Ne,Xe,rn,f,{[fe.route.id]:Ge.data},void 0);on.filter(pt=>pt.key!==H).forEach(pt=>{let sn=pt.key,Uo=x.fetchers.get(sn),Fo=xl(void 0,Uo?Uo.data:void 0);x.fetchers.set(sn,Fo),V.has(sn)&&Qt(sn),pt.controller&&V.set(sn,pt.controller)}),ye({fetchers:new Map(x.fetchers)});let ir=()=>on.forEach(pt=>Qt(pt.key));pe.signal.addEventListener("abort",ir);let{results:zr,loaderResults:Sn,fetcherResults:hi}=await Bi(x.matches,$n,Lt,on,It);if(pe.signal.aborted)return;pe.signal.removeEventListener("abort",ir),ct.delete(H),V.delete(H),on.forEach(pt=>V.delete(pt.key));let tt=X_(zr);if(tt){if(tt.idx>=Lt.length){let pt=on[tt.idx-Lt.length].key;Xe.add(pt)}return nr(x,tt.result)}let{loaderData:Yt,errors:qn}=G_(x,x.matches,Lt,Sn,void 0,on,hi,se);if(x.fetchers.has(H)){let pt=da(Ge.data);x.fetchers.set(H,pt)}let Rn=ui(ft);x.navigation.state==="loading"&&ft>it?($e(ee,"Expected pending action"),R&&R.abort(),be(x.navigation.location,{matches:$n,loaderData:Yt,errors:qn,fetchers:new Map(x.fetchers)})):(ye(At({errors:qn,loaderData:Q_(x.loaderData,Yt,$n,qn)},Rn||on.length>0?{fetchers:new Map(x.fetchers)}:{})),k=!1)}async function si(H,Q,te,fe,Ce,Re){let Pe=x.fetchers.get(H),we=xl(Re,Pe?Pe.data:void 0);x.fetchers.set(H,we),ye({fetchers:new Map(x.fetchers)});let pe=new AbortController,Ze=Pl(n.history,te,pe.signal);V.set(H,pe);let dt=P,Ge=await Cl("loader",Ze,fe,Ce,a,s,f);if(as(Ge)&&(Ge=await G0(Ge,Ze.signal,!0)||Ge),V.get(H)===pe&&V.delete(H),Ze.signal.aborted)return;if(va(Ge))if(it>dt){let It=da(void 0);x.fetchers.set(H,It),ye({fetchers:new Map(x.fetchers)});return}else{Xe.add(H),await nr(x,Ge);return}if(jl(Ge)){let It=ya(x.matches,Q);x.fetchers.delete(H),ye({fetchers:new Map(x.fetchers),errors:{[It.route.id]:Ge.error}});return}$e(!as(Ge),"Unhandled fetcher deferred data");let at=da(Ge.data);x.fetchers.set(H,at),ye({fetchers:new Map(x.fetchers)})}async function nr(H,Q,te){let{submission:fe,replace:Ce,isFetchActionRedirect:Re}=te===void 0?{}:te;Q.revalidate&&(k=!0);let Pe=Kl(H.location,Q.location,At({_isRedirect:!0},Re?{_isFetchActionRedirect:!0}:{}));if($e(Pe,"Expected a location on the redirect navigation"),W0.test(Q.location)&&t){let Ze=n.history.createURL(Q.location),dt=Fa(Ze.pathname,f)==null;if(e.location.origin!==Ze.origin||dt){Ce?e.location.replace(Q.location):e.location.assign(Q.location);return}}R=null;let we=Ce===!0?Ht.Replace:Ht.Push,pe=fe||Z_(H.navigation);if(cS.has(Q.status)&&pe&&xr(pe.formMethod))await Me(we,Pe,{submission:At({},pe,{formAction:Q.location}),preventScrollReset:oe});else if(Re)await Me(we,Pe,{overrideNavigation:zc(Pe),fetcherSubmission:pe,preventScrollReset:oe});else{let Ze=zc(Pe,pe);await Me(we,Pe,{overrideNavigation:Ze,preventScrollReset:oe})}}async function Bi(H,Q,te,fe,Ce){let Re=await Promise.all([...te.map(pe=>Cl("loader",Ce,pe,Q,a,s,f)),...fe.map(pe=>pe.matches&&pe.match&&pe.controller?Cl("loader",Pl(n.history,pe.path,pe.controller.signal),pe.match,pe.matches,a,s,f):{type:Kt.error,error:pr(404,{pathname:pe.path})})]),Pe=Re.slice(0,te.length),we=Re.slice(te.length);return await Promise.all([J_(H,te,Pe,Pe.map(()=>Ce.signal),!1,x.loaderData),J_(H,fe.map(pe=>pe.match),we,fe.map(pe=>pe.controller?pe.controller.signal:null),!0)]),{results:Re,loaderResults:Pe,fetcherResults:we}}function ai(){k=!0,D.push(...zn()),Ne.forEach((H,Q)=>{V.has(Q)&&(M.push(Q),Qt(Q))})}function li(H,Q,te){let fe=ya(x.matches,Q);Fr(H),ye({errors:{[fe.route.id]:te},fetchers:new Map(x.fetchers)})}function Fr(H){let Q=x.fetchers.get(H);V.has(H)&&!(Q&&Q.state==="loading"&&ct.has(H))&&Qt(H),Ne.delete(H),ct.delete(H),Xe.delete(H),x.fetchers.delete(H)}function Qt(H){let Q=V.get(H);$e(Q,"Expected fetch controller: "+H),Q.abort(),V.delete(H)}function rr(H){for(let Q of H){let te=tr(Q),fe=da(te.data);x.fetchers.set(Q,fe)}}function zi(){let H=[],Q=!1;for(let te of Xe){let fe=x.fetchers.get(te);$e(fe,"Expected fetcher: "+te),fe.state==="loading"&&(Xe.delete(te),H.push(te),Q=!0)}return rr(H),Q}function ui(H){let Q=[];for(let[te,fe]of ct)if(fe<H){let Ce=x.fetchers.get(te);$e(Ce,"Expected fetcher: "+te),Ce.state==="loading"&&(Qt(te),ct.delete(te),Q.push(te))}return rr(Q),Q.length>0}function $i(H,Q){let te=x.blockers.get(H)||kl;return me.get(H)!==Q&&me.set(H,Q),te}function qi(H){x.blockers.delete(H),me.delete(H)}function Tt(H,Q){let te=x.blockers.get(H)||kl;$e(te.state==="unblocked"&&Q.state==="blocked"||te.state==="blocked"&&Q.state==="blocked"||te.state==="blocked"&&Q.state==="proceeding"||te.state==="blocked"&&Q.state==="unblocked"||te.state==="proceeding"&&Q.state==="unblocked","Invalid blocker state transition: "+te.state+" -> "+Q.state);let fe=new Map(x.blockers);fe.set(H,Q),ye({blockers:fe})}function bt(H){let{currentLocation:Q,nextLocation:te,historyAction:fe}=H;if(me.size===0)return;me.size>1&&Ra(!1,"A router only supports one blocker at a time");let Ce=Array.from(me.entries()),[Re,Pe]=Ce[Ce.length-1],we=x.blockers.get(Re);if(!(we&&we.state==="proceeding")&&Pe({currentLocation:Q,nextLocation:te,historyAction:fe}))return Re}function zn(H){let Q=[];return se.forEach((te,fe)=>{(!H||H(fe))&&(te.cancel(),Q.push(fe),se.delete(fe))}),Q}function Mo(H,Q,te){if(T=H,b=Q,A=te||null,!L&&x.navigation===qf){L=!0;let fe=jr(x.location,x.matches);fe!=null&&ye({restoreScrollPosition:fe})}return()=>{T=null,b=null,A=null}}function _r(H,Q){return A&&A(H,Q.map(fe=>TS(fe,x.loaderData)))||H.key}function ci(H,Q){if(T&&b){let te=_r(H,Q);T[te]=b()}}function jr(H,Q){if(T){let te=_r(H,Q),fe=T[te];if(typeof fe=="number")return fe}return null}function Vo(H){a={},d=cp(H,s,void 0,a)}return q={get basename(){return f},get state(){return x},get routes(){return u},initialize:F,subscribe:ve,enableScrollRestoration:Mo,navigate:Fe,fetch:ji,revalidate:je,createHref:H=>n.history.createHref(H),encodeLocation:H=>n.history.encodeLocation(H),getFetcher:tr,deleteFetcher:Fr,dispose:X,getBlocker:$i,deleteBlocker:qi,_internalFetchControllers:V,_internalActiveDeferreds:se,_internalSetRoutes:Vo},q}function pS(n){return n!=null&&("formData"in n&&n.formData!=null||"body"in n&&n.body!==void 0)}function hp(n,e,t,i,s,a,u){let d,f;if(a!=null&&u!=="path"){d=[];for(let _ of e)if(d.push(_),_.route.id===a){f=_;break}}else d=e,f=e[e.length-1];let m=Nh(s||".",cu(d).map(_=>_.pathnameBase),Fa(n.pathname,t)||n.pathname,u==="path");return s==null&&(m.search=n.search,m.hash=n.hash),(s==null||s===""||s===".")&&f&&f.route.index&&!im(m.search)&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),i&&t!=="/"&&(m.pathname=m.pathname==="/"?t:bi([t,m.pathname])),ms(m)}function $_(n,e,t,i){if(!i||!pS(i))return{path:t};if(i.formMethod&&!ES(i.formMethod))return{path:t,error:pr(405,{method:i.formMethod})};let s=()=>({path:t,error:pr(400,{type:"invalid-body"})}),a=i.formMethod||"get",u=n?a.toUpperCase():a.toLowerCase(),d=K0(t);if(i.body!==void 0){if(i.formEncType==="text/plain"){if(!xr(u))return s();let T=typeof i.body=="string"?i.body:i.body instanceof FormData||i.body instanceof URLSearchParams?Array.from(i.body.entries()).reduce((A,b)=>{let[L,N]=b;return""+A+L+"="+N+`
`},""):String(i.body);return{path:t,submission:{formMethod:u,formAction:d,formEncType:i.formEncType,formData:void 0,json:void 0,text:T}}}else if(i.formEncType==="application/json"){if(!xr(u))return s();try{let T=typeof i.body=="string"?JSON.parse(i.body):i.body;return{path:t,submission:{formMethod:u,formAction:d,formEncType:i.formEncType,formData:void 0,json:T,text:void 0}}}catch{return s()}}}$e(typeof FormData=="function","FormData is not available in this environment");let f,m;if(i.formData)f=dp(i.formData),m=i.formData;else if(i.body instanceof FormData)f=dp(i.body),m=i.body;else if(i.body instanceof URLSearchParams)f=i.body,m=K_(f);else if(i.body==null)f=new URLSearchParams,m=new FormData;else try{f=new URLSearchParams(i.body),m=K_(f)}catch{return s()}let _={formMethod:u,formAction:d,formEncType:i&&i.formEncType||"application/x-www-form-urlencoded",formData:m,json:void 0,text:void 0};if(xr(_.formMethod))return{path:t,submission:_};let E=bo(t);return e&&E.search&&im(E.search)&&f.append("index",""),E.search="?"+f,{path:ms(E),submission:_}}function mS(n,e){let t=n;if(e){let i=n.findIndex(s=>s.route.id===e);i>=0&&(t=n.slice(0,i))}return t}function q_(n,e,t,i,s,a,u,d,f,m,_,E,T,A){let b=A?Object.values(A)[0]:T?Object.values(T)[0]:void 0,L=n.createURL(e.location),N=n.createURL(s),K=A?Object.keys(A)[0]:void 0,q=mS(t,K).filter((ee,oe)=>{if(ee.route.lazy)return!0;if(ee.route.loader==null)return!1;if(gS(e.loaderData,e.matches[oe],ee)||u.some(k=>k===ee.route.id))return!0;let R=e.matches[oe],S=ee;return W_(ee,At({currentUrl:L,currentParams:R.params,nextUrl:N,nextParams:S.params},i,{actionResult:b,defaultShouldRevalidate:a||L.pathname+L.search===N.pathname+N.search||L.search!==N.search||H0(R,S)}))}),x=[];return f.forEach((ee,oe)=>{if(!t.some(M=>M.route.id===ee.routeId))return;let R=ga(_,ee.path,E);if(!R){x.push({key:oe,routeId:ee.routeId,path:ee.path,matches:null,match:null,controller:null});return}let S=e.fetchers.get(oe),k=fp(R,ee.path),D=!1;m.has(oe)?D=!1:d.includes(oe)?D=!0:S&&S.state!=="idle"&&S.data===void 0?D=a:D=W_(k,At({currentUrl:L,currentParams:e.matches[e.matches.length-1].params,nextUrl:N,nextParams:t[t.length-1].params},i,{actionResult:b,defaultShouldRevalidate:a})),D&&x.push({key:oe,routeId:ee.routeId,path:ee.path,matches:R,match:k,controller:new AbortController})}),[q,x]}function gS(n,e,t){let i=!e||t.route.id!==e.route.id,s=n[t.route.id]===void 0;return i||s}function H0(n,e){let t=n.route.path;return n.pathname!==e.pathname||t!=null&&t.endsWith("*")&&n.params["*"]!==e.params["*"]}function W_(n,e){if(n.route.shouldRevalidate){let t=n.route.shouldRevalidate(e);if(typeof t=="boolean")return t}return e.defaultShouldRevalidate}async function H_(n,e,t){if(!n.lazy)return;let i=await n.lazy();if(!n.lazy)return;let s=t[n.id];$e(s,"No route found in manifest");let a={};for(let u in i){let f=s[u]!==void 0&&u!=="hasErrorBoundary";Ra(!f,'Route "'+s.id+'" has a static property "'+u+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+u+'" will be ignored.')),!f&&!FI.has(u)&&(a[u]=i[u])}Object.assign(s,a),Object.assign(s,At({},e(s),{lazy:void 0}))}async function Cl(n,e,t,i,s,a,u,d){d===void 0&&(d={});let f,m,_,E=b=>{let L,N=new Promise((K,j)=>L=j);return _=()=>L(),e.signal.addEventListener("abort",_),Promise.race([b({request:e,params:t.params,context:d.requestContext}),N])};try{let b=t.route[n];if(t.route.lazy)if(b)m=(await Promise.all([E(b),H_(t.route,a,s)]))[0];else if(await H_(t.route,a,s),b=t.route[n],b)m=await E(b);else if(n==="action"){let L=new URL(e.url),N=L.pathname+L.search;throw pr(405,{method:e.method,pathname:N,routeId:t.route.id})}else return{type:Kt.data,data:void 0};else if(b)m=await E(b);else{let L=new URL(e.url),N=L.pathname+L.search;throw pr(404,{pathname:N})}$e(m!==void 0,"You defined "+(n==="action"?"an action":"a loader")+" for route "+('"'+t.route.id+"\" but didn't return anything from your `"+n+"` ")+"function. Please return a value or `null`.")}catch(b){f=Kt.error,m=b}finally{_&&e.signal.removeEventListener("abort",_)}if(wS(m)){let b=m.status;if(uS.has(b)){let K=m.headers.get("Location");if($e(K,"Redirects returned/thrown from loaders/actions must have a Location header"),!W0.test(K))K=hp(new URL(e.url),i.slice(0,i.indexOf(t)+1),u,!0,K);else if(!d.isStaticRequest){let j=new URL(e.url),q=K.startsWith("//")?new URL(j.protocol+K):new URL(K),x=Fa(q.pathname,u)!=null;q.origin===j.origin&&x&&(K=q.pathname+q.search+q.hash)}if(d.isStaticRequest)throw m.headers.set("Location",K),m;return{type:Kt.redirect,status:b,location:K,revalidate:m.headers.get("X-Remix-Revalidate")!==null}}if(d.isRouteRequest)throw{type:f||Kt.data,response:m};let L,N=m.headers.get("Content-Type");return N&&/\bapplication\/json\b/.test(N)?L=await m.json():L=await m.text(),f===Kt.error?{type:f,error:new rm(b,m.statusText,L),headers:m.headers}:{type:Kt.data,data:L,statusCode:m.status,headers:m.headers}}if(f===Kt.error)return{type:f,error:m};if(vS(m)){var T,A;return{type:Kt.deferred,deferredData:m,statusCode:(T=m.init)==null?void 0:T.status,headers:((A=m.init)==null?void 0:A.headers)&&new Headers(m.init.headers)}}return{type:Kt.data,data:m}}function Pl(n,e,t,i){let s=n.createURL(K0(e)).toString(),a={signal:t};if(i&&xr(i.formMethod)){let{formMethod:u,formEncType:d}=i;a.method=u.toUpperCase(),d==="application/json"?(a.headers=new Headers({"Content-Type":d}),a.body=JSON.stringify(i.json)):d==="text/plain"?a.body=i.text:d==="application/x-www-form-urlencoded"&&i.formData?a.body=dp(i.formData):a.body=i.formData}return new Request(s,a)}function dp(n){let e=new URLSearchParams;for(let[t,i]of n.entries())e.append(t,typeof i=="string"?i:i.name);return e}function K_(n){let e=new FormData;for(let[t,i]of n.entries())e.append(t,i);return e}function yS(n,e,t,i,s){let a={},u=null,d,f=!1,m={};return t.forEach((_,E)=>{let T=e[E].route.id;if($e(!va(_),"Cannot handle redirect results in processLoaderData"),jl(_)){let A=ya(n,T),b=_.error;i&&(b=Object.values(i)[0],i=void 0),u=u||{},u[A.route.id]==null&&(u[A.route.id]=b),a[T]=void 0,f||(f=!0,d=$0(_.error)?_.error.status:500),_.headers&&(m[T]=_.headers)}else as(_)?(s.set(T,_.deferredData),a[T]=_.deferredData.data):a[T]=_.data,_.statusCode!=null&&_.statusCode!==200&&!f&&(d=_.statusCode),_.headers&&(m[T]=_.headers)}),i&&(u=i,a[Object.keys(i)[0]]=void 0),{loaderData:a,errors:u,statusCode:d||200,loaderHeaders:m}}function G_(n,e,t,i,s,a,u,d){let{loaderData:f,errors:m}=yS(e,t,i,s,d);for(let _=0;_<a.length;_++){let{key:E,match:T,controller:A}=a[_];$e(u!==void 0&&u[_]!==void 0,"Did not find corresponding fetcher result");let b=u[_];if(!(A&&A.signal.aborted))if(jl(b)){let L=ya(n.matches,T==null?void 0:T.route.id);m&&m[L.route.id]||(m=At({},m,{[L.route.id]:b.error})),n.fetchers.delete(E)}else if(va(b))$e(!1,"Unhandled fetcher revalidation redirect");else if(as(b))$e(!1,"Unhandled fetcher deferred data");else{let L=da(b.data);n.fetchers.set(E,L)}}return{loaderData:f,errors:m}}function Q_(n,e,t,i){let s=At({},e);for(let a of t){let u=a.route.id;if(e.hasOwnProperty(u)?e[u]!==void 0&&(s[u]=e[u]):n[u]!==void 0&&a.route.loader&&(s[u]=n[u]),i&&i.hasOwnProperty(u))break}return s}function ya(n,e){return(e?n.slice(0,n.findIndex(i=>i.route.id===e)+1):[...n]).reverse().find(i=>i.route.hasErrorBoundary===!0)||n[0]}function Y_(n){let e=n.find(t=>t.index||!t.path||t.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function pr(n,e){let{pathname:t,routeId:i,method:s,type:a}=e===void 0?{}:e,u="Unknown Server Error",d="Unknown @remix-run/router error";return n===400?(u="Bad Request",s&&t&&i?d="You made a "+s+' request to "'+t+'" but '+('did not provide a `loader` for route "'+i+'", ')+"so there is no way to handle the request.":a==="defer-action"?d="defer() is not supported in actions":a==="invalid-body"&&(d="Unable to encode submission body")):n===403?(u="Forbidden",d='Route "'+i+'" does not match URL "'+t+'"'):n===404?(u="Not Found",d='No route matches URL "'+t+'"'):n===405&&(u="Method Not Allowed",s&&t&&i?d="You made a "+s.toUpperCase()+' request to "'+t+'" but '+('did not provide an `action` for route "'+i+'", ')+"so there is no way to handle the request.":s&&(d='Invalid request method "'+s.toUpperCase()+'"')),new rm(n||500,u,new Error(d),!0)}function X_(n){for(let e=n.length-1;e>=0;e--){let t=n[e];if(va(t))return{result:t,idx:e}}}function K0(n){let e=typeof n=="string"?bo(n):n;return ms(At({},e,{hash:""}))}function _S(n,e){return n.pathname!==e.pathname||n.search!==e.search?!1:n.hash===""?e.hash!=="":n.hash===e.hash?!0:e.hash!==""}function as(n){return n.type===Kt.deferred}function jl(n){return n.type===Kt.error}function va(n){return(n&&n.type)===Kt.redirect}function vS(n){let e=n;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function wS(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.headers=="object"&&typeof n.body<"u"}function ES(n){return lS.has(n.toLowerCase())}function xr(n){return sS.has(n.toLowerCase())}async function J_(n,e,t,i,s,a){for(let u=0;u<t.length;u++){let d=t[u],f=e[u];if(!f)continue;let m=n.find(E=>E.route.id===f.route.id),_=m!=null&&!H0(m,f)&&(a&&a[f.route.id])!==void 0;if(as(d)&&(s||_)){let E=i[u];$e(E,"Expected an AbortSignal for revalidating fetcher deferred result"),await G0(d,E,s).then(T=>{T&&(t[u]=T||t[u])})}}}async function G0(n,e,t){if(t===void 0&&(t=!1),!await n.deferredData.resolveData(e)){if(t)try{return{type:Kt.data,data:n.deferredData.unwrappedData}}catch(s){return{type:Kt.error,error:s}}return{type:Kt.data,data:n.deferredData.data}}}function im(n){return new URLSearchParams(n).getAll("index").some(e=>e==="")}function TS(n,e){let{route:t,pathname:i,params:s}=n;return{id:t.id,pathname:i,params:s,data:e[t.id],handle:t.handle}}function fp(n,e){let t=typeof e=="string"?bo(e).search:e.search;if(n[n.length-1].route.index&&im(t||""))return n[n.length-1];let i=cu(n);return i[i.length-1]}function Z_(n){let{formMethod:e,formAction:t,formEncType:i,text:s,formData:a,json:u}=n;if(!(!e||!t||!i)){if(s!=null)return{formMethod:e,formAction:t,formEncType:i,formData:void 0,json:void 0,text:s};if(a!=null)return{formMethod:e,formAction:t,formEncType:i,formData:a,json:void 0,text:void 0};if(u!==void 0)return{formMethod:e,formAction:t,formEncType:i,formData:void 0,json:u,text:void 0}}}function zc(n,e){return e?{state:"loading",location:n,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:n,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function IS(n,e){return{state:"submitting",location:n,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function xl(n,e){return n?{state:"loading",formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text,data:e," _hasFetcherDoneAnything ":!0}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e," _hasFetcherDoneAnything ":!0}}function SS(n,e){return{state:"submitting",formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text,data:e?e.data:void 0," _hasFetcherDoneAnything ":!0}}function da(n){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:n," _hasFetcherDoneAnything ":!0}}/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pp(){return pp=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},pp.apply(this,arguments)}const Dh=Y.createContext(null),Q0=Y.createContext(null),ja=Y.createContext(null),om=Y.createContext(null),Ui=Y.createContext({outlet:null,matches:[],isDataRoute:!1}),Y0=Y.createContext(null);function RS(n,e){let{relative:t}=e===void 0?{}:e;Ba()||$e(!1);let{basename:i,navigator:s}=Y.useContext(ja),{hash:a,pathname:u,search:d}=J0(n,{relative:t}),f=u;return i!=="/"&&(f=u==="/"?i:bi([i,u])),s.createHref({pathname:f,search:d,hash:a})}function Ba(){return Y.useContext(om)!=null}function hu(){return Ba()||$e(!1),Y.useContext(om).location}function X0(n){Y.useContext(ja).static||Y.useLayoutEffect(n)}function As(){let{isDataRoute:n}=Y.useContext(Ui);return n?FS():AS()}function AS(){Ba()||$e(!1);let n=Y.useContext(Dh),{basename:e,navigator:t}=Y.useContext(ja),{matches:i}=Y.useContext(Ui),{pathname:s}=hu(),a=JSON.stringify(cu(i).map(f=>f.pathnameBase)),u=Y.useRef(!1);return X0(()=>{u.current=!0}),Y.useCallback(function(f,m){if(m===void 0&&(m={}),!u.current)return;if(typeof f=="number"){t.go(f);return}let _=Nh(f,JSON.parse(a),s,m.relative==="path");n==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:bi([e,_.pathname])),(m.replace?t.replace:t.push)(_,m.state,m)},[e,t,a,s,n])}const kS=Y.createContext(null);function CS(n){let e=Y.useContext(Ui).outlet;return e&&Y.createElement(kS.Provider,{value:n},e)}function J0(n,e){let{relative:t}=e===void 0?{}:e,{matches:i}=Y.useContext(Ui),{pathname:s}=hu(),a=JSON.stringify(cu(i).map(u=>u.pathnameBase));return Y.useMemo(()=>Nh(n,JSON.parse(a),s,t==="path"),[n,a,s,t])}function PS(n,e,t){Ba()||$e(!1);let{navigator:i}=Y.useContext(ja),{matches:s}=Y.useContext(Ui),a=s[s.length-1],u=a?a.params:{};a&&a.pathname;let d=a?a.pathnameBase:"/";a&&a.route;let f=hu(),m;m=f;let _=m.pathname||"/",E=d==="/"?_:_.slice(d.length)||"/",T=ga(n,{pathname:E});return OS(T&&T.map(b=>Object.assign({},b,{params:Object.assign({},u,b.params),pathname:bi([d,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?d:bi([d,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),s,t)}function xS(){let n=US(),e=$0(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Y.createElement(Y.Fragment,null,Y.createElement("h2",null,"Unexpected Application Error!"),Y.createElement("h3",{style:{fontStyle:"italic"}},e),t?Y.createElement("pre",{style:s},t):null,null)}const bS=Y.createElement(xS,null);class NS extends Y.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?Y.createElement(Ui.Provider,{value:this.props.routeContext},Y.createElement(Y0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function DS(n){let{routeContext:e,match:t,children:i}=n,s=Y.useContext(Dh);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),Y.createElement(Ui.Provider,{value:e},i)}function OS(n,e,t){var i;if(e===void 0&&(e=[]),t===void 0&&(t=null),n==null){var s;if((s=t)!=null&&s.errors)n=t.matches;else return null}let a=n,u=(i=t)==null?void 0:i.errors;if(u!=null){let d=a.findIndex(f=>f.route.id&&(u==null?void 0:u[f.route.id]));d>=0||$e(!1),a=a.slice(0,Math.min(a.length,d+1))}return a.reduceRight((d,f,m)=>{let _=f.route.id?u==null?void 0:u[f.route.id]:null,E=null;t&&(E=f.route.errorElement||bS);let T=e.concat(a.slice(0,m+1)),A=()=>{let b;return _?b=E:f.route.Component?b=Y.createElement(f.route.Component,null):f.route.element?b=f.route.element:b=d,Y.createElement(DS,{match:f,routeContext:{outlet:d,matches:T,isDataRoute:t!=null},children:b})};return t&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?Y.createElement(NS,{location:t.location,revalidation:t.revalidation,component:E,error:_,children:A(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):A()},null)}var mp;(function(n){n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate"})(mp||(mp={}));var Gl;(function(n){n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId"})(Gl||(Gl={}));function LS(n){let e=Y.useContext(Dh);return e||$e(!1),e}function MS(n){let e=Y.useContext(Q0);return e||$e(!1),e}function VS(n){let e=Y.useContext(Ui);return e||$e(!1),e}function Z0(n){let e=VS(),t=e.matches[e.matches.length-1];return t.route.id||$e(!1),t.route.id}function US(){var n;let e=Y.useContext(Y0),t=MS(Gl.UseRouteError),i=Z0(Gl.UseRouteError);return e||((n=t.errors)==null?void 0:n[i])}function FS(){let{router:n}=LS(mp.UseNavigateStable),e=Z0(Gl.UseNavigateStable),t=Y.useRef(!1);return X0(()=>{t.current=!0}),Y.useCallback(function(s,a){a===void 0&&(a={}),t.current&&(typeof s=="number"?n.navigate(s):n.navigate(s,pp({fromRouteId:e},a)))},[n,e])}const jS="startTransition",ev=CI[jS];function BS(n){let{fallbackElement:e,router:t,future:i}=n,[s,a]=Y.useState(t.state),{v7_startTransition:u}=i||{},d=Y.useCallback(E=>{u&&ev?ev(()=>a(E)):a(E)},[a,u]);Y.useLayoutEffect(()=>t.subscribe(d),[t,d]);let f=Y.useMemo(()=>({createHref:t.createHref,encodeLocation:t.encodeLocation,go:E=>t.navigate(E),push:(E,T,A)=>t.navigate(E,{state:T,preventScrollReset:A==null?void 0:A.preventScrollReset}),replace:(E,T,A)=>t.navigate(E,{replace:!0,state:T,preventScrollReset:A==null?void 0:A.preventScrollReset})}),[t]),m=t.basename||"/",_=Y.useMemo(()=>({router:t,navigator:f,static:!1,basename:m}),[t,f,m]);return Y.createElement(Y.Fragment,null,Y.createElement(Dh.Provider,{value:_},Y.createElement(Q0.Provider,{value:s},Y.createElement(WS,{basename:m,location:s.location,navigationType:s.historyAction,navigator:f},s.initialized?Y.createElement(zS,{routes:t.routes,state:s}):e))),null)}function zS(n){let{routes:e,state:t}=n;return PS(e,void 0,t)}function $S(n){let{to:e,replace:t,state:i,relative:s}=n;Ba()||$e(!1);let{matches:a}=Y.useContext(Ui),{pathname:u}=hu(),d=As(),f=Nh(e,cu(a).map(_=>_.pathnameBase),u,s==="path"),m=JSON.stringify(f);return Y.useEffect(()=>d(JSON.parse(m),{replace:t,state:i,relative:s}),[d,m,s,t,i]),null}function qS(n){return CS(n.context)}function WS(n){let{basename:e="/",children:t=null,location:i,navigationType:s=Ht.Pop,navigator:a,static:u=!1}=n;Ba()&&$e(!1);let d=e.replace(/^\/*/,"/"),f=Y.useMemo(()=>({basename:d,navigator:a,static:u}),[d,a,u]);typeof i=="string"&&(i=bo(i));let{pathname:m="/",search:_="",hash:E="",state:T=null,key:A="default"}=i,b=Y.useMemo(()=>{let L=Fa(m,d);return L==null?null:{location:{pathname:L,search:_,hash:E,state:T,key:A},navigationType:s}},[d,m,_,E,T,A,s]);return b==null?null:Y.createElement(ja.Provider,{value:f},Y.createElement(om.Provider,{children:t,value:b}))}var tv;(function(n){n[n.pending=0]="pending",n[n.success=1]="success",n[n.error=2]="error"})(tv||(tv={}));new Promise(()=>{});function HS(n){let e={hasErrorBoundary:n.ErrorBoundary!=null||n.errorElement!=null};return n.Component&&Object.assign(e,{element:Y.createElement(n.Component),Component:void 0}),n.ErrorBoundary&&Object.assign(e,{errorElement:Y.createElement(n.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ql(){return Ql=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Ql.apply(this,arguments)}function KS(n,e){if(n==null)return{};var t={},i=Object.keys(n),s,a;for(a=0;a<i.length;a++)s=i[a],!(e.indexOf(s)>=0)&&(t[s]=n[s]);return t}function GS(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function QS(n,e){return n.button===0&&(!e||e==="_self")&&!GS(n)}const YS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function XS(n,e){return fS({basename:void 0,future:Ql({},void 0,{v7_prependBasename:!0}),history:MI({window:void 0}),hydrationData:JS(),routes:n,mapRouteProperties:HS}).initialize()}function JS(){var n;let e=(n=window)==null?void 0:n.__staticRouterHydrationData;return e&&e.errors&&(e=Ql({},e,{errors:ZS(e.errors)})),e}function ZS(n){if(!n)return null;let e=Object.entries(n),t={};for(let[i,s]of e)if(s&&s.__type==="RouteErrorResponse")t[i]=new rm(s.status,s.statusText,s.data,s.internal===!0);else if(s&&s.__type==="Error"){if(s.__subType){let a=window[s.__subType];if(typeof a=="function")try{let u=new a(s.message);u.stack="",t[i]=u}catch{}}if(t[i]==null){let a=new Error(s.message);a.stack="",t[i]=a}}else t[i]=s;return t}const eR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",tR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hh=Y.forwardRef(function(e,t){let{onClick:i,relative:s,reloadDocument:a,replace:u,state:d,target:f,to:m,preventScrollReset:_}=e,E=KS(e,YS),{basename:T}=Y.useContext(ja),A,b=!1;if(typeof m=="string"&&tR.test(m)&&(A=m,eR))try{let j=new URL(window.location.href),q=m.startsWith("//")?new URL(j.protocol+m):new URL(m),x=Fa(q.pathname,T);q.origin===j.origin&&x!=null?m=x+q.search+q.hash:b=!0}catch{}let L=RS(m,{relative:s}),N=nR(m,{replace:u,state:d,target:f,preventScrollReset:_,relative:s});function K(j){i&&i(j),j.defaultPrevented||N(j)}return Y.createElement("a",Ql({},E,{href:A||L,onClick:b||a?i:K,ref:t,target:f}))});var nv;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher"})(nv||(nv={}));var rv;(function(n){n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(rv||(rv={}));function nR(n,e){let{target:t,replace:i,state:s,preventScrollReset:a,relative:u}=e===void 0?{}:e,d=As(),f=hu(),m=J0(n,{relative:u});return Y.useCallback(_=>{if(QS(_,t)){_.preventDefault();let E=i!==void 0?i:ms(f)===ms(m);d(n,{replace:E,state:s,preventScrollReset:a,relative:u})}},[f,d,m,i,s,t,n,a,u])}var Tn=function(){return Tn=Object.assign||function(e){for(var t,i=1,s=arguments.length;i<s;i++){t=arguments[i];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Tn.apply(this,arguments)};function sm(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function Yl(n,e,t){if(t||arguments.length===2)for(var i=0,s=e.length,a;i<s;i++)(a||!(i in e))&&(a||(a=Array.prototype.slice.call(e,0,i)),a[i]=e[i]);return n.concat(a||Array.prototype.slice.call(e))}var Et="-ms-",Bl="-moz-",ot="-webkit-",ew="comm",Oh="rule",am="decl",rR="@import",tw="@keyframes",iR="@layer",nw=Math.abs,lm=String.fromCharCode,gp=Object.assign;function oR(n,e){return nn(n,0)^45?(((e<<2^nn(n,0))<<2^nn(n,1))<<2^nn(n,2))<<2^nn(n,3):0}function rw(n){return n.trim()}function Ri(n,e){return(n=e.exec(n))?n[0]:n}function Be(n,e,t){return n.replace(e,t)}function Jc(n,e,t){return n.indexOf(e,t)}function nn(n,e){return n.charCodeAt(e)|0}function gs(n,e,t){return n.slice(e,t)}function br(n){return n.length}function iw(n){return n.length}function Dl(n,e){return e.push(n),n}function sR(n,e){return n.map(e).join("")}function iv(n,e){return n.filter(function(t){return!Ri(t,e)})}var Lh=1,Aa=1,ow=0,mr=0,Bt=0,za="";function Mh(n,e,t,i,s,a,u,d){return{value:n,root:e,parent:t,type:i,props:s,children:a,line:Lh,column:Aa,length:u,return:"",siblings:d}}function go(n,e){return gp(Mh("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function ha(n){for(;n.root;)n=go(n.root,{children:[n]});Dl(n,n.siblings)}function aR(){return Bt}function lR(){return Bt=mr>0?nn(za,--mr):0,Aa--,Bt===10&&(Aa=1,Lh--),Bt}function Dr(){return Bt=mr<ow?nn(za,mr++):0,Aa++,Bt===10&&(Aa=1,Lh++),Bt}function wo(){return nn(za,mr)}function Zc(){return mr}function Vh(n,e){return gs(za,n,e)}function Xl(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function uR(n){return Lh=Aa=1,ow=br(za=n),mr=0,[]}function cR(n){return za="",n}function Wf(n){return rw(Vh(mr-1,yp(n===91?n+2:n===40?n+1:n)))}function hR(n){for(;(Bt=wo())&&Bt<33;)Dr();return Xl(n)>2||Xl(Bt)>3?"":" "}function dR(n,e){for(;--e&&Dr()&&!(Bt<48||Bt>102||Bt>57&&Bt<65||Bt>70&&Bt<97););return Vh(n,Zc()+(e<6&&wo()==32&&Dr()==32))}function yp(n){for(;Dr();)switch(Bt){case n:return mr;case 34:case 39:n!==34&&n!==39&&yp(Bt);break;case 40:n===41&&yp(n);break;case 92:Dr();break}return mr}function fR(n,e){for(;Dr()&&n+Bt!==57;)if(n+Bt===84&&wo()===47)break;return"/*"+Vh(e,mr-1)+"*"+lm(n===47?n:Dr())}function pR(n){for(;!Xl(wo());)Dr();return Vh(n,mr)}function mR(n){return cR(eh("",null,null,null,[""],n=uR(n),0,[0],n))}function eh(n,e,t,i,s,a,u,d,f){for(var m=0,_=0,E=u,T=0,A=0,b=0,L=1,N=1,K=1,j=0,q="",x=s,ee=a,oe=i,R=q;N;)switch(b=j,j=Dr()){case 40:if(b!=108&&nn(R,E-1)==58){Jc(R+=Be(Wf(j),"&","&\f"),"&\f",nw(m?d[m-1]:0))!=-1&&(K=-1);break}case 34:case 39:case 91:R+=Wf(j);break;case 9:case 10:case 13:case 32:R+=hR(b);break;case 92:R+=dR(Zc()-1,7);continue;case 47:switch(wo()){case 42:case 47:Dl(gR(fR(Dr(),Zc()),e,t,f),f),(Xl(b||1)==5||Xl(wo()||1)==5)&&br(R)&&gs(R,-1,void 0)!==" "&&(R+=" ");break;default:R+="/"}break;case 123*L:d[m++]=br(R)*K;case 125*L:case 59:case 0:switch(j){case 0:case 125:N=0;case 59+_:K==-1&&(R=Be(R,/\f/g,"")),A>0&&(br(R)-E||L===0&&b===47)&&Dl(A>32?sv(R+";",i,t,E-1,f):sv(Be(R," ","")+";",i,t,E-2,f),f);break;case 59:R+=";";default:if(Dl(oe=ov(R,e,t,m,_,s,d,q,x=[],ee=[],E,a),a),j===123)if(_===0)eh(R,e,oe,oe,x,a,E,d,ee);else switch(T===99&&nn(R,3)===110?100:T){case 100:case 108:case 109:case 115:eh(n,oe,oe,i&&Dl(ov(n,oe,oe,0,0,s,d,q,s,x=[],E,ee),ee),s,ee,E,d,i?x:ee);break;default:eh(R,oe,oe,oe,[""],ee,0,d,ee)}}m=_=A=0,L=K=1,q=R="",E=u;break;case 58:E=1+br(R),A=b;default:if(L<1){if(j==123)--L;else if(j==125&&L++==0&&lR()==125)continue}switch(R+=lm(j),j*L){case 38:K=_>0?1:(R+="\f",-1);break;case 44:d[m++]=(br(R)-1)*K,K=1;break;case 64:wo()===45&&(R+=Wf(Dr())),T=wo(),_=E=br(q=R+=pR(Zc())),j++;break;case 45:b===45&&br(R)==2&&(L=0)}}return a}function ov(n,e,t,i,s,a,u,d,f,m,_,E){for(var T=s-1,A=s===0?a:[""],b=iw(A),L=0,N=0,K=0;L<i;++L)for(var j=0,q=gs(n,T+1,T=nw(N=u[L])),x=n;j<b;++j)(x=rw(N>0?A[j]+" "+q:Be(q,/&\f/g,A[j])))&&(f[K++]=x);return Mh(n,e,t,s===0?Oh:d,f,m,_,E)}function gR(n,e,t,i){return Mh(n,e,t,ew,lm(aR()),gs(n,2,-2),0,i)}function sv(n,e,t,i,s){return Mh(n,e,t,am,gs(n,0,i),gs(n,i+1,-1),i,s)}function sw(n,e,t){switch(oR(n,e)){case 5103:return ot+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ot+n+n;case 4855:return ot+n.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+n;case 4789:return Bl+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return ot+n+Bl+n+Et+n+n;case 5936:switch(nn(n,e+11)){case 114:return ot+n+Et+Be(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return ot+n+Et+Be(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return ot+n+Et+Be(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return ot+n+Et+n+n;case 6165:return ot+n+Et+"flex-"+n+n;case 5187:return ot+n+Be(n,/(\w+).+(:[^]+)/,ot+"box-$1$2"+Et+"flex-$1$2")+n;case 5443:return ot+n+Et+"flex-item-"+Be(n,/flex-|-self/g,"")+(Ri(n,/flex-|baseline/)?"":Et+"grid-row-"+Be(n,/flex-|-self/g,""))+n;case 4675:return ot+n+Et+"flex-line-pack"+Be(n,/align-content|flex-|-self/g,"")+n;case 5548:return ot+n+Et+Be(n,"shrink","negative")+n;case 5292:return ot+n+Et+Be(n,"basis","preferred-size")+n;case 6060:return ot+"box-"+Be(n,"-grow","")+ot+n+Et+Be(n,"grow","positive")+n;case 4554:return ot+Be(n,/([^-])(transform)/g,"$1"+ot+"$2")+n;case 6187:return Be(Be(Be(n,/(zoom-|grab)/,ot+"$1"),/(image-set)/,ot+"$1"),n,"")+n;case 5495:case 3959:return Be(n,/(image-set\([^]*)/,ot+"$1$`$1");case 4968:return Be(Be(n,/(.+:)(flex-)?(.*)/,ot+"box-pack:$3"+Et+"flex-pack:$3"),/space-between/,"justify")+ot+n+n;case 4200:if(!Ri(n,/flex-|baseline/))return Et+"grid-column-align"+gs(n,e)+n;break;case 2592:case 3360:return Et+Be(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(i,s){return e=s,Ri(i.props,/grid-\w+-end/)})?~Jc(n+(t=t[e].value),"span",0)?n:Et+Be(n,"-start","")+n+Et+"grid-row-span:"+(~Jc(t,"span",0)?Ri(t,/\d+/):+Ri(t,/\d+/)-+Ri(n,/\d+/))+";":Et+Be(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(i){return Ri(i.props,/grid-\w+-start/)})?n:Et+Be(Be(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Be(n,/(.+)-inline(.+)/,ot+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(br(n)-1-e>6)switch(nn(n,e+1)){case 109:if(nn(n,e+4)!==45)break;case 102:return Be(n,/(.+:)(.+)-([^]+)/,"$1"+ot+"$2-$3$1"+Bl+(nn(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~Jc(n,"stretch",0)?sw(Be(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return Be(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,s,a,u,d,f,m){return Et+s+":"+a+m+(u?Et+s+"-span:"+(d?f:+f-+a)+m:"")+n});case 4949:if(nn(n,e+6)===121)return Be(n,":",":"+ot)+n;break;case 6444:switch(nn(n,nn(n,14)===45?18:11)){case 120:return Be(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ot+(nn(n,14)===45?"inline-":"")+"box$3$1"+ot+"$2$3$1"+Et+"$2box$3")+n;case 100:return Be(n,":",":"+Et)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Be(n,"scroll-","scroll-snap-")+n}return n}function dh(n,e){for(var t="",i=0;i<n.length;i++)t+=e(n[i],i,n,e)||"";return t}function yR(n,e,t,i){switch(n.type){case iR:if(n.children.length)break;case rR:case am:return n.return=n.return||n.value;case ew:return"";case tw:return n.return=n.value+"{"+dh(n.children,i)+"}";case Oh:if(!br(n.value=n.props.join(",")))return""}return br(t=dh(n.children,i))?n.return=n.value+"{"+t+"}":""}function _R(n){var e=iw(n);return function(t,i,s,a){for(var u="",d=0;d<e;d++)u+=n[d](t,i,s,a)||"";return u}}function vR(n){return function(e){e.root||(e=e.return)&&n(e)}}function wR(n,e,t,i){if(n.length>-1&&!n.return)switch(n.type){case am:n.return=sw(n.value,n.length,t);return;case tw:return dh([go(n,{value:Be(n.value,"@","@"+ot)})],i);case Oh:if(n.length)return sR(t=n.props,function(s){switch(Ri(s,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ha(go(n,{props:[Be(s,/:(read-\w+)/,":"+Bl+"$1")]})),ha(go(n,{props:[s]})),gp(n,{props:iv(t,i)});break;case"::placeholder":ha(go(n,{props:[Be(s,/:(plac\w+)/,":"+ot+"input-$1")]})),ha(go(n,{props:[Be(s,/:(plac\w+)/,":"+Bl+"$1")]})),ha(go(n,{props:[Be(s,/:(plac\w+)/,Et+"input-$1")]})),ha(go(n,{props:[s]})),gp(n,{props:iv(t,i)});break}return""})}}var ER={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Jn={},ka=typeof process<"u"&&Jn!==void 0&&(Jn.REACT_APP_SC_ATTR||Jn.SC_ATTR)||"data-styled",um=typeof window<"u"&&"HTMLElement"in window,TR=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Jn!==void 0&&Jn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Jn.REACT_APP_SC_DISABLE_SPEEDY!==""?Jn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Jn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Jn!==void 0&&Jn.SC_DISABLE_SPEEDY!==void 0&&Jn.SC_DISABLE_SPEEDY!==""&&Jn.SC_DISABLE_SPEEDY!=="false"&&Jn.SC_DISABLE_SPEEDY),IR={},Uh=Object.freeze([]),Ca=Object.freeze({});function aw(n,e,t){return t===void 0&&(t=Ca),n.theme!==t.theme&&n.theme||e||t.theme}var lw=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),SR=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,RR=/(^-|-$)/g;function av(n){return n.replace(SR,"-").replace(RR,"")}var AR=/(a)(d)/gi,lv=function(n){return String.fromCharCode(n+(n>25?39:97))};function _p(n){var e,t="";for(e=Math.abs(n);e>52;e=e/52|0)t=lv(e%52)+t;return(lv(e%52)+t).replace(AR,"$1-$2")}var Hf,_a=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},uw=function(n){return _a(5381,n)};function cw(n){return _p(uw(n)>>>0)}function kR(n){return n.displayName||n.name||"Component"}function Kf(n){return typeof n=="string"&&!0}var hw=typeof Symbol=="function"&&Symbol.for,dw=hw?Symbol.for("react.memo"):60115,CR=hw?Symbol.for("react.forward_ref"):60112,PR={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},xR={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},fw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},bR=((Hf={})[CR]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Hf[dw]=fw,Hf);function uv(n){return("type"in(e=n)&&e.type.$$typeof)===dw?fw:"$$typeof"in n?bR[n.$$typeof]:PR;var e}var NR=Object.defineProperty,DR=Object.getOwnPropertyNames,cv=Object.getOwnPropertySymbols,OR=Object.getOwnPropertyDescriptor,LR=Object.getPrototypeOf,hv=Object.prototype;function pw(n,e,t){if(typeof e!="string"){if(hv){var i=LR(e);i&&i!==hv&&pw(n,i,t)}var s=DR(e);cv&&(s=s.concat(cv(e)));for(var a=uv(n),u=uv(e),d=0;d<s.length;++d){var f=s[d];if(!(f in xR||t&&t[f]||u&&f in u||a&&f in a)){var m=OR(e,f);try{NR(n,f,m)}catch{}}}}return n}function Pa(n){return typeof n=="function"}function cm(n){return typeof n=="object"&&"styledComponentId"in n}function ls(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function vp(n,e){if(n.length===0)return"";for(var t=n[0],i=1;i<n.length;i++)t+=n[i];return t}function Jl(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function wp(n,e,t){if(t===void 0&&(t=!1),!t&&!Jl(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)n[i]=wp(n[i],e[i]);else if(Jl(e))for(var i in e)n[i]=wp(n[i],e[i]);return n}function hm(n,e){Object.defineProperty(n,"toString",{value:e})}function du(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var MR=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,i=0;i<e;i++)t+=this.groupSizes[i];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,a=s;e>=a;)if((a<<=1)<0)throw du(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var u=s;u<a;u++)this.groupSizes[u]=0}for(var d=this.indexOfGroup(e+1),f=(u=0,t.length);u<f;u++)this.tag.insertRule(d,t[u])&&(this.groupSizes[e]++,d++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],i=this.indexOfGroup(e),s=i+t;this.groupSizes[e]=0;for(var a=i;a<s;a++)this.tag.deleteRule(i)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var i=this.groupSizes[e],s=this.indexOfGroup(e),a=s+i,u=s;u<a;u++)t+="".concat(this.tag.getRule(u)).concat(`/*!sc*/
`);return t},n}(),th=new Map,fh=new Map,Gf=1,$c=function(n){if(th.has(n))return th.get(n);for(;fh.has(Gf);)Gf++;var e=Gf++;return th.set(n,e),fh.set(e,n),e},VR=function(n,e){th.set(n,e),fh.set(e,n)},UR="style[".concat(ka,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),FR=new RegExp("^".concat(ka,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),jR=function(n,e,t){for(var i,s=t.split(","),a=0,u=s.length;a<u;a++)(i=s[a])&&n.registerName(e,i)},BR=function(n,e){for(var t,i=((t=e.textContent)!==null&&t!==void 0?t:"").split(`/*!sc*/
`),s=[],a=0,u=i.length;a<u;a++){var d=i[a].trim();if(d){var f=d.match(FR);if(f){var m=0|parseInt(f[1],10),_=f[2];m!==0&&(VR(_,m),jR(n,_,f[3]),n.getTag().insertRules(m,s)),s.length=0}else s.push(d)}}};function zR(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var mw=function(n){var e=document.head,t=n||e,i=document.createElement("style"),s=function(d){var f=Array.from(d.querySelectorAll("style[".concat(ka,"]")));return f[f.length-1]}(t),a=s!==void 0?s.nextSibling:null;i.setAttribute(ka,"active"),i.setAttribute("data-styled-version","6.0.7");var u=zR();return u&&i.setAttribute("nonce",u),t.insertBefore(i,a),i},$R=function(){function n(e){this.element=mw(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var i=document.styleSheets,s=0,a=i.length;s<a;s++){var u=i[s];if(u.ownerNode===t)return u}throw du(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),qR=function(){function n(e){this.element=mw(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var i=document.createTextNode(t);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),WR=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),dv=um,HR={isServer:!um,useCSSOMInjection:!TR},ph=function(){function n(e,t,i){e===void 0&&(e=Ca),t===void 0&&(t={});var s=this;this.options=Tn(Tn({},HR),e),this.gs=t,this.names=new Map(i),this.server=!!e.isServer,!this.server&&um&&dv&&(dv=!1,function(a){for(var u=document.querySelectorAll(UR),d=0,f=u.length;d<f;d++){var m=u[d];m&&m.getAttribute(ka)!=="active"&&(BR(a,m),m.parentNode&&m.parentNode.removeChild(m))}}(this)),hm(this,function(){return function(a){for(var u=a.getTag(),d=u.length,f="",m=function(E){var T=function(K){return fh.get(K)}(E);if(T===void 0)return"continue";var A=a.names.get(T),b=u.getGroup(E);if(A===void 0||b.length===0)return"continue";var L="".concat(ka,".g").concat(E,'[id="').concat(T,'"]'),N="";A!==void 0&&A.forEach(function(K){K.length>0&&(N+="".concat(K,","))}),f+="".concat(b).concat(L,'{content:"').concat(N,'"}').concat(`/*!sc*/
`)},_=0;_<d;_++)m(_);return f}(s)})}return n.registerId=function(e){return $c(e)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(Tn(Tn({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var i=t.useCSSOMInjection,s=t.target;return t.isServer?new WR(s):i?new $R(s):new qR(s)}(this.options),new MR(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if($c(e),this.names.has(e))this.names.get(e).add(t);else{var i=new Set;i.add(t),this.names.set(e,i)}},n.prototype.insertRules=function(e,t,i){this.registerName(e,t),this.getTag().insertRules($c(e),i)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup($c(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),KR=/&/g,GR=/^\s*\/\/.*$/gm;function gw(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=gw(t.children,e)),t})}function QR(n){var e,t,i,s=Ca,a=s.options,u=a===void 0?Ca:a,d=s.plugins,f=d===void 0?Uh:d,m=function(T,A,b){return b===t||b.startsWith(t)&&b.endsWith(t)&&b.replaceAll(t,"").length>0?".".concat(e):T},_=f.slice();_.push(function(T){T.type===Oh&&T.value.includes("&")&&(T.props[0]=T.props[0].replace(KR,t).replace(i,m))}),u.prefix&&_.push(wR),_.push(yR);var E=function(T,A,b,L){A===void 0&&(A=""),b===void 0&&(b=""),L===void 0&&(L="&"),e=L,t=A,i=new RegExp("\\".concat(t,"\\b"),"g");var N=T.replace(GR,""),K=mR(b||A?"".concat(b," ").concat(A," { ").concat(N," }"):N);u.namespace&&(K=gw(K,u.namespace));var j=[];return dh(K,_R(_.concat(vR(function(q){return j.push(q)})))),j};return E.hash=f.length?f.reduce(function(T,A){return A.name||du(15),_a(T,A.name)},5381).toString():"",E}var YR=new ph,Ep=QR(),yw=We.createContext({shouldForwardProp:void 0,styleSheet:YR,stylis:Ep});yw.Consumer;We.createContext(void 0);function Tp(){return Y.useContext(yw)}var XR=function(){function n(e,t){var i=this;this.inject=function(s,a){a===void 0&&(a=Ep);var u=i.name+a.hash;s.hasNameForId(i.id,u)||s.insertRules(i.id,u,a(i.rules,u,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,hm(this,function(){throw du(12,String(i.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=Ep),this.name+e.hash},n}(),JR=function(n){return n>="A"&&n<="Z"};function fv(n){for(var e="",t=0;t<n.length;t++){var i=n[t];if(t===1&&i==="-"&&n[0]==="-")return n;JR(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var _w=function(n){return n==null||n===!1||n===""},vw=function(n){var e,t,i=[];for(var s in n){var a=n[s];n.hasOwnProperty(s)&&!_w(a)&&(Array.isArray(a)&&a.isCss||Pa(a)?i.push("".concat(fv(s),":"),a,";"):Jl(a)?i.push.apply(i,Yl(Yl(["".concat(s," {")],vw(a),!1),["}"],!1)):i.push("".concat(fv(s),": ").concat((e=s,(t=a)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in ER||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return i};function To(n,e,t,i){if(_w(n))return[];if(cm(n))return[".".concat(n.styledComponentId)];if(Pa(n)){if(!Pa(a=n)||a.prototype&&a.prototype.isReactComponent||!e)return[n];var s=n(e);return To(s,e,t,i)}var a;return n instanceof XR?t?(n.inject(t,i),[n.getName(i)]):[n]:Jl(n)?vw(n):Array.isArray(n)?Array.prototype.concat.apply(Uh,n.map(function(u){return To(u,e,t,i)})):[n.toString()]}function ww(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(Pa(t)&&!cm(t))return!1}return!0}var ZR=uw("6.0.7"),eA=function(){function n(e,t,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&ww(e),this.componentId=t,this.baseHash=_a(ZR,t),this.baseStyle=i,ph.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,i){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))s=ls(s,this.staticRulesId);else{var a=vp(To(this.rules,e,t,i)),u=_p(_a(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,u)){var d=i(a,".".concat(u),void 0,this.componentId);t.insertRules(this.componentId,u,d)}s=ls(s,u),this.staticRulesId=u}else{for(var f=_a(this.baseHash,i.hash),m="",_=0;_<this.rules.length;_++){var E=this.rules[_];if(typeof E=="string")m+=E;else if(E){var T=vp(To(E,e,t,i));f=_a(f,T),m+=T}}if(m){var A=_p(f>>>0);t.hasNameForId(this.componentId,A)||t.insertRules(this.componentId,A,i(m,".".concat(A),void 0,this.componentId)),s=ls(s,A)}}return s},n}(),dm=We.createContext(void 0);dm.Consumer;var Qf={};function tA(n,e,t){var i=cm(n),s=n,a=!Kf(n),u=e.attrs,d=u===void 0?Uh:u,f=e.componentId,m=f===void 0?function(q,x){var ee=typeof q!="string"?"sc":av(q);Qf[ee]=(Qf[ee]||0)+1;var oe="".concat(ee,"-").concat(cw("6.0.7"+ee+Qf[ee]));return x?"".concat(x,"-").concat(oe):oe}(e.displayName,e.parentComponentId):f,_=e.displayName;_===void 0&&function(q){return Kf(q)?"styled.".concat(q):"Styled(".concat(kR(q),")")}(n);var E=e.displayName&&e.componentId?"".concat(av(e.displayName),"-").concat(e.componentId):e.componentId||m,T=i&&s.attrs?s.attrs.concat(d).filter(Boolean):d,A=e.shouldForwardProp;if(i&&s.shouldForwardProp){var b=s.shouldForwardProp;if(e.shouldForwardProp){var L=e.shouldForwardProp;A=function(q,x){return b(q,x)&&L(q,x)}}else A=b}var N=new eA(t,E,i?s.componentStyle:void 0);function K(q,x){return function(ee,oe,R){var S=ee.attrs,k=ee.componentStyle,D=ee.defaultProps,M=ee.foldedComponentIds,V=ee.styledComponentId,P=ee.target,it=We.useContext(dm),ct=Tp(),Xe=ee.shouldForwardProp||ct.shouldForwardProp,Ne=function(ve,ye,be){for(var Fe,je=Tn(Tn({},ye),{className:void 0,theme:be}),Me=0;Me<ve.length;Me+=1){var Je=Pa(Fe=ve[Me])?Fe(je):Fe;for(var st in Je)je[st]=st==="className"?ls(je[st],Je[st]):st==="style"?Tn(Tn({},je[st]),Je[st]):Je[st]}return ye.className&&(je.className=ls(je.className,ye.className)),je}(S,oe,aw(oe,it,D)||Ca),se=Ne.as||P,me={};for(var ce in Ne)Ne[ce]===void 0||ce[0]==="$"||ce==="as"||ce==="theme"||(ce==="forwardedAs"?me.as=Ne.forwardedAs:Xe&&!Xe(ce,se)||(me[ce]=Ne[ce]));var F=function(ve,ye){var be=Tp(),Fe=ve.generateAndInjectStyles(ye,be.styleSheet,be.stylis);return Fe}(k,Ne),X=ls(M,V);return F&&(X+=" "+F),Ne.className&&(X+=" "+Ne.className),me[Kf(se)&&!lw.has(se)?"class":"className"]=X,me.ref=R,Y.createElement(se,me)}(j,q,x)}var j=We.forwardRef(K);return j.attrs=T,j.componentStyle=N,j.shouldForwardProp=A,j.foldedComponentIds=i?ls(s.foldedComponentIds,s.styledComponentId):"",j.styledComponentId=E,j.target=i?s.target:n,Object.defineProperty(j,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(q){this._foldedDefaultProps=i?function(x){for(var ee=[],oe=1;oe<arguments.length;oe++)ee[oe-1]=arguments[oe];for(var R=0,S=ee;R<S.length;R++)wp(x,S[R],!0);return x}({},s.defaultProps,q):q}}),hm(j,function(){return".".concat(j.styledComponentId)}),a&&pw(j,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),j}function pv(n,e){for(var t=[n[0]],i=0,s=e.length;i<s;i+=1)t.push(e[i],n[i+1]);return t}var mv=function(n){return Object.assign(n,{isCss:!0})};function fm(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(Pa(n)||Jl(n)){var i=n;return mv(To(pv(Uh,Yl([i],e,!0))))}var s=n;return e.length===0&&s.length===1&&typeof s[0]=="string"?To(s):mv(To(pv(s,e)))}function Ip(n,e,t){if(t===void 0&&(t=Ca),!e)throw du(1,e);var i=function(s){for(var a=[],u=1;u<arguments.length;u++)a[u-1]=arguments[u];return n(e,t,fm.apply(void 0,Yl([s],a,!1)))};return i.attrs=function(s){return Ip(n,e,Tn(Tn({},t),{attrs:Array.prototype.concat(t.attrs,s).filter(Boolean)}))},i.withConfig=function(s){return Ip(n,e,Tn(Tn({},t),s))},i}var Ew=function(n){return Ip(tA,n)},xe=Ew;lw.forEach(function(n){xe[n]=Ew(n)});var nA=function(){function n(e,t){this.rules=e,this.componentId=t,this.isStatic=ww(e),ph.registerId(this.componentId+1)}return n.prototype.createStyles=function(e,t,i,s){var a=s(vp(To(this.rules,t,i,s)),""),u=this.componentId+e;i.insertRules(u,u,a)},n.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},n.prototype.renderStyles=function(e,t,i,s){e>2&&ph.registerId(this.componentId+e),this.removeStyles(e,i),this.createStyles(e,t,i,s)},n}();function Tw(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];var i=fm.apply(void 0,Yl([n],e,!1)),s="sc-global-".concat(cw(JSON.stringify(i))),a=new nA(i,s),u=function(f){var m=Tp(),_=We.useContext(dm),E=We.useRef(m.styleSheet.allocateGSInstance(s)).current;return m.styleSheet.server&&d(E,f,m.styleSheet,_,m.stylis),We.useLayoutEffect(function(){if(!m.styleSheet.server)return d(E,f,m.styleSheet,_,m.stylis),function(){return a.removeStyles(E,m.styleSheet)}},[E,f,m.styleSheet,_,m.stylis]),null};function d(f,m,_,E,T){if(a.isStatic)a.renderStyles(f,IR,_,T);else{var A=Tn(Tn({},m),{theme:aw(m,E,u.defaultProps)});a.renderStyles(f,A,_,T)}}return We.memo(u)}var gv={};/**
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
 */const Iw=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},rA=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[t++];e[i++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[t++],u=n[t++],d=n[t++],f=((s&7)<<18|(a&63)<<12|(u&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(f>>10)),e[i++]=String.fromCharCode(56320+(f&1023))}else{const a=n[t++],u=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(a&63)<<6|u&63)}}return e.join("")},Sw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const a=n[s],u=s+1<n.length,d=u?n[s+1]:0,f=s+2<n.length,m=f?n[s+2]:0,_=a>>2,E=(a&3)<<4|d>>4;let T=(d&15)<<2|m>>6,A=m&63;f||(A=64,u||(T=64)),i.push(t[_],t[E],t[T],t[A])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Iw(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):rA(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const a=t[n.charAt(s++)],d=s<n.length?t[n.charAt(s)]:0;++s;const m=s<n.length?t[n.charAt(s)]:64;++s;const E=s<n.length?t[n.charAt(s)]:64;if(++s,a==null||d==null||m==null||E==null)throw new iA;const T=a<<2|d>>4;if(i.push(T),m!==64){const A=d<<4&240|m>>2;if(i.push(A),E!==64){const b=m<<6&192|E;i.push(b)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class iA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const oA=function(n){const e=Iw(n);return Sw.encodeByteArray(e,!0)},mh=function(n){return oA(n).replace(/\./g,"")},Rw=function(n){try{return Sw.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function sA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const aA=()=>sA().__FIREBASE_DEFAULTS__,lA=()=>{if(typeof process>"u"||typeof gv>"u")return;const n=gv.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},uA=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Rw(n[1]);return e&&JSON.parse(e)},Fh=()=>{try{return aA()||lA()||uA()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Aw=n=>{var e,t;return(t=(e=Fh())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},kw=n=>{const e=Aw(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Cw=()=>{var n;return(n=Fh())===null||n===void 0?void 0:n.config},Pw=n=>{var e;return(e=Fh())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class cA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function xw(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[mh(JSON.stringify(t)),mh(JSON.stringify(u)),""].join(".")}/**
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
 */function In(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(In())}function dA(){var n;const e=(n=Fh())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pA(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function mA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gA(){const n=In();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function yA(){return!dA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _A(){try{return typeof indexedDB=="object"}catch{return!1}}function vA(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
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
 */const wA="FirebaseError";class yr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=wA,Object.setPrototypeOf(this,yr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fu.prototype.create)}}class fu{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],u=a?EA(a,i):"Error",d=`${this.serviceName}: ${u} (${s}).`;return new yr(s,d,i)}}function EA(n,e){return n.replace(TA,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const TA=/\{\$([^}]+)}/g;function IA(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function gh(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const a=n[s],u=e[s];if(yv(a)&&yv(u)){if(!gh(a,u))return!1}else if(a!==u)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function yv(n){return n!==null&&typeof n=="object"}/**
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
 */function pu(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Ol(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,a]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(a)}}),e}function Ll(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function SA(n,e){const t=new RA(n,e);return t.subscribe.bind(t)}class RA{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");AA(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Yf),s.error===void 0&&(s.error=Yf),s.complete===void 0&&(s.complete=Yf);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AA(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Yf(){}/**
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
 */function kt(n){return n&&n._delegate?n._delegate:n}class ko{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ss="[DEFAULT]";/**
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
 */class kA{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new cA;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(PA(e))try{this.getOrInitializeService({instanceIdentifier:ss})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});i.resolve(a)}catch{}}}}clearInstance(e=ss){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ss){return this.instances.has(e)}getOptions(e=ss){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[a,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);i===d&&u.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),a=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;a.add(e),this.onInitCallbacks.set(s,a);const u=this.instances.get(s);return u&&e(u,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:CA(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ss){return this.component?this.component.multipleInstances?e:ss:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CA(n){return n===ss?void 0:n}function PA(n){return n.instantiationMode==="EAGER"}/**
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
 */class xA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new kA(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ke;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ke||(Ke={}));const bA={debug:Ke.DEBUG,verbose:Ke.VERBOSE,info:Ke.INFO,warn:Ke.WARN,error:Ke.ERROR,silent:Ke.SILENT},NA=Ke.INFO,DA={[Ke.DEBUG]:"log",[Ke.VERBOSE]:"log",[Ke.INFO]:"info",[Ke.WARN]:"warn",[Ke.ERROR]:"error"},OA=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=DA[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pm{constructor(e){this.name=e,this._logLevel=NA,this._logHandler=OA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ke.DEBUG,...e),this._logHandler(this,Ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ke.VERBOSE,...e),this._logHandler(this,Ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ke.INFO,...e),this._logHandler(this,Ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ke.WARN,...e),this._logHandler(this,Ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ke.ERROR,...e),this._logHandler(this,Ke.ERROR,...e)}}const LA=(n,e)=>e.some(t=>n instanceof t);let _v,vv;function MA(){return _v||(_v=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function VA(){return vv||(vv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bw=new WeakMap,Sp=new WeakMap,Nw=new WeakMap,Xf=new WeakMap,mm=new WeakMap;function UA(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(Io(n.result)),s()},u=()=>{i(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&bw.set(t,n)}).catch(()=>{}),mm.set(e,n),e}function FA(n){if(Sp.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),s()},u=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});Sp.set(n,e)}let Rp={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Sp.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Nw.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Io(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function jA(n){Rp=n(Rp)}function BA(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Jf(this),e,...t);return Nw.set(i,e.sort?e.sort():[e]),Io(i)}:VA().includes(n)?function(...e){return n.apply(Jf(this),e),Io(bw.get(this))}:function(...e){return Io(n.apply(Jf(this),e))}}function zA(n){return typeof n=="function"?BA(n):(n instanceof IDBTransaction&&FA(n),LA(n,MA())?new Proxy(n,Rp):n)}function Io(n){if(n instanceof IDBRequest)return UA(n);if(Xf.has(n))return Xf.get(n);const e=zA(n);return e!==n&&(Xf.set(n,e),mm.set(e,n)),e}const Jf=n=>mm.get(n);function $A(n,e,{blocked:t,upgrade:i,blocking:s,terminated:a}={}){const u=indexedDB.open(n,e),d=Io(u);return i&&u.addEventListener("upgradeneeded",f=>{i(Io(u.result),f.oldVersion,f.newVersion,Io(u.transaction),f)}),t&&u.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),d.then(f=>{a&&f.addEventListener("close",()=>a()),s&&f.addEventListener("versionchange",m=>s(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}const qA=["get","getKey","getAll","getAllKeys","count"],WA=["put","add","delete","clear"],Zf=new Map;function wv(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Zf.get(e))return Zf.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=WA.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||qA.includes(t)))return;const a=async function(u,...d){const f=this.transaction(u,s?"readwrite":"readonly");let m=f.store;return i&&(m=m.index(d.shift())),(await Promise.all([m[t](...d),s&&f.done]))[0]};return Zf.set(e,a),a}jA(n=>({...n,get:(e,t,i)=>wv(e,t)||n.get(e,t,i),has:(e,t)=>!!wv(e,t)||n.has(e,t)}));/**
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
 */class HA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(KA(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function KA(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ap="@firebase/app",Ev="0.10.13";/**
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
 */const Di=new pm("@firebase/app"),GA="@firebase/app-compat",QA="@firebase/analytics-compat",YA="@firebase/analytics",XA="@firebase/app-check-compat",JA="@firebase/app-check",ZA="@firebase/auth",ek="@firebase/auth-compat",tk="@firebase/database",nk="@firebase/data-connect",rk="@firebase/database-compat",ik="@firebase/functions",ok="@firebase/functions-compat",sk="@firebase/installations",ak="@firebase/installations-compat",lk="@firebase/messaging",uk="@firebase/messaging-compat",ck="@firebase/performance",hk="@firebase/performance-compat",dk="@firebase/remote-config",fk="@firebase/remote-config-compat",pk="@firebase/storage",mk="@firebase/storage-compat",gk="@firebase/firestore",yk="@firebase/vertexai-preview",_k="@firebase/firestore-compat",vk="firebase",wk="10.14.1";/**
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
 */const kp="[DEFAULT]",Ek={[Ap]:"fire-core",[GA]:"fire-core-compat",[YA]:"fire-analytics",[QA]:"fire-analytics-compat",[JA]:"fire-app-check",[XA]:"fire-app-check-compat",[ZA]:"fire-auth",[ek]:"fire-auth-compat",[tk]:"fire-rtdb",[nk]:"fire-data-connect",[rk]:"fire-rtdb-compat",[ik]:"fire-fn",[ok]:"fire-fn-compat",[sk]:"fire-iid",[ak]:"fire-iid-compat",[lk]:"fire-fcm",[uk]:"fire-fcm-compat",[ck]:"fire-perf",[hk]:"fire-perf-compat",[dk]:"fire-rc",[fk]:"fire-rc-compat",[pk]:"fire-gcs",[mk]:"fire-gcs-compat",[gk]:"fire-fst",[_k]:"fire-fst-compat",[yk]:"fire-vertex","fire-js":"fire-js",[vk]:"fire-js-all"};/**
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
 */const yh=new Map,Tk=new Map,Cp=new Map;function Tv(n,e){try{n.container.addComponent(e)}catch(t){Di.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ys(n){const e=n.name;if(Cp.has(e))return Di.debug(`There were multiple attempts to register component ${e}.`),!1;Cp.set(e,n);for(const t of yh.values())Tv(t,n);for(const t of Tk.values())Tv(t,n);return!0}function jh(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Nr(n){return n.settings!==void 0}/**
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
 */const Ik={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},So=new fu("app","Firebase",Ik);/**
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
 */class Sk{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ko("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw So.create("app-deleted",{appName:this._name})}}/**
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
 */const ks=wk;function Dw(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:kp,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw So.create("bad-app-name",{appName:String(s)});if(t||(t=Cw()),!t)throw So.create("no-options");const a=yh.get(s);if(a){if(gh(t,a.options)&&gh(i,a.config))return a;throw So.create("duplicate-app",{appName:s})}const u=new xA(s);for(const f of Cp.values())u.addComponent(f);const d=new Sk(t,i,u);return yh.set(s,d),d}function gm(n=kp){const e=yh.get(n);if(!e&&n===kp&&Cw())return Dw();if(!e)throw So.create("no-app",{appName:n});return e}function Zr(n,e,t){var i;let s=(i=Ek[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const d=[`Unable to register library "${s}" with version "${e}":`];a&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Di.warn(d.join(" "));return}ys(new ko(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Rk="firebase-heartbeat-database",Ak=1,Zl="firebase-heartbeat-store";let ep=null;function Ow(){return ep||(ep=$A(Rk,Ak,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Zl)}catch(t){console.warn(t)}}}}).catch(n=>{throw So.create("idb-open",{originalErrorMessage:n.message})})),ep}async function kk(n){try{const t=(await Ow()).transaction(Zl),i=await t.objectStore(Zl).get(Lw(n));return await t.done,i}catch(e){if(e instanceof yr)Di.warn(e.message);else{const t=So.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Di.warn(t.message)}}}async function Iv(n,e){try{const i=(await Ow()).transaction(Zl,"readwrite");await i.objectStore(Zl).put(e,Lw(n)),await i.done}catch(t){if(t instanceof yr)Di.warn(t.message);else{const i=So.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Di.warn(i.message)}}}function Lw(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ck=1024,Pk=30*24*60*60*1e3;class xk{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Nk(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Sv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a)?void 0:(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(u=>{const d=new Date(u.date).valueOf();return Date.now()-d<=Pk}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Di.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Sv(),{heartbeatsToSend:i,unsentEntries:s}=bk(this._heartbeatsCache.heartbeats),a=mh(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return Di.warn(t),""}}}function Sv(){return new Date().toISOString().substring(0,10)}function bk(n,e=Ck){const t=[];let i=n.slice();for(const s of n){const a=t.find(u=>u.agent===s.agent);if(a){if(a.dates.push(s.date),Rv(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Rv(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Nk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _A()?vA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await kk(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Iv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Iv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Rv(n){return mh(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Dk(n){ys(new ko("platform-logger",e=>new HA(e),"PRIVATE")),ys(new ko("heartbeat",e=>new xk(e),"PRIVATE")),Zr(Ap,Ev,n),Zr(Ap,Ev,"esm2017"),Zr("fire-js","")}Dk("");var Ok="firebase",Lk="10.14.1";/**
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
 */Zr(Ok,Lk,"app");function Mw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Mk=Mw,Vw=new fu("auth","Firebase",Mw());/**
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
 */const _h=new pm("@firebase/auth");function Vk(n,...e){_h.logLevel<=Ke.WARN&&_h.warn(`Auth (${ks}): ${n}`,...e)}function nh(n,...e){_h.logLevel<=Ke.ERROR&&_h.error(`Auth (${ks}): ${n}`,...e)}/**
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
 */function gr(n,...e){throw _m(n,...e)}function Or(n,...e){return _m(n,...e)}function ym(n,e,t){const i=Object.assign(Object.assign({},Mk()),{[e]:t});return new fu("auth","Firebase",i).create(e,{appName:n.name})}function Ni(n){return ym(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Uk(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&gr(n,"argument-error"),ym(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _m(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Vw.create(n,...e)}function De(n,e,...t){if(!n)throw _m(e,...t)}function Ci(n){const e="INTERNAL ASSERTION FAILED: "+n;throw nh(e),new Error(e)}function Oi(n,e){n||Ci(e)}/**
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
 */function Pp(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Fk(){return Av()==="http:"||Av()==="https:"}function Av(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function jk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fk()||pA()||"connection"in navigator)?navigator.onLine:!0}function Bk(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class mu{constructor(e,t){this.shortDelay=e,this.longDelay=t,Oi(t>e,"Short delay should be less than long delay!"),this.isMobile=hA()||mA()}get(){return jk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function vm(n,e){Oi(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Uw{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ci("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ci("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ci("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const $k=new mu(3e4,6e4);function No(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Fi(n,e,t,i,s={}){return Fw(n,s,async()=>{let a={},u={};i&&(e==="GET"?u=i:a={body:JSON.stringify(i)});const d=pu(Object.assign({key:n.config.apiKey},u)).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:e,headers:f},a);return fA()||(m.referrerPolicy="no-referrer"),Uw.fetch()(jw(n,n.config.apiHost,t,d),m)})}async function Fw(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},zk),e);try{const s=new Wk(n),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw qc(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const d=a.ok?u.errorMessage:u.error.message,[f,m]=d.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw qc(n,"credential-already-in-use",u);if(f==="EMAIL_EXISTS")throw qc(n,"email-already-in-use",u);if(f==="USER_DISABLED")throw qc(n,"user-disabled",u);const _=i[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw ym(n,_,m);gr(n,_)}}catch(s){if(s instanceof yr)throw s;gr(n,"network-request-failed",{message:String(s)})}}async function gu(n,e,t,i,s={}){const a=await Fi(n,e,t,i,s);return"mfaPendingCredential"in a&&gr(n,"multi-factor-auth-required",{_serverResponse:a}),a}function jw(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?vm(n.config,s):`${n.config.apiScheme}://${s}`}function qk(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Wk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Or(this.auth,"network-request-failed")),$k.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function qc(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=Or(n,e,i);return s.customData._tokenResponse=t,s}function kv(n){return n!==void 0&&n.enterprise!==void 0}class Hk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return qk(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Kk(n,e){return Fi(n,"GET","/v2/recaptchaConfig",No(n,e))}/**
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
 */async function Gk(n,e){return Fi(n,"POST","/v1/accounts:delete",e)}async function Bw(n,e){return Fi(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function zl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Qk(n,e=!1){const t=kt(n),i=await t.getIdToken(e),s=wm(i);De(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:s,token:i,authTime:zl(tp(s.auth_time)),issuedAtTime:zl(tp(s.iat)),expirationTime:zl(tp(s.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function tp(n){return Number(n)*1e3}function wm(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return nh("JWT malformed, contained fewer than 3 sections"),null;try{const s=Rw(t);return s?JSON.parse(s):(nh("Failed to decode base64 JWT payload"),null)}catch(s){return nh("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Cv(n){const e=wm(n);return De(e,"internal-error"),De(typeof e.exp<"u","internal-error"),De(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function xa(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof yr&&Yk(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Yk({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Xk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class xp{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=zl(this.lastLoginAt),this.creationTime=zl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function vh(n){var e;const t=n.auth,i=await n.getIdToken(),s=await xa(n,Bw(t,{idToken:i}));De(s==null?void 0:s.users.length,t,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?zw(a.providerUserInfo):[],d=Zk(n.providerData,u),f=n.isAnonymous,m=!(n.email&&a.passwordHash)&&!(d!=null&&d.length),_=f?m:!1,E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new xp(a.createdAt,a.lastLoginAt),isAnonymous:_};Object.assign(n,E)}async function Jk(n){const e=kt(n);await vh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Zk(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function zw(n){return n.map(e=>{var{providerId:t}=e,i=sm(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function eC(n,e){const t=await Fw(n,{},async()=>{const i=pu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,u=jw(n,s,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",Uw.fetch()(u,{method:"POST",headers:d,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function tC(n,e){return Fi(n,"POST","/v2/accounts:revokeToken",No(n,e))}/**
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
 */class wa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){De(e.idToken,"internal-error"),De(typeof e.idToken<"u","internal-error"),De(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Cv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){De(e.length!==0,"internal-error");const t=Cv(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(De(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:a}=await eC(e,t);this.updateTokensAndExpiration(i,s,Number(a))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:a}=t,u=new wa;return i&&(De(typeof i=="string","internal-error",{appName:e}),u.refreshToken=i),s&&(De(typeof s=="string","internal-error",{appName:e}),u.accessToken=s),a&&(De(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wa,this.toJSON())}_performRefresh(){return Ci("not implemented")}}/**
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
 */function mo(n,e){De(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Pi{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,a=sm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Xk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new xp(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await xa(this,this.stsTokenManager.getToken(this.auth,e));return De(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Qk(this,e)}reload(){return Jk(this)}_assign(e){this!==e&&(De(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Pi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){De(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await vh(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nr(this.auth.app))return Promise.reject(Ni(this.auth));const e=await this.getIdToken();return await xa(this,Gk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,a,u,d,f,m,_;const E=(i=t.displayName)!==null&&i!==void 0?i:void 0,T=(s=t.email)!==null&&s!==void 0?s:void 0,A=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,b=(u=t.photoURL)!==null&&u!==void 0?u:void 0,L=(d=t.tenantId)!==null&&d!==void 0?d:void 0,N=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,K=(m=t.createdAt)!==null&&m!==void 0?m:void 0,j=(_=t.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:q,emailVerified:x,isAnonymous:ee,providerData:oe,stsTokenManager:R}=t;De(q&&R,e,"internal-error");const S=wa.fromJSON(this.name,R);De(typeof q=="string",e,"internal-error"),mo(E,e.name),mo(T,e.name),De(typeof x=="boolean",e,"internal-error"),De(typeof ee=="boolean",e,"internal-error"),mo(A,e.name),mo(b,e.name),mo(L,e.name),mo(N,e.name),mo(K,e.name),mo(j,e.name);const k=new Pi({uid:q,auth:e,email:T,emailVerified:x,displayName:E,isAnonymous:ee,photoURL:b,phoneNumber:A,tenantId:L,stsTokenManager:S,createdAt:K,lastLoginAt:j});return oe&&Array.isArray(oe)&&(k.providerData=oe.map(D=>Object.assign({},D))),N&&(k._redirectEventId=N),k}static async _fromIdTokenResponse(e,t,i=!1){const s=new wa;s.updateFromServerResponse(t);const a=new Pi({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await vh(a),a}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];De(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?zw(s.providerUserInfo):[],u=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),d=new wa;d.updateFromIdToken(i);const f=new Pi({uid:s.localId,auth:e,stsTokenManager:d,isAnonymous:u}),m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new xp(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,m),f}}/**
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
 */const Pv=new Map;function xi(n){Oi(n instanceof Function,"Expected a class definition");let e=Pv.get(n);return e?(Oi(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Pv.set(n,e),e)}/**
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
 */class $w{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}$w.type="NONE";const xv=$w;/**
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
 */function rh(n,e,t){return`firebase:${n}:${e}:${t}`}class Ea{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:a}=this.auth;this.fullUserKey=rh(this.userKey,s.apiKey,a),this.fullPersistenceKey=rh("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Ea(xi(xv),e,i);const s=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let a=s[0]||xi(xv);const u=rh(i,e.config.apiKey,e.name);let d=null;for(const m of t)try{const _=await m._get(u);if(_){const E=Pi._fromJSON(e,_);m!==a&&(d=E),a=m;break}}catch{}const f=s.filter(m=>m._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new Ea(a,e,i):(a=f[0],d&&await a._set(u,d.toJSON()),await Promise.all(t.map(async m=>{if(m!==a)try{await m._remove(u)}catch{}})),new Ea(a,e,i))}}/**
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
 */function bv(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Kw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qw(e))return"Blackberry";if(Yw(e))return"Webos";if(Ww(e))return"Safari";if((e.includes("chrome/")||Hw(e))&&!e.includes("edge/"))return"Chrome";if(Gw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function qw(n=In()){return/firefox\//i.test(n)}function Ww(n=In()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hw(n=In()){return/crios\//i.test(n)}function Kw(n=In()){return/iemobile/i.test(n)}function Gw(n=In()){return/android/i.test(n)}function Qw(n=In()){return/blackberry/i.test(n)}function Yw(n=In()){return/webos/i.test(n)}function Em(n=In()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function nC(n=In()){var e;return Em(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rC(){return gA()&&document.documentMode===10}function Xw(n=In()){return Em(n)||Gw(n)||Yw(n)||Qw(n)||/windows phone/i.test(n)||Kw(n)}/**
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
 */function Jw(n,e=[]){let t;switch(n){case"Browser":t=bv(In());break;case"Worker":t=`${bv(In())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ks}/${i}`}/**
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
 */class iC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=a=>new Promise((u,d)=>{try{const f=e(a);u(f)}catch(f){d(f)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function oC(n,e={}){return Fi(n,"GET","/v2/passwordPolicy",No(n,e))}/**
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
 */const sC=6;class aC{constructor(e){var t,i,s,a;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:sC,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,a,u,d;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(i=f.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),f.isValid&&(f.isValid=(s=f.containsLowercaseLetter)!==null&&s!==void 0?s:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(u=f.containsNumericCharacter)!==null&&u!==void 0?u:!0),f.isValid&&(f.isValid=(d=f.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),f}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class lC{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nv(this),this.idTokenSubscription=new Nv(this),this.beforeStateQueue=new iC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=xi(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Ea.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Bw(this,{idToken:e}),i=await Pi._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Nr(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=s==null?void 0:s._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===d)&&(f!=null&&f.user)&&(s=f.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return De(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await vh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Bk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Nr(this.app))return Promise.reject(Ni(this));const t=e?kt(e):null;return t&&De(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&De(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Nr(this.app)?Promise.reject(Ni(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Nr(this.app)?Promise.reject(Ni(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await oC(this),t=new aC(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fu("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await tC(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&xi(e)||this._popupRedirectResolver;De(t,this,"argument-error"),this.redirectPersistenceManager=await Ea.create(this,[xi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(De(d,this,"internal-error"),d.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,i,s);return()=>{u=!0,f()}}else{const f=e.addObserver(t);return()=>{u=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return De(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Vk(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Do(n){return kt(n)}class Nv{constructor(e){this.auth=e,this.observer=null,this.addObserver=SA(t=>this.observer=t)}get next(){return De(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Bh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function uC(n){Bh=n}function Zw(n){return Bh.loadJS(n)}function cC(){return Bh.recaptchaEnterpriseScript}function hC(){return Bh.gapiScript}function dC(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const fC="recaptcha-enterprise",pC="NO_RECAPTCHA";class mC{constructor(e){this.type=fC,this.auth=Do(e)}async verify(e="verify",t=!1){async function i(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,d)=>{Kk(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const m=new Hk(f);return a.tenantId==null?a._agentRecaptchaConfig=m:a._tenantRecaptchaConfigs[a.tenantId]=m,u(m.siteKey)}}).catch(f=>{d(f)})})}function s(a,u,d){const f=window.grecaptcha;kv(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(m=>{u(m)}).catch(()=>{u(pC)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((a,u)=>{i(this.auth).then(d=>{if(!t&&kv(window.grecaptcha))s(d,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let f=cC();f.length!==0&&(f+=d),Zw(f).then(()=>{s(d,a,u)}).catch(m=>{u(m)})}}).catch(d=>{u(d)})})}}async function Dv(n,e,t,i=!1){const s=new mC(n);let a;try{a=await s.verify(t)}catch{a=await s.verify(t,!0)}const u=Object.assign({},e);return i?Object.assign(u,{captchaResp:a}):Object.assign(u,{captchaResponse:a}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),u}async function bp(n,e,t,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Dv(n,e,t,t==="getOobCode");return i(n,a)}else return i(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await Dv(n,e,t,t==="getOobCode");return i(n,u)}else return Promise.reject(a)})}/**
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
 */function gC(n,e){const t=jh(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),a=t.getOptions();if(gh(a,e??{}))return s;gr(s,"already-initialized")}return t.initialize({options:e})}function yC(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(xi);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function _C(n,e,t){const i=Do(n);De(i._canInitEmulator,i,"emulator-config-failed"),De(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,a=eE(e),{host:u,port:d}=vC(e),f=d===null?"":`:${d}`;i.config.emulator={url:`${a}//${u}${f}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})}),wC()}function eE(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function vC(n){const e=eE(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const a=s[1];return{host:a,port:Ov(i.substr(a.length+1))}}else{const[a,u]=i.split(":");return{host:a,port:Ov(u)}}}function Ov(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function wC(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Tm{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ci("not implemented")}_getIdTokenResponse(e){return Ci("not implemented")}_linkToIdToken(e,t){return Ci("not implemented")}_getReauthenticationResolver(e){return Ci("not implemented")}}async function EC(n,e){return Fi(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function TC(n,e){return gu(n,"POST","/v1/accounts:signInWithPassword",No(n,e))}/**
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
 */async function IC(n,e){return gu(n,"POST","/v1/accounts:signInWithEmailLink",No(n,e))}async function SC(n,e){return gu(n,"POST","/v1/accounts:signInWithEmailLink",No(n,e))}/**
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
 */class eu extends Tm{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new eu(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new eu(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bp(e,t,"signInWithPassword",TC);case"emailLink":return IC(e,{email:this._email,oobCode:this._password});default:gr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bp(e,i,"signUpPassword",EC);case"emailLink":return SC(e,{idToken:t,email:this._email,oobCode:this._password});default:gr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ta(n,e){return gu(n,"POST","/v1/accounts:signInWithIdp",No(n,e))}/**
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
 */const RC="http://localhost";class _s extends Tm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new _s(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):gr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,a=sm(t,["providerId","signInMethod"]);if(!i||!s)return null;const u=new _s(i,s);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return Ta(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Ta(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ta(e,t)}buildRequest(){const e={requestUri:RC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=pu(t)}return e}}/**
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
 */function AC(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kC(n){const e=Ol(Ll(n)).link,t=e?Ol(Ll(e)).deep_link_id:null,i=Ol(Ll(n)).deep_link_id;return(i?Ol(Ll(i)).link:null)||i||t||e||n}class Im{constructor(e){var t,i,s,a,u,d;const f=Ol(Ll(e)),m=(t=f.apiKey)!==null&&t!==void 0?t:null,_=(i=f.oobCode)!==null&&i!==void 0?i:null,E=AC((s=f.mode)!==null&&s!==void 0?s:null);De(m&&_&&E,"argument-error"),this.apiKey=m,this.operation=E,this.code=_,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(u=f.languageCode)!==null&&u!==void 0?u:null,this.tenantId=(d=f.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=kC(e);try{return new Im(t)}catch{return null}}}/**
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
 */class $a{constructor(){this.providerId=$a.PROVIDER_ID}static credential(e,t){return eu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Im.parseLink(t);return De(i,"argument-error"),eu._fromEmailAndCode(e,i.code,i.tenantId)}}$a.PROVIDER_ID="password";$a.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$a.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Sm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class yu extends Sm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class yo extends yu{constructor(){super("facebook.com")}static credential(e){return _s._fromParams({providerId:yo.PROVIDER_ID,signInMethod:yo.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yo.credentialFromTaggedObject(e)}static credentialFromError(e){return yo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yo.credential(e.oauthAccessToken)}catch{return null}}}yo.FACEBOOK_SIGN_IN_METHOD="facebook.com";yo.PROVIDER_ID="facebook.com";/**
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
 */class Ai extends yu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return _s._fromParams({providerId:Ai.PROVIDER_ID,signInMethod:Ai.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ai.credentialFromTaggedObject(e)}static credentialFromError(e){return Ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ai.credential(t,i)}catch{return null}}}Ai.GOOGLE_SIGN_IN_METHOD="google.com";Ai.PROVIDER_ID="google.com";/**
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
 */class ki extends yu{constructor(){super("github.com")}static credential(e){return _s._fromParams({providerId:ki.PROVIDER_ID,signInMethod:ki.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ki.credentialFromTaggedObject(e)}static credentialFromError(e){return ki.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ki.credential(e.oauthAccessToken)}catch{return null}}}ki.GITHUB_SIGN_IN_METHOD="github.com";ki.PROVIDER_ID="github.com";/**
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
 */class _o extends yu{constructor(){super("twitter.com")}static credential(e,t){return _s._fromParams({providerId:_o.PROVIDER_ID,signInMethod:_o.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return _o.credentialFromTaggedObject(e)}static credentialFromError(e){return _o.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return _o.credential(t,i)}catch{return null}}}_o.TWITTER_SIGN_IN_METHOD="twitter.com";_o.PROVIDER_ID="twitter.com";/**
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
 */async function CC(n,e){return gu(n,"POST","/v1/accounts:signUp",No(n,e))}/**
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
 */class vs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const a=await Pi._fromIdTokenResponse(e,i,s),u=Lv(i);return new vs({user:a,providerId:u,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Lv(i);return new vs({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Lv(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class wh extends yr{constructor(e,t,i,s){var a;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,wh.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new wh(e,t,i,s)}}function tE(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?wh._fromErrorAndOperation(n,a,e,i):a})}async function PC(n,e,t=!1){const i=await xa(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return vs._forOperation(n,"link",i)}/**
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
 */async function xC(n,e,t=!1){const{auth:i}=n;if(Nr(i.app))return Promise.reject(Ni(i));const s="reauthenticate";try{const a=await xa(n,tE(i,s,e,n),t);De(a.idToken,i,"internal-error");const u=wm(a.idToken);De(u,i,"internal-error");const{sub:d}=u;return De(n.uid===d,i,"user-mismatch"),vs._forOperation(n,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&gr(i,"user-mismatch"),a}}/**
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
 */async function nE(n,e,t=!1){if(Nr(n.app))return Promise.reject(Ni(n));const i="signIn",s=await tE(n,i,e),a=await vs._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(a.user),a}async function bC(n,e){return nE(Do(n),e)}/**
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
 */async function rE(n){const e=Do(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function NC(n,e,t){if(Nr(n.app))return Promise.reject(Ni(n));const i=Do(n),u=await bp(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",CC).catch(f=>{throw f.code==="auth/password-does-not-meet-requirements"&&rE(n),f}),d=await vs._fromIdTokenResponse(i,"signIn",u);return await i._updateCurrentUser(d.user),d}function DC(n,e,t){return Nr(n.app)?Promise.reject(Ni(n)):bC(kt(n),$a.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&rE(n),i})}/**
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
 */async function OC(n,e){return Fi(n,"POST","/v1/accounts:update",e)}/**
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
 */async function Np(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=kt(n),a={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},u=await xa(i,OC(i.auth,a));i.displayName=u.displayName||null,i.photoURL=u.photoUrl||null;const d=i.providerData.find(({providerId:f})=>f==="password");d&&(d.displayName=i.displayName,d.photoURL=i.photoURL),await i._updateTokensIfNecessary(u)}function LC(n,e,t,i){return kt(n).onIdTokenChanged(e,t,i)}function MC(n,e,t){return kt(n).beforeAuthStateChanged(e,t)}const Eh="__sak";/**
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
 */class iE{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Eh,"1"),this.storage.removeItem(Eh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const VC=1e3,UC=10;class oE extends iE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Xw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,f)=>{this.notifyListeners(u,f)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const u=this.storage.getItem(i);!t&&this.localCache[i]===u||this.notifyListeners(i,u)},a=this.storage.getItem(i);rC()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,UC):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},VC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}oE.type="LOCAL";const FC=oE;/**
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
 */class sE extends iE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}sE.type="SESSION";const aE=sE;/**
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
 */function jC(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class zh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new zh(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:a}=t.data,u=this.handlersMap[s];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const d=Array.from(u).map(async m=>m(t.origin,a)),f=await jC(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zh.receivers=[];/**
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
 */function Rm(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class BC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,u;return new Promise((d,f)=>{const m=Rm("",20);s.port1.start();const _=setTimeout(()=>{f(new Error("unsupported_event"))},i);u={messageChannel:s,onMessage(E){const T=E;if(T.data.eventId===m)switch(T.data.status){case"ack":clearTimeout(_),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(T.data.response);break;default:clearTimeout(_),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(u),s.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[s.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function ei(){return window}function zC(n){ei().location.href=n}/**
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
 */function lE(){return typeof ei().WorkerGlobalScope<"u"&&typeof ei().importScripts=="function"}async function $C(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qC(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function WC(){return lE()?self:null}/**
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
 */const uE="firebaseLocalStorageDb",HC=1,Th="firebaseLocalStorage",cE="fbase_key";class _u{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function $h(n,e){return n.transaction([Th],e?"readwrite":"readonly").objectStore(Th)}function KC(){const n=indexedDB.deleteDatabase(uE);return new _u(n).toPromise()}function Dp(){const n=indexedDB.open(uE,HC);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Th,{keyPath:cE})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Th)?e(i):(i.close(),await KC(),e(await Dp()))})})}async function Mv(n,e,t){const i=$h(n,!0).put({[cE]:e,value:t});return new _u(i).toPromise()}async function GC(n,e){const t=$h(n,!1).get(e),i=await new _u(t).toPromise();return i===void 0?null:i.value}function Vv(n,e){const t=$h(n,!0).delete(e);return new _u(t).toPromise()}const QC=800,YC=3;class hE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dp(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>YC)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zh._getInstance(WC()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await $C(),!this.activeServiceWorker)return;this.sender=new BC(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dp();return await Mv(e,Eh,"1"),await Vv(e,Eh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Mv(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>GC(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Vv(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=$h(s,!1).getAll();return new _u(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),QC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hE.type="LOCAL";const XC=hE;new mu(3e4,6e4);/**
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
 */function dE(n,e){return e?xi(e):(De(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Am extends Tm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ta(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ta(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ta(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function JC(n){return nE(n.auth,new Am(n),n.bypassAuthState)}function ZC(n){const{auth:e,user:t}=n;return De(t,e,"internal-error"),xC(t,new Am(n),n.bypassAuthState)}async function eP(n){const{auth:e,user:t}=n;return De(t,e,"internal-error"),PC(t,new Am(n),n.bypassAuthState)}/**
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
 */class fE{constructor(e,t,i,s,a=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:a,error:u,type:d}=e;if(u){this.reject(u);return}const f={auth:this.auth,requestUri:t,sessionId:i,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(f))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JC;case"linkViaPopup":case"linkViaRedirect":return eP;case"reauthViaPopup":case"reauthViaRedirect":return ZC;default:gr(this.auth,"internal-error")}}resolve(e){Oi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Oi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const tP=new mu(2e3,1e4);async function pE(n,e,t){if(Nr(n.app))return Promise.reject(Or(n,"operation-not-supported-in-this-environment"));const i=Do(n);Uk(n,e,Sm);const s=dE(i,t);return new us(i,"signInViaPopup",e,s).executeNotNull()}class us extends fE{constructor(e,t,i,s,a){super(e,t,s,a),this.provider=i,this.authWindow=null,this.pollId=null,us.currentPopupAction&&us.currentPopupAction.cancel(),us.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return De(e,this.auth,"internal-error"),e}async onExecution(){Oi(this.filter.length===1,"Popup operations only handle one event");const e=Rm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Or(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Or(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,us.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Or(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tP.get())};e()}}us.currentPopupAction=null;/**
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
 */const nP="pendingRedirect",ih=new Map;class rP extends fE{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=ih.get(this.auth._key());if(!e){try{const i=await iP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}ih.set(this.auth._key(),e)}return this.bypassAuthState||ih.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iP(n,e){const t=aP(e),i=sP(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function oP(n,e){ih.set(n._key(),e)}function sP(n){return xi(n._redirectPersistence)}function aP(n){return rh(nP,n.config.apiKey,n.name)}async function lP(n,e,t=!1){if(Nr(n.app))return Promise.reject(Ni(n));const i=Do(n),s=dE(i,e),u=await new rP(i,s,t).execute();return u&&!t&&(delete u.user._redirectEventId,await i._persistUserIfCurrent(u.user),await i._setRedirectUser(null,e)),u}/**
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
 */const uP=10*60*1e3;class cP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!mE(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Or(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uv(e))}saveEventToCache(e){this.cachedEventUids.add(Uv(e)),this.lastProcessedEventTime=Date.now()}}function Uv(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function mE({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hP(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mE(n);default:return!1}}/**
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
 */async function dP(n,e={}){return Fi(n,"GET","/v1/projects",e)}/**
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
 */const fP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pP=/^https?/;async function mP(n){if(n.config.emulator)return;const{authorizedDomains:e}=await dP(n);for(const t of e)try{if(gP(t))return}catch{}gr(n,"unauthorized-domain")}function gP(n){const e=Pp(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===i}if(!pP.test(t))return!1;if(fP.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const yP=new mu(3e4,6e4);function Fv(){const n=ei().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function _P(n){return new Promise((e,t)=>{var i,s,a;function u(){Fv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fv(),t(Or(n,"network-request-failed"))},timeout:yP.get()})}if(!((s=(i=ei().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((a=ei().gapi)===null||a===void 0)&&a.load)u();else{const d=dC("iframefcb");return ei()[d]=()=>{gapi.load?u():t(Or(n,"network-request-failed"))},Zw(`${hC()}?onload=${d}`).catch(f=>t(f))}}).catch(e=>{throw oh=null,e})}let oh=null;function vP(n){return oh=oh||_P(n),oh}/**
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
 */const wP=new mu(5e3,15e3),EP="__/auth/iframe",TP="emulator/auth/iframe",IP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},SP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function RP(n){const e=n.config;De(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?vm(e,TP):`https://${n.config.authDomain}/${EP}`,i={apiKey:e.apiKey,appName:n.name,v:ks},s=SP.get(n.config.apiHost);s&&(i.eid=s);const a=n._getFrameworks();return a.length&&(i.fw=a.join(",")),`${t}?${pu(i).slice(1)}`}async function AP(n){const e=await vP(n),t=ei().gapi;return De(t,n,"internal-error"),e.open({where:document.body,url:RP(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:IP,dontclear:!0},i=>new Promise(async(s,a)=>{await i.restyle({setHideOnLeave:!1});const u=Or(n,"network-request-failed"),d=ei().setTimeout(()=>{a(u)},wP.get());function f(){ei().clearTimeout(d),s(i)}i.ping(f).then(f,()=>{a(u)})}))}/**
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
 */const kP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},CP=500,PP=600,xP="_blank",bP="http://localhost";class jv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NP(n,e,t,i=CP,s=PP){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),u=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const f=Object.assign(Object.assign({},kP),{width:i.toString(),height:s.toString(),top:a,left:u}),m=In().toLowerCase();t&&(d=Hw(m)?xP:t),qw(m)&&(e=e||bP,f.scrollbars="yes");const _=Object.entries(f).reduce((T,[A,b])=>`${T}${A}=${b},`,"");if(nC(m)&&d!=="_self")return DP(e||"",d),new jv(null);const E=window.open(e||"",d,_);De(E,n,"popup-blocked");try{E.focus()}catch{}return new jv(E)}function DP(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const OP="__/auth/handler",LP="emulator/auth/handler",MP=encodeURIComponent("fac");async function Bv(n,e,t,i,s,a){De(n.config.authDomain,n,"auth-domain-config-required"),De(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:ks,eventId:s};if(e instanceof Sm){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",IA(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,E]of Object.entries({}))u[_]=E}if(e instanceof yu){const _=e.getScopes().filter(E=>E!=="");_.length>0&&(u.scopes=_.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const _ of Object.keys(d))d[_]===void 0&&delete d[_];const f=await n._getAppCheckToken(),m=f?`#${MP}=${encodeURIComponent(f)}`:"";return`${VP(n)}?${pu(d).slice(1)}${m}`}function VP({config:n}){return n.emulator?vm(n,LP):`https://${n.authDomain}/${OP}`}/**
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
 */const np="webStorageSupport";class UP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=aE,this._completeRedirectFn=lP,this._overrideRedirectResult=oP}async _openPopup(e,t,i,s){var a;Oi((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await Bv(e,t,i,Pp(),s);return NP(e,u,Rm())}async _openRedirect(e,t,i,s){await this._originValidation(e);const a=await Bv(e,t,i,Pp(),s);return zC(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(Oi(a,"If manager is not set, promise should be"),a)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await AP(e),i=new cP(e);return t.register("authEvent",s=>(De(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(np,{type:np},s=>{var a;const u=(a=s==null?void 0:s[0])===null||a===void 0?void 0:a[np];u!==void 0&&t(!!u),gr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=mP(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Xw()||Ww()||Em()}}const FP=UP;var zv="@firebase/auth",$v="1.7.9";/**
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
 */class jP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){De(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function BP(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zP(n){ys(new ko("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=i.options;De(u&&!u.includes(":"),"invalid-api-key",{appName:i.name});const f={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jw(n)},m=new lC(i,s,a,f);return yC(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),ys(new ko("auth-internal",e=>{const t=Do(e.getProvider("auth").getImmediate());return(i=>new jP(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zr(zv,$v,BP(n)),Zr(zv,$v,"esm2017")}/**
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
 */const $P=5*60,qP=Pw("authIdTokenMaxAge")||$P;let qv=null;const WP=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>qP)return;const s=t==null?void 0:t.token;qv!==s&&(qv=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function HP(n=gm()){const e=jh(n,"auth");if(e.isInitialized())return e.getImmediate();const t=gC(n,{popupRedirectResolver:FP,persistence:[XC,FC,aE]}),i=Pw("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(i,location.origin);if(location.origin===a.origin){const u=WP(a.toString());MC(t,u,()=>u(t.currentUser)),LC(t,d=>u(d))}}const s=Aw("auth");return s&&_C(t,`http://${s}`),t}function KP(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}uC({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const a=Or("internal-error");a.customData=s,t(a)},i.type="text/javascript",i.charset="UTF-8",KP().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});zP("Browser");var Wv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ds,gE;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,S){function k(){}k.prototype=S.prototype,R.D=S.prototype,R.prototype=new k,R.prototype.constructor=R,R.C=function(D,M,V){for(var P=Array(arguments.length-2),it=2;it<arguments.length;it++)P[it-2]=arguments[it];return S.prototype[M].apply(D,P)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,S,k){k||(k=0);var D=Array(16);if(typeof S=="string")for(var M=0;16>M;++M)D[M]=S.charCodeAt(k++)|S.charCodeAt(k++)<<8|S.charCodeAt(k++)<<16|S.charCodeAt(k++)<<24;else for(M=0;16>M;++M)D[M]=S[k++]|S[k++]<<8|S[k++]<<16|S[k++]<<24;S=R.g[0],k=R.g[1],M=R.g[2];var V=R.g[3],P=S+(V^k&(M^V))+D[0]+3614090360&4294967295;S=k+(P<<7&4294967295|P>>>25),P=V+(M^S&(k^M))+D[1]+3905402710&4294967295,V=S+(P<<12&4294967295|P>>>20),P=M+(k^V&(S^k))+D[2]+606105819&4294967295,M=V+(P<<17&4294967295|P>>>15),P=k+(S^M&(V^S))+D[3]+3250441966&4294967295,k=M+(P<<22&4294967295|P>>>10),P=S+(V^k&(M^V))+D[4]+4118548399&4294967295,S=k+(P<<7&4294967295|P>>>25),P=V+(M^S&(k^M))+D[5]+1200080426&4294967295,V=S+(P<<12&4294967295|P>>>20),P=M+(k^V&(S^k))+D[6]+2821735955&4294967295,M=V+(P<<17&4294967295|P>>>15),P=k+(S^M&(V^S))+D[7]+4249261313&4294967295,k=M+(P<<22&4294967295|P>>>10),P=S+(V^k&(M^V))+D[8]+1770035416&4294967295,S=k+(P<<7&4294967295|P>>>25),P=V+(M^S&(k^M))+D[9]+2336552879&4294967295,V=S+(P<<12&4294967295|P>>>20),P=M+(k^V&(S^k))+D[10]+4294925233&4294967295,M=V+(P<<17&4294967295|P>>>15),P=k+(S^M&(V^S))+D[11]+2304563134&4294967295,k=M+(P<<22&4294967295|P>>>10),P=S+(V^k&(M^V))+D[12]+1804603682&4294967295,S=k+(P<<7&4294967295|P>>>25),P=V+(M^S&(k^M))+D[13]+4254626195&4294967295,V=S+(P<<12&4294967295|P>>>20),P=M+(k^V&(S^k))+D[14]+2792965006&4294967295,M=V+(P<<17&4294967295|P>>>15),P=k+(S^M&(V^S))+D[15]+1236535329&4294967295,k=M+(P<<22&4294967295|P>>>10),P=S+(M^V&(k^M))+D[1]+4129170786&4294967295,S=k+(P<<5&4294967295|P>>>27),P=V+(k^M&(S^k))+D[6]+3225465664&4294967295,V=S+(P<<9&4294967295|P>>>23),P=M+(S^k&(V^S))+D[11]+643717713&4294967295,M=V+(P<<14&4294967295|P>>>18),P=k+(V^S&(M^V))+D[0]+3921069994&4294967295,k=M+(P<<20&4294967295|P>>>12),P=S+(M^V&(k^M))+D[5]+3593408605&4294967295,S=k+(P<<5&4294967295|P>>>27),P=V+(k^M&(S^k))+D[10]+38016083&4294967295,V=S+(P<<9&4294967295|P>>>23),P=M+(S^k&(V^S))+D[15]+3634488961&4294967295,M=V+(P<<14&4294967295|P>>>18),P=k+(V^S&(M^V))+D[4]+3889429448&4294967295,k=M+(P<<20&4294967295|P>>>12),P=S+(M^V&(k^M))+D[9]+568446438&4294967295,S=k+(P<<5&4294967295|P>>>27),P=V+(k^M&(S^k))+D[14]+3275163606&4294967295,V=S+(P<<9&4294967295|P>>>23),P=M+(S^k&(V^S))+D[3]+4107603335&4294967295,M=V+(P<<14&4294967295|P>>>18),P=k+(V^S&(M^V))+D[8]+1163531501&4294967295,k=M+(P<<20&4294967295|P>>>12),P=S+(M^V&(k^M))+D[13]+2850285829&4294967295,S=k+(P<<5&4294967295|P>>>27),P=V+(k^M&(S^k))+D[2]+4243563512&4294967295,V=S+(P<<9&4294967295|P>>>23),P=M+(S^k&(V^S))+D[7]+1735328473&4294967295,M=V+(P<<14&4294967295|P>>>18),P=k+(V^S&(M^V))+D[12]+2368359562&4294967295,k=M+(P<<20&4294967295|P>>>12),P=S+(k^M^V)+D[5]+4294588738&4294967295,S=k+(P<<4&4294967295|P>>>28),P=V+(S^k^M)+D[8]+2272392833&4294967295,V=S+(P<<11&4294967295|P>>>21),P=M+(V^S^k)+D[11]+1839030562&4294967295,M=V+(P<<16&4294967295|P>>>16),P=k+(M^V^S)+D[14]+4259657740&4294967295,k=M+(P<<23&4294967295|P>>>9),P=S+(k^M^V)+D[1]+2763975236&4294967295,S=k+(P<<4&4294967295|P>>>28),P=V+(S^k^M)+D[4]+1272893353&4294967295,V=S+(P<<11&4294967295|P>>>21),P=M+(V^S^k)+D[7]+4139469664&4294967295,M=V+(P<<16&4294967295|P>>>16),P=k+(M^V^S)+D[10]+3200236656&4294967295,k=M+(P<<23&4294967295|P>>>9),P=S+(k^M^V)+D[13]+681279174&4294967295,S=k+(P<<4&4294967295|P>>>28),P=V+(S^k^M)+D[0]+3936430074&4294967295,V=S+(P<<11&4294967295|P>>>21),P=M+(V^S^k)+D[3]+3572445317&4294967295,M=V+(P<<16&4294967295|P>>>16),P=k+(M^V^S)+D[6]+76029189&4294967295,k=M+(P<<23&4294967295|P>>>9),P=S+(k^M^V)+D[9]+3654602809&4294967295,S=k+(P<<4&4294967295|P>>>28),P=V+(S^k^M)+D[12]+3873151461&4294967295,V=S+(P<<11&4294967295|P>>>21),P=M+(V^S^k)+D[15]+530742520&4294967295,M=V+(P<<16&4294967295|P>>>16),P=k+(M^V^S)+D[2]+3299628645&4294967295,k=M+(P<<23&4294967295|P>>>9),P=S+(M^(k|~V))+D[0]+4096336452&4294967295,S=k+(P<<6&4294967295|P>>>26),P=V+(k^(S|~M))+D[7]+1126891415&4294967295,V=S+(P<<10&4294967295|P>>>22),P=M+(S^(V|~k))+D[14]+2878612391&4294967295,M=V+(P<<15&4294967295|P>>>17),P=k+(V^(M|~S))+D[5]+4237533241&4294967295,k=M+(P<<21&4294967295|P>>>11),P=S+(M^(k|~V))+D[12]+1700485571&4294967295,S=k+(P<<6&4294967295|P>>>26),P=V+(k^(S|~M))+D[3]+2399980690&4294967295,V=S+(P<<10&4294967295|P>>>22),P=M+(S^(V|~k))+D[10]+4293915773&4294967295,M=V+(P<<15&4294967295|P>>>17),P=k+(V^(M|~S))+D[1]+2240044497&4294967295,k=M+(P<<21&4294967295|P>>>11),P=S+(M^(k|~V))+D[8]+1873313359&4294967295,S=k+(P<<6&4294967295|P>>>26),P=V+(k^(S|~M))+D[15]+4264355552&4294967295,V=S+(P<<10&4294967295|P>>>22),P=M+(S^(V|~k))+D[6]+2734768916&4294967295,M=V+(P<<15&4294967295|P>>>17),P=k+(V^(M|~S))+D[13]+1309151649&4294967295,k=M+(P<<21&4294967295|P>>>11),P=S+(M^(k|~V))+D[4]+4149444226&4294967295,S=k+(P<<6&4294967295|P>>>26),P=V+(k^(S|~M))+D[11]+3174756917&4294967295,V=S+(P<<10&4294967295|P>>>22),P=M+(S^(V|~k))+D[2]+718787259&4294967295,M=V+(P<<15&4294967295|P>>>17),P=k+(V^(M|~S))+D[9]+3951481745&4294967295,R.g[0]=R.g[0]+S&4294967295,R.g[1]=R.g[1]+(M+(P<<21&4294967295|P>>>11))&4294967295,R.g[2]=R.g[2]+M&4294967295,R.g[3]=R.g[3]+V&4294967295}i.prototype.u=function(R,S){S===void 0&&(S=R.length);for(var k=S-this.blockSize,D=this.B,M=this.h,V=0;V<S;){if(M==0)for(;V<=k;)s(this,R,V),V+=this.blockSize;if(typeof R=="string"){for(;V<S;)if(D[M++]=R.charCodeAt(V++),M==this.blockSize){s(this,D),M=0;break}}else for(;V<S;)if(D[M++]=R[V++],M==this.blockSize){s(this,D),M=0;break}}this.h=M,this.o+=S},i.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var S=1;S<R.length-8;++S)R[S]=0;var k=8*this.o;for(S=R.length-8;S<R.length;++S)R[S]=k&255,k/=256;for(this.u(R),R=Array(16),S=k=0;4>S;++S)for(var D=0;32>D;D+=8)R[k++]=this.g[S]>>>D&255;return R};function a(R,S){var k=d;return Object.prototype.hasOwnProperty.call(k,R)?k[R]:k[R]=S(R)}function u(R,S){this.h=S;for(var k=[],D=!0,M=R.length-1;0<=M;M--){var V=R[M]|0;D&&V==S||(k[M]=V,D=!1)}this.g=k}var d={};function f(R){return-128<=R&&128>R?a(R,function(S){return new u([S|0],0>S?-1:0)}):new u([R|0],0>R?-1:0)}function m(R){if(isNaN(R)||!isFinite(R))return E;if(0>R)return N(m(-R));for(var S=[],k=1,D=0;R>=k;D++)S[D]=R/k|0,k*=4294967296;return new u(S,0)}function _(R,S){if(R.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(R.charAt(0)=="-")return N(_(R.substring(1),S));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var k=m(Math.pow(S,8)),D=E,M=0;M<R.length;M+=8){var V=Math.min(8,R.length-M),P=parseInt(R.substring(M,M+V),S);8>V?(V=m(Math.pow(S,V)),D=D.j(V).add(m(P))):(D=D.j(k),D=D.add(m(P)))}return D}var E=f(0),T=f(1),A=f(16777216);n=u.prototype,n.m=function(){if(L(this))return-N(this).m();for(var R=0,S=1,k=0;k<this.g.length;k++){var D=this.i(k);R+=(0<=D?D:4294967296+D)*S,S*=4294967296}return R},n.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(b(this))return"0";if(L(this))return"-"+N(this).toString(R);for(var S=m(Math.pow(R,6)),k=this,D="";;){var M=x(k,S).g;k=K(k,M.j(S));var V=((0<k.g.length?k.g[0]:k.h)>>>0).toString(R);if(k=M,b(k))return V+D;for(;6>V.length;)V="0"+V;D=V+D}},n.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function b(R){if(R.h!=0)return!1;for(var S=0;S<R.g.length;S++)if(R.g[S]!=0)return!1;return!0}function L(R){return R.h==-1}n.l=function(R){return R=K(this,R),L(R)?-1:b(R)?0:1};function N(R){for(var S=R.g.length,k=[],D=0;D<S;D++)k[D]=~R.g[D];return new u(k,~R.h).add(T)}n.abs=function(){return L(this)?N(this):this},n.add=function(R){for(var S=Math.max(this.g.length,R.g.length),k=[],D=0,M=0;M<=S;M++){var V=D+(this.i(M)&65535)+(R.i(M)&65535),P=(V>>>16)+(this.i(M)>>>16)+(R.i(M)>>>16);D=P>>>16,V&=65535,P&=65535,k[M]=P<<16|V}return new u(k,k[k.length-1]&-2147483648?-1:0)};function K(R,S){return R.add(N(S))}n.j=function(R){if(b(this)||b(R))return E;if(L(this))return L(R)?N(this).j(N(R)):N(N(this).j(R));if(L(R))return N(this.j(N(R)));if(0>this.l(A)&&0>R.l(A))return m(this.m()*R.m());for(var S=this.g.length+R.g.length,k=[],D=0;D<2*S;D++)k[D]=0;for(D=0;D<this.g.length;D++)for(var M=0;M<R.g.length;M++){var V=this.i(D)>>>16,P=this.i(D)&65535,it=R.i(M)>>>16,ct=R.i(M)&65535;k[2*D+2*M]+=P*ct,j(k,2*D+2*M),k[2*D+2*M+1]+=V*ct,j(k,2*D+2*M+1),k[2*D+2*M+1]+=P*it,j(k,2*D+2*M+1),k[2*D+2*M+2]+=V*it,j(k,2*D+2*M+2)}for(D=0;D<S;D++)k[D]=k[2*D+1]<<16|k[2*D];for(D=S;D<2*S;D++)k[D]=0;return new u(k,0)};function j(R,S){for(;(R[S]&65535)!=R[S];)R[S+1]+=R[S]>>>16,R[S]&=65535,S++}function q(R,S){this.g=R,this.h=S}function x(R,S){if(b(S))throw Error("division by zero");if(b(R))return new q(E,E);if(L(R))return S=x(N(R),S),new q(N(S.g),N(S.h));if(L(S))return S=x(R,N(S)),new q(N(S.g),S.h);if(30<R.g.length){if(L(R)||L(S))throw Error("slowDivide_ only works with positive integers.");for(var k=T,D=S;0>=D.l(R);)k=ee(k),D=ee(D);var M=oe(k,1),V=oe(D,1);for(D=oe(D,2),k=oe(k,2);!b(D);){var P=V.add(D);0>=P.l(R)&&(M=M.add(k),V=P),D=oe(D,1),k=oe(k,1)}return S=K(R,M.j(S)),new q(M,S)}for(M=E;0<=R.l(S);){for(k=Math.max(1,Math.floor(R.m()/S.m())),D=Math.ceil(Math.log(k)/Math.LN2),D=48>=D?1:Math.pow(2,D-48),V=m(k),P=V.j(S);L(P)||0<P.l(R);)k-=D,V=m(k),P=V.j(S);b(V)&&(V=T),M=M.add(V),R=K(R,P)}return new q(M,R)}n.A=function(R){return x(this,R).h},n.and=function(R){for(var S=Math.max(this.g.length,R.g.length),k=[],D=0;D<S;D++)k[D]=this.i(D)&R.i(D);return new u(k,this.h&R.h)},n.or=function(R){for(var S=Math.max(this.g.length,R.g.length),k=[],D=0;D<S;D++)k[D]=this.i(D)|R.i(D);return new u(k,this.h|R.h)},n.xor=function(R){for(var S=Math.max(this.g.length,R.g.length),k=[],D=0;D<S;D++)k[D]=this.i(D)^R.i(D);return new u(k,this.h^R.h)};function ee(R){for(var S=R.g.length+1,k=[],D=0;D<S;D++)k[D]=R.i(D)<<1|R.i(D-1)>>>31;return new u(k,R.h)}function oe(R,S){var k=S>>5;S%=32;for(var D=R.g.length-k,M=[],V=0;V<D;V++)M[V]=0<S?R.i(V+k)>>>S|R.i(V+k+1)<<32-S:R.i(V+k);return new u(M,R.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,gE=i,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=m,u.fromString=_,ds=u}).apply(typeof Wv<"u"?Wv:typeof self<"u"?self:typeof window<"u"?window:{});var Wc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yE,Ml,_E,sh,Op,vE,wE,EE;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,v){return c==Array.prototype||c==Object.prototype||(c[g]=v.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Wc=="object"&&Wc];for(var g=0;g<c.length;++g){var v=c[g];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var i=t(this);function s(c,g){if(g)e:{var v=i;c=c.split(".");for(var I=0;I<c.length-1;I++){var B=c[I];if(!(B in v))break e;v=v[B]}c=c[c.length-1],I=v[c],g=g(I),g!=I&&g!=null&&e(v,c,{configurable:!0,writable:!0,value:g})}}function a(c,g){c instanceof String&&(c+="");var v=0,I=!1,B={next:function(){if(!I&&v<c.length){var G=v++;return{value:g(G,c[G]),done:!1}}return I=!0,{done:!0,value:void 0}}};return B[Symbol.iterator]=function(){return B},B}s("Array.prototype.values",function(c){return c||function(){return a(this,function(g,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function f(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function m(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function _(c,g,v){return c.call.apply(c.bind,arguments)}function E(c,g,v){if(!c)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var B=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(B,I),c.apply(g,B)}}return function(){return c.apply(g,arguments)}}function T(c,g,v){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:E,T.apply(null,arguments)}function A(c,g){var v=Array.prototype.slice.call(arguments,1);return function(){var I=v.slice();return I.push.apply(I,arguments),c.apply(this,I)}}function b(c,g){function v(){}v.prototype=g.prototype,c.aa=g.prototype,c.prototype=new v,c.prototype.constructor=c,c.Qb=function(I,B,G){for(var ue=Array(arguments.length-2),lt=2;lt<arguments.length;lt++)ue[lt-2]=arguments[lt];return g.prototype[B].apply(I,ue)}}function L(c){const g=c.length;if(0<g){const v=Array(g);for(let I=0;I<g;I++)v[I]=c[I];return v}return[]}function N(c,g){for(let v=1;v<arguments.length;v++){const I=arguments[v];if(f(I)){const B=c.length||0,G=I.length||0;c.length=B+G;for(let ue=0;ue<G;ue++)c[B+ue]=I[ue]}else c.push(I)}}class K{constructor(g,v){this.i=g,this.j=v,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function j(c){return/^[\s\xa0]*$/.test(c)}function q(){var c=d.navigator;return c&&(c=c.userAgent)?c:""}function x(c){return x[" "](c),c}x[" "]=function(){};var ee=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function oe(c,g,v){for(const I in c)g.call(v,c[I],I,c)}function R(c,g){for(const v in c)g.call(void 0,c[v],v,c)}function S(c){const g={};for(const v in c)g[v]=c[v];return g}const k="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function D(c,g){let v,I;for(let B=1;B<arguments.length;B++){I=arguments[B];for(v in I)c[v]=I[v];for(let G=0;G<k.length;G++)v=k[G],Object.prototype.hasOwnProperty.call(I,v)&&(c[v]=I[v])}}function M(c){var g=1;c=c.split(":");const v=[];for(;0<g&&c.length;)v.push(c.shift()),g--;return c.length&&v.push(c.join(":")),v}function V(c){d.setTimeout(()=>{throw c},0)}function P(){var c=me;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class it{constructor(){this.h=this.g=null}add(g,v){const I=ct.get();I.set(g,v),this.h?this.h.next=I:this.g=I,this.h=I}}var ct=new K(()=>new Xe,c=>c.reset());class Xe{constructor(){this.next=this.g=this.h=null}set(g,v){this.h=g,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let Ne,se=!1,me=new it,ce=()=>{const c=d.Promise.resolve(void 0);Ne=()=>{c.then(F)}};var F=()=>{for(var c;c=P();){try{c.h.call(c.g)}catch(v){V(v)}var g=ct;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}se=!1};function X(){this.s=this.s,this.C=this.C}X.prototype.s=!1,X.prototype.ma=function(){this.s||(this.s=!0,this.N())},X.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ve(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}ve.prototype.h=function(){this.defaultPrevented=!0};var ye=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};d.addEventListener("test",v,g),d.removeEventListener("test",v,g)}catch{}return c}();function be(c,g){if(ve.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var v=this.type=c.type,I=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(ee){e:{try{x(g.nodeName);var B=!0;break e}catch{}B=!1}B||(g=null)}}else v=="mouseover"?g=c.fromElement:v=="mouseout"&&(g=c.toElement);this.relatedTarget=g,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Fe[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&be.aa.h.call(this)}}b(be,ve);var Fe={2:"touch",3:"pen",4:"mouse"};be.prototype.h=function(){be.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var je="closure_listenable_"+(1e6*Math.random()|0),Me=0;function Je(c,g,v,I,B){this.listener=c,this.proxy=null,this.src=g,this.type=v,this.capture=!!I,this.ha=B,this.key=++Me,this.da=this.fa=!1}function st(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function tr(c){this.src=c,this.g={},this.h=0}tr.prototype.add=function(c,g,v,I,B){var G=c.toString();c=this.g[G],c||(c=this.g[G]=[],this.h++);var ue=Ur(c,g,I,B);return-1<ue?(g=c[ue],v||(g.fa=!1)):(g=new Je(g,this.src,G,!!I,B),g.fa=v,c.push(g)),g};function ji(c,g){var v=g.type;if(v in c.g){var I=c.g[v],B=Array.prototype.indexOf.call(I,g,void 0),G;(G=0<=B)&&Array.prototype.splice.call(I,B,1),G&&(st(g),c.g[v].length==0&&(delete c.g[v],c.h--))}}function Ur(c,g,v,I){for(var B=0;B<c.length;++B){var G=c[B];if(!G.da&&G.listener==g&&G.capture==!!v&&G.ha==I)return B}return-1}var si="closure_lm_"+(1e6*Math.random()|0),nr={};function Bi(c,g,v,I,B){if(Array.isArray(g)){for(var G=0;G<g.length;G++)Bi(c,g[G],v,I,B);return null}return v=qi(v),c&&c[je]?c.K(g,v,m(I)?!!I.capture:!!I,B):ai(c,g,v,!1,I,B)}function ai(c,g,v,I,B,G){if(!g)throw Error("Invalid event type");var ue=m(B)?!!B.capture:!!B,lt=ui(c);if(lt||(c[si]=lt=new tr(c)),v=lt.add(g,v,I,ue,G),v.proxy)return v;if(I=li(),v.proxy=I,I.src=c,I.listener=v,c.addEventListener)ye||(B=ue),B===void 0&&(B=!1),c.addEventListener(g.toString(),I,B);else if(c.attachEvent)c.attachEvent(rr(g.toString()),I);else if(c.addListener&&c.removeListener)c.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return v}function li(){function c(v){return g.call(c.src,c.listener,v)}const g=zi;return c}function Fr(c,g,v,I,B){if(Array.isArray(g))for(var G=0;G<g.length;G++)Fr(c,g[G],v,I,B);else I=m(I)?!!I.capture:!!I,v=qi(v),c&&c[je]?(c=c.i,g=String(g).toString(),g in c.g&&(G=c.g[g],v=Ur(G,v,I,B),-1<v&&(st(G[v]),Array.prototype.splice.call(G,v,1),G.length==0&&(delete c.g[g],c.h--)))):c&&(c=ui(c))&&(g=c.g[g.toString()],c=-1,g&&(c=Ur(g,v,I,B)),(v=-1<c?g[c]:null)&&Qt(v))}function Qt(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[je])ji(g.i,c);else{var v=c.type,I=c.proxy;g.removeEventListener?g.removeEventListener(v,I,c.capture):g.detachEvent?g.detachEvent(rr(v),I):g.addListener&&g.removeListener&&g.removeListener(I),(v=ui(g))?(ji(v,c),v.h==0&&(v.src=null,g[si]=null)):st(c)}}}function rr(c){return c in nr?nr[c]:nr[c]="on"+c}function zi(c,g){if(c.da)c=!0;else{g=new be(g,this);var v=c.listener,I=c.ha||c.src;c.fa&&Qt(c),c=v.call(I,g)}return c}function ui(c){return c=c[si],c instanceof tr?c:null}var $i="__closure_events_fn_"+(1e9*Math.random()>>>0);function qi(c){return typeof c=="function"?c:(c[$i]||(c[$i]=function(g){return c.handleEvent(g)}),c[$i])}function Tt(){X.call(this),this.i=new tr(this),this.M=this,this.F=null}b(Tt,X),Tt.prototype[je]=!0,Tt.prototype.removeEventListener=function(c,g,v,I){Fr(this,c,g,v,I)};function bt(c,g){var v,I=c.F;if(I)for(v=[];I;I=I.F)v.push(I);if(c=c.M,I=g.type||g,typeof g=="string")g=new ve(g,c);else if(g instanceof ve)g.target=g.target||c;else{var B=g;g=new ve(I,c),D(g,B)}if(B=!0,v)for(var G=v.length-1;0<=G;G--){var ue=g.g=v[G];B=zn(ue,I,!0,g)&&B}if(ue=g.g=c,B=zn(ue,I,!0,g)&&B,B=zn(ue,I,!1,g)&&B,v)for(G=0;G<v.length;G++)ue=g.g=v[G],B=zn(ue,I,!1,g)&&B}Tt.prototype.N=function(){if(Tt.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var v=c.g[g],I=0;I<v.length;I++)st(v[I]);delete c.g[g],c.h--}}this.F=null},Tt.prototype.K=function(c,g,v,I){return this.i.add(String(c),g,!1,v,I)},Tt.prototype.L=function(c,g,v,I){return this.i.add(String(c),g,!0,v,I)};function zn(c,g,v,I){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var B=!0,G=0;G<g.length;++G){var ue=g[G];if(ue&&!ue.da&&ue.capture==v){var lt=ue.listener,$t=ue.ha||ue.src;ue.fa&&ji(c.i,ue),B=lt.call($t,I)!==!1&&B}}return B&&!I.defaultPrevented}function Mo(c,g,v){if(typeof c=="function")v&&(c=T(c,v));else if(c&&typeof c.handleEvent=="function")c=T(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:d.setTimeout(c,g||0)}function _r(c){c.g=Mo(()=>{c.g=null,c.i&&(c.i=!1,_r(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class ci extends X{constructor(g,v){super(),this.m=g,this.l=v,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:_r(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jr(c){X.call(this),this.h=c,this.g={}}b(jr,X);var Vo=[];function H(c){oe(c.g,function(g,v){this.g.hasOwnProperty(v)&&Qt(g)},c),c.g={}}jr.prototype.N=function(){jr.aa.N.call(this),H(this)},jr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Q=d.JSON.stringify,te=d.JSON.parse,fe=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function Ce(){}Ce.prototype.h=null;function Re(c){return c.h||(c.h=c.i())}function Pe(){}var we={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function pe(){ve.call(this,"d")}b(pe,ve);function Ze(){ve.call(this,"c")}b(Ze,ve);var dt={},Ge=null;function at(){return Ge=Ge||new Tt}dt.La="serverreachability";function It(c){ve.call(this,dt.La,c)}b(It,ve);function rn(c){const g=at();bt(g,new It(g))}dt.STAT_EVENT="statevent";function $n(c,g){ve.call(this,dt.STAT_EVENT,c),this.stat=g}b($n,ve);function ft(c){const g=at();bt(g,new $n(g,c))}dt.Ma="timingevent";function Br(c,g){ve.call(this,dt.Ma,c),this.size=g}b(Br,ve);function Lt(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},g)}function on(){this.g=!0}on.prototype.xa=function(){this.g=!1};function ir(c,g,v,I,B,G){c.info(function(){if(c.g)if(G)for(var ue="",lt=G.split("&"),$t=0;$t<lt.length;$t++){var Qe=lt[$t].split("=");if(1<Qe.length){var Xt=Qe[0];Qe=Qe[1];var Ut=Xt.split("_");ue=2<=Ut.length&&Ut[1]=="type"?ue+(Xt+"="+Qe+"&"):ue+(Xt+"=redacted&")}}else ue=null;else ue=G;return"XMLHTTP REQ ("+I+") [attempt "+B+"]: "+g+`
`+v+`
`+ue})}function zr(c,g,v,I,B,G,ue){c.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+B+"]: "+g+`
`+v+`
`+G+" "+ue})}function Sn(c,g,v,I){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+tt(c,v)+(I?" "+I:"")})}function hi(c,g){c.info(function(){return"TIMEOUT: "+g})}on.prototype.info=function(){};function tt(c,g){if(!c.g)return g;if(!g)return null;try{var v=JSON.parse(g);if(v){for(c=0;c<v.length;c++)if(Array.isArray(v[c])){var I=v[c];if(!(2>I.length)){var B=I[1];if(Array.isArray(B)&&!(1>B.length)){var G=B[0];if(G!="noop"&&G!="stop"&&G!="close")for(var ue=1;ue<B.length;ue++)B[ue]=""}}}}return Q(v)}catch{return g}}var Yt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},qn={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Rn;function pt(){}b(pt,Ce),pt.prototype.g=function(){return new XMLHttpRequest},pt.prototype.i=function(){return{}},Rn=new pt;function sn(c,g,v,I){this.j=c,this.i=g,this.l=v,this.R=I||1,this.U=new jr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Uo}function Uo(){this.i=null,this.g="",this.h=!1}var Fo={},xs={};function bs(c,g,v){c.L=1,c.v=Qi(Hn(g)),c.m=v,c.P=!0,Ka(c,null)}function Ka(c,g){c.F=Date.now(),gt(c),c.A=Hn(c.v);var v=c.A,I=c.R;Array.isArray(I)||(I=[String(I)]),Xi(v.i,"t",I),c.C=0,v=c.j.J,c.h=new Uo,c.g=Hu(c.j,v?g:null,!c.m),0<c.O&&(c.M=new ci(T(c.Y,c,c.g),c.O)),g=c.U,v=c.g,I=c.ca;var B="readystatechange";Array.isArray(B)||(B&&(Vo[0]=B.toString()),B=Vo);for(var G=0;G<B.length;G++){var ue=Bi(v,B[G],I||g.handleEvent,!1,g.h||g);if(!ue)break;g.g[ue.key]=ue}g=c.H?S(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),rn(),ir(c.i,c.u,c.A,c.l,c.R,c.m)}sn.prototype.ca=function(c){c=c.target;const g=this.M;g&&Dn(c)==3?g.j():this.Y(c)},sn.prototype.Y=function(c){try{if(c==this.g)e:{const Ut=Dn(this.g);var g=this.g.Ba();const ar=this.g.Z();if(!(3>Ut)&&(Ut!=3||this.g&&(this.h.h||this.g.oa()||Za(this.g)))){this.J||Ut!=4||g==7||(g==8||0>=ar?rn(3):rn(2)),jo(this);var v=this.g.Z();this.X=v;t:if(Pu(this)){var I=Za(this.g);c="";var B=I.length,G=Dn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){or(this),Wi(this);var ue="";break t}this.h.i=new d.TextDecoder}for(g=0;g<B;g++)this.h.h=!0,c+=this.h.i.decode(I[g],{stream:!(G&&g==B-1)});I.length=0,this.h.g+=c,this.C=0,ue=this.h.g}else ue=this.g.oa();if(this.o=v==200,zr(this.i,this.u,this.A,this.l,this.R,Ut,v),this.o){if(this.T&&!this.K){t:{if(this.g){var lt,$t=this.g;if((lt=$t.g?$t.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(lt)){var Qe=lt;break t}}Qe=null}if(v=Qe)Sn(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ga(this,v);else{this.o=!1,this.s=3,ft(12),or(this),Wi(this);break e}}if(this.P){v=!0;let Gn;for(;!this.J&&this.C<ue.length;)if(Gn=dd(this,ue),Gn==xs){Ut==4&&(this.s=4,ft(14),v=!1),Sn(this.i,this.l,null,"[Incomplete Response]");break}else if(Gn==Fo){this.s=4,ft(15),Sn(this.i,this.l,ue,"[Invalid Chunk]"),v=!1;break}else Sn(this.i,this.l,Gn,null),Ga(this,Gn);if(Pu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ut!=4||ue.length!=0||this.h.h||(this.s=1,ft(16),v=!1),this.o=this.o&&v,!v)Sn(this.i,this.l,ue,"[Invalid Chunked Response]"),or(this),Wi(this);else if(0<ue.length&&!this.W){this.W=!0;var Xt=this.j;Xt.g==this&&Xt.ba&&!Xt.M&&(Xt.j.info("Great, no buffering proxy detected. Bytes received: "+ue.length),tl(Xt),Xt.M=!0,ft(11))}}else Sn(this.i,this.l,ue,null),Ga(this,ue);Ut==4&&or(this),this.o&&!this.J&&(Ut==4?zs(this.j,this):(this.o=!1,gt(this)))}else Vs(this.g),v==400&&0<ue.indexOf("Unknown SID")?(this.s=3,ft(12)):(this.s=0,ft(13)),or(this),Wi(this)}}}catch{}finally{}};function Pu(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function dd(c,g){var v=c.C,I=g.indexOf(`
`,v);return I==-1?xs:(v=Number(g.substring(v,I)),isNaN(v)?Fo:(I+=1,I+v>g.length?xs:(g=g.slice(I,I+v),c.C=I+v,g)))}sn.prototype.cancel=function(){this.J=!0,or(this)};function gt(c){c.S=Date.now()+c.I,xu(c,c.I)}function xu(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Lt(T(c.ba,c),g)}function jo(c){c.B&&(d.clearTimeout(c.B),c.B=null)}sn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(hi(this.i,this.A),this.L!=2&&(rn(),ft(17)),or(this),this.s=2,Wi(this)):xu(this,this.S-c)};function Wi(c){c.j.G==0||c.J||zs(c.j,c)}function or(c){jo(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,H(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function Ga(c,g){try{var v=c.j;if(v.G!=0&&(v.g==c||An(v.h,c))){if(!c.K&&An(v.h,c)&&v.G==3){try{var I=v.Da.g.parse(g)}catch{I=null}if(Array.isArray(I)&&I.length==3){var B=I;if(B[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<c.F)Bs(v),Ir(v);else break e;js(v),ft(18)}}else v.za=B[1],0<v.za-v.T&&37500>B[2]&&v.F&&v.v==0&&!v.C&&(v.C=Lt(T(v.Za,v),6e3));if(1>=Nu(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else gi(v,11)}else if((c.K||v.g==c)&&Bs(v),!j(g))for(B=v.Da.g.parse(g),g=0;g<B.length;g++){let Qe=B[g];if(v.T=Qe[0],Qe=Qe[1],v.G==2)if(Qe[0]=="c"){v.K=Qe[1],v.ia=Qe[2];const Xt=Qe[3];Xt!=null&&(v.la=Xt,v.j.info("VER="+v.la));const Ut=Qe[4];Ut!=null&&(v.Aa=Ut,v.j.info("SVER="+v.Aa));const ar=Qe[5];ar!=null&&typeof ar=="number"&&0<ar&&(I=1.5*ar,v.L=I,v.j.info("backChannelRequestTimeoutMs_="+I)),I=v;const Gn=c.g;if(Gn){const Ko=Gn.g?Gn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ko){var G=I.h;G.g||Ko.indexOf("spdy")==-1&&Ko.indexOf("quic")==-1&&Ko.indexOf("h2")==-1||(G.j=G.l,G.g=new Set,G.h&&(Qa(G,G.h),G.h=null))}if(I.D){const qs=Gn.g?Gn.g.getResponseHeader("X-HTTP-Session-Id"):null;qs&&(I.ya=qs,mt(I.I,I.D,qs))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-c.F,v.j.info("Handshake RTT: "+v.R+"ms")),I=v;var ue=c;if(I.qa=Wu(I,I.J?I.ia:null,I.W),ue.K){Du(I.h,ue);var lt=ue,$t=I.L;$t&&(lt.I=$t),lt.B&&(jo(lt),gt(lt)),I.g=ue}else Ho(I);0<v.i.length&&Hr(v)}else Qe[0]!="stop"&&Qe[0]!="close"||gi(v,7);else v.G==3&&(Qe[0]=="stop"||Qe[0]=="close"?Qe[0]=="stop"?gi(v,7):ln(v):Qe[0]!="noop"&&v.l&&v.l.ta(Qe),v.v=0)}}rn(4)}catch{}}var bu=class{constructor(c,g){this.g=c,this.map=g}};function Bo(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Wn(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Nu(c){return c.h?1:c.g?c.g.size:0}function An(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function Qa(c,g){c.g?c.g.add(g):c.h=g}function Du(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}Bo.prototype.cancel=function(){if(this.i=Ou(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Ou(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const v of c.g.values())g=g.concat(v.D);return g}return L(c.i)}function Ns(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var g=[],v=c.length,I=0;I<v;I++)g.push(c[I]);return g}g=[],v=0;for(I in c)g[v++]=c[I];return g}function Ds(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var g=[];c=c.length;for(var v=0;v<c;v++)g.push(v);return g}g=[],v=0;for(const I in c)g[v++]=I;return g}}}function Hi(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var v=Ds(c),I=Ns(c),B=I.length,G=0;G<B;G++)g.call(void 0,I[G],v&&v[G],c)}var zo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fd(c,g){if(c){c=c.split("&");for(var v=0;v<c.length;v++){var I=c[v].indexOf("="),B=null;if(0<=I){var G=c[v].substring(0,I);B=c[v].substring(I+1)}else G=c[v];g(G,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function di(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof di){this.h=c.h,$o(this,c.j),this.o=c.o,this.g=c.g,Ki(this,c.s),this.l=c.l;var g=c.i,v=new $r;v.i=g.i,g.g&&(v.g=new Map(g.g),v.h=g.h),Gi(this,v),this.m=c.m}else c&&(g=String(c).match(zo))?(this.h=!1,$o(this,g[1]||"",!0),this.o=He(g[2]||""),this.g=He(g[3]||"",!0),Ki(this,g[4]),this.l=He(g[5]||"",!0),Gi(this,g[6]||"",!0),this.m=He(g[7]||"")):(this.h=!1,this.i=new $r(null,this.h))}di.prototype.toString=function(){var c=[],g=this.j;g&&c.push(Yi(g,Os,!0),":");var v=this.g;return(v||g=="file")&&(c.push("//"),(g=this.o)&&c.push(Yi(g,Os,!0),"@"),c.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&c.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(Yi(v,v.charAt(0)=="/"?Vu:Mu,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",Yi(v,Ya)),c.join("")};function Hn(c){return new di(c)}function $o(c,g,v){c.j=v?He(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function Ki(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function Gi(c,g,v){g instanceof $r?(c.i=g,qr(c.i,c.h)):(v||(g=Yi(g,Uu)),c.i=new $r(g,c.h))}function mt(c,g,v){c.i.set(g,v)}function Qi(c){return mt(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function He(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Yi(c,g,v){return typeof c=="string"?(c=encodeURI(c).replace(g,Lu),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Lu(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Os=/[#\/\?@]/g,Mu=/[#\?:]/g,Vu=/[#\?]/g,Uu=/[#\?@]/g,Ya=/#/g;function $r(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function an(c){c.g||(c.g=new Map,c.h=0,c.i&&fd(c.i,function(g,v){c.add(decodeURIComponent(g.replace(/\+/g," ")),v)}))}n=$r.prototype,n.add=function(c,g){an(this),this.i=null,c=sr(this,c);var v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(g),this.h+=1,this};function vr(c,g){an(c),g=sr(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function wr(c,g){return an(c),g=sr(c,g),c.g.has(g)}n.forEach=function(c,g){an(this),this.g.forEach(function(v,I){v.forEach(function(B){c.call(g,B,I,this)},this)},this)},n.na=function(){an(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),v=[];for(let I=0;I<g.length;I++){const B=c[I];for(let G=0;G<B.length;G++)v.push(g[I])}return v},n.V=function(c){an(this);let g=[];if(typeof c=="string")wr(this,c)&&(g=g.concat(this.g.get(sr(this,c))));else{c=Array.from(this.g.values());for(let v=0;v<c.length;v++)g=g.concat(c[v])}return g},n.set=function(c,g){return an(this),this.i=null,c=sr(this,c),wr(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},n.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function Xi(c,g,v){vr(c,g),0<v.length&&(c.i=null,c.g.set(sr(c,g),L(v)),c.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var v=0;v<g.length;v++){var I=g[v];const G=encodeURIComponent(String(I)),ue=this.V(I);for(I=0;I<ue.length;I++){var B=G;ue[I]!==""&&(B+="="+encodeURIComponent(String(ue[I]))),c.push(B)}}return this.i=c.join("&")};function sr(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function qr(c,g){g&&!c.j&&(an(c),c.i=null,c.g.forEach(function(v,I){var B=I.toLowerCase();I!=B&&(vr(this,I),Xi(this,B,v))},c)),c.j=g}function pd(c,g){const v=new on;if(d.Image){const I=new Image;I.onload=A(Nn,v,"TestLoadImage: loaded",!0,g,I),I.onerror=A(Nn,v,"TestLoadImage: error",!1,g,I),I.onabort=A(Nn,v,"TestLoadImage: abort",!1,g,I),I.ontimeout=A(Nn,v,"TestLoadImage: timeout",!1,g,I),d.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=c}else g(!1)}function Fu(c,g){const v=new on,I=new AbortController,B=setTimeout(()=>{I.abort(),Nn(v,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:I.signal}).then(G=>{clearTimeout(B),G.ok?Nn(v,"TestPingServer: ok",!0,g):Nn(v,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(B),Nn(v,"TestPingServer: error",!1,g)})}function Nn(c,g,v,I,B){try{B&&(B.onload=null,B.onerror=null,B.onabort=null,B.ontimeout=null),I(v)}catch{}}function md(){this.g=new fe}function ju(c,g,v){const I=v||"";try{Hi(c,function(B,G){let ue=B;m(B)&&(ue=Q(B)),g.push(I+G+"="+encodeURIComponent(ue))})}catch(B){throw g.push(I+"type="+encodeURIComponent("_badmap")),B}}function fi(c){this.l=c.Ub||null,this.j=c.eb||!1}b(fi,Ce),fi.prototype.g=function(){return new qo(this.l,this.j)},fi.prototype.i=function(c){return function(){return c}}({});function qo(c,g){Tt.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(qo,Tt),n=qo.prototype,n.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,Tr(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||d).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Er(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Tr(this)),this.g&&(this.readyState=3,Tr(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Bu(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Bu(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?Er(this):Tr(this),this.readyState==3&&Bu(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,Er(this))},n.Qa=function(c){this.g&&(this.response=c,Er(this))},n.ga=function(){this.g&&Er(this)};function Er(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Tr(c)}n.setRequestHeader=function(c,g){this.u.append(c,g)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var v=g.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=g.next();return c.join(`\r
`)};function Tr(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(qo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function pi(c){let g="";return oe(c,function(v,I){g+=I,g+=":",g+=v,g+=`\r
`}),g}function Ji(c,g,v){e:{for(I in v){var I=!1;break e}I=!0}I||(v=pi(v),typeof c=="string"?v!=null&&encodeURIComponent(String(v)):mt(c,g,v))}function St(c){Tt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(St,Tt);var gd=/^https?$/i,Xa=["POST","PUT"];n=St.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,g,v,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Rn.g(),this.v=this.o?Re(this.o):Re(Rn),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(G){Wo(this,G);return}if(c=v||"",v=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var B in I)v.set(B,I[B]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const G of I.keys())v.set(G,I.get(G));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(v.keys()).find(G=>G.toLowerCase()=="content-type"),B=d.FormData&&c instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Xa,g,void 0))||I||B||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[G,ue]of v)this.g.setRequestHeader(G,ue);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ms(this),this.u=!0,this.g.send(c),this.u=!1}catch(G){Wo(this,G)}};function Wo(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,Ls(c),Kn(c)}function Ls(c){c.A||(c.A=!0,bt(c,"complete"),bt(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,bt(this,"complete"),bt(this,"abort"),Kn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Kn(this,!0)),St.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ja(this):this.bb())},n.bb=function(){Ja(this)};function Ja(c){if(c.h&&typeof u<"u"&&(!c.v[1]||Dn(c)!=4||c.Z()!=2)){if(c.u&&Dn(c)==4)Mo(c.Ea,0,c);else if(bt(c,"readystatechange"),Dn(c)==4){c.h=!1;try{const ue=c.Z();e:switch(ue){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var v;if(!(v=g)){var I;if(I=ue===0){var B=String(c.D).match(zo)[1]||null;!B&&d.self&&d.self.location&&(B=d.self.location.protocol.slice(0,-1)),I=!gd.test(B?B.toLowerCase():"")}v=I}if(v)bt(c,"complete"),bt(c,"success");else{c.m=6;try{var G=2<Dn(c)?c.g.statusText:""}catch{G=""}c.l=G+" ["+c.Z()+"]",Ls(c)}}finally{Kn(c)}}}}function Kn(c,g){if(c.g){Ms(c);const v=c.g,I=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||bt(c,"ready");try{v.onreadystatechange=I}catch{}}}function Ms(c){c.I&&(d.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function Dn(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<Dn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),te(g)}};function Za(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Vs(c){const g={};c=(c.g&&2<=Dn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<c.length;I++){if(j(c[I]))continue;var v=M(c[I]);const B=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const G=g[B]||[];g[B]=G,G.push(v)}R(g,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wr(c,g,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||g}function el(c){this.Aa=0,this.i=[],this.j=new on,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Wr("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Wr("baseRetryDelayMs",5e3,c),this.cb=Wr("retryDelaySeedMs",1e4,c),this.Wa=Wr("forwardChannelMaxRetries",2,c),this.wa=Wr("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Bo(c&&c.concurrentRequestLimit),this.Da=new md,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=el.prototype,n.la=8,n.G=1,n.connect=function(c,g,v,I){ft(0),this.W=c,this.H=g||{},v&&I!==void 0&&(this.H.OSID=v,this.H.OAID=I),this.F=this.X,this.I=Wu(this,null,this.W),Hr(this)};function ln(c){if(Us(c),c.G==3){var g=c.U++,v=Hn(c.I);if(mt(v,"SID",c.K),mt(v,"RID",g),mt(v,"TYPE","terminate"),mi(c,v),g=new sn(c,c.j,g),g.L=2,g.v=Qi(Hn(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(g.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=g.v,v=!0),v||(g.g=Hu(g.j,null),g.g.ea(g.v)),g.F=Date.now(),gt(g)}qu(c)}function Ir(c){c.g&&(tl(c),c.g.cancel(),c.g=null)}function Us(c){Ir(c),c.u&&(d.clearTimeout(c.u),c.u=null),Bs(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&d.clearTimeout(c.s),c.s=null)}function Hr(c){if(!Wn(c.h)&&!c.s){c.s=!0;var g=c.Ga;Ne||ce(),se||(Ne(),se=!0),me.add(g,c),c.B=0}}function yd(c,g){return Nu(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Lt(T(c.Ga,c,g),$u(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const B=new sn(this,this.j,c);let G=this.o;if(this.S&&(G?(G=S(G),D(G,this.S)):G=this.S),this.m!==null||this.O||(B.H=G,G=null),this.P)e:{for(var g=0,v=0;v<this.i.length;v++){t:{var I=this.i[v];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(g+=I,4096<g){g=v;break e}if(g===4096||v===this.i.length-1){g=v+1;break e}}g=1e3}else g=1e3;g=Zi(this,B,g),v=Hn(this.I),mt(v,"RID",c),mt(v,"CVER",22),this.D&&mt(v,"X-HTTP-Session-Id",this.D),mi(this,v),G&&(this.O?g="headers="+encodeURIComponent(String(pi(G)))+"&"+g:this.m&&Ji(v,this.m,G)),Qa(this.h,B),this.Ua&&mt(v,"TYPE","init"),this.P?(mt(v,"$req",g),mt(v,"SID","null"),B.T=!0,bs(B,v,null)):bs(B,v,g),this.G=2}}else this.G==3&&(c?Fs(this,c):this.i.length==0||Wn(this.h)||Fs(this))};function Fs(c,g){var v;g?v=g.l:v=c.U++;const I=Hn(c.I);mt(I,"SID",c.K),mt(I,"RID",v),mt(I,"AID",c.T),mi(c,I),c.m&&c.o&&Ji(I,c.m,c.o),v=new sn(c,c.j,v,c.B+1),c.m===null&&(v.H=c.o),g&&(c.i=g.D.concat(c.i)),g=Zi(c,v,1e3),v.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Qa(c.h,v),bs(v,I,g)}function mi(c,g){c.H&&oe(c.H,function(v,I){mt(g,I,v)}),c.l&&Hi({},function(v,I){mt(g,I,v)})}function Zi(c,g,v){v=Math.min(c.i.length,v);var I=c.l?T(c.l.Na,c.l,c):null;e:{var B=c.i;let G=-1;for(;;){const ue=["count="+v];G==-1?0<v?(G=B[0].g,ue.push("ofs="+G)):G=0:ue.push("ofs="+G);let lt=!0;for(let $t=0;$t<v;$t++){let Qe=B[$t].g;const Xt=B[$t].map;if(Qe-=G,0>Qe)G=Math.max(0,B[$t].g-100),lt=!1;else try{ju(Xt,ue,"req"+Qe+"_")}catch{I&&I(Xt)}}if(lt){I=ue.join("&");break e}}}return c=c.i.splice(0,v),g.D=c,I}function Ho(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;Ne||ce(),se||(Ne(),se=!0),me.add(g,c),c.v=0}}function js(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Lt(T(c.Fa,c),$u(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,zu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Lt(T(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ft(10),Ir(this),zu(this))};function tl(c){c.A!=null&&(d.clearTimeout(c.A),c.A=null)}function zu(c){c.g=new sn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=Hn(c.qa);mt(g,"RID","rpc"),mt(g,"SID",c.K),mt(g,"AID",c.T),mt(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&mt(g,"TO",c.ja),mt(g,"TYPE","xmlhttp"),mi(c,g),c.m&&c.o&&Ji(g,c.m,c.o),c.L&&(c.g.I=c.L);var v=c.g;c=c.ia,v.L=1,v.v=Qi(Hn(g)),v.m=null,v.P=!0,Ka(v,c)}n.Za=function(){this.C!=null&&(this.C=null,Ir(this),js(this),ft(19))};function Bs(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function zs(c,g){var v=null;if(c.g==g){Bs(c),tl(c),c.g=null;var I=2}else if(An(c.h,g))v=g.D,Du(c.h,g),I=1;else return;if(c.G!=0){if(g.o)if(I==1){v=g.m?g.m.length:0,g=Date.now()-g.F;var B=c.B;I=at(),bt(I,new Br(I,v)),Hr(c)}else Ho(c);else if(B=g.s,B==3||B==0&&0<g.X||!(I==1&&yd(c,g)||I==2&&js(c)))switch(v&&0<v.length&&(g=c.h,g.i=g.i.concat(v)),B){case 1:gi(c,5);break;case 4:gi(c,10);break;case 3:gi(c,6);break;default:gi(c,2)}}}function $u(c,g){let v=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(v*=2),v*g}function gi(c,g){if(c.j.info("Error code "+g),g==2){var v=T(c.fb,c),I=c.Xa;const B=!I;I=new di(I||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||$o(I,"https"),Qi(I),B?pd(I.toString(),v):Fu(I.toString(),v)}else ft(2);c.G=0,c.l&&c.l.sa(g),qu(c),Us(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function qu(c){if(c.G=0,c.ka=[],c.l){const g=Ou(c.h);(g.length!=0||c.i.length!=0)&&(N(c.ka,g),N(c.ka,c.i),c.h.i.length=0,L(c.i),c.i.length=0),c.l.ra()}}function Wu(c,g,v){var I=v instanceof di?Hn(v):new di(v);if(I.g!="")g&&(I.g=g+"."+I.g),Ki(I,I.s);else{var B=d.location;I=B.protocol,g=g?g+"."+B.hostname:B.hostname,B=+B.port;var G=new di(null);I&&$o(G,I),g&&(G.g=g),B&&Ki(G,B),v&&(G.l=v),I=G}return v=c.D,g=c.ya,v&&g&&mt(I,v,g),mt(I,"VER",c.la),mi(c,I),I}function Hu(c,g,v){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new St(new fi({eb:v})):new St(c.pa),g.Ha(c.J),g}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function nl(){}n=nl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function $s(){}$s.prototype.g=function(c,g){return new kn(c,g)};function kn(c,g){Tt.call(this),this.g=new el(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!j(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!j(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new Kr(this)}b(kn,Tt),kn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},kn.prototype.close=function(){ln(this.g)},kn.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.u&&(v={},v.__data__=Q(c),c=v);g.i.push(new bu(g.Ya++,c)),g.G==3&&Hr(g)},kn.prototype.N=function(){this.g.l=null,delete this.j,ln(this.g),delete this.g,kn.aa.N.call(this)};function Ku(c){pe.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const v in g){c=v;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}b(Ku,pe);function Gu(){Ze.call(this),this.status=1}b(Gu,Ze);function Kr(c){this.g=c}b(Kr,nl),Kr.prototype.ua=function(){bt(this.g,"a")},Kr.prototype.ta=function(c){bt(this.g,new Ku(c))},Kr.prototype.sa=function(c){bt(this.g,new Gu)},Kr.prototype.ra=function(){bt(this.g,"b")},$s.prototype.createWebChannel=$s.prototype.g,kn.prototype.send=kn.prototype.o,kn.prototype.open=kn.prototype.m,kn.prototype.close=kn.prototype.close,EE=function(){return new $s},wE=function(){return at()},vE=dt,Op={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Yt.NO_ERROR=0,Yt.TIMEOUT=8,Yt.HTTP_ERROR=6,sh=Yt,qn.COMPLETE="complete",_E=qn,Pe.EventType=we,we.OPEN="a",we.CLOSE="b",we.ERROR="c",we.MESSAGE="d",Tt.prototype.listen=Tt.prototype.K,Ml=Pe,St.prototype.listenOnce=St.prototype.L,St.prototype.getLastError=St.prototype.Ka,St.prototype.getLastErrorCode=St.prototype.Ba,St.prototype.getStatus=St.prototype.Z,St.prototype.getResponseJson=St.prototype.Oa,St.prototype.getResponseText=St.prototype.oa,St.prototype.send=St.prototype.ea,St.prototype.setWithCredentials=St.prototype.Ha,yE=St}).apply(typeof Wc<"u"?Wc:typeof self<"u"?self:typeof window<"u"?window:{});const Hv="@firebase/firestore";/**
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
 */class wn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}wn.UNAUTHENTICATED=new wn(null),wn.GOOGLE_CREDENTIALS=new wn("google-credentials-uid"),wn.FIRST_PARTY=new wn("first-party-uid"),wn.MOCK_USER=new wn("mock-user");/**
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
 */let qa="10.14.0";/**
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
 */const ws=new pm("@firebase/firestore");function bl(){return ws.logLevel}function Te(n,...e){if(ws.logLevel<=Ke.DEBUG){const t=e.map(km);ws.debug(`Firestore (${qa}): ${n}`,...t)}}function Li(n,...e){if(ws.logLevel<=Ke.ERROR){const t=e.map(km);ws.error(`Firestore (${qa}): ${n}`,...t)}}function ba(n,...e){if(ws.logLevel<=Ke.WARN){const t=e.map(km);ws.warn(`Firestore (${qa}): ${n}`,...t)}}function km(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function Le(n="Unexpected state"){const e=`FIRESTORE (${qa}) INTERNAL ASSERTION FAILED: `+n;throw Li(e),new Error(e)}function ut(n,e){n||Le()}function Ue(n,e){return n}/**
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
 */const J={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends yr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ro{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class TE{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class GP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(wn.UNAUTHENTICATED))}shutdown(){}}class QP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class YP{constructor(e){this.t=e,this.currentUser=wn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ut(this.o===void 0);let i=this.i;const s=f=>this.i!==i?(i=this.i,t(f)):Promise.resolve();let a=new Ro;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Ro,e.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const f=a;e.enqueueRetryable(async()=>{await f.promise,await s(this.currentUser)})},d=f=>{Te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(f=>d(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?d(f):(Te("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Ro)}},0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(Te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ut(typeof i.accessToken=="string"),new TE(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ut(e===null||typeof e=="string"),new wn(e)}}class XP{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=wn.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class JP{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new XP(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(wn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ZP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ex{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){ut(this.o===void 0);const i=a=>{a.error!=null&&Te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.R;return this.R=a.token,Te("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>i(a))};const s=a=>{Te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(a=>s(a)),setTimeout(()=>{if(!this.appCheck){const a=this.A.getImmediate({optional:!0});a?s(a):Te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ut(typeof t.token=="string"),this.R=t.token,new ZP(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function tx(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class IE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=tx(40);for(let a=0;a<s.length;++a)i.length<20&&s[a]<t&&(i+=e.charAt(s[a]%e.length))}return i}}function rt(n,e){return n<e?-1:n>e?1:0}function Na(n,e,t){return n.length===e.length&&n.every((i,s)=>t(i,e[s]))}/**
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
 */class Gt{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new he(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new he(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new he(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Gt.fromMillis(Date.now())}static fromDate(e){return Gt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new Gt(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?rt(this.nanoseconds,e.nanoseconds):rt(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ve{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ve(e)}static min(){return new Ve(new Gt(0,0))}static max(){return new Ve(new Gt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class tu{constructor(e,t,i){t===void 0?t=0:t>e.length&&Le(),i===void 0?i=e.length-t:i>e.length-t&&Le(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return tu.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof tu?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const a=e.get(s),u=t.get(s);if(a<u)return-1;if(a>u)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class _t extends tu{construct(e,t,i){return new _t(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new he(J.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(s=>s.length>0))}return new _t(t)}static emptyPath(){return new _t([])}}const nx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dn extends tu{construct(e,t,i){return new dn(e,t,i)}static isValidIdentifier(e){return nx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new dn(["__name__"])}static fromServerFormat(e){const t=[];let i="",s=0;const a=()=>{if(i.length===0)throw new he(J.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let u=!1;for(;s<e.length;){const d=e[s];if(d==="\\"){if(s+1===e.length)throw new he(J.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new he(J.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=f,s+=2}else d==="`"?(u=!u,s++):d!=="."||u?(i+=d,s++):(a(),s++)}if(a(),u)throw new he(J.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new dn(t)}static emptyPath(){return new dn([])}}/**
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
 */class Se{constructor(e){this.path=e}static fromPath(e){return new Se(_t.fromString(e))}static fromName(e){return new Se(_t.fromString(e).popFirst(5))}static empty(){return new Se(_t.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&_t.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return _t.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Se(new _t(e.slice()))}}function rx(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=Ve.fromTimestamp(i===1e9?new Gt(t+1,0):new Gt(t,i));return new Co(s,Se.empty(),e)}function ix(n){return new Co(n.readTime,n.key,-1)}class Co{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Co(Ve.min(),Se.empty(),-1)}static max(){return new Co(Ve.max(),Se.empty(),-1)}}function ox(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Se.comparator(n.documentKey,e.documentKey),t!==0?t:rt(n.largestBatchId,e.largestBatchId))}/**
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
 */const sx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ax{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function vu(n){if(n.code!==J.FAILED_PRECONDITION||n.message!==sx)throw n;Te("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ie{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Le(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ie((i,s)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(i,s)},this.catchCallback=a=>{this.wrapFailure(t,a).next(i,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof ie?t:ie.resolve(t)}catch(t){return ie.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):ie.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):ie.reject(t)}static resolve(e){return new ie((t,i)=>{t(e)})}static reject(e){return new ie((t,i)=>{i(e)})}static waitFor(e){return new ie((t,i)=>{let s=0,a=0,u=!1;e.forEach(d=>{++s,d.next(()=>{++a,u&&a===s&&t()},f=>i(f))}),u=!0,a===s&&t()})}static or(e){let t=ie.resolve(!1);for(const i of e)t=t.next(s=>s?ie.resolve(s):i());return t}static forEach(e,t){const i=[];return e.forEach((s,a)=>{i.push(t.call(this,s,a))}),this.waitFor(i)}static mapArray(e,t){return new ie((i,s)=>{const a=e.length,u=new Array(a);let d=0;for(let f=0;f<a;f++){const m=f;t(e[m]).next(_=>{u[m]=_,++d,d===a&&i(u)},_=>s(_))}})}static doWhile(e,t){return new ie((i,s)=>{const a=()=>{e()===!0?t().next(()=>{a()},s):i()};a()})}}function lx(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function wu(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Cm{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Cm.oe=-1;function qh(n){return n==null}function Ih(n){return n===0&&1/n==-1/0}function ux(n){return typeof n=="number"&&Number.isInteger(n)&&!Ih(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Kv(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Cs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function SE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class xt{constructor(e,t){this.comparator=e,this.root=t||hn.EMPTY}insert(e,t){return new xt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,hn.BLACK,null,null))}remove(e){return new xt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,hn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Hc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Hc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Hc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Hc(this.root,e,this.comparator,!0)}}class Hc{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?i(e.key,t):1,t&&s&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class hn{constructor(e,t,i,s,a){this.key=e,this.value=t,this.color=i??hn.RED,this.left=s??hn.EMPTY,this.right=a??hn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,a){return new hn(e??this.key,t??this.value,i??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const a=i(e,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(e,t,i),null):a===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return hn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return hn.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,hn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,hn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Le();const e=this.left.check();if(e!==this.right.check())throw Le();return e+(this.isRed()?0:1)}}hn.EMPTY=null,hn.RED=!0,hn.BLACK=!1;hn.EMPTY=new class{constructor(){this.size=0}get key(){throw Le()}get value(){throw Le()}get color(){throw Le()}get left(){throw Le()}get right(){throw Le()}copy(e,t,i,s,a){return this}insert(e,t,i){return new hn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class fn{constructor(e){this.comparator=e,this.data=new xt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Gv(this.data.getIterator())}getIteratorFrom(e){return new Gv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof fn)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=i.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new fn(this.comparator);return t.data=e,t}}class Gv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Zn{constructor(e){this.fields=e,e.sort(dn.comparator)}static empty(){return new Zn([])}unionWith(e){let t=new fn(dn.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new Zn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Na(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
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
 */class RE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class pn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new RE("Invalid base64 string: "+a):a}}(e);return new pn(t)}static fromUint8Array(e){const t=function(s){let a="";for(let u=0;u<s.length;++u)a+=String.fromCharCode(s[u]);return a}(e);return new pn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return rt(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pn.EMPTY_BYTE_STRING=new pn("");const cx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Po(n){if(ut(!!n),typeof n=="string"){let e=0;const t=cx.exec(n);if(ut(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Vt(n.seconds),nanos:Vt(n.nanos)}}function Vt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Es(n){return typeof n=="string"?pn.fromBase64String(n):pn.fromUint8Array(n)}/**
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
 */function Wh(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Pm(n){const e=n.mapValue.fields.__previous_value__;return Wh(e)?Pm(e):e}function nu(n){const e=Po(n.mapValue.fields.__local_write_time__.timestampValue);return new Gt(e.seconds,e.nanos)}/**
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
 */class hx{constructor(e,t,i,s,a,u,d,f,m){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=f,this.useFetchStreams=m}}class ru{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ru("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ru&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Kc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ts(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Wh(n)?4:fx(n)?9007199254740991:dx(n)?10:11:Le()}function ii(n,e){if(n===e)return!0;const t=Ts(n);if(t!==Ts(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return nu(n).isEqual(nu(e));case 3:return function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const u=Po(s.timestampValue),d=Po(a.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,a){return Es(s.bytesValue).isEqual(Es(a.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,a){return Vt(s.geoPointValue.latitude)===Vt(a.geoPointValue.latitude)&&Vt(s.geoPointValue.longitude)===Vt(a.geoPointValue.longitude)}(n,e);case 2:return function(s,a){if("integerValue"in s&&"integerValue"in a)return Vt(s.integerValue)===Vt(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const u=Vt(s.doubleValue),d=Vt(a.doubleValue);return u===d?Ih(u)===Ih(d):isNaN(u)&&isNaN(d)}return!1}(n,e);case 9:return Na(n.arrayValue.values||[],e.arrayValue.values||[],ii);case 10:case 11:return function(s,a){const u=s.mapValue.fields||{},d=a.mapValue.fields||{};if(Kv(u)!==Kv(d))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(d[f]===void 0||!ii(u[f],d[f])))return!1;return!0}(n,e);default:return Le()}}function iu(n,e){return(n.values||[]).find(t=>ii(t,e))!==void 0}function Da(n,e){if(n===e)return 0;const t=Ts(n),i=Ts(e);if(t!==i)return rt(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return rt(n.booleanValue,e.booleanValue);case 2:return function(a,u){const d=Vt(a.integerValue||a.doubleValue),f=Vt(u.integerValue||u.doubleValue);return d<f?-1:d>f?1:d===f?0:isNaN(d)?isNaN(f)?0:-1:1}(n,e);case 3:return Qv(n.timestampValue,e.timestampValue);case 4:return Qv(nu(n),nu(e));case 5:return rt(n.stringValue,e.stringValue);case 6:return function(a,u){const d=Es(a),f=Es(u);return d.compareTo(f)}(n.bytesValue,e.bytesValue);case 7:return function(a,u){const d=a.split("/"),f=u.split("/");for(let m=0;m<d.length&&m<f.length;m++){const _=rt(d[m],f[m]);if(_!==0)return _}return rt(d.length,f.length)}(n.referenceValue,e.referenceValue);case 8:return function(a,u){const d=rt(Vt(a.latitude),Vt(u.latitude));return d!==0?d:rt(Vt(a.longitude),Vt(u.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Yv(n.arrayValue,e.arrayValue);case 10:return function(a,u){var d,f,m,_;const E=a.fields||{},T=u.fields||{},A=(d=E.value)===null||d===void 0?void 0:d.arrayValue,b=(f=T.value)===null||f===void 0?void 0:f.arrayValue,L=rt(((m=A==null?void 0:A.values)===null||m===void 0?void 0:m.length)||0,((_=b==null?void 0:b.values)===null||_===void 0?void 0:_.length)||0);return L!==0?L:Yv(A,b)}(n.mapValue,e.mapValue);case 11:return function(a,u){if(a===Kc.mapValue&&u===Kc.mapValue)return 0;if(a===Kc.mapValue)return 1;if(u===Kc.mapValue)return-1;const d=a.fields||{},f=Object.keys(d),m=u.fields||{},_=Object.keys(m);f.sort(),_.sort();for(let E=0;E<f.length&&E<_.length;++E){const T=rt(f[E],_[E]);if(T!==0)return T;const A=Da(d[f[E]],m[_[E]]);if(A!==0)return A}return rt(f.length,_.length)}(n.mapValue,e.mapValue);default:throw Le()}}function Qv(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return rt(n,e);const t=Po(n),i=Po(e),s=rt(t.seconds,i.seconds);return s!==0?s:rt(t.nanos,i.nanos)}function Yv(n,e){const t=n.values||[],i=e.values||[];for(let s=0;s<t.length&&s<i.length;++s){const a=Da(t[s],i[s]);if(a)return a}return rt(t.length,i.length)}function Oa(n){return Lp(n)}function Lp(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Po(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Es(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Se.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",s=!0;for(const a of t.values||[])s?s=!1:i+=",",i+=Lp(a);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let s="{",a=!0;for(const u of i)a?a=!1:s+=",",s+=`${u}:${Lp(t.fields[u])}`;return s+"}"}(n.mapValue):Le()}function Sh(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Mp(n){return!!n&&"integerValue"in n}function xm(n){return!!n&&"arrayValue"in n}function Xv(n){return!!n&&"nullValue"in n}function Jv(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ah(n){return!!n&&"mapValue"in n}function dx(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function $l(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Cs(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=$l(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=$l(n.arrayValue.values[t]);return e}return Object.assign({},n)}function fx(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class jn{constructor(e){this.value=e}static empty(){return new jn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!ah(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=$l(t)}setAll(e){let t=dn.emptyPath(),i={},s=[];e.forEach((u,d)=>{if(!t.isImmediateParentOf(d)){const f=this.getFieldsMap(t);this.applyChanges(f,i,s),i={},s=[],t=d.popLast()}u?i[d.lastSegment()]=$l(u):s.push(d.lastSegment())});const a=this.getFieldsMap(t);this.applyChanges(a,i,s)}delete(e){const t=this.field(e.popLast());ah(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ii(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];ah(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){Cs(t,(s,a)=>e[s]=a);for(const s of i)delete e[s]}clone(){return new jn($l(this.value))}}function AE(n){const e=[];return Cs(n.fields,(t,i)=>{const s=new dn([t]);if(ah(i)){const a=AE(i.mapValue).fields;if(a.length===0)e.push(s);else for(const u of a)e.push(s.child(u))}else e.push(s)}),new Zn(e)}/**
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
 */class En{constructor(e,t,i,s,a,u,d){this.key=e,this.documentType=t,this.version=i,this.readTime=s,this.createTime=a,this.data=u,this.documentState=d}static newInvalidDocument(e){return new En(e,0,Ve.min(),Ve.min(),Ve.min(),jn.empty(),0)}static newFoundDocument(e,t,i,s){return new En(e,1,t,Ve.min(),i,s,0)}static newNoDocument(e,t){return new En(e,2,t,Ve.min(),Ve.min(),jn.empty(),0)}static newUnknownDocument(e,t){return new En(e,3,t,Ve.min(),Ve.min(),jn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=jn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=jn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof En&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new En(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class La{constructor(e,t){this.position=e,this.inclusive=t}}function Zv(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const a=e[s],u=n.position[s];if(a.field.isKeyField()?i=Se.comparator(Se.fromName(u.referenceValue),t.key):i=Da(u,t.data.field(a.field)),a.dir==="desc"&&(i*=-1),i!==0)break}return i}function e0(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ii(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ou{constructor(e,t="asc"){this.field=e,this.dir=t}}function px(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class kE{}class zt extends kE{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new gx(e,t,i):t==="array-contains"?new vx(e,i):t==="in"?new wx(e,i):t==="not-in"?new Ex(e,i):t==="array-contains-any"?new Tx(e,i):new zt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new yx(e,i):new _x(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Da(t,this.value)):t!==null&&Ts(this.value)===Ts(t)&&this.matchesComparison(Da(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Le()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mr extends kE{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Mr(e,t)}matches(e){return CE(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function CE(n){return n.op==="and"}function PE(n){return mx(n)&&CE(n)}function mx(n){for(const e of n.filters)if(e instanceof Mr)return!1;return!0}function Vp(n){if(n instanceof zt)return n.field.canonicalString()+n.op.toString()+Oa(n.value);if(PE(n))return n.filters.map(e=>Vp(e)).join(",");{const e=n.filters.map(t=>Vp(t)).join(",");return`${n.op}(${e})`}}function xE(n,e){return n instanceof zt?function(i,s){return s instanceof zt&&i.op===s.op&&i.field.isEqual(s.field)&&ii(i.value,s.value)}(n,e):n instanceof Mr?function(i,s){return s instanceof Mr&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((a,u,d)=>a&&xE(u,s.filters[d]),!0):!1}(n,e):void Le()}function bE(n){return n instanceof zt?function(t){return`${t.field.canonicalString()} ${t.op} ${Oa(t.value)}`}(n):n instanceof Mr?function(t){return t.op.toString()+" {"+t.getFilters().map(bE).join(" ,")+"}"}(n):"Filter"}class gx extends zt{constructor(e,t,i){super(e,t,i),this.key=Se.fromName(i.referenceValue)}matches(e){const t=Se.comparator(e.key,this.key);return this.matchesComparison(t)}}class yx extends zt{constructor(e,t){super(e,"in",t),this.keys=NE("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class _x extends zt{constructor(e,t){super(e,"not-in",t),this.keys=NE("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function NE(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>Se.fromName(i.referenceValue))}class vx extends zt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return xm(t)&&iu(t.arrayValue,this.value)}}class wx extends zt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&iu(this.value.arrayValue,t)}}class Ex extends zt{constructor(e,t){super(e,"not-in",t)}matches(e){if(iu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!iu(this.value.arrayValue,t)}}class Tx extends zt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!xm(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>iu(this.value.arrayValue,i))}}/**
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
 */class Ix{constructor(e,t=null,i=[],s=[],a=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=a,this.startAt=u,this.endAt=d,this.ue=null}}function t0(n,e=null,t=[],i=[],s=null,a=null,u=null){return new Ix(n,e,t,i,s,a,u)}function bm(n){const e=Ue(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>Vp(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(a){return a.field.canonicalString()+a.dir}(i)).join(","),qh(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Oa(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Oa(i)).join(",")),e.ue=t}return e.ue}function Nm(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!px(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!xE(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!e0(n.startAt,e.startAt)&&e0(n.endAt,e.endAt)}function Up(n){return Se.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Oo{constructor(e,t=null,i=[],s=[],a=null,u="F",d=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=a,this.limitType=u,this.startAt=d,this.endAt=f,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Sx(n,e,t,i,s,a,u,d){return new Oo(n,e,t,i,s,a,u,d)}function Dm(n){return new Oo(n)}function n0(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Om(n){return n.collectionGroup!==null}function Ia(n){const e=Ue(n);if(e.ce===null){e.ce=[];const t=new Set;for(const a of e.explicitOrderBy)e.ce.push(a),t.add(a.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new fn(dn.comparator);return u.filters.forEach(f=>{f.getFlattenedFilters().forEach(m=>{m.isInequality()&&(d=d.add(m.field))})}),d})(e).forEach(a=>{t.has(a.canonicalString())||a.isKeyField()||e.ce.push(new ou(a,i))}),t.has(dn.keyField().canonicalString())||e.ce.push(new ou(dn.keyField(),i))}return e.ce}function ti(n){const e=Ue(n);return e.le||(e.le=Rx(e,Ia(n))),e.le}function Rx(n,e){if(n.limitType==="F")return t0(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const a=s.dir==="desc"?"asc":"desc";return new ou(s.field,a)});const t=n.endAt?new La(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new La(n.startAt.position,n.startAt.inclusive):null;return t0(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Fp(n,e){const t=n.filters.concat([e]);return new Oo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Rh(n,e,t){return new Oo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Hh(n,e){return Nm(ti(n),ti(e))&&n.limitType===e.limitType}function DE(n){return`${bm(ti(n))}|lt:${n.limitType}`}function fa(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(s=>bE(s)).join(", ")}]`),qh(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(s=>Oa(s)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(s=>Oa(s)).join(",")),`Target(${i})`}(ti(n))}; limitType=${n.limitType})`}function Kh(n,e){return e.isFoundDocument()&&function(i,s){const a=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(a):Se.isDocumentKey(i.path)?i.path.isEqual(a):i.path.isImmediateParentOf(a)}(n,e)&&function(i,s){for(const a of Ia(i))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0}(n,e)&&function(i,s){for(const a of i.filters)if(!a.matches(s))return!1;return!0}(n,e)&&function(i,s){return!(i.startAt&&!function(u,d,f){const m=Zv(u,d,f);return u.inclusive?m<=0:m<0}(i.startAt,Ia(i),s)||i.endAt&&!function(u,d,f){const m=Zv(u,d,f);return u.inclusive?m>=0:m>0}(i.endAt,Ia(i),s))}(n,e)}function Ax(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function OE(n){return(e,t)=>{let i=!1;for(const s of Ia(n)){const a=kx(s,e,t);if(a!==0)return a;i=i||s.field.isKeyField()}return 0}}function kx(n,e,t){const i=n.field.isKeyField()?Se.comparator(e.key,t.key):function(a,u,d){const f=u.data.field(a),m=d.data.field(a);return f!==null&&m!==null?Da(f,m):Le()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Le()}}/**
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
 */class Wa{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,a]of i)if(this.equalsFn(s,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return void(s[a]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Cs(this.inner,(t,i)=>{for(const[s,a]of i)e(s,a)})}isEmpty(){return SE(this.inner)}size(){return this.innerSize}}/**
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
 */const Cx=new xt(Se.comparator);function Mi(){return Cx}const LE=new xt(Se.comparator);function Vl(...n){let e=LE;for(const t of n)e=e.insert(t.key,t);return e}function ME(n){let e=LE;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function cs(){return ql()}function VE(){return ql()}function ql(){return new Wa(n=>n.toString(),(n,e)=>n.isEqual(e))}const Px=new xt(Se.comparator),xx=new fn(Se.comparator);function qe(...n){let e=xx;for(const t of n)e=e.add(t);return e}const bx=new fn(rt);function Nx(){return bx}/**
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
 */function Lm(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ih(e)?"-0":e}}function UE(n){return{integerValue:""+n}}function Dx(n,e){return ux(e)?UE(e):Lm(n,e)}/**
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
 */class Gh{constructor(){this._=void 0}}function Ox(n,e,t){return n instanceof Ah?function(s,a){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&Wh(a)&&(a=Pm(a)),a&&(u.fields.__previous_value__=a),{mapValue:u}}(t,e):n instanceof su?jE(n,e):n instanceof au?BE(n,e):function(s,a){const u=FE(s,a),d=r0(u)+r0(s.Pe);return Mp(u)&&Mp(s.Pe)?UE(d):Lm(s.serializer,d)}(n,e)}function Lx(n,e,t){return n instanceof su?jE(n,e):n instanceof au?BE(n,e):t}function FE(n,e){return n instanceof kh?function(i){return Mp(i)||function(a){return!!a&&"doubleValue"in a}(i)}(e)?e:{integerValue:0}:null}class Ah extends Gh{}class su extends Gh{constructor(e){super(),this.elements=e}}function jE(n,e){const t=zE(e);for(const i of n.elements)t.some(s=>ii(s,i))||t.push(i);return{arrayValue:{values:t}}}class au extends Gh{constructor(e){super(),this.elements=e}}function BE(n,e){let t=zE(e);for(const i of n.elements)t=t.filter(s=>!ii(s,i));return{arrayValue:{values:t}}}class kh extends Gh{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function r0(n){return Vt(n.integerValue||n.doubleValue)}function zE(n){return xm(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Mx(n,e){return n.field.isEqual(e.field)&&function(i,s){return i instanceof su&&s instanceof su||i instanceof au&&s instanceof au?Na(i.elements,s.elements,ii):i instanceof kh&&s instanceof kh?ii(i.Pe,s.Pe):i instanceof Ah&&s instanceof Ah}(n.transform,e.transform)}class Vx{constructor(e,t){this.version=e,this.transformResults=t}}class Lr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Lr}static exists(e){return new Lr(void 0,e)}static updateTime(e){return new Lr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function lh(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Qh{}function $E(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Mm(n.key,Lr.none()):new Eu(n.key,n.data,Lr.none());{const t=n.data,i=jn.empty();let s=new fn(dn.comparator);for(let a of e.fields)if(!s.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?i.delete(a):i.set(a,u),s=s.add(a)}return new Lo(n.key,i,new Zn(s.toArray()),Lr.none())}}function Ux(n,e,t){n instanceof Eu?function(s,a,u){const d=s.value.clone(),f=o0(s.fieldTransforms,a,u.transformResults);d.setAll(f),a.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(n,e,t):n instanceof Lo?function(s,a,u){if(!lh(s.precondition,a))return void a.convertToUnknownDocument(u.version);const d=o0(s.fieldTransforms,a,u.transformResults),f=a.data;f.setAll(qE(s)),f.setAll(d),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()}(n,e,t):function(s,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()}(0,e,t)}function Wl(n,e,t,i){return n instanceof Eu?function(a,u,d,f){if(!lh(a.precondition,u))return d;const m=a.value.clone(),_=s0(a.fieldTransforms,f,u);return m.setAll(_),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),null}(n,e,t,i):n instanceof Lo?function(a,u,d,f){if(!lh(a.precondition,u))return d;const m=s0(a.fieldTransforms,f,u),_=u.data;return _.setAll(qE(a)),_.setAll(m),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(E=>E.field))}(n,e,t,i):function(a,u,d){return lh(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d}(n,e,t)}function Fx(n,e){let t=null;for(const i of n.fieldTransforms){const s=e.data.field(i.field),a=FE(i.transform,s||null);a!=null&&(t===null&&(t=jn.empty()),t.set(i.field,a))}return t||null}function i0(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&Na(i,s,(a,u)=>Mx(a,u))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Eu extends Qh{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Lo extends Qh{constructor(e,t,i,s,a=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function qE(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function o0(n,e,t){const i=new Map;ut(n.length===t.length);for(let s=0;s<t.length;s++){const a=n[s],u=a.transform,d=e.data.field(a.field);i.set(a.field,Lx(u,d,t[s]))}return i}function s0(n,e,t){const i=new Map;for(const s of n){const a=s.transform,u=t.data.field(s.field);i.set(s.field,Ox(a,u,e))}return i}class Mm extends Qh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jx extends Qh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Bx{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(e.key)&&Ux(a,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Wl(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Wl(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=VE();return this.mutations.forEach(s=>{const a=e.get(s.key),u=a.overlayedDocument;let d=this.applyToLocalView(u,a.mutatedFields);d=t.has(s.key)?null:d;const f=$E(u,d);f!==null&&i.set(s.key,f),u.isValidDocument()||u.convertToNoDocument(Ve.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),qe())}isEqual(e){return this.batchId===e.batchId&&Na(this.mutations,e.mutations,(t,i)=>i0(t,i))&&Na(this.baseMutations,e.baseMutations,(t,i)=>i0(t,i))}}class Vm{constructor(e,t,i,s){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=s}static from(e,t,i){ut(e.mutations.length===i.length);let s=function(){return Px}();const a=e.mutations;for(let u=0;u<a.length;u++)s=s.insert(a[u].key,i[u].version);return new Vm(e,t,i,s)}}/**
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
 */class zx{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class $x{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var jt,Ye;function qx(n){switch(n){default:return Le();case J.CANCELLED:case J.UNKNOWN:case J.DEADLINE_EXCEEDED:case J.RESOURCE_EXHAUSTED:case J.INTERNAL:case J.UNAVAILABLE:case J.UNAUTHENTICATED:return!1;case J.INVALID_ARGUMENT:case J.NOT_FOUND:case J.ALREADY_EXISTS:case J.PERMISSION_DENIED:case J.FAILED_PRECONDITION:case J.ABORTED:case J.OUT_OF_RANGE:case J.UNIMPLEMENTED:case J.DATA_LOSS:return!0}}function WE(n){if(n===void 0)return Li("GRPC error has no .code"),J.UNKNOWN;switch(n){case jt.OK:return J.OK;case jt.CANCELLED:return J.CANCELLED;case jt.UNKNOWN:return J.UNKNOWN;case jt.DEADLINE_EXCEEDED:return J.DEADLINE_EXCEEDED;case jt.RESOURCE_EXHAUSTED:return J.RESOURCE_EXHAUSTED;case jt.INTERNAL:return J.INTERNAL;case jt.UNAVAILABLE:return J.UNAVAILABLE;case jt.UNAUTHENTICATED:return J.UNAUTHENTICATED;case jt.INVALID_ARGUMENT:return J.INVALID_ARGUMENT;case jt.NOT_FOUND:return J.NOT_FOUND;case jt.ALREADY_EXISTS:return J.ALREADY_EXISTS;case jt.PERMISSION_DENIED:return J.PERMISSION_DENIED;case jt.FAILED_PRECONDITION:return J.FAILED_PRECONDITION;case jt.ABORTED:return J.ABORTED;case jt.OUT_OF_RANGE:return J.OUT_OF_RANGE;case jt.UNIMPLEMENTED:return J.UNIMPLEMENTED;case jt.DATA_LOSS:return J.DATA_LOSS;default:return Le()}}(Ye=jt||(jt={}))[Ye.OK=0]="OK",Ye[Ye.CANCELLED=1]="CANCELLED",Ye[Ye.UNKNOWN=2]="UNKNOWN",Ye[Ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ye[Ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ye[Ye.NOT_FOUND=5]="NOT_FOUND",Ye[Ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ye[Ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ye[Ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ye[Ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ye[Ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ye[Ye.ABORTED=10]="ABORTED",Ye[Ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ye[Ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ye[Ye.INTERNAL=13]="INTERNAL",Ye[Ye.UNAVAILABLE=14]="UNAVAILABLE",Ye[Ye.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Wx(){return new TextEncoder}/**
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
 */const Hx=new ds([4294967295,4294967295],0);function a0(n){const e=Wx().encode(n),t=new gE;return t.update(e),new Uint8Array(t.digest())}function l0(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new ds([t,i],0),new ds([s,a],0)]}class Um{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Ul(`Invalid padding: ${t}`);if(i<0)throw new Ul(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ul(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Ul(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=ds.fromNumber(this.Ie)}Ee(e,t,i){let s=e.add(t.multiply(ds.fromNumber(i)));return s.compare(Hx)===1&&(s=new ds([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=a0(e),[i,s]=l0(t);for(let a=0;a<this.hashCount;a++){const u=this.Ee(i,s,a);if(!this.de(u))return!1}return!0}static create(e,t,i){const s=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new Um(a,s,t);return i.forEach(d=>u.insert(d)),u}insert(e){if(this.Ie===0)return;const t=a0(e),[i,s]=l0(t);for(let a=0;a<this.hashCount;a++){const u=this.Ee(i,s,a);this.Ae(u)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Ul extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Yh{constructor(e,t,i,s,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const s=new Map;return s.set(e,Tu.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Yh(Ve.min(),s,new xt(rt),Mi(),qe())}}class Tu{constructor(e,t,i,s,a){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Tu(i,t,qe(),qe(),qe())}}/**
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
 */class uh{constructor(e,t,i,s){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=s}}class HE{constructor(e,t){this.targetId=e,this.me=t}}class KE{constructor(e,t,i=pn.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class u0{constructor(){this.fe=0,this.ge=h0(),this.pe=pn.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=qe(),t=qe(),i=qe();return this.ge.forEach((s,a)=>{switch(a){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:Le()}}),new Tu(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=h0()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ut(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Kx{constructor(e){this.Le=e,this.Be=new Map,this.ke=Mi(),this.qe=c0(),this.Qe=new xt(rt)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const i=this.Ge(t);switch(e.state){case 0:this.ze(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),i.De(e.resumeToken));break;default:Le()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((i,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,i=e.me.count,s=this.Je(t);if(s){const a=s.target;if(Up(a))if(i===0){const u=new Se(a.path);this.Ue(t,u,En.newNoDocument(u,Ve.min()))}else ut(i===1);else{const u=this.Ye(t);if(u!==i){const d=this.Ze(e),f=d?this.Xe(d,e,u):1;if(f!==0){this.je(t);const m=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,m)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:a=0}=t;let u,d;try{u=Es(i).toUint8Array()}catch(f){if(f instanceof RE)return ba("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{d=new Um(u,s,a)}catch(f){return ba(f instanceof Ul?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return d.Ie===0?null:d}Xe(e,t,i){return t.me.count===i-this.nt(e,t.targetId)?0:2}nt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let s=0;return i.forEach(a=>{const u=this.Le.tt(),d=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.Ue(t,a,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((a,u)=>{const d=this.Je(u);if(d){if(a.current&&Up(d.target)){const f=new Se(d.target.path);this.ke.get(f)!==null||this.it(u,f)||this.Ue(u,f,En.newNoDocument(f,e))}a.be&&(t.set(u,a.ve()),a.Ce())}});let i=qe();this.qe.forEach((a,u)=>{let d=!0;u.forEachWhile(f=>{const m=this.Je(f);return!m||m.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(a))}),this.ke.forEach((a,u)=>u.setReadTime(e));const s=new Yh(e,t,this.Qe,this.ke,i);return this.ke=Mi(),this.qe=c0(),this.Qe=new xt(rt),s}$e(e,t){if(!this.ze(e))return;const i=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,i){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new u0,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new fn(rt),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||Te("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new u0),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function c0(){return new xt(Se.comparator)}function h0(){return new xt(Se.comparator)}const Gx={asc:"ASCENDING",desc:"DESCENDING"},Qx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Yx={and:"AND",or:"OR"};class Xx{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function jp(n,e){return n.useProto3Json||qh(e)?e:{value:e}}function Ch(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function GE(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Jx(n,e){return Ch(n,e.toTimestamp())}function ni(n){return ut(!!n),Ve.fromTimestamp(function(t){const i=Po(t);return new Gt(i.seconds,i.nanos)}(n))}function Fm(n,e){return Bp(n,e).canonicalString()}function Bp(n,e){const t=function(s){return new _t(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function QE(n){const e=_t.fromString(n);return ut(e1(e)),e}function zp(n,e){return Fm(n.databaseId,e.path)}function rp(n,e){const t=QE(e);if(t.get(1)!==n.databaseId.projectId)throw new he(J.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new he(J.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Se(XE(t))}function YE(n,e){return Fm(n.databaseId,e)}function Zx(n){const e=QE(n);return e.length===4?_t.emptyPath():XE(e)}function $p(n){return new _t(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function XE(n){return ut(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function d0(n,e,t){return{name:zp(n,e),fields:t.value.mapValue.fields}}function eb(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:Le()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],a=function(m,_){return m.useProto3Json?(ut(_===void 0||typeof _=="string"),pn.fromBase64String(_||"")):(ut(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),pn.fromUint8Array(_||new Uint8Array))}(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&function(m){const _=m.code===void 0?J.UNKNOWN:WE(m.code);return new he(_,m.message||"")}(u);t=new KE(i,s,a,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=rp(n,i.document.name),a=ni(i.document.updateTime),u=i.document.createTime?ni(i.document.createTime):Ve.min(),d=new jn({mapValue:{fields:i.document.fields}}),f=En.newFoundDocument(s,a,u,d),m=i.targetIds||[],_=i.removedTargetIds||[];t=new uh(m,_,f.key,f)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=rp(n,i.document),a=i.readTime?ni(i.readTime):Ve.min(),u=En.newNoDocument(s,a),d=i.removedTargetIds||[];t=new uh([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=rp(n,i.document),a=i.removedTargetIds||[];t=new uh([],a,s,null)}else{if(!("filter"in e))return Le();{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:a}=i,u=new $x(s,a),d=i.targetId;t=new HE(d,u)}}return t}function tb(n,e){let t;if(e instanceof Eu)t={update:d0(n,e.key,e.value)};else if(e instanceof Mm)t={delete:zp(n,e.key)};else if(e instanceof Lo)t={update:d0(n,e.key,e.data),updateMask:cb(e.fieldMask)};else{if(!(e instanceof jx))return Le();t={verify:zp(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(a,u){const d=u.transform;if(d instanceof Ah)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof su)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof au)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof kh)return{fieldPath:u.field.canonicalString(),increment:d.Pe};throw Le()}(0,i))),e.precondition.isNone||(t.currentDocument=function(s,a){return a.updateTime!==void 0?{updateTime:Jx(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Le()}(n,e.precondition)),t}function nb(n,e){return n&&n.length>0?(ut(e!==void 0),n.map(t=>function(s,a){let u=s.updateTime?ni(s.updateTime):ni(a);return u.isEqual(Ve.min())&&(u=ni(a)),new Vx(u,s.transformResults||[])}(t,e))):[]}function rb(n,e){return{documents:[YE(n,e.path)]}}function ib(n,e){const t={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=YE(n,s);const a=function(m){if(m.length!==0)return ZE(Mr.create(m,"and"))}(e.filters);a&&(t.structuredQuery.where=a);const u=function(m){if(m.length!==0)return m.map(_=>function(T){return{field:pa(T.field),direction:ab(T.dir)}}(_))}(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=jp(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(e.endAt)),{_t:t,parent:s}}function ob(n){let e=Zx(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){ut(i===1);const _=t.from[0];_.allDescendants?s=_.collectionId:e=e.child(_.collectionId)}let a=[];t.where&&(a=function(E){const T=JE(E);return T instanceof Mr&&PE(T)?T.getFilters():[T]}(t.where));let u=[];t.orderBy&&(u=function(E){return E.map(T=>function(b){return new ou(ma(b.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(T))}(t.orderBy));let d=null;t.limit&&(d=function(E){let T;return T=typeof E=="object"?E.value:E,qh(T)?null:T}(t.limit));let f=null;t.startAt&&(f=function(E){const T=!!E.before,A=E.values||[];return new La(A,T)}(t.startAt));let m=null;return t.endAt&&(m=function(E){const T=!E.before,A=E.values||[];return new La(A,T)}(t.endAt)),Sx(e,s,u,a,d,"F",f,m)}function sb(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Le()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function JE(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=ma(t.unaryFilter.field);return zt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=ma(t.unaryFilter.field);return zt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=ma(t.unaryFilter.field);return zt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=ma(t.unaryFilter.field);return zt.create(u,"!=",{nullValue:"NULL_VALUE"});default:return Le()}}(n):n.fieldFilter!==void 0?function(t){return zt.create(ma(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Le()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Mr.create(t.compositeFilter.filters.map(i=>JE(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Le()}}(t.compositeFilter.op))}(n):Le()}function ab(n){return Gx[n]}function lb(n){return Qx[n]}function ub(n){return Yx[n]}function pa(n){return{fieldPath:n.canonicalString()}}function ma(n){return dn.fromServerFormat(n.fieldPath)}function ZE(n){return n instanceof zt?function(t){if(t.op==="=="){if(Jv(t.value))return{unaryFilter:{field:pa(t.field),op:"IS_NAN"}};if(Xv(t.value))return{unaryFilter:{field:pa(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Jv(t.value))return{unaryFilter:{field:pa(t.field),op:"IS_NOT_NAN"}};if(Xv(t.value))return{unaryFilter:{field:pa(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pa(t.field),op:lb(t.op),value:t.value}}}(n):n instanceof Mr?function(t){const i=t.getFilters().map(s=>ZE(s));return i.length===1?i[0]:{compositeFilter:{op:ub(t.op),filters:i}}}(n):Le()}function cb(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function e1(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Eo{constructor(e,t,i,s,a=Ve.min(),u=Ve.min(),d=pn.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=f}withSequenceNumber(e){return new Eo(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Eo(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Eo(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Eo(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class hb{constructor(e){this.ct=e}}function db(n){const e=ob({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Rh(e,e.limit,"L"):e}/**
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
 */class fb{constructor(){this.un=new pb}addToCollectionParentIndex(e,t){return this.un.add(t),ie.resolve()}getCollectionParents(e,t){return ie.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return ie.resolve()}deleteFieldIndex(e,t){return ie.resolve()}deleteAllFieldIndexes(e){return ie.resolve()}createTargetIndexes(e,t){return ie.resolve()}getDocumentsMatchingTarget(e,t){return ie.resolve(null)}getIndexType(e,t){return ie.resolve(0)}getFieldIndexes(e,t){return ie.resolve([])}getNextCollectionGroupToUpdate(e){return ie.resolve(null)}getMinOffset(e,t){return ie.resolve(Co.min())}getMinOffsetFromCollectionGroup(e,t){return ie.resolve(Co.min())}updateCollectionGroup(e,t,i){return ie.resolve()}updateIndexEntries(e,t){return ie.resolve()}}class pb{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new fn(_t.comparator),a=!s.has(i);return this.index[t]=s.add(i),a}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new fn(_t.comparator)).toArray()}}/**
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
 */class Ma{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ma(0)}static kn(){return new Ma(-1)}}/**
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
 */class mb{constructor(){this.changes=new Wa(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,En.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?ie.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class gb{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class yb{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(i!==null&&Wl(i.mutation,s,Zn.empty(),Gt.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,qe()).next(()=>i))}getLocalViewOfDocuments(e,t,i=qe()){const s=cs();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,i).next(a=>{let u=Vl();return a.forEach((d,f)=>{u=u.insert(d,f.overlayedDocument)}),u}))}getOverlayedDocuments(e,t){const i=cs();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,qe()))}populateOverlays(e,t,i){const s=[];return i.forEach(a=>{t.has(a)||s.push(a)}),this.documentOverlayCache.getOverlays(e,s).next(a=>{a.forEach((u,d)=>{t.set(u,d)})})}computeViews(e,t,i,s){let a=Mi();const u=ql(),d=function(){return ql()}();return t.forEach((f,m)=>{const _=i.get(m.key);s.has(m.key)&&(_===void 0||_.mutation instanceof Lo)?a=a.insert(m.key,m):_!==void 0?(u.set(m.key,_.mutation.getFieldMask()),Wl(_.mutation,m,_.mutation.getFieldMask(),Gt.now())):u.set(m.key,Zn.empty())}),this.recalculateAndSaveOverlays(e,a).next(f=>(f.forEach((m,_)=>u.set(m,_)),t.forEach((m,_)=>{var E;return d.set(m,new gb(_,(E=u.get(m))!==null&&E!==void 0?E:null))}),d))}recalculateAndSaveOverlays(e,t){const i=ql();let s=new xt((u,d)=>u-d),a=qe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(u=>{for(const d of u)d.keys().forEach(f=>{const m=t.get(f);if(m===null)return;let _=i.get(f)||Zn.empty();_=d.applyToLocalView(m,_),i.set(f,_);const E=(s.get(d.batchId)||qe()).add(f);s=s.insert(d.batchId,E)})}).next(()=>{const u=[],d=s.getReverseIterator();for(;d.hasNext();){const f=d.getNext(),m=f.key,_=f.value,E=VE();_.forEach(T=>{if(!a.has(T)){const A=$E(t.get(T),i.get(T));A!==null&&E.set(T,A),a=a.add(T)}}),u.push(this.documentOverlayCache.saveOverlays(e,m,E))}return ie.waitFor(u)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,s){return function(u){return Se.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Om(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,s):this.getDocumentsMatchingCollectionQuery(e,t,i,s)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next(a=>{const u=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-a.size):ie.resolve(cs());let d=-1,f=a;return u.next(m=>ie.forEach(m,(_,E)=>(d<E.largestBatchId&&(d=E.largestBatchId),a.get(_)?ie.resolve():this.remoteDocumentCache.getEntry(e,_).next(T=>{f=f.insert(_,T)}))).next(()=>this.populateOverlays(e,m,a)).next(()=>this.computeViews(e,f,m,qe())).next(_=>({batchId:d,changes:ME(_)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Se(t)).next(i=>{let s=Vl();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,i,s){const a=t.collectionGroup;let u=Vl();return this.indexManager.getCollectionParents(e,a).next(d=>ie.forEach(d,f=>{const m=function(E,T){return new Oo(T,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,m,i,s).next(_=>{_.forEach((E,T)=>{u=u.insert(E,T)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(e,t,i,s){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,a,s))).next(u=>{a.forEach((f,m)=>{const _=m.getKey();u.get(_)===null&&(u=u.insert(_,En.newInvalidDocument(_)))});let d=Vl();return u.forEach((f,m)=>{const _=a.get(f);_!==void 0&&Wl(_.mutation,m,Zn.empty(),Gt.now()),Kh(t,m)&&(d=d.insert(f,m))}),d})}}/**
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
 */class _b{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return ie.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:ni(s.createTime)}}(t)),ie.resolve()}getNamedQuery(e,t){return ie.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:db(s.bundledQuery),readTime:ni(s.readTime)}}(t)),ie.resolve()}}/**
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
 */class vb{constructor(){this.overlays=new xt(Se.comparator),this.Ir=new Map}getOverlay(e,t){return ie.resolve(this.overlays.get(t))}getOverlays(e,t){const i=cs();return ie.forEach(t,s=>this.getOverlay(e,s).next(a=>{a!==null&&i.set(s,a)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((s,a)=>{this.ht(e,t,a)}),ie.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.Ir.get(i);return s!==void 0&&(s.forEach(a=>this.overlays=this.overlays.remove(a)),this.Ir.delete(i)),ie.resolve()}getOverlaysForCollection(e,t,i){const s=cs(),a=t.length+1,u=new Se(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const f=d.getNext().value,m=f.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===a&&f.largestBatchId>i&&s.set(f.getKey(),f)}return ie.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let a=new xt((m,_)=>m-_);const u=this.overlays.getIterator();for(;u.hasNext();){const m=u.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>i){let _=a.get(m.largestBatchId);_===null&&(_=cs(),a=a.insert(m.largestBatchId,_)),_.set(m.getKey(),m)}}const d=cs(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((m,_)=>d.set(m,_)),!(d.size()>=s)););return ie.resolve(d)}ht(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const u=this.Ir.get(s.largestBatchId).delete(i.key);this.Ir.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(i.key,new zx(t,i));let a=this.Ir.get(t);a===void 0&&(a=qe(),this.Ir.set(t,a)),this.Ir.set(t,a.add(i.key))}}/**
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
 */class wb{constructor(){this.sessionToken=pn.EMPTY_BYTE_STRING}getSessionToken(e){return ie.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ie.resolve()}}/**
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
 */class jm{constructor(){this.Tr=new fn(tn.Er),this.dr=new fn(tn.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const i=new tn(e,t);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.Vr(new tn(e,t))}mr(e,t){e.forEach(i=>this.removeReference(i,t))}gr(e){const t=new Se(new _t([])),i=new tn(t,e),s=new tn(t,e+1),a=[];return this.dr.forEachInRange([i,s],u=>{this.Vr(u),a.push(u.key)}),a}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new Se(new _t([])),i=new tn(t,e),s=new tn(t,e+1);let a=qe();return this.dr.forEachInRange([i,s],u=>{a=a.add(u.key)}),a}containsKey(e){const t=new tn(e,0),i=this.Tr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class tn{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return Se.comparator(e.key,t.key)||rt(e.wr,t.wr)}static Ar(e,t){return rt(e.wr,t.wr)||Se.comparator(e.key,t.key)}}/**
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
 */class Eb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new fn(tn.Er)}checkEmpty(e){return ie.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const a=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Bx(a,t,i,s);this.mutationQueue.push(u);for(const d of s)this.br=this.br.add(new tn(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return ie.resolve(u)}lookupMutationBatch(e,t){return ie.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.vr(i),a=s<0?0:s;return ie.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return ie.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return ie.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new tn(t,0),s=new tn(t,Number.POSITIVE_INFINITY),a=[];return this.br.forEachInRange([i,s],u=>{const d=this.Dr(u.wr);a.push(d)}),ie.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new fn(rt);return t.forEach(s=>{const a=new tn(s,0),u=new tn(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([a,u],d=>{i=i.add(d.wr)})}),ie.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let a=i;Se.isDocumentKey(a)||(a=a.child(""));const u=new tn(new Se(a),0);let d=new fn(rt);return this.br.forEachWhile(f=>{const m=f.key.path;return!!i.isPrefixOf(m)&&(m.length===s&&(d=d.add(f.wr)),!0)},u),ie.resolve(this.Cr(d))}Cr(e){const t=[];return e.forEach(i=>{const s=this.Dr(i);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){ut(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return ie.forEach(t.mutations,s=>{const a=new tn(s.key,t.batchId);return i=i.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=i})}On(e){}containsKey(e,t){const i=new tn(t,0),s=this.br.firstAfterOrEqual(i);return ie.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,ie.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Tb{constructor(e){this.Mr=e,this.docs=function(){return new xt(Se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),a=s?s.size:0,u=this.Mr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return ie.resolve(i?i.document.mutableCopy():En.newInvalidDocument(t))}getEntries(e,t){let i=Mi();return t.forEach(s=>{const a=this.docs.get(s);i=i.insert(s,a?a.document.mutableCopy():En.newInvalidDocument(s))}),ie.resolve(i)}getDocumentsMatchingQuery(e,t,i,s){let a=Mi();const u=t.path,d=new Se(u.child("")),f=this.docs.getIteratorFrom(d);for(;f.hasNext();){const{key:m,value:{document:_}}=f.getNext();if(!u.isPrefixOf(m.path))break;m.path.length>u.length+1||ox(ix(_),i)<=0||(s.has(_.key)||Kh(t,_))&&(a=a.insert(_.key,_.mutableCopy()))}return ie.resolve(a)}getAllFromCollectionGroup(e,t,i,s){Le()}Or(e,t){return ie.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new Ib(this)}getSize(e){return ie.resolve(this.size)}}class Ib extends mb{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(i)}),ie.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class Sb{constructor(e){this.persistence=e,this.Nr=new Wa(t=>bm(t),Nm),this.lastRemoteSnapshotVersion=Ve.min(),this.highestTargetId=0,this.Lr=0,this.Br=new jm,this.targetCount=0,this.kr=Ma.Bn()}forEachTarget(e,t){return this.Nr.forEach((i,s)=>t(s)),ie.resolve()}getLastRemoteSnapshotVersion(e){return ie.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ie.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),ie.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Lr&&(this.Lr=t),ie.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Ma(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,ie.resolve()}updateTargetData(e,t){return this.Kn(t),ie.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,ie.resolve()}removeTargets(e,t,i){let s=0;const a=[];return this.Nr.forEach((u,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.Nr.delete(u),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),s++)}),ie.waitFor(a).next(()=>s)}getTargetCount(e){return ie.resolve(this.targetCount)}getTargetData(e,t){const i=this.Nr.get(t)||null;return ie.resolve(i)}addMatchingKeys(e,t,i){return this.Br.Rr(t,i),ie.resolve()}removeMatchingKeys(e,t,i){this.Br.mr(t,i);const s=this.persistence.referenceDelegate,a=[];return s&&t.forEach(u=>{a.push(s.markPotentiallyOrphaned(e,u))}),ie.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),ie.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Br.yr(t);return ie.resolve(i)}containsKey(e,t){return ie.resolve(this.Br.containsKey(t))}}/**
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
 */class Rb{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Cm(0),this.Kr=!1,this.Kr=!0,this.$r=new wb,this.referenceDelegate=e(this),this.Ur=new Sb(this),this.indexManager=new fb,this.remoteDocumentCache=function(s){return new Tb(s)}(i=>this.referenceDelegate.Wr(i)),this.serializer=new hb(t),this.Gr=new _b(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new vb,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.qr[e.toKey()];return i||(i=new Eb(t,this.referenceDelegate),this.qr[e.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,i){Te("MemoryPersistence","Starting transaction:",e);const s=new Ab(this.Qr.next());return this.referenceDelegate.zr(),i(s).next(a=>this.referenceDelegate.jr(s).next(()=>a)).toPromise().then(a=>(s.raiseOnCommittedEvent(),a))}Hr(e,t){return ie.or(Object.values(this.qr).map(i=>()=>i.containsKey(e,t)))}}class Ab extends ax{constructor(e){super(),this.currentSequenceNumber=e}}class Bm{constructor(e){this.persistence=e,this.Jr=new jm,this.Yr=null}static Zr(e){return new Bm(e)}get Xr(){if(this.Yr)return this.Yr;throw Le()}addReference(e,t,i){return this.Jr.addReference(i,t),this.Xr.delete(i.toString()),ie.resolve()}removeReference(e,t,i){return this.Jr.removeReference(i,t),this.Xr.add(i.toString()),ie.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),ie.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(a=>this.Xr.add(a.toString()))}).next(()=>i.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ie.forEach(this.Xr,i=>{const s=Se.fromPath(i);return this.ei(e,s).next(a=>{a||t.removeEntry(s,Ve.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(i=>{i?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return ie.or([()=>ie.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class zm{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.$i=i,this.Ui=s}static Wi(e,t){let i=qe(),s=qe();for(const a of t.docChanges)switch(a.type){case 0:i=i.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new zm(e,t.fromCache,i,s)}}/**
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
 */class kb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Cb{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return yA()?8:lx(In())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,i,s){const a={result:null};return this.Yi(e,t).next(u=>{a.result=u}).next(()=>{if(!a.result)return this.Zi(e,t,s,i).next(u=>{a.result=u})}).next(()=>{if(a.result)return;const u=new kb;return this.Xi(e,t,u).next(d=>{if(a.result=d,this.zi)return this.es(e,t,u,d.size)})}).next(()=>a.result)}es(e,t,i,s){return i.documentReadCount<this.ji?(bl()<=Ke.DEBUG&&Te("QueryEngine","SDK will not create cache indexes for query:",fa(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),ie.resolve()):(bl()<=Ke.DEBUG&&Te("QueryEngine","Query:",fa(t),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Hi*s?(bl()<=Ke.DEBUG&&Te("QueryEngine","The SDK decides to create cache indexes for query:",fa(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ti(t))):ie.resolve())}Yi(e,t){if(n0(t))return ie.resolve(null);let i=ti(t);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Rh(t,null,"F"),i=ti(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(a=>{const u=qe(...a);return this.Ji.getDocuments(e,u).next(d=>this.indexManager.getMinOffset(e,i).next(f=>{const m=this.ts(t,d);return this.ns(t,m,u,f.readTime)?this.Yi(e,Rh(t,null,"F")):this.rs(e,m,t,f)}))})))}Zi(e,t,i,s){return n0(t)||s.isEqual(Ve.min())?ie.resolve(null):this.Ji.getDocuments(e,i).next(a=>{const u=this.ts(t,a);return this.ns(t,u,i,s)?ie.resolve(null):(bl()<=Ke.DEBUG&&Te("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),fa(t)),this.rs(e,u,t,rx(s,-1)).next(d=>d))})}ts(e,t){let i=new fn(OE(e));return t.forEach((s,a)=>{Kh(e,a)&&(i=i.add(a))}),i}ns(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}Xi(e,t,i){return bl()<=Ke.DEBUG&&Te("QueryEngine","Using full collection scan to execute query:",fa(t)),this.Ji.getDocumentsMatchingQuery(e,t,Co.min(),i)}rs(e,t,i,s){return this.Ji.getDocumentsMatchingQuery(e,i,s).next(a=>(t.forEach(u=>{a=a.insert(u.key,u)}),a))}}/**
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
 */class Pb{constructor(e,t,i,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new xt(rt),this._s=new Wa(a=>bm(a),Nm),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(i)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yb(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function xb(n,e,t,i){return new Pb(n,e,t,i)}async function t1(n,e){const t=Ue(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next(a=>(s=a,t.ls(e),t.mutationQueue.getAllMutationBatches(i))).next(a=>{const u=[],d=[];let f=qe();for(const m of s){u.push(m.batchId);for(const _ of m.mutations)f=f.add(_.key)}for(const m of a){d.push(m.batchId);for(const _ of m.mutations)f=f.add(_.key)}return t.localDocuments.getDocuments(i,f).next(m=>({hs:m,removedBatchIds:u,addedBatchIds:d}))})})}function bb(n,e){const t=Ue(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),a=t.cs.newChangeBuffer({trackRemovals:!0});return function(d,f,m,_){const E=m.batch,T=E.keys();let A=ie.resolve();return T.forEach(b=>{A=A.next(()=>_.getEntry(f,b)).next(L=>{const N=m.docVersions.get(b);ut(N!==null),L.version.compareTo(N)<0&&(E.applyToRemoteDocument(L,m),L.isValidDocument()&&(L.setReadTime(m.commitVersion),_.addEntry(L)))})}),A.next(()=>d.mutationQueue.removeMutationBatch(f,E))}(t,i,e,a).next(()=>a.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let f=qe();for(let m=0;m<d.mutationResults.length;++m)d.mutationResults[m].transformResults.length>0&&(f=f.add(d.batch.mutations[m].key));return f}(e))).next(()=>t.localDocuments.getDocuments(i,s))})}function n1(n){const e=Ue(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Nb(n,e){const t=Ue(n),i=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const u=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const d=[];e.targetChanges.forEach((_,E)=>{const T=s.get(E);if(!T)return;d.push(t.Ur.removeMatchingKeys(a,_.removedDocuments,E).next(()=>t.Ur.addMatchingKeys(a,_.addedDocuments,E)));let A=T.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(E)!==null?A=A.withResumeToken(pn.EMPTY_BYTE_STRING,Ve.min()).withLastLimboFreeSnapshotVersion(Ve.min()):_.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(_.resumeToken,i)),s=s.insert(E,A),function(L,N,K){return L.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0}(T,A,_)&&d.push(t.Ur.updateTargetData(a,A))});let f=Mi(),m=qe();if(e.documentUpdates.forEach(_=>{e.resolvedLimboDocuments.has(_)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,_))}),d.push(Db(a,u,e.documentUpdates).next(_=>{f=_.Ps,m=_.Is})),!i.isEqual(Ve.min())){const _=t.Ur.getLastRemoteSnapshotVersion(a).next(E=>t.Ur.setTargetsMetadata(a,a.currentSequenceNumber,i));d.push(_)}return ie.waitFor(d).next(()=>u.apply(a)).next(()=>t.localDocuments.getLocalViewOfDocuments(a,f,m)).next(()=>f)}).then(a=>(t.os=s,a))}function Db(n,e,t){let i=qe(),s=qe();return t.forEach(a=>i=i.add(a)),e.getEntries(n,i).next(a=>{let u=Mi();return t.forEach((d,f)=>{const m=a.get(d);f.isFoundDocument()!==m.isFoundDocument()&&(s=s.add(d)),f.isNoDocument()&&f.version.isEqual(Ve.min())?(e.removeEntry(d,f.readTime),u=u.insert(d,f)):!m.isValidDocument()||f.version.compareTo(m.version)>0||f.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(f),u=u.insert(d,f)):Te("LocalStore","Ignoring outdated watch update for ",d,". Current version:",m.version," Watch version:",f.version)}),{Ps:u,Is:s}})}function Ob(n,e){const t=Ue(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function Lb(n,e){const t=Ue(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return t.Ur.getTargetData(i,e).next(a=>a?(s=a,ie.resolve(s)):t.Ur.allocateTargetId(i).next(u=>(s=new Eo(e,u,"TargetPurposeListen",i.currentSequenceNumber),t.Ur.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=t.os.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(i.targetId,i),t._s.set(e,i.targetId)),i})}async function qp(n,e,t){const i=Ue(n),s=i.os.get(e),a=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",a,u=>i.persistence.referenceDelegate.removeTarget(u,s))}catch(u){if(!wu(u))throw u;Te("LocalStore",`Failed to update sequence numbers for target ${e}: ${u}`)}i.os=i.os.remove(e),i._s.delete(s.target)}function f0(n,e,t){const i=Ue(n);let s=Ve.min(),a=qe();return i.persistence.runTransaction("Execute query","readwrite",u=>function(f,m,_){const E=Ue(f),T=E._s.get(_);return T!==void 0?ie.resolve(E.os.get(T)):E.Ur.getTargetData(m,_)}(i,u,ti(e)).next(d=>{if(d)return s=d.lastLimboFreeSnapshotVersion,i.Ur.getMatchingKeysForTargetId(u,d.targetId).next(f=>{a=f})}).next(()=>i.ss.getDocumentsMatchingQuery(u,e,t?s:Ve.min(),t?a:qe())).next(d=>(Mb(i,Ax(e),d),{documents:d,Ts:a})))}function Mb(n,e,t){let i=n.us.get(e)||Ve.min();t.forEach((s,a)=>{a.readTime.compareTo(i)>0&&(i=a.readTime)}),n.us.set(e,i)}class p0{constructor(){this.activeTargetIds=Nx()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Vb{constructor(){this.so=new p0,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,i){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new p0,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Ub{_o(e){}shutdown(){}}/**
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
 */class m0{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Gc=null;function ip(){return Gc===null?Gc=function(){return 268435456+Math.round(2147483648*Math.random())}():Gc++,"0x"+Gc.toString(16)}/**
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
 */const Fb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class jb{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const vn="WebChannelConnection";class Bb extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+t.host,this.vo=`projects/${s}/databases/${a}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${a}`}get Fo(){return!1}Mo(t,i,s,a,u){const d=ip(),f=this.xo(t,i.toUriEncodedString());Te("RestConnection",`Sending RPC '${t}' ${d}:`,f,s);const m={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(m,a,u),this.No(t,f,m,s).then(_=>(Te("RestConnection",`Received RPC '${t}' ${d}: `,_),_),_=>{throw ba("RestConnection",`RPC '${t}' ${d} failed with error: `,_,"url: ",f,"request:",s),_})}Lo(t,i,s,a,u,d){return this.Mo(t,i,s,a,u)}Oo(t,i,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qa}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((a,u)=>t[u]=a),s&&s.headers.forEach((a,u)=>t[u]=a)}xo(t,i){const s=Fb[t];return`${this.Do}/v1/${i}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,i,s){const a=ip();return new Promise((u,d)=>{const f=new yE;f.setWithCredentials(!0),f.listenOnce(_E.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case sh.NO_ERROR:const _=f.getResponseJson();Te(vn,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(_)),u(_);break;case sh.TIMEOUT:Te(vn,`RPC '${e}' ${a} timed out`),d(new he(J.DEADLINE_EXCEEDED,"Request time out"));break;case sh.HTTP_ERROR:const E=f.getStatus();if(Te(vn,`RPC '${e}' ${a} failed with status:`,E,"response text:",f.getResponseText()),E>0){let T=f.getResponseJson();Array.isArray(T)&&(T=T[0]);const A=T==null?void 0:T.error;if(A&&A.status&&A.message){const b=function(N){const K=N.toLowerCase().replace(/_/g,"-");return Object.values(J).indexOf(K)>=0?K:J.UNKNOWN}(A.status);d(new he(b,A.message))}else d(new he(J.UNKNOWN,"Server responded with status "+f.getStatus()))}else d(new he(J.UNAVAILABLE,"Connection failed."));break;default:Le()}}finally{Te(vn,`RPC '${e}' ${a} completed.`)}});const m=JSON.stringify(s);Te(vn,`RPC '${e}' ${a} sending request:`,s),f.send(t,"POST",m,i,15)})}Bo(e,t,i){const s=ip(),a=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=EE(),d=wE(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(f.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Oo(f.initMessageHeaders,t,i),f.encodeInitMessageHeaders=!0;const _=a.join("");Te(vn,`Creating RPC '${e}' stream ${s}: ${_}`,f);const E=u.createWebChannel(_,f);let T=!1,A=!1;const b=new jb({Io:N=>{A?Te(vn,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(T||(Te(vn,`Opening RPC '${e}' stream ${s} transport.`),E.open(),T=!0),Te(vn,`RPC '${e}' stream ${s} sending:`,N),E.send(N))},To:()=>E.close()}),L=(N,K,j)=>{N.listen(K,q=>{try{j(q)}catch(x){setTimeout(()=>{throw x},0)}})};return L(E,Ml.EventType.OPEN,()=>{A||(Te(vn,`RPC '${e}' stream ${s} transport opened.`),b.yo())}),L(E,Ml.EventType.CLOSE,()=>{A||(A=!0,Te(vn,`RPC '${e}' stream ${s} transport closed`),b.So())}),L(E,Ml.EventType.ERROR,N=>{A||(A=!0,ba(vn,`RPC '${e}' stream ${s} transport errored:`,N),b.So(new he(J.UNAVAILABLE,"The operation could not be completed")))}),L(E,Ml.EventType.MESSAGE,N=>{var K;if(!A){const j=N.data[0];ut(!!j);const q=j,x=q.error||((K=q[0])===null||K===void 0?void 0:K.error);if(x){Te(vn,`RPC '${e}' stream ${s} received error:`,x);const ee=x.status;let oe=function(k){const D=jt[k];if(D!==void 0)return WE(D)}(ee),R=x.message;oe===void 0&&(oe=J.INTERNAL,R="Unknown error status: "+ee+" with message "+x.message),A=!0,b.So(new he(oe,R)),E.close()}else Te(vn,`RPC '${e}' stream ${s} received:`,j),b.bo(j)}}),L(d,vE.STAT_EVENT,N=>{N.stat===Op.PROXY?Te(vn,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===Op.NOPROXY&&Te(vn,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{b.wo()},0),b}}function op(){return typeof document<"u"?document:null}/**
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
 */function Xh(n){return new Xx(n,!0)}/**
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
 */class r1{constructor(e,t,i=1e3,s=1.5,a=6e4){this.ui=e,this.timerId=t,this.ko=i,this.qo=s,this.Qo=a,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-i);s>0&&Te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class i1{constructor(e,t,i,s,a,u,d,f){this.ui=e,this.Ho=i,this.Jo=s,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=f,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new r1(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===J.RESOURCE_EXHAUSTED?(Li(t.toString()),Li("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===J.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Yo===t&&this.P_(i,s)},i=>{e(()=>{const s=new he(J.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(s)})})}P_(e,t){const i=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{i(()=>this.listener.Eo())}),this.stream.Ro(()=>{i(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{i(()=>this.I_(s))}),this.stream.onMessage(s=>{i(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(Te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zb extends i1{constructor(e,t,i,s,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,u),this.serializer=a}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=eb(this.serializer,e),i=function(a){if(!("targetChange"in a))return Ve.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?Ve.min():u.readTime?ni(u.readTime):Ve.min()}(e);return this.listener.d_(t,i)}A_(e){const t={};t.database=$p(this.serializer),t.addTarget=function(a,u){let d;const f=u.target;if(d=Up(f)?{documents:rb(a,f)}:{query:ib(a,f)._t},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=GE(a,u.resumeToken);const m=jp(a,u.expectedCount);m!==null&&(d.expectedCount=m)}else if(u.snapshotVersion.compareTo(Ve.min())>0){d.readTime=Ch(a,u.snapshotVersion.toTimestamp());const m=jp(a,u.expectedCount);m!==null&&(d.expectedCount=m)}return d}(this.serializer,e);const i=sb(this.serializer,e);i&&(t.labels=i),this.a_(t)}R_(e){const t={};t.database=$p(this.serializer),t.removeTarget=e,this.a_(t)}}class $b extends i1{constructor(e,t,i,s,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,s,u),this.serializer=a}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return ut(!!e.streamToken),this.lastStreamToken=e.streamToken,ut(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ut(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=nb(e.writeResults,e.commitTime),i=ni(e.commitTime);return this.listener.g_(i,t)}p_(){const e={};e.database=$p(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>tb(this.serializer,i))};this.a_(t)}}/**
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
 */class qb extends class{}{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new he(J.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Mo(e,Bp(t,i),s,a,u)).catch(a=>{throw a.name==="FirebaseError"?(a.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new he(J.UNKNOWN,a.toString())})}Lo(e,t,i,s,a){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,d])=>this.connection.Lo(e,Bp(t,i),s,u,d,a)).catch(u=>{throw u.name==="FirebaseError"?(u.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new he(J.UNKNOWN,u.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Wb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Li(t),this.D_=!1):Te("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Hb{constructor(e,t,i,s,a){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=a,this.k_._o(u=>{i.enqueueAndForget(async()=>{Ps(this)&&(Te("RemoteStore","Restarting streams for network reachability change."),await async function(f){const m=Ue(f);m.L_.add(4),await Iu(m),m.q_.set("Unknown"),m.L_.delete(4),await Jh(m)}(this))})}),this.q_=new Wb(i,s)}}async function Jh(n){if(Ps(n))for(const e of n.B_)await e(!0)}async function Iu(n){for(const e of n.B_)await e(!1)}function o1(n,e){const t=Ue(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Hm(t)?Wm(t):Ha(t).r_()&&qm(t,e))}function $m(n,e){const t=Ue(n),i=Ha(t);t.N_.delete(e),i.r_()&&s1(t,e),t.N_.size===0&&(i.r_()?i.o_():Ps(t)&&t.q_.set("Unknown"))}function qm(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ve.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ha(n).A_(e)}function s1(n,e){n.Q_.xe(e),Ha(n).R_(e)}function Wm(n){n.Q_=new Kx({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Ha(n).start(),n.q_.v_()}function Hm(n){return Ps(n)&&!Ha(n).n_()&&n.N_.size>0}function Ps(n){return Ue(n).L_.size===0}function a1(n){n.Q_=void 0}async function Kb(n){n.q_.set("Online")}async function Gb(n){n.N_.forEach((e,t)=>{qm(n,e)})}async function Qb(n,e){a1(n),Hm(n)?(n.q_.M_(e),Wm(n)):n.q_.set("Unknown")}async function Yb(n,e,t){if(n.q_.set("Online"),e instanceof KE&&e.state===2&&e.cause)try{await async function(s,a){const u=a.cause;for(const d of a.targetIds)s.N_.has(d)&&(await s.remoteSyncer.rejectListen(d,u),s.N_.delete(d),s.Q_.removeTarget(d))}(n,e)}catch(i){Te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Ph(n,i)}else if(e instanceof uh?n.Q_.Ke(e):e instanceof HE?n.Q_.He(e):n.Q_.We(e),!t.isEqual(Ve.min()))try{const i=await n1(n.localStore);t.compareTo(i)>=0&&await function(a,u){const d=a.Q_.rt(u);return d.targetChanges.forEach((f,m)=>{if(f.resumeToken.approximateByteSize()>0){const _=a.N_.get(m);_&&a.N_.set(m,_.withResumeToken(f.resumeToken,u))}}),d.targetMismatches.forEach((f,m)=>{const _=a.N_.get(f);if(!_)return;a.N_.set(f,_.withResumeToken(pn.EMPTY_BYTE_STRING,_.snapshotVersion)),s1(a,f);const E=new Eo(_.target,f,m,_.sequenceNumber);qm(a,E)}),a.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(i){Te("RemoteStore","Failed to raise snapshot:",i),await Ph(n,i)}}async function Ph(n,e,t){if(!wu(e))throw e;n.L_.add(1),await Iu(n),n.q_.set("Offline"),t||(t=()=>n1(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{Te("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Jh(n)})}function l1(n,e){return e().catch(t=>Ph(n,t,e))}async function Zh(n){const e=Ue(n),t=xo(e);let i=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Xb(e);)try{const s=await Ob(e.localStore,i);if(s===null){e.O_.length===0&&t.o_();break}i=s.batchId,Jb(e,s)}catch(s){await Ph(e,s)}u1(e)&&c1(e)}function Xb(n){return Ps(n)&&n.O_.length<10}function Jb(n,e){n.O_.push(e);const t=xo(n);t.r_()&&t.V_&&t.m_(e.mutations)}function u1(n){return Ps(n)&&!xo(n).n_()&&n.O_.length>0}function c1(n){xo(n).start()}async function Zb(n){xo(n).p_()}async function eN(n){const e=xo(n);for(const t of n.O_)e.m_(t.mutations)}async function tN(n,e,t){const i=n.O_.shift(),s=Vm.from(i,e,t);await l1(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Zh(n)}async function nN(n,e){e&&xo(n).V_&&await async function(i,s){if(function(u){return qx(u)&&u!==J.ABORTED}(s.code)){const a=i.O_.shift();xo(i).s_(),await l1(i,()=>i.remoteSyncer.rejectFailedWrite(a.batchId,s)),await Zh(i)}}(n,e),u1(n)&&c1(n)}async function g0(n,e){const t=Ue(n);t.asyncQueue.verifyOperationInProgress(),Te("RemoteStore","RemoteStore received new credentials");const i=Ps(t);t.L_.add(3),await Iu(t),i&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Jh(t)}async function rN(n,e){const t=Ue(n);e?(t.L_.delete(2),await Jh(t)):e||(t.L_.add(2),await Iu(t),t.q_.set("Unknown"))}function Ha(n){return n.K_||(n.K_=function(t,i,s){const a=Ue(t);return a.w_(),new zb(i,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(n.datastore,n.asyncQueue,{Eo:Kb.bind(null,n),Ro:Gb.bind(null,n),mo:Qb.bind(null,n),d_:Yb.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Hm(n)?Wm(n):n.q_.set("Unknown")):(await n.K_.stop(),a1(n))})),n.K_}function xo(n){return n.U_||(n.U_=function(t,i,s){const a=Ue(t);return a.w_(),new $b(i,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Zb.bind(null,n),mo:nN.bind(null,n),f_:eN.bind(null,n),g_:tN.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Zh(n)):(await n.U_.stop(),n.O_.length>0&&(Te("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class Km{constructor(e,t,i,s,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=a,this.deferred=new Ro,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,a){const u=Date.now()+i,d=new Km(e,t,u,s,a);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he(J.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gm(n,e){if(Li("AsyncQueue",`${e}: ${n}`),wu(n))return new he(J.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Sa{constructor(e){this.comparator=e?(t,i)=>e(t,i)||Se.comparator(t.key,i.key):(t,i)=>Se.comparator(t.key,i.key),this.keyedMap=Vl(),this.sortedSet=new xt(this.comparator)}static emptySet(e){return new Sa(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Sa)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=i.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Sa;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class y0{constructor(){this.W_=new xt(Se.comparator)}track(e){const t=e.doc.key,i=this.W_.get(t);i?e.type!==0&&i.type===3?this.W_=this.W_.insert(t,e):e.type===3&&i.type!==1?this.W_=this.W_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.W_=this.W_.remove(t):e.type===1&&i.type===2?this.W_=this.W_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):Le():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,i)=>{e.push(i)}),e}}class Va{constructor(e,t,i,s,a,u,d,f,m){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=f,this.hasCachedResults=m}static fromInitialDocuments(e,t,i,s,a){const u=[];return t.forEach(d=>{u.push({type:0,doc:d})}),new Va(e,t,Sa.emptySet(t),u,i,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
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
 */class iN{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class oN{constructor(){this.queries=_0(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,i){const s=Ue(t),a=s.queries;s.queries=_0(),a.forEach((u,d)=>{for(const f of d.j_)f.onError(i)})})(this,new he(J.ABORTED,"Firestore shutting down"))}}function _0(){return new Wa(n=>DE(n),Hh)}async function h1(n,e){const t=Ue(n);let i=3;const s=e.query;let a=t.queries.get(s);a?!a.H_()&&e.J_()&&(i=2):(a=new iN,i=e.J_()?0:1);try{switch(i){case 0:a.z_=await t.onListen(s,!0);break;case 1:a.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(u){const d=Gm(u,`Initialization of query '${fa(e.query)}' failed`);return void e.onError(d)}t.queries.set(s,a),a.j_.push(e),e.Z_(t.onlineState),a.z_&&e.X_(a.z_)&&Qm(t)}async function d1(n,e){const t=Ue(n),i=e.query;let s=3;const a=t.queries.get(i);if(a){const u=a.j_.indexOf(e);u>=0&&(a.j_.splice(u,1),a.j_.length===0?s=e.J_()?0:1:!a.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function sN(n,e){const t=Ue(n);let i=!1;for(const s of e){const a=s.query,u=t.queries.get(a);if(u){for(const d of u.j_)d.X_(s)&&(i=!0);u.z_=s}}i&&Qm(t)}function aN(n,e,t){const i=Ue(n),s=i.queries.get(e);if(s)for(const a of s.j_)a.onError(t);i.queries.delete(e)}function Qm(n){n.Y_.forEach(e=>{e.next()})}var Wp,v0;(v0=Wp||(Wp={})).ea="default",v0.Cache="cache";class f1{constructor(e,t,i){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=i||{}}X_(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Va(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const i=t!=="Offline";return(!this.options._a||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Va.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Wp.Cache}}/**
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
 */class p1{constructor(e){this.key=e}}class m1{constructor(e){this.key=e}}class lN{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=qe(),this.mutatedKeys=qe(),this.Aa=OE(e),this.Ra=new Sa(this.Aa)}get Va(){return this.Ta}ma(e,t){const i=t?t.fa:new y0,s=t?t.Ra:this.Ra;let a=t?t.mutatedKeys:this.mutatedKeys,u=s,d=!1;const f=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,m=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((_,E)=>{const T=s.get(_),A=Kh(this.query,E)?E:null,b=!!T&&this.mutatedKeys.has(T.key),L=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let N=!1;T&&A?T.data.isEqual(A.data)?b!==L&&(i.track({type:3,doc:A}),N=!0):this.ga(T,A)||(i.track({type:2,doc:A}),N=!0,(f&&this.Aa(A,f)>0||m&&this.Aa(A,m)<0)&&(d=!0)):!T&&A?(i.track({type:0,doc:A}),N=!0):T&&!A&&(i.track({type:1,doc:T}),N=!0,(f||m)&&(d=!0)),N&&(A?(u=u.add(A),a=L?a.add(_):a.delete(_)):(u=u.delete(_),a=a.delete(_)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const _=this.query.limitType==="F"?u.last():u.first();u=u.delete(_.key),a=a.delete(_.key),i.track({type:1,doc:_})}return{Ra:u,fa:i,ns:d,mutatedKeys:a}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,s){const a=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const u=e.fa.G_();u.sort((_,E)=>function(A,b){const L=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Le()}};return L(A)-L(b)}(_.type,E.type)||this.Aa(_.doc,E.doc)),this.pa(i),s=s!=null&&s;const d=t&&!s?this.ya():[],f=this.da.size===0&&this.current&&!s?1:0,m=f!==this.Ea;return this.Ea=f,u.length!==0||m?{snapshot:new Va(this.query,e.Ra,a,u,e.mutatedKeys,f===0,m,!1,!!i&&i.resumeToken.approximateByteSize()>0),wa:d}:{wa:d}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new y0,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=qe(),this.Ra.forEach(i=>{this.Sa(i.key)&&(this.da=this.da.add(i.key))});const t=[];return e.forEach(i=>{this.da.has(i)||t.push(new m1(i))}),this.da.forEach(i=>{e.has(i)||t.push(new p1(i))}),t}ba(e){this.Ta=e.Ts,this.da=qe();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Va.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class uN{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class cN{constructor(e){this.key=e,this.va=!1}}class hN{constructor(e,t,i,s,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.Ca={},this.Fa=new Wa(d=>DE(d),Hh),this.Ma=new Map,this.xa=new Set,this.Oa=new xt(Se.comparator),this.Na=new Map,this.La=new jm,this.Ba={},this.ka=new Map,this.qa=Ma.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function dN(n,e,t=!0){const i=E1(n);let s;const a=i.Fa.get(e);return a?(i.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.Da()):s=await g1(i,e,t,!0),s}async function fN(n,e){const t=E1(n);await g1(t,e,!0,!1)}async function g1(n,e,t,i){const s=await Lb(n.localStore,ti(e)),a=s.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let d;return i&&(d=await pN(n,e,a,u==="current",s.resumeToken)),n.isPrimaryClient&&t&&o1(n.remoteStore,s),d}async function pN(n,e,t,i,s){n.Ka=(E,T,A)=>async function(L,N,K,j){let q=N.view.ma(K);q.ns&&(q=await f0(L.localStore,N.query,!1).then(({documents:R})=>N.view.ma(R,q)));const x=j&&j.targetChanges.get(N.targetId),ee=j&&j.targetMismatches.get(N.targetId)!=null,oe=N.view.applyChanges(q,L.isPrimaryClient,x,ee);return E0(L,N.targetId,oe.wa),oe.snapshot}(n,E,T,A);const a=await f0(n.localStore,e,!0),u=new lN(e,a.Ts),d=u.ma(a.documents),f=Tu.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",s),m=u.applyChanges(d,n.isPrimaryClient,f);E0(n,t,m.wa);const _=new uN(e,t,u);return n.Fa.set(e,_),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),m.snapshot}async function mN(n,e,t){const i=Ue(n),s=i.Fa.get(e),a=i.Ma.get(s.targetId);if(a.length>1)return i.Ma.set(s.targetId,a.filter(u=>!Hh(u,e))),void i.Fa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await qp(i.localStore,s.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(s.targetId),t&&$m(i.remoteStore,s.targetId),Hp(i,s.targetId)}).catch(vu)):(Hp(i,s.targetId),await qp(i.localStore,s.targetId,!0))}async function gN(n,e){const t=Ue(n),i=t.Fa.get(e),s=t.Ma.get(i.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),$m(t.remoteStore,i.targetId))}async function yN(n,e,t){const i=SN(n);try{const s=await function(u,d){const f=Ue(u),m=Gt.now(),_=d.reduce((A,b)=>A.add(b.key),qe());let E,T;return f.persistence.runTransaction("Locally write mutations","readwrite",A=>{let b=Mi(),L=qe();return f.cs.getEntries(A,_).next(N=>{b=N,b.forEach((K,j)=>{j.isValidDocument()||(L=L.add(K))})}).next(()=>f.localDocuments.getOverlayedDocuments(A,b)).next(N=>{E=N;const K=[];for(const j of d){const q=Fx(j,E.get(j.key).overlayedDocument);q!=null&&K.push(new Lo(j.key,q,AE(q.value.mapValue),Lr.exists(!0)))}return f.mutationQueue.addMutationBatch(A,m,K,d)}).next(N=>{T=N;const K=N.applyToLocalDocumentSet(E,L);return f.documentOverlayCache.saveOverlays(A,N.batchId,K)})}).then(()=>({batchId:T.batchId,changes:ME(E)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(u,d,f){let m=u.Ba[u.currentUser.toKey()];m||(m=new xt(rt)),m=m.insert(d,f),u.Ba[u.currentUser.toKey()]=m}(i,s.batchId,t),await Su(i,s.changes),await Zh(i.remoteStore)}catch(s){const a=Gm(s,"Failed to persist write");t.reject(a)}}async function y1(n,e){const t=Ue(n);try{const i=await Nb(t.localStore,e);e.targetChanges.forEach((s,a)=>{const u=t.Na.get(a);u&&(ut(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?u.va=!0:s.modifiedDocuments.size>0?ut(u.va):s.removedDocuments.size>0&&(ut(u.va),u.va=!1))}),await Su(t,i,e)}catch(i){await vu(i)}}function w0(n,e,t){const i=Ue(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.Fa.forEach((a,u)=>{const d=u.view.Z_(e);d.snapshot&&s.push(d.snapshot)}),function(u,d){const f=Ue(u);f.onlineState=d;let m=!1;f.queries.forEach((_,E)=>{for(const T of E.j_)T.Z_(d)&&(m=!0)}),m&&Qm(f)}(i.eventManager,e),s.length&&i.Ca.d_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function _N(n,e,t){const i=Ue(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.Na.get(e),a=s&&s.key;if(a){let u=new xt(Se.comparator);u=u.insert(a,En.newNoDocument(a,Ve.min()));const d=qe().add(a),f=new Yh(Ve.min(),new Map,new xt(rt),u,d);await y1(i,f),i.Oa=i.Oa.remove(a),i.Na.delete(e),Ym(i)}else await qp(i.localStore,e,!1).then(()=>Hp(i,e,t)).catch(vu)}async function vN(n,e){const t=Ue(n),i=e.batch.batchId;try{const s=await bb(t.localStore,e);v1(t,i,null),_1(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Su(t,s)}catch(s){await vu(s)}}async function wN(n,e,t){const i=Ue(n);try{const s=await function(u,d){const f=Ue(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let _;return f.mutationQueue.lookupMutationBatch(m,d).next(E=>(ut(E!==null),_=E.keys(),f.mutationQueue.removeMutationBatch(m,E))).next(()=>f.mutationQueue.performConsistencyCheck(m)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(m,_,d)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,_)).next(()=>f.localDocuments.getDocuments(m,_))})}(i.localStore,e);v1(i,e,t),_1(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Su(i,s)}catch(s){await vu(s)}}function _1(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function v1(n,e,t){const i=Ue(n);let s=i.Ba[i.currentUser.toKey()];if(s){const a=s.get(e);a&&(t?a.reject(t):a.resolve(),s=s.remove(e)),i.Ba[i.currentUser.toKey()]=s}}function Hp(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Ma.get(e))n.Fa.delete(i),t&&n.Ca.$a(i,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(i=>{n.La.containsKey(i)||w1(n,i)})}function w1(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&($m(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Ym(n))}function E0(n,e,t){for(const i of t)i instanceof p1?(n.La.addReference(i.key,e),EN(n,i)):i instanceof m1?(Te("SyncEngine","Document no longer in limbo: "+i.key),n.La.removeReference(i.key,e),n.La.containsKey(i.key)||w1(n,i.key)):Le()}function EN(n,e){const t=e.key,i=t.path.canonicalString();n.Oa.get(t)||n.xa.has(i)||(Te("SyncEngine","New document in limbo: "+t),n.xa.add(i),Ym(n))}function Ym(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new Se(_t.fromString(e)),i=n.qa.next();n.Na.set(i,new cN(t)),n.Oa=n.Oa.insert(t,i),o1(n.remoteStore,new Eo(ti(Dm(t.path)),i,"TargetPurposeLimboResolution",Cm.oe))}}async function Su(n,e,t){const i=Ue(n),s=[],a=[],u=[];i.Fa.isEmpty()||(i.Fa.forEach((d,f)=>{u.push(i.Ka(f,e,t).then(m=>{var _;if((m||t)&&i.isPrimaryClient){const E=m?!m.fromCache:(_=t==null?void 0:t.targetChanges.get(f.targetId))===null||_===void 0?void 0:_.current;i.sharedClientState.updateQueryState(f.targetId,E?"current":"not-current")}if(m){s.push(m);const E=zm.Wi(f.targetId,m);a.push(E)}}))}),await Promise.all(u),i.Ca.d_(s),await async function(f,m){const _=Ue(f);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>ie.forEach(m,T=>ie.forEach(T.$i,A=>_.persistence.referenceDelegate.addReference(E,T.targetId,A)).next(()=>ie.forEach(T.Ui,A=>_.persistence.referenceDelegate.removeReference(E,T.targetId,A)))))}catch(E){if(!wu(E))throw E;Te("LocalStore","Failed to update sequence numbers: "+E)}for(const E of m){const T=E.targetId;if(!E.fromCache){const A=_.os.get(T),b=A.snapshotVersion,L=A.withLastLimboFreeSnapshotVersion(b);_.os=_.os.insert(T,L)}}}(i.localStore,a))}async function TN(n,e){const t=Ue(n);if(!t.currentUser.isEqual(e)){Te("SyncEngine","User change. New user:",e.toKey());const i=await t1(t.localStore,e);t.currentUser=e,function(a,u){a.ka.forEach(d=>{d.forEach(f=>{f.reject(new he(J.CANCELLED,u))})}),a.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Su(t,i.hs)}}function IN(n,e){const t=Ue(n),i=t.Na.get(e);if(i&&i.va)return qe().add(i.key);{let s=qe();const a=t.Ma.get(e);if(!a)return s;for(const u of a){const d=t.Fa.get(u);s=s.unionWith(d.view.Va)}return s}}function E1(n){const e=Ue(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=y1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=IN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_N.bind(null,e),e.Ca.d_=sN.bind(null,e.eventManager),e.Ca.$a=aN.bind(null,e.eventManager),e}function SN(n){const e=Ue(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wN.bind(null,e),e}class xh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Xh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return xb(this.persistence,new Cb,e.initialUser,this.serializer)}Ga(e){return new Rb(Bm.Zr,this.serializer)}Wa(e){return new Vb}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}xh.provider={build:()=>new xh};class Kp{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>w0(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=TN.bind(null,this.syncEngine),await rN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new oN}()}createDatastore(e){const t=Xh(e.databaseInfo.databaseId),i=function(a){return new Bb(a)}(e.databaseInfo);return function(a,u,d,f){return new qb(a,u,d,f)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,s,a,u,d){return new Hb(i,s,a,u,d)}(this.localStore,this.datastore,e.asyncQueue,t=>w0(this.syncEngine,t,0),function(){return m0.D()?new m0:new Ub}())}createSyncEngine(e,t){return function(s,a,u,d,f,m,_){const E=new hN(s,a,u,d,f,m);return _&&(E.Qa=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const a=Ue(s);Te("RemoteStore","RemoteStore shutting down."),a.L_.add(5),await Iu(a),a.k_.shutdown(),a.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Kp.provider={build:()=>new Kp};/**
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
 *//**
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
 */class T1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Li("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class RN{constructor(e,t,i,s,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=s,this.user=wn.UNAUTHENTICATED,this.clientId=IE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(i,async u=>{Te("FirestoreClient","Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(i,u=>(Te("FirestoreClient","Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ro;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Gm(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function sp(n,e){n.asyncQueue.verifyOperationInProgress(),Te("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await t1(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function T0(n,e){n.asyncQueue.verifyOperationInProgress();const t=await AN(n);Te("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>g0(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>g0(e.remoteStore,s)),n._onlineComponents=e}async function AN(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){Te("FirestoreClient","Using user provided OfflineComponentProvider");try{await sp(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===J.FAILED_PRECONDITION||s.code===J.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;ba("Error using user provided cache. Falling back to memory cache: "+t),await sp(n,new xh)}}else Te("FirestoreClient","Using default OfflineComponentProvider"),await sp(n,new xh);return n._offlineComponents}async function I1(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(Te("FirestoreClient","Using user provided OnlineComponentProvider"),await T0(n,n._uninitializedComponentsProvider._online)):(Te("FirestoreClient","Using default OnlineComponentProvider"),await T0(n,new Kp))),n._onlineComponents}function kN(n){return I1(n).then(e=>e.syncEngine)}async function Gp(n){const e=await I1(n),t=e.eventManager;return t.onListen=dN.bind(null,e.syncEngine),t.onUnlisten=mN.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=fN.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=gN.bind(null,e.syncEngine),t}function CN(n,e,t={}){const i=new Ro;return n.asyncQueue.enqueueAndForget(async()=>function(a,u,d,f,m){const _=new T1({next:T=>{_.Za(),u.enqueueAndForget(()=>d1(a,E)),T.fromCache&&f.source==="server"?m.reject(new he(J.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):m.resolve(T)},error:T=>m.reject(T)}),E=new f1(d,_,{includeMetadataChanges:!0,_a:!0});return h1(a,E)}(await Gp(n),n.asyncQueue,e,t,i)),i.promise}/**
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
 */function S1(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const I0=new Map;/**
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
 */function R1(n,e,t){if(!t)throw new he(J.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function PN(n,e,t,i){if(e===!0&&i===!0)throw new he(J.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function S0(n){if(!Se.isDocumentKey(n))throw new he(J.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function R0(n){if(Se.isDocumentKey(n))throw new he(J.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ed(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Le()}function ri(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new he(J.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ed(n);throw new he(J.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class A0{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new he(J.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new he(J.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}PN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=S1((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new he(J.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new he(J.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new he(J.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class td{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new A0({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he(J.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he(J.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new A0(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new GP;switch(i.type){case"firstParty":return new JP(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new he(J.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=I0.get(t);i&&(Te("ComponentProvider","Removing Datastore"),I0.delete(t),i.terminate())}(this),Promise.resolve()}}function xN(n,e,t,i={}){var s;const a=(n=ri(n,td))._getSettings(),u=`${e}:${t}`;if(a.host!=="firestore.googleapis.com"&&a.host!==u&&ba("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},a),{host:u,ssl:!1})),i.mockUserToken){let d,f;if(typeof i.mockUserToken=="string")d=i.mockUserToken,f=wn.MOCK_USER;else{d=xw(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const m=i.mockUserToken.sub||i.mockUserToken.user_id;if(!m)throw new he(J.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new wn(m)}n._authCredentials=new QP(new TE(d,f))}}/**
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
 */class Vr{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Vr(this.firestore,e,this._query)}}class Bn{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ao(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Bn(this.firestore,e,this._key)}}class Ao extends Vr{constructor(e,t,i){super(e,t,Dm(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Bn(this.firestore,null,new Se(e))}withConverter(e){return new Ao(this.firestore,e,this._path)}}function nd(n,e,...t){if(n=kt(n),R1("collection","path",e),n instanceof td){const i=_t.fromString(e,...t);return R0(i),new Ao(n,null,i)}{if(!(n instanceof Bn||n instanceof Ao))throw new he(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(_t.fromString(e,...t));return R0(i),new Ao(n.firestore,null,i)}}function Qp(n,e,...t){if(n=kt(n),arguments.length===1&&(e=IE.newId()),R1("doc","path",e),n instanceof td){const i=_t.fromString(e,...t);return S0(i),new Bn(n,null,new Se(i))}{if(!(n instanceof Bn||n instanceof Ao))throw new he(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(_t.fromString(e,...t));return S0(i),new Bn(n.firestore,n instanceof Ao?n.converter:null,new Se(i))}}/**
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
 */class k0{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new r1(this,"async_queue_retry"),this.Vu=()=>{const i=op();i&&Te("AsyncQueue","Visibility state changed to "+i.visibilityState),this.t_.jo()},this.mu=e;const t=op();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=op();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Ro;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!wu(e))throw e;Te("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(i=>{this.Eu=i,this.du=!1;const s=function(u){let d=u.message||"";return u.stack&&(d=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),d}(i);throw Li("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.du=!1,i))));return this.mu=t,t}enqueueAfterDelay(e,t,i){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=Km.createAndSchedule(this,e,t,i,a=>this.yu(a));return this.Tu.push(s),s}fu(){this.Eu&&Le()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function C0(n){return function(t,i){if(typeof t!="object"||t===null)return!1;const s=t;for(const a of i)if(a in s&&typeof s[a]=="function")return!0;return!1}(n,["next","error","complete"])}class Is extends td{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new k0,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new k0(e),this._firestoreClient=void 0,await e}}}function A1(n,e){const t=typeof n=="object"?n:gm(),i=typeof n=="string"?n:"(default)",s=jh(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const a=kw("firestore");a&&xN(s,...a)}return s}function Xm(n){if(n._terminated)throw new he(J.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||bN(n),n._firestoreClient}function bN(n){var e,t,i;const s=n._freezeSettings(),a=function(d,f,m,_){return new hx(d,f,m,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,S1(_.experimentalLongPollingOptions),_.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new RN(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&function(d){const f=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(f),_online:f}}(n._componentsProvider))}/**
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
 */class Ua{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ua(pn.fromBase64String(e))}catch(t){throw new he(J.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ua(pn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class rd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new he(J.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Jm{constructor(e){this._methodName=e}}/**
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
 */class Zm{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new he(J.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new he(J.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return rt(this._lat,e._lat)||rt(this._long,e._long)}}/**
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
 */class eg{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,s){if(i.length!==s.length)return!1;for(let a=0;a<i.length;++a)if(i[a]!==s[a])return!1;return!0}(this._values,e._values)}}/**
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
 */const NN=/^__.*__$/;class DN{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Lo(e,this.data,this.fieldMask,t,this.fieldTransforms):new Eu(e,this.data,t,this.fieldTransforms)}}class k1{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Lo(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function C1(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Le()}}class tg{constructor(e,t,i,s,a,u){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=s,a===void 0&&this.vu(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new tg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:i,xu:!1});return s.Ou(e),s}Nu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:i,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return bh(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(C1(this.Cu)&&NN.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class ON{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Xh(e)}Qu(e,t,i,s=!1){return new tg({Cu:e,methodName:t,qu:i,path:dn.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function id(n){const e=n._freezeSettings(),t=Xh(n._databaseId);return new ON(n._databaseId,!!e.ignoreUndefinedProperties,t)}function LN(n,e,t,i,s,a={}){const u=n.Qu(a.merge||a.mergeFields?2:0,e,t,s);ng("Data must be an object, but it was:",u,i);const d=x1(i,u);let f,m;if(a.merge)f=new Zn(u.fieldMask),m=u.fieldTransforms;else if(a.mergeFields){const _=[];for(const E of a.mergeFields){const T=Yp(e,E,t);if(!u.contains(T))throw new he(J.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);N1(_,T)||_.push(T)}f=new Zn(_),m=u.fieldTransforms.filter(E=>f.covers(E.field))}else f=null,m=u.fieldTransforms;return new DN(new jn(d),f,m)}class od extends Jm{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof od}}function MN(n,e,t,i){const s=n.Qu(1,e,t);ng("Data must be an object, but it was:",s,i);const a=[],u=jn.empty();Cs(i,(f,m)=>{const _=rg(e,f,t);m=kt(m);const E=s.Nu(_);if(m instanceof od)a.push(_);else{const T=Ru(m,E);T!=null&&(a.push(_),u.set(_,T))}});const d=new Zn(a);return new k1(u,d,s.fieldTransforms)}function VN(n,e,t,i,s,a){const u=n.Qu(1,e,t),d=[Yp(e,i,t)],f=[s];if(a.length%2!=0)throw new he(J.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<a.length;T+=2)d.push(Yp(e,a[T])),f.push(a[T+1]);const m=[],_=jn.empty();for(let T=d.length-1;T>=0;--T)if(!N1(m,d[T])){const A=d[T];let b=f[T];b=kt(b);const L=u.Nu(A);if(b instanceof od)m.push(A);else{const N=Ru(b,L);N!=null&&(m.push(A),_.set(A,N))}}const E=new Zn(m);return new k1(_,E,u.fieldTransforms)}function P1(n,e,t,i=!1){return Ru(t,n.Qu(i?4:3,e))}function Ru(n,e){if(b1(n=kt(n)))return ng("Unsupported field value:",e,n),x1(n,e);if(n instanceof Jm)return function(i,s){if(!C1(s.Cu))throw s.Bu(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${i._methodName}() is not currently supported inside arrays`);const a=i._toFieldTransform(s);a&&s.fieldTransforms.push(a)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(i,s){const a=[];let u=0;for(const d of i){let f=Ru(d,s.Lu(u));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),u++}return{arrayValue:{values:a}}}(n,e)}return function(i,s){if((i=kt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Dx(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const a=Gt.fromDate(i);return{timestampValue:Ch(s.serializer,a)}}if(i instanceof Gt){const a=new Gt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Ch(s.serializer,a)}}if(i instanceof Zm)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Ua)return{bytesValue:GE(s.serializer,i._byteString)};if(i instanceof Bn){const a=s.databaseId,u=i.firestore._databaseId;if(!u.isEqual(a))throw s.Bu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Fm(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof eg)return function(u,d){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:u.toArray().map(f=>{if(typeof f!="number")throw d.Bu("VectorValues must only contain numeric values.");return Lm(d.serializer,f)})}}}}}}(i,s);throw s.Bu(`Unsupported field value: ${ed(i)}`)}(n,e)}function x1(n,e){const t={};return SE(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Cs(n,(i,s)=>{const a=Ru(s,e.Mu(i));a!=null&&(t[i]=a)}),{mapValue:{fields:t}}}function b1(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Gt||n instanceof Zm||n instanceof Ua||n instanceof Bn||n instanceof Jm||n instanceof eg)}function ng(n,e,t){if(!b1(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const i=ed(t);throw i==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+i)}}function Yp(n,e,t){if((e=kt(e))instanceof rd)return e._internalPath;if(typeof e=="string")return rg(n,e);throw bh("Field path arguments must be of type string or ",n,!1,void 0,t)}const UN=new RegExp("[~\\*/\\[\\]]");function rg(n,e,t){if(e.search(UN)>=0)throw bh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new rd(...e.split("."))._internalPath}catch{throw bh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function bh(n,e,t,i,s){const a=i&&!i.isEmpty(),u=s!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let f="";return(a||u)&&(f+=" (found",a&&(f+=` in field ${i}`),u&&(f+=` in document ${s}`),f+=")"),new he(J.INVALID_ARGUMENT,d+n+f)}function N1(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class ig{constructor(e,t,i,s,a){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Bn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new FN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(sd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class FN extends ig{data(){return super.data()}}function sd(n,e){return typeof e=="string"?rg(n,e):e instanceof rd?e._internalPath:e._delegate._internalPath}/**
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
 */function D1(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new he(J.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class og{}class Au extends og{}function sg(n,e,...t){let i=[];e instanceof og&&i.push(e),i=i.concat(t),function(a){const u=a.filter(f=>f instanceof ag).length,d=a.filter(f=>f instanceof ad).length;if(u>1||u>0&&d>0)throw new he(J.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const s of i)n=s._apply(n);return n}class ad extends Au{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new ad(e,t,i)}_apply(e){const t=this._parse(e);return M1(e._query,t),new Vr(e.firestore,e.converter,Fp(e._query,t))}_parse(e){const t=id(e.firestore);return function(a,u,d,f,m,_,E){let T;if(m.isKeyField()){if(_==="array-contains"||_==="array-contains-any")throw new he(J.INVALID_ARGUMENT,`Invalid Query. You can't perform '${_}' queries on documentId().`);if(_==="in"||_==="not-in"){x0(E,_);const A=[];for(const b of E)A.push(P0(f,a,b));T={arrayValue:{values:A}}}else T=P0(f,a,E)}else _!=="in"&&_!=="not-in"&&_!=="array-contains-any"||x0(E,_),T=P1(d,u,E,_==="in"||_==="not-in");return zt.create(m,_,T)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function jN(n,e,t){const i=e,s=sd("where",n);return ad._create(s,i,t)}class ag extends og{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ag(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:Mr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,a){let u=s;const d=a.getFlattenedFilters();for(const f of d)M1(u,f),u=Fp(u,f)}(e._query,t),new Vr(e.firestore,e.converter,Fp(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class lg extends Au{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new lg(e,t)}_apply(e){const t=function(s,a,u){if(s.startAt!==null)throw new he(J.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new he(J.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ou(a,u)}(e._query,this._field,this._direction);return new Vr(e.firestore,e.converter,function(s,a){const u=s.explicitOrderBy.concat([a]);return new Oo(s.path,s.collectionGroup,u,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function ug(n,e="asc"){const t=e,i=sd("orderBy",n);return lg._create(i,t)}class cg extends Au{constructor(e,t,i){super(),this.type=e,this._limit=t,this._limitType=i}static _create(e,t,i){return new cg(e,t,i)}_apply(e){return new Vr(e.firestore,e.converter,Rh(e._query,this._limit,this._limitType))}}function O1(n){return cg._create("limit",n,"F")}class hg extends Au{constructor(e,t,i){super(),this.type=e,this._docOrFields=t,this._inclusive=i}static _create(e,t,i){return new hg(e,t,i)}_apply(e){const t=L1(e,this.type,this._docOrFields,this._inclusive);return new Vr(e.firestore,e.converter,function(s,a){return new Oo(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,a,s.endAt)}(e._query,t))}}function BN(...n){return hg._create("startAt",n,!0)}class dg extends Au{constructor(e,t,i){super(),this.type=e,this._docOrFields=t,this._inclusive=i}static _create(e,t,i){return new dg(e,t,i)}_apply(e){const t=L1(e,this.type,this._docOrFields,this._inclusive);return new Vr(e.firestore,e.converter,function(s,a){return new Oo(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,a)}(e._query,t))}}function zN(...n){return dg._create("endAt",n,!0)}function L1(n,e,t,i){if(t[0]=kt(t[0]),t[0]instanceof ig)return function(a,u,d,f,m){if(!f)throw new he(J.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${d}().`);const _=[];for(const E of Ia(a))if(E.field.isKeyField())_.push(Sh(u,f.key));else{const T=f.data.field(E.field);if(Wh(T))throw new he(J.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+E.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(T===null){const A=E.field.canonicalString();throw new he(J.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${A}' (used as the orderBy) does not exist.`)}_.push(T)}return new La(_,m)}(n._query,n.firestore._databaseId,e,t[0]._document,i);{const s=id(n.firestore);return function(u,d,f,m,_,E){const T=u.explicitOrderBy;if(_.length>T.length)throw new he(J.INVALID_ARGUMENT,`Too many arguments provided to ${m}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const A=[];for(let b=0;b<_.length;b++){const L=_[b];if(T[b].field.isKeyField()){if(typeof L!="string")throw new he(J.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${m}(), but got a ${typeof L}`);if(!Om(u)&&L.indexOf("/")!==-1)throw new he(J.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${m}() must be a plain document ID, but '${L}' contains a slash.`);const N=u.path.child(_t.fromString(L));if(!Se.isDocumentKey(N))throw new he(J.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${m}() must result in a valid document path, but '${N}' is not because it contains an odd number of segments.`);const K=new Se(N);A.push(Sh(d,K))}else{const N=P1(f,m,L);A.push(N)}}return new La(A,E)}(n._query,n.firestore._databaseId,s,e,t,i)}}function P0(n,e,t){if(typeof(t=kt(t))=="string"){if(t==="")throw new he(J.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Om(e)&&t.indexOf("/")!==-1)throw new he(J.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(_t.fromString(t));if(!Se.isDocumentKey(i))throw new he(J.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Sh(n,new Se(i))}if(t instanceof Bn)return Sh(n,t._key);throw new he(J.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ed(t)}.`)}function x0(n,e){if(!Array.isArray(n)||n.length===0)throw new he(J.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function M1(n,e){const t=function(s,a){for(const u of s)for(const d of u.getFlattenedFilters())if(a.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new he(J.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new he(J.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class $N{convertValue(e,t="none"){switch(Ts(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Vt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Es(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Le()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Cs(e,(s,a)=>{i[s]=this.convertValue(a,t)}),i}convertVectorValue(e){var t,i,s;const a=(s=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||s===void 0?void 0:s.map(u=>Vt(u.doubleValue));return new eg(a)}convertGeoPoint(e){return new Zm(Vt(e.latitude),Vt(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Pm(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(nu(e));default:return null}}convertTimestamp(e){const t=Po(e);return new Gt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=_t.fromString(e);ut(e1(i));const s=new ru(i.get(1),i.get(3)),a=new Se(i.popFirst(5));return s.isEqual(t)||Li(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
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
 */function qN(n,e,t){let i;return i=n?n.toFirestore(e):e,i}/**
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
 */class Fl{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class V1 extends ig{constructor(e,t,i,s,a,u){super(e,t,i,s,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ch(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(sd("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class ch extends V1{data(e={}){return super.data(e)}}class U1{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Fl(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new ch(this._firestore,this._userDataWriter,i.key,i,new Fl(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new he(J.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,a){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map(d=>{const f=new ch(s._firestore,s._userDataWriter,d.doc.key,d.doc,new Fl(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);return d.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}})}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(d=>a||d.type!==3).map(d=>{const f=new ch(s._firestore,s._userDataWriter,d.doc.key,d.doc,new Fl(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);let m=-1,_=-1;return d.type!==0&&(m=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),_=u.indexOf(d.doc.key)),{type:WN(d.type),doc:f,oldIndex:m,newIndex:_}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function WN(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Le()}}class fg extends $N{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ua(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Bn(this.firestore,null,t)}}function HN(n){n=ri(n,Vr);const e=ri(n.firestore,Is),t=Xm(e),i=new fg(e);return D1(n._query),CN(t,n._query).then(s=>new U1(e,i,n,s))}function F1(n,e,t,...i){n=ri(n,Bn);const s=ri(n.firestore,Is),a=id(s);let u;return u=typeof(e=kt(e))=="string"||e instanceof rd?VN(a,"updateDoc",n._key,e,t,i):MN(a,"updateDoc",n._key,e),pg(s,[u.toMutation(n._key,Lr.exists(!0))])}function KN(n){return pg(ri(n.firestore,Is),[new Mm(n._key,Lr.none())])}function GN(n,e){const t=ri(n.firestore,Is),i=Qp(n),s=qN(n.converter,e);return pg(t,[LN(id(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,Lr.exists(!1))]).then(()=>i)}function j1(n,...e){var t,i,s;n=kt(n);let a={includeMetadataChanges:!1,source:"default"},u=0;typeof e[u]!="object"||C0(e[u])||(a=e[u],u++);const d={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(C0(e[u])){const E=e[u];e[u]=(t=E.next)===null||t===void 0?void 0:t.bind(E),e[u+1]=(i=E.error)===null||i===void 0?void 0:i.bind(E),e[u+2]=(s=E.complete)===null||s===void 0?void 0:s.bind(E)}let f,m,_;if(n instanceof Bn)m=ri(n.firestore,Is),_=Dm(n._key.path),f={next:E=>{e[u]&&e[u](QN(m,n,E))},error:e[u+1],complete:e[u+2]};else{const E=ri(n,Vr);m=ri(E.firestore,Is),_=E._query;const T=new fg(m);f={next:A=>{e[u]&&e[u](new U1(m,T,E,A))},error:e[u+1],complete:e[u+2]},D1(n._query)}return function(T,A,b,L){const N=new T1(L),K=new f1(A,N,b);return T.asyncQueue.enqueueAndForget(async()=>h1(await Gp(T),K)),()=>{N.Za(),T.asyncQueue.enqueueAndForget(async()=>d1(await Gp(T),K))}}(Xm(m),_,d,f)}function pg(n,e){return function(i,s){const a=new Ro;return i.asyncQueue.enqueueAndForget(async()=>yN(await kN(i),s,a)),a.promise}(Xm(n),e)}function QN(n,e,t){const i=t.docs.get(e._key),s=new fg(n);return new V1(n,s,e._key,i,new Fl(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){qa=s})(ks),ys(new ko("firestore",(i,{instanceIdentifier:s,options:a})=>{const u=i.getProvider("app").getImmediate(),d=new Is(new YP(i.getProvider("auth-internal")),new ex(i.getProvider("app-check-internal")),function(m,_){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new he(J.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ru(m.options.projectId,_)}(u,s),u);return a=Object.assign({useFetchStreams:t},a),d._setSettings(a),d},"PUBLIC").setMultipleInstances(!0)),Zr(Hv,"4.7.3",e),Zr(Hv,"4.7.3","esm2017")})();/**
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
 */const B1="firebasestorage.googleapis.com",z1="storageBucket",YN=2*60*1e3,XN=10*60*1e3;/**
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
 */class Ot extends yr{constructor(e,t,i=0){super(ap(e),`Firebase Storage: ${t} (${ap(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ot.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ap(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Dt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Dt||(Dt={}));function ap(n){return"storage/"+n}function mg(){const n="An unknown error occurred, please check the error payload for server response.";return new Ot(Dt.UNKNOWN,n)}function JN(n){return new Ot(Dt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function ZN(n){return new Ot(Dt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function eD(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ot(Dt.UNAUTHENTICATED,n)}function tD(){return new Ot(Dt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function nD(n){return new Ot(Dt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function rD(){return new Ot(Dt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function iD(){return new Ot(Dt.CANCELED,"User canceled the upload/download.")}function oD(n){return new Ot(Dt.INVALID_URL,"Invalid URL '"+n+"'.")}function sD(n){return new Ot(Dt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function aD(){return new Ot(Dt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+z1+"' property when initializing the app?")}function lD(){return new Ot(Dt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function uD(){return new Ot(Dt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function cD(n){return new Ot(Dt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Xp(n){return new Ot(Dt.INVALID_ARGUMENT,n)}function $1(){return new Ot(Dt.APP_DELETED,"The Firebase app was deleted.")}function hD(n){return new Ot(Dt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Hl(n,e){return new Ot(Dt.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Nl(n){throw new Ot(Dt.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class er{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=er.makeFromUrl(e,t)}catch{return new er(e,"")}if(i.path==="")return i;throw sD(e)}static makeFromUrl(e,t){let i=null;const s="([A-Za-z0-9.\\-_]+)";function a(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const u="(/(.*))?$",d=new RegExp("^gs://"+s+u,"i"),f={bucket:1,path:3};function m(x){x.path_=decodeURIComponent(x.path)}const _="v[A-Za-z0-9_]+",E=t.replace(/[.]/g,"\\."),T="(/([^?#]*).*)?$",A=new RegExp(`^https?://${E}/${_}/b/${s}/o${T}`,"i"),b={bucket:1,path:3},L=t===B1?"(?:storage.googleapis.com|storage.cloud.google.com)":t,N="([^?#]*)",K=new RegExp(`^https?://${L}/${s}/${N}`,"i"),q=[{regex:d,indices:f,postModify:a},{regex:A,indices:b,postModify:m},{regex:K,indices:{bucket:1,path:2},postModify:m}];for(let x=0;x<q.length;x++){const ee=q[x],oe=ee.regex.exec(e);if(oe){const R=oe[ee.indices.bucket];let S=oe[ee.indices.path];S||(S=""),i=new er(R,S),ee.postModify(i);break}}if(i==null)throw oD(e);return i}}class dD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function fD(n,e,t){let i=1,s=null,a=null,u=!1,d=0;function f(){return d===2}let m=!1;function _(...N){m||(m=!0,e.apply(null,N))}function E(N){s=setTimeout(()=>{s=null,n(A,f())},N)}function T(){a&&clearTimeout(a)}function A(N,...K){if(m){T();return}if(N){T(),_.call(null,N,...K);return}if(f()||u){T(),_.call(null,N,...K);return}i<64&&(i*=2);let q;d===1?(d=2,q=0):q=(i+Math.random())*1e3,E(q)}let b=!1;function L(N){b||(b=!0,T(),!m&&(s!==null?(N||(d=2),clearTimeout(s),E(0)):N||(d=1)))}return E(0),a=setTimeout(()=>{u=!0,L(!0)},t),L}function pD(n){n(!1)}/**
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
 */function mD(n){return n!==void 0}function gD(n){return typeof n=="object"&&!Array.isArray(n)}function gg(n){return typeof n=="string"||n instanceof String}function b0(n){return yg()&&n instanceof Blob}function yg(){return typeof Blob<"u"}function N0(n,e,t,i){if(i<e)throw Xp(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw Xp(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function ld(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function q1(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const s=e(i)+"="+e(n[i]);t=t+s+"&"}return t=t.slice(0,-1),t}var fs;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(fs||(fs={}));/**
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
 */function yD(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,a=e.indexOf(n)!==-1;return t||s||a}/**
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
 */class _D{constructor(e,t,i,s,a,u,d,f,m,_,E,T=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=s,this.successCodes_=a,this.additionalRetryCodes_=u,this.callback_=d,this.errorCallback_=f,this.timeout_=m,this.progressCallback_=_,this.connectionFactory_=E,this.retry=T,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((A,b)=>{this.resolve_=A,this.reject_=b,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Qc(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const u=d=>{const f=d.loaded,m=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(f,m)};this.progressCallback_!==null&&a.addUploadProgressListener(u),a.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(u),this.pendingConnection_=null;const d=a.getErrorCode()===fs.NO_ERROR,f=a.getStatus();if(!d||yD(f,this.additionalRetryCodes_)&&this.retry){const _=a.getErrorCode()===fs.ABORT;i(!1,new Qc(!1,null,_));return}const m=this.successCodes_.indexOf(f)!==-1;i(!0,new Qc(m,a))})},t=(i,s)=>{const a=this.resolve_,u=this.reject_,d=s.connection;if(s.wasSuccessCode)try{const f=this.callback_(d,d.getResponse());mD(f)?a(f):a()}catch(f){u(f)}else if(d!==null){const f=mg();f.serverResponse=d.getErrorText(),this.errorCallback_?u(this.errorCallback_(d,f)):u(f)}else if(s.canceled){const f=this.appDelete_?$1():iD();u(f)}else{const f=rD();u(f)}};this.canceled_?t(!1,new Qc(!1,null,!0)):this.backoffId_=fD(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&pD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Qc{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function vD(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function wD(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ED(n,e){e&&(n["X-Firebase-GMPID"]=e)}function TD(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function ID(n,e,t,i,s,a,u=!0){const d=q1(n.urlParams),f=n.url+d,m=Object.assign({},n.headers);return ED(m,e),vD(m,t),wD(m,a),TD(m,i),new _D(f,n.method,m,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,u)}/**
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
 */function SD(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function RD(...n){const e=SD();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(yg())return new Blob(n);throw new Ot(Dt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function AD(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function kD(n){if(typeof atob>"u")throw cD("base-64");return atob(n)}/**
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
 */const Jr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class lp{constructor(e,t){this.data=e,this.contentType=t||null}}function CD(n,e){switch(n){case Jr.RAW:return new lp(W1(e));case Jr.BASE64:case Jr.BASE64URL:return new lp(H1(n,e));case Jr.DATA_URL:return new lp(xD(e),bD(e))}throw mg()}function W1(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const a=i,u=n.charCodeAt(++t);i=65536|(a&1023)<<10|u&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function PD(n){let e;try{e=decodeURIComponent(n)}catch{throw Hl(Jr.DATA_URL,"Malformed data URL.")}return W1(e)}function H1(n,e){switch(n){case Jr.BASE64:{const s=e.indexOf("-")!==-1,a=e.indexOf("_")!==-1;if(s||a)throw Hl(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Jr.BASE64URL:{const s=e.indexOf("+")!==-1,a=e.indexOf("/")!==-1;if(s||a)throw Hl(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=kD(e)}catch(s){throw s.message.includes("polyfill")?s:Hl(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}class K1{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Hl(Jr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=ND(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function xD(n){const e=new K1(n);return e.base64?H1(Jr.BASE64,e.rest):PD(e.rest)}function bD(n){return new K1(n).contentType}function ND(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class vo{constructor(e,t){let i=0,s="";b0(e)?(this.data_=e,i=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(b0(this.data_)){const i=this.data_,s=AD(i,e,t);return s===null?null:new vo(s)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new vo(i,!0)}}static getBlob(...e){if(yg()){const t=e.map(i=>i instanceof vo?i.data_:i);return new vo(RD.apply(null,t))}else{const t=e.map(u=>gg(u)?CD(Jr.RAW,u).data:u.data_);let i=0;t.forEach(u=>{i+=u.byteLength});const s=new Uint8Array(i);let a=0;return t.forEach(u=>{for(let d=0;d<u.length;d++)s[a++]=u[d]}),new vo(s,!0)}}uploadData(){return this.data_}}/**
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
 */function G1(n){let e;try{e=JSON.parse(n)}catch{return null}return gD(e)?e:null}/**
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
 */function DD(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function OD(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function Q1(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function LD(n,e){return e}class xn{constructor(e,t,i,s){this.server=e,this.local=t||e,this.writable=!!i,this.xform=s||LD}}let Yc=null;function MD(n){return!gg(n)||n.length<2?n:Q1(n)}function Y1(){if(Yc)return Yc;const n=[];n.push(new xn("bucket")),n.push(new xn("generation")),n.push(new xn("metageneration")),n.push(new xn("name","fullPath",!0));function e(a,u){return MD(u)}const t=new xn("name");t.xform=e,n.push(t);function i(a,u){return u!==void 0?Number(u):u}const s=new xn("size");return s.xform=i,n.push(s),n.push(new xn("timeCreated")),n.push(new xn("updated")),n.push(new xn("md5Hash",null,!0)),n.push(new xn("cacheControl",null,!0)),n.push(new xn("contentDisposition",null,!0)),n.push(new xn("contentEncoding",null,!0)),n.push(new xn("contentLanguage",null,!0)),n.push(new xn("contentType",null,!0)),n.push(new xn("metadata","customMetadata",!0)),Yc=n,Yc}function VD(n,e){function t(){const i=n.bucket,s=n.fullPath,a=new er(i,s);return e._makeStorageReference(a)}Object.defineProperty(n,"ref",{get:t})}function UD(n,e,t){const i={};i.type="file";const s=t.length;for(let a=0;a<s;a++){const u=t[a];i[u.local]=u.xform(i,e[u.server])}return VD(i,n),i}function X1(n,e,t){const i=G1(e);return i===null?null:UD(n,i,t)}function FD(n,e,t,i){const s=G1(e);if(s===null||!gg(s.downloadTokens))return null;const a=s.downloadTokens;if(a.length===0)return null;const u=encodeURIComponent;return a.split(",").map(m=>{const _=n.bucket,E=n.fullPath,T="/b/"+u(_)+"/o/"+u(E),A=ld(T,t,i),b=q1({alt:"media",token:m});return A+b})[0]}function jD(n,e){const t={},i=e.length;for(let s=0;s<i;s++){const a=e[s];a.writable&&(t[a.server]=n[a.local])}return JSON.stringify(t)}class _g{constructor(e,t,i,s){this.url=e,this.method=t,this.handler=i,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function J1(n){if(!n)throw mg()}function BD(n,e){function t(i,s){const a=X1(n,s,e);return J1(a!==null),a}return t}function zD(n,e){function t(i,s){const a=X1(n,s,e);return J1(a!==null),FD(a,s,n.host,n._protocol)}return t}function Z1(n){function e(t,i){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=tD():s=eD():t.getStatus()===402?s=ZN(n.bucket):t.getStatus()===403?s=nD(n.path):s=i,s.status=t.getStatus(),s.serverResponse=i.serverResponse,s}return e}function eT(n){const e=Z1(n);function t(i,s){let a=e(i,s);return i.getStatus()===404&&(a=JN(n.path)),a.serverResponse=s.serverResponse,a}return t}function $D(n,e,t){const i=e.fullServerUrl(),s=ld(i,n.host,n._protocol),a="GET",u=n.maxOperationRetryTime,d=new _g(s,a,zD(n,t),u);return d.errorHandler=eT(e),d}function qD(n,e){const t=e.fullServerUrl(),i=ld(t,n.host,n._protocol),s="DELETE",a=n.maxOperationRetryTime;function u(f,m){}const d=new _g(i,s,u,a);return d.successCodes=[200,204],d.errorHandler=eT(e),d}function WD(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function HD(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=WD(null,e)),i}function KD(n,e,t,i,s){const a=e.bucketOnlyServerUrl(),u={"X-Goog-Upload-Protocol":"multipart"};function d(){let q="";for(let x=0;x<2;x++)q=q+Math.random().toString().slice(2);return q}const f=d();u["Content-Type"]="multipart/related; boundary="+f;const m=HD(e,i,s),_=jD(m,t),E="--"+f+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+_+`\r
--`+f+`\r
Content-Type: `+m.contentType+`\r
\r
`,T=`\r
--`+f+"--",A=vo.getBlob(E,i,T);if(A===null)throw lD();const b={name:m.fullPath},L=ld(a,n.host,n._protocol),N="POST",K=n.maxUploadRetryTime,j=new _g(L,N,BD(n,t),K);return j.urlParams=b,j.headers=u,j.body=A.uploadData(),j.errorHandler=Z1(e),j}class GD{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=fs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=fs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=fs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,s){if(this.sent_)throw Nl("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const a in s)s.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,s[a].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Nl("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Nl("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Nl("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Nl("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class QD extends GD{initXhr(){this.xhr_.responseType="text"}}function vg(){return new QD}/**
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
 */class Ss{constructor(e,t){this._service=e,t instanceof er?this._location=t:this._location=er.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ss(e,t)}get root(){const e=new er(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Q1(this._location.path)}get storage(){return this._service}get parent(){const e=DD(this._location.path);if(e===null)return null;const t=new er(this._location.bucket,e);return new Ss(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw hD(e)}}function YD(n,e,t){n._throwIfRoot("uploadBytes");const i=KD(n.storage,n._location,Y1(),new vo(e,!0),t);return n.storage.makeRequestWithTokens(i,vg).then(s=>({metadata:s,ref:n}))}function XD(n){n._throwIfRoot("getDownloadURL");const e=$D(n.storage,n._location,Y1());return n.storage.makeRequestWithTokens(e,vg).then(t=>{if(t===null)throw uD();return t})}function JD(n){n._throwIfRoot("deleteObject");const e=qD(n.storage,n._location);return n.storage.makeRequestWithTokens(e,vg)}function ZD(n,e){const t=OD(n._location.path,e),i=new er(n._location.bucket,t);return new Ss(n.storage,i)}/**
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
 */function eO(n){return/^[A-Za-z]+:\/\//.test(n)}function tO(n,e){return new Ss(n,e)}function tT(n,e){if(n instanceof wg){const t=n;if(t._bucket==null)throw aD();const i=new Ss(t,t._bucket);return e!=null?tT(i,e):i}else return e!==void 0?ZD(n,e):n}function nO(n,e){if(e&&eO(e)){if(n instanceof wg)return tO(n,e);throw Xp("To use ref(service, url), the first argument must be a Storage instance.")}else return tT(n,e)}function D0(n,e){const t=e==null?void 0:e[z1];return t==null?null:er.makeFromBucketSpec(t,n)}function rO(n,e,t,i={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=i;s&&(n._overrideAuthToken=typeof s=="string"?s:xw(s,n.app.options.projectId))}class wg{constructor(e,t,i,s,a){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=s,this._firebaseVersion=a,this._bucket=null,this._host=B1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=YN,this._maxUploadRetryTime=XN,this._requests=new Set,s!=null?this._bucket=er.makeFromBucketSpec(s,this._host):this._bucket=D0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=er.makeFromBucketSpec(this._url,e):this._bucket=D0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){N0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){N0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ss(this,e)}_makeRequest(e,t,i,s,a=!0){if(this._deleted)return new dD($1());{const u=ID(e,this._appId,i,s,t,this._firebaseVersion,a);return this._requests.add(u),u.getPromise().then(()=>this._requests.delete(u),()=>this._requests.delete(u)),u}}async makeRequestWithTokens(e,t){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,s).getPromise()}}const O0="@firebase/storage",L0="0.13.2";/**
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
 */const nT="storage";function rT(n,e,t){return n=kt(n),YD(n,e,t)}function iT(n){return n=kt(n),XD(n)}function iO(n){return n=kt(n),JD(n)}function Eg(n,e){return n=kt(n),nO(n,e)}function oO(n=gm(),e){n=kt(n);const i=jh(n,nT).getImmediate({identifier:e}),s=kw("storage");return s&&sO(i,...s),i}function sO(n,e,t,i={}){rO(n,e,t,i)}function aO(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new wg(t,i,s,e,ks)}function lO(){ys(new ko(nT,aO,"PUBLIC").setMultipleInstances(!0)),Zr(O0,L0,""),Zr(O0,L0,"esm2017")}lO();const uO={apiKey:"AIzaSyC6w9GYopJMLy_f22DGhW7zzD68pV7vwzM",authDomain:"tweetdock-96171.firebaseapp.com",projectId:"tweetdock-96171",storageBucket:"tweetdock-96171.firebasestorage.app",messagingSenderId:"534020399506",appId:"1:534020399506:web:ccd61d3120a57f681aa14b"},Tg=Dw(uO),oi=HP(Tg),lu=A1(Tg),Ig=oO(Tg),cO=xe.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    padding: 20px;
    margin-bottom: 10px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    background-color: #00aaff;
`,M0=xe.div`
    &:last-child {
        place-self: end;
    }
`,hO=xe.img`
    width: 100px;
    height: 100px;
    border-radius: 15px;
`,dO=xe.span`
    font-weight: 600;
    font-size: 16px;
`,fO=xe.p`
    margin: 6px 0px;
    font-size: 16px;
`,pO=xe.div`
    margin: 6px 0px;
    font-size: 16px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    padding: 6px;
    min-height: 20px;
    background-color: white;
    color: black;
    &:focus {
        outline: 2px solid #ffe863;
    }
`,mO=xe.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
`,Xc=xe.button`
    background-color: #ffe863;
    color: gray;
    font-weight: 300;
    border: 0;
    font-size: 12px;
    padding: 5px 10px;
    text-transform: uppercase;
    border-radius: 5px;
    cursor: pointer;
`;function Sg({username:n,photo:e,tweet:t,userId:i,id:s}){const a=oi.currentUser,[u,d]=Y.useState(!1),[f,m]=Y.useState(t),_=async()=>{if(!(!confirm("Are you sure you want to delete this tweet?")||(a==null?void 0:a.uid)!==i))try{if(await KN(Qp(lu,"tweets",s)),e){const A=Eg(Ig,`tweets/${a.uid}/${s}`);await iO(A)}}catch(A){console.log(A)}},E=async()=>{if(f.trim()==="")return alert("Tweet cannot be empty!");try{await F1(Qp(lu,"tweets",s),{tweet:f}),d(!1)}catch(T){console.log(T)}};return Z.jsxs(cO,{children:[Z.jsxs(M0,{children:[Z.jsx(dO,{children:n}),u?Z.jsx(pO,{contentEditable:!0,suppressContentEditableWarning:!0,onInput:T=>m(T.currentTarget.textContent||""),children:f}):Z.jsx(fO,{children:t}),Z.jsx(mO,{children:(a==null?void 0:a.uid)===i&&Z.jsxs(Z.Fragment,{children:[u?Z.jsx(Xc,{onClick:()=>d(!1),children:"Cancel"}):Z.jsx(Xc,{onClick:()=>d(!0),children:"Edit"}),u&&Z.jsx(Xc,{onClick:E,children:"Save"}),Z.jsx(Xc,{onClick:_,children:"Delete"})]})})]}),Z.jsx(M0,{children:e?Z.jsx(hO,{src:e}):null})]})}const gO=xe.div`
    display: flex;
    flex-direction: column;
    background-color: whitesmoke;
    padding: 10px;
    border-radius: 10px;
    gap: 10px;
    min-width: 250px;
    max-width: 300px;
`,yO=xe.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`,_O=xe.div`
    font-weight: bold;
    margin-bottom: 10px;
`,vO=xe.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    color: #666;
    padding: 4px 8px;
    border-radius: 50%;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        color: #ff6b6b;
    }
`,wO=({tweets:n,hasSearched:e=!1,searchQuery:t,onDelete:i})=>Z.jsxs(gO,{children:[Z.jsxs(yO,{children:[t&&Z.jsxs(_O,{children:['"',t,'" 검색 결과']}),Z.jsx(vO,{onClick:i,children:"✕"})]}),n.length>0?n.map(s=>Z.jsx(Sg,{...s},s.id)):e&&Z.jsx("div",{children:"검색 결과가 없습니다."})]}),EO=xe.div`
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 4fr 3fr;
    height: 100%;
    padding: 80px 0px;
    width: 100%;
    max-width: 1200px;
    position: relative;
`,TO=xe.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`,up=xe.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid white;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    svg {
        width: 32px;
        fill: white;
    }
    &:hover {
        border-color: #ffe863;
        svg {
            fill: #ffe863;
        }
    }
`,IO=xe.div`
    position: absolute;
    top: 24px;
    right: 2px;
    display: flex;
    align-items: center;
    gap: 10px;
`,SO=xe.div`
    display: flex;
    flex-direction: row; // 가로 방향 정렬
    gap: 15px; // 검색 결과들 사이의 간격
    overflow-x: auto; // 가로 스크롤 허용
    padding: 10px; // 여백 추가
`,RO=xe.input`
    padding: 8px;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid #ddd;
    outline: none;
    width: 240px;
    opacity: ${n=>n.disabled?.5:1};
    cursor: ${n=>n.disabled?"not-allowed":"text"};
`,AO=xe.div`
    cursor: pointer;
    border: 3px solid white;
    height: 36px;
    width: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        width: 32px;
        fill: white;
    }
    ${n=>!n.disabled&&`
    &:hover {
        border-color: #ffe863;
        svg {
            fill: #ffe863;
        }
    `}
    cursor: ${n=>n.disabled?"not-allowed":"pointer"};
    border: 3px solid ${n=>n.disabled?"#ccc":"white"};
    opacity: ${n=>n.disabled?.5:1};
`;function kO(){const n=As(),[e,t]=Y.useState(""),[i,s]=Y.useState([]),a=i.length>=3,u=async T=>{const A=A1(),b=nd(A,"tweets"),L=sg(b,ug("tweet"),BN(T),zN(T+"")),K=(await HN(L)).docs.map(j=>({id:j.id,tweet:j.data().tweet,userId:j.data().userId,username:j.data().username,photo:j.data().photo,createdAt:j.data().createdAt}));s(j=>{const q={query:T,tweets:K,hasSearched:!0};return j.length>=3?[...j.slice(1),q]:[...j,q]}),t("")},d=T=>{t(T.target.value)},f=()=>{e.length>0&&!a&&u(e)},m=T=>{T.key==="Enter"&&e.length>0&&!a&&u(e)},_=async()=>{confirm("로그아웃하시겠습니까?")&&(await oi.signOut(),n("/login"))},E=T=>{s(A=>A.filter((b,L)=>L!==T))};return Z.jsxs(EO,{children:[Z.jsxs(TO,{children:[Z.jsx(hh,{to:"/",children:Z.jsx(up,{children:Z.jsxs("svg",{width:"100",height:"100",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[Z.jsx("path",{d:"M10 70 Q50 100 90 70 Z"}),Z.jsx("rect",{x:"48",y:"20",width:"4",height:"50"}),Z.jsx("path",{d:"M50 10 L20 50 L50 50 Z"}),Z.jsx("path",{d:"M50 10 L50 50 L80 50 Z"})]})})}),Z.jsx(hh,{to:"/profile",children:Z.jsx(up,{children:Z.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:Z.jsx("path",{d:"M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"})})})}),Z.jsx(up,{onClick:_,className:"log-out",children:Z.jsxs("svg",{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[Z.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"}),Z.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 00-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z"})]})})]}),Z.jsxs(IO,{children:[Z.jsx(RO,{type:"text",placeholder:a?"최대 타임라인 수에 도달했습니다.":"검색",value:e,onChange:d,onKeyDown:m,disabled:a}),Z.jsxs(AO,{onClick:f,disabled:a,children:[" ",Z.jsxs("svg",{width:"100",height:"100",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[Z.jsx("circle",{cx:"40",cy:"40",r:"24"}),Z.jsx("rect",{x:"60",y:"50",width:"26",height:"10",transform:"rotate(45 50 50)"})]})]})]}),Z.jsx(qS,{}),Z.jsx(SO,{children:i.map((T,A)=>Z.jsx(wO,{tweets:T.tweets,hasSearched:T.hasSearched,searchQuery:T.query,onDelete:()=>E(A)},T.query+A))})]})}const CO=xe.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,PO=xe.textarea`
    border: 3px solid white;
    padding: 20px;
    border-radius: 20px;
    font-size: 16px;
    color: black;
    background-color: white;
    width: 100%;
    resize: none;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
    &::placeholder {
        opacity: 0.6;
        font-size: 16px;
    }
    &:focus {
        outline: none;
        border-color: #ffe863;
    }
`,xO=xe.label`
    padding: 10px 0px;
    color: #ffe863;
    text-align: center;
    border-radius: 20px;
    border: 1px solid #ffe863;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    &:hover,
    &:active {
        opacity: 0.8;
    }
`,bO=xe.input`
    display: none;
`,NO=xe.input`
    background-color: #ffe863;
    color: #1d9bf0;
    border: none;
    padding: 10px 0px;
    border-radius: 20px;
    font-size: 16px;
    cursor: pointer;
    &:hover,
    &:active {
        opacity: 0.8;
    }
`;function DO(){const[n,e]=Y.useState(!1),[t,i]=Y.useState(""),[s,a]=Y.useState(null),u=m=>{i(m.target.value)},d=m=>{const{files:_}=m.target;if(_&&_.length===1){const E=_[0];if(!["image/jpeg","image/png","image/gif"].includes(E.type)){alert("Only JPG, PNG, and GIF files are allowed.");return}const A=10*1024*1024;if(E.size>A){alert("File size must be less than 10MB.");return}a(E)}},f=async m=>{m.preventDefault();const _=oi.currentUser;if(!(!_||n||t===""||t.length>180))try{e(!0);const E=await GN(nd(lu,"tweets"),{tweet:t,createdAt:Date.now(),username:_.displayName||"Anonymous",userId:_.uid,photo:null});if(s){const T=Eg(Ig,`tweets/${_.uid}/${E.id}`),A=await rT(T,s),b=await iT(A.ref);await F1(E,{photo:b})}i(""),a(null)}catch(E){console.log(E)}finally{e(!1)}};return Z.jsxs(CO,{onSubmit:f,children:[Z.jsx(PO,{required:!0,rows:5,maxLength:140,onChange:u,value:t,placeholder:"What is happening?!"}),Z.jsx(xO,{htmlFor:"file",children:s?"사진 추가됨 ✅":"사진 추가"}),Z.jsx(bO,{onChange:d,type:"file",id:"file",accept:"image/*"}),Z.jsx(NO,{type:"submit",value:n?"작성중...":"작성 완료"})]})}const OO=xe.div`
    display: flex;
    background-color: whitesmoke;
    padding: 10px;
    margin-bottom: 50px;
    border-radius: 10px;
    gap: 10px;
    flex-direction: column;
`;function LO(){const[n,e]=Y.useState([]);return Y.useEffect(()=>{let t=null;return(async()=>{const s=sg(nd(lu,"tweets"),ug("createdAt","desc"),O1(10));t=await j1(s,a=>{const u=a.docs.map(d=>{const{tweet:f,createdAt:m,userId:_,username:E,photo:T}=d.data();return{tweet:f,createdAt:m,userId:_,username:E,photo:T,id:d.id}});e(u)})})(),()=>{t&&t()}},[]),Z.jsx(OO,{children:n.map(t=>Z.jsx(Sg,{...t},t.id))})}const MO=xe.div`
    display: grid;
    gap: 50px;
    grid-template-rows: 1fr 5fr;
`;function VO(){return Z.jsxs(MO,{children:[Z.jsx(DO,{}),Z.jsx(LO,{})]})}function oT(n){var e,t,i="";if(typeof n=="string"||typeof n=="number")i+=n;else if(typeof n=="object")if(Array.isArray(n)){var s=n.length;for(e=0;e<s;e++)n[e]&&(t=oT(n[e]))&&(i&&(i+=" "),i+=t)}else for(t in n)n[t]&&(i&&(i+=" "),i+=t);return i}function ps(){for(var n,e,t=0,i="",s=arguments.length;t<s;t++)(n=arguments[t])&&(e=oT(n))&&(i&&(i+=" "),i+=e);return i}function UO(n){if(typeof document>"u")return;let e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t),t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n))}UO(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{margin-bottom:0;border-radius:0}}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var ku=n=>typeof n=="number"&&!isNaN(n),Rs=n=>typeof n=="string",Vi=n=>typeof n=="function",FO=n=>Rs(n)||ku(n),Jp=n=>Rs(n)||Vi(n)?n:null,jO=(n,e)=>n===!1||ku(n)&&n>0?n:e,Zp=n=>Y.isValidElement(n)||Rs(n)||Vi(n)||ku(n);function BO(n,e,t=300){let{scrollHeight:i,style:s}=n;requestAnimationFrame(()=>{s.minHeight="initial",s.height=i+"px",s.transition=`all ${t}ms`,requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(e,t)})})}function zO({enter:n,exit:e,appendPosition:t=!1,collapse:i=!0,collapseDuration:s=300}){return function({children:a,position:u,preventExitTransition:d,done:f,nodeRef:m,isIn:_,playToast:E}){let T=t?`${n}--${u}`:n,A=t?`${e}--${u}`:e,b=Y.useRef(0);return Y.useLayoutEffect(()=>{let L=m.current,N=T.split(" "),K=j=>{j.target===m.current&&(E(),L.removeEventListener("animationend",K),L.removeEventListener("animationcancel",K),b.current===0&&j.type!=="animationcancel"&&L.classList.remove(...N))};L.classList.add(...N),L.addEventListener("animationend",K),L.addEventListener("animationcancel",K)},[]),Y.useEffect(()=>{let L=m.current,N=()=>{L.removeEventListener("animationend",N),i?BO(L,f,s):f()};_||(d?N():(b.current=1,L.className+=` ${A}`,L.addEventListener("animationend",N)))},[_]),We.createElement(We.Fragment,null,a)}}function V0(n,e){return{content:sT(n.content,n.props),containerId:n.props.containerId,id:n.props.toastId,theme:n.props.theme,type:n.props.type,data:n.props.data||{},isLoading:n.props.isLoading,icon:n.props.icon,reason:n.removalReason,status:e}}function sT(n,e,t=!1){return Y.isValidElement(n)&&!Rs(n.type)?Y.cloneElement(n,{closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:t}):Vi(n)?n({closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:t}):n}function $O({closeToast:n,theme:e,ariaLabel:t="close"}){return We.createElement("button",{className:`Toastify__close-button Toastify__close-button--${e}`,type:"button",onClick:i=>{i.stopPropagation(),n(!0)},"aria-label":t},We.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},We.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function qO({delay:n,isRunning:e,closeToast:t,type:i="default",hide:s,className:a,controlledProgress:u,progress:d,rtl:f,isIn:m,theme:_}){let E=s||u&&d===0,T={animationDuration:`${n}ms`,animationPlayState:e?"running":"paused"};u&&(T.transform=`scaleX(${d})`);let A=ps("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${_}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":f}),b=Vi(a)?a({rtl:f,type:i,defaultClassName:A}):ps(A,a),L={[u&&d>=1?"onTransitionEnd":"onAnimationEnd"]:u&&d<1?null:()=>{m&&t()}};return We.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":E},We.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${_} Toastify__progress-bar--${i}`}),We.createElement("div",{role:"progressbar","aria-hidden":E?"true":"false","aria-label":"notification timer",className:b,style:T,...L}))}var WO=1,aT=()=>`${WO++}`;function HO(n,e,t){let i=1,s=0,a=[],u=[],d=e,f=new Map,m=new Set,_=j=>(m.add(j),()=>m.delete(j)),E=()=>{u=Array.from(f.values()),m.forEach(j=>j())},T=({containerId:j,toastId:q,updateId:x})=>{let ee=j?j!==n:n!==1,oe=f.has(q)&&x==null;return ee||oe},A=(j,q)=>{f.forEach(x=>{var ee;(q==null||q===x.props.toastId)&&((ee=x.toggle)==null||ee.call(x,j))})},b=j=>{var q,x;(x=(q=j.props)==null?void 0:q.onClose)==null||x.call(q,j.removalReason),j.isActive=!1},L=j=>{if(j==null)f.forEach(b);else{let q=f.get(j);q&&b(q)}E()},N=()=>{s-=a.length,a=[]},K=j=>{var q,x;let{toastId:ee,updateId:oe}=j.props,R=oe==null;j.staleId&&f.delete(j.staleId),j.isActive=!0,f.set(ee,j),E(),t(V0(j,R?"added":"updated")),R&&((x=(q=j.props).onOpen)==null||x.call(q))};return{id:n,props:d,observe:_,toggle:A,removeToast:L,toasts:f,clearQueue:N,buildToast:(j,q)=>{if(T(q))return;let{toastId:x,updateId:ee,data:oe,staleId:R,delay:S}=q,k=ee==null;k&&s++;let D={...d,style:d.toastStyle,key:i++,...Object.fromEntries(Object.entries(q).filter(([V,P])=>P!=null)),toastId:x,updateId:ee,data:oe,isIn:!1,className:Jp(q.className||d.toastClassName),progressClassName:Jp(q.progressClassName||d.progressClassName),autoClose:q.isLoading?!1:jO(q.autoClose,d.autoClose),closeToast(V){f.get(x).removalReason=V,L(x)},deleteToast(){let V=f.get(x);if(V!=null){if(t(V0(V,"removed")),f.delete(x),s--,s<0&&(s=0),a.length>0){K(a.shift());return}E()}}};D.closeButton=d.closeButton,q.closeButton===!1||Zp(q.closeButton)?D.closeButton=q.closeButton:q.closeButton===!0&&(D.closeButton=Zp(d.closeButton)?d.closeButton:!0);let M={content:j,props:D,staleId:R};d.limit&&d.limit>0&&s>d.limit&&k?a.push(M):ku(S)?setTimeout(()=>{K(M)},S):K(M)},setProps(j){d=j},setToggle:(j,q)=>{let x=f.get(j);x&&(x.toggle=q)},isToastActive:j=>{var q;return(q=f.get(j))==null?void 0:q.isActive},getSnapshot:()=>u}}var bn=new Map,uu=[],em=new Set,KO=n=>em.forEach(e=>e(n)),lT=()=>bn.size>0;function GO(){uu.forEach(n=>cT(n.content,n.options)),uu=[]}var QO=(n,{containerId:e})=>{var t;return(t=bn.get(e||1))==null?void 0:t.toasts.get(n)};function uT(n,e){var t;if(e)return!!((t=bn.get(e))!=null&&t.isToastActive(n));let i=!1;return bn.forEach(s=>{s.isToastActive(n)&&(i=!0)}),i}function YO(n){if(!lT()){uu=uu.filter(e=>n!=null&&e.options.toastId!==n);return}if(n==null||FO(n))bn.forEach(e=>{e.removeToast(n)});else if(n&&("containerId"in n||"id"in n)){let e=bn.get(n.containerId);e?e.removeToast(n.id):bn.forEach(t=>{t.removeToast(n.id)})}}var XO=(n={})=>{bn.forEach(e=>{e.props.limit&&(!n.containerId||e.id===n.containerId)&&e.clearQueue()})};function cT(n,e){Zp(n)&&(lT()||uu.push({content:n,options:e}),bn.forEach(t=>{t.buildToast(n,e)}))}function JO(n){var e;(e=bn.get(n.containerId||1))==null||e.setToggle(n.id,n.fn)}function hT(n,e){bn.forEach(t=>{(e==null||!(e!=null&&e.containerId)||(e==null?void 0:e.containerId)===t.id)&&t.toggle(n,e==null?void 0:e.id)})}function ZO(n){let e=n.containerId||1;return{subscribe(t){let i=HO(e,n,KO);bn.set(e,i);let s=i.observe(t);return GO(),()=>{s(),bn.delete(e)}},setProps(t){var i;(i=bn.get(e))==null||i.setProps(t)},getSnapshot(){var t;return(t=bn.get(e))==null?void 0:t.getSnapshot()}}}function eL(n){return em.add(n),()=>{em.delete(n)}}function tL(n){return n&&(Rs(n.toastId)||ku(n.toastId))?n.toastId:aT()}function Cu(n,e){return cT(n,e),e.toastId}function ud(n,e){return{...e,type:e&&e.type||n,toastId:tL(e)}}function cd(n){return(e,t)=>Cu(e,ud(n,t))}function ht(n,e){return Cu(n,ud("default",e))}ht.loading=(n,e)=>Cu(n,ud("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e}));function nL(n,{pending:e,error:t,success:i},s){let a;e&&(a=Rs(e)?ht.loading(e,s):ht.loading(e.render,{...s,...e}));let u={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},d=(m,_,E)=>{if(_==null){ht.dismiss(a);return}let T={type:m,...u,...s,data:E},A=Rs(_)?{render:_}:_;return a?ht.update(a,{...T,...A}):ht(A.render,{...T,...A}),E},f=Vi(n)?n():n;return f.then(m=>d("success",i,m)).catch(m=>d("error",t,m)),f}ht.promise=nL;ht.success=cd("success");ht.info=cd("info");ht.error=cd("error");ht.warning=cd("warning");ht.warn=ht.warning;ht.dark=(n,e)=>Cu(n,ud("default",{theme:"dark",...e}));function rL(n){YO(n)}ht.dismiss=rL;ht.clearWaitingQueue=XO;ht.isActive=uT;ht.update=(n,e={})=>{let t=QO(n,e);if(t){let{props:i,content:s}=t,a={delay:100,...i,...e,toastId:e.toastId||n,updateId:aT()};a.toastId!==n&&(a.staleId=n);let u=a.render||s;delete a.render,Cu(u,a)}};ht.done=n=>{ht.update(n,{progress:1})};ht.onChange=eL;ht.play=n=>hT(!0,n);ht.pause=n=>hT(!1,n);function iL(n){var e;let{subscribe:t,getSnapshot:i,setProps:s}=Y.useRef(ZO(n)).current;s(n);let a=(e=Y.useSyncExternalStore(t,i,i))==null?void 0:e.slice();function u(d){if(!a)return[];let f=new Map;return n.newestOnTop&&a.reverse(),a.forEach(m=>{let{position:_}=m.props;f.has(_)||f.set(_,[]),f.get(_).push(m)}),Array.from(f,m=>d(m[0],m[1]))}return{getToastToRender:u,isToastActive:uT,count:a==null?void 0:a.length}}function oL(n){let[e,t]=Y.useState(!1),[i,s]=Y.useState(!1),a=Y.useRef(null),u=Y.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:d,pauseOnHover:f,closeToast:m,onClick:_,closeOnClick:E}=n;JO({id:n.toastId,containerId:n.containerId,fn:t}),Y.useEffect(()=>{if(n.pauseOnFocusLoss)return T(),()=>{A()}},[n.pauseOnFocusLoss]);function T(){document.hasFocus()||K(),window.addEventListener("focus",N),window.addEventListener("blur",K)}function A(){window.removeEventListener("focus",N),window.removeEventListener("blur",K)}function b(R){if(n.draggable===!0||n.draggable===R.pointerType){j();let S=a.current;u.canCloseOnClick=!0,u.canDrag=!0,S.style.transition="none",n.draggableDirection==="x"?(u.start=R.clientX,u.removalDistance=S.offsetWidth*(n.draggablePercent/100)):(u.start=R.clientY,u.removalDistance=S.offsetHeight*(n.draggablePercent===80?n.draggablePercent*1.5:n.draggablePercent)/100)}}function L(R){let{top:S,bottom:k,left:D,right:M}=a.current.getBoundingClientRect();R.nativeEvent.type!=="touchend"&&n.pauseOnHover&&R.clientX>=D&&R.clientX<=M&&R.clientY>=S&&R.clientY<=k?K():N()}function N(){t(!0)}function K(){t(!1)}function j(){u.didMove=!1,document.addEventListener("pointermove",x),document.addEventListener("pointerup",ee)}function q(){document.removeEventListener("pointermove",x),document.removeEventListener("pointerup",ee)}function x(R){let S=a.current;if(u.canDrag&&S){u.didMove=!0,e&&K(),n.draggableDirection==="x"?u.delta=R.clientX-u.start:u.delta=R.clientY-u.start,u.start!==R.clientX&&(u.canCloseOnClick=!1);let k=n.draggableDirection==="x"?`${u.delta}px, var(--y)`:`0, calc(${u.delta}px + var(--y))`;S.style.transform=`translate3d(${k},0)`,S.style.opacity=`${1-Math.abs(u.delta/u.removalDistance)}`}}function ee(){q();let R=a.current;if(u.canDrag&&u.didMove&&R){if(u.canDrag=!1,Math.abs(u.delta)>u.removalDistance){s(!0),n.closeToast(!0),n.collapseAll();return}R.style.transition="transform 0.2s, opacity 0.2s",R.style.removeProperty("transform"),R.style.removeProperty("opacity")}}let oe={onPointerDown:b,onPointerUp:L};return d&&f&&(oe.onMouseEnter=K,n.stacked||(oe.onMouseLeave=N)),E&&(oe.onClick=R=>{_&&_(R),u.canCloseOnClick&&m(!0)}),{playToast:N,pauseToast:K,isRunning:e,preventExitTransition:i,toastRef:a,eventHandlers:oe}}var sL=typeof window<"u"?Y.useLayoutEffect:Y.useEffect,hd=({theme:n,type:e,isLoading:t,...i})=>We.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:n==="colored"?"currentColor":`var(--toastify-icon-color-${e})`,...i});function aL(n){return We.createElement(hd,{...n},We.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function lL(n){return We.createElement(hd,{...n},We.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function uL(n){return We.createElement(hd,{...n},We.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function cL(n){return We.createElement(hd,{...n},We.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function hL(){return We.createElement("div",{className:"Toastify__spinner"})}var tm={info:lL,warning:aL,success:uL,error:cL,spinner:hL},dL=n=>n in tm;function fL({theme:n,type:e,isLoading:t,icon:i}){let s=null,a={theme:n,type:e};return i===!1||(Vi(i)?s=i({...a,isLoading:t}):Y.isValidElement(i)?s=Y.cloneElement(i,a):t?s=tm.spinner():dL(e)&&(s=tm[e](a))),s}var pL=n=>{let{isRunning:e,preventExitTransition:t,toastRef:i,eventHandlers:s,playToast:a}=oL(n),{closeButton:u,children:d,autoClose:f,onClick:m,type:_,hideProgressBar:E,closeToast:T,transition:A,position:b,className:L,style:N,progressClassName:K,updateId:j,role:q,progress:x,rtl:ee,toastId:oe,deleteToast:R,isIn:S,isLoading:k,closeOnClick:D,theme:M,ariaLabel:V}=n,P=ps("Toastify__toast",`Toastify__toast-theme--${M}`,`Toastify__toast--${_}`,{"Toastify__toast--rtl":ee},{"Toastify__toast--close-on-click":D}),it=Vi(L)?L({rtl:ee,position:b,type:_,defaultClassName:P}):ps(P,L),ct=fL(n),Xe=!!x||!f,Ne={closeToast:T,type:_,theme:M},se=null;return u===!1||(Vi(u)?se=u(Ne):Y.isValidElement(u)?se=Y.cloneElement(u,Ne):se=$O(Ne)),We.createElement(A,{isIn:S,done:R,position:b,preventExitTransition:t,nodeRef:i,playToast:a},We.createElement("div",{id:oe,tabIndex:0,onClick:m,"data-in":S,className:it,...s,style:N,ref:i,...S&&{role:q,"aria-label":V}},ct!=null&&We.createElement("div",{className:ps("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!k})},ct),sT(d,n,!e),se,!n.customProgressBar&&We.createElement(qO,{...j&&!Xe?{key:`p-${j}`}:{},rtl:ee,theme:M,delay:f,isRunning:e,isIn:S,closeToast:T,hide:E,type:_,className:K,controlledProgress:Xe,progress:x||0})))},mL=(n,e=!1)=>({enter:`Toastify--animate Toastify__${n}-enter`,exit:`Toastify--animate Toastify__${n}-exit`,appendPosition:e}),gL=zO(mL("bounce",!0)),yL={position:"top-right",transition:gL,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:n=>n.altKey&&n.code==="KeyT"};function _L(n){let e={...yL,...n},t=n.stacked,[i,s]=Y.useState(!0),a=Y.useRef(null),{getToastToRender:u,isToastActive:d,count:f}=iL(e),{className:m,style:_,rtl:E,containerId:T,hotKeys:A}=e;function b(N){let K=ps("Toastify__toast-container",`Toastify__toast-container--${N}`,{"Toastify__toast-container--rtl":E});return Vi(m)?m({position:N,rtl:E,defaultClassName:K}):ps(K,Jp(m))}function L(){t&&(s(!0),ht.play())}return sL(()=>{var N;if(t){let K=a.current.querySelectorAll('[data-in="true"]'),j=12,q=(N=e.position)==null?void 0:N.includes("top"),x=0,ee=0;Array.from(K).reverse().forEach((oe,R)=>{let S=oe;S.classList.add("Toastify__toast--stacked"),R>0&&(S.dataset.collapsed=`${i}`),S.dataset.pos||(S.dataset.pos=q?"top":"bot");let k=x*(i?.2:1)+(i?0:j*R);S.style.setProperty("--y",`${q?k:k*-1}px`),S.style.setProperty("--g",`${j}`),S.style.setProperty("--s",`${1-(i?ee:0)}`),x+=S.offsetHeight,ee+=.025})}},[i,f,t]),Y.useEffect(()=>{function N(K){var j;let q=a.current;A(K)&&((j=q.querySelector('[tabIndex="0"]'))==null||j.focus(),s(!1),ht.pause()),K.key==="Escape"&&(document.activeElement===q||q!=null&&q.contains(document.activeElement))&&(s(!0),ht.play())}return document.addEventListener("keydown",N),()=>{document.removeEventListener("keydown",N)}},[A]),We.createElement("section",{ref:a,className:"Toastify",id:T,onMouseEnter:()=>{t&&(s(!1),ht.pause())},onMouseLeave:L,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":e["aria-label"]},u((N,K)=>{let j=K.length?{..._}:{..._,pointerEvents:"none"};return We.createElement("div",{tabIndex:-1,className:b(N),"data-stacked":t,style:j,key:`c-${N}`},K.map(({content:q,props:x})=>We.createElement(pL,{...x,stacked:t,collapseAll:L,isIn:d(x.toastId,x.containerId),key:`t-${x.key}`},q)))}))}const vL=xe.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`,wL=xe.label`
    width: 80px;
    overflow: hidden;
    height: 80px;
    border-radius: 50%;
    background-color: #00aaff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        width: 50px;
    }
    &:hover {
        opacity: 0.6;
    }
`,EL=xe.img`
    width: 100%;
`,TL=xe.input`
    display: none;
`,IL=xe.span`
    font-size: 22px;
`,SL=xe.div`
    display: flex;
    background-color: whitesmoke;
    padding: 10px;
    margin-bottom: 50px;
    border-radius: 10px;
    gap: 10px;
    flex-direction: column;
`,RL=xe.div`
    display: flex;
    align-items: center;
    gap: 10px;
`,AL=xe.input`
    font-size: 18px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 160px;
`,kL=xe.button`
    padding: 5px 10px;
    background-color: #ffcc00;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
    &:hover {
        opacity: 0.8;
    }
`,CL=xe.button`
    padding: 5px 10px;
    background-color: #ffcc00;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
    &:hover {
        opacity: 0.8;
    }
`;function PL(){const n=oi.currentUser,[e,t]=Y.useState(n==null?void 0:n.photoURL),[i,s]=Y.useState((n==null?void 0:n.displayName)??""),[a,u]=Y.useState(!1),[d,f]=Y.useState([]),m=async A=>{const{files:b}=A.target;if(n&&b&&b.length===1){const L=b[0],N=Eg(Ig,`avatars/${n==null?void 0:n.uid}`),K=await rT(N,L),j=await iT(K.ref);t(j),await Np(n,{photoURL:j})}},_=A=>{s(A.target.value)},E=async()=>{n&&i!==n.displayName&&(await Np(n,{displayName:i}),ht.success("이름이 저장되었습니다!")),u(!1)},T=()=>{u(!a)};return Y.useEffect(()=>{const A=sg(nd(lu,"tweets"),jN("userId","==",n==null?void 0:n.uid),ug("createdAt","desc"),O1(10)),b=j1(A,L=>{const N=L.docs.map(K=>{const{tweet:j,createdAt:q,userId:x,username:ee,photo:oe}=K.data();return{tweet:j,createdAt:q,userId:x,username:ee,photo:oe,id:K.id}});f(N)});return()=>b()},[]),Z.jsxs(vL,{children:[Z.jsx(wL,{htmlFor:"avatar",children:e?Z.jsx(EL,{src:e}):Z.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:Z.jsx("path",{d:"M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"})})}),Z.jsx(TL,{onChange:m,id:"avatar",type:"file",accept:"image/*"}),Z.jsxs(RL,{children:[a?Z.jsx(AL,{type:"text",value:i,onChange:_,placeholder:"Enter your name"}):Z.jsx(IL,{children:i}),a?Z.jsx(kL,{onClick:E,children:"Save"}):Z.jsx(CL,{onClick:T,children:"Edit"})]}),Z.jsx(SL,{children:d.map(A=>Z.jsx(Sg,{...A},A.id))}),Z.jsx(_L,{})]})}const dT=xe.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 420px;
    padding: 50px 0px;
`,fT=xe.h1`
    font-size: 42px;
`,pT=xe.form`
    margin-top: 50px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`,hs=xe.input`
    padding: 10px 20px;
    border-radius: 50px;
    border: none;
    width: 100%;
    font-size: 16px;
    &[type="submit"] {
        cursor: pointer;
        &:hover {
            color: #ffffff;
            background-color: #ffe863;
        }
    }
`,mT=xe.span`
    font-weight: 600;
    color: tomato;
`,gT=xe.span`
    margin-top: 20px;
    a {
        color: #1d9bf0;
    }
`,xL=xe.span`
    margin-top: 50px;
    background-color: white;
    font-weight: 500;
    width: 100%;
    color: black;
    padding: 10px 20px;
    border-radius: 50px;
    border: 0;
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
        color: #ffffff;
        background-color: #ffe863;
    }
`,bL=xe.img`
    height: 25px;
`;function yT(){const n=As(),e=async()=>{try{const t=new Ai;await pE(oi,t),n("/")}catch(t){console.error(t)}};return Z.jsxs(xL,{onClick:e,children:[Z.jsx(bL,{src:"/google-mark.png"}),"Continue with Google"]})}const NL=xe.span`
    margin-top: 10px;
    background-color: white;
    font-weight: 500;
    width: 100%;
    color: black;
    padding: 10px 20px;
    border-radius: 50px;
    border: 0;
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
        color: #ffffff;
        background-color: #ffe863;
    }
`,DL=xe.img`
    height: 25px;
`;function _T(){const n=As(),e=async()=>{try{const t=new ki;await pE(oi,t),n("/")}catch(t){console.error(t)}};return Z.jsxs(NL,{onClick:e,children:[Z.jsx(DL,{src:"/github-mark.png"}),"Continue with Github"]})}function OL(){const n=As(),[e,t]=Y.useState(!1),[i,s]=Y.useState(""),[a,u]=Y.useState(""),[d,f]=Y.useState(""),m=E=>{const{target:{name:T,value:A}}=E;T==="email"?s(A):T==="password"&&u(A)},_=async E=>{if(E.preventDefault(),f(""),!(e||i===""||a===""))try{t(!0),await DC(oi,i,a),n("/")}catch(T){T instanceof yr&&f(T.message)}finally{t(!1)}};return Z.jsxs(dT,{children:[Z.jsx(fT,{children:"Login TweetDock"}),Z.jsxs(pT,{onSubmit:_,children:[Z.jsx(hs,{onChange:m,name:"email",value:i,placeholder:"Email",type:"email",required:!0}),Z.jsx(hs,{onChange:m,value:a,name:"password",placeholder:"Password",type:"password",required:!0}),Z.jsx(hs,{type:"submit",value:e?"Loading...":"Log in"})]}),d!==""?Z.jsx(mT,{children:d}):null,Z.jsxs(gT,{children:["Don't have an account?"," ",Z.jsx(hh,{to:"/create-account",children:"Create one →"})]}),Z.jsx(yT,{}),Z.jsx(_T,{})]})}function LL(){const n=As(),[e,t]=Y.useState(!1),[i,s]=Y.useState(""),[a,u]=Y.useState(""),[d,f]=Y.useState(""),[m,_]=Y.useState(""),E=A=>{const{target:{name:b,value:L}}=A;b==="name"?s(L):b==="email"?u(L):b==="password"&&f(L)},T=async A=>{if(A.preventDefault(),_(""),!(e||i===""||a===""||d===""))try{t(!0);const b=await NC(oi,a,d);await Np(b.user,{displayName:i}),n("/")}catch(b){b instanceof yr&&_(b.message)}finally{t(!1)}};return Z.jsxs(dT,{children:[Z.jsx(fT,{children:"Join TweetDock"}),Z.jsxs(pT,{onSubmit:T,children:[Z.jsx(hs,{onChange:E,name:"name",value:i,placeholder:"Name",type:"text",required:!0}),Z.jsx(hs,{onChange:E,name:"email",value:a,placeholder:"Email",type:"email",required:!0}),Z.jsx(hs,{onChange:E,value:d,name:"password",placeholder:"Password",type:"password",required:!0}),Z.jsx(hs,{type:"submit",value:e?"Loading...":"Create Account"})]}),m!==""?Z.jsx(mT,{children:m}):null,Z.jsxs(gT,{children:["Already have an account? ",Z.jsx(hh,{to:"/login",children:"Log in →"})]}),Z.jsx(yT,{}),Z.jsx(_T,{})]})}var vT=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},wT=fm(U0||(U0=vT([`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`],[`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`])));Tw(F0||(F0=vT(["",""],["",""])),wT);var U0,F0;const ML=xe.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`,VL=xe.span`
    font-size: 24px;
`;function UL(){return Z.jsx(ML,{children:Z.jsx(VL,{children:"Loading..."})})}function FL({children:n}){return oi.currentUser===null?Z.jsx($S,{to:"/login"}):n}function jL(){return Z.jsx("h1",{children:"Search"})}const BL=XS([{path:"/",element:Z.jsx(FL,{children:Z.jsx(kO,{})}),children:[{path:"",element:Z.jsx(VO,{})},{path:"profile",element:Z.jsx(PL,{})},{path:"search",element:Z.jsx(jL,{})}]},{path:"/login",element:Z.jsx(OL,{})},{path:"/create-account",element:Z.jsx(LL,{})}]),zL=Tw`
  ${wT};
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #00aaff;
    color:white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`,$L=xe.div`
    height: 100vh;
    display: flex;
    justify-content: center;
`;function qL(){const[n,e]=Y.useState(!0),t=async()=>{await oi.authStateReady(),e(!1)};return Y.useEffect(()=>{t()},[]),Z.jsxs($L,{children:[Z.jsx(zL,{}),n?Z.jsx(UL,{}):Z.jsx(BS,{router:BL})]})}LI.createRoot(document.getElementById("root")).render(Z.jsx(We.StrictMode,{children:Z.jsx(qL,{})}));
