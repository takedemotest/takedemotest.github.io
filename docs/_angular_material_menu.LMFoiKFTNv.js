import { a as m, b as Z } from "@nf-internal/chunk-2NFLSA4Y";
import { TemplatePortal as me, DomPortalOutlet as Le } from "@angular/cdk/portal";
import * as i from "@angular/core";
import { InjectionToken as x, inject as l, ElementRef as U, DOCUMENT as X, ChangeDetectorRef as k, booleanAttribute as v, TemplateRef as ue, ApplicationRef as Be, Injector as P, ViewContainerRef as de, QueryList as He, signal as Ye, EventEmitter as T, afterNextRender as Ve, NgZone as ze, Renderer2 as je } from "@angular/core";
import { Subject as R, merge as V, Subscription as z, of as le } from "rxjs";
import { FocusMonitor as pe, _IdGenerator as Ue, FocusKeyManager as Xe, isFakeTouchstartFromScreenReader as Ge, isFakeMousedownFromScreenReader as We } from "@angular/cdk/a11y";
import { UP_ARROW as Qe, DOWN_ARROW as Ze, RIGHT_ARROW as he, LEFT_ARROW as _e, ESCAPE as Ke, hasModifierKey as $e, ENTER as qe, SPACE as Je } from "@angular/cdk/keycodes";
import { startWith as H, switchMap as ce, takeUntil as et, take as tt, filter as nt, skipWhile as it } from "rxjs/operators";
import { _CdkPrivateStyleLoader as st } from "@angular/cdk/private";
import * as K from "@angular/core";
import "@angular/core";
var $ = (() => {
    class s {
        static \u0275fac = function (t) { return new (t || s); };
        static \u0275cmp = K.\u0275\u0275defineComponent({ type: s, selectors: [["structural-styles"]], decls: 0, vars: 0, template: function (t, n) { }, styles: [`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
  }
}
`], encapsulation: 2 });
    }
    return s;
})();
import { _getEventTarget as Ie, normalizePassiveListenerOptions as oe, Platform as Te } from "@angular/cdk/platform";
import * as f from "@angular/core";
import { InjectionToken as we, inject as I, ElementRef as Se, NgZone as Ce, Injector as Ee } from "@angular/core";
import { isFakeMousedownFromScreenReader as Re, isFakeTouchstartFromScreenReader as xe } from "@angular/cdk/a11y";
import { coerceElement as J } from "@angular/cdk/coercion";
import { _CdkPrivateStyleLoader as ke } from "@angular/cdk/private";
import { MediaMatcher as be } from "@angular/cdk/layout";
import { InjectionToken as ve, inject as A, ANIMATION_MODULE_TYPE as ye } from "@angular/core";
var Me = new ve("MATERIAL_ANIMATIONS"), q = null;
function De() { return A(Me, { optional: !0 })?.animationsDisabled || A(ye, { optional: !0 }) === "NoopAnimations" ? "di-disabled" : (q ??= A(be).matchMedia("(prefers-reduced-motion)").matches, q ? "reduced-motion" : "enabled"); }
function D() { return De() !== "enabled"; }
var u = (function (s) { return s[s.FADING_IN = 0] = "FADING_IN", s[s.VISIBLE = 1] = "VISIBLE", s[s.FADING_OUT = 2] = "FADING_OUT", s[s.HIDDEN = 3] = "HIDDEN", s; })(u || {}), F = class {
    _renderer;
    element;
    config;
    _animationForciblyDisabledThroughCss;
    state = u.HIDDEN;
    constructor(o, e, t, n = !1) { this._renderer = o, this.element = e, this.config = t, this._animationForciblyDisabledThroughCss = n; }
    fadeOut() { this._renderer.fadeOutRipple(this); }
}, ee = oe({ passive: !0, capture: !0 }), L = class {
    _events = new Map;
    addHandler(o, e, t, n) { let r = this._events.get(e); if (r) {
        let a = r.get(t);
        a ? a.add(n) : r.set(t, new Set([n]));
    }
    else
        this._events.set(e, new Map([[t, new Set([n])]])), o.runOutsideAngular(() => { document.addEventListener(e, this._delegateEventHandler, ee); }); }
    removeHandler(o, e, t) { let n = this._events.get(o); if (!n)
        return; let r = n.get(e); r && (r.delete(t), r.size === 0 && n.delete(e), n.size === 0 && (this._events.delete(o), document.removeEventListener(o, this._delegateEventHandler, ee))); }
    _delegateEventHandler = o => { let e = Ie(o); e && this._events.get(o.type)?.forEach((t, n) => { (n === e || n.contains(e)) && t.forEach(r => r.handleEvent(o)); }); };
}, te = { enterDuration: 225, exitDuration: 150 }, Pe = 800, ne = oe({ passive: !0, capture: !0 }), ie = ["mousedown", "touchstart"], se = ["mouseup", "mouseleave", "touchend", "touchcancel"], Ne = (() => {
    class s {
        static \u0275fac = function (t) { return new (t || s); };
        static \u0275cmp = f.\u0275\u0275defineComponent({ type: s, selectors: [["ng-component"]], hostAttrs: ["mat-ripple-style-loader", ""], decls: 0, vars: 0, template: function (t, n) { }, styles: [`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`], encapsulation: 2 });
    }
    return s;
})(), B = class s {
    _target;
    _ngZone;
    _platform;
    _containerElement;
    _triggerElement = null;
    _isPointerDown = !1;
    _activeRipples = new Map;
    _mostRecentTransientRipple = null;
    _lastTouchStartEvent;
    _pointerUpEventsRegistered = !1;
    _containerRect = null;
    static _eventManager = new L;
    constructor(o, e, t, n, r) { this._target = o, this._ngZone = e, this._platform = n, n.isBrowser && (this._containerElement = J(t)), r && r.get(ke).load(Ne); }
    fadeInRipple(o, e, t = {}) { let n = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect(), r = m(m({}, te), t.animation); t.centered && (o = n.left + n.width / 2, e = n.top + n.height / 2); let a = t.radius || Oe(o, e, n), d = o - n.left, y = e - n.top, p = r.enterDuration, c = document.createElement("div"); c.classList.add("mat-ripple-element"), c.style.left = `${d - a}px`, c.style.top = `${y - a}px`, c.style.height = `${a * 2}px`, c.style.width = `${a * 2}px`, t.color != null && (c.style.backgroundColor = t.color), c.style.transitionDuration = `${p}ms`, this._containerElement.appendChild(c); let g = window.getComputedStyle(c), h = g.transitionProperty, M = g.transitionDuration, N = h === "none" || M === "0s" || M === "0s, 0s" || n.width === 0 && n.height === 0, _ = new F(this, c, t, N); c.style.transform = "scale3d(1, 1, 1)", _.state = u.FADING_IN, t.persistent || (this._mostRecentTransientRipple = _); let w = null; return !N && (p || r.exitDuration) && this._ngZone.runOutsideAngular(() => { let W = () => { w && (w.fallbackTimer = null), clearTimeout(Q), this._finishRippleTransition(_); }, O = () => this._destroyRipple(_), Q = setTimeout(O, p + 100); c.addEventListener("transitionend", W), c.addEventListener("transitioncancel", O), w = { onTransitionEnd: W, onTransitionCancel: O, fallbackTimer: Q }; }), this._activeRipples.set(_, w), (N || !p) && this._finishRippleTransition(_), _; }
    fadeOutRipple(o) { if (o.state === u.FADING_OUT || o.state === u.HIDDEN)
        return; let e = o.element, t = m(m({}, te), o.config.animation); e.style.transitionDuration = `${t.exitDuration}ms`, e.style.opacity = "0", o.state = u.FADING_OUT, (o._animationForciblyDisabledThroughCss || !t.exitDuration) && this._finishRippleTransition(o); }
    fadeOutAll() { this._getActiveRipples().forEach(o => o.fadeOut()); }
    fadeOutAllNonPersistent() { this._getActiveRipples().forEach(o => { o.config.persistent || o.fadeOut(); }); }
    setupTriggerEvents(o) { let e = J(o); !this._platform.isBrowser || !e || e === this._triggerElement || (this._removeTriggerEvents(), this._triggerElement = e, ie.forEach(t => { s._eventManager.addHandler(this._ngZone, t, e, this); })); }
    handleEvent(o) { o.type === "mousedown" ? this._onMousedown(o) : o.type === "touchstart" ? this._onTouchStart(o) : this._onPointerUp(), this._pointerUpEventsRegistered || (this._ngZone.runOutsideAngular(() => { se.forEach(e => { this._triggerElement.addEventListener(e, this, ne); }); }), this._pointerUpEventsRegistered = !0); }
    _finishRippleTransition(o) { o.state === u.FADING_IN ? this._startFadeOutTransition(o) : o.state === u.FADING_OUT && this._destroyRipple(o); }
    _startFadeOutTransition(o) { let e = o === this._mostRecentTransientRipple, { persistent: t } = o.config; o.state = u.VISIBLE, !t && (!e || !this._isPointerDown) && o.fadeOut(); }
    _destroyRipple(o) { let e = this._activeRipples.get(o) ?? null; this._activeRipples.delete(o), this._activeRipples.size || (this._containerRect = null), o === this._mostRecentTransientRipple && (this._mostRecentTransientRipple = null), o.state = u.HIDDEN, e !== null && (o.element.removeEventListener("transitionend", e.onTransitionEnd), o.element.removeEventListener("transitioncancel", e.onTransitionCancel), e.fallbackTimer !== null && clearTimeout(e.fallbackTimer)), o.element.remove(); }
    _onMousedown(o) { let e = Re(o), t = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + Pe; !this._target.rippleDisabled && !e && !t && (this._isPointerDown = !0, this.fadeInRipple(o.clientX, o.clientY, this._target.rippleConfig)); }
    _onTouchStart(o) { if (!this._target.rippleDisabled && !xe(o)) {
        this._lastTouchStartEvent = Date.now(), this._isPointerDown = !0;
        let e = o.changedTouches;
        if (e)
            for (let t = 0; t < e.length; t++)
                this.fadeInRipple(e[t].clientX, e[t].clientY, this._target.rippleConfig);
    } }
    _onPointerUp() { this._isPointerDown && (this._isPointerDown = !1, this._getActiveRipples().forEach(o => { let e = o.state === u.VISIBLE || o.config.terminateOnPointerUp && o.state === u.FADING_IN; !o.config.persistent && e && o.fadeOut(); })); }
    _getActiveRipples() { return Array.from(this._activeRipples.keys()); }
    _removeTriggerEvents() { let o = this._triggerElement; o && (ie.forEach(e => s._eventManager.removeHandler(e, o, this)), this._pointerUpEventsRegistered && (se.forEach(e => o.removeEventListener(e, this, ne)), this._pointerUpEventsRegistered = !1)); }
};
function Oe(s, o, e) { let t = Math.max(Math.abs(s - e.left), Math.abs(s - e.right)), n = Math.max(Math.abs(o - e.top), Math.abs(o - e.bottom)); return Math.sqrt(t * t + n * n); }
var Ae = new we("mat-ripple-global-options"), re = (() => { class s {
    _elementRef = I(Se);
    _animationsDisabled = D();
    color;
    unbounded = !1;
    centered = !1;
    radius = 0;
    animation;
    get disabled() { return this._disabled; }
    set disabled(e) { e && this.fadeOutAllNonPersistent(), this._disabled = e, this._setupTriggerEventsIfEnabled(); }
    _disabled = !1;
    get trigger() { return this._trigger || this._elementRef.nativeElement; }
    set trigger(e) { this._trigger = e, this._setupTriggerEventsIfEnabled(); }
    _trigger;
    _rippleRenderer;
    _globalOptions;
    _isInitialized = !1;
    constructor() { let e = I(Ce), t = I(Te), n = I(Ae, { optional: !0 }), r = I(Ee); this._globalOptions = n || {}, this._rippleRenderer = new B(this, e, this._elementRef, t, r); }
    ngOnInit() { this._isInitialized = !0, this._setupTriggerEventsIfEnabled(); }
    ngOnDestroy() { this._rippleRenderer._removeTriggerEvents(); }
    fadeOutAll() { this._rippleRenderer.fadeOutAll(); }
    fadeOutAllNonPersistent() { this._rippleRenderer.fadeOutAllNonPersistent(); }
    get rippleConfig() { return { centered: this.centered, radius: this.radius, color: this.color, animation: m(m(m({}, this._globalOptions.animation), this._animationsDisabled ? { enterDuration: 0, exitDuration: 0 } : {}), this.animation), terminateOnPointerUp: this._globalOptions.terminateOnPointerUp }; }
    get rippleDisabled() { return this.disabled || !!this._globalOptions.disabled; }
    _setupTriggerEventsIfEnabled() { !this.disabled && this._isInitialized && this._rippleRenderer.setupTriggerEvents(this.trigger); }
    launch(e, t = 0, n) { return typeof e == "number" ? this._rippleRenderer.fadeInRipple(e, t, m(m({}, this.rippleConfig), n)) : this._rippleRenderer.fadeInRipple(0, 0, m(m({}, this.rippleConfig), e)); }
    static \u0275fac = function (t) { return new (t || s); };
    static \u0275dir = f.\u0275\u0275defineDirective({ type: s, selectors: [["", "mat-ripple", ""], ["", "matRipple", ""]], hostAttrs: [1, "mat-ripple"], hostVars: 2, hostBindings: function (t, n) { t & 2 && f.\u0275\u0275classProp("mat-ripple-unbounded", n.unbounded); }, inputs: { color: [0, "matRippleColor", "color"], unbounded: [0, "matRippleUnbounded", "unbounded"], centered: [0, "matRippleCentered", "centered"], radius: [0, "matRippleRadius", "radius"], animation: [0, "matRippleAnimation", "animation"], disabled: [0, "matRippleDisabled", "disabled"], trigger: [0, "matRippleTrigger", "trigger"] }, exportAs: ["matRipple"] });
} return s; })();
import { Directionality as ot, BidiModule as rt } from "@angular/cdk/bidi";
import { createRepositionScrollStrategy as at, createOverlayRef as lt, OverlayConfig as ct, createFlexibleConnectedPositionStrategy as mt, ViewportRuler as ut, ScrollDispatcher as dt, OverlayModule as pt } from "@angular/cdk/overlay";
import { _getEventTarget as ht, _getShadowRoot as _t } from "@angular/cdk/platform";
import { CdkScrollableModule as gt } from "@angular/cdk/scrolling";
import { BidiModule as Fe } from "@angular/cdk/bidi";
import * as S from "@angular/core";
import "@angular/core";
var ae = (() => { class s {
    static \u0275fac = function (t) { return new (t || s); };
    static \u0275mod = S.\u0275\u0275defineNgModule({ type: s });
    static \u0275inj = S.\u0275\u0275defineInjector({ imports: [Fe] });
} return s; })();
import "@angular/cdk/coercion";
import "@angular/cdk/layout";
var ft = [[["mat-icon"], ["", "matMenuItemIcon", ""]], "*"], bt = ["mat-icon, [matMenuItemIcon]", "*"];
function vt(s, o) { s & 1 && (i.\u0275\u0275namespaceSVG(), i.\u0275\u0275elementStart(0, "svg", 2), i.\u0275\u0275element(1, "polygon", 3), i.\u0275\u0275elementEnd()); }
var yt = ["*"];
function Mt(s, o) { if (s & 1) {
    let e = i.\u0275\u0275getCurrentView();
    i.\u0275\u0275domElementStart(0, "div", 0), i.\u0275\u0275domListener("click", function () { i.\u0275\u0275restoreView(e); let n = i.\u0275\u0275nextContext(); return i.\u0275\u0275resetView(n.closed.emit("click")); })("animationstart", function (n) { i.\u0275\u0275restoreView(e); let r = i.\u0275\u0275nextContext(); return i.\u0275\u0275resetView(r._onAnimationStart(n.animationName)); })("animationend", function (n) { i.\u0275\u0275restoreView(e); let r = i.\u0275\u0275nextContext(); return i.\u0275\u0275resetView(r._onAnimationDone(n.animationName)); })("animationcancel", function (n) { i.\u0275\u0275restoreView(e); let r = i.\u0275\u0275nextContext(); return i.\u0275\u0275resetView(r._onAnimationDone(n.animationName)); }), i.\u0275\u0275domElementStart(1, "div", 1), i.\u0275\u0275projection(2), i.\u0275\u0275domElementEnd()();
} if (s & 2) {
    let e = i.\u0275\u0275nextContext();
    i.\u0275\u0275classMap(e._classList), i.\u0275\u0275classProp("mat-menu-panel-animations-disabled", e._animationsDisabled)("mat-menu-panel-exit-animation", e._panelAnimationState === "void")("mat-menu-panel-animating", e._isAnimating()), i.\u0275\u0275domProperty("id", e.panelId), i.\u0275\u0275attribute("aria-label", e.ariaLabel || null)("aria-labelledby", e.ariaLabelledby || null)("aria-describedby", e.ariaDescribedby || null);
} }
var G = new x("MAT_MENU_PANEL"), j = (() => { class s {
    _elementRef = l(U);
    _document = l(X);
    _focusMonitor = l(pe);
    _parentMenu = l(G, { optional: !0 });
    _changeDetectorRef = l(k);
    role = "menuitem";
    disabled = !1;
    disableRipple = !1;
    _hovered = new R;
    _focused = new R;
    _highlighted = !1;
    _triggersSubmenu = !1;
    constructor() { l(st).load($), this._parentMenu?.addItem?.(this); }
    focus(e, t) { this._focusMonitor && e ? this._focusMonitor.focusVia(this._getHostElement(), e, t) : this._getHostElement().focus(t), this._focused.next(this); }
    ngAfterViewInit() { this._focusMonitor && this._focusMonitor.monitor(this._elementRef, !1); }
    ngOnDestroy() { this._focusMonitor && this._focusMonitor.stopMonitoring(this._elementRef), this._parentMenu && this._parentMenu.removeItem && this._parentMenu.removeItem(this), this._hovered.complete(), this._focused.complete(); }
    _getTabIndex() { return this.disabled ? "-1" : "0"; }
    _getHostElement() { return this._elementRef.nativeElement; }
    _checkDisabled(e) { this.disabled && (e.preventDefault(), e.stopPropagation()); }
    _handleMouseEnter() { this._hovered.next(this); }
    getLabel() { let e = this._elementRef.nativeElement.cloneNode(!0), t = e.querySelectorAll("mat-icon, .material-icons"); for (let n = 0; n < t.length; n++)
        t[n].remove(); return e.textContent?.trim() || ""; }
    _setHighlighted(e) { this._highlighted = e, this._changeDetectorRef.markForCheck(); }
    _setTriggersSubmenu(e) { this._triggersSubmenu = e, this._changeDetectorRef.markForCheck(); }
    _hasFocus() { return this._document && this._document.activeElement === this._getHostElement(); }
    static \u0275fac = function (t) { return new (t || s); };
    static \u0275cmp = i.\u0275\u0275defineComponent({ type: s, selectors: [["", "mat-menu-item", ""]], hostAttrs: [1, "mat-mdc-menu-item", "mat-focus-indicator"], hostVars: 8, hostBindings: function (t, n) { t & 1 && i.\u0275\u0275listener("click", function (a) { return n._checkDisabled(a); })("mouseenter", function () { return n._handleMouseEnter(); }), t & 2 && (i.\u0275\u0275attribute("role", n.role)("tabindex", n._getTabIndex())("aria-disabled", n.disabled)("disabled", n.disabled || null), i.\u0275\u0275classProp("mat-mdc-menu-item-highlighted", n._highlighted)("mat-mdc-menu-item-submenu-trigger", n._triggersSubmenu)); }, inputs: { role: "role", disabled: [2, "disabled", "disabled", v], disableRipple: [2, "disableRipple", "disableRipple", v] }, exportAs: ["matMenuItem"], ngContentSelectors: bt, decls: 5, vars: 3, consts: [[1, "mat-mdc-menu-item-text"], ["matRipple", "", 1, "mat-mdc-menu-ripple", 3, "matRippleDisabled", "matRippleTrigger"], ["viewBox", "0 0 5 10", "focusable", "false", "aria-hidden", "true", 1, "mat-mdc-menu-submenu-icon"], ["points", "0,0 5,5 0,10"]], template: function (t, n) { t & 1 && (i.\u0275\u0275projectionDef(ft), i.\u0275\u0275projection(0), i.\u0275\u0275elementStart(1, "span", 0), i.\u0275\u0275projection(2, 1), i.\u0275\u0275elementEnd(), i.\u0275\u0275element(3, "div", 1), i.\u0275\u0275conditionalCreate(4, vt, 2, 0, ":svg:svg", 2)), t & 2 && (i.\u0275\u0275advance(3), i.\u0275\u0275property("matRippleDisabled", n.disableRipple || n.disabled)("matRippleTrigger", n._getHostElement()), i.\u0275\u0275advance(), i.\u0275\u0275conditional(n._triggersSubmenu ? 4 : -1)); }, dependencies: [re], encapsulation: 2 });
} return s; })();
var ge = new x("MatMenuContent"), In = (() => { class s {
    _template = l(ue);
    _appRef = l(Be);
    _injector = l(P);
    _viewContainerRef = l(de);
    _document = l(X);
    _changeDetectorRef = l(k);
    _portal;
    _outlet;
    _attached = new R;
    constructor() { }
    attach(e = {}) { this._portal || (this._portal = new me(this._template, this._viewContainerRef)), this.detach(), this._outlet || (this._outlet = new Le(this._document.createElement("div"), this._appRef, this._injector)); let t = this._template.elementRef.nativeElement; t.parentNode.insertBefore(this._outlet.outletElement, t), this._changeDetectorRef.markForCheck(), this._portal.attach(this._outlet, e), this._attached.next(); }
    detach() { this._portal?.isAttached && this._portal.detach(); }
    ngOnDestroy() { this.detach(), this._outlet?.dispose(); }
    static \u0275fac = function (t) { return new (t || s); };
    static \u0275dir = i.\u0275\u0275defineDirective({ type: s, selectors: [["ng-template", "matMenuContent", ""]], features: [i.\u0275\u0275ProvidersFeature([{ provide: ge, useExisting: s }])] });
} return s; })(), Dt = new x("mat-menu-default-options", { providedIn: "root", factory: () => ({ overlapTrigger: !1, xPosition: "after", yPosition: "below", backdropClass: "cdk-overlay-transparent-backdrop" }) }), Y = "_mat-menu-enter", C = "_mat-menu-exit", E = (() => {
    class s {
        _elementRef = l(U);
        _changeDetectorRef = l(k);
        _injector = l(P);
        _keyManager;
        _xPosition;
        _yPosition;
        _firstItemFocusRef;
        _exitFallbackTimeout;
        _animationsDisabled = D();
        _allItems;
        _directDescendantItems = new He;
        _classList = {};
        _panelAnimationState = "void";
        _animationDone = new R;
        _isAnimating = Ye(!1);
        parentMenu;
        direction;
        overlayPanelClass;
        backdropClass;
        ariaLabel;
        ariaLabelledby;
        ariaDescribedby;
        get xPosition() { return this._xPosition; }
        set xPosition(e) { this._xPosition = e, this.setPositionClasses(); }
        get yPosition() { return this._yPosition; }
        set yPosition(e) { this._yPosition = e, this.setPositionClasses(); }
        templateRef;
        items;
        lazyContent;
        overlapTrigger = !1;
        hasBackdrop;
        set panelClass(e) { let t = this._previousPanelClass, n = m({}, this._classList); t && t.length && t.split(" ").forEach(r => { n[r] = !1; }), this._previousPanelClass = e, e && e.length && (e.split(" ").forEach(r => { n[r] = !0; }), this._elementRef.nativeElement.className = ""), this._classList = n; }
        _previousPanelClass;
        get classList() { return this.panelClass; }
        set classList(e) { this.panelClass = e; }
        closed = new T;
        close = this.closed;
        panelId = l(Ue).getId("mat-menu-panel-");
        constructor() { let e = l(Dt); this.overlayPanelClass = e.overlayPanelClass || "", this._xPosition = e.xPosition, this._yPosition = e.yPosition, this.backdropClass = e.backdropClass, this.overlapTrigger = e.overlapTrigger, this.hasBackdrop = e.hasBackdrop; }
        ngOnInit() { this.setPositionClasses(); }
        ngAfterContentInit() { this._updateDirectDescendants(), this._keyManager = new Xe(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(), this._keyManager.tabOut.subscribe(() => this.closed.emit("tab")), this._directDescendantItems.changes.pipe(H(this._directDescendantItems), ce(e => V(...e.map(t => t._focused)))).subscribe(e => this._keyManager.updateActiveItem(e)), this._directDescendantItems.changes.subscribe(e => { let t = this._keyManager; if (this._panelAnimationState === "enter" && t.activeItem?._hasFocus()) {
            let n = e.toArray(), r = Math.max(0, Math.min(n.length - 1, t.activeItemIndex || 0));
            n[r] && !n[r].disabled ? t.setActiveItem(r) : t.setNextItemActive();
        } }); }
        ngOnDestroy() { this._keyManager?.destroy(), this._directDescendantItems.destroy(), this.closed.complete(), this._firstItemFocusRef?.destroy(), clearTimeout(this._exitFallbackTimeout); }
        _hovered() { return this._directDescendantItems.changes.pipe(H(this._directDescendantItems), ce(t => V(...t.map(n => n._hovered)))); }
        addItem(e) { }
        removeItem(e) { }
        _handleKeydown(e) { let t = e.keyCode, n = this._keyManager; switch (t) {
            case Ke:
                $e(e) || (e.preventDefault(), this.closed.emit("keydown"));
                break;
            case _e:
                this.parentMenu && this.direction === "ltr" && this.closed.emit("keydown");
                break;
            case he:
                this.parentMenu && this.direction === "rtl" && this.closed.emit("keydown");
                break;
            default:
                (t === Qe || t === Ze) && n.setFocusOrigin("keyboard"), n.onKeydown(e);
                return;
        } }
        focusFirstItem(e = "program") { this._firstItemFocusRef?.destroy(), this._firstItemFocusRef = Ve(() => { let t = this._resolvePanel(); if (!t || !t.contains(document.activeElement)) {
            let n = this._keyManager;
            n.setFocusOrigin(e).setFirstItemActive(), !n.activeItem && t && t.focus();
        } }, { injector: this._injector }); }
        resetActiveItem() { this._keyManager.setActiveItem(-1); }
        setElevation(e) { }
        setPositionClasses(e = this.xPosition, t = this.yPosition) { this._classList = Z(m({}, this._classList), { "mat-menu-before": e === "before", "mat-menu-after": e === "after", "mat-menu-above": t === "above", "mat-menu-below": t === "below" }), this._changeDetectorRef.markForCheck(); }
        _onAnimationDone(e) { let t = e === C; (t || e === Y) && (t && (clearTimeout(this._exitFallbackTimeout), this._exitFallbackTimeout = void 0), this._animationDone.next(t ? "void" : "enter"), this._isAnimating.set(!1)); }
        _onAnimationStart(e) { (e === Y || e === C) && this._isAnimating.set(!0); }
        _setIsOpen(e) { if (this._panelAnimationState = e ? "enter" : "void", e) {
            if (this._keyManager.activeItemIndex === 0) {
                let t = this._resolvePanel();
                t && (t.scrollTop = 0);
            }
        }
        else
            this._animationsDisabled || (this._exitFallbackTimeout = setTimeout(() => this._onAnimationDone(C), 200)); this._animationsDisabled && setTimeout(() => { this._onAnimationDone(e ? Y : C); }), this._changeDetectorRef.markForCheck(); }
        _updateDirectDescendants() { this._allItems.changes.pipe(H(this._allItems)).subscribe(e => { this._directDescendantItems.reset(e.filter(t => t._parentMenu === this)), this._directDescendantItems.notifyOnChanges(); }); }
        _resolvePanel() { let e = null; return this._directDescendantItems.length && (e = this._directDescendantItems.first._getHostElement().closest('[role="menu"]')), e; }
        static \u0275fac = function (t) { return new (t || s); };
        static \u0275cmp = i.\u0275\u0275defineComponent({ type: s, selectors: [["mat-menu"]], contentQueries: function (t, n, r) { if (t & 1 && i.\u0275\u0275contentQuery(r, ge, 5)(r, j, 5)(r, j, 4), t & 2) {
                let a;
                i.\u0275\u0275queryRefresh(a = i.\u0275\u0275loadQuery()) && (n.lazyContent = a.first), i.\u0275\u0275queryRefresh(a = i.\u0275\u0275loadQuery()) && (n._allItems = a), i.\u0275\u0275queryRefresh(a = i.\u0275\u0275loadQuery()) && (n.items = a);
            } }, viewQuery: function (t, n) { if (t & 1 && i.\u0275\u0275viewQuery(ue, 5), t & 2) {
                let r;
                i.\u0275\u0275queryRefresh(r = i.\u0275\u0275loadQuery()) && (n.templateRef = r.first);
            } }, hostVars: 3, hostBindings: function (t, n) { t & 2 && i.\u0275\u0275attribute("aria-label", null)("aria-labelledby", null)("aria-describedby", null); }, inputs: { backdropClass: "backdropClass", ariaLabel: [0, "aria-label", "ariaLabel"], ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"], ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"], xPosition: "xPosition", yPosition: "yPosition", overlapTrigger: [2, "overlapTrigger", "overlapTrigger", v], hasBackdrop: [2, "hasBackdrop", "hasBackdrop", e => e == null ? null : v(e)], panelClass: [0, "class", "panelClass"], classList: "classList" }, outputs: { closed: "closed", close: "close" }, exportAs: ["matMenu"], features: [i.\u0275\u0275ProvidersFeature([{ provide: G, useExisting: s }])], ngContentSelectors: yt, decls: 1, vars: 0, consts: [["tabindex", "-1", "role", "menu", 1, "mat-mdc-menu-panel", 3, "click", "animationstart", "animationend", "animationcancel", "id"], [1, "mat-mdc-menu-content"]], template: function (t, n) { t & 1 && (i.\u0275\u0275projectionDef(), i.\u0275\u0275domTemplate(0, Mt, 3, 12, "ng-template")); }, styles: [`mat-menu {
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
  font-family: var(--%NS%mat-menu-item-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-menu-item-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-menu-item-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-menu-item-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-menu-item-label-text-weight, var(--%NS%mat-sys-label-large-weight));
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
  border-radius: var(--%NS%mat-menu-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-menu-container-color, var(--%NS%mat-sys-surface-container));
  box-shadow: var(--%NS%mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
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
  border-top-color: var(--%NS%mat-menu-divider-color, var(--%NS%mat-sys-surface-variant));
  margin-bottom: var(--%NS%mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--%NS%mat-menu-divider-top-spacing, 8px);
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
  padding-left: var(--%NS%mat-menu-item-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-trailing-spacing, 12px);
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
  padding-left: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--%NS%mat-menu-item-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--%NS%mat-menu-item-icon-color, var(--%NS%mat-sys-on-surface-variant));
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
  margin-right: var(--%NS%mat-menu-item-spacing, 12px);
  height: var(--%NS%mat-menu-item-icon-size, 24px);
  width: var(--%NS%mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--%NS%mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--%NS%mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--%NS%mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--%NS%mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--%NS%mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--%NS%mat-menu-item-spacing, 12px);
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
`], encapsulation: 2 });
    }
    return s;
})(), It = new x("mat-menu-scroll-strategy", { providedIn: "root", factory: () => { let s = l(P); return () => at(s); } }), Tn = 8, b = new WeakMap, fe = (() => { class s {
    _canHaveBackdrop;
    _element = l(U);
    _viewContainerRef = l(de);
    _menuItemInstance = l(j, { optional: !0, self: !0 });
    _dir = l(ot, { optional: !0 });
    _focusMonitor = l(pe);
    _ngZone = l(ze);
    _injector = l(P);
    _scrollStrategy = l(It);
    _changeDetectorRef = l(k);
    _animationsDisabled = D();
    _portal;
    _overlayRef = null;
    _menuOpen = !1;
    _closingActionsSubscription = z.EMPTY;
    _menuCloseSubscription = z.EMPTY;
    _pendingRemoval;
    _parentMaterialMenu;
    _parentInnerPadding;
    _openedBy = void 0;
    get _menu() { return this._menuInternal; }
    set _menu(e) { e !== this._menuInternal && (this._menuInternal = e, this._menuCloseSubscription.unsubscribe(), e && (this._parentMaterialMenu, this._menuCloseSubscription = e.close.subscribe(t => { this._destroyMenu(t), (t === "click" || t === "tab") && this._parentMaterialMenu && this._parentMaterialMenu.closed.emit(t); })), this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu())); }
    _menuInternal = null;
    constructor(e) { this._canHaveBackdrop = e; let t = l(G, { optional: !0 }); this._parentMaterialMenu = t instanceof E ? t : void 0; }
    ngOnDestroy() { this._menu && this._ownsMenu(this._menu) && b.delete(this._menu), this._pendingRemoval?.unsubscribe(), this._menuCloseSubscription.unsubscribe(), this._closingActionsSubscription.unsubscribe(), this._overlayRef && (this._overlayRef.dispose(), this._overlayRef = null); }
    get menuOpen() { return this._menuOpen; }
    get dir() { return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr"; }
    _triggersSubmenu() { return !!(this._menuItemInstance && this._parentMaterialMenu && this._menu); }
    _closeMenu() { this._menu?.close.emit(); }
    _openMenu(e) { if (this._triggerIsAriaDisabled())
        return; let t = this._menu; if (this._menuOpen || !t)
        return; this._pendingRemoval?.unsubscribe(); let n = b.get(t); b.set(t, this), n && n !== this && n._closeMenu(); let r = this._createOverlay(t), a = r.getConfig(), d = a.positionStrategy; this._setPosition(t, d), this._canHaveBackdrop ? a.hasBackdrop = t.hasBackdrop == null ? !this._triggersSubmenu() : t.hasBackdrop : a.hasBackdrop = t.hasBackdrop ?? !1, r.hasAttached() || (r.attach(this._getPortal(t)), t.lazyContent?.attach(this.menuData)), this._closingActionsSubscription = this._menuClosingActions().subscribe(() => this._closeMenu()), t.parentMenu = this._triggersSubmenu() ? this._parentMaterialMenu : void 0, t.direction = this.dir, e && t.focusFirstItem(this._openedBy || "program"), this._setIsMenuOpen(!0), t instanceof E && (t._setIsOpen(!0), t._directDescendantItems.changes.pipe(et(t.close)).subscribe(() => { d.withLockedPosition(!1).reapplyLastPosition(), d.withLockedPosition(!0); })); }
    focus(e, t) { this._focusMonitor && e ? this._focusMonitor.focusVia(this._element, e, t) : this._element.nativeElement.focus(t); }
    _destroyMenu(e) { let t = this._overlayRef, n = this._menu; !t || !this.menuOpen || (this._closingActionsSubscription.unsubscribe(), this._pendingRemoval?.unsubscribe(), n instanceof E && this._ownsMenu(n) ? (this._pendingRemoval = n._animationDone.pipe(tt(1)).subscribe(() => { t.detach(), b.has(n) || n.lazyContent?.detach(); }), n._setIsOpen(!1)) : (t.detach(), n?.lazyContent?.detach()), n && this._ownsMenu(n) && b.delete(n), this.restoreFocus && (e === "keydown" || !this._openedBy || !this._triggersSubmenu()) && this.focus(this._openedBy), this._openedBy = void 0, this._setIsMenuOpen(!1)); }
    _setIsMenuOpen(e) { e !== this._menuOpen && (this._menuOpen = e, this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit(), this._triggersSubmenu() && this._menuItemInstance._setHighlighted(e), this._changeDetectorRef.markForCheck()); }
    _createOverlay(e) { if (!this._overlayRef) {
        let t = this._getOverlayConfig(e);
        this._subscribeToPositions(e, t.positionStrategy), this._overlayRef = lt(this._injector, t), this._overlayRef.keydownEvents().subscribe(n => { this._menu instanceof E && this._menu._handleKeydown(n); });
    } return this._overlayRef; }
    _getOverlayConfig(e) { return new ct({ positionStrategy: mt(this._injector, this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"), backdropClass: e.backdropClass || "cdk-overlay-transparent-backdrop", panelClass: e.overlayPanelClass, scrollStrategy: this._scrollStrategy(), direction: this._dir || "ltr", disableAnimations: this._animationsDisabled }); }
    _subscribeToPositions(e, t) { e.setPositionClasses && t.positionChanges.subscribe(n => { this._ngZone.run(() => { let r = n.connectionPair.overlayX === "start" ? "after" : "before", a = n.connectionPair.overlayY === "top" ? "below" : "above"; e.setPositionClasses(r, a); }); }); }
    _setPosition(e, t) { let [n, r] = e.xPosition === "before" ? ["end", "start"] : ["start", "end"], [a, d] = e.yPosition === "above" ? ["bottom", "top"] : ["top", "bottom"], [y, p] = [a, d], [c, g] = [n, r], h = 0; if (this._triggersSubmenu()) {
        if (g = n = e.xPosition === "before" ? "start" : "end", r = c = n === "end" ? "start" : "end", this._parentMaterialMenu) {
            if (this._parentInnerPadding == null) {
                let M = this._parentMaterialMenu.items.first;
                this._parentInnerPadding = M ? M._getHostElement().offsetTop : 0;
            }
            h = a === "bottom" ? this._parentInnerPadding : -this._parentInnerPadding;
        }
    }
    else
        e.overlapTrigger || (y = a === "top" ? "bottom" : "top", p = d === "top" ? "bottom" : "top"); t.withPositions([{ originX: n, originY: y, overlayX: c, overlayY: a, offsetY: h }, { originX: r, originY: y, overlayX: g, overlayY: a, offsetY: h }, { originX: n, originY: p, overlayX: c, overlayY: d, offsetY: -h }, { originX: r, originY: p, overlayX: g, overlayY: d, offsetY: -h }]); }
    _menuClosingActions() { let e = this._getOutsideClickStream(this._overlayRef), t = this._overlayRef.detachments(), n = this._parentMaterialMenu ? this._parentMaterialMenu.closed : le(), r = this._parentMaterialMenu ? this._parentMaterialMenu._hovered().pipe(nt(a => this._menuOpen && a !== this._menuItemInstance)) : le(); return V(e, n, r, t); }
    _getPortal(e) { return (!this._portal || this._portal.templateRef !== e.templateRef) && (this._portal = new me(e.templateRef, this._viewContainerRef)), this._portal; }
    _ownsMenu(e) { return b.get(e) === this; }
    _triggerIsAriaDisabled() { return v(this._element.nativeElement.getAttribute("aria-disabled")); }
    static \u0275fac = function (t) { i.\u0275\u0275invalidFactory(); };
    static \u0275dir = i.\u0275\u0275defineDirective({ type: s });
} return s; })(), wn = (() => { class s extends fe {
    _cleanupTouchstart;
    _hoverSubscription = z.EMPTY;
    get _deprecatedMatMenuTriggerFor() { return this.menu; }
    set _deprecatedMatMenuTriggerFor(e) { this.menu = e; }
    get menu() { return this._menu; }
    set menu(e) { this._menu = e; }
    menuData;
    restoreFocus = !0;
    menuOpened = new T;
    onMenuOpen = this.menuOpened;
    menuClosed = new T;
    onMenuClose = this.menuClosed;
    constructor() { super(!0); let e = l(je); this._cleanupTouchstart = e.listen(this._element.nativeElement, "touchstart", t => { Ge(t) || (this._openedBy = "touch"); }, { passive: !0 }); }
    triggersSubmenu() { return super._triggersSubmenu(); }
    toggleMenu() { return this.menuOpen ? this.closeMenu() : this.openMenu(); }
    openMenu() { this._openMenu(!0); }
    closeMenu() { this._closeMenu(); }
    updatePosition() { this._overlayRef?.updatePosition(); }
    ngAfterContentInit() { this._handleHover(); }
    ngOnDestroy() { super.ngOnDestroy(), this._cleanupTouchstart(), this._hoverSubscription.unsubscribe(); }
    _getOverlayOrigin() { return this._element; }
    _getOutsideClickStream(e) { return e.backdropClick(); }
    _handleMousedown(e) { We(e) || (this._openedBy = e.button === 0 ? "mouse" : void 0, this.triggersSubmenu() && e.preventDefault()); }
    _handleKeydown(e) { let t = e.keyCode; (t === qe || t === Je) && (this._openedBy = "keyboard"), this.triggersSubmenu() && (t === he && this.dir === "ltr" || t === _e && this.dir === "rtl") && (this._openedBy = "keyboard", this.openMenu()); }
    _handleClick(e) { this.triggersSubmenu() ? (e.stopPropagation(), this.openMenu()) : this.toggleMenu(); }
    _handleHover() { this.triggersSubmenu() && this._parentMaterialMenu && (this._hoverSubscription = this._parentMaterialMenu._hovered().subscribe(e => { e === this._menuItemInstance && !e.disabled && this._parentMaterialMenu?._panelAnimationState !== "void" && (this._openedBy = "mouse", this._openMenu(!1)); })); }
    static \u0275fac = function (t) { return new (t || s); };
    static \u0275dir = i.\u0275\u0275defineDirective({ type: s, selectors: [["", "mat-menu-trigger-for", ""], ["", "matMenuTriggerFor", ""]], hostAttrs: [1, "mat-mdc-menu-trigger"], hostVars: 3, hostBindings: function (t, n) { t & 1 && i.\u0275\u0275listener("click", function (a) { return n._handleClick(a); })("mousedown", function (a) { return n._handleMousedown(a); })("keydown", function (a) { return n._handleKeydown(a); }), t & 2 && i.\u0275\u0275attribute("aria-haspopup", n.menu ? "menu" : null)("aria-expanded", n.menuOpen)("aria-controls", n.menuOpen ? n.menu == null ? null : n.menu.panelId : null); }, inputs: { _deprecatedMatMenuTriggerFor: [0, "mat-menu-trigger-for", "_deprecatedMatMenuTriggerFor"], menu: [0, "matMenuTriggerFor", "menu"], menuData: [0, "matMenuTriggerData", "menuData"], restoreFocus: [0, "matMenuTriggerRestoreFocus", "restoreFocus"] }, outputs: { menuOpened: "menuOpened", onMenuOpen: "onMenuOpen", menuClosed: "menuClosed", onMenuClose: "onMenuClose" }, exportAs: ["matMenuTrigger"], features: [i.\u0275\u0275InheritDefinitionFeature] });
} return s; })(), Sn = (() => { class s extends fe {
    _point = { x: 0, y: 0, initialX: 0, initialY: 0, initialScrollX: 0, initialScrollY: 0 };
    _triggerPressedControl = !1;
    _rootNode;
    _document = l(X);
    _viewportRuler = l(ut);
    _scrollDispatcher = l(dt);
    _scrollSubscription;
    get menu() { return this._menu; }
    set menu(e) { this._menu = e; }
    menuData;
    restoreFocus = !0;
    disabled = !1;
    menuOpened = new T;
    menuClosed = new T;
    constructor() { super(!1); }
    ngOnDestroy() { super.ngOnDestroy(), this._scrollSubscription?.unsubscribe(); }
    _handleContextMenuEvent(e) { this.disabled || (e.preventDefault(), this.menuOpen ? (this._initializePoint(e.clientX, e.clientY), this._updatePosition()) : this._openContextMenu(e)); }
    _destroyMenu(e) { super._destroyMenu(e), this._scrollSubscription?.unsubscribe(); }
    _getOverlayOrigin() { return this._point; }
    _getOutsideClickStream(e) { return e.outsidePointerEvents().pipe(it((t, n) => t.type === "contextmenu" ? this._isWithinMenuOrTrigger(ht(t)) : t.type === "auxclick" ? n === 0 ? !0 : (this._rootNode ??= _t(this._element.nativeElement) || this._document, this._isWithinMenuOrTrigger(this._rootNode.elementFromPoint(t.clientX, t.clientY))) : this._triggerPressedControl && n === 0 && t.ctrlKey)); }
    _isWithinMenuOrTrigger(e) { if (!e)
        return !1; let t = this._element.nativeElement; if (e === t || t.contains(e))
        return !0; let n = this._overlayRef?.hostElement; return n === e || !!n?.contains(e); }
    _openContextMenu(e) { e.button === 2 ? this._openedBy = "mouse" : this._openedBy = e.button === 0 ? "keyboard" : void 0, this._initializePoint(e.clientX, e.clientY), this._triggerPressedControl = e.ctrlKey, super._openMenu(!0), this._scrollSubscription?.unsubscribe(), this._scrollSubscription = this._scrollDispatcher.scrolled(0).subscribe(() => { let t = this._viewportRuler.getViewportScrollPosition(), n = this._point; n.y = n.initialY + (n.initialScrollY - t.top), n.x = n.initialX + (n.initialScrollX - t.left), this._updatePosition(); }); }
    _initializePoint(e, t) { let n = this._viewportRuler.getViewportScrollPosition(), r = this._point; r.x = r.initialX = e, r.y = r.initialY = t, r.initialScrollX = n.left, r.initialScrollY = n.top; }
    _updatePosition() { let e = this._overlayRef; e && (e.getConfig().positionStrategy.setOrigin(this._point), e.updatePosition()); }
    static \u0275fac = function (t) { return new (t || s); };
    static \u0275dir = i.\u0275\u0275defineDirective({ type: s, selectors: [["", "matContextMenuTriggerFor", ""]], hostAttrs: [1, "mat-context-menu-trigger"], hostVars: 3, hostBindings: function (t, n) { t & 1 && i.\u0275\u0275listener("contextmenu", function (a) { return n._handleContextMenuEvent(a); }), t & 2 && (i.\u0275\u0275attribute("aria-controls", n.menuOpen ? n.menu == null ? null : n.menu.panelId : null), i.\u0275\u0275classProp("mat-context-menu-trigger-disabled", n.disabled)); }, inputs: { menu: [0, "matContextMenuTriggerFor", "menu"], menuData: [0, "matContextMenuTriggerData", "menuData"], restoreFocus: [0, "matContextMenuTriggerRestoreFocus", "restoreFocus"], disabled: [2, "matContextMenuTriggerDisabled", "disabled", v] }, outputs: { menuOpened: "menuOpened", menuClosed: "menuClosed" }, exportAs: ["matContextMenuTrigger"], features: [i.\u0275\u0275InheritDefinitionFeature] });
} return s; })(), Cn = (() => { class s {
    static \u0275fac = function (t) { return new (t || s); };
    static \u0275mod = i.\u0275\u0275defineNgModule({ type: s });
    static \u0275inj = i.\u0275\u0275defineInjector({ imports: [ae, pt, rt, gt] });
} return s; })();
export { ge as MAT_MENU_CONTENT, Dt as MAT_MENU_DEFAULT_OPTIONS, G as MAT_MENU_PANEL, It as MAT_MENU_SCROLL_STRATEGY, Tn as MENU_PANEL_TOP_PADDING, Sn as MatContextMenuTrigger, E as MatMenu, In as MatMenuContent, j as MatMenuItem, Cn as MatMenuModule, wn as MatMenuTrigger };
