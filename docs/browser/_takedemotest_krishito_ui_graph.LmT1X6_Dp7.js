import * as a from "@angular/common";
import { CommonModule as i } from "@angular/common";
import * as t from "@angular/core";
import "@angular/core";
import { BaseChartDirective as r } from "ng2-charts";
function s(e, m) { if (e & 1 && (t.\u0275\u0275elementStart(0, "div"), t.\u0275\u0275element(1, "canvas", 1), t.\u0275\u0275elementEnd()), e & 2) {
    let p = t.\u0275\u0275nextContext();
    t.\u0275\u0275advance(), t.\u0275\u0275property("data", p.GraphData)("type", p.GraphType)("options", p.GraphOptions);
} }
var G = (() => { class e {
    GraphData = null;
    GraphType = "line";
    GraphOptions = { responsive: !0 };
    constructor() { console.log("GraphComponent initialized!"); }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275cmp = t.\u0275\u0275defineComponent({ type: e, selectors: [["graph"]], inputs: { GraphData: "GraphData", GraphType: "GraphType", GraphOptions: "GraphOptions" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["baseChart", "", 3, "data", "type", "options"]], template: function (n, o) { n & 1 && t.\u0275\u0275template(0, s, 2, 3, "div", 0), n & 2 && t.\u0275\u0275property("ngIf", o.GraphData); }, dependencies: [r, i, a.NgIf], encapsulation: 2 });
} return e; })();
export { G as GraphComponent };
