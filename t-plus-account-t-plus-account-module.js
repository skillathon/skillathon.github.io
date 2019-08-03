(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["t-plus-account-t-plus-account-module"],{

/***/ "./src/app/t-plus-account/t-plus-account-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/t-plus-account/t-plus-account-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: TPlusAccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TPlusAccountRoutingModule", function() { return TPlusAccountRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _t_plus_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./t-plus-account.component */ "./src/app/t-plus-account/t-plus-account.component.ts");




var appRoutes = [
    { path: '', component: _t_plus_account_component__WEBPACK_IMPORTED_MODULE_3__["TplusAccountComponent"] }
];
var TPlusAccountRoutingModule = /** @class */ (function () {
    function TPlusAccountRoutingModule() {
    }
    TPlusAccountRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TPlusAccountRoutingModule);
    return TPlusAccountRoutingModule;
}());



/***/ }),

/***/ "./src/app/t-plus-account/t-plus-account.component.html":
/*!**************************************************************!*\
  !*** ./src/app/t-plus-account/t-plus-account.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--==========================\r\nIntro Section\r\n============================-->\r\n\r\n<section id=\"intro\" class=\"clearfix\" style=\"background-image:url(../assets/img/bg.png)\">\r\n    <div class=\"container d-flex h-100\">\r\n        <div class=\"row justify-content-center align-self-center extra-space\">\r\n        \r\n        <div class=\"col-md-6 intro-info order-md-first order-last align-self-center\">\r\n            <h2 [ngClass]=\"{'arabicSH': lang==='som' || lang==='arb'}\">{{ content.heading1 }}<br> <span>{{ content.heading2 }}</span><br> {{ content.heading3 }}</h2>\r\n            <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\r\n                <div >\r\n                    <div class=\"form-row justify-content-center\">\r\n                        <div class=\"col-9\">\r\n                            <input type=\"email\" class=\"form-control custom-remove-border\" [ngClass]=\"{'custom-form-control':lang==='som' || lang==='arb'}\" maxlength=\"50\" placeholder=\"email@test.com\" name=\"email\" required email ngModel #email=\"ngModel\">\r\n                        </div>\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"form-row justify-content-center\">\r\n                        <div class=\"col-3\">\r\n                            <select class=\"custom-select mr-sm-2 custom-remove-border\" name=\"ext\" [ngModel]=\"'+252'\" required #ext=\"ngModel\">\r\n                                <option value=\"+91\">+91</option>\r\n                                <option value=\"+252\">+252</option>\r\n                                <option value=\"+1\">+1</option> \r\n                                <option value=\"+6\">+6</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <input type=\"number\" class=\"form-control custom-remove-border\" [ngClass]=\"{'custom-form-control':lang==='som' || lang==='arb'}\" placeholder=\"Mobile Number\" name=\"cell\" required ngModel #cell=\"ngModel\">\r\n                        </div>\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"form-row justify-content-center\">\r\n                        <div class=\"col-6\">\r\n                    <button type=\"submit\" [ngClass]=\"{'arabicH4-center': lang ==='som' || lang ==='arb'}\" class=\"btn btn-primary form-control\" [disabled]=\"f.invalid\"> {{ content.button }} </button>\r\n                    </div></div>\r\n                </div>\r\n            </form>             \r\n        </div>\r\n    \r\n        <div class=\"col-md-6 intro-info order-md-last order-first\">\r\n            <div class=\"row justify-content-center\">\r\n                <img src=\"../../assets/img/slider-t-plus-anim.gif\" alt=\"\" class=\"custom-img-fluid img-fluid\">\r\n            </div>\r\n        </div>\r\n\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<!-- #intro -->\r\n\r\n<main id=\"main\">\r\n\r\n<!--==========================\r\n    Features Section\r\n============================-->\r\n\r\n<section id=\"features\">\r\n    <div class=\"container-fluid\">\r\n\r\n        <div class=\"row feature-item\">\r\n            <div class=\"col-lg-6 wow fadeInUp pt-5 pt-lg-0 custom-center-align extra-padding-l-r\">\r\n                <h3 [ngClass]=\"{'arabicH4':lang === 'arb' || lang === 'som' }\"> {{ content.section1.heading }} </h3>\r\n                <p [ngClass]=\"{'arabicP':lang === 'arb' || lang === 'som' }\">\r\n                    {{ content.section1.content }}\r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-6 wow fadeInUp\">\r\n                <div class=\"row justify-content-center\">\r\n                    <img src=\"https://assets.revolut.com/media/business/step1-9.png\" class=\"custom-img-fluid-business img-fluid\" alt=\"\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row feature-item extra-space\">\r\n            <div class=\"col-lg-6 wow fadeInUp pt-5 pt-lg-0 custom-center-align extra-padding-l-r\">\r\n                <h3 [ngClass]=\"{'arabicH4':lang === 'arb' || lang === 'som' }\"> {{ content.section2.heading }} </h3>\r\n                <p [ngClass]=\"{'arabicP':lang === 'arb' || lang === 'som' }\">\r\n                    {{ content.section2.content }}\r\n                </p>\r\n            </div>\r\n\r\n            <div class=\"col-lg-6 wow fadeInUp\">\r\n                <div class=\"row justify-content-center\">\r\n                    <img src=\"https://assets.revolut.com/media/business/step2-9.png\" class=\"custom-img-fluid-business img-fluid\" alt=\"\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row feature-item extra-space\">\r\n            <div class=\"col-lg-6 wow fadeInUp pt-5 pt-lg-0 custom-center-align extra-padding-l-r\">\r\n                <h3 [ngClass]=\"{'arabicH4':lang === 'arb' || lang === 'som' }\" > {{ content.section3.heading }} </h3>\r\n                <p [ngClass]=\"{'arabicP':lang === 'arb' || lang === 'som' }\">\r\n                        {{ content.section3.content }} \r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-6 wow fadeInUp\">\r\n                <div class=\"row justify-content-center\">\r\n                    <img src=\"https://assets.revolut.com/media/business/step3-9.png\" class=\"custom-img-fluid-business img-fluid\" alt=\"\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row feature-item extra-space\">\r\n            <div class=\"col-lg-6 wow fadeInUp pt-5 pt-lg-0 custom-center-align extra-padding-l-r\">\r\n                <h3 [ngClass]=\"{'arabicH4':lang === 'arb' || lang === 'som' }\"> {{ content.section4.heading }} </h3>\r\n                <p [ngClass]=\"{'arabicP':lang === 'arb' || lang === 'som' }\">\r\n                        {{ content.section4.content }} \r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-6 wow fadeInUp\">\r\n                <div class=\"row justify-content-center\">\r\n                        <img src=\"https://assets.revolut.com/media/business/step3-9.png\" class=\"custom-img-fluid-business img-fluid\" alt=\"\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</section>\r\n        \r\n<!-- #features -->\r\n\r\n</main>"

/***/ }),

