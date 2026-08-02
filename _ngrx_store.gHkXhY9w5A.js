var _e = Object.defineProperty, Me = Object.defineProperties;
var De = Object.getOwnPropertyDescriptors;
var Q = Object.getOwnPropertySymbols;
var ke = Object.prototype.hasOwnProperty, Ue = Object.prototype.propertyIsEnumerable;
var W = (e, r, t) => r in e ? _e(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, p = (e, r) => { for (var t in r ||= {})
    ke.call(r, t) && W(e, t, r[t]); if (Q)
    for (var t of Q(r))
        Ue.call(r, t) && W(e, t, r[t]); return e; }, R = (e, r) => Me(e, De(r));
import * as s from "@angular/core";
import { InjectionToken as u, Inject as pe, computed as Ne, effect as Pe, untracked as ze, inject as l, Injector as $e, isDevMode as ye, makeEnvironmentProviders as he, provideEnvironmentInitializer as Re } from "@angular/core";
import { BehaviorSubject as U, Observable as N, Subject as Ve, queueScheduler as Ke } from "rxjs";
import { observeOn as qe, withLatestFrom as Le, scan as Be, pluck as Ge, map as Ze, distinctUntilChanged as He } from "rxjs/operators";
import { toSignal as Ye } from "@angular/core/rxjs-interop";
var O = {};
function Qe(e, r) { if (O[e] = (O[e] || 0) + 1, typeof r == "function")
    return T(e, (...n) => R(p({}, r(...n)), { type: e })); switch (r ? r._as : "empty") {
    case "empty": return T(e, () => ({ type: e }));
    case "props": return T(e, n => R(p({}, n), { type: e }));
    default: throw new Error("Unexpected config.");
} }
function We() { return { _as: "props", _p: void 0 }; }
function nn(e) { }
function T(e, r) { return Object.defineProperty(r, "type", { value: e, writable: !1 }); }
function P(e) { return e.charAt(0).toUpperCase() + e.substring(1); }
function Je(e) { return e.charAt(0).toLowerCase() + e.substring(1); }
function Xe(e, r) { if (e == null)
    throw new Error(`${r} must be defined.`); }
function rn(e) { let { source: r, events: t } = e; return Object.keys(t).reduce((n, o) => R(p({}, n), { [et(o)]: Qe(tt(r, o), t[o]) }), {}); }
function on() { return We(); }
function et(e) { return e.trim().split(" ").map((r, t) => t === 0 ? Je(r) : P(r)).join(""); }
function tt(e, r) { return `[${e}] ${r}`; }
var me = "@ngrx/store/init", m = (() => {
    class e extends U {
        constructor() { super({ type: me }); }
        next(t) {
            if (typeof t == "function")
                throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);
            if (typeof t > "u")
                throw new TypeError("Actions must be objects");
            if (typeof t.type > "u")
                throw new TypeError("Actions must have a type property");
            super.next(t);
        }
        complete() { }
        ngOnDestroy() { super.complete(); }
        static { this.\u0275fac = function (n) { return new (n || e); }; }
        static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac }); }
    }
    return e;
})(), nt = [m], z = new u("@ngrx/store Internal Root Guard"), J = new u("@ngrx/store Internal Initial State"), $ = new u("@ngrx/store Initial State"), Ee = new u("@ngrx/store Reducer Factory"), X = new u("@ngrx/store Internal Reducer Factory Provider"), ve = new u("@ngrx/store Initial Reducers"), w = new u("@ngrx/store Internal Initial Reducers"), ee = new u("@ngrx/store Store Features"), te = new u("@ngrx/store Internal Store Reducers"), x = new u("@ngrx/store Internal Feature Reducers"), ne = new u("@ngrx/store Internal Feature Configs"), V = new u("@ngrx/store Internal Store Features"), re = new u("@ngrx/store Internal Feature Reducers Token"), K = new u("@ngrx/store Feature Reducers"), oe = new u("@ngrx/store User Provided Meta Reducers"), F = new u("@ngrx/store Meta Reducers"), ie = new u("@ngrx/store Internal Resolved Meta Reducers"), se = new u("@ngrx/store User Runtime Checks Config"), ce = new u("@ngrx/store Internal User Runtime Checks Config"), v = new u("@ngrx/store Internal Runtime Checks"), S = new u("@ngrx/store Check if Action types are unique"), C = new u("@ngrx/store Root Store Provider"), ue = new u("@ngrx/store Feature State Provider");
function q(e, r = {}) { let t = Object.keys(e), n = {}; for (let i = 0; i < t.length; i++) {
    let c = t[i];
    typeof e[c] == "function" && (n[c] = e[c]);
} let o = Object.keys(n); return function (c, d) { c = c === void 0 ? r : c; let f = !1, y = {}; for (let a = 0; a < o.length; a++) {
    let h = o[a], Ce = n[h], H = c[h], Y = Ce(H, d);
    y[h] = Y, f = f || Y !== H;
} return f ? y : c; }; }
function rt(e, r) { return Object.keys(e).filter(t => t !== r).reduce((t, n) => Object.assign(t, { [n]: e[n] }), {}); }
function ge(...e) { return function (r) { if (e.length === 0)
    return r; let t = e[e.length - 1]; return e.slice(0, -1).reduceRight((o, i) => i(o), t(r)); }; }
