(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/@angular/common/fesm5/http.js":
/*!****************************************************!*\
  !*** ./node_modules/@angular/common/fesm5/http.js ***!
  \****************************************************/
/*! exports provided: ɵangular_packages_common_http_http_a, ɵangular_packages_common_http_http_b, ɵangular_packages_common_http_http_c, ɵangular_packages_common_http_http_d, ɵangular_packages_common_http_http_g, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_e, ɵangular_packages_common_http_http_f, HttpBackend, HttpHandler, HttpClient, HttpHeaders, HTTP_INTERCEPTORS, JsonpClientBackend, JsonpInterceptor, HttpClientJsonpModule, HttpClientModule, HttpClientXsrfModule, ɵHttpInterceptingHandler, HttpParams, HttpUrlEncodingCodec, HttpRequest, HttpErrorResponse, HttpEventType, HttpHeaderResponse, HttpResponse, HttpResponseBase, HttpXhrBackend, XhrFactory, HttpXsrfTokenExtractor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_a", function() { return NoopInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_b", function() { return JsonpCallbackContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_c", function() { return jsonpCallbackContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_d", function() { return BrowserXhr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_g", function() { return HttpXsrfCookieExtractor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_h", function() { return HttpXsrfInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_e", function() { return XSRF_COOKIE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_f", function() { return XSRF_HEADER_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpBackend", function() { return HttpBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHandler", function() { return HttpHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClient", function() { return HttpClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaders", function() { return HttpHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_INTERCEPTORS", function() { return HTTP_INTERCEPTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpClientBackend", function() { return JsonpClientBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpInterceptor", function() { return JsonpInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientJsonpModule", function() { return HttpClientJsonpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientModule", function() { return HttpClientModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientXsrfModule", function() { return HttpClientXsrfModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵHttpInterceptingHandler", function() { return HttpInterceptingHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpParams", function() { return HttpParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpUrlEncodingCodec", function() { return HttpUrlEncodingCodec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequest", function() { return HttpRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorResponse", function() { return HttpErrorResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpEventType", function() { return HttpEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaderResponse", function() { return HttpHeaderResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponse", function() { return HttpResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponseBase", function() { return HttpResponseBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXhrBackend", function() { return HttpXhrBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrFactory", function() { return XhrFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXsrfTokenExtractor", function() { return HttpXsrfTokenExtractor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/**
 * @license Angular v7.2.15
 * (c) 2010-2019 Google LLC. https://angular.io/
 * License: MIT
 */







/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
 * `HttpResponse`.
 *
 * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
 * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
 * `HttpBackend`.
 *
 * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
 *
 * @publicApi
 */
var HttpHandler = /** @class */ (function () {
    function HttpHandler() {
    }
    return HttpHandler;
}());
/**
 * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
 *
 * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
 *
 * When injected, `HttpBackend` dispatches requests directly to the backend, without going
 * through the interceptor chain.
 *
 * @publicApi
 */
var HttpBackend = /** @class */ (function () {
    function HttpBackend() {
    }
    return HttpBackend;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * `HttpHeaders` class represents the header configuration options for an HTTP request.
 * Instances should be assumed immutable with lazy parsing.
 *
 * @publicApi
 */
var HttpHeaders = /** @class */ (function () {
    /**  Constructs a new HTTP header object with the given values.*/
    function HttpHeaders(headers) {
        var _this = this;
        /**
         * Internal map of lowercased header names to the normalized
         * form of the name (the form seen first).
         */
        this.normalizedNames = new Map();
        /**
         * Queued updates to be materialized the next initialization.
         */
        this.lazyUpdate = null;
        if (!headers) {
            this.headers = new Map();
        }
        else if (typeof headers === 'string') {
            this.lazyInit = function () {
                _this.headers = new Map();
                headers.split('\n').forEach(function (line) {
                    var index = line.indexOf(':');
                    if (index > 0) {
                        var name_1 = line.slice(0, index);
                        var key = name_1.toLowerCase();
                        var value = line.slice(index + 1).trim();
                        _this.maybeSetNormalizedName(name_1, key);
                        if (_this.headers.has(key)) {
                            _this.headers.get(key).push(value);
                        }
                        else {
                            _this.headers.set(key, [value]);
                        }
                    }
                });
            };
        }
        else {
            this.lazyInit = function () {
                _this.headers = new Map();
                Object.keys(headers).forEach(function (name) {
                    var values = headers[name];
                    var key = name.toLowerCase();
                    if (typeof values === 'string') {
                        values = [values];
                    }
                    if (values.length > 0) {
                        _this.headers.set(key, values);
                        _this.maybeSetNormalizedName(name, key);
                    }
                });
            };
        }
    }
    /**
     * Checks for existence of a header by a given name.
     *
     * @param name The header name to check for existence.
     *
     * @returns Whether the header exits.
     */
    HttpHeaders.prototype.has = function (name) {
        this.init();
        return this.headers.has(name.toLowerCase());
    };
    /**
     * Returns the first header value that matches a given name.
     *
     * @param name The header name to retrieve.
     *
     * @returns A string if the header exists, null otherwise
     */
    HttpHeaders.prototype.get = function (name) {
        this.init();
        var values = this.headers.get(name.toLowerCase());
        return values && values.length > 0 ? values[0] : null;
    };
    /**
     * Returns the names of the headers.
     *
     * @returns A list of header names.
     */
    HttpHeaders.prototype.keys = function () {
        this.init();
        return Array.from(this.normalizedNames.values());
    };
    /**
     * Returns a list of header values for a given header name.
     *
     * @param name The header name from which to retrieve the values.
     *
     * @returns A string of values if the header exists, null otherwise.
     */
    HttpHeaders.prototype.getAll = function (name) {
        this.init();
        return this.headers.get(name.toLowerCase()) || null;
    };
    /**
     * Appends a new header value to the existing set of
     * header values.
     *
     * @param name The header name for which to append the values.
     *
     * @returns A clone of the HTTP header object with the value appended.
     */
    HttpHeaders.prototype.append = function (name, value) {
        return this.clone({ name: name, value: value, op: 'a' });
    };
    /**
     * Sets a header value for a given name. If the header name already exists,
     * its value is replaced with the given value.
     *
     * @param name The header name.
     * @param value Provides the value to set or overide for a given name.
     *
     * @returns A clone of the HTTP header object with the newly set header value.
     */
    HttpHeaders.prototype.set = function (name, value) {
        return this.clone({ name: name, value: value, op: 's' });
    };
    /**
     * Deletes all header values for a given name.
     *
     * @param name The header name.
     * @param value The header values to delete for a given name.
     *
     * @returns A clone of the HTTP header object.
     */
    HttpHeaders.prototype.delete = function (name, value) {
        return this.clone({ name: name, value: value, op: 'd' });
    };
    HttpHeaders.prototype.maybeSetNormalizedName = function (name, lcName) {
        if (!this.normalizedNames.has(lcName)) {
            this.normalizedNames.set(lcName, name);
        }
    };
    HttpHeaders.prototype.init = function () {
        var _this = this;
        if (!!this.lazyInit) {
            if (this.lazyInit instanceof HttpHeaders) {
                this.copyFrom(this.lazyInit);
            }
            else {
                this.lazyInit();
            }
            this.lazyInit = null;
            if (!!this.lazyUpdate) {
                this.lazyUpdate.forEach(function (update) { return _this.applyUpdate(update); });
                this.lazyUpdate = null;
            }
        }
    };
    HttpHeaders.prototype.copyFrom = function (other) {
        var _this = this;
        other.init();
        Array.from(other.headers.keys()).forEach(function (key) {
            _this.headers.set(key, other.headers.get(key));
            _this.normalizedNames.set(key, other.normalizedNames.get(key));
        });
    };
    HttpHeaders.prototype.clone = function (update) {
        var clone = new HttpHeaders();
        clone.lazyInit =
            (!!this.lazyInit && this.lazyInit instanceof HttpHeaders) ? this.lazyInit : this;
        clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
        return clone;
    };
    HttpHeaders.prototype.applyUpdate = function (update) {
        var key = update.name.toLowerCase();
        switch (update.op) {
            case 'a':
            case 's':
                var value = update.value;
                if (typeof value === 'string') {
                    value = [value];
                }
                if (value.length === 0) {
                    return;
                }
                this.maybeSetNormalizedName(update.name, key);
                var base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
                base.push.apply(base, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(value));
                this.headers.set(key, base);
                break;
            case 'd':
                var toDelete_1 = update.value;
                if (!toDelete_1) {
                    this.headers.delete(key);
                    this.normalizedNames.delete(key);
                }
                else {
                    var existing = this.headers.get(key);
                    if (!existing) {
                        return;
                    }
                    existing = existing.filter(function (value) { return toDelete_1.indexOf(value) === -1; });
                    if (existing.length === 0) {
                        this.headers.delete(key);
                        this.normalizedNames.delete(key);
                    }
                    else {
                        this.headers.set(key, existing);
                    }
                }
                break;
        }
    };
    /**
     * @internal
     */
    HttpHeaders.prototype.forEach = function (fn) {
        var _this = this;
        this.init();
        Array.from(this.normalizedNames.keys())
            .forEach(function (key) { return fn(_this.normalizedNames.get(key), _this.headers.get(key)); });
    };
    return HttpHeaders;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A class that uses `encodeURIComponent` and `decodeURIComponent` to
 * serialize and parse URL parameter keys and values. If you pass URL query parameters
 * without encoding, the query parameters can get misinterpreted at the receiving end.
 * Use the `HttpParameterCodec` class to encode and decode the query-string values.
 *
 * @publicApi
 */
var HttpUrlEncodingCodec = /** @class */ (function () {
    function HttpUrlEncodingCodec() {
    }
    HttpUrlEncodingCodec.prototype.encodeKey = function (key) { return standardEncoding(key); };
    HttpUrlEncodingCodec.prototype.encodeValue = function (value) { return standardEncoding(value); };
    HttpUrlEncodingCodec.prototype.decodeKey = function (key) { return decodeURIComponent(key); };
    HttpUrlEncodingCodec.prototype.decodeValue = function (value) { return decodeURIComponent(value); };
    return HttpUrlEncodingCodec;
}());
function paramParser(rawParams, codec) {
    var map$$1 = new Map();
    if (rawParams.length > 0) {
        var params = rawParams.split('&');
        params.forEach(function (param) {
            var eqIdx = param.indexOf('=');
            var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(eqIdx == -1 ?
                [codec.decodeKey(param), ''] :
                [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))], 2), key = _a[0], val = _a[1];
            var list = map$$1.get(key) || [];
            list.push(val);
            map$$1.set(key, list);
        });
    }
    return map$$1;
}
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * An HTTP request/response body that represents serialized parameters,
 * per the MIME type `application/x-www-form-urlencoded`.
 *
 * This class is immutable - all mutation operations return a new instance.
 *
 * @publicApi
 */
var HttpParams = /** @class */ (function () {
    function HttpParams(options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        this.updates = null;
        this.cloneFrom = null;
        this.encoder = options.encoder || new HttpUrlEncodingCodec();
        if (!!options.fromString) {
            if (!!options.fromObject) {
                throw new Error("Cannot specify both fromString and fromObject.");
            }
            this.map = paramParser(options.fromString, this.encoder);
        }
        else if (!!options.fromObject) {
            this.map = new Map();
            Object.keys(options.fromObject).forEach(function (key) {
                var value = options.fromObject[key];
                _this.map.set(key, Array.isArray(value) ? value : [value]);
            });
        }
        else {
            this.map = null;
        }
    }
    /**
     * Check whether the body has one or more values for the given parameter name.
     */
    HttpParams.prototype.has = function (param) {
        this.init();
        return this.map.has(param);
    };
    /**
     * Get the first value for the given parameter name, or `null` if it's not present.
     */
    HttpParams.prototype.get = function (param) {
        this.init();
        var res = this.map.get(param);
        return !!res ? res[0] : null;
    };
    /**
     * Get all values for the given parameter name, or `null` if it's not present.
     */
    HttpParams.prototype.getAll = function (param) {
        this.init();
        return this.map.get(param) || null;
    };
    /**
     * Get all the parameter names for this body.
     */
    HttpParams.prototype.keys = function () {
        this.init();
        return Array.from(this.map.keys());
    };
    /**
     * Construct a new body with an appended value for the given parameter name.
     */
    HttpParams.prototype.append = function (param, value) { return this.clone({ param: param, value: value, op: 'a' }); };
    /**
     * Construct a new body with a new value for the given parameter name.
     */
    HttpParams.prototype.set = function (param, value) { return this.clone({ param: param, value: value, op: 's' }); };
    /**
     * Construct a new body with either the given value for the given parameter
     * removed, if a value is given, or all values for the given parameter removed
     * if not.
     */
    HttpParams.prototype.delete = function (param, value) { return this.clone({ param: param, value: value, op: 'd' }); };
    /**
     * Serialize the body to an encoded string, where key-value pairs (separated by `=`) are
     * separated by `&`s.
     */
    HttpParams.prototype.toString = function () {
        var _this = this;
        this.init();
        return this.keys()
            .map(function (key) {
            var eKey = _this.encoder.encodeKey(key);
            return _this.map.get(key).map(function (value) { return eKey + '=' + _this.encoder.encodeValue(value); })
                .join('&');
        })
            .join('&');
    };
    HttpParams.prototype.clone = function (update) {
        var clone = new HttpParams({ encoder: this.encoder });
        clone.cloneFrom = this.cloneFrom || this;
        clone.updates = (this.updates || []).concat([update]);
        return clone;
    };
    HttpParams.prototype.init = function () {
        var _this = this;
        if (this.map === null) {
            this.map = new Map();
        }
        if (this.cloneFrom !== null) {
            this.cloneFrom.init();
            this.cloneFrom.keys().forEach(function (key) { return _this.map.set(key, _this.cloneFrom.map.get(key)); });
            this.updates.forEach(function (update) {
                switch (update.op) {
                    case 'a':
                    case 's':
                        var base = (update.op === 'a' ? _this.map.get(update.param) : undefined) || [];
                        base.push(update.value);
                        _this.map.set(update.param, base);
                        break;
                    case 'd':
                        if (update.value !== undefined) {
                            var base_1 = _this.map.get(update.param) || [];
                            var idx = base_1.indexOf(update.value);
                            if (idx !== -1) {
                                base_1.splice(idx, 1);
                            }
                            if (base_1.length > 0) {
                                _this.map.set(update.param, base_1);
                            }
                            else {
                                _this.map.delete(update.param);
                            }
                        }
                        else {
                            _this.map.delete(update.param);
                            break;
                        }
                }
            });
            this.cloneFrom = this.updates = null;
        }
    };
    return HttpParams;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Determine whether the given HTTP method may include a body.
 */
function mightHaveBody(method) {
    switch (method) {
        case 'DELETE':
        case 'GET':
        case 'HEAD':
        case 'OPTIONS':
        case 'JSONP':
            return false;
        default:
            return true;
    }
}
/**
 * Safely assert whether the given value is an ArrayBuffer.
 *
 * In some execution environments ArrayBuffer is not defined.
 */
function isArrayBuffer(value) {
    return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
}
/**
 * Safely assert whether the given value is a Blob.
 *
 * In some execution environments Blob is not defined.
 */
function isBlob(value) {
    return typeof Blob !== 'undefined' && value instanceof Blob;
}
/**
 * Safely assert whether the given value is a FormData instance.
 *
 * In some execution environments FormData is not defined.
 */
function isFormData(value) {
    return typeof FormData !== 'undefined' && value instanceof FormData;
}
/**
 * An outgoing HTTP request with an optional typed body.
 *
 * `HttpRequest` represents an outgoing request, including URL, method,
 * headers, body, and other request configuration options. Instances should be
 * assumed to be immutable. To modify a `HttpRequest`, the `clone`
 * method should be used.
 *
 * @publicApi
 */
var HttpRequest = /** @class */ (function () {
    function HttpRequest(method, url, third, fourth) {
        this.url = url;
        /**
         * The request body, or `null` if one isn't set.
         *
         * Bodies are not enforced to be immutable, as they can include a reference to any
         * user-defined data type. However, interceptors should take care to preserve
         * idempotence by treating them as such.
         */
        this.body = null;
        /**
         * Whether this request should be made in a way that exposes progress events.
         *
         * Progress events are expensive (change detection runs on each event) and so
         * they should only be requested if the consumer intends to monitor them.
         */
        this.reportProgress = false;
        /**
         * Whether this request should be sent with outgoing credentials (cookies).
         */
        this.withCredentials = false;
        /**
         * The expected response type of the server.
         *
         * This is used to parse the response appropriately before returning it to
         * the requestee.
         */
        this.responseType = 'json';
        this.method = method.toUpperCase();
        // Next, need to figure out which argument holds the HttpRequestInit
        // options, if any.
        var options;
        // Check whether a body argument is expected. The only valid way to omit
        // the body argument is to use a known no-body method like GET.
        if (mightHaveBody(this.method) || !!fourth) {
            // Body is the third argument, options are the fourth.
            this.body = (third !== undefined) ? third : null;
            options = fourth;
        }
        else {
            // No body required, options are the third argument. The body stays null.
            options = third;
        }
        // If options have been passed, interpret them.
        if (options) {
            // Normalize reportProgress and withCredentials.
            this.reportProgress = !!options.reportProgress;
            this.withCredentials = !!options.withCredentials;
            // Override default response type of 'json' if one is provided.
            if (!!options.responseType) {
                this.responseType = options.responseType;
            }
            // Override headers if they're provided.
            if (!!options.headers) {
                this.headers = options.headers;
            }
            if (!!options.params) {
                this.params = options.params;
            }
        }
        // If no headers have been passed in, construct a new HttpHeaders instance.
        if (!this.headers) {
            this.headers = new HttpHeaders();
        }
        // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.
        if (!this.params) {
            this.params = new HttpParams();
            this.urlWithParams = url;
        }
        else {
            // Encode the parameters to a string in preparation for inclusion in the URL.
            var params = this.params.toString();
            if (params.length === 0) {
                // No parameters, the visible URL is just the URL given at creation time.
                this.urlWithParams = url;
            }
            else {
                // Does the URL already have query parameters? Look for '?'.
                var qIdx = url.indexOf('?');
                // There are 3 cases to handle:
                // 1) No existing parameters -> append '?' followed by params.
                // 2) '?' exists and is followed by existing query string ->
                //    append '&' followed by params.
                // 3) '?' exists at the end of the url -> append params directly.
                // This basically amounts to determining the character, if any, with
                // which to join the URL and parameters.
                var sep = qIdx === -1 ? '?' : (qIdx < url.length - 1 ? '&' : '');
                this.urlWithParams = url + sep + params;
            }
        }
    }
    /**
     * Transform the free-form body into a serialized format suitable for
     * transmission to the server.
     */
    HttpRequest.prototype.serializeBody = function () {
        // If no body is present, no need to serialize it.
        if (this.body === null) {
            return null;
        }
        // Check whether the body is already in a serialized form. If so,
        // it can just be returned directly.
        if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) ||
            typeof this.body === 'string') {
            return this.body;
        }
        // Check whether the body is an instance of HttpUrlEncodedParams.
        if (this.body instanceof HttpParams) {
            return this.body.toString();
        }
        // Check whether the body is an object or array, and serialize with JSON if so.
        if (typeof this.body === 'object' || typeof this.body === 'boolean' ||
            Array.isArray(this.body)) {
            return JSON.stringify(this.body);
        }
        // Fall back on toString() for everything else.
        return this.body.toString();
    };
    /**
     * Examine the body and attempt to infer an appropriate MIME type
     * for it.
     *
     * If no such type can be inferred, this method will return `null`.
     */
    HttpRequest.prototype.detectContentTypeHeader = function () {
        // An empty body has no content type.
        if (this.body === null) {
            return null;
        }
        // FormData bodies rely on the browser's content type assignment.
        if (isFormData(this.body)) {
            return null;
        }
        // Blobs usually have their own content type. If it doesn't, then
        // no type can be inferred.
        if (isBlob(this.body)) {
            return this.body.type || null;
        }
        // Array buffers have unknown contents and thus no type can be inferred.
        if (isArrayBuffer(this.body)) {
            return null;
        }
        // Technically, strings could be a form of JSON data, but it's safe enough
        // to assume they're plain strings.
        if (typeof this.body === 'string') {
            return 'text/plain';
        }
        // `HttpUrlEncodedParams` has its own content-type.
        if (this.body instanceof HttpParams) {
            return 'application/x-www-form-urlencoded;charset=UTF-8';
        }
        // Arrays, objects, and numbers will be encoded as JSON.
        if (typeof this.body === 'object' || typeof this.body === 'number' ||
            Array.isArray(this.body)) {
            return 'application/json';
        }
        // No type could be inferred.
        return null;
    };
    HttpRequest.prototype.clone = function (update) {
        if (update === void 0) { update = {}; }
        // For method, url, and responseType, take the current value unless
        // it is overridden in the update hash.
        var method = update.method || this.method;
        var url = update.url || this.url;
        var responseType = update.responseType || this.responseType;
        // The body is somewhat special - a `null` value in update.body means
        // whatever current body is present is being overridden with an empty
        // body, whereas an `undefined` value in update.body implies no
        // override.
        var body = (update.body !== undefined) ? update.body : this.body;
        // Carefully handle the boolean options to differentiate between
        // `false` and `undefined` in the update args.
        var withCredentials = (update.withCredentials !== undefined) ? update.withCredentials : this.withCredentials;
        var reportProgress = (update.reportProgress !== undefined) ? update.reportProgress : this.reportProgress;
        // Headers and params may be appended to if `setHeaders` or
        // `setParams` are used.
        var headers = update.headers || this.headers;
        var params = update.params || this.params;
        // Check whether the caller has asked to add headers.
        if (update.setHeaders !== undefined) {
            // Set every requested header.
            headers =
                Object.keys(update.setHeaders)
                    .reduce(function (headers, name) { return headers.set(name, update.setHeaders[name]); }, headers);
        }
        // Check whether the caller has asked to set params.
        if (update.setParams) {
            // Set every requested param.
            params = Object.keys(update.setParams)
                .reduce(function (params, param) { return params.set(param, update.setParams[param]); }, params);
        }
        // Finally, construct the new HttpRequest using the pieces from above.
        return new HttpRequest(method, url, body, {
            params: params, headers: headers, reportProgress: reportProgress, responseType: responseType, withCredentials: withCredentials,
        });
    };
    return HttpRequest;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Type enumeration for the different kinds of `HttpEvent`.
 *
 * @publicApi
 */
var HttpEventType;
(function (HttpEventType) {
    /**
     * The request was sent out over the wire.
     */
    HttpEventType[HttpEventType["Sent"] = 0] = "Sent";
    /**
     * An upload progress event was received.
     */
    HttpEventType[HttpEventType["UploadProgress"] = 1] = "UploadProgress";
    /**
     * The response status code and headers were received.
     */
    HttpEventType[HttpEventType["ResponseHeader"] = 2] = "ResponseHeader";
    /**
     * A download progress event was received.
     */
    HttpEventType[HttpEventType["DownloadProgress"] = 3] = "DownloadProgress";
    /**
     * The full response including the body was received.
     */
    HttpEventType[HttpEventType["Response"] = 4] = "Response";
    /**
     * A custom event from an interceptor or a backend.
     */
    HttpEventType[HttpEventType["User"] = 5] = "User";
})(HttpEventType || (HttpEventType = {}));
/**
 * Base class for both `HttpResponse` and `HttpHeaderResponse`.
 *
 * @publicApi
 */
var HttpResponseBase = /** @class */ (function () {
    /**
     * Super-constructor for all responses.
     *
     * The single parameter accepted is an initialization hash. Any properties
     * of the response passed there will override the default values.
     */
    function HttpResponseBase(init, defaultStatus, defaultStatusText) {
        if (defaultStatus === void 0) { defaultStatus = 200; }
        if (defaultStatusText === void 0) { defaultStatusText = 'OK'; }
        // If the hash has values passed, use them to initialize the response.
        // Otherwise use the default values.
        this.headers = init.headers || new HttpHeaders();
        this.status = init.status !== undefined ? init.status : defaultStatus;
        this.statusText = init.statusText || defaultStatusText;
        this.url = init.url || null;
        // Cache the ok value to avoid defining a getter.
        this.ok = this.status >= 200 && this.status < 300;
    }
    return HttpResponseBase;
}());
/**
 * A partial HTTP response which only includes the status and header data,
 * but no response body.
 *
 * `HttpHeaderResponse` is a `HttpEvent` available on the response
 * event stream, only when progress events are requested.
 *
 * @publicApi
 */
var HttpHeaderResponse = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HttpHeaderResponse, _super);
    /**
     * Create a new `HttpHeaderResponse` with the given parameters.
     */
    function HttpHeaderResponse(init) {
        if (init === void 0) { init = {}; }
        var _this = _super.call(this, init) || this;
        _this.type = HttpEventType.ResponseHeader;
        return _this;
    }
    /**
     * Copy this `HttpHeaderResponse`, overriding its contents with the
     * given parameter hash.
     */
    HttpHeaderResponse.prototype.clone = function (update) {
        if (update === void 0) { update = {}; }
        // Perform a straightforward initialization of the new HttpHeaderResponse,
        // overriding the current parameters with new ones if given.
        return new HttpHeaderResponse({
            headers: update.headers || this.headers,
            status: update.status !== undefined ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    };
    return HttpHeaderResponse;
}(HttpResponseBase));
/**
 * A full HTTP response, including a typed response body (which may be `null`
 * if one was not returned).
 *
 * `HttpResponse` is a `HttpEvent` available on the response event
 * stream.
 *
 * @publicApi
 */
var HttpResponse = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HttpResponse, _super);
    /**
     * Construct a new `HttpResponse`.
     */
    function HttpResponse(init) {
        if (init === void 0) { init = {}; }
        var _this = _super.call(this, init) || this;
        _this.type = HttpEventType.Response;
        _this.body = init.body !== undefined ? init.body : null;
        return _this;
    }
    HttpResponse.prototype.clone = function (update) {
        if (update === void 0) { update = {}; }
        return new HttpResponse({
            body: (update.body !== undefined) ? update.body : this.body,
            headers: update.headers || this.headers,
            status: (update.status !== undefined) ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    };
    return HttpResponse;
}(HttpResponseBase));
/**
 * A response that represents an error or failure, either from a
 * non-successful HTTP status, an error while executing the request,
 * or some other failure which occurred during the parsing of the response.
 *
 * Any error returned on the `Observable` response stream will be
 * wrapped in an `HttpErrorResponse` to provide additional context about
 * the state of the HTTP layer when the error occurred. The error property
 * will contain either a wrapped Error object or the error response returned
 * from the server.
 *
 * @publicApi
 */
var HttpErrorResponse = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HttpErrorResponse, _super);
    function HttpErrorResponse(init) {
        var _this = 
        // Initialize with a default status of 0 / Unknown Error.
        _super.call(this, init, 0, 'Unknown Error') || this;
        _this.name = 'HttpErrorResponse';
        /**
         * Errors are never okay, even when the status code is in the 2xx success range.
         */
        _this.ok = false;
        // If the response was successful, then this was a parse error. Otherwise, it was
        // a protocol-level failure of some sort. Either the request failed in transit
        // or the server returned an unsuccessful status code.
        if (_this.status >= 200 && _this.status < 300) {
            _this.message = "Http failure during parsing for " + (init.url || '(unknown url)');
        }
        else {
            _this.message =
                "Http failure response for " + (init.url || '(unknown url)') + ": " + init.status + " " + init.statusText;
        }
        _this.error = init.error || null;
        return _this;
    }
    return HttpErrorResponse;
}(HttpResponseBase));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Constructs an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
 * the given `body`. This function clones the object and adds the body.
 */
