"use strict";(self.webpackChunkdemo_angular_material_crud=self.webpackChunkdemo_angular_material_crud||[]).push([[195],{7066:(O,y,s)=>{s.d(y,{D:()=>p});var _=s(4755),r=s(1728),i=s(5580),f=s(3978),D=s(2139),u=s(5910),l=s(2223);let p=(()=>{class c{}return c.\u0275fac=function(v){return new(v||c)},c.\u0275mod=l.oAB({type:c}),c.\u0275inj=l.cJS({providers:[D.D,u.w],imports:[_.ez,i.Is,r.ot,f.aw]}),c})()},2139:(O,y,s)=>{s.d(y,{D:()=>u});var _=s(5580),r=s(2223),i=s(1728),f=s(3978);let D=(()=>{class l{constructor(c,m){this.data=c,this.dialogRef=m}}return l.\u0275fac=function(c){return new(c||l)(r.Y36(_.WI),r.Y36(_.so))},l.\u0275cmp=r.Xpm({type:l,selectors:[["app-confirm-dialog"]],decls:11,vars:10,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions","","align","center"],["mat-button","",3,"mat-dialog-close"],["mat-button","","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(c,m){1&c&&(r.TgZ(0,"h1",0),r._uU(1),r.qZA(),r.TgZ(2,"div",1),r._uU(3),r.qZA(),r.TgZ(4,"div",2)(5,"button",3),r._uU(6),r.ALo(7,"translate"),r.qZA(),r.TgZ(8,"button",4),r._uU(9),r.ALo(10,"translate"),r.qZA()()),2&c&&(r.xp6(1),r.Oqu(m.data.title),r.xp6(2),r.Oqu(m.data.content),r.xp6(2),r.Q6J("mat-dialog-close",!1),r.xp6(1),r.Oqu(r.lcZ(7,6,"UNI.no")),r.xp6(2),r.Q6J("mat-dialog-close",!0),r.xp6(1),r.Oqu(r.lcZ(10,8,"UNI.yes")))},dependencies:[_.ZT,_.uh,_.xY,_.H8,i.lW,f.X$],changeDetection:0}),l})(),u=(()=>{class l{constructor(c){this.dialog=c}open(c,m){return this.dialog.open(D,{width:"sm",data:{title:c,content:m}}).afterClosed()}}return l.\u0275fac=function(c){return new(c||l)(r.LFG(_.uw))},l.\u0275prov=r.Yz7({token:l,factory:l.\u0275fac}),l})()},5910:(O,y,s)=>{s.d(y,{C:()=>u,w:()=>l});var _=s(590),r=s(4004),i=s(2223),f=s(2139),D=s(3978),u=(()=>((u=u||{})[u.Delete=0]="Delete",u[u.UnsavedWork=1]="UnsavedWork",u))();let l=(()=>{class p{constructor(m,v){this.confirm=m,this.translate=v}openCustomConfirmDialog(m){const v=this.getTitle(m),x=this.getContent(m);return this.open(v,x)}getTitle(m){switch(m){case u.Delete:return this.translate.instant("custom-confirm-dialog.delete-post.title");case u.UnsavedWork:return this.translate.instant("custom-confirm-dialog.unsaved-work.title");default:return this.translate.instant("custom-confirm-dialog.default.title")}}getContent(m){switch(m){case u.Delete:return this.translate.instant("custom-confirm-dialog.delete-post.content");case u.UnsavedWork:return this.translate.instant("custom-confirm-dialog.unsaved-work.content");default:return this.translate.instant("custom-confirm-dialog.default.content")}}open(m,v){return this.confirm.open(m,v).pipe((0,_.P)(),(0,r.U)(x=>!!x))}}return p.\u0275fac=function(m){return new(m||p)(i.LFG(f.D),i.LFG(D.sK))},p.\u0275prov=i.Yz7({token:p,factory:p.\u0275fac}),p})()},4761:(O,y,s)=>{s.d(y,{s:()=>f});var _=s(4004),r=s(2223),i=s(3144);let f=(()=>{class D{constructor(l){this.http=l,this.apiUrl="https://jsonplaceholder.typicode.com"}list(l=1,p=5,c="id",m="asc",v=""){const x=[`_limit=${p}`,`_sort=${c}`,`_order=${m}`];return l>0&&x.push(`_page=${l}`),v&&x.push(`title_like=${v}`),this.http.get(`${this.apiUrl}/posts?${x.join("&")}`,{observe:"response"}).pipe((0,_.U)(E=>({totalCount:Number(E.headers.get("x-total-count"))||0,items:E.body||[]})))}detail(l){return this.http.get(`${this.apiUrl}/posts/${l}`)}delete(l){return this.http.delete(`${this.apiUrl}/posts/${l}`)}patch(l,p){return this.http.patch(`${this.apiUrl}/posts/${l}`,p)}create(l){return this.http.post(`${this.apiUrl}/posts`,l)}detailExpanded(l){return this.http.get(`${this.apiUrl}/posts/${l}?_expand=user`)}user(l){return this.http.get(`${this.apiUrl}/users/${l}`)}}return D.\u0275fac=function(l){return new(l||D)(r.LFG(i.eN))},D.\u0275prov=r.Yz7({token:D,factory:D.\u0275fac,providedIn:"root"}),D})()},2186:(O,y,s)=>{s.d(y,{v:()=>u});var _=s(4755),r=s(7579),i=s(9279),f=s(2223),D=s(6550);let u=(()=>{class l{constructor(c,m){this.doc=c,this.meta=m,this.siteName="CRUD demo",this.seoSubj=new r.x,this.applySeo()}setSeo(c,m){this.seoSubj.next(c),typeof m<"u"?this.setCanonical(m):this.resetCanonical()}applySeo(){this.seoSubj.asObservable().subscribe(c=>{const m=c.title,v=c.description;this.meta.updateTag({name:"description",content:v}),this.meta.updateTag({name:"author",content:i.q.author.name}),this.meta.updateTag({name:"revised",content:i.q.date}),this.meta.updateTag({name:"keywords",content:"Demo"}),this.meta.updateTag({property:"og:title",content:m}),this.meta.updateTag({property:"og:description",content:v}),this.meta.updateTag({property:"og:site_name",content:this.siteName})})}setCanonical(c){let m=this.doc.querySelector("link[rel=canonical]");m||(m=this.doc.createElement("link"),m.setAttribute("rel","canonical"),this.doc.head.appendChild(m));const v=`https://celtian.github.io/demo-angular-material-crud${c}`;m.setAttribute("href",v),this.meta.updateTag({property:"og:url",content:v})}resetCanonical(){if(this.doc){const c=this.doc.querySelector("link[rel=canonical]");c&&(c.remove(),this.meta.removeTag("name='og:url'"))}}}return l.\u0275fac=function(c){return new(c||l)(f.LFG(_.K0),f.LFG(D.h_))},l.\u0275prov=f.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},5580:(O,y,s)=>{s.d(y,{WI:()=>K,uw:()=>I,H8:()=>Dt,ZT:()=>pt,xY:()=>vt,Is:()=>bt,so:()=>R,uh:()=>ft});var _=s(5441),r=s(4755),i=s(2223),f=s(706),D=s(2966),u=s(8023),l=s(2840),p=s(7579),c=s(9770),m=s(9646),v=s(8930),x=s(8675);function E(o,a){}class M{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.closeOnNavigation=!0,this.closeOnDestroy=!0,this.closeOnOverlayDetachments=!0}}let B=(()=>{class o extends u.en{constructor(t,e,n,d,h,g,C,A){super(),this._elementRef=t,this._focusTrapFactory=e,this._config=d,this._interactivityChecker=h,this._ngZone=g,this._overlayRef=C,this._focusMonitor=A,this._elementFocusedBeforeDialogWasOpened=null,this._closeInteractionType=null,this.attachDomPortal=T=>{this._portalOutlet.hasAttached();const Q=this._portalOutlet.attachDomPortal(T);return this._contentAttached(),Q},this._ariaLabelledBy=this._config.ariaLabelledBy||null,this._document=n}_contentAttached(){this._initializeFocusTrap(),this._handleBackdropClicks(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();const e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();const e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{const n=()=>{t.removeEventListener("blur",n),t.removeEventListener("mousedown",n),t.removeAttribute("tabindex")};t.addEventListener("blur",n),t.addEventListener("mousedown",n)})),t.focus(e)}_focusByCssSelector(t,e){let n=this._elementRef.nativeElement.querySelector(t);n&&this._forceFocus(n,e)}_trapFocus(){const t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus();break;case!0:case"first-tabbable":this._focusTrap.focusInitialElementWhenReady().then(e=>{e||this._focusDialogContainer()});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this._config.autoFocus)}}_restoreFocus(){const t=this._config.restoreFocus;let e=null;if("string"==typeof t?e=this._document.querySelector(t):"boolean"==typeof t?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&"function"==typeof e.focus){const n=(0,D.ht)(),d=this._elementRef.nativeElement;(!n||n===this._document.body||n===d||d.contains(n))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){const t=this._elementRef.nativeElement,e=(0,D.ht)();return t===e||t.contains(e)}_initializeFocusTrap(){this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=(0,D.ht)())}_handleBackdropClicks(){this._overlayRef.backdropClick().subscribe(()=>{this._config.disableClose&&this._recaptureFocus()})}}return o.\u0275fac=function(t){return new(t||o)(i.Y36(i.SBq),i.Y36(f.qV),i.Y36(r.K0,8),i.Y36(M),i.Y36(f.ic),i.Y36(i.R0b),i.Y36(_.Iu),i.Y36(f.tE))},o.\u0275cmp=i.Xpm({type:o,selectors:[["cdk-dialog-container"]],viewQuery:function(t,e){if(1&t&&i.Gf(u.Pl,7),2&t){let n;i.iGM(n=i.CRH())&&(e._portalOutlet=n.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,e){2&t&&i.uIk("id",e._config.id||null)("role",e._config.role)("aria-modal",e._config.ariaModal)("aria-labelledby",e._config.ariaLabel?null:e._ariaLabelledBy)("aria-label",e._config.ariaLabel)("aria-describedby",e._config.ariaDescribedBy||null)},features:[i.qOj],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,e){1&t&&i.YNc(0,E,0,0,"ng-template",0)},dependencies:[u.Pl],styles:[".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],encapsulation:2}),o})();class F{constructor(a,t){this.overlayRef=a,this.config=t,this.closed=new p.x,this.disableClose=t.disableClose,this.backdropClick=a.backdropClick(),this.keydownEvents=a.keydownEvents(),this.outsidePointerEvents=a.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===l.hY&&!this.disableClose&&!(0,l.Vb)(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{this.disableClose||this.close(void 0,{focusOrigin:"mouse"})}),this._detachSubscription=a.detachments().subscribe(()=>{!1!==t.closeOnOverlayDetachments&&this.close()})}close(a,t){if(this.containerInstance){const e=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),e.next(a),e.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(a="",t=""){return this.overlayRef.updateSize({width:a,height:t}),this}addPanelClass(a){return this.overlayRef.addPanelClass(a),this}removePanelClass(a){return this.overlayRef.removePanelClass(a),this}}const Y=new i.OlP("DialogScrollStrategy"),J=new i.OlP("DialogData"),q=new i.OlP("DefaultDialogConfig"),et={provide:Y,deps:[_.aV],useFactory:function tt(o){return()=>o.scrollStrategies.block()}};let it=0,U=(()=>{class o{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}constructor(t,e,n,d,h,g){this._overlay=t,this._injector=e,this._defaultOptions=n,this._parentDialog=d,this._overlayContainer=h,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new p.x,this._afterOpenedAtThisLevel=new p.x,this._ariaHiddenElements=new Map,this.afterAllClosed=(0,c.P)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,x.O)(void 0))),this._scrollStrategy=g}open(t,e){(e={...this._defaultOptions||new M,...e}).id=e.id||"cdk-dialog-"+it++,e.id&&this.getDialogById(e.id);const d=this._getOverlayConfig(e),h=this._overlay.create(d),g=new F(h,e),C=this._attachContainer(h,g,e);return g.containerInstance=C,this._attachDialogContent(t,g,C,e),this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(g),g.closed.subscribe(()=>this._removeOpenDialog(g,!0)),this.afterOpened.next(g),g}closeAll(){P(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){P(this._openDialogsAtThisLevel,t=>{!1===t.config.closeOnDestroy&&this._removeOpenDialog(t,!1)}),P(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){const e=new _.X_({positionStrategy:t.positionStrategy||this._overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,n){const d=n.injector||n.viewContainerRef?.injector,h=[{provide:M,useValue:n},{provide:F,useValue:e},{provide:_.Iu,useValue:t}];let g;n.container?"function"==typeof n.container?g=n.container:(g=n.container.type,h.push(...n.container.providers(n))):g=B;const C=new u.C5(g,n.viewContainerRef,i.zs3.create({parent:d||this._injector,providers:h}),n.componentFactoryResolver);return t.attach(C).instance}_attachDialogContent(t,e,n,d){if(t instanceof i.Rgc){const h=this._createInjector(d,e,n,void 0);let g={$implicit:d.data,dialogRef:e};d.templateContext&&(g={...g,..."function"==typeof d.templateContext?d.templateContext():d.templateContext}),n.attachTemplatePortal(new u.UE(t,null,g,h))}else{const h=this._createInjector(d,e,n,this._injector),g=n.attachComponentPortal(new u.C5(t,d.viewContainerRef,h,d.componentFactoryResolver));e.componentInstance=g.instance}}_createInjector(t,e,n,d){const h=t.injector||t.viewContainerRef?.injector,g=[{provide:J,useValue:t.data},{provide:F,useValue:e}];return t.providers&&("function"==typeof t.providers?g.push(...t.providers(e,t,n)):g.push(...t.providers)),t.direction&&(!h||!h.get(v.Is,null,{optional:!0}))&&g.push({provide:v.Is,useValue:{value:t.direction,change:(0,m.of)()}}),i.zs3.create({parent:h||d,providers:g})}_removeOpenDialog(t,e){const n=this.openDialogs.indexOf(t);n>-1&&(this.openDialogs.splice(n,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((d,h)=>{d?h.setAttribute("aria-hidden",d):h.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){const t=this._overlayContainer.getContainerElement();if(t.parentElement){const e=t.parentElement.children;for(let n=e.length-1;n>-1;n--){const d=e[n];d!==t&&"SCRIPT"!==d.nodeName&&"STYLE"!==d.nodeName&&!d.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(d,d.getAttribute("aria-hidden")),d.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){const t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}}return o.\u0275fac=function(t){return new(t||o)(i.LFG(_.aV),i.LFG(i.zs3),i.LFG(q,8),i.LFG(o,12),i.LFG(_.Xj),i.LFG(Y))},o.\u0275prov=i.Yz7({token:o,factory:o.\u0275fac}),o})();function P(o,a){let t=o.length;for(;t--;)a(o[t])}let ot=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=i.oAB({type:o}),o.\u0275inj=i.cJS({providers:[U,et],imports:[_.U8,u.eL,f.rt,u.eL]}),o})();var G=s(1692),at=s(6451),L=s(9300),S=s(5698),j=s(1217);function nt(o,a){}s(1591);class w{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.maxWidth="80vw",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.delayFocusTrap=!0,this.closeOnNavigation=!0}}const k="mdc-dialog--open",z="mdc-dialog--opening",W="mdc-dialog--closing";let rt=(()=>{class o extends B{constructor(t,e,n,d,h,g,C,A){super(t,e,n,d,h,g,C,A),this._animationStateChanged=new i.vpe}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:t})}}return o.\u0275fac=function(t){return new(t||o)(i.Y36(i.SBq),i.Y36(f.qV),i.Y36(r.K0,8),i.Y36(w),i.Y36(f.ic),i.Y36(i.R0b),i.Y36(_.Iu),i.Y36(f.tE))},o.\u0275cmp=i.Xpm({type:o,selectors:[["ng-component"]],features:[i.qOj],decls:0,vars:0,template:function(t,e){},encapsulation:2}),o})();const V="--mat-dialog-transition-duration";function N(o){return null==o?null:"number"==typeof o?o:o.endsWith("ms")?(0,G.su)(o.substring(0,o.length-2)):o.endsWith("s")?1e3*(0,G.su)(o.substring(0,o.length-1)):"0"===o?0:null}let dt=(()=>{class o extends rt{constructor(t,e,n,d,h,g,C,A,T){super(t,e,n,d,h,g,C,T),this._animationMode=A,this._animationsEnabled="NoopAnimations"!==this._animationMode,this._hostElement=this._elementRef.nativeElement,this._openAnimationDuration=this._animationsEnabled?N(this._config.enterAnimationDuration)??150:0,this._closeAnimationDuration=this._animationsEnabled?N(this._config.exitAnimationDuration)??75:0,this._animationTimer=null,this._finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._openAnimationDuration)},this._finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._closeAnimationDuration})}}_contentAttached(){super._contentAttached(),this._startOpenAnimation()}ngOnDestroy(){super.ngOnDestroy(),null!==this._animationTimer&&clearTimeout(this._animationTimer)}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._openAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(V,`${this._openAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(z,k)),this._waitForAnimationToComplete(this._openAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(k),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._closeAnimationDuration}),this._hostElement.classList.remove(k),this._animationsEnabled?(this._hostElement.style.setProperty(V,`${this._openAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(W)),this._waitForAnimationToComplete(this._closeAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_clearAnimationClasses(){this._hostElement.classList.remove(z,W)}_waitForAnimationToComplete(t,e){null!==this._animationTimer&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(e,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{"function"==typeof requestAnimationFrame?requestAnimationFrame(t):t()})}}return o.\u0275fac=function(t){return new(t||o)(i.Y36(i.SBq),i.Y36(f.qV),i.Y36(r.K0,8),i.Y36(w),i.Y36(f.ic),i.Y36(i.R0b),i.Y36(_.Iu),i.Y36(i.QbO,8),i.Y36(f.tE))},o.\u0275cmp=i.Xpm({type:o,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:8,hostBindings:function(t,e){2&t&&(i.Ikx("id",e._config.id),i.uIk("aria-modal",e._config.ariaModal)("role",e._config.role)("aria-labelledby",e._config.ariaLabel?null:e._ariaLabelledBy)("aria-label",e._config.ariaLabel)("aria-describedby",e._config.ariaDescribedBy||null),i.ekj("_mat-animation-noopable",!e._animationsEnabled))},features:[i.qOj],decls:3,vars:0,consts:[[1,"mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,e){1&t&&(i.TgZ(0,"div",0)(1,"div",1),i.YNc(2,nt,0,0,"ng-template",2),i.qZA()())},dependencies:[u.Pl],styles:['.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media(max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media(max-width: 720px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media(max-width: 720px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px),(max-width: 600px),(min-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(0.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto;outline:0}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-dialog__surface::before{border-color:CanvasText}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid rgba(0,0,0,0);display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}@media screen and (forced-colors: active){.mdc-dialog--fullscreen .mdc-dialog__header{border-bottom-color:CanvasText}}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--fullscreen--titleless .mdc-dialog__close{margin-top:4px}.mdc-dialog--fullscreen--titleless.mdc-dialog--scrollable .mdc-dialog__close{margin-top:0}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:none;opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%;z-index:1}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}.mdc-dialog--no-content-padding .mdc-dialog__content{padding:0}.mdc-dialog--sheet .mdc-dialog__container .mdc-dialog__close{right:12px;top:9px;position:absolute;z-index:1}.mdc-dialog__scrim--removed{pointer-events:none}.mdc-dialog__scrim--removed .mdc-dialog__scrim,.mdc-dialog__scrim--removed .mdc-dialog__surface-scrim{display:none}.mat-mdc-dialog-content{max-height:65vh}.mat-mdc-dialog-container{position:static;display:block}.mat-mdc-dialog-container,.mat-mdc-dialog-container .mdc-dialog__container,.mat-mdc-dialog-container .mdc-dialog__surface{max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mat-mdc-dialog-container .mdc-dialog__surface{display:block;width:100%;height:100%}.mat-mdc-dialog-container{--mdc-dialog-container-elevation-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);--mdc-dialog-container-shadow-color:#000;--mdc-dialog-container-shape:4px;--mdc-dialog-container-elevation: var(--mdc-dialog-container-elevation-shadow);outline:0}.mat-mdc-dialog-container .mdc-dialog__surface{background-color:var(--mdc-dialog-container-color, white)}.mat-mdc-dialog-container .mdc-dialog__surface{box-shadow:var(--mdc-dialog-container-elevation, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}.mat-mdc-dialog-container .mdc-dialog__surface{border-radius:var(--mdc-dialog-container-shape, 4px)}.mat-mdc-dialog-container .mdc-dialog__title{font-family:var(--mdc-dialog-subhead-font, Roboto, sans-serif);line-height:var(--mdc-dialog-subhead-line-height, 1.5rem);font-size:var(--mdc-dialog-subhead-size, 1rem);font-weight:var(--mdc-dialog-subhead-weight, 400);letter-spacing:var(--mdc-dialog-subhead-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__title{color:var(--mdc-dialog-subhead-color, rgba(0, 0, 0, 0.87))}.mat-mdc-dialog-container .mdc-dialog__content{font-family:var(--mdc-dialog-supporting-text-font, Roboto, sans-serif);line-height:var(--mdc-dialog-supporting-text-line-height, 1.5rem);font-size:var(--mdc-dialog-supporting-text-size, 1rem);font-weight:var(--mdc-dialog-supporting-text-weight, 400);letter-spacing:var(--mdc-dialog-supporting-text-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__content{color:var(--mdc-dialog-supporting-text-color, rgba(0, 0, 0, 0.6))}.mat-mdc-dialog-container .mdc-dialog__container{transition-duration:var(--mat-dialog-transition-duration, 0ms)}.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__container{transition:none}.mat-mdc-dialog-content{display:block}.mat-mdc-dialog-actions{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}'],encapsulation:2}),o})();class R{constructor(a,t,e){this._ref=a,this._containerInstance=e,this._afterOpened=new p.x,this._beforeClosed=new p.x,this._state=0,this.disableClose=t.disableClose,this.id=a.id,e._animationStateChanged.pipe((0,L.h)(n=>"opened"===n.state),(0,S.q)(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe((0,L.h)(n=>"closed"===n.state),(0,S.q)(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),a.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),(0,at.T)(this.backdropClick(),this.keydownEvents().pipe((0,L.h)(n=>n.keyCode===l.hY&&!this.disableClose&&!(0,l.Vb)(n)))).subscribe(n=>{this.disableClose||(n.preventDefault(),$(this,"keydown"===n.type?"keyboard":"mouse"))})}close(a){this._result=a,this._containerInstance._animationStateChanged.pipe((0,L.h)(t=>"closing"===t.state),(0,S.q)(1)).subscribe(t=>{this._beforeClosed.next(a),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=1,this._containerInstance._startExitAnimation()}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(a){let t=this._ref.config.positionStrategy;return a&&(a.left||a.right)?a.left?t.left(a.left):t.right(a.right):t.centerHorizontally(),a&&(a.top||a.bottom)?a.top?t.top(a.top):t.bottom(a.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(a="",t=""){return this._ref.updateSize(a,t),this}addPanelClass(a){return this._ref.addPanelClass(a),this}removePanelClass(a){return this._ref.removePanelClass(a),this}getState(){return this._state}_finishDialogClose(){this._state=2,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}}function $(o,a,t){return o._closeInteractionType=a,o.close(t)}const K=new i.OlP("MatMdcDialogData"),ct=new i.OlP("mat-mdc-dialog-default-options"),H=new i.OlP("mat-mdc-dialog-scroll-strategy"),gt={provide:H,deps:[_.aV],useFactory:function mt(o){return()=>o.scrollStrategies.block()}};let ht=0,ut=(()=>{class o{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){const t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}constructor(t,e,n,d,h,g,C,A,T,Q){this._overlay=t,this._defaultOptions=n,this._parentDialog=d,this._dialogRefConstructor=C,this._dialogContainerType=A,this._dialogDataToken=T,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new p.x,this._afterOpenedAtThisLevel=new p.x,this._idPrefix="mat-dialog-",this.dialogConfigClass=w,this.afterAllClosed=(0,c.P)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,x.O)(void 0))),this._scrollStrategy=g,this._dialog=e.get(U)}open(t,e){let n;(e={...this._defaultOptions||new w,...e}).id=e.id||`${this._idPrefix}${ht++}`,e.scrollStrategy=e.scrollStrategy||this._scrollStrategy();const d=this._dialog.open(t,{...e,positionStrategy:this._overlay.position().global().centerHorizontally().centerVertically(),disableClose:!0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:e},{provide:M,useValue:e}]},templateContext:()=>({dialogRef:n}),providers:(h,g,C)=>(n=new this._dialogRefConstructor(h,e,C),n.updatePosition(e?.position),[{provide:this._dialogContainerType,useValue:C},{provide:this._dialogDataToken,useValue:g.data},{provide:this._dialogRefConstructor,useValue:n}])});return n.componentInstance=d.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{const h=this.openDialogs.indexOf(n);h>-1&&(this.openDialogs.splice(h,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}}return o.\u0275fac=function(t){i.$Z()},o.\u0275prov=i.Yz7({token:o,factory:o.\u0275fac}),o})(),I=(()=>{class o extends ut{constructor(t,e,n,d,h,g,C,A){super(t,e,d,g,C,h,R,dt,K,A),this._idPrefix="mat-mdc-dialog-"}}return o.\u0275fac=function(t){return new(t||o)(i.LFG(_.aV),i.LFG(i.zs3),i.LFG(r.Ye,8),i.LFG(ct,8),i.LFG(H),i.LFG(o,12),i.LFG(_.Xj),i.LFG(i.QbO,8))},o.\u0275prov=i.Yz7({token:o,factory:o.\u0275fac}),o})(),_t=0,pt=(()=>{class o{constructor(t,e,n){this.dialogRef=t,this._elementRef=e,this._dialog=n,this.type="button"}ngOnInit(){this.dialogRef||(this.dialogRef=Z(this._elementRef,this._dialog.openDialogs))}ngOnChanges(t){const e=t._matDialogClose||t._matDialogCloseResult;e&&(this.dialogResult=e.currentValue)}_onButtonClick(t){$(this.dialogRef,0===t.screenX&&0===t.screenY?"keyboard":"mouse",this.dialogResult)}}return o.\u0275fac=function(t){return new(t||o)(i.Y36(R,8),i.Y36(i.SBq),i.Y36(I))},o.\u0275dir=i.lG2({type:o,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(t,e){1&t&&i.NdJ("click",function(d){return e._onButtonClick(d)}),2&t&&i.uIk("aria-label",e.ariaLabel||null)("type",e.type)},inputs:{ariaLabel:["aria-label","ariaLabel"],type:"type",dialogResult:["mat-dialog-close","dialogResult"],_matDialogClose:["matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[i.TTD]}),o})(),ft=(()=>{class o{constructor(t,e,n){this._dialogRef=t,this._elementRef=e,this._dialog=n,this.id="mat-mdc-dialog-title-"+_t++}ngOnInit(){this._dialogRef||(this._dialogRef=Z(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{const t=this._dialogRef._containerInstance;t&&!t._ariaLabelledBy&&(t._ariaLabelledBy=this.id)})}}return o.\u0275fac=function(t){return new(t||o)(i.Y36(R,8),i.Y36(i.SBq),i.Y36(I))},o.\u0275dir=i.lG2({type:o,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(t,e){2&t&&i.Ikx("id",e.id)},inputs:{id:"id"},exportAs:["matDialogTitle"]}),o})(),vt=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275dir=i.lG2({type:o,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"]}),o})(),Dt=(()=>{class o{constructor(){this.align="start"}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275dir=i.lG2({type:o,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:4,hostBindings:function(t,e){2&t&&i.ekj("mat-mdc-dialog-actions-align-center","center"===e.align)("mat-mdc-dialog-actions-align-end","end"===e.align)},inputs:{align:"align"}}),o})();function Z(o,a){let t=o.nativeElement.parentElement;for(;t&&!t.classList.contains("mat-mdc-dialog-container");)t=t.parentElement;return t?a.find(e=>e.id===t.id):null}let bt=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=i.oAB({type:o}),o.\u0275inj=i.cJS({providers:[I,gt],imports:[ot,_.U8,u.eL,j.BQ,j.BQ]}),o})()}}]);