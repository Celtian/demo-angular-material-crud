import{a as ut,b as ft,c as Ct}from"./chunk-HIFUWXHB.js";import{a as $,b as tt,e as et,g as it,h,j as rt,k as ot,m as y,o as at,p as nt,q as lt,r as mt,t as pt,u as st,v as ct}from"./chunk-L2NYEKTY.js";import{a as ht,b as vt,c as bt}from"./chunk-22SHOGNK.js";import{c as M,e as N,f as j,g as z,ga as dt,h as L,i as A,n as q,o as H,t as K,u as X,v as Y,w as Z}from"./chunk-CF2SFLYO.js";import{a as _t,b as gt,c as xt,e as Mt,f as yt}from"./chunk-MHCCLBNY.js";import{Ab as F,Ad as J,Eb as p,Fb as u,Gb as B,Jb as R,Ka as e,La as s,Lb as k,N as V,Nb as r,Ob as o,Za as v,ab as b,bb as c,fb as P,ha as D,jb as n,kb as m,lb as _,pb as g,ra as f,sa as C,sb as x,ub as I,vd as G,wd as Q,yb as O,yd as U,zb as E,zd as W}from"./chunk-K4YFR4U3.js";var wt=i=>[i];function It(i,T){if(i&1){let l=g();n(0,"button",11),r(1,"translate"),r(2,"translate"),x("click",function(){f(l);let t=I();return C(t.form.controls.title.setValue(""))}),n(3,"mat-icon"),p(4,"close"),m()()}i&2&&(c("matTooltip",o(1,2,"uni.clear")),b("aria-label",o(2,4,"uni.clear")))}function Bt(i,T){if(i&1){let l=g();n(0,"button",11),r(1,"translate"),r(2,"translate"),x("click",function(){f(l);let t=I();return C(t.form.controls.body.setValue(""))}),n(3,"mat-icon"),p(4,"close"),m()()}i&2&&(c("matTooltip",o(1,2,"uni.clear")),b("aria-label",o(2,4,"uni.clear")))}function kt(i,T){i&1&&(n(0,"div",12)(1,"a",13),r(2,"localize"),p(3),r(4,"translate"),m(),_(5,"mat-icon",14),r(6,"translate"),n(7,"a",13),r(8,"localize"),p(9),r(10,"translate"),m()()),i&2&&(e(),c("routerLink",k(15,wt,o(2,5,"/"))),e(2),u(o(4,7,"breadcrumbs.app.posts")),e(2),b("aria-label",o(6,9,"uni.aria-label.arrow-icon")),e(2),c("routerLink",k(17,wt,o(8,11,"/create"))),e(2),u(o(10,13,"breadcrumbs.posts.create")))}var le=(()=>{class i{constructor(l,a,t,d,w,S,St,Pt){this.apiService=l,this.breadcrumbsPortalService=a,this.fb=t,this.snackBar=d,this.router=w,this.lr=S,this.translate=St,this.confirm=Pt,this.form=this.fb.group({title:new y("",{nonNullable:!0,validators:[h.required,h.min(3)]}),body:new y("",{nonNullable:!0,validators:[h.required,h.min(3)]}),userId:new y(1,{nonNullable:!0})})}canDeactivate(){return this.form.pristine||this.confirm.openCustomConfirmDialog(vt.UnsavedWork)}ngOnInit(){this.breadcrumbsPortalService.setPortal(this.portalContent)}ngOnDestroy(){this.portalContent?.detach()}onSubmit(){this.apiService.create(this.form.value).pipe(V()).subscribe({next:l=>{this.form.reset(l),this.snackBar.open(this.translate.instant("response.create.success"),this.translate.instant("uni.close"));let a=this.lr.translateRoute("/");this.router.navigate([a])},error:()=>{this.snackBar.open(this.translate.instant("response.create.failed"),this.translate.instant("uni.close"))}})}onReset(l){l.preventDefault(),this.form.reset()}static{this.\u0275fac=function(a){return new(a||i)(s(ht),s(Z),s(mt),s(dt),s(q),s(K),s(U),s(bt))}}static{this.\u0275cmp=D({type:i,selectors:[["app-post-create"]],viewQuery:function(a,t){if(a&1&&O(M,7),a&2){let d;E(d=F())&&(t.portalContent=d.first)}},standalone:!0,features:[R],decls:28,vars:21,consts:[["autosize","cdkTextareaAutosize"],[1,"flex","flex-col","gap-2","mt-2","text-center"],[3,"ngSubmit","reset","formGroup"],[1,"w-full"],["matInput","","type","text","formControlName","title"],["matSuffix","","mat-icon-button","",3,"matTooltip"],["matInput","","cdkTextareaAutosize","","formControlName","body",3,"placeholder"],[1,"flex","justify-center","gap-2"],["mat-button","","color","primary","type","reset",3,"disabled"],["mat-flat-button","","color","primary","type","submit",3,"disabled"],["class","container flex items-center gap-1 py-4",4,"cdkPortal"],["matSuffix","","mat-icon-button","",3,"click","matTooltip"],[1,"container","flex","items-center","gap-1","py-4"],["mat-button","","color","primary",3,"routerLink"],["aria-hidden","false","fontIcon","chevron_right"]],template:function(a,t){if(a&1){let d=g();n(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),p(3),m()(),n(4,"mat-card-content",1)(5,"form",2),x("ngSubmit",function(){return f(d),C(t.onSubmit())})("reset",function(S){return f(d),C(t.onReset(S))}),n(6,"mat-form-field",3)(7,"mat-label"),p(8),r(9,"translate"),m(),_(10,"input",4),v(11,It,5,6,"button",5),m(),n(12,"mat-form-field",3)(13,"mat-label"),p(14),r(15,"translate"),m(),_(16,"textarea",6,0),r(18,"translate"),v(19,Bt,5,6,"button",5),m(),n(20,"div",7)(21,"button",8),p(22),r(23,"translate"),m(),n(24,"button",9),p(25),r(26,"translate"),m()()()()(),v(27,kt,11,19,"div",10)}a&2&&(e(3),u(t.form.controls.title.value),e(2),c("formGroup",t.form),e(3),u(o(9,11,"form.post.title.label")),e(3),P(t.form.controls.title.value?11:-1),e(3),u(o(15,13,"form.post.body.label")),e(2),c("placeholder",o(18,15,"form.post.body.placeholder")),e(3),P(t.form.controls.body.value?19:-1),e(2),c("disabled",t.form.pristine),e(),B(" ",o(23,17,"uni.reset")," "),e(2),c("disabled",t.form.pristine||t.form.invalid),e(),B(" ",o(26,19,"uni.submit")," "))},dependencies:[pt,at,it,rt,ot,nt,lt,yt,_t,xt,Mt,gt,Q,G,Ct,ft,et,$,tt,ut,A,z,j,L,ct,st,N,M,J,W,H,Y,X],styles:["[_nghost-%COMP%]{width:100%;margin-right:auto;margin-left:auto;padding-right:1rem;padding-left:1rem}@media (min-width: 640px){[_nghost-%COMP%]{max-width:640px}}@media (min-width: 768px){[_nghost-%COMP%]{max-width:768px}}@media (min-width: 1024px){[_nghost-%COMP%]{max-width:1024px}}@media (min-width: 1280px){[_nghost-%COMP%]{max-width:1280px}}@media (min-width: 1536px){[_nghost-%COMP%]{max-width:1536px}}[_nghost-%COMP%]{display:block}[_nghost-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}[_nghost-%COMP%]{padding-top:1rem;padding-bottom:1rem}"],changeDetection:0})}}return i})();export{le as PostCreateComponent};
