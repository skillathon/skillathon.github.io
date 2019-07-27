(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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

/***/ "./src/app/app-install-popup/app-install-popup.component.html":
/*!********************************************************************!*\
  !*** ./src/app/app-install-popup/app-install-popup.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title [ngClass]=\"{'arabicH4':lang === 'arb' || lang === 'som' }\" style=\"line-height: 1.4\"> {{ content.mainHead }} </h2>\r\n<mat-dialog-content class=\"mat-typography\">\r\n        <section>\r\n            <div class=\"container\">\r\n                <div class=\"row feature-item\">\r\n                    <div class=\"col-lg-4 wow fadeInUp\" [ngClass]=\"{'order-1':true}\">\r\n                        <div class=\"row justify-content-center\">\r\n                            <img src=\"../../assets/img/slider-t-plus-anim.gif\" class=\"img-fluid custom-img-fluid\" alt=\"\">\r\n                            <br>\r\n                            <div class=\"row\">\r\n                                <div class=\"col\">\r\n                                    <a href=\"https://apps.apple.com/app/id1300716879\"><img src=\"../../assets/img/apple-badge-new.png\" class=\"img-fluid\" alt=\"\"></a>\r\n                                </div>\r\n                                <div class=\"col\">\r\n                                    <a href=\"https://play.google.com/store/apps/details?id=com.aitrich.android.etawakal\"> <img src=\"../../assets/img/google-badge-new.png\" class=\"img-fluid\" alt=\"\"> </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-8 wow fadeInUp pt-5 pt-lg-0\" [ngClass]=\"{'order-12':true}\">\r\n                        <h4 [ngClass]=\"{'arabicH4':lang === 'arb' || lang === 'som' }\" style=\"line-height: 1.4\"> {{ content.heading }} </h4>\r\n                        <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som' }\" style=\"line-height: 1.4\">  {{ content.content }} </p>\r\n                        <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som' }\" style=\"line-height: 1.4\">\r\n                            <strong> {{ content.point1.title }} </strong> : {{ content.point1.desc }}<br>\r\n                            <strong> {{ content.point2.title }} </strong> : {{ content.point2.desc }}<br>\r\n                            <strong> {{ content.point3.title }} </strong> : {{ content.point3.desc }}<br>\r\n                            <strong> {{ content.point4.title }} </strong> : {{ content.point4.desc }}<br>\r\n                            <strong> {{ content.point5.title }} </strong> : {{ content.point5.desc }}<br>\r\n                            <strong> {{ content.point6.title }} </strong> : {{ content.point6.desc }}<br>\r\n                        </p>\r\n                        <div class=\"container\">\r\n                            <h2>Partners</h2>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-3 col-lg-3 col-xl-3\">\r\n                                    <img src=\"../../assets/clients/client1.jpg\" class=\"img-fluid custom-img-fluid\" alt=\"\">\r\n                                </div>\r\n                                <div class=\"col-md-3 col-lg-3 col-xl-3\">\r\n                                    <img src=\"../../assets/clients/client2.jpg\" class=\"img-fluid custom-img-fluid\" alt=\"\">\r\n                                </div>\r\n                                <div class=\"col-md-3 col-lg-3 col-xl-3\">\r\n                                    <img src=\"../../assets/clients/client3.jpg\" class=\"img-fluid custom-img-fluid\" alt=\"\">\r\n                                </div>\r\n                                <div class=\"col-md-3 col-lg-3 col-xl-3\">\r\n                                    <img src=\"../../assets/clients/client4.jpg\" class=\"img-fluid custom-img-fluid\" alt=\"\">\r\n                                </div>\r\n                                <div class=\"col-md-3 col-lg-3 col-xl-3\">\r\n                                    <img src=\"../../assets/clients/client5.jpg\" class=\"img-fluid custom-img-fluid\" alt=\"\">\r\n                                </div>\r\n                                <div class=\"col-md-3 col-lg-3 col-xl-3\">\r\n                                    <img src=\"../../assets/clients/client6.jpg\" class=\"img-fluid custom-img-fluid\" alt=\"\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>   \r\n            </div>\r\n        </section>\r\n        \r\n        \r\n</mat-dialog-content>\r\n<mat-dialog-actions align=\"end\">\r\n  <button mat-button mat-dialog-close class=\"btn btn-primary\">Close</button>\r\n  <!-- <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Install</button> -->\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/app-install-popup/app-install-popup.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/app-install-popup/app-install-popup.component.ts ***!
  \******************************************************************/
/*! exports provided: AppInstallPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInstallPopupComponent", function() { return AppInstallPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_popup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/popup.service */ "./src/app/shared/popup.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");




var AppInstallPopupComponent = /** @class */ (function () {
    function AppInstallPopupComponent(popupService, data) {
        this.popupService = popupService;
        this.data = data;
        this.stableContent = {
            eng: {
                mainHead: "T-Plus Money Transfer App",
                heading: 'SENDING MONEY USING T-PLUS MOBILE WALLET', content: 'By using t-Plus Account money can be transferred to Mobile wallet, Tawakal Agent, T-Plus account-account, Etawakal account', point1: { title: 'SEND', desc: 'Send money your family and friends back home with our physical pickup services; simple and fast' }, point2: { title: 'TRANSFER', desc: 'Transfer funds to any registered T-Plus user across the world' }, point3: { title: 'Request', desc: 'Request money from any registered T-Plus user across the world' }, point4: { title: 'FIND MERCHANT', desc: 'Find all the merchants, their location and can contact them for bill payment purposes.' }, point5: { title: 'PAY MERCHANT', desc: 'Pay your bills to the merchant directly from your phone user your T-Plus user account.' }, point6: { title: 'MOBILE MONEY', desc: 'Users can directly send money to the mobile wallet( SAHAL, SAAD, EVCPLUS) coming soon Mobile wallet (Mpesa, MTN, AIRTEL And HELLOCASH)' }
            },
            arb: {
                mainHead: "تطبيق T-Plus لتحويل الأموال",
                heading: 'إرسال الأموال باستخدام محفظة الهاتف المحمول T-PLUS', content: 'باستخدام تحويل حساب t-Plus ، يمكن تحويل الأموال إلى محفظة الهاتف المحمول ، وكيل توكل ، حساب حساب T-Plus ، حساب Etawakal', point1: { title: 'إرسال', desc: 'أرسل أموالك وأفراد عائلتك إلى المنزل من خلال خدمات الالتقاط البدني الخاصة بنا ؛ بسيطة وسريعة' }, point2: { title: 'نقل', desc: 'قم بتحويل الأموال إلى أي مستخدم مسجل من نوع T-Plus في جميع أنحاء العالم' }, point3: { title: 'طلب', desc: 'طلب المال من أي مستخدم مسجل تي بلس في جميع أنحاء العالم' }, point4: { title: 'البحث عن تاجر', desc: 'ابحث عن جميع التجار وموقعهم ويمكنهم الاتصال بهم لأغراض دفع الفواتير.' }, point5: { title: 'ادفع تاجر', desc: 'دفع فواتيرك إلى التاجر مباشرة من مستخدم هاتفك الخاص بك حساب المستخدم T-Plus' }, point6: { title: 'جوال المال', desc: 'يمكن للمستخدمين إرسال الأموال مباشرة إلى محفظة الهاتف المحمول (SAHAL ، SAAD ، EVCPLUS) قريبًا' }
            },
            som: {
                mainHead: "تطبيق T-Plus لتحويل الأموال",
                heading: 'إرسال الأموال باستخدام محفظة الهاتف المحمول T-PLUS', content: 'باستخدام تحويل حساب t-Plus ، يمكن تحويل الأموال إلى محفظة الهاتف المحمول ، وكيل توكل ، حساب حساب T-Plus ، حساب Etawakal', point1: { title: 'إرسال', desc: 'أرسل أموالك وأفراد عائلتك إلى المنزل من خلال خدمات الالتقاط البدني الخاصة بنا ؛ بسيطة وسريعة' }, point2: { title: 'نقل', desc: 'قم بتحويل الأموال إلى أي مستخدم مسجل من نوع T-Plus في جميع أنحاء العالم' }, point3: { title: 'طلب', desc: 'طلب المال من أي مستخدم مسجل تي بلس في جميع أنحاء العالم' }, point4: { title: 'البحث عن تاجر', desc: 'ابحث عن جميع التجار وموقعهم ويمكنهم الاتصال بهم لأغراض دفع الفواتير.' }, point5: { title: 'ادفع تاجر', desc: 'دفع فواتيرك إلى التاجر مباشرة من مستخدم هاتفك الخاص بك حساب المستخدم T-Plus' }, point6: { title: 'جوال المال', desc: 'يمكن للمستخدمين إرسال الأموال مباشرة إلى محفظة الهاتف المحمول (SAHAL ، SAAD ، EVCPLUS) قريبًا' }
            }
        };
    }
    AppInstallPopupComponent.prototype.ngOnInit = function () {
        if (this.data.lang === "eng") {
            this.content = this.stableContent.eng;
            this.lang = this.data.lang;
        }
        else if (this.data.lang === "som") {
            this.content = this.stableContent.som;
            this.lang = this.data.lang;
        }
        else if (this.data.lang === "arb") {
            this.content = this.stableContent.arb;
            this.lang = this.data.lang;
        }
    };
    AppInstallPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-install-popup',
            template: __webpack_require__(/*! ./app-install-popup.component.html */ "./src/app/app-install-popup/app-install-popup.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_popup_service__WEBPACK_IMPORTED_MODULE_2__["PopupLangService"], Object])
    ], AppInstallPopupComponent);
    return AppInstallPopupComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" id=\"navB\" class=\"mobile-nav-toggle d-lg-none\" onclick=\"tet()\"><i class=\"fa fa-bars\" id=\"navI\"></i></button>\n\n<!--==========================\n  Heading and Navigation\n============================-->\n  <header-navigation></header-navigation>\n  <mobile-nav></mobile-nav>\n<!-- #Heading and Navigation -->\n  \n<!--==========================\n  Content\n============================-->\n  <router-outlet></router-outlet>\n<!-- #Content -->\n\n<!--==========================\n  Footer\n============================-->\n\n  <footer-content></footer-content>\n  \n<!-- #footer -->\n\n\n<!-- <li [routerLinkActive]=\"'active'\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/']\" onclick=\"tet()\">Home</a></li>\n      <li [routerLinkActive]=\"'active'\" ><a [routerLink]=\"['/about-sombank']\" onclick=\"tet()\">About Us</a></li>\n      <li class=\"drop-down\" [routerLinkActive]=\"'active'\" ><a onclick=\"showSubMenu()\" style=\"color: #fff\">Products</a>\n        <ul id=\"mobileNav\" style=\"display:none\">\n            <li [routerLinkActive]=\"'active'\" ><a [routerLink]=\"['./t-plus-account']\" onclick=\"tet()\">T-Plus</a></li>\n        </ul>\n      </li> \n      <li [routerLinkActive]=\"'active'\" onclick=\"tet()\"><a [routerLink]=\"['/sombank-pricing']\" >Pricing</a></li>\n      <li class=\"drop-down\" [routerLinkActive]=\"'active'\" onclick=\"showSubMenu1()\"><a style=\"color: #fff\">Accounts</a>\n            <ul id=\"mobileNav1\" style=\"display:none\">\n                <li [routerLinkActive]=\"'active'\" onclick=\"tet()\"><a [routerLink]=\"['/t-plus-account']\">T-Plus</a></li>\n                <li [routerLinkActive]=\"'active'\" onclick=\"tet()\"><a [routerLink]=\"['/sombank-personal-account']\" >Personal</a>\n                </li>\n                <li [routerLinkActive]=\"'active'\" onclick=\"tet()\"><a [routerLink]=\"['/sombank-corporate-account']\">Corporate</a></li>\n            </ul>\n      </li> \n      <li [routerLinkActive]=\"'active'\" [routerLinkActiveOptions]=\"{exact: true}\" onclick=\"tet()\"><a [routerLink]=\"['']\">Contact Us</a></li>\n      -->\n\n<div id=\"nn\" class=\"mobile-nav-overly\" style=\"display: none;\"></div>\n\n\n<div id=\"lightboxOverlay\" class=\"lightboxOverlay\" style=\"display: none;\"></div>\n    <div id=\"lightbox\" class=\"lightbox\" style=\"display: none;\"><div class=\"lb-outerContainer\"><div class=\"lb-container\">\n      <img class=\"lb-image\" src=\"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==\">\n      <div class=\"lb-nav\"><a class=\"lb-prev\" href=\"\"></a><a class=\"lb-next\" href=\"\"></a></div><div class=\"lb-loader\"><a class=\"lb-cancel\"></a></div></div></div><div class=\"lb-dataContainer\"><div class=\"lb-data\"><div class=\"lb-details\"><span class=\"lb-caption\"></span><span class=\"lb-number\"></span></div><div class=\"lb-closeContainer\"><a class=\"lb-close\"></a></div></div></div>\n    </div>\n<a href=\"#\" class=\"back-to-top\"><i class=\"fa fa-chevron-up\"></i></a>\n<!-- Uncomment below i you want to use a preloader -->\n<!-- <div id=\"preloader\"></div> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_multi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/multi.service */ "./src/app/shared/multi.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(multi) {
        this.multi = multi;
        this.title = 'sombank';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_multi_service__WEBPACK_IMPORTED_MODULE_2__["MultiLangService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navigation_header_navigation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navigation/header-navigation.component */ "./src/app/navigation/header-navigation.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _business_business_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./business/business.component */ "./src/app/business/business.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/pricing/pricing.component.ts");
/* harmony import */ var _t_plus_account_t_plus_account_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./t-plus-account/t-plus-account.component */ "./src/app/t-plus-account/t-plus-account.component.ts");
/* harmony import */ var _corporate_corporate_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./corporate/corporate.component */ "./src/app/corporate/corporate.component.ts");
/* harmony import */ var _personal_account_personal_account_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./personal-account/personal-account.component */ "./src/app/personal-account/personal-account.component.ts");
/* harmony import */ var _shared_multi_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/multi.service */ "./src/app/shared/multi.service.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _mobile_nav_mobile_nav_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mobile-nav/mobile-nav.component */ "./src/app/mobile-nav/mobile-nav.component.ts");
/* harmony import */ var _shared_faqAdd_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/faqAdd.pipe */ "./src/app/shared/faqAdd.pipe.ts");
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./popup/popup.component */ "./src/app/popup/popup.component.ts");
/* harmony import */ var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./privacy/privacy.component */ "./src/app/privacy/privacy.component.ts");
/* harmony import */ var _app_install_popup_app_install_popup_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./app-install-popup/app-install-popup.component */ "./src/app/app-install-popup/app-install-popup.component.ts");


























var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"] },
    { path: 'about-sombank', component: _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"] },
    { path: 'sombank-for-businesses', component: _business_business_component__WEBPACK_IMPORTED_MODULE_14__["BusinessHomeComponent"] },
    { path: 't-plus-account', component: _t_plus_account_t_plus_account_component__WEBPACK_IMPORTED_MODULE_16__["TplusAccountComponent"] },
    { path: 'sombank-pricing', component: _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_15__["PricingComponent"] },
    { path: 'sombank-personal-account', component: _personal_account_personal_account_component__WEBPACK_IMPORTED_MODULE_18__["PersonalAccountComponent"] },
    { path: 'sombank-corporate-account', component: _corporate_corporate_component__WEBPACK_IMPORTED_MODULE_17__["CorporateAccountComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _navigation_header_navigation_component__WEBPACK_IMPORTED_MODULE_10__["HeaderNavigationComponent"],
                _mobile_nav_mobile_nav_component__WEBPACK_IMPORTED_MODULE_21__["MobileNavComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"],
                _business_business_component__WEBPACK_IMPORTED_MODULE_14__["BusinessHomeComponent"],
                _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_15__["PricingComponent"],
                _t_plus_account_t_plus_account_component__WEBPACK_IMPORTED_MODULE_16__["TplusAccountComponent"],
                _corporate_corporate_component__WEBPACK_IMPORTED_MODULE_17__["CorporateAccountComponent"],
                _personal_account_personal_account_component__WEBPACK_IMPORTED_MODULE_18__["PersonalAccountComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _popup_popup_component__WEBPACK_IMPORTED_MODULE_23__["PopupComponent"],
                _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_24__["PrivacyPolicyComponent"],
                _app_install_popup_app_install_popup_component__WEBPACK_IMPORTED_MODULE_25__["AppInstallPopupComponent"],
                _shared_faqAdd_pipe__WEBPACK_IMPORTED_MODULE_22__["FaqAddPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes, { scrollPositionRestoration: 'enabled' }),
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production })
            ],
            providers: [_shared_multi_service__WEBPACK_IMPORTED_MODULE_19__["MultiLangService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
            entryComponents: [_popup_popup_component__WEBPACK_IMPORTED_MODULE_23__["PopupComponent"], _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_24__["PrivacyPolicyComponent"], _app_install_popup_app_install_popup_component__WEBPACK_IMPORTED_MODULE_25__["AppInstallPopupComponent"]]
        })
    ], AppModule);
    return AppModule;
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

/***/ "./src/app/corporate/corporate.component.html":
/*!****************************************************!*\
  !*** ./src/app/corporate/corporate.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--==========================\r\nIntro Section\r\n============================-->\r\n\r\n<section id=\"intro\" class=\"clearfix\" style=\"background-image:url(../assets/img/bg.png)\">\r\n    <div class=\"container d-flex h-100\">\r\n        <div class=\"row justify-content-center align-self-center extra-space\">\r\n        \r\n        <div class=\"col-md-6 intro-info order-md-first order-last align-self-center\">\r\n            <h2 [ngClass]=\"{'arabicSH': lang==='som' || lang==='arb'}\">{{ content.heading1 }}<br> <span>{{ content.heading2 }}</span> <br> {{ content.heading3 }}</h2>\r\n            \r\n            <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\r\n                <div >\r\n                    <div class=\"form-row justify-content-center\">\r\n                        <div class=\"col-9\">\r\n                            <input type=\"email\" class=\"form-control custom-remove-border\" [ngClass]=\"{'custom-form-control':lang==='som' || lang==='arb'}\" maxlength=\"50\" placeholder=\"email@test.com\" name=\"email\" required email ngModel #email=\"ngModel\">\r\n                        </div>\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"form-row justify-content-center\">\r\n                        <div class=\"col-3\">\r\n                            <select class=\"custom-select mr-sm-2 custom-remove-border\" name=\"ext\" [ngModel]=\"'+252'\" required #ext=\"ngModel\">\r\n                                <option value=\"+91\">+91</option>\r\n                                <option value=\"+252\">+252</option>\r\n                                <option value=\"+1\">+1</option> \r\n                                <option value=\"+6\">+6</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <input type=\"number\" class=\"form-control custom-remove-border\" [ngClass]=\"{'custom-form-control':lang==='som' || lang==='arb'}\" placeholder=\"Mobile Number\" name=\"cell\" required ngModel #cell=\"ngModel\">\r\n                        </div>\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"form-row justify-content-center\">\r\n                        <div class=\"col-6\">\r\n                    <button type=\"submit\" [ngClass]=\"{'arabicH4-center': lang ==='som' || lang ==='arb'}\" class=\"btn btn-primary form-control\" [disabled]=\"f.invalid\"> {{ content.button }} </button>\r\n                    </div></div>\r\n                </div>\r\n            </form>               \r\n        </div>\r\n    \r\n        <div class=\"col-md-6 intro-info order-md-last order-first\">\r\n            <div class=\"row justify-content-center\">\r\n                <img src=\"../../assets/img/slider-t-plus-anim.gif\" alt=\"\" class=\"custom-img-fluid img-fluid\">\r\n            </div>\r\n        </div>\r\n\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<!-- #intro -->\r\n\r\n<main id=\"main\">\r\n\r\n<!--==========================\r\n    Features Section\r\n============================-->\r\n\r\n<section id=\"features\">\r\n    <div class=\"container-fluid\">\r\n\r\n        <div class=\"row feature-item\">\r\n            <div class=\"col-lg-6 wow fadeInUp pt-5 pt-lg-0 custom-center-align extra-padding-l-r\">\r\n                <h3 [ngClass]=\"{'arabicH4':lang === 'arb' || lang === 'som' }\"> {{ content.section1.heading }} </h3>\r\n                <p [ngClass]=\"{'arabicP':lang === 'arb' || lang === 'som' }\">\r\n                    {{ content.section1.content }}\r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-6 wow fadeInUp\">\r\n                <div class=\"row justify-content-center\">\r\n                    <img src=\"https://assets.revolut.com/media/business/step1-9.png\" class=\"custom-img-fluid-business img-fluid\" alt=\"\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row feature-item extra-space\">\r\n            <div class=\"col-lg-6 wow fadeInUp pt-5 pt-lg-0 custom-center-align extra-padding-l-r\">\r\n                <h3 [ngClass]=\"{'arabicH4':lang === 'arb' || lang === 'som' }\"> {{ content.section2.heading }} </h3>\r\n                <p [ngClass]=\"{'arabicP':lang === 'arb' || lang === 'som' }\">\r\n                    {{ content.section2.content }}\r\n                </p>\r\n            </div>\r\n\r\n            <div class=\"col-lg-6 wow fadeInUp\">\r\n                <div class=\"row justify-content-center\">\r\n                    <img src=\"https://assets.revolut.com/media/business/step2-9.png\" class=\"custom-img-fluid-business img-fluid\" alt=\"\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row feature-item extra-space\">\r\n            <div class=\"col-lg-6 wow fadeInUp pt-5 pt-lg-0 custom-center-align extra-padding-l-r\">\r\n                <h3 [ngClass]=\"{'arabicH4':lang === 'arb' || lang === 'som' }\" > {{ content.section3.heading }} </h3>\r\n                <p [ngClass]=\"{'arabicP':lang === 'arb' || lang === 'som' }\">\r\n                        {{ content.section3.content }} \r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-6 wow fadeInUp\">\r\n                <div class=\"row justify-content-center\">\r\n                    <img src=\"https://assets.revolut.com/media/business/step3-9.png\" class=\"custom-img-fluid-business img-fluid\" alt=\"\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row feature-item extra-space\">\r\n            <div class=\"col-lg-6 wow fadeInUp pt-5 pt-lg-0 custom-center-align extra-padding-l-r\">\r\n                <h3 [ngClass]=\"{'arabicH4':lang === 'arb' || lang === 'som' }\"> {{ content.section4.heading }} </h3>\r\n                <p [ngClass]=\"{'arabicP':lang === 'arb' || lang === 'som' }\">\r\n                        {{ content.section4.content }} \r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-6 wow fadeInUp\">\r\n                <div class=\"row justify-content-center\">\r\n                        <img src=\"https://assets.revolut.com/media/business/step3-9.png\" class=\"custom-img-fluid-business img-fluid\" alt=\"\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</section>\r\n        \r\n<!-- #features -->\r\n\r\n</main>"

/***/ }),