function Se(e, r) { return Array.isArray(r) && r.length > 0 && (e = ge.apply(null, [...r, e])), (t, n) => { let o = e(t); return (i, c) => (i = i === void 0 ? n : i, o(i, c)); }; }
function ot(e) { let r = Array.isArray(e) && e.length > 0 ? ge(...e) : t => t; return (t, n) => (t = r(t), (o, i) => (o = o === void 0 ? n : o, t(o, i))); }
var E = class extends N {
}, j = class extends m {
}, it = "@ngrx/store/update-reducers", g = (() => { class e extends U {
    get currentReducers() { return this.reducers; }
    constructor(t, n, o, i) { super(i(o, n)), this.dispatcher = t, this.initialState = n, this.reducers = o, this.reducerFactory = i; }
    addFeature(t) { this.addFeatures([t]); }
    addFeatures(t) { let n = t.reduce((o, { reducers: i, reducerFactory: c, metaReducers: d, initialState: f, key: y }) => { let a = typeof i == "function" ? ot(d)(i, f) : Se(c, d)(i, f); return o[y] = a, o; }, {}); this.addReducers(n); }
    removeFeature(t) { this.removeFeatures([t]); }
    removeFeatures(t) { this.removeReducers(t.map(n => n.key)); }
    addReducer(t, n) { this.addReducers({ [t]: n }); }
    addReducers(t) { this.reducers = p(p({}, this.reducers), t), this.updateReducers(Object.keys(t)); }
    removeReducer(t) { this.removeReducers([t]); }
    removeReducers(t) { t.forEach(n => { this.reducers = rt(this.reducers, n); }), this.updateReducers(t); }
    updateReducers(t) { this.next(this.reducerFactory(this.reducers, this.initialState)), this.dispatcher.next({ type: it, features: t }); }
    ngOnDestroy() { this.complete(); }
    static { this.\u0275fac = function (n) { return new (n || e)(s.\u0275\u0275inject(j), s.\u0275\u0275inject($), s.\u0275\u0275inject(ve), s.\u0275\u0275inject(Ee)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac }); }
} return e; })(), st = [g, { provide: E, useExisting: g }, { provide: j, useExisting: m }], b = (() => { class e extends Ve {
    ngOnDestroy() { this.complete(); }
    static { this.\u0275fac = (() => { let t; return function (o) { return (t || (t = s.\u0275\u0275getInheritedFactory(e)))(o || e); }; })(); }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac }); }
} return e; })(), ct = [b], I = class extends N {
}, ae = (() => { class e extends U {
    static { this.INIT = me; }
    constructor(t, n, o, i) { super(i); let d = t.pipe(qe(Ke)).pipe(Le(n)), f = { state: i }, y = d.pipe(Be(ut, f)); this.stateSubscription = y.subscribe(({ state: a, action: h }) => { this.next(a), o.next(h); }), this.state = Ye(this, { manualCleanup: !0, requireSync: !0 }); }
    ngOnDestroy() { this.stateSubscription.unsubscribe(), this.complete(); }
    static { this.\u0275fac = function (n) { return new (n || e)(s.\u0275\u0275inject(m), s.\u0275\u0275inject(E), s.\u0275\u0275inject(b), s.\u0275\u0275inject($)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac }); }
} return e; })();
function ut(e = { state: void 0 }, [r, t]) { let { state: n } = e; return { state: t(n, r), action: r }; }
var at = [ae, { provide: I, useExisting: ae }], A = (() => { class e extends N {
    constructor(t, n, o, i) { super(), this.actionsObserver = n, this.reducerManager = o, this.injector = i, this.source = t, this.state = t.state; }
    select(t, ...n) { return ft.call(null, t, ...n)(this); }
    selectSignal(t, n) { return Ne(() => t(this.state()), n); }
    lift(t) { let n = new e(this, this.actionsObserver, this.reducerManager); return n.operator = t, n; }
    dispatch(t, n) { if (typeof t == "function")
        return this.processDispatchFn(t, n); this.actionsObserver.next(t); }
    next(t) { this.actionsObserver.next(t); }
    error(t) { this.actionsObserver.error(t); }
    complete() { this.actionsObserver.complete(); }
    addReducer(t, n) { this.reducerManager.addReducer(t, n); }
    removeReducer(t) { this.reducerManager.removeReducer(t); }
    processDispatchFn(t, n) { Xe(this.injector, "Store Injector"); let o = n?.injector ?? lt() ?? this.injector; return Pe(() => { let i = t(); ze(() => this.dispatch(i)); }, { injector: o }); }
    static { this.\u0275fac = function (n) { return new (n || e)(s.\u0275\u0275inject(I), s.\u0275\u0275inject(m), s.\u0275\u0275inject(g), s.\u0275\u0275inject(s.Injector)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac }); }
} return e; })(), dt = [A];
function ft(e, r, ...t) { return function (o) { let i; if (typeof e == "string") {
    let c = [r, ...t].filter(Boolean);
    i = o.pipe(Ge(e, ...c));
}
else if (typeof e == "function")
    i = o.pipe(Ze(c => e(c, r)));
else
    throw new TypeError(`Unexpected type '${typeof e}' in select operator, expected 'string' or 'function'`); return i.pipe(He()); }; }
