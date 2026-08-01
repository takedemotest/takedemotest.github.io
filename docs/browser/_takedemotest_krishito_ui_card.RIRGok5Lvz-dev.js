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
// node_modules/@takedemotest/krishito-ui-card/fesm2022/takedemotest-krishito-ui-card.mjs
import * as i1 from "@angular/common";
import { CommonModule, NgTemplateOutlet as NgTemplateOutlet2 } from "@angular/common";
import * as i0 from "@angular/core";
import { inject, input, output, contentChild, ElementRef, computed, Component } from "@angular/core";
import * as i2 from "@angular/material/icon";
import { MatIconModule } from "@angular/material/icon";
import { IconService } from "@takedemotest/krishito-ui-icons";
var _c0 = [[["", "custom-header", ""]], [["", "custom-footer", ""]]];
var _c1 = ["[custom-header]", "[custom-footer]"];
var _c2 = (a0) => ({
    $implicit: a0
});
var _forTrack0 = ($index, $item) => $item.id;
function CardsComponent_Conditional_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.\u0275\u0275elementStart(0, "h6");
        i0.\u0275\u0275text(1);
        i0.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext();
        i0.\u0275\u0275advance();
        i0.\u0275\u0275textInterpolate(ctx_r0.cardTitle());
    }
}
function CardsComponent_For_4_Conditional_2_Conditional_1_Conditional_0_Template(rf, ctx) {
    if (rf & 1) {
        i0.\u0275\u0275elementStart(0, "div", 11);
        i0.\u0275\u0275element(1, "mat-icon", 12);
        i0.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
        const item_r3 = i0.\u0275\u0275nextContext(3).$implicit;
        i0.\u0275\u0275styleProp("background-color", item_r3.randomBg);
        i0.\u0275\u0275advance();
        i0.\u0275\u0275property("svgIcon", item_r3.icon);
    }
}
function CardsComponent_For_4_Conditional_2_Conditional_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.\u0275\u0275conditionalCreate(0, CardsComponent_For_4_Conditional_2_Conditional_1_Conditional_0_Template, 2, 3, "div", 7);
        i0.\u0275\u0275elementStart(1, "div", 8)(2, "div", 9);
        i0.\u0275\u0275text(3);
        i0.\u0275\u0275elementEnd();
        i0.\u0275\u0275elementStart(4, "div", 10);
        i0.\u0275\u0275text(5);
        i0.\u0275\u0275elementEnd()();
    }
    if (rf & 2) {
        const item_r3 = i0.\u0275\u0275nextContext(2).$implicit;
        i0.\u0275\u0275conditional(item_r3.icon ? 0 : -1);
        i0.\u0275\u0275advance(3);
        i0.\u0275\u0275textInterpolate1(" ", item_r3.title, " ");
        i0.\u0275\u0275advance(2);
        i0.\u0275\u0275textInterpolate1(" ", item_r3.subtitle, " ");
    }
}
function CardsComponent_For_4_Conditional_2_Conditional_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r4 = i0.\u0275\u0275getCurrentView();
        i0.\u0275\u0275elementStart(0, "div", 13);
        i0.\u0275\u0275listener("click", function CardsComponent_For_4_Conditional_2_Conditional_2_Template_div_click_0_listener($event) {
            i0.\u0275\u0275restoreView(_r4);
            const ctx_r0 = i0.\u0275\u0275nextContext(3);
            return i0.\u0275\u0275resetView(ctx_r0.onClose($event));
        });
        i0.\u0275\u0275element(1, "mat-icon", 12);
        i0.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
        i0.\u0275\u0275advance();
        i0.\u0275\u0275property("svgIcon", "close");
    }
}
function CardsComponent_For_4_Conditional_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.\u0275\u0275projection(0);
        i0.\u0275\u0275conditionalCreate(1, CardsComponent_For_4_Conditional_2_Conditional_1_Template, 6, 3);
        i0.\u0275\u0275conditionalCreate(2, CardsComponent_For_4_Conditional_2_Conditional_2_Template, 2, 1, "div", 6);
    }
    if (rf & 2) {
        const item_r3 = i0.\u0275\u0275nextContext().$implicit;
        const ctx_r0 = i0.\u0275\u0275nextContext();
        i0.\u0275\u0275advance();
        i0.\u0275\u0275conditional(!ctx_r0.hasCustomHeader ? 1 : -1);
        i0.\u0275\u0275advance();
        i0.\u0275\u0275conditional(item_r3.showCloseButton ? 2 : -1);
    }
}
function CardsComponent_For_4_Conditional_3_Conditional_1_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        i0.\u0275\u0275elementContainer(0);
    }
}
function CardsComponent_For_4_Conditional_3_Conditional_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.\u0275\u0275template(0, CardsComponent_For_4_Conditional_3_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 14);
    }
    if (rf & 2) {
        const item_r3 = i0.\u0275\u0275nextContext(2).$implicit;
        i0.\u0275\u0275property("ngTemplateOutlet", item_r3.hasBodyContent)("ngTemplateOutletContext", i0.\u0275\u0275pureFunction1(2, _c2, item_r3));
    }
}
function CardsComponent_For_4_Conditional_3_Conditional_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.\u0275\u0275text(0);
    }
    if (rf & 2) {
        const item_r3 = i0.\u0275\u0275nextContext(2).$implicit;
        i0.\u0275\u0275textInterpolate1(" ", item_r3.body, " ");
    }
}
function CardsComponent_For_4_Conditional_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.\u0275\u0275elementStart(0, "div", 5);
        i0.\u0275\u0275conditionalCreate(1, CardsComponent_For_4_Conditional_3_Conditional_1_Template, 1, 4, "ng-container")(2, CardsComponent_For_4_Conditional_3_Conditional_2_Template, 1, 1);
        i0.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
        const item_r3 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275advance();
        i0.\u0275\u0275conditional(item_r3.hasBodyContent ? 1 : 2);
    }
}
function CardsComponent_For_4_Conditional_4_Conditional_2_For_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = i0.\u0275\u0275getCurrentView();
        i0.\u0275\u0275elementStart(0, "button", 18);
        i0.\u0275\u0275listener("click", function CardsComponent_For_4_Conditional_4_Conditional_2_For_2_Template_button_click_0_listener($event) {
            const btn_r6 = i0.\u0275\u0275restoreView(_r5).$implicit;
            const ctx_r0 = i0.\u0275\u0275nextContext(4);
            return i0.\u0275\u0275resetView(ctx_r0.onActionClick($event, btn_r6.id));
        });
        i0.\u0275\u0275text(1);
        i0.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
        const btn_r6 = ctx.$implicit;
        i0.\u0275\u0275property("ngClass", "btn-" + btn_r6.type);
        i0.\u0275\u0275advance();
        i0.\u0275\u0275textInterpolate1(" ", btn_r6.label, " ");
    }
}
function CardsComponent_For_4_Conditional_4_Conditional_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.\u0275\u0275elementStart(0, "div", 16);
        i0.\u0275\u0275repeaterCreate(1, CardsComponent_For_4_Conditional_4_Conditional_2_For_2_Template, 2, 2, "button", 17, _forTrack0);
        i0.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
        const item_r3 = i0.\u0275\u0275nextContext(2).$implicit;
        i0.\u0275\u0275advance();
        i0.\u0275\u0275repeater(item_r3.footerActions);
    }
}
function CardsComponent_For_4_Conditional_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.\u0275\u0275elementStart(0, "div", 15);
        i0.\u0275\u0275projection(1, 1);
        i0.\u0275\u0275elementEnd();
        i0.\u0275\u0275conditionalCreate(2, CardsComponent_For_4_Conditional_4_Conditional_2_Template, 3, 0, "div", 16);
    }
    if (rf & 2) {
        const item_r3 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275advance(2);
        i0.\u0275\u0275conditional(item_r3.footerActions && item_r3.footerActions.length > 0 ? 2 : -1);
    }
}
function CardsComponent_For_4_Template(rf, ctx) {
    if (rf & 1) {
        const _r2 = i0.\u0275\u0275getCurrentView();
        i0.\u0275\u0275elementStart(0, "div", 3);
        i0.\u0275\u0275listener("click", function CardsComponent_For_4_Template_div_click_0_listener() {
            const item_r3 = i0.\u0275\u0275restoreView(_r2).$implicit;
            const ctx_r0 = i0.\u0275\u0275nextContext();
            return i0.\u0275\u0275resetView(item_r3.isClickable ? ctx_r0.cardAction.emit({
                cardId: item_r3.id,
                actionId: "CARD_BODY_CLICK"
            }) : null);
        });
        i0.\u0275\u0275elementStart(1, "div", 4);
        i0.\u0275\u0275conditionalCreate(2, CardsComponent_For_4_Conditional_2_Template, 3, 2);
        i0.\u0275\u0275elementEnd();
        i0.\u0275\u0275conditionalCreate(3, CardsComponent_For_4_Conditional_3_Template, 3, 1, "div", 5);
        i0.\u0275\u0275conditionalCreate(4, CardsComponent_For_4_Conditional_4_Template, 3, 1);
        i0.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
        const item_r3 = ctx.$implicit;
        i0.\u0275\u0275classProp("clickable", item_r3.isClickable);
        i0.\u0275\u0275advance(2);
        i0.\u0275\u0275conditional(item_r3.showHeader ? 2 : -1);
        i0.\u0275\u0275advance();
        i0.\u0275\u0275conditional(item_r3.hasBodyContent || item_r3.body ? 3 : -1);
        i0.\u0275\u0275advance();
        i0.\u0275\u0275conditional(item_r3.showFooter ? 4 : -1);
    }
}
var CardsComponent = class _CardsComponent {
    iconService = inject(IconService);
    cardConfig = input.required(__spreadProps(__spreadValues({}, ngDevMode ? {
        debugName: "cardConfig"
    } : (
    /* istanbul ignore next */
    {})), {
        alias: "config"
    }));
    type = input(...ngDevMode ? [void 0, {
            debugName: "type"
        }] : (
    /* istanbul ignore next */
    []));
    cardTitle = input("", ...ngDevMode ? [{
            debugName: "cardTitle"
        }] : (
    /* istanbul ignore next */
    []));
    actions = output();
    hasCustomHeader = false;
    defaultSlotContent = contentChild(ElementRef, ...ngDevMode ? [{
            debugName: "defaultSlotContent"
        }] : (
    /* istanbul ignore next */
    []));
    hasBodyContent = computed(() => {
        const element = this.defaultSlotContent();
        return !!element;
    }, ...ngDevMode ? [{
            debugName: "hasBodyContent"
        }] : (
    /* istanbul ignore next */
    []));
    config = computed(() => {
        return this.cardConfig().map((item) => __spreadProps(__spreadValues({}, item), {
            randomBg: this.getRandomColour()
        }));
    }, ...ngDevMode ? [{
            debugName: "config"
        }] : (
    /* istanbul ignore next */
    []));
    getRandomColour() {
        const hue = Math.floor(Math.random() * 360);
        return `hsl(${hue}, 70%, 80%)`;
    }
    onClose(event) {
    }
    cardAction = output();
    onActionClick(event, actionId) {
        event.stopPropagation();
        this.actions.emit({
            cardId: this.config()[0].id,
            actionId
        });
    }
    static \u0275fac = function CardsComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CardsComponent)();
    };
    static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({
        type: _CardsComponent,
        selectors: [["cards"]],
        contentQueries: function CardsComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                i0.\u0275\u0275contentQuerySignal(dirIndex, ctx.defaultSlotContent, ElementRef, 5);
            }
            if (rf & 2) {
                i0.\u0275\u0275queryAdvance();
            }
        },
        inputs: {
            cardConfig: [1, "config", "cardConfig"],
            type: [1, "type"],
            cardTitle: [1, "cardTitle"]
        },
        outputs: {
            actions: "actions",
            cardAction: "cardAction"
        },
        ngContentSelectors: _c1,
        decls: 5,
        vars: 3,
        consts: [[1, "card-container"], [1, "card-align"], [1, "card", "card-flex", 3, "clickable"], [1, "card", "card-flex", 3, "click"], [1, "card_header"], [1, "card_body"], [1, "card_close"], [1, "card_header-icon", 3, "background-color"], [1, "card__title-container"], [1, "card_header-title"], [1, "card_header-subtitle"], [1, "card_header-icon"], [3, "svgIcon"], [1, "card_close", 3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "card_footer"], [1, "card_footer_actions"], [1, "btn", "btn-light", 3, "ngClass"], [1, "btn", "btn-light", 3, "click", "ngClass"]],
        template: function CardsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.\u0275\u0275projectionDef(_c0);
                i0.\u0275\u0275elementStart(0, "div", 0);
                i0.\u0275\u0275conditionalCreate(1, CardsComponent_Conditional_1_Template, 2, 1, "h6");
                i0.\u0275\u0275elementStart(2, "div", 1);
                i0.\u0275\u0275repeaterCreate(3, CardsComponent_For_4_Template, 5, 5, "div", 2, _forTrack0);
                i0.\u0275\u0275elementEnd()();
            }
            if (rf & 2) {
                i0.\u0275\u0275advance();
                i0.\u0275\u0275conditional(ctx.cardTitle() ? 1 : -1);
                i0.\u0275\u0275advance();
                i0.\u0275\u0275classMap(ctx.type() || "inline");
                i0.\u0275\u0275advance();
                i0.\u0275\u0275repeater(ctx.config());
            }
        },
        dependencies: [CommonModule, i1.NgClass, i1.NgTemplateOutlet, MatIconModule, i2.MatIcon],
        styles: [".card-container[_ngcontent-%COMP%]   .card-align[_ngcontent-%COMP%]{gap:15px;display:flex;flex-direction:column}.card-container[_ngcontent-%COMP%]   .card-align.inline[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr))}.card[_ngcontent-%COMP%]{border:none;box-shadow:0 2px 4px #0000001a;border-radius:5px;background:#fff}.card_header[_ngcontent-%COMP%], .card_footer[_ngcontent-%COMP%], .card_body[_ngcontent-%COMP%]{padding:15px}.card.clickable[_ngcontent-%COMP%]{cursor:pointer}.card_header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.card_header-icon[_ngcontent-%COMP%]{border-radius:50%;width:40px;height:40px;display:flex;align-items:center;justify-content:center}.card_header-subtitle[_ngcontent-%COMP%]{font-size:12px;color:#666}.card-flex[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between}"]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(CardsComponent, [{
            type: Component,
            args: [{
                    selector: "cards",
                    imports: [CommonModule, MatIconModule, NgTemplateOutlet2],
                    template: `<div class="card-container">
  @if(cardTitle()){
  <h6>{{cardTitle()}}</h6>
  }
  <div class="card-align" [class]="type() || 'inline'">
    @for(item of config(); track item.id){
    <div class="card card-flex" [class.clickable]="item.isClickable"
      (click)="item.isClickable ? cardAction.emit({cardId: item.id, actionId: 'CARD_BODY_CLICK'}) : null">
      <div class="card_header">
        @if(item.showHeader){
        <ng-content select="[custom-header]"></ng-content>
        @if(!hasCustomHeader){
        @if(item.icon){
        <div class="card_header-icon" [style.background-color]="item.randomBg">
          <mat-icon [svgIcon]="item.icon"></mat-icon>
        </div>
        }
        <div class="card__title-container">
          <div class="card_header-title">
            {{item.title}}
          </div>
          <div class="card_header-subtitle">
            {{item.subtitle}}
          </div>
        </div>
        }
        @if(item.showCloseButton){
        <div class="card_close" (click)="onClose($event)">
          <mat-icon [svgIcon]="'close'"></mat-icon>
        </div>
        }
        }
      </div>
      @if(item.hasBodyContent || item.body){
      <div class="card_body">
        @if(item.hasBodyContent){
        <ng-container *ngTemplateOutlet="item.hasBodyContent; context:{$implicit:item}"></ng-container>
        }@else {
        {{item.body}}
        }
      </div>
      }
      @if(item.showFooter){
      <div class="card_footer">
        <ng-content select="[custom-footer]"></ng-content>
      </div>
      @if(item.footerActions && item.footerActions!.length > 0){
      <div class="card_footer_actions">
        @for(btn of item.footerActions; track btn.id){
        <button class="btn btn-light" [ngClass]="'btn-' + btn.type" (click)="onActionClick($event, btn.id)">
          {{btn.label}}
        </button>
        }
      </div>
      }
      }
    </div>
    }
  </div>
</div>`,
                    styles: [".card-container .card-align{gap:15px;display:flex;flex-direction:column}.card-container .card-align.inline{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr))}.card{border:none;box-shadow:0 2px 4px #0000001a;border-radius:5px;background:#fff}.card_header,.card_footer,.card_body{padding:15px}.card.clickable{cursor:pointer}.card_header{display:flex;align-items:center;gap:10px}.card_header-icon{border-radius:50%;width:40px;height:40px;display:flex;align-items:center;justify-content:center}.card_header-subtitle{font-size:12px;color:#666}.card-flex{display:flex;flex-direction:column;justify-content:space-between}\n"]
                }]
        }], null, {
        cardConfig: [{
                type: i0.Input,
                args: [{
                        isSignal: true,
                        alias: "config",
                        required: true
                    }]
            }],
        type: [{
                type: i0.Input,
                args: [{
                        isSignal: true,
                        alias: "type",
                        required: false
                    }]
            }],
        cardTitle: [{
                type: i0.Input,
                args: [{
                        isSignal: true,
                        alias: "cardTitle",
                        required: false
                    }]
            }],
        actions: [{
                type: i0.Output,
                args: ["actions"]
            }],
        defaultSlotContent: [{
                type: i0.ContentChild,
                args: [i0.forwardRef(() => ElementRef), {
                        isSignal: true
                    }]
            }],
        cardAction: [{
                type: i0.Output,
                args: ["cardAction"]
            }]
    });
})();
export { CardsComponent };
//# sourceMappingURL=_takedemotest_krishito_ui_card.RIRGok5Lvz-dev.js.map