/***/ "./src/app/corporate/corporate.component.ts":
/*!**************************************************!*\
  !*** ./src/app/corporate/corporate.component.ts ***!
  \**************************************************/
/*! exports provided: CorporateAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorporateAccountComponent", function() { return CorporateAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_multi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/multi.service */ "./src/app/shared/multi.service.ts");



var CorporateAccountComponent = /** @class */ (function () {
    function CorporateAccountComponent(multi) {
        this.multi = multi;
    }
    CorporateAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lang = this.multi.lang;
        this.getContent(this.lang);
        this.multi.tlang.subscribe(function (lang) {
            _this.lang = lang;
            _this.getContent(lang);
        });
    };
    CorporateAccountComponent.prototype.getContent = function (lang) {
        if (lang === 'eng') {
            this.content = this.multi.corporatePageContent.eng;
        }
        else if (lang === 'som') {
            this.content = this.multi.corporatePageContent.som;
        }
        else if (lang === 'arb') {
            this.content = this.multi.corporatePageContent.arb;
        }
    };
    CorporateAccountComponent.prototype.onSubmit = function (f) {
        this.multi.onSubmit(f, this.lang);
    };
    CorporateAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'corporate',
            template: __webpack_require__(/*! ./corporate.component.html */ "./src/app/corporate/corporate.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_multi_service__WEBPACK_IMPORTED_MODULE_2__["MultiLangService"]])
    ], CorporateAccountComponent);
    return CorporateAccountComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\" class=\"section-bg\" style=\"padding-top: 20px\">\r\n    <div class=\"footer-top\">\r\n        <div class=\"container\">\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"footer-info\">\r\n                                <img src=\"../assets/img/logo.png\" alt=\"\" width=\"200px\">\r\n                                <p [ngClass]=\"{'arabicP':lang === 'arb' || lang === 'som' }\" > {{ content1.content }} </p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"footer-links\">\r\n                                <h4 [ngClass]=\"{'arabicH6':lang === 'arb' || lang === 'som' }\"> {{ content1.addressH }} </h4>\r\n                                <p [ngClass]=\"{'arabicP':lang === 'arb' || lang === 'som' }\">\r\n                                    {{ content1.addressl1 }} <br>\r\n                                    {{ content1.addressl2 }} <br>\r\n                                    {{ content1.addressl3 }}  <br>\r\n                                    <strong>{{ content1.phone }} :</strong> {{ content1.phoneNum }} <br>\r\n                                    <strong>{{ content1.email }} :</strong> {{ content1.emailid }} <br>\r\n                                </p>\r\n                            </div>\r\n                            <a (click)=\"openDialog()\" style=\"cursor: pointer\">Privacy Policy</a>\r\n                            <!-- <button mat-button  class=\"btn btn-primary\">Open dialog</button> -->\r\n                            <br>\r\n                            <br>\r\n                            <div class=\"social-links\">\r\n                                <a href=\"#\" class=\"twitter\"><i class=\"fa fa-twitter\"></i></a>\r\n                                <a href=\"#\" class=\"facebook\"><i class=\"fa fa-facebook\"></i></a>\r\n                                <a href=\"#\" class=\"instagram\"><i class=\"fa fa-instagram\"></i></a>\r\n                                <a href=\"#\" class=\"linkedin\"><i class=\"fa fa-linkedin\"></i></a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div class=\"footer-newsletter\">\r\n                        <h4>Our Newsletter</h4>\r\n                        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem.</p>\r\n                        <form action=\"\" method=\"post\">\r\n                            <input type=\"email\" name=\"email\"><input type=\"submit\"  value=\"Subscribe\">\r\n                        </form>\r\n                        </div>\r\n        -->\r\n                </div>\r\n                <div class=\"col-lg-6\">\r\n                    <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.3097464437074!2d45.308602214264106!3d2.031876359571738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d5841f7cc33a515%3A0x78b3fc30a07a8b4c!2sTawakal+Express!5e0!3m2!1sen!2sin!4v1563026781069!5m2!1sen!2sin\" height=\"80%\" frameborder=\"0\" style=\"border:0; width:100%\" allowfullscreen></iframe> \r\n                    <!-- <div class=\"form\">\r\n                    \r\n                    <h4>Send us a message</h4>\r\n                    <p>Eos ipsa est voluptates. Nostrum nam libero ipsa vero. Debitis quasi sit eaque numquam similique commodi harum aut temporibus.</p>\r\n                    <form action=\"\" method=\"post\" role=\"form\" class=\"contactForm\">\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" name=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Your Name\" data-rule=\"minlen:4\" data-msg=\"Please enter at least 4 chars\" />\r\n                        <div class=\"validation\"></div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"Your Email\" data-rule=\"email\" data-msg=\"Please enter a valid email\" />\r\n                        <div class=\"validation\"></div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" name=\"subject\" id=\"subject\" placeholder=\"Subject\" data-rule=\"minlen:4\" data-msg=\"Please enter at least 8 chars of subject\" />\r\n                        <div class=\"validation\"></div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <textarea class=\"form-control\" name=\"message\" rows=\"5\" data-rule=\"required\" data-msg=\"Please write something for us\" placeholder=\"Message\"></textarea>\r\n                        <div class=\"validation\"></div>\r\n                    </div>\r\n\r\n                    <div id=\"sendmessage\">Your message has been sent. Thank you!</div>\r\n                    <div id=\"errormessage\"></div>\r\n\r\n                    <div class=\"text-center\"><button type=\"submit\" title=\"Send Message\">Send Message</button></div>\r\n                    </form>\r\n                </div> -->\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"container\">\r\n        <div class=\"copyright\">\r\n        &copy; Copyright <strong>Rapid</strong>. All Rights Reserved\r\n        </div>\r\n        <div class=\"credits\">\r\n        <!--\r\n            All the links in the footer should remain intact.\r\n            You can delete the links only if you purchased the pro version.\r\n            Licensing information: https://bootstrapmade.com/license/\r\n            Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Rapid\r\n        -->\r\n        Designed by <a href=\"https://bootstrapmade.com/\">BootstrapMade</a>\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_multi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/multi.service */ "./src/app/shared/multi.service.ts");



