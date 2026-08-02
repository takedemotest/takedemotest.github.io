// node_modules/@takedemotest/krishito-ui-slider/fesm2022/takedemotest-krishito-ui-slider.mjs
import * as i1 from "@angular/common";
import { CommonModule } from "@angular/common";
import * as i0 from "@angular/core";
import { EventEmitter, Output, Input, Component } from "@angular/core";
var _c0 = ["*"];
function SliderDrawerComponent_div_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r1 = i0.\u0275\u0275getCurrentView();
        i0.\u0275\u0275elementStart(0, "div", 1);
        i0.\u0275\u0275listener("click", function SliderDrawerComponent_div_0_Template_div_click_0_listener() {
            i0.\u0275\u0275restoreView(_r1);
            const ctx_r1 = i0.\u0275\u0275nextContext();
            return i0.\u0275\u0275resetView(ctx_r1.toggleSliderDrawer());
        });
        i0.\u0275\u0275elementStart(1, "div", 2);
        i0.\u0275\u0275listener("click", function SliderDrawerComponent_div_0_Template_div_click_1_listener($event) {
            return $event.stopPropagation();
        });
        i0.\u0275\u0275elementStart(2, "div", 3)(3, "h5");
        i0.\u0275\u0275text(4);
        i0.\u0275\u0275elementEnd();
        i0.\u0275\u0275elementStart(5, "button", 4);
        i0.\u0275\u0275listener("click", function SliderDrawerComponent_div_0_Template_button_click_5_listener() {
            i0.\u0275\u0275restoreView(_r1);
            const ctx_r1 = i0.\u0275\u0275nextContext();
            return i0.\u0275\u0275resetView(ctx_r1.toggleSliderDrawer());
        });
        i0.\u0275\u0275text(6, "\u2715");
        i0.\u0275\u0275elementEnd()();
        i0.\u0275\u0275elementStart(7, "div", 5);
        i0.\u0275\u0275projection(8);
        i0.\u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
        const ctx_r1 = i0.\u0275\u0275nextContext();
        i0.\u0275\u0275property("ngClass", ctx_r1.position);
        i0.\u0275\u0275advance();
        i0.\u0275\u0275styleProp("width", ctx_r1.position === "left" || ctx_r1.position === "right" ? ctx_r1.width : "100%")("height", ctx_r1.position === "top" || ctx_r1.position === "bottom" ? ctx_r1.width : "100%");
        i0.\u0275\u0275advance(3);
        i0.\u0275\u0275textInterpolate(ctx_r1.title);
    }
}
var SliderDrawerComponent = class _SliderDrawerComponent {
    position = "left";
    isOpen = false;
    width = "250px";
    title = "Drawer Title";
    isOpenChange = new EventEmitter();
    closed = new EventEmitter();
    toggleSliderDrawer() {
        this.isOpen = !this.isOpen;
        this.isOpenChange.emit(this.isOpen);
        if (!this.isOpen) {
            this.closed.emit();
        }
    }
    static \u0275fac = function SliderDrawerComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _SliderDrawerComponent)();
    };
    static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({
        type: _SliderDrawerComponent,
        selectors: [["slider-drawer"]],
        inputs: {
            position: "position",
            isOpen: "isOpen",
            width: "width",
            title: "title"
        },
        outputs: {
            isOpenChange: "isOpenChange",
            closed: "closed"
        },
        ngContentSelectors: _c0,
        decls: 1,
        vars: 1,
        consts: [["class", "slider-drawer", 3, "ngClass", "click", 4, "ngIf"], [1, "slider-drawer", 3, "click", "ngClass"], [1, "slider-drawer_content", 3, "click"], [1, "slider-drawer_header"], [1, "ui-close-x", 3, "click"], [1, "slider-drawer_body"]],
        template: function SliderDrawerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.\u0275\u0275projectionDef();
                i0.\u0275\u0275template(0, SliderDrawerComponent_div_0_Template, 9, 6, "div", 0);
            }
            if (rf & 2) {
                i0.\u0275\u0275property("ngIf", ctx.isOpen);
            }
        },
        dependencies: [CommonModule, i1.NgClass, i1.NgIf],
        styles: [".slider-drawer[_ngcontent-%COMP%]{position:fixed;width:100%;height:100vh;top:0;background:#000000a3;z-index:1;display:flex}.slider-drawer.left[_ngcontent-%COMP%]{justify-content:flex-start}.slider-drawer.right[_ngcontent-%COMP%]{justify-content:flex-end}.slider-drawer_content[_ngcontent-%COMP%]{background:var(--%NS%main-bg-color)}.slider-drawer_header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:15px;align-items:center;border-bottom:1px solid #e0e0e0}.slider-drawer_header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin-bottom:0}.slider-drawer_body[_ngcontent-%COMP%]{height:calc(100vh - 100px);overflow:auto}"]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(SliderDrawerComponent, [{
            type: Component,
            args: [{
                    selector: "slider-drawer",
                    standalone: true,
                    imports: [CommonModule],
                    template: `<div class="slider-drawer" *ngIf="isOpen" (click)="toggleSliderDrawer()" [ngClass]="position">
  <div class="slider-drawer_content" 
    [style.width]="position === 'left' || position === 'right' ? width : '100%'"
    [style.height]="position === 'top' || position === 'bottom' ? width : '100%'"   
    (click)="$event.stopPropagation()">
    <div class="slider-drawer_header">
         <h5>{{ title }}</h5>
         <button class="ui-close-x" (click)="toggleSliderDrawer()">\u2715</button>
    </div>
    <div class="slider-drawer_body">
         <ng-content></ng-content>
    </div>
  </div>
</div>`,
                    styles: [".slider-drawer{position:fixed;width:100%;height:100vh;top:0;background:#000000a3;z-index:1;display:flex}.slider-drawer.left{justify-content:flex-start}.slider-drawer.right{justify-content:flex-end}.slider-drawer_content{background:var(--main-bg-color)}.slider-drawer_header{display:flex;justify-content:space-between;padding:15px;align-items:center;border-bottom:1px solid #e0e0e0}.slider-drawer_header h5{margin-bottom:0}.slider-drawer_body{height:calc(100vh - 100px);overflow:auto}\n"]
                }]
        }], null, {
        position: [{
                type: Input
            }],
        isOpen: [{
                type: Input
            }],
        width: [{
                type: Input
            }],
        title: [{
                type: Input
            }],
        isOpenChange: [{
                type: Output
            }],
        closed: [{
                type: Output
            }]
    });
})();
export { SliderDrawerComponent };
//# sourceMappingURL=_takedemotest_krishito_ui_slider.dAOhEiQ3qk-dev.js.map