/***/ "./src/app/t-plus-account/t-plus-account.component.ts":
/*!************************************************************!*\
  !*** ./src/app/t-plus-account/t-plus-account.component.ts ***!
  \************************************************************/
/*! exports provided: TplusAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TplusAccountComponent", function() { return TplusAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_multi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/multi.service */ "./src/app/shared/multi.service.ts");



var TplusAccountComponent = /** @class */ (function () {
    function TplusAccountComponent(multi) {
        this.multi = multi;
    }
    TplusAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lang = this.multi.lang;
        this.getContent(this.lang);
        this.multi.tlang.subscribe(function (lang) {
            _this.lang = lang;
            _this.getContent(lang);
        });
    };
    TplusAccountComponent.prototype.getContent = function (lang) {
        if (lang === 'eng') {
            this.content = this.multi.tplusPageContent.eng;
        }
        else if (lang === 'som') {
            this.content = this.multi.tplusPageContent.som;
        }
        else if (lang === 'arb') {
            this.content = this.multi.tplusPageContent.arb;
        }
    };
    TplusAccountComponent.prototype.onSubmit = function (f) {
        this.multi.onSubmit(f, this.lang);
    };
    TplusAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 't-plus',
            template: __webpack_require__(/*! ./t-plus-account.component.html */ "./src/app/t-plus-account/t-plus-account.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_multi_service__WEBPACK_IMPORTED_MODULE_2__["MultiLangService"]])
    ], TplusAccountComponent);
    return TplusAccountComponent;
}());



/***/ }),

/***/ "./src/app/t-plus-account/t-plus-account.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/t-plus-account/t-plus-account.module.ts ***!
  \*********************************************************/
/*! exports provided: TPlusAccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TPlusAccountModule", function() { return TPlusAccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _t_plus_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./t-plus-account.component */ "./src/app/t-plus-account/t-plus-account.component.ts");
/* harmony import */ var _t_plus_account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./t-plus-account-routing.module */ "./src/app/t-plus-account/t-plus-account-routing.module.ts");






var TPlusAccountModule = /** @class */ (function () {
    function TPlusAccountModule() {
    }
    TPlusAccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _t_plus_account_component__WEBPACK_IMPORTED_MODULE_4__["TplusAccountComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _t_plus_account_routing_module__WEBPACK_IMPORTED_MODULE_5__["TPlusAccountRoutingModule"]
            ],
            exports: []
        })
    ], TPlusAccountModule);
    return TPlusAccountModule;
}());



/***/ })

}]);
//# sourceMappingURL=t-plus-account-t-plus-account-module.js.map