function addBody(options, body) {
    return {
        body: body,
        headers: options.headers,
        observe: options.observe,
        params: options.params,
        reportProgress: options.reportProgress,
        responseType: options.responseType,
        withCredentials: options.withCredentials,
    };
}
/**
 * Performs HTTP requests.
 *
 * `HttpClient` is available as an injectable class, with methods to perform HTTP requests.
 * Each request method has multiple signatures, and the return type varies based on
 * the signature that is called (mainly the values of `observe` and `responseType`).
 *
 *
 * @see [HTTP Guide](guide/http)
 *
 *
 * @usageNotes
 * Sample HTTP requests for the [Tour of Heroes](/tutorial/toh-pt0) application.
 *
 * ### HTTP Request Example
 *
 * ```
 *  // GET heroes whose name contains search term
 * searchHeroes(term: string): observable<Hero[]>{
 *
 *  const params = new HttpParams({fromString: 'name=term'});
 *    return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
 * }
 * ```
 * ### JSONP Example
 * ```
 * requestJsonp(url, callback = 'callback') {
 *  return this.httpClient.jsonp(this.heroesURL, callback);
 * }
 * ```
 *
 *
 * ### PATCH Example
 * ```
 * // PATCH one of the heroes' name
 * patchHero (id: number, heroName: string): Observable<{}> {
 * const url = `${this.heroesUrl}/${id}`;   // PATCH api/heroes/42
 *  return this.httpClient.patch(url, {name: heroName}, httpOptions)
 *    .pipe(catchError(this.handleError('patchHero')));
 * }
* ```
 *
 * @publicApi
 */
