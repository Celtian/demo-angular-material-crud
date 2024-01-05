import{a as ut,b as ft,c as ht}from"./chunk-J5QJOFTV.js";import{a as $,b as tt,e as et,g as it,h,j as rt,k as ot,m as x,o as at,p as nt,q as lt,r as mt,t as pt,u as st,v as ct}from"./chunk-5BTXGFW4.js";import{a as Ct,b as vt,c as bt}from"./chunk-RD253M3T.js";import{T as dt,c as _,e as N,f as j,g as z,h as L,i as A,n as q,o as H,t as K,u as X,v as Y,w as Z}from"./chunk-U4UMJC4W.js";import{a as _t,b as xt,c as gt,e as Mt,f as yt}from"./chunk-STS6MU2S.js";import{Ab as T,Ad as W,Bd as J,Cb as r,Db as o,Ga as t,Ha as c,Hb as E,Ib as F,Kb as R,M as D,Ra as w,Sa as d,Ya as C,Za as P,bb as n,cb as l,db as v,ea as O,hb as I,ja as y,ka as S,lb as b,nb as B,rb as p,sb as f,tb as k,wd as G,xd as Q,yb as V,zd as U}from"./chunk-6V6PCDCB.js";function Bt(i,s){if(i&1){let g=I();n(0,"button",11),b("click",function(){y(g);let e=B();return S(e.form.controls.title.setValue(""))}),r(1,"translate"),r(2,"translate"),n(3,"mat-icon"),p(4,"close"),l()()}i&2&&(d("matTooltip",o(2,4,"uni.clear")),w("aria-label",o(1,2,"uni.clear")))}function kt(i,s){if(i&1){let g=I();n(0,"button",11),b("click",function(){y(g);let e=B();return S(e.form.controls.body.setValue(""))}),r(1,"translate"),r(2,"translate"),n(3,"mat-icon"),p(4,"close"),l()()}i&2&&(d("matTooltip",o(2,4,"uni.clear")),w("aria-label",o(1,2,"uni.clear")))}var St=i=>[i];function Tt(i,s){i&1&&(n(0,"div",12)(1,"a",13),r(2,"localize"),p(3),r(4,"translate"),l(),v(5,"mat-icon",14),n(6,"a",13),r(7,"localize"),p(8),r(9,"translate"),l()()),i&2&&(t(1),d("routerLink",T(12,St,o(2,4,"/"))),t(2),f(o(4,6,"breadcrumbs.app.posts")),t(3),d("routerLink",T(14,St,o(7,8,"/create"))),t(2),f(o(9,10,"breadcrumbs.posts.create")))}var me=(()=>{let s=class s{constructor(m,e,a,u,M,wt,Pt,It){this.apiService=m,this.breadcrumbsPortalService=e,this.fb=a,this.snackBar=u,this.router=M,this.lr=wt,this.translate=Pt,this.confirm=It,this.form=this.fb.group({title:new x("",{nonNullable:!0,validators:[h.required,h.min(3)]}),body:new x("",{nonNullable:!0,validators:[h.required,h.min(3)]}),userId:new x(1,{nonNullable:!0})})}canDeactivate(){return this.form.pristine||this.confirm.openCustomConfirmDialog(vt.UnsavedWork)}ngOnInit(){this.breadcrumbsPortalService.setPortal(this.portalContent)}ngOnDestroy(){this.portalContent?.detach()}onSubmit(){this.apiService.create(this.form.value).pipe(D()).subscribe({next:m=>{this.form.reset(m),this.snackBar.open(this.translate.instant("response.create.success"),this.translate.instant("uni.close"));let e=this.lr.translateRoute("/");this.router.navigate([e])},error:()=>{this.snackBar.open(this.translate.instant("response.create.failed"),this.translate.instant("uni.close"))}})}onReset(m){m.preventDefault(),this.form.reset()}};s.\u0275fac=function(e){return new(e||s)(c(Ct),c(Z),c(mt),c(dt),c(q),c(K),c(U),c(bt))},s.\u0275cmp=O({type:s,selectors:[["app-post-create"]],viewQuery:function(e,a){if(e&1&&F(_,7),e&2){let u;E(u=R())&&(a.portalContent=u.first)}},standalone:!0,features:[V],decls:28,vars:21,consts:[[1,"flex","flex-col","gap-2","mt-2","text-center"],[3,"formGroup","ngSubmit","reset"],[1,"w-full"],["matInput","","type","text","formControlName","title"],["matSuffix","","mat-icon-button","",3,"matTooltip"],["matInput","","cdkTextareaAutosize","","formControlName","body",3,"placeholder"],["autosize","cdkTextareaAutosize"],[1,"flex","justify-center","gap-2"],["mat-button","","color","primary","type","reset",3,"disabled"],["mat-flat-button","","color","primary","type","submit",3,"disabled"],["class","container flex items-center gap-1 py-4",4,"cdkPortal"],["matSuffix","","mat-icon-button","",3,"matTooltip","click"],[1,"container","flex","items-center","gap-1","py-4"],["mat-button","","color","primary",3,"routerLink"],["aria-hidden","false","aria-label","Arrow icon","fontIcon","chevron_right"]],template:function(e,a){e&1&&(n(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),p(3),l()(),n(4,"mat-card-content",0)(5,"form",1),b("ngSubmit",function(){return a.onSubmit()})("reset",function(M){return a.onReset(M)}),n(6,"mat-form-field",2)(7,"mat-label"),p(8),r(9,"translate"),l(),v(10,"input",3),C(11,Bt,5,6,"button",4),l(),n(12,"mat-form-field",2)(13,"mat-label"),p(14),r(15,"translate"),l(),v(16,"textarea",5,6),r(18,"translate"),C(19,kt,5,6,"button",4),l(),n(20,"div",7)(21,"button",8),p(22),r(23,"translate"),l(),n(24,"button",9),p(25),r(26,"translate"),l()()()()(),C(27,Tt,10,16,"div",10)),e&2&&(t(3),f(a.form.controls.title.value),t(2),d("formGroup",a.form),t(3),f(o(9,11,"form.post.title.label")),t(3),P(11,a.form.controls.title.value?11:-1),t(3),f(o(15,13,"form.post.body.label")),t(2),d("placeholder",o(18,15,"form.post.body.placeholder")),t(3),P(19,a.form.controls.body.value?19:-1),t(2),d("disabled",a.form.pristine),t(1),k(" ",o(23,17,"uni.reset")," "),t(2),d("disabled",a.form.pristine||a.form.invalid),t(1),k(" ",o(26,19,"uni.submit")," "))},dependencies:[pt,at,it,rt,ot,nt,lt,yt,_t,gt,Mt,xt,Q,G,ht,ft,et,$,tt,ut,A,z,j,L,ct,st,N,_,J,W,H,Y,X],styles:["[_nghost-%COMP%]{width:100%;margin-right:auto;margin-left:auto;padding-right:1rem;padding-left:1rem}@media (min-width: 640px){[_nghost-%COMP%]{max-width:640px}}@media (min-width: 768px){[_nghost-%COMP%]{max-width:768px}}@media (min-width: 1024px){[_nghost-%COMP%]{max-width:1024px}}@media (min-width: 1280px){[_nghost-%COMP%]{max-width:1280px}}@media (min-width: 1536px){[_nghost-%COMP%]{max-width:1536px}}[_nghost-%COMP%]{display:block}[_nghost-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}[_nghost-%COMP%]{padding-top:1rem;padding-bottom:1rem}"],changeDetection:0});let i=s;return i})();export{me as PostCreateComponent};