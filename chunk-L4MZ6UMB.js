import{$ as k,Z as C,_ as U,aa as w,ba as T,ca as S,da as A,ea as E,f as y,i as j}from"./chunk-5IY3RPRP.js";import{Ed as x,Fd as M,Gd as b,Ja as n,Ka as f,Lb as c,Mb as p,N as D,Tb as h,Ub as g,Wa as I,_ as r,da as a,ib as u,qb as s,rb as l,t as d,yc as $}from"./chunk-6WXSYFKS.js";var H=(()=>{class e{constructor(t){this.http=t,this.apiUrl="https://jsonplaceholder.typicode.com"}list(t){let i=[`_limit=${t.limit}`,`_sort=${t.sort}`,`_order=${t.order}`];return t.page>0&&i.push(`_page=${t.page}`),t.query&&i.push(`title_like=${t.query}`),this.http.get(`${this.apiUrl}/posts?${i.join("&")}`,{observe:"response"}).pipe(d(o=>({totalCount:Number(o.headers.get("x-total-count"))||0,items:o.body||[]})))}detail(t){return this.http.get(`${this.apiUrl}/posts/${t}`)}delete(t){return this.http.delete(`${this.apiUrl}/posts/${t}`)}patch(t,i){return this.http.patch(`${this.apiUrl}/posts/${t}`,i)}create(t){return this.http.post(`${this.apiUrl}/posts`,t)}detailExpanded(t){return this.http.get(`${this.apiUrl}/posts/${t}?_expand=user`)}user(t){return this.http.get(`${this.apiUrl}/users/${t}`)}static{this.\u0275fac=function(i){return new(i||e)(a($))}}static{this.\u0275prov=r({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var F=(()=>{class e{constructor(t,i){this.data=t,this.dialogRef=i}static{this.\u0275fac=function(i){return new(i||e)(f(U),f(C))}}static{this.\u0275cmp=I({type:e,selectors:[["app-confirm-dialog"]],decls:11,vars:10,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions","","align","center"],["mat-button","",3,"mat-dialog-close"],["mat-button","","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(i,o){i&1&&(s(0,"h1",0),c(1),l(),s(2,"div",1),c(3),l(),s(4,"div",2)(5,"button",3),c(6),h(7,"translate"),l(),s(8,"button",4),c(9),h(10,"translate"),l()()),i&2&&(n(),p(o.data.title),n(2),p(o.data.content),n(2),u("mat-dialog-close",!1),n(),p(g(7,6,"uni.no")),n(2),u("mat-dialog-close",!0),n(),p(g(10,8,"uni.yes")))},dependencies:[E,w,T,A,S,j,y,b,M],encapsulation:2,changeDetection:0})}}return e})();var B=(()=>{class e{constructor(t){this.dialog=t}open(t,i){return this.dialog.open(F,{width:"sm",data:{title:t,content:i}}).afterClosed()}static{this.\u0275fac=function(i){return new(i||e)(a(k))}}static{this.\u0275prov=r({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var m=function(e){return e[e.Delete=0]="Delete",e[e.UnsavedWork=1]="UnsavedWork",e}(m||{}),V=(()=>{class e{constructor(t,i){this.confirm=t,this.translate=i}openCustomConfirmDialog(t){let i=this.getTitle(t),o=this.getContent(t);return this.open(i,o)}getTitle(t){switch(t){case m.Delete:return this.translate.instant("custom-confirm-dialog.delete-post.title");case m.UnsavedWork:return this.translate.instant("custom-confirm-dialog.unsaved-work.title");default:return this.translate.instant("custom-confirm-dialog.default.title")}}getContent(t){switch(t){case m.Delete:return this.translate.instant("custom-confirm-dialog.delete-post.content");case m.UnsavedWork:return this.translate.instant("custom-confirm-dialog.unsaved-work.content");default:return this.translate.instant("custom-confirm-dialog.default.content")}}open(t,i){return this.confirm.open(t,i).pipe(D(),d(o=>!!o))}static{this.\u0275fac=function(i){return new(i||e)(a(B),a(x))}}static{this.\u0275prov=r({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();export{H as a,m as b,V as c};