var HttpClient = /** @class */ (function () {
    function HttpClient(handler) {
        this.handler = handler;
    }
    /**
     * Constructs an observable for a generic HTTP request that, when subscribed,
     * fires the request through the chain of registered interceptors and on to the
     * server.
     *
     * You can pass an `HttpRequest` directly as the only parameter. In this case,
     * the call returns an observable of the raw `HttpEvent` stream.
     *
     * Alternatively you can pass an HTTP method as the first parameter,
     * a URL string as the second, and an options hash containing the request body as the third.
     * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
     * type of returned observable.
     *   * The `responseType` value determines how a successful response body is parsed.
     *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
     * object as a type parameter to the call.
     *
     * The `observe` value determines the return type, according to what you are interested in
     * observing.
     *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
     * progress events by default.
     *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
     * where the `T` parameter depends on the `responseType` and any optionally provided type
     * parameter.
     *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
     *
     */
    HttpClient.prototype.request = function (first, url, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var req;
        // First, check whether the primary argument is an instance of `HttpRequest`.
        if (first instanceof HttpRequest) {
            // It is. The other arguments must be undefined (per the signatures) and can be
            // ignored.
            req = first;
        }
        else {
            // It's a string, so it represents a URL. Construct a request based on it,
            // and incorporate the remaining arguments (assuming `GET` unless a method is
            // provided.
            // Figure out the headers.
            var headers = undefined;
            if (options.headers instanceof HttpHeaders) {
                headers = options.headers;
            }
            else {
                headers = new HttpHeaders(options.headers);
            }
            // Sort out parameters.
            var params = undefined;
            if (!!options.params) {
                if (options.params instanceof HttpParams) {
                    params = options.params;
                }
                else {
                    params = new HttpParams({ fromObject: options.params });
                }
            }
            // Construct the request.
            req = new HttpRequest(first, url, (options.body !== undefined ? options.body : null), {
                headers: headers,
                params: params,
                reportProgress: options.reportProgress,
                // By default, JSON is assumed to be returned for all calls.
                responseType: options.responseType || 'json',
                withCredentials: options.withCredentials,
            });
        }
        // Start with an Observable.of() the initial request, and run the handler (which
        // includes all interceptors) inside a concatMap(). This way, the handler runs
        // inside an Observable chain, which causes interceptors to be re-run on every
        // subscription (this also makes retries re-run the handler, including interceptors).
        var events$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (req) { return _this.handler.handle(req); }));
        // If coming via the API signature which accepts a previously constructed HttpRequest,
        // the only option is to get the event stream. Otherwise, return the event stream if
        // that is what was requested.
        if (first instanceof HttpRequest || options.observe === 'events') {
            return events$;
        }
        // The requested stream contains either the full response or the body. In either
        // case, the first step is to filter the event stream to extract a stream of
        // responses(s).
        var res$ = events$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof HttpResponse; }));
        // Decide which stream to return.
        switch (options.observe || 'body') {
            case 'body':
                // The requested stream is the body. Map the response stream to the response
                // body. This could be done more simply, but a misbehaving interceptor might
                // transform the response body into a different format and ignore the requested
                // responseType. Guard against this by validating that the response is of the
                // requested type.
                switch (req.responseType) {
                    case 'arraybuffer':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                            // Validate that the body is an ArrayBuffer.
                            if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                                throw new Error('Response is not an ArrayBuffer.');
                            }
                            return res.body;
                        }));
                    case 'blob':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                            // Validate that the body is a Blob.
                            if (res.body !== null && !(res.body instanceof Blob)) {
                                throw new Error('Response is not a Blob.');
                            }
                            return res.body;
                        }));
                    case 'text':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                            // Validate that the body is a string.
                            if (res.body !== null && typeof res.body !== 'string') {
                                throw new Error('Response is not a string.');
                            }
                            return res.body;
                        }));
                    case 'json':
                    default:
                        // No validation needed for JSON responses, as they can be of any type.
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.body; }));
                }
            case 'response':
                // The response stream was requested directly, so return it.
                return res$;
            default:
                // Guard against new future observe types being added.
                throw new Error("Unreachable: unhandled observe type " + options.observe + "}");
        }
    };
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `DELETE` request to execute on the server. See the individual overloads for
     * details on the return type.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     */
    HttpClient.prototype.delete = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('DELETE', url, options);
    };
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `GET` request to execute on the server. See the individual overloads for
     * details on the return type.
     */
    HttpClient.prototype.get = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('GET', url, options);
    };
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `HEAD` request to execute on the server. The `HEAD` method returns
     * meta information about the resource without transferring the
     * resource itself. See the individual overloads for
     * details on the return type.
     */
    HttpClient.prototype.head = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('HEAD', url, options);
    };
    /**
     * Constructs an `Observable` that, when subscribed, causes a request with the special method
     * `JSONP` to be dispatched via the interceptor pipeline.
     * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
     * API endpoints that don't support newer,
     * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
     * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
     * requests even if the API endpoint is not located on the same domain (origin) as the client-side
     * application making the request.
     * The endpoint API must support JSONP callback for JSONP requests to work.
     * The resource API returns the JSON response wrapped in a callback function.
     * You can pass the callback function name as one of the query parameters.
     * Note that JSONP requests can only be used with `GET` requests.
     *
     * @param url The resource URL.
     * @param callbackParam The callback function name.
     *
     */
    HttpClient.prototype.jsonp = function (url, callbackParam) {
        return this.request('JSONP', url, {
            params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
            observe: 'body',
            responseType: 'json',
        });
    };
    /**
     * Constructs an `Observable` that, when subscribed, causes the configured
     * `OPTIONS` request to execute on the server. This method allows the client
     * to determine the supported HTTP methods and other capabilites of an endpoint,
     * without implying a resource action. See the individual overloads for
     * details on the return type.
     */
    HttpClient.prototype.options = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('OPTIONS', url, options);
    };
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `PATCH` request to execute on the server. See the individual overloads for
     * details on the return type.
     */
    HttpClient.prototype.patch = function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('PATCH', url, addBody(options, body));
    };
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `POST` request to execute on the server. The server responds with the location of
     * the replaced resource. See the individual overloads for
     * details on the return type.
     */
    HttpClient.prototype.post = function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('POST', url, addBody(options, body));
    };
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
     * with a new set of values.
     * See the individual overloads for details on the return type.
     */
    HttpClient.prototype.put = function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('PUT', url, addBody(options, body));
    };
    HttpClient = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [HttpHandler])
    ], HttpClient);
    return HttpClient;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
 *
 *
 */
var HttpInterceptorHandler = /** @class */ (function () {
    function HttpInterceptorHandler(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    HttpInterceptorHandler.prototype.handle = function (req) {
        return this.interceptor.intercept(req, this.next);
    };
    return HttpInterceptorHandler;
}());
/**
 * A multi-provider token which represents the array of `HttpInterceptor`s that
 * are registered.
 *
 * @publicApi
 */
var HTTP_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('HTTP_INTERCEPTORS');
var NoopInterceptor = /** @class */ (function () {
    function NoopInterceptor() {
    }
    NoopInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req);
    };
    NoopInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], NoopInterceptor);
    return NoopInterceptor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Every request made through JSONP needs a callback name that's unique across the
// whole page. Each request is assigned an id and the callback name is constructed
// from that. The next id to be assigned is tracked in a global variable here that
// is shared among all applications on the page.
var nextRequestId = 0;
// Error text given when a JSONP script is injected, but doesn't invoke the callback
// passed in its URL.
var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
// Error text given when a request is passed to the JsonpClientBackend that doesn't
// have a request method JSONP.
var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
var JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
/**
 * DI token/abstract type representing a map of JSONP callbacks.
 *
 * In the browser, this should always be the `window` object.
 *
 *
 */
var JsonpCallbackContext = /** @class */ (function () {
    function JsonpCallbackContext() {
    }
    return JsonpCallbackContext;
}());
/**
 * `HttpBackend` that only processes `HttpRequest` with the JSONP method,
 * by performing JSONP style requests.
 *
 * @publicApi
 */
var JsonpClientBackend = /** @class */ (function () {
    function JsonpClientBackend(callbackMap, document) {
        this.callbackMap = callbackMap;
        this.document = document;
    }
    /**
     * Get the name of the next callback method, by incrementing the global `nextRequestId`.
     */
    JsonpClientBackend.prototype.nextCallback = function () { return "ng_jsonp_callback_" + nextRequestId++; };
    /**
     * Process a JSONP request and return an event stream of the results.
     */
    JsonpClientBackend.prototype.handle = function (req) {
        var _this = this;
        // Firstly, check both the method and response type. If either doesn't match
        // then the request was improperly routed here and cannot be handled.
        if (req.method !== 'JSONP') {
            throw new Error(JSONP_ERR_WRONG_METHOD);
        }
        else if (req.responseType !== 'json') {
            throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
        }
        // Everything else happens inside the Observable boundary.
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            // The first step to make a request is to generate the callback name, and replace the
            // callback placeholder in the URL with the name. Care has to be taken here to ensure
            // a trailing &, if matched, gets inserted back into the URL in the correct place.
            var callback = _this.nextCallback();
            var url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, "=" + callback + "$1");
            // Construct the <script> tag and point it at the URL.
            var node = _this.document.createElement('script');
            node.src = url;
            // A JSONP request requires waiting for multiple callbacks. These variables
            // are closed over and track state across those callbacks.
            // The response object, if one has been received, or null otherwise.
            var body = null;
            // Whether the response callback has been called.
            var finished = false;
            // Whether the request has been cancelled (and thus any other callbacks)
            // should be ignored.
            var cancelled = false;
            // Set the response callback in this.callbackMap (which will be the window
            // object in the browser. The script being loaded via the <script> tag will
            // eventually call this callback.
            _this.callbackMap[callback] = function (data) {
                // Data has been received from the JSONP script. Firstly, delete this callback.
                delete _this.callbackMap[callback];
                // Next, make sure the request wasn't cancelled in the meantime.
                if (cancelled) {
                    return;
                }
                // Set state to indicate data was received.
                body = data;
                finished = true;
            };
            // cleanup() is a utility closure that removes the <script> from the page and
            // the response callback from the window. This logic is used in both the
            // success, error, and cancellation paths, so it's extracted out for convenience.
            var cleanup = function () {
                // Remove the <script> tag if it's still on the page.
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
                // Remove the response callback from the callbackMap (window object in the
                // browser).
                delete _this.callbackMap[callback];
            };
            // onLoad() is the success callback which runs after the response callback
            // if the JSONP script loads successfully. The event itself is unimportant.
            // If something went wrong, onLoad() may run without the response callback
            // having been invoked.
            var onLoad = function (event) {
                // Do nothing if the request has been cancelled.
                if (cancelled) {
                    return;
                }
                // Cleanup the page.
                cleanup();
                // Check whether the response callback has run.
                if (!finished) {
                    // It hasn't, something went wrong with the request. Return an error via
                    // the Observable error path. All JSONP errors have status 0.
                    observer.error(new HttpErrorResponse({
                        url: url,
                        status: 0,
                        statusText: 'JSONP Error',
                        error: new Error(JSONP_ERR_NO_CALLBACK),
                    }));
                    return;
                }
                // Success. body either contains the response body or null if none was
                // returned.
                observer.next(new HttpResponse({
                    body: body,
                    status: 200,
                    statusText: 'OK', url: url,
                }));
                // Complete the stream, the response is over.
                observer.complete();
            };
            // onError() is the error callback, which runs if the script returned generates
            // a Javascript error. It emits the error via the Observable error channel as
            // a HttpErrorResponse.
            var onError = function (error) {
                // If the request was already cancelled, no need to emit anything.
                if (cancelled) {
                    return;
                }
                cleanup();
                // Wrap the error in a HttpErrorResponse.
                observer.error(new HttpErrorResponse({
                    error: error,
                    status: 0,
                    statusText: 'JSONP Error', url: url,
                }));
            };
            // Subscribe to both the success (load) and error events on the <script> tag,
            // and add it to the page.
            node.addEventListener('load', onLoad);
            node.addEventListener('error', onError);
            _this.document.body.appendChild(node);
            // The request has now been successfully sent.
            observer.next({ type: HttpEventType.Sent });
            // Cancellation handler.
            return function () {
                // Track the cancellation so event listeners won't do anything even if already scheduled.
                cancelled = true;
                // Remove the event listeners so they won't run if the events later fire.
                node.removeEventListener('load', onLoad);
                node.removeEventListener('error', onError);
                // And finally, clean up the page.
                cleanup();
            };
        });
    };
    JsonpClientBackend = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [JsonpCallbackContext, Object])
    ], JsonpClientBackend);
    return JsonpClientBackend;
}());
/**
 * An `HttpInterceptor` which identifies requests with the method JSONP and
 * shifts them to the `JsonpClientBackend`.
 *
 * @publicApi
 */
