// node_modules/@takedemotest/krishito-ui-form/fesm2022/takedemotest-krishito-ui-form.mjs
import * as i0 from "@angular/core";
import { EventEmitter, Output, Input, ChangeDetectionStrategy, Component } from "@angular/core";
import * as i1 from "@angular/forms";
import { Validators, ReactiveFormsModule } from "@angular/forms";
import { debounceTime } from "rxjs";
import * as i3 from "@angular/common";
import { CommonModule } from "@angular/common";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import * as i4 from "@angular/material/icon";
import { MatIconModule } from "@angular/material/icon";
import * as i5 from "@angular/material/menu";
import { MatMenuModule } from "@angular/material/menu";
import * as i2 from "@takedemotest/krishito-ui-icons";
var _forTrack0 = ($index, $item) => $item.name;
var _forTrack1 = ($index, $item) => $item.value;
var _forTrack2 = ($index, $item) => $item.label;
function DynamicFormComponent_For_5_Conditional_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.\u0275\u0275elementStart(0, "small", 7);
        i0.\u0275\u0275text(1, "*");
        i0.\u0275\u0275elementEnd();
    }
}
function DynamicFormComponent_For_5_Conditional_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.\u0275\u0275element(0, "input", 8);
        i0.\u0275\u0275controlCreate();
    }
    if (rf & 2) {
        const field_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275property("type", field_r1.type)("placeholder", field_r1.placeholder)("formControlName", field_r1.name);
        i0.\u0275\u0275control();
    }
}
function DynamicFormComponent_For_5_Conditional_5_Template(rf, ctx) {
    if (rf & 1) {
        i0.\u0275\u0275element(0, "textarea", 9);
        i0.\u0275\u0275controlCreate();
    }
    if (rf & 2) {
        const field_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275property("placeholder", field_r1.placeholder)("formControlName", field_r1.name);
        i0.\u0275\u0275control();
    }
}
function DynamicFormComponent_For_5_Conditional_6_For_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.\u0275\u0275elementStart(0, "option", 13);
        i0.\u0275\u0275text(1);
        i0.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
        const opt_r2 = ctx.$implicit;
        i0.\u0275\u0275property("value", opt_r2.value);
        i0.\u0275\u0275advance();
        i0.\u0275\u0275textInterpolate(opt_r2.label);
    }
}
function DynamicFormComponent_For_5_Conditional_6_Template(rf, ctx) {
    if (rf & 1) {
        i0.\u0275\u0275elementStart(0, "select", 10);
        i0.\u0275\u0275repeaterCreate(1, DynamicFormComponent_For_5_Conditional_6_For_2_Template, 2, 2, "option", 13, _forTrack1);
        i0.\u0275\u0275elementEnd();
        i0.\u0275\u0275controlCreate();
    }
    if (rf & 2) {
        const field_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275property("formControlName", field_r1.name);
        i0.\u0275\u0275control();
        i0.\u0275\u0275advance();
        i0.\u0275\u0275repeater(field_r1.options);
    }
}
function DynamicFormComponent_For_5_Conditional_7_Template(rf, ctx) {
    if (rf & 1) {
        i0.\u0275\u0275element(0, "input", 11);
        i0.\u0275\u0275controlCreate();
    }
    if (rf & 2) {
        const field_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275property("formControlName", field_r1.name);
        i0.\u0275\u0275control();
    }
}
function DynamicFormComponent_For_5_Conditional_8_For_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.\u0275\u0275elementStart(0, "div", 14);
        i0.\u0275\u0275element(1, "input", 15);
        i0.\u0275\u0275controlCreate();
        i0.\u0275\u0275elementStart(2, "label", 16);
        i0.\u0275\u0275text(3);
        i0.\u0275\u0275elementEnd()();
    }
    if (rf & 2) {
        const opt_r3 = ctx.$implicit;
        const field_r1 = i0.\u0275\u0275nextContext(2).$implicit;
        i0.\u0275\u0275advance();
        i0.\u0275\u0275property("name", field_r1.name)("formControlName", field_r1.name)("value", opt_r3.value);
        i0.\u0275\u0275control();
        i0.\u0275\u0275advance(2);
        i0.\u0275\u0275textInterpolate(opt_r3.label);
    }
}
function DynamicFormComponent_For_5_Conditional_8_Template(rf, ctx) {
    if (rf & 1) {
        i0.\u0275\u0275repeaterCreate(0, DynamicFormComponent_For_5_Conditional_8_For_1_Template, 4, 4, "div", 14, _forTrack1);
    }
    if (rf & 2) {
        const field_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275repeater(field_r1.options);
    }
}
function DynamicFormComponent_For_5_div_9_Conditional_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.\u0275\u0275text(0);
    }
    if (rf & 2) {
        const field_r1 = i0.\u0275\u0275nextContext(2).$implicit;
        i0.\u0275\u0275textInterpolate1(" ", field_r1.label, " is required ");
    }
}
function DynamicFormComponent_For_5_div_9_Conditional_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.\u0275\u0275text(0, " Please enter a valid email address ");
    }
}
function DynamicFormComponent_For_5_div_9_Conditional_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.\u0275\u0275text(0);
    }
    if (rf & 2) {
        const field_r1 = i0.\u0275\u0275nextContext(2).$implicit;
        const ctx_r3 = i0.\u0275\u0275nextContext();
        i0.\u0275\u0275textInterpolate2(" ", field_r1.label, " must be at least ", ctx_r3.form.get(field_r1.name)?.errors?.["minlength"].requiredLength, " characters long ");
    }
}
function DynamicFormComponent_For_5_div_9_Conditional_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.\u0275\u0275text(0);
    }
    if (rf & 2) {
        const field_r1 = i0.\u0275\u0275nextContext(2).$implicit;
        const ctx_r3 = i0.\u0275\u0275nextContext();
        i0.\u0275\u0275textInterpolate2(" ", field_r1.label, " cannot be more than ", ctx_r3.form.get(field_r1.name)?.errors?.["maxlength"].requiredLength, " characters long ");
    }
}
function DynamicFormComponent_For_5_div_9_Template(rf, ctx) {
    if (rf & 1) {
        i0.\u0275\u0275elementStart(0, "div", 17);
        i0.\u0275\u0275conditionalCreate(1, DynamicFormComponent_For_5_div_9_Conditional_1_Template, 1, 1);
        i0.\u0275\u0275conditionalCreate(2, DynamicFormComponent_For_5_div_9_Conditional_2_Template, 1, 0);
        i0.\u0275\u0275conditionalCreate(3, DynamicFormComponent_For_5_div_9_Conditional_3_Template, 1, 2);
        i0.\u0275\u0275conditionalCreate(4, DynamicFormComponent_For_5_div_9_Conditional_4_Template, 1, 2);
        i0.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
        const field_r1 = i0.\u0275\u0275nextContext().$implicit;
        const ctx_r3 = i0.\u0275\u0275nextContext();
        i0.\u0275\u0275advance();
        i0.\u0275\u0275conditional(ctx_r3.form.get(field_r1.name)?.errors?.["required"] ? 1 : -1);
        i0.\u0275\u0275advance();
        i0.\u0275\u0275conditional(ctx_r3.form.get(field_r1.name)?.errors?.["email"] ? 2 : -1);
        i0.\u0275\u0275advance();
        i0.\u0275\u0275conditional(ctx_r3.form.get(field_r1.name)?.errors?.["minlength"] ? 3 : -1);
        i0.\u0275\u0275advance();
        i0.\u0275\u0275conditional(ctx_r3.form.get(field_r1.name)?.errors?.["maxlength"] ? 4 : -1);
    }
}
function DynamicFormComponent_For_5_Template(rf, ctx) {
    if (rf & 1) {
        i0.\u0275\u0275elementStart(0, "div", 3)(1, "label", 6);
        i0.\u0275\u0275conditionalCreate(2, DynamicFormComponent_For_5_Conditional_2_Template, 2, 0, "small", 7);
        i0.\u0275\u0275text(3);
        i0.\u0275\u0275elementEnd();
        i0.\u0275\u0275conditionalCreate(4, DynamicFormComponent_For_5_Conditional_4_Template, 1, 3, "input", 8)(5, DynamicFormComponent_For_5_Conditional_5_Template, 1, 2, "textarea", 9)(6, DynamicFormComponent_For_5_Conditional_6_Template, 3, 1, "select", 10)(7, DynamicFormComponent_For_5_Conditional_7_Template, 1, 1, "input", 11)(8, DynamicFormComponent_For_5_Conditional_8_Template, 2, 0);
        i0.\u0275\u0275template(9, DynamicFormComponent_For_5_div_9_Template, 5, 4, "div", 12);
        i0.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
        const field_r1 = ctx.$implicit;
        const ctx_r3 = i0.\u0275\u0275nextContext();
        i0.\u0275\u0275advance();
        i0.\u0275\u0275property("for", field_r1.name);
        i0.\u0275\u0275advance();
        i0.\u0275\u0275conditional(field_r1.required ? 2 : -1);
        i0.\u0275\u0275advance();
        i0.\u0275\u0275textInterpolate1(" ", field_r1.label);
        i0.\u0275\u0275advance();
        i0.\u0275\u0275conditional(field_r1.type === "text" || field_r1.type === "email" || field_r1.type === "password" || field_r1.type === "number" ? 4 : field_r1.type === "textarea" ? 5 : field_r1.type === "select" ? 6 : field_r1.type === "checkbox" ? 7 : field_r1.type === "radio" ? 8 : -1);
        i0.\u0275\u0275advance(5);
        i0.\u0275\u0275property("ngIf", ctx_r3.form.get(field_r1.name)?.touched && ctx_r3.form.get(field_r1.name)?.invalid);
    }
}
function DynamicFormComponent_Conditional_7_Conditional_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.\u0275\u0275element(0, "mat-icon", 19);
        i0.\u0275\u0275text(1);
    }
    if (rf & 2) {
        const ctx_r3 = i0.\u0275\u0275nextContext(2);
        i0.\u0275\u0275property("svgIcon", i0.\u0275\u0275interpolate(ctx_r3.buttonConfig.icon));
        i0.\u0275\u0275advance();
        i0.\u0275\u0275textInterpolate1(" ", ctx_r3.buttonConfig.label, " ");
    }
}
function DynamicFormComponent_Conditional_7_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = i0.\u0275\u0275getCurrentView();
        i0.\u0275\u0275elementStart(0, "button", 18);
        i0.\u0275\u0275listener("click", function DynamicFormComponent_Conditional_7_Template_button_click_0_listener() {
            i0.\u0275\u0275restoreView(_r5);
            const ctx_r3 = i0.\u0275\u0275nextContext();
            return i0.\u0275\u0275resetView(ctx_r3.handleAction(ctx_r3.buttonConfig.action));
        });
        i0.\u0275\u0275text(1);
        i0.\u0275\u0275conditionalCreate(2, DynamicFormComponent_Conditional_7_Conditional_2_Template, 2, 3);
        i0.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
        const ctx_r3 = i0.\u0275\u0275nextContext();
        i0.\u0275\u0275classMap(ctx_r3.buttonConfig.cssClass || "btn btn-primary");
        i0.\u0275\u0275classProp("btn-disabled", ctx_r3.form.invalid);
        i0.\u0275\u0275property("type", ctx_r3.buttonConfig.type || "submit")("disabled", ctx_r3.form.invalid);
        i0.\u0275\u0275advance();
        i0.\u0275\u0275textInterpolate1(" ", ctx_r3.buttonConfig.label, " ");
        i0.\u0275\u0275advance();
        i0.\u0275\u0275conditional(ctx_r3.buttonConfig.icon ? 2 : -1);
    }
}
function DynamicFormComponent_Conditional_8_Conditional_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.\u0275\u0275element(0, "mat-icon", 19);
    }
    if (rf & 2) {
        const ctx_r3 = i0.\u0275\u0275nextContext(2);
        i0.\u0275\u0275property("svgIcon", i0.\u0275\u0275interpolate(ctx_r3.buttonConfig?.icon));
    }
}
function DynamicFormComponent_Conditional_8_For_8_Conditional_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.\u0275\u0275elementStart(0, "mat-icon");
        i0.\u0275\u0275text(1);
        i0.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
        const item_r7 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275advance();
        i0.\u0275\u0275textInterpolate(item_r7.icon);
    }
}
function DynamicFormComponent_Conditional_8_For_8_Template(rf, ctx) {
    if (rf & 1) {
        const _r6 = i0.\u0275\u0275getCurrentView();
        i0.\u0275\u0275elementStart(0, "button", 22);
        i0.\u0275\u0275listener("click", function DynamicFormComponent_Conditional_8_For_8_Template_button_click_0_listener() {
            const item_r7 = i0.\u0275\u0275restoreView(_r6).$implicit;
            const ctx_r3 = i0.\u0275\u0275nextContext(2);
            return i0.\u0275\u0275resetView(ctx_r3.handleAction(item_r7.action));
        });
        i0.\u0275\u0275conditionalCreate(1, DynamicFormComponent_Conditional_8_For_8_Conditional_1_Template, 2, 1, "mat-icon");
        i0.\u0275\u0275elementStart(2, "span");
        i0.\u0275\u0275text(3);
        i0.\u0275\u0275elementEnd()();
    }
    if (rf & 2) {
        const item_r7 = ctx.$implicit;
        i0.\u0275\u0275advance();
        i0.\u0275\u0275conditional(item_r7.icon ? 1 : -1);
        i0.\u0275\u0275advance(2);
        i0.\u0275\u0275textInterpolate(item_r7.label);
    }
}
function DynamicFormComponent_Conditional_8_Template(rf, ctx) {
    if (rf & 1) {
        i0.\u0275\u0275elementStart(0, "button", 20);
        i0.\u0275\u0275conditionalCreate(1, DynamicFormComponent_Conditional_8_Conditional_1_Template, 1, 2, "mat-icon", 19);
        i0.\u0275\u0275text(2);
        i0.\u0275\u0275elementStart(3, "mat-icon");
        i0.\u0275\u0275text(4, "arrow_drop_down");
        i0.\u0275\u0275elementEnd()();
        i0.\u0275\u0275elementStart(5, "mat-menu", null, 0);
        i0.\u0275\u0275repeaterCreate(7, DynamicFormComponent_Conditional_8_For_8_Template, 4, 2, "button", 21, _forTrack2);
        i0.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
        const menu_r8 = i0.\u0275\u0275reference(6);
        const ctx_r3 = i0.\u0275\u0275nextContext();
        i0.\u0275\u0275property("matMenuTriggerFor", menu_r8)("className", ctx_r3.buttonConfig?.cssClass || "btn btn-primary")("disabled", ctx_r3.buttonConfig?.disabled || ctx_r3.form.invalid);
        i0.\u0275\u0275advance();
        i0.\u0275\u0275conditional(ctx_r3.buttonConfig?.icon ? 1 : -1);
        i0.\u0275\u0275advance();
        i0.\u0275\u0275textInterpolate1(" ", ctx_r3.buttonConfig?.label, " ");
        i0.\u0275\u0275advance(5);
        i0.\u0275\u0275repeater(ctx_r3.buttonConfig?.dropdownItem);
    }
}
var DynamicFormComponent = class _DynamicFormComponent {
    fb;
    iconService;
    cdr;
    destroyRef;
    fields = [];
    buttonConfig;
    title;
    type;
    initialData = null;
    actionTriggered = new EventEmitter();
    form;
    constructor(fb, iconService, cdr, destroyRef) {
        this.fb = fb;
        this.iconService = iconService;
        this.cdr = cdr;
        this.destroyRef = destroyRef;
    }
    ngOnInit() {
        if (!this.form) {
            this.createForm();
        }
        this.listenToValueChange();
    }
    ngOnChanges(changes) {
        if (changes["fields"]) {
            if (!this.form) {
                this.createForm();
            }
            else {
                this.syncFormControls(this.fields);
            }
            this.cdr.markForCheck();
        }
        if (changes["initialData"] && this.form) {
            if (this.initialData) {
                this.form.patchValue(this.initialData, {
                    emitEvent: false
                });
            }
            else {
                this.form.reset();
            }
            this.cdr.markForCheck();
        }
    }
    createForm() {
        const group = {};
        this.fields.forEach((field) => {
            const validators = [];
            if (field.required)
                validators.push(Validators.required);
            if (field.minLength)
                validators.push(Validators.minLength(field.minLength));
            if (field.maxLength)
                validators.push(Validators.maxLength(field.maxLength));
            const defaultValue = this.initialData ? this.initialData[field.name] : "";
            group[field.name] = [{
                    value: defaultValue,
                    disabled: field.disabled
                }, validators];
        });
        this.form = this.fb.group(group);
    }
    syncFormControls(fields) {
        if (!this.form)
            return;
        const existing = Object.keys(this.form.controls);
        const incoming = fields.map((f) => f.name);
        existing.forEach((name) => {
            if (!incoming.includes(name)) {
                this.form.removeControl(name);
            }
        });
    }
    listenToValueChange() {
        this.form.valueChanges.pipe(debounceTime(500), takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
            console.log("Form State Stream:", value);
            this.runAiAgent(value);
        });
    }
    runAiAgent(value) {
    }
    handleAction(actionName) {
        if (!actionName)
            return;
        if (this.form.valid) {
            this.actionTriggered.emit({
                action: actionName,
                data: this.form.getRawValue()
            });
        }
        else {
            this.form.markAllAsTouched();
            this.cdr.markForCheck();
        }
    }
    static \u0275fac = function DynamicFormComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _DynamicFormComponent)(i0.\u0275\u0275directiveInject(i1.FormBuilder), i0.\u0275\u0275directiveInject(i2.IconService), i0.\u0275\u0275directiveInject(i0.ChangeDetectorRef), i0.\u0275\u0275directiveInject(i0.DestroyRef));
    };
    static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({
        type: _DynamicFormComponent,
        selectors: [["dynamic-form"]],
        inputs: {
            fields: "fields",
            buttonConfig: "buttonConfig",
            title: "title",
            type: "type",
            initialData: "initialData"
        },
        outputs: {
            actionTriggered: "actionTriggered"
        },
        features: [i0.\u0275\u0275NgOnChangesFeature],
        decls: 9,
        vars: 6,
        consts: [["menu", "matMenu"], [1, "reactive-form", 3, "formGroup"], [1, "form-container"], [1, "form-field-group"], [1, "form-actions"], [3, "type", "class", "disabled", "btn-disabled"], [3, "for"], [1, "error-text"], [1, "form-control", 3, "type", "placeholder", "formControlName"], [1, "form-control", 3, "placeholder", "formControlName"], [1, "form-control", 3, "formControlName"], ["type", "checkbox", 1, "form-control", 3, "formControlName"], ["class", "error-message", 4, "ngIf"], [3, "value"], [1, "form-check"], ["type", "radio", 1, "form-check-input", 3, "name", "formControlName", "value"], [1, "form-check-label"], [1, "error-message"], [3, "click", "type", "disabled"], [3, "svgIcon"], ["mat-raised-button", "", 3, "matMenuTriggerFor", "className", "disabled"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"]],
        template: function DynamicFormComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.\u0275\u0275elementStart(0, "form", 1)(1, "h4");
                i0.\u0275\u0275text(2);
                i0.\u0275\u0275elementEnd();
                i0.\u0275\u0275elementStart(3, "div", 2);
                i0.\u0275\u0275repeaterCreate(4, DynamicFormComponent_For_5_Template, 10, 5, "div", 3, _forTrack0);
                i0.\u0275\u0275elementStart(6, "div", 4);
                i0.\u0275\u0275conditionalCreate(7, DynamicFormComponent_Conditional_7_Template, 3, 8, "button", 5);
                i0.\u0275\u0275conditionalCreate(8, DynamicFormComponent_Conditional_8_Template, 9, 5);
                i0.\u0275\u0275elementEnd()()();
            }
            if (rf & 2) {
                i0.\u0275\u0275property("formGroup", ctx.form);
                i0.\u0275\u0275advance(2);
                i0.\u0275\u0275textInterpolate(ctx.title);
                i0.\u0275\u0275advance();
                i0.\u0275\u0275classMap(ctx.type || "block");
                i0.\u0275\u0275advance();
                i0.\u0275\u0275repeater(ctx.fields);
                i0.\u0275\u0275advance(3);
                i0.\u0275\u0275conditional(ctx.buttonConfig && !ctx.buttonConfig.dropdown ? 7 : -1);
                i0.\u0275\u0275advance();
                i0.\u0275\u0275conditional(ctx.buttonConfig?.dropdown ? 8 : -1);
            }
        },
        dependencies: [ReactiveFormsModule, i1.\u0275NgNoValidate, i1.NgSelectOption, i1.\u0275NgSelectMultipleOption, i1.DefaultValueAccessor, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.RadioControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, CommonModule, i3.NgIf, MatIconModule, i4.MatIcon, MatMenuModule, i5.MatMenu, i5.MatMenuItem, i5.MatMenuTrigger],
        styles: [".reactive-form[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:20px}.reactive-form[_ngcontent-%COMP%]   .form-container.inline[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr))}.reactive-form[_ngcontent-%COMP%]   .form-container.block[_ngcontent-%COMP%]{display:flex;flex-direction:column}.reactive-form[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]{display:flex;align-items:end}.reactive-form[_ngcontent-%COMP%]   .form-field-group[_ngcontent-%COMP%]{position:relative}.reactive-form[_ngcontent-%COMP%]   .form-field-group[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{position:absolute;bottom:-15px;left:0;color:red;font-size:10px}"]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(DynamicFormComponent, [{
            type: Component,
            args: [{
                    selector: "dynamic-form",
                    standalone: true,
                    imports: [ReactiveFormsModule, CommonModule, MatIconModule, MatMenuModule],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: `<form [formGroup]="form" class="reactive-form">
  <h4>{{ title }}</h4>
  <div class="form-container" [class]="type || 'block'">
  @for(field of fields; track field.name){
    <div class="form-field-group">
    <label [for]="field.name">
    @if (field.required) { 
        <small class="error-text">*</small>
            }
          {{ field.label }}</label>
                @if(field.type === 'text' || field.type === 'email' || field.type === 'password' || field.type === 'number'){
                <input [type]="field.type" [placeholder]="field.placeholder" [formControlName]="field.name" class="form-control"/>
            } 
    @else if(field.type === 'textarea'){
    <textarea [placeholder]="field.placeholder" [formControlName]="field.name" class="form-control"></textarea>
    } 
    @else if(field.type === 'select'){
    <select [formControlName]="field.name" class="form-control">
      @for(opt of field.options; track opt.value){
      <option [value]="opt.value">{{ opt.label }}</option>
      }
    </select>
    } 
    @else if(field.type === 'checkbox'){
    <input type="checkbox" [formControlName]="field.name" class="form-control"/>
    } 
    @else if(field.type === 'radio'){ @for(opt of field.options; track
    opt.value){
    <div class="form-check">
      <input
        type="radio"
        [name]="field.name"
        [formControlName]="field.name"
        [value]="opt.value"
        class="form-check-input"
      />
      <label class="form-check-label">{{ opt.label }}</label>
    </div>
    }}
    <div class="error-message" *ngIf="form.get(field.name)?.touched && form.get(field.name)?.invalid">
      @if(form.get(field.name)?.errors?.['required']){
      {{ field.label }} is required }
      @if(form.get(field.name)?.errors?.['email']){ Please enter a valid email
      address } @if(form.get(field.name)?.errors?.['minlength']){
      {{ field.label }} must be at least
      {{form.get(field.name)?.errors?.['minlength'].requiredLength}} characters
      long } @if(form.get(field.name)?.errors?.['maxlength']){
      {{ field.label }} cannot be more than
      {{form.get(field.name)?.errors?.['maxlength'].requiredLength}} characters
      long }
    </div>
  </div>
  }
  <div class="form-actions">
    @if(buttonConfig && !buttonConfig.dropdown) {  
    <button 
      [type]="buttonConfig.type ||'submit'" 
      [class]="buttonConfig.cssClass || 'btn btn-primary'"
      [disabled]="form.invalid"
      [class.btn-disabled]="form.invalid"
      (click)="handleAction(buttonConfig.action)">
      {{ buttonConfig.label }}
      @if(buttonConfig.icon){
      <mat-icon svgIcon="{{buttonConfig.icon}}"></mat-icon>
      {{buttonConfig.label}}
      }
    </button>
}
    @if (buttonConfig?.dropdown) {
    <button 
      mat-raised-button 
      [matMenuTriggerFor]="menu"
      [className]="buttonConfig?.cssClass || 'btn btn-primary'"
      [disabled]="buttonConfig?.disabled || form.invalid">
      @if (buttonConfig?.icon) { 
        <mat-icon svgIcon="{{buttonConfig?.icon}}"></mat-icon> }
      {{ buttonConfig?.label }}
      <mat-icon>arrow_drop_down</mat-icon>
    </button>

    <mat-menu #menu="matMenu">
      @for (item of buttonConfig?.dropdownItem; track item.label) {
        <button mat-menu-item (click)="handleAction(item.action)">
          @if (item.icon) { <mat-icon>{{item.icon}}</mat-icon> }
          <span>{{ item.label }}</span>
        </button>
      }
    </mat-menu>
  }
  </div>
  </div>
</form>
`,
                    styles: [".reactive-form .form-container{display:flex;flex-wrap:wrap;gap:20px}.reactive-form .form-container.inline{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr))}.reactive-form .form-container.block{display:flex;flex-direction:column}.reactive-form .form-container .form-actions{display:flex;align-items:end}.reactive-form .form-field-group{position:relative}.reactive-form .form-field-group .error-message{position:absolute;bottom:-15px;left:0;color:red;font-size:10px}\n"]
                }]
        }], () => [{
            type: i1.FormBuilder
        }, {
            type: i2.IconService
        }, {
            type: i0.ChangeDetectorRef
        }, {
            type: i0.DestroyRef
        }], {
        fields: [{
                type: Input
            }],
        buttonConfig: [{
                type: Input
            }],
        title: [{
                type: Input
            }],
        type: [{
                type: Input
            }],
        initialData: [{
                type: Input
            }],
        actionTriggered: [{
                type: Output
            }]
    });
})();
export { DynamicFormComponent };
//# sourceMappingURL=_takedemotest_krishito_ui_form.6df1H6oNQC-dev.js.map
