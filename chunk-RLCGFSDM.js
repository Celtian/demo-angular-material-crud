import{A,B,C as R,D as W,E as N,f as y,i as k,x as F,y as E,z as S}from"./chunk-JFFU544U.js";import{Aa as l,Ba as c,G as s,J as n,L as M,Qa as p,Qc as w,Ra as d,Rc as T,Sc as C,Va as U,Za as v,_a as I,ea as r,fa as h,m as u,pa as g,wb as b,x as D}from"./chunk-FJYUF6LK.js";var G=(()=>{let e=class e{constructor(t,i){this.data=t,this.dialogRef=i}};e.\u0275fac=function(i){return new(i||e)(h(E),h(F))},e.\u0275cmp=M({type:e,selectors:[["app-confirm-dialog"]],standalone:!0,features:[U],decls:11,vars:10,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions","","align","center"],["mat-button","",3,"mat-dialog-close"],["mat-button","","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(i,a){i&1&&(l(0,"h1",0),p(1),c(),l(2,"div",1),p(3),c(),l(4,"div",2)(5,"button",3),p(6),v(7,"translate"),c(),l(8,"button",4),p(9),v(10,"translate"),c()()),i&2&&(r(1),d(a.data.title),r(2),d(a.data.content),r(2),g("mat-dialog-close",!1),r(1),d(I(7,6,"UNI.no")),r(2),g("mat-dialog-close",!0),r(1),d(I(10,8,"UNI.yes")))},dependencies:[N,A,B,W,R,k,y,C,T],changeDetection:0});let o=e;return o})();var q=(()=>{let e=class e{constructor(t){this.http=t,this.apiUrl="https://jsonplaceholder.typicode.com"}list(t=1,i=5,a="id",L="asc",j=""){let f=[`_limit=${i}`,`_sort=${a}`,`_order=${L}`];return t>0&&f.push(`_page=${t}`),j&&f.push(`title_like=${j}`),this.http.get(`${this.apiUrl}/posts?${f.join("&")}`,{observe:"response"}).pipe(u(x=>({totalCount:Number(x.headers.get("x-total-count"))||0,items:x.body||[]})))}detail(t){return this.http.get(`${this.apiUrl}/posts/${t}`)}delete(t){return this.http.delete(`${this.apiUrl}/posts/${t}`)}patch(t,i){return this.http.patch(`${this.apiUrl}/posts/${t}`,i)}create(t){return this.http.post(`${this.apiUrl}/posts`,t)}detailExpanded(t){return this.http.get(`${this.apiUrl}/posts/${t}?_expand=user`)}user(t){return this.http.get(`${this.apiUrl}/users/${t}`)}};e.\u0275fac=function(i){return new(i||e)(n(b))},e.\u0275prov=s({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();var H=(()=>{let e=class e{constructor(t){this.dialog=t}open(t,i){return this.dialog.open(G,{width:"sm",data:{title:t,content:i}}).afterClosed()}};e.\u0275fac=function(i){return new(i||e)(n(S))},e.\u0275prov=s({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();var m=function(o){return o[o.Delete=0]="Delete",o[o.UnsavedWork=1]="UnsavedWork",o}(m||{}),it=(()=>{let e=class e{constructor(t,i){this.confirm=t,this.translate=i}openCustomConfirmDialog(t){let i=this.getTitle(t),a=this.getContent(t);return this.open(i,a)}getTitle(t){switch(t){case m.Delete:return this.translate.instant("custom-confirm-dialog.delete-post.title");case m.UnsavedWork:return this.translate.instant("custom-confirm-dialog.unsaved-work.title");default:return this.translate.instant("custom-confirm-dialog.default.title")}}getContent(t){switch(t){case m.Delete:return this.translate.instant("custom-confirm-dialog.delete-post.content");case m.UnsavedWork:return this.translate.instant("custom-confirm-dialog.unsaved-work.content");default:return this.translate.instant("custom-confirm-dialog.default.content")}}open(t,i){return this.confirm.open(t,i).pipe(D(),u(a=>!!a))}};e.\u0275fac=function(i){return new(i||e)(n(H),n(w))},e.\u0275prov=s({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();export{q as a,m as b,it as c};