var JsonpInterceptor = /** @class */ (function () {
    function JsonpInterceptor(jsonp) {
        this.jsonp = jsonp;
    }
    JsonpInterceptor.prototype.intercept = function (req, next) {
        if (req.method === 'JSONP') {
            return this.jsonp.handle(req);
        }
        // Fall through for normal HTTP requests.
        return next.handle(req);
    };
    JsonpInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [JsonpClientBackend])
    ], JsonpInterceptor);
    return JsonpInterceptor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Determine an appropriate URL for the response, by checking either
 * XMLHttpRequest.responseURL or the X-Request-URL header.
 */
function getResponseUrl(xhr) {
    if ('responseURL' in xhr && xhr.responseURL) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
/**
 * A wrapper around the `XMLHttpRequest` constructor.
 *
 * @publicApi
 */
var XhrFactory = /** @class */ (function () {
    function XhrFactory() {
    }
    return XhrFactory;
}());
/**
 * A factory for @{link HttpXhrBackend} that uses the `XMLHttpRequest` browser API.
 *
 *
 */
var BrowserXhr = /** @class */ (function () {
    function BrowserXhr() {
    }
    BrowserXhr.prototype.build = function () { return (new XMLHttpRequest()); };
    BrowserXhr = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BrowserXhr);
    return BrowserXhr;
}());
/**
 * An `HttpBackend` which uses the XMLHttpRequest API to send
 * requests to a backend server.
 *
 * @publicApi
 */
var HttpXhrBackend = /** @class */ (function () {
    function HttpXhrBackend(xhrFactory) {
        this.xhrFactory = xhrFactory;
    }
    /**
     * Process a request and return a stream of response events.
     */
    HttpXhrBackend.prototype.handle = function (req) {
        var _this = this;
        // Quick check to give a better error message when a user attempts to use
        // HttpClient.jsonp() without installing the JsonpClientModule
        if (req.method === 'JSONP') {
            throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");
        }
        // Everything happens on Observable subscription.
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            // Start by setting up the XHR object with request method, URL, and withCredentials flag.
            var xhr = _this.xhrFactory.build();
            xhr.open(req.method, req.urlWithParams);
            if (!!req.withCredentials) {
                xhr.withCredentials = true;
            }
            // Add all the requested headers.
            req.headers.forEach(function (name, values) { return xhr.setRequestHeader(name, values.join(',')); });
            // Add an Accept header if one isn't present already.
            if (!req.headers.has('Accept')) {
                xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
            }
            // Auto-detect the Content-Type header if one isn't present already.
            if (!req.headers.has('Content-Type')) {
                var detectedType = req.detectContentTypeHeader();
                // Sometimes Content-Type detection fails.
                if (detectedType !== null) {
                    xhr.setRequestHeader('Content-Type', detectedType);
                }
            }
            // Set the responseType if one was requested.
            if (req.responseType) {
                var responseType = req.responseType.toLowerCase();
                // JSON responses need to be processed as text. This is because if the server
                // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
                // xhr.response will be null, and xhr.responseText cannot be accessed to
                // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
                // is parsed by first requesting text and then applying JSON.parse.
                xhr.responseType = ((responseType !== 'json') ? responseType : 'text');
            }
            // Serialize the request body if one is present. If not, this will be set to null.
            var reqBody = req.serializeBody();
            // If progress events are enabled, response headers will be delivered
            // in two events - the HttpHeaderResponse event and the full HttpResponse
            // event. However, since response headers don't change in between these
            // two events, it doesn't make sense to parse them twice. So headerResponse
            // caches the data extracted from the response whenever it's first parsed,
            // to ensure parsing isn't duplicated.
            var headerResponse = null;
            // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
            // state, and memoizes it into headerResponse.
            var partialFromXhr = function () {
                if (headerResponse !== null) {
                    return headerResponse;
                }
                // Read status and normalize an IE9 bug (http://bugs.jquery.com/ticket/1450).
                var status = xhr.status === 1223 ? 204 : xhr.status;
                var statusText = xhr.statusText || 'OK';
                // Parse headers from XMLHttpRequest - this step is lazy.
                var headers = new HttpHeaders(xhr.getAllResponseHeaders());
                // Read the response URL from the XMLHttpResponse instance and fall back on the
                // request URL.
                var url = getResponseUrl(xhr) || req.url;
                // Construct the HttpHeaderResponse and memoize it.
                headerResponse = new HttpHeaderResponse({ headers: headers, status: status, statusText: statusText, url: url });
                return headerResponse;
            };
            // Next, a few closures are defined for the various events which XMLHttpRequest can
            // emit. This allows them to be unregistered as event listeners later.
            // First up is the load event, which represents a response being fully available.
            var onLoad = function () {
                // Read response state from the memoized partial data.
                var _a = partialFromXhr(), headers = _a.headers, status = _a.status, statusText = _a.statusText, url = _a.url;
                // The body will be read out if present.
                var body = null;
                if (status !== 204) {
                    // Use XMLHttpRequest.response if set, responseText otherwise.
                    body = (typeof xhr.response === 'undefined') ? xhr.responseText : xhr.response;
                }
                // Normalize another potential bug (this one comes from CORS).
                if (status === 0) {
                    status = !!body ? 200 : 0;
                }
                // ok determines whether the response will be transmitted on the event or
                // error channel. Unsuccessful status codes (not 2xx) will always be errors,
                // but a successful status code can still result in an error if the user
                // asked for JSON data and the body cannot be parsed as such.
                var ok = status >= 200 && status < 300;
                // Check whether the body needs to be parsed as JSON (in many cases the browser
                // will have done that already).
                if (req.responseType === 'json' && typeof body === 'string') {
                    // Save the original body, before attempting XSSI prefix stripping.
                    var originalBody = body;
                    body = body.replace(XSSI_PREFIX, '');
                    try {
                        // Attempt the parse. If it fails, a parse error should be delivered to the user.
                        body = body !== '' ? JSON.parse(body) : null;
                    }
                    catch (error) {
                        // Since the JSON.parse failed, it's reasonable to assume this might not have been a
                        // JSON response. Restore the original body (including any XSSI prefix) to deliver
                        // a better error response.
                        body = originalBody;
                        // If this was an error request to begin with, leave it as a string, it probably
                        // just isn't JSON. Otherwise, deliver the parsing error to the user.
                        if (ok) {
                            // Even though the response status was 2xx, this is still an error.
                            ok = false;
                            // The parse error contains the text of the body that failed to parse.
                            body = { error: error, text: body };
                        }
                    }
                }
                if (ok) {
                    // A successful response is delivered on the event stream.
                    observer.next(new HttpResponse({
                        body: body,
                        headers: headers,
                        status: status,
                        statusText: statusText,
                        url: url || undefined,
                    }));
                    // The full body has been received and delivered, no further events
                    // are possible. This request is complete.
                    observer.complete();
                }
                else {
                    // An unsuccessful request is delivered on the error channel.
                    observer.error(new HttpErrorResponse({
                        // The error in this case is the response body (error from the server).
                        error: body,
                        headers: headers,
                        status: status,
                        statusText: statusText,
                        url: url || undefined,
                    }));
                }
            };
            // The onError callback is called when something goes wrong at the network level.
            // Connection timeout, DNS error, offline, etc. These are actual errors, and are
            // transmitted on the error channel.
            var onError = function (error) {
                var url = partialFromXhr().url;
                var res = new HttpErrorResponse({
                    error: error,
                    status: xhr.status || 0,
                    statusText: xhr.statusText || 'Unknown Error',
                    url: url || undefined,
                });
                observer.error(res);
            };
            // The sentHeaders flag tracks whether the HttpResponseHeaders event
            // has been sent on the stream. This is necessary to track if progress
            // is enabled since the event will be sent on only the first download
            // progerss event.
            var sentHeaders = false;
            // The download progress event handler, which is only registered if
            // progress events are enabled.
            var onDownProgress = function (event) {
                // Send the HttpResponseHeaders event if it hasn't been sent already.
                if (!sentHeaders) {
                    observer.next(partialFromXhr());
                    sentHeaders = true;
                }
                // Start building the download progress event to deliver on the response
                // event stream.
                var progressEvent = {
                    type: HttpEventType.DownloadProgress,
                    loaded: event.loaded,
                };
                // Set the total number of bytes in the event if it's available.
                if (event.lengthComputable) {
                    progressEvent.total = event.total;
                }
                // If the request was for text content and a partial response is
                // available on XMLHttpRequest, include it in the progress event
                // to allow for streaming reads.
                if (req.responseType === 'text' && !!xhr.responseText) {
                    progressEvent.partialText = xhr.responseText;
                }
                // Finally, fire the event.
                observer.next(progressEvent);
            };
            // The upload progress event handler, which is only registered if
            // progress events are enabled.
            var onUpProgress = function (event) {
                // Upload progress events are simpler. Begin building the progress
                // event.
                var progress = {
                    type: HttpEventType.UploadProgress,
                    loaded: event.loaded,
                };
                // If the total number of bytes being uploaded is available, include
                // it.
                if (event.lengthComputable) {
                    progress.total = event.total;
                }
                // Send the event.
                observer.next(progress);
            };
            // By default, register for load and error events.
            xhr.addEventListener('load', onLoad);
            xhr.addEventListener('error', onError);
            // Progress events are only enabled if requested.
            if (req.reportProgress) {
                // Download progress is always enabled if requested.
                xhr.addEventListener('progress', onDownProgress);
                // Upload progress depends on whether there is a body to upload.
                if (reqBody !== null && xhr.upload) {
                    xhr.upload.addEventListener('progress', onUpProgress);
                }
            }
            // Fire the request, and notify the event stream that it was fired.
            xhr.send(reqBody);
            observer.next({ type: HttpEventType.Sent });
            // This is the return from the Observable function, which is the
            // request cancellation handler.
            return function () {
                // On a cancellation, remove all registered event listeners.
                xhr.removeEventListener('error', onError);
                xhr.removeEventListener('load', onLoad);
                if (req.reportProgress) {
                    xhr.removeEventListener('progress', onDownProgress);
                    if (reqBody !== null && xhr.upload) {
                        xhr.upload.removeEventListener('progress', onUpProgress);
                    }
                }
                // Finally, abort the in-flight request.
                xhr.abort();
            };
        });
    };
    HttpXhrBackend = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [XhrFactory])
    ], HttpXhrBackend);
    return HttpXhrBackend;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSRF_COOKIE_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('XSRF_COOKIE_NAME');
var XSRF_HEADER_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('XSRF_HEADER_NAME');
/**
 * Retrieves the current XSRF token to use with the next outgoing request.
 *
 * @publicApi
 */
var HttpXsrfTokenExtractor = /** @class */ (function () {
    function HttpXsrfTokenExtractor() {
    }
    return HttpXsrfTokenExtractor;
}());
/**
 * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
 */
var HttpXsrfCookieExtractor = /** @class */ (function () {
    function HttpXsrfCookieExtractor(doc, platform, cookieName) {
        this.doc = doc;
        this.platform = platform;
        this.cookieName = cookieName;
        this.lastCookieString = '';
        this.lastToken = null;
        /**
         * @internal for testing
         */
        this.parseCount = 0;
    }
    HttpXsrfCookieExtractor.prototype.getToken = function () {
        if (this.platform === 'server') {
            return null;
        }
        var cookieString = this.doc.cookie || '';
        if (cookieString !== this.lastCookieString) {
            this.parseCount++;
            this.lastToken = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵparseCookieValue"])(cookieString, this.cookieName);
            this.lastCookieString = cookieString;
        }
        return this.lastToken;
    };
    HttpXsrfCookieExtractor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(XSRF_COOKIE_NAME)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, String, String])
    ], HttpXsrfCookieExtractor);
    return HttpXsrfCookieExtractor;
}());
/**
 * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
 */
var HttpXsrfInterceptor = /** @class */ (function () {
    function HttpXsrfInterceptor(tokenService, headerName) {
        this.tokenService = tokenService;
        this.headerName = headerName;
    }
    HttpXsrfInterceptor.prototype.intercept = function (req, next) {
        var lcUrl = req.url.toLowerCase();
        // Skip both non-mutating requests and absolute URLs.
        // Non-mutating requests don't require a token, and absolute URLs require special handling
        // anyway as the cookie set
        // on our origin is not the same as the token expected by another origin.
        if (req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') ||
            lcUrl.startsWith('https://')) {
            return next.handle(req);
        }
        var token = this.tokenService.getToken();
        // Be careful not to overwrite an existing header of the same name.
        if (token !== null && !req.headers.has(this.headerName)) {
            req = req.clone({ headers: req.headers.set(this.headerName, token) });
        }
        return next.handle(req);
    };
    HttpXsrfInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(XSRF_HEADER_NAME)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [HttpXsrfTokenExtractor, String])
    ], HttpXsrfInterceptor);
    return HttpXsrfInterceptor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * An injectable `HttpHandler` that applies multiple interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * The interceptors are loaded lazily from the injector, to allow
 * interceptors to themselves inject classes depending indirectly
 * on `HttpInterceptingHandler` itself.
 * @see `HttpInterceptor`
 */