function lt() { try {
    return l($e);
}
catch {
    return;
} }
var L = "https://ngrx.io/guide/store/configuration/runtime-checks";
function de(e) { return e === void 0; }
function fe(e) { return e === null; }
function Fe(e) { return Array.isArray(e); }
function pt(e) { return typeof e == "string"; }
function yt(e) { return typeof e == "boolean"; }
function ht(e) { return typeof e == "number"; }
function je(e) { return typeof e == "object" && e !== null; }
function Rt(e) { return je(e) && !Fe(e); }
function Ie(e) { if (!Rt(e))
    return !1; let r = Object.getPrototypeOf(e); return r === Object.prototype || r === null; }
function _(e) { return typeof e == "function"; }
function mt(e) { return _(e) && e.hasOwnProperty("\u0275cmp"); }
function Et(e, r) { return Object.prototype.hasOwnProperty.call(e, r); }
var be = !1;
function sn(e) { be = e; }
function vt() { return be; }
function M(e, r) { return e === r; }
function gt(e, r, t) { for (let n = 0; n < e.length; n++)
    if (!t(e[n], r[n]))
        return !0; return !1; }
function cn(e, r) { return B(e, M, r); }
function B(e, r = M, t = M) { let n = null, o = null, i; function c() { n = null, o = null; } function d(a = void 0) { i = { result: a }; } function f() { i = void 0; } function y() { if (i !== void 0)
    return i.result; if (!n)
    return o = e.apply(null, arguments), n = arguments, o; if (!gt(arguments, n, r))
    return o; let a = e.apply(null, arguments); return n = arguments, t(o, a) ? o : (o = a, a); } return { memoized: y, reset: c, setResult: d, clearResult: f }; }
