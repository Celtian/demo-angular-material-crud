import{c as at,d as nt,e as ot,f as st,h as rt,i as lt,l as ct,p as dt,u as pt,v as ht}from"./chunk-5BTXGFW4.js";import{C as et,D as tt,G as me,H as $,I as X,J as it,h as Xe,i as Ze,z as Je}from"./chunk-U4UMJC4W.js";import{$a as ke,A as R,Ac as le,B as ie,Ba as Se,Bc as q,Cc as Le,Ec as Q,Fc as Fe,Ga as c,Gc as Re,H as ae,Ha as p,Hb as k,Ib as K,Ic as ce,Ja as j,Jb as H,Jc as S,K as _e,Kb as P,Kc as T,La as z,Ma as Oe,Oa as W,Ra as v,Rc as Ve,S as ne,Sa as u,Sc as de,T as oe,U as O,Ua as Me,Uc as Be,Wa as Ie,Ya as y,Z as fe,Za as C,_ as V,_a as we,_c as Ne,ab as Pe,ba as A,bb as l,bd as je,cb as d,da as ve,db as w,dc as ze,ea as B,fa as N,fd as pe,gd as Y,h as D,hb as E,hc as Ee,ia as be,id as We,ja as M,jd as Ge,ka as I,kd as Ke,la as b,lb as _,ld as He,ma as L,md as qe,nb as h,oa as ye,ob as Te,pa as Ce,pb as se,pd as Qe,qa as xe,qb as De,qd as Ye,rb as x,rd as U,s as te,sb as F,sd as Ue,tb as G,td as $e,ud as he,vb as Ae,x as ue,zc as re}from"./chunk-6V6PCDCB.js";var At=["trigger"],zt=["panel"];function Et(a,n){if(a&1&&(l(0,"span",9),x(1),d()),a&2){let o=h();c(1),F(o.placeholder)}}function Lt(a,n){a&1&&se(0)}function Ft(a,n){if(a&1&&(l(0,"span",11),x(1),d()),a&2){let o=h(2);c(1),F(o.triggerValue)}}function Rt(a,n){if(a&1&&(l(0,"span",10),y(1,Lt,1,0)(2,Ft,2,1),d()),a&2){let o=h();c(1),C(1,o.customTrigger?1:2)}}function Vt(a,n){if(a&1){let o=E();b(),L(),l(0,"div",12,13),_("@transformPanel.done",function(t){M(o);let i=h();return I(i._panelDoneAnimatingStream.next(t.toState))})("keydown",function(t){M(o);let i=h();return I(i._handleKeydown(t))}),se(2,1),d()}if(a&2){let o=h();Ie("mat-mdc-select-panel mdc-menu-surface mdc-menu-surface--open ",o._getPanelTheme(),""),u("ngClass",o.panelClass)("@transformPanel","showing"),v("id",o.id+"-panel")("aria-multiselectable",o.multiple)("aria-label",o.ariaLabel||null)("aria-labelledby",o._getPanelAriaLabelledby())}}var Bt=[[["mat-select-trigger"]],"*"],Nt=["mat-select-trigger","*"],jt={transformPanelWrap:re("transformPanelWrap",[Q("* => void",Re("@transformPanel",[Fe()],{optional:!0}))]),transformPanel:re("transformPanel",[Le("void",q({opacity:0,transform:"scale(1, 0.8)"})),Q("void => showing",le("120ms cubic-bezier(0, 0, 0.2, 1)",q({opacity:1,transform:"scale(1, 1)"}))),Q("* => void",le("100ms linear",q({opacity:0})))])};var ft=0,vt=new A("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let a=ve(me);return()=>a.scrollStrategies.reposition()}});function Wt(a){return()=>a.scrollStrategies.reposition()}var Gt=new A("MAT_SELECT_CONFIG"),Kt={provide:vt,deps:[me],useFactory:Wt},Ht=new A("MatSelectTrigger"),ge=class{constructor(n,o){this.source=n,this.value=o}},qt=We(Ge(Y(Ke(class{constructor(a,n,o,e,t){this._elementRef=a,this._defaultErrorStateMatcher=n,this._parentForm=o,this._parentFormGroup=e,this.ngControl=t,this.stateChanges=new D}})))),bt=(()=>{let n=class n extends qt{_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,s=Ue(e,this.options,this.optionGroups),r=t._getHostElement();e===0&&s===1?i.scrollTop=0:i.scrollTop=$e(r.offsetTop,r.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new ge(this,e)}get focused(){return this._focused||this._panelOpen}get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=S(e),this._syncParentProperties()}get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}get required(){return this._required??this.ngControl?.control?.hasValidator(rt.required)??!1}set required(e){this._required=S(e),this.stateChanges.next()}get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=S(e)}get disableOptionCentering(){return this._disableOptionCentering}set disableOptionCentering(e){this._disableOptionCentering=S(e)}get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}get typeaheadDebounceInterval(){return this._typeaheadDebounceInterval}set typeaheadDebounceInterval(e){this._typeaheadDebounceInterval=T(e)}get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}constructor(e,t,i,s,r,f,m,Ct,xt,St,Ot,Mt,It,J){super(r,s,m,Ct,St),this._viewportRuler=e,this._changeDetectorRef=t,this._ngZone=i,this._dir=f,this._parentFormField=xt,this._liveAnnouncer=It,this._defaultOptions=J,this._positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}],this._panelOpen=!1,this._compareWith=(g,ee)=>g===ee,this._uid=`mat-select-${ft++}`,this._triggerAriaLabelledBy=null,this._destroy=new D,this._onChange=()=>{},this._onTouched=()=>{},this._valueId=`mat-select-value-${ft++}`,this._panelDoneAnimatingStream=new D,this._overlayPanelClass=this._defaultOptions?.overlayPanelClass||"",this._focused=!1,this.controlType="mat-select",this._hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1,this._multiple=!1,this._disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1,this.ariaLabel="",this.panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto",this.optionSelectionChanges=ue(()=>{let g=this.options;return g?g.changes.pipe(ne(g),oe(()=>R(...g.map(ee=>ee.onSelectionChange)))):this._ngZone.onStable.pipe(ae(1),oe(()=>this.optionSelectionChanges))}),this.openedChange=new z,this._openedStream=this.openedChange.pipe(ie(g=>g),te(()=>{})),this._closedStream=this.openedChange.pipe(ie(g=>!g),te(()=>{})),this.selectionChange=new z,this.valueChange=new z,this._trackedModal=null,this._skipPredicate=g=>this.panelOpen?!1:g.disabled,this.ngControl&&(this.ngControl.valueAccessor=this),J?.typeaheadDebounceInterval!=null&&(this._typeaheadDebounceInterval=J.typeaheadDebounceInterval),this._scrollStrategyFactory=Mt,this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=parseInt(Ot)||0,this.id=this.id}ngOnInit(){this._selectionModel=new Je(this.multiple),this.stateChanges.next(),this._panelDoneAnimatingStream.pipe(_e(),O(this._destroy)).subscribe(()=>this._panelDoneAnimating(this.panelOpen)),this._viewportRuler.change().pipe(O(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initKeyManager(),this._selectionModel.changed.pipe(O(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(ne(null),O(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute("aria-labelledby",e):i.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this._typeaheadDebounceInterval)}ngOnDestroy(){this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._canOpen()&&(this._applyModalPanelOwnership(),this._panelOpen=!0,this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck()),this.stateChanges.next()}_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&de(this._trackedModal,"aria-owns",t),Ve(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;de(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched()),this.stateChanges.next()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,s=t===13||t===32,r=this._keyManager;if(!r.isTyping()&&s&&!ce(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let f=this.selected;r.onKeydown(e);let m=this.selected;m&&f!==m&&this._liveAnnouncer.announce(m.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,s=i===40||i===38,r=t.isTyping();if(s&&e.altKey)e.preventDefault(),this.close();else if(!r&&(i===13||i===32)&&t.activeItem&&!ce(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!r&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let f=this.options.some(m=>!m.disabled&&!m.selected);this.options.forEach(m=>{m.disabled||(f?m.select():m.deselect())})}else{let f=t.activeItemIndex;t.onKeydown(e),this._multiple&&s&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==f&&t.activeItem._selectViaInteraction()}}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}_onAttached(){this._overlayDir.positionChange.pipe(ae(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()})}_getPanelTheme(){return this._parentFormField?`mat-${this._parentFormField.color}`:""}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return i.value!=null&&this._compareWith(i.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof $?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Be(this.options).withTypeAhead(this._typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=R(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(O(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),R(...this.options.map(t=>t._stateChanges)).pipe(O(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId(),t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId(),t=(e?e+" ":"")+this._valueId;return this.ariaLabelledby&&(t+=" "+this.ariaLabelledby),t}_panelDoneAnimating(e){this.openedChange.emit(e)}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focus(),this.open()}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}};n.\u0275fac=function(t){return new(t||n)(p(et),p(j),p(Oe),p(qe),p(Se),p(je,8),p(ct,8),p(dt,8),p(nt,8),p(lt,10),ye("tabindex"),p(vt),p(Ne),p(Gt,8))},n.\u0275cmp=B({type:n,selectors:[["mat-select"]],contentQueries:function(t,i,s){if(t&1&&(H(s,Ht,5),H(s,U,5),H(s,Ye,5)),t&2){let r;k(r=P())&&(i.customTrigger=r.first),k(r=P())&&(i.options=r),k(r=P())&&(i.optionGroups=r)}},viewQuery:function(t,i){if(t&1&&(K(At,5),K(zt,5),K(X,5)),t&2){let s;k(s=P())&&(i.trigger=s.first),k(s=P())&&(i.panel=s.first),k(s=P())&&(i._overlayDir=s.first)}},hostAttrs:["role","combobox","aria-autocomplete","none","aria-haspopup","listbox","ngSkipHydration","",1,"mat-mdc-select"],hostVars:19,hostBindings:function(t,i){t&1&&_("keydown",function(r){return i._handleKeydown(r)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),t&2&&(v("id",i.id)("tabindex",i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),Me("mat-mdc-select-disabled",i.disabled)("mat-mdc-select-invalid",i.errorState)("mat-mdc-select-required",i.required)("mat-mdc-select-empty",i.empty)("mat-mdc-select-multiple",i.multiple))},inputs:{disabled:"disabled",disableRipple:"disableRipple",tabIndex:"tabIndex",userAriaDescribedBy:["aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",hideSingleSelectionIndicator:"hideSingleSelectionIndicator",placeholder:"placeholder",required:"required",multiple:"multiple",disableOptionCentering:"disableOptionCentering",compareWith:"compareWith",value:"value",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:"typeaheadDebounceInterval",sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth"},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[Ae([{provide:at,useExisting:n},{provide:Qe,useExisting:n}]),W,be],ngContentSelectors:Nt,decls:11,vars:8,consts:[["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],[1,"mat-mdc-select-value"],["class","mat-mdc-select-placeholder mat-mdc-select-min-line"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayLockPosition","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","backdropClick","attach","detach"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",3,"ngClass","keydown"],["panel",""]],template:function(t,i){if(t&1&&(Te(Bt),l(0,"div",0,1),_("click",function(){return i.toggle()}),l(3,"div",2),y(4,Et,2,1,"span",3)(5,Rt,3,1),d(),l(6,"div",4)(7,"div",5),b(),l(8,"svg",6),w(9,"path",7),d()()()(),y(10,Vt,3,9,"ng-template",8),_("backdropClick",function(){return i.close()})("attach",function(){return i._onAttached()})("detach",function(){return i.close()})),t&2){let s=De(1);c(3),v("id",i._valueId),c(1),C(4,i.empty?4:5),c(6),u("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",i._preferredOverlayOrigin||s)("cdkConnectedOverlayOpen",i.panelOpen)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayWidth",i._overlayWidth)}},dependencies:[ze,X,$],styles:['.mat-mdc-select{display:inline-block;width:100%;outline:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-select-enabled-trigger-text-color);font-family:var(--mat-select-trigger-text-font);line-height:var(--mat-select-trigger-text-line-height);font-size:var(--mat-select-trigger-text-size);font-weight:var(--mat-select-trigger-text-weight);letter-spacing:var(--mat-select-trigger-text-tracking)}.mat-mdc-select-disabled{color:var(--mat-select-disabled-trigger-text-color)}.mat-mdc-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-mdc-select-disabled .mat-mdc-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-mdc-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-mdc-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-mdc-select-arrow-wrapper{height:24px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper{transform:translateY(-8px)}.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper{transform:none}.mat-mdc-select-arrow{width:10px;height:5px;position:relative;color:var(--mat-select-enabled-arrow-color)}.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow{color:var(--mat-select-focused-arrow-color)}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow{color:var(--mat-select-invalid-arrow-color)}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow{color:var(--mat-select-disabled-arrow-color)}.mat-mdc-select-arrow svg{fill:currentColor;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:CanvasText}.mat-mdc-select-disabled .cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:GrayText}div.mat-mdc-select-panel{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);width:100%;max-height:275px;outline:0;overflow:auto;padding:8px 0;border-radius:4px;box-sizing:border-box;position:static;background-color:var(--mat-select-panel-background-color)}.cdk-high-contrast-active div.mat-mdc-select-panel{outline:solid 1px}.cdk-overlay-pane:not(.mat-mdc-select-panel-above) div.mat-mdc-select-panel{border-top-left-radius:0;border-top-right-radius:0;transform-origin:top center}.mat-mdc-select-panel-above div.mat-mdc-select-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:bottom center}.mat-mdc-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);color:var(--mat-select-placeholder-text-color)}._mat-animation-noopable .mat-mdc-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-mdc-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper{cursor:pointer}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label{max-width:calc(100% - 18px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 24px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch{max-width:calc(100% - 24px)}.mat-mdc-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}'],encapsulation:2,data:{animation:[jt.transformPanel]},changeDetection:0});let a=n;return a})();var yt=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=N({type:n}),n.\u0275inj=V({providers:[Kt],imports:[Ee,it,he,pe,tt,st,he,pe]});let a=n;return a})();function Yt(a,n){if(a&1&&(l(0,"mat-option",18),x(1),d()),a&2){let o=n.$implicit;u("value",o),c(1),G(" ",o," ")}}function Ut(a,n){if(a&1){let o=E();l(0,"mat-form-field",16)(1,"mat-select",17),_("selectionChange",function(t){M(o);let i=h(2);return I(i._changePageSize(t.value))}),ke(2,Yt,2,2,"mat-option",18,we),d()()}if(a&2){let o=h(2);u("appearance",o._formFieldAppearance)("color",o.color),c(1),u("value",o.pageSize)("disabled",o.disabled)("aria-labelledby",o._pageSizeLabelId)("panelClass",o.selectConfig.panelClass||"")("disableOptionCentering",o.selectConfig.disableOptionCentering),c(1),Pe(o._displayedPageSizeOptions)}}function $t(a,n){if(a&1&&(l(0,"div",19),x(1),d()),a&2){let o=h(2);c(1),F(o.pageSize)}}function Xt(a,n){if(a&1&&(l(0,"div",12)(1,"div",13),x(2),d(),y(3,Ut,4,7,"mat-form-field",14)(4,$t,2,1,"div",15),d()),a&2){let o=h();c(1),v("id",o._pageSizeLabelId),c(1),G(" ",o._intl.itemsPerPageLabel," "),c(1),C(3,o._displayedPageSizeOptions.length>1?3:-1),c(1),C(4,o._displayedPageSizeOptions.length<=1?4:-1)}}function Zt(a,n){if(a&1){let o=E();l(0,"button",20),_("click",function(){M(o);let t=h();return I(t.firstPage())}),b(),l(1,"svg",7),w(2,"path",21),d()()}if(a&2){let o=h();u("matTooltip",o._intl.firstPageLabel)("matTooltipDisabled",o._previousButtonsDisabled())("matTooltipPosition","above")("disabled",o._previousButtonsDisabled()),v("aria-label",o._intl.firstPageLabel)}}function Jt(a,n){if(a&1){let o=E();b(),L(),l(0,"button",22),_("click",function(){M(o);let t=h();return I(t.lastPage())}),b(),l(1,"svg",7),w(2,"path",23),d()()}if(a&2){let o=h();u("matTooltip",o._intl.lastPageLabel)("matTooltipDisabled",o._nextButtonsDisabled())("matTooltipPosition","above")("disabled",o._nextButtonsDisabled()),v("aria-label",o._intl.lastPageLabel)}}var Z=(()=>{let n=class n{constructor(){this.changes=new D,this.itemsPerPageLabel="Items per page:",this.nextPageLabel="Next page",this.previousPageLabel="Previous page",this.firstPageLabel="First page",this.lastPageLabel="Last page",this.getRangeLabel=(e,t,i)=>{if(i==0||t==0)return`0 of ${i}`;i=Math.max(i,0);let s=e*t,r=s<i?Math.min(s+t,i):s+t;return`${s+1} \u2013 ${r} of ${i}`}}};n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=fe({token:n,factory:n.\u0275fac,providedIn:"root"});let a=n;return a})();function ei(a){return a||new Z}var ti={provide:Z,deps:[[new Ce,new xe,Z]],useFactory:ei},ii=50;var ai=new A("MAT_PAGINATOR_DEFAULT_OPTIONS"),ni=Y(He(class{})),oi=0,sa=(()=>{let n=class n extends ni{get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(T(e),0),this._changeDetectorRef.markForCheck()}get length(){return this._length}set length(e){this._length=T(e),this._changeDetectorRef.markForCheck()}get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(T(e),0),this._updateDisplayedPageSizeOptions()}get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(t=>T(t)),this._updateDisplayedPageSizeOptions()}get hidePageSize(){return this._hidePageSize}set hidePageSize(e){this._hidePageSize=S(e)}get showFirstLastButtons(){return this._showFirstLastButtons}set showFirstLastButtons(e){this._showFirstLastButtons=S(e)}constructor(e,t,i){if(super(),this._intl=e,this._changeDetectorRef=t,this._pageSizeLabelId=`mat-paginator-page-size-label-${oi++}`,this._pageIndex=0,this._length=0,this._pageSizeOptions=[],this._hidePageSize=!1,this._showFirstLastButtons=!1,this.selectConfig={},this.page=new z,this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),i){let{pageSize:s,pageSizeOptions:r,hidePageSize:f,showFirstLastButtons:m}=i;s!=null&&(this._pageSize=s),r!=null&&(this._pageSizeOptions=r),f!=null&&(this._hidePageSize=f),m!=null&&(this._showFirstLastButtons=m)}this._formFieldAppearance=i?.formFieldAppearance||"outline"}ngOnInit(){this._initialized=!0,this._updateDisplayedPageSizeOptions(),this._markInitialized()}ngOnDestroy(){this._intlChanges.unsubscribe()}nextPage(){if(!this.hasNextPage())return;let e=this.pageIndex;this.pageIndex=this.pageIndex+1,this._emitPageEvent(e)}previousPage(){if(!this.hasPreviousPage())return;let e=this.pageIndex;this.pageIndex=this.pageIndex-1,this._emitPageEvent(e)}firstPage(){if(!this.hasPreviousPage())return;let e=this.pageIndex;this.pageIndex=0,this._emitPageEvent(e)}lastPage(){if(!this.hasNextPage())return;let e=this.pageIndex;this.pageIndex=this.getNumberOfPages()-1,this._emitPageEvent(e)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let t=this.pageIndex*this.pageSize,i=this.pageIndex;this.pageIndex=Math.floor(t/e)||0,this.pageSize=e,this._emitPageEvent(i)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._initialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:ii),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,t)=>e-t),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}};n.\u0275fac=function(t){return new(t||n)(p(Z),p(j),p(ai,8))},n.\u0275cmp=B({type:n,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{disabled:"disabled",color:"color",pageIndex:"pageIndex",length:"length",pageSize:"pageSize",pageSizeOptions:"pageSizeOptions",hidePageSize:"hidePageSize",showFirstLastButtons:"showFirstLastButtons",selectConfig:"selectConfig"},outputs:{page:"page"},exportAs:["matPaginator"],features:[W],decls:14,vars:14,consts:[[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],["class","mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-live","polite",1,"mat-mdc-paginator-range-label"],["mat-icon-button","","type","button","class","mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-previous",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-next",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["mat-icon-button","","type","button","class","mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-page-size-label"],["class","mat-mdc-paginator-page-size-select",3,"appearance","color"],["class","mat-mdc-paginator-page-size-value"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],["hideSingleSelectionIndicator","",3,"value","disabled","aria-labelledby","panelClass","disableOptionCentering","selectionChange"],[3,"value"],[1,"mat-mdc-paginator-page-size-value"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(t,i){t&1&&(l(0,"div",0)(1,"div",1),y(2,Xt,5,4,"div",2),l(3,"div",3)(4,"div",4),x(5),d(),y(6,Zt,3,5,"button",5),l(7,"button",6),_("click",function(){return i.previousPage()}),b(),l(8,"svg",7),w(9,"path",8),d()(),L(),l(10,"button",9),_("click",function(){return i.nextPage()}),b(),l(11,"svg",7),w(12,"path",10),d()(),y(13,Jt,3,5,"button",11),d()()()),t&2&&(c(2),C(2,i.hidePageSize?-1:2),c(3),G(" ",i._intl.getRangeLabel(i.pageIndex,i.pageSize,i.length)," "),c(1),C(6,i.showFirstLastButtons?6:-1),c(1),u("matTooltip",i._intl.previousPageLabel)("matTooltipDisabled",i._previousButtonsDisabled())("matTooltipPosition","above")("disabled",i._previousButtonsDisabled()),v("aria-label",i._intl.previousPageLabel),c(3),u("matTooltip",i._intl.nextPageLabel)("matTooltipDisabled",i._nextButtonsDisabled())("matTooltipPosition","above")("disabled",i._nextButtonsDisabled()),v("aria-label",i._intl.nextPageLabel),c(3),C(13,i.showFirstLastButtons?13:-1))},dependencies:[Xe,ot,bt,U,pt],styles:[".mat-mdc-paginator{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-paginator-container-text-color);background-color:var(--mat-paginator-container-background-color);font-family:var(--mat-paginator-container-text-font);line-height:var(--mat-paginator-container-text-line-height);font-size:var(--mat-paginator-container-text-size);font-weight:var(--mat-paginator-container-text-weight);letter-spacing:var(--mat-paginator-container-text-tracking)}.mat-mdc-paginator .mat-mdc-select-value{font-size:var(--mat-paginator-select-trigger-text-size)}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap-reverse;width:100%;min-height:var(--mat-paginator-container-size)}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:84px}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px;fill:var(--mat-paginator-enabled-icon-color)}.mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon{fill:var(--mat-paginator-disabled-icon-color)}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}.cdk-high-contrast-active .mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon,.cdk-high-contrast-active .mat-mdc-paginator-icon{fill:currentColor;fill:CanvasText}.cdk-high-contrast-active .mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}"],encapsulation:2,changeDetection:0});let a=n;return a})(),ra=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=N({type:n}),n.\u0275inj=V({providers:[ti],imports:[Ze,yt,ht]});let a=n;return a})();export{Z as a,sa as b,ra as c};