var HttpInterceptingHandler = /** @class */ (function () {
    function HttpInterceptingHandler(backend, injector) {
        this.backend = backend;
        this.injector = injector;
        this.chain = null;
    }
    HttpInterceptingHandler.prototype.handle = function (req) {
        if (this.chain === null) {
            var interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
            this.chain = interceptors.reduceRight(function (next, interceptor) { return new HttpInterceptorHandler(next, interceptor); }, this.backend);
        }
        return this.chain.handle(req);
    };
    HttpInterceptingHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [HttpBackend, _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], HttpInterceptingHandler);
    return HttpInterceptingHandler;
}());
/**
 * Factory function that determines where to store JSONP callbacks.
 *
 * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
 * in test environments. In that case, callbacks are stored on an anonymous object instead.
 *
 *
 */
function jsonpCallbackContext() {
    if (typeof window === 'object') {
        return window;
    }
    return {};
}
/**
 * Configures XSRF protection support for outgoing requests.
 *
 * For a server that supports a cookie-based XSRF protection system,
 * use directly to configure XSRF protection with the correct
 * cookie and header names.
 *
 * If no names are supplied, the default cookie name is `XSRF-TOKEN`
 * and the default header name is `X-XSRF-TOKEN`.
 *
 * @publicApi
 */
var HttpClientXsrfModule = /** @class */ (function () {
    function HttpClientXsrfModule() {
    }
    HttpClientXsrfModule_1 = HttpClientXsrfModule;
    /**
     * Disable the default XSRF protection.
     */
    HttpClientXsrfModule.disable = function () {
        return {
            ngModule: HttpClientXsrfModule_1,
            providers: [
                { provide: HttpXsrfInterceptor, useClass: NoopInterceptor },
            ],
        };
    };
    /**
     * Configure XSRF protection.
     * @param options An object that can specify either or both
     * cookie name or header name.
     * - Cookie name default is `XSRF-TOKEN`.
     * - Header name default is `X-XSRF-TOKEN`.
     *
     */
    HttpClientXsrfModule.withOptions = function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: HttpClientXsrfModule_1,
            providers: [
                options.cookieName ? { provide: XSRF_COOKIE_NAME, useValue: options.cookieName } : [],
                options.headerName ? { provide: XSRF_HEADER_NAME, useValue: options.headerName } : [],
            ],
        };
    };
    var HttpClientXsrfModule_1;
    HttpClientXsrfModule = HttpClientXsrfModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                HttpXsrfInterceptor,
                { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
                { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
                { provide: XSRF_COOKIE_NAME, useValue: 'XSRF-TOKEN' },
                { provide: XSRF_HEADER_NAME, useValue: 'X-XSRF-TOKEN' },
            ],
        })
    ], HttpClientXsrfModule);
    return HttpClientXsrfModule;
}());
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for XSRF. Automatically imported by `HttpClientModule`.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */
var HttpClientModule = /** @class */ (function () {
    function HttpClientModule() {
    }
    HttpClientModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            /**
             * Optional configuration for XSRF protection.
             */
            imports: [
                HttpClientXsrfModule.withOptions({
                    cookieName: 'XSRF-TOKEN',
                    headerName: 'X-XSRF-TOKEN',
                }),
            ],
            /**
             * Configures the [dependency injector](guide/glossary#injector) where it is imported
             * with supporting services for HTTP communications.
             */
            providers: [
                HttpClient,
                { provide: HttpHandler, useClass: HttpInterceptingHandler },
                HttpXhrBackend,
                { provide: HttpBackend, useExisting: HttpXhrBackend },
                BrowserXhr,
                { provide: XhrFactory, useExisting: BrowserXhr },
            ],
        })
    ], HttpClientModule);
    return HttpClientModule;
}());
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for JSONP.
 * Without this module, Jsonp requests reach the backend
 * with method JSONP, where they are rejected.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */
var HttpClientJsonpModule = /** @class */ (function () {
    function HttpClientJsonpModule() {
    }
    HttpClientJsonpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                JsonpClientBackend,
                { provide: JsonpCallbackContext, useFactory: jsonpCallbackContext },
                { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true },
            ],
        })
    ], HttpClientJsonpModule);
    return HttpClientJsonpModule;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=http.js.map


/***/ }),

/***/ "./node_modules/emailjs-com/source/index.js":
/*!**************************************************!*\
  !*** ./node_modules/emailjs-com/source/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EmailJSResponseStatus_1 = __webpack_require__(/*! ./models/EmailJSResponseStatus */ "./node_modules/emailjs-com/source/models/EmailJSResponseStatus.js");
var UI_1 = __webpack_require__(/*! ./services/ui/UI */ "./node_modules/emailjs-com/source/services/ui/UI.js");
var _userID = null;
var _origin = 'https://api.emailjs.com';
function sendPost(url, data, headers) {
    if (headers === void 0) { headers = {}; }
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load', function (event) {
            var responseStatus = new EmailJSResponseStatus_1.EmailJSResponseStatus(event.target);
            if (responseStatus.status === 200 || responseStatus.text === 'OK') {
                resolve(responseStatus);
            }
            else {
                reject(responseStatus);
            }
        });
        xhr.addEventListener('error', function (event) {
            reject(new EmailJSResponseStatus_1.EmailJSResponseStatus(event.target));
        });
        xhr.open('POST', url, true);
        for (var key in headers) {
            xhr.setRequestHeader(key, headers[key]);
        }
        xhr.send(data);
    });
}
function appendGoogleCaptcha(templatePrams) {
    var element = document.getElementById('g-recaptcha-response');
    if (element && element.value) {
        templatePrams['g-recaptcha-response'] = element.value;
    }
    element = null;
    return templatePrams;
}
/**
 * Initiation
 * @param {string} userID - set the EmailJS user ID
 * @param {string} origin - set the EmailJS origin
 */
function init(userID, origin) {
    _userID = userID;
    _origin = origin || 'https://api.emailjs.com';
}
exports.init = init;
/**
 * Send a template to the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {Object} templatePrams - the template params, what will be set to the EmailJS template
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
function send(serviceID, templateID, templatePrams, userID) {
    var params = {
        lib_version: '2.3.2',
        user_id: userID || _userID,
        service_id: serviceID,
        template_id: templateID,
        template_params: appendGoogleCaptcha(templatePrams)
    };
    return sendPost(_origin + '/api/v1.0/email/send', JSON.stringify(params), {
        'Content-type': 'application/json'
    });
}
exports.send = send;
/**
 * Send a form the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {string | HTMLFormElement} form - the form element or selector
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
function sendForm(serviceID, templateID, form, userID) {
    if (typeof form === 'string') {
        form = document.querySelector(form);
    }
    if (!form || form.nodeName !== 'FORM') {
        throw 'Expected the HTML form element or the style selector of form';
    }
    UI_1.UI.progressState(form);
    var formData = new FormData(form);
    formData.append('lib_version', '2.3.2');
    formData.append('service_id', serviceID);
    formData.append('template_id', templateID);
    formData.append('user_id', userID || _userID);
    return sendPost(_origin + '/api/v1.0/email/send-form', formData)
        .then(function (response) {
        UI_1.UI.successState(form);
        return response;
    }, function (error) {
        UI_1.UI.errorState(form);
        return Promise.reject(error);
    });
}
exports.sendForm = sendForm;


/***/ }),

/***/ "./node_modules/emailjs-com/source/models/EmailJSResponseStatus.js":
/*!*************************************************************************!*\
  !*** ./node_modules/emailjs-com/source/models/EmailJSResponseStatus.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EmailJSResponseStatus = /** @class */ (function () {
    function EmailJSResponseStatus(httpResponse) {
        this.status = httpResponse.status;
        this.text = httpResponse.responseText;
    }
    return EmailJSResponseStatus;
}());
exports.EmailJSResponseStatus = EmailJSResponseStatus;


/***/ }),

/***/ "./node_modules/emailjs-com/source/services/ui/UI.js":
/*!***********************************************************!*\
  !*** ./node_modules/emailjs-com/source/services/ui/UI.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UI = /** @class */ (function () {
    function UI() {
    }
    UI.clearAll = function (form) {
        form.classList.remove(this.PROGRESS);
        form.classList.remove(this.DONE);
        form.classList.remove(this.ERROR);
    };
    UI.progressState = function (form) {
        this.clearAll(form);
        form.classList.add(this.PROGRESS);
    };
    UI.successState = function (form) {
        form.classList.remove(this.PROGRESS);
        form.classList.add(this.DONE);
    };
    UI.errorState = function (form) {
        form.classList.remove(this.PROGRESS);
        form.classList.add(this.ERROR);
    };
    UI.PROGRESS = 'emailjs-sending';
    UI.DONE = 'emailjs-success';
    UI.ERROR = 'emailjs-error';
    return UI;
}());
exports.UI = UI;


/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingComponent", function() { return HomeRoutingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");




