(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["business-business-module"],{

/***/ "./src/app/business/business-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/business/business-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: BusinessHomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessHomeRoutingModule", function() { return BusinessHomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _business_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./business.component */ "./src/app/business/business.component.ts");




var appRoutes = [
    { path: '', component: _business_component__WEBPACK_IMPORTED_MODULE_3__["BusinessHomeComponent"] }
];
var BusinessHomeRoutingModule = /** @class */ (function () {
    function BusinessHomeRoutingModule() {
    }
    BusinessHomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BusinessHomeRoutingModule);
    return BusinessHomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/business/business.component.html":
/*!**************************************************!*\
  !*** ./src/app/business/business.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--==========================\r\nIntro Section\r\n============================-->\r\n\r\n<section id=\"intro\" class=\"clearfix\" style=\"background-image:url(../assets/img/bg.png)\">\r\n    <div class=\"container d-flex h-100\" >\r\n        <div class=\"row justify-content-center align-self-center\">\r\n        \r\n        <div class=\"col-md-6 intro-info order-md-first order-last\">\r\n            <h2  [ngClass]=\"{'arabicSH': lang==='som' || lang==='arb'}\" style=\"text-align:center\"> {{ content.heading1 }} <span> {{ content.heading2 }} </span>,<br> {{ content.heading3 }} </h2>\r\n            \r\n                <p  [ngClass]=\"{'arabicP': lang==='som' || lang==='arb'}\"> {{ content.content }}</p>\r\n                <div class=\"form-row justify-content-center\">\r\n                    <div class=\"col-6\">\r\n                        <button type=\"button\" [ngClass]=\"{'arabicH4-center': lang ==='som' || lang ==='arb'}\"  class=\"btn btn-primary form-control\" > {{ content.button }} </button>\r\n                    </div>         \r\n                </div>         \r\n        </div>\r\n    \r\n        <div class=\"col-md-6 intro-info order-md-last order-first\" >\r\n            <div style=\"width:100%; text-align: center; margin: 0px auto\" class=\"justify-content-center\" >\r\n                <h3 style=\"display:inline-block; padding-right: 15px\" [routerLinkActive]=\"'active'\" [routerLinkActiveOptions]=\"{exact: true}\"><a [ngClass]=\"{'arabicH3': lang ==='som' || lang ==='arb'}\" [routerLink]=\"['/']\"  > {{ navMenuActive.personal }} </a></h3>\r\n                <h3 style=\"display:inline-block; padding-left: 15px\" [routerLinkActive]=\"'active'\" ><a [ngClass]=\"{'arabicH3': lang ==='som' || lang ==='arb'}\" [routerLink]=\"['/sombank-for-businesses']\" > {{ navMenuActive.business }} </a></h3>\r\n            </div>\r\n            <img src=\"https://assets.revolut.com/media/business/macbook-9.png\" alt=\"\" class=\"img-fluid\">\r\n        </div>\r\n\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<!-- #intro -->\r\n\r\n<main id=\"main\">\r\n\r\n    <!--==========================\r\n        Features Section\r\n    ============================-->\r\n\r\n    <section id=\"features\">\r\n        <div class=\"container-fluid\">\r\n\r\n            <div class=\"row feature-item\">\r\n                <div class=\"col-lg-6 wow fadeInUp pt-5 pt-lg-0 custom-center-align extra-padding-l-r\">\r\n                    <h3 [ngClass]=\"{'arabicH4':lang === 'arb' || lang === 'som' }\"> {{ content.section1.heading }} </h3>\r\n                    <p [ngClass]=\"{'arabicP':lang === 'arb' || lang === 'som' }\">\r\n                        {{ content.section1.content }}\r\n                    </p>\r\n                </div>\r\n                <div class=\"col-lg-6 wow fadeInUp\">\r\n                    <div class=\"row justify-content-center\">\r\n                        <img src=\"https://assets.revolut.com/media/business/step1-9.png\" class=\"custom-img-fluid-business img-fluid\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row feature-item extra-space\">\r\n                <div class=\"col-lg-6 wow fadeInUp pt-5 pt-lg-0 custom-center-align extra-padding-l-r\">\r\n                    <h3 [ngClass]=\"{'arabicH4':lang === 'arb' || lang === 'som' }\"> {{ content.section2.heading }} </h3>\r\n                    <p [ngClass]=\"{'arabicP':lang === 'arb' || lang === 'som' }\">\r\n                        {{ content.section2.content }}\r\n                    </p>\r\n                </div>\r\n\r\n                <div class=\"col-lg-6 wow fadeInUp\">\r\n                    <div class=\"row justify-content-center\">\r\n                        <img src=\"https://assets.revolut.com/media/business/step2-9.png\" class=\"custom-img-fluid-business img-fluid\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row feature-item extra-space\">\r\n                <div class=\"col-lg-6 wow fadeInUp pt-5 pt-lg-0 custom-center-align extra-padding-l-r\">\r\n                    <h3 [ngClass]=\"{'arabicH4':lang === 'arb' || lang === 'som' }\" > {{ content.section3.heading }} </h3>\r\n                    <p [ngClass]=\"{'arabicP':lang === 'arb' || lang === 'som' }\">\r\n                         {{ content.section3.content }} \r\n                    </p>\r\n                </div>\r\n                <div class=\"col-lg-6 wow fadeInUp\">\r\n                    <div class=\"row justify-content-center\">\r\n                        <img src=\"https://assets.revolut.com/media/business/step3-9.png\" class=\"custom-img-fluid-business img-fluid\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row feature-item extra-space\">\r\n               <div class=\"col-lg-6 wow fadeInUp pt-5 pt-lg-0 custom-center-align extra-padding-l-r\">\r\n                    <h3 [ngClass]=\"{'arabicH4':lang === 'arb' || lang === 'som' }\"> {{ content.section4.heading }} </h3>\r\n                    <p [ngClass]=\"{'arabicP':lang === 'arb' || lang === 'som' }\">\r\n                         {{ content.section4.content }} \r\n                    </p>\r\n                </div>\r\n                <div class=\"col-lg-6 wow fadeInUp\">\r\n                    <div class=\"row justify-content-center\">\r\n                            <img src=\"https://assets.revolut.com/media/business/step3-9.png\" class=\"custom-img-fluid-business img-fluid\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </section>\r\n            \r\n    <!-- #features -->\r\n\r\n        \r\n        \r\n    <!--==========================\r\n    Master Card Section\r\n    ============================-->\r\n\r\n    <section id=\"pricing\" class=\"wow fadeInUp section-bg\">\r\n\r\n        <div class=\"container\">\r\n            <header class=\"section-header\">\r\n                <h3 [ngClass]=\"{'arabicH3': lang==='som' || lang==='arb'}\"> {{ content.cardscontent.heading }} </h3>\r\n                <p [ngClass]=\"{'arabicP': lang==='som' || lang==='arb'}\">{{ content.cardscontent.content }}</p>\r\n                <div class=\"row\">\r\n                    <div class=\"col-6\">\r\n                        <img src=\"../../assets/img/businesscard_black1.png\" class=\"img-fluid\">\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <img src=\"../../assets/img/businesscard_white.png\" class=\"img-fluid\"> \r\n                    </div>\r\n                </div>                \r\n            </header>\r\n        </div>\r\n\r\n    </section>\r\n\r\n    <!-- #master card -->\r\n\r\n<!--==========================\r\n        Services Section\r\n    ============================-->\r\n    <section id=\"services\" >\r\n        <div class=\"container\">\r\n\r\n        <header class=\"section-header\">\r\n            <h3 [ngClass]=\"{'arabicH3': lang==='som' || lang==='arb'}\"> {{ content.services.heading }} </h3>\r\n            <p [ngClass]=\"{'arabicP': lang==='som' || lang==='arb'}\"> {{ content.services.content }} </p>\r\n        </header>\r\n\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-md-6 col-lg-4 wow bounceInUp\" data-wow-duration=\"1.4s\">\r\n            <div class=\"box\">\r\n                <div class=\"icon\" style=\"background: #fceef3;\"><i class=\"ion-ios-analytics-outline\" style=\"color: #ff689b;\"></i></div>\r\n                <h4 class=\"title\" [ngClass]=\"{'arabicH6-center':lang === 'arb' || lang === 'som' }\"> {{ content.services.service1.heading }} </h4>\r\n                <p class=\"description\" [ngClass]=\"{'arabicP':lang === 'arb' || lang === 'som' }\"> {{ content.services.service1.content }} </p>\r\n            </div>\r\n            </div>\r\n            <div class=\"col-md-6 col-lg-4 wow bounceInUp\" data-wow-duration=\"1.4s\">\r\n            <div class=\"box\">\r\n                <div class=\"icon\" style=\"background: #fff0da;\"><i class=\"ion-ios-bookmarks-outline\" style=\"color: #e98e06;\"></i></div>\r\n                <h4 class=\"title\" [ngClass]=\"{'arabicH6-center':lang === 'arb' || lang === 'som' }\">  {{ content.services.service2.heading }}  </h4>\r\n                <p class=\"description\" [ngClass]=\"{'arabicP':lang === 'arb' || lang === 'som' }\"> {{ content.services.service2.content }} </p>\r\n            </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-4 wow bounceInUp\" data-wow-delay=\"0.1s\" data-wow-duration=\"1.4s\">\r\n            <div class=\"box\">\r\n                <div class=\"icon\" style=\"background: #e6fdfc;\"><i class=\"ion-ios-paper-outline\" style=\"color: #3fcdc7;\"></i></div>\r\n                <h4 class=\"title\" [ngClass]=\"{'arabicH6-center':lang === 'arb' || lang === 'som' }\">  {{ content.services.service3.heading }}  </h4>\r\n                <p class=\"description\" [ngClass]=\"{'arabicP':lang === 'arb' || lang === 'som' }\"> {{ content.services.service3.content }} </p>\r\n            </div>\r\n            </div>\r\n            <div class=\"col-md-6 col-lg-4 wow bounceInUp\" data-wow-delay=\"0.1s\" data-wow-duration=\"1.4s\">\r\n            <div class=\"box\">\r\n                <div class=\"icon\" style=\"background: #eafde7;\"><i class=\"ion-ios-speedometer-outline\" style=\"color:#41cf2e;\"></i></div>\r\n                <h4 class=\"title\" [ngClass]=\"{'arabicH6-center':lang === 'arb' || lang === 'som' }\">  {{ content.services.service4.heading }}  </h4>\r\n                <p class=\"description\" [ngClass]=\"{'arabicP':lang === 'arb' || lang === 'som' }\"> {{ content.services.service4.content }} </p>\r\n            </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-4 wow bounceInUp\" data-wow-delay=\"0.2s\" data-wow-duration=\"1.4s\">\r\n            <div class=\"box\">\r\n                <div class=\"icon\" style=\"background: #e1eeff;\"><i class=\"ion-ios-world-outline\" style=\"color: #2282ff;\"></i></div>\r\n                <h4 class=\"title\" [ngClass]=\"{'arabicH6-center':lang === 'arb' || lang === 'som' }\">  {{ content.services.service5.heading }}  </h4>\r\n                <p class=\"description\" [ngClass]=\"{'arabicP':lang === 'arb' || lang === 'som' }\"> {{ content.services.service5.content }} </p>\r\n            </div>\r\n            </div>\r\n            <div class=\"col-md-6 col-lg-4 wow bounceInUp\" data-wow-delay=\"0.2s\" data-wow-duration=\"1.4s\">\r\n            <div class=\"box\">\r\n                <div class=\"icon\" style=\"background: #ecebff;\"><i class=\"ion-ios-clock-outline\" style=\"color: #8660fe;\"></i></div>\r\n                <h4 class=\"title\" [ngClass]=\"{'arabicH6-center':lang === 'arb' || lang === 'som' }\"> {{ content.services.service6.heading }} </h4>\r\n                <p class=\"description\" [ngClass]=\"{'arabicP':lang === 'arb' || lang === 'som' }\">{{ content.services.service6.content }}</p>\r\n            </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        </div>\r\n    </section>\r\n\r\n    <!-- #services -->\r\n\r\n     <!--==========================\r\n    Map\r\n    ============================-->\r\n\r\n    <section>\r\n        <div class=\"container\" >\r\n            <header class=\"section-header\">\r\n                <h3 [ngClass]=\"{'arabicH3': lang ==='som' || lang ==='arb'}\"> {{ somGlobalCommunityContent.heading }} </h3>\r\n                </header>\r\n            <img src=\"../../assets/img/telocations.gif\" class=\"img-fluid\">\r\n        </div>\r\n    </section>\r\n\r\n    <!-- #Map -->\r\n\r\n    <!--==========================\r\n    Counter\r\n    ============================-->\r\n\r\n    <section id=\"why-us\" class=\"wow fadeIn\">\r\n        <div class=\"container\">\r\n            <div class=\"row counters\">\r\n                <div class=\"col-lg-3 col-6 text-center\">\r\n                    <span data-toggle=\"counter-up\"  [ngClass]=\"{'arabicH3-center': lang ==='som' || lang ==='arb'}\"> {{ somGlobalCommunityContent.clientsNum }} </span>\r\n                    <p [ngClass]=\"{'arabicP-center': lang === 'arb' || lang === 'som'}\"> {{ somGlobalCommunityContent.clients }} </p>\r\n                </div>\r\n\r\n                <div class=\"col-lg-3 col-6 text-center\">\r\n                    <span data-toggle=\"counter-up\"  [ngClass]=\"{'arabicH3-center': lang ==='som' || lang ==='arb'}\"> {{ somGlobalCommunityContent.projectsNum }} </span>\r\n                    <p [ngClass]=\"{'arabicP-center': lang === 'arb' || lang === 'som'}\"> {{ somGlobalCommunityContent.projects }} </p>\r\n                </div>\r\n\r\n                <div class=\"col-lg-3 col-6 text-center\">\r\n                    <span data-toggle=\"counter-up\"  [ngClass]=\"{'arabicH3-center': lang ==='som' || lang ==='arb'}\"> {{ somGlobalCommunityContent.hoursNum }} </span>\r\n                    <p [ngClass]=\"{'arabicP-center': lang === 'arb' || lang === 'som'}\"> {{ somGlobalCommunityContent.hours }} </p>\r\n                </div>\r\n\r\n                <div class=\"col-lg-3 col-6 text-center\">\r\n                    <span data-toggle=\"counter-up\"  [ngClass]=\"{'arabicH3-center': lang ==='som' || lang ==='arb'}\"> {{ somGlobalCommunityContent.hardworkNum }} </span>\r\n                    <p [ngClass]=\"{'arabicP-center': lang === 'arb' || lang === 'som'}\"> {{ somGlobalCommunityContent.hardwork }} </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n        \r\n    <!-- #Counter -->\r\n\r\n    <!--==========================\r\n    Frequently Asked Questions Section\r\n    ============================-->\r\n\r\n    <section id=\"faq\" class=\"wow fadeInUp section-bg\">\r\n        <div class=\"container\">\r\n            <header class=\"section-header\">\r\n            <h3 [ngClass]=\"{'arabicH3': lang ==='som' || lang ==='arb'}\"> {{ faqContent.heading }} </h3>\r\n            <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\" > {{ faqContent.content }} </p>\r\n            </header>\r\n\r\n            <ul id=\"faq-list\" class=\"wow fadeInUp\">\r\n                <li *ngFor=\"let section of faqContent.questions; let i = index \">\r\n                    <a data-toggle=\"collapse\" class=\"collapsed\" href=\"{{ '#faq' + i }} \" [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\" > {{ section.q }} <i class=\"ion-android-remove\"></i></a>\r\n                    <div id=\"{{ 'faq' + i }}\" class=\"collapse\" data-parent=\"#faq-list\">\r\n                    <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\" >\r\n                        {{ section.a }}\r\n                    </p>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </section>\r\n        \r\n    <!-- #faq -->\r\n</main>"

/***/ }),

/***/ "./src/app/business/business.component.ts":
/*!************************************************!*\
  !*** ./src/app/business/business.component.ts ***!
  \************************************************/
/*! exports provided: BusinessHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessHomeComponent", function() { return BusinessHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_multi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/multi.service */ "./src/app/shared/multi.service.ts");



