import{ba as z}from"./chunk-WX4GCA7F.js";var Fe=typeof global=="object"&&global&&global.Object===Object&&global,q=Fe;var Ge=typeof self=="object"&&self&&self.Object===Object&&self,We=q||Ge||Function("return this")(),l=We;var Ue=l.Symbol,b=Ue;var ct=Object.prototype,ze=ct.hasOwnProperty,qe=ct.toString,N=b?b.toStringTag:void 0;function He(t){var e=ze.call(t,N),r=t[N];try{t[N]=void 0;var a=!0}catch{}var f=qe.call(t);return a&&(e?t[N]=r:delete t[N]),f}var ht=He;var Ke=Object.prototype,$e=Ke.toString;function Je(t){return $e.call(t)}var gt=Je;var Xe="[object Null]",Ye="[object Undefined]",yt=b?b.toStringTag:void 0;function Ze(t){return t==null?t===void 0?Ye:Xe:yt&&yt in Object(t)?ht(t):gt(t)}var _=Ze;function Qe(t){return t!=null&&typeof t=="object"}var v=Qe;var Ve=Array.isArray,E=Ve;function ke(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var H=ke;var tr="[object AsyncFunction]",er="[object Function]",rr="[object GeneratorFunction]",ar="[object Proxy]";function or(t){if(!H(t))return!1;var e=_(t);return e==er||e==rr||e==tr||e==ar}var K=or;var fr=l["__core-js_shared__"],$=fr;var bt=function(){var t=/[^.]+$/.exec($&&$.keys&&$.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function sr(t){return!!bt&&bt in t}var _t=sr;var pr=Function.prototype,ir=pr.toString;function ur(t){if(t!=null){try{return ir.call(t)}catch{}try{return t+""}catch{}}return""}var A=ur;var lr=/[\\^$.*+?()[\]{}|]/g,mr=/^\[object .+?Constructor\]$/,nr=Function.prototype,dr=Object.prototype,xr=nr.toString,cr=dr.hasOwnProperty,hr=RegExp("^"+xr.call(cr).replace(lr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function gr(t){if(!H(t)||_t(t))return!1;var e=K(t)?hr:mr;return e.test(A(t))}var vt=gr;function yr(t,e){return t?.[e]}var At=yr;function br(t,e){var r=At(t,e);return vt(r)?r:void 0}var c=br;var _r=c(l,"WeakMap"),J=_r;var vr=9007199254740991,Ar=/^(?:0|[1-9]\d*)$/;function Tr(t,e){var r=typeof t;return e=e??vr,!!e&&(r=="number"||r!="symbol"&&Ar.test(t))&&t>-1&&t%1==0&&t<e}var Tt=Tr;function Or(t,e){return t===e||t!==t&&e!==e}var X=Or;var wr=9007199254740991;function Sr(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=wr}var Y=Sr;function jr(t){return t!=null&&Y(t.length)&&!K(t)}var Ot=jr;var Ir=Object.prototype;function Cr(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||Ir;return t===r}var wt=Cr;function Pr(t,e){for(var r=-1,a=Array(t);++r<t;)a[r]=e(r);return a}var St=Pr;var Er="[object Arguments]";function Lr(t){return v(t)&&_(t)==Er}var ft=Lr;var jt=Object.prototype,Dr=jt.hasOwnProperty,Rr=jt.propertyIsEnumerable,Mr=ft(function(){return arguments}())?ft:function(t){return v(t)&&Dr.call(t,"callee")&&!Rr.call(t,"callee")},It=Mr;function Br(){return!1}var Ct=Br;var Lt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Pt=Lt&&typeof module=="object"&&module&&!module.nodeType&&module,Nr=Pt&&Pt.exports===Lt,Et=Nr?l.Buffer:void 0,Fr=Et?Et.isBuffer:void 0,Gr=Fr||Ct,F=Gr;var Wr="[object Arguments]",Ur="[object Array]",zr="[object Boolean]",qr="[object Date]",Hr="[object Error]",Kr="[object Function]",$r="[object Map]",Jr="[object Number]",Xr="[object Object]",Yr="[object RegExp]",Zr="[object Set]",Qr="[object String]",Vr="[object WeakMap]",kr="[object ArrayBuffer]",ta="[object DataView]",ea="[object Float32Array]",ra="[object Float64Array]",aa="[object Int8Array]",oa="[object Int16Array]",fa="[object Int32Array]",sa="[object Uint8Array]",pa="[object Uint8ClampedArray]",ia="[object Uint16Array]",ua="[object Uint32Array]",s={};s[ea]=s[ra]=s[aa]=s[oa]=s[fa]=s[sa]=s[pa]=s[ia]=s[ua]=!0;s[Wr]=s[Ur]=s[kr]=s[zr]=s[ta]=s[qr]=s[Hr]=s[Kr]=s[$r]=s[Jr]=s[Xr]=s[Yr]=s[Zr]=s[Qr]=s[Vr]=!1;function la(t){return v(t)&&Y(t.length)&&!!s[_(t)]}var Dt=la;function ma(t){return function(e){return t(e)}}var Rt=ma;var Mt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,G=Mt&&typeof module=="object"&&module&&!module.nodeType&&module,na=G&&G.exports===Mt,st=na&&q.process,da=function(){try{var t=G&&G.require&&G.require("util").types;return t||st&&st.binding&&st.binding("util")}catch{}}(),pt=da;var Bt=pt&&pt.isTypedArray,xa=Bt?Rt(Bt):Dt,Z=xa;var ca=Object.prototype,ha=ca.hasOwnProperty;function ga(t,e){var r=E(t),a=!r&&It(t),f=!r&&!a&&F(t),o=!r&&!a&&!f&&Z(t),i=r||a||f||o,u=i?St(t.length,String):[],m=u.length;for(var p in t)(e||ha.call(t,p))&&!(i&&(p=="length"||f&&(p=="offset"||p=="parent")||o&&(p=="buffer"||p=="byteLength"||p=="byteOffset")||Tt(p,m)))&&u.push(p);return u}var Nt=ga;function ya(t,e){return function(r){return t(e(r))}}var Ft=ya;var ba=Ft(Object.keys,Object),Gt=ba;var _a=Object.prototype,va=_a.hasOwnProperty;function Aa(t){if(!wt(t))return Gt(t);var e=[];for(var r in Object(t))va.call(t,r)&&r!="constructor"&&e.push(r);return e}var Wt=Aa;function Ta(t){return Ot(t)?Nt(t):Wt(t)}var Ut=Ta;var Oa=c(Object,"create"),T=Oa;function wa(){this.__data__=T?T(null):{},this.size=0}var zt=wa;function Sa(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var qt=Sa;var ja="__lodash_hash_undefined__",Ia=Object.prototype,Ca=Ia.hasOwnProperty;function Pa(t){var e=this.__data__;if(T){var r=e[t];return r===ja?void 0:r}return Ca.call(e,t)?e[t]:void 0}var Ht=Pa;var Ea=Object.prototype,La=Ea.hasOwnProperty;function Da(t){var e=this.__data__;return T?e[t]!==void 0:La.call(e,t)}var Kt=Da;var Ra="__lodash_hash_undefined__";function Ma(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=T&&e===void 0?Ra:e,this}var $t=Ma;function D(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var a=t[e];this.set(a[0],a[1])}}D.prototype.clear=zt;D.prototype.delete=qt;D.prototype.get=Ht;D.prototype.has=Kt;D.prototype.set=$t;var it=D;function Ba(){this.__data__=[],this.size=0}var Jt=Ba;function Na(t,e){for(var r=t.length;r--;)if(X(t[r][0],e))return r;return-1}var w=Na;var Fa=Array.prototype,Ga=Fa.splice;function Wa(t){var e=this.__data__,r=w(e,t);if(r<0)return!1;var a=e.length-1;return r==a?e.pop():Ga.call(e,r,1),--this.size,!0}var Xt=Wa;function Ua(t){var e=this.__data__,r=w(e,t);return r<0?void 0:e[r][1]}var Yt=Ua;function za(t){return w(this.__data__,t)>-1}var Zt=za;function qa(t,e){var r=this.__data__,a=w(r,t);return a<0?(++this.size,r.push([t,e])):r[a][1]=e,this}var Qt=qa;function R(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var a=t[e];this.set(a[0],a[1])}}R.prototype.clear=Jt;R.prototype.delete=Xt;R.prototype.get=Yt;R.prototype.has=Zt;R.prototype.set=Qt;var S=R;var Ha=c(l,"Map"),j=Ha;function Ka(){this.size=0,this.__data__={hash:new it,map:new(j||S),string:new it}}var Vt=Ka;function $a(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var kt=$a;function Ja(t,e){var r=t.__data__;return kt(e)?r[typeof e=="string"?"string":"hash"]:r.map}var I=Ja;function Xa(t){var e=I(this,t).delete(t);return this.size-=e?1:0,e}var te=Xa;function Ya(t){return I(this,t).get(t)}var ee=Ya;function Za(t){return I(this,t).has(t)}var re=Za;function Qa(t,e){var r=I(this,t),a=r.size;return r.set(t,e),this.size+=r.size==a?0:1,this}var ae=Qa;function M(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var a=t[e];this.set(a[0],a[1])}}M.prototype.clear=Vt;M.prototype.delete=te;M.prototype.get=ee;M.prototype.has=re;M.prototype.set=ae;var Q=M;function Va(t,e){for(var r=-1,a=e.length,f=t.length;++r<a;)t[f+r]=e[r];return t}var oe=Va;function ka(){this.__data__=new S,this.size=0}var fe=ka;function to(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}var se=to;function eo(t){return this.__data__.get(t)}var pe=eo;function ro(t){return this.__data__.has(t)}var ie=ro;var ao=200;function oo(t,e){var r=this.__data__;if(r instanceof S){var a=r.__data__;if(!j||a.length<ao-1)return a.push([t,e]),this.size=++r.size,this;r=this.__data__=new Q(a)}return r.set(t,e),this.size=r.size,this}var ue=oo;function B(t){var e=this.__data__=new S(t);this.size=e.size}B.prototype.clear=fe;B.prototype.delete=se;B.prototype.get=pe;B.prototype.has=ie;B.prototype.set=ue;var V=B;function fo(t,e){for(var r=-1,a=t==null?0:t.length,f=0,o=[];++r<a;){var i=t[r];e(i,r,t)&&(o[f++]=i)}return o}var le=fo;function so(){return[]}var me=so;var po=Object.prototype,io=po.propertyIsEnumerable,ne=Object.getOwnPropertySymbols,uo=ne?function(t){return t==null?[]:(t=Object(t),le(ne(t),function(e){return io.call(t,e)}))}:me,de=uo;function lo(t,e,r){var a=e(t);return E(t)?a:oe(a,r(t))}var xe=lo;function mo(t){return xe(t,Ut,de)}var ut=mo;var no=c(l,"DataView"),k=no;var xo=c(l,"Promise"),tt=xo;var co=c(l,"Set"),et=co;var ce="[object Map]",ho="[object Object]",he="[object Promise]",ge="[object Set]",ye="[object WeakMap]",be="[object DataView]",go=A(k),yo=A(j),bo=A(tt),_o=A(et),vo=A(J),L=_;(k&&L(new k(new ArrayBuffer(1)))!=be||j&&L(new j)!=ce||tt&&L(tt.resolve())!=he||et&&L(new et)!=ge||J&&L(new J)!=ye)&&(L=function(t){var e=_(t),r=e==ho?t.constructor:void 0,a=r?A(r):"";if(a)switch(a){case go:return be;case yo:return ce;case bo:return he;case _o:return ge;case vo:return ye}return e});var lt=L;var Ao=l.Uint8Array,mt=Ao;var To="__lodash_hash_undefined__";function Oo(t){return this.__data__.set(t,To),this}var _e=Oo;function wo(t){return this.__data__.has(t)}var ve=wo;function rt(t){var e=-1,r=t==null?0:t.length;for(this.__data__=new Q;++e<r;)this.add(t[e])}rt.prototype.add=rt.prototype.push=_e;rt.prototype.has=ve;var Ae=rt;function So(t,e){for(var r=-1,a=t==null?0:t.length;++r<a;)if(e(t[r],r,t))return!0;return!1}var Te=So;function jo(t,e){return t.has(e)}var Oe=jo;var Io=1,Co=2;function Po(t,e,r,a,f,o){var i=r&Io,u=t.length,m=e.length;if(u!=m&&!(i&&m>u))return!1;var p=o.get(t),g=o.get(e);if(p&&g)return p==e&&g==t;var d=-1,n=!0,y=r&Co?new Ae:void 0;for(o.set(t,e),o.set(e,t);++d<u;){var x=t[d],h=e[d];if(a)var O=i?a(h,x,d,e,t,o):a(x,h,d,t,e,o);if(O!==void 0){if(O)continue;n=!1;break}if(y){if(!Te(e,function(C,P){if(!Oe(y,P)&&(x===C||f(x,C,r,a,o)))return y.push(P)})){n=!1;break}}else if(!(x===h||f(x,h,r,a,o))){n=!1;break}}return o.delete(t),o.delete(e),n}var at=Po;function Eo(t){var e=-1,r=Array(t.size);return t.forEach(function(a,f){r[++e]=[f,a]}),r}var we=Eo;function Lo(t){var e=-1,r=Array(t.size);return t.forEach(function(a){r[++e]=a}),r}var Se=Lo;var Do=1,Ro=2,Mo="[object Boolean]",Bo="[object Date]",No="[object Error]",Fo="[object Map]",Go="[object Number]",Wo="[object RegExp]",Uo="[object Set]",zo="[object String]",qo="[object Symbol]",Ho="[object ArrayBuffer]",Ko="[object DataView]",je=b?b.prototype:void 0,nt=je?je.valueOf:void 0;function $o(t,e,r,a,f,o,i){switch(r){case Ko:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case Ho:return!(t.byteLength!=e.byteLength||!o(new mt(t),new mt(e)));case Mo:case Bo:case Go:return X(+t,+e);case No:return t.name==e.name&&t.message==e.message;case Wo:case zo:return t==e+"";case Fo:var u=we;case Uo:var m=a&Do;if(u||(u=Se),t.size!=e.size&&!m)return!1;var p=i.get(t);if(p)return p==e;a|=Ro,i.set(t,e);var g=at(u(t),u(e),a,f,o,i);return i.delete(t),g;case qo:if(nt)return nt.call(t)==nt.call(e)}return!1}var Ie=$o;var Jo=1,Xo=Object.prototype,Yo=Xo.hasOwnProperty;function Zo(t,e,r,a,f,o){var i=r&Jo,u=ut(t),m=u.length,p=ut(e),g=p.length;if(m!=g&&!i)return!1;for(var d=m;d--;){var n=u[d];if(!(i?n in e:Yo.call(e,n)))return!1}var y=o.get(t),x=o.get(e);if(y&&x)return y==e&&x==t;var h=!0;o.set(t,e),o.set(e,t);for(var O=i;++d<m;){n=u[d];var C=t[n],P=e[n];if(a)var xt=i?a(P,C,n,e,t,o):a(C,P,n,t,e,o);if(!(xt===void 0?C===P||f(C,P,r,a,o):xt)){h=!1;break}O||(O=n=="constructor")}if(h&&!O){var W=t.constructor,U=e.constructor;W!=U&&"constructor"in t&&"constructor"in e&&!(typeof W=="function"&&W instanceof W&&typeof U=="function"&&U instanceof U)&&(h=!1)}return o.delete(t),o.delete(e),h}var Ce=Zo;var Qo=1,Pe="[object Arguments]",Ee="[object Array]",ot="[object Object]",Vo=Object.prototype,Le=Vo.hasOwnProperty;function ko(t,e,r,a,f,o){var i=E(t),u=E(e),m=i?Ee:lt(t),p=u?Ee:lt(e);m=m==Pe?ot:m,p=p==Pe?ot:p;var g=m==ot,d=p==ot,n=m==p;if(n&&F(t)){if(!F(e))return!1;i=!0,g=!1}if(n&&!g)return o||(o=new V),i||Z(t)?at(t,e,r,a,f,o):Ie(t,e,m,r,a,f,o);if(!(r&Qo)){var y=g&&Le.call(t,"__wrapped__"),x=d&&Le.call(e,"__wrapped__");if(y||x){var h=y?t.value():t,O=x?e.value():e;return o||(o=new V),f(h,O,r,a,o)}}return n?(o||(o=new V),Ce(t,e,r,a,f,o)):!1}var De=ko;function Re(t,e,r,a,f){return t===e?!0:t==null||e==null||!v(t)&&!v(e)?t!==t&&e!==e:De(t,e,r,a,Re,f)}var Me=Re;function tf(t,e){return Me(t,e)}var dt=tf;var Be="loading";var Ne=class{constructor(e){this.initialData=e,this.state=z(Be),this.error=z(""),this.data=z(this.initialData)}updateState(){this.error()?this.state.set("error"):dt(this.data(),this.initialData)?this.state.set("empty"):this.state.set("data")}setError(e){this.error.set(e),this.data.set(this.initialData),this.updateState()}setData(e){this.data.set(e),this.updateState()}};var gu={id:1,name:"Lorem ipsum dolor sit amet",username:"Lorem ipsum dolor sit amet",email:"test@test.com",address:{street:"Lorem ipsum dolor sit amet",suite:"Lorem ipsum dolor sit amet",city:"Lorem ipsum dolor sit amet",zipcode:"Lorem ipsum dolor sit amet",geo:{lat:"0",lng:"0"}},phone:"Lorem ipsum dolor sit amet",website:"test.org",company:{name:"Lorem ipsum dolor sit amet",catchPhrase:"Lorem ipsum dolor sit amet",bs:"Lorem ipsum dolor sit amet"}};export{Ne as a,gu as b};