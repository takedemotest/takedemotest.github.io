import * as t from "@angular/core";
import { EventEmitter as _ } from "@angular/core";
import * as r from "@angular/forms";
import { Validators as m, ReactiveFormsModule as C } from "@angular/forms";
import { debounceTime as u } from "rxjs";
import * as s from "@angular/common";
import { CommonModule as x } from "@angular/common";
import { takeUntilDestroyed as g } from "@angular/core/rxjs-interop";
import * as d from "@angular/material/icon";
import { MatIconModule as v } from "@angular/material/icon";
import * as c from "@angular/material/menu";
import { MatMenuModule as h } from "@angular/material/menu";
import * as p from "@takedemotest/krishito-ui-icons";
var y = (i, o) => o.name, f = (i, o) => o.value, b = (i, o) => o.label;
function F(i, o) { i & 1 && (t.\u0275\u0275elementStart(0, "small", 7), t.\u0275\u0275text(1, "*"), t.\u0275\u0275elementEnd()); }
function D(i, o) { if (i & 1 && (t.\u0275\u0275element(0, "input", 8), t.\u0275\u0275controlCreate()), i & 2) {
    let e = t.\u0275\u0275nextContext().$implicit;
    t.\u0275\u0275property("type", e.type)("placeholder", e.placeholder)("formControlName", e.name), t.\u0275\u0275control();
} }
function T(i, o) { if (i & 1 && (t.\u0275\u0275element(0, "textarea", 9), t.\u0275\u0275controlCreate()), i & 2) {
    let e = t.\u0275\u0275nextContext().$implicit;
    t.\u0275\u0275property("placeholder", e.placeholder)("formControlName", e.name), t.\u0275\u0275control();
} }
function M(i, o) { if (i & 1 && (t.\u0275\u0275elementStart(0, "option", 13), t.\u0275\u0275text(1), t.\u0275\u0275elementEnd()), i & 2) {
    let e = o.$implicit;
    t.\u0275\u0275property("value", e.value), t.\u0275\u0275advance(), t.\u0275\u0275textInterpolate(e.label);
} }
function I(i, o) { if (i & 1 && (t.\u0275\u0275elementStart(0, "select", 10), t.\u0275\u0275repeaterCreate(1, M, 2, 2, "option", 13, f), t.\u0275\u0275elementEnd(), t.\u0275\u0275controlCreate()), i & 2) {
    let e = t.\u0275\u0275nextContext().$implicit;
    t.\u0275\u0275property("formControlName", e.name), t.\u0275\u0275control(), t.\u0275\u0275advance(), t.\u0275\u0275repeater(e.options);
} }
function S(i, o) { if (i & 1 && (t.\u0275\u0275element(0, "input", 11), t.\u0275\u0275controlCreate()), i & 2) {
    let e = t.\u0275\u0275nextContext().$implicit;
    t.\u0275\u0275property("formControlName", e.name), t.\u0275\u0275control();
} }
function k(i, o) { if (i & 1 && (t.\u0275\u0275elementStart(0, "div", 14), t.\u0275\u0275element(1, "input", 15), t.\u0275\u0275controlCreate(), t.\u0275\u0275elementStart(2, "label", 16), t.\u0275\u0275text(3), t.\u0275\u0275elementEnd()()), i & 2) {
    let e = o.$implicit, n = t.\u0275\u0275nextContext(2).$implicit;
    t.\u0275\u0275advance(), t.\u0275\u0275property("name", n.name)("formControlName", n.name)("value", e.value), t.\u0275\u0275control(), t.\u0275\u0275advance(2), t.\u0275\u0275textInterpolate(e.label);
} }
function O(i, o) { if (i & 1 && t.\u0275\u0275repeaterCreate(0, k, 4, 4, "div", 14, f), i & 2) {
    let e = t.\u0275\u0275nextContext().$implicit;
    t.\u0275\u0275repeater(e.options);
} }
function N(i, o) { if (i & 1 && t.\u0275\u0275text(0), i & 2) {
    let e = t.\u0275\u0275nextContext(2).$implicit;
    t.\u0275\u0275textInterpolate1(" ", e.label, " is required ");
} }
function E(i, o) { i & 1 && t.\u0275\u0275text(0, " Please enter a valid email address "); }
function $(i, o) { if (i & 1 && t.\u0275\u0275text(0), i & 2) {
    let e = t.\u0275\u0275nextContext(2).$implicit, n = t.\u0275\u0275nextContext();
    t.\u0275\u0275textInterpolate2(" ", e.label, " must be at least ", n.form.get(e.name)?.errors?.minlength.requiredLength, " characters long ");
} }
function w(i, o) { if (i & 1 && t.\u0275\u0275text(0), i & 2) {
    let e = t.\u0275\u0275nextContext(2).$implicit, n = t.\u0275\u0275nextContext();
    t.\u0275\u0275textInterpolate2(" ", e.label, " cannot be more than ", n.form.get(e.name)?.errors?.maxlength.requiredLength, " characters long ");
} }
function V(i, o) { if (i & 1 && (t.\u0275\u0275elementStart(0, "div", 17), t.\u0275\u0275conditionalCreate(1, N, 1, 1), t.\u0275\u0275conditionalCreate(2, E, 1, 0), t.\u0275\u0275conditionalCreate(3, $, 1, 2), t.\u0275\u0275conditionalCreate(4, w, 1, 2), t.\u0275\u0275elementEnd()), i & 2) {
    let e = t.\u0275\u0275nextContext().$implicit, n = t.\u0275\u0275nextContext();
    t.\u0275\u0275advance(), t.\u0275\u0275conditional(n.form.get(e.name)?.errors?.required ? 1 : -1), t.\u0275\u0275advance(), t.\u0275\u0275conditional(n.form.get(e.name)?.errors?.email ? 2 : -1), t.\u0275\u0275advance(), t.\u0275\u0275conditional(n.form.get(e.name)?.errors?.minlength ? 3 : -1), t.\u0275\u0275advance(), t.\u0275\u0275conditional(n.form.get(e.name)?.errors?.maxlength ? 4 : -1);
} }
function P(i, o) { if (i & 1 && (t.\u0275\u0275elementStart(0, "div", 3)(1, "label", 6), t.\u0275\u0275conditionalCreate(2, F, 2, 0, "small", 7), t.\u0275\u0275text(3), t.\u0275\u0275elementEnd(), t.\u0275\u0275conditionalCreate(4, D, 1, 3, "input", 8)(5, T, 1, 2, "textarea", 9)(6, I, 3, 1, "select", 10)(7, S, 1, 1, "input", 11)(8, O, 2, 0), t.\u0275\u0275template(9, V, 5, 4, "div", 12), t.\u0275\u0275elementEnd()), i & 2) {
    let e = o.$implicit, n = t.\u0275\u0275nextContext();
    t.\u0275\u0275advance(), t.\u0275\u0275property("for", e.name), t.\u0275\u0275advance(), t.\u0275\u0275conditional(e.required ? 2 : -1), t.\u0275\u0275advance(), t.\u0275\u0275textInterpolate1(" ", e.label), t.\u0275\u0275advance(), t.\u0275\u0275conditional(e.type === "text" || e.type === "email" || e.type === "password" || e.type === "number" ? 4 : e.type === "textarea" ? 5 : e.type === "select" ? 6 : e.type === "checkbox" ? 7 : e.type === "radio" ? 8 : -1), t.\u0275\u0275advance(5), t.\u0275\u0275property("ngIf", n.form.get(e.name)?.touched && n.form.get(e.name)?.invalid);
} }
function A(i, o) { if (i & 1 && (t.\u0275\u0275element(0, "mat-icon", 19), t.\u0275\u0275text(1)), i & 2) {
    let e = t.\u0275\u0275nextContext(2);
    t.\u0275\u0275property("svgIcon", t.\u0275\u0275interpolate(e.buttonConfig.icon)), t.\u0275\u0275advance(), t.\u0275\u0275textInterpolate1(" ", e.buttonConfig.label, " ");
} }
function L(i, o) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 18), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let a = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(a.handleAction(a.buttonConfig.action)); }), t.\u0275\u0275text(1), t.\u0275\u0275conditionalCreate(2, A, 2, 3), t.\u0275\u0275elementEnd();
} if (i & 2) {
    let e = t.\u0275\u0275nextContext();
    t.\u0275\u0275classMap(e.buttonConfig.cssClass || "btn btn-primary"), t.\u0275\u0275classProp("btn-disabled", e.form.invalid), t.\u0275\u0275property("type", e.buttonConfig.type || "submit")("disabled", e.form.invalid), t.\u0275\u0275advance(), t.\u0275\u0275textInterpolate1(" ", e.buttonConfig.label, " "), t.\u0275\u0275advance(), t.\u0275\u0275conditional(e.buttonConfig.icon ? 2 : -1);
} }
function R(i, o) { if (i & 1 && t.\u0275\u0275element(0, "mat-icon", 19), i & 2) {
    let e = t.\u0275\u0275nextContext(2);
    t.\u0275\u0275property("svgIcon", t.\u0275\u0275interpolate(e.buttonConfig?.icon));
} }
function q(i, o) { if (i & 1 && (t.\u0275\u0275elementStart(0, "mat-icon"), t.\u0275\u0275text(1), t.\u0275\u0275elementEnd()), i & 2) {
    let e = t.\u0275\u0275nextContext().$implicit;
    t.\u0275\u0275advance(), t.\u0275\u0275textInterpolate(e.icon);
} }
function j(i, o) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "button", 22), t.\u0275\u0275listener("click", function () { let a = t.\u0275\u0275restoreView(e).$implicit, l = t.\u0275\u0275nextContext(2); return t.\u0275\u0275resetView(l.handleAction(a.action)); }), t.\u0275\u0275conditionalCreate(1, q, 2, 1, "mat-icon"), t.\u0275\u0275elementStart(2, "span"), t.\u0275\u0275text(3), t.\u0275\u0275elementEnd()();
} if (i & 2) {
    let e = o.$implicit;
    t.\u0275\u0275advance(), t.\u0275\u0275conditional(e.icon ? 1 : -1), t.\u0275\u0275advance(2), t.\u0275\u0275textInterpolate(e.label);
} }
function G(i, o) { if (i & 1 && (t.\u0275\u0275elementStart(0, "button", 20), t.\u0275\u0275conditionalCreate(1, R, 1, 2, "mat-icon", 19), t.\u0275\u0275text(2), t.\u0275\u0275elementStart(3, "mat-icon"), t.\u0275\u0275text(4, "arrow_drop_down"), t.\u0275\u0275elementEnd()(), t.\u0275\u0275elementStart(5, "mat-menu", null, 0), t.\u0275\u0275repeaterCreate(7, j, 4, 2, "button", 21, b), t.\u0275\u0275elementEnd()), i & 2) {
    let e = t.\u0275\u0275reference(6), n = t.\u0275\u0275nextContext();
    t.\u0275\u0275property("matMenuTriggerFor", e)("className", n.buttonConfig?.cssClass || "btn btn-primary")("disabled", n.buttonConfig?.disabled || n.form.invalid), t.\u0275\u0275advance(), t.\u0275\u0275conditional(n.buttonConfig?.icon ? 1 : -1), t.\u0275\u0275advance(), t.\u0275\u0275textInterpolate1(" ", n.buttonConfig?.label, " "), t.\u0275\u0275advance(5), t.\u0275\u0275repeater(n.buttonConfig?.dropdownItem);
} }
var tt = (() => { class i {
    fb;
    iconService;
    cdr;
    destroyRef;
    fields = [];
    buttonConfig;
    title;
    type;
    initialData = null;
    actionTriggered = new _;
    form;
    constructor(e, n, a, l) { this.fb = e, this.iconService = n, this.cdr = a, this.destroyRef = l; }
    ngOnInit() { this.form || this.createForm(), this.listenToValueChange(); }
    ngOnChanges(e) { e.fields && (this.form ? this.syncFormControls(this.fields) : this.createForm(), this.cdr.markForCheck()), e.initialData && this.form && (this.initialData ? this.form.patchValue(this.initialData, { emitEvent: !1 }) : this.form.reset(), this.cdr.markForCheck()); }
    createForm() { let e = {}; this.fields.forEach(n => { let a = []; n.required && a.push(m.required), n.minLength && a.push(m.minLength(n.minLength)), n.maxLength && a.push(m.maxLength(n.maxLength)); let l = this.initialData ? this.initialData[n.name] : ""; e[n.name] = [{ value: l, disabled: n.disabled }, a]; }), this.form = this.fb.group(e); }
    syncFormControls(e) { if (!this.form)
        return; let n = Object.keys(this.form.controls), a = e.map(l => l.name); n.forEach(l => { a.includes(l) || this.form.removeControl(l); }); }
    listenToValueChange() { this.form.valueChanges.pipe(u(500), g(this.destroyRef)).subscribe(e => { console.log("Form State Stream:", e), this.runAiAgent(e); }); }
    runAiAgent(e) { }
    handleAction(e) { e && (this.form.valid ? this.actionTriggered.emit({ action: e, data: this.form.getRawValue() }) : (this.form.markAllAsTouched(), this.cdr.markForCheck())); }
    static \u0275fac = function (n) { return new (n || i)(t.\u0275\u0275directiveInject(r.FormBuilder), t.\u0275\u0275directiveInject(p.IconService), t.\u0275\u0275directiveInject(t.ChangeDetectorRef), t.\u0275\u0275directiveInject(t.DestroyRef)); };
    static \u0275cmp = t.\u0275\u0275defineComponent({ type: i, selectors: [["dynamic-form"]], inputs: { fields: "fields", buttonConfig: "buttonConfig", title: "title", type: "type", initialData: "initialData" }, outputs: { actionTriggered: "actionTriggered" }, features: [t.\u0275\u0275NgOnChangesFeature], decls: 9, vars: 6, consts: [["menu", "matMenu"], [1, "reactive-form", 3, "formGroup"], [1, "form-container"], [1, "form-field-group"], [1, "form-actions"], [3, "type", "class", "disabled", "btn-disabled"], [3, "for"], [1, "error-text"], [1, "form-control", 3, "type", "placeholder", "formControlName"], [1, "form-control", 3, "placeholder", "formControlName"], [1, "form-control", 3, "formControlName"], ["type", "checkbox", 1, "form-control", 3, "formControlName"], ["class", "error-message", 4, "ngIf"], [3, "value"], [1, "form-check"], ["type", "radio", 1, "form-check-input", 3, "name", "formControlName", "value"], [1, "form-check-label"], [1, "error-message"], [3, "click", "type", "disabled"], [3, "svgIcon"], ["mat-raised-button", "", 3, "matMenuTriggerFor", "className", "disabled"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"]], template: function (n, a) { n & 1 && (t.\u0275\u0275elementStart(0, "form", 1)(1, "h4"), t.\u0275\u0275text(2), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(3, "div", 2), t.\u0275\u0275repeaterCreate(4, P, 10, 5, "div", 3, y), t.\u0275\u0275elementStart(6, "div", 4), t.\u0275\u0275conditionalCreate(7, L, 3, 8, "button", 5), t.\u0275\u0275conditionalCreate(8, G, 9, 5), t.\u0275\u0275elementEnd()()()), n & 2 && (t.\u0275\u0275property("formGroup", a.form), t.\u0275\u0275advance(2), t.\u0275\u0275textInterpolate(a.title), t.\u0275\u0275advance(), t.\u0275\u0275classMap(a.type || "block"), t.\u0275\u0275advance(), t.\u0275\u0275repeater(a.fields), t.\u0275\u0275advance(3), t.\u0275\u0275conditional(a.buttonConfig && !a.buttonConfig.dropdown ? 7 : -1), t.\u0275\u0275advance(), t.\u0275\u0275conditional(a.buttonConfig?.dropdown ? 8 : -1)); }, dependencies: [C, r.\u0275NgNoValidate, r.NgSelectOption, r.\u0275NgSelectMultipleOption, r.DefaultValueAccessor, r.CheckboxControlValueAccessor, r.SelectControlValueAccessor, r.RadioControlValueAccessor, r.NgControlStatus, r.NgControlStatusGroup, r.FormGroupDirective, r.FormControlName, x, s.NgIf, v, d.MatIcon, h, c.MatMenu, c.MatMenuItem, c.MatMenuTrigger], styles: [".reactive-form[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:20px}.reactive-form[_ngcontent-%COMP%]   .form-container.inline[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr))}.reactive-form[_ngcontent-%COMP%]   .form-container.block[_ngcontent-%COMP%]{display:flex;flex-direction:column}.reactive-form[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]{display:flex;align-items:end}.reactive-form[_ngcontent-%COMP%]   .form-field-group[_ngcontent-%COMP%]{position:relative}.reactive-form[_ngcontent-%COMP%]   .form-field-group[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{position:absolute;bottom:-15px;left:0;color:red;font-size:10px}"] });
} return i; })();
export { tt as DynamicFormComponent };
