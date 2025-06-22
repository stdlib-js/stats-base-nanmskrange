"use strict";var b=function(a,n){return function(){return n||a((n={exports:{}}).exports,n),n.exports}};var P=b(function(S,y){
var C=require('@stdlib/math-base-assert-is-nan/dist');function D(a,n,v,g,u,s,l){var m,o,t,c,q,f,r,e,i,x;for(m=n.data,o=u.data,c=n.accessors[0],t=u.accessors[0],r=g,e=l,x=0;x<a&&(i=c(m,r),!(i===i&&t(o,e)===0));x++)r+=v,e+=s;if(x===a)return NaN;for(f=i,q=f,x+=1,x;x<a;x++)r+=v,e+=s,!t(o,e)&&(i=c(m,r),!C(i)&&(i<f?f=i:i>q&&(q=i)));return q-f}y.exports=D
});var p=b(function(T,O){
var E=require('@stdlib/math-base-assert-is-nan/dist'),j=require('@stdlib/array-base-arraylike2object/dist'),F=P();function G(a,n,v,g,u,s,l){var m,o,t,c,q,f,r,e;if(a<=0)return NaN;if(q=j(n),f=j(u),q.accessorProtocol||f.accessorProtocol)return F(a,q,v,g,f,s,l);for(t=g,c=l,e=0;e<a&&(r=n[t],!(r===r&&u[c]===0));e++)t+=v,c+=s;if(e===a)return NaN;for(o=r,m=o,e+=1,e;e<a;e++)t+=v,c+=s,!u[c]&&(r=n[t],!E(r)&&(r<o?o=r:r>m&&(m=r)));return m-o}O.exports=G
});var w=b(function(U,h){
var R=require('@stdlib/strided-base-stride2offset/dist'),H=p();function I(a,n,v,g,u){var s=R(a,v),l=R(a,u);return H(a,n,v,s,g,u,l)}h.exports=I
});var B=b(function(V,A){
var J=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=w(),K=p();J(z,"ndarray",K);A.exports=z
});var L=B();module.exports=L;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
