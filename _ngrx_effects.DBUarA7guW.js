var B = Object.defineProperty;
var T = Object.getOwnPropertySymbols;
var z = Object.prototype.hasOwnProperty, K = Object.prototype.propertyIsEnumerable;
var _ = (t, r, e) => r in t ? B(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, l = (t, r) => { for (var e in r ||= {})
    z.call(r, e) && _(t, e, r[e]); if (T)
    for (var e of T(r))
        K.call(r, e) && _(t, e, r[e]); return t; };
import "rxjs";
import { merge as A, Observable as Y, Subject as J } from "rxjs";
import { ignoreElements as L, materialize as X, map as g, catchError as q, filter as v, groupBy as C, mergeMap as b, exhaustMap as Q, dematerialize as W, take as Z } from "rxjs/operators";
import * as o from "@angular/core";
import { InjectionToken as d, inject as u, makeEnvironmentProviders as tt, provideEnvironmentInitializer as et } from "@angular/core";
import * as a from "@ngrx/store";
import { ScannedActionsSubject as nt, createAction as rt, ROOT_STORE_PROVIDER as ot, FEATURE_STATE_PROVIDER as st, Store as it } from "@ngrx/store";
var ft = { dispatch: !0, functional: !1, useEffectsErrorHandler: !0 }, p = "__@ngrx/effects_create__";
function Ht(t, r = {}) { let e = r.functional ? t : t(), n = l(l({}, ft), r); return Object.defineProperty(e, p, { value: n }), e; }
function ct(t) { return Object.getOwnPropertyNames(t).filter(n => t[n] && t[n].hasOwnProperty(p) ? t[n][p].hasOwnProperty("dispatch") : !1).map(n => { let s = t[n][p]; return l({ propertyName: n }, s); }); }
function kt(t) { return x(t).reduce((r, { propertyName: e, dispatch: n, useEffectsErrorHandler: s }) => (r[e] = { dispatch: n, useEffectsErrorHandler: s }, r), {}); }
function x(t) { return ct(t); }
function P(t) { return Object.getPrototypeOf(t); }
function ut(t) { return !!t.constructor && t.constructor.name !== "Object" && t.constructor.name !== "Function"; }
function S(t) { return typeof t == "function"; }
function F(t) { return t.filter(S); }
function at(t) { return t instanceof d || S(t); }
function dt(t, r, e) { let n = P(t), i = !!n && n.constructor.name !== "Object" ? n.constructor.name : null, c = x(t).map(({ propertyName: f, dispatch: I, useEffectsErrorHandler: h }) => { let O = typeof t[f] == "function" ? t[f]() : t[f], j = h ? e(O, r) : O; return I === !1 ? j.pipe(L()) : j.pipe(X()).pipe(g(V => ({ effect: t[f], notification: V, propertyName: f, sourceName: i, sourceInstance: t }))); }); return A(...c); }
var lt = 10;
function $(t, r, e = lt) { return t.pipe(q(n => (r && r.handleError(n), e <= 1 ? t : $(t, r, e - 1)))); }
var Vt = (() => { class t extends Y {
    constructor(e) { super(), e && (this.source = e); }
    lift(e) { let n = new t; return n.source = this, n.operator = e, n; }
    static { this.\u0275fac = function (n) { return new (n || t)(o.\u0275\u0275inject(nt)); }; }
    static { this.\u0275prov = o.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); }
} return t; })();
function Bt(...t) { return v(r => t.some(e => typeof e == "string" ? e === r.type : e.type === r.type)); }
var N = new d("@ngrx/effects Internal Root Guard"), E = new d("@ngrx/effects User Provided Effects"), y = new d("@ngrx/effects Internal Root Effects"), U = new d("@ngrx/effects Internal Root Effects Instances"), D = new d("@ngrx/effects Internal Feature Effects"), G = new d("@ngrx/effects Internal Feature Effects Instance Groups"), Et = new d("@ngrx/effects Effects Error Handler", { providedIn: "root", factory: () => $ }), H = "@ngrx/effects/init", pt = rt(H);
function ht(t, r) { if (t.notification.kind === "N") {
    let e = t.notification.value;
    !gt(e) && r.handleError(new Error(`Effect ${vt(t)} dispatched an invalid action: ${Ft(e)}`));
} }
function gt(t) { return typeof t != "function" && t && t.type && typeof t.type == "string"; }
function vt({ propertyName: t, sourceInstance: r, sourceName: e }) { let n = typeof r[t] == "function"; return !!e ? `"${e}.${String(t)}${n ? "()" : ""}"` : `"${String(t)}()"`; }
function Ft(t) { try {
    return JSON.stringify(t);
}
catch {
    return t;
} }
var yt = "ngrxOnIdentifyEffects";
function St(t) { return M(t, yt); }
var Mt = "ngrxOnRunEffects";
function Rt(t) { return M(t, Mt); }
var mt = "ngrxOnInitEffects";
function It(t) { return M(t, mt); }
function M(t, r) { return t && r in t && typeof t[r] == "function"; }
var R = (() => { class t extends J {
    constructor(e, n) { super(), this.errorHandler = e, this.effectsErrorHandler = n; }
    addEffects(e) { this.next(e); }
    toActions() { return this.pipe(C(e => ut(e) ? P(e) : e), b(e => e.pipe(C(Ot))), b(e => { let n = e.pipe(Q(i => jt(this.errorHandler, this.effectsErrorHandler)(i)), g(i => (ht(i, this.errorHandler), i.notification)), v(i => i.kind === "N" && i.value != null), W()), s = e.pipe(Z(1), v(It), g(i => i.ngrxOnInitEffects())); return A(n, s); })); }
    static { this.\u0275fac = function (n) { return new (n || t)(o.\u0275\u0275inject(o.ErrorHandler), o.\u0275\u0275inject(Et)); }; }
    static { this.\u0275prov = o.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); }
} return t; })();
function Ot(t) { return St(t) ? t.ngrxOnIdentifyEffects() : ""; }
function jt(t, r) { return e => { let n = dt(e, t, r); return Rt(e) ? e.ngrxOnRunEffects(n) : n; }; }
var m = (() => { class t {
    get isStarted() { return !!this.effectsSubscription; }
    constructor(e, n) { this.effectSources = e, this.store = n, this.effectsSubscription = null; }
    start() { this.effectsSubscription || (this.effectsSubscription = this.effectSources.toActions().subscribe(this.store)); }
    ngOnDestroy() { this.effectsSubscription && (this.effectsSubscription.unsubscribe(), this.effectsSubscription = null); }
    static { this.\u0275fac = function (n) { return new (n || t)(o.\u0275\u0275inject(R), o.\u0275\u0275inject(a.Store)); }; }
    static { this.\u0275prov = o.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); }
} return t; })(), k = (() => { class t {
    constructor(e, n, s, i, c, f, I) { this.sources = e, n.start(); for (let h of i)
        e.addEffects(h); s.dispatch({ type: H }); }
    addEffects(e) { this.sources.addEffects(e); }
    static { this.\u0275fac = function (n) { return new (n || t)(o.\u0275\u0275inject(R), o.\u0275\u0275inject(m), o.\u0275\u0275inject(a.Store), o.\u0275\u0275inject(U), o.\u0275\u0275inject(a.StoreRootModule, 8), o.\u0275\u0275inject(a.StoreFeatureModule, 8), o.\u0275\u0275inject(N, 8)); }; }
    static { this.\u0275mod = o.\u0275\u0275defineNgModule({ type: t }); }
    static { this.\u0275inj = o.\u0275\u0275defineInjector({}); }
} return t; })(), Tt = (() => { class t {
    constructor(e, n, s, i) { let c = n.flat(); for (let f of c)
        e.addEffects(f); }
    static { this.\u0275fac = function (n) { return new (n || t)(o.\u0275\u0275inject(k), o.\u0275\u0275inject(G), o.\u0275\u0275inject(a.StoreRootModule, 8), o.\u0275\u0275inject(a.StoreFeatureModule, 8)); }; }
    static { this.\u0275mod = o.\u0275\u0275defineNgModule({ type: t }); }
    static { this.\u0275inj = o.\u0275\u0275defineInjector({}); }
} return t; })(), zt = (() => { class t {
    static forFeature(...e) { let n = e.flat(), s = F(n); return { ngModule: Tt, providers: [s, { provide: D, multi: !0, useValue: n }, { provide: E, multi: !0, useValue: [] }, { provide: G, multi: !0, useFactory: w, deps: [D, E] }] }; }
    static forRoot(...e) { let n = e.flat(), s = F(n); return { ngModule: k, providers: [s, { provide: y, useValue: [n] }, { provide: N, useFactory: _t }, { provide: E, multi: !0, useValue: [] }, { provide: U, useFactory: w, deps: [y, E] }] }; }
    static { this.\u0275fac = function (n) { return new (n || t); }; }
    static { this.\u0275mod = o.\u0275\u0275defineNgModule({ type: t }); }
    static { this.\u0275inj = o.\u0275\u0275defineInjector({}); }
} return t; })();
function w(t, r) { let e = []; for (let n of t)
    e.push(...n); for (let n of r)
    e.push(...n); return e.map(n => at(n) ? u(n) : n); }
function _t() { let t = u(m, { optional: !0, skipSelf: !0 }), r = u(y, { self: !0 }); if (!(r.length === 1 && r[0].length === 0) && t)
    throw new TypeError("EffectsModule.forRoot() called twice. Feature modules should use EffectsModule.forFeature() instead."); return "guarded"; }
function Kt(...t) { let r = t.flat(), e = F(r); return tt([e, et(() => { u(ot), u(st, { optional: !0 }); let n = u(m), s = u(R), i = !n.isStarted; i && n.start(); for (let c of r) {
        let f = S(c) ? u(c) : c;
        s.addEffects(f);
    } i && u(it).dispatch(pt()); })]); }
export { Vt as Actions, Et as EFFECTS_ERROR_HANDLER, R as EffectSources, Tt as EffectsFeatureModule, zt as EffectsModule, k as EffectsRootModule, m as EffectsRunner, H as ROOT_EFFECTS_INIT, E as USER_PROVIDED_EFFECTS, Ht as createEffect, $ as defaultEffectsErrorHandler, kt as getEffectsMetadata, dt as mergeEffects, Bt as ofType, Kt as provideEffects, pt as rootEffectsInit };
