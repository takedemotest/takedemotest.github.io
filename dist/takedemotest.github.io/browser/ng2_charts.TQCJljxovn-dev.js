// node_modules/ng2-charts/fesm2022/ng2-charts.mjs
import * as i0 from "@angular/core";
import { InjectionToken, Injectable, EventEmitter, inject, ElementRef, NgZone, PLATFORM_ID, Output, Input, Directive } from "@angular/core";
import { registerables, Chart, defaults } from "chart.js";
// node_modules/es-toolkit/dist/predicate/isPlainObject.mjs
function isPlainObject(value) {
    if (!value || typeof value !== "object")
        return false;
    const proto = Object.getPrototypeOf(value);
    if (!(proto === null || proto === Object.prototype || Object.getPrototypeOf(proto) === null))
        return false;
    return Object.prototype.toString.call(value) === "[object Object]";
}
// node_modules/es-toolkit/dist/_internal/isUnsafeProperty.mjs
function isUnsafeProperty(key) {
    return key === "__proto__";
}
// node_modules/es-toolkit/dist/object/merge.mjs
function merge(target, source) {
    const sourceKeys = Object.keys(source);
    for (let i = 0; i < sourceKeys.length; i++) {
        const key = sourceKeys[i];
        if (isUnsafeProperty(key))
            continue;
        const sourceValue = source[key];
        const targetValue = target[key];
        if (isMergeableValue(sourceValue) && isMergeableValue(targetValue))
            target[key] = merge(targetValue, sourceValue);
        else if (Array.isArray(sourceValue))
            target[key] = merge([], sourceValue);
        else if (isPlainObject(sourceValue))
            target[key] = merge({}, sourceValue);
        else if (targetValue === void 0 || sourceValue !== void 0)
            target[key] = sourceValue;
    }
    return target;
}
function isMergeableValue(value) {
    return isPlainObject(value) || Array.isArray(value);
}
// node_modules/ng2-charts/fesm2022/ng2-charts.mjs
import { isPlatformBrowser } from "@angular/common";
import { BehaviorSubject } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";
var NG_CHARTS_CONFIGURATION = new InjectionToken("Configuration for ngCharts");
function withDefaultRegisterables(...registerables$1) {
    return {
        registerables: [...registerables, ...registerables$1]
    };
}
function provideCharts(...configurations) {
    const config = configurations.reduce(merge, {});
    return {
        provide: NG_CHARTS_CONFIGURATION,
        useValue: config
    };
}
var ThemeService = class _ThemeService {
    constructor() {
        this.colorschemesOptions = new BehaviorSubject(void 0);
    }
    setColorschemesOptions(options) {
        this.pColorschemesOptions = options;
        this.colorschemesOptions.next(options);
    }
    getColorschemesOptions() {
        return this.pColorschemesOptions;
    }
    static {
        this.\u0275fac = function ThemeService_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _ThemeService)();
        };
    }
    static {
        this.\u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({
            token: _ThemeService,
            factory: _ThemeService.\u0275fac,
            providedIn: "root"
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(ThemeService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], null, null);
})();
var BaseChartDirective = class _BaseChartDirective {
    constructor() {
        this.type = "bar";
        this.plugins = [];
        this.chartClick = new EventEmitter();
        this.chartHover = new EventEmitter();
        this.ctx = null;
        this.subs = [];
        this.themeOverrides = {};
        this.element = inject(ElementRef);
        this.zone = inject(NgZone);
        this.themeService = inject(ThemeService);
        this.config = inject(NG_CHARTS_CONFIGURATION, {
            optional: true
        });
        this.platformId = inject(PLATFORM_ID);
        this.isBrowser = isPlatformBrowser(this.platformId);
        if (this.config?.registerables) {
            Chart.register(...this.config.registerables);
        }
        if (this.config?.defaults) {
            defaults.set(this.config.defaults);
        }
        if (this.isBrowser) {
            this.ctx = this.element.nativeElement.getContext("2d");
        }
        this.subs.push(this.themeService.colorschemesOptions.pipe(distinctUntilChanged()).subscribe((r) => this.themeChanged(r)));
    }
    ngOnChanges(changes) {
        if (!this.isBrowser) {
            return;
        }
        const requireRender = ["type"];
        const propertyNames = Object.getOwnPropertyNames(changes);
        if (propertyNames.some((key) => requireRender.includes(key)) || propertyNames.every((key) => changes[key].isFirstChange())) {
            this.render();
        }
        else {
            if (this.chart && changes["legend"]) {
                const config = this.getChartConfiguration();
                if (config.options) {
                    this.chart.options = config.options;
                }
                this.update();
            }
            else if (this.chart) {
                const config = this.getChartConfiguration();
                if (config.data && this.chart.config.data) {
                    Object.assign(this.chart.config.data, config.data);
                }
                if (config.plugins && this.chart.config.plugins) {
                    Object.assign(this.chart.config.plugins, config.plugins);
                }
                if (config.options && this.chart.config.options) {
                    Object.assign(this.chart.config.options, config.options);
                }
                this.update();
            }
        }
    }
    ngOnDestroy() {
        if (this.chart) {
            this.chart.destroy();
            this.chart = void 0;
        }
        this.subs.forEach((s) => s.unsubscribe());
    }
    render() {
        if (!this.isBrowser || !this.ctx) {
            return void 0;
        }
        if (this.chart) {
            this.chart.destroy();
        }
        return this.zone.runOutsideAngular(() => this.chart = new Chart(this.ctx, this.getChartConfiguration()));
    }
    update(mode) {
        if (this.chart && this.isBrowser) {
            this.zone.runOutsideAngular(() => this.chart?.update(mode));
        }
    }
    hideDataset(index, hidden) {
        if (this.chart && this.isBrowser) {
            this.chart.getDatasetMeta(index).hidden = hidden;
            this.update();
        }
    }
    isDatasetHidden(index) {
        return this.chart?.getDatasetMeta(index)?.hidden;
    }
    toBase64Image() {
        return this.chart?.toBase64Image();
    }
    themeChanged(options) {
        this.themeOverrides = options;
        if (this.chart) {
            if (this.chart.config.options) {
                Object.assign(this.chart.config.options, this.getChartOptions());
            }
            this.update();
        }
    }
    getChartOptions() {
        return [{
                onHover: (event, active) => {
                    if (!this.chartHover.observed && !this.chartHover.observers?.length) {
                        return;
                    }
                    this.zone.run(() => this.chartHover.emit({
                        event,
                        active
                    }));
                },
                onClick: (event, active) => {
                    if (!this.chartClick.observed && !this.chartClick.observers?.length) {
                        return;
                    }
                    this.zone.run(() => this.chartClick.emit({
                        event,
                        active
                    }));
                }
            }, this.themeOverrides ?? {}, this.options ?? {}, {
                plugins: {
                    legend: {
                        display: this.legend
                    }
                }
            }].reduce(merge, {});
    }
    getChartConfiguration() {
        return {
            type: this.type,
            data: this.getChartData(),
            options: this.getChartOptions(),
            plugins: this.plugins
        };
    }
    getChartData() {
        return this.data ? this.data : {
            labels: this.labels || [],
            datasets: this.datasets || []
        };
    }
    static {
        this.\u0275fac = function BaseChartDirective_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || _BaseChartDirective)();
        };
    }
    static {
        this.\u0275dir = /* @__PURE__ */ i0.\u0275\u0275defineDirective({
            type: _BaseChartDirective,
            selectors: [["canvas", "baseChart", ""]],
            inputs: {
                type: "type",
                legend: "legend",
                data: "data",
                options: "options",
                plugins: "plugins",
                labels: "labels",
                datasets: "datasets"
            },
            outputs: {
                chartClick: "chartClick",
                chartHover: "chartHover"
            },
            exportAs: ["base-chart"],
            features: [i0.\u0275\u0275NgOnChangesFeature]
        });
    }
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(BaseChartDirective, [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: "canvas[baseChart]",
                    exportAs: "base-chart",
                    standalone: true
                }]
        }], () => [], {
        type: [{
                type: Input
            }],
        legend: [{
                type: Input
            }],
        data: [{
                type: Input
            }],
        options: [{
                type: Input
            }],
        plugins: [{
                type: Input
            }],
        labels: [{
                type: Input
            }],
        datasets: [{
                type: Input
            }],
        chartClick: [{
                type: Output
            }],
        chartHover: [{
                type: Output
            }]
    });
})();
export { BaseChartDirective, NG_CHARTS_CONFIGURATION, ThemeService, provideCharts, withDefaultRegisterables };
//# sourceMappingURL=ng2_charts.TQCJljxovn-dev.js.map
