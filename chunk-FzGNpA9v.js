import {g,Y as Ys,X,v as vt,D as Dg,w as wB,b as bh,P,n as nr,E as Ee$1,c as cp,q,Z as Zy,U as Ud,a as Eo$1,d as Dn$1,e as Pn,T as Tn$1,F as Fn,I as In,f as U,m,h as Xe$1,i as F,j as gn$1,k as Z$1,l as UT,o as ls,p as ne,r as pt$1,s as hs,O,A as Ae,t as ft$1,u as Pr,x as dv,y as kn$1,z as ne$1,B as jE,C as z,G as To$1,H as yr,J as ZT,K as q$1,L as H,M as fv,N as me$1,S as Se,Q as qt,R as Po$1,V as fe,W as Dt,_ as ov,$ as It,a0 as Gl,a1 as rw,a2 as Io$1,a3 as ll,a4 as un$1,a5 as dn$1,a6 as Ie,a7 as pe,a8 as us,a9 as Re,aa as Ey,ab as Eo$2,ac as lr,ad as Lm,ae as hr,af as k,ag as Qe,ah as ib,ai as xr,aj as qs,ak as Ic,al as pt$2,am as Ig,an as Bn$1,ao as Et,ap as iv,aq as Ao,ar as Rr,as as Cn$1,at as Qm,au as IB,av as gd,aw as nv,ax as tv,ay as Mf,az as Ol,aA as kl,aB as Ss,aC as Sl,aD as Yg,aE as iC,aF as cI,aG as Zg,aH as sC,aI as tm,aJ as To$2,aK as $s,aL as $g,aM as vm,aN as om,aO as IC,aP as wC,aQ as rm,aR as Vg,aS as Lu,aT as Jg,aU as Ml,aV as Nl,aW as OU,aX as RU,aY as WC,aZ as nb,a_ as pm,a$ as ob,b0 as Ll,b1 as _r,b2 as bi,b3 as fr,b4 as ao$1,b5 as Pu,b6 as fs,b7 as ms,b8 as Tl,b9 as Fr,ba as di,bb as et,bc as xn$1,bd as wU,be as IU,bf as On$1,bg as Jt,bh as Kr,bi as Do$1,bj as lc,bk as Ht,bl as Rg,bm as YI,bn as Al,bo as Ug,bp as xl,bq as QI,br as eb,bs as XC,bt as sm,bu as CC,bv as ep,bw as gC,bx as bC,by as vC,bz as tb,bA as Vf,bB as Hf,bC as nm,bD as Fl,bE as Xg,bF as Kg}from'./main-GN7E3TH6.js';import {U as U$1}from'./chunk-CUAiyGuy.js';import {V as Ve,B as Be}from'./chunk-BVQImZMs.js';import {Y as Ye,U as Uu,G as Gu}from'./chunk-CqDwpDvv.js';import {_}from'./chunk-6VPMLAuV.js';var On=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],An=["mat-icon, [matMenuItemIcon]","*"];function Nn(n,a){n&1&&(ep(),Ss(0,"svg",2),Yg(1,"polygon",3),Sl());}var Bn=["*"];function Ln(n,a){if(n&1){let e=gC();Ml(0,"div",0),nm("click",function(){Vf(e);let i=vC();return Hf(i.closed.emit("click"))})("animationstart",function(i){Vf(e);let o=vC();return Hf(o._onAnimationStart(i.animationName))})("animationend",function(i){Vf(e);let o=vC();return Hf(o._onAnimationDone(i.animationName))})("animationcancel",function(i){Vf(e);let o=vC();return Hf(o._onAnimationDone(i.animationName))}),Ml(1,"div",1),kl(2),Nl()();}if(n&2){let e=vC();Fl(e._classList),$s("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),Xg("id",e.panelId),To$2("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null);}}var dt=new m("MAT_MENU_PANEL"),ke=(()=>{class n{_elementRef=g(Xe$1);_document=g(F);_focusMonitor=g(gn$1);_parentMenu=g(dt,{optional:true});_changeDetectorRef=g(Ys);role="menuitem";disabled=false;disableRipple=false;_hovered=new Z$1;_focused=new Z$1;_highlighted=false;_triggersSubmenu=false;constructor(){g(UT).load(ls),this._parentMenu?.addItem?.(this);}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this);}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,false);}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete();}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation());}_handleMouseEnter(){this._hovered.next(this);}getLabel(){let e=this._elementRef.nativeElement.cloneNode(true),t=e.querySelectorAll("mat-icon, .material-icons");for(let i=0;i<t.length;i++)t[i].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck();}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck();}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Eo$1({type:n,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,i){t&1&&tm("click",function(r){return i._checkDisabled(r)})("mouseenter",function(){return i._handleMouseEnter()}),t&2&&(To$2("role",i.role)("tabindex",i._getTabIndex())("aria-disabled",i.disabled)("disabled",i.disabled||null),$s("mat-mdc-menu-item-highlighted",i._highlighted)("mat-mdc-menu-item-submenu-trigger",i._triggersSubmenu));},inputs:{role:"role",disabled:[2,"disabled","disabled",Gl],disableRipple:[2,"disableRipple","disableRipple",Gl]},exportAs:["matMenuItem"],ngContentSelectors:An,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,i){t&1&&(Ol(On),kl(0),Ss(1,"span",0),kl(2,1),Sl(),Yg(3,"div",1),iC(4,Nn,2,0,":svg:svg",2)),t&2&&(cI(3),Zg("matRippleDisabled",i.disableRipple||i.disabled)("matRippleTrigger",i._getHostElement()),cI(),sC(i._triggersSubmenu?4:-1));},dependencies:[Mf],encapsulation:2})}return n})();var Hn=new m("MatMenuContent");var zn=new m("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:false,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),lt="_mat-menu-enter",We="_mat-menu-exit",Ce=(()=>{class n{_elementRef=g(Xe$1);_changeDetectorRef=g(Ys);_injector=g(ne);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=pt$1();_allItems;_directDescendantItems=new hs;_classList={};_panelAnimationState="void";_animationDone=new Z$1;_isAnimating=nr(false);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses();}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses();}templateRef;items;lazyContent;overlapTrigger=false;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,i=O({},this._classList);t&&t.length&&t.split(" ").forEach(o=>{i[o]=false;}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(o=>{i[o]=true;}),this._elementRef.nativeElement.className=""),this._classList=i;}_previousPanelClass="";get classList(){return this.panelClass}set classList(e){this.panelClass=e;}closed=new Ae;close=this.closed;panelId=g(ft$1).getId("mat-menu-panel-");constructor(){let e=g(zn);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop;}ngOnInit(){this.setPositionClasses();}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Pr(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(dv(this._directDescendantItems),kn$1(e=>ov(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let i=e.toArray(),o=Math.max(0,Math.min(i.length-1,t.activeItemIndex||0));i[o]&&!i[o].disabled?t.setActiveItem(o):t.setNextItemActive();}});}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout);}_hovered(){return this._directDescendantItems.changes.pipe(dv(this._directDescendantItems),kn$1(t=>ov(...t.map(i=>i._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,i=this._keyManager;switch(t){case 27:ne$1(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&i.setFocusOrigin("keyboard"),i.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=jE(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let i=this._keyManager;i.setFocusOrigin(e).setFirstItemActive(),!i.activeItem&&t&&t.focus();}},{injector:this._injector});}resetActiveItem(){this._keyManager.setActiveItem(-1);}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=z(O({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck();}_onAnimationDone(e){let t=e===We;(t||e===lt)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(false));}_onAnimationStart(e){(e===lt||e===We)&&this._isAnimating.set(true);}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0);}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(We),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?lt:We);}),this._changeDetectorRef.markForCheck();}_updateDirectDescendants(){this._allItems.changes.pipe(dv(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges();});}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Eo$1({type:n,selectors:[["mat-menu"]],contentQueries:function(t,i,o){if(t&1&&rm(o,Hn,5)(o,ke,5)(o,ke,4),t&2){let r;IC(r=wC())&&(i.lazyContent=r.first),IC(r=wC())&&(i._allItems=r),IC(r=wC())&&(i.items=r);}},viewQuery:function(t,i){if(t&1&&om(lr,5),t&2){let o;IC(o=wC())&&(i.templateRef=o.first);}},hostVars:3,hostBindings:function(t,i){t&2&&To$2("aria-label",null)("aria-labelledby",null)("aria-describedby",null);},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",Gl],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:Gl(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[vm([{provide:dt,useExisting:n}])],ngContentSelectors:Bn,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,i){t&1&&(Ol(),$g(0,Ln,3,12,"ng-template"));},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2})}return n})(),jn=new m("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let n=g(ne);return ()=>To$1(n)}});var be=new WeakMap,Vn=(()=>{class n{_canHaveBackdrop;_element=g(Xe$1);_viewContainerRef=g(yr);_menuItemInstance=g(ke,{optional:true,self:true});_dir=g(ZT,{optional:true});_focusMonitor=g(gn$1);_ngZone=g(q$1);_injector=g(ne);_scrollStrategy=g(jn);_changeDetectorRef=g(Ys);_animationsDisabled=pt$1();_portal;_overlayRef=null;_menuOpen=false;_closingActionsSubscription=H.EMPTY;_menuCloseSubscription=H.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t);})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()));}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=g(dt,{optional:true});this._parentMaterialMenu=t instanceof Ce?t:void 0;}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&be.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null);}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return !!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit();}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let i=be.get(t);be.set(t,this),i&&i!==this&&i._closeMenu();let o=this._createOverlay(t),r=o.getConfig(),m=r.positionStrategy;this._setPosition(t,m),this._canHaveBackdrop?r.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:r.hasBackdrop=t.hasBackdrop??false,o.hasAttached()||(o.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(true),t instanceof Ce&&(t._setIsOpen(true),t._directDescendantItems.changes.pipe(fv(t.close)).subscribe(()=>{m.withLockedPosition(false).reapplyLastPosition(),m.withLockedPosition(true);}));}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t);}_destroyMenu(e){let t=this._overlayRef,i=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),i instanceof Ce&&this._ownsMenu(i)?(this._pendingRemoval=i._animationDone.pipe(me$1(1)).subscribe(()=>{t.detach(),be.has(i)||i.lazyContent?.detach();}),i._setIsOpen(false)):(t.detach(),i?.lazyContent?.detach()),i&&this._ownsMenu(i)&&be.delete(i),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(false));}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck());}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=Se(this._injector,t),this._overlayRef.keydownEvents().subscribe(i=>{this._menu instanceof Ce&&this._menu._handleKeydown(i);});}return this._overlayRef}_getOverlayConfig(e){return new qt({positionStrategy:Po$1(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(i=>{this._ngZone.run(()=>{let o=i.connectionPair.overlayX==="start"?"after":"before",r=i.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(o,r);});});}_setPosition(e,t){let[i,o]=e.xPosition==="before"?["end","start"]:["start","end"],[r,m]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[h,g]=[r,m],[y,x]=[i,o],b=0;if(this._triggersSubmenu()){if(x=i=e.xPosition==="before"?"start":"end",o=y=i==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let v=this._parentMaterialMenu.items.first;this._parentInnerPadding=v?v._getHostElement().offsetTop:0;}b=r==="bottom"?this._parentInnerPadding:-this._parentInnerPadding;}}else e.overlapTrigger||(h=r==="top"?"bottom":"top",g=m==="top"?"bottom":"top");t.withPositions([{originX:i,originY:h,overlayX:y,overlayY:r,offsetY:b},{originX:o,originY:h,overlayX:x,overlayY:r,offsetY:b},{originX:i,originY:g,overlayX:y,overlayY:m,offsetY:-b},{originX:o,originY:g,overlayX:x,overlayY:m,offsetY:-b}]);}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),i=this._parentMaterialMenu?this._parentMaterialMenu.closed:fe(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Dt(r=>this._menuOpen&&r!==this._menuItemInstance)):fe();return ov(e,i,o,t)}_getPortal(e){return (!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new It(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return be.get(e)===this}_triggerIsAriaDisabled(){return Gl(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){rw();};static \u0275dir=Io$1({type:n})}return n})(),on=(()=>{class n extends Vn{_cleanupTouchstart;_hoverSubscription=H.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e;}get menu(){return this._menu}set menu(e){this._menu=e;}menuData;restoreFocus=true;menuOpened=new Ae;onMenuOpen=this.menuOpened;menuClosed=new Ae;onMenuClose=this.menuClosed;constructor(){super(true);let e=g(ll);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{un$1(t)||(this._openedBy="touch");},{passive:true});}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(true);}closeMenu(){this._closeMenu();}updatePosition(){this._overlayRef?.updatePosition();}ngAfterContentInit(){this._handleHover();}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe();}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){dn$1(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault());}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu());}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu();}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(false));}));}static \u0275fac=function(t){return new(t||n)};static \u0275dir=Io$1({type:n,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,i){t&1&&tm("click",function(r){return i._handleClick(r)})("mousedown",function(r){return i._handleMousedown(r)})("keydown",function(r){return i._handleKeydown(r)}),t&2&&To$2("aria-haspopup",i.menu?"menu":null)("aria-expanded",i.menuOpen)("aria-controls",i.menuOpen?i.menu?.panelId:null);},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[Vg]})}return n})();var rn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Ie({type:n});static \u0275inj=pe({imports:[us,Re,Ey,Eo$2]})}return n})();var qn=[[["caption"]],[["colgroup"],["col"]],"*"],Yn=["caption","colgroup, col","*"];function $n(n,a){n&1&&kl(0,2);}function Wn(n,a){n&1&&(Ss(0,"thead",0),Jg(1,1),Sl(),Ss(2,"tbody",0),Jg(3,2)(4,3),Sl(),Ss(5,"tfoot",0),Jg(6,4),Sl());}function Xn(n,a){n&1&&Jg(0,1)(1,2)(2,3)(3,4);}var $=new m("CDK_TABLE");var Ge=(()=>{class n{template=g(lr);static \u0275fac=function(t){return new(t||n)};static \u0275dir=Io$1({type:n,selectors:[["","cdkCellDef",""]]})}return n})(),Ze=(()=>{class n{template=g(lr);static \u0275fac=function(t){return new(t||n)};static \u0275dir=Io$1({type:n,selectors:[["","cdkHeaderCellDef",""]]})}return n})(),ln=(()=>{class n{template=g(lr);static \u0275fac=function(t){return new(t||n)};static \u0275dir=Io$1({type:n,selectors:[["","cdkFooterCellDef",""]]})}return n})(),ae=(()=>{class n{_table=g($,{optional:true});_hasStickyChanged=false;get name(){return this._name}set name(e){this._setNameInput(e);}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=true);}_sticky=false;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=true);}_stickyEnd=false;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=false;}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`];}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName());}static \u0275fac=function(t){return new(t||n)};static \u0275dir=Io$1({type:n,selectors:[["","cdkColumnDef",""]],contentQueries:function(t,i,o){if(t&1&&rm(o,Ge,5)(o,Ze,5)(o,ln,5),t&2){let r;IC(r=wC())&&(i.cell=r.first),IC(r=wC())&&(i.headerCell=r.first),IC(r=wC())&&(i.footerCell=r.first);}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",Gl],stickyEnd:[2,"stickyEnd","stickyEnd",Gl]}})}return n})(),Ke=class{constructor(a,e){e.nativeElement.classList.add(...a._columnCssClassName);}},dn=(()=>{class n extends Ke{constructor(){super(g(ae),g(Xe$1));}static \u0275fac=function(t){return new(t||n)};static \u0275dir=Io$1({type:n,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[Vg]})}return n})();var cn=(()=>{class n extends Ke{constructor(){let e=g(ae),t=g(Xe$1);super(e,t);let i=e._table?._getCellRole();i&&t.nativeElement.setAttribute("role",i);}static \u0275fac=function(t){return new(t||n)};static \u0275dir=Io$1({type:n,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[Vg]})}return n})();var mt=(()=>{class n{template=g(lr);_differs=g(Lm);columns;_columnsDiffer;ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t);}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof Ee?e.headerCell.template:this instanceof ut?e.footerCell.template:e.cell.template}static \u0275fac=function(t){return new(t||n)};static \u0275dir=Io$1({type:n,features:[Lu]})}return n})(),Ee=(()=>{class n extends mt{_table=g($,{optional:true});_hasStickyChanged=false;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=true);}_sticky=false;ngOnChanges(e){super.ngOnChanges(e);}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=false;}static \u0275fac=(()=>{let e;return function(i){return (e||(e=hr(n)))(i||n)}})();static \u0275dir=Io$1({type:n,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",Gl]},features:[Vg,Lu]})}return n})(),ut=(()=>{class n extends mt{_table=g($,{optional:true});_hasStickyChanged=false;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=true);}_sticky=false;ngOnChanges(e){super.ngOnChanges(e);}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=false;}static \u0275fac=(()=>{let e;return function(i){return (e||(e=hr(n)))(i||n)}})();static \u0275dir=Io$1({type:n,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",Gl]},features:[Vg,Lu]})}return n})(),Je=(()=>{class n extends mt{_table=g($,{optional:true});when;static \u0275fac=(()=>{let e;return function(i){return (e||(e=hr(n)))(i||n)}})();static \u0275dir=Io$1({type:n,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[Vg]})}return n})(),me=(()=>{class n{_viewContainer=g(yr);cells;context;static mostRecentCellOutlet=null;constructor(){n.mostRecentCellOutlet=this;}ngOnDestroy(){n.mostRecentCellOutlet===this&&(n.mostRecentCellOutlet=null);}static \u0275fac=function(t){return new(t||n)};static \u0275dir=Io$1({type:n,selectors:[["","cdkCellOutlet",""]]})}return n})(),ht=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Eo$1({type:n,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,i){t&1&&Jg(0,0);},dependencies:[me],encapsulation:2,changeDetection:1})}return n})();var ft=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Eo$1({type:n,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,i){t&1&&Jg(0,0);},dependencies:[me],encapsulation:2,changeDetection:1})}return n})(),mn=(()=>{class n{templateRef=g(lr);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";static \u0275fac=function(t){return new(t||n)};static \u0275dir=Io$1({type:n,selectors:[["ng-template","cdkNoDataRow",""]]})}return n})(),an=["top","bottom","left","right"],ct=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(a=>this._updateCachedSizes(a)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=false;constructor(a,e,t=true,i=true,o,r,m){this._isNativeHtmlTable=a,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=i,this.direction=o,this._positionListener=r,this._tableInjector=m,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`};}clearStickyPositioning(a,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(a);let t=[];for(let i of a)i.nodeType===i.ELEMENT_NODE&&t.push(i,...Array.from(i.children));jE({write:()=>{for(let i of t)this._removeStickyStyle(i,e);}},{injector:this._tableInjector});}updateStickyColumns(a,e,t,i=true,o=true){if(!a.length||!this._isBrowser||!(e.some(Q=>Q)||t.some(Q=>Q))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let r=a[0],m=r.children.length,h=this.direction==="rtl",g=h?"right":"left",y=h?"left":"right",x=e.lastIndexOf(true),b=t.indexOf(true),v,vt,Dt;o&&this._updateStickyColumnReplayQueue({rows:[...a],stickyStartStates:[...e],stickyEndStates:[...t]}),jE({earlyRead:()=>{v=this._getCellWidths(r,i),vt=this._getStickyStartColumnPositions(v,e),Dt=this._getStickyEndColumnPositions(v,t);},write:()=>{for(let Q of a)for(let L=0;L<m;L++){let Rt=Q.children[L];e[L]&&this._addStickyStyle(Rt,g,vt[L],L===x),t[L]&&this._addStickyStyle(Rt,y,Dt[L],L===b);}this._positionListener&&v.some(Q=>!!Q)&&(this._positionListener.stickyColumnsUpdated({sizes:x===-1?[]:v.slice(0,x+1).map((Q,L)=>e[L]?Q:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:b===-1?[]:v.slice(b).map((Q,L)=>t[L+b]?Q:null).reverse()}));}},{injector:this._tableInjector});}stickRows(a,e,t){if(!this._isBrowser)return;let i=t==="bottom"?a.slice().reverse():a,o=t==="bottom"?e.slice().reverse():e,r=[],m=[],h=[];jE({earlyRead:()=>{for(let g=0,y=0;g<i.length;g++){if(!o[g])continue;r[g]=y;let x=i[g];h[g]=this._isNativeHtmlTable?Array.from(x.children):[x];let b=this._retrieveElementSize(x).height;y+=b,m[g]=b;}},write:()=>{let g=o.lastIndexOf(true);for(let y=0;y<i.length;y++){if(!o[y])continue;let x=r[y],b=y===g;for(let v of h[y])this._addStickyStyle(v,t,x,b);}t==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:m,offsets:r,elements:h}):this._positionListener?.stickyFooterRowsUpdated({sizes:m,offsets:r,elements:h});}},{injector:this._tableInjector});}updateStickyFooterContainer(a,e){this._isNativeHtmlTable&&jE({write:()=>{let t=a.querySelector("tfoot");t&&(e.some(i=>!i)?this._removeStickyStyle(t,["bottom"]):this._addStickyStyle(t,"bottom",0,false));}},{injector:this._tableInjector});}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=true;}_removeStickyStyle(a,e){if(!a.classList.contains(this._stickCellCss))return;for(let i of e)a.style[i]="",a.classList.remove(this._borderCellCss[i]);an.some(i=>e.indexOf(i)===-1&&a.style[i])?a.style.zIndex=this._getCalculatedZIndex(a):(a.style.zIndex="",this._needsPositionStickyOnElement&&(a.style.position=""),a.classList.remove(this._stickCellCss));}_addStickyStyle(a,e,t,i){a.classList.add(this._stickCellCss),i&&a.classList.add(this._borderCellCss[e]),a.style[e]=`${t}px`,a.style.zIndex=this._getCalculatedZIndex(a),this._needsPositionStickyOnElement&&(a.style.cssText+="position: -webkit-sticky; position: sticky; ");}_getCalculatedZIndex(a){let e={top:100,bottom:10,left:1,right:1},t=0;for(let i of an)a.style[i]&&(t+=e[i]);return t?`${t}`:""}_getCellWidths(a,e=true){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],i=a.children;for(let o=0;o<i.length;o++){let r=i[o];t.push(this._retrieveElementSize(r).width);}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(a,e){let t=[],i=0;for(let o=0;o<a.length;o++)e[o]&&(t[o]=i,i+=a[o]);return t}_getStickyEndColumnPositions(a,e){let t=[],i=0;for(let o=a.length;o>0;o--)e[o]&&(t[o]=i,i+=a[o]);return t}_retrieveElementSize(a){let e=this._elemSizeCache.get(a);if(e)return e;let t=a.getBoundingClientRect(),i={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(a,i),this._resizeObserver.observe(a,{box:"border-box"})),i}_updateStickyColumnReplayQueue(a){this._removeFromStickyColumnReplayQueue(a.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(a);}_removeFromStickyColumnReplayQueue(a){let e=new Set(a);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(i=>!e.has(i));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length);}_updateCachedSizes(a){let e=false;for(let t of a){let i=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};i.width!==this._elemSizeCache.get(t.target)?.width&&Kn(t.target)&&(e=true),this._elemSizeCache.set(t.target,i);}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,true,false);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null;}},0));}};function Kn(n){return ["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(a=>n.classList.contains(a))}var Te=new m("STICKY_POSITIONING_LISTENER");var pt=(()=>{class n{viewContainer=g(yr);elementRef=g(Xe$1);constructor(){let e=g($);e._rowOutlet=this,e._outletAssigned();}static \u0275fac=function(t){return new(t||n)};static \u0275dir=Io$1({type:n,selectors:[["","rowOutlet",""]]})}return n})(),_t=(()=>{class n{viewContainer=g(yr);elementRef=g(Xe$1);constructor(){let e=g($);e._headerRowOutlet=this,e._outletAssigned();}static \u0275fac=function(t){return new(t||n)};static \u0275dir=Io$1({type:n,selectors:[["","headerRowOutlet",""]]})}return n})(),gt=(()=>{class n{viewContainer=g(yr);elementRef=g(Xe$1);constructor(){let e=g($);e._footerRowOutlet=this,e._outletAssigned();}static \u0275fac=function(t){return new(t||n)};static \u0275dir=Io$1({type:n,selectors:[["","footerRowOutlet",""]]})}return n})(),yt=(()=>{class n{viewContainer=g(yr);elementRef=g(Xe$1);constructor(){let e=g($);e._noDataRowOutlet=this,e._outletAssigned();}static \u0275fac=function(t){return new(t||n)};static \u0275dir=Io$1({type:n,selectors:[["","noDataRowOutlet",""]]})}return n})(),wt=(()=>{class n{_differs=g(Lm);_changeDetectorRef=g(Ys);_elementRef=g(Xe$1);_dir=g(ZT,{optional:true});_platform=g(k);_viewRepeater;_viewportRuler=g(Qe);_injector=g(ne);_virtualScrollViewport=g(ib,{optional:true,host:true});_positionListener=g(Te,{optional:true})||g(Te,{optional:true,skipSelf:true});_document=g(F);_data;_renderedRange;_onDestroy=new Z$1;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=true;_footerRowDefChanged=true;_stickyColumnStylesNeedReset=true;_forceRecalculateCellWidths=true;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=true;_isServer;_isShowingNoDataRow=false;_hasAllOutlets=false;_hasInitialized=false;_headerRowStickyUpdates=new Z$1;_footerRowStickyUpdates=new Z$1;_disableVirtualScrolling=false;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e;}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck());}_dataSource;_dataSourceChanges=new Z$1;_dataStream=new Z$1;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles());}_multiTemplateDataRows=false;get fixedLayout(){return this._virtualScrollEnabled()?true:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=true,this._stickyColumnStylesNeedReset=true;}_fixedLayout=false;recycleRows=false;contentChanged=new Ae;viewChange=new xr({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;get renderedRows(){return this._renderRows}constructor(){g(new qs("role"),{optional:true})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((t,i)=>this.trackBy?this.trackBy(i.dataIndex,i.data):i);}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(fv(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=true;});}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new Ic:new pt$2,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=true;}ngAfterContentChecked(){this._canRender()&&this._render();}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear();}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),Ig(this.dataSource)&&this.dataSource.disconnect(this);}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(i,o,r)=>this._getEmbeddedViewArgs(i.item,r),i=>i.item.data,i=>{i.operation===Bn$1.INSERTED&&i.context&&this._renderCellTemplateForItem(i.record.item.rowDef,i.context);}),this._updateRowIndexContext(),e.forEachIdentityChange(i=>{let o=t.get(i.currentIndex);o.context.$implicit=i.item.data;}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles();}addColumnDef(e){this._customColumnDefs.add(e);}removeColumnDef(e){this._customColumnDefs.delete(e);}addRowDef(e){this._customRowDefs.add(e);}removeRowDef(e){this._customRowDefs.delete(e);}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=true;}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=true;}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=true;}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=true;}setNoDataRow(e){this._customNoDataRow=e;}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let i=sn(this._headerRowOutlet,"thead");i&&(i.style.display=e.length?"":"none");}let t=this._headerRowDefs.map(i=>i.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,t,"top"),this._headerRowDefs.forEach(i=>i.resetStickyChanged());}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let i=sn(this._footerRowOutlet,"tfoot");i&&(i.style.display=e.length?"":"none");}let t=this._footerRowDefs.map(i=>i.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,t,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(i=>i.resetStickyChanged());}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),i=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...i],["left","right"]),this._stickyColumnStylesNeedReset=false),e.forEach((o,r)=>{this._addStickyColumnStyles([o],this._headerRowDefs[r]);}),this._rowDefs.forEach(o=>{let r=[];for(let m=0;m<t.length;m++)this._renderRows[m].rowDef===o&&r.push(t[m]);this._addStickyColumnStyles(r,o);}),i.forEach((o,r)=>{this._addStickyColumnStyles([o],this._footerRowDefs[r]);}),Array.from(this._columnDefsByName.values()).forEach(o=>o.resetStickyChanged());}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e);}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e);}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e);}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e);}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=true,this._canRender()&&this._render());}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=false),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=false),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates();}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return [];let e=[],t=Math.min(this._data.length,this._renderedRange.end),i=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let o=this._renderedRange.start;o<t;o++){let r=this._data[o],m=this._getRenderRowsForData(r,o,i.get(r));this._cachedRenderRowsMap.has(r)||this._cachedRenderRowsMap.set(r,new WeakMap);for(let h=0;h<m.length;h++){let g=m[h],y=this._cachedRenderRowsMap.get(g.data);y.has(g.rowDef)?y.get(g.rowDef).push(g):y.set(g.rowDef,[g]),e.push(g);}}return e}_getRenderRowsForData(e,t,i){return this._getRowDefs(e,t).map(r=>{let m=i&&i.has(r)?i.get(r):[];if(m.length){let h=m.shift();return h.dataIndex=t,h}else return {data:e,rowDef:r,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Xe(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t);});}_cacheRowDefs(){this._headerRowDefs=Xe(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Xe(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Xe(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0];}_renderUpdatedColumns(){let e=(r,m)=>{let h=!!m.getColumnsDiff();return r||h},t=this._rowDefs.reduce(e,false);t&&this._forceRenderDataRows();let i=this._headerRowDefs.reduce(e,false);i&&this._forceRenderHeaderRows();let o=this._footerRowDefs.reduce(e,false);return o&&this._forceRenderFooterRows(),t||i||o}_switchDataSource(e){this._data=[],Ig(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e;}_observeRenderChanges(){if(!this.dataSource)return;let e;Ig(this.dataSource)?e=this.dataSource.connect(this):Et(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=fe(this.dataSource)),this._renderChangeSubscription=Zy([e,this.viewChange]).pipe(fv(this._onDestroy)).subscribe(([t,i])=>{this._data=t||[],this._renderedRange=i,this._dataStream.next(t),this.renderRows();});}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles();}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles();}_addStickyColumnStyles(e,t){let i=Array.from(t?.columns||[]).map(m=>{let h=this._columnDefsByName.get(m);return h}),o=i.map(m=>m.sticky),r=i.map(m=>m.stickyEnd);this._stickyStyler.updateStickyColumns(e,o,r,!this.fixedLayout||this._forceRecalculateCellWidths);}_getRenderedRows(e){let t=[];for(let i=0;i<e.viewContainer.length;i++){let o=e.viewContainer.get(i);t.push(o.rootNodes[0]);}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return [this._rowDefs[0]];let i=[];if(this.multiTemplateDataRows)i=this._rowDefs.filter(o=>!o.when||o.when(t,e));else {let o=this._rowDefs.find(r=>r.when&&r.when(t,e))||this._defaultRowDef;o&&i.push(o);}return i.length,i}_getEmbeddedViewArgs(e,t){let i=e.rowDef,o={$implicit:e.data};return {templateRef:i.template,context:o,index:t}}_renderRow(e,t,i,o={}){let r=e.viewContainer.createEmbeddedView(t.template,o,i);return this._renderCellTemplateForItem(t,o),r}_renderCellTemplateForItem(e,t){for(let i of this._getCellTemplates(e))me.mostRecentCellOutlet&&me.mostRecentCellOutlet._viewContainer.createEmbeddedView(i,t);this._changeDetectorRef.markForCheck();}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,i=e.length;t<i;t++){let r=e.get(t).context;r.count=i,r.first=t===0,r.last=t===i-1,r.even=t%2===0,r.odd=!r.even,this.multiTemplateDataRows?(r.dataIndex=this._renderRows[t].dataIndex,r.renderIndex=t):r.index=this._renderRows[t].dataIndex;}}_getCellTemplates(e){return !e||!e.columns?[]:Array.from(e.columns,t=>{let i=this._columnDefsByName.get(t);return e.extractCellTemplate(i)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows();}_checkStickyStates(){let e=(t,i)=>t||i.hasStickyChanged();this._headerRowDefs.reduce(e,false)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,false)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,false)&&(this._stickyColumnStylesNeedReset=true,this.updateStickyColumnStyles());}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",t=this._injector;this._stickyStyler=new ct(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:fe()).pipe(fv(this._onDestroy)).subscribe(i=>{this._stickyStyler.direction=i,this.updateStickyColumnStyles();});}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<"u"?nv:tv;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(iv(0,t),fv(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(i,o)=>this._measureRangeSize(i,o)}),Zy([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(fv(this._onDestroy)).subscribe(([i,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let r=0;r<o.elements.length;r++){let m=o.elements[r];if(m){let h=o.offsets[r],g=i!==0?Math.max(i-h,h):-h;for(let y of m)y.style.top=`${-g}px`;}}}),Zy([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(fv(this._onDestroy)).subscribe(([i,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let r=0;r<o.elements.length;r++){let m=o.elements[r];if(m)for(let h of m)h.style.bottom=`${i+o.offsets[r]}px`;}});}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let i=this._noDataRowOutlet.viewContainer;if(t){let o=i.createEmbeddedView(e.templateRef),r=o.rootNodes[0];if(o.rootNodes.length===1&&r?.nodeType===this._document.ELEMENT_NODE){r.setAttribute("role","row"),r.classList.add(...e._contentClassNames);let m=r.querySelectorAll(e._cellSelector);for(let h=0;h<m.length;h++)m[h].classList.add(...e._cellClassNames);}}else i.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck();}_measureRangeSize(e,t){if(e.start>=e.end||t!=="vertical")return 0;let i=this.viewChange.value,o=this._rowOutlet.viewContainer;e.start<i.start||e.end>i.end;let r=e.start-i.start,m=e.end-e.start,h,g;for(let b=0;b<m;b++){let v=o.get(b+r);if(v&&v.rootNodes.length){h=g=v.rootNodes[0];break}}for(let b=m-1;b>-1;b--){let v=o.get(b+r);if(v&&v.rootNodes.length){g=v.rootNodes[v.rootNodes.length-1];break}}let y=h?.getBoundingClientRect?.(),x=g?.getBoundingClientRect?.();return y&&x?x.bottom-y.top:0}_virtualScrollEnabled(){return !this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Eo$1({type:n,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(t,i,o){if(t&1&&rm(o,mn,5)(o,ae,5)(o,Je,5)(o,Ee,5)(o,ut,5),t&2){let r;IC(r=wC())&&(i._noDataRow=r.first),IC(r=wC())&&(i._contentColumnDefs=r),IC(r=wC())&&(i._contentRowDefs=r),IC(r=wC())&&(i._contentHeaderRowDefs=r),IC(r=wC())&&(i._contentFooterRowDefs=r);}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(t,i){t&2&&$s("cdk-table-fixed-layout",i.fixedLayout);},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",Gl],fixedLayout:[2,"fixedLayout","fixedLayout",Gl],recycleRows:[2,"recycleRows","recycleRows",Gl]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[vm([{provide:$,useExisting:n},{provide:Te,useValue:null}])],ngContentSelectors:Yn,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,i){t&1&&(Ol(qn),kl(0),kl(1,1),iC(2,$n,1,0),iC(3,Wn,7,0)(4,Xn,4,0)),t&2&&(cI(2),sC(i._isServer?2:-1),cI(),sC(i._isNativeHtmlTable?3:4));},dependencies:[_t,pt,yt,gt],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1})}return n})();function Xe(n,a){return n.concat(Array.from(a))}function sn(n,a){let e=a.toUpperCase(),t=n.viewContainer.element.nativeElement;for(;t;){let i=t.nodeType===1?t.nodeName:null;if(i===e)return t;if(i==="TABLE")break;t=t.parentNode;}return null}var un=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Ie({type:n});static \u0275inj=pe({imports:[Ao]})}return n})();var Gn=["*",[["","matSortHeaderIcon",""]]],Zn=["*","[matSortHeaderIcon]"];function Jn(n,a){n&1&&(ep(),Ml(0,"svg",3),Kg(1,"path",4),Nl());}function eo(n,a){n&1&&(Ml(0,"div",2),kl(1,1,null,Jn,2,0),Nl());}var hn=new m("MAT_SORT_DEFAULT_OPTIONS"),bt=(()=>{class n{_defaultOptions;_initializedStream=new Rr(1);sortables=new Map;_stateChanges=new Z$1;active;start="asc";get direction(){return this._direction}set direction(e){this._direction=e;}_direction="";disableClear;disabled=false;sortChange=new Ae;initialized=this._initializedStream;constructor(e){this._defaultOptions=e;}register(e){this.sortables.set(e.id,e);}deregister(e){this.sortables.delete(e.id);}sort(e){this.active!=e.id?(this.active=e.id,this.direction=e.start?e.start:this.start):this.direction=this.getNextSortDirection(e),this.sortChange.emit({active:this.active,direction:this.direction});}getNextSortDirection(e){if(!e)return "";let t=e?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,i=to(e.start||this.start,t),o=i.indexOf(this.direction)+1;return o>=i.length&&(o=0),i[o]}ngOnInit(){this._initializedStream.next();}ngOnChanges(){this._stateChanges.next();}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete();}static \u0275fac=function(t){return new(t||n)(Cn$1(hn,8))};static \u0275dir=Io$1({type:n,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{active:[0,"matSortActive","active"],start:[0,"matSortStart","start"],direction:[0,"matSortDirection","direction"],disableClear:[2,"matSortDisableClear","disableClear",Gl],disabled:[2,"matSortDisabled","disabled",Gl]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],features:[Lu]})}return n})();function to(n,a){let e=["asc","desc"];return n=="desc"&&e.reverse(),a||e.push(""),e}var fn=(()=>{class n{_sort=g(bt,{optional:true});_columnDef=g(ae,{optional:true});_changeDetectorRef=g(Ys);_focusMonitor=g(gn$1);_elementRef=g(Xe$1);_ariaDescriber=g(Qm,{optional:true});_renderChanges;_animationsDisabled=pt$1();_recentlyCleared=nr(null);_sortButton;id;arrowPosition="after";start;disabled=false;get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(e){this._updateSortActionDescription(e);}_sortActionDescription="Sort";disableClear;constructor(){g(UT).load(ls);let e=g(hn,{optional:true});this._sort,e?.arrowPosition&&(this.arrowPosition=e?.arrowPosition);}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._sort.register(this),this._renderChanges=ov(this._sort._stateChanges,this._sort.sortChange).subscribe(()=>this._changeDetectorRef.markForCheck()),this._sortButton=this._elementRef.nativeElement.querySelector(".mat-sort-header-container"),this._updateSortActionDescription(this._sortActionDescription);}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,true).subscribe(()=>{Promise.resolve().then(()=>this._recentlyCleared.set(null));});}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._renderChanges?.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription);}_toggleOnInteraction(){if(!this._isDisabled()){let e=this._isSorted(),t=this._sort.direction;this._sort.sort(this),this._recentlyCleared.set(e&&!this._isSorted()?t:null);}}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(e.preventDefault(),this._toggleOnInteraction());}_isSorted(){return this._sort.active==this.id&&(this._sort.direction==="asc"||this._sort.direction==="desc")}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction=="asc"?"ascending":"descending":"none"}_renderArrow(){return !this._isDisabled()||this._isSorted()}_updateSortActionDescription(e){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,e)),this._sortActionDescription=e;}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Eo$1({type:n,selectors:[["","mat-sort-header",""]],hostAttrs:[1,"mat-sort-header"],hostVars:3,hostBindings:function(t,i){t&1&&tm("click",function(){return i._toggleOnInteraction()})("keydown",function(r){return i._handleKeydown(r)})("mouseleave",function(){return i._recentlyCleared.set(null)}),t&2&&(To$2("aria-sort",i._getAriaSortAttribute()),$s("mat-sort-header-disabled",i._isDisabled()));},inputs:{id:[0,"mat-sort-header","id"],arrowPosition:"arrowPosition",start:"start",disabled:[2,"disabled","disabled",Gl],sortActionDescription:"sortActionDescription",disableClear:[2,"disableClear","disableClear",Gl]},exportAs:["matSortHeader"],ngContentSelectors:Zn,decls:4,vars:17,consts:[[1,"mat-sort-header-container","mat-focus-indicator"],[1,"mat-sort-header-content"],[1,"mat-sort-header-arrow"],["viewBox","0 -960 960 960","focusable","false","aria-hidden","true"],["d","M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z"]],template:function(t,i){t&1&&(Ol(Gn),Ml(0,"div",0)(1,"div",1),kl(2),Nl(),iC(3,eo,3,0,"div",2),Nl()),t&2&&($s("mat-sort-header-sorted",i._isSorted())("mat-sort-header-position-before",i.arrowPosition==="before")("mat-sort-header-descending",i._sort.direction==="desc")("mat-sort-header-ascending",i._sort.direction==="asc")("mat-sort-header-recently-cleared-ascending",i._recentlyCleared()==="asc")("mat-sort-header-recently-cleared-descending",i._recentlyCleared()==="desc")("mat-sort-header-animations-disabled",i._animationsDisabled),To$2("tabindex",i._isDisabled()?null:0)("role",i._isDisabled()?null:"button"),cI(3),sC(i._renderArrow()?3:-1));},styles:[`.mat-sort-header {
  cursor: pointer;
}

.mat-sort-header-disabled {
  cursor: default;
}

.mat-sort-header-container {
  display: flex;
  align-items: center;
  letter-spacing: normal;
  outline: 0;
}
[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container, [mat-sort-header].cdk-program-focused .mat-sort-header-container {
  border-bottom: solid 1px currentColor;
}
.mat-sort-header-container::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-sort-header-content {
  display: flex;
  align-items: center;
}

.mat-sort-header-position-before {
  flex-direction: row-reverse;
}

@keyframes _mat-sort-header-recently-cleared-ascending {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-25%);
    opacity: 0;
  }
}
@keyframes _mat-sort-header-recently-cleared-descending {
  from {
    transform: translateY(0) rotate(180deg);
    opacity: 1;
  }
  to {
    transform: translateY(25%) rotate(180deg);
    opacity: 0;
  }
}
.mat-sort-header-arrow {
  height: 12px;
  width: 12px;
  position: relative;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1), opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  overflow: visible;
  color: var(--mat-sort-arrow-color, var(--mat-sys-on-surface));
}
.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow, .mat-sort-header.cdk-program-focused .mat-sort-header-arrow, .mat-sort-header:hover .mat-sort-header-arrow {
  opacity: 0.54;
}
.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow {
  opacity: 1;
}
.mat-sort-header-descending .mat-sort-header-arrow {
  transform: rotate(180deg);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transform: translateY(-25%);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-animations-disabled .mat-sort-header-arrow {
  transition-duration: 0ms;
  animation-duration: 0ms;
}
.mat-sort-header-arrow > svg, .mat-sort-header-arrow [matSortHeaderIcon] {
  width: 24px;
  height: 24px;
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -12px 0 0 -12px;
  transform: translateZ(0);
}
.mat-sort-header-arrow, [dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow {
  margin: 0 0 0 6px;
}
.mat-sort-header-position-before .mat-sort-header-arrow, [dir=rtl] .mat-sort-header-arrow {
  margin: 0 6px 0 0;
}
`],encapsulation:2})}return n})(),pn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Ie({type:n});static \u0275inj=pe({imports:[Ey]})}return n})();var no=[[["caption"]],[["colgroup"],["col"]],"*"],oo=["caption","colgroup, col","*"];function ro(n,a){n&1&&kl(0,2);}function ao(n,a){n&1&&(Ss(0,"thead",0),Jg(1,1),Sl(),Ss(2,"tbody",2),Jg(3,3)(4,4),Sl(),Ss(5,"tfoot",0),Jg(6,5),Sl());}function so(n,a){n&1&&Jg(0,1)(1,3)(2,4)(3,5);}var _n=(()=>{class n extends wt{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=false;static \u0275fac=(()=>{let e;return function(i){return (e||(e=hr(n)))(i||n)}})();static \u0275cmp=Eo$1({type:n,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(t,i){t&2&&$s("mat-table-fixed-layout",i.fixedLayout);},exportAs:["matTable"],features:[vm([{provide:wt,useExisting:n},{provide:$,useExisting:n},{provide:Te,useValue:null}]),Vg],ngContentSelectors:oo,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,i){t&1&&(Ol(no),kl(0),kl(1,1),iC(2,ro,1,0),iC(3,ao,7,0)(4,so,4,0)),t&2&&(cI(2),sC(i._isServer?2:-1),cI(),sC(i._isNativeHtmlTable?3:4));},dependencies:[_t,pt,yt,gt],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--mat-table-background-color, var(--mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-header-container-height, 56px);
  color: var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));
  font-size: var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));
  font-weight: var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--mat-table-row-item-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-footer-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2,changeDetection:1})}return n})(),gn=(()=>{class n extends Ge{static \u0275fac=(()=>{let e;return function(i){return (e||(e=hr(n)))(i||n)}})();static \u0275dir=Io$1({type:n,selectors:[["","matCellDef",""]],features:[vm([{provide:Ge,useExisting:n}]),Vg]})}return n})(),yn=(()=>{class n extends Ze{static \u0275fac=(()=>{let e;return function(i){return (e||(e=hr(n)))(i||n)}})();static \u0275dir=Io$1({type:n,selectors:[["","matHeaderCellDef",""]],features:[vm([{provide:Ze,useExisting:n}]),Vg]})}return n})();var wn=(()=>{class n extends ae{get name(){return this._name}set name(e){this._setNameInput(e);}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`);}static \u0275fac=(()=>{let e;return function(i){return (e||(e=hr(n)))(i||n)}})();static \u0275dir=Io$1({type:n,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[vm([{provide:ae,useExisting:n}]),Vg]})}return n})(),bn=(()=>{class n extends dn{static \u0275fac=(()=>{let e;return function(i){return (e||(e=hr(n)))(i||n)}})();static \u0275dir=Io$1({type:n,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[Vg]})}return n})();var Cn=(()=>{class n extends cn{static \u0275fac=(()=>{let e;return function(i){return (e||(e=hr(n)))(i||n)}})();static \u0275dir=Io$1({type:n,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[Vg]})}return n})();var vn=(()=>{class n extends Ee{static \u0275fac=(()=>{let e;return function(i){return (e||(e=hr(n)))(i||n)}})();static \u0275dir=Io$1({type:n,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",Gl]},features:[vm([{provide:Ee,useExisting:n}]),Vg]})}return n})();var Dn=(()=>{class n extends Je{static \u0275fac=(()=>{let e;return function(i){return (e||(e=hr(n)))(i||n)}})();static \u0275dir=Io$1({type:n,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[vm([{provide:Je,useExisting:n}]),Vg]})}return n})(),Rn=(()=>{class n extends ht{static \u0275fac=(()=>{let e;return function(i){return (e||(e=hr(n)))(i||n)}})();static \u0275cmp=Eo$1({type:n,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[vm([{provide:ht,useExisting:n}]),Vg],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,i){t&1&&Jg(0,0);},dependencies:[me],encapsulation:2,changeDetection:1})}return n})();var Sn=(()=>{class n extends ft{static \u0275fac=(()=>{let e;return function(i){return (e||(e=hr(n)))(i||n)}})();static \u0275cmp=Eo$1({type:n,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[vm([{provide:ft,useExisting:n}]),Vg],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,i){t&1&&Jg(0,0);},dependencies:[me],encapsulation:2,changeDetection:1})}return n})();var Mn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Ie({type:n});static \u0275inj=pe({imports:[un,Ey]})}return n})();var mo=["*"],kn=(()=>{class n{constructor(){this.id=IB.required(),this.dataSource=new Ye(Uu),this.destroyRef=g(Ee$1),this.apiService=g(_),this.translate=g(gd),cp(()=>{this.apiService.user(this.id()).pipe(Ud(500),q(this.destroyRef)).subscribe({next:e=>{this.dataSource.setData(e);},error:()=>{let e=this.translate.instant("error.unexpected-exception");this.dataSource.setError(e);}});});}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Eo$1({type:n,selectors:[["app-post-list-detail"]],inputs:{id:[1,"id"]},ngContentSelectors:mo,decls:8,vars:10,consts:[[1,"mb-2","font-bold"],[1,"my-2","font-bold"],[3,"user","isLoading"]],template:function(t,i){t&1&&(Ol(),Ss(0,"div",0),WC(1),nb(2,"translate"),Sl(),kl(3),Ss(4,"div",1),WC(5),nb(6,"translate"),Sl(),Yg(7,"app-user-info",2)),t&2&&(cI(),pm(ob(2,6,"post-detail.about-post")),cI(3),$s("blur-sm",i.dataSource.state()==="loading"),cI(),Ll(" ",ob(6,8,"post-detail.about-author"),`
`),cI(2),Zg("user",i.dataSource.data())("isLoading",i.dataSource.state()==="loading"));},dependencies:[U$1,OU,RU],encapsulation:2});}}return n})();var xn=()=>n=>n.pipe(U(a=>{let e=a.get("pageIndex"),t=a.get("pageSize");return {pageIndex:e?+e:1,pageSize:t?+t:5}}));var Tn=()=>n=>n.pipe(U(a=>a.get("query")||""));var En=()=>n=>n.pipe(U(a=>({sortBy:a.get("sortBy")||"id",sortDirection:a.get("sortDirection")||"asc"})));var Ct=n=>[n],uo=()=>["expandedDetail"],ho=(n,a)=>[n,a];function fo(n,a){if(n&1){let e=gC();Ss(0,"button",27),nb(1,"translate"),nb(2,"translate"),tm("click",function(){Vf(e);let i=vC();return Hf(i.onQueryRemove())}),Ss(3,"mat-icon"),WC(4,"close"),Sl()();}n&2&&(Zg("matTooltip",ob(1,2,"uni.clear")),To$2("aria-label",ob(2,4,"uni.clear")));}function po(n,a){n&1&&(Ss(0,"th",28),WC(1),nb(2,"translate"),Sl()),n&2&&(cI(),pm(ob(2,1,"table.posts.id.title")));}function _o(n,a){if(n&1&&(Ss(0,"td",29),WC(1),Sl()),n&2){let e=a.$implicit;cI(),Ll(" ","#"+e.id," ");}}function go(n,a){n&1&&(Ss(0,"th",28),WC(1),nb(2,"translate"),Sl()),n&2&&(cI(),Ll(" ",ob(2,1,"table.posts.user-id.title")," "));}function yo(n,a){if(n&1&&(Ss(0,"td",29),WC(1),Sl()),n&2){let e=a.$implicit;cI(),pm("#"+e.userId);}}function wo(n,a){n&1&&(Ss(0,"th",28),WC(1),nb(2,"translate"),Sl()),n&2&&(cI(),pm(ob(2,1,"table.posts.title.title")));}function bo(n,a){if(n&1&&(Ss(0,"td",30),WC(1),Sl()),n&2){let e=a.$implicit;cI(),pm(e.title);}}function Co(n,a){n&1&&(Ss(0,"th",28),WC(1),nb(2,"translate"),Sl()),n&2&&(cI(),pm(ob(2,1,"table.posts.body.title")));}function vo(n,a){if(n&1&&(Ss(0,"td",29),WC(1),Sl()),n&2){let e=a.$implicit;cI(),pm(e.body);}}function Do(n,a){n&1&&(Ss(0,"th",31),WC(1,"\xA0"),Sl());}function Ro(n,a){if(n&1){let e=gC();Ss(0,"td",29)(1,"button",32),nb(2,"translate"),Ss(3,"mat-icon"),WC(4,"more_vert"),Sl()(),Ss(5,"mat-menu",null,0)(7,"a",33),nb(8,"localize"),Ss(9,"mat-icon"),WC(10,"info"),Sl(),Ss(11,"span"),WC(12),nb(13,"translate"),Sl()(),Ss(14,"a",33),nb(15,"localize"),Ss(16,"mat-icon"),WC(17,"edit"),Sl(),Ss(18,"span"),WC(19),nb(20,"translate"),Sl()(),Ss(21,"button",34),tm("deleted",function(){let i=Vf(e).$implicit,o=vC();return Hf(o.onDeleted(i.id))}),Ss(22,"mat-icon"),WC(23,"delete"),Sl(),Ss(24,"span"),WC(25),nb(26,"translate"),Sl()()()();}if(n&2){let e=a.$implicit,t=bC(6),i=vC();cI(),Zg("matMenuTriggerFor",t),To$2("aria-label",ob(2,8,"uni.aria-label.show-actions")),cI(6),Zg("routerLink",tb(20,ho,ob(8,10,"/"),e.id)),cI(5),pm(ob(13,12,"uni.detail")),cI(2),Zg("routerLink",eb(23,Ct,ob(15,14,"/"+e.id+"/"+i.ROUTE_DEFINITION.POSTS.EDIT))),cI(5),pm(ob(20,16,"uni.edit")),cI(2),Zg("appPostDelete",e.id),cI(4),pm(ob(26,18,"uni.delete"));}}function So(n,a){n&1&&(Ss(0,"th",31),nb(1,"translate"),WC(2,"\xA0"),Sl()),n&2&&To$2("aria-label",ob(1,1,"uni.aria-label.row-actions"));}function Mo(n,a){n&1&&(Ss(0,"mat-icon"),WC(1,"keyboard_arrow_up"),Sl());}function ko(n,a){n&1&&(Ss(0,"mat-icon"),WC(1,"keyboard_arrow_down"),Sl());}function xo(n,a){if(n&1){let e=gC();Ss(0,"td",29)(1,"button",35),nb(2,"translate"),tm("click",function(i){let o=Vf(e).$implicit,r=vC();return Hf(r.onExpand(i,o))}),iC(3,Mo,2,0,"mat-icon")(4,ko,2,0,"mat-icon"),Sl()();}if(n&2){let e=a.$implicit,t=vC();cI(),To$2("aria-label",ob(2,2,"uni.aria-label.expand-row")),cI(2),sC(t.expandedElement===e?3:4);}}function To(n,a){if(n&1&&(Ss(0,"div")(1,"app-post-list-detail",37)(2,"table")(3,"colgroup"),Yg(4,"col",8)(5,"col"),Sl(),Ss(6,"tbody")(7,"tr",38)(8,"td",39),WC(9),nb(10,"translate"),Sl(),Ss(11,"td"),WC(12),Sl()(),Ss(13,"tr",38)(14,"td",39),WC(15),nb(16,"translate"),Sl(),Ss(17,"td"),WC(18),Sl()(),Ss(19,"tr",38)(20,"td",39),WC(21),nb(22,"translate"),Sl(),Ss(23,"td"),WC(24),Sl()(),Ss(25,"tr",38)(26,"td",39),WC(27),nb(28,"translate"),Sl(),Ss(29,"td"),WC(30),Sl()()()()()()),n&2){let e=vC().$implicit,t=vC();$s("my-2",e===t.expandedElement),cI(),Zg("id",e.userId),cI(8),pm(ob(10,11,"table.posts.id.title")),cI(3),pm("#"+e.id),cI(3),pm(ob(16,13,"table.posts.user-id.title")),cI(3),pm("#"+e.userId),cI(3),pm(ob(22,15,"table.posts.title.title")),cI(3),pm(e.title),cI(3),pm(ob(28,17,"table.posts.body.title")),cI(3),pm(e.body);}}function Eo(n,a){if(n&1&&(Ss(0,"td",29)(1,"div"),iC(2,To,31,19,"div",36),Sl()()),n&2){let e=a.$implicit,t=vC();To$2("colspan",t.displayedColumnsExpanded.length),cI(),Zg("@detailExpand",e===t.expandedElement?"expanded":"collapsed"),cI(),sC(t.expandedElement===e?2:-1);}}function Io(n,a){n&1&&Yg(0,"tr",40);}function Po(n,a){n&1&&Yg(0,"tr",41);}function Fo(n,a){n&1&&Yg(0,"tr",42);}function Oo(n,a){n&1&&(Ss(0,"div",43)(1,"a",44),nb(2,"localize"),WC(3),nb(4,"translate"),Sl()()),n&2&&(cI(),Zg("routerLink",eb(6,Ct,ob(2,2,"/"))),cI(2),pm(ob(4,4,"breadcrumbs.app.posts")));}var ws=(()=>{class n{constructor(){this.apiService=g(_),this.cdr=g(Ys),this.router=g(X),this.route=g(vt),this.breadcrumbsPortalService=g(Dg),this.portalContent=wB.required(bh),this.ROUTE_DEFINITION=P,this.displayedColumns=["id","title","actions"],this.displayedColumnsExpanded=[...this.displayedColumns,"expand"],this.pageSizeOptions=[5,10,25,100],this.data=nr([]),this.totalCount=nr(0),this.query=nr(""),this.pageSize=nr(5),this.pageIndex=nr(1),this.sortBy=nr("id"),this.sortDirection=nr("asc"),this.expandedElement=null,this.destroyRef=g(Ee$1),cp(()=>{this.apiService.list({page:this.pageIndex(),limit:this.pageSize(),sort:this.sortBy(),order:this.sortDirection(),query:this.query()}).pipe(q(this.destroyRef)).subscribe(e=>{this.data.set(e.items),this.totalCount.set(e.totalCount);});});}ngOnDestroy(){this.portalContent()?.detach();}ngOnInit(){this.breadcrumbsPortalService.setPortal(this.portalContent()),Zy([this.route.queryParamMap.pipe(xn()),this.route.queryParamMap.pipe(Tn()),this.route.queryParamMap.pipe(En())]).pipe(Ud(1e3),q(this.destroyRef)).subscribe(([e,t,i])=>{this.query.set(t),this.pageIndex.set(e.pageIndex||1),this.pageSize.set(e.pageSize||5),this.sortBy.set(i.sortBy||"id"),this.sortDirection.set(i.sortDirection||"asc");});}onSortChange(e){this.setFiltersToRoute({sortBy:e.active,sortDirection:e.direction,pageIndex:null});}onPageChange(e){let t=null;e.pageSize===this.pageSize()&&(t=e.pageIndex+1>1?e.pageIndex+1:null),this.setFiltersToRoute({pageIndex:t,pageSize:e.pageSize});}onQueryChange(e){let t=e.target.value;this.setFiltersToRoute({query:t?encodeURIComponent(t):null,pageIndex:null});}onQueryRemove(){this.setFiltersToRoute({query:null,pageIndex:null});}onClear(){this.setFiltersToRoute({query:null,pageIndex:null,pageSize:null,sortBy:null,sortDirection:null});}onDeleted(e){this.data.update(t=>t.filter(i=>i.id!==e));}onExpand(e,t){this.expandedElement=this.expandedElement===t?null:t,this.cdr.markForCheck(),e.stopPropagation();}trackByPostId(e,t){return t.id}setFiltersToRoute(e){this.router.navigate([],{queryParams:e,queryParamsHandling:"merge",replaceUrl:true});}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Eo$1({type:n,selectors:[["app-post-list"]],viewQuery:function(t,i){t&1&&sm(i.portalContent,bh,5),t&2&&CC();},decls:47,vars:35,consts:[["menu","matMenu"],[1,"w-full"],["matInput","",3,"input","ngModelChange","placeholder","ngModel"],["matSuffix","","mat-icon-button","",3,"matTooltip"],[1,"flex","items-end","justify-end","gap-2"],["mat-button","",3,"click"],["mat-button","",3,"routerLink"],["mat-table","","matSort","","matSortDisableClear","","multiTemplateDataRows","",3,"matSortChange","fixedLayout","dataSource","matSortActive","matSortDirection","trackBy"],["width","120"],["width","auto"],["width","50"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","","disableClear","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","userId"],["matColumnDef","title"],["mat-cell","","class","font-bold",4,"matCellDef"],["matColumnDef","body"],["matColumnDef","actions"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","expand"],["matColumnDef","expandedDetail"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-row","","class","expandable-row",4,"matRowDef","matRowDefColumns"],[3,"page","pageSizeOptions","pageSize","pageIndex","length"],["class","container py-4",4,"cdkPortal"],["matSuffix","","mat-icon-button","",3,"click","matTooltip"],["mat-header-cell","","mat-sort-header","","disableClear",""],["mat-cell",""],["mat-cell","",1,"font-bold"],["mat-header-cell",""],["mat-icon-button","",3,"matMenuTriggerFor"],["mat-menu-item","",3,"routerLink"],["mat-menu-item","",3,"deleted","appPostDelete"],["mat-icon-button","",3,"click"],[3,"my-2"],[3,"id"],[1,"align-baseline"],[1,"font-bold"],["mat-header-row",""],["mat-row",""],["mat-row","",1,"expandable-row"],[1,"container","py-4"],["mat-button","","color","primary",3,"routerLink"]],template:function(t,i){t&1&&(Ss(0,"mat-form-field",1)(1,"mat-label"),WC(2),nb(3,"translate"),Sl(),Ss(4,"input",2),nb(5,"translate"),tm("input",function(r){return i.onQueryChange(r)})("ngModelChange",function(r){return i.query.set(r)}),Sl(),YI(),iC(6,fo,5,6,"button",3),Sl(),Ss(7,"div",4)(8,"button",5),tm("click",function(){return i.onClear()}),WC(9),nb(10,"translate"),Sl(),Ss(11,"a",6),nb(12,"localize"),WC(13),nb(14,"translate"),Sl()(),Ss(15,"table",7),tm("matSortChange",function(r){return i.onSortChange(r)}),Ss(16,"colgroup"),Yg(17,"col",8)(18,"col",9)(19,"col",10)(20,"col",10),Sl(),Al(21,11),Ug(22,po,3,3,"th",12)(23,_o,2,1,"td",13),xl(),Al(24,14),Ug(25,go,3,3,"th",12)(26,yo,2,1,"td",13),xl(),Al(27,15),Ug(28,wo,3,3,"th",12)(29,bo,2,1,"td",16),xl(),Al(30,17),Ug(31,Co,3,3,"th",12)(32,vo,2,1,"td",13),xl(),Al(33,18),Ug(34,Do,2,0,"th",19)(35,Ro,27,25,"td",13),xl(),Al(36,20),Ug(37,So,3,3,"th",19)(38,xo,5,4,"td",13),xl(),Al(39,21),Ug(40,Eo,3,3,"td",13),xl(),Ug(41,Io,1,0,"tr",22)(42,Po,1,0,"tr",23)(43,Fo,1,0,"tr",24),Sl(),Ss(44,"mat-paginator",25),nb(45,"translate"),tm("page",function(r){return i.onPageChange(r)}),Sl(),Ug(46,Oo,5,8,"div",26)),t&2&&(cI(2),pm(ob(3,20,"input.search.label")),cI(2),Zg("placeholder",ob(5,22,"input.search.placeholder"))("ngModel",i.query()),QI(),cI(2),sC(i.query()?6:-1),cI(3),pm(ob(10,24,"uni.clear-filters")),cI(2),Zg("routerLink",eb(32,Ct,ob(12,26,"/"+i.ROUTE_DEFINITION.POSTS.CREATE))),cI(2),pm(ob(14,28,"uni.create")),cI(2),Zg("fixedLayout",true)("dataSource",i.data())("matSortActive",i.sortBy())("matSortDirection",i.sortDirection())("trackBy",i.trackByPostId),cI(26),Zg("matHeaderRowDef",i.displayedColumnsExpanded),cI(),Zg("matRowDefColumns",i.displayedColumnsExpanded),cI(),Zg("matRowDefColumns",XC(34,uo)),cI(),Zg("pageSizeOptions",i.pageSizeOptions)("pageSize",i.pageSize())("pageIndex",i.pageIndex()-1)("length",i.totalCount()),To$2("aria-label",ob(45,30,"uni.aria-label.select-page-of-posts")));},dependencies:[_r,bi,fr,ao$1,Pu,fs,ms,Tl,Fr,di,et,xn$1,wU,IU,Ve,Be,rn,Ce,ke,on,On$1,Jt,pn,bt,fn,Mn,_n,yn,vn,wn,gn,Dn,bn,Cn,Rn,Sn,Kr,Do$1,kn,lc,OU,Ht,bh,Gu,Rg,RU],styles:["[_nghost-%COMP%]{width:100%;margin-right:auto;margin-left:auto;padding-right:1rem;padding-left:1rem}@media(min-width:640px){[_nghost-%COMP%]{max-width:640px}}@media(min-width:768px){[_nghost-%COMP%]{max-width:768px}}@media(min-width:1024px){[_nghost-%COMP%]{max-width:1024px}}@media(min-width:1280px){[_nghost-%COMP%]{max-width:1280px}}@media(min-width:1536px){[_nghost-%COMP%]{max-width:1536px}}[_nghost-%COMP%]{display:block}[_nghost-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}[_nghost-%COMP%]{padding-top:1rem;padding-bottom:1rem}tr.expandable-row[_ngcontent-%COMP%]{height:0px}"],data:{animation:[Dn$1("detailExpand",[Pn("collapsed",Tn$1({height:"0px",minHeight:"0"})),Pn("expanded",Tn$1({height:"*"})),Fn("expanded <=> collapsed",In("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))])]}});}}return n})();export{ws as PostListComponent};