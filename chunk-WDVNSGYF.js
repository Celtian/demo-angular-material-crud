import{a as mt}from"./chunk-J4O7MC66.js";import{b as E}from"./chunk-DMMVI4L3.js";import{a as pt}from"./chunk-O26ZB5O5.js";import{a as ut,b as ft,c as ht}from"./chunk-RLCGFSDM.js";import{G as lt,c as P,e as W,f as X,g as G,i as J,j as dt}from"./chunk-JFFU544U.js";import{a as St,b as vt,c as Ct,d as gt,e as _t,f as It}from"./chunk-PVXKQJTE.js";import{a as xt}from"./chunk-Q4WCI2G6.js";import{$c as D,A as _,Aa as o,Ba as r,Ca as v,Cb as O,D as M,Ga as U,Hc as K,Ic as Y,Jc as Z,K as N,Ka as F,L as B,Ma as f,Mc as tt,Nc as et,P as k,Q as L,Qa as c,Qc as it,Ra as u,Rc as at,Sa as b,Sc as nt,Va as A,Vc as ot,Wc as rt,Xa as y,Xc as st,Ya as z,Za as p,_a as m,_c as ct,cb as Q,db as V,ea as i,fa as l,fb as $,ia as j,m as R,pa as S,r as g,ra as h,tb as H,v as w,va as I,vb as q,wa as x,x as T}from"./chunk-FJYUF6LK.js";var bt=e=>[e];function Rt(e,n){if(e&1){let a=U();o(0,"div",4)(1,"button",5),F("click",function(){k(a);let t=f(2);return L(t.onDelete())}),c(2),p(3,"translate"),r(),o(4,"a",6),p(5,"localize"),c(6),p(7,"translate"),r()()}if(e&2){let a=f(2);i(2),u(m(3,3,"UNI.delete")),i(2),S("routerLink",y(9,bt,m(5,5,"/"+a.dataSource.data().id+"/"+a.ROUTE_DEFINITION.POSTS.EDIT))),i(2),u(m(7,7,"UNI.edit"))}}function wt(e,n){if(e&1&&(I(0,Rt,8,11,"div",1),o(1,"mat-card")(2,"mat-card-header")(3,"mat-card-subtitle"),c(4),r(),o(5,"mat-card-title"),c(6),p(7,"uppercase"),r()(),o(8,"mat-card-content")(9,"p",2),c(10),p(11,"translate"),r(),o(12,"p"),c(13),r(),o(14,"p",2),c(15),p(16,"translate"),r(),v(17,"app-user-info",3),r()()),e&2){let a=f();x(0,a.dataSource.state()==="data"?0:-1),i(3),h("blur-sm",a.dataSource.state()==="loading"),i(1),u("#"+a.dataSource.data().id),i(1),h("blur-sm",a.dataSource.state()==="loading"),i(1),u(m(7,18,a.dataSource.data().title)),i(3),h("blur-sm",a.dataSource.state()==="loading"),i(1),b(" ",m(11,20,"post-detail.about-post")," "),i(2),h("blur-sm",a.dataSource.state()==="loading"),i(1),b(" ",a.dataSource.data().body," "),i(1),h("blur-sm",a.dataSource.state()==="loading"),i(1),b(" ",m(16,22,"post-detail.about-author")," "),i(2),S("user",a.dataSource.data().user)("isLoading",a.dataSource.state()==="loading")}}function Tt(e,n){if(e&1&&(o(0,"mat-card")(1,"mat-card-content",7),v(2,"mat-icon",8),o(3,"div"),c(4),r()()()),e&2){let a=f();i(4),u(a.dataSource.error())}}function Nt(e,n){e&1&&(o(0,"mat-card")(1,"mat-card-content",7),v(2,"mat-icon",9),o(3,"div"),c(4),p(5,"translate"),r()()()),e&2&&(i(4),u(m(5,1,"ERROR.post-was-not-found")))}var Bt=(e,n)=>[e,n];function kt(e,n){if(e&1&&(v(0,"mat-icon",11),o(1,"a",6),p(2,"localize"),c(3),r()),e&2){let a=f(2);i(1),S("routerLink",z(4,Bt,m(2,2,"/"),a.dataSource.data().id)),i(2),u(a.dataSource.data().id)}}function Lt(e,n){if(e&1&&(o(0,"div",10)(1,"a",6),p(2,"localize"),c(3),p(4,"translate"),r(),I(5,kt,4,7),r()),e&2){let a=f();i(1),S("routerLink",y(7,bt,m(2,3,"/"))),i(2),u(m(4,5,"BREADCRUMBS.app.posts")),i(2),x(5,a.dataSource.state()==="data"?5:-1)}}var Ce=(()=>{let n=class n{constructor(s,t,d,C,Pt,Dt,Et,Mt,yt,Ot){this.apiService=s,this.route=t,this.translate=d,this.breadcrumbsPortalService=C,this.language=Pt,this.seoService=Dt,this.lr=Et,this.confirm=Mt,this.router=yt,this.snackBar=Ot,this.destroyRef=N(j),this.dataSource=new pt(E),this.ROUTE_DEFINITION=D}ngOnDestroy(){this.portalContent?.detach()}ngOnInit(){this.breadcrumbsPortalService.setPortal(this.portalContent);let s=this.route.paramMap.pipe(R(t=>t.get("id")));s.pipe(g(t=>!Number.isNaN(Number(t))),_(t=>this.language.language$.pipe(M({next:()=>{let d=this.lr.translateRoute(`/${t}`);this.seoService.setSeo({title:this.translate.instant(`SEO.${D.POSTS.DETAIL}.title`),description:this.translate.instant(`SEO.${D.POSTS.DETAIL}.description`)},d)}}))),O(this.destroyRef)).subscribe(),s.pipe(w(500),M(t=>{Number.isNaN(Number(t))&&this.dataSource.setData(E)}),g(t=>!Number.isNaN(Number(t))),_(t=>this.apiService.detailExpanded(Number(t))),O(this.destroyRef)).subscribe({next:t=>{this.dataSource.setData(t)},error:t=>{if(t instanceof q&&t.status>=400&&t.status<500)this.dataSource.setData(E);else{let d=this.translate.instant("ERROR.unexpected-exception");this.dataSource.setError(d)}}})}onDelete(){this.confirm.openCustomConfirmDialog(ft.Delete).pipe(T(),g(s=>!!s),_(()=>this.apiService.delete(this.dataSource.data().id))).subscribe({next:()=>{this.snackBar.open(this.translate.instant("response.delete.success"),this.translate.instant("UNI.close"));let s=this.lr.translateRoute("/");this.router.navigate([s])},error:()=>{this.snackBar.open(this.translate.instant("response.delete.failed"),this.translate.instant("UNI.close"))}})}};n.\u0275fac=function(t){return new(t||n)(l(ut),l(Z),l(it),l(dt),l(ct),l(xt),l(ot),l(ht),l(tt),l(lt))},n.\u0275cmp=B({type:n,selectors:[["app-post-detail"]],viewQuery:function(t,d){if(t&1&&V(P,7),t&2){let C;Q(C=$())&&(d.portalContent=C.first)}},standalone:!0,features:[A],decls:4,vars:3,consts:[["class","container flex items-center gap-1 py-4",4,"cdkPortal"],["class","flex items-end justify-end gap-2"],[1,"mb-2","font-semibold","text-md"],[3,"user","isLoading"],[1,"flex","items-end","justify-end","gap-2"],["mat-button","","color","accent",3,"click"],["mat-button","","color","primary",3,"routerLink"],[1,"flex","flex-col","gap-2","text-center"],["aria-hidden","false","aria-label","Error icon","fontIcon","error"],["aria-hidden","false","aria-label","Warning icon","fontIcon","warning"],[1,"container","flex","items-center","gap-1","py-4"],["aria-hidden","false","aria-label","Arrow icon","fontIcon","chevron_right"]],template:function(t,d){t&1&&I(0,wt,18,24,"mat-card")(1,Tt,5,1,"mat-card")(2,Nt,6,3,"mat-card")(3,Lt,6,9,"div",0),t&2&&(x(0,d.dataSource.state()==="data"||d.dataSource.state()==="loading"?0:-1),i(1),x(1,d.dataSource.state()==="error"?1:-1),i(1),x(2,d.dataSource.state()==="empty"?2:-1))},dependencies:[H,It,St,Ct,_t,gt,vt,Y,K,J,G,X,W,P,nt,at,mt,et,st,rt],styles:["[_nghost-%COMP%]{width:100%;margin-right:auto;margin-left:auto;padding-right:1rem;padding-left:1rem}@media (min-width: 640px){[_nghost-%COMP%]{max-width:640px}}@media (min-width: 768px){[_nghost-%COMP%]{max-width:768px}}@media (min-width: 1024px){[_nghost-%COMP%]{max-width:1024px}}@media (min-width: 1280px){[_nghost-%COMP%]{max-width:1280px}}@media (min-width: 1536px){[_nghost-%COMP%]{max-width:1536px}}[_nghost-%COMP%]{display:block}[_nghost-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}[_nghost-%COMP%]{padding-top:1rem;padding-bottom:1rem}"],changeDetection:0});let e=n;return e})();export{Ce as PostDetailComponent};