var FooterComponent = /** @class */ (function () {
    function FooterComponent(multi) {
        this.multi = multi;
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lang = this.multi.lang;
        this.getContent(this.lang);
        this.multi.tlang.subscribe(function (lang) {
            _this.lang = lang;
            _this.getContent(lang);
        });
    };
    FooterComponent.prototype.getContent = function (lang) {
        if (lang === 'eng') {
            this.content1 = this.multi.footer.eng;
        }
        else if (lang === 'arb') {
            this.content1 = this.multi.footer.arb;
        }
        else if (lang === 'som') {
            this.content1 = this.multi.footer.som;
        }
    };
    FooterComponent.prototype.openDialog = function () {
        this.multi.openPrivacyPolicy(this.lang);
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'footer-content',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_multi_service__WEBPACK_IMPORTED_MODULE_2__["MultiLangService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--==========================\r\nIntro Section\r\n============================-->\r\n\r\n<section id=\"intro\" class=\"clearfix\">\r\n    <br>    \r\n    <div class=\"container-fluid d-flex h-100 justify-content-center\">\r\n        <div class=\"row align-self-center\">\r\n            <div class=\"col-md-6 intro-info order-md-first order-last justify-content-center\">\r\n                <!-- <nav class=\"main-nav justify-content-center align-self-center\" >\r\n                    <ul>\r\n                        <li [routerLinkActive]=\"'active'\" [routerLinkActiveOptions]=\"{exact: true}\"><a [ngClass]=\"{'arabicNavH': lang==='som' || lang==='arb'}\" [routerLink]=\"['/']\"  > {{ navMenuActive.personal }} </a></li>\r\n                        <li [routerLinkActive]=\"'active'\" ><a [ngClass]=\"{'arabicNavH': lang==='som' || lang==='arb'}\" [routerLink]=\"['/sombank-for-businesses']\" > {{ navMenuActive.business }} </a></li>\r\n                    </ul>\r\n                </nav> -->\r\n                <!-- <div style=\"width:100%; text-align: center; margin: 0px auto\" class=\"justify-content-center\" >\r\n                    <h3 style=\"display:inline-block; padding-right: 15px\" [routerLinkActive]=\"'active'\" [routerLinkActiveOptions]=\"{exact: true}\"><a [ngClass]=\"{'arabicNavH': lang==='som' || lang==='arb'}\" [routerLink]=\"['/']\"  > {{ navMenuActive.personal }} </a></h3>\r\n                    <h3 style=\"display:inline-block; padding-left: 15px\" [routerLinkActive]=\"'active'\" ><a [ngClass]=\"{'arabicNavH': lang==='som' || lang==='arb'}\" [routerLink]=\"['/sombank-for-businesses']\" > {{ navMenuActive.business }} </a></h3>\r\n                </div>\r\n                <br> -->                \r\n                <h2 [ngClass]=\"{'arabicSH': lang==='som' || lang==='arb'}\" style=\"text-align:center\"> \r\n                    {{ content.heading }} <span> {{ country }} </span>\r\n                </h2>\r\n                <br>\r\n                <br>\r\n                <br>\r\n                <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\r\n                    <div >\r\n                        <div class=\"form-row justify-content-center\">\r\n                            <div class=\"col-9\">\r\n                                <input type=\"email\" class=\"form-control custom-remove-border\" [ngClass]=\"{'custom-form-control':lang==='som' || lang==='arb'}\" maxlength=\"50\" placeholder=\"email@test.com\" name=\"email\" required email ngModel #email=\"ngModel\">\r\n                            </div>\r\n                        </div>\r\n                        <br>\r\n                        <div class=\"form-row justify-content-center\">\r\n                            <div class=\"col-3\">\r\n                                <select class=\"custom-select mr-sm-2 custom-remove-border\" name=\"ext\" [ngModel]=\"'+252'\" required #ext=\"ngModel\">\r\n                                    <option value=\"+91\">+91</option>\r\n                                    <option value=\"+252\">+252</option>\r\n                                    <option value=\"+1\">+1</option> \r\n                                    <option value=\"+6\">+6</option>\r\n                                </select>\r\n                            </div>\r\n                            <div class=\"col-6\">\r\n                                <input type=\"number\" class=\"form-control custom-remove-border\" [ngClass]=\"{'custom-form-control':lang==='som' || lang==='arb'}\" placeholder=\"Mobile Number\" name=\"cell\" required ngModel #cell=\"ngModel\">\r\n                            </div>\r\n                        </div>\r\n                        <br>\r\n                        <div class=\"form-row justify-content-center\">\r\n                            <div class=\"col-6\">\r\n                        <button type=\"submit\" [ngClass]=\"{'arabicH4-center': lang ==='som' || lang ==='arb'}\" class=\"btn btn-primary form-control\" [disabled]=\"f.invalid\"> {{ content.button }} </button>\r\n                        </div></div>\r\n                    </div>\r\n                </form>            \r\n            </div>\r\n        \r\n            <div class=\"col-md-6 intro-info order-md-last order-first justify-content-center\">\r\n            \r\n                <div style=\"width:100%; text-align: center; margin: 0px auto\" class=\"justify-content-center\" >\r\n                    <h3 style=\"display:inline-block; padding-right: 15px\" [routerLinkActive]=\"'active'\" [routerLinkActiveOptions]=\"{exact: true}\"><a [ngClass]=\"{'arabicH3': lang ==='som' || lang ==='arb'}\" [routerLink]=\"['/']\"  > {{ navMenuActive.personal }} </a></h3>\r\n                    <h3 style=\"display:inline-block; padding-left: 15px\" [routerLinkActive]=\"'active'\" ><a [ngClass]=\"{'arabicH3': lang ==='som' || lang ==='arb'}\" [routerLink]=\"['/sombank-for-businesses']\" > {{ navMenuActive.business }} </a></h3>\r\n                </div>\r\n                <br>\r\n                \r\n                   <!--  <img src=\"../assets/img/camel4.gif\" alt=\"\" class=\"img-fluid\"> -->\r\n                   <!-- <div class=\"custom-img-background justify-content-center\"> -->\r\n                   <div class=\"row justify-content-center\">\r\n                        <div class=\"justify-content-center\">\r\n                            <img style=\"border-radius: 50%\" class=\"img-fluid align-self-center\" src=\"../assets/camel.gif\" alt=\"\" class=\"img-fluid\">\r\n                            <!-- <video class=\"img-fluid align-self-center\" autoplay loop style=\"border-radius: 50%\">\r\n                                <source src=\"../assets/camel.gif\" type=\"video/mp4\">\r\n                                Your browser does not support the video tag.\r\n                            </video> -->\r\n                        </div>\r\n                   </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</section>\r\n\r\n<!-- #intro -->\r\n\r\n<main id=\"main\">\r\n\r\n    <!--==========================\r\n        Features Section\r\n    ============================-->\r\n\r\n    <section id=\"features\">\r\n        <div class=\"container\">\r\n            <div class=\"row feature-item\">\r\n            <div class=\"col-lg-6 wow fadeInUp\" [ngClass]=\"{'order-1':true}\">\r\n                <div class=\"row justify-content-center\">\r\n                    <img src=\"../../assets/img/slider-t-plus-anim.gif\" class=\"img-fluid custom-img-fluid\" alt=\"\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6 wow fadeInUp pt-5 pt-lg-0\" [ngClass]=\"{'order-12':true}\">\r\n                <h4 [ngClass]=\"{'arabicH4':lang === 'arb' || lang === 'som' }\"> {{ content.section1.heading }} </h4>\r\n                <h6 [ngClass]=\"{'arabicH6':lang === 'arb' || lang === 'som' }\"> {{ content.section1.subheading1 }} </h6>\r\n                <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\">\r\n                    {{ content.section1.subheading1Cont }}\r\n                </p>\r\n                <h6 [ngClass]=\"{'arabicH6':lang === 'arb' || lang === 'som' }\"> {{ content.section1.subheading2 }} </h6>\r\n                <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\">\r\n                    {{ content.section1.subheading2Cont }}\r\n                </p>\r\n                <h6 [ngClass]=\"{'arabicH6':lang === 'arb' || lang === 'som' }\"> {{ content.section1.subheading3 }} </h6>\r\n                <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\">\r\n                    {{ content.section1.subheading3Cont }}\r\n                </p>\r\n                <h6 [ngClass]=\"{'arabicH6':lang === 'arb' || lang === 'som' }\"> {{ content.section1.subheading4 }} </h6>\r\n                <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\">\r\n                    {{ content.section1.subheading4Cont }}\r\n                </p>\r\n            </div>\r\n            </div>\r\n\r\n            <div class=\"row feature-item mt-5 pt-5\">\r\n            <div class=\"col-lg-6 wow fadeInUp order-1 order-lg-2\">\r\n                <div class=\"row justify-content-center\">\r\n                    <img src=\"../../assets/img/slider-t-plus-anim.gif\" class=\"img-fluid custom-img-fluid\" alt=\"\" >\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1\">\r\n                <h4 [ngClass]=\"{'arabicH4':lang === 'arb' || lang === 'som' }\"> {{ content.section2.heading }} </h4>\r\n                <h6 [ngClass]=\"{'arabicH6':lang === 'arb' || lang === 'som' }\"> {{ content.section2.subheading1 }} </h6>\r\n                <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\">\r\n                    {{ content.section2.subheading1Cont }}\r\n                </p>\r\n                <h6 [ngClass]=\"{'arabicH6':lang === 'arb' || lang === 'som' }\"> {{ content.section2.subheading2 }} </h6>\r\n                <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\">\r\n                    {{ content.section2.subheading2Cont }}\r\n                </p>\r\n                <h6 [ngClass]=\"{'arabicH6':lang === 'arb' || lang === 'som' }\"> {{ content.section2.subheading3 }} </h6>\r\n                <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\">\r\n                    {{ content.section2.subheading3Cont }}\r\n                </p>\r\n            </div>\r\n            </div>\r\n\r\n            <div class=\"row feature-item\">\r\n            <div class=\"col-lg-6 wow fadeInUp\">\r\n                <div class=\"row justify-content-center\">\r\n                    <img src=\"../../assets/img/slider-t-plus-anim.gif\" class=\"img-fluid custom-img-fluid\" alt=\"\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6 wow fadeInUp pt-5 pt-lg-0\">\r\n                <h4 [ngClass]=\"{'arabicH4':lang === 'arb' || lang === 'som' }\"> {{ content.section3.heading }} </h4>\r\n                <h6 [ngClass]=\"{'arabicH6':lang === 'arb' || lang === 'som' }\"> {{ content.section3.subheading1 }} </h6>\r\n                <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\">\r\n                    {{ content.section3.subheading1Cont }}\r\n                </p>\r\n                <h6 [ngClass]=\"{'arabicH6':lang === 'arb' || lang === 'som' }\"> {{ content.section3.subheading2 }} </h6>\r\n                <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\">\r\n                    {{ content.section3.subheading2Cont }}\r\n                </p>\r\n                <h6 [ngClass]=\"{'arabicH6':lang === 'arb' || lang === 'som' }\"> {{ content.section3.subheading3 }} </h6>\r\n                <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\">\r\n                    {{ content.section3.subheading3Cont }}\r\n                </p>\r\n            </div>\r\n            </div>\r\n\r\n            <div class=\"row feature-item\">\r\n                <div class=\"col-lg-6 wow fadeInUp pt-5 pt-lg-0\">\r\n                    <h4 [ngClass]=\"{'arabicH4':lang === 'arb' || lang === 'som' }\"> {{ content.section4.heading }} </h4>\r\n                    <h6 [ngClass]=\"{'arabicH6':lang === 'arb' || lang === 'som' }\"> {{ content.section4.subheading1 }} </h6>\r\n                    <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\">\r\n                        {{ content.section4.subheading1Cont }}\r\n                    </p>\r\n                    <h6 [ngClass]=\"{'arabicH6':lang === 'arb' || lang === 'som' }\"> {{ content.section4.subheading2 }} </h6>\r\n                    <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\">\r\n                        {{ content.section4.subheading2Cont }}\r\n                    </p>\r\n                    <h6 [ngClass]=\"{'arabicH6':lang === 'arb' || lang === 'som' }\"> {{ content.section4.subheading3 }} </h6>\r\n                    <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\">\r\n                        {{ content.section4.subheading3Cont }}\r\n                    </p>\r\n                </div>\r\n                <div class=\"col-lg-6 wow fadeInUp\">\r\n                <div class=\"row justify-content-center\">\r\n                    <img src=\"../../assets/img/slider-t-plus-anim.gif\" class=\"custom-img-fluid img-fluid\" alt=\"\">\r\n                </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </section>\r\n            \r\n    <!-- #features -->\r\n\r\n        \r\n        \r\n    <!--==========================\r\n    Pricing Section\r\n    ============================-->\r\n\r\n    <section id=\"pricing\" class=\"wow fadeInUp section-bg\">\r\n\r\n        <div class=\"container\">\r\n\r\n            <header class=\"section-header\">\r\n            <h3 [ngClass]=\"{'arabicH4-center': lang === 'arb' || lang === 'som'}\"> {{ pricingContent.heading }} </h3>\r\n            <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\"> {{ pricingContent.content }} </p>\r\n            </header>\r\n\r\n            <div class=\"row flex-items-xs-middle flex-items-xs-center\">\r\n        \r\n            <!-- Basic Plan  -->\r\n            <div class=\"col-xs-12 col-lg-4\">\r\n                <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 [ngClass]=\"{'arabicH4-center':lang === 'arb' || lang === 'som' }\"> {{ pricingContent.standerd.heading }} </h4>\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <h6 class=\"card-title\">\r\n                        <span class=\"currency\" [ngClass]=\"{'arabicH4-center':lang === 'arb' || lang === 'som' }\">$</span>0<span class=\"period\">/ {{ pricingContent.standerd.pricing }} </span> \r\n                    </h6>\r\n                    <ul class=\"list-group custom-align-left\">\r\n                    <li class=\"list-group-item\" *ngFor=\"let item of pricingContent.standerd.features\" [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\"><i class=\"fa fa-check\"></i> {{ item }} </li>\r\n                    <!-- \r\n                    <li class=\"list-group-item\"><i class=\"fa fa-check\"></i>  Free Euro IBAN account</li>\r\n                    <li class=\"list-group-item\"><i class=\"fa fa-check\"></i>  Spend in over 150 currencies at the interbank exchange rate</li>\r\n                    <li class=\"list-group-item\"><i class=\"fa fa-check\"></i>  No fee exchange in 29 fiat currencies up to £5,000 per month</li> -->\r\n                    </ul>\r\n                    <a href=\"#\" class=\"btn\"> {{ pricingContent.standerd.button }} </a>\r\n                </div>\r\n                </div>\r\n            </div>\r\n        \r\n            <!-- Regular Plan  -->\r\n            <div class=\"col-xs-12 col-lg-4\">\r\n                <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 [ngClass]=\"{'arabicH4-center':lang === 'arb' || lang === 'som' }\">{{ pricingContent.premium.heading }}</h4>\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <h6 class=\"card-title\"> \r\n                        <span class=\"currency\" [ngClass]=\"{'arabicH4-center':lang === 'arb' || lang === 'som' }\">$</span>29<span class=\"period\">/ {{ pricingContent.premium.pricing }} </span>\r\n                    </h6>\r\n                    <ul class=\"list-group custom-align-left\">\r\n                    <li class=\"list-group-item\" *ngFor=\"let item of pricingContent.premium.features\" [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\"><i class=\"fa fa-check\"></i> {{ item }} </li>\r\n                    </ul>\r\n                    <a href=\"#\" class=\"btn\">{{ pricingContent.premium.button }}</a>\r\n                </div>\r\n                </div>\r\n            </div>\r\n        \r\n            <!-- Premium Plan  -->\r\n            <div class=\"col-xs-12 col-lg-4\">\r\n                <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 [ngClass]=\"{'arabicH4-center':lang === 'arb' || lang === 'som' }\">{{ pricingContent.gold.heading }}</h4>\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <h6 class=\"card-title\"> \r\n                        <span class=\"currency\" [ngClass]=\"{'arabicH4-center':lang === 'arb' || lang === 'som' }\">$</span>39<span class=\"period\">/ {{ pricingContent.gold.pricing }} </span>\r\n                    </h6>\r\n                    <ul class=\"list-group custom-align-left\">\r\n                        <li class=\"list-group-item\" *ngFor=\"let item of pricingContent.gold.features\" [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\"><i class=\"fa fa-check\"></i> {{ item }} </li>\r\n                    </ul>\r\n                    <a href=\"#\" class=\"btn\">{{ pricingContent.gold.button }}</a>\r\n                </div>\r\n                </div>\r\n            </div>\r\n        \r\n            </div>\r\n        </div>\r\n\r\n    </section>\r\n\r\n    <!-- #pricing -->\r\n\r\n    <!--==========================\r\n    Frequently Asked Questions Section\r\n    ============================-->\r\n\r\n    <section id=\"faq\">\r\n        <div class=\"container\">\r\n            <header class=\"section-header\">\r\n            <h3 [ngClass]=\"{'arabicH3': lang ==='som' || lang ==='arb'}\"> {{ faqContent.heading }} </h3>\r\n            <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\" > {{ faqContent.content }} </p>\r\n            </header>\r\n\r\n            <ul id=\"faq-list\" class=\"wow fadeInUp\">\r\n                <li *ngFor=\"let section of faqContent.questions; let i = index \">\r\n                    <a data-toggle=\"collapse\" class=\"collapsed\" href=\"{{ '#faq' + i }} \" [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\" > {{ section.q }} <i class=\"ion-android-remove\"></i></a>\r\n                    <div id=\"{{ 'faq' + i }}\" class=\"collapse\" data-parent=\"#faq-list\">\r\n                    <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\" >\r\n                        {{ section.a }}\r\n                    </p>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </section>\r\n        \r\n    <!-- #faq -->\r\n\r\n    <!--==========================\r\n    Map\r\n    ============================-->\r\n\r\n    <section>\r\n        <div class=\"container\" >\r\n            <header class=\"section-header\">\r\n                <h3 [ngClass]=\"{'arabicH3': lang ==='som' || lang ==='arb'}\"> {{ somGlobalCommunityContent.heading }} </h3>\r\n                </header>\r\n            <img src=\"../../assets/img/telocations.gif\" class=\"img-fluid\">\r\n        </div>\r\n    </section>\r\n\r\n    <!-- #Map -->\r\n\r\n    <!--==========================\r\n    Counter\r\n    ============================-->\r\n\r\n    <section id=\"why-us\" class=\"wow fadeIn\">\r\n        <div class=\"container\">\r\n            <div class=\"row counters\">\r\n                <div class=\"col-lg-3 col-6 text-center\">\r\n                    <span data-toggle=\"counter-up\"  [ngClass]=\"{'arabicH3-center': lang ==='som' || lang ==='arb'}\"> {{ somGlobalCommunityContent.clientsNum }} </span>\r\n                    <p [ngClass]=\"{'arabicP-center': lang === 'arb' || lang === 'som'}\"> {{ somGlobalCommunityContent.clients }} </p>\r\n                </div>\r\n\r\n                <div class=\"col-lg-3 col-6 text-center\">\r\n                    <span data-toggle=\"counter-up\"  [ngClass]=\"{'arabicH3-center': lang ==='som' || lang ==='arb'}\"> {{ somGlobalCommunityContent.projectsNum }} </span>\r\n                    <p [ngClass]=\"{'arabicP-center': lang === 'arb' || lang === 'som'}\"> {{ somGlobalCommunityContent.projects }} </p>\r\n                </div>\r\n\r\n                <div class=\"col-lg-3 col-6 text-center\">\r\n                    <span data-toggle=\"counter-up\"  [ngClass]=\"{'arabicH3-center': lang ==='som' || lang ==='arb'}\"> {{ somGlobalCommunityContent.hoursNum }} </span>\r\n                    <p [ngClass]=\"{'arabicP-center': lang === 'arb' || lang === 'som'}\"> {{ somGlobalCommunityContent.hours }} </p>\r\n                </div>\r\n\r\n                <div class=\"col-lg-3 col-6 text-center\">\r\n                    <span data-toggle=\"counter-up\"  [ngClass]=\"{'arabicH3-center': lang ==='som' || lang ==='arb'}\"> {{ somGlobalCommunityContent.hardworkNum }} </span>\r\n                    <p [ngClass]=\"{'arabicP-center': lang === 'arb' || lang === 'som'}\"> {{ somGlobalCommunityContent.hardwork }} </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n        \r\n    <!-- #Counter -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <!--==========================\r\n    About Us Section\r\n    ============================-->\r\n        <!-- <section id=\"about\">\r\n\r\n        <div class=\"container\">\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-lg-5 col-md-6\">\r\n            <div class=\"about-img\">\r\n                <img src=\"../assets/img/about-img.jpg\" alt=\"\">\r\n            </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-7 col-md-6\">\r\n            <div class=\"about-content\">\r\n                <h2>About Us</h2>\r\n                <h3>Odio sed id eos et laboriosam consequatur eos earum soluta.</h3>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\r\n                <p>Aut dolor id. Sint aliquam consequatur ex ex labore. Et quis qui dolor nulla dolores neque. Aspernatur consectetur omnis numquam quaerat. Sed fugiat nisi. Officiis veniam molestiae. Et vel ut quidem alias veritatis repudiandae ut fugit. Est ut eligendi aspernatur nulla voluptates veniam iusto vel quisquam. Fugit ut maxime incidunt accusantium totam repellendus eum error. Et repudiandae eum iste qui et ut ab alias.</p>\r\n                <ul>\r\n                <li><i class=\"ion-android-checkmark-circle\"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>\r\n                <li><i class=\"ion-android-checkmark-circle\"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>\r\n                <li><i class=\"ion-android-checkmark-circle\"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>\r\n                </ul>\r\n            </div>\r\n            </div>\r\n        </div>\r\n        </div>\r\n\r\n    </section>\r\n        -->\r\n    <!-- #about -->\r\n\r\n\r\n    <!--==========================\r\n        Services Section\r\n    ============================-->\r\n    <!-- <section id=\"services\" class=\"section-bg\">\r\n        <div class=\"container\">\r\n\r\n        <header class=\"section-header\">\r\n            <h3>Services</h3>\r\n            <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>\r\n        </header>\r\n\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-md-6 col-lg-4 wow bounceInUp\" data-wow-duration=\"1.4s\">\r\n            <div class=\"box\">\r\n                <div class=\"icon\" style=\"background: #fceef3;\"><i class=\"ion-ios-analytics-outline\" style=\"color: #ff689b;\"></i></div>\r\n                <h4 class=\"title\"><a href=\"\">Lorem Ipsum</a></h4>\r\n                <p class=\"description\">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>\r\n            </div>\r\n            </div>\r\n            <div class=\"col-md-6 col-lg-4 wow bounceInUp\" data-wow-duration=\"1.4s\">\r\n            <div class=\"box\">\r\n                <div class=\"icon\" style=\"background: #fff0da;\"><i class=\"ion-ios-bookmarks-outline\" style=\"color: #e98e06;\"></i></div>\r\n                <h4 class=\"title\"><a href=\"\">Dolor Sitema</a></h4>\r\n                <p class=\"description\">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>\r\n            </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-4 wow bounceInUp\" data-wow-delay=\"0.1s\" data-wow-duration=\"1.4s\">\r\n            <div class=\"box\">\r\n                <div class=\"icon\" style=\"background: #e6fdfc;\"><i class=\"ion-ios-paper-outline\" style=\"color: #3fcdc7;\"></i></div>\r\n                <h4 class=\"title\"><a href=\"\">Sed ut perspiciatis</a></h4>\r\n                <p class=\"description\">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>\r\n            </div>\r\n            </div>\r\n            <div class=\"col-md-6 col-lg-4 wow bounceInUp\" data-wow-delay=\"0.1s\" data-wow-duration=\"1.4s\">\r\n            <div class=\"box\">\r\n                <div class=\"icon\" style=\"background: #eafde7;\"><i class=\"ion-ios-speedometer-outline\" style=\"color:#41cf2e;\"></i></div>\r\n                <h4 class=\"title\"><a href=\"\">Magni Dolores</a></h4>\r\n                <p class=\"description\">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>\r\n            </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-4 wow bounceInUp\" data-wow-delay=\"0.2s\" data-wow-duration=\"1.4s\">\r\n            <div class=\"box\">\r\n                <div class=\"icon\" style=\"background: #e1eeff;\"><i class=\"ion-ios-world-outline\" style=\"color: #2282ff;\"></i></div>\r\n                <h4 class=\"title\"><a href=\"\">Nemo Enim</a></h4>\r\n                <p class=\"description\">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>\r\n            </div>\r\n            </div>\r\n            <div class=\"col-md-6 col-lg-4 wow bounceInUp\" data-wow-delay=\"0.2s\" data-wow-duration=\"1.4s\">\r\n            <div class=\"box\">\r\n                <div class=\"icon\" style=\"background: #ecebff;\"><i class=\"ion-ios-clock-outline\" style=\"color: #8660fe;\"></i></div>\r\n                <h4 class=\"title\"><a href=\"\">Eiusmod Tempor</a></h4>\r\n                <p class=\"description\">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>\r\n            </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        </div>\r\n    </section> -->\r\n\r\n    <!-- #services -->\r\n\r\n    <!--==========================\r\n        Why Us Section\r\n    ============================-->\r\n    <!-- <section id=\"why-us\" class=\"wow fadeIn\">\r\n        <div class=\"container-fluid\">\r\n        \r\n        <header class=\"section-header\">\r\n            <h3>Why choose us?</h3>\r\n            <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>\r\n        </header>\r\n\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-lg-6\">\r\n            <div class=\"why-us-img\">\r\n                <img src=\"../assets/img/why-us.jpg\" alt=\"\" class=\"img-fluid\">\r\n            </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-6\">\r\n            <div class=\"why-us-content\">\r\n                <p>Molestiae omnis numquam corrupti omnis itaque. Voluptatum quidem impedit. Odio dolorum exercitationem est error omnis repudiandae ad dolorum sit.</p>\r\n                <p>\r\n                Explicabo repellendus quia labore. Non optio quo ea ut ratione et quaerat. Porro facilis deleniti porro consequatur\r\n                et temporibus. Labore est odio.\r\n\r\n                Odio omnis saepe qui. Veniam eaque ipsum. Ea quia voluptatum quis explicabo sed nihil repellat..\r\n                </p>\r\n\r\n                <div class=\"features wow bounceInUp clearfix\">\r\n                <i class=\"fa fa-diamond\" style=\"color: #f058dc;\"></i>\r\n                <h4>Corporis dolorem</h4>\r\n                <p>Commodi quia voluptatum. Est cupiditate voluptas quaerat officiis ex alias dignissimos et ipsum. Soluta at enim modi ut incidunt dolor et.</p>\r\n                </div>\r\n\r\n                <div class=\"features wow bounceInUp clearfix\">\r\n                <i class=\"fa fa-object-group\" style=\"color: #ffb774;\"></i>\r\n                <h4>Eum ut aspernatur</h4>\r\n                <p>Molestias eius rerum iusto voluptas et ab cupiditate aut enim. Assumenda animi occaecati. Quo dolore fuga quasi autem aliquid ipsum odit. Perferendis doloremque iure nulla aut.</p>\r\n                </div>\r\n                \r\n                <div class=\"features wow bounceInUp clearfix\">\r\n                <i class=\"fa fa-language\" style=\"color: #589af1;\"></i>\r\n                <h4>Voluptates dolores</h4>\r\n                <p>Voluptates nihil et quis omnis et eaque omnis sint aut. Ducimus dolorum aspernatur. Totam dolores ut enim ullam voluptas distinctio aut.</p>\r\n                </div>\r\n                \r\n            </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"container\">\r\n        <div class=\"row counters\">\r\n\r\n            <div class=\"col-lg-3 col-6 text-center\">\r\n            <span data-toggle=\"counter-up\">274</span>\r\n            <p>Clients</p>\r\n            </div>\r\n\r\n            <div class=\"col-lg-3 col-6 text-center\">\r\n            <span data-toggle=\"counter-up\">421</span>\r\n            <p>Projects</p>\r\n            </div>\r\n\r\n            <div class=\"col-lg-3 col-6 text-center\">\r\n            <span data-toggle=\"counter-up\">1,364</span>\r\n            <p>Hours Of Support</p>\r\n            </div>\r\n\r\n            <div class=\"col-lg-3 col-6 text-center\">\r\n            <span data-toggle=\"counter-up\">18</span>\r\n            <p>Hard Workers</p>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        </div>\r\n    </section> -->\r\n\r\n    <!--==========================\r\n        Call To Action Section\r\n    ============================-->\r\n    <!-- <section id=\"call-to-action\" class=\"wow fadeInUp\">\r\n        <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-9 text-center text-lg-left\">\r\n            <h3 class=\"cta-title\">Call To Action</h3>\r\n            <p class=\"cta-text\"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n            </div>\r\n            <div class=\"col-lg-3 cta-btn-container text-center\">\r\n            <a class=\"cta-btn align-middle\" href=\"#\">Call To Action</a>\r\n            </div>\r\n        </div>\r\n\r\n        </div>\r\n    </section> -->\r\n\r\n    <!-- #call-to-action -->\r\n\r\n            \r\n\r\n    <!--==========================\r\n    Portfolio Section\r\n    ============================-->\r\n    <!-- <section id=\"portfolio\" class=\"section-bg\">\r\n    <div class=\"container\">\r\n\r\n        <header class=\"section-header\">\r\n        <h3 class=\"section-title\">Our Portfolio</h3>\r\n        </header>\r\n\r\n        <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <ul id=\"portfolio-flters\">\r\n            <li data-filter=\"*\" class=\"filter-active\">All</li>\r\n            <li data-filter=\".filter-app\">App</li>\r\n            <li data-filter=\".filter-card\">Card</li>\r\n            <li data-filter=\".filter-web\">Web</li>\r\n            </ul>\r\n        </div>\r\n        </div>\r\n\r\n        <div class=\"row portfolio-container\">\r\n\r\n        <div class=\"col-lg-4 col-md-6 portfolio-item filter-app\">\r\n            <div class=\"portfolio-wrap\">\r\n            <img src=\"img/portfolio/app1.jpg\" class=\"img-fluid\" alt=\"\">\r\n            <div class=\"portfolio-info\">\r\n                <h4><a href=\"#\">App 1</a></h4>\r\n                <p>App</p>\r\n                <div>\r\n                <a href=\"img/portfolio/app1.jpg\" data-lightbox=\"portfolio\" data-title=\"App 1\" class=\"link-preview\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\r\n                <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-6 portfolio-item filter-web\" data-wow-delay=\"0.1s\">\r\n            <div class=\"portfolio-wrap\">\r\n            <img src=\"img/portfolio/web3.jpg\" class=\"img-fluid\" alt=\"\">\r\n            <div class=\"portfolio-info\">\r\n                <h4><a href=\"#\">Web 3</a></h4>\r\n                <p>Web</p>\r\n                <div>\r\n                <a href=\"img/portfolio/web3.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Web 3\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\r\n                <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-6 portfolio-item filter-app\" data-wow-delay=\"0.2s\">\r\n            <div class=\"portfolio-wrap\">\r\n            <img src=\"img/portfolio/app2.jpg\" class=\"img-fluid\" alt=\"\">\r\n            <div class=\"portfolio-info\">\r\n                <h4><a href=\"#\">App 2</a></h4>\r\n                <p>App</p>\r\n                <div>\r\n                <a href=\"img/portfolio/app2.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"App 2\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\r\n                <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-6 portfolio-item filter-card\">\r\n            <div class=\"portfolio-wrap\">\r\n            <img src=\"img/portfolio/card2.jpg\" class=\"img-fluid\" alt=\"\">\r\n            <div class=\"portfolio-info\">\r\n                <h4><a href=\"#\">Card 2</a></h4>\r\n                <p>Card</p>\r\n                <div>\r\n                <a href=\"img/portfolio/card2.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Card 2\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\r\n                <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-6 portfolio-item filter-web\" data-wow-delay=\"0.1s\">\r\n            <div class=\"portfolio-wrap\">\r\n            <img src=\"img/portfolio/web2.jpg\" class=\"img-fluid\" alt=\"\">\r\n            <div class=\"portfolio-info\">\r\n                <h4><a href=\"#\">Web 2</a></h4>\r\n                <p>Web</p>\r\n                <div>\r\n                <a href=\"img/portfolio/web2.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Web 2\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\r\n                <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-6 portfolio-item filter-app\" data-wow-delay=\"0.2s\">\r\n            <div class=\"portfolio-wrap\">\r\n            <img src=\"img/portfolio/app3.jpg\" class=\"img-fluid\" alt=\"\">\r\n            <div class=\"portfolio-info\">\r\n                <h4><a href=\"#\">App 3</a></h4>\r\n                <p>App</p>\r\n                <div>\r\n                <a href=\"img/portfolio/app3.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"App 3\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\r\n                <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-6 portfolio-item filter-card\">\r\n            <div class=\"portfolio-wrap\">\r\n            <img src=\"img/portfolio/card1.jpg\" class=\"img-fluid\" alt=\"\">\r\n            <div class=\"portfolio-info\">\r\n                <h4><a href=\"#\">Card 1</a></h4>\r\n                <p>Card</p>\r\n                <div>\r\n                <a href=\"img/portfolio/card1.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Card 1\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\r\n                <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-6 portfolio-item filter-card\" data-wow-delay=\"0.1s\">\r\n            <div class=\"portfolio-wrap\">\r\n            <img src=\"img/portfolio/card3.jpg\" class=\"img-fluid\" alt=\"\">\r\n            <div class=\"portfolio-info\">\r\n                <h4><a href=\"#\">Card 3</a></h4>\r\n                <p>Card</p>\r\n                <div>\r\n                <a href=\"img/portfolio/card3.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Card 3\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\r\n                <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 col-md-6 portfolio-item filter-web\" data-wow-delay=\"0.2s\">\r\n            <div class=\"portfolio-wrap\">\r\n            <img src=\"img/portfolio/web1.jpg\" class=\"img-fluid\" alt=\"\">\r\n            <div class=\"portfolio-info\">\r\n                <h4><a href=\"#\">Web 1</a></h4>\r\n                <p>Web</p>\r\n                <div>\r\n                <a href=\"img/portfolio/web1.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Web 1\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\r\n                <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n    </section> -->\r\n\r\n    <!-- #portfolio -->\r\n\r\n    <!--==========================\r\n    Clients Section\r\n    ============================-->\r\n    <!-- <section id=\"testimonials\">\r\n    <div class=\"container\">\r\n\r\n        <header class=\"section-header\">\r\n        <h3>Testimonials</h3>\r\n        </header>\r\n\r\n        <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-8\">\r\n\r\n            <div class=\"owl-carousel testimonials-carousel wow fadeInUp\">\r\n\r\n            <div class=\"testimonial-item\">\r\n                <img src=\"img/testimonial-1.jpg\" class=\"testimonial-img\" alt=\"\">\r\n                <h3>Saul Goodman</h3>\r\n                <h4>Ceo &amp; Founder</h4>\r\n                <p>\r\n                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.\r\n                </p>\r\n            </div>\r\n\r\n            <div class=\"testimonial-item\">\r\n                <img src=\"img/testimonial-2.jpg\" class=\"testimonial-img\" alt=\"\">\r\n                <h3>Sara Wilsson</h3>\r\n                <h4>Designer</h4>\r\n                <p>\r\n                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.\r\n                </p>\r\n            </div>\r\n\r\n            <div class=\"testimonial-item\">\r\n                <img src=\"img/testimonial-3.jpg\" class=\"testimonial-img\" alt=\"\">\r\n                <h3>Jena Karlis</h3>\r\n                <h4>Store Owner</h4>\r\n                <p>\r\n                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.\r\n                </p>\r\n            </div>\r\n\r\n            <div class=\"testimonial-item\">\r\n                <img src=\"img/testimonial-4.jpg\" class=\"testimonial-img\" alt=\"\">\r\n                <h3>Matt Brandon</h3>\r\n                <h4>Freelancer</h4>\r\n                <p>\r\n                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.\r\n                </p>\r\n            </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n    </section> -->\r\n\r\n    <!-- #testimonials -->\r\n\r\n    <!--==========================\r\n    Team Section\r\n    ============================-->\r\n    <!-- <section id=\"team\" class=\"section-bg\">\r\n    <div class=\"container\">\r\n        <div class=\"section-header\">\r\n        <h3>Team</h3>\r\n        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n\r\n        <div class=\"col-lg-3 col-md-6 wow fadeInUp\">\r\n            <div class=\"member\">\r\n            <img src=\"img/team-1.jpg\" class=\"img-fluid\" alt=\"\">\r\n            <div class=\"member-info\">\r\n                <div class=\"member-info-content\">\r\n                <h4>Walter White</h4>\r\n                <span>Chief Executive Officer</span>\r\n                <div class=\"social\">\r\n                    <a href=\"\"><i class=\"fa fa-twitter\"></i></a>\r\n                    <a href=\"\"><i class=\"fa fa-facebook\"></i></a>\r\n                    <a href=\"\"><i class=\"fa fa-google-plus\"></i></a>\r\n                    <a href=\"\"><i class=\"fa fa-linkedin\"></i></a>\r\n                </div>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-3 col-md-6 wow fadeInUp\" data-wow-delay=\"0.1s\">\r\n            <div class=\"member\">\r\n            <img src=\"img/team-2.jpg\" class=\"img-fluid\" alt=\"\">\r\n            <div class=\"member-info\">\r\n                <div class=\"member-info-content\">\r\n                <h4>Sarah Jhonson</h4>\r\n                <span>Product Manager</span>\r\n                <div class=\"social\">\r\n                    <a href=\"\"><i class=\"fa fa-twitter\"></i></a>\r\n                    <a href=\"\"><i class=\"fa fa-facebook\"></i></a>\r\n                    <a href=\"\"><i class=\"fa fa-google-plus\"></i></a>\r\n                    <a href=\"\"><i class=\"fa fa-linkedin\"></i></a>\r\n                </div>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-3 col-md-6 wow fadeInUp\" data-wow-delay=\"0.2s\">\r\n            <div class=\"member\">\r\n            <img src=\"img/team-3.jpg\" class=\"img-fluid\" alt=\"\">\r\n            <div class=\"member-info\">\r\n                <div class=\"member-info-content\">\r\n                <h4>William Anderson</h4>\r\n                <span>CTO</span>\r\n                <div class=\"social\">\r\n                    <a href=\"\"><i class=\"fa fa-twitter\"></i></a>\r\n                    <a href=\"\"><i class=\"fa fa-facebook\"></i></a>\r\n                    <a href=\"\"><i class=\"fa fa-google-plus\"></i></a>\r\n                    <a href=\"\"><i class=\"fa fa-linkedin\"></i></a>\r\n                </div>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-3 col-md-6 wow fadeInUp\" data-wow-delay=\"0.3s\">\r\n            <div class=\"member\">\r\n            <img src=\"img/team-4.jpg\" class=\"img-fluid\" alt=\"\">\r\n            <div class=\"member-info\">\r\n                <div class=\"member-info-content\">\r\n                <h4>Amanda Jepson</h4>\r\n                <span>Accountant</span>\r\n                <div class=\"social\">\r\n                    <a href=\"\"><i class=\"fa fa-twitter\"></i></a>\r\n                    <a href=\"\"><i class=\"fa fa-facebook\"></i></a>\r\n                    <a href=\"\"><i class=\"fa fa-google-plus\"></i></a>\r\n                    <a href=\"\"><i class=\"fa fa-linkedin\"></i></a>\r\n                </div>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n    </section> -->\r\n\r\n    <!-- #team -->\r\n\r\n    <!--==========================\r\n    Clients Section\r\n    ============================-->\r\n    <!-- <section id=\"clients\" class=\"wow fadeInUp\">\r\n    <div class=\"container\">\r\n\r\n        <header class=\"section-header\">\r\n        <h3>Our Clients</h3>\r\n        </header>\r\n\r\n        <div class=\"owl-carousel clients-carousel\">\r\n        <img src=\"../assets/img/clients/client-1.png\" alt=\"\">\r\n        <img src=\"../assets/img/clients/client-2.png\" alt=\"\">\r\n        <img src=\"../assets/img/clients/client-3.png\" alt=\"\">\r\n        <img src=\"../assets/img/clients/client-4.png\" alt=\"\">\r\n        <img src=\"../assets/img/clients/client-5.png\" alt=\"\">\r\n        <img src=\"../assets/img/clients/client-6.png\" alt=\"\">\r\n        <img src=\"../assets/img/clients/client-7.png\" alt=\"\">\r\n        <img src=\"../assets/img/clients/client-8.png\" alt=\"\">\r\n        </div>\r\n\r\n    </div>\r\n    </section> -->\r\n    <!-- #clients -->\r\n\r\n</main>"

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
/* harmony import */ var _shared_multi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/multi.service */ "./src/app/shared/multi.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _shared_popup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/popup.service */ "./src/app/shared/popup.service.ts");






var HomeComponent = /** @class */ (function () {
    function HomeComponent(http, multi, dialog, popupLang) {
        this.http = http;
        this.multi = multi;
        this.dialog = dialog;
        this.popupLang = popupLang;
        this.country = '';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        /* this.test() */
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
        }
        else if (lang === 'som') {
            this.content = this.multi.homecontent.som;
            this.navMenuActive = this.multi.navMenu.som;
            this.pricingContent = this.multi.pricing.som;
            this.faqContent = this.multi.faq.som;
            this.somGlobalCommunityContent = this.multi.sombankcommunity.som;
        }
        else if (lang === 'arb') {
            this.content = this.multi.homecontent.arb;
            this.navMenuActive = this.multi.navMenu.arb;
            this.pricingContent = this.multi.pricing.arb;
            this.faqContent = this.multi.faq.arb;
            this.somGlobalCommunityContent = this.multi.sombankcommunity.arb;
        }
    };
    /* test(){
        this.http.get('https://ip-api.com/json').subscribe(
            (resp:Response) => {
                let res = resp.json()
                setTimeout(()=>{
                    this.country = res.country
                }, 2000)
            },
            (err) => {
                console.log(err)
            }
        )
    } */
    /*
    function ipLookUp () {
    $.ajax('https://ip-api.com/json')
    .then(
        function success(response) {
            console.log('User\'s Location Data is ', response);
            console.log('User\'s Country', response.country);
        },
    
        function fail(data, status) {
            console.log('Request failed.  Returned status of',
                        status);
        }
    );
    }
    ipLookUp()
    */
    /*    ngOnDestroy(){
           this.subscription.unsubscribe()
       } */
    HomeComponent.prototype.onSubmit = function (f) {
        this.multi.onSubmit(f, this.lang);
        this.popupLang.langForPopup.next(this.lang);
        /* console.log(f.value)
       
        const url = 'http://localhost/src/assets/contactform/email.php';
        const url = 'http://test.skillathontech.com/assets/contactform/email.php';
        this.http.post(url, f.value,
        { headers: new Headers({'Content-Type':'application/json'}) } ).subscribe(
            (res) => {
                console.log(res)
                this.multi.openAppInstallSuccessful()
            }
        ) */
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home-content',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: ["input.ng-invalid.ng-touched{\n        border-bottom: 1px red solid\n    }\n    input[type=number]::-webkit-inner-spin-button, \n    input[type=number]::-webkit-outer-spin-button { \n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        margin: 0; \n    }"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _shared_multi_service__WEBPACK_IMPORTED_MODULE_3__["MultiLangService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _shared_popup_service__WEBPACK_IMPORTED_MODULE_5__["PopupLangService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/mobile-nav/mobile-nav.component.html":
/*!******************************************************!*\
  !*** ./src/app/mobile-nav/mobile-nav.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"mobile-nav d-lg-none\">\r\n    <ul dir=\"auto\">\r\n        <li class=\"drop-down\" [ngClass]=\"{'testxxd': mobilelang ==='som' || mobilelang ==='arb'}\"><a onclick=\"showSubMenu2()\" style=\"color: #fff\" [ngClass]=\"{'arabicNavH': mobilelang ==='som' || mobilelang ==='arb', 'custom-padding-right': mobilelang ==='som' || mobilelang ==='arb'}\" > {{ navMenuActiveMobile.company }} </a>\r\n            <ul id=\"mobileNav2\" style=\"display:none\">\r\n                <li [routerLinkActive]=\"'active'\" [routerLinkActiveOptions]=\"{exact: true}\"><a [ngClass]=\"{ 'arabicSubNav': mobilelang ==='som' || mobilelang ==='arb' }\" [routerLink]=\"['/']\" onclick=\"tet()\"> \r\n                {{ navMenuActiveMobile.home }} </a></li>\r\n                <li [routerLinkActive]=\"'active'\" onclick=\"tet()\"><a [ngClass]=\"{ 'arabicSubNav': mobilelang ==='som' || mobilelang ==='arb' }\" [routerLink]=\"['about-sombank']\"> {{ navMenuActiveMobile.about }} </a></li>\r\n                <li onclick=\"tet()\"><a [routerLink]=\"['']\" (click)=\"openDialog()\" style=\"cursor: pointer\" [ngClass]=\"{ 'arabicSubNav': mobilelang ==='som' || mobilelang ==='arb' }\">{{ navMenuActiveMobile.privacy }} </a></li>\r\n            </ul>\r\n        </li>\r\n        <li class=\"drop-down\" [ngClass]=\"{'testxxd': mobilelang ==='som' || mobilelang ==='arb'}\" [routerLinkActive]=\"'active'\" onclick=\"showSubMenu()\"><a [ngClass]=\"{'arabicNavH': mobilelang ==='som' || mobilelang ==='arb', 'custom-padding-right': mobilelang ==='som' || mobilelang ==='arb'}\"  style=\"color: #fff\"> {{ navMenuActiveMobile.products }} </a>\r\n            <ul id=\"mobileNav\" style=\"display:none\">\r\n                <li [routerLinkActive]=\"'active'\" onclick=\"tet()\"><a [routerLink]=\"['/t-plus-account']\" [ngClass]=\"{ 'arabicSubNav': mobilelang ==='som' || mobilelang ==='arb' }\" > {{ navMenuActiveMobile.tplus }} </a></li>\r\n            </ul>\r\n        </li>\r\n        <li [routerLinkActive]=\"'active'\" onclick=\"tet()\"><a [ngClass]=\"{'arabicNavH': mobilelang ==='som' || mobilelang ==='arb'}\" [routerLink]=\"['/sombank-pricing']\"> {{ navMenuActiveMobile.pricing }} </a></li>\r\n        <li class=\"drop-down\" [ngClass]=\"{'testxxd': mobilelang ==='som' || mobilelang ==='arb'}\" [routerLinkActive]=\"'active'\" onclick=\"showSubMenu1()\"><a style=\"color: #fff\" [ngClass]=\"{'arabicNavH': mobilelang ==='som' || mobilelang ==='arb', 'custom-padding-right': mobilelang ==='som' || mobilelang ==='arb'}\" > {{  navMenuActiveMobile.accounts }} </a>\r\n            <ul id=\"mobileNav1\" style=\"display:none\">\r\n                <li [routerLinkActive]=\"'active'\" onclick=\"tet()\"><a [ngClass]=\"{ 'arabicSubNav': mobilelang ==='som' || mobilelang ==='arb' }\" [routerLink]=\"['/t-plus-account']\"> {{ navMenuActiveMobile.tplus }} </a></li>\r\n                <li [routerLinkActive]=\"'active'\" onclick=\"tet()\"><a [ngClass]=\"{ 'arabicSubNav': mobilelang ==='som' || mobilelang ==='arb' }\" [routerLink]=\"['/sombank-personal-account']\" > {{ navMenuActiveMobile.personal }} </a></li>\r\n                <li [routerLinkActive]=\"'active'\" onclick=\"tet()\"><a [ngClass]=\"{ 'arabicSubNav': mobilelang ==='som' || mobilelang ==='arb' }\" [routerLink]=\"['/sombank-corporate-account']\"> {{ navMenuActiveMobile.business }} </a></li>\r\n            </ul>\r\n        </li>\r\n        <li [routerLinkActive]=\"'active'\" [routerLinkActiveOptions]=\"{exact: true}\" onclick=\"tet()\"><a [ngClass]=\"{'arabicNavH': mobilelang ==='som' || mobilelang ==='arb'}\" [routerLink]=\"['']\"> {{ navMenuActiveMobile.contact }} </a></li>\r\n        <!-- <li>\r\n            <a >\r\n                <select [(ngModel)]=\"mobilelang\" (change)=\"onChangeMobile()\" [ngClass]=\"{'lang': true, 'lang-select-align': mobilelang === 'arb' || mobilelang === 'som'}\">\r\n                    <option value=\"eng\">English</option>\r\n                    <option value=\"arb\">Arabic</option>\r\n                    <option value=\"som\">Somali</option>\r\n                </select>\r\n            </a> \r\n        </li> -->\r\n    </ul>\r\n</nav>"

/***/ }),

/***/ "./src/app/mobile-nav/mobile-nav.component.ts":
/*!****************************************************!*\
  !*** ./src/app/mobile-nav/mobile-nav.component.ts ***!
  \****************************************************/
/*! exports provided: MobileNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileNavComponent", function() { return MobileNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_multi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/multi.service */ "./src/app/shared/multi.service.ts");



var MobileNavComponent = /** @class */ (function () {
    function MobileNavComponent(multi) {
        this.multi = multi;
    }
    MobileNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mobilelang = this.multi.lang;
        this.getContent(this.mobilelang);
        this.multi.tlang.subscribe(function (lang) {
            _this.mobilelang = lang;
            _this.getContent(lang);
        });
    };
    MobileNavComponent.prototype.getContent = function (lang) {
        if (lang === 'eng') {
            this.mobilelang = lang;
            this.navMenuActiveMobile = this.multi.navMenu.eng;
        }
        else if (lang === 'som') {
            this.mobilelang = lang;
            this.navMenuActiveMobile = this.multi.navMenu.som;
        }
        else if (lang === 'arb') {
            this.mobilelang = lang;
            this.navMenuActiveMobile = this.multi.navMenu.arb;
        }
    };
    MobileNavComponent.prototype.openDialog = function () {
        this.multi.openPrivacyPolicy(this.mobilelang);
    };
    MobileNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mobile-nav',
            template: __webpack_require__(/*! ./mobile-nav.component.html */ "./src/app/mobile-nav/mobile-nav.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_multi_service__WEBPACK_IMPORTED_MODULE_2__["MultiLangService"]])
    ], MobileNavComponent);
    return MobileNavComponent;
}());



/***/ }),

