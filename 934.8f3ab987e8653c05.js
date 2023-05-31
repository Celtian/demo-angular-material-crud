"use strict";(self.webpackChunkdemo_angular_material_crud=self.webpackChunkdemo_angular_material_crud||[]).push([[934],{3934:(H,C,o)=>{o.r(C),o.d(C,{PostCreateModule:()=>B});var d=o(8023),v=o(4755),r=o(9401),c=o(1728),l=o(6012),x=o(430),Z=o(8097),P=o(3649),p=o(3978),T=o(7066),m=o(5159),u=o(2054),I=o(1369),t=o(2223),S=o(5855),M=o(590),b=o(5910),f=o(951),O=o(4761),U=o(2543),N=o(2342),R=o(5531),L=o(2186),h=o(9114);function J(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.form.controls.title.setValue(""))}),t.ALo(1,"translate"),t.ALo(2,"translate"),t.TgZ(3,"mat-icon"),t._uU(4,"close"),t.qZA()()}2&e&&(t.Q6J("matTooltip",t.lcZ(2,4,"UNI.clear")),t.uIk("aria-label",t.lcZ(1,2,"UNI.clear")))}function Q(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.form.controls.body.setValue(""))}),t.ALo(1,"translate"),t.ALo(2,"translate"),t.TgZ(3,"mat-icon"),t._uU(4,"close"),t.qZA()()}2&e&&(t.Q6J("matTooltip",t.lcZ(2,4,"UNI.clear")),t.uIk("aria-label",t.lcZ(1,2,"UNI.clear")))}const A=function(e){return[e]};function Y(e,s){1&e&&(t.TgZ(0,"div",11)(1,"a",12),t.ALo(2,"localize"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t._UZ(5,"mat-icon",13),t.TgZ(6,"a",12),t.ALo(7,"localize"),t._uU(8),t.ALo(9,"translate"),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("routerLink",t.VKq(12,A,t.lcZ(2,4,"/"))),t.xp6(2),t.Oqu(t.lcZ(4,6,"BREADCRUMBS.app.posts")),t.xp6(3),t.Q6J("routerLink",t.VKq(14,A,t.lcZ(7,8,"/create"))),t.xp6(2),t.Oqu(t.lcZ(9,10,"BREADCRUMBS.posts.create")))}const y=[{path:"",component:(()=>{class e{constructor(n,a,i,g,D,F,j,K,z,G){this.apiService=n,this.breadcrumbsPortalService=a,this.fb=i,this.snackBar=g,this.router=D,this.lr=F,this.language=j,this.seoService=K,this.translate=z,this.confirm=G,this.destroyRef=(0,t.f3M)(t.ktI),this.form=this.fb.group({title:new r.NI("",{nonNullable:!0,validators:[r.kI.required,r.kI.min(3)]}),body:new r.NI("",{nonNullable:!0,validators:[r.kI.required,r.kI.min(3)]}),userId:new r.NI(1,{nonNullable:!0})})}canDeactivate(){return this.form.pristine||this.confirm.openCustomConfirmDialog(b.C.UnsavedWork)}ngOnInit(){this.breadcrumbsPortalService.setPortal(this.portalContent),this.language.language$.pipe((0,S.sL)(this.destroyRef)).subscribe(()=>{const n=this.lr.translateRoute(`/${f.Z.POSTS.CREATE}`);this.seoService.setSeo({title:this.translate.instant(`SEO.${f.Z.POSTS.CREATE}.title`),description:this.translate.instant(`SEO.${f.Z.POSTS.CREATE}.description`)},n)})}ngOnDestroy(){this.portalContent?.detach()}onSubmit(){this.apiService.create(this.form.value).pipe((0,M.P)()).subscribe({next:n=>{this.form.reset(n),this.snackBar.open(this.translate.instant("response.create.success"),this.translate.instant("UNI.close"));const a=this.lr.translateRoute("/");this.router.navigate([a])},error:()=>{this.snackBar.open(this.translate.instant("response.create.failed"),this.translate.instant("UNI.close"))}})}onReset(n){n.preventDefault(),this.form.reset()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(O.s),t.Y36(U.H),t.Y36(r.qu),t.Y36(N.ux),t.Y36(m.F0),t.Y36(u.An),t.Y36(R.T),t.Y36(L.v),t.Y36(p.sK),t.Y36(b.w))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-post-create"]],viewQuery:function(n,a){if(1&n&&t.Gf(d.ig,7),2&n){let i;t.iGM(i=t.CRH())&&(a.portalContent=i.first)}},decls:27,vars:21,consts:[[1,"flex","flex-col","gap-2","mt-2","text-center"],[3,"formGroup","ngSubmit","reset"],[1,"w-full"],["matInput","","type","text","formControlName","title"],["matSuffix","","mat-icon-button","",3,"matTooltip","click",4,"ngIf"],["matInput","","formControlName","body",3,"placeholder"],[1,"flex","justify-center","gap-2"],["mat-button","","color","primary","type","reset",3,"disabled"],["mat-flat-button","","color","primary","type","submit",3,"disabled"],["class","container flex items-center gap-1 py-4",4,"cdkPortal"],["matSuffix","","mat-icon-button","",3,"matTooltip","click"],[1,"container","flex","items-center","gap-1","py-4"],["mat-button","","color","primary",3,"routerLink"],["aria-hidden","false","aria-label","Arrow icon","fontIcon","chevron_right"]],template:function(n,a){1&n&&(t.TgZ(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),t._uU(3),t.qZA()(),t.TgZ(4,"mat-card-content",0)(5,"form",1),t.NdJ("ngSubmit",function(){return a.onSubmit()})("reset",function(g){return a.onReset(g)}),t.TgZ(6,"mat-form-field",2)(7,"mat-label"),t._uU(8),t.ALo(9,"translate"),t.qZA(),t._UZ(10,"input",3),t.YNc(11,J,5,6,"button",4),t.qZA(),t.TgZ(12,"mat-form-field",2)(13,"mat-label"),t._uU(14),t.ALo(15,"translate"),t.qZA(),t._UZ(16,"textarea",5),t.ALo(17,"translate"),t.YNc(18,Q,5,6,"button",4),t.qZA(),t.TgZ(19,"div",6)(20,"button",7),t._uU(21),t.ALo(22,"translate"),t.qZA(),t.TgZ(23,"button",8),t._uU(24),t.ALo(25,"translate"),t.qZA()()()()(),t.YNc(26,Y,10,16,"div",9)),2&n&&(t.xp6(3),t.Oqu(a.form.controls.title.value),t.xp6(2),t.Q6J("formGroup",a.form),t.xp6(3),t.Oqu(t.lcZ(9,11,"form.post.title.label")),t.xp6(3),t.Q6J("ngIf",a.form.controls.title.value),t.xp6(3),t.Oqu(t.lcZ(15,13,"form.post.body.label")),t.xp6(2),t.Q6J("placeholder",t.lcZ(17,15,"form.post.body.placeholder")),t.xp6(2),t.Q6J("ngIf",a.form.controls.body.value),t.xp6(2),t.Q6J("disabled",a.form.pristine),t.xp6(1),t.hij(" ",t.lcZ(22,17,"UNI.reset")," "),t.xp6(2),t.Q6J("disabled",a.form.pristine||a.form.invalid),t.xp6(1),t.hij(" ",t.lcZ(25,19,"UNI.submit")," "))},dependencies:[v.O5,m.rH,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,l.a8,l.dn,l.dk,l.n5,x.Hw,Z.Nt,h.KE,h.hX,h.R9,c.zs,c.lW,c.RK,P.gM,d.ig,u.lO,p.X$],styles:["[_nghost-%COMP%]{width:100%;margin-right:auto;margin-left:auto;padding-right:1rem;padding-left:1rem}@media (min-width: 640px){[_nghost-%COMP%]{max-width:640px}}@media (min-width: 768px){[_nghost-%COMP%]{max-width:768px}}@media (min-width: 1024px){[_nghost-%COMP%]{max-width:1024px}}@media (min-width: 1280px){[_nghost-%COMP%]{max-width:1280px}}@media (min-width: 1536px){[_nghost-%COMP%]{max-width:1536px}}[_nghost-%COMP%]{display:block}[_nghost-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}[_nghost-%COMP%]{padding-top:1rem;padding-bottom:1rem}"],changeDetection:0}),e})(),canDeactivate:[I.F]}];let E=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.Bz.forChild(y),u.fQ.forChild(y),m.Bz,u.fQ]}),e})(),B=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[v.ez,E,r.UX,l.QW,x.Ps,Z.c,c.ot,P.AV,d.eL,p.aw,T.D]}),e})()}}]);