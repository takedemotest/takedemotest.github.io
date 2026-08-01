// node_modules/@takedemotest/krishito-ui-graph/fesm2022/takedemotest-krishito-ui-graph.mjs
import * as i1 from "@angular/common";
import { CommonModule } from "@angular/common";
import * as i0 from "@angular/core";
import { Input, Component } from "@angular/core";
import { BaseChartDirective } from "ng2-charts";
function GraphComponent_div_0_Template(rf, ctx) {
    if (rf & 1) {
        i0.\u0275\u0275elementStart(0, "div");
        i0.\u0275\u0275element(1, "canvas", 1);
        i0.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext();
        i0.\u0275\u0275advance();
        i0.\u0275\u0275property("data", ctx_r0.GraphData)("type", ctx_r0.GraphType)("options", ctx_r0.GraphOptions);
    }
}
var GraphComponent = class _GraphComponent {
    GraphData = null;
    GraphType = "line";
    GraphOptions = {
        responsive: true
    };
    constructor() {
        console.log("GraphComponent initialized!");
    }
    static \u0275fac = function GraphComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _GraphComponent)();
    };
    static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({
        type: _GraphComponent,
        selectors: [["graph"]],
        inputs: {
            GraphData: "GraphData",
            GraphType: "GraphType",
            GraphOptions: "GraphOptions"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], ["baseChart", "", 3, "data", "type", "options"]],
        template: function GraphComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.\u0275\u0275template(0, GraphComponent_div_0_Template, 2, 3, "div", 0);
            }
            if (rf & 2) {
                i0.\u0275\u0275property("ngIf", ctx.GraphData);
            }
        },
        dependencies: [BaseChartDirective, CommonModule, i1.NgIf],
        encapsulation: 2
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(GraphComponent, [{
            type: Component,
            args: [{
                    selector: "graph",
                    imports: [BaseChartDirective, CommonModule],
                    standalone: true,
                    template: '<div *ngIf="GraphData">\n  <canvas \n    baseChart\n    [data]="GraphData"\n    [type]="GraphType"\n    [options]="GraphOptions">\n  </canvas>\n</div>'
                }]
        }], () => [], {
        GraphData: [{
                type: Input
            }],
        GraphType: [{
                type: Input
            }],
        GraphOptions: [{
                type: Input
            }]
    });
})();
export { GraphComponent };
//# sourceMappingURL=_takedemotest_krishito_ui_graph.8jgar-JYjr-dev.js.map