/***/ "./src/app/navigation/header-navigation.component.html":
/*!*************************************************************!*\
  !*** ./src/app/navigation/header-navigation.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--==========================\r\n  Header\r\n============================-->\r\n\r\n<header id=\"header\" dir=\"auto\">\r\n    <div id=\"topbar\">\r\n        <div class=\"container\">\r\n                \r\n        <div class=\"social-links\">\r\n            <!-- <a >\r\n                <select [(ngModel)]=\"lang\" (change)=\"onChange()\" [ngClass]=\"{'lang': true}\">\r\n                    <option value=\"eng\">English</option>\r\n                    <option value=\"arb\">Arabic</option>\r\n                    <option value=\"som\">Somali</option>\r\n                </select>\r\n            </a>  -->\r\n            <a href=\"#\" class=\"twitter\"><i class=\"fa fa-twitter\"></i></a>\r\n            <a href=\"#\" class=\"facebook\"><i class=\"fa fa-facebook\"></i></a>\r\n            <a href=\"#\" class=\"linkedin\"><i class=\"fa fa-linkedin\"></i></a>\r\n            <a href=\"#\" class=\"instagram\"><i class=\"fa fa-instagram\"></i></a>\r\n        </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"container\">\r\n\r\n        <div class=\"logo float-left\">\r\n            <!-- Uncomment below if you prefer to use an image logo -->\r\n            <!-- <h1 class=\"text-light\"><a href=\"#intro\" class=\"scrollto\"><span>Rapid</span></a></h1> -->\r\n            <a class=\"scrollto\" href=\"#\"><img src=\"../../assets/img/logo.png\" alt=\"\" width=\"200px\"></a>   \r\n        </div>\r\n            <nav class=\"main-nav\" style=\"float:right; padding-right: 0.8rem\" >\r\n                <a >\r\n                    <select [(ngModel)]=\"lang\" (change)=\"onChange()\" [ngClass]=\"{'lang': true, 'lang-select-align': lang === 'arb' || lang === 'som'}\">\r\n                        <option value=\"eng\">English</option>\r\n                        <option value=\"arb\">Arabic</option>\r\n                        <option value=\"som\">Somali</option>\r\n                    </select>\r\n                </a> \r\n               <!--  <ul style=\"float:left\">\r\n                    <li style=\"clear: left\" [routerLinkActive]=\"'active'\" [routerLinkActiveOptions]=\"{exact: true}\"><a [ngClass]=\"{'arabicNavH': lang==='som' || lang==='arb'}\" [routerLink]=\"['/']\"  > {{ navMenuActive.personal }} </a></li>\r\n                    <li style=\"clear: left\" [routerLinkActive]=\"'active'\" ><a [ngClass]=\"{'arabicNavH': lang==='som' || lang==='arb'}\" [routerLink]=\"['/sombank-for-businesses']\" > {{ navMenuActive.business }} </a></li>\r\n                </ul> -->\r\n            </nav> \r\n        \r\n        <!-- <nav class=\"main-nav float-right d-none d-lg-block\" >\r\n            <a >\r\n                <select [(ngModel)]=\"lang\" (change)=\"onChange()\" [ngClass]=\"{'lang': true, 'lang-select-align': lang === 'arb' || lang === 'som'}\">\r\n                    <option value=\"eng\">English</option>\r\n                    <option value=\"arb\">Arabic</option>\r\n                    <option value=\"som\">Somali</option>\r\n                </select>\r\n            </a>  \r\n        </nav> -->\r\n        \r\n    \r\n        <nav class=\"main-nav float-right d-none d-lg-block\" >\r\n        <ul dir=\"auto\">\r\n            <li class=\"drop-down\" ><a [ngClass]=\"{'arabicNavH': lang==='som' || lang==='arb'}\" > {{ navMenuActive.company }} </a>\r\n                <ul>\r\n                    <li [routerLinkActive]=\"'active'\" [routerLinkActiveOptions]=\"{exact: true}\"><a [ngClass]=\"{ 'arabicSubNav': lang==='som' || lang==='arb' }\" [routerLink]=\"['./']\"> {{ navMenuActive.home }} </a></li>\r\n                    <li [routerLinkActive]=\"'active'\"><a [ngClass]=\"{ 'arabicSubNav': lang==='som' || lang==='arb' }\" [routerLink]=\"['about-sombank']\"> {{ navMenuActive.about }} </a></li>\r\n                    <li><a (click)=\"openDialog()\" style=\"cursor: pointer\" [ngClass]=\"{ 'arabicSubNav': lang==='som' || lang==='arb' }\">{{ navMenuActive.privacy }} </a></li>\r\n                </ul>\r\n            </li>\r\n            <li class=\"drop-down\" [routerLinkActive]=\"'active'\"><a [ngClass]=\"{'arabicNavH': lang==='som' || lang==='arb'}\" > {{ navMenuActive.products }} </a>\r\n                <ul>\r\n                    <li [routerLinkActive]=\"'active'\"><a [routerLink]=\"['/t-plus-account']\" [ngClass]=\"{ 'arabicSubNav': lang==='som' || lang==='arb' }\" > {{ navMenuActive.tplus }} </a></li>\r\n                </ul>\r\n            </li>\r\n            <li [routerLinkActive]=\"'active'\" ><a [ngClass]=\"{'arabicNavH': lang==='som' || lang==='arb'}\" [routerLink]=\"['/sombank-pricing']\"> {{ navMenuActive.pricing }} </a></li>\r\n            <li class=\"drop-down\" [routerLinkActive]=\"'active'\"><a [ngClass]=\"{'arabicNavH': lang==='som' || lang==='arb'}\" > {{ navMenuActive.accounts }} </a>\r\n                <ul>\r\n                    <li [routerLinkActive]=\"'active'\"><a [ngClass]=\"{ 'arabicSubNav': lang==='som' || lang==='arb' }\" [routerLink]=\"['/t-plus-account']\"> {{ navMenuActive.tplus }} </a></li>\r\n                    <li [routerLinkActive]=\"'active'\"><a [ngClass]=\"{ 'arabicSubNav': lang==='som' || lang==='arb' }\" [routerLink]=\"['/sombank-personal-account']\" > {{ navMenuActive.personal }} </a></li>\r\n                    <!-- <li class=\"drop-down\"><a >Drop Down 2</a>\r\n                    <ul>\r\n                        <li><a >Deep Drop Down 1</a></li>\r\n                        <li><a href=\"#\">Deep Drop Down 2</a></li>\r\n                        <li><a href=\"#\">Deep Drop Down 3</a></li>\r\n                        <li><a href=\"#\">Deep Drop Down 4</a></li>\r\n                        <li><a href=\"#\">Deep Drop Down 5</a></li>\r\n                    </ul>\r\n                    </li> -->\r\n                    <li [routerLinkActive]=\"'active'\"><a [ngClass]=\"{ 'arabicSubNav': lang==='som' || lang==='arb' }\" [routerLink]=\"['/sombank-corporate-account']\"> {{ navMenuActive.business }} </a></li>\r\n                </ul>\r\n            </li>\r\n            \r\n            <li [routerLinkActive]=\"'active'\" [routerLinkActiveOptions]=\"{exact: true}\"><a [ngClass]=\"{'arabicNavH': lang==='som' || lang==='arb'}\" [routerLink]=\"['']\"> {{ navMenuActive.contact }} </a></li>\r\n        </ul>\r\n        </nav><!-- .main-nav -->\r\n       \r\n        <!-- <nav class=\"main-nav float-right d-none d-lg-block\" >\r\n            <ul>\r\n                <li [routerLinkActive]=\"'active'\" [routerLinkActiveOptions]=\"{exact: true}\"><a [ngClass]=\"{'arabicNavH': lang==='som' || lang==='arb'}\" [routerLink]=\"['/']\"  > {{ navMenuActive.personal }} </a></li>\r\n                <li [routerLinkActive]=\"'active'\" ><a [ngClass]=\"{'arabicNavH': lang==='som' || lang==='arb'}\" [routerLink]=\"['/sombank-for-businesses']\" > {{ navMenuActive.business }} </a></li>\r\n            </ul>\r\n        </nav>  -->\r\n\r\n        <!-- <nav class=\"main-nav float-right d-none d-lg-block\" >\r\n            <a >\r\n                <select [(ngModel)]=\"lang\" (change)=\"onChange()\" [ngClass]=\"{'lang': true, 'lang-select-align': lang === 'arb' || lang === 'som'}\">\r\n                    <option value=\"eng\">English</option>\r\n                    <option value=\"arb\">Arabic</option>\r\n                    <option value=\"som\">Somali</option>\r\n                </select>\r\n            </a>  \r\n        </nav> -->\r\n    </div>\r\n</header>\r\n\r\n<!-- #header -->\r\n"

/***/ }),