function Ae(...e) { return Ft(B)(...e); }
function St(e, r, t, n) { if (t === void 0) {
    let i = r.map(c => c(e));
    return n.memoized.apply(null, i);
} let o = r.map(i => i(e, t)); return n.memoized.apply(null, [...o, t]); }
function Ft(e, r = { stateFn: St }) { return function (...t) { let n = t; if (Array.isArray(n[0])) {
    let [a, ...h] = n;
    n = [...a, ...h];
}
else
    n.length === 1 && It(n[0]) && (n = bt(n[0])); let o = n.slice(0, n.length - 1), i = n[n.length - 1], c = o.filter(a => a.release && typeof a.release == "function"), d = e(function (...a) { return i.apply(null, a); }), f = B(function (a, h) { return r.stateFn.apply(null, [a, o, h, d]); }); function y() { f.reset(), d.reset(), c.forEach(a => a.release()); } return Object.assign(f.memoized, { release: y, projector: d.memoized, setResult: f.setResult, clearResult: f.clearResult }); }; }
function jt(e) { return Ae(r => { let t = r[e]; return !vt() && ye() && !(e in r) && console.warn(`@ngrx/store: The feature name "${e}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${e}', ...) or StoreModule.forFeature('${e}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`), t; }, r => r); }
function It(e) { return !!e && typeof e == "object" && Object.values(e).every(r => typeof r == "function"); }
function bt(e) { let r = Object.values(e), t = Object.keys(e), n = (...o) => t.reduce((i, c, d) => R(p({}, i), { [c]: o[d] }), {}); return [...r, n]; }
function un(e) { let { name: r, reducer: t, extraSelectors: n } = e, o = jt(r), i = At(o, t), c = p({ [`select${P(r)}State`]: o }, i), d = n ? n(c) : {}; return p(p({ name: r, reducer: t }, c), d); }
function At(e, r) { let t = Tt(r); return (Ie(t) ? Object.keys(t) : []).reduce((o, i) => R(p({}, o), { [`select${P(i)}`]: Ae(e, c => c?.[i]) }), {}); }
function Tt(e) { return e(void 0, { type: "@ngrx/feature/init" }); }
function wt(e) { return e instanceof u ? l(e) : e; }
function xt(e, r) { return r.map((t, n) => { if (e[n] instanceof u) {
    let o = l(e[n]);
    return { key: t.key, reducerFactory: o.reducerFactory ? o.reducerFactory : q, metaReducers: o.metaReducers ? o.metaReducers : [], initialState: o.initialState };
} return t; }); }
function Ot(e) { return e.map(r => r instanceof u ? l(r) : r); }
function G(e) { return typeof e == "function" ? e() : e; }
function Ct(e, r) { return e.concat(r); }
function _t() { if (l(A, { optional: !0, skipSelf: !0 }))
    throw new TypeError("The root Store has been provided more than once. Feature modules should provide feature states instead."); return "guarded"; }
function Mt(e, r) { return function (t, n) { let o = r.action(n) ? D(n) : n, i = e(t, o); return r.state() ? D(i) : i; }; }
function D(e) { Object.freeze(e); let r = _(e); return Object.getOwnPropertyNames(e).forEach(t => { if (!t.startsWith("\u0275") && Et(e, t) && (!r || t !== "caller" && t !== "callee" && t !== "arguments")) {
    let n = e[t];
    (je(n) || _(n)) && !Object.isFrozen(n) && D(n);
} }), e; }
function Dt(e, r) { return function (t, n) { if (r.action(n)) {
    let i = k(n);
    le(i, "action");
} let o = e(t, n); if (r.state()) {
    let i = k(o);
    le(i, "state");
} return o; }; }
function k(e, r = []) { return (de(e) || fe(e)) && r.length === 0 ? { path: ["root"], value: e } : Object.keys(e).reduce((n, o) => { if (n)
    return n; let i = e[o]; return mt(i) ? n : de(i) || fe(i) || ht(i) || yt(i) || pt(i) || Fe(i) ? !1 : Ie(i) ? k(i, [...r, o]) : { path: [...r, o], value: i }; }, !1); }
