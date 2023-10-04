"use strict";var q=function(n,f){return function(){return f||n((f={exports:{}}).exports,f),f.exports}};var l=q(function(D,x){
var R=require('@stdlib/math-base-assert-is-nan/dist');function h(n,f,t,s,o){var c,m,a,i,r,e;if(n<=0)return NaN;for(t<0?a=(1-n)*t:a=0,o<0?i=(1-n)*o:i=0,e=0;e<n&&(r=f[a],!(r===r&&s[i]===0));e++)a+=t,i+=o;if(e===n)return NaN;for(m=r,c=m,e+=1,e;e<n;e++)a+=t,i+=o,!s[i]&&(r=f[a],!R(r)&&(r<m?m=r:r>c&&(c=r)));return c-m}x.exports=h
});var g=q(function(E,p){
var j=require('@stdlib/math-base-assert-is-nan/dist');function w(n,f,t,s,o,c,m){var a,i,r,e,u,v;if(n<=0)return NaN;for(r=s,e=m,v=0;v<n&&(u=f[r],!(u===u&&o[e]===0));v++)r+=t,e+=c;if(v===n)return NaN;for(i=u,a=i,v+=1,v;v<n;v++)r+=t,e+=c,!o[e]&&(u=f[r],!j(u)&&(u<i?i=u:u>a&&(a=u)));return a-i}p.exports=w
});var O=q(function(F,b){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=l(),A=g();z(y,"ndarray",A);b.exports=y
});var B=O();module.exports=B;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