/***/ "./src/app/navigation/header-navigation.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/navigation/header-navigation.component.ts ***!
  \***********************************************************/
/*! exports provided: HeaderNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderNavigationComponent", function() { return HeaderNavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_multi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/multi.service */ "./src/app/shared/multi.service.ts");



var HeaderNavigationComponent = /** @class */ (function () {
    function HeaderNavigationComponent(multi) {
        this.multi = multi;
        this.lang = 'eng';
    }
    HeaderNavigationComponent.prototype.ngOnInit = function () {
        this.navMenuActive = this.multi.navMenu.eng;
    };
    HeaderNavigationComponent.prototype.onChange = function () {
        if (this.lang === 'eng') {
            this.multi.tlang.next(this.lang);
            this.navMenuActive = this.multi.navMenu.eng;
        }
        else if (this.lang === 'som') {
            this.multi.tlang.next(this.lang);
            this.navMenuActive = this.multi.navMenu.som;
        }
        else if (this.lang === 'arb') {
            this.multi.tlang.next(this.lang);
            this.navMenuActive = this.multi.navMenu.arb;
        }
    };
    HeaderNavigationComponent.prototype.ngDoCheck = function () {
        this.multi.tlang.next(this.lang);
    };
    HeaderNavigationComponent.prototype.openDialog = function () {
        this.multi.openPrivacyPolicy(this.lang);
    };
    HeaderNavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'header-navigation',
            template: __webpack_require__(/*! ./header-navigation.component.html */ "./src/app/navigation/header-navigation.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_multi_service__WEBPACK_IMPORTED_MODULE_2__["MultiLangService"]])
    ], HeaderNavigationComponent);
    return HeaderNavigationComponent;
}());



/***/ }),

/***/ "./src/app/personal-account/personal-account.component.html":
/*!******************************************************************!*\
  !*** ./src/app/personal-account/personal-account.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--==========================\r\nIntro Section\r\n============================-->\r\n\r\n<section id=\"intro\" class=\"clearfix\" style=\"background-image:url(../assets/img/bg.png)\">\r\n    <div class=\"container d-flex h-100\">\r\n        <div class=\"row justify-content-center align-self-center extra-space\">\r\n        \r\n        <div class=\"col-md-6 intro-info order-md-first order-last align-self-center\">\r\n            <h2 [ngClass]=\"{'arabicSH': lang==='som' || lang==='arb'}\">{{ content.heading1 }}<br> <span>{{ content.heading2 }}</span><br> {{ content.heading3 }}</h2>\r\n            \r\n            <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\r\n                <div >\r\n                    <div class=\"form-row justify-content-center\">\r\n                        <div class=\"col-9\">\r\n                            <input type=\"email\" class=\"form-control custom-remove-border\" [ngClass]=\"{'custom-form-control':lang==='som' || lang==='arb'}\" maxlength=\"50\" placeholder=\"email@test.com\" name=\"email\" required email ngModel #email=\"ngModel\">\r\n                        </div>\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"form-row justify-content-center\">\r\n                        <div class=\"col-3\">\r\n                            <select class=\"custom-select mr-sm-2 custom-remove-border\" name=\"ext\" [ngModel]=\"'+252'\" required #ext=\"ngModel\">\r\n                                <option value=\"+91\">+91</option>\r\n                                <option value=\"+252\">+252</option>\r\n                                <option value=\"+1\">+1</option> \r\n                                <option value=\"+6\">+6</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <input type=\"number\" class=\"form-control custom-remove-border\" [ngClass]=\"{'custom-form-control':lang==='som' || lang==='arb'}\" placeholder=\"Mobile Number\" name=\"cell\" required ngModel #cell=\"ngModel\">\r\n                        </div>\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"form-row justify-content-center\">\r\n                        <div class=\"col-6\">\r\n                    <button type=\"submit\" [ngClass]=\"{'arabicH4-center': lang ==='som' || lang ==='arb'}\" class=\"btn btn-primary form-control\" [disabled]=\"f.invalid\"> {{ content.button }} </button>\r\n                    </div></div>\r\n                </div>\r\n            </form>               \r\n        </div>\r\n    \r\n        <div class=\"col-md-6 intro-info order-md-last order-first\">\r\n            <div class=\"row justify-content-center\">\r\n                <img src=\"../../assets/img/slider-t-plus-anim.gif\" alt=\"\" class=\"custom-img-fluid img-fluid\">\r\n            </div>\r\n        </div>\r\n\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<!-- #intro -->\r\n\r\n<main id=\"main\">\r\n\r\n<!--==========================\r\n    Features Section\r\n============================-->\r\n\r\n<section id=\"features\">\r\n    <div class=\"container-fluid\">\r\n\r\n        <div class=\"row feature-item\">\r\n            <div class=\"col-lg-6 wow fadeInUp pt-5 pt-lg-0 custom-center-align extra-padding-l-r\">\r\n                <h3 [ngClass]=\"{'arabicH4':lang === 'arb' || lang === 'som' }\"> {{ content.section1.heading }} </h3>\r\n                <p [ngClass]=\"{'arabicP':lang === 'arb' || lang === 'som' }\">\r\n                    {{ content.section1.content }}\r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-6 wow fadeInUp\">\r\n                <div class=\"row justify-content-center\">\r\n                    <img src=\"https://assets.revolut.com/media/business/step1-9.png\" class=\"custom-img-fluid-business img-fluid\" alt=\"\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row feature-item extra-space\">\r\n            <div class=\"col-lg-6 wow fadeInUp pt-5 pt-lg-0 custom-center-align extra-padding-l-r\">\r\n                <h3 [ngClass]=\"{'arabicH4':lang === 'arb' || lang === 'som' }\"> {{ content.section2.heading }} </h3>\r\n                <p [ngClass]=\"{'arabicP':lang === 'arb' || lang === 'som' }\">\r\n                    {{ content.section2.content }}\r\n                </p>\r\n            </div>\r\n\r\n            <div class=\"col-lg-6 wow fadeInUp\">\r\n                <div class=\"row justify-content-center\">\r\n                    <img src=\"https://assets.revolut.com/media/business/step2-9.png\" class=\"custom-img-fluid-business img-fluid\" alt=\"\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row feature-item extra-space\">\r\n            <div class=\"col-lg-6 wow fadeInUp pt-5 pt-lg-0 custom-center-align extra-padding-l-r\">\r\n                <h3 [ngClass]=\"{'arabicH4':lang === 'arb' || lang === 'som' }\" > {{ content.section3.heading }} </h3>\r\n                <p [ngClass]=\"{'arabicP':lang === 'arb' || lang === 'som' }\">\r\n                        {{ content.section3.content }} \r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-6 wow fadeInUp\">\r\n                <div class=\"row justify-content-center\">\r\n                    <img src=\"https://assets.revolut.com/media/business/step3-9.png\" class=\"custom-img-fluid-business img-fluid\" alt=\"\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row feature-item extra-space\">\r\n            <div class=\"col-lg-6 wow fadeInUp pt-5 pt-lg-0 custom-center-align extra-padding-l-r\">\r\n                <h3 [ngClass]=\"{'arabicH4':lang === 'arb' || lang === 'som' }\"> {{ content.section4.heading }} </h3>\r\n                <p [ngClass]=\"{'arabicP':lang === 'arb' || lang === 'som' }\">\r\n                        {{ content.section4.content }} \r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-6 wow fadeInUp\">\r\n                <div class=\"row justify-content-center\">\r\n                        <img src=\"https://assets.revolut.com/media/business/step3-9.png\" class=\"custom-img-fluid-business img-fluid\" alt=\"\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</section>\r\n        \r\n<!-- #features -->\r\n\r\n</main>"

/***/ }),

/***/ "./src/app/personal-account/personal-account.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/personal-account/personal-account.component.ts ***!
  \****************************************************************/
/*! exports provided: PersonalAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalAccountComponent", function() { return PersonalAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_multi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/multi.service */ "./src/app/shared/multi.service.ts");



var PersonalAccountComponent = /** @class */ (function () {
    function PersonalAccountComponent(multi) {
        this.multi = multi;
    }
    PersonalAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lang = this.multi.lang;
        this.getContent(this.lang);
        this.multi.tlang.subscribe(function (lang) {
            _this.lang = lang;
            _this.getContent(lang);
        });
    };
    PersonalAccountComponent.prototype.getContent = function (lang) {
        if (lang === 'eng') {
            this.content = this.multi.personalPageContent.eng;
        }
        else if (lang === 'som') {
            this.content = this.multi.personalPageContent.som;
        }
        else if (lang === 'arb') {
            this.content = this.multi.personalPageContent.arb;
        }
    };
    PersonalAccountComponent.prototype.onSubmit = function (f) {
        this.multi.onSubmit(f, this.lang);
    };
    PersonalAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'personal',
            template: __webpack_require__(/*! ./personal-account.component.html */ "./src/app/personal-account/personal-account.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_multi_service__WEBPACK_IMPORTED_MODULE_2__["MultiLangService"]])
    ], PersonalAccountComponent);
    return PersonalAccountComponent;
}());



/***/ }),

