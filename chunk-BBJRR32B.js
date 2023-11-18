import{a as _t,b as St}from"./chunk-HZ7GCV6C.js";import{a as at,b as lt,e as mt,g as st,h,j as pt,k as ct,m as _,o as dt,p as ut,q as ft,r as ht,t as vt,u as Ct,v as bt}from"./chunk-MH7YGNIM.js";import{a as xt,b as Mt,c as yt}from"./chunk-65QMIXDV.js";import{G as gt,c as g,e as L,f as G,g as Q,h as $,i as q,j as ot}from"./chunk-2Y6GGT4K.js";import{a as Pt,b as wt,c as Bt,e as Tt,f as Rt}from"./chunk-HPZ7DCPP.js";import{a as It}from"./chunk-YSYWTVNG.js";import{Aa as a,Ba as m,Ca as C,Db as z,Ga as w,Ic as H,Jc as W,K as N,Ka as b,L as k,Ma as B,Nc as J,Oc as K,P as y,Q as I,Qa as c,Qc as X,Ra as f,Sa as T,Sc as Y,Tc as Z,Uc as tt,Va as D,Xa as R,Xc as et,Yc as it,Za as r,Zc as rt,_a as o,ad as nt,bd as S,cb as U,db as j,ea as t,fa as s,fb as F,ia as O,oa as P,pa as p,rb as V,va as v,vb as A,x as E}from"./chunk-CNKLNQNQ.js";function jt(i,d){if(i&1){let x=w();a(0,"button",10),b("click",function(){y(x);let e=B();return I(e.form.controls.title.setValue(""))}),r(1,"translate"),r(2,"translate"),a(3,"mat-icon"),c(4,"close"),m()()}i&2&&(p("matTooltip",o(2,4,"UNI.clear")),P("aria-label",o(1,2,"UNI.clear")))}function Ft(i,d){if(i&1){let x=w();a(0,"button",10),b("click",function(){y(x);let e=B();return I(e.form.controls.body.setValue(""))}),r(1,"translate"),r(2,"translate"),a(3,"mat-icon"),c(4,"close"),m()()}i&2&&(p("matTooltip",o(2,4,"UNI.clear")),P("aria-label",o(1,2,"UNI.clear")))}var Et=i=>[i];function Vt(i,d){i&1&&(a(0,"div",11)(1,"a",12),r(2,"localize"),c(3),r(4,"translate"),m(),C(5,"mat-icon",13),a(6,"a",12),r(7,"localize"),c(8),r(9,"translate"),m()()),i&2&&(t(1),p("routerLink",R(12,Et,o(2,4,"/"))),t(2),f(o(4,6,"BREADCRUMBS.app.posts")),t(3),p("routerLink",R(14,Et,o(7,8,"/create"))),t(2),f(o(9,10,"BREADCRUMBS.posts.create")))}var Pe=(()=>{let d=class d{constructor(l,e,n,u,M,Nt,kt,Ot,Dt,Ut){this.apiService=l,this.breadcrumbsPortalService=e,this.fb=n,this.snackBar=u,this.router=M,this.lr=Nt,this.language=kt,this.seoService=Ot,this.translate=Dt,this.confirm=Ut,this.destroyRef=N(O),this.form=this.fb.group({title:new _("",{nonNullable:!0,validators:[h.required,h.min(3)]}),body:new _("",{nonNullable:!0,validators:[h.required,h.min(3)]}),userId:new _(1,{nonNullable:!0})})}canDeactivate(){return this.form.pristine||this.confirm.openCustomConfirmDialog(Mt.UnsavedWork)}ngOnInit(){this.breadcrumbsPortalService.setPortal(this.portalContent),this.language.language$.pipe(z(this.destroyRef)).subscribe(()=>{let l=this.lr.translateRoute(`/${S.POSTS.CREATE}`);this.seoService.setSeo({title:this.translate.instant(`SEO.${S.POSTS.CREATE}.title`),description:this.translate.instant(`SEO.${S.POSTS.CREATE}.description`)},l)})}ngOnDestroy(){this.portalContent?.detach()}onSubmit(){this.apiService.create(this.form.value).pipe(E()).subscribe({next:l=>{this.form.reset(l),this.snackBar.open(this.translate.instant("response.create.success"),this.translate.instant("UNI.close"));let e=this.lr.translateRoute("/");this.router.navigate([e])},error:()=>{this.snackBar.open(this.translate.instant("response.create.failed"),this.translate.instant("UNI.close"))}})}onReset(l){l.preventDefault(),this.form.reset()}};d.\u0275fac=function(e){return new(e||d)(s(xt),s(ot),s(ht),s(gt),s(J),s(et),s(nt),s(It),s(Y),s(yt))},d.\u0275cmp=k({type:d,selectors:[["app-post-create"]],viewQuery:function(e,n){if(e&1&&j(g,7),e&2){let u;U(u=F())&&(n.portalContent=u.first)}},standalone:!0,features:[D],decls:27,vars:21,consts:[[1,"flex","flex-col","gap-2","mt-2","text-center"],[3,"formGroup","ngSubmit","reset"],[1,"w-full"],["matInput","","type","text","formControlName","title"],["matSuffix","","mat-icon-button","",3,"matTooltip","click",4,"ngIf"],["matInput","","formControlName","body",3,"placeholder"],[1,"flex","justify-center","gap-2"],["mat-button","","color","primary","type","reset",3,"disabled"],["mat-flat-button","","color","primary","type","submit",3,"disabled"],["class","container flex items-center gap-1 py-4",4,"cdkPortal"],["matSuffix","","mat-icon-button","",3,"matTooltip","click"],[1,"container","flex","items-center","gap-1","py-4"],["mat-button","","color","primary",3,"routerLink"],["aria-hidden","false","aria-label","Arrow icon","fontIcon","chevron_right"]],template:function(e,n){e&1&&(a(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),c(3),m()(),a(4,"mat-card-content",0)(5,"form",1),b("ngSubmit",function(){return n.onSubmit()})("reset",function(M){return n.onReset(M)}),a(6,"mat-form-field",2)(7,"mat-label"),c(8),r(9,"translate"),m(),C(10,"input",3),v(11,jt,5,6,"button",4),m(),a(12,"mat-form-field",2)(13,"mat-label"),c(14),r(15,"translate"),m(),C(16,"textarea",5),r(17,"translate"),v(18,Ft,5,6,"button",4),m(),a(19,"div",6)(20,"button",7),c(21),r(22,"translate"),m(),a(23,"button",8),c(24),r(25,"translate"),m()()()()(),v(26,Vt,10,16,"div",9)),e&2&&(t(3),f(n.form.controls.title.value),t(2),p("formGroup",n.form),t(3),f(o(9,11,"form.post.title.label")),t(3),p("ngIf",n.form.controls.title.value),t(3),f(o(15,13,"form.post.body.label")),t(2),p("placeholder",o(17,15,"form.post.body.placeholder")),t(2),p("ngIf",n.form.controls.body.value),t(2),p("disabled",n.form.pristine),t(1),T(" ",o(22,17,"UNI.reset")," "),t(2),p("disabled",n.form.pristine||n.form.invalid),t(1),T(" ",o(25,19,"UNI.submit")," "))},dependencies:[A,V,vt,dt,st,pt,ct,ut,ft,Rt,Pt,Bt,Tt,wt,W,H,St,_t,mt,at,lt,q,Q,G,$,bt,Ct,L,g,tt,Z,X,K,rt,it],styles:["[_nghost-%COMP%]{width:100%;margin-right:auto;margin-left:auto;padding-right:1rem;padding-left:1rem}@media (min-width: 640px){[_nghost-%COMP%]{max-width:640px}}@media (min-width: 768px){[_nghost-%COMP%]{max-width:768px}}@media (min-width: 1024px){[_nghost-%COMP%]{max-width:1024px}}@media (min-width: 1280px){[_nghost-%COMP%]{max-width:1280px}}@media (min-width: 1536px){[_nghost-%COMP%]{max-width:1536px}}[_nghost-%COMP%]{display:block}[_nghost-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}[_nghost-%COMP%]{padding-top:1rem;padding-bottom:1rem}"],changeDetection:0});let i=d;return i})();export{Pe as PostCreateComponent};
