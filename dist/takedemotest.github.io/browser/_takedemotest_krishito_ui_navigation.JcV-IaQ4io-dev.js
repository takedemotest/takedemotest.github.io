var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
    for (var prop in b ||= {})
        if (__hasOwnProp.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
        for (var prop of __getOwnPropSymbols(b)) {
            if (__propIsEnum.call(b, prop))
                __defNormalProp(a, prop, b[prop]);
        }
    return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
// node_modules/@takedemotest/krishito-ui-navigation/fesm2022/takedemotest-krishito-ui-navigation.mjs
import { CommonModule } from "@angular/common";
import * as i0 from "@angular/core";
import { signal, computed, Injectable, inject, input, Component } from "@angular/core";
import * as i1 from "@angular/material/icon";
import { MatIconModule } from "@angular/material/icon";
import * as i2 from "@angular/router";
import { RouterModule } from "@angular/router";
import { Subject } from "rxjs";
var _forTrack0 = ($index, $item) => $item.categoryName;
var _forTrack1 = ($index, $item) => $item.route;
function NavigationComponent_For_3_Conditional_0_Template(rf, ctx) {
    if (rf & 1) {
        i0.\u0275\u0275elementStart(0, "div", 1);
        i0.\u0275\u0275text(1);
        i0.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
        const cat_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275advance();
        i0.\u0275\u0275textInterpolate(cat_r1.categoryName);
    }
}
function NavigationComponent_For_3_For_2_Conditional_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r2 = i0.\u0275\u0275getCurrentView();
        i0.\u0275\u0275elementStart(0, "a", 4);
        i0.\u0275\u0275listener("click", function NavigationComponent_For_3_For_2_Conditional_1_Template_a_click_0_listener() {
            i0.\u0275\u0275restoreView(_r2);
            const item_r3 = i0.\u0275\u0275nextContext().$implicit;
            const ctx_r3 = i0.\u0275\u0275nextContext(2);
            return i0.\u0275\u0275resetView(ctx_r3.onItemClick(item_r3));
        });
        i0.\u0275\u0275element(1, "mat-icon", 5);
        i0.\u0275\u0275text(2);
        i0.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
        const item_r3 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275property("routerLink", item_r3.route);
        i0.\u0275\u0275advance();
        i0.\u0275\u0275property("svgIcon", i0.\u0275\u0275interpolate(item_r3.icon));
        i0.\u0275\u0275advance();
        i0.\u0275\u0275textInterpolate(item_r3.label);
    }
}
function NavigationComponent_For_3_For_2_Conditional_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.\u0275\u0275elementStart(0, "a", 3);
        i0.\u0275\u0275element(1, "mat-icon", 5);
        i0.\u0275\u0275text(2);
        i0.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
        const item_r3 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275property("routerLink", item_r3.route);
        i0.\u0275\u0275advance();
        i0.\u0275\u0275property("svgIcon", i0.\u0275\u0275interpolate(item_r3.icon));
        i0.\u0275\u0275advance();
        i0.\u0275\u0275textInterpolate(item_r3.label);
    }
}
function NavigationComponent_For_3_For_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.\u0275\u0275elementStart(0, "li", 2);
        i0.\u0275\u0275conditionalCreate(1, NavigationComponent_For_3_For_2_Conditional_1_Template, 3, 4, "a", 3)(2, NavigationComponent_For_3_For_2_Conditional_2_Template, 3, 4, "a", 3);
        i0.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
        const item_r3 = ctx.$implicit;
        i0.\u0275\u0275advance();
        i0.\u0275\u0275conditional(item_r3.action ? 1 : 2);
    }
}
function NavigationComponent_For_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.\u0275\u0275conditionalCreate(0, NavigationComponent_For_3_Conditional_0_Template, 2, 1, "div", 1);
        i0.\u0275\u0275repeaterCreate(1, NavigationComponent_For_3_For_2_Template, 3, 1, "li", 2, _forTrack1);
    }
    if (rf & 2) {
        const cat_r1 = ctx.$implicit;
        i0.\u0275\u0275conditional(cat_r1.categoryName ? 0 : -1);
        i0.\u0275\u0275advance();
        i0.\u0275\u0275repeater(cat_r1.items);
    }
}
var NavigationService = class _NavigationService {
    actionSubject = new Subject();
    menuAction$ = this.actionSubject.asObservable();
    registrySignal = signal({}, ...ngDevMode ? [{
            debugName: "registrySignal"
        }] : (
    /* istanbul ignore next */
    []));
    userRoleSignal = signal("worker", ...ngDevMode ? [{
            debugName: "userRoleSignal"
        }] : (
    /* istanbul ignore next */
    []));
    activeMenuLayout = computed(() => {
        const role = this.userRoleSignal();
        const rawMenu = this.registrySignal();
        const filteredRegistry = {};
        Object.keys(rawMenu).forEach((key) => {
            filteredRegistry[key] = rawMenu[key].map((category) => __spreadProps(__spreadValues({}, category), {
                items: category.items.filter((item) => !item.roleAllowed || item.roleAllowed.includes(role))
            })).filter((category) => category.items.length > 0);
        });
        return filteredRegistry;
    }, ...ngDevMode ? [{
            debugName: "activeMenuLayout"
        }] : (
    /* istanbul ignore next */
    []));
    registerMenu(type, config) {
        this.registrySignal.update((state) => __spreadProps(__spreadValues({}, state), {
            [type]: config
        }));
    }
    setUserRole(role) {
        this.userRoleSignal.set(role);
    }
    emitAction(item) {
        this.actionSubject.next(item);
    }
    static \u0275fac = function NavigationService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _NavigationService)();
    };
    static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({
        token: _NavigationService,
        factory: _NavigationService.\u0275fac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(NavigationService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], null, null);
})();
var NavigationComponent = class _NavigationComponent {
    navService = inject(NavigationService);
    layoutKey = input.required(...ngDevMode ? [{
            debugName: "layoutKey"
        }] : (
    /* istanbul ignore next */
    []));
    menuData = computed(() => {
        return this.navService.activeMenuLayout()[this.layoutKey()] || [];
    }, ...ngDevMode ? [{
            debugName: "menuData"
        }] : (
    /* istanbul ignore next */
    []));
    onItemClick(item) {
        if (item.action) {
            this.navService.emitAction(item);
        }
    }
    static \u0275fac = function NavigationComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _NavigationComponent)();
    };
    static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({
        type: _NavigationComponent,
        selectors: [["navigation-menu"]],
        inputs: {
            layoutKey: [1, "layoutKey"]
        },
        decls: 4,
        vars: 0,
        consts: [[1, "nav", "flex-column"], [1, "menu-category"], [1, "nav-item"], ["routerLinkActive", "active-link", 1, "nav-link", 3, "routerLink"], ["routerLinkActive", "active-link", 1, "nav-link", 3, "click", "routerLink"], [3, "svgIcon"]],
        template: function NavigationComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.\u0275\u0275elementStart(0, "nav")(1, "ul", 0);
                i0.\u0275\u0275repeaterCreate(2, NavigationComponent_For_3_Template, 3, 1, null, null, _forTrack0);
                i0.\u0275\u0275elementEnd()();
            }
            if (rf & 2) {
                i0.\u0275\u0275advance(2);
                i0.\u0275\u0275repeater(ctx.menuData());
            }
        },
        dependencies: [CommonModule, MatIconModule, i1.MatIcon, RouterModule, i2.RouterLink, i2.RouterLinkActive],
        styles: [".nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{font-size:var(--%NS%nav-link-font-size, 12px);color:var(--%NS%main-text-color);padding:var(--%NS%nav-link-padding, 5px 0px);display:flex;gap:var(--%NS%nav-link-gap, 5px);align-items:center}.nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:18px;height:18px}.nav[_ngcontent-%COMP%]   .menu-category[_ngcontent-%COMP%]{font-size:var(--%NS%menu-category-font-size, 14px);color:#000;padding:10px 0 0;border-top:1px solid var(--%NS%border-color);margin-top:10px}"]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(NavigationComponent, [{
            type: Component,
            args: [{
                    selector: "navigation-menu",
                    standalone: true,
                    imports: [CommonModule, MatIconModule, RouterModule],
                    template: '<nav>\n  <ul class="nav flex-column">\n\n    @for(cat of menuData(); track cat.categoryName){\n    @if(cat.categoryName){\n    <div class="menu-category">{{cat.categoryName}}</div>\n    }\n    @for(item of cat.items; track item.route){\n    <li class="nav-item">\n     \n      @if(item.action){\n        <a class="nav-link"\n        (click)="onItemClick(item)"\n        [routerLink]="item.route"\n        routerLinkActive="active-link"\n        ><mat-icon svgIcon="{{item.icon}}"></mat-icon>{{item.label}}</a>\n      }@else {\n        <a class="nav-link"\n        [routerLink]="item.route"\n        routerLinkActive="active-link"\n        ><mat-icon svgIcon="{{item.icon}}"></mat-icon>{{item.label}}</a>\n      }\n    </li>\n    }\n    }\n  </ul>\n</nav>',
                    styles: [".nav .nav-link{font-size:var(--nav-link-font-size, 12px);color:var(--main-text-color);padding:var(--nav-link-padding, 5px 0px);display:flex;gap:var(--nav-link-gap, 5px);align-items:center}.nav .nav-link mat-icon{width:18px;height:18px}.nav .menu-category{font-size:var(--menu-category-font-size, 14px);color:#000;padding:10px 0 0;border-top:1px solid var(--border-color);margin-top:10px}\n"]
                }]
        }], null, {
        layoutKey: [{
                type: i0.Input,
                args: [{
                        isSignal: true,
                        alias: "layoutKey",
                        required: true
                    }]
            }]
    });
})();
export { NavigationComponent, NavigationService };
//# sourceMappingURL=_takedemotest_krishito_ui_navigation.JcV-IaQ4io-dev.js.map
