import { b as M, d as y } from "@nf-internal/chunk-OJNEDTQ2";
import { a as p, c as T } from "@nf-internal/chunk-MQ6KVUBG";
import { a as f, b as F, c as _ } from "@nf-internal/chunk-FVDLKYOC";
import { a as v } from "@nf-internal/chunk-7RHXFCZM";
import * as o from "@angular/core";
import { InjectionToken as E, forwardRef as X, inject as a, NgZone as x, RendererFactory2 as P, ElementRef as O, Renderer2 as J, DOCUMENT as A, ChangeDetectorRef as ee, signal as D, Injector as te, effect as ie, ApplicationRef as ne, DestroyRef as re, untracked as oe, afterNextRender as se, booleanAttribute as le, ViewContainerRef as ae, TemplateRef as ce, IterableDiffers as de } from "@angular/core";
import { Subject as u, of as N, Observable as W, Subscription as he, animationFrameScheduler as ue, asapScheduler as fe, isObservable as _e } from "rxjs";
import { distinctUntilChanged as j, auditTime as z, filter as U, startWith as H, takeUntil as b, pairwise as pe, switchMap as ge, shareReplay as me } from "rxjs/operators";
import { isObservable as Q, of as K } from "rxjs";
import { ConnectableObservable as Y } from "rxjs";
var w = class {
};
function B(i) { return i && typeof i.connect == "function" && !(i instanceof Y); }
var C = class extends w {
    _data;
    constructor(l) { super(), this._data = l; }
    connect() { return Q(this._data) ? this._data : K(this._data); }
    disconnect() { }
}, g = (function (i) { return i[i.REPLACED = 0] = "REPLACED", i[i.INSERTED = 1] = "INSERTED", i[i.MOVED = 2] = "MOVED", i[i.REMOVED = 3] = "REMOVED", i; })(g || {}), S = class {
    viewCacheSize = 20;
    _viewCache = [];
    applyChanges(l, e, t, n, r) { l.forEachOperation((s, h, c) => { let d, m; if (s.previousIndex == null) {
        let q = () => t(s, h, c);
        d = this._insertView(q, c, e, n(s)), m = d ? g.INSERTED : g.REPLACED;
    }
    else
        c == null ? (this._detachAndCacheView(h, e), m = g.REMOVED) : (d = this._moveView(h, c, e, n(s)), m = g.MOVED); r && r({ context: d?.context, operation: m, record: s }); }); }
    detach() { for (let l of this._viewCache)
        l.destroy(); this._viewCache = []; }
    _insertView(l, e, t, n) { let r = this._insertViewFromCache(e, t); if (r) {
        r.context.$implicit = n;
        return;
    } let s = l(); return t.createEmbeddedView(s.templateRef, s.context, s.index); }
    _detachAndCacheView(l, e) { let t = e.detach(l); this._maybeCacheView(t, e); }
    _moveView(l, e, t, n) { let r = t.get(l); return t.move(r, e), r.context.$implicit = n, r; }
    _maybeCacheView(l, e) { if (this._viewCache.length < this.viewCacheSize)
        this._viewCache.push(l);
    else {
        let t = e.indexOf(l);
        t === -1 ? l.destroy() : e.remove(t);
    } }
    _insertViewFromCache(l, e) { let t = this._viewCache.pop(); return t && e.insert(t, l), t || null; }
};
import "@angular/common";
var ve = ["contentWrapper"], we = ["*"], Z = new E("VIRTUAL_SCROLL_STRATEGY"), k = class {
    _scrolledIndexChange = new u;
    scrolledIndexChange = this._scrolledIndexChange.pipe(j());
    _viewport = null;
    _itemSize;
    _minBufferPx;
    _maxBufferPx;
    constructor(l, e, t) { this._itemSize = l, this._minBufferPx = e, this._maxBufferPx = t; }
    attach(l) { this._viewport = l, this._updateTotalContentSize(), this._updateRenderedRange(); }
    detach() { this._scrolledIndexChange.complete(), this._viewport = null; }
    updateItemAndBufferSize(l, e, t) { t < e, this._itemSize = l, this._minBufferPx = e, this._maxBufferPx = t, this._updateTotalContentSize(), this._updateRenderedRange(); }
    onContentScrolled() { this._updateRenderedRange(); }
    onDataLengthChanged() { this._updateTotalContentSize(), this._updateRenderedRange(); }
    onContentRendered() { }
    onRenderedOffsetChanged() { }
    scrollToIndex(l, e) { this._viewport && this._viewport.scrollToOffset(l * this._itemSize, e); }
    _updateTotalContentSize() { this._viewport && this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize); }
    _updateRenderedRange() { if (!this._viewport)
        return; let l = this._viewport.getRenderedRange(), e = { start: l.start, end: l.end }, t = this._viewport.getViewportSize(), n = this._viewport.getDataLength(), r = this._viewport.measureScrollOffset(), s = this._itemSize > 0 ? r / this._itemSize : 0; if (e.end > n) {
        let c = Math.ceil(t / this._itemSize), d = Math.max(0, Math.min(s, n - c));
        s != d && (s = d, r = d * this._itemSize, e.start = Math.floor(s)), e.end = Math.max(0, Math.min(n, e.start + c));
    } let h = r - e.start * this._itemSize; if (h < this._minBufferPx && e.start != 0) {
        let c = Math.ceil((this._maxBufferPx - h) / this._itemSize);
        e.start = Math.max(0, e.start - c), e.end = Math.min(n, Math.ceil(s + (t + this._minBufferPx) / this._itemSize));
    }
    else {
        let c = e.end * this._itemSize - (r + t);
        if (c < this._minBufferPx && e.end != n) {
            let d = Math.ceil((this._maxBufferPx - c) / this._itemSize);
            d > 0 && (e.end = Math.min(n, e.end + d), e.start = Math.max(0, Math.floor(s - this._minBufferPx / this._itemSize)));
        }
    } this._viewport.setRenderedRange(e), this._viewport.setRenderedContentOffset(Math.round(this._itemSize * e.start)), this._scrolledIndexChange.next(Math.floor(s)); }
};
function Ce(i) { return i._scrollStrategy; }
var Je = (() => { class i {
    get itemSize() { return this._itemSize; }
    set itemSize(e) { this._itemSize = p(e); }
    _itemSize = 20;
    get minBufferPx() { return this._minBufferPx; }
    set minBufferPx(e) { this._minBufferPx = p(e); }
    _minBufferPx = 100;
    get maxBufferPx() { return this._maxBufferPx; }
    set maxBufferPx(e) { this._maxBufferPx = p(e); }
    _maxBufferPx = 200;
    _scrollStrategy = new k(this.itemSize, this.minBufferPx, this.maxBufferPx);
    ngOnChanges() { this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx); }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275dir = o.\u0275\u0275defineDirective({ type: i, selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]], inputs: { itemSize: "itemSize", minBufferPx: "minBufferPx", maxBufferPx: "maxBufferPx" }, features: [o.\u0275\u0275ProvidersFeature([{ provide: Z, useFactory: Ce, deps: [X(() => i)] }]), o.\u0275\u0275NgOnChangesFeature] });
} return i; })(), Se = 20, Re = (() => { class i {
    _ngZone = a(x);
    _platform = a(v);
    _renderer = a(P).createRenderer(null, null);
    _cleanupGlobalListener;
    constructor() { }
    _scrolled = new u;
    _scrolledCount = 0;
    scrollContainers = new Map;
    register(e) { this.scrollContainers.has(e) || this.scrollContainers.set(e, e.elementScrolled().subscribe(() => this._scrolled.next(e))); }
    deregister(e) { let t = this.scrollContainers.get(e); t && (t.unsubscribe(), this.scrollContainers.delete(e)); }
    scrolled(e = Se) { return this._platform.isBrowser ? new W(t => { this._cleanupGlobalListener || (this._cleanupGlobalListener = this._ngZone.runOutsideAngular(() => this._renderer.listen("document", "scroll", () => this._scrolled.next()))); let n = e > 0 ? this._scrolled.pipe(z(e)).subscribe(t) : this._scrolled.subscribe(t); return this._scrolledCount++, () => { n.unsubscribe(), this._scrolledCount--, this._scrolledCount || (this._cleanupGlobalListener?.(), this._cleanupGlobalListener = void 0); }; }) : N(); }
    ngOnDestroy() { this._cleanupGlobalListener?.(), this._cleanupGlobalListener = void 0, this.scrollContainers.forEach((e, t) => this.deregister(t)), this._scrolled.complete(); }
    ancestorScrolled(e, t) { let n = this.getAncestorScrollContainers(e); return this.scrolled(t).pipe(U(r => !r || n.indexOf(r) > -1)); }
    getAncestorScrollContainers(e) { let t = []; return this.scrollContainers.forEach((n, r) => { this._scrollableContainsElement(r, e) && t.push(r); }), t; }
    _scrollableContainsElement(e, t) { let n = T(t), r = e.getElementRef().nativeElement; do
        if (n == r)
            return !0;
    while (n = n.parentElement); return !1; }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275prov = o.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" });
} return i; })(), G = (() => { class i {
    elementRef = a(O);
    scrollDispatcher = a(Re);
    ngZone = a(x);
    dir = a(M, { optional: !0 });
    _scrollElement = this.elementRef.nativeElement;
    _destroyed = new u;
    _renderer = a(J);
    _cleanupScroll;
    _elementScrolled = new u;
    constructor() { }
    ngOnInit() { this._cleanupScroll = this.ngZone.runOutsideAngular(() => this._renderer.listen(this._scrollElement, "scroll", e => this._elementScrolled.next(e))), this.scrollDispatcher.register(this); }
    ngOnDestroy() { this._cleanupScroll?.(), this._elementScrolled.complete(), this.scrollDispatcher.deregister(this), this._destroyed.next(), this._destroyed.complete(); }
    elementScrolled() { return this._elementScrolled; }
    getElementRef() { return this.elementRef; }
    scrollTo(e) { let t = this.elementRef.nativeElement, n = this.dir && this.dir.value == "rtl"; e.left == null && (e.left = n ? e.end : e.start), e.right == null && (e.right = n ? e.start : e.end), e.bottom != null && (e.top = t.scrollHeight - t.clientHeight - e.bottom), n && _() != f.NORMAL ? (e.left != null && (e.right = t.scrollWidth - t.clientWidth - e.left), _() == f.INVERTED ? e.left = e.right : _() == f.NEGATED && (e.left = e.right ? -e.right : e.right)) : e.right != null && (e.left = t.scrollWidth - t.clientWidth - e.right), this._applyScrollToOptions(e); }
    _applyScrollToOptions(e) { let t = this.elementRef.nativeElement; F() ? t.scrollTo(e) : (e.top != null && (t.scrollTop = e.top), e.left != null && (t.scrollLeft = e.left)); }
    measureScrollOffset(e) { let t = "left", n = "right", r = this.elementRef.nativeElement; if (e == "top")
        return r.scrollTop; if (e == "bottom")
        return r.scrollHeight - r.clientHeight - r.scrollTop; let s = this.dir && this.dir.value == "rtl"; return e == "start" ? e = s ? n : t : e == "end" && (e = s ? t : n), s && _() == f.INVERTED ? e == t ? r.scrollWidth - r.clientWidth - r.scrollLeft : r.scrollLeft : s && _() == f.NEGATED ? e == t ? r.scrollLeft + r.scrollWidth - r.clientWidth : -r.scrollLeft : e == t ? r.scrollLeft : r.scrollWidth - r.clientWidth - r.scrollLeft; }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275dir = o.\u0275\u0275defineDirective({ type: i, selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]] });
} return i; })(), xe = 20, ye = (() => { class i {
    _platform = a(v);
    _listeners;
    _viewportSize = null;
    _change = new u;
    _document = a(A);
    constructor() { let e = a(x), t = a(P).createRenderer(null, null); e.runOutsideAngular(() => { if (this._platform.isBrowser) {
        let n = r => this._change.next(r);
        this._listeners = [t.listen("window", "resize", n), t.listen("window", "orientationchange", n)];
    } this.change().subscribe(() => this._viewportSize = null); }); }
    ngOnDestroy() { this._listeners?.forEach(e => e()), this._change.complete(); }
    getViewportSize() { this._viewportSize || this._updateViewportSize(); let e = { width: this._viewportSize.width, height: this._viewportSize.height }; return this._platform.isBrowser || (this._viewportSize = null), e; }
    getViewportRect() { let e = this.getViewportScrollPosition(), { width: t, height: n } = this.getViewportSize(); return { top: e.top, left: e.left, bottom: e.top + n, right: e.left + t, height: n, width: t }; }
    getViewportScrollPosition() { if (!this._platform.isBrowser)
        return { top: 0, left: 0 }; let e = this._document, t = this._getWindow(), n = e.documentElement, r = n.getBoundingClientRect(), s = -r.top || e.body?.scrollTop || t.scrollY || n.scrollTop || 0, h = -r.left || e.body?.scrollLeft || t.scrollX || n.scrollLeft || 0; return { top: s, left: h }; }
    change(e = xe) { return e > 0 ? this._change.pipe(z(e)) : this._change; }
    _getWindow() { return this._document.defaultView || window; }
    _updateViewportSize() { let e = this._getWindow(); this._viewportSize = this._platform.isBrowser ? { width: e.innerWidth, height: e.innerHeight } : { width: 0, height: 0 }; }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275prov = o.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" });
} return i; })(), R = new E("VIRTUAL_SCROLLABLE"), V = (() => { class i extends G {
    constructor() { super(); }
    measureViewportSize(e) { let t = this.elementRef.nativeElement; return e === "horizontal" ? t.clientWidth : t.clientHeight; }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275dir = o.\u0275\u0275defineDirective({ type: i, features: [o.\u0275\u0275InheritDefinitionFeature] });
} return i; })();
function De(i, l) { return i.start == l.start && i.end == l.end; }
var be = typeof requestAnimationFrame < "u" ? ue : fe, $ = new E("CDK_VIRTUAL_SCROLL_VIEWPORT"), et = (() => {
    class i extends V {
        elementRef = a(O);
        _changeDetectorRef = a(ee);
        _scrollStrategy = a(Z, { optional: !0 });
        scrollable = a(R, { optional: !0 });
        _platform = a(v);
        _detachedSubject = new u;
        _renderedRangeSubject = new u;
        _renderedContentOffsetSubject = new u;
        get orientation() { return this._orientation; }
        set orientation(e) { this._orientation !== e && (this._orientation = e, this._calculateSpacerSize()); }
        _orientation = "vertical";
        appendOnly = !1;
        scrolledIndexChange = new W(e => this._scrollStrategy.scrolledIndexChange.subscribe(t => Promise.resolve().then(() => this.ngZone.run(() => e.next(t)))));
        _contentWrapper;
        renderedRangeStream = this._renderedRangeSubject;
        renderedContentOffset = this._renderedContentOffsetSubject.pipe(U(e => e !== null), j());
        _totalContentSize = 0;
        _totalContentWidth = D("");
        _totalContentHeight = D("");
        _renderedContentTransform;
        _renderedRange = { start: 0, end: 0 };
        _dataLength = 0;
        _viewportSize = 0;
        _forOf = null;
        _renderedContentOffset = 0;
        _renderedContentOffsetNeedsRewrite = !1;
        _changeDetectionNeeded = D(!1);
        _runAfterChangeDetection = [];
        _viewportChanges = he.EMPTY;
        _injector = a(te);
        _isDestroyed = !1;
        constructor() { super(); let e = a(ye); this._scrollStrategy, this._viewportChanges = e.change().subscribe(() => { this.checkViewportSize(); }), this.scrollable || (this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable"), this.scrollable = this); let t = ie(() => { this._changeDetectionNeeded() && this._doChangeDetection(); }, { injector: a(ne).injector }); a(re).onDestroy(() => { t.destroy(); }); }
        ngOnInit() { this._platform.isBrowser && (this.scrollable === this && super.ngOnInit(), this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => { this._measureViewportSize(), this._scrollStrategy.attach(this), this.scrollable.elementScrolled().pipe(H(null), z(0, be), b(this._destroyed)).subscribe(() => this._scrollStrategy.onContentScrolled()), this._markChangeDetectionNeeded(); }))); }
        ngOnDestroy() { this.detach(), this._scrollStrategy.detach(), this._renderedRangeSubject.complete(), this._detachedSubject.complete(), this._viewportChanges.unsubscribe(), this._isDestroyed = !0, super.ngOnDestroy(); }
        attach(e) { this._forOf, this.ngZone.runOutsideAngular(() => { this._forOf = e, this._forOf.dataStream.pipe(b(this._detachedSubject)).subscribe(t => { let n = t.length; n !== this._dataLength && (this._dataLength = n, this._scrollStrategy.onDataLengthChanged()), this._doChangeDetection(); }); }); }
        detach() { this._forOf = null, this._detachedSubject.next(); }
        getDataLength() { return this._dataLength; }
        getViewportSize() { return this._viewportSize; }
        getRenderedRange() { return this._renderedRange; }
        measureBoundingClientRectWithScrollOffset(e) { return this.getElementRef().nativeElement.getBoundingClientRect()[e]; }
        setTotalContentSize(e) { this._totalContentSize !== e && (this._totalContentSize = e, this._calculateSpacerSize(), this._markChangeDetectionNeeded()); }
        setRenderedRange(e) { De(this._renderedRange, e) || (this.appendOnly && (e = { start: 0, end: Math.max(this._renderedRange.end, e.end) }), this._renderedRangeSubject.next(this._renderedRange = e), this._markChangeDetectionNeeded(() => this._scrollStrategy.onContentRendered())); }
        getOffsetToRenderedContentStart() { return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset; }
        setRenderedContentOffset(e, t = "to-start") { e = this.appendOnly && t === "to-start" ? 0 : e; let n = this.dir && this.dir.value == "rtl", r = this.orientation == "horizontal", s = r ? "X" : "Y", c = `translate${s}(${Number((r && n ? -1 : 1) * e)}px)`; this._renderedContentOffset = e, t === "to-end" && (c += ` translate${s}(-100%)`, this._renderedContentOffsetNeedsRewrite = !0), this._renderedContentTransform != c && (this._renderedContentTransform = c, this._markChangeDetectionNeeded(() => { this._renderedContentOffsetNeedsRewrite ? (this._renderedContentOffset -= this.measureRenderedContentSize(), this._renderedContentOffsetNeedsRewrite = !1, this.setRenderedContentOffset(this._renderedContentOffset)) : this._scrollStrategy.onRenderedOffsetChanged(); })); }
        scrollToOffset(e, t = "auto") { let n = { behavior: t }; this.orientation === "horizontal" ? n.start = e : n.top = e, this.scrollable.scrollTo(n); }
        scrollToIndex(e, t = "auto") { this._scrollStrategy.scrollToIndex(e, t); }
        measureScrollOffset(e) { let t; return this.scrollable == this ? t = n => super.measureScrollOffset(n) : t = n => this.scrollable.measureScrollOffset(n), Math.max(0, t(e ?? (this.orientation === "horizontal" ? "start" : "top")) - this.measureViewportOffset()); }
        measureViewportOffset(e) { let t, n = "left", r = "right", s = this.dir?.value == "rtl"; e == "start" ? t = s ? r : n : e == "end" ? t = s ? n : r : e ? t = e : t = this.orientation === "horizontal" ? "left" : "top"; let h = this.scrollable.measureBoundingClientRectWithScrollOffset(t); return this.elementRef.nativeElement.getBoundingClientRect()[t] - h; }
        measureRenderedContentSize() { let e = this._contentWrapper.nativeElement; return this.orientation === "horizontal" ? e.offsetWidth : e.offsetHeight; }
        measureRangeSize(e) { return this._forOf ? this._forOf.measureRangeSize(e, this.orientation) : 0; }
        checkViewportSize() { this._measureViewportSize(), this._scrollStrategy.onDataLengthChanged(); }
        _measureViewportSize() { this._viewportSize = this.scrollable.measureViewportSize(this.orientation); }
        _markChangeDetectionNeeded(e) { e && this._runAfterChangeDetection.push(e), !oe(this._changeDetectionNeeded) && this.ngZone.runOutsideAngular(() => { Promise.resolve().then(() => { this.ngZone.run(() => { this._changeDetectionNeeded.set(!0); }); }); }); }
        _doChangeDetection() { this._isDestroyed || this.ngZone.run(() => { this._changeDetectorRef.markForCheck(), this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform, this._renderedContentOffsetSubject.next(this.getOffsetToRenderedContentStart()), se(() => { this._changeDetectionNeeded.set(!1); let e = this._runAfterChangeDetection; this._runAfterChangeDetection = []; for (let t of e)
            t(); }, { injector: this._injector }); }); }
        _calculateSpacerSize() { this._totalContentHeight.set(this.orientation === "horizontal" ? "" : `${this._totalContentSize}px`), this._totalContentWidth.set(this.orientation === "horizontal" ? `${this._totalContentSize}px` : ""); }
        static \u0275fac = function (t) { return new (t || i); };
        static \u0275cmp = o.\u0275\u0275defineComponent({ type: i, selectors: [["cdk-virtual-scroll-viewport"]], viewQuery: function (t, n) { if (t & 1 && o.\u0275\u0275viewQuery(ve, 7), t & 2) {
                let r;
                o.\u0275\u0275queryRefresh(r = o.\u0275\u0275loadQuery()) && (n._contentWrapper = r.first);
            } }, hostAttrs: [1, "cdk-virtual-scroll-viewport"], hostVars: 4, hostBindings: function (t, n) { t & 2 && o.\u0275\u0275classProp("cdk-virtual-scroll-orientation-horizontal", n.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", n.orientation !== "horizontal"); }, inputs: { orientation: "orientation", appendOnly: [2, "appendOnly", "appendOnly", le] }, outputs: { scrolledIndexChange: "scrolledIndexChange" }, features: [o.\u0275\u0275ProvidersFeature([{ provide: G, useFactory: () => a(R, { optional: !0 }) || a(i) }, { provide: $, useExisting: i }]), o.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: we, decls: 4, vars: 4, consts: [["contentWrapper", ""], [1, "cdk-virtual-scroll-content-wrapper"], [1, "cdk-virtual-scroll-spacer"]], template: function (t, n) { t & 1 && (o.\u0275\u0275projectionDef(), o.\u0275\u0275domElementStart(0, "div", 1, 0), o.\u0275\u0275projection(2), o.\u0275\u0275domElementEnd(), o.\u0275\u0275domElement(3, "div", 2)), t & 2 && (o.\u0275\u0275advance(3), o.\u0275\u0275styleProp("width", n._totalContentWidth())("height", n._totalContentHeight())); }, styles: [`cdk-virtual-scroll-viewport {
  display: block;
  position: relative;
  transform: translateZ(0);
}

.cdk-virtual-scrollable {
  overflow: auto;
  will-change: scroll-position;
  contain: strict;
}

.cdk-virtual-scroll-content-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  contain: content;
}
[dir=rtl] .cdk-virtual-scroll-content-wrapper {
  right: 0;
  left: auto;
}

.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper {
  min-height: 100%;
}
.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > dl:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > ol:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > table:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > ul:not([cdkVirtualFor]) {
  padding-left: 0;
  padding-right: 0;
  margin-left: 0;
  margin-right: 0;
  border-left-width: 0;
  border-right-width: 0;
  outline: none;
}

.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper {
  min-width: 100%;
}
.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > dl:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > ol:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > table:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > ul:not([cdkVirtualFor]) {
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 0;
  margin-bottom: 0;
  border-top-width: 0;
  border-bottom-width: 0;
  outline: none;
}

.cdk-virtual-scroll-spacer {
  height: 1px;
  transform-origin: 0 0;
  flex: 0 0 auto;
}
[dir=rtl] .cdk-virtual-scroll-spacer {
  transform-origin: 100% 0;
}
`], encapsulation: 2 });
    }
    return i;
})();
function L(i, l, e) { let t = e; if (!t.getBoundingClientRect)
    return 0; let n = t.getBoundingClientRect(); return i === "horizontal" ? l === "start" ? n.left : n.right : l === "start" ? n.top : n.bottom; }
var tt = (() => { class i {
    _viewContainerRef = a(ae);
    _template = a(ce);
    _differs = a(de);
    _viewRepeater = new S;
    _viewport = a($, { skipSelf: !0 });
    viewChange = new u;
    _dataSourceChanges = new u;
    get cdkVirtualForOf() { return this._cdkVirtualForOf; }
    set cdkVirtualForOf(e) { this._cdkVirtualForOf = e, B(e) ? this._dataSourceChanges.next(e) : this._dataSourceChanges.next(new C(_e(e) ? e : Array.from(e || []))); }
    _cdkVirtualForOf;
    get cdkVirtualForTrackBy() { return this._cdkVirtualForTrackBy; }
    set cdkVirtualForTrackBy(e) { this._needsUpdate = !0, this._cdkVirtualForTrackBy = e ? (t, n) => e(t + (this._renderedRange ? this._renderedRange.start : 0), n) : void 0; }
    _cdkVirtualForTrackBy;
    set cdkVirtualForTemplate(e) { e && (this._needsUpdate = !0, this._template = e); }
    get cdkVirtualForTemplateCacheSize() { return this._viewRepeater.viewCacheSize; }
    set cdkVirtualForTemplateCacheSize(e) { this._viewRepeater.viewCacheSize = p(e); }
    dataStream = this._dataSourceChanges.pipe(H(null), pe(), ge(([e, t]) => this._changeDataSource(e, t)), me(1));
    _differ = null;
    _data = [];
    _renderedItems = [];
    _renderedRange = { start: 0, end: 0 };
    _needsUpdate = !1;
    _destroyed = new u;
    constructor() { let e = a(x); this.dataStream.subscribe(t => { this._data = t, this._onRenderedDataChange(); }), this._viewport.renderedRangeStream.pipe(b(this._destroyed)).subscribe(t => { this._renderedRange = t, this.viewChange.observers.length && e.run(() => this.viewChange.next(this._renderedRange)), this._onRenderedDataChange(); }), this._viewport.attach(this); }
    measureRangeSize(e, t) { if (e.start >= e.end)
        return 0; e.start < this._renderedRange.start || e.end > this._renderedRange.end; let n = e.start - this._renderedRange.start, r = e.end - e.start, s, h; for (let c = 0; c < r; c++) {
        let d = this._viewContainerRef.get(c + n);
        if (d && d.rootNodes.length) {
            s = h = d.rootNodes[0];
            break;
        }
    } for (let c = r - 1; c > -1; c--) {
        let d = this._viewContainerRef.get(c + n);
        if (d && d.rootNodes.length) {
            h = d.rootNodes[d.rootNodes.length - 1];
            break;
        }
    } return s && h ? L(t, "end", h) - L(t, "start", s) : 0; }
    ngDoCheck() { if (this._differ && this._needsUpdate) {
        let e = this._differ.diff(this._renderedItems);
        e ? this._applyChanges(e) : this._updateContext(), this._needsUpdate = !1;
    } }
    ngOnDestroy() { this._viewport.detach(), this._dataSourceChanges.next(void 0), this._dataSourceChanges.complete(), this.viewChange.complete(), this._destroyed.next(), this._destroyed.complete(), this._viewRepeater.detach(); }
    _onRenderedDataChange() { this._renderedRange && (this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end), this._differ || (this._differ = this._differs.find(this._renderedItems).create((e, t) => this.cdkVirtualForTrackBy ? this.cdkVirtualForTrackBy(e, t) : t)), this._needsUpdate = !0); }
    _changeDataSource(e, t) { return e && e.disconnect(this), this._needsUpdate = !0, t ? t.connect(this) : N(); }
    _updateContext() { let e = this._data.length, t = this._viewContainerRef.length; for (; t--;) {
        let n = this._viewContainerRef.get(t);
        n.context.index = this._renderedRange.start + t, n.context.count = e, this._updateComputedContextProperties(n.context), n.detectChanges();
    } }
    _applyChanges(e) { this._viewRepeater.applyChanges(e, this._viewContainerRef, (r, s, h) => this._getEmbeddedViewArgs(r, h), r => r.item), e.forEachIdentityChange(r => { let s = this._viewContainerRef.get(r.currentIndex); s.context.$implicit = r.item; }); let t = this._data.length, n = this._viewContainerRef.length; for (; n--;) {
        let r = this._viewContainerRef.get(n);
        r.context.index = this._renderedRange.start + n, r.context.count = t, this._updateComputedContextProperties(r.context);
    } }
    _updateComputedContextProperties(e) { e.first = e.index === 0, e.last = e.index === e.count - 1, e.even = e.index % 2 === 0, e.odd = !e.even; }
    _getEmbeddedViewArgs(e, t) { return { templateRef: this._template, context: { $implicit: e.item, cdkVirtualForOf: this._cdkVirtualForOf, index: -1, count: -1, first: !1, last: !1, odd: !1, even: !1 }, index: t }; }
    static ngTemplateContextGuard(e, t) { return !0; }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275dir = o.\u0275\u0275defineDirective({ type: i, selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]], inputs: { cdkVirtualForOf: "cdkVirtualForOf", cdkVirtualForTrackBy: "cdkVirtualForTrackBy", cdkVirtualForTemplate: "cdkVirtualForTemplate", cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize" } });
} return i; })(), it = (() => { class i extends V {
    constructor() { super(); }
    measureBoundingClientRectWithScrollOffset(e) { return this.getElementRef().nativeElement.getBoundingClientRect()[e] - this.measureScrollOffset(e); }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275dir = o.\u0275\u0275defineDirective({ type: i, selectors: [["", "cdkVirtualScrollingElement", ""]], hostAttrs: [1, "cdk-virtual-scrollable"], features: [o.\u0275\u0275ProvidersFeature([{ provide: R, useExisting: i }]), o.\u0275\u0275InheritDefinitionFeature] });
} return i; })(), nt = (() => { class i extends V {
    constructor() { super(); let e = a(A); this.elementRef = new O(e.documentElement), this._scrollElement = e; }
    measureBoundingClientRectWithScrollOffset(e) { return this.getElementRef().nativeElement.getBoundingClientRect()[e]; }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275dir = o.\u0275\u0275defineDirective({ type: i, selectors: [["cdk-virtual-scroll-viewport", "scrollWindow", ""]], features: [o.\u0275\u0275ProvidersFeature([{ provide: R, useExisting: i }]), o.\u0275\u0275InheritDefinitionFeature] });
} return i; })(), I = (() => { class i {
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275mod = o.\u0275\u0275defineNgModule({ type: i });
    static \u0275inj = o.\u0275\u0275defineInjector({});
} return i; })(), rt = (() => { class i {
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275mod = o.\u0275\u0275defineNgModule({ type: i });
    static \u0275inj = o.\u0275\u0275defineInjector({ imports: [y, I, y, I] });
} return i; })();
export { Z as a, k as b, Ce as c, Je as d, Se as e, Re as f, G as g, xe as h, ye as i, R as j, V as k, $ as l, et as m, tt as n, it as o, nt as p, I as q, rt as r };
