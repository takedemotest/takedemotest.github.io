// node_modules/@angular/cdk/fesm2022/_style-loader-chunk.mjs
import * as i0 from "@angular/core";
import { inject, Injector, EnvironmentInjector, ApplicationRef, createComponent, Injectable } from "@angular/core";
var appsWithLoaders = /* @__PURE__ */ new WeakMap();
var _CdkPrivateStyleLoader = class __CdkPrivateStyleLoader {
    _appRef;
    _injector = inject(Injector);
    _environmentInjector = inject(EnvironmentInjector);
    load(loader) {
        const appRef = this._appRef = this._appRef || this._injector.get(ApplicationRef);
        let data = appsWithLoaders.get(appRef);
        if (!data) {
            data = {
                loaders: /* @__PURE__ */ new Set(),
                refs: []
            };
            appsWithLoaders.set(appRef, data);
            appRef.onDestroy(() => {
                appsWithLoaders.get(appRef)?.refs.forEach((ref) => ref.destroy());
                appsWithLoaders.delete(appRef);
            });
        }
        if (!data.loaders.has(loader)) {
            data.loaders.add(loader);
            data.refs.push(createComponent(loader, {
                environmentInjector: this._environmentInjector
            }));
        }
    }
    static \u0275fac = function _CdkPrivateStyleLoader_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || __CdkPrivateStyleLoader)();
    };
    static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({
        token: __CdkPrivateStyleLoader,
        factory: __CdkPrivateStyleLoader.\u0275fac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(_CdkPrivateStyleLoader, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], null, null);
})();
export { _CdkPrivateStyleLoader };
//# sourceMappingURL=chunk-7JYLN4NY.js.map
