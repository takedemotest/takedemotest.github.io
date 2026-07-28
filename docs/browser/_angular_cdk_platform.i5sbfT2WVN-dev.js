import { normalizePassiveListenerOptions, supportsPassiveEventListeners } from "@nf-internal/chunk-EBG2TTUD";
import { _isTestEnvironment } from "@nf-internal/chunk-ZMGS7QAC";
import { RtlScrollAxisType, getRtlScrollAxisType, supportsScrollBehavior } from "@nf-internal/chunk-37DJZZNO";
import { _getEventTarget, _getFocusedElementPierceShadowDom, _getShadowRoot, _supportsShadowDom } from "@nf-internal/chunk-NQWSUIOC";
import { Platform } from "@nf-internal/chunk-2252UV67";
import "@nf-internal/chunk-VUJOFXKG";
// node_modules/@angular/cdk/fesm2022/platform.mjs
import * as i0 from "@angular/core";
import { NgModule } from "@angular/core";
import "@angular/common";
var PlatformModule = class _PlatformModule {
    static \u0275fac = function PlatformModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _PlatformModule)();
    };
    static \u0275mod = /* @__PURE__ */ i0.\u0275\u0275defineNgModule({
        type: _PlatformModule
    });
    static \u0275inj = /* @__PURE__ */ i0.\u0275\u0275defineInjector({});
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(PlatformModule, [{
            type: NgModule,
            args: [{}]
        }], null, null);
})();
var supportedInputTypes;
var candidateInputTypes = ["color", "button", "checkbox", "date", "datetime-local", "email", "file", "hidden", "image", "month", "number", "password", "radio", "range", "reset", "search", "submit", "tel", "text", "time", "url", "week"];
function getSupportedInputTypes() {
    if (supportedInputTypes) {
        return supportedInputTypes;
    }
    if (typeof document !== "object" || !document) {
        supportedInputTypes = new Set(candidateInputTypes);
        return supportedInputTypes;
    }
    let featureTestInput = document.createElement("input");
    supportedInputTypes = new Set(candidateInputTypes.filter((value) => {
        featureTestInput.setAttribute("type", value);
        return featureTestInput.type === value;
    }));
    return supportedInputTypes;
}
export { Platform, PlatformModule, RtlScrollAxisType, _getEventTarget, _getFocusedElementPierceShadowDom, _getShadowRoot, _isTestEnvironment, _supportsShadowDom, getRtlScrollAxisType, getSupportedInputTypes, normalizePassiveListenerOptions, supportsPassiveEventListeners, supportsScrollBehavior };
//# sourceMappingURL=_angular_cdk_platform.i5sbfT2WVN-dev.js.map
