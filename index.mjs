// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";function n(r,n,t,a,s){var i,f,o,d,u,m;if(r<=0)return NaN;for(o=t<0?(1-r)*t:0,d=s<0?(1-r)*s:0,m=0;m<r&&((u=n[o])!=u||0!==a[d]);m++)o+=t,d+=s;if(m===r)return NaN;for(i=f=u,m+=1;m<r;m++)o+=t,a[d+=s]||(u=n[o],e(u)||(u<f?f=u:u>i&&(i=u)));return i-f}function t(r,n,t,a,s,i,f){var o,d,u,m,l,N;if(r<=0)return NaN;for(u=a,m=f,N=0;N<r&&((l=n[u])!=l||0!==s[m]);N++)u+=t,m+=i;if(N===r)return NaN;for(o=d=l,N+=1;N<r;N++)u+=t,s[m+=i]||(l=n[u],e(l)||(l<d?d=l:l>o&&(o=l)));return o-d}r(n,"ndarray",t);export{n as default,t as ndarray};
//# sourceMappingURL=index.mjs.map
