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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-grid{\r\n    height: 100%;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-rows: 90px 25px 0px;\r\n        grid-template-rows: 90px 25px 0px;\r\n}\r\n\r\n.header-flex-grid{\r\n    text-align: left;\r\n    font-weight: 900;\r\n    display: flex;\r\n    align-content: center;\r\n    background: #ffffff33;\r\n    -ms-grid-row: 1;\r\n    -ms-grid-row-span: 1;\r\n    grid-row: 1 / 2;\r\n}\r\n\r\n.nav-flex-grid{\r\n    text-align: left;\r\n    align-content: center;\r\n    background: rgba(255, 255, 255, 0.2);\r\n    height:25px;\r\n    -ms-grid-row: 2;\r\n    -ms-grid-row-span: 1;\r\n    grid-row: 2 / 3;\r\n}\r\n\r\nrouter-outlet{\r\n    -ms-grid-row: 3;\r\n        grid-row-start: 3;\r\n}\r\n\r\n.hero-header{\r\n    flex-grow: 1;\r\n    flex-shrink: 1;\r\n    margin-left: 12px;\r\n}\r\n\r\n.hero-header span:first-child{\r\n    color: seagreen;\r\n}\r\n\r\n.nav-item{\r\n    font-size: large;\r\n    margin: 0px 12px;\r\n}\r\n\r\n.nav-item:hover{\r\n    color: seagreen;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"app-grid\">\n    <div class=\"header-flex-grid\">\n        <h1 class=\"hero-header\">\n            <span>Pure</span>\n            <span>ene</span>\n        </h1>\n\n        <button class=\"button without-border\">Sign in</button>\n        <button class=\"button with-border\">Create Account</button>\n    </div>\n    <div class=\"nav-flex-grid\">\n        <nav>\n            <a class=\"nav-item\">HOME</a>\n            <a class=\"nav-item\">LATEST</a>\n            <a class=\"nav-item\">WIND</a>\n            <a class=\"nav-item\">SOLAR</a>\n            <a class=\"nav-item\">TIDAL</a>\n        </nav>\n    </div>\n    <router-outlet></router-outlet>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ./button-styles.css */ "./src/app/button-styles.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    {
        path: 'home',
        component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"]
    },
    {
        path: '',
        component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/button-styles.css":
/*!***********************************!*\
  !*** ./src/app/button-styles.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.button{\r\n    height: 36px;\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n    margin-right: 12px;\r\n    background: transparent;\r\n    cursor: pointer;\r\n    outline: 0px;\r\n    transition: 200ms linear;\r\n    font-size: medium;\r\n    color: seagreen;\r\n}\r\n\r\n.without-border{\r\n    border: 0px;\r\n\r\n}\r\n\r\n.without-border:hover{\r\n    color: seagreen;\r\n}\r\n\r\n.with-border{\r\n    border: 2px solid seagreen;\r\n    border-radius: 4px;\r\n    color: seagreen\r\n}\r\n\r\n.with-border:hover{\r\n    color: white;\r\n    background: seagreen;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/home-page/button-styles.css":
/*!*********************************************!*\
  !*** ./src/app/home-page/button-styles.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.button{\r\n    height: 36px;\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n    margin-right: 12px;\r\n    background: transparent;\r\n    cursor: pointer;\r\n    outline: 0px;\r\n    transition: 200ms linear;\r\n    font-size: medium;\r\n    color: seagreen;\r\n}\r\n\r\n.without-border{\r\n    border: 0px;\r\n\r\n}\r\n\r\n.without-border:hover{\r\n    color: seagreen;\r\n}\r\n\r\n.with-border{\r\n    border: 2px solid seagreen;\r\n    border-radius: 4px;\r\n    color: seagreen\r\n}\r\n\r\n.with-border:hover{\r\n    color: white;\r\n    background: seagreen;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".root-grid{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: (55px)[19];\r\n        grid-template-columns: repeat(19, 55px);\r\n    -ms-grid-rows: (55px)[8];\r\n        grid-template-rows: repeat(8, 55px);\r\n    grid-column-gap: 6px;\r\n    grid-row-gap: 6px;\r\n    background: whitesmoke;\r\n    margin: 8px 0px;\r\n    align-content: center;\r\n    justify-content: center;\r\n    height: calc(100% - 16px);\r\n    padding: 12px;\r\n}\r\n\r\n.item{\r\n    background: white;\r\n    min-height: 55px;\r\n    word-wrap: none;\r\n    overflow: hidden;\r\n}\r\n\r\n.group-row{\r\n    -ms-grid-column: 2;\r\n    -ms-grid-column-span: 18;\r\n    grid-column: 2 / 20;\r\n    -ms-grid-row: 1;\r\n    -ms-grid-row-span: 1;\r\n    grid-row: 1 / 2;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: (55px)[19];\r\n        grid-template-columns: repeat(19, 55px);\r\n    grid-column-gap: 6px;\r\n    text-align: center;\r\n}\r\n\r\n.group-item-even{\r\n    background: white;\r\n    height: 100%;\r\n}\r\n\r\n.group-item-odd{\r\n    background: gainsboro;\r\n    height: 100%;\r\n\r\n}\r\n\r\n.group-header{\r\n    line-height: 100%\r\n}\r\n\r\n.period-column{\r\n    -ms-grid-row: 2;\r\n    -ms-grid-row-span: 7;\r\n    grid-row: 2 / 9;\r\n    -ms-grid-column: 1;\r\n    -ms-grid-column-span: 1;\r\n    grid-column: 1 / 2;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-rows: (55px)[7];\r\n        grid-template-rows: repeat(7, 55px);\r\n    grid-row-gap: 6px;\r\n    text-align: center;\r\n}\r\n\r\n.period-item-even{\r\n    background: white;\r\n}\r\n\r\n.period-item-odd{\r\n    background: gainsboro;\r\n}\r\n\r\n.period-header{\r\n    line-height: 100%\r\n}\r\n\r\n.header-root{\r\n    position: relative;\r\n    height: 100%;\r\n}\r\n\r\n.group-name {\r\n    position: absolute;\r\n    top: 38px;\r\n    font-size: small;\r\n    margin: 0px;\r\n}\r\n\r\n.period-name {\r\n    position: absolute;\r\n    margin: 0px;\r\n    -webkit-transform: rotate(-90deg);\r\n            transform: rotate(-90deg);\r\n    top: 14px;\r\n    font-size: small;\r\n    left: 27px;\r\n}"

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"root-grid\">\n  <div class=\"header-root\">\n    <h4 class=\"group-name\">Groups</h4>\n    <h4 class=\"period-name\">Periods</h4>\n  </div>\n  <div class=\"group-row\">\n      <div *ngFor=\"let group of groups; index as i\" [ngClass]=\"{'group-item-even item': (i%2 == 0), 'group-item-odd item': (i%2 != 0)}\">\n        <h4 class=\"group-header\">{{group.name}}</h4>\n      </div>\n  </div>\n  <div class=\"period-column\">\n      <div *ngFor=\"let period of periods; index as i\" [ngClass]=\"{'period-item-even item': (i%2 == 0), 'period-item-odd item': (i%2 != 0)}\">\n          <h4 class=\"period-header\">{{period.name}}</h4>\n      </div>\n  </div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  <div class=\"item\"></div>\n  \n\n \n\n</div>"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent, Element, ElementGroup, ElementPeriod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Element", function() { return Element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementGroup", function() { return ElementGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementPeriod", function() { return ElementPeriod; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
        this.elements = new Array();
        this.groups = new Array();
        this.periods = new Array();
        for (var index = 1; index < 19; index++) {
            this.groups.push(new ElementGroup(index.toString()));
        }
        for (var index = 1; index < 8; index++) {
            this.periods.push(new ElementPeriod(index.toString()));
        }
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css"), __webpack_require__(/*! ./button-styles.css */ "./src/app/home-page/button-styles.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());

var Element = /** @class */ (function () {
    function Element(group, period) {
        this.group = group;
        this.period = period;
    }
    return Element;
}());

var ElementGroup = /** @class */ (function () {
    function ElementGroup(name) {
        this.name = name;
    }
    return ElementGroup;
}());

var ElementPeriod = /** @class */ (function () {
    function ElementPeriod(name) {
        this.name = name;
    }
    return ElementPeriod;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\shubh\hello-pureene\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map