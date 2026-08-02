var f = Object.defineProperty, x = Object.defineProperties;
var y = Object.getOwnPropertyDescriptors;
var u = Object.getOwnPropertySymbols;
var C = Object.prototype.hasOwnProperty, k = Object.prototype.propertyIsEnumerable;
var d = (n, i, t) => i in n ? f(n, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[i] = t, m = (n, i) => { for (var t in i ||= {})
    C.call(i, t) && d(n, t, i[t]); if (u)
    for (var t of u(i))
        k.call(i, t) && d(n, t, i[t]); return n; }, p = (n, i) => x(n, y(i));
import { CommonModule as M } from "@angular/common";
import * as e from "@angular/core";
import { signal as v, computed as g, inject as S, input as N } from "@angular/core";
import * as _ from "@angular/material/icon";
import { MatIconModule as b } from "@angular/material/icon";
import * as l from "@angular/router";
import { RouterModule as h } from "@angular/router";
import { Subject as I } from "rxjs";
var D = (n, i) => i.categoryName, F = (n, i) => i.route;
function w(n, i) { if (n & 1 && (e.\u0275\u0275elementStart(0, "div", 1), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), n & 2) {
    let t = e.\u0275\u0275nextContext().$implicit;
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.categoryName);
} }
function L(n, i) { if (n & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "a", 4), e.\u0275\u0275listener("click", function () { e.\u0275\u0275restoreView(t); let a = e.\u0275\u0275nextContext().$implicit, r = e.\u0275\u0275nextContext(2); return e.\u0275\u0275resetView(r.onItemClick(a)); }), e.\u0275\u0275element(1, "mat-icon", 5), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd();
} if (n & 2) {
    let t = e.\u0275\u0275nextContext().$implicit;
    e.\u0275\u0275property("routerLink", t.route), e.\u0275\u0275advance(), e.\u0275\u0275property("svgIcon", e.\u0275\u0275interpolate(t.icon)), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.label);
} }
function O(n, i) { if (n & 1 && (e.\u0275\u0275elementStart(0, "a", 3), e.\u0275\u0275element(1, "mat-icon", 5), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd()), n & 2) {
    let t = e.\u0275\u0275nextContext().$implicit;
    e.\u0275\u0275property("routerLink", t.route), e.\u0275\u0275advance(), e.\u0275\u0275property("svgIcon", e.\u0275\u0275interpolate(t.icon)), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.label);
} }
function R(n, i) { if (n & 1 && (e.\u0275\u0275elementStart(0, "li", 2), e.\u0275\u0275conditionalCreate(1, L, 3, 4, "a", 3)(2, O, 3, 4, "a", 3), e.\u0275\u0275elementEnd()), n & 2) {
    let t = i.$implicit;
    e.\u0275\u0275advance(), e.\u0275\u0275conditional(t.action ? 1 : 2);
} }
function T(n, i) { if (n & 1 && (e.\u0275\u0275conditionalCreate(0, w, 2, 1, "div", 1), e.\u0275\u0275repeaterCreate(1, R, 3, 1, "li", 2, F)), n & 2) {
    let t = i.$implicit;
    e.\u0275\u0275conditional(t.categoryName ? 0 : -1), e.\u0275\u0275advance(), e.\u0275\u0275repeater(t.items);
} }
var $ = (() => { class n {
    actionSubject = new I;
    menuAction$ = this.actionSubject.asObservable();
    registrySignal = v({});
    userRoleSignal = v("worker");
    activeMenuLayout = g(() => { let t = this.userRoleSignal(), o = this.registrySignal(), a = {}; return Object.keys(o).forEach(r => { a[r] = o[r].map(c => p(m({}, c), { items: c.items.filter(s => !s.roleAllowed || s.roleAllowed.includes(t)) })).filter(c => c.items.length > 0); }), a; });
    registerMenu(t, o) { this.registrySignal.update(a => p(m({}, a), { [t]: o })); }
    setUserRole(t) { this.userRoleSignal.set(t); }
    emitAction(t) { this.actionSubject.next(t); }
    static \u0275fac = function (o) { return new (o || n); };
    static \u0275prov = e.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" });
} return n; })(), U = (() => { class n {
    navService = S($);
    layoutKey = N.required();
    menuData = g(() => this.navService.activeMenuLayout()[this.layoutKey()] || []);
    onItemClick(t) { t.action && this.navService.emitAction(t); }
    static \u0275fac = function (o) { return new (o || n); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["navigation-menu"]], inputs: { layoutKey: [1, "layoutKey"] }, decls: 4, vars: 0, consts: [[1, "nav", "flex-column"], [1, "menu-category"], [1, "nav-item"], ["routerLinkActive", "active-link", 1, "nav-link", 3, "routerLink"], ["routerLinkActive", "active-link", 1, "nav-link", 3, "click", "routerLink"], [3, "svgIcon"]], template: function (o, a) { o & 1 && (e.\u0275\u0275elementStart(0, "nav")(1, "ul", 0), e.\u0275\u0275repeaterCreate(2, T, 3, 1, null, null, D), e.\u0275\u0275elementEnd()()), o & 2 && (e.\u0275\u0275advance(2), e.\u0275\u0275repeater(a.menuData())); }, dependencies: [M, b, _.MatIcon, h, l.RouterLink, l.RouterLinkActive], styles: [".nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{font-size:var(--%NS%nav-link-font-size, 12px);color:var(--%NS%main-text-color);padding:var(--%NS%nav-link-padding, 5px 0px);display:flex;gap:var(--%NS%nav-link-gap, 5px);align-items:center}.nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:18px;height:18px}.nav[_ngcontent-%COMP%]   .menu-category[_ngcontent-%COMP%]{font-size:var(--%NS%menu-category-font-size, 14px);color:#000;padding:10px 0 0;border-top:1px solid var(--%NS%border-color);margin-top:10px}"] });
} return n; })();
export { U as NavigationComponent, $ as NavigationService };
