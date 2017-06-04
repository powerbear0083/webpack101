<<<<<<< HEAD
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./src/app.sass ***!
  \**********************/
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAuc2Fzcz9kZDIxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwLnNhc3Ncbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (function(module, exports, __webpack_require__) {

eval("const css = __webpack_require__(/*! ./app.sass */ 0);\n\nconsole.log('Hellow from app.js dsfdasdasdsfasdasdasdasdasd')//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAuanM/N2FjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjc3MgPSByZXF1aXJlKCcuL2FwcC5zYXNzJyk7XG5cbmNvbnNvbGUubG9nKCdIZWxsb3cgZnJvbSBhcHAuanMgZHNmZGFzZGFzZHNmYXNkYXNkYXNkYXNkYXNkJylcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);
=======
!function(e){function n(e){delete installedChunks[e]}function r(e){var n=document.getElementsByTagName("head")[0],r=document.createElement("script");r.type="text/javascript",r.charset="utf-8",r.src=f.p+""+e+"."+g+".hot-update.js",n.appendChild(r)}function t(){return new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,t=f.p+""+g+".hot-update.json";r.open("GET",t,!0),r.timeout=1e4,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+t+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+t+" failed."));else{try{var o=JSON.parse(r.responseText)}catch(e){return void n(e)}e(o)}}})}function o(e){var n=A[e];if(!n)return f;var r=function(r){return n.hot.active?(A[r]?A[r].parents.indexOf(e)<0&&A[r].parents.push(e):(_=[e],y=r),n.children.indexOf(r)<0&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),_=[]),f(r)};for(var t in f)Object.prototype.hasOwnProperty.call(f,t)&&"e"!==t&&Object.defineProperty(r,t,function(e){return{configurable:!0,enumerable:!0,get:function(){return f[e]},set:function(n){f[e]=n}}}(t));return r.e=function(e){function n(){H--,"prepare"===E&&(P[e]||p(e),0===H&&0===x&&l())}return"ready"===E&&i("prepare"),H++,f.e(e).then(n,function(e){throw n(),e})},r}function c(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:y!==e,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:a,apply:u,status:function(e){if(!e)return E;j.push(e)},addStatusHandler:function(e){j.push(e)},removeStatusHandler:function(e){var n=j.indexOf(e);n>=0&&j.splice(n,1)},data:O[e]};return y=void 0,n}function i(e){E=e;for(var n=0;n<j.length;n++)j[n].call(null,e)}function d(e){return+e+""===e?+e:e}function a(e){if("idle"!==E)throw new Error("check() is only allowed in idle status");return w=e,i("check"),t().then(function(e){if(!e)return i("idle"),null;I={},P={},k=e.c,b=e.h,i("prepare");var n=new Promise(function(e,n){v={resolve:e,reject:n}});m={};return p(1),"prepare"===E&&0===H&&0===x&&l(),n})}function s(e,n){if(k[e]&&I[e]){I[e]=!1;for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(m[r]=n[r]);0==--x&&0===H&&l()}}function p(e){k[e]?(I[e]=!0,x++,r(e)):P[e]=!0}function l(){i("ready");var e=v;if(v=null,e)if(w)u(w).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var r in m)Object.prototype.hasOwnProperty.call(m,r)&&n.push(d(r));e.resolve(n)}}function u(r){function t(e,n){for(var r=0;r<n.length;r++){var t=n[r];e.indexOf(t)<0&&e.push(t)}}if("ready"!==E)throw new Error("apply() is only allowed in ready status");r=r||{};var o,c,a,s,p,l={},u=[],h={},y=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var v in m)if(Object.prototype.hasOwnProperty.call(m,v)){p=d(v);var w;w=m[v]?function(e){for(var n=[e],r={},o=n.slice().map(function(e){return{chain:[e],id:e}});o.length>0;){var c=o.pop(),i=c.id,d=c.chain;if((s=A[i])&&!s.hot._selfAccepted){if(s.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:i};if(s.hot._main)return{type:"unaccepted",chain:d,moduleId:i};for(var a=0;a<s.parents.length;a++){var p=s.parents[a],l=A[p];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:d.concat([p]),moduleId:i,parentId:p};n.indexOf(p)>=0||(l.hot._acceptedDependencies[i]?(r[p]||(r[p]=[]),t(r[p],[i])):(delete r[p],n.push(p),o.push({chain:d.concat([p]),id:p})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}(p):{type:"disposed",moduleId:v};var D=!1,j=!1,x=!1,H="";switch(w.chain&&(H="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":r.onDeclined&&r.onDeclined(w),r.ignoreDeclined||(D=new Error("Aborted because of self decline: "+w.moduleId+H));break;case"declined":r.onDeclined&&r.onDeclined(w),r.ignoreDeclined||(D=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+H));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(w),r.ignoreUnaccepted||(D=new Error("Aborted because "+p+" is not accepted"+H));break;case"accepted":r.onAccepted&&r.onAccepted(w),j=!0;break;case"disposed":r.onDisposed&&r.onDisposed(w),x=!0;break;default:throw new Error("Unexception type "+w.type)}if(D)return i("abort"),Promise.reject(D);if(j){h[p]=m[p],t(u,w.outdatedModules);for(p in w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,p)&&(l[p]||(l[p]=[]),t(l[p],w.outdatedDependencies[p]))}x&&(t(u,[w.moduleId]),h[p]=y)}var P=[];for(c=0;c<u.length;c++)p=u[c],A[p]&&A[p].hot._selfAccepted&&P.push({module:p,errorHandler:A[p].hot._selfAccepted});i("dispose"),Object.keys(k).forEach(function(e){!1===k[e]&&n(e)});for(var I,M=u.slice();M.length>0;)if(p=M.pop(),s=A[p]){var U={},q=s.hot._disposeHandlers;for(a=0;a<q.length;a++)(o=q[a])(U);for(O[p]=U,s.hot.active=!1,delete A[p],a=0;a<s.children.length;a++){var R=A[s.children[a]];R&&((I=R.parents.indexOf(p))>=0&&R.parents.splice(I,1))}}var S,N;for(p in l)if(Object.prototype.hasOwnProperty.call(l,p)&&(s=A[p]))for(N=l[p],a=0;a<N.length;a++)S=N[a],(I=s.children.indexOf(S))>=0&&s.children.splice(I,1);i("apply"),g=b;for(p in h)Object.prototype.hasOwnProperty.call(h,p)&&(e[p]=h[p]);var T=null;for(p in l)if(Object.prototype.hasOwnProperty.call(l,p)){s=A[p],N=l[p];var C=[];for(c=0;c<N.length;c++)S=N[c],o=s.hot._acceptedDependencies[S],C.indexOf(o)>=0||C.push(o);for(c=0;c<C.length;c++){o=C[c];try{o(N)}catch(e){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:p,dependencyId:N[c],error:e}),r.ignoreErrored||T||(T=e)}}}for(c=0;c<P.length;c++){var L=P[c];p=L.module,_=[p];try{f(p)}catch(e){if("function"==typeof L.errorHandler)try{L.errorHandler(e)}catch(n){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:p,error:n,orginalError:e}),r.ignoreErrored||T||(T=n),T||(T=e)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:p,error:e}),r.ignoreErrored||T||(T=e)}}return T?(i("fail"),Promise.reject(T)):(i("idle"),Promise.resolve(u))}function f(n){if(A[n])return A[n].exports;var r=A[n]={i:n,l:!1,exports:{},hot:c(n),parents:(D=_,_=[],D),children:[]};return e[n].call(r.exports,r,r.exports,o(n)),r.l=!0,r.exports}var h=this.webpackHotUpdate;this.webpackHotUpdate=function(e,n){s(e,n),h&&h(e,n)};var y,v,m,b,w=!0,g="0f0f8272d2752dea5893",O={},_=[],D=[],j=[],E="idle",x=0,H=0,P={},I={},k={},A={};f.m=e,f.c=A,f.i=function(e){return e},f.d=function(e,n,r){f.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},f.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(n,"a",n),n},f.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},f.p="",f.h=function(){return g},o("./src/app.js")(f.s="./src/app.js")}({"./src/app.js":function(e,n,r){"use strict";var t=r("./src/app.sass");!function(e){e&&e.__esModule}(t);console.log("testing hot module replacement!!!!!!")},"./src/app.sass":function(e,n){}});
>>>>>>> 5ffb9ed2b4d859ce759757224fdbb5a1aa955294
