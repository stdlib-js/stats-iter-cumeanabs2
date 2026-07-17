"use strict";var d=function(n,e){return function(){try{return e||n((e={exports:{}}).exports,e),e.exports}catch(u){throw (e=0, u)}};};var s=d(function(g,v){
var i=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=require('@stdlib/assert-is-iterator-like/dist'),q=require('@stdlib/assert-is-function/dist'),t=require('@stdlib/symbol-iterator/dist'),p=require('@stdlib/stats-incr-meanabs2/dist'),x=require('@stdlib/error-tools-fmtprodmsg/dist');function o(n){var e,u,a;if(!m(n))throw new TypeError(x('1KL3w',n));return a=p(),e={},i(e,"next",f),i(e,"return",c),t&&q(n[t])&&i(e,t,l),e;function f(){var r;return u?{done:!0}:(r=n.next(),r.done?(u=!0,r):(typeof r.value=="number"?r=a(r.value):r=a(NaN),{value:r,done:!1}))}function c(r){return u=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return o(n[t]())}}v.exports=o
});var y=s();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