var appRoutes = [
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
var HomeRoutingComponent = /** @class */ (function () {
    function HomeRoutingComponent() {
    }
    HomeRoutingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HomeRoutingComponent);
    return HomeRoutingComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--==========================\r\nIntro Section\r\n============================-->\r\n\r\n<section id=\"intro\" class=\"clearfix\">\r\n    <br>    \r\n    <div class=\"container-fluid d-flex h-100 justify-content-center\">\r\n        <div class=\"row align-self-center\">\r\n            <div class=\"col-md-6 intro-info order-md-first order-last justify-content-center\">\r\n                <!-- <nav class=\"main-nav justify-content-center align-self-center\" >\r\n                    <ul>\r\n                        <li [routerLinkActive]=\"'active'\" [routerLinkActiveOptions]=\"{exact: true}\"><a [ngClass]=\"{'arabicNavH': lang==='som' || lang==='arb'}\" [routerLink]=\"['/']\"  > {{ navMenuActive.personal }} </a></li>\r\n                        <li [routerLinkActive]=\"'active'\" ><a [ngClass]=\"{'arabicNavH': lang==='som' || lang==='arb'}\" [routerLink]=\"['/sombank-for-businesses']\" > {{ navMenuActive.business }} </a></li>\r\n                    </ul>\r\n                </nav> -->\r\n                <!-- <div style=\"width:100%; text-align: center; margin: 0px auto\" class=\"justify-content-center\" >\r\n                    <h3 style=\"display:inline-block; padding-right: 15px\" [routerLinkActive]=\"'active'\" [routerLinkActiveOptions]=\"{exact: true}\"><a [ngClass]=\"{'arabicNavH': lang==='som' || lang==='arb'}\" [routerLink]=\"['/']\"  > {{ navMenuActive.personal }} </a></h3>\r\n                    <h3 style=\"display:inline-block; padding-left: 15px\" [routerLinkActive]=\"'active'\" ><a [ngClass]=\"{'arabicNavH': lang==='som' || lang==='arb'}\" [routerLink]=\"['/sombank-for-businesses']\" > {{ navMenuActive.business }} </a></h3>\r\n                </div>\r\n                <br> -->                \r\n                <h2 [ngClass]=\"{'arabicSH': lang==='som' || lang==='arb'}\" style=\"text-align:center\"> \r\n                    {{ content.heading }} <span> {{ country }} </span>\r\n                </h2>\r\n                <br>\r\n                <br>\r\n                <br>\r\n                <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\r\n                    <div >\r\n                        <div class=\"form-row justify-content-center\">\r\n                            <div class=\"col-9\">\r\n                                <input type=\"email\" class=\"form-control custom-remove-border\" [ngClass]=\"{'custom-form-control':lang==='som' || lang==='arb'}\" maxlength=\"50\" placeholder=\"email@test.com\" name=\"email\" required email ngModel #email=\"ngModel\">\r\n                            </div>\r\n                        </div>\r\n                        <br>\r\n                        <div class=\"form-row justify-content-center\">\r\n                            <div class=\"col-3\">\r\n                                <select class=\"custom-select mr-sm-2 custom-remove-border\" name=\"ext\" ngModel required #ext=\"ngModel\"> \r\n                                    <option value=\"+61\">+61</option>\r\n                                    <option value=\"+1\">+1</option>\r\n                                    <option value=\"+253\">+253</option>\r\n                                    <option value=\"+251\">+251</option>\r\n                                    <option value=\"+254\">+254</option>\r\n                                    <option value=\"+47\">+47</option>\r\n                                    <option value=\"+252\">+252</option>\r\n                                    <option value=\"+249\">+249</option>\r\n                                    <option value=\"+211\">+211</option>\r\n                                    <option value=\"+46\">+46</option>\r\n                                    <option value=\"+971\">+971</option>\r\n                                    <option value=\"+256\">+256</option>\r\n                                    <option value=\"+44\">+44</option>\r\n                                    <option value=\"+91\">+91</option>\r\n                                    <option value=\"+86\">+86</option>\r\n                                    <option value=\"+62\">+62</option>\r\n                                    <option value=\"+60\">+60</option>\r\n                                    <option value=\"+91\">+91</option>\r\n                                </select>\r\n                            </div>\r\n                            <div class=\"col-6\">\r\n                                <input type=\"number\" class=\"form-control custom-remove-border\" [ngClass]=\"{'custom-form-control':lang==='som' || lang==='arb'}\" placeholder=\"Mobile Number\" name=\"cell\" required ngModel #cell=\"ngModel\">\r\n                            </div>\r\n                        </div>\r\n                        <br>\r\n                        <div class=\"g-recaptcha\" data-sitekey=\"6LeEQbcUAAAAAE_nEzMQxXCssVjedgw2UOd4MreV\"></div>\r\n                        <div class=\"form-row justify-content-center\">\r\n                            <div class=\"col-6\">\r\n                        <button type=\"submit\" [ngClass]=\"{'arabicH4-center': lang ==='som' || lang ==='arb'}\" class=\"btn btn-primary form-control\" [disabled]=\"f.invalid\"> {{ content.button }} </button>\r\n                        </div></div>\r\n                    </div>\r\n                </form>            \r\n            </div>\r\n        \r\n            <div class=\"col-md-6 intro-info order-md-last order-first justify-content-center\">\r\n            \r\n                <div style=\"width:100%; text-align: center; margin: 0px auto\" class=\"justify-content-center\" >\r\n                    <h3 style=\"display:inline-block; padding-right: 15px\" [routerLinkActive]=\"'active'\" [routerLinkActiveOptions]=\"{exact: true}\"><a [ngClass]=\"{'arabicH3': lang ==='som' || lang ==='arb'}\" [routerLink]=\"['/']\"  > {{ navMenuActive.personal }} </a></h3>\r\n                    <h3 style=\"display:inline-block; padding-left: 15px\" [routerLinkActive]=\"'active'\" ><a [ngClass]=\"{'arabicH3': lang ==='som' || lang ==='arb'}\" [routerLink]=\"['/sombank-for-businesses']\" > {{ navMenuActive.business }} </a></h3>\r\n                </div>\r\n                <br>\r\n                \r\n                   <!--  <img src=\"../assets/img/camel4.gif\" alt=\"\" class=\"img-fluid\"> -->\r\n                   <!-- <div class=\"custom-img-background justify-content-center\"> -->\r\n                   <div class=\"row justify-content-center\">\r\n                        <div class=\"justify-content-center\">\r\n                            <img style=\"border-radius: 0%\" class=\"img-fluid align-self-center\" src=\"../assets/AnimCAmel2.gif\" alt=\"\" class=\"img-fluid\">\r\n                            <!-- <video class=\"img-fluid align-self-center\" autoplay loop style=\"border-radius: 50%\">\r\n                                <source src=\"../assets/camel.gif\" type=\"video/mp4\">\r\n                                Your browser does not support the video tag.\r\n                            </video> -->\r\n                        </div>\r\n                   </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</section>\r\n\r\n<!-- #intro -->\r\n\r\n<main id=\"main\">\r\n\r\n    <!--==========================\r\n        Features Section\r\n    ============================-->\r\n\r\n    <section id=\"features\">\r\n        <div class=\"container\">\r\n            <div class=\"row feature-item\">\r\n            <div class=\"col-lg-6 wow fadeInUp\" [ngClass]=\"{'order-1':true}\">\r\n                <div class=\"row justify-content-center\">\r\n                    <img src=\"../../assets/img/slider-t-plus-anim.gif\" class=\"img-fluid custom-img-fluid\" alt=\"\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6 wow fadeInUp pt-5 pt-lg-0\" [ngClass]=\"{'order-12':true}\">\r\n                <h4 [ngClass]=\"{'arabicH4':lang === 'arb' || lang === 'som' }\"> {{ content.section1.heading }} </h4>\r\n                <h6 [ngClass]=\"{'arabicH6':lang === 'arb' || lang === 'som' }\"> {{ content.section1.subheading1 }} </h6>\r\n                <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\">\r\n                    {{ content.section1.subheading1Cont }}\r\n                </p>\r\n                <h6 [ngClass]=\"{'arabicH6':lang === 'arb' || lang === 'som' }\"> {{ content.section1.subheading2 }} </h6>\r\n                <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\">\r\n                    {{ content.section1.subheading2Cont }}\r\n                </p>\r\n                <h6 [ngClass]=\"{'arabicH6':lang === 'arb' || lang === 'som' }\"> {{ content.section1.subheading3 }} </h6>\r\n                <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\">\r\n                    {{ content.section1.subheading3Cont }}\r\n                </p>\r\n                <h6 [ngClass]=\"{'arabicH6':lang === 'arb' || lang === 'som' }\"> {{ content.section1.subheading4 }} </h6>\r\n                <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\">\r\n                    {{ content.section1.subheading4Cont }}\r\n                </p>\r\n            </div>\r\n            </div>\r\n\r\n            <div class=\"row feature-item mt-5 pt-5\">\r\n            <div class=\"col-lg-6 wow fadeInUp order-1 order-lg-2\">\r\n                <div class=\"row justify-content-center\">\r\n                    <img src=\"../../assets/img/slider-t-plus-anim.gif\" class=\"img-fluid custom-img-fluid\" alt=\"\" >\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1\">\r\n                <h4 [ngClass]=\"{'arabicH4':lang === 'arb' || lang === 'som' }\"> {{ content.section2.heading }} </h4>\r\n                <h6 [ngClass]=\"{'arabicH6':lang === 'arb' || lang === 'som' }\"> {{ content.section2.subheading1 }} </h6>\r\n                <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\">\r\n                    {{ content.section2.subheading1Cont }}\r\n                </p>\r\n                <h6 [ngClass]=\"{'arabicH6':lang === 'arb' || lang === 'som' }\"> {{ content.section2.subheading2 }} </h6>\r\n                <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\">\r\n                    {{ content.section2.subheading2Cont }}\r\n                </p>\r\n                <h6 [ngClass]=\"{'arabicH6':lang === 'arb' || lang === 'som' }\"> {{ content.section2.subheading3 }} </h6>\r\n                <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\">\r\n                    {{ content.section2.subheading3Cont }}\r\n                </p>\r\n            </div>\r\n            </div>\r\n\r\n            <div class=\"row feature-item\">\r\n            <div class=\"col-lg-6 wow fadeInUp\">\r\n                <div class=\"row justify-content-center\">\r\n                    <img src=\"../../assets/img/slider-t-plus-anim.gif\" class=\"img-fluid custom-img-fluid\" alt=\"\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6 wow fadeInUp pt-5 pt-lg-0\">\r\n                <h4 [ngClass]=\"{'arabicH4':lang === 'arb' || lang === 'som' }\"> {{ content.section3.heading }} </h4>\r\n                <h6 [ngClass]=\"{'arabicH6':lang === 'arb' || lang === 'som' }\"> {{ content.section3.subheading1 }} </h6>\r\n                <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\">\r\n                    {{ content.section3.subheading1Cont }}\r\n                </p>\r\n                <h6 [ngClass]=\"{'arabicH6':lang === 'arb' || lang === 'som' }\"> {{ content.section3.subheading2 }} </h6>\r\n                <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\">\r\n                    {{ content.section3.subheading2Cont }}\r\n                </p>\r\n                <h6 [ngClass]=\"{'arabicH6':lang === 'arb' || lang === 'som' }\"> {{ content.section3.subheading3 }} </h6>\r\n                <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\">\r\n                    {{ content.section3.subheading3Cont }}\r\n                </p>\r\n            </div>\r\n            </div>\r\n\r\n            <div class=\"row feature-item\">\r\n                <div class=\"col-lg-6 wow fadeInUp pt-5 pt-lg-0\">\r\n                    <h4 [ngClass]=\"{'arabicH4':lang === 'arb' || lang === 'som' }\"> {{ content.section4.heading }} </h4>\r\n                    <h6 [ngClass]=\"{'arabicH6':lang === 'arb' || lang === 'som' }\"> {{ content.section4.subheading1 }} </h6>\r\n                    <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\">\r\n                        {{ content.section4.subheading1Cont }}\r\n                    </p>\r\n                    <h6 [ngClass]=\"{'arabicH6':lang === 'arb' || lang === 'som' }\"> {{ content.section4.subheading2 }} </h6>\r\n                    <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\">\r\n                        {{ content.section4.subheading2Cont }}\r\n                    </p>\r\n                    <h6 [ngClass]=\"{'arabicH6':lang === 'arb' || lang === 'som' }\"> {{ content.section4.subheading3 }} </h6>\r\n                    <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\">\r\n                        {{ content.section4.subheading3Cont }}\r\n                    </p>\r\n                </div>\r\n                <div class=\"col-lg-6 wow fadeInUp\">\r\n                <div class=\"row justify-content-center\">\r\n                    <img src=\"../../assets/img/slider-t-plus-anim.gif\" class=\"custom-img-fluid img-fluid\" alt=\"\">\r\n                </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </section>\r\n            \r\n    <!-- #features -->\r\n\r\n        \r\n        \r\n    <!--==========================\r\n    Pricing Section\r\n    ============================-->\r\n\r\n    <section id=\"pricing\" class=\"wow fadeInUp section-bg\">\r\n\r\n        <div class=\"container\">\r\n\r\n            <header class=\"section-header\">\r\n            <h3 [ngClass]=\"{'arabicH4-center': lang === 'arb' || lang === 'som'}\"> {{ pricingContent.heading }} </h3>\r\n            <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\"> {{ pricingContent.content }} </p>\r\n            </header>\r\n\r\n            <div class=\"row flex-items-xs-middle flex-items-xs-center\">\r\n        \r\n            <!-- Basic Plan  -->\r\n            <div class=\"col-xs-12 col-lg-4\">\r\n                <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 [ngClass]=\"{'arabicH4-center':lang === 'arb' || lang === 'som' }\"> {{ pricingContent.standerd.heading }} </h4>\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <h6 class=\"card-title\">\r\n                        <span class=\"currency\" [ngClass]=\"{'arabicH4-center':lang === 'arb' || lang === 'som' }\">$</span>0<span class=\"period\">/ {{ pricingContent.standerd.pricing }} </span> \r\n                    </h6>\r\n                    <ul class=\"list-group custom-align-left\">\r\n                    <li class=\"list-group-item\" *ngFor=\"let item of pricingContent.standerd.features\" [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\"><i class=\"fa fa-check\"></i> {{ item }} </li>\r\n                    <!-- \r\n                    <li class=\"list-group-item\"><i class=\"fa fa-check\"></i>  Free Euro IBAN account</li>\r\n                    <li class=\"list-group-item\"><i class=\"fa fa-check\"></i>  Spend in over 150 currencies at the interbank exchange rate</li>\r\n                    <li class=\"list-group-item\"><i class=\"fa fa-check\"></i>  No fee exchange in 29 fiat currencies up to £5,000 per month</li> -->\r\n                    </ul>\r\n                    <a href=\"#\" class=\"btn\"> {{ pricingContent.standerd.button }} </a>\r\n                </div>\r\n                </div>\r\n            </div>\r\n        \r\n            <!-- Regular Plan  -->\r\n            <div class=\"col-xs-12 col-lg-4\">\r\n                <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 [ngClass]=\"{'arabicH4-center':lang === 'arb' || lang === 'som' }\">{{ pricingContent.premium.heading }}</h4>\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <h6 class=\"card-title\"> \r\n                        <span class=\"currency\" [ngClass]=\"{'arabicH4-center':lang === 'arb' || lang === 'som' }\">$</span>29<span class=\"period\">/ {{ pricingContent.premium.pricing }} </span>\r\n                    </h6>\r\n                    <ul class=\"list-group custom-align-left\">\r\n                    <li class=\"list-group-item\" *ngFor=\"let item of pricingContent.premium.features\" [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\"><i class=\"fa fa-check\"></i> {{ item }} </li>\r\n                    </ul>\r\n                    <a href=\"#\" class=\"btn\">{{ pricingContent.premium.button }}</a>\r\n                </div>\r\n                </div>\r\n            </div>\r\n        \r\n            <!-- Premium Plan  -->\r\n            <div class=\"col-xs-12 col-lg-4\">\r\n                <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 [ngClass]=\"{'arabicH4-center':lang === 'arb' || lang === 'som' }\">{{ pricingContent.gold.heading }}</h4>\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <h6 class=\"card-title\"> \r\n                        <span class=\"currency\" [ngClass]=\"{'arabicH4-center':lang === 'arb' || lang === 'som' }\">$</span>39<span class=\"period\">/ {{ pricingContent.gold.pricing }} </span>\r\n                    </h6>\r\n                    <ul class=\"list-group custom-align-left\">\r\n                        <li class=\"list-group-item\" *ngFor=\"let item of pricingContent.gold.features\" [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\"><i class=\"fa fa-check\"></i> {{ item }} </li>\r\n                    </ul>\r\n                    <a href=\"#\" class=\"btn\">{{ pricingContent.gold.button }}</a>\r\n                </div>\r\n                </div>\r\n            </div>\r\n        \r\n            </div>\r\n        </div>\r\n\r\n    </section>\r\n\r\n    <!-- #pricing -->\r\n\r\n    <!--==========================\r\n    Frequently Asked Questions Section\r\n    ============================-->\r\n\r\n    <section id=\"faq\">\r\n        <div class=\"container\">\r\n            <header class=\"section-header\">\r\n            <h3 [ngClass]=\"{'arabicH3': lang ==='som' || lang ==='arb'}\"> {{ faqContent.heading }} </h3>\r\n            <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\" > {{ faqContent.content }} </p>\r\n            </header>\r\n\r\n            <ul id=\"faq-list\" class=\"wow fadeInUp\">\r\n                <li *ngFor=\"let section of faqContent.questions; let i = index \">\r\n                    <a data-toggle=\"collapse\" class=\"collapsed\" href=\"{{ '#faq' + i }} \" [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\" > {{ section.q }} <i class=\"ion-android-remove\"></i></a>\r\n                    <div id=\"{{ 'faq' + i }}\" class=\"collapse\" data-parent=\"#faq-list\">\r\n                    <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\" >\r\n                        {{ section.a }}\r\n                    </p>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </section>\r\n        \r\n    <!-- #faq -->\r\n\r\n    <!--==========================\r\n    Map\r\n    ============================-->\r\n\r\n    <section>\r\n        <div class=\"container\" >\r\n            <header class=\"section-header\">\r\n                <h3 [ngClass]=\"{'arabicH3': lang ==='som' || lang ==='arb'}\"> {{ somGlobalCommunityContent.heading }} </h3>\r\n                </header>\r\n            <img src=\"../../assets/img/telocations.gif\" class=\"img-fluid\">\r\n        </div>\r\n    </section>\r\n\r\n    <!-- #Map -->\r\n\r\n    <!--==========================\r\n    Counter\r\n    ============================-->\r\n\r\n    <section id=\"why-us\" class=\"wow fadeIn\">\r\n        <div class=\"container\">\r\n            <div class=\"row counters\">\r\n                <div class=\"col-lg-3 col-6 text-center\">\r\n                    <span data-toggle=\"counter-up\"  [ngClass]=\"{'arabicH3-center': lang ==='som' || lang ==='arb'}\"> {{ somGlobalCommunityContent.clientsNum }} </span>\r\n                    <p [ngClass]=\"{'arabicP-center': lang === 'arb' || lang === 'som'}\"> {{ somGlobalCommunityContent.clients }} </p>\r\n                </div>\r\n\r\n                <div class=\"col-lg-3 col-6 text-center\">\r\n                    <span data-toggle=\"counter-up\"  [ngClass]=\"{'arabicH3-center': lang ==='som' || lang ==='arb'}\"> {{ somGlobalCommunityContent.projectsNum }} </span>\r\n                    <p [ngClass]=\"{'arabicP-center': lang === 'arb' || lang === 'som'}\"> {{ somGlobalCommunityContent.projects }} </p>\r\n                </div>\r\n\r\n                <div class=\"col-lg-3 col-6 text-center\">\r\n                    <span data-toggle=\"counter-up\"  [ngClass]=\"{'arabicH3-center': lang ==='som' || lang ==='arb'}\"> {{ somGlobalCommunityContent.hoursNum }} </span>\r\n                    <p [ngClass]=\"{'arabicP-center': lang === 'arb' || lang === 'som'}\"> {{ somGlobalCommunityContent.hours }} </p>\r\n                </div>\r\n\r\n                <div class=\"col-lg-3 col-6 text-center\">\r\n                    <span data-toggle=\"counter-up\"  [ngClass]=\"{'arabicH3-center': lang ==='som' || lang ==='arb'}\"> {{ somGlobalCommunityContent.hardworkNum }} </span>\r\n                    <p [ngClass]=\"{'arabicP-center': lang === 'arb' || lang === 'som'}\"> {{ somGlobalCommunityContent.hardwork }} </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n        \r\n    <!-- #Counter -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <!--==========================\r\n    About Us Section\r\n    ============================-->\r\n        <!-- <section id=\"about\">\r\n\r\n        <div class=\"container\">\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-lg-5 col-md-6\">\r\n            <div class=\"about-img\">\r\n                <img src=\"../assets/img/about-img.jpg\" alt=\"\">\r\n            </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-7 col-md-6\">\r\n            <div class=\"about-content\">\r\n                <h2>About Us</h2>\r\n                <h3>Odio sed id eos et laboriosam consequatur eos earum soluta.</h3>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\r\n                <p>Aut dolor id. Sint aliquam consequatur ex ex labore. Et quis qui dolor nulla dolores neque. Aspernatur consectetur omnis numquam quaerat. Sed fugiat nisi. Officiis veniam molestiae. Et vel ut quidem alias veritatis repudiandae ut fugit. Est ut eligendi aspernatur nulla voluptates veniam iusto vel quisquam. Fugit ut maxime incidunt accusantium totam repellendus eum error. Et repudiandae eum iste qui et ut ab alias.</p>\r\n                <ul>\r\n                <li><i class=\"ion-android-checkmark-circle\"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>\r\n                <li><i class=\"ion-android-checkmark-circle\"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>\r\n                <li><i class=\"ion-android-checkmark-circle\"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>\r\n                </ul>\r\n            </div>\r\n            </div>\r\n        </div>\r\n        </div>\r\n\r\n    </section>\r\n        -->\r\n    <!-- #about -->\r\n\r\n\r\n    <!--==========================\r\n        Services Section\r\n    ============================-->\r\n    <!-- <section id=\"services\" class=\"section-bg\">\r\n        <div class=\"container\">\r\n\r\n        <header class=\"section-header\">\r\n            <h3>Services</h3>\r\n            <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>\r\n        </header>\r\n\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-md-6 col-lg-4 wow bounceInUp\" data-wow-duration=\"1.4s\">\r\n            <div class=\"box\">\r\n                <div class=\"icon\" style=\"background: #fceef3;\"><i class=\"ion-ios-analytics-outline\" style=\"color: #ff689b;\"></i></div>\r\n                <h4 class=\"title\"><a href=\"\">Lorem Ipsum</a></h4>\r\n                <p class=\"description\">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>\r\n            </div>\r\n            </div>\r\n            <div class=\"col-md-6 col-lg-4 wow bounceInUp\" data-wow-duration=\"1.4s\">\r\n            <div class=\"box\">\r\n                <div class=\"icon\" style=\"background: #fff0da;\"><i class=\"ion-ios-bookmarks-outline\" style=\"color: #e98e06;\"></i></div>\r\n                <h4 class=\"title\"><a href=\"\">Dolor Sitema</a></h4>\r\n                <p class=\"description\">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>\r\n            </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-4 wow bounceInUp\" data-wow-delay=\"0.1s\" data-wow-duration=\"1.4s\">\r\n            <div class=\"box\">\r\n                <div class=\"icon\" style=\"background: #e6fdfc;\"><i class=\"ion-ios-paper-outline\" style=\"color: #3fcdc7;\"></i></div>\r\n                <h4 class=\"title\"><a href=\"\">Sed ut perspiciatis</a></h4>\r\n                <p class=\"description\">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>\r\n            </div>\r\n            </div>\r\n            <div class=\"col-md-6 col-lg-4 wow bounceInUp\" data-wow-delay=\"0.1s\" data-wow-duration=\"1.4s\">\r\n            <div class=\"box\">\r\n                <div class=\"icon\" style=\"background: #eafde7;\"><i class=\"ion-ios-speedometer-outline\" style=\"color:#41cf2e;\"></i></div>\r\n                <h4 class=\"title\"><a href=\"\">Magni Dolores</a></h4>\r\n                <p class=\"description\">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>\r\n            </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-4 wow bounceInUp\" data-wow-delay=\"0.2s\" data-wow-duration=\"1.4s\">\r\n            <div class=\"box\">\r\n                <div class=\"icon\" style=\"background: #e1eeff;\"><i class=\"ion-ios-world-outline\" style=\"color: #2282ff;\"></i></div>\r\n                <h4 class=\"title\"><a href=\"\">Nemo Enim</a></h4>\r\n                <p class=\"description\">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>\r\n            </div>\r\n            </div>\r\n            <div class=\"col-md-6 col-lg-4 wow bounceInUp\" data-wow-delay=\"0.2s\" data-wow-duration=\"1.4s\">\r\n            <div class=\"box\">\r\n                <div class=\"icon\" style=\"background: #ecebff;\"><i class=\"ion-ios-clock-outline\" style=\"color: #8660fe;\"></i></div>\r\n                <h4 class=\"title\"><a href=\"\">Eiusmod Tempor</a></h4>\r\n                <p class=\"description\">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>\r\n            </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        </div>\r\n    </section> -->\r\n\r\n    <!-- #services -->\r\n\r\n    <!--==========================\r\n        Why Us Section\r\n    ============================-->\r\n    <!-- <section id=\"why-us\" class=\"wow fadeIn\">\r\n        <div class=\"container-fluid\">\r\n        \r\n        <header class=\"section-header\">\r\n            <h3>Why choose us?</h3>\r\n            <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>\r\n        </header>\r\n\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-lg-6\">\r\n            <div class=\"why-us-img\">\r\n                <img src=\"../assets/img/why-us.jpg\" alt=\"\" class=\"img-fluid\">\r\n            </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-6\">\r\n            <div class=\"why-us-content\">\r\n                <p>Molestiae omnis numquam corrupti omnis itaque. Voluptatum quidem impedit. Odio dolorum exercitationem est error omnis repudiandae ad dolorum sit.</p>\r\n                <p>\r\n                Explicabo repellendus quia labore. Non optio quo ea ut ratione et quaerat. Porro facilis deleniti porro consequatur\r\n                et temporibus. Labore est odio.\r\n\r\n                Odio omnis saepe qui. Veniam eaque ipsum. Ea quia voluptatum quis explicabo sed nihil repellat..\r\n                </p>\r\n\r\n                <div class=\"features wow bounceInUp clearfix\">\r\n                <i class=\"fa fa-diamond\" style=\"color: #f058dc;\"></i>\r\n                <h4>Corporis dolorem</h4>\r\n                <p>Commodi quia voluptatum. Est cupiditate voluptas quaerat officiis ex alias dignissimos et ipsum. Soluta at enim modi ut incidunt dolor et.</p>\r\n                </div>\r\n\r\n                <div class=\"features wow bounceInUp clearfix\">\r\n                <i class=\"fa fa-object-group\" style=\"color: #ffb774;\"></i>\r\n                <h4>Eum ut aspernatur</h4>\r\n                <p>Molestias eius rerum iusto voluptas et ab cupiditate aut enim. Assumenda animi occaecati. Quo dolore fuga quasi autem aliquid ipsum odit. Perferendis doloremque iure nulla aut.</p>\r\n                </div>\r\n                \r\n                <div class=\"features wow bounceInUp clearfix\">\r\n                <i class=\"fa fa-language\" style=\"color: #589af1;\"></i>\r\n                <h4>Voluptates dolores</h4>\r\n                <p>Voluptates nihil et quis omnis et eaque omnis sint aut. Ducimus dolorum aspernatur. Totam dolores ut enim ullam voluptas distinctio aut.</p>\r\n                </div>\r\n                \r\n            </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"container\">\r\n        <div class=\"row counters\">\r\n\r\n            <div class=\"col-lg-3 col-6 text-center\">\r\n            <span data-toggle=\"counter-up\">274</span>\r\n            <p>Clients</p>\r\n            </div>\r\n\r\n            <div class=\"col-lg-3 col-6 text-center\">\r\n            <span data-toggle=\"counter-up\">421</span>\r\n            <p>Projects</p>\r\n            </div>\r\n\r\n            <div class=\"col-lg-3 col-6 text-center\">\r\n            <span data-toggle=\"counter-up\">1,364</span>\r\n            <p>Hours Of Support</p>\r\n            </div>\r\n\r\n            <div class=\"col-lg-3 col-6 text-center\">\r\n            <span data-toggle=\"counter-up\">18</span>\r\n            <p>Hard Workers</p>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        </div>\r\n    </section> -->\r\n\r\n    <!--==========================\r\n        Call To Action Section\r\n    ============================-->\r\n    <!-- <section id=\"call-to-action\" class=\"wow fadeInUp\">\r\n        <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-9 text-center text-lg-left\">\r\n            <h3 class=\"cta-title\">Call To Action</h3>\r\n            <p class=\"cta-text\"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n            </div>\r\n            <div class=\"col-lg-3 cta-btn-container text-center\">\r\n            <a class=\"cta-btn align-middle\" href=\"#\">Call To Action</a>\r\n            </div>\r\n        </div>\r\n\r\n        </div>\r\n    </section> -->\r\n\r\n    <!-- #call-to-action -->\r\n\r\n            \r\n\r\n    <!--==========================\r\n    Portfolio Section\r\n    ============================-->\r\n    <!-- <section id=\"portfolio\" class=\"section-bg\">\r\n    <div class=\"container\">\r\n\r\n        <header class=\"section-header\">\r\n        <h3 class=\"section-title\">Our Portfolio</h3>\r\n        </header>\r\n\r\n        <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <ul id=\"portfolio-flters\">\r\n            <li data-filter=\"*\" class=\"filter-active\">All</li>\r\n            <li data-filter=\".filter-app\">App</li>\r\n            <li data-filter=\".filter-card\">Card</li>\r\n            <li data-filter=\".filter-web\">Web</li>\r\n            </ul>\r\n        </div>\r\n        </div>\r\n\r\n        <div class=\"row portfolio-container\">\r\n\r\n        <div class=\"col-lg-4 col-md-6 portfolio-item filter-app\">\r\n            <div class=\"portfolio-wrap\">\r\n            <img src=\"img/portfolio/app1.jpg\" class=\"img-fluid\" alt=\"\">\r\n            <div class=\"portfolio-info\">\r\n                <h4><a href=\"#\">App 1</a></h4>\r\n                <p>App</p>\r\n                <div>\r\n                <a href=\"img/portfolio/app1.jpg\" data-lightbox=\"portfolio\" data-title=\"App 1\" class=\"link-preview\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\r\n                <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-6 portfolio-item filter-web\" data-wow-delay=\"0.1s\">\r\n            <div class=\"portfolio-wrap\">\r\n            <img src=\"img/portfolio/web3.jpg\" class=\"img-fluid\" alt=\"\">\r\n            <div class=\"portfolio-info\">\r\n                <h4><a href=\"#\">Web 3</a></h4>\r\n                <p>Web</p>\r\n                <div>\r\n                <a href=\"img/portfolio/web3.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Web 3\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\r\n                <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-6 portfolio-item filter-app\" data-wow-delay=\"0.2s\">\r\n            <div class=\"portfolio-wrap\">\r\n            <img src=\"img/portfolio/app2.jpg\" class=\"img-fluid\" alt=\"\">\r\n            <div class=\"portfolio-info\">\r\n                <h4><a href=\"#\">App 2</a></h4>\r\n                <p>App</p>\r\n                <div>\r\n                <a href=\"img/portfolio/app2.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"App 2\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\r\n                <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-6 portfolio-item filter-card\">\r\n            <div class=\"portfolio-wrap\">\r\n            <img src=\"img/portfolio/card2.jpg\" class=\"img-fluid\" alt=\"\">\r\n            <div class=\"portfolio-info\">\r\n                <h4><a href=\"#\">Card 2</a></h4>\r\n                <p>Card</p>\r\n                <div>\r\n                <a href=\"img/portfolio/card2.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Card 2\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\r\n                <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-6 portfolio-item filter-web\" data-wow-delay=\"0.1s\">\r\n            <div class=\"portfolio-wrap\">\r\n            <img src=\"img/portfolio/web2.jpg\" class=\"img-fluid\" alt=\"\">\r\n            <div class=\"portfolio-info\">\r\n                <h4><a href=\"#\">Web 2</a></h4>\r\n                <p>Web</p>\r\n                <div>\r\n                <a href=\"img/portfolio/web2.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Web 2\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\r\n                <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-6 portfolio-item filter-app\" data-wow-delay=\"0.2s\">\r\n            <div class=\"portfolio-wrap\">\r\n            <img src=\"img/portfolio/app3.jpg\" class=\"img-fluid\" alt=\"\">\r\n            <div class=\"portfolio-info\">\r\n                <h4><a href=\"#\">App 3</a></h4>\r\n                <p>App</p>\r\n                <div>\r\n                <a href=\"img/portfolio/app3.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"App 3\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\r\n                <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-6 portfolio-item filter-card\">\r\n            <div class=\"portfolio-wrap\">\r\n            <img src=\"img/portfolio/card1.jpg\" class=\"img-fluid\" alt=\"\">\r\n            <div class=\"portfolio-info\">\r\n                <h4><a href=\"#\">Card 1</a></h4>\r\n                <p>Card</p>\r\n                <div>\r\n                <a href=\"img/portfolio/card1.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Card 1\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\r\n                <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-6 portfolio-item filter-card\" data-wow-delay=\"0.1s\">\r\n            <div class=\"portfolio-wrap\">\r\n            <img src=\"img/portfolio/card3.jpg\" class=\"img-fluid\" alt=\"\">\r\n            <div class=\"portfolio-info\">\r\n                <h4><a href=\"#\">Card 3</a></h4>\r\n                <p>Card</p>\r\n                <div>\r\n                <a href=\"img/portfolio/card3.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Card 3\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\r\n                <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-6 portfolio-item filter-web\" data-wow-delay=\"0.2s\">\r\n            <div class=\"portfolio-wrap\">\r\n            <img src=\"img/portfolio/web1.jpg\" class=\"img-fluid\" alt=\"\">\r\n            <div class=\"portfolio-info\">\r\n                <h4><a href=\"#\">Web 1</a></h4>\r\n                <p>Web</p>\r\n                <div>\r\n                <a href=\"img/portfolio/web1.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Web 1\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\r\n                <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n    </section> -->\r\n\r\n    <!-- #portfolio -->\r\n\r\n    <!--==========================\r\n    Clients Section\r\n    ============================-->\r\n    <!-- <section id=\"testimonials\">\r\n    <div class=\"container\">\r\n\r\n        <header class=\"section-header\">\r\n        <h3>Testimonials</h3>\r\n        </header>\r\n\r\n        <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-8\">\r\n\r\n            <div class=\"owl-carousel testimonials-carousel wow fadeInUp\">\r\n\r\n            <div class=\"testimonial-item\">\r\n                <img src=\"img/testimonial-1.jpg\" class=\"testimonial-img\" alt=\"\">\r\n                <h3>Saul Goodman</h3>\r\n                <h4>Ceo &amp; Founder</h4>\r\n                <p>\r\n                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.\r\n                </p>\r\n            </div>\r\n\r\n            <div class=\"testimonial-item\">\r\n                <img src=\"img/testimonial-2.jpg\" class=\"testimonial-img\" alt=\"\">\r\n                <h3>Sara Wilsson</h3>\r\n                <h4>Designer</h4>\r\n                <p>\r\n                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.\r\n                </p>\r\n            </div>\r\n\r\n            <div class=\"testimonial-item\">\r\n                <img src=\"img/testimonial-3.jpg\" class=\"testimonial-img\" alt=\"\">\r\n                <h3>Jena Karlis</h3>\r\n                <h4>Store Owner</h4>\r\n                <p>\r\n                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.\r\n                </p>\r\n            </div>\r\n\r\n            <div class=\"testimonial-item\">\r\n                <img src=\"img/testimonial-4.jpg\" class=\"testimonial-img\" alt=\"\">\r\n                <h3>Matt Brandon</h3>\r\n                <h4>Freelancer</h4>\r\n                <p>\r\n                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.\r\n                </p>\r\n            </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n    </section> -->\r\n\r\n    <!-- #testimonials -->\r\n\r\n    <!--==========================\r\n    Team Section\r\n    ============================-->\r\n    <!-- <section id=\"team\" class=\"section-bg\">\r\n    <div class=\"container\">\r\n        <div class=\"section-header\">\r\n        <h3>Team</h3>\r\n        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n\r\n        <div class=\"col-lg-3 col-md-6 wow fadeInUp\">\r\n            <div class=\"member\">\r\n            <img src=\"img/team-1.jpg\" class=\"img-fluid\" alt=\"\">\r\n            <div class=\"member-info\">\r\n                <div class=\"member-info-content\">\r\n                <h4>Walter White</h4>\r\n                <span>Chief Executive Officer</span>\r\n                <div class=\"social\">\r\n                    <a href=\"\"><i class=\"fa fa-twitter\"></i></a>\r\n                    <a href=\"\"><i class=\"fa fa-facebook\"></i></a>\r\n                    <a href=\"\"><i class=\"fa fa-google-plus\"></i></a>\r\n                    <a href=\"\"><i class=\"fa fa-linkedin\"></i></a>\r\n                </div>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-3 col-md-6 wow fadeInUp\" data-wow-delay=\"0.1s\">\r\n            <div class=\"member\">\r\n            <img src=\"img/team-2.jpg\" class=\"img-fluid\" alt=\"\">\r\n            <div class=\"member-info\">\r\n                <div class=\"member-info-content\">\r\n                <h4>Sarah Jhonson</h4>\r\n                <span>Product Manager</span>\r\n                <div class=\"social\">\r\n                    <a href=\"\"><i class=\"fa fa-twitter\"></i></a>\r\n                    <a href=\"\"><i class=\"fa fa-facebook\"></i></a>\r\n                    <a href=\"\"><i class=\"fa fa-google-plus\"></i></a>\r\n                    <a href=\"\"><i class=\"fa fa-linkedin\"></i></a>\r\n                </div>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-3 col-md-6 wow fadeInUp\" data-wow-delay=\"0.2s\">\r\n            <div class=\"member\">\r\n            <img src=\"img/team-3.jpg\" class=\"img-fluid\" alt=\"\">\r\n            <div class=\"member-info\">\r\n                <div class=\"member-info-content\">\r\n                <h4>William Anderson</h4>\r\n                <span>CTO</span>\r\n                <div class=\"social\">\r\n                    <a href=\"\"><i class=\"fa fa-twitter\"></i></a>\r\n                    <a href=\"\"><i class=\"fa fa-facebook\"></i></a>\r\n                    <a href=\"\"><i class=\"fa fa-google-plus\"></i></a>\r\n                    <a href=\"\"><i class=\"fa fa-linkedin\"></i></a>\r\n                </div>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-3 col-md-6 wow fadeInUp\" data-wow-delay=\"0.3s\">\r\n            <div class=\"member\">\r\n            <img src=\"img/team-4.jpg\" class=\"img-fluid\" alt=\"\">\r\n            <div class=\"member-info\">\r\n                <div class=\"member-info-content\">\r\n                <h4>Amanda Jepson</h4>\r\n                <span>Accountant</span>\r\n                <div class=\"social\">\r\n                    <a href=\"\"><i class=\"fa fa-twitter\"></i></a>\r\n                    <a href=\"\"><i class=\"fa fa-facebook\"></i></a>\r\n                    <a href=\"\"><i class=\"fa fa-google-plus\"></i></a>\r\n                    <a href=\"\"><i class=\"fa fa-linkedin\"></i></a>\r\n                </div>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n    </section> -->\r\n\r\n    <!-- #team -->\r\n\r\n    <!--==========================\r\n    Clients Section\r\n    ============================-->\r\n    <!-- <section id=\"clients\" class=\"wow fadeInUp\">\r\n    <div class=\"container\">\r\n\r\n        <header class=\"section-header\">\r\n        <h3>Our Clients</h3>\r\n        </header>\r\n\r\n        <div class=\"owl-carousel clients-carousel\">\r\n        <img src=\"../assets/img/clients/client-1.png\" alt=\"\">\r\n        <img src=\"../assets/img/clients/client-2.png\" alt=\"\">\r\n        <img src=\"../assets/img/clients/client-3.png\" alt=\"\">\r\n        <img src=\"../assets/img/clients/client-4.png\" alt=\"\">\r\n        <img src=\"../assets/img/clients/client-5.png\" alt=\"\">\r\n        <img src=\"../assets/img/clients/client-6.png\" alt=\"\">\r\n        <img src=\"../assets/img/clients/client-7.png\" alt=\"\">\r\n        <img src=\"../assets/img/clients/client-8.png\" alt=\"\">\r\n        </div>\r\n\r\n    </div>\r\n    </section> -->\r\n    <!-- #clients -->\r\n\r\n</main>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_multi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/multi.service */ "./src/app/shared/multi.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _shared_popup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/popup.service */ "./src/app/shared/popup.service.ts");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/source/index.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_8__);









