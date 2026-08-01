// node_modules/@angular/cdk/fesm2022/_id-generator-chunk.mjs
import * as i0 from "@angular/core";
import { inject, APP_ID, Injectable } from "@angular/core";
var counters = {};
var _IdGenerator = class __IdGenerator {
    _appId = inject(APP_ID);
    static _infix = `a${Math.floor(Math.random() * 1e5).toString()}`;
    getId(prefix, randomize = false) {
        if (this._appId !== "ng") {
            prefix += this._appId;
        }
        if (!counters.hasOwnProperty(prefix)) {
            counters[prefix] = 0;
        }
        return `${prefix}${randomize ? __IdGenerator._infix + "-" : ""}${counters[prefix]++}`;
    }
    static \u0275fac = function _IdGenerator_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || __IdGenerator)();
    };
    static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({
        token: __IdGenerator,
        factory: __IdGenerator.\u0275fac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(_IdGenerator, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], null, null);
})();
export { _IdGenerator };
//# sourceMappingURL=chunk-AJNF7GGU.js.map
