// node_modules/@takedemotest/krishito-ui-icons/fesm2022/takedemotest-krishito-ui-icons.mjs
import * as i0 from "@angular/core";
import { inject, Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
var IconService = class _IconService {
    iconRegistry = inject(MatIconRegistry);
    sanitizer = inject(DomSanitizer);
    constructor() {
        this.registerIcons(["addicon"]);
    }
    registerIcons(iconNames) {
        iconNames.forEach((icon) => {
            this.iconRegistry.addSvgIcon(icon, this.sanitizer.bypassSecurityTrustResourceUrl(`svg-icons/${icon}.svg`));
        });
    }
    static \u0275fac = function IconService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _IconService)();
    };
    static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({
        token: _IconService,
        factory: _IconService.\u0275fac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(IconService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [], null);
})();
export { IconService };
//# sourceMappingURL=_takedemotest_krishito_ui_icons.3oiI3x_csv-dev.js.map
