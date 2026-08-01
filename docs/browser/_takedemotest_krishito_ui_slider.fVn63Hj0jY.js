import * as o from "@angular/common";
import { CommonModule as l } from "@angular/common";
import * as e from "@angular/core";
import { EventEmitter as s } from "@angular/core";
var d = ["*"];
function a(i, c) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div", 1), e.\u0275\u0275listener("click", function () { e.\u0275\u0275restoreView(t); let r = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(r.toggleSliderDrawer()); }), e.\u0275\u0275elementStart(1, "div", 2), e.\u0275\u0275listener("click", function (r) { return r.stopPropagation(); }), e.\u0275\u0275elementStart(2, "div", 3)(3, "h5"), e.\u0275\u0275text(4), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(5, "button", 4), e.\u0275\u0275listener("click", function () { e.\u0275\u0275restoreView(t); let r = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(r.toggleSliderDrawer()); }), e.\u0275\u0275text(6, "\u2715"), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(7, "div", 5), e.\u0275\u0275projection(8), e.\u0275\u0275elementEnd()()();
} if (i & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("ngClass", t.position), e.\u0275\u0275advance(), e.\u0275\u0275styleProp("width", t.position === "left" || t.position === "right" ? t.width : "100%")("height", t.position === "top" || t.position === "bottom" ? t.width : "100%"), e.\u0275\u0275advance(3), e.\u0275\u0275textInterpolate(t.title);
} }
var f = (() => { class i {
    position = "left";
    isOpen = !1;
    width = "250px";
    title = "Drawer Title";
    isOpenChange = new s;
    closed = new s;
    toggleSliderDrawer() { this.isOpen = !this.isOpen, this.isOpenChange.emit(this.isOpen), this.isOpen || this.closed.emit(); }
    static \u0275fac = function (n) { return new (n || i); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["slider-drawer"]], inputs: { position: "position", isOpen: "isOpen", width: "width", title: "title" }, outputs: { isOpenChange: "isOpenChange", closed: "closed" }, ngContentSelectors: d, decls: 1, vars: 1, consts: [["class", "slider-drawer", 3, "ngClass", "click", 4, "ngIf"], [1, "slider-drawer", 3, "click", "ngClass"], [1, "slider-drawer_content", 3, "click"], [1, "slider-drawer_header"], [1, "ui-close-x", 3, "click"], [1, "slider-drawer_body"]], template: function (n, r) { n & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275template(0, a, 9, 6, "div", 0)), n & 2 && e.\u0275\u0275property("ngIf", r.isOpen); }, dependencies: [l, o.NgClass, o.NgIf], styles: [".slider-drawer[_ngcontent-%COMP%]{position:fixed;width:100%;height:100vh;top:0;background:#000000a3;z-index:1;display:flex}.slider-drawer.left[_ngcontent-%COMP%]{justify-content:flex-start}.slider-drawer.right[_ngcontent-%COMP%]{justify-content:flex-end}.slider-drawer_content[_ngcontent-%COMP%]{background:var(--%NS%main-bg-color)}.slider-drawer_header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:15px;align-items:center;border-bottom:1px solid #e0e0e0}.slider-drawer_header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin-bottom:0}.slider-drawer_body[_ngcontent-%COMP%]{height:calc(100vh - 100px);overflow:auto}"] });
} return i; })();
export { f as SliderDrawerComponent };
