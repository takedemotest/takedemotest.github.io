// node_modules/@angular/cdk/fesm2022/_platform-chunk.mjs
import * as i0 from "@angular/core";
import { inject, PLATFORM_ID, Injectable } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
var hasV8BreakIterator;
try {
    hasV8BreakIterator = typeof Intl !== "undefined" && Intl.v8BreakIterator;
}
catch {
    hasV8BreakIterator = false;
}
var Platform = class _Platform {
    _platformId = inject(PLATFORM_ID);
    isBrowser = this._platformId ? isPlatformBrowser(this._platformId) : typeof document === "object" && !!document;
    EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
    TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
    BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== "undefined" && !this.EDGE && !this.TRIDENT;
    WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
    IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
    FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
    ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
    SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
    constructor() {
    }
    static \u0275fac = function Platform_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _Platform)();
    };
    static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({
        token: _Platform,
        factory: _Platform.\u0275fac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(Platform, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [], null);
})();
export { Platform };
//# sourceMappingURL=chunk-2252UV67.js.map