/***/ "./src/app/popup/popup.component.html":
/*!********************************************!*\
  !*** ./src/app/popup/popup.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h2 mat-dialog-title>Install Angular</h2>\r\n<mat-dialog-content class=\"mat-typography\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 col-lg-6 col-lx-6\">\r\n            <p>\r\n                Notice also CourseDialogComponent, this component will be the body of our custom dialog.\r\n                In order for the component to be usable as a dialog body, we need to declare it as an entryComponent as well, otherwise, we will get the following error while opening the dialog:\r\n            </p>\r\n        </div>\r\n        <div class=\"col-md-6 col-lg-6 col-lx-6\">\r\n            <p>\r\n                Notice also CourseDialogComponent, this component will be the body of our custom dialog.\r\n                In order for the component to be usable as a dialog body, we need to declare it as an entryComponent as well, otherwise, we will get the following error while opening the dialog:\r\n            </p>\r\n        </div>\r\n    </div>\r\n</mat-dialog-content>\r\n<mat-dialog-actions align=\"end\">\r\n  <button mat-button mat-dialog-close>Cancel</button>\r\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Install</button>\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "./src/app/popup/popup.component.ts":
/*!******************************************!*\
  !*** ./src/app/popup/popup.component.ts ***!
  \******************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");



var PopupComponent = /** @class */ (function () {
    function PopupComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    PopupComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    PopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'popup',
            template: __webpack_require__(/*! ./popup.component.html */ "./src/app/popup/popup.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], PopupComponent);
    return PopupComponent;
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

/***/ "./src/app/privacy/privacy.component.html":
/*!************************************************!*\
  !*** ./src/app/privacy/privacy.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title [ngClass]=\"{'arabicH4':lang === 'arb' || lang === 'som' }\"> {{ content.mainHead }} </h2>\r\n<mat-dialog-content class=\"mat-typography\">\r\n  <h3 [ngClass]=\"{'arabicH6':lang === 'arb' || lang === 'som' }\"> {{ content.heading1 }} </h3>\r\n  <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\"> {{ content.content1 }} </p>\r\n\r\n  <h3 [ngClass]=\"{'arabicH6':lang === 'arb' || lang === 'som' }\"> {{ content.heading2 }} </h3>\r\n  <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\"> {{ content.content2a }} </p>\r\n  <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\"> {{ content.content2b }} </p>\r\n  <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\"> {{ content.content2c }} </p>\r\n\r\n  <h3 [ngClass]=\"{'arabicH6':lang === 'arb' || lang === 'som' }\"> {{ content.heading3 }} </h3>\r\n  <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\"> {{ content.content3a }} </p>\r\n  <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\"> {{ content.content3b }} </p>\r\n  <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\"> {{ content.content3c }} </p>\r\n  <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\"> {{ content.content3d }} </p>\r\n  <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\"> {{ content.content3e }} </p>\r\n\r\n  <h3 [ngClass]=\"{'arabicH6':lang === 'arb' || lang === 'som' }\"> {{ content.heading4 }} </h3>\r\n  <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\"> {{ content.content4a }} </p>\r\n  <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\"> {{ content.content4b }} </p>\r\n  <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\"> {{ content.content4c }} </p>\r\n  \r\n  <h3 [ngClass]=\"{'arabicH6':lang === 'arb' || lang === 'som' }\"> {{ content.heading5 }} </h3>\r\n  <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\"> {{ content.content5 }} </p>\r\n\r\n  <h3 [ngClass]=\"{'arabicH6':lang === 'arb' || lang === 'som' }\"> {{ content.heading6 }} </h3>\r\n  <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\"> {{ content.content6 }} </p>\r\n\r\n  <h3 [ngClass]=\"{'arabicH6':lang === 'arb' || lang === 'som' }\"> {{ content.heading7 }} </h3>\r\n  <p [ngClass]=\"{'arabicP': lang === 'arb' || lang === 'som'}\"> {{ content.content7 }} </p>\r\n \r\n\r\n</mat-dialog-content>\r\n<mat-dialog-actions align=\"end\">\r\n  <button mat-button mat-dialog-close class=\"btn btn-primary\">Close</button>\r\n  <!-- <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Install</button> -->\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "./src/app/privacy/privacy.component.ts":
/*!**********************************************!*\
  !*** ./src/app/privacy/privacy.component.ts ***!
  \**********************************************/
/*! exports provided: PrivacyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function() { return PrivacyPolicyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");



var PrivacyPolicyComponent = /** @class */ (function () {
    function PrivacyPolicyComponent(data) {
        this.data = data;
        this.stableContent = {
            eng: {
                mainHead: 'Sombank Data Privacy Policy',
                heading1: 'PRIVACY POLICY', content1: 'Sombank is committed to protecting your privacy. This Statement of Privacy applies to the Sombank Website, services, and governs data collection and usage. By using the Sombank Website and services, you consent to the data practices described in this statement.',
                heading2: 'Collection of Personal Information', content2a: 'Sombank may collect personally identifiable information, such as your e-mail address, name, address or telephone number. Sombank also collects, as part of its service to you, personal information of third parties and/or your employees. Sombank also collects anonymous demographic information, which is not unique to you, such as your ZIP code, age, gender, preferences, interests and favorites.', content2b: 'There is also information about your computer hardware and software that is automatically collected by Sombank. This information can include: IP address, browser type, domain names, access times and referring Website addresses. This information is used by Sombank for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of the Sombank Website.', content2c: 'Sombank is not responsible for the privacy statements or other content on Websites outside of the Sombank and Sombank family of Websites.',
                heading3: 'Use of Personal Information', content3a: 'Sombank collects and uses your personal information to operate the Sombank Website and deliver the services you have requested. Sombank may also use your personally identifiable information to inform you of other products or services available from Sombank and its affiliates. Sombank may also contact you via surveys to conduct research about your opinion of current services or of potential new services that may be offered.', content3b: 'Sombank does not sell, rent or lease its customer lists to third parties. Sombank may, from time to time, contact you on behalf of external business partners about a particular offering that may be of interest to you. In those cases, your unique personally identifiable information (e-mail, name, address, telephone number) is not transferred to the third party. In addition, Sombank may share data with trusted partners to help us perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to Sombank, and they are required to maintain the confidentiality of your information.', content3c: 'Sombank will never disclose any personal data without explicit permission from the customer, except, only if required to do so by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served on Sombank or the site; (b) protect and defend the rights or property of Sombank; and, (c) act under exigent circumstances to protect the personal safety of users of Sombank or the public.', content3d: 'Sombank does not use or disclose sensitive personal information, such as race, religion, or political affiliations, without your explicit consent.', content3e: 'Sombank keeps track of the Websites and pages our customers visit within Sombank, in order to maintain recently used pages or reports and to offer such customized services to its Users.',
                heading4: 'Use of Cookies',
                content4a: 'The Sombank Website may use “cookies” to help you personalize your online experience. A cookie is a text file that is placed on your hard disk by a Web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you.', content4b: 'One of the primary purposes of cookies is to provide a convenience feature to save you time. The purpose of a cookie is to tell the Web server that you have returned to a specific page. For example, if you personalize Sombank pages, or register with Sombank site or services, a cookie helps Sombank to recall your specific information on subsequent visits. This simplifies the process of recording your personal information, such as billing addresses, shipping addresses, and so on. When you return to the same Sombank Website, the information you previously provided can be retrieved, so you can easily use the Sombank features that you customized.', content4c: 'You have the ability to accept or decline cookies. Most Web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. If you choose to decline cookies, you may not be able to fully experience the interactive features of the Sombank services or Websites you visit.',
                heading5: 'Security of Personal Information', content5: 'Sombank secures your personal information from unauthorized access, use or disclosure. Sombank secures the personally identifiable information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use or disclosure. When personal information (such as a social security number or other personally identifiable information) is transmitted to other Websites, it is protected through the use of encryption, such as the Secure Socket Layer (SSL) protocol.',
                heading6: 'Changes to this Statement',
                content6: 'Sombank will occasionally update this Privacy Policy to reflect company and customer feedback. Sombank encourages you to periodically review this Privacy Policy to be informed of how Sombank is protecting your information.',
                heading7: 'Contact Information',
                content7: 'Sombank welcomes your comments regarding this Privacy Policy. If you believe that Sombank has not adhered to this Statement, please contact Sombank. We will use reasonable efforts to promptly determine and remedy the problem.'
            },
            som: {
                mainHead: 'سياسة خصوصية بيانات Sombank',
                heading1: 'سياسة خاصة', content1: 'تلتزم شركة Sombank بحماية خصوصيتك. ينطبق بيان الخصوصية هذا على موقع Sombank الإلكتروني ، والخدمات ، ويحكم جمع البيانات واستخدامها. باستخدام موقع Sombank وخدماته ، فأنت توافق على ممارسات البيانات الموضحة في هذا البيان.',
                heading2: 'جمع المعلومات الشخصية', content2a: 'قد يقوم Sombank بجمع معلومات التعريف الشخصية ، مثل عنوان البريد الإلكتروني أو الاسم أو العنوان أو رقم الهاتف. تجمع Sombank أيضًا ، كجزء من خدمتها لك ، المعلومات الشخصية الخاصة بالأطراف الثالثة و / أو موظفيك. يجمع Sombank أيضًا معلومات ديموغرافية مجهولة ، وهي ليست فريدة بالنسبة لك ، مثل الرمز البريدي والعمر والجنس والتفضيلات والاهتمامات والاهتمامات.', content2b: 'هناك أيضًا معلومات حول أجهزة الكمبيوتر والبرامج التي يتم جمعها تلقائيًا بواسطة Sombank. يمكن أن تتضمن هذه المعلومات: عنوان IP ونوع المستعرض وأسماء النطاقات وأوقات الوصول وإحالة عناوين مواقع الويب. تستخدم Sombank هذه المعلومات لتشغيل الخدمة ، وللحفاظ على جودة الخدمة ، ولتوفير إحصاءات عامة بشأن استخدام موقع Sombank الإلكتروني.', content2c: 'Sombank ليست مسؤولة عن بيانات الخصوصية أو أي محتوى آخر على المواقع الإلكترونية خارج عائلة Sombank و Sombank للمواقع الإلكترونية.',
                heading3: 'استخدام المعلومات الشخصية', content3a: 'يقوم Sombank بجمع واستخدام معلوماتك الشخصية لتشغيل موقع Sombank الإلكتروني وتقديم الخدمات التي طلبتها. قد تستخدم Sombank أيضًا معلوماتك الشخصية لتعريفك بالمنتجات أو الخدمات الأخرى المتاحة من Sombank والشركات التابعة لها. قد يتصل Sombank بك أيضًا عبر استطلاعات لإجراء بحث حول رأيك في الخدمات الحالية أو الخدمات الجديدة المحتملة التي قد يتم تقديمها.', content3b: 'Sombank لا تبيع أو تؤجر أو تؤجر قوائم عملائها إلى أطراف ثالثة. يجوز لشركة Sombank ، من وقت لآخر ، الاتصال بك نيابة عن شركاء الأعمال الخارجيين بشأن عرض معين قد يكون ذا أهمية لك. في هذه الحالات ، لا يتم نقل معلوماتك الشخصية الفريدة (مثل البريد الإلكتروني والاسم والعنوان ورقم الهاتف) إلى الطرف الثالث. بالإضافة إلى ذلك ، قد تقوم Sombank بمشاركة البيانات مع شركاء موثوق بهم لمساعدتنا في إجراء التحليل الإحصائي أو إرسال بريد إلكتروني أو بريد بريدي أو تقديم دعم العملاء أو الترتيب لعمليات التسليم. يحظر على جميع هذه الأطراف الثالثة استخدام معلوماتك الشخصية باستثناء تقديم هذه الخدمات إلى Sombank ، ويجب عليها الحفاظ على سرية معلوماتك.', content3c: 'Sombank لا تستخدم أو تكشف المعلومات الشخصية الحساسة ، مثل العرق أو الدين أو الانتماءات السياسية ، دون موافقتك الصريحة.', content3d: 'تقوم Sombank بتتبع المواقع والصفحات التي يزورها عملاؤنا داخل Sombank ، من أجل الحفاظ على الصفحات أو التقارير المستخدمة مؤخرًا ولتقديم مثل هذه الخدمات المخصصة للمستخدمين.', heading4: 'استخدام ملفات تعريف الارتباط', content4a: 'قد يستخدم موقع Sombank "ملفات تعريف الارتباط" لمساعدتك على تخصيص تجربتك على الإنترنت. ملف تعريف الارتباط هو ملف نصي يتم وضعه على القرص الثابت الخاص بك بواسطة خادم صفحة ويب. لا يمكن استخدام ملفات تعريف الارتباط لتشغيل البرامج أو تسليم الفيروسات إلى جهاز الكمبيوتر الخاص بك. يتم تعيين ملفات تعريف الارتباط بشكل فريد لك ، ولا يمكن قراءتها إلا من خلال خادم ويب في المجال الذي أصدر ملف تعريف الارتباط لك.', content4b: 'أحد الأغراض الرئيسية لملفات تعريف الارتباط هو توفير ميزة ملائمة لتوفير الوقت. الغرض من ملف تعريف الارتباط هو إخبار خادم الويب أنك عدت إلى صفحة معينة. على سبيل المثال ، إذا قمت بتخصيص صفحات Sombank ، أو قمت بالتسجيل في موقع Sombank أو خدماته ، فإن ملف تعريف الارتباط يساعد Sombank على تذكر معلوماتك المحددة في الزيارات اللاحقة. يعمل ذلك على تبسيط عملية تسجيل معلوماتك الشخصية ، مثل عناوين الفواتير وعناوين الشحن وما إلى ذلك. عند الرجوع إلى موقع Sombank نفسه ، يمكن استرداد المعلومات التي قدمتها سابقًا ، بحيث يمكنك بسهولة استخدام ميزات Sombank التي قمت بتخصيصها.', content4c: 'لديك القدرة على قبول أو رفض ملفات تعريف الارتباط. تقبل معظم متصفحات الويب ملفات تعريف الارتباط تلقائيًا ، لكن يمكنك عادةً تعديل إعداد المستعرض لرفض ملفات تعريف الارتباط إذا كنت تفضل ذلك. إذا اخترت رفض ملفات تعريف الارتباط ، فقد لا تتمكن من تجربة الميزات التفاعلية لخدمات Sombank أو مواقع الويب التي تزورها بالكامل.', heading5: 'أمن المعلومات الشخصية', content5: 'Sombank يؤمن معلوماتك الشخصية من الوصول أو الاستخدام أو الكشف غير المصرح به. يقوم Sombank بتأمين المعلومات الشخصية التي تقدمها على خوادم الكمبيوتر في بيئة آمنة ومحكومة ، محمية من الوصول أو الاستخدام أو الكشف غير المصرح به. عند إرسال المعلومات الشخصية (مثل رقم الضمان الاجتماعي أو معلومات التعريف الشخصية الأخرى) إلى مواقع ويب أخرى ، يتم حمايتها من خلال استخدام التشفير ، مثل بروتوكول طبقة مآخذ التوصيل الآمنة (SSL).', heading6: 'التغييرات في هذا البيان', content6: 'تقوم Sombank أحيانًا بتحديث سياسة الخصوصية هذه لتعكس ملاحظات الشركة والعملاء. يشجعك Sombank على مراجعة سياسة الخصوصية هذه بشكل دوري لتكون على علم بكيفية حماية Sombank لمعلوماتك.', heading7: 'معلومات للتواصل', content7: 'ترحب Sombank بتعليقاتك فيما يتعلق بسياسة الخصوصية هذه. إذا كنت تعتقد أن Sombank لم تلتزم بهذا البيان ، فيرجى الاتصال بـ Sombank. سوف نبذل جهودًا معقولة لتحديد المشكلة وحلها على الفور.'
            },
            arb: {
                mainHead: 'سياسة خصوصية بيانات Sombank',
                heading1: 'سياسة خاصة', content1: 'تلتزم شركة Sombank بحماية خصوصيتك. ينطبق بيان الخصوصية هذا على موقع Sombank الإلكتروني ، والخدمات ، ويحكم جمع البيانات واستخدامها. باستخدام موقع Sombank وخدماته ، فأنت توافق على ممارسات البيانات الموضحة في هذا البيان.',
                heading2: 'جمع المعلومات الشخصية', content2a: 'قد يقوم Sombank بجمع معلومات التعريف الشخصية ، مثل عنوان البريد الإلكتروني أو الاسم أو العنوان أو رقم الهاتف. تجمع Sombank أيضًا ، كجزء من خدمتها لك ، المعلومات الشخصية الخاصة بالأطراف الثالثة و / أو موظفيك. يجمع Sombank أيضًا معلومات ديموغرافية مجهولة ، وهي ليست فريدة بالنسبة لك ، مثل الرمز البريدي والعمر والجنس والتفضيلات والاهتمامات والاهتمامات.', content2b: 'هناك أيضًا معلومات حول أجهزة الكمبيوتر والبرامج التي يتم جمعها تلقائيًا بواسطة Sombank. يمكن أن تتضمن هذه المعلومات: عنوان IP ونوع المستعرض وأسماء النطاقات وأوقات الوصول وإحالة عناوين مواقع الويب. تستخدم Sombank هذه المعلومات لتشغيل الخدمة ، وللحفاظ على جودة الخدمة ، ولتوفير إحصاءات عامة بشأن استخدام موقع Sombank الإلكتروني.', content2c: 'Sombank ليست مسؤولة عن بيانات الخصوصية أو أي محتوى آخر على المواقع الإلكترونية خارج عائلة Sombank و Sombank للمواقع الإلكترونية.',
                heading3: 'استخدام المعلومات الشخصية', content3a: 'يقوم Sombank بجمع واستخدام معلوماتك الشخصية لتشغيل موقع Sombank الإلكتروني وتقديم الخدمات التي طلبتها. قد تستخدم Sombank أيضًا معلوماتك الشخصية لتعريفك بالمنتجات أو الخدمات الأخرى المتاحة من Sombank والشركات التابعة لها. قد يتصل Sombank بك أيضًا عبر استطلاعات لإجراء بحث حول رأيك في الخدمات الحالية أو الخدمات الجديدة المحتملة التي قد يتم تقديمها.', content3b: 'Sombank لا تبيع أو تؤجر أو تؤجر قوائم عملائها إلى أطراف ثالثة. يجوز لشركة Sombank ، من وقت لآخر ، الاتصال بك نيابة عن شركاء الأعمال الخارجيين بشأن عرض معين قد يكون ذا أهمية لك. في هذه الحالات ، لا يتم نقل معلوماتك الشخصية الفريدة (مثل البريد الإلكتروني والاسم والعنوان ورقم الهاتف) إلى الطرف الثالث. بالإضافة إلى ذلك ، قد تقوم Sombank بمشاركة البيانات مع شركاء موثوق بهم لمساعدتنا في إجراء التحليل الإحصائي أو إرسال بريد إلكتروني أو بريد بريدي أو تقديم دعم العملاء أو الترتيب لعمليات التسليم. يحظر على جميع هذه الأطراف الثالثة استخدام معلوماتك الشخصية باستثناء تقديم هذه الخدمات إلى Sombank ، ويجب عليها الحفاظ على سرية معلوماتك.', content3c: 'Sombank لا تستخدم أو تكشف المعلومات الشخصية الحساسة ، مثل العرق أو الدين أو الانتماءات السياسية ، دون موافقتك الصريحة.', content3d: 'تقوم Sombank بتتبع المواقع والصفحات التي يزورها عملاؤنا داخل Sombank ، من أجل الحفاظ على الصفحات أو التقارير المستخدمة مؤخرًا ولتقديم مثل هذه الخدمات المخصصة للمستخدمين.', heading4: 'استخدام ملفات تعريف الارتباط', content4a: 'قد يستخدم موقع Sombank "ملفات تعريف الارتباط" لمساعدتك على تخصيص تجربتك على الإنترنت. ملف تعريف الارتباط هو ملف نصي يتم وضعه على القرص الثابت الخاص بك بواسطة خادم صفحة ويب. لا يمكن استخدام ملفات تعريف الارتباط لتشغيل البرامج أو تسليم الفيروسات إلى جهاز الكمبيوتر الخاص بك. يتم تعيين ملفات تعريف الارتباط بشكل فريد لك ، ولا يمكن قراءتها إلا من خلال خادم ويب في المجال الذي أصدر ملف تعريف الارتباط لك.', content4b: 'أحد الأغراض الرئيسية لملفات تعريف الارتباط هو توفير ميزة ملائمة لتوفير الوقت. الغرض من ملف تعريف الارتباط هو إخبار خادم الويب أنك عدت إلى صفحة معينة. على سبيل المثال ، إذا قمت بتخصيص صفحات Sombank ، أو قمت بالتسجيل في موقع Sombank أو خدماته ، فإن ملف تعريف الارتباط يساعد Sombank على تذكر معلوماتك المحددة في الزيارات اللاحقة. يعمل ذلك على تبسيط عملية تسجيل معلوماتك الشخصية ، مثل عناوين الفواتير وعناوين الشحن وما إلى ذلك. عند الرجوع إلى موقع Sombank نفسه ، يمكن استرداد المعلومات التي قدمتها سابقًا ، بحيث يمكنك بسهولة استخدام ميزات Sombank التي قمت بتخصيصها.', content4c: 'لديك القدرة على قبول أو رفض ملفات تعريف الارتباط. تقبل معظم متصفحات الويب ملفات تعريف الارتباط تلقائيًا ، لكن يمكنك عادةً تعديل إعداد المستعرض لرفض ملفات تعريف الارتباط إذا كنت تفضل ذلك. إذا اخترت رفض ملفات تعريف الارتباط ، فقد لا تتمكن من تجربة الميزات التفاعلية لخدمات Sombank أو مواقع الويب التي تزورها بالكامل.', heading5: 'أمن المعلومات الشخصية', content5: 'Sombank يؤمن معلوماتك الشخصية من الوصول أو الاستخدام أو الكشف غير المصرح به. يقوم Sombank بتأمين المعلومات الشخصية التي تقدمها على خوادم الكمبيوتر في بيئة آمنة ومحكومة ، محمية من الوصول أو الاستخدام أو الكشف غير المصرح به. عند إرسال المعلومات الشخصية (مثل رقم الضمان الاجتماعي أو معلومات التعريف الشخصية الأخرى) إلى مواقع ويب أخرى ، يتم حمايتها من خلال استخدام التشفير ، مثل بروتوكول طبقة مآخذ التوصيل الآمنة (SSL).', heading6: 'التغييرات في هذا البيان', content6: 'تقوم Sombank أحيانًا بتحديث سياسة الخصوصية هذه لتعكس ملاحظات الشركة والعملاء. يشجعك Sombank على مراجعة سياسة الخصوصية هذه بشكل دوري لتكون على علم بكيفية حماية Sombank لمعلوماتك.', heading7: 'معلومات للتواصل', content7: 'ترحب Sombank بتعليقاتك فيما يتعلق بسياسة الخصوصية هذه. إذا كنت تعتقد أن Sombank لم تلتزم بهذا البيان ، فيرجى الاتصال بـ Sombank. سوف نبذل جهودًا معقولة لتحديد المشكلة وحلها على الفور.'
            }
        };
        console.log(data.lang);
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
        if (this.data.lang === 'eng') {
            this.content = this.stableContent.eng;
            this.lang = this.data.lang;
        }
        else if (this.data.lang === 'som') {
            this.content = this.stableContent.som;
            this.lang = this.data.lang;
        }
        else if (this.data.lang === 'arb') {
            this.content = this.stableContent.arb;
            this.lang = this.data.lang;
        }
    };
    PrivacyPolicyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'privacy-policy',
            template: __webpack_require__(/*! ./privacy.component.html */ "./src/app/privacy/privacy.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
}());



/***/ }),

/***/ "./src/app/shared/faqAdd.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/shared/faqAdd.pipe.ts ***!
  \***************************************/
/*! exports provided: FaqAddPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqAddPipe", function() { return FaqAddPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FaqAddPipe = /** @class */ (function () {
    function FaqAddPipe() {
    }
    FaqAddPipe.prototype.transform = function (control) {
        return '#faq' + control;
    };
    FaqAddPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'faqadd'
        })
    ], FaqAddPipe);
    return FaqAddPipe;
}());



/***/ }),

/***/ "./src/app/shared/multi.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/multi.service.ts ***!
  \*****************************************/
/*! exports provided: MultiLangService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiLangService", function() { return MultiLangService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../popup/popup.component */ "./src/app/popup/popup.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../privacy/privacy.component */ "./src/app/privacy/privacy.component.ts");
/* harmony import */ var _app_install_popup_app_install_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-install-popup/app-install-popup.component */ "./src/app/app-install-popup/app-install-popup.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");