var BusinessHomeComponent = /** @class */ (function () {
    function BusinessHomeComponent(multi) {
        this.multi = multi;
    }
    BusinessHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lang = this.multi.lang;
        this.getContent(this.lang);
        this.multi.tlang.subscribe(function (lang) {
            _this.lang = lang;
            _this.getContent(lang);
        });
    };
    BusinessHomeComponent.prototype.getContent = function (lang) {
        if (lang === 'eng') {
            this.content = this.multi.businessPageContent.eng;
            this.navMenuActive = this.multi.navMenu.eng;
            this.faqContent = this.multi.faq.eng;
            this.somGlobalCommunityContent = this.multi.sombankcommunity.eng;
        }
        else if (lang === 'som') {
            this.content = this.multi.businessPageContent.som;
            this.navMenuActive = this.multi.navMenu.som;
            this.faqContent = this.multi.faq.som;
            this.somGlobalCommunityContent = this.multi.sombankcommunity.som;
        }
        else if (lang === 'arb') {
            this.content = this.multi.businessPageContent.arb;
            this.navMenuActive = this.multi.navMenu.arb;
            this.faqContent = this.multi.faq.arb;
            this.somGlobalCommunityContent = this.multi.sombankcommunity.arb;
        }
    };
    BusinessHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'business-content',
            template: __webpack_require__(/*! ./business.component.html */ "./src/app/business/business.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_multi_service__WEBPACK_IMPORTED_MODULE_2__["MultiLangService"]])
    ], BusinessHomeComponent);
    return BusinessHomeComponent;
}());



/***/ }),

/***/ "./src/app/business/business.module.ts":
/*!*********************************************!*\
  !*** ./src/app/business/business.module.ts ***!
  \*********************************************/
/*! exports provided: BusinessHomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessHomeModule", function() { return BusinessHomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _business_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./business.component */ "./src/app/business/business.component.ts");
/* harmony import */ var _business_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./business-routing.module */ "./src/app/business/business-routing.module.ts");





var BusinessHomeModule = /** @class */ (function () {
    function BusinessHomeModule() {
    }
    BusinessHomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _business_component__WEBPACK_IMPORTED_MODULE_3__["BusinessHomeComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _business_routing_module__WEBPACK_IMPORTED_MODULE_4__["BusinessHomeRoutingModule"]
            ],
            exports: []
        })
    ], BusinessHomeModule);
    return BusinessHomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=business-business-module.js.map