function le(e, r) { if (e === !1)
    return; let t = e.path.join("."), n = new Error(`Detected unserializable ${r} at "${t}". ${L}#strict${r}serializability`); throw n.value = e.value, n.unserializablePath = t, n; }
function kt(e, r) { return function (t, n) { if (r.action(n) && !s.NgZone.isInAngularZone())
    throw new Error(`Action '${n.type}' running outside NgZone. ${L}#strictactionwithinngzone`); return e(t, n); }; }
function Ut(e) { return ye() ? p({ strictStateSerializability: !1, strictActionSerializability: !1, strictStateImmutability: !0, strictActionImmutability: !0, strictActionWithinNgZone: !1, strictActionTypeUniqueness: !1 }, e) : { strictStateSerializability: !1, strictActionSerializability: !1, strictStateImmutability: !1, strictActionImmutability: !1, strictActionWithinNgZone: !1, strictActionTypeUniqueness: !1 }; }
function Nt({ strictActionSerializability: e, strictStateSerializability: r }) { return t => e || r ? Dt(t, { action: n => e && !Z(n), state: () => r }) : t; }
function Pt({ strictActionImmutability: e, strictStateImmutability: r }) { return t => e || r ? Mt(t, { action: n => e && !Z(n), state: () => r }) : t; }
function Z(e) { return e.type.startsWith("@ngrx"); }
function zt({ strictActionWithinNgZone: e }) { return r => e ? kt(r, { action: t => e && !Z(t) }) : r; }
function $t(e) { return [{ provide: ce, useValue: e }, { provide: se, useFactory: Vt, deps: [ce] }, { provide: v, deps: [se], useFactory: Ut }, { provide: F, multi: !0, deps: [v], useFactory: Pt }, { provide: F, multi: !0, deps: [v], useFactory: Nt }, { provide: F, multi: !0, deps: [v], useFactory: zt }]; }
function Te() { return [{ provide: S, multi: !0, deps: [v], useFactory: Kt }]; }
function Vt(e) { return e; }
function Kt(e) { if (!e.strictActionTypeUniqueness)
    return; let r = Object.entries(O).filter(([, t]) => t > 1).map(([t]) => t); if (r.length)
    throw new Error(`Action types are registered more than once, ${r.map(t => `"${t}"`).join(", ")}. ${L}#strictactiontypeuniqueness`); }
