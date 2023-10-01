"use strict";(self.webpackChunkdemo_angular_material_crud=self.webpackChunkdemo_angular_material_crud||[]).push([[223],{6241:(v,u,i)=>{i.d(u,{v:()=>p});var e=i(6814),g=i(8645),s=i(3278),l=i(5879),h=i(6593);let p=(()=>{class o{constructor(c,d){this.doc=c,this.meta=d,this.siteName="CRUD demo",this.seoSubj=new g.x,this.applySeo()}setSeo(c,d){this.seoSubj.next(c),typeof d<"u"?this.setCanonical(d):this.resetCanonical()}applySeo(){this.seoSubj.asObservable().subscribe(c=>{const d=c.title,n=c.description;this.meta.updateTag({name:"description",content:n}),this.meta.updateTag({name:"author",content:s.q.author.name}),this.meta.updateTag({name:"revised",content:s.q.date}),this.meta.updateTag({name:"keywords",content:"Demo"}),this.meta.updateTag({property:"og:title",content:d}),this.meta.updateTag({property:"og:description",content:n}),this.meta.updateTag({property:"og:site_name",content:this.siteName})})}setCanonical(c){let d=this.doc.querySelector("link[rel=canonical]");d||(d=this.doc.createElement("link"),d.setAttribute("rel","canonical"),this.doc.head.appendChild(d));const n=`https://celtian.github.io/demo-angular-material-crud${c}`;d.setAttribute("href",n),this.meta.updateTag({property:"og:url",content:n})}resetCanonical(){if(this.doc){const c=this.doc.querySelector("link[rel=canonical]");c&&(c.remove(),this.meta.removeTag("name='og:url'"))}}static#t=this.\u0275fac=function(d){return new(d||o)(l.LFG(e.K0),l.LFG(h.h_))};static#a=this.\u0275prov=l.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()},5195:(v,u,i)=>{i.d(u,{$j:()=>f,QW:()=>y,a8:()=>d,dk:()=>b,dn:()=>_,n5:()=>n});var e=i(5879),g=i(6814),s=i(3680);const l=["*"],o=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],x=["[mat-card-avatar], [matCardAvatar]","mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]","*"],c=new e.OlP("MAT_CARD_CONFIG");let d=(()=>{class t{constructor(r){this.appearance=r?.appearance||"raised"}static#t=this.\u0275fac=function(a){return new(a||t)(e.Y36(c,8))};static#a=this.\u0275cmp=e.Xpm({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:4,hostBindings:function(a,m){2&a&&e.ekj("mat-mdc-card-outlined","outlined"===m.appearance)("mdc-card--outlined","outlined"===m.appearance)},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:l,decls:1,vars:0,template:function(a,m){1&a&&(e.F$t(),e.Hsn(0))},styles:['.mdc-card{display:flex;flex-direction:column;box-sizing:border-box}.mdc-card::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none;pointer-events:none}@media screen and (forced-colors: active){.mdc-card::after{border-color:CanvasText}}.mdc-card--outlined::after{border:none}.mdc-card__content{border-radius:inherit;height:100%}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__media--square::before{margin-top:100%}.mdc-card__media--16-9::before{margin-top:56.25%}.mdc-card__media-content{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.mdc-card__primary-action{display:flex;flex-direction:column;box-sizing:border-box;position:relative;outline:none;color:inherit;text-decoration:none;cursor:pointer;overflow:hidden}.mdc-card__primary-action:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__primary-action:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mdc-card__actions--full-bleed{padding:0}.mdc-card__action-buttons,.mdc-card__action-icons{display:flex;flex-direction:row;align-items:center;box-sizing:border-box}.mdc-card__action-icons{color:rgba(0, 0, 0, 0.6);flex-grow:1;justify-content:flex-end}.mdc-card__action-buttons+.mdc-card__action-icons{margin-left:16px;margin-right:0}[dir=rtl] .mdc-card__action-buttons+.mdc-card__action-icons,.mdc-card__action-buttons+.mdc-card__action-icons[dir=rtl]{margin-left:0;margin-right:16px}.mdc-card__action{display:inline-flex;flex-direction:row;align-items:center;box-sizing:border-box;justify-content:center;cursor:pointer;user-select:none}.mdc-card__action:focus{outline:none}.mdc-card__action--button{margin-left:0;margin-right:8px;padding:0 8px}[dir=rtl] .mdc-card__action--button,.mdc-card__action--button[dir=rtl]{margin-left:8px;margin-right:0}.mdc-card__action--button:last-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-card__action--button:last-child,.mdc-card__action--button:last-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-card__actions--full-bleed .mdc-card__action--button{justify-content:space-between;width:100%;height:auto;max-height:none;margin:0;padding:8px 16px;text-align:left}[dir=rtl] .mdc-card__actions--full-bleed .mdc-card__action--button,.mdc-card__actions--full-bleed .mdc-card__action--button[dir=rtl]{text-align:right}.mdc-card__action--icon{margin:-6px 0;padding:12px}.mdc-card__action--icon:not(:disabled){color:rgba(0, 0, 0, 0.6)}.mat-mdc-card{border-radius:var(--mdc-elevated-card-container-shape);background-color:var(--mdc-elevated-card-container-color);border-width:0;border-style:solid;border-color:var(--mdc-elevated-card-container-color);box-shadow:var(--mdc-elevated-card-container-elevation);--mdc-elevated-card-container-shape:4px;--mdc-outlined-card-container-shape:4px;--mdc-outlined-card-outline-width:1px}.mat-mdc-card .mdc-card::after{border-radius:var(--mdc-elevated-card-container-shape)}.mat-mdc-card-outlined{border-width:var(--mdc-outlined-card-outline-width);border-style:solid;border-color:var(--mdc-outlined-card-outline-color);border-radius:var(--mdc-outlined-card-container-shape);background-color:var(--mdc-outlined-card-container-color);box-shadow:var(--mdc-outlined-card-container-elevation)}.mat-mdc-card-outlined .mdc-card::after{border-radius:var(--mdc-outlined-card-container-shape)}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font);line-height:var(--mat-card-title-text-line-height);font-size:var(--mat-card-title-text-size);letter-spacing:var(--mat-card-title-text-tracking);font-weight:var(--mat-card-title-text-weight)}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color);font-family:var(--mat-card-subtitle-text-font);line-height:var(--mat-card-subtitle-text-line-height);font-size:var(--mat-card-subtitle-text-size);letter-spacing:var(--mat-card-subtitle-text-tracking);font-weight:var(--mat-card-subtitle-text-weight)}.mat-mdc-card{position:relative}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}'],encapsulation:2,changeDetection:0})}return t})(),n=(()=>{class t{static#t=this.\u0275fac=function(a){return new(a||t)};static#a=this.\u0275dir=e.lG2({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})(),_=(()=>{class t{static#t=this.\u0275fac=function(a){return new(a||t)};static#a=this.\u0275dir=e.lG2({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})(),f=(()=>{class t{static#t=this.\u0275fac=function(a){return new(a||t)};static#a=this.\u0275dir=e.lG2({type:t,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return t})(),b=(()=>{class t{static#t=this.\u0275fac=function(a){return new(a||t)};static#a=this.\u0275cmp=e.Xpm({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:x,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(a,m){1&a&&(e.F$t(o),e.Hsn(0),e.TgZ(1,"div",0),e.Hsn(2,1),e.qZA(),e.Hsn(3,2))},encapsulation:2,changeDetection:0})}return t})(),y=(()=>{class t{static#t=this.\u0275fac=function(a){return new(a||t)};static#a=this.\u0275mod=e.oAB({type:t});static#e=this.\u0275inj=e.cJS({imports:[s.BQ,g.ez,s.BQ]})}return t})()}}]);