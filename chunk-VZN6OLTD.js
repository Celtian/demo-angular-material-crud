import{a as Dt,b as Rt}from"./chunk-HZ7GCV6C.js";import{a as xt,b as St,e as gt,g as vt,h as C,j as bt,k as Ct,o as It,p as yt,q as Et,r as Mt,t as Pt,u as Tt,v as Nt}from"./chunk-MH7YGNIM.js";import{a as N}from"./chunk-57MPDPP3.js";import{a as Bt}from"./chunk-KT64K72B.js";import{a as kt,b as F,c as Ot}from"./chunk-65QMIXDV.js";import{G as wt,c as T,e as Y,f as Z,g as tt,h as et,i as it,j as _t}from"./chunk-2Y6GGT4K.js";import{a as Ut,b as Ft,c as jt,d as Lt,e as At,f as zt}from"./chunk-HPZ7DCPP.js";import{a as Vt}from"./chunk-YSYWTVNG.js";import{A as M,Aa as r,Ba as o,Ca as h,D,Da as k,Db as U,Ea as O,Ga as v,Ic as at,Jc as nt,K as A,Ka as b,Kc as rt,L as z,Ma as f,Nc as ot,Oc as st,P as x,Q as S,Qa as p,Qc as ct,Ra as _,Sa as P,Sc as lt,Tc as mt,Uc as pt,Va as G,Xa as V,Xc as dt,Ya as Q,Yc as ut,Za as c,Zc as ft,_a as l,ad as ht,bd as I,cb as q,db as H,ea as a,fa as u,fb as W,ia as $,m as j,oa as R,pa as s,r as E,ra as B,rb as J,v as L,va as g,vb as K,wb as X,x as w}from"./chunk-CNKLNQNQ.js";function Xt(e,m){if(e&1){let i=v();r(0,"div",12)(1,"button",13),b("click",function(){x(i);let t=f(2);return S(t.onDelete())}),p(2),c(3,"translate"),o()()}e&2&&(a(2),_(l(3,1,"UNI.delete")))}function Yt(e,m){if(e&1){let i=v();r(0,"button",14),b("click",function(){x(i);let t=f(2);return t.form.controls.title.setValue(""),S(t.form.controls.body.markAsDirty())}),c(1,"translate"),c(2,"translate"),r(3,"mat-icon"),p(4,"close"),o()()}e&2&&(s("matTooltip",l(2,4,"UNI.clear")),R("aria-label",l(1,2,"UNI.clear")))}function Zt(e,m){if(e&1){let i=v();r(0,"button",14),b("click",function(){x(i);let t=f(2);return t.form.controls.body.setValue(""),S(t.form.controls.body.markAsDirty())}),c(1,"translate"),c(2,"translate"),r(3,"mat-icon"),p(4,"close"),o()()}e&2&&(s("matTooltip",l(2,4,"UNI.clear")),R("aria-label",l(1,2,"UNI.clear")))}function te(e,m){if(e&1){let i=v();k(0),g(1,Xt,4,3,"div",2),r(2,"mat-card")(3,"mat-card-header")(4,"mat-card-subtitle"),p(5),o(),r(6,"mat-card-title"),p(7),o()(),r(8,"mat-card-content",3)(9,"form",4),b("ngSubmit",function(){x(i);let t=f();return S(t.onSubmit())})("reset",function(t){x(i);let d=f();return S(d.onReset(t))}),r(10,"mat-form-field",5)(11,"mat-label"),p(12),c(13,"translate"),o(),h(14,"input",6),g(15,Yt,5,6,"button",7),o(),r(16,"mat-form-field",5)(17,"mat-label"),p(18),c(19,"translate"),o(),h(20,"textarea",8),c(21,"translate"),g(22,Zt,5,6,"button",7),o(),r(23,"div",9)(24,"button",10),p(25),c(26,"translate"),o(),r(27,"button",11),p(28),c(29,"translate"),o()()()()(),O()}if(e&2){let i=f();a(1),s("ngIf",i.dataSource.state()==="data"),a(3),B("blur-sm",i.dataSource.state()!=="data"),a(1),_("#"+i.dataSource.data().id),a(1),B("blur-sm",i.dataSource.state()!=="data"),a(1),_(i.dataSource.data().title),a(2),s("formGroup",i.form),a(3),_(l(13,17,"form.post.title.label")),a(3),s("ngIf",i.form.controls.title.value),a(3),_(l(19,19,"form.post.body.label")),a(2),s("placeholder",l(21,21,"form.post.body.placeholder")),a(2),s("ngIf",i.form.controls.body.value),a(2),s("disabled",i.form.pristine),a(1),P(" ",l(26,23,"UNI.reset")," "),a(2),s("disabled",i.form.pristine||i.form.invalid),a(1),P(" ",l(29,25,"UNI.submit")," ")}}function ee(e,m){if(e&1&&(r(0,"mat-card")(1,"mat-card-content",15),h(2,"mat-icon",16),r(3,"div"),p(4),o()()()),e&2){let i=f();a(4),_(i.dataSource.error())}}function ie(e,m){e&1&&(r(0,"mat-card")(1,"mat-card-content",15),h(2,"mat-icon",17),r(3,"div"),p(4),c(5,"translate"),o()()()),e&2&&(a(4),_(l(5,1,"ERROR.post-was-not-found")))}var ae=(e,m)=>[e,m],$t=e=>[e];function ne(e,m){if(e&1&&(k(0),h(1,"mat-icon",20),r(2,"a",19),c(3,"localize"),p(4),o(),h(5,"mat-icon",20),r(6,"a",19),c(7,"localize"),p(8),c(9,"translate"),o(),O()),e&2){let i=f(2);a(2),s("routerLink",Q(10,ae,l(3,4,"/"),i.dataSource.data().id)),a(2),_(i.dataSource.data().id),a(2),s("routerLink",V(13,$t,l(7,6,"/"+i.dataSource.data().id+"/"+i.ROUTE_DEFINITION.POSTS.EDIT))),a(2),P(" ",l(9,8,"BREADCRUMBS.posts.edit"),"")}}function re(e,m){if(e&1&&(r(0,"div",18)(1,"a",19),c(2,"localize"),p(3),c(4,"translate"),o(),g(5,ne,10,15,"ng-container",0),o()),e&2){let i=f();a(1),s("routerLink",V(7,$t,l(2,3,"/"))),a(2),_(l(4,5,"BREADCRUMBS.app.posts")),a(2),s("ngIf",i.dataSource.state()==="data")}}var Je=(()=>{let m=class m{constructor(n,t,d,y,Gt,Qt,qt,Ht,Wt,Jt,Kt){this.apiService=n,this.route=t,this.translate=d,this.breadcrumbsPortalService=y,this.fb=Gt,this.snackBar=Qt,this.language=qt,this.seoService=Ht,this.lr=Wt,this.confirm=Jt,this.router=Kt,this.destroyRef=A($),this.dataSource=new Bt(N),this.ROUTE_DEFINITION=I,this.form=this.fb.nonNullable.group({title:["",[C.required,C.min(3)]],body:["",[C.required,C.min(3)]]})}canDeactivate(){return this.form.pristine||this.confirm.openCustomConfirmDialog(F.UnsavedWork)}ngOnInit(){this.breadcrumbsPortalService.setPortal(this.portalContent);let n=this.route.paramMap.pipe(j(t=>t.get("id")));n.pipe(E(t=>!Number.isNaN(Number(t))),M(t=>this.language.language$.pipe(D({next:()=>{let d=this.lr.translateRoute(`/${t}/${I.POSTS.EDIT}`);this.seoService.setSeo({title:this.translate.instant(`SEO.${I.POSTS.EDIT}.title`),description:this.translate.instant(`SEO.${I.POSTS.EDIT}.description`)},d)}}))),U(this.destroyRef)).subscribe(),n.pipe(L(500),D(t=>{Number.isNaN(Number(t))&&this.dataSource.setData(N)}),E(t=>!Number.isNaN(Number(t))),M(t=>this.apiService.detail(Number(t))),U(this.destroyRef)).subscribe({next:t=>{this.dataSource.setData(t),this.form.patchValue(t)},error:t=>{if(t instanceof X&&t.status>=400&&t.status<500)this.dataSource.setData(N);else{let d=this.translate.instant("ERROR.unexpected-exception");this.dataSource.setError(d)}}})}ngOnDestroy(){this.portalContent?.detach()}onSubmit(){this.apiService.patch(this.dataSource.data().id,this.form.value).pipe(w()).subscribe({next:n=>{this.dataSource.setData(n),this.form.reset(n),this.snackBar.open(this.translate.instant("response.update.success"),this.translate.instant("UNI.close"))},error:()=>{this.snackBar.open(this.translate.instant("response.update.failed"),this.translate.instant("UNI.close"))}})}onReset(n){n.preventDefault(),this.form.reset(this.dataSource.data())}onDelete(){this.confirm.openCustomConfirmDialog(F.Delete).pipe(w(),E(n=>!!n),M(()=>this.apiService.delete(this.dataSource.data().id))).subscribe({next:()=>{this.snackBar.open(this.translate.instant("response.delete.success"),this.translate.instant("UNI.close"));let n=this.lr.translateRoute("/");this.router.navigate([n])},error:()=>{this.snackBar.open(this.translate.instant("response.delete.failed"),this.translate.instant("UNI.close"))}})}};m.\u0275fac=function(t){return new(t||m)(u(kt),u(rt),u(lt),u(_t),u(Mt),u(wt),u(ht),u(Vt),u(dt),u(Ot),u(ot))},m.\u0275cmp=z({type:m,selectors:[["app-post-edit"]],viewQuery:function(t,d){if(t&1&&H(T,7),t&2){let y;q(y=W())&&(d.portalContent=y.first)}},standalone:!0,features:[G],decls:4,vars:3,consts:[[4,"ngIf"],["class","container flex items-center gap-1 py-4",4,"cdkPortal"],["class","flex items-end justify-end gap-2",4,"ngIf"],[1,"flex","flex-col","gap-2","mt-2","text-center"],[3,"formGroup","ngSubmit","reset"],[1,"w-full"],["matInput","","type","text","formControlName","title"],["matSuffix","","mat-icon-button","",3,"matTooltip","click",4,"ngIf"],["matInput","","formControlName","body",3,"placeholder"],[1,"flex","justify-center","gap-2"],["mat-button","","color","primary","type","reset",3,"disabled"],["mat-flat-button","","color","primary","type","submit",3,"disabled"],[1,"flex","items-end","justify-end","gap-2"],["mat-button","","color","accent",3,"click"],["matSuffix","","mat-icon-button","",3,"matTooltip","click"],[1,"flex","flex-col","gap-2","text-center"],["aria-hidden","false","aria-label","Error icon","fontIcon","error"],["aria-hidden","false","aria-label","Warning icon","fontIcon","warning"],[1,"container","flex","items-center","gap-1","py-4"],["mat-button","","color","primary",3,"routerLink"],["aria-hidden","false","aria-label","Arrow icon","fontIcon","chevron_right"]],template:function(t,d){t&1&&g(0,te,30,27,"ng-container",0)(1,ee,5,1,"mat-card",0)(2,ie,6,3,"mat-card",0)(3,re,6,9,"div",1),t&2&&(s("ngIf",d.dataSource.state()==="loading"||d.dataSource.state()==="data"),a(1),s("ngIf",d.dataSource.state()==="error"),a(1),s("ngIf",d.dataSource.state()==="empty"))},dependencies:[K,J,Y,T,nt,at,it,tt,Z,et,zt,Ut,jt,At,Lt,Ft,Rt,Dt,gt,xt,St,Nt,Tt,Pt,It,vt,bt,Ct,yt,Et,pt,mt,ct,st,ft,ut],styles:["[_nghost-%COMP%]{width:100%;margin-right:auto;margin-left:auto;padding-right:1rem;padding-left:1rem}@media (min-width: 640px){[_nghost-%COMP%]{max-width:640px}}@media (min-width: 768px){[_nghost-%COMP%]{max-width:768px}}@media (min-width: 1024px){[_nghost-%COMP%]{max-width:1024px}}@media (min-width: 1280px){[_nghost-%COMP%]{max-width:1280px}}@media (min-width: 1536px){[_nghost-%COMP%]{max-width:1536px}}[_nghost-%COMP%]{display:block}[_nghost-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}[_nghost-%COMP%]{padding-top:1rem;padding-bottom:1rem}"],changeDetection:0});let e=m;return e})();export{Je as PostEditComponent};
