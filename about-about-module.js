(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "./src/app/about/about-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AboutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function() { return AboutRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.component */ "./src/app/about/about.component.ts");




var appRoutes = [
    { path: '', component: _about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] }
];
var AboutRoutingModule = /** @class */ (function () {
    function AboutRoutingModule() {
    }
    AboutRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AboutRoutingModule);
    return AboutRoutingModule;
}());



/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--==========================\r\nAbout Us Section\r\n============================-->\r\n<section id=\"about\" class=\"extra-space\">\r\n\r\n    <div class=\"container\">\r\n        <div class=\"about-content text-center\">\r\n            <h2 [ngClass]=\"{'arabicH3-center': lang ==='som' || lang ==='arb'}\"> {{ content.mainH }} </h2>\r\n        </div>\r\n        <div class=\"extra-space\"></div>\r\n        <div class=\"extra-space\"></div>\r\n            \r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-lg-5 col-md-6\">\r\n        <div class=\"about-img\">\r\n            <img src=\"../../assets/img/aboutsombank.jpg\" alt=\"\">\r\n        </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-7 col-md-6\">\r\n        <div class=\"about-content\">\r\n            <h2 [ngClass]=\"{'arabicH4': lang ==='som' || lang ==='arb'}\"> {{ content.heading }} </h2>\r\n            <h3 [ngClass]=\"{'arabicH4': lang ==='som' || lang ==='arb'}\"> {{ content.italicText }} </h3>\r\n            <p [ngClass]=\"{'arabicP': lang ==='som' || lang ==='arb'}\"> {{ content.content1 }} </p>\r\n            <p [ngClass]=\"{'arabicP': lang ==='som' || lang ==='arb'}\"> {{ content.content2 }}</p>\r\n            <!-- <ul>\r\n            <li><i class=\"ion-android-checkmark-circle\"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>\r\n            <li><i class=\"ion-android-checkmark-circle\"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>\r\n            <li><i class=\"ion-android-checkmark-circle\"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>\r\n            </ul> -->\r\n        </div>\r\n        </div>\r\n    </div>\r\n    </div>\r\n\r\n</section>\r\n    \r\n<!-- #about -->\r\n\r\n<!--==========================\r\nPortfolio Section\r\n============================-->\r\n\r\n<section id=\"portfolio\" class=\"section-bg\" style=\"padding-top:2rem\">\r\n    <div class=\"container\">\r\n        <header class=\"section-header\">\r\n        <h3 class=\"section-title\" [ngClass]=\"{'arabicH3-center': lang ==='som' || lang ==='arb'}\">{{ content.heading }}</h3>\r\n        </header>\r\n        <!-- \r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12\">\r\n                    <ul id=\"portfolio-flters\">\r\n                    <li data-filter=\"*\" class=\"filter-active\">All</li>\r\n                    <li data-filter=\".filter-app\">App</li>\r\n                    <li data-filter=\".filter-card\">Card</li>\r\n                    <li data-filter=\".filter-web\">Web</li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        -->\r\n        <div class=\"row portfolio-container extra-space\">\r\n            <div class=\"col-6 portfolio-item filter-app\">\r\n                <div class=\"portfolio-wrap\">\r\n                <img src=\"../../assets/img/SomBank 1.jpeg\" class=\"img-fluid\" alt=\"\">\r\n                <div class=\"portfolio-info\">\r\n                    <h4><a href=\"#\">App 1</a></h4>\r\n                    <p>App</p>\r\n                    <div>\r\n                    <a href=\"../../assets/img/SomBank 1.jpeg\" data-lightbox=\"portfolio\" data-title=\"App 1\" class=\"link-preview\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\r\n                    <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\r\n                    </div>\r\n                </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-6 portfolio-item filter-card\">\r\n                <div class=\"portfolio-wrap\">\r\n                <img src=\"../../assets/img/SomBank 2.jpeg\" class=\"img-fluid\" alt=\"\">\r\n                <div class=\"portfolio-info\">\r\n                    <h4><a href=\"#\">Card 2</a></h4>\r\n                    <p>Card</p>\r\n                    <div>\r\n                    <a href=\"../../assets/img/SomBank 2.jpeg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Card 2\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\r\n                    <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\r\n                    </div>\r\n                </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section> \r\n\r\n<!-- #portfolio -->\r\n\r\n<!--==========================\r\nMap\r\n============================-->\r\n\r\n<section>\r\n    <div class=\"container\" >\r\n        <header class=\"section-header\">\r\n            <h3 [ngClass]=\"{'arabicH3': lang ==='som' || lang ==='arb'}\"> {{ somGlobalCommunityContent.heading }} </h3>\r\n            </header>\r\n        <img src=\"../../assets/img/telocations.gif\" class=\"img-fluid\">\r\n    </div>\r\n</section>\r\n\r\n<!-- #Map -->\r\n\r\n<!--==========================\r\nCounter\r\n============================-->\r\n\r\n<section id=\"why-us\" class=\"wow fadeIn\">\r\n    <div class=\"container\">\r\n        <div class=\"row counters\">\r\n            <div class=\"col-lg-3 col-6 text-center\">\r\n                <span data-toggle=\"counter-up\"  [ngClass]=\"{'arabicH3-center': lang ==='som' || lang ==='arb'}\"> {{ somGlobalCommunityContent.clientsNum }} </span>\r\n                <p [ngClass]=\"{'arabicP-center': lang === 'arb' || lang === 'som'}\"> {{ somGlobalCommunityContent.clients }} </p>\r\n            </div>\r\n\r\n            <div class=\"col-lg-3 col-6 text-center\">\r\n                <span data-toggle=\"counter-up\"  [ngClass]=\"{'arabicH3-center': lang ==='som' || lang ==='arb'}\"> {{ somGlobalCommunityContent.projectsNum }} </span>\r\n                <p [ngClass]=\"{'arabicP-center': lang === 'arb' || lang === 'som'}\"> {{ somGlobalCommunityContent.projects }} </p>\r\n            </div>\r\n\r\n            <div class=\"col-lg-3 col-6 text-center\">\r\n                <span data-toggle=\"counter-up\"  [ngClass]=\"{'arabicH3-center': lang ==='som' || lang ==='arb'}\"> {{ somGlobalCommunityContent.hoursNum }} </span>\r\n                <p [ngClass]=\"{'arabicP-center': lang === 'arb' || lang === 'som'}\"> {{ somGlobalCommunityContent.hours }} </p>\r\n            </div>\r\n\r\n            <div class=\"col-lg-3 col-6 text-center\">\r\n                <span data-toggle=\"counter-up\"  [ngClass]=\"{'arabicH3-center': lang ==='som' || lang ==='arb'}\"> {{ somGlobalCommunityContent.hardworkNum }} </span>\r\n                <p [ngClass]=\"{'arabicP-center': lang === 'arb' || lang === 'som'}\"> {{ somGlobalCommunityContent.hardwork }} </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n    \r\n<!-- #Counter -->"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_multi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/multi.service */ "./src/app/shared/multi.service.ts");



var AboutComponent = /** @class */ (function () {
    function AboutComponent(multi) {
        this.multi = multi;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lang = this.multi.lang;
        this.setContent(this.lang);
        this.multi.tlang.subscribe(function (lang) {
            _this.lang = lang;
            _this.setContent(lang);
        });
    };
    AboutComponent.prototype.setContent = function (lang) {
        if (lang === 'eng') {
            this.content = this.multi.aboutus.eng;
            this.somGlobalCommunityContent = this.multi.sombankcommunity.eng;
        }
        else if (lang === 'som') {
            this.content = this.multi.aboutus.som;
            this.somGlobalCommunityContent = this.multi.sombankcommunity.som;
        }
        else if (lang === 'arb') {
            this.content = this.multi.aboutus.arb;
            this.somGlobalCommunityContent = this.multi.sombankcommunity.arb;
        }
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'about-content',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_multi_service__WEBPACK_IMPORTED_MODULE_2__["MultiLangService"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-routing.module */ "./src/app/about/about-routing.module.ts");





var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _about_routing_module__WEBPACK_IMPORTED_MODULE_4__["AboutRoutingModule"]
            ],
            exports: []
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ })

}]);
//# sourceMappingURL=about-about-module.js.map