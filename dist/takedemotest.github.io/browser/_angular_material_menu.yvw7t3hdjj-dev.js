import { __spreadProps, __spreadValues } from "@nf-internal/chunk-VUJOFXKG";
// node_modules/@angular/material/fesm2022/menu.mjs
import { TemplatePortal, DomPortalOutlet } from "@angular/cdk/portal";
import * as i04 from "@angular/core";
import { InjectionToken as InjectionToken3, inject as inject3, ElementRef as ElementRef2, DOCUMENT, ChangeDetectorRef, booleanAttribute, Input as Input2, ViewEncapsulation as ViewEncapsulation3, ChangeDetectionStrategy as ChangeDetectionStrategy3, Component as Component3, TemplateRef, ApplicationRef, Injector as Injector2, ViewContainerRef, Directive as Directive2, QueryList, signal, EventEmitter, afterNextRender, Output, ContentChild, ContentChildren, ViewChild, NgZone as NgZone2, Renderer2, NgModule as NgModule2 } from "@angular/core";
import { Subject, merge, Subscription, of } from "rxjs";
import { FocusMonitor, _IdGenerator, FocusKeyManager, isFakeTouchstartFromScreenReader as isFakeTouchstartFromScreenReader2, isFakeMousedownFromScreenReader as isFakeMousedownFromScreenReader2 } from "@angular/cdk/a11y";
import { UP_ARROW, DOWN_ARROW, RIGHT_ARROW, LEFT_ARROW, ESCAPE, hasModifierKey, ENTER, SPACE } from "@angular/cdk/keycodes";
import { startWith, switchMap, takeUntil, take, filter, skipWhile } from "rxjs/operators";
import { _CdkPrivateStyleLoader as _CdkPrivateStyleLoader2 } from "@angular/cdk/private";
// node_modules/@angular/material/fesm2022/_structural-styles-chunk.mjs
import * as i0 from "@angular/core";
import { ChangeDetectionStrategy, ViewEncapsulation, Component } from "@angular/core";
var _StructuralStylesLoader = class __StructuralStylesLoader {
    static \u0275fac = function _StructuralStylesLoader_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || __StructuralStylesLoader)();
    };
    static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({
        type: __StructuralStylesLoader,
        selectors: [["structural-styles"]],
        decls: 0,
        vars: 0,
        template: function _StructuralStylesLoader_Template(rf, ctx) {
        },
        styles: ['.mat-focus-indicator {\n  position: relative;\n}\n.mat-focus-indicator::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: var(--%NS%mat-focus-indicator-display, none);\n  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);\n  border-style: var(--%NS%mat-focus-indicator-border-style, solid);\n  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);\n  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);\n}\n.mat-focus-indicator:focus-visible::before {\n  content: "";\n}\n\n@media (forced-colors: active) {\n  html {\n    --%NS%mat-focus-indicator-display: block;\n  }\n}\n'],
        encapsulation: 2
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(_StructuralStylesLoader, [{
            type: Component,
            args: [{
                    selector: "structural-styles",
                    encapsulation: ViewEncapsulation.None,
                    template: "",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ['.mat-focus-indicator {\n  position: relative;\n}\n.mat-focus-indicator::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: var(--mat-focus-indicator-display, none);\n  border-width: var(--mat-focus-indicator-border-width, 3px);\n  border-style: var(--mat-focus-indicator-border-style, solid);\n  border-color: var(--mat-focus-indicator-border-color, transparent);\n  border-radius: var(--mat-focus-indicator-border-radius, 4px);\n}\n.mat-focus-indicator:focus-visible::before {\n  content: "";\n}\n\n@media (forced-colors: active) {\n  html {\n    --mat-focus-indicator-display: block;\n  }\n}\n']
                }]
        }], null, null);
})();
// node_modules/@angular/material/fesm2022/_ripple-chunk.mjs
import { _getEventTarget, normalizePassiveListenerOptions, Platform } from "@angular/cdk/platform";
import * as i02 from "@angular/core";
import { ViewEncapsulation as ViewEncapsulation2, ChangeDetectionStrategy as ChangeDetectionStrategy2, Component as Component2, InjectionToken as InjectionToken2, inject as inject2, ElementRef, NgZone, Injector, Input, Directive } from "@angular/core";
import { isFakeMousedownFromScreenReader, isFakeTouchstartFromScreenReader } from "@angular/cdk/a11y";
import { coerceElement } from "@angular/cdk/coercion";
import { _CdkPrivateStyleLoader } from "@angular/cdk/private";
// node_modules/@angular/material/fesm2022/_animation-chunk.mjs
import { MediaMatcher } from "@angular/cdk/layout";
import { InjectionToken, inject, ANIMATION_MODULE_TYPE } from "@angular/core";
var MATERIAL_ANIMATIONS = new InjectionToken("MATERIAL_ANIMATIONS");
var reducedMotion = null;
function _getAnimationsState() {
    if (inject(MATERIAL_ANIMATIONS, {
        optional: true
    })?.animationsDisabled || inject(ANIMATION_MODULE_TYPE, {
        optional: true
    }) === "NoopAnimations") {
        return "di-disabled";
    }
    reducedMotion ??= inject(MediaMatcher).matchMedia("(prefers-reduced-motion)").matches;
    return reducedMotion ? "reduced-motion" : "enabled";
}
function _animationsDisabled() {
    return _getAnimationsState() !== "enabled";
}
// node_modules/@angular/material/fesm2022/_ripple-chunk.mjs
var RippleState;
(function (RippleState2) {
    RippleState2[RippleState2["FADING_IN"] = 0] = "FADING_IN";
    RippleState2[RippleState2["VISIBLE"] = 1] = "VISIBLE";
    RippleState2[RippleState2["FADING_OUT"] = 2] = "FADING_OUT";
    RippleState2[RippleState2["HIDDEN"] = 3] = "HIDDEN";
})(RippleState || (RippleState = {}));
var RippleRef = class {
    _renderer;
    element;
    config;
    _animationForciblyDisabledThroughCss;
    state = RippleState.HIDDEN;
    constructor(_renderer, element, config, _animationForciblyDisabledThroughCss = false) {
        this._renderer = _renderer;
        this.element = element;
        this.config = config;
        this._animationForciblyDisabledThroughCss = _animationForciblyDisabledThroughCss;
    }
    fadeOut() {
        this._renderer.fadeOutRipple(this);
    }
};
var passiveCapturingEventOptions$1 = normalizePassiveListenerOptions({
    passive: true,
    capture: true
});
var RippleEventManager = class {
    _events = /* @__PURE__ */ new Map();
    addHandler(ngZone, name, element, handler) {
        const handlersForEvent = this._events.get(name);
        if (handlersForEvent) {
            const handlersForElement = handlersForEvent.get(element);
            if (handlersForElement) {
                handlersForElement.add(handler);
            }
            else {
                handlersForEvent.set(element, /* @__PURE__ */ new Set([handler]));
            }
        }
        else {
            this._events.set(name, /* @__PURE__ */ new Map([[element, /* @__PURE__ */ new Set([handler])]]));
            ngZone.runOutsideAngular(() => {
                document.addEventListener(name, this._delegateEventHandler, passiveCapturingEventOptions$1);
            });
        }
    }
    removeHandler(name, element, handler) {
        const handlersForEvent = this._events.get(name);
        if (!handlersForEvent) {
            return;
        }
        const handlersForElement = handlersForEvent.get(element);
        if (!handlersForElement) {
            return;
        }
        handlersForElement.delete(handler);
        if (handlersForElement.size === 0) {
            handlersForEvent.delete(element);
        }
        if (handlersForEvent.size === 0) {
            this._events.delete(name);
            document.removeEventListener(name, this._delegateEventHandler, passiveCapturingEventOptions$1);
        }
    }
    _delegateEventHandler = (event) => {
        const target = _getEventTarget(event);
        if (target) {
            this._events.get(event.type)?.forEach((handlers, element) => {
                if (element === target || element.contains(target)) {
                    handlers.forEach((handler) => handler.handleEvent(event));
                }
            });
        }
    };
};
var defaultRippleAnimationConfig = {
    enterDuration: 225,
    exitDuration: 150
};
var ignoreMouseEventsTimeout = 800;
var passiveCapturingEventOptions = normalizePassiveListenerOptions({
    passive: true,
    capture: true
});
var pointerDownEvents = ["mousedown", "touchstart"];
var pointerUpEvents = ["mouseup", "mouseleave", "touchend", "touchcancel"];
var _MatRippleStylesLoader = class __MatRippleStylesLoader {
    static \u0275fac = function _MatRippleStylesLoader_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || __MatRippleStylesLoader)();
    };
    static \u0275cmp = /* @__PURE__ */ i02.\u0275\u0275defineComponent({
        type: __MatRippleStylesLoader,
        selectors: [["ng-component"]],
        hostAttrs: ["mat-ripple-style-loader", ""],
        decls: 0,
        vars: 0,
        template: function _MatRippleStylesLoader_Template(rf, ctx) {
        },
        styles: [".mat-ripple {\n  overflow: hidden;\n  position: relative;\n}\n.mat-ripple:not(:empty) {\n  transform: translateZ(0);\n}\n\n.mat-ripple.mat-ripple-unbounded {\n  overflow: visible;\n}\n\n.mat-ripple-element {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale3d(0, 0, 0);\n  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));\n}\n@media (forced-colors: active) {\n  .mat-ripple-element {\n    display: none;\n  }\n}\n.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {\n  display: none;\n}\n"],
        encapsulation: 2
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassMetadata(_MatRippleStylesLoader, [{
            type: Component2,
            args: [{
                    template: "",
                    changeDetection: ChangeDetectionStrategy2.OnPush,
                    encapsulation: ViewEncapsulation2.None,
                    host: {
                        "mat-ripple-style-loader": ""
                    },
                    styles: [".mat-ripple {\n  overflow: hidden;\n  position: relative;\n}\n.mat-ripple:not(:empty) {\n  transform: translateZ(0);\n}\n\n.mat-ripple.mat-ripple-unbounded {\n  overflow: visible;\n}\n\n.mat-ripple-element {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale3d(0, 0, 0);\n  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));\n}\n@media (forced-colors: active) {\n  .mat-ripple-element {\n    display: none;\n  }\n}\n.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {\n  display: none;\n}\n"]
                }]
        }], null, null);
})();
var RippleRenderer = class _RippleRenderer {
    _target;
    _ngZone;
    _platform;
    _containerElement;
    _triggerElement = null;
    _isPointerDown = false;
    _activeRipples = /* @__PURE__ */ new Map();
    _mostRecentTransientRipple = null;
    _lastTouchStartEvent;
    _pointerUpEventsRegistered = false;
    _containerRect = null;
    static _eventManager = new RippleEventManager();
    constructor(_target, _ngZone, elementOrElementRef, _platform, injector) {
        this._target = _target;
        this._ngZone = _ngZone;
        this._platform = _platform;
        if (_platform.isBrowser) {
            this._containerElement = coerceElement(elementOrElementRef);
        }
        if (injector) {
            injector.get(_CdkPrivateStyleLoader).load(_MatRippleStylesLoader);
        }
    }
    fadeInRipple(x, y, config = {}) {
        const containerRect = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect();
        const animationConfig = __spreadValues(__spreadValues({}, defaultRippleAnimationConfig), config.animation);
        if (config.centered) {
            x = containerRect.left + containerRect.width / 2;
            y = containerRect.top + containerRect.height / 2;
        }
        const radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
        const offsetX = x - containerRect.left;
        const offsetY = y - containerRect.top;
        const enterDuration = animationConfig.enterDuration;
        const ripple = document.createElement("div");
        ripple.classList.add("mat-ripple-element");
        ripple.style.left = `${offsetX - radius}px`;
        ripple.style.top = `${offsetY - radius}px`;
        ripple.style.height = `${radius * 2}px`;
        ripple.style.width = `${radius * 2}px`;
        if (config.color != null) {
            ripple.style.backgroundColor = config.color;
        }
        ripple.style.transitionDuration = `${enterDuration}ms`;
        this._containerElement.appendChild(ripple);
        const computedStyles = window.getComputedStyle(ripple);
        const userTransitionProperty = computedStyles.transitionProperty;
        const userTransitionDuration = computedStyles.transitionDuration;
        const animationForciblyDisabledThroughCss = userTransitionProperty === "none" || userTransitionDuration === "0s" || userTransitionDuration === "0s, 0s" || containerRect.width === 0 && containerRect.height === 0;
        const rippleRef = new RippleRef(this, ripple, config, animationForciblyDisabledThroughCss);
        ripple.style.transform = "scale3d(1, 1, 1)";
        rippleRef.state = RippleState.FADING_IN;
        if (!config.persistent) {
            this._mostRecentTransientRipple = rippleRef;
        }
        let eventListeners = null;
        if (!animationForciblyDisabledThroughCss && (enterDuration || animationConfig.exitDuration)) {
            this._ngZone.runOutsideAngular(() => {
                const onTransitionEnd = () => {
                    if (eventListeners) {
                        eventListeners.fallbackTimer = null;
                    }
                    clearTimeout(fallbackTimer);
                    this._finishRippleTransition(rippleRef);
                };
                const onTransitionCancel = () => this._destroyRipple(rippleRef);
                const fallbackTimer = setTimeout(onTransitionCancel, enterDuration + 100);
                ripple.addEventListener("transitionend", onTransitionEnd);
                ripple.addEventListener("transitioncancel", onTransitionCancel);
                eventListeners = {
                    onTransitionEnd,
                    onTransitionCancel,
                    fallbackTimer
                };
            });
        }
        this._activeRipples.set(rippleRef, eventListeners);
        if (animationForciblyDisabledThroughCss || !enterDuration) {
            this._finishRippleTransition(rippleRef);
        }
        return rippleRef;
    }
    fadeOutRipple(rippleRef) {
        if (rippleRef.state === RippleState.FADING_OUT || rippleRef.state === RippleState.HIDDEN) {
            return;
        }
        const rippleEl = rippleRef.element;
        const animationConfig = __spreadValues(__spreadValues({}, defaultRippleAnimationConfig), rippleRef.config.animation);
        rippleEl.style.transitionDuration = `${animationConfig.exitDuration}ms`;
        rippleEl.style.opacity = "0";
        rippleRef.state = RippleState.FADING_OUT;
        if (rippleRef._animationForciblyDisabledThroughCss || !animationConfig.exitDuration) {
            this._finishRippleTransition(rippleRef);
        }
    }
    fadeOutAll() {
        this._getActiveRipples().forEach((ripple) => ripple.fadeOut());
    }
    fadeOutAllNonPersistent() {
        this._getActiveRipples().forEach((ripple) => {
            if (!ripple.config.persistent) {
                ripple.fadeOut();
            }
        });
    }
    setupTriggerEvents(elementOrElementRef) {
        const element = coerceElement(elementOrElementRef);
        if (!this._platform.isBrowser || !element || element === this._triggerElement) {
            return;
        }
        this._removeTriggerEvents();
        this._triggerElement = element;
        pointerDownEvents.forEach((type) => {
            _RippleRenderer._eventManager.addHandler(this._ngZone, type, element, this);
        });
    }
    handleEvent(event) {
        if (event.type === "mousedown") {
            this._onMousedown(event);
        }
        else if (event.type === "touchstart") {
            this._onTouchStart(event);
        }
        else {
            this._onPointerUp();
        }
        if (!this._pointerUpEventsRegistered) {
            this._ngZone.runOutsideAngular(() => {
                pointerUpEvents.forEach((type) => {
                    this._triggerElement.addEventListener(type, this, passiveCapturingEventOptions);
                });
            });
            this._pointerUpEventsRegistered = true;
        }
    }
    _finishRippleTransition(rippleRef) {
        if (rippleRef.state === RippleState.FADING_IN) {
            this._startFadeOutTransition(rippleRef);
        }
        else if (rippleRef.state === RippleState.FADING_OUT) {
            this._destroyRipple(rippleRef);
        }
    }
    _startFadeOutTransition(rippleRef) {
        const isMostRecentTransientRipple = rippleRef === this._mostRecentTransientRipple;
        const { persistent } = rippleRef.config;
        rippleRef.state = RippleState.VISIBLE;
        if (!persistent && (!isMostRecentTransientRipple || !this._isPointerDown)) {
            rippleRef.fadeOut();
        }
    }
    _destroyRipple(rippleRef) {
        const eventListeners = this._activeRipples.get(rippleRef) ?? null;
        this._activeRipples.delete(rippleRef);
        if (!this._activeRipples.size) {
            this._containerRect = null;
        }
        if (rippleRef === this._mostRecentTransientRipple) {
            this._mostRecentTransientRipple = null;
        }
        rippleRef.state = RippleState.HIDDEN;
        if (eventListeners !== null) {
            rippleRef.element.removeEventListener("transitionend", eventListeners.onTransitionEnd);
            rippleRef.element.removeEventListener("transitioncancel", eventListeners.onTransitionCancel);
            if (eventListeners.fallbackTimer !== null) {
                clearTimeout(eventListeners.fallbackTimer);
            }
        }
        rippleRef.element.remove();
    }
    _onMousedown(event) {
        const isFakeMousedown = isFakeMousedownFromScreenReader(event);
        const isSyntheticEvent = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + ignoreMouseEventsTimeout;
        if (!this._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
            this._isPointerDown = true;
            this.fadeInRipple(event.clientX, event.clientY, this._target.rippleConfig);
        }
    }
    _onTouchStart(event) {
        if (!this._target.rippleDisabled && !isFakeTouchstartFromScreenReader(event)) {
            this._lastTouchStartEvent = Date.now();
            this._isPointerDown = true;
            const touches = event.changedTouches;
            if (touches) {
                for (let i = 0; i < touches.length; i++) {
                    this.fadeInRipple(touches[i].clientX, touches[i].clientY, this._target.rippleConfig);
                }
            }
        }
    }
    _onPointerUp() {
        if (!this._isPointerDown) {
            return;
        }
        this._isPointerDown = false;
        this._getActiveRipples().forEach((ripple) => {
            const isVisible = ripple.state === RippleState.VISIBLE || ripple.config.terminateOnPointerUp && ripple.state === RippleState.FADING_IN;
            if (!ripple.config.persistent && isVisible) {
                ripple.fadeOut();
            }
        });
    }
    _getActiveRipples() {
        return Array.from(this._activeRipples.keys());
    }
    _removeTriggerEvents() {
        const trigger = this._triggerElement;
        if (trigger) {
            pointerDownEvents.forEach((type) => _RippleRenderer._eventManager.removeHandler(type, trigger, this));
            if (this._pointerUpEventsRegistered) {
                pointerUpEvents.forEach((type) => trigger.removeEventListener(type, this, passiveCapturingEventOptions));
                this._pointerUpEventsRegistered = false;
            }
        }
    }
};
function distanceToFurthestCorner(x, y, rect) {
    const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
    const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
    return Math.sqrt(distX * distX + distY * distY);
}
var MAT_RIPPLE_GLOBAL_OPTIONS = new InjectionToken2("mat-ripple-global-options");
var MatRipple = class _MatRipple {
    _elementRef = inject2(ElementRef);
    _animationsDisabled = _animationsDisabled();
    color;
    unbounded = false;
    centered = false;
    radius = 0;
    animation;
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        if (value) {
            this.fadeOutAllNonPersistent();
        }
        this._disabled = value;
        this._setupTriggerEventsIfEnabled();
    }
    _disabled = false;
    get trigger() {
        return this._trigger || this._elementRef.nativeElement;
    }
    set trigger(trigger) {
        this._trigger = trigger;
        this._setupTriggerEventsIfEnabled();
    }
    _trigger;
    _rippleRenderer;
    _globalOptions;
    _isInitialized = false;
    constructor() {
        const ngZone = inject2(NgZone);
        const platform = inject2(Platform);
        const globalOptions = inject2(MAT_RIPPLE_GLOBAL_OPTIONS, {
            optional: true
        });
        const injector = inject2(Injector);
        this._globalOptions = globalOptions || {};
        this._rippleRenderer = new RippleRenderer(this, ngZone, this._elementRef, platform, injector);
    }
    ngOnInit() {
        this._isInitialized = true;
        this._setupTriggerEventsIfEnabled();
    }
    ngOnDestroy() {
        this._rippleRenderer._removeTriggerEvents();
    }
    fadeOutAll() {
        this._rippleRenderer.fadeOutAll();
    }
    fadeOutAllNonPersistent() {
        this._rippleRenderer.fadeOutAllNonPersistent();
    }
    get rippleConfig() {
        return {
            centered: this.centered,
            radius: this.radius,
            color: this.color,
            animation: __spreadValues(__spreadValues(__spreadValues({}, this._globalOptions.animation), this._animationsDisabled ? {
                enterDuration: 0,
                exitDuration: 0
            } : {}), this.animation),
            terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
        };
    }
    get rippleDisabled() {
        return this.disabled || !!this._globalOptions.disabled;
    }
    _setupTriggerEventsIfEnabled() {
        if (!this.disabled && this._isInitialized) {
            this._rippleRenderer.setupTriggerEvents(this.trigger);
        }
    }
    launch(configOrX, y = 0, config) {
        if (typeof configOrX === "number") {
            return this._rippleRenderer.fadeInRipple(configOrX, y, __spreadValues(__spreadValues({}, this.rippleConfig), config));
        }
        else {
            return this._rippleRenderer.fadeInRipple(0, 0, __spreadValues(__spreadValues({}, this.rippleConfig), configOrX));
        }
    }
    static \u0275fac = function MatRipple_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatRipple)();
    };
    static \u0275dir = /* @__PURE__ */ i02.\u0275\u0275defineDirective({
        type: _MatRipple,
        selectors: [["", "mat-ripple", ""], ["", "matRipple", ""]],
        hostAttrs: [1, "mat-ripple"],
        hostVars: 2,
        hostBindings: function MatRipple_HostBindings(rf, ctx) {
            if (rf & 2) {
                i02.\u0275\u0275classProp("mat-ripple-unbounded", ctx.unbounded);
            }
        },
        inputs: {
            color: [0, "matRippleColor", "color"],
            unbounded: [0, "matRippleUnbounded", "unbounded"],
            centered: [0, "matRippleCentered", "centered"],
            radius: [0, "matRippleRadius", "radius"],
            animation: [0, "matRippleAnimation", "animation"],
            disabled: [0, "matRippleDisabled", "disabled"],
            trigger: [0, "matRippleTrigger", "trigger"]
        },
        exportAs: ["matRipple"]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassMetadata(MatRipple, [{
            type: Directive,
            args: [{
                    selector: "[mat-ripple], [matRipple]",
                    exportAs: "matRipple",
                    host: {
                        "class": "mat-ripple",
                        "[class.mat-ripple-unbounded]": "unbounded"
                    }
                }]
        }], () => [], {
        color: [{
                type: Input,
                args: ["matRippleColor"]
            }],
        unbounded: [{
                type: Input,
                args: ["matRippleUnbounded"]
            }],
        centered: [{
                type: Input,
                args: ["matRippleCentered"]
            }],
        radius: [{
                type: Input,
                args: ["matRippleRadius"]
            }],
        animation: [{
                type: Input,
                args: ["matRippleAnimation"]
            }],
        disabled: [{
                type: Input,
                args: ["matRippleDisabled"]
            }],
        trigger: [{
                type: Input,
                args: ["matRippleTrigger"]
            }]
    });
})();
// node_modules/@angular/material/fesm2022/menu.mjs
import { Directionality, BidiModule as BidiModule2 } from "@angular/cdk/bidi";
import { createRepositionScrollStrategy, createOverlayRef, OverlayConfig, createFlexibleConnectedPositionStrategy, ViewportRuler, ScrollDispatcher, OverlayModule } from "@angular/cdk/overlay";
import { _getEventTarget as _getEventTarget2, _getShadowRoot } from "@angular/cdk/platform";
import { CdkScrollableModule } from "@angular/cdk/scrolling";
// node_modules/@angular/material/fesm2022/_ripple-module-chunk.mjs
import { BidiModule } from "@angular/cdk/bidi";
import * as i03 from "@angular/core";
import { NgModule } from "@angular/core";
var MatRippleModule = class _MatRippleModule {
    static \u0275fac = function MatRippleModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatRippleModule)();
    };
    static \u0275mod = /* @__PURE__ */ i03.\u0275\u0275defineNgModule({
        type: _MatRippleModule
    });
    static \u0275inj = /* @__PURE__ */ i03.\u0275\u0275defineInjector({
        imports: [BidiModule]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassMetadata(MatRippleModule, [{
            type: NgModule,
            args: [{
                    imports: [MatRipple],
                    exports: [MatRipple, BidiModule]
                }]
        }], null, null);
})();
// node_modules/@angular/material/fesm2022/menu.mjs
import "@angular/cdk/coercion";
import "@angular/cdk/layout";
var _c0 = [[["mat-icon"], ["", "matMenuItemIcon", ""]], "*"];
var _c1 = ["mat-icon, [matMenuItemIcon]", "*"];
function MatMenuItem_Conditional_4_Template(rf, ctx) {
    if (rf & 1) {
        i04.\u0275\u0275namespaceSVG();
        i04.\u0275\u0275elementStart(0, "svg", 2);
        i04.\u0275\u0275element(1, "polygon", 3);
        i04.\u0275\u0275elementEnd();
    }
}
var _c2 = ["*"];
function MatMenu_ng_template_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r1 = i04.\u0275\u0275getCurrentView();
        i04.\u0275\u0275domElementStart(0, "div", 0);
        i04.\u0275\u0275domListener("click", function MatMenu_ng_template_0_Template_div_click_0_listener() {
            i04.\u0275\u0275restoreView(_r1);
            const ctx_r1 = i04.\u0275\u0275nextContext();
            return i04.\u0275\u0275resetView(ctx_r1.closed.emit("click"));
        })("animationstart", function MatMenu_ng_template_0_Template_div_animationstart_0_listener($event) {
            i04.\u0275\u0275restoreView(_r1);
            const ctx_r1 = i04.\u0275\u0275nextContext();
            return i04.\u0275\u0275resetView(ctx_r1._onAnimationStart($event.animationName));
        })("animationend", function MatMenu_ng_template_0_Template_div_animationend_0_listener($event) {
            i04.\u0275\u0275restoreView(_r1);
            const ctx_r1 = i04.\u0275\u0275nextContext();
            return i04.\u0275\u0275resetView(ctx_r1._onAnimationDone($event.animationName));
        })("animationcancel", function MatMenu_ng_template_0_Template_div_animationcancel_0_listener($event) {
            i04.\u0275\u0275restoreView(_r1);
            const ctx_r1 = i04.\u0275\u0275nextContext();
            return i04.\u0275\u0275resetView(ctx_r1._onAnimationDone($event.animationName));
        });
        i04.\u0275\u0275domElementStart(1, "div", 1);
        i04.\u0275\u0275projection(2);
        i04.\u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
        const ctx_r1 = i04.\u0275\u0275nextContext();
        i04.\u0275\u0275classMap(ctx_r1._classList);
        i04.\u0275\u0275classProp("mat-menu-panel-animations-disabled", ctx_r1._animationsDisabled)("mat-menu-panel-exit-animation", ctx_r1._panelAnimationState === "void")("mat-menu-panel-animating", ctx_r1._isAnimating());
        i04.\u0275\u0275domProperty("id", ctx_r1.panelId);
        i04.\u0275\u0275attribute("aria-label", ctx_r1.ariaLabel || null)("aria-labelledby", ctx_r1.ariaLabelledby || null)("aria-describedby", ctx_r1.ariaDescribedby || null);
    }
}
var MAT_MENU_PANEL = new InjectionToken3("MAT_MENU_PANEL");
var MatMenuItem = class _MatMenuItem {
    _elementRef = inject3(ElementRef2);
    _document = inject3(DOCUMENT);
    _focusMonitor = inject3(FocusMonitor);
    _parentMenu = inject3(MAT_MENU_PANEL, {
        optional: true
    });
    _changeDetectorRef = inject3(ChangeDetectorRef);
    role = "menuitem";
    disabled = false;
    disableRipple = false;
    _hovered = new Subject();
    _focused = new Subject();
    _highlighted = false;
    _triggersSubmenu = false;
    constructor() {
        inject3(_CdkPrivateStyleLoader2).load(_StructuralStylesLoader);
        this._parentMenu?.addItem?.(this);
    }
    focus(origin, options) {
        if (this._focusMonitor && origin) {
            this._focusMonitor.focusVia(this._getHostElement(), origin, options);
        }
        else {
            this._getHostElement().focus(options);
        }
        this._focused.next(this);
    }
    ngAfterViewInit() {
        if (this._focusMonitor) {
            this._focusMonitor.monitor(this._elementRef, false);
        }
    }
    ngOnDestroy() {
        if (this._focusMonitor) {
            this._focusMonitor.stopMonitoring(this._elementRef);
        }
        if (this._parentMenu && this._parentMenu.removeItem) {
            this._parentMenu.removeItem(this);
        }
        this._hovered.complete();
        this._focused.complete();
    }
    _getTabIndex() {
        return this.disabled ? "-1" : "0";
    }
    _getHostElement() {
        return this._elementRef.nativeElement;
    }
    _checkDisabled(event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
    _handleMouseEnter() {
        this._hovered.next(this);
    }
    getLabel() {
        const clone = this._elementRef.nativeElement.cloneNode(true);
        const icons = clone.querySelectorAll("mat-icon, .material-icons");
        for (let i = 0; i < icons.length; i++) {
            icons[i].remove();
        }
        return clone.textContent?.trim() || "";
    }
    _setHighlighted(isHighlighted) {
        this._highlighted = isHighlighted;
        this._changeDetectorRef.markForCheck();
    }
    _setTriggersSubmenu(triggersSubmenu) {
        this._triggersSubmenu = triggersSubmenu;
        this._changeDetectorRef.markForCheck();
    }
    _hasFocus() {
        return this._document && this._document.activeElement === this._getHostElement();
    }
    static \u0275fac = function MatMenuItem_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatMenuItem)();
    };
    static \u0275cmp = /* @__PURE__ */ i04.\u0275\u0275defineComponent({
        type: _MatMenuItem,
        selectors: [["", "mat-menu-item", ""]],
        hostAttrs: [1, "mat-mdc-menu-item", "mat-focus-indicator"],
        hostVars: 8,
        hostBindings: function MatMenuItem_HostBindings(rf, ctx) {
            if (rf & 1) {
                i04.\u0275\u0275listener("click", function MatMenuItem_click_HostBindingHandler($event) {
                    return ctx._checkDisabled($event);
                })("mouseenter", function MatMenuItem_mouseenter_HostBindingHandler() {
                    return ctx._handleMouseEnter();
                });
            }
            if (rf & 2) {
                i04.\u0275\u0275attribute("role", ctx.role)("tabindex", ctx._getTabIndex())("aria-disabled", ctx.disabled)("disabled", ctx.disabled || null);
                i04.\u0275\u0275classProp("mat-mdc-menu-item-highlighted", ctx._highlighted)("mat-mdc-menu-item-submenu-trigger", ctx._triggersSubmenu);
            }
        },
        inputs: {
            role: "role",
            disabled: [2, "disabled", "disabled", booleanAttribute],
            disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute]
        },
        exportAs: ["matMenuItem"],
        ngContentSelectors: _c1,
        decls: 5,
        vars: 3,
        consts: [[1, "mat-mdc-menu-item-text"], ["matRipple", "", 1, "mat-mdc-menu-ripple", 3, "matRippleDisabled", "matRippleTrigger"], ["viewBox", "0 0 5 10", "focusable", "false", "aria-hidden", "true", 1, "mat-mdc-menu-submenu-icon"], ["points", "0,0 5,5 0,10"]],
        template: function MatMenuItem_Template(rf, ctx) {
            if (rf & 1) {
                i04.\u0275\u0275projectionDef(_c0);
                i04.\u0275\u0275projection(0);
                i04.\u0275\u0275elementStart(1, "span", 0);
                i04.\u0275\u0275projection(2, 1);
                i04.\u0275\u0275elementEnd();
                i04.\u0275\u0275element(3, "div", 1);
                i04.\u0275\u0275conditionalCreate(4, MatMenuItem_Conditional_4_Template, 2, 0, ":svg:svg", 2);
            }
            if (rf & 2) {
                i04.\u0275\u0275advance(3);
                i04.\u0275\u0275property("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleTrigger", ctx._getHostElement());
                i04.\u0275\u0275advance();
                i04.\u0275\u0275conditional(ctx._triggersSubmenu ? 4 : -1);
            }
        },
        dependencies: [MatRipple],
        encapsulation: 2
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassMetadata(MatMenuItem, [{
            type: Component3,
            args: [{
                    selector: "[mat-menu-item]",
                    exportAs: "matMenuItem",
                    host: {
                        "[attr.role]": "role",
                        "class": "mat-mdc-menu-item mat-focus-indicator",
                        "[class.mat-mdc-menu-item-highlighted]": "_highlighted",
                        "[class.mat-mdc-menu-item-submenu-trigger]": "_triggersSubmenu",
                        "[attr.tabindex]": "_getTabIndex()",
                        "[attr.aria-disabled]": "disabled",
                        "[attr.disabled]": "disabled || null",
                        "(click)": "_checkDisabled($event)",
                        "(mouseenter)": "_handleMouseEnter()"
                    },
                    changeDetection: ChangeDetectionStrategy3.OnPush,
                    encapsulation: ViewEncapsulation3.None,
                    imports: [MatRipple],
                    template: '<ng-content select="mat-icon, [matMenuItemIcon]"></ng-content>\n<span class="mat-mdc-menu-item-text"><ng-content></ng-content></span>\n<div class="mat-mdc-menu-ripple" matRipple\n     [matRippleDisabled]="disableRipple || disabled"\n     [matRippleTrigger]="_getHostElement()">\n</div>\n\n@if (_triggersSubmenu) {\n     <svg\n       class="mat-mdc-menu-submenu-icon"\n       viewBox="0 0 5 10"\n       focusable="false"\n       aria-hidden="true"><polygon points="0,0 5,5 0,10"/></svg>\n}\n'
                }]
        }], () => [], {
        role: [{
                type: Input2
            }],
        disabled: [{
                type: Input2,
                args: [{
                        transform: booleanAttribute
                    }]
            }],
        disableRipple: [{
                type: Input2,
                args: [{
                        transform: booleanAttribute
                    }]
            }]
    });
})();
function throwMatMenuInvalidPositionX() {
    throw Error(`xPosition value must be either 'before' or after'.
      Example: <mat-menu xPosition="before" #menu="matMenu"></mat-menu>`);
}
function throwMatMenuInvalidPositionY() {
    throw Error(`yPosition value must be either 'above' or below'.
      Example: <mat-menu yPosition="above" #menu="matMenu"></mat-menu>`);
}
function throwMatMenuRecursiveError() {
    throw Error(`matMenuTriggerFor: menu cannot contain its own trigger. Assign a menu that is not a parent of the trigger or move the trigger outside of the menu.`);
}
var MAT_MENU_CONTENT = new InjectionToken3("MatMenuContent");
var MatMenuContent = class _MatMenuContent {
    _template = inject3(TemplateRef);
    _appRef = inject3(ApplicationRef);
    _injector = inject3(Injector2);
    _viewContainerRef = inject3(ViewContainerRef);
    _document = inject3(DOCUMENT);
    _changeDetectorRef = inject3(ChangeDetectorRef);
    _portal;
    _outlet;
    _attached = new Subject();
    constructor() {
    }
    attach(context = {}) {
        if (!this._portal) {
            this._portal = new TemplatePortal(this._template, this._viewContainerRef);
        }
        this.detach();
        if (!this._outlet) {
            this._outlet = new DomPortalOutlet(this._document.createElement("div"), this._appRef, this._injector);
        }
        const element = this._template.elementRef.nativeElement;
        element.parentNode.insertBefore(this._outlet.outletElement, element);
        this._changeDetectorRef.markForCheck();
        this._portal.attach(this._outlet, context);
        this._attached.next();
    }
    detach() {
        if (this._portal?.isAttached) {
            this._portal.detach();
        }
    }
    ngOnDestroy() {
        this.detach();
        this._outlet?.dispose();
    }
    static \u0275fac = function MatMenuContent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatMenuContent)();
    };
    static \u0275dir = /* @__PURE__ */ i04.\u0275\u0275defineDirective({
        type: _MatMenuContent,
        selectors: [["ng-template", "matMenuContent", ""]],
        features: [i04.\u0275\u0275ProvidersFeature([{
                    provide: MAT_MENU_CONTENT,
                    useExisting: _MatMenuContent
                }])]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassMetadata(MatMenuContent, [{
            type: Directive2,
            args: [{
                    selector: "ng-template[matMenuContent]",
                    providers: [{
                            provide: MAT_MENU_CONTENT,
                            useExisting: MatMenuContent
                        }]
                }]
        }], () => [], null);
})();
var MAT_MENU_DEFAULT_OPTIONS = new InjectionToken3("mat-menu-default-options", {
    providedIn: "root",
    factory: () => ({
        overlapTrigger: false,
        xPosition: "after",
        yPosition: "below",
        backdropClass: "cdk-overlay-transparent-backdrop"
    })
});
var ENTER_ANIMATION = "_mat-menu-enter";
var EXIT_ANIMATION = "_mat-menu-exit";
var MatMenu = class _MatMenu {
    _elementRef = inject3(ElementRef2);
    _changeDetectorRef = inject3(ChangeDetectorRef);
    _injector = inject3(Injector2);
    _keyManager;
    _xPosition;
    _yPosition;
    _firstItemFocusRef;
    _exitFallbackTimeout;
    _animationsDisabled = _animationsDisabled();
    _allItems;
    _directDescendantItems = new QueryList();
    _classList = {};
    _panelAnimationState = "void";
    _animationDone = new Subject();
    _isAnimating = signal(false, ...ngDevMode ? [{
            debugName: "_isAnimating"
        }] : []);
    parentMenu;
    direction;
    overlayPanelClass;
    backdropClass;
    ariaLabel;
    ariaLabelledby;
    ariaDescribedby;
    get xPosition() {
        return this._xPosition;
    }
    set xPosition(value) {
        if (value !== "before" && value !== "after" && (typeof ngDevMode === "undefined" || ngDevMode)) {
            throwMatMenuInvalidPositionX();
        }
        this._xPosition = value;
        this.setPositionClasses();
    }
    get yPosition() {
        return this._yPosition;
    }
    set yPosition(value) {
        if (value !== "above" && value !== "below" && (typeof ngDevMode === "undefined" || ngDevMode)) {
            throwMatMenuInvalidPositionY();
        }
        this._yPosition = value;
        this.setPositionClasses();
    }
    templateRef;
    items;
    lazyContent;
    overlapTrigger = false;
    hasBackdrop;
    set panelClass(classes) {
        const previousPanelClass = this._previousPanelClass;
        const newClassList = __spreadValues({}, this._classList);
        if (previousPanelClass && previousPanelClass.length) {
            previousPanelClass.split(" ").forEach((className) => {
                newClassList[className] = false;
            });
        }
        this._previousPanelClass = classes;
        if (classes && classes.length) {
            classes.split(" ").forEach((className) => {
                newClassList[className] = true;
            });
            this._elementRef.nativeElement.className = "";
        }
        this._classList = newClassList;
    }
    _previousPanelClass;
    get classList() {
        return this.panelClass;
    }
    set classList(classes) {
        this.panelClass = classes;
    }
    closed = new EventEmitter();
    close = this.closed;
    panelId = inject3(_IdGenerator).getId("mat-menu-panel-");
    constructor() {
        const defaultOptions = inject3(MAT_MENU_DEFAULT_OPTIONS);
        this.overlayPanelClass = defaultOptions.overlayPanelClass || "";
        this._xPosition = defaultOptions.xPosition;
        this._yPosition = defaultOptions.yPosition;
        this.backdropClass = defaultOptions.backdropClass;
        this.overlapTrigger = defaultOptions.overlapTrigger;
        this.hasBackdrop = defaultOptions.hasBackdrop;
    }
    ngOnInit() {
        this.setPositionClasses();
    }
    ngAfterContentInit() {
        this._updateDirectDescendants();
        this._keyManager = new FocusKeyManager(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd();
        this._keyManager.tabOut.subscribe(() => this.closed.emit("tab"));
        this._directDescendantItems.changes.pipe(startWith(this._directDescendantItems), switchMap((items) => merge(...items.map((item) => item._focused)))).subscribe((focusedItem) => this._keyManager.updateActiveItem(focusedItem));
        this._directDescendantItems.changes.subscribe((itemsList) => {
            const manager = this._keyManager;
            if (this._panelAnimationState === "enter" && manager.activeItem?._hasFocus()) {
                const items = itemsList.toArray();
                const index = Math.max(0, Math.min(items.length - 1, manager.activeItemIndex || 0));
                if (items[index] && !items[index].disabled) {
                    manager.setActiveItem(index);
                }
                else {
                    manager.setNextItemActive();
                }
            }
        });
    }
    ngOnDestroy() {
        this._keyManager?.destroy();
        this._directDescendantItems.destroy();
        this.closed.complete();
        this._firstItemFocusRef?.destroy();
        clearTimeout(this._exitFallbackTimeout);
    }
    _hovered() {
        const itemChanges = this._directDescendantItems.changes;
        return itemChanges.pipe(startWith(this._directDescendantItems), switchMap((items) => merge(...items.map((item) => item._hovered))));
    }
    addItem(_item) {
    }
    removeItem(_item) {
    }
    _handleKeydown(event) {
        const keyCode = event.keyCode;
        const manager = this._keyManager;
        switch (keyCode) {
            case ESCAPE:
                if (!hasModifierKey(event)) {
                    event.preventDefault();
                    this.closed.emit("keydown");
                }
                break;
            case LEFT_ARROW:
                if (this.parentMenu && this.direction === "ltr") {
                    this.closed.emit("keydown");
                }
                break;
            case RIGHT_ARROW:
                if (this.parentMenu && this.direction === "rtl") {
                    this.closed.emit("keydown");
                }
                break;
            default:
                if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
                    manager.setFocusOrigin("keyboard");
                }
                manager.onKeydown(event);
                return;
        }
    }
    focusFirstItem(origin = "program") {
        this._firstItemFocusRef?.destroy();
        this._firstItemFocusRef = afterNextRender(() => {
            const menuPanel = this._resolvePanel();
            if (!menuPanel || !menuPanel.contains(document.activeElement)) {
                const manager = this._keyManager;
                manager.setFocusOrigin(origin).setFirstItemActive();
                if (!manager.activeItem && menuPanel) {
                    menuPanel.focus();
                }
            }
        }, {
            injector: this._injector
        });
    }
    resetActiveItem() {
        this._keyManager.setActiveItem(-1);
    }
    setElevation(_depth) {
    }
    setPositionClasses(posX = this.xPosition, posY = this.yPosition) {
        this._classList = __spreadProps(__spreadValues({}, this._classList), {
            ["mat-menu-before"]: posX === "before",
            ["mat-menu-after"]: posX === "after",
            ["mat-menu-above"]: posY === "above",
            ["mat-menu-below"]: posY === "below"
        });
        this._changeDetectorRef.markForCheck();
    }
    _onAnimationDone(state) {
        const isExit = state === EXIT_ANIMATION;
        if (isExit || state === ENTER_ANIMATION) {
            if (isExit) {
                clearTimeout(this._exitFallbackTimeout);
                this._exitFallbackTimeout = void 0;
            }
            this._animationDone.next(isExit ? "void" : "enter");
            this._isAnimating.set(false);
        }
    }
    _onAnimationStart(state) {
        if (state === ENTER_ANIMATION || state === EXIT_ANIMATION) {
            this._isAnimating.set(true);
        }
    }
    _setIsOpen(isOpen) {
        this._panelAnimationState = isOpen ? "enter" : "void";
        if (isOpen) {
            if (this._keyManager.activeItemIndex === 0) {
                const menuPanel = this._resolvePanel();
                if (menuPanel) {
                    menuPanel.scrollTop = 0;
                }
            }
        }
        else if (!this._animationsDisabled) {
            this._exitFallbackTimeout = setTimeout(() => this._onAnimationDone(EXIT_ANIMATION), 200);
        }
        if (this._animationsDisabled) {
            setTimeout(() => {
                this._onAnimationDone(isOpen ? ENTER_ANIMATION : EXIT_ANIMATION);
            });
        }
        this._changeDetectorRef.markForCheck();
    }
    _updateDirectDescendants() {
        this._allItems.changes.pipe(startWith(this._allItems)).subscribe((items) => {
            this._directDescendantItems.reset(items.filter((item) => item._parentMenu === this));
            this._directDescendantItems.notifyOnChanges();
        });
    }
    _resolvePanel() {
        let menuPanel = null;
        if (this._directDescendantItems.length) {
            menuPanel = this._directDescendantItems.first._getHostElement().closest('[role="menu"]');
        }
        return menuPanel;
    }
    static \u0275fac = function MatMenu_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatMenu)();
    };
    static \u0275cmp = /* @__PURE__ */ i04.\u0275\u0275defineComponent({
        type: _MatMenu,
        selectors: [["mat-menu"]],
        contentQueries: function MatMenu_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                i04.\u0275\u0275contentQuery(dirIndex, MAT_MENU_CONTENT, 5)(dirIndex, MatMenuItem, 5)(dirIndex, MatMenuItem, 4);
            }
            if (rf & 2) {
                let _t;
                i04.\u0275\u0275queryRefresh(_t = i04.\u0275\u0275loadQuery()) && (ctx.lazyContent = _t.first);
                i04.\u0275\u0275queryRefresh(_t = i04.\u0275\u0275loadQuery()) && (ctx._allItems = _t);
                i04.\u0275\u0275queryRefresh(_t = i04.\u0275\u0275loadQuery()) && (ctx.items = _t);
            }
        },
        viewQuery: function MatMenu_Query(rf, ctx) {
            if (rf & 1) {
                i04.\u0275\u0275viewQuery(TemplateRef, 5);
            }
            if (rf & 2) {
                let _t;
                i04.\u0275\u0275queryRefresh(_t = i04.\u0275\u0275loadQuery()) && (ctx.templateRef = _t.first);
            }
        },
        hostVars: 3,
        hostBindings: function MatMenu_HostBindings(rf, ctx) {
            if (rf & 2) {
                i04.\u0275\u0275attribute("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
            }
        },
        inputs: {
            backdropClass: "backdropClass",
            ariaLabel: [0, "aria-label", "ariaLabel"],
            ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
            ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
            xPosition: "xPosition",
            yPosition: "yPosition",
            overlapTrigger: [2, "overlapTrigger", "overlapTrigger", booleanAttribute],
            hasBackdrop: [2, "hasBackdrop", "hasBackdrop", (value) => value == null ? null : booleanAttribute(value)],
            panelClass: [0, "class", "panelClass"],
            classList: "classList"
        },
        outputs: {
            closed: "closed",
            close: "close"
        },
        exportAs: ["matMenu"],
        features: [i04.\u0275\u0275ProvidersFeature([{
                    provide: MAT_MENU_PANEL,
                    useExisting: _MatMenu
                }])],
        ngContentSelectors: _c2,
        decls: 1,
        vars: 0,
        consts: [["tabindex", "-1", "role", "menu", 1, "mat-mdc-menu-panel", 3, "click", "animationstart", "animationend", "animationcancel", "id"], [1, "mat-mdc-menu-content"]],
        template: function MatMenu_Template(rf, ctx) {
            if (rf & 1) {
                i04.\u0275\u0275projectionDef();
                i04.\u0275\u0275domTemplate(0, MatMenu_ng_template_0_Template, 3, 12, "ng-template");
            }
        },
        styles: ['mat-menu {\n  display: none;\n}\n\n.mat-mdc-menu-content {\n  margin: 0;\n  padding: 8px 0;\n  outline: 0;\n}\n.mat-mdc-menu-content,\n.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  flex: 1;\n  white-space: normal;\n  font-family: var(--%NS%mat-menu-item-label-text-font, var(--%NS%mat-sys-label-large-font));\n  line-height: var(--%NS%mat-menu-item-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));\n  font-size: var(--%NS%mat-menu-item-label-text-size, var(--%NS%mat-sys-label-large-size));\n  letter-spacing: var(--%NS%mat-menu-item-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));\n  font-weight: var(--%NS%mat-menu-item-label-text-weight, var(--%NS%mat-sys-label-large-weight));\n}\n\n@keyframes _mat-menu-enter {\n  from {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes _mat-menu-exit {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n.mat-mdc-menu-panel {\n  min-width: 112px;\n  max-width: 280px;\n  overflow: auto;\n  box-sizing: border-box;\n  outline: 0;\n  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);\n  border-radius: var(--%NS%mat-menu-container-shape, var(--%NS%mat-sys-corner-extra-small));\n  background-color: var(--%NS%mat-menu-container-color, var(--%NS%mat-sys-surface-container));\n  box-shadow: var(--%NS%mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));\n  will-change: transform, opacity;\n}\n.mat-mdc-menu-panel.mat-menu-panel-exit-animation {\n  animation: _mat-menu-exit 100ms 25ms linear forwards;\n}\n.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {\n  animation: none;\n}\n.mat-mdc-menu-panel.mat-menu-panel-animating {\n  pointer-events: none;\n}\n.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {\n  display: none;\n}\n@media (forced-colors: active) {\n  .mat-mdc-menu-panel {\n    outline: solid 1px;\n  }\n}\n.mat-mdc-menu-panel .mat-divider {\n  border-top-color: var(--%NS%mat-menu-divider-color, var(--%NS%mat-sys-surface-variant));\n  margin-bottom: var(--%NS%mat-menu-divider-bottom-spacing, 8px);\n  margin-top: var(--%NS%mat-menu-divider-top-spacing, 8px);\n}\n\n.mat-mdc-menu-item {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: flex-start;\n  overflow: hidden;\n  padding: 0;\n  cursor: pointer;\n  width: 100%;\n  text-align: left;\n  box-sizing: border-box;\n  color: inherit;\n  font-size: inherit;\n  background: none;\n  text-decoration: none;\n  margin: 0;\n  min-height: 48px;\n  padding-left: var(--%NS%mat-menu-item-leading-spacing, 12px);\n  padding-right: var(--%NS%mat-menu-item-trailing-spacing, 12px);\n  -webkit-user-select: none;\n  user-select: none;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-menu-item::-moz-focus-inner {\n  border: 0;\n}\n[dir=rtl] .mat-mdc-menu-item {\n  padding-left: var(--%NS%mat-menu-item-trailing-spacing, 12px);\n  padding-right: var(--%NS%mat-menu-item-leading-spacing, 12px);\n}\n.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {\n  padding-left: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);\n  padding-right: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);\n}\n[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {\n  padding-left: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);\n  padding-right: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);\n}\n.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {\n  color: var(--%NS%mat-menu-item-label-text-color, var(--%NS%mat-sys-on-surface));\n}\n.mat-mdc-menu-item .mat-icon-no-color,\n.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {\n  color: var(--%NS%mat-menu-item-icon-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mat-mdc-menu-item[disabled] {\n  cursor: default;\n  opacity: 0.38;\n}\n.mat-mdc-menu-item[disabled]::after {\n  display: block;\n  position: absolute;\n  content: "";\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.mat-mdc-menu-item:focus {\n  outline: 0;\n}\n.mat-mdc-menu-item .mat-icon {\n  flex-shrink: 0;\n  margin-right: var(--%NS%mat-menu-item-spacing, 12px);\n  height: var(--%NS%mat-menu-item-icon-size, 24px);\n  width: var(--%NS%mat-menu-item-icon-size, 24px);\n}\n[dir=rtl] .mat-mdc-menu-item {\n  text-align: right;\n}\n[dir=rtl] .mat-mdc-menu-item .mat-icon {\n  margin-right: 0;\n  margin-left: var(--%NS%mat-menu-item-spacing, 12px);\n}\n.mat-mdc-menu-item:not([disabled]):hover {\n  background-color: var(--%NS%mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));\n}\n.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {\n  background-color: var(--%NS%mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));\n}\n@media (forced-colors: active) {\n  .mat-mdc-menu-item {\n    margin-top: 1px;\n  }\n}\n\n.mat-mdc-menu-submenu-icon {\n  width: var(--%NS%mat-menu-item-icon-size, 24px);\n  height: 10px;\n  fill: currentColor;\n  padding-left: var(--%NS%mat-menu-item-spacing, 12px);\n}\n[dir=rtl] .mat-mdc-menu-submenu-icon {\n  padding-right: var(--%NS%mat-menu-item-spacing, 12px);\n  padding-left: 0;\n}\n[dir=rtl] .mat-mdc-menu-submenu-icon polygon {\n  transform: scaleX(-1);\n  transform-origin: center;\n}\n@media (forced-colors: active) {\n  .mat-mdc-menu-submenu-icon {\n    fill: CanvasText;\n  }\n}\n\n.mat-mdc-menu-item .mat-mdc-menu-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n}\n'],
        encapsulation: 2
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassMetadata(MatMenu, [{
            type: Component3,
            args: [{
                    selector: "mat-menu",
                    changeDetection: ChangeDetectionStrategy3.OnPush,
                    encapsulation: ViewEncapsulation3.None,
                    exportAs: "matMenu",
                    host: {
                        "[attr.aria-label]": "null",
                        "[attr.aria-labelledby]": "null",
                        "[attr.aria-describedby]": "null"
                    },
                    providers: [{
                            provide: MAT_MENU_PANEL,
                            useExisting: MatMenu
                        }],
                    template: `<ng-template>
  <div
    class="mat-mdc-menu-panel"
    [id]="panelId"
    [class]="_classList"
    [class.mat-menu-panel-animations-disabled]="_animationsDisabled"
    [class.mat-menu-panel-exit-animation]="_panelAnimationState === 'void'"
    [class.mat-menu-panel-animating]="_isAnimating()"
    (click)="closed.emit('click')"
    tabindex="-1"
    role="menu"
    (animationstart)="_onAnimationStart($event.animationName)"
    (animationend)="_onAnimationDone($event.animationName)"
    (animationcancel)="_onAnimationDone($event.animationName)"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="ariaLabelledby || null"
    [attr.aria-describedby]="ariaDescribedby || null">
    <div class="mat-mdc-menu-content">
      <ng-content></ng-content>
    </div>
  </div>
</ng-template>
`,
                    styles: ['mat-menu {\n  display: none;\n}\n\n.mat-mdc-menu-content {\n  margin: 0;\n  padding: 8px 0;\n  outline: 0;\n}\n.mat-mdc-menu-content,\n.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  flex: 1;\n  white-space: normal;\n  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));\n  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));\n  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));\n  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));\n  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));\n}\n\n@keyframes _mat-menu-enter {\n  from {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes _mat-menu-exit {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n.mat-mdc-menu-panel {\n  min-width: 112px;\n  max-width: 280px;\n  overflow: auto;\n  box-sizing: border-box;\n  outline: 0;\n  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);\n  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));\n  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));\n  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));\n  will-change: transform, opacity;\n}\n.mat-mdc-menu-panel.mat-menu-panel-exit-animation {\n  animation: _mat-menu-exit 100ms 25ms linear forwards;\n}\n.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {\n  animation: none;\n}\n.mat-mdc-menu-panel.mat-menu-panel-animating {\n  pointer-events: none;\n}\n.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {\n  display: none;\n}\n@media (forced-colors: active) {\n  .mat-mdc-menu-panel {\n    outline: solid 1px;\n  }\n}\n.mat-mdc-menu-panel .mat-divider {\n  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));\n  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);\n  margin-top: var(--mat-menu-divider-top-spacing, 8px);\n}\n\n.mat-mdc-menu-item {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: flex-start;\n  overflow: hidden;\n  padding: 0;\n  cursor: pointer;\n  width: 100%;\n  text-align: left;\n  box-sizing: border-box;\n  color: inherit;\n  font-size: inherit;\n  background: none;\n  text-decoration: none;\n  margin: 0;\n  min-height: 48px;\n  padding-left: var(--mat-menu-item-leading-spacing, 12px);\n  padding-right: var(--mat-menu-item-trailing-spacing, 12px);\n  -webkit-user-select: none;\n  user-select: none;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-menu-item::-moz-focus-inner {\n  border: 0;\n}\n[dir=rtl] .mat-mdc-menu-item {\n  padding-left: var(--mat-menu-item-trailing-spacing, 12px);\n  padding-right: var(--mat-menu-item-leading-spacing, 12px);\n}\n.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {\n  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);\n  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);\n}\n[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {\n  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);\n  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);\n}\n.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {\n  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-menu-item .mat-icon-no-color,\n.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {\n  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-menu-item[disabled] {\n  cursor: default;\n  opacity: 0.38;\n}\n.mat-mdc-menu-item[disabled]::after {\n  display: block;\n  position: absolute;\n  content: "";\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.mat-mdc-menu-item:focus {\n  outline: 0;\n}\n.mat-mdc-menu-item .mat-icon {\n  flex-shrink: 0;\n  margin-right: var(--mat-menu-item-spacing, 12px);\n  height: var(--mat-menu-item-icon-size, 24px);\n  width: var(--mat-menu-item-icon-size, 24px);\n}\n[dir=rtl] .mat-mdc-menu-item {\n  text-align: right;\n}\n[dir=rtl] .mat-mdc-menu-item .mat-icon {\n  margin-right: 0;\n  margin-left: var(--mat-menu-item-spacing, 12px);\n}\n.mat-mdc-menu-item:not([disabled]):hover {\n  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));\n}\n.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {\n  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));\n}\n@media (forced-colors: active) {\n  .mat-mdc-menu-item {\n    margin-top: 1px;\n  }\n}\n\n.mat-mdc-menu-submenu-icon {\n  width: var(--mat-menu-item-icon-size, 24px);\n  height: 10px;\n  fill: currentColor;\n  padding-left: var(--mat-menu-item-spacing, 12px);\n}\n[dir=rtl] .mat-mdc-menu-submenu-icon {\n  padding-right: var(--mat-menu-item-spacing, 12px);\n  padding-left: 0;\n}\n[dir=rtl] .mat-mdc-menu-submenu-icon polygon {\n  transform: scaleX(-1);\n  transform-origin: center;\n}\n@media (forced-colors: active) {\n  .mat-mdc-menu-submenu-icon {\n    fill: CanvasText;\n  }\n}\n\n.mat-mdc-menu-item .mat-mdc-menu-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n}\n']
                }]
        }], () => [], {
        _allItems: [{
                type: ContentChildren,
                args: [MatMenuItem, {
                        descendants: true
                    }]
            }],
        backdropClass: [{
                type: Input2
            }],
        ariaLabel: [{
                type: Input2,
                args: ["aria-label"]
            }],
        ariaLabelledby: [{
                type: Input2,
                args: ["aria-labelledby"]
            }],
        ariaDescribedby: [{
                type: Input2,
                args: ["aria-describedby"]
            }],
        xPosition: [{
                type: Input2
            }],
        yPosition: [{
                type: Input2
            }],
        templateRef: [{
                type: ViewChild,
                args: [TemplateRef]
            }],
        items: [{
                type: ContentChildren,
                args: [MatMenuItem, {
                        descendants: false
                    }]
            }],
        lazyContent: [{
                type: ContentChild,
                args: [MAT_MENU_CONTENT]
            }],
        overlapTrigger: [{
                type: Input2,
                args: [{
                        transform: booleanAttribute
                    }]
            }],
        hasBackdrop: [{
                type: Input2,
                args: [{
                        transform: (value) => value == null ? null : booleanAttribute(value)
                    }]
            }],
        panelClass: [{
                type: Input2,
                args: ["class"]
            }],
        classList: [{
                type: Input2
            }],
        closed: [{
                type: Output
            }],
        close: [{
                type: Output
            }]
    });
})();
var MAT_MENU_SCROLL_STRATEGY = new InjectionToken3("mat-menu-scroll-strategy", {
    providedIn: "root",
    factory: () => {
        const injector = inject3(Injector2);
        return () => createRepositionScrollStrategy(injector);
    }
});
var MENU_PANEL_TOP_PADDING = 8;
var PANELS_TO_TRIGGERS = /* @__PURE__ */ new WeakMap();
var MatMenuTriggerBase = class _MatMenuTriggerBase {
    _canHaveBackdrop;
    _element = inject3(ElementRef2);
    _viewContainerRef = inject3(ViewContainerRef);
    _menuItemInstance = inject3(MatMenuItem, {
        optional: true,
        self: true
    });
    _dir = inject3(Directionality, {
        optional: true
    });
    _focusMonitor = inject3(FocusMonitor);
    _ngZone = inject3(NgZone2);
    _injector = inject3(Injector2);
    _scrollStrategy = inject3(MAT_MENU_SCROLL_STRATEGY);
    _changeDetectorRef = inject3(ChangeDetectorRef);
    _animationsDisabled = _animationsDisabled();
    _portal;
    _overlayRef = null;
    _menuOpen = false;
    _closingActionsSubscription = Subscription.EMPTY;
    _menuCloseSubscription = Subscription.EMPTY;
    _pendingRemoval;
    _parentMaterialMenu;
    _parentInnerPadding;
    _openedBy = void 0;
    get _menu() {
        return this._menuInternal;
    }
    set _menu(menu) {
        if (menu === this._menuInternal) {
            return;
        }
        this._menuInternal = menu;
        this._menuCloseSubscription.unsubscribe();
        if (menu) {
            if (menu === this._parentMaterialMenu && (typeof ngDevMode === "undefined" || ngDevMode)) {
                throwMatMenuRecursiveError();
            }
            this._menuCloseSubscription = menu.close.subscribe((reason) => {
                this._destroyMenu(reason);
                if ((reason === "click" || reason === "tab") && this._parentMaterialMenu) {
                    this._parentMaterialMenu.closed.emit(reason);
                }
            });
        }
        this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu());
    }
    _menuInternal = null;
    constructor(_canHaveBackdrop) {
        this._canHaveBackdrop = _canHaveBackdrop;
        const parentMenu = inject3(MAT_MENU_PANEL, {
            optional: true
        });
        this._parentMaterialMenu = parentMenu instanceof MatMenu ? parentMenu : void 0;
    }
    ngOnDestroy() {
        if (this._menu && this._ownsMenu(this._menu)) {
            PANELS_TO_TRIGGERS.delete(this._menu);
        }
        this._pendingRemoval?.unsubscribe();
        this._menuCloseSubscription.unsubscribe();
        this._closingActionsSubscription.unsubscribe();
        if (this._overlayRef) {
            this._overlayRef.dispose();
            this._overlayRef = null;
        }
    }
    get menuOpen() {
        return this._menuOpen;
    }
    get dir() {
        return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
    }
    _triggersSubmenu() {
        return !!(this._menuItemInstance && this._parentMaterialMenu && this._menu);
    }
    _closeMenu() {
        this._menu?.close.emit();
    }
    _openMenu(autoFocus) {
        if (this._triggerIsAriaDisabled()) {
            return;
        }
        const menu = this._menu;
        if (this._menuOpen || !menu) {
            return;
        }
        this._pendingRemoval?.unsubscribe();
        const previousTrigger = PANELS_TO_TRIGGERS.get(menu);
        PANELS_TO_TRIGGERS.set(menu, this);
        if (previousTrigger && previousTrigger !== this) {
            previousTrigger._closeMenu();
        }
        const overlayRef = this._createOverlay(menu);
        const overlayConfig = overlayRef.getConfig();
        const positionStrategy = overlayConfig.positionStrategy;
        this._setPosition(menu, positionStrategy);
        if (this._canHaveBackdrop) {
            overlayConfig.hasBackdrop = menu.hasBackdrop == null ? !this._triggersSubmenu() : menu.hasBackdrop;
        }
        else {
            overlayConfig.hasBackdrop = menu.hasBackdrop ?? false;
        }
        if (!overlayRef.hasAttached()) {
            overlayRef.attach(this._getPortal(menu));
            menu.lazyContent?.attach(this.menuData);
        }
        this._closingActionsSubscription = this._menuClosingActions().subscribe(() => this._closeMenu());
        menu.parentMenu = this._triggersSubmenu() ? this._parentMaterialMenu : void 0;
        menu.direction = this.dir;
        if (autoFocus) {
            menu.focusFirstItem(this._openedBy || "program");
        }
        this._setIsMenuOpen(true);
        if (menu instanceof MatMenu) {
            menu._setIsOpen(true);
            menu._directDescendantItems.changes.pipe(takeUntil(menu.close)).subscribe(() => {
                positionStrategy.withLockedPosition(false).reapplyLastPosition();
                positionStrategy.withLockedPosition(true);
            });
        }
    }
    focus(origin, options) {
        if (this._focusMonitor && origin) {
            this._focusMonitor.focusVia(this._element, origin, options);
        }
        else {
            this._element.nativeElement.focus(options);
        }
    }
    _destroyMenu(reason) {
        const overlayRef = this._overlayRef;
        const menu = this._menu;
        if (!overlayRef || !this.menuOpen) {
            return;
        }
        this._closingActionsSubscription.unsubscribe();
        this._pendingRemoval?.unsubscribe();
        if (menu instanceof MatMenu && this._ownsMenu(menu)) {
            this._pendingRemoval = menu._animationDone.pipe(take(1)).subscribe(() => {
                overlayRef.detach();
                if (!PANELS_TO_TRIGGERS.has(menu)) {
                    menu.lazyContent?.detach();
                }
            });
            menu._setIsOpen(false);
        }
        else {
            overlayRef.detach();
            menu?.lazyContent?.detach();
        }
        if (menu && this._ownsMenu(menu)) {
            PANELS_TO_TRIGGERS.delete(menu);
        }
        if (this.restoreFocus && (reason === "keydown" || !this._openedBy || !this._triggersSubmenu())) {
            this.focus(this._openedBy);
        }
        this._openedBy = void 0;
        this._setIsMenuOpen(false);
    }
    _setIsMenuOpen(isOpen) {
        if (isOpen !== this._menuOpen) {
            this._menuOpen = isOpen;
            this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();
            if (this._triggersSubmenu()) {
                this._menuItemInstance._setHighlighted(isOpen);
            }
            this._changeDetectorRef.markForCheck();
        }
    }
    _createOverlay(menu) {
        if (!this._overlayRef) {
            const config = this._getOverlayConfig(menu);
            this._subscribeToPositions(menu, config.positionStrategy);
            this._overlayRef = createOverlayRef(this._injector, config);
            this._overlayRef.keydownEvents().subscribe((event) => {
                if (this._menu instanceof MatMenu) {
                    this._menu._handleKeydown(event);
                }
            });
        }
        return this._overlayRef;
    }
    _getOverlayConfig(menu) {
        return new OverlayConfig({
            positionStrategy: createFlexibleConnectedPositionStrategy(this._injector, this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),
            backdropClass: menu.backdropClass || "cdk-overlay-transparent-backdrop",
            panelClass: menu.overlayPanelClass,
            scrollStrategy: this._scrollStrategy(),
            direction: this._dir || "ltr",
            disableAnimations: this._animationsDisabled
        });
    }
    _subscribeToPositions(menu, position) {
        if (menu.setPositionClasses) {
            position.positionChanges.subscribe((change) => {
                this._ngZone.run(() => {
                    const posX = change.connectionPair.overlayX === "start" ? "after" : "before";
                    const posY = change.connectionPair.overlayY === "top" ? "below" : "above";
                    menu.setPositionClasses(posX, posY);
                });
            });
        }
    }
    _setPosition(menu, positionStrategy) {
        let [originX, originFallbackX] = menu.xPosition === "before" ? ["end", "start"] : ["start", "end"];
        let [overlayY, overlayFallbackY] = menu.yPosition === "above" ? ["bottom", "top"] : ["top", "bottom"];
        let [originY, originFallbackY] = [overlayY, overlayFallbackY];
        let [overlayX, overlayFallbackX] = [originX, originFallbackX];
        let offsetY = 0;
        if (this._triggersSubmenu()) {
            overlayFallbackX = originX = menu.xPosition === "before" ? "start" : "end";
            originFallbackX = overlayX = originX === "end" ? "start" : "end";
            if (this._parentMaterialMenu) {
                if (this._parentInnerPadding == null) {
                    const firstItem = this._parentMaterialMenu.items.first;
                    this._parentInnerPadding = firstItem ? firstItem._getHostElement().offsetTop : 0;
                }
                offsetY = overlayY === "bottom" ? this._parentInnerPadding : -this._parentInnerPadding;
            }
        }
        else if (!menu.overlapTrigger) {
            originY = overlayY === "top" ? "bottom" : "top";
            originFallbackY = overlayFallbackY === "top" ? "bottom" : "top";
        }
        positionStrategy.withPositions([{
                originX,
                originY,
                overlayX,
                overlayY,
                offsetY
            }, {
                originX: originFallbackX,
                originY,
                overlayX: overlayFallbackX,
                overlayY,
                offsetY
            }, {
                originX,
                originY: originFallbackY,
                overlayX,
                overlayY: overlayFallbackY,
                offsetY: -offsetY
            }, {
                originX: originFallbackX,
                originY: originFallbackY,
                overlayX: overlayFallbackX,
                overlayY: overlayFallbackY,
                offsetY: -offsetY
            }]);
    }
    _menuClosingActions() {
        const outsideClicks = this._getOutsideClickStream(this._overlayRef);
        const detachments = this._overlayRef.detachments();
        const parentClose = this._parentMaterialMenu ? this._parentMaterialMenu.closed : of();
        const hover = this._parentMaterialMenu ? this._parentMaterialMenu._hovered().pipe(filter((active) => this._menuOpen && active !== this._menuItemInstance)) : of();
        return merge(outsideClicks, parentClose, hover, detachments);
    }
    _getPortal(menu) {
        if (!this._portal || this._portal.templateRef !== menu.templateRef) {
            this._portal = new TemplatePortal(menu.templateRef, this._viewContainerRef);
        }
        return this._portal;
    }
    _ownsMenu(menu) {
        return PANELS_TO_TRIGGERS.get(menu) === this;
    }
    _triggerIsAriaDisabled() {
        return booleanAttribute(this._element.nativeElement.getAttribute("aria-disabled"));
    }
    static \u0275fac = function MatMenuTriggerBase_Factory(__ngFactoryType__) {
        i04.\u0275\u0275invalidFactory();
    };
    static \u0275dir = /* @__PURE__ */ i04.\u0275\u0275defineDirective({
        type: _MatMenuTriggerBase
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassMetadata(MatMenuTriggerBase, [{
            type: Directive2
        }], () => [{
            type: void 0
        }], null);
})();
var MatMenuTrigger = class _MatMenuTrigger extends MatMenuTriggerBase {
    _cleanupTouchstart;
    _hoverSubscription = Subscription.EMPTY;
    get _deprecatedMatMenuTriggerFor() {
        return this.menu;
    }
    set _deprecatedMatMenuTriggerFor(v) {
        this.menu = v;
    }
    get menu() {
        return this._menu;
    }
    set menu(menu) {
        this._menu = menu;
    }
    menuData;
    restoreFocus = true;
    menuOpened = new EventEmitter();
    onMenuOpen = this.menuOpened;
    menuClosed = new EventEmitter();
    onMenuClose = this.menuClosed;
    constructor() {
        super(true);
        const renderer = inject3(Renderer2);
        this._cleanupTouchstart = renderer.listen(this._element.nativeElement, "touchstart", (event) => {
            if (!isFakeTouchstartFromScreenReader2(event)) {
                this._openedBy = "touch";
            }
        }, {
            passive: true
        });
    }
    triggersSubmenu() {
        return super._triggersSubmenu();
    }
    toggleMenu() {
        return this.menuOpen ? this.closeMenu() : this.openMenu();
    }
    openMenu() {
        this._openMenu(true);
    }
    closeMenu() {
        this._closeMenu();
    }
    updatePosition() {
        this._overlayRef?.updatePosition();
    }
    ngAfterContentInit() {
        this._handleHover();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this._cleanupTouchstart();
        this._hoverSubscription.unsubscribe();
    }
    _getOverlayOrigin() {
        return this._element;
    }
    _getOutsideClickStream(overlayRef) {
        return overlayRef.backdropClick();
    }
    _handleMousedown(event) {
        if (!isFakeMousedownFromScreenReader2(event)) {
            this._openedBy = event.button === 0 ? "mouse" : void 0;
            if (this.triggersSubmenu()) {
                event.preventDefault();
            }
        }
    }
    _handleKeydown(event) {
        const keyCode = event.keyCode;
        if (keyCode === ENTER || keyCode === SPACE) {
            this._openedBy = "keyboard";
        }
        if (this.triggersSubmenu() && (keyCode === RIGHT_ARROW && this.dir === "ltr" || keyCode === LEFT_ARROW && this.dir === "rtl")) {
            this._openedBy = "keyboard";
            this.openMenu();
        }
    }
    _handleClick(event) {
        if (this.triggersSubmenu()) {
            event.stopPropagation();
            this.openMenu();
        }
        else {
            this.toggleMenu();
        }
    }
    _handleHover() {
        if (this.triggersSubmenu() && this._parentMaterialMenu) {
            this._hoverSubscription = this._parentMaterialMenu._hovered().subscribe((active) => {
                if (active === this._menuItemInstance && !active.disabled && this._parentMaterialMenu?._panelAnimationState !== "void") {
                    this._openedBy = "mouse";
                    this._openMenu(false);
                }
            });
        }
    }
    static \u0275fac = function MatMenuTrigger_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatMenuTrigger)();
    };
    static \u0275dir = /* @__PURE__ */ i04.\u0275\u0275defineDirective({
        type: _MatMenuTrigger,
        selectors: [["", "mat-menu-trigger-for", ""], ["", "matMenuTriggerFor", ""]],
        hostAttrs: [1, "mat-mdc-menu-trigger"],
        hostVars: 3,
        hostBindings: function MatMenuTrigger_HostBindings(rf, ctx) {
            if (rf & 1) {
                i04.\u0275\u0275listener("click", function MatMenuTrigger_click_HostBindingHandler($event) {
                    return ctx._handleClick($event);
                })("mousedown", function MatMenuTrigger_mousedown_HostBindingHandler($event) {
                    return ctx._handleMousedown($event);
                })("keydown", function MatMenuTrigger_keydown_HostBindingHandler($event) {
                    return ctx._handleKeydown($event);
                });
            }
            if (rf & 2) {
                i04.\u0275\u0275attribute("aria-haspopup", ctx.menu ? "menu" : null)("aria-expanded", ctx.menuOpen)("aria-controls", ctx.menuOpen ? ctx.menu == null ? null : ctx.menu.panelId : null);
            }
        },
        inputs: {
            _deprecatedMatMenuTriggerFor: [0, "mat-menu-trigger-for", "_deprecatedMatMenuTriggerFor"],
            menu: [0, "matMenuTriggerFor", "menu"],
            menuData: [0, "matMenuTriggerData", "menuData"],
            restoreFocus: [0, "matMenuTriggerRestoreFocus", "restoreFocus"]
        },
        outputs: {
            menuOpened: "menuOpened",
            onMenuOpen: "onMenuOpen",
            menuClosed: "menuClosed",
            onMenuClose: "onMenuClose"
        },
        exportAs: ["matMenuTrigger"],
        features: [i04.\u0275\u0275InheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassMetadata(MatMenuTrigger, [{
            type: Directive2,
            args: [{
                    selector: "[mat-menu-trigger-for], [matMenuTriggerFor]",
                    host: {
                        "class": "mat-mdc-menu-trigger",
                        "[attr.aria-haspopup]": 'menu ? "menu" : null',
                        "[attr.aria-expanded]": "menuOpen",
                        "[attr.aria-controls]": "menuOpen ? menu?.panelId : null",
                        "(click)": "_handleClick($event)",
                        "(mousedown)": "_handleMousedown($event)",
                        "(keydown)": "_handleKeydown($event)"
                    },
                    exportAs: "matMenuTrigger"
                }]
        }], () => [], {
        _deprecatedMatMenuTriggerFor: [{
                type: Input2,
                args: ["mat-menu-trigger-for"]
            }],
        menu: [{
                type: Input2,
                args: ["matMenuTriggerFor"]
            }],
        menuData: [{
                type: Input2,
                args: ["matMenuTriggerData"]
            }],
        restoreFocus: [{
                type: Input2,
                args: ["matMenuTriggerRestoreFocus"]
            }],
        menuOpened: [{
                type: Output
            }],
        onMenuOpen: [{
                type: Output
            }],
        menuClosed: [{
                type: Output
            }],
        onMenuClose: [{
                type: Output
            }]
    });
})();
var MatContextMenuTrigger = class _MatContextMenuTrigger extends MatMenuTriggerBase {
    _point = {
        x: 0,
        y: 0,
        initialX: 0,
        initialY: 0,
        initialScrollX: 0,
        initialScrollY: 0
    };
    _triggerPressedControl = false;
    _rootNode;
    _document = inject3(DOCUMENT);
    _viewportRuler = inject3(ViewportRuler);
    _scrollDispatcher = inject3(ScrollDispatcher);
    _scrollSubscription;
    get menu() {
        return this._menu;
    }
    set menu(menu) {
        this._menu = menu;
    }
    menuData;
    restoreFocus = true;
    disabled = false;
    menuOpened = new EventEmitter();
    menuClosed = new EventEmitter();
    constructor() {
        super(false);
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this._scrollSubscription?.unsubscribe();
    }
    _handleContextMenuEvent(event) {
        if (!this.disabled) {
            event.preventDefault();
            if (this.menuOpen) {
                this._initializePoint(event.clientX, event.clientY);
                this._updatePosition();
            }
            else {
                this._openContextMenu(event);
            }
        }
    }
    _destroyMenu(reason) {
        super._destroyMenu(reason);
        this._scrollSubscription?.unsubscribe();
    }
    _getOverlayOrigin() {
        return this._point;
    }
    _getOutsideClickStream(overlayRef) {
        return overlayRef.outsidePointerEvents().pipe(skipWhile((event, index) => {
            if (event.type === "contextmenu") {
                return this._isWithinMenuOrTrigger(_getEventTarget2(event));
            }
            else if (event.type === "auxclick") {
                if (index === 0) {
                    return true;
                }
                this._rootNode ??= _getShadowRoot(this._element.nativeElement) || this._document;
                return this._isWithinMenuOrTrigger(this._rootNode.elementFromPoint(event.clientX, event.clientY));
            }
            return this._triggerPressedControl && index === 0 && event.ctrlKey;
        }));
    }
    _isWithinMenuOrTrigger(target) {
        if (!target) {
            return false;
        }
        const element = this._element.nativeElement;
        if (target === element || element.contains(target)) {
            return true;
        }
        const overlay = this._overlayRef?.hostElement;
        return overlay === target || !!overlay?.contains(target);
    }
    _openContextMenu(event) {
        if (event.button === 2) {
            this._openedBy = "mouse";
        }
        else {
            this._openedBy = event.button === 0 ? "keyboard" : void 0;
        }
        this._initializePoint(event.clientX, event.clientY);
        this._triggerPressedControl = event.ctrlKey;
        super._openMenu(true);
        this._scrollSubscription?.unsubscribe();
        this._scrollSubscription = this._scrollDispatcher.scrolled(0).subscribe(() => {
            const position = this._viewportRuler.getViewportScrollPosition();
            const point = this._point;
            point.y = point.initialY + (point.initialScrollY - position.top);
            point.x = point.initialX + (point.initialScrollX - position.left);
            this._updatePosition();
        });
    }
    _initializePoint(x, y) {
        const scrollPosition = this._viewportRuler.getViewportScrollPosition();
        const point = this._point;
        point.x = point.initialX = x;
        point.y = point.initialY = y;
        point.initialScrollX = scrollPosition.left;
        point.initialScrollY = scrollPosition.top;
    }
    _updatePosition() {
        const overlayRef = this._overlayRef;
        if (overlayRef) {
            const positionStrategy = overlayRef.getConfig().positionStrategy;
            positionStrategy.setOrigin(this._point);
            overlayRef.updatePosition();
        }
    }
    static \u0275fac = function MatContextMenuTrigger_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatContextMenuTrigger)();
    };
    static \u0275dir = /* @__PURE__ */ i04.\u0275\u0275defineDirective({
        type: _MatContextMenuTrigger,
        selectors: [["", "matContextMenuTriggerFor", ""]],
        hostAttrs: [1, "mat-context-menu-trigger"],
        hostVars: 3,
        hostBindings: function MatContextMenuTrigger_HostBindings(rf, ctx) {
            if (rf & 1) {
                i04.\u0275\u0275listener("contextmenu", function MatContextMenuTrigger_contextmenu_HostBindingHandler($event) {
                    return ctx._handleContextMenuEvent($event);
                });
            }
            if (rf & 2) {
                i04.\u0275\u0275attribute("aria-controls", ctx.menuOpen ? ctx.menu == null ? null : ctx.menu.panelId : null);
                i04.\u0275\u0275classProp("mat-context-menu-trigger-disabled", ctx.disabled);
            }
        },
        inputs: {
            menu: [0, "matContextMenuTriggerFor", "menu"],
            menuData: [0, "matContextMenuTriggerData", "menuData"],
            restoreFocus: [0, "matContextMenuTriggerRestoreFocus", "restoreFocus"],
            disabled: [2, "matContextMenuTriggerDisabled", "disabled", booleanAttribute]
        },
        outputs: {
            menuOpened: "menuOpened",
            menuClosed: "menuClosed"
        },
        exportAs: ["matContextMenuTrigger"],
        features: [i04.\u0275\u0275InheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassMetadata(MatContextMenuTrigger, [{
            type: Directive2,
            args: [{
                    selector: "[matContextMenuTriggerFor]",
                    host: {
                        "class": "mat-context-menu-trigger",
                        "[class.mat-context-menu-trigger-disabled]": "disabled",
                        "[attr.aria-controls]": "menuOpen ? menu?.panelId : null",
                        "(contextmenu)": "_handleContextMenuEvent($event)"
                    },
                    exportAs: "matContextMenuTrigger"
                }]
        }], () => [], {
        menu: [{
                type: Input2,
                args: [{
                        alias: "matContextMenuTriggerFor",
                        required: true
                    }]
            }],
        menuData: [{
                type: Input2,
                args: ["matContextMenuTriggerData"]
            }],
        restoreFocus: [{
                type: Input2,
                args: ["matContextMenuTriggerRestoreFocus"]
            }],
        disabled: [{
                type: Input2,
                args: [{
                        alias: "matContextMenuTriggerDisabled",
                        transform: booleanAttribute
                    }]
            }],
        menuOpened: [{
                type: Output
            }],
        menuClosed: [{
                type: Output
            }]
    });
})();
var MatMenuModule = class _MatMenuModule {
    static \u0275fac = function MatMenuModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatMenuModule)();
    };
    static \u0275mod = /* @__PURE__ */ i04.\u0275\u0275defineNgModule({
        type: _MatMenuModule
    });
    static \u0275inj = /* @__PURE__ */ i04.\u0275\u0275defineInjector({
        imports: [MatRippleModule, OverlayModule, BidiModule2, CdkScrollableModule]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassMetadata(MatMenuModule, [{
            type: NgModule2,
            args: [{
                    imports: [MatRippleModule, OverlayModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, MatContextMenuTrigger],
                    exports: [BidiModule2, CdkScrollableModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, MatContextMenuTrigger]
                }]
        }], null, null);
})();
export { MAT_MENU_CONTENT, MAT_MENU_DEFAULT_OPTIONS, MAT_MENU_PANEL, MAT_MENU_SCROLL_STRATEGY, MENU_PANEL_TOP_PADDING, MatContextMenuTrigger, MatMenu, MatMenuContent, MatMenuItem, MatMenuModule, MatMenuTrigger };
//# sourceMappingURL=_angular_material_menu.yvw7t3hdjj-dev.js.map