var HomeComponent = /** @class */ (function () {
    function HomeComponent(http, multi, dialog, popupLang, httpc) {
        this.http = http;
        this.multi = multi;
        this.dialog = dialog;
        this.popupLang = popupLang;
        this.httpc = httpc;
        this.countryList = ['Australia', 'Canada', 'Djibouti', 'Ethiopia', 'Kenya', 'Norway', 'Somalia', 'Sudan', 'South Sudan', 'Sweden', 'UAE', 'Uganda', 'United Kingdom', 'United States'];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.test();
        this.lang = this.multi.lang;
        this.setContent(this.lang);
        this.multi.tlang.subscribe(function (lang) {
            _this.lang = lang;
            _this.setContent(lang);
        });
    };
    HomeComponent.prototype.setContent = function (lang) {
        if (lang === 'eng') {
            this.content = this.multi.homecontent.eng;
            this.navMenuActive = this.multi.navMenu.eng;
            this.pricingContent = this.multi.pricing.eng;
            this.faqContent = this.multi.faq.eng;
            this.somGlobalCommunityContent = this.multi.sombankcommunity.eng;
            if (this.countryList.indexOf(this.country) > -1 && this.country !== '') {
                if (this.country === 'Somalia') {
                    this.content.heading = this.multi.homecontent.eng.heading2;
                }
                else {
                    this.content.heading = this.multi.homecontent.eng.heading;
                }
            }
            else if (this.country !== undefined) {
                this.content.heading = this.multi.homecontent.eng.heading3;
                this.country = '';
            }
        }
        else if (lang === 'som') {
            this.content = this.multi.homecontent.som;
            this.navMenuActive = this.multi.navMenu.som;
            this.pricingContent = this.multi.pricing.som;
            this.faqContent = this.multi.faq.som;
            this.somGlobalCommunityContent = this.multi.sombankcommunity.som;
            if (this.countryList.indexOf(this.country) > -1 && this.country !== '') {
                if (this.country === 'Somalia') {
                    this.content.heading = this.multi.homecontent.som.heading2;
                }
                else {
                    this.content.heading = this.multi.homecontent.som.heading;
                }
            }
            else if (this.country !== undefined) {
                this.content.heading = this.multi.homecontent.som.heading3;
                this.country = '';
            }
        }
        else if (lang === 'arb') {
            this.content = this.multi.homecontent.arb;
            this.navMenuActive = this.multi.navMenu.arb;
            this.pricingContent = this.multi.pricing.arb;
            this.faqContent = this.multi.faq.arb;
            this.somGlobalCommunityContent = this.multi.sombankcommunity.arb;
            if (this.countryList.indexOf(this.country) > -1 && this.country !== '') {
                if (this.country === 'Somalia') {
                    this.content.heading = this.multi.homecontent.arb.heading2;
                }
                else {
                    this.content.heading = this.multi.homecontent.arb.heading;
                }
            }
            else if (this.country !== undefined) {
                this.content.heading = this.multi.homecontent.arb.heading3;
                this.country = '';
            }
        }
    };
    HomeComponent.prototype.test = function () {
        var _this = this;
        var countryIp = '5.101.108.0';
        var testApi = "" + 'https://ipapi.co/' + countryIp + '/json';
        var realApi = 'https://ipapi.co/json';
        this.http.get(realApi).subscribe(function (resp) {
            var res = resp.json();
            _this.country = res.country_name;
            _this.countryFromIp = res.country_name;
            _this.extension = res.country_calling_code;
            _this.f.form.patchValue({ ext: _this.extension });
            _this.lattitude = res.latitude;
            _this.longitude = res.longitude;
        }, function (err) {
            console.log(err);
        });
    };
    /*    ngOnDestroy(){
           this.subscription.unsubscribe()
       } */
    HomeComponent.prototype.onSubmit = function (f) {
        this.sendEmailWithEmailJs(f.value);
        this.f.reset();
        this.f.form.patchValue({ ext: this.extension });
    };
    HomeComponent.prototype.sendEmailWithEmailJs = function (formData) {
        var _this = this;
        var templateParams = {
            from_name: 'Sombank website form',
            to_name: 'Ali Mohammed',
            submitter_phone: "" + formData.ext + formData.cell,
            submitter_email: formData.email,
            country: this.countryFromIp,
            latitude: this.lattitude,
            longitude: this.longitude
        };
        emailjs_com__WEBPACK_IMPORTED_MODULE_8__["send"]('mustafa_esst_gmail_com', 'template_U79OoaTS', templateParams, 'user_OMhZnnNMicl21zfyEvFaX')
            .then(function (response) {
            _this.multi.openAppInstallSuccessful(_this.lang);
        }, function (err) {
            console.log('FAILED...', err);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], HomeComponent.prototype, "f", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home-content',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: ["input.ng-invalid.ng-touched{\n        border-bottom: 1px red solid\n    }\n    input[type=number]::-webkit-inner-spin-button, \n    input[type=number]::-webkit-outer-spin-button { \n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        margin: 0; \n    }"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _shared_multi_service__WEBPACK_IMPORTED_MODULE_5__["MultiLangService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], _shared_popup_service__WEBPACK_IMPORTED_MODULE_7__["PopupLangService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientJsonpModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeRoutingComponent"]
            ],
            exports: []
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map