function an(e, r, t = {}) { return he([...xe(e, r, t), Gt]); }
function we(e = {}, r = {}) { return [{ provide: z, useFactory: _t }, { provide: J, useValue: r.initialState }, { provide: $, useFactory: G, deps: [J] }, { provide: w, useValue: e }, { provide: te, useExisting: e instanceof u ? e : w }, { provide: ve, deps: [w, [new pe(te)]], useFactory: wt }, { provide: oe, useValue: r.metaReducers ? r.metaReducers : [] }, { provide: ie, deps: [F, oe], useFactory: Ct }, { provide: X, useValue: r.reducerFactory ? r.reducerFactory : q }, { provide: Ee, deps: [X, ie], useFactory: Se }, nt, st, ct, at, dt, $t(r.runtimeChecks), Te()]; }
function qt() { l(m), l(E), l(b), l(A), l(z, { optional: !0 }), l(S, { optional: !0 }); }
var Lt = [{ provide: C, useFactory: qt }, Re(() => l(C))];
function dn(e, r) { return he([...we(e, r), Lt]); }
function Bt() { l(C); let e = l(V), r = l(K), t = l(g); l(S, { optional: !0 }); let n = e.map((o, i) => { let d = r.shift()[i]; return R(p({}, o), { reducers: d, initialState: G(o.initialState) }); }); t.addFeatures(n); }
var Gt = [{ provide: ue, useFactory: Bt }, Re(() => l(ue))];
function xe(e, r, t = {}) { return [{ provide: ne, multi: !0, useValue: e instanceof Object ? {} : t }, { provide: ee, multi: !0, useValue: { key: e instanceof Object ? e.name : e, reducerFactory: !(t instanceof u) && t.reducerFactory ? t.reducerFactory : q, metaReducers: !(t instanceof u) && t.metaReducers ? t.metaReducers : [], initialState: !(t instanceof u) && t.initialState ? t.initialState : void 0 } }, { provide: V, deps: [ne, ee], useFactory: xt }, { provide: x, multi: !0, useValue: e instanceof Object ? e.reducer : r }, { provide: re, multi: !0, useExisting: r instanceof u ? r : x }, { provide: K, multi: !0, deps: [x, [new pe(re)]], useFactory: Ot }, Te()]; }
var Oe = (() => { class e {
    constructor(t, n, o, i, c, d) { }
    static { this.\u0275fac = function (n) { return new (n || e)(s.\u0275\u0275inject(m), s.\u0275\u0275inject(E), s.\u0275\u0275inject(b), s.\u0275\u0275inject(A), s.\u0275\u0275inject(z, 8), s.\u0275\u0275inject(S, 8)); }; }
    static { this.\u0275mod = s.\u0275\u0275defineNgModule({ type: e }); }
    static { this.\u0275inj = s.\u0275\u0275defineInjector({}); }
} return e; })(), Zt = (() => { class e {
    constructor(t, n, o, i, c) { this.features = t, this.featureReducers = n, this.reducerManager = o; let d = t.map((f, y) => { let h = n.shift()[y]; return R(p({}, f), { reducers: h, initialState: G(f.initialState) }); }); o.addFeatures(d); }
    ngOnDestroy() { this.reducerManager.removeFeatures(this.features); }
    static { this.\u0275fac = function (n) { return new (n || e)(s.\u0275\u0275inject(V), s.\u0275\u0275inject(K), s.\u0275\u0275inject(g), s.\u0275\u0275inject(Oe), s.\u0275\u0275inject(S, 8)); }; }
    static { this.\u0275mod = s.\u0275\u0275defineNgModule({ type: e }); }
    static { this.\u0275inj = s.\u0275\u0275defineInjector({}); }
} return e; })(), fn = (() => { class e {
    static forRoot(t, n) { return { ngModule: Oe, providers: [...we(t, n)] }; }
    static forFeature(t, n, o = {}) { return { ngModule: Zt, providers: [...xe(t, n, o)] }; }
    static { this.\u0275fac = function (n) { return new (n || e); }; }
    static { this.\u0275mod = s.\u0275\u0275defineNgModule({ type: e }); }
    static { this.\u0275inj = s.\u0275\u0275defineInjector({}); }
} return e; })();
function ln(...e) { let r = e.pop(), t = e.map(n => n.type); return { reducer: r, types: t }; }
function pn(e, ...r) { let t = new Map; for (let n of r)
    for (let o of n.types) {
        let i = t.get(o);
        if (i) {
            let c = (d, f) => n.reducer(i(d, f), f);
            t.set(o, c);
        }
        else
            t.set(o, n.reducer);
    } return function (n = e, o) { let i = t.get(o.type); return i ? i(n, o) : n; }; }
export { v as ACTIVE_RUNTIME_CHECKS, m as ActionsSubject, K as FEATURE_REDUCERS, ue as FEATURE_STATE_PROVIDER, me as INIT, ve as INITIAL_REDUCERS, $ as INITIAL_STATE, F as META_REDUCERS, Ee as REDUCER_FACTORY, C as ROOT_STORE_PROVIDER, g as ReducerManager, j as ReducerManagerDispatcher, E as ReducerObservable, ee as STORE_FEATURES, b as ScannedActionsSubject, ae as State, I as StateObservable, A as Store, Zt as StoreFeatureModule, fn as StoreModule, Oe as StoreRootModule, it as UPDATE, oe as USER_PROVIDED_META_REDUCERS, se as USER_RUNTIME_CHECKS, q as combineReducers, ge as compose, Qe as createAction, rn as createActionGroup, un as createFeature, jt as createFeatureSelector, pn as createReducer, Se as createReducerFactory, Ae as createSelector, Ft as createSelectorFactory, B as defaultMemoize, St as defaultStateFn, on as emptyProps, vt as isNgrxMockEnvironment, ln as on, We as props, an as provideState, dn as provideStore, ut as reduceState, cn as resultMemoize, ft as select, sn as setNgrxMockEnvironment, nn as union };
