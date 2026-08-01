import * as p from "@angular/core";
import { InjectionToken as g, EventEmitter as l, inject as f, ElementRef as y, NgZone as b, PLATFORM_ID as C } from "@angular/core";
import { registerables as O, Chart as u, defaults as v } from "chart.js";
function a(r) { if (!r || typeof r != "object")
    return !1; let m = Object.getPrototypeOf(r); return m === null || m === Object.prototype || Object.getPrototypeOf(m) === null ? Object.prototype.toString.call(r) === "[object Object]" : !1; }
function h(r) { return r === "__proto__"; }
function s(r, m) { let t = Object.keys(m); for (let i = 0; i < t.length; i++) {
    let e = t[i];
    if (h(e))
        continue;
    let o = m[e], n = r[e];
    c(o) && c(n) ? r[e] = s(n, o) : Array.isArray(o) ? r[e] = s([], o) : a(o) ? r[e] = s({}, o) : (n === void 0 || o !== void 0) && (r[e] = o);
} return r; }
function c(r) { return a(r) || Array.isArray(r); }
import { isPlatformBrowser as B } from "@angular/common";
import { BehaviorSubject as w } from "rxjs";
import { distinctUntilChanged as j } from "rxjs/operators";
var d = new g("Configuration for ngCharts");
function V(...r) { return { registerables: [...O, ...r] }; }
function U(...r) { let m = r.reduce(s, {}); return { provide: d, useValue: m }; }
var k = (() => { class r {
    constructor() { this.colorschemesOptions = new w(void 0); }
    setColorschemesOptions(t) { this.pColorschemesOptions = t, this.colorschemesOptions.next(t); }
    getColorschemesOptions() { return this.pColorschemesOptions; }
    static { this.\u0275fac = function (i) { return new (i || r); }; }
    static { this.\u0275prov = p.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" }); }
} return r; })(), J = (() => { class r {
    constructor() { this.type = "bar", this.plugins = [], this.chartClick = new l, this.chartHover = new l, this.ctx = null, this.subs = [], this.themeOverrides = {}, this.element = f(y), this.zone = f(b), this.themeService = f(k), this.config = f(d, { optional: !0 }), this.platformId = f(C), this.isBrowser = B(this.platformId), this.config?.registerables && u.register(...this.config.registerables), this.config?.defaults && v.set(this.config.defaults), this.isBrowser && (this.ctx = this.element.nativeElement.getContext("2d")), this.subs.push(this.themeService.colorschemesOptions.pipe(j()).subscribe(t => this.themeChanged(t))); }
    ngOnChanges(t) { if (!this.isBrowser)
        return; let i = ["type"], e = Object.getOwnPropertyNames(t); if (e.some(o => i.includes(o)) || e.every(o => t[o].isFirstChange()))
        this.render();
    else if (this.chart && t.legend) {
        let o = this.getChartConfiguration();
        o.options && (this.chart.options = o.options), this.update();
    }
    else if (this.chart) {
        let o = this.getChartConfiguration();
        o.data && this.chart.config.data && Object.assign(this.chart.config.data, o.data), o.plugins && this.chart.config.plugins && Object.assign(this.chart.config.plugins, o.plugins), o.options && this.chart.config.options && Object.assign(this.chart.config.options, o.options), this.update();
    } }
    ngOnDestroy() { this.chart && (this.chart.destroy(), this.chart = void 0), this.subs.forEach(t => t.unsubscribe()); }
    render() { if (!(!this.isBrowser || !this.ctx))
        return this.chart && this.chart.destroy(), this.zone.runOutsideAngular(() => this.chart = new u(this.ctx, this.getChartConfiguration())); }
    update(t) { this.chart && this.isBrowser && this.zone.runOutsideAngular(() => this.chart?.update(t)); }
    hideDataset(t, i) { this.chart && this.isBrowser && (this.chart.getDatasetMeta(t).hidden = i, this.update()); }
    isDatasetHidden(t) { return this.chart?.getDatasetMeta(t)?.hidden; }
    toBase64Image() { return this.chart?.toBase64Image(); }
    themeChanged(t) { this.themeOverrides = t, this.chart && (this.chart.config.options && Object.assign(this.chart.config.options, this.getChartOptions()), this.update()); }
    getChartOptions() { return [{ onHover: (t, i) => { !this.chartHover.observed && !this.chartHover.observers?.length || this.zone.run(() => this.chartHover.emit({ event: t, active: i })); }, onClick: (t, i) => { !this.chartClick.observed && !this.chartClick.observers?.length || this.zone.run(() => this.chartClick.emit({ event: t, active: i })); } }, this.themeOverrides ?? {}, this.options ?? {}, { plugins: { legend: { display: this.legend } } }].reduce(s, {}); }
    getChartConfiguration() { return { type: this.type, data: this.getChartData(), options: this.getChartOptions(), plugins: this.plugins }; }
    getChartData() { return this.data ? this.data : { labels: this.labels || [], datasets: this.datasets || [] }; }
    static { this.\u0275fac = function (i) { return new (i || r); }; }
    static { this.\u0275dir = p.\u0275\u0275defineDirective({ type: r, selectors: [["canvas", "baseChart", ""]], inputs: { type: "type", legend: "legend", data: "data", options: "options", plugins: "plugins", labels: "labels", datasets: "datasets" }, outputs: { chartClick: "chartClick", chartHover: "chartHover" }, exportAs: ["base-chart"], features: [p.\u0275\u0275NgOnChangesFeature] }); }
} return r; })();
export { J as BaseChartDirective, d as NG_CHARTS_CONFIGURATION, k as ThemeService, U as provideCharts, V as withDefaultRegisterables };
