import { coerceCssPixelValue } from "@nf-internal/chunk-7VFGVFD4";
import { _isNumberValue, coerceElement, coerceNumberProperty } from "@nf-internal/chunk-KEMGX7ES";
import { coerceArray } from "@nf-internal/chunk-G7PURZ4K";
import "@nf-internal/chunk-VUJOFXKG";
// node_modules/@angular/cdk/fesm2022/coercion.mjs
import "@angular/core";
function coerceBooleanProperty(value) {
    return value != null && `${value}` !== "false";
}
function coerceStringArray(value, separator = /\s+/) {
    const result = [];
    if (value != null) {
        const sourceValues = Array.isArray(value) ? value : `${value}`.split(separator);
        for (const sourceValue of sourceValues) {
            const trimmedString = `${sourceValue}`.trim();
            if (trimmedString) {
                result.push(trimmedString);
            }
        }
    }
    return result;
}
export { _isNumberValue, coerceArray, coerceBooleanProperty, coerceCssPixelValue, coerceElement, coerceNumberProperty, coerceStringArray };
//# sourceMappingURL=_angular_cdk_coercion.mDL3W8X9_B-dev.js.map
