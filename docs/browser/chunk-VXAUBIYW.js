import { coerceArray } from "@nf-internal/chunk-G7PURZ4K";
import { Platform } from "@nf-internal/chunk-2252UV67";
// node_modules/@angular/cdk/fesm2022/_breakpoints-observer-chunk.mjs
import * as i0 from "@angular/core";
import { inject, CSP_NONCE, Injectable, NgZone } from "@angular/core";
import { Subject, combineLatest, concat, Observable } from "rxjs";
import { take, skip, debounceTime, map, startWith, takeUntil } from "rxjs/operators";
var mediaQueriesForWebkitCompatibility = /* @__PURE__ */ new Set();
var mediaQueryStyleNode;
var MediaMatcher = class _MediaMatcher {
    _platform = inject(Platform);
    _nonce = inject(CSP_NONCE, {
        optional: true
    });
    _matchMedia;
    constructor() {
        this._matchMedia = this._platform.isBrowser && window.matchMedia ? window.matchMedia.bind(window) : noopMatchMedia;
    }
    matchMedia(query) {
        if (this._platform.WEBKIT || this._platform.BLINK) {
            createEmptyStyleRule(query, this._nonce);
        }
        return this._matchMedia(query);
    }
    static \u0275fac = function MediaMatcher_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MediaMatcher)();
    };
    static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({
        token: _MediaMatcher,
        factory: _MediaMatcher.\u0275fac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(MediaMatcher, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [], null);
})();
function createEmptyStyleRule(query, nonce) {
    if (mediaQueriesForWebkitCompatibility.has(query)) {
        return;
    }
    try {
        if (!mediaQueryStyleNode) {
            mediaQueryStyleNode = document.createElement("style");
            if (nonce) {
                mediaQueryStyleNode.setAttribute("nonce", nonce);
            }
            mediaQueryStyleNode.setAttribute("type", "text/css");
            document.head.appendChild(mediaQueryStyleNode);
        }
        if (mediaQueryStyleNode.sheet) {
            mediaQueryStyleNode.sheet.insertRule(`@media ${query} {body{ }}`, 0);
            mediaQueriesForWebkitCompatibility.add(query);
        }
    }
    catch (e) {
        console.error(e);
    }
}
function noopMatchMedia(query) {
    return {
        matches: query === "all" || query === "",
        media: query,
        addListener: () => {
        },
        removeListener: () => {
        }
    };
}
var BreakpointObserver = class _BreakpointObserver {
    _mediaMatcher = inject(MediaMatcher);
    _zone = inject(NgZone);
    _queries = /* @__PURE__ */ new Map();
    _destroySubject = new Subject();
    constructor() {
    }
    ngOnDestroy() {
        this._destroySubject.next();
        this._destroySubject.complete();
    }
    isMatched(value) {
        const queries = splitQueries(coerceArray(value));
        return queries.some((mediaQuery) => this._registerQuery(mediaQuery).mql.matches);
    }
    observe(value) {
        const queries = splitQueries(coerceArray(value));
        const observables = queries.map((query) => this._registerQuery(query).observable);
        let stateObservable = combineLatest(observables);
        stateObservable = concat(stateObservable.pipe(take(1)), stateObservable.pipe(skip(1), debounceTime(0)));
        return stateObservable.pipe(map((breakpointStates) => {
            const response = {
                matches: false,
                breakpoints: {}
            };
            breakpointStates.forEach(({ matches, query }) => {
                response.matches = response.matches || matches;
                response.breakpoints[query] = matches;
            });
            return response;
        }));
    }
    _registerQuery(query) {
        if (this._queries.has(query)) {
            return this._queries.get(query);
        }
        const mql = this._mediaMatcher.matchMedia(query);
        const queryObservable = new Observable((observer) => {
            const handler = (e) => this._zone.run(() => observer.next(e));
            mql.addListener(handler);
            return () => {
                mql.removeListener(handler);
            };
        }).pipe(startWith(mql), map(({ matches }) => ({
            query,
            matches
        })), takeUntil(this._destroySubject));
        const output = {
            observable: queryObservable,
            mql
        };
        this._queries.set(query, output);
        return output;
    }
    static \u0275fac = function BreakpointObserver_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _BreakpointObserver)();
    };
    static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({
        token: _BreakpointObserver,
        factory: _BreakpointObserver.\u0275fac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(BreakpointObserver, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [], null);
})();
function splitQueries(queries) {
    return queries.map((query) => query.split(",")).reduce((a1, a2) => a1.concat(a2)).map((query) => query.trim());
}
export { MediaMatcher, BreakpointObserver };
//# sourceMappingURL=chunk-VXAUBIYW.js.map