var MultiLangService = /** @class */ (function () {
    function MultiLangService(dialog, http) {
        var _this = this;
        this.dialog = dialog;
        this.http = http;
        this.tlang = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.mobiltlang = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.langForPopup = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.lang = 'eng';
        this.navMenu = {
            eng: { company: 'Company', home: 'Home', about: 'About Us', products: 'Products', tplus: 'T-Plus', personal: 'Personal', business: "Business", pricing: 'Pricing', accounts: 'Accounts', contact: 'Contact Us', privacy: 'Privacy Policy' },
            som: { company: 'سرية ', home: 'منزل ', about: 'معلومات عنا ', products: 'منتجات ', tplus: 'T زائد ', personal: 'ذاتي ', business: "تجارة ", pricing: 'التسعير ', accounts: 'محاسبة ', contact: 'اتصل بنا ', privacy: 'سياسة خاصة' },
            arb: { company: 'سرية ', home: 'منزل ', about: 'معلومات عنا ', products: 'منتجات ', tplus: 'T زائد ', personal: 'ذاتي ', business: "تجارة ", pricing: 'التسعير ', accounts: 'محاسبة ', contact: 'اتصل بنا ', privacy: 'سياسة خاصة' }
        };
        this.homecontent = {
            eng: {
                heading: 'Sombank is Coming to', button: 'Get Started',
                section1: { heading: 'Manage your money', subheading1: 'OPEN A CURRENT ACCOUNT IN MINUTES', subheading1Cont: 'Unlike banks, opening an account with us only takes a few minutes, and because we don’t believe in branches, you can set one up directly from your phone.', subheading2: 'BUILT-IN BUDGETING', subheading2Cont: 'We’ll show you exactly where your money is going each month, and even let you set up monthly budgets for things like restaurants and groceries.', subheading3: 'SAVE YOUR SPARE CHANGE', subheading3Cont: 'Round up every card payment to the nearest whole number, and we’ll stash your spare change away and help you save for your goals.', subheading4: 'INSTANT SPENDING NOTIFICATIONS', subheading4Cont: 'We’ll send you a notification the second you make a payment with your card, even before the receipt has finished printing.' },
                section2: { heading: 'Travel with ease', subheading1: 'HEADING 1', subheading1Cont: 'We don’t believe in financial borders, so it’s only fair that we let you spend abroad in over 150 currencies with the interbank exchange rate, with a small 0.5% fee for anything above £5,000 each month. A flat mark-up on weekends and on certain currencies may apply.', subheading2: 'WITHDRAW MONEY ABROAD', subheading2Cont: 'Although ATM withdrawals cost us money, we give you £200 a month in international ATM withdrawals for free. Anything over £200 attracts a small 2% fee to help us cover our costs.', subheading3: 'INSURANCE AT THE TOUCH OF A BUTTON', subheading3Cont: 'From your health to your phone, we’ll make sure you and the things you love are protected worldwide from as little as £1.00 per day. Insurance provided by Revolut Travel Ltd.', subheading4: '', subheading4Cont: '' },
                section3: { heading: 'Send money easily', subheading1: 'TRANSFER MONEY GLOBALLY', subheading1Cont: 'Transfer money abroad in 29 currencies with the interbank exchange rate, with a small 0.5% fee for anything above £5,000 each month. A flat mark-up on weekends and on certain currencies may apply, it’s only fair.', subheading2: 'SEND AND REQUEST MONEY IN SECONDS', subheading2Cont: 'Instantly send and request money from your friends at the touch of a button, and attach notes, images and GIFs to make things a little more interesting.', subheading3: 'SET UP RECURRING PAYMENTS', subheading3Cont: 'Whether you’re paying rent or splitting the bill, set up a recurring payment in seconds and we’ll make sure your money arrives on time.', subheading4: '', subheading4Cont: '' },
                section4: { heading: 'Security - the way you want it', subheading1: 'FREEZE AND UNFREEZE YOUR CARD', subheading1Cont: 'If you lose or misplace your card, freeze it within the app and we’ll have a new one sent out to you. If you find it again, just unfreeze your card from the app.', subheading2: 'CONTROL HOW YOUR CARD WORKS', subheading2Cont: 'Take control over your account and turn off things like contactless, swipe payments, online payments and ATM withdrawals all from within the app.', subheading3: 'LOCATION-BASED SECURITY', subheading3Cont: 'Turn on location-based security and, if your card is used in a different location from where you are, we’ll automatically block any payments and let you know.', subheading4: '', subheading4Cont: '' },
            },
            som: {
                heading: 'سمبنك قادم إلى', button: 'البدء',
                section1: { heading: 'إدارة أموالك', subheading1: 'افتح حساب حالي في دقائق', subheading1Cont: 'على عكس البنوك ، لا يستغرق فتح حساب معنا سوى بضع دقائق ، ولأننا لا نؤمن بالفروع ، يمكنك إنشاء حساب من هاتفك مباشرة.', subheading2: 'بنيت في الميزانية', subheading2Cont: 'سنعرض لك بالضبط أين تذهب أموالك كل شهر ، وحتى نتيح لك إعداد ميزانيات شهرية لأشياء مثل المطاعم ومحلات البقالة.', subheading3: 'وفر التغيير في قطع الغيار الخاصة بك', subheading3Cont: 'قم بتجميع كل دفعة بطاقة إلى أقرب عدد صحيح ، وسنعمل على تغيير التغيير الخاص بك بعيدًا وسنساعدك على توفير أهدافك.', subheading4: 'إشعارات الإنفاق الفوري', subheading4Cont: 'سنرسل إليك إشعارًا في الثانية التي تقوم فيها بالدفع ببطاقة ، حتى قبل انتهاء الإيصال من الطباعة.' },
                section2: { heading: 'السفر بسهولة', subheading1: 'قضاء في الخارج', subheading1Cont: 'نحن لا نؤمن بالحدود المالية ، لذلك من العدل أن نسمح لك بالإنفاق في الخارج بأكثر من 150 عملة باستخدام سعر الصرف بين البنوك ، مع رسم بسيط بنسبة 0.5٪ عن أي شيء يتجاوز 5000 جنيه إسترليني شهريًا. قد يتم تطبيق زيادة ثابتة في عطلات نهاية الأسبوع وعلى بعض العملات.', subheading2: 'سحب الأموال في الخارج', subheading2Cont: 'على الرغم من أن عمليات السحب من ATM تكلفنا أموالًا ، إلا أننا نقدم لك 200 جنيه إسترليني شهريًا في السحوبات الدولية من أجهزة الصراف الآلي مجانًا. أي شيء يزيد عن 200 جنيه إسترليني يستقطب رسمًا صغيرًا بنسبة 2٪ لمساعدتنا في تغطية تكاليفنا.', subheading3: 'التأمين عند لمس زر', subheading3Cont: 'من صحتك إلى هاتفك ، سوف نتأكد من أنك والأشياء التي تحبها محمية في جميع أنحاء العالم من 1.00 جنيه إسترليني في اليوم. التأمين المقدم من شركة Revolut ', subheading4: '', subheading4Cont: '' },
                section3: { heading: 'إرسال المال بسهولة', subheading1: 'نقل الأموال على مستوى العالم', subheading1Cont: 'قم بتحويل الأموال إلى الخارج بـ 29 عملة باستخدام سعر الصرف بين البنوك ، مع رسم صغير بنسبة 0.5٪ عن أي شيء يتجاوز 5000 جنيه إسترليني شهريًا. قد يتم تطبيق زيادة ثابتة في عطلات نهاية الأسبوع وعلى عملات معينة ، إنه أمر عادل فقط.', subheading2: 'إرسال وطلب المال في ثوان', subheading2Cont: 'قم على الفور بإرسال الأموال من أصدقائك وطلبها بلمسة زر واحدة ، وإرفاق الملاحظات والصور وملفات GIF لجعل الأمور أكثر إثارة للاهتمام.', subheading3: 'إعداد المدفوعات الجارية', subheading3Cont: 'سواء كنت تدفع الإيجار أو تقسيم الفاتورة ، قم بإعداد دفعة متكررة في ثوانٍ وسنتأكد من وصول أموالك في الوقت المحدد.', subheading4: '', subheading4Cont: '' },
                section4: { heading: 'الأمن - بالطريقة التي تريدها', subheading1: 'تجمد وتخلل بطاقتك', subheading1Cont: 'إذا فقدت بطاقتك أو أضعتها في مكانها ، فقم بتجميدها داخل التطبيق وسنرسل إليك رسالة جديدة. إذا وجدت ذلك مرةً أخرى ، فما عليك سوى إلغاء تجميد بطاقتك من التطبيق.', subheading2: 'مراقبة كيف تعمل بطاقتك', subheading2Cont: 'تحكم في حسابك وقم بإيقاف تشغيل أشياء مثل عدم الاتصال ، والمدفوعات السريعة ، والمدفوعات عبر الإنترنت ، وسحب أجهزة الصراف الآلي كلها من داخل التطبيق.', subheading3: 'الأمن القائم على الموقع', subheading3Cont: 'قم بتشغيل الأمان المستند إلى الموقع ، وإذا تم استخدام بطاقتك في موقع مختلف عن المكان الذي تتواجد فيه ، فسنقوم تلقائيًا بحظر أي مدفوعات ونعلمك بذلك.', subheading4: '', subheading4Cont: '' },
            },
            arb: {
                heading: 'سمبنك قادم إلى', button: 'البدء',
                section1: { heading: 'إدارة أموالك', subheading1: 'افتح حساب حالي في دقائق', subheading1Cont: 'على عكس البنوك ، لا يستغرق فتح حساب معنا سوى بضع دقائق ، ولأننا لا نؤمن بالفروع ، يمكنك إنشاء حساب من هاتفك مباشرة.', subheading2: 'بنيت في الميزانية', subheading2Cont: 'سنعرض لك بالضبط أين تذهب أموالك كل شهر ، وحتى نتيح لك إعداد ميزانيات شهرية لأشياء مثل المطاعم ومحلات البقالة.', subheading3: 'وفر التغيير في قطع الغيار الخاصة بك', subheading3Cont: 'قم بتجميع كل دفعة بطاقة إلى أقرب عدد صحيح ، وسنعمل على تغيير التغيير الخاص بك بعيدًا وسنساعدك على توفير أهدافك.', subheading4: 'إشعارات الإنفاق الفوري', subheading4Cont: 'سنرسل إليك إشعارًا في الثانية التي تقوم فيها بالدفع ببطاقة ، حتى قبل انتهاء الإيصال من الطباعة.' },
                section2: { heading: 'السفر بسهولة', subheading1: 'قضاء في الخارج', subheading1Cont: 'نحن لا نؤمن بالحدود المالية ، لذلك من العدل أن نسمح لك بالإنفاق في الخارج بأكثر من 150 عملة باستخدام سعر الصرف بين البنوك ، مع رسم بسيط بنسبة 0.5٪ عن أي شيء يتجاوز 5000 جنيه إسترليني شهريًا. قد يتم تطبيق زيادة ثابتة في عطلات نهاية الأسبوع وعلى بعض العملات.', subheading2: 'سحب الأموال في الخارج', subheading2Cont: 'على الرغم من أن عمليات السحب من ATM تكلفنا أموالًا ، إلا أننا نقدم لك 200 جنيه إسترليني شهريًا في السحوبات الدولية من أجهزة الصراف الآلي مجانًا. أي شيء يزيد عن 200 جنيه إسترليني يستقطب رسمًا صغيرًا بنسبة 2٪ لمساعدتنا في تغطية تكاليفنا.', subheading3: 'التأمين عند لمس زر', subheading3Cont: 'من صحتك إلى هاتفك ، سوف نتأكد من أنك والأشياء التي تحبها محمية في جميع أنحاء العالم من 1.00 جنيه إسترليني في اليوم. التأمين المقدم من شركة Revolut ', subheading4: '', subheading4Cont: '' },
                section3: { heading: 'إرسال المال بسهولة', subheading1: 'نقل الأموال على مستوى العالم', subheading1Cont: 'قم بتحويل الأموال إلى الخارج بـ 29 عملة باستخدام سعر الصرف بين البنوك ، مع رسم صغير بنسبة 0.5٪ عن أي شيء يتجاوز 5000 جنيه إسترليني شهريًا. قد يتم تطبيق زيادة ثابتة في عطلات نهاية الأسبوع وعلى عملات معينة ، إنه أمر عادل فقط.', subheading2: 'إرسال وطلب المال في ثوان', subheading2Cont: 'قم على الفور بإرسال الأموال من أصدقائك وطلبها بلمسة زر واحدة ، وإرفاق الملاحظات والصور وملفات GIF لجعل الأمور أكثر إثارة للاهتمام.', subheading3: 'إعداد المدفوعات الجارية', subheading3Cont: 'سواء كنت تدفع الإيجار أو تقسيم الفاتورة ، قم بإعداد دفعة متكررة في ثوانٍ وسنتأكد من وصول أموالك في الوقت المحدد.', subheading4: '', subheading4Cont: '' },
                section4: { heading: 'الأمن - بالطريقة التي تريدها', subheading1: 'تجمد وتخلل بطاقتك', subheading1Cont: 'إذا فقدت بطاقتك أو أضعتها في مكانها ، فقم بتجميدها داخل التطبيق وسنرسل إليك رسالة جديدة. إذا وجدت ذلك مرةً أخرى ، فما عليك سوى إلغاء تجميد بطاقتك من التطبيق.', subheading2: 'مراقبة كيف تعمل بطاقتك', subheading2Cont: 'تحكم في حسابك وقم بإيقاف تشغيل أشياء مثل عدم الاتصال ، والمدفوعات السريعة ، والمدفوعات عبر الإنترنت ، وسحب أجهزة الصراف الآلي كلها من داخل التطبيق.', subheading3: 'الأمن القائم على الموقع', subheading3Cont: 'قم بتشغيل الأمان المستند إلى الموقع ، وإذا تم استخدام بطاقتك في موقع مختلف عن المكان الذي تتواجد فيه ، فسنقوم تلقائيًا بحظر أي مدفوعات ونعلمك بذلك.', subheading4: '', subheading4Cont: '' },
            },
        };
        this.pricing = {
            eng: {
                heading: 'Pricing', content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque',
                standerd: { heading: 'Standerd', pricing: 'month', button: 'Get Standard', features: ['Free UK current account', ' Free Euro IBAN account', 'Spend in over 150 currencies at the interbank exchange rate', 'No fee exchange in 29 fiat currencies up to £5,000 per month'] },
                premium: { heading: 'Premium', pricing: 'month', button: 'Get Premium', features: ['Free UK current account', ' Free Euro IBAN account', 'Spend in over 150 currencies at the interbank exchange rate', 'No fee exchange in 29 fiat currencies up to £5,000 per month', 'No fee ATM withdrawals up to £400 per month', 'Overseas medical insurance', 'Delayed baggage & delayed flight insurance'] },
                gold: { heading: 'Gold', pricing: 'month', button: 'Get Gold', features: ['Free UK current account', ' Free Euro IBAN account', 'Spend in over 150 currencies at the interbank exchange rate', 'No fee exchange in 29 fiat currencies up to £5,000 per month', 'No fee ATM withdrawals up to £400 per month', 'Overseas medical insurance', 'Delayed baggage & delayed flight insurance', 'Priority customer support'] }
            },
            som: {
                heading: 'التسعير', content: 'ومع ذلك، لأشرح لك كيف أن كل هذه الفكرة الخاطئة من شجب اللذة والألم',
                standerd: { heading: 'معيار', pricing: 'شهر', button: 'الحصول القياسية', features: ['حساب مجاني في المملكة المتحدة', 'حساب IBAN مجاني باليورو', 'تنفق في أكثر من 150 عملة بسعر الصرف بين البنوك', 'لا توجد رسوم مقابل 29 عملة فيات تصل إلى 5000 جنيه إسترليني في الشهر'] },
                premium: { heading: 'علاوة', pricing: 'شهر', button: 'إحصل على الأفضل', features: ['حساب مجاني في المملكة المتحدة', 'حساب IBAN مجاني باليورو', 'تنفق في أكثر من 150 عملة بسعر الصرف بين البنوك', 'لا توجد رسوم مقابل 29 عملة فيات تصل إلى 5000 جنيه إسترليني في الشهر', 'لا يتم سحب رسوم الصراف الآلي التي تصل إلى 400 جنيه إسترليني شهريًا', 'التأمين الطبي في الخارج', 'تأخر الأمتعة وتأخر الرحلات الجوية'] },
                gold: { heading: 'ذهب', pricing: 'شهر', button: 'الحصول على الذهب', features: ['حساب مجاني في المملكة المتحدة', 'حساب IBAN مجاني باليورو', 'تنفق في أكثر من 150 عملة بسعر الصرف بين البنوك', 'لا توجد رسوم مقابل 29 عملة فيات تصل إلى 5000 جنيه إسترليني في الشهر', 'لا يتم سحب رسوم الصراف الآلي التي تصل إلى 400 جنيه إسترليني شهريًا', 'التأمين الطبي في الخارج', 'تأخر الأمتعة وتأخر الرحلات الجوية', 'أولوية دعم العملاء'] }
            },
            arb: {
                heading: 'التسعير', content: 'ومع ذلك، لأشرح لك كيف أن كل هذه الفكرة الخاطئة من شجب اللذة والألم',
                standerd: { heading: 'معيار', pricing: 'شهر', button: 'الحصول القياسية', features: ['حساب مجاني في المملكة المتحدة', 'حساب IBAN مجاني باليورو', 'تنفق في أكثر من 150 عملة بسعر الصرف بين البنوك', 'لا توجد رسوم مقابل 29 عملة فيات تصل إلى 5000 جنيه إسترليني في الشهر'] },
                premium: { heading: 'علاوة', pricing: 'شهر', button: 'إحصل على الأفضل', features: ['حساب مجاني في المملكة المتحدة', 'حساب IBAN مجاني باليورو', 'تنفق في أكثر من 150 عملة بسعر الصرف بين البنوك', 'لا توجد رسوم مقابل 29 عملة فيات تصل إلى 5000 جنيه إسترليني في الشهر', 'لا يتم سحب رسوم الصراف الآلي التي تصل إلى 400 جنيه إسترليني شهريًا', 'التأمين الطبي في الخارج', 'تأخر الأمتعة وتأخر الرحلات الجوية'] },
                gold: { heading: 'ذهب', pricing: 'شهر', button: 'الحصول على الذهب', features: ['حساب مجاني في المملكة المتحدة', 'حساب IBAN مجاني باليورو', 'تنفق في أكثر من 150 عملة بسعر الصرف بين البنوك', 'لا توجد رسوم مقابل 29 عملة فيات تصل إلى 5000 جنيه إسترليني في الشهر', 'لا يتم سحب رسوم الصراف الآلي التي تصل إلى 400 جنيه إسترليني شهريًا', 'التأمين الطبي في الخارج', 'تأخر الأمتعة وتأخر الرحلات الجوية', 'أولوية دعم العملاء'] }
            }
        };
        this.faq = {
            eng: { heading: 'Frequently Asked Questions', content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque',
                questions: [
                    { q: 'Non consectetur a erat nam at lectus urna duis? ', a: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.' },
                    { q: 'Non consectetur a erat nam at lectus urna duis? ', a: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.' },
                    { q: 'Non consectetur a erat nam at lectus urna duis? ', a: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.' },
                    { q: 'Non consectetur a erat nam at lectus urna duis? ', a: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.' },
                    { q: 'Non consectetur a erat nam at lectus urna duis? ', a: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.' },
                    { q: 'Non consectetur a erat nam at lectus urna duis? ', a: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.' }
                ]
            },
            som: { heading: 'أسئلة مكررة', content: '',
                questions: [
                    { q: 'وتعززت من قبل وعاء على السرير لالواجبات المنزلية؟', a: 'مستويات الأسعار فيل هذه المشكلة. لا Curabitur حامل؛ حبلى URNA معرف volutpat lacus laoreet تيمبوس iaculis. ماجنا fringilla ووزارة شؤون المرأة CURSUS في porttitor venenatis LECTUS rhoncus دولور النقي هو.' },
                    { q: 'وتعززت من قبل وعاء على السرير لالواجبات المنزلية؟', a: 'مستويات الأسعار فيل هذه المشكلة. لا Curabitur حامل؛ حبلى URNA معرف volutpat lacus laoreet تيمبوس iaculis. ماجنا fringilla ووزارة شؤون المرأة CURSUS في porttitor venenatis LECTUS rhoncus دولور النقي هو.' },
                    { q: 'وتعززت من قبل وعاء على السرير لالواجبات المنزلية؟', a: 'مستويات الأسعار فيل هذه المشكلة. لا Curabitur حامل؛ حبلى URNA معرف volutpat lacus laoreet تيمبوس iaculis. ماجنا fringilla ووزارة شؤون المرأة CURSUS في porttitor venenatis LECTUS rhoncus دولور النقي هو.' },
                    { q: 'وتعززت من قبل وعاء على السرير لالواجبات المنزلية؟', a: 'مستويات الأسعار فيل هذه المشكلة. لا Curabitur حامل؛ حبلى URNA معرف volutpat lacus laoreet تيمبوس iaculis. ماجنا fringilla ووزارة شؤون المرأة CURSUS في porttitor venenatis LECTUS rhoncus دولور النقي هو.' },
                    { q: 'وتعززت من قبل وعاء على السرير لالواجبات المنزلية؟', a: 'مستويات الأسعار فيل هذه المشكلة. لا Curabitur حامل؛ حبلى URNA معرف volutpat lacus laoreet تيمبوس iaculis. ماجنا fringilla ووزارة شؤون المرأة CURSUS في porttitor venenatis LECTUS rhoncus دولور النقي هو.' },
                    { q: 'وتعززت من قبل وعاء على السرير لالواجبات المنزلية؟', a: 'مستويات الأسعار فيل هذه المشكلة. لا Curabitur حامل؛ حبلى URNA معرف volutpat lacus laoreet تيمبوس iaculis. ماجنا fringilla ووزارة شؤون المرأة CURSUS في porttitor venenatis LECTUS rhoncus دولور النقي هو.' }
                ]
            },
            arb: { heading: 'أسئلة مكررة', content: 'أومع ذلك، لأشرح لك كيف أن كل هذه الفكرة الخاطئة من شجب اللذة والألم',
                questions: [
                    { q: 'وتعززت من قبل وعاء على السرير لالواجبات المنزلية؟', a: 'مستويات الأسعار فيل هذه المشكلة. لا Curabitur حامل؛ حبلى URNA معرف volutpat lacus laoreet تيمبوس iaculis. ماجنا fringilla ووزارة شؤون المرأة CURSUS في porttitor venenatis LECTUS rhoncus دولور النقي هو.' },
                    { q: 'وتعززت من قبل وعاء على السرير لالواجبات المنزلية؟', a: 'مستويات الأسعار فيل هذه المشكلة. لا Curabitur حامل؛ حبلى URNA معرف volutpat lacus laoreet تيمبوس iaculis. ماجنا fringilla ووزارة شؤون المرأة CURSUS في porttitor venenatis LECTUS rhoncus دولور النقي هو.' },
                    { q: 'وتعززت من قبل وعاء على السرير لالواجبات المنزلية؟', a: 'مستويات الأسعار فيل هذه المشكلة. لا Curabitur حامل؛ حبلى URNA معرف volutpat lacus laoreet تيمبوس iaculis. ماجنا fringilla ووزارة شؤون المرأة CURSUS في porttitor venenatis LECTUS rhoncus دولور النقي هو.' },
                    { q: 'وتعززت من قبل وعاء على السرير لالواجبات المنزلية؟', a: 'مستويات الأسعار فيل هذه المشكلة. لا Curabitur حامل؛ حبلى URNA معرف volutpat lacus laoreet تيمبوس iaculis. ماجنا fringilla ووزارة شؤون المرأة CURSUS في porttitor venenatis LECTUS rhoncus دولور النقي هو.' },
                    { q: 'وتعززت من قبل وعاء على السرير لالواجبات المنزلية؟', a: 'مستويات الأسعار فيل هذه المشكلة. لا Curabitur حامل؛ حبلى URNA معرف volutpat lacus laoreet تيمبوس iaculis. ماجنا fringilla ووزارة شؤون المرأة CURSUS في porttitor venenatis LECTUS rhoncus دولور النقي هو.' },
                    { q: 'وتعززت من قبل وعاء على السرير لالواجبات المنزلية؟', a: 'مستويات الأسعار فيل هذه المشكلة. لا Curabitur حامل؛ حبلى URNA معرف volutpat lacus laoreet تيمبوس iaculis. ماجنا fringilla ووزارة شؤون المرأة CURSUS في porttitor venenatis LECTUS rhoncus دولور النقي هو.' }
                ]
            }
        };
        this.sombankcommunity = {
            eng: {
                heading: ' SomBank Global Community ', clients: 'Clients', projects: 'Projects', hours: 'Hours Of Support', hardwork: 'Hard Workers', clientsNum: '274', projectsNum: '421', hoursNum: '1,364', hardworkNum: '18'
            },
            arb: {
                heading: ' سمبنك المجتمع العالمي ', clients: 'عملاء', projects: 'مشاريع', hours: 'ساعات الدعم', hardwork: 'مجدون في العمل', clientsNum: '٢٨٤', projectsNum: '٤٢١', hoursNum: '١٣٦٤', hardworkNum: '١٨'
            },
            som: {
                heading: ' سمبنك المجتمع العالمي ', clients: 'عملاء', projects: 'مشاريع', hours: 'ساعات الدعم', hardwork: 'مجدون في العمل', clientsNum: '٢٨٤', projectsNum: '٤٢١', hoursNum: '١٣٦٤', hardworkNum: '١٨'
            }
        };
        this.aboutus = {
            eng: {
                mainH: 'About SomBank', heading: 'SomBank', italicText: 'SomBank was Launched in the Year 2018.', content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', content2: 'Aut dolor id. Sint aliquam consequatur ex ex labore. Et quis qui dolor nulla dolores neque. Aspernatur consectetur omnis numquam quaerat. Sed fugiat nisi. Officiis veniam molestiae. Et vel ut quidem alias veritatis repudiandae ut fugit. Est ut eligendi aspernatur nulla voluptates veniam iusto vel quisquam. Fugit ut maxime incidunt accusantium totam repellendus eum error. Et repudiandae eum iste qui et ut ab alias.'
            },
            arb: {
                mainH: 'حول سمبنك', heading: 'سمبنك', italicText: 'تم إطلاق سمبنك في عام 2018', content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', content2: 'Aut dolor id. Sint aliquam consequatur ex ex labore. Et quis qui dolor nulla dolores neque. Aspernatur consectetur omnis numquam quaerat. Sed fugiat nisi. Officiis veniam molestiae. Et vel ut quidem alias veritatis repudiandae ut fugit. Est ut eligendi aspernatur nulla voluptates veniam iusto vel quisquam. Fugit ut maxime incidunt accusantium totam repellendus eum error. Et repudiandae eum iste qui et ut ab alias.'
            },
            som: {
                mainH: 'حول سمبنك', heading: 'سمبنك', italicText: 'تم إطلاق سمبنك في عام 2018', content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', content2: 'Aut dolor id. Sint aliquam consequatur ex ex labore. Et quis qui dolor nulla dolores neque. Aspernatur consectetur omnis numquam quaerat. Sed fugiat nisi. Officiis veniam molestiae. Et vel ut quidem alias veritatis repudiandae ut fugit. Est ut eligendi aspernatur nulla voluptates veniam iusto vel quisquam. Fugit ut maxime incidunt accusantium totam repellendus eum error. Et repudiandae eum iste qui et ut ab alias.'
            }
        };
        this.businessPageContent = {
            eng: {
                heading1: 'SomBank ', heading2: 'Business Accounts', heading3: 'Made Easy', content: 'A global business current account for easy international payments, with prepaid business cards and an Open API.', button: 'Get Started',
                section1: { heading: 'Easy, fast payments', content: 'Unlike banks, opening an account with us only takes a few minutes, and because we don’t believe in branches, you can set one up directly from your phone.' },
                section2: { heading: 'Spend your time wisely', content: 'Payment approval lets your team raise payments that need to be approved. Bulk payments allow you to make up to 1,000 payments with a single click. Scheduled payments allow you to, well, schedule payments!.' },
                section3: { heading: 'Prepaid Corporate Cards', content: 'Easily issue and track employee expenses on your dashboard when you issue cards to your team.' },
                section4: { heading: 'Get connected', content: 'Revolut Connect allows you to connect and integrate with popular software like XERO, Slack, Zapier and more. Not what you need? Take advantage of our Open API to integrate us with your workflow.' },
                cardscontent: { heading: 'Exclusive business card designs', content: 'Choose from our exclusive business card designs.' },
                services: { heading: 'Services', content: 'Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.',
                    service1: { heading: 'Lorem Ipsum', content: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident' },
                    service2: { heading: 'Dolor Sitema', content: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata' },
                    service3: { heading: 'Sed ut perspiciatis', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur' },
                    service4: { heading: 'Magni Dolores', content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
                    service5: { heading: 'Nemo Enim', content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque' },
                    service6: { heading: 'Eiusmod Tempor', content: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi' } }
            },
            arb: {
                heading1: 'سمبنك', heading2: 'الحسابات التجارية', heading3: 'يجلعه سهلا', content: 'حساب جاري عالمي للأعمال لتسهيل الدفعات الدولية ، مع بطاقات العمل المدفوعة مسبقًا و API المفتوح.', button: 'البدء',
                section1: { heading: 'المدفوعات سهلة وسريعة', content: 'على عكس البنوك ، لا يستغرق فتح حساب معنا سوى بضع دقائق ، ولأننا لا نؤمن بالفروع ، يمكنك إنشاء حساب من هاتفك مباشرة.' },
                section2: { heading: 'اقضي وقتك بحكمة', content: 'تتيح الموافقة على الدفع لفريقك رفع المدفوعات التي تحتاج إلى الموافقة عليها. تتيح لك المدفوعات المجمّعة إجراء ما يصل إلى 1000 دفعة بنقرة واحدة. المدفوعات المجدولة تسمح لك ، حسناً ، بجدولة المدفوعات!' },
                section3: { heading: 'بطاقات الشركات مسبقة الدفع', content: 'قم بسهولة بإصدار وتتبع نفقات الموظفين على لوحة القيادة الخاصة بك عند إصدار بطاقات لفريقك.' },
                section4: { heading: 'الحصول على اتصال', content: 'يتيح لك Revolut Connect الاتصال والتكامل مع البرامج الشائعة مثل XERO و Slack و Zapier والمزيد. ليس ما تحتاجه؟ استفد من واجهة برمجة التطبيقات المفتوحة لدينا لدمجنا في سير عملك.' },
                cardscontent: { heading: 'تصاميم حصرية لبطاقة العمل', content: '' },
                services: { heading: 'خدمات', content: 'اختر من بين التصميمات الحصرية لبطاقات العمل.',
                    service1: { heading: 'Lorem Ipsum', content: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident' },
                    service2: { heading: 'Dolor Sitema', content: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata' },
                    service3: { heading: 'Sed ut perspiciatis', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur' },
                    service4: { heading: 'Magni Dolores', content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
                    service5: { heading: 'Nemo Enim', content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque' },
                    service6: { heading: 'Eiusmod Tempor', content: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi' } }
            },
            som: {
                heading1: 'سمبنك', heading2: 'الحسابات التجارية', heading3: 'يجلعه سهلا', content: 'حساب جاري عالمي للأعمال لتسهيل الدفعات الدولية ، مع بطاقات العمل المدفوعة مسبقًا و API المفتوح.', button: 'البدء',
                section1: { heading: 'المدفوعات سهلة وسريعة', content: 'على عكس البنوك ، لا يستغرق فتح حساب معنا سوى بضع دقائق ، ولأننا لا نؤمن بالفروع ، يمكنك إنشاء حساب من هاتفك مباشرة.' },
                section2: { heading: 'اقضي وقتك بحكمة', content: 'تتيح الموافقة على الدفع لفريقك رفع المدفوعات التي تحتاج إلى الموافقة عليها. تتيح لك المدفوعات المجمّعة إجراء ما يصل إلى 1000 دفعة بنقرة واحدة. المدفوعات المجدولة تسمح لك ، حسناً ، بجدولة المدفوعات!' },
                section3: { heading: 'بطاقات الشركات مسبقة الدفع', content: 'قم بسهولة بإصدار وتتبع نفقات الموظفين على لوحة القيادة الخاصة بك عند إصدار بطاقات لفريقك.' },
                section4: { heading: 'الحصول على اتصال', content: 'يتيح لك Revolut Connect الاتصال والتكامل مع البرامج الشائعة مثل XERO و Slack و Zapier والمزيد. ليس ما تحتاجه؟ استفد من واجهة برمجة التطبيقات المفتوحة لدينا لدمجنا في سير عملك.' },
                cardscontent: { heading: 'تصاميم حصرية لبطاقة العمل', content: '' },
                services: { heading: 'خدمات', content: 'اختر من بين التصميمات الحصرية لبطاقات العمل.',
                    service1: { heading: 'Lorem Ipsum', content: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident' },
                    service2: { heading: 'Dolor Sitema', content: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata' },
                    service3: { heading: 'Sed ut perspiciatis', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur' },
                    service4: { heading: 'Magni Dolores', content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
                    service5: { heading: 'Nemo Enim', content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque' },
                    service6: { heading: 'Eiusmod Tempor', content: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi' } }
            },
        };
        this.tplusPageContent = {
            eng: {
                heading1: 'T-Plus made ', heading2: 'Money transfer', heading3: 'Easy', content: 'A global business current account for easy international payments, with prepaid business cards and an Open API.', button: 'Get Started',
                section1: { heading: 'Easy, fast payments', content: 'Unlike banks, opening an account with us only takes a few minutes, and because we don’t believe in branches, you can set one up directly from your phone.' },
                section2: { heading: 'Spend your time wisely', content: 'Payment approval lets your team raise payments that need to be approved. Bulk payments allow you to make up to 1,000 payments with a single click. Scheduled payments allow you to, well, schedule payments!.' },
                section3: { heading: 'Prepaid Corporate Cards', content: 'Easily issue and track employee expenses on your dashboard when you issue cards to your team.' },
                section4: { heading: 'Get connected', content: 'Revolut Connect allows you to connect and integrate with popular software like XERO, Slack, Zapier and more. Not what you need? Take advantage of our Open API to integrate us with your workflow.' }
            },
            arb: {
                heading1: 'مصنوع T-Plus', heading2: 'تحويل المال', heading3: 'سهلا', content: 'حساب جاري عالمي للأعمال لتسهيل الدفعات الدولية ، مع بطاقات العمل المدفوعة مسبقًا و API المفتوح.', button: 'البدء',
                section1: { heading: 'المدفوعات سهلة وسريعة', content: 'على عكس البنوك ، لا يستغرق فتح حساب معنا سوى بضع دقائق ، ولأننا لا نؤمن بالفروع ، يمكنك إنشاء حساب من هاتفك مباشرة.' },
                section2: { heading: 'اقضي وقتك بحكمة', content: 'تتيح الموافقة على الدفع لفريقك رفع المدفوعات التي تحتاج إلى الموافقة عليها. تتيح لك المدفوعات المجمّعة إجراء ما يصل إلى 1000 دفعة بنقرة واحدة. المدفوعات المجدولة تسمح لك ، حسناً ، بجدولة المدفوعات!' },
                section3: { heading: 'بطاقات الشركات مسبقة الدفع', content: 'قم بسهولة بإصدار وتتبع نفقات الموظفين على لوحة القيادة الخاصة بك عند إصدار بطاقات لفريقك.' },
                section4: { heading: 'الحصول على اتصال', content: 'يتيح لك Revolut Connect الاتصال والتكامل مع البرامج الشائعة مثل XERO و Slack و Zapier والمزيد. ليس ما تحتاجه؟ استفد من واجهة برمجة التطبيقات المفتوحة لدينا لدمجنا في سير عملك.' }
            },
            som: {
                heading1: 'مصنوع T-Plus', heading2: 'تحويل المال', heading3: 'سهلا', content: 'حساب جاري عالمي للأعمال لتسهيل الدفعات الدولية ، مع بطاقات العمل المدفوعة مسبقًا و API المفتوح.', button: 'البدء',
                section1: { heading: 'المدفوعات سهلة وسريعة', content: 'على عكس البنوك ، لا يستغرق فتح حساب معنا سوى بضع دقائق ، ولأننا لا نؤمن بالفروع ، يمكنك إنشاء حساب من هاتفك مباشرة.' },
                section2: { heading: 'اقضي وقتك بحكمة', content: 'تتيح الموافقة على الدفع لفريقك رفع المدفوعات التي تحتاج إلى الموافقة عليها. تتيح لك المدفوعات المجمّعة إجراء ما يصل إلى 1000 دفعة بنقرة واحدة. المدفوعات المجدولة تسمح لك ، حسناً ، بجدولة المدفوعات!' },
                section3: { heading: 'بطاقات الشركات مسبقة الدفع', content: 'قم بسهولة بإصدار وتتبع نفقات الموظفين على لوحة القيادة الخاصة بك عند إصدار بطاقات لفريقك.' },
                section4: { heading: 'الحصول على اتصال', content: 'يتيح لك Revolut Connect الاتصال والتكامل مع البرامج الشائعة مثل XERO و Slack و Zapier والمزيد. ليس ما تحتاجه؟ استفد من واجهة برمجة التطبيقات المفتوحة لدينا لدمجنا في سير عملك.' }
            }
        };
        this.corporatePageContent = {
            eng: {
                heading1: 'SomBank ', heading2: 'Corporate Accounts', heading3: 'Get it Now', content: 'A global business current account for easy international payments, with prepaid business cards and an Open API.', button: 'Get Started',
                section1: { heading: 'Easy, fast payments', content: 'Unlike banks, opening an account with us only takes a few minutes, and because we don’t believe in branches, you can set one up directly from your phone.' },
                section2: { heading: 'Spend your time wisely', content: 'Payment approval lets your team raise payments that need to be approved. Bulk payments allow you to make up to 1,000 payments with a single click. Scheduled payments allow you to, well, schedule payments!.' },
                section3: { heading: 'Prepaid Corporate Cards', content: 'Easily issue and track employee expenses on your dashboard when you issue cards to your team.' },
                section4: { heading: 'Get connected', content: 'Revolut Connect allows you to connect and integrate with popular software like XERO, Slack, Zapier and more. Not what you need? Take advantage of our Open API to integrate us with your workflow.' }
            },
            arb: {
                heading1: 'سمبنك', heading2: 'حسابات الشركات', heading3: 'احصل عليها الآن', content: 'حساب جاري عالمي للأعمال لتسهيل الدفعات الدولية ، مع بطاقات العمل المدفوعة مسبقًا و API المفتوح.', button: 'البدء',
                section1: { heading: 'المدفوعات سهلة وسريعة', content: 'على عكس البنوك ، لا يستغرق فتح حساب معنا سوى بضع دقائق ، ولأننا لا نؤمن بالفروع ، يمكنك إنشاء حساب من هاتفك مباشرة.' },
                section2: { heading: 'اقضي وقتك بحكمة', content: 'تتيح الموافقة على الدفع لفريقك رفع المدفوعات التي تحتاج إلى الموافقة عليها. تتيح لك المدفوعات المجمّعة إجراء ما يصل إلى 1000 دفعة بنقرة واحدة. المدفوعات المجدولة تسمح لك ، حسناً ، بجدولة المدفوعات!' },
                section3: { heading: 'بطاقات الشركات مسبقة الدفع', content: 'قم بسهولة بإصدار وتتبع نفقات الموظفين على لوحة القيادة الخاصة بك عند إصدار بطاقات لفريقك.' },
                section4: { heading: 'الحصول على اتصال', content: 'يتيح لك Revolut Connect الاتصال والتكامل مع البرامج الشائعة مثل XERO و Slack و Zapier والمزيد. ليس ما تحتاجه؟ استفد من واجهة برمجة التطبيقات المفتوحة لدينا لدمجنا في سير عملك.' }
            },
            som: {
                heading1: 'سمبنك', heading2: 'حسابات الشركات', heading3: 'احصل عليها الآن', content: 'حساب جاري عالمي للأعمال لتسهيل الدفعات الدولية ، مع بطاقات العمل المدفوعة مسبقًا و API المفتوح.', button: 'البدء',
                section1: { heading: 'المدفوعات سهلة وسريعة', content: 'على عكس البنوك ، لا يستغرق فتح حساب معنا سوى بضع دقائق ، ولأننا لا نؤمن بالفروع ، يمكنك إنشاء حساب من هاتفك مباشرة.' },
                section2: { heading: 'اقضي وقتك بحكمة', content: 'تتيح الموافقة على الدفع لفريقك رفع المدفوعات التي تحتاج إلى الموافقة عليها. تتيح لك المدفوعات المجمّعة إجراء ما يصل إلى 1000 دفعة بنقرة واحدة. المدفوعات المجدولة تسمح لك ، حسناً ، بجدولة المدفوعات!' },
                section3: { heading: 'بطاقات الشركات مسبقة الدفع', content: 'قم بسهولة بإصدار وتتبع نفقات الموظفين على لوحة القيادة الخاصة بك عند إصدار بطاقات لفريقك.' },
                section4: { heading: 'الحصول على اتصال', content: 'يتيح لك Revolut Connect الاتصال والتكامل مع البرامج الشائعة مثل XERO و Slack و Zapier والمزيد. ليس ما تحتاجه؟ استفد من واجهة برمجة التطبيقات المفتوحة لدينا لدمجنا في سير عملك.' }
            }
        };
        this.personalPageContent = {
            eng: {
                heading1: 'SomBank ', heading2: 'Personal Accounts', heading3: 'Open it now', content: 'A global business current account for easy international payments, with prepaid business cards and an Open API.', button: 'Get Started',
                section1: { heading: 'Easy, fast payments', content: 'Unlike banks, opening an account with us only takes a few minutes, and because we don’t believe in branches, you can set one up directly from your phone.' },
                section2: { heading: 'Spend your time wisely', content: 'Payment approval lets your team raise payments that need to be approved. Bulk payments allow you to make up to 1,000 payments with a single click. Scheduled payments allow you to, well, schedule payments!.' },
                section3: { heading: 'Prepaid Corporate Cards', content: 'Easily issue and track employee expenses on your dashboard when you issue cards to your team.' },
                section4: { heading: 'Get connected', content: 'Revolut Connect allows you to connect and integrate with popular software like XERO, Slack, Zapier and more. Not what you need? Take advantage of our Open API to integrate us with your workflow.' }
            },
            arb: {
                heading1: 'سمبنك', heading2: 'الحسابات التجاريحساب شخصي', heading3: 'فتحه الآن', content: 'حساب جاري عالمي للأعمال لتسهيل الدفعات الدولية ، مع بطاقات العمل المدفوعة مسبقًا و API المفتوح.', button: 'البدء',
                section1: { heading: 'المدفوعات سهلة وسريعة', content: 'على عكس البنوك ، لا يستغرق فتح حساب معنا سوى بضع دقائق ، ولأننا لا نؤمن بالفروع ، يمكنك إنشاء حساب من هاتفك مباشرة.' },
                section2: { heading: 'اقضي وقتك بحكمة', content: 'تتيح الموافقة على الدفع لفريقك رفع المدفوعات التي تحتاج إلى الموافقة عليها. تتيح لك المدفوعات المجمّعة إجراء ما يصل إلى 1000 دفعة بنقرة واحدة. المدفوعات المجدولة تسمح لك ، حسناً ، بجدولة المدفوعات!' },
                section3: { heading: 'بطاقات الشركات مسبقة الدفع', content: 'قم بسهولة بإصدار وتتبع نفقات الموظفين على لوحة القيادة الخاصة بك عند إصدار بطاقات لفريقك.' },
                section4: { heading: 'الحصول على اتصال', content: 'يتيح لك Revolut Connect الاتصال والتكامل مع البرامج الشائعة مثل XERO و Slack و Zapier والمزيد. ليس ما تحتاجه؟ استفد من واجهة برمجة التطبيقات المفتوحة لدينا لدمجنا في سير عملك.' }
            },
            som: {
                heading1: 'سمبنك', heading2: 'الحسابات التجاريحساب شخصي', heading3: 'فتحه الآن', content: 'حساب جاري عالمي للأعمال لتسهيل الدفعات الدولية ، مع بطاقات العمل المدفوعة مسبقًا و API المفتوح.', button: 'البدء',
                section1: { heading: 'المدفوعات سهلة وسريعة', content: 'على عكس البنوك ، لا يستغرق فتح حساب معنا سوى بضع دقائق ، ولأننا لا نؤمن بالفروع ، يمكنك إنشاء حساب من هاتفك مباشرة.' },
                section2: { heading: 'اقضي وقتك بحكمة', content: 'تتيح الموافقة على الدفع لفريقك رفع المدفوعات التي تحتاج إلى الموافقة عليها. تتيح لك المدفوعات المجمّعة إجراء ما يصل إلى 1000 دفعة بنقرة واحدة. المدفوعات المجدولة تسمح لك ، حسناً ، بجدولة المدفوعات!' },
                section3: { heading: 'بطاقات الشركات مسبقة الدفع', content: 'قم بسهولة بإصدار وتتبع نفقات الموظفين على لوحة القيادة الخاصة بك عند إصدار بطاقات لفريقك.' },
                section4: { heading: 'الحصول على اتصال', content: 'يتيح لك Revolut Connect الاتصال والتكامل مع البرامج الشائعة مثل XERO و Slack و Zapier والمزيد. ليس ما تحتاجه؟ استفد من واجهة برمجة التطبيقات المفتوحة لدينا لدمجنا في سير عملك.' }
            }
        };
        this.footer = {
            eng: {
                content: 'Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.', addressH: 'CONTACT US', addressl1: 'A108 Adam Street ', addressl2: 'Garowe', addressl3: 'Somalia', email: 'E-Mail', phone: 'Phone', phoneNum: '+1 5589 55488 55', emailid: 'sales@sombank.so'
            },
            arb: {
                content: 'غدا يكرهون ماجنا أولمرت الاحماء مباراة أنفه تييرا. خوستو eget iaculis ندى، أرض الاحماء لرؤية كرة قدم رائعة لا تملك البحر، في منح قطر derita phasellus ولي DART. الدافئة الشوكولاته وصفات الثلاجة تمويل الميكروويف. Mauris الآن التيار عطلة نهاية الأسبوع في جميع أنحاء البلاد.', addressH: 'اتصل بنا', addressl1: 'A108 شارع آدم', addressl2: 'غارو', addressl3: 'الصومال', email: 'البريد الإلكتروني', phone: 'هاتف', phoneNum: '+1 5589 55488 55', emailid: 'sales@sombank.so'
            },
            som: {
                content: 'غدا يكرهون ماجنا أولمرت الاحماء مباراة أنفه تييرا. خوستو eget iaculis ندى، أرض الاحماء لرؤية كرة قدم رائعة لا تملك البحر، في منح قطر derita phasellus ولي DART. الدافئة الشوكولاته وصفات الثلاجة تمويل الميكروويف. Mauris الآن التيار عطلة نهاية الأسبوع في جميع أنحاء البلاد.', addressH: 'اتصل بنا', addressl1: 'A108 شارع آدم', addressl2: 'غارو', addressl3: 'الصومال', email: 'البريد الإلكتروني', phone: 'هاتف', phoneNum: '+1 5589 55488 55', emailid: 'sales@sombank.so'
            }
        };
        this.tlang.subscribe(function (lang) {
            _this.lang = lang;
        });
    }
    MultiLangService.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_popup_popup_component__WEBPACK_IMPORTED_MODULE_3__["PopupComponent"]);
    };
    MultiLangService.prototype.openPrivacyPolicy = function (lang) {
        var dialogRef = this.dialog.open(_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_5__["PrivacyPolicyComponent"], {
            data: { lang: lang }
        });
    };
    MultiLangService.prototype.openAppInstallSuccessful = function (lang) {
        var dialogRef = this.dialog.open(_app_install_popup_app_install_popup_component__WEBPACK_IMPORTED_MODULE_6__["AppInstallPopupComponent"], {
            data: { lang: lang }
        });
    };
    MultiLangService.prototype.onSubmit = function (f, lang) {
        var _this = this;
        console.log(f.value);
        /* const url = 'http://localhost/src/assets/contactform/email.php'; */
        var url = 'http://test.skillathontech.com/assets/contactform/email.php';
        this.http.post(url, f.value, { headers: new _angular_http__WEBPACK_IMPORTED_MODULE_7__["Headers"]({ 'Content-Type': 'application/json' }) }).subscribe(function (res) {
            console.log(res);
            _this.openAppInstallSuccessful(lang);
        });
    };
    MultiLangService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_http__WEBPACK_IMPORTED_MODULE_7__["Http"]])
    ], MultiLangService);
    return MultiLangService;
}());



/***/ }),

/***/ "./src/app/shared/popup.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/popup.service.ts ***!
  \*****************************************/
/*! exports provided: PopupLangService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupLangService", function() { return PopupLangService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var PopupLangService = /** @class */ (function () {
    function PopupLangService() {
        this.langForPopup = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    PopupLangService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], PopupLangService);
    return PopupLangService;
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

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\practice_projects\sombank\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map