(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pricing-pricing-module"],{

/***/ "./src/app/pricing/pricing-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pricing/pricing-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PricingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingRoutingModule", function() { return PricingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pricing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pricing.component */ "./src/app/pricing/pricing.component.ts");




var appRoutes = [
    { path: '', component: _pricing_component__WEBPACK_IMPORTED_MODULE_3__["PricingComponent"] }
];
var PricingRoutingModule = /** @class */ (function () {
    function PricingRoutingModule() {
    }
    PricingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PricingRoutingModule);
    return PricingRoutingModule;
}());



/***/ }),

/***/ "./src/app/pricing/pricing.component.html":
/*!************************************************!*\
  !*** ./src/app/pricing/pricing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--==========================\r\n    Pricing Section\r\n============================-->\r\n\r\n<section id=\"pricing\" class=\"wow fadeInUp section-bg custom-padding-top\">\r\n\r\n    <div class=\"container\">\r\n\r\n        <header class=\"section-header\">\r\n        <h3 [ngClass]=\"{'arabicH4-center': lang === 'arb' || lang === 'som'}\"> {{ pricingContent.heading }} </h3>\r\n        <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\"> {{ pricingContent.content }} </p>\r\n        </header>\r\n\r\n        <div class=\"row flex-items-xs-middle flex-items-xs-center\">\r\n    \r\n        <!-- Basic Plan  -->\r\n        <div class=\"col-xs-12 col-lg-4\">\r\n            <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <h4 [ngClass]=\"{'arabicH4-center':lang === 'arb' || lang === 'som' }\"> {{ pricingContent.standerd.heading }} </h4>\r\n            </div>\r\n            <div class=\"card-block\">\r\n                <h6 class=\"card-title\">\r\n                    <span class=\"currency\" [ngClass]=\"{'arabicH4-center':lang === 'arb' || lang === 'som' }\">$</span>0<span class=\"period\">/ {{ pricingContent.standerd.pricing }} </span> \r\n                </h6>\r\n                <ul class=\"list-group custom-align-left\">\r\n                <li class=\"list-group-item\" *ngFor=\"let item of pricingContent.standerd.features\" [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\"><i class=\"fa fa-check\"></i> {{ item }} </li>\r\n                <!-- \r\n                <li class=\"list-group-item\"><i class=\"fa fa-check\"></i>  Free Euro IBAN account</li>\r\n                <li class=\"list-group-item\"><i class=\"fa fa-check\"></i>  Spend in over 150 currencies at the interbank exchange rate</li>\r\n                <li class=\"list-group-item\"><i class=\"fa fa-check\"></i>  No fee exchange in 29 fiat currencies up to £5,000 per month</li> -->\r\n                </ul>\r\n                <a href=\"#\" class=\"btn\"> {{ pricingContent.standerd.button }} </a>\r\n            </div>\r\n            </div>\r\n        </div>\r\n    \r\n        <!-- Regular Plan  -->\r\n        <div class=\"col-xs-12 col-lg-4\">\r\n            <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <h4 [ngClass]=\"{'arabicH4-center':lang === 'arb' || lang === 'som' }\">{{ pricingContent.premium.heading }}</h4>\r\n            </div>\r\n            <div class=\"card-block\">\r\n                <h6 class=\"card-title\"> \r\n                    <span class=\"currency\" [ngClass]=\"{'arabicH4-center':lang === 'arb' || lang === 'som' }\">$</span>29<span class=\"period\">/ {{ pricingContent.premium.pricing }} </span>\r\n                </h6>\r\n                <ul class=\"list-group custom-align-left\">\r\n                <li class=\"list-group-item\" *ngFor=\"let item of pricingContent.premium.features\" [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\"><i class=\"fa fa-check\"></i> {{ item }} </li>\r\n                </ul>\r\n                <a href=\"#\" class=\"btn\">{{ pricingContent.premium.button }}</a>\r\n            </div>\r\n            </div>\r\n        </div>\r\n    \r\n        <!-- Premium Plan  -->\r\n        <div class=\"col-xs-12 col-lg-4\">\r\n            <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <h4 [ngClass]=\"{'arabicH4-center':lang === 'arb' || lang === 'som' }\">{{ pricingContent.gold.heading }}</h4>\r\n            </div>\r\n            <div class=\"card-block\">\r\n                <h6 class=\"card-title\"> \r\n                    <span class=\"currency\" [ngClass]=\"{'arabicH4-center':lang === 'arb' || lang === 'som' }\">$</span>39<span class=\"period\">/ {{ pricingContent.gold.pricing }} </span>\r\n                </h6>\r\n                <ul class=\"list-group custom-align-left\">\r\n                    <li class=\"list-group-item\" *ngFor=\"let item of pricingContent.gold.features\" [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\"><i class=\"fa fa-check\"></i> {{ item }} </li>\r\n                </ul>\r\n                <a href=\"#\" class=\"btn\">{{ pricingContent.gold.button }}</a>\r\n            </div>\r\n            </div>\r\n        </div>\r\n    \r\n        </div>\r\n    </div>\r\n\r\n</section>\r\n\r\n<!-- #pricing -->"

/***/ }),

/***/ "./src/app/pricing/pricing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pricing/pricing.component.ts ***!
  \**********************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_multi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/multi.service */ "./src/app/shared/multi.service.ts");



var PricingComponent = /** @class */ (function () {
    function PricingComponent(multi) {
        this.multi = multi;
    }
    PricingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lang = this.multi.lang;
        this.content(this.lang);
        this.multi.tlang.subscribe(function (lang) {
            _this.lang = _this.multi.lang;
            _this.content(lang);
        });
    };
    PricingComponent.prototype.content = function (lang) {
        if (lang === 'eng') {
            this.pricingContent = this.multi.pricing.eng;
        }
        else if (lang === 'som') {
            this.pricingContent = this.multi.pricing.som;
        }
        else if (lang === 'arb') {
            this.pricingContent = this.multi.pricing.arb;
        }
    };
    PricingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pricing',
            template: __webpack_require__(/*! ./pricing.component.html */ "./src/app/pricing/pricing.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_multi_service__WEBPACK_IMPORTED_MODULE_2__["MultiLangService"]])
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "./src/app/pricing/pricing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pricing/pricing.module.ts ***!
  \*******************************************/
/*! exports provided: PricingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingModule", function() { return PricingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pricing_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pricing-routing.module */ "./src/app/pricing/pricing-routing.module.ts");
/* harmony import */ var _pricing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pricing.component */ "./src/app/pricing/pricing.component.ts");





var PricingModule = /** @class */ (function () {
    function PricingModule() {
    }
    PricingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pricing_component__WEBPACK_IMPORTED_MODULE_4__["PricingComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _pricing_routing_module__WEBPACK_IMPORTED_MODULE_3__["PricingRoutingModule"]
            ],
            exports: []
        })
    ], PricingModule);
    return PricingModule;
}());



/***/ })

}]);
//# sourceMappingURL=pricing-pricing-module.js.map