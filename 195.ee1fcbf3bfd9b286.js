"use strict";(self.webpackChunkdemo_angular_material_crud=self.webpackChunkdemo_angular_material_crud||[]).push([[195],{7066:(A,y,l)=>{l.d(y,{D:()=>r});var u=l(6895),d=l(4859),i=l(5412),_=l(9066),v=l(2139),s=l(5910),p=l(4650);class r{}r.\u0275fac=function(f){return new(f||r)},r.\u0275mod=p.oAB({type:r}),r.\u0275inj=p.cJS({providers:[v.D,s.w],imports:[u.ez,i.Is,d.ot,_.aw]})},2139:(A,y,l)=>{l.d(y,{D:()=>s});var u=l(5412),d=l(4650),i=l(4859),_=l(9066);class v{constructor(r,m){this.data=r,this.dialogRef=m}}v.\u0275fac=function(r){return new(r||v)(d.Y36(u.WI),d.Y36(u.so))},v.\u0275cmp=d.Xpm({type:v,selectors:[["app-confirm-dialog"]],decls:11,vars:10,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions","","align","center"],["mat-button","",3,"mat-dialog-close"],["mat-button","","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(r,m){1&r&&(d.TgZ(0,"h1",0),d._uU(1),d.qZA(),d.TgZ(2,"div",1),d._uU(3),d.qZA(),d.TgZ(4,"div",2)(5,"button",3),d._uU(6),d.ALo(7,"translate"),d.qZA(),d.TgZ(8,"button",4),d._uU(9),d.ALo(10,"translate"),d.qZA()()),2&r&&(d.xp6(1),d.Oqu(m.data.title),d.xp6(2),d.Oqu(m.data.content),d.xp6(2),d.Q6J("mat-dialog-close",!1),d.xp6(1),d.Oqu(d.lcZ(7,6,"UNI.no")),d.xp6(2),d.Q6J("mat-dialog-close",!0),d.xp6(1),d.Oqu(d.lcZ(10,8,"UNI.yes")))},dependencies:[u.ZT,u.uh,u.xY,u.H8,i.lW,_.X$],changeDetection:0});class s{constructor(r){this.dialog=r}open(r,m){return this.dialog.open(v,{width:"sm",data:{title:r,content:m}}).afterClosed()}}s.\u0275fac=function(r){return new(r||s)(d.LFG(u.uw))},s.\u0275prov=d.Yz7({token:s,factory:s.\u0275fac})},5910:(A,y,l)=>{l.d(y,{C:()=>s,w:()=>p});var u=l(590),d=l(4004),i=l(4650),_=l(2139),v=l(9066),s=(()=>{return(r=s||(s={}))[r.Delete=0]="Delete",r[r.UnsavedWork=1]="UnsavedWork",s;var r})();class p{constructor(m,f){this.confirm=m,this.translate=f}openCustomConfirmDialog(m){const f=this.getTitle(m),C=this.getContent(m);return this.open(f,C)}getTitle(m){switch(m){case s.Delete:return this.translate.instant("custom-confirm-dialog.delete-post.title");case s.UnsavedWork:return this.translate.instant("custom-confirm-dialog.unsaved-work.title");default:return this.translate.instant("custom-confirm-dialog.default.title")}}getContent(m){switch(m){case s.Delete:return this.translate.instant("custom-confirm-dialog.delete-post.content");case s.UnsavedWork:return this.translate.instant("custom-confirm-dialog.unsaved-work.content");default:return this.translate.instant("custom-confirm-dialog.default.content")}}open(m,f){return this.confirm.open(m,f).pipe((0,u.P)(),(0,d.U)(C=>!!C))}}p.\u0275fac=function(m){return new(m||p)(i.LFG(_.D),i.LFG(v.sK))},p.\u0275prov=i.Yz7({token:p,factory:p.\u0275fac})},4761:(A,y,l)=>{l.d(y,{s:()=>_});var u=l(4004),d=l(4650),i=l(529);class _{constructor(s){this.http=s,this.apiUrl="https://jsonplaceholder.typicode.com"}list(s=1,p=5,r="id",m="asc",f=""){const C=[`_limit=${p}`,`_sort=${r}`,`_order=${m}`];return s>0&&C.push(`_page=${s}`),f&&C.push(`title_like=${f}`),this.http.get(`${this.apiUrl}/posts?${C.join("&")}`,{observe:"response"}).pipe((0,u.U)(O=>({totalCount:Number(O.headers.get("x-total-count"))||0,items:O.body||[]})))}detail(s){return this.http.get(`${this.apiUrl}/posts/${s}`)}delete(s){return this.http.delete(`${this.apiUrl}/posts/${s}`)}patch(s,p){return this.http.patch(`${this.apiUrl}/posts/${s}`,p)}create(s){return this.http.post(`${this.apiUrl}/posts`,s)}detailExpanded(s){return this.http.get(`${this.apiUrl}/posts/${s}?_expand=user`)}user(s){return this.http.get(`${this.apiUrl}/users/${s}`)}}_.\u0275fac=function(s){return new(s||_)(d.LFG(i.eN))},_.\u0275prov=d.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"})},2186:(A,y,l)=>{l.d(y,{v:()=>s});var u=l(6895),d=l(7579),i=l(9279),_=l(4650),v=l(1481);class s{constructor(r,m){this.doc=r,this.meta=m,this.siteName="CRUD demo",this.seoSubj=new d.x,this.applySeo()}setSeo(r,m){this.seoSubj.next(r),typeof m<"u"?this.setCanonical(m):this.resetCanonical()}applySeo(){this.seoSubj.asObservable().subscribe(r=>{const m=r.title,f=r.description;this.meta.updateTag({name:"description",content:f}),this.meta.updateTag({name:"author",content:i.q.author.name}),this.meta.updateTag({name:"revised",content:i.q.date}),this.meta.updateTag({name:"keywords",content:"Demo"}),this.meta.updateTag({property:"og:title",content:m}),this.meta.updateTag({property:"og:description",content:f}),this.meta.updateTag({property:"og:site_name",content:this.siteName})})}setCanonical(r){let m=this.doc.querySelector("link[rel=canonical]");m||(m=this.doc.createElement("link"),m.setAttribute("rel","canonical"),this.doc.head.appendChild(m));const f=`https://celtian.github.io/demo-angular-material-crud${r}`;m.setAttribute("href",f),this.meta.updateTag({property:"og:url",content:f})}resetCanonical(){if(this.doc){const r=this.doc.querySelector("link[rel=canonical]");r&&(r.remove(),this.meta.removeTag("name='og:url'"))}}}s.\u0275fac=function(r){return new(r||s)(_.LFG(u.K0),_.LFG(v.h_))},s.\u0275prov=_.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})},5412:(A,y,l)=>{l.d(y,{WI:()=>$,uw:()=>R,H8:()=>Dt,ZT:()=>pt,xY:()=>vt,Is:()=>bt,so:()=>w,uh:()=>ft});var u=l(8184),d=l(6895),i=l(4650),_=l(2687),v=l(3353),s=l(4080),p=l(9521),r=l(7579),m=l(9770),f=l(9646),C=l(445),O=l(8675);function Q(o,a){}class E{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.closeOnNavigation=!0,this.closeOnDestroy=!0,this.closeOnOverlayDetachments=!0}}let k=(()=>{class o extends s.en{constructor(t,e,n,c,g,h,b,x){super(),this._elementRef=t,this._focusTrapFactory=e,this._config=c,this._interactivityChecker=g,this._ngZone=h,this._overlayRef=b,this._focusMonitor=x,this._elementFocusedBeforeDialogWasOpened=null,this._closeInteractionType=null,this.attachDomPortal=T=>{this._portalOutlet.hasAttached();const X=this._portalOutlet.attachDomPortal(T);return this._contentAttached(),X},this._ariaLabelledBy=this._config.ariaLabelledBy||null,this._document=n}_contentAttached(){this._initializeFocusTrap(),this._handleBackdropClicks(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();const e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();const e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{const n=()=>{t.removeEventListener("blur",n),t.removeEventListener("mousedown",n),t.removeAttribute("tabindex")};t.addEventListener("blur",n),t.addEventListener("mousedown",n)})),t.focus(e)}_focusByCssSelector(t,e){let n=this._elementRef.nativeElement.querySelector(t);n&&this._forceFocus(n,e)}_trapFocus(){const t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus();break;case!0:case"first-tabbable":this._focusTrap.focusInitialElementWhenReady().then(e=>{e||this._focusDialogContainer()});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this._config.autoFocus)}}_restoreFocus(){const t=this._config.restoreFocus;let e=null;if("string"==typeof t?e=this._document.querySelector(t):"boolean"==typeof t?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&"function"==typeof e.focus){const n=(0,v.ht)(),c=this._elementRef.nativeElement;(!n||n===this._document.body||n===c||c.contains(n))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){const t=this._elementRef.nativeElement,e=(0,v.ht)();return t===e||t.contains(e)}_initializeFocusTrap(){this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=(0,v.ht)())}_handleBackdropClicks(){this._overlayRef.backdropClick().subscribe(()=>{this._config.disableClose&&this._recaptureFocus()})}}return o.\u0275fac=function(t){return new(t||o)(i.Y36(i.SBq),i.Y36(_.qV),i.Y36(d.K0,8),i.Y36(E),i.Y36(_.ic),i.Y36(i.R0b),i.Y36(u.Iu),i.Y36(_.tE))},o.\u0275cmp=i.Xpm({type:o,selectors:[["cdk-dialog-container"]],viewQuery:function(t,e){if(1&t&&i.Gf(s.Pl,7),2&t){let n;i.iGM(n=i.CRH())&&(e._portalOutlet=n.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,e){2&t&&i.uIk("id",e._config.id||null)("role",e._config.role)("aria-modal",e._config.ariaModal)("aria-labelledby",e._config.ariaLabel?null:e._ariaLabelledBy)("aria-label",e._config.ariaLabel)("aria-describedby",e._config.ariaDescribedBy||null)},features:[i.qOj],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,e){1&t&&i.YNc(0,Q,0,0,"ng-template",0)},dependencies:[s.Pl],styles:[".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],encapsulation:2}),o})();class I{constructor(a,t){this.overlayRef=a,this.config=t,this.closed=new r.x,this.disableClose=t.disableClose,this.backdropClick=a.backdropClick(),this.keydownEvents=a.keydownEvents(),this.outsidePointerEvents=a.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===p.hY&&!this.disableClose&&!(0,p.Vb)(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{this.disableClose||this.close(void 0,{focusOrigin:"mouse"})}),this._detachSubscription=a.detachments().subscribe(()=>{!1!==t.closeOnOverlayDetachments&&this.close()})}close(a,t){if(this.containerInstance){const e=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),e.next(a),e.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(a="",t=""){return this.overlayRef.updateSize({width:a,height:t}),this}addPanelClass(a){return this.overlayRef.addPanelClass(a),this}removePanelClass(a){return this.overlayRef.removePanelClass(a),this}}const B=new i.OlP("DialogScrollStrategy"),J=new i.OlP("DialogData"),q=new i.OlP("DefaultDialogConfig"),et={provide:B,deps:[u.aV],useFactory:function tt(o){return()=>o.scrollStrategies.block()}};let it=0,Y=(()=>{class o{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}constructor(t,e,n,c,g,h){this._overlay=t,this._injector=e,this._defaultOptions=n,this._parentDialog=c,this._overlayContainer=g,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new r.x,this._afterOpenedAtThisLevel=new r.x,this._ariaHiddenElements=new Map,this.afterAllClosed=(0,m.P)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,O.O)(void 0))),this._scrollStrategy=h}open(t,e){(e={...this._defaultOptions||new E,...e}).id=e.id||"cdk-dialog-"+it++,e.id&&this.getDialogById(e.id);const c=this._getOverlayConfig(e),g=this._overlay.create(c),h=new I(g,e),b=this._attachContainer(g,h,e);return h.containerInstance=b,this._attachDialogContent(t,h,b,e),this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(h),h.closed.subscribe(()=>this._removeOpenDialog(h,!0)),this.afterOpened.next(h),h}closeAll(){P(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){P(this._openDialogsAtThisLevel,t=>{!1===t.config.closeOnDestroy&&this._removeOpenDialog(t,!1)}),P(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){const e=new u.X_({positionStrategy:t.positionStrategy||this._overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,n){const c=n.injector||n.viewContainerRef?.injector,g=[{provide:E,useValue:n},{provide:I,useValue:e},{provide:u.Iu,useValue:t}];let h;n.container?"function"==typeof n.container?h=n.container:(h=n.container.type,g.push(...n.container.providers(n))):h=k;const b=new s.C5(h,n.viewContainerRef,i.zs3.create({parent:c||this._injector,providers:g}),n.componentFactoryResolver);return t.attach(b).instance}_attachDialogContent(t,e,n,c){if(t instanceof i.Rgc){const g=this._createInjector(c,e,n,void 0);let h={$implicit:c.data,dialogRef:e};c.templateContext&&(h={...h,..."function"==typeof c.templateContext?c.templateContext():c.templateContext}),n.attachTemplatePortal(new s.UE(t,null,h,g))}else{const g=this._createInjector(c,e,n,this._injector),h=n.attachComponentPortal(new s.C5(t,c.viewContainerRef,g,c.componentFactoryResolver));e.componentInstance=h.instance}}_createInjector(t,e,n,c){const g=t.injector||t.viewContainerRef?.injector,h=[{provide:J,useValue:t.data},{provide:I,useValue:e}];return t.providers&&("function"==typeof t.providers?h.push(...t.providers(e,t,n)):h.push(...t.providers)),t.direction&&(!g||!g.get(C.Is,null,{optional:!0}))&&h.push({provide:C.Is,useValue:{value:t.direction,change:(0,f.of)()}}),i.zs3.create({parent:g||c,providers:h})}_removeOpenDialog(t,e){const n=this.openDialogs.indexOf(t);n>-1&&(this.openDialogs.splice(n,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((c,g)=>{c?g.setAttribute("aria-hidden",c):g.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){const t=this._overlayContainer.getContainerElement();if(t.parentElement){const e=t.parentElement.children;for(let n=e.length-1;n>-1;n--){const c=e[n];c!==t&&"SCRIPT"!==c.nodeName&&"STYLE"!==c.nodeName&&!c.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(c,c.getAttribute("aria-hidden")),c.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){const t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}}return o.\u0275fac=function(t){return new(t||o)(i.LFG(u.aV),i.LFG(i.zs3),i.LFG(q,8),i.LFG(o,12),i.LFG(u.Xj),i.LFG(B))},o.\u0275prov=i.Yz7({token:o,factory:o.\u0275fac}),o})();function P(o,a){let t=o.length;for(;t--;)a(o[t])}let ot=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=i.oAB({type:o}),o.\u0275inj=i.cJS({providers:[Y,et],imports:[u.U8,s.eL,_.rt,s.eL]}),o})();var U=l(1281),at=l(6451),M=l(9300),F=l(5698),G=l(3238);function nt(o,a){}l(7340);class L{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.maxWidth="80vw",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.delayFocusTrap=!0,this.closeOnNavigation=!0}}const S="mdc-dialog--open",j="mdc-dialog--opening",z="mdc-dialog--closing";let rt=(()=>{class o extends k{constructor(t,e,n,c,g,h,b,x){super(t,e,n,c,g,h,b,x),this._animationStateChanged=new i.vpe}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:t})}}return o.\u0275fac=function(t){return new(t||o)(i.Y36(i.SBq),i.Y36(_.qV),i.Y36(d.K0,8),i.Y36(L),i.Y36(_.ic),i.Y36(i.R0b),i.Y36(u.Iu),i.Y36(_.tE))},o.\u0275cmp=i.Xpm({type:o,selectors:[["ng-component"]],features:[i.qOj],decls:0,vars:0,template:function(t,e){},encapsulation:2}),o})();const W="--mat-dialog-transition-duration";function V(o){return null==o?null:"number"==typeof o?o:o.endsWith("ms")?(0,U.su)(o.substring(0,o.length-2)):o.endsWith("s")?1e3*(0,U.su)(o.substring(0,o.length-1)):"0"===o?0:null}let dt=(()=>{class o extends rt{constructor(t,e,n,c,g,h,b,x,T){super(t,e,n,c,g,h,b,T),this._animationMode=x,this._animationsEnabled="NoopAnimations"!==this._animationMode,this._hostElement=this._elementRef.nativeElement,this._openAnimationDuration=this._animationsEnabled?V(this._config.enterAnimationDuration)??150:0,this._closeAnimationDuration=this._animationsEnabled?V(this._config.exitAnimationDuration)??75:0,this._animationTimer=null,this._finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._openAnimationDuration)},this._finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._closeAnimationDuration})}}_contentAttached(){super._contentAttached(),this._startOpenAnimation()}ngOnDestroy(){super.ngOnDestroy(),null!==this._animationTimer&&clearTimeout(this._animationTimer)}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._openAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(W,`${this._openAnimationDuration}ms`),this._hostElement.classList.add(j),this._hostElement.classList.add(S),this._waitForAnimationToComplete(this._openAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(S),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._closeAnimationDuration}),this._hostElement.classList.remove(S),this._animationsEnabled?(this._hostElement.style.setProperty(W,`${this._openAnimationDuration}ms`),this._hostElement.classList.add(z),this._waitForAnimationToComplete(this._closeAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_clearAnimationClasses(){this._hostElement.classList.remove(j),this._hostElement.classList.remove(z)}_waitForAnimationToComplete(t,e){null!==this._animationTimer&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(e,t)}}return o.\u0275fac=function(t){return new(t||o)(i.Y36(i.SBq),i.Y36(_.qV),i.Y36(d.K0,8),i.Y36(L),i.Y36(_.ic),i.Y36(i.R0b),i.Y36(u.Iu),i.Y36(i.QbO,8),i.Y36(_.tE))},o.\u0275cmp=i.Xpm({type:o,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:8,hostBindings:function(t,e){2&t&&(i.Ikx("id",e._config.id),i.uIk("aria-modal",e._config.ariaModal)("role",e._config.role)("aria-labelledby",e._config.ariaLabel?null:e._ariaLabelledBy)("aria-label",e._config.ariaLabel)("aria-describedby",e._config.ariaDescribedBy||null),i.ekj("_mat-animation-noopable",!e._animationsEnabled))},features:[i.qOj],decls:3,vars:0,consts:[[1,"mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,e){1&t&&(i.TgZ(0,"div",0)(1,"div",1),i.YNc(2,nt,0,0,"ng-template",2),i.qZA()())},dependencies:[s.Pl],styles:['.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media(max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media(max-width: 720px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media(max-width: 720px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px),(max-width: 600px),(min-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(0.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-dialog__surface::before{border-color:CanvasText}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid rgba(0,0,0,0);display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}@media screen and (forced-colors: active){.mdc-dialog--fullscreen .mdc-dialog__header{border-bottom-color:CanvasText}}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--fullscreen--titleless .mdc-dialog__close{margin-top:4px}.mdc-dialog--fullscreen--titleless.mdc-dialog--scrollable .mdc-dialog__close{margin-top:0}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:none;opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%;z-index:1}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}.mdc-dialog--no-content-padding .mdc-dialog__content{padding:0}.mdc-dialog--sheet .mdc-dialog__close{right:12px;top:9px;position:absolute;z-index:1}.mdc-dialog__scrim--removed{pointer-events:none}.mdc-dialog__scrim--removed .mdc-dialog__scrim,.mdc-dialog__scrim--removed .mdc-dialog__surface-scrim{display:none}.mat-mdc-dialog-content{max-height:65vh}.mat-mdc-dialog-container{position:static;display:block}.mat-mdc-dialog-container,.mat-mdc-dialog-container .mdc-dialog__container,.mat-mdc-dialog-container .mdc-dialog__surface{max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mat-mdc-dialog-container .mdc-dialog__surface{display:block;width:100%;height:100%}.mat-mdc-dialog-container{outline:0}.mat-mdc-dialog-container .mdc-dialog__surface{background-color:var(--mdc-dialog-container-color, white)}.mat-mdc-dialog-container .mdc-dialog__surface{box-shadow:var(--mdc-dialog-container-elevation, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}.mat-mdc-dialog-container .mdc-dialog__surface{border-radius:var(--mdc-dialog-container-shape, var(--mdc-shape-medium, 4px))}.mat-mdc-dialog-container.mdc-dialog--scrollable .mdc-dialog__title,.mat-mdc-dialog-container.mdc-dialog--scrollable .mdc-dialog__actions,.mat-mdc-dialog-container.mdc-dialog--scrollable.mdc-dialog-scroll-divider-footer .mdc-dialog__actions{border-color:var(--mdc-dialog-with-divider-divider-color, black)}.mat-mdc-dialog-container.mdc-dialog--scrollable .mdc-dialog__title{border-bottom-color:var(--mdc-dialog-with-divider-divider-color, black)}.mat-mdc-dialog-container .mdc-dialog__title{font-family:var(--mdc-dialog-subhead-font, "Arial");line-height:var(--mdc-dialog-subhead-line-height, 14px);font-size:var(--mdc-dialog-subhead-size, 14px);font-weight:var(--mdc-dialog-subhead-weight, 500);letter-spacing:var(--mdc-dialog-subhead-tracking, 1px)}.mat-mdc-dialog-container .mdc-dialog__title{color:var(--mdc-dialog-subhead-color, black)}.mat-mdc-dialog-container .mdc-dialog__content{font-family:var(--mdc-dialog-supporting-text-font, "Arial");line-height:var(--mdc-dialog-supporting-text-line-height, 14px);font-size:var(--mdc-dialog-supporting-text-size, 14px);font-weight:var(--mdc-dialog-supporting-text-weight, 500);letter-spacing:var(--mdc-dialog-supporting-text-tracking, 1px)}.mat-mdc-dialog-container .mdc-dialog__content{color:var(--mdc-dialog-supporting-text-color, black)}.mat-mdc-dialog-container .mdc-dialog__container{transition-duration:var(--mat-dialog-transition-duration, 0ms)}.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__container{transition:none}.mat-mdc-dialog-content{display:block}.mat-mdc-dialog-actions{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}'],encapsulation:2}),o})();class w{constructor(a,t,e){this._ref=a,this._containerInstance=e,this._afterOpened=new r.x,this._beforeClosed=new r.x,this._state=0,this.disableClose=t.disableClose,this.id=a.id,e._animationStateChanged.pipe((0,M.h)(n=>"opened"===n.state),(0,F.q)(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe((0,M.h)(n=>"closed"===n.state),(0,F.q)(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),a.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),(0,at.T)(this.backdropClick(),this.keydownEvents().pipe((0,M.h)(n=>n.keyCode===p.hY&&!this.disableClose&&!(0,p.Vb)(n)))).subscribe(n=>{this.disableClose||(n.preventDefault(),N(this,"keydown"===n.type?"keyboard":"mouse"))})}close(a){this._result=a,this._containerInstance._animationStateChanged.pipe((0,M.h)(t=>"closing"===t.state),(0,F.q)(1)).subscribe(t=>{this._beforeClosed.next(a),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=1,this._containerInstance._startExitAnimation()}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(a){let t=this._ref.config.positionStrategy;return a&&(a.left||a.right)?a.left?t.left(a.left):t.right(a.right):t.centerHorizontally(),a&&(a.top||a.bottom)?a.top?t.top(a.top):t.bottom(a.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(a="",t=""){return this._ref.updateSize(a,t),this}addPanelClass(a){return this._ref.addPanelClass(a),this}removePanelClass(a){return this._ref.removePanelClass(a),this}getState(){return this._state}_finishDialogClose(){this._state=2,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}}function N(o,a,t){return o._closeInteractionType=a,o.close(t)}const $=new i.OlP("MatMdcDialogData"),ct=new i.OlP("mat-mdc-dialog-default-options"),K=new i.OlP("mat-mdc-dialog-scroll-strategy"),ht={provide:K,deps:[u.aV],useFactory:function mt(o){return()=>o.scrollStrategies.block()}};let gt=0,ut=(()=>{class o{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){const t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}constructor(t,e,n,c,g,h,b,x,T,X){this._overlay=t,this._defaultOptions=n,this._parentDialog=c,this._dialogRefConstructor=b,this._dialogContainerType=x,this._dialogDataToken=T,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new r.x,this._afterOpenedAtThisLevel=new r.x,this._idPrefix="mat-dialog-",this.dialogConfigClass=L,this.afterAllClosed=(0,m.P)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,O.O)(void 0))),this._scrollStrategy=h,this._dialog=e.get(Y)}open(t,e){let n;(e={...this._defaultOptions||new L,...e}).id=e.id||`${this._idPrefix}${gt++}`,e.scrollStrategy=e.scrollStrategy||this._scrollStrategy();const c=this._dialog.open(t,{...e,positionStrategy:this._overlay.position().global().centerHorizontally().centerVertically(),disableClose:!0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:e},{provide:E,useValue:e}]},templateContext:()=>({dialogRef:n}),providers:(g,h,b)=>(n=new this._dialogRefConstructor(g,e,b),n.updatePosition(e?.position),[{provide:this._dialogContainerType,useValue:b},{provide:this._dialogDataToken,useValue:h.data},{provide:this._dialogRefConstructor,useValue:n}])});return n.componentInstance=c.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{const g=this.openDialogs.indexOf(n);g>-1&&(this.openDialogs.splice(g,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}}return o.\u0275fac=function(t){i.$Z()},o.\u0275prov=i.Yz7({token:o,factory:o.\u0275fac}),o})(),R=(()=>{class o extends ut{constructor(t,e,n,c,g,h,b,x){super(t,e,c,h,b,g,w,dt,$,x),this._idPrefix="mat-mdc-dialog-"}}return o.\u0275fac=function(t){return new(t||o)(i.LFG(u.aV),i.LFG(i.zs3),i.LFG(d.Ye,8),i.LFG(ct,8),i.LFG(K),i.LFG(o,12),i.LFG(u.Xj),i.LFG(i.QbO,8))},o.\u0275prov=i.Yz7({token:o,factory:o.\u0275fac}),o})(),_t=0,pt=(()=>{class o{constructor(t,e,n){this.dialogRef=t,this._elementRef=e,this._dialog=n,this.type="button"}ngOnInit(){this.dialogRef||(this.dialogRef=H(this._elementRef,this._dialog.openDialogs))}ngOnChanges(t){const e=t._matDialogClose||t._matDialogCloseResult;e&&(this.dialogResult=e.currentValue)}_onButtonClick(t){N(this.dialogRef,0===t.screenX&&0===t.screenY?"keyboard":"mouse",this.dialogResult)}}return o.\u0275fac=function(t){return new(t||o)(i.Y36(w,8),i.Y36(i.SBq),i.Y36(R))},o.\u0275dir=i.lG2({type:o,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(t,e){1&t&&i.NdJ("click",function(c){return e._onButtonClick(c)}),2&t&&i.uIk("aria-label",e.ariaLabel||null)("type",e.type)},inputs:{ariaLabel:["aria-label","ariaLabel"],type:"type",dialogResult:["mat-dialog-close","dialogResult"],_matDialogClose:["matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[i.TTD]}),o})(),ft=(()=>{class o{constructor(t,e,n){this._dialogRef=t,this._elementRef=e,this._dialog=n,this.id="mat-mdc-dialog-title-"+_t++}ngOnInit(){this._dialogRef||(this._dialogRef=H(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{const t=this._dialogRef._containerInstance;t&&!t._ariaLabelledBy&&(t._ariaLabelledBy=this.id)})}}return o.\u0275fac=function(t){return new(t||o)(i.Y36(w,8),i.Y36(i.SBq),i.Y36(R))},o.\u0275dir=i.lG2({type:o,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(t,e){2&t&&i.Ikx("id",e.id)},inputs:{id:"id"},exportAs:["matDialogTitle"]}),o})(),vt=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275dir=i.lG2({type:o,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"]}),o})(),Dt=(()=>{class o{constructor(){this.align="start"}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275dir=i.lG2({type:o,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:4,hostBindings:function(t,e){2&t&&i.ekj("mat-mdc-dialog-actions-align-center","center"===e.align)("mat-mdc-dialog-actions-align-end","end"===e.align)},inputs:{align:"align"}}),o})();function H(o,a){let t=o.nativeElement.parentElement;for(;t&&!t.classList.contains("mat-mdc-dialog-container");)t=t.parentElement;return t?a.find(e=>e.id===t.id):null}let bt=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=i.oAB({type:o}),o.\u0275inj=i.cJS({providers:[R,ht],imports:[ot,u.U8,s.eL,G.BQ,G.BQ]}),o})()}}]);