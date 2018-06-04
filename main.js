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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _periodic_table_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./periodic-table.service */ "./src/app/periodic-table.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    {
        path: 'home',
        component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"]
    },
    {
        path: '',
        component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_periodic_table_service__WEBPACK_IMPORTED_MODULE_6__["PeriodicTableService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
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

module.exports = ".root-grid{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-rows: 64px auto 12px auto;\r\n        grid-template-rows: 64px auto 12px auto;\r\n    -ms-grid-columns: 64px auto;\r\n        grid-template-columns: 64px auto;\r\n    grid-column-gap: 6px;\r\n    grid-row-gap: 6px;\r\n    padding: 12px;\r\n    align-content: center;\r\n    justify-content: center; \r\n    background: whitesmoke;\r\n    margin: 8px 0px;\r\n    height: auto;\r\n}\r\n\r\n.group-header-row{\r\n    -ms-grid-column: 2;\r\n    -ms-grid-column-span: 1;\r\n    grid-column: 2 / 3;\r\n    -ms-grid-row: 1;\r\n    -ms-grid-row-span: 1;\r\n    grid-row: 1 / 2;\r\n    -ms-grid-columns: (64px)[18];\r\n        grid-template-columns: repeat(18, 64px);\r\n    grid-column-gap: 6px;\r\n    display: -ms-grid;\r\n    display: grid;\r\n}\r\n\r\n.period-header-column{\r\n    -ms-grid-column: 1;\r\n    -ms-grid-column-span: 1;\r\n    grid-column: 1 / 2;\r\n    -ms-grid-row: 2;\r\n    -ms-grid-row-span: 1;\r\n    grid-row: 2 / 3;\r\n    -ms-grid-rows: (64px)[7];\r\n        grid-template-rows: repeat(7, 64px);\r\n    grid-row-gap: 6px;\r\n    display: -ms-grid;\r\n    display: grid;\r\n}\r\n\r\n.item{\r\n    height: 64px;\r\n    background: white;\r\n    text-align: center;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    transition: 150ms linear;\r\n    cursor: pointer;\r\n}\r\n\r\n.group-name{\r\n    line-height: 100%;\r\n}\r\n\r\n.elements-table{\r\n    -ms-grid-row: 2;\r\n    -ms-grid-row-span: 1;\r\n    grid-row: 2 / 3;\r\n    -ms-grid-column: 2;\r\n    -ms-grid-column-span: 1;\r\n    grid-column: 2 / 3;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: (64px)[18];\r\n        grid-template-columns: repeat(18, 64px);\r\n    -ms-grid-rows: (64px)[7];\r\n        grid-template-rows: repeat(7, 64px);\r\n    grid-column-gap: 6px;\r\n    grid-row-gap: 6px;\r\n}\r\n\r\n.element-symbol{\r\n    margin: 0px;\r\n    display: block;\r\n}\r\n\r\n.element-name{\r\n    text-align: center;\r\n    font-size: x-small;\r\n    display: block;\r\n}\r\n\r\n.element-atomic-number{\r\n    text-align: center;\r\n    font-size: x-small;\r\n    font-weight: 600;\r\n    display: block;\r\n}\r\n\r\n.element-atomic-weight{\r\n    text-align: center;\r\n    font-size: x-small;\r\n    display: block;\r\n}\r\n\r\n.off-elements-table{\r\n    -ms-grid-row: 4;\r\n    -ms-grid-row-span: 1;\r\n    grid-row: 4 / 5;\r\n    -ms-grid-column: 2;\r\n    -ms-grid-column-span: 1;\r\n    grid-column: 2 / 3;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: (64px)[18];\r\n        grid-template-columns: repeat(18, 64px);\r\n    -ms-grid-rows: (64px)[2];\r\n        grid-template-rows: repeat(2, 64px);\r\n    grid-column-gap: 6px;\r\n    grid-row-gap: 6px;\r\n}\r\n\r\n.alkali{\r\n    background: lightgreen !important;\r\n}\r\n\r\n.alkaline{\r\n    background:hsl(120, 73%, 85%) !important;\r\n}\r\n\r\n.metal{\r\n    background: red;\r\n}\r\n\r\n.transition{\r\n    background: hsl(351, 100%, 92%);\r\n\r\n}\r\n\r\n.post-transition{\r\n    background: lightpink;\r\n\r\n}\r\n\r\n.nonmetal{\r\n    background: lightyellow\r\n}\r\n\r\n.metalloid{\r\n    background: silver;\r\n}\r\n\r\n.noble{\r\n    background: lightblue;\r\n}\r\n\r\n.probably{\r\n    background: lightgray !important;\r\n}\r\n\r\n.lanthanide{\r\n    background: lightsteelblue\r\n}\r\n\r\n.actinide{\r\n    background: hsl(214, 41%, 85%);\r\n}\r\n\r\n.off-elements-placeholder{\r\n    text-align: center; \r\n    line-height: 64px;\r\n    background: transparent;\r\n}\r\n\r\n.Solid{\r\n    color:  black;\r\n}\r\n\r\n.Liquid{\r\n    color:  green;\r\n\r\n}\r\n\r\n.Gas{\r\n    color:  hotpink;\r\n\r\n}\r\n\r\n.Unknown{\r\n    color:  slategray;\r\n\r\n}\r\n\r\n.header-even{\r\n    background: rgb(245, 240, 240);\r\n}\r\n\r\n.header-odd{\r\n    background: rgb(235, 235, 235);\r\n}\r\n\r\n.item:hover{\r\n    -webkit-transform: scale(1.5);\r\n            transform: scale(1.5);\r\n}\r\n\r\n.active-element{\r\n    -ms-grid-column: 3;\r\n    -ms-grid-column-span: 2;\r\n    grid-column: 3 / 5;\r\n    -ms-grid-row: 2;\r\n    -ms-grid-row-span: 2;\r\n    grid-row: 2 / 4;\r\n    text-align: center;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    cursor: pointer;\r\n}\r\n\r\n.active-element-symbol{\r\n    margin: 0px;\r\n    display: block;\r\n    font-size: xx-large;\r\n}\r\n\r\n.active-element-name{\r\n    text-align: center;\r\n    font-size: x-large;\r\n    display: block;\r\n}\r\n\r\n.active-element-atomic-number{\r\n    text-align: center;\r\n    font-size: x-large;\r\n    font-weight: 600;\r\n    display: block;\r\n}\r\n\r\n.active-element-atomic-weight{\r\n    text-align: center;\r\n    font-size: large;\r\n    display: block;\r\n}\r\n\r\n.group-selected{\r\n    border: 1px solid black;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"root-grid\">\n  <div class=\"item\"></div>\n  <div class=\"group-header-row\">\n    <div (mouseover)=\"mouseOverGroup(group)\" (mouseout)=\"mouseLeaveGroup(group)\" class=\"item\" [ngClass]=\"{'header-even': (i%2 === 0), 'header-odd': (i%2 !== 0)}\" *ngFor=\"let group of table.groups; index as i\">\n      <h4 class=\"group-name\">{{group.name}}</h4>\n    </div>\n  </div>\n  <div class=\"period-header-column\">\n    <div (mouseover)=\"mouseOverPeriod(period)\" (mouseout)=\"mouseLeavePeriod(period)\" class=\"item\" [ngClass]=\"{'header-even': (i%2 === 0), 'header-odd': (i%2 !== 0)}\" *ngFor=\"let period of table.periods; index as i\">\n      <h4 class=\"group-name\">{{period.name}}</h4>\n    </div>\n  </div>\n  <div class=\"elements-table\" *ngIf=\"table.elements.length > 0\">\n    <div (mouseover)=\"mouseOver(element)\" (mouseout)=\"mouseLeave(element)\" class=\"item {{element.category}} {{element.group_selected_style}}\" [ngStyle]=\"element.style\" *ngFor=\"let element of table.elements; index as i\">\n      <span class=\"element-name\">{{element.name}}</span>\n      <span class=\"element-atomic-number\">{{element.number}}</span>\n      <strong class=\"element-symbol {{element.phase}}\">{{element.symbol}}</strong>\n      <span class=\"element-atomic-weight\">{{element.atomic_mass}}</span>\n    </div>\n\n    <div class=\"item off-elements-placeholder\" style=\"grid-column: 3 / 4; grid-row: 6 / 7;\">*</div>\n    <div class=\"item off-elements-placeholder\" style=\"grid-column: 3 / 4; grid-row: 7 / 8;\">**</div>\n    <div class=\"active-element {{activeElement.category}}\" *ngIf=\"activeElement\">\n      <span class=\"active-element-name\">{{activeElement.name}}</span>\n      <span class=\"active-element-atomic-number\">{{activeElement.number}}</span>\n      <strong class=\"active-element-symbol {{activeElement.phase}}\">{{activeElement.symbol}}</strong>\n      <span class=\"active-element-atomic-weight\">{{activeElement.atomic_mass}}</span>\n    </div>\n  </div>\n  <div class=\"off-elements-table\">\n    <div (mouseover)=\"mouseOver(element)\" (mouseout)=\"mouseLeave(element)\" class=\"item {{element.category}} {{element.group_selected_style}}\" [ngStyle]=\"element.style\" *ngFor=\"let element of table.offelements; index as i\">\n      <span class=\"element-name\">{{element.name}}</span>\n      <span class=\"element-atomic-number\">{{element.number}}</span>\n      <strong class=\"element-symbol {{element.phase}}\">{{element.symbol}}</strong>\n      <span class=\"element-atomic-weight\">{{element.atomic_mass}}</span>\n    </div>\n    <div class=\"item off-elements-placeholder\" style=\"grid-column: 3 / 4; grid-row: 1 / 2; text-align: center; line-height: 64px;\">*</div>\n    <div class=\"item off-elements-placeholder\" style=\"grid-column: 3 / 4; grid-row: 2 / 3; text-align: center; line-height: 64px\">**</div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _periodic_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../periodic-table */ "./src/app/periodic-table.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
    function HomePageComponent(http) {
        this.http = http;
        this.table = new _periodic_table__WEBPACK_IMPORTED_MODULE_1__["PeriodicTable"](http);
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent.prototype.ngOnDestroy = function () {
    };
    HomePageComponent.prototype.mouseOverGroup = function (group) {
        this.table.elements.forEach(function (element) {
            if (element.xpos.toString() === group.name) {
                element.group_selected_style = 'group-selected';
            }
        });
        this.table.offelements.forEach(function (element) {
            if (element.xpos === (Number.parseInt(group.name) - 1)) {
                element.group_selected_style = 'group-selected';
            }
        });
    };
    HomePageComponent.prototype.mouseLeaveGroup = function (group) {
        this.table.elements.forEach(function (element) {
            if (element.xpos.toString() === group.name) {
                element.group_selected_style = null;
            }
        });
        this.table.offelements.forEach(function (element) {
            if (element.xpos === (Number.parseInt(group.name) - 1)) {
                element.group_selected_style = null;
            }
        });
    };
    HomePageComponent.prototype.mouseOverPeriod = function (period) {
        this.table.elements.forEach(function (element) {
            if (element.period.toString() === period.name) {
                element.group_selected_style = 'group-selected';
            }
        });
        this.table.offelements.forEach(function (element) {
            if (element.period === (Number.parseInt(period.name))) {
                element.group_selected_style = 'group-selected';
            }
        });
    };
    HomePageComponent.prototype.mouseLeavePeriod = function (period) {
        this.table.elements.forEach(function (element) {
            if (element.period.toString() === period.name) {
                element.group_selected_style = null;
            }
        });
        this.table.offelements.forEach(function (element) {
            if (element.period === (Number.parseInt(period.name))) {
                element.group_selected_style = null;
            }
        });
    };
    HomePageComponent.prototype.mouseOver = function (element) {
        this.activeElement = element;
    };
    HomePageComponent.prototype.mouseLeave = function (element) {
        this.activeElement = null;
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css"), __webpack_require__(/*! ./button-styles.css */ "./src/app/home-page/button-styles.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/periodic-table.service.ts":
/*!*******************************************!*\
  !*** ./src/app/periodic-table.service.ts ***!
  \*******************************************/
/*! exports provided: PeriodicTableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeriodicTableService", function() { return PeriodicTableService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PeriodicTableService = /** @class */ (function () {
    function PeriodicTableService(http) {
        this.http = http;
    }
    PeriodicTableService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PeriodicTableService);
    return PeriodicTableService;
}());



/***/ }),

/***/ "./src/app/periodic-table.ts":
/*!***********************************!*\
  !*** ./src/app/periodic-table.ts ***!
  \***********************************/
/*! exports provided: PeriodicTable, Element, Group, Period */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeriodicTable", function() { return PeriodicTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Element", function() { return Element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Period", function() { return Period; });
/* harmony import */ var _assets_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/data */ "./src/assets/data.ts");

var PeriodicTable = /** @class */ (function () {
    function PeriodicTable(http) {
        this.http = http;
        this.groups = new Array();
        this.periods = new Array();
        this.elements = new Array();
        this.offelements = new Array();
        this.initialize();
    }
    PeriodicTable.prototype.initialize = function () {
        for (var index = 1; index < 19; index++) {
            this.groups.push(new Group(index.toString()));
        }
        for (var index = 1; index < 8; index++) {
            this.periods.push(new Period(index.toString()));
        }
        var that = this; // Preserve context
        var elements = this.getJSON();
        elements.forEach(function (element) {
            if ((element.number > 56 && element.number < 72) ||
                (element.number > 88 && element.number < 104)) {
                element.style = {
                    'grid-column': element.xpos + 1
                };
                that.offelements.push(element);
            }
            else {
                if (element.number !== 119) {
                    element.style = {
                        'grid-column': element.xpos
                    };
                    that.elements.push(element);
                }
            }
        });
    };
    PeriodicTable.prototype.getJSON = function () {
        return new _assets_data__WEBPACK_IMPORTED_MODULE_0__["Data"]().elements;
    };
    return PeriodicTable;
}());

var Element = /** @class */ (function () {
    function Element() {
    }
    return Element;
}());

var Group = /** @class */ (function () {
    function Group(name) {
        this.name = name;
    }
    return Group;
}());

var Period = /** @class */ (function () {
    function Period(name) {
        this.name = name;
    }
    return Period;
}());



/***/ }),

/***/ "./src/assets/data.ts":
/*!****************************!*\
  !*** ./src/assets/data.ts ***!
  \****************************/
/*! exports provided: Data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
var Data = /** @class */ (function () {
    function Data() {
        this.elements =
            [
                {
                    "name": "Hydrogen",
                    "appearance": "colorless gas",
                    "atomic_mass": 1.008,
                    "boil": 20.271,
                    "category": "diatomic nonmetal",
                    "color": null,
                    "density": 0.08988,
                    "discovered_by": "Henry Cavendish",
                    "melt": 13.99,
                    "molar_heat": 28.836,
                    "named_by": "Antoine Lavoisier",
                    "number": 1,
                    "period": 1,
                    "phase": "Gas",
                    "source": "https://en.wikipedia.org/wiki/Hydrogen",
                    "spectral_img": "https://en.wikipedia.org/wiki/File:Hydrogen_Spectra.jpg",
                    "summary": "Hydrogen is a chemical element with chemical symbol H and atomic number 1. With an atomic weight of 1.00794 u, hydrogen is the lightest element on the periodic table. Its monatomic form (H) is the most abundant chemical substance in the Universe, constituting roughly 75% of all baryonic mass.",
                    "symbol": "H",
                    "xpos": 1,
                    "ypos": 1,
                    "shells": [
                        1
                    ]
                },
                {
                    "name": "Helium",
                    "appearance": "colorless gas, exhibiting a red-orange glow when placed in a high-voltage electric field",
                    "atomic_mass": 4.0026022,
                    "boil": 4.222,
                    "category": "noble gas",
                    "color": null,
                    "density": 0.1786,
                    "discovered_by": "Pierre Janssen",
                    "melt": 0.95,
                    "molar_heat": null,
                    "named_by": null,
                    "number": 2,
                    "period": 1,
                    "phase": "Gas",
                    "source": "https://en.wikipedia.org/wiki/Helium",
                    "spectral_img": "https://en.wikipedia.org/wiki/File:Helium_spectrum.jpg",
                    "summary": "Helium is a chemical element with symbol He and atomic number 2. It is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas that heads the noble gas group in the periodic table. Its boiling and melting points are the lowest among all the elements.",
                    "symbol": "He",
                    "xpos": 18,
                    "ypos": 1,
                    "shells": [
                        2
                    ]
                },
                {
                    "name": "Lithium",
                    "appearance": "silvery-white",
                    "atomic_mass": 6.94,
                    "boil": 1603,
                    "category": "alkali metal",
                    "color": null,
                    "density": 0.534,
                    "discovered_by": "Johan August Arfwedson",
                    "melt": 453.65,
                    "molar_heat": 24.86,
                    "named_by": null,
                    "number": 3,
                    "period": 2,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Lithium",
                    "spectral_img": null,
                    "summary": "Lithium (from Greek:\u03bb\u03af\u03b8\u03bf\u03c2 lithos, \"stone\") is a chemical element with the symbol Li and atomic number 3. It is a soft, silver-white metal belonging to the alkali metal group of chemical elements. Under standard conditions it is the lightest metal and the least dense solid element.",
                    "symbol": "Li",
                    "xpos": 1,
                    "ypos": 2,
                    "shells": [
                        2,
                        1
                    ]
                },
                {
                    "name": "Beryllium",
                    "appearance": "white-gray metallic",
                    "atomic_mass": 9.01218315,
                    "boil": 2742,
                    "category": "alkaline earth metal",
                    "color": null,
                    "density": 1.85,
                    "discovered_by": "Louis Nicolas Vauquelin",
                    "melt": 1560,
                    "molar_heat": 16.443,
                    "named_by": null,
                    "number": 4,
                    "period": 2,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Beryllium",
                    "spectral_img": null,
                    "summary": "Beryllium is a chemical element with symbol Be and atomic number 4. It is created through stellar nucleosynthesis and is a relatively rare element in the universe. It is a divalent element which occurs naturally only in combination with other elements in minerals.",
                    "symbol": "Be",
                    "xpos": 2,
                    "ypos": 2,
                    "shells": [
                        2,
                        2
                    ]
                },
                {
                    "name": "Boron",
                    "appearance": "black-brown",
                    "atomic_mass": 10.81,
                    "boil": 4200,
                    "category": "metalloid",
                    "color": null,
                    "density": 2.08,
                    "discovered_by": "Joseph Louis Gay-Lussac",
                    "melt": 2349,
                    "molar_heat": 11.087,
                    "named_by": null,
                    "number": 5,
                    "period": 2,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Boron",
                    "spectral_img": null,
                    "summary": "Boron is a metalloid chemical element with symbol B and atomic number 5. Produced entirely by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a low-abundance element in both the Solar system and the Earth's crust. Boron is concentrated on Earth by the water-solubility of its more common naturally occurring compounds, the borate minerals.",
                    "symbol": "B",
                    "xpos": 13,
                    "ypos": 2,
                    "shells": [
                        2,
                        3
                    ]
                },
                {
                    "name": "Carbon",
                    "appearance": null,
                    "atomic_mass": 12.011,
                    "boil": null,
                    "category": "polyatomic nonmetal",
                    "color": null,
                    "density": 1.821,
                    "discovered_by": "Ancient Egypt",
                    "melt": null,
                    "molar_heat": 8.517,
                    "named_by": null,
                    "number": 6,
                    "period": 2,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Carbon",
                    "spectral_img": "https://en.wikipedia.org/wiki/File:Carbon_Spectra.jpg",
                    "summary": "Carbon (from Latin:carbo \"coal\") is a chemical element with symbol C and atomic number 6. On the periodic table, it is the first (row 2) of six elements in column (group) 14, which have in common the composition of their outer electron shell. It is nonmetallic and tetravalent\u2014making four electrons available to form covalent chemical bonds.",
                    "symbol": "C",
                    "xpos": 14,
                    "ypos": 2,
                    "shells": [
                        2,
                        4
                    ]
                },
                {
                    "name": "Nitrogen",
                    "appearance": "colorless gas, liquid or solid",
                    "atomic_mass": 14.007,
                    "boil": 77.355,
                    "category": "diatomic nonmetal",
                    "color": null,
                    "density": 1.251,
                    "discovered_by": "Daniel Rutherford",
                    "melt": 63.15,
                    "molar_heat": null,
                    "named_by": "Jean-Antoine Chaptal",
                    "number": 7,
                    "period": 2,
                    "phase": "Gas",
                    "source": "https://en.wikipedia.org/wiki/Nitrogen",
                    "spectral_img": "https://en.wikipedia.org/wiki/File:Nitrogen_Spectra.jpg",
                    "summary": "Nitrogen is a chemical element with symbol N and atomic number 7. It is the lightest pnictogen and at room temperature, it is a transparent, odorless diatomic gas. Nitrogen is a common element in the universe, estimated at about seventh in total abundance in the Milky Way and the Solar System.",
                    "symbol": "N",
                    "xpos": 15,
                    "ypos": 2,
                    "shells": [
                        2,
                        5
                    ]
                },
                {
                    "name": "Oxygen",
                    "appearance": null,
                    "atomic_mass": 15.999,
                    "boil": 90.188,
                    "category": "diatomic nonmetal",
                    "color": null,
                    "density": 1.429,
                    "discovered_by": "Carl Wilhelm Scheele",
                    "melt": 54.36,
                    "molar_heat": null,
                    "named_by": "Antoine Lavoisier",
                    "number": 8,
                    "period": 2,
                    "phase": "Gas",
                    "source": "https://en.wikipedia.org/wiki/Oxygen",
                    "spectral_img": "https://en.wikipedia.org/wiki/File:Oxygen_spectre.jpg",
                    "summary": "Oxygen is a chemical element with symbol O and atomic number 8. It is a member of the chalcogen group on the periodic table and is a highly reactive nonmetal and oxidizing agent that readily forms compounds (notably oxides) with most elements. By mass, oxygen is the third-most abundant element in the universe, after hydrogen and helium.",
                    "symbol": "O",
                    "xpos": 16,
                    "ypos": 2,
                    "shells": [
                        2,
                        6
                    ]
                },
                {
                    "name": "Fluorine",
                    "appearance": null,
                    "atomic_mass": 18.9984031636,
                    "boil": 85.03,
                    "category": "diatomic nonmetal",
                    "color": null,
                    "density": 1.696,
                    "discovered_by": "Andr\u00e9-Marie Amp\u00e8re",
                    "melt": 53.48,
                    "molar_heat": null,
                    "named_by": "Humphry Davy",
                    "number": 9,
                    "period": 2,
                    "phase": "Gas",
                    "source": "https://en.wikipedia.org/wiki/Fluorine",
                    "spectral_img": null,
                    "summary": "Fluorine is a chemical element with symbol F and atomic number 9. It is the lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard conditions. As the most electronegative element, it is extremely reactive:almost all other elements, including some noble gases, form compounds with fluorine.",
                    "symbol": "F",
                    "xpos": 17,
                    "ypos": 2,
                    "shells": [
                        2,
                        7
                    ]
                },
                {
                    "name": "Neon",
                    "appearance": "colorless gas exhibiting an orange-red glow when placed in a high voltage electric field",
                    "atomic_mass": 20.17976,
                    "boil": 27.104,
                    "category": "noble gas",
                    "color": null,
                    "density": 0.9002,
                    "discovered_by": "Morris Travers",
                    "melt": 24.56,
                    "molar_heat": null,
                    "named_by": null,
                    "number": 10,
                    "period": 2,
                    "phase": "Gas",
                    "source": "https://en.wikipedia.org/wiki/Neon",
                    "spectral_img": "https://en.wikipedia.org/wiki/File:Neon_spectra.jpg",
                    "summary": "Neon is a chemical element with symbol Ne and atomic number 10. It is in group 18 (noble gases) of the periodic table. Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about two-thirds the density of air.",
                    "symbol": "Ne",
                    "xpos": 18,
                    "ypos": 2,
                    "shells": [
                        2,
                        8
                    ]
                },
                {
                    "name": "Sodium",
                    "appearance": "silvery white metallic",
                    "atomic_mass": 22.989769282,
                    "boil": 1156.09,
                    "category": "alkali metal",
                    "color": null,
                    "density": 0.968,
                    "discovered_by": "Humphry Davy",
                    "melt": 370.944,
                    "molar_heat": 28.23,
                    "named_by": null,
                    "number": 11,
                    "period": 3,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Sodium",
                    "spectral_img": "https://en.wikipedia.org/wiki/File:Sodium_Spectra.jpg",
                    "summary": "Sodium /\u02c8so\u028adi\u0259m/ is a chemical element with symbol Na (from Ancient Greek \u039d\u03ac\u03c4\u03c1\u03b9\u03bf) and atomic number 11. It is a soft, silver-white, highly reactive metal. In the Periodic table it is in column 1 (alkali metals), and shares with the other six elements in that column that it has a single electron in its outer shell, which it readily donates, creating a positively charged atom - a cation.",
                    "symbol": "Na",
                    "xpos": 1,
                    "ypos": 3,
                    "shells": [
                        2,
                        8,
                        1
                    ]
                },
                {
                    "name": "Magnesium",
                    "appearance": "shiny grey solid",
                    "atomic_mass": 24.305,
                    "boil": 1363,
                    "category": "alkaline earth metal",
                    "color": null,
                    "density": 1.738,
                    "discovered_by": "Joseph Black",
                    "melt": 923,
                    "molar_heat": 24.869,
                    "named_by": null,
                    "number": 12,
                    "period": 3,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Magnesium",
                    "spectral_img": "https://en.wikipedia.org/wiki/File:Magnesium_Spectra.jpg",
                    "summary": "Magnesium is a chemical element with symbol Mg and atomic number 12. It is a shiny gray solid which bears a close physical resemblance to the other five elements in the second column (Group 2, or alkaline earth metals) of the periodic table:they each have the same electron configuration in their outer electron shell producing a similar crystal structure. Magnesium is the ninth most abundant element in the universe.",
                    "symbol": "Mg",
                    "xpos": 2,
                    "ypos": 3,
                    "shells": [
                        2,
                        8,
                        2
                    ]
                },
                {
                    "name": "Aluminium",
                    "appearance": "silvery gray metallic",
                    "atomic_mass": 26.98153857,
                    "boil": 2743,
                    "category": "post-transition metal",
                    "color": null,
                    "density": 2.7,
                    "discovered_by": null,
                    "melt": 933.47,
                    "molar_heat": 24.2,
                    "named_by": "Humphry Davy",
                    "number": 13,
                    "period": 3,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Aluminium",
                    "spectral_img": null,
                    "summary": "Aluminium (or aluminum; see different endings) is a chemical element in the boron group with symbol Al and atomic number 13. It is a silvery-white, soft, nonmagnetic, ductile metal. Aluminium is the third most abundant element (after oxygen and silicon), and the most abundant metal, in the Earth's crust.",
                    "symbol": "Al",
                    "xpos": 13,
                    "ypos": 3,
                    "shells": [
                        2,
                        8,
                        3
                    ]
                },
                {
                    "name": "Silicon",
                    "appearance": "crystalline, reflective with bluish-tinged faces",
                    "atomic_mass": 28.085,
                    "boil": 3538,
                    "category": "metalloid",
                    "color": null,
                    "density": 2.329,
                    "discovered_by": "J\u00f6ns Jacob Berzelius",
                    "melt": 1687,
                    "molar_heat": 19.789,
                    "named_by": "Thomas Thomson (chemist)",
                    "number": 14,
                    "period": 3,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Silicon",
                    "spectral_img": "https://en.wikipedia.org/wiki/File:Silicon_Spectra.jpg",
                    "summary": "Silicon is a chemical element with symbol Si and atomic number 14. It is a tetravalent metalloid, more reactive than germanium, the metalloid directly below it in the table. Controversy about silicon's character dates to its discovery.",
                    "symbol": "Si",
                    "xpos": 14,
                    "ypos": 3,
                    "shells": [
                        2,
                        8,
                        4
                    ]
                },
                {
                    "name": "Phosphorus",
                    "appearance": "colourless, waxy white, yellow, scarlet, red, violet, black",
                    "atomic_mass": 30.9737619985,
                    "boil": null,
                    "category": "polyatomic nonmetal",
                    "color": null,
                    "density": 1.823,
                    "discovered_by": "Hennig Brand",
                    "melt": null,
                    "molar_heat": 23.824,
                    "named_by": null,
                    "number": 15,
                    "period": 3,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Phosphorus",
                    "spectral_img": null,
                    "summary": "Phosphorus is a chemical element with symbol P and atomic number 15. As an element, phosphorus exists in two major forms\u2014white phosphorus and red phosphorus\u2014but due to its high reactivity, phosphorus is never found as a free element on Earth. Instead phosphorus-containing minerals are almost always present in their maximally oxidised state, as inorganic phosphate rocks.",
                    "symbol": "P",
                    "xpos": 15,
                    "ypos": 3,
                    "shells": [
                        2,
                        8,
                        5
                    ]
                },
                {
                    "name": "Sulfur",
                    "appearance": "lemon yellow sintered microcrystals",
                    "atomic_mass": 32.06,
                    "boil": 717.8,
                    "category": "polyatomic nonmetal",
                    "color": null,
                    "density": 2.07,
                    "discovered_by": "Ancient china",
                    "melt": 388.36,
                    "molar_heat": 22.75,
                    "named_by": null,
                    "number": 16,
                    "period": 3,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Sulfur",
                    "spectral_img": "https://en.wikipedia.org/wiki/File:Sulfur_Spectrum.jpg",
                    "summary": "Sulfur or sulphur (see spelling differences) is a chemical element with symbol S and atomic number 16. It is an abundant, multivalent non-metal. Under normal conditions, sulfur atoms form cyclic octatomic molecules with chemical formula S8.",
                    "symbol": "S",
                    "xpos": 16,
                    "ypos": 3,
                    "shells": [
                        2,
                        8,
                        6
                    ]
                },
                {
                    "name": "Chlorine",
                    "appearance": "pale yellow-green gas",
                    "atomic_mass": 35.45,
                    "boil": 239.11,
                    "category": "diatomic nonmetal",
                    "color": null,
                    "density": 3.2,
                    "discovered_by": "Carl Wilhelm Scheele",
                    "melt": 171.6,
                    "molar_heat": null,
                    "named_by": null,
                    "number": 17,
                    "period": 3,
                    "phase": "Gas",
                    "source": "https://en.wikipedia.org/wiki/Chlorine",
                    "spectral_img": "https://en.wikipedia.org/wiki/File:Chlorine_spectrum_visible.png",
                    "summary": "Chlorine is a chemical element with symbol Cl and atomic number 17. It also has a relative atomic mass of 35.5. Chlorine is in the halogen group (17) and is the second lightest halogen following fluorine.",
                    "symbol": "Cl",
                    "xpos": 17,
                    "ypos": 3,
                    "shells": [
                        2,
                        8,
                        7
                    ]
                },
                {
                    "name": "Argon",
                    "appearance": "colorless gas exhibiting a lilac/violet glow when placed in a high voltage electric field",
                    "atomic_mass": 39.9481,
                    "boil": 87.302,
                    "category": "noble gas",
                    "color": null,
                    "density": 1.784,
                    "discovered_by": "Lord Rayleigh",
                    "melt": 83.81,
                    "molar_heat": null,
                    "named_by": null,
                    "number": 18,
                    "period": 3,
                    "phase": "Gas",
                    "source": "https://en.wikipedia.org/wiki/Argon",
                    "spectral_img": "https://en.wikipedia.org/wiki/File:Argon_Spectrum.png",
                    "summary": "Argon is a chemical element with symbol Ar and atomic number 18. It is in group 18 of the periodic table and is a noble gas. Argon is the third most common gas in the Earth's atmosphere, at 0.934% (9,340 ppmv), making it over twice as abundant as the next most common atmospheric gas, water vapor (which averages about 4000 ppmv, but varies greatly), and 23 times as abundant as the next most common non-condensing atmospheric gas, carbon dioxide (400 ppmv), and more than 500 times as abundant as the next most common noble gas, neon (18 ppmv).",
                    "symbol": "Ar",
                    "xpos": 18,
                    "ypos": 3,
                    "shells": [
                        2,
                        8,
                        8
                    ]
                },
                {
                    "name": "Potassium",
                    "appearance": "silvery gray",
                    "atomic_mass": 39.09831,
                    "boil": 1032,
                    "category": "alkali metal",
                    "color": null,
                    "density": 0.862,
                    "discovered_by": "Humphry Davy",
                    "melt": 336.7,
                    "molar_heat": 29.6,
                    "named_by": null,
                    "number": 19,
                    "period": 4,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Potassium",
                    "spectral_img": "https://en.wikipedia.org/wiki/File:Potassium_Spectrum.jpg",
                    "summary": "Potassium is a chemical element with symbol K (derived from Neo-Latin, kalium) and atomic number 19. It was first isolated from potash, the ashes of plants, from which its name is derived. In the Periodic table, potassium is one of seven elements in column (group) 1 (alkali metals):they all have a single valence electron in their outer electron shell, which they readily give up to create an atom with a positive charge - a cation, and combine with anions to form salts.",
                    "symbol": "K",
                    "xpos": 1,
                    "ypos": 4,
                    "shells": [
                        2,
                        8,
                        8,
                        1
                    ]
                },
                {
                    "name": "Calcium",
                    "appearance": null,
                    "atomic_mass": 40.0784,
                    "boil": 1757,
                    "category": "alkaline earth metal",
                    "color": null,
                    "density": 1.55,
                    "discovered_by": "Humphry Davy",
                    "melt": 1115,
                    "molar_heat": 25.929,
                    "named_by": null,
                    "number": 20,
                    "period": 4,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Calcium",
                    "spectral_img": "https://en.wikipedia.org/wiki/File:Calcium_Spectrum.png",
                    "summary": "Calcium is a chemical element with symbol Ca and atomic number 20. Calcium is a soft gray alkaline earth metal, fifth-most-abundant element by mass in the Earth's crust. The ion Ca2+ is also the fifth-most-abundant dissolved ion in seawater by both molarity and mass, after sodium, chloride, magnesium, and sulfate.",
                    "symbol": "Ca",
                    "xpos": 2,
                    "ypos": 4,
                    "shells": [
                        2,
                        8,
                        8,
                        2
                    ]
                },
                {
                    "name": "Scandium",
                    "appearance": "silvery white",
                    "atomic_mass": 44.9559085,
                    "boil": 3109,
                    "category": "transition metal",
                    "color": null,
                    "density": 2.985,
                    "discovered_by": "Lars Fredrik Nilson",
                    "melt": 1814,
                    "molar_heat": 25.52,
                    "named_by": null,
                    "number": 21,
                    "period": 4,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Scandium",
                    "spectral_img": null,
                    "summary": "Scandium is a chemical element with symbol Sc and atomic number 21. A silvery-white metallic d-block element, it has historically been sometimes classified as a rare earth element, together with yttrium and the lanthanoids. It was discovered in 1879 by spectral analysis of the minerals euxenite and gadolinite from Scandinavia.",
                    "symbol": "Sc",
                    "xpos": 3,
                    "ypos": 4,
                    "shells": [
                        2,
                        8,
                        9,
                        2
                    ]
                },
                {
                    "name": "Titanium",
                    "appearance": "silvery grey-white metallic",
                    "atomic_mass": 47.8671,
                    "boil": 3560,
                    "category": "transition metal",
                    "color": null,
                    "density": 4.506,
                    "discovered_by": "William Gregor",
                    "melt": 1941,
                    "molar_heat": 25.06,
                    "named_by": "Martin Heinrich Klaproth",
                    "number": 22,
                    "period": 4,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Titanium",
                    "spectral_img": null,
                    "summary": "Titanium is a chemical element with symbol Ti and atomic number 22. It is a lustrous transition metal with a silver color, low density and high strength. It is highly resistant to corrosion in sea water, aqua regia and chlorine.",
                    "symbol": "Ti",
                    "xpos": 4,
                    "ypos": 4,
                    "shells": [
                        2,
                        8,
                        10,
                        2
                    ]
                },
                {
                    "name": "Vanadium",
                    "appearance": "blue-silver-grey metal",
                    "atomic_mass": 50.94151,
                    "boil": 3680,
                    "category": "transition metal",
                    "color": null,
                    "density": 6.0,
                    "discovered_by": "Andr\u00e9s Manuel del R\u00edo",
                    "melt": 2183,
                    "molar_heat": 24.89,
                    "named_by": "Isotopes of vanadium",
                    "number": 23,
                    "period": 4,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Vanadium",
                    "spectral_img": null,
                    "summary": "Vanadium is a chemical element with symbol V and atomic number 23. It is a hard, silvery grey, ductile and malleable transition metal. The element is found only in chemically combined form in nature, but once isolated artificially, the formation of an oxide layer stabilizes the free metal somewhat against further oxidation.",
                    "symbol": "V",
                    "xpos": 5,
                    "ypos": 4,
                    "shells": [
                        2,
                        8,
                        11,
                        2
                    ]
                },
                {
                    "name": "Chromium",
                    "appearance": "silvery metallic",
                    "atomic_mass": 51.99616,
                    "boil": 2944,
                    "category": "transition metal",
                    "color": null,
                    "density": 7.19,
                    "discovered_by": "Louis Nicolas Vauquelin",
                    "melt": 2180,
                    "molar_heat": 23.35,
                    "named_by": null,
                    "number": 24,
                    "period": 4,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Chromium",
                    "spectral_img": null,
                    "summary": "Chromium is a chemical element with symbol Cr and atomic number 24. It is the first element in Group 6. It is a steely-gray, lustrous, hard and brittle metal which takes a high polish, resists tarnishing, and has a high melting point.",
                    "symbol": "Cr",
                    "xpos": 6,
                    "ypos": 4,
                    "shells": [
                        2,
                        8,
                        13,
                        1
                    ]
                },
                {
                    "name": "Manganese",
                    "appearance": "silvery metallic",
                    "atomic_mass": 54.9380443,
                    "boil": 2334,
                    "category": "transition metal",
                    "color": null,
                    "density": 7.21,
                    "discovered_by": "Torbern Olof Bergman",
                    "melt": 1519,
                    "molar_heat": 26.32,
                    "named_by": null,
                    "number": 25,
                    "period": 4,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Manganese",
                    "spectral_img": null,
                    "summary": "Manganese is a chemical element with symbol Mn and atomic number 25. It is not found as a free element in nature; it is often found in combination with iron, and in many minerals. Manganese is a metal with important industrial metal alloy uses, particularly in stainless steels.",
                    "symbol": "Mn",
                    "xpos": 7,
                    "ypos": 4,
                    "shells": [
                        2,
                        8,
                        13,
                        2
                    ]
                },
                {
                    "name": "Iron",
                    "appearance": "lustrous metallic with a grayish tinge",
                    "atomic_mass": 55.8452,
                    "boil": 3134,
                    "category": "transition metal",
                    "color": null,
                    "density": 7.874,
                    "discovered_by": "5000 BC",
                    "melt": 1811,
                    "molar_heat": 25.1,
                    "named_by": null,
                    "number": 26,
                    "period": 4,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Iron",
                    "spectral_img": "https://en.wikipedia.org/wiki/File:Iron_Spectrum.jpg",
                    "summary": "Iron is a chemical element with symbol Fe (from Latin:ferrum) and atomic number 26. It is a metal in the first transition series. It is by mass the most common element on Earth, forming much of Earth's outer and inner core.",
                    "symbol": "Fe",
                    "xpos": 8,
                    "ypos": 4,
                    "shells": [
                        2,
                        8,
                        14,
                        2
                    ]
                },
                {
                    "name": "Cobalt",
                    "appearance": "hard lustrous gray metal",
                    "atomic_mass": 58.9331944,
                    "boil": 3200,
                    "category": "transition metal",
                    "color": "metallic gray",
                    "density": 8.9,
                    "discovered_by": "Georg Brandt",
                    "melt": 1768,
                    "molar_heat": 24.81,
                    "named_by": null,
                    "number": 27,
                    "period": 4,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Cobalt",
                    "spectral_img": null,
                    "summary": "Cobalt is a chemical element with symbol Co and atomic number 27. Like nickel, cobalt in the Earth's crust is found only in chemically combined form, save for small deposits found in alloys of natural meteoric iron. The free element, produced by reductive smelting, is a hard, lustrous, silver-gray metal.",
                    "symbol": "Co",
                    "xpos": 9,
                    "ypos": 4,
                    "shells": [
                        2,
                        8,
                        15,
                        2
                    ]
                },
                {
                    "name": "Nickel",
                    "appearance": "lustrous, metallic, and silver with a gold tinge",
                    "atomic_mass": 58.69344,
                    "boil": 3003,
                    "category": "transition metal",
                    "color": null,
                    "density": 8.908,
                    "discovered_by": "Axel Fredrik Cronstedt",
                    "melt": 1728,
                    "molar_heat": 26.07,
                    "named_by": null,
                    "number": 28,
                    "period": 4,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Nickel",
                    "spectral_img": null,
                    "summary": "Nickel is a chemical element with symbol Ni and atomic number 28. It is a silvery-white lustrous metal with a slight golden tinge. Nickel belongs to the transition metals and is hard and ductile.",
                    "symbol": "Ni",
                    "xpos": 10,
                    "ypos": 4,
                    "shells": [
                        2,
                        8,
                        16,
                        2
                    ]
                },
                {
                    "name": "Copper",
                    "appearance": "red-orange metallic luster",
                    "atomic_mass": 63.5463,
                    "boil": 2835,
                    "category": "transition metal",
                    "color": null,
                    "density": 8.96,
                    "discovered_by": "Middle East",
                    "melt": 1357.77,
                    "molar_heat": 24.44,
                    "named_by": null,
                    "number": 29,
                    "period": 4,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Copper",
                    "spectral_img": null,
                    "summary": "Copper is a chemical element with symbol Cu (from Latin:cuprum) and atomic number 29. It is a soft, malleable and ductile metal with very high thermal and electrical conductivity. A freshly exposed surface of pure copper has a reddish-orange color.",
                    "symbol": "Cu",
                    "xpos": 11,
                    "ypos": 4,
                    "shells": [
                        2,
                        8,
                        18,
                        1
                    ]
                },
                {
                    "name": "Zinc",
                    "appearance": "silver-gray",
                    "atomic_mass": 65.382,
                    "boil": 1180,
                    "category": "post-transition metal",
                    "color": null,
                    "density": 7.14,
                    "discovered_by": "India",
                    "melt": 692.68,
                    "molar_heat": 25.47,
                    "named_by": null,
                    "number": 30,
                    "period": 4,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Zinc",
                    "spectral_img": null,
                    "summary": "Zinc, in commerce also spelter, is a chemical element with symbol Zn and atomic number 30. It is the first element of group 12 of the periodic table. In some respects zinc is chemically similar to magnesium:its ion is of similar size and its only common oxidation state is +2.",
                    "symbol": "Zn",
                    "xpos": 12,
                    "ypos": 4,
                    "shells": [
                        2,
                        8,
                        18,
                        2
                    ]
                },
                {
                    "name": "Gallium",
                    "appearance": "silver-white",
                    "atomic_mass": 69.7231,
                    "boil": 2673,
                    "category": "post-transition metal",
                    "color": null,
                    "density": 5.91,
                    "discovered_by": "Lecoq de Boisbaudran",
                    "melt": 302.9146,
                    "molar_heat": 25.86,
                    "named_by": null,
                    "number": 31,
                    "period": 4,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Gallium",
                    "spectral_img": null,
                    "summary": "Gallium is a chemical element with symbol Ga and atomic number 31. Elemental gallium does not occur in free form in nature, but as the gallium(III) compounds that are in trace amounts in zinc ores and in bauxite. Gallium is a soft, silvery metal, and elemental gallium is a brittle solid at low temperatures, and melts at 29.76 \u00b0C (85.57 \u00b0F) (slightly above room temperature).",
                    "symbol": "Ga",
                    "xpos": 13,
                    "ypos": 4,
                    "shells": [
                        2,
                        8,
                        18,
                        3
                    ]
                },
                {
                    "name": "Germanium",
                    "appearance": "grayish-white",
                    "atomic_mass": 72.6308,
                    "boil": 3106,
                    "category": "metalloid",
                    "color": null,
                    "density": 5.323,
                    "discovered_by": "Clemens Winkler",
                    "melt": 1211.4,
                    "molar_heat": 23.222,
                    "named_by": null,
                    "number": 32,
                    "period": 4,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Germanium",
                    "spectral_img": null,
                    "summary": "Germanium is a chemical element with symbol Ge and atomic number 32. It is a lustrous, hard, grayish-white metalloid in the carbon group, chemically similar to its group neighbors tin and silicon. Purified germanium is a semiconductor, with an appearance most similar to elemental silicon.",
                    "symbol": "Ge",
                    "xpos": 14,
                    "ypos": 4,
                    "shells": [
                        2,
                        8,
                        18,
                        4
                    ]
                },
                {
                    "name": "Arsenic",
                    "appearance": "metallic grey",
                    "atomic_mass": 74.9215956,
                    "boil": null,
                    "category": "metalloid",
                    "color": null,
                    "density": 5.727,
                    "discovered_by": "Bronze Age",
                    "melt": null,
                    "molar_heat": 24.64,
                    "named_by": null,
                    "number": 33,
                    "period": 4,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Arsenic",
                    "spectral_img": null,
                    "summary": "Arsenic is a chemical element with symbol As and atomic number 33. Arsenic occurs in many minerals, usually in conjunction with sulfur and metals, and also as a pure elemental crystal. Arsenic is a metalloid.",
                    "symbol": "As",
                    "xpos": 15,
                    "ypos": 4,
                    "shells": [
                        2,
                        8,
                        18,
                        5
                    ]
                },
                {
                    "name": "Selenium",
                    "appearance": "black, red, and gray (not pictured) allotropes",
                    "atomic_mass": 78.9718,
                    "boil": 958,
                    "category": "polyatomic nonmetal",
                    "color": null,
                    "density": 4.81,
                    "discovered_by": "J\u00f6ns Jakob Berzelius",
                    "melt": 494,
                    "molar_heat": 25.363,
                    "named_by": null,
                    "number": 34,
                    "period": 4,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Selenium",
                    "spectral_img": null,
                    "summary": "Selenium is a chemical element with symbol Se and atomic number 34. It is a nonmetal with properties that are intermediate between those of its periodic table column-adjacent chalcogen elements sulfur and tellurium. It rarely occurs in its elemental state in nature, or as pure ore compounds.",
                    "symbol": "Se",
                    "xpos": 16,
                    "ypos": 4,
                    "shells": [
                        2,
                        8,
                        18,
                        6
                    ]
                },
                {
                    "name": "Bromine",
                    "appearance": null,
                    "atomic_mass": 79.904,
                    "boil": 332.0,
                    "category": "diatomic nonmetal",
                    "color": null,
                    "density": 23.1028,
                    "discovered_by": "Antoine J\u00e9r\u00f4me Balard",
                    "melt": 265.8,
                    "molar_heat": null,
                    "named_by": null,
                    "number": 35,
                    "period": 4,
                    "phase": "Liquid",
                    "source": "https://en.wikipedia.org/wiki/Bromine",
                    "spectral_img": null,
                    "summary": "Bromine (from Ancient Greek:\u03b2\u03c1\u1ff6\u03bc\u03bf\u03c2, br\u00f3mos, meaning \"stench\") is a chemical element with symbol Br, and atomic number 35. It is a halogen. The element was isolated independently by two chemists, Carl Jacob L\u00f6wig and Antoine Jerome Balard, in 1825\u20131826.",
                    "symbol": "Br",
                    "xpos": 17,
                    "ypos": 4,
                    "shells": [
                        2,
                        8,
                        18,
                        7
                    ]
                },
                {
                    "name": "Krypton",
                    "appearance": "colorless gas, exhibiting a whitish glow in a high electric field",
                    "atomic_mass": 83.7982,
                    "boil": 119.93,
                    "category": "noble gas",
                    "color": null,
                    "density": 3.749,
                    "discovered_by": "William Ramsay",
                    "melt": 115.78,
                    "molar_heat": null,
                    "named_by": null,
                    "number": 36,
                    "period": 4,
                    "phase": "Gas",
                    "source": "https://en.wikipedia.org/wiki/Krypton",
                    "spectral_img": "https://en.wikipedia.org/wiki/File:Krypton_Spectrum.jpg",
                    "summary": "Krypton (from Greek:\u03ba\u03c1\u03c5\u03c0\u03c4\u03cc\u03c2 kryptos \"the hidden one\") is a chemical element with symbol Kr and atomic number 36. It is a member of group 18 (noble gases) elements. A colorless, odorless, tasteless noble gas, krypton occurs in trace amounts in the atmosphere, is isolated by fractionally distilling liquefied air, and is often used with other rare gases in fluorescent lamps.",
                    "symbol": "Kr",
                    "xpos": 18,
                    "ypos": 4,
                    "shells": [
                        2,
                        8,
                        18,
                        8
                    ]
                },
                {
                    "name": "Rubidium",
                    "appearance": "grey white",
                    "atomic_mass": 85.46783,
                    "boil": 961,
                    "category": "alkali metal",
                    "color": null,
                    "density": 1.532,
                    "discovered_by": "Robert Bunsen",
                    "melt": 312.45,
                    "molar_heat": 31.06,
                    "named_by": null,
                    "number": 37,
                    "period": 5,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Rubidium",
                    "spectral_img": null,
                    "summary": "Rubidium is a chemical element with symbol Rb and atomic number 37. Rubidium is a soft, silvery-white metallic element of the alkali metal group, with an atomic mass of 85.4678. Elemental rubidium is highly reactive, with properties similar to those of other alkali metals, such as very rapid oxidation in air.",
                    "symbol": "Rb",
                    "xpos": 1,
                    "ypos": 5,
                    "shells": [
                        2,
                        8,
                        18,
                        8,
                        1
                    ]
                },
                {
                    "name": "Strontium",
                    "appearance": null,
                    "atomic_mass": 87.621,
                    "boil": 1650,
                    "category": "alkaline earth metal",
                    "color": null,
                    "density": 2.64,
                    "discovered_by": "William Cruickshank (chemist)",
                    "melt": 1050,
                    "molar_heat": 26.4,
                    "named_by": null,
                    "number": 38,
                    "period": 5,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Strontium",
                    "spectral_img": null,
                    "summary": "Strontium is a chemical element with symbol Sr and atomic number 38. An alkaline earth metal, strontium is a soft silver-white or yellowish metallic element that is highly reactive chemically. The metal turns yellow when it is exposed to air.",
                    "symbol": "Sr",
                    "xpos": 2,
                    "ypos": 5,
                    "shells": [
                        2,
                        8,
                        18,
                        8,
                        2
                    ]
                },
                {
                    "name": "Yttrium",
                    "appearance": "silvery white",
                    "atomic_mass": 88.905842,
                    "boil": 3203,
                    "category": "transition metal",
                    "color": null,
                    "density": 4.472,
                    "discovered_by": "Johan Gadolin",
                    "melt": 1799,
                    "molar_heat": 26.53,
                    "named_by": null,
                    "number": 39,
                    "period": 5,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Yttrium",
                    "spectral_img": null,
                    "summary": "Yttrium is a chemical element with symbol Y and atomic number 39. It is a silvery-metallic transition metal chemically similar to the lanthanides and it has often been classified as a \"rare earth element\". Yttrium is almost always found combined with the lanthanides in rare earth minerals and is never found in nature as a free element.",
                    "symbol": "Y",
                    "xpos": 3,
                    "ypos": 5,
                    "shells": [
                        2,
                        8,
                        18,
                        9,
                        2
                    ]
                },
                {
                    "name": "Zirconium",
                    "appearance": "silvery white",
                    "atomic_mass": 91.2242,
                    "boil": 4650,
                    "category": "transition metal",
                    "color": null,
                    "density": 6.52,
                    "discovered_by": "Martin Heinrich Klaproth",
                    "melt": 2128,
                    "molar_heat": 25.36,
                    "named_by": null,
                    "number": 40,
                    "period": 5,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Zirconium",
                    "spectral_img": null,
                    "summary": "Zirconium is a chemical element with symbol Zr and atomic number 40. The name of zirconium is taken from the name of the mineral zircon, the most important source of zirconium. The word zircon comes from the Persian word zargun \u0632\u0631\u06af\u0648\u0646, meaning \"gold-colored\".",
                    "symbol": "Zr",
                    "xpos": 4,
                    "ypos": 5,
                    "shells": [
                        2,
                        8,
                        18,
                        10,
                        2
                    ]
                },
                {
                    "name": "Niobium",
                    "appearance": "gray metallic, bluish when oxidized",
                    "atomic_mass": 92.906372,
                    "boil": 5017,
                    "category": "transition metal",
                    "color": null,
                    "density": 8.57,
                    "discovered_by": "Charles Hatchett",
                    "melt": 2750,
                    "molar_heat": 24.6,
                    "named_by": null,
                    "number": 41,
                    "period": 5,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Niobium",
                    "spectral_img": null,
                    "summary": "Niobium, formerly columbium, is a chemical element with symbol Nb (formerly Cb) and atomic number 41. It is a soft, grey, ductile transition metal, which is often found in the pyrochlore mineral, the main commercial source for niobium, and columbite. The name comes from Greek mythology:Niobe, daughter of Tantalus since it is so similar to tantalum.",
                    "symbol": "Nb",
                    "xpos": 5,
                    "ypos": 5,
                    "shells": [
                        2,
                        8,
                        18,
                        12,
                        1
                    ]
                },
                {
                    "name": "Molybdenum",
                    "appearance": "gray metallic",
                    "atomic_mass": 95.951,
                    "boil": 4912,
                    "category": "transition metal",
                    "color": null,
                    "density": 10.28,
                    "discovered_by": "Carl Wilhelm Scheele",
                    "melt": 2896,
                    "molar_heat": 24.06,
                    "named_by": null,
                    "number": 42,
                    "period": 5,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Molybdenum",
                    "spectral_img": null,
                    "summary": "Molybdenum is a chemical element with symbol Mo and atomic number 42. The name is from Neo-Latin molybdaenum, from Ancient Greek \u039c\u03cc\u03bb\u03c5\u03b2\u03b4\u03bf\u03c2 molybdos, meaning lead, since its ores were confused with lead ores. Molybdenum minerals have been known throughout history, but the element was discovered (in the sense of differentiating it as a new entity from the mineral salts of other metals) in 1778 by Carl Wilhelm Scheele.",
                    "symbol": "Mo",
                    "xpos": 6,
                    "ypos": 5,
                    "shells": [
                        2,
                        8,
                        18,
                        13,
                        1
                    ]
                },
                {
                    "name": "Technetium",
                    "appearance": "shiny gray metal",
                    "atomic_mass": 98,
                    "boil": 4538,
                    "category": "transition metal",
                    "color": null,
                    "density": 11,
                    "discovered_by": "Emilio Segr\u00e8",
                    "melt": 2430,
                    "molar_heat": 24.27,
                    "named_by": null,
                    "number": 43,
                    "period": 5,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Technetium",
                    "spectral_img": null,
                    "summary": "Technetium (/t\u025bk\u02c8ni\u02d0\u0283i\u0259m/) is a chemical element with symbol Tc and atomic number 43. It is the element with the lowest atomic number in the periodic table that has no stable isotopes:every form of it is radioactive. Nearly all technetium is produced synthetically, and only minute amounts are found in nature.",
                    "symbol": "Tc",
                    "xpos": 7,
                    "ypos": 5,
                    "shells": [
                        2,
                        8,
                        18,
                        13,
                        2
                    ]
                },
                {
                    "name": "Ruthenium",
                    "appearance": "silvery white metallic",
                    "atomic_mass": 101.072,
                    "boil": 4423,
                    "category": "transition metal",
                    "color": null,
                    "density": 12.45,
                    "discovered_by": "Karl Ernst Claus",
                    "melt": 2607,
                    "molar_heat": 24.06,
                    "named_by": null,
                    "number": 44,
                    "period": 5,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Ruthenium",
                    "spectral_img": null,
                    "summary": "Ruthenium is a chemical element with symbol Ru and atomic number 44. It is a rare transition metal belonging to the platinum group of the periodic table. Like the other metals of the platinum group, ruthenium is inert to most other chemicals.",
                    "symbol": "Ru",
                    "xpos": 8,
                    "ypos": 5,
                    "shells": [
                        2,
                        8,
                        18,
                        15,
                        1
                    ]
                },
                {
                    "name": "Rhodium",
                    "appearance": "silvery white metallic",
                    "atomic_mass": 102.905502,
                    "boil": 3968,
                    "category": "transition metal",
                    "color": null,
                    "density": 12.41,
                    "discovered_by": "William Hyde Wollaston",
                    "melt": 2237,
                    "molar_heat": 24.98,
                    "named_by": null,
                    "number": 45,
                    "period": 5,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Rhodium",
                    "spectral_img": null,
                    "summary": "Rhodium is a chemical element with symbol Rh and atomic number 45. It is a rare, silvery-white, hard, and chemically inert transition metal. It is a member of the platinum group.",
                    "symbol": "Rh",
                    "xpos": 9,
                    "ypos": 5,
                    "shells": [
                        2,
                        8,
                        18,
                        16,
                        1
                    ]
                },
                {
                    "name": "Palladium",
                    "appearance": "silvery white",
                    "atomic_mass": 106.421,
                    "boil": 3236,
                    "category": "transition metal",
                    "color": null,
                    "density": 12.023,
                    "discovered_by": "William Hyde Wollaston",
                    "melt": 1828.05,
                    "molar_heat": 25.98,
                    "named_by": null,
                    "number": 46,
                    "period": 5,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Palladium",
                    "spectral_img": null,
                    "summary": "Palladium is a chemical element with symbol Pd and atomic number 46. It is a rare and lustrous silvery-white metal discovered in 1803 by William Hyde Wollaston. He named it after the asteroid Pallas, which was itself named after the epithet of the Greek goddess Athena, acquired by her when she slew Pallas.",
                    "symbol": "Pd",
                    "xpos": 10,
                    "ypos": 5,
                    "shells": [
                        2,
                        8,
                        18,
                        18
                    ]
                },
                {
                    "name": "Silver",
                    "appearance": "lustrous white metal",
                    "atomic_mass": 107.86822,
                    "boil": 2435,
                    "category": "transition metal",
                    "color": null,
                    "density": 10.49,
                    "discovered_by": "unknown, before 5000 BC",
                    "melt": 1234.93,
                    "molar_heat": 25.35,
                    "named_by": null,
                    "number": 47,
                    "period": 5,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Silver",
                    "spectral_img": null,
                    "summary": "Silver is a chemical element with symbol Ag (Greek:\u03ac\u03c1\u03b3\u03c5\u03c1\u03bf\u03c2 \u00e1rguros, Latin:argentum, both from the Indo-European root *h\u2082er\u01f5- for \"grey\" or \"shining\") and atomic number 47. A soft, white, lustrous transition metal, it possesses the highest electrical conductivity, thermal conductivity and reflectivity of any metal. The metal occurs naturally in its pure, free form (native silver), as an alloy with gold and other metals, and in minerals such as argentite and chlorargyrite.",
                    "symbol": "Ag",
                    "xpos": 11,
                    "ypos": 5,
                    "shells": [
                        2,
                        8,
                        18,
                        18,
                        1
                    ]
                },
                {
                    "name": "Cadmium",
                    "appearance": "silvery bluish-gray metallic",
                    "atomic_mass": 112.4144,
                    "boil": 1040,
                    "category": "post-transition metal",
                    "color": null,
                    "density": 8.65,
                    "discovered_by": "Karl Samuel Leberecht Hermann",
                    "melt": 594.22,
                    "molar_heat": 26.02,
                    "named_by": "Isotopes of cadmium",
                    "number": 48,
                    "period": 5,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Cadmium",
                    "spectral_img": null,
                    "summary": "Cadmium is a chemical element with symbol Cd and atomic number 48. This soft, bluish-white metal is chemically similar to the two other stable metals in group 12, zinc and mercury. Like zinc, it prefers oxidation state +2 in most of its compounds and like mercury it shows a low melting point compared to transition metals.",
                    "symbol": "Cd",
                    "xpos": 12,
                    "ypos": 5,
                    "shells": [
                        2,
                        8,
                        18,
                        18,
                        2
                    ]
                },
                {
                    "name": "Indium",
                    "appearance": "silvery lustrous gray",
                    "atomic_mass": 114.8181,
                    "boil": 2345,
                    "category": "post-transition metal",
                    "color": null,
                    "density": 7.31,
                    "discovered_by": "Ferdinand Reich",
                    "melt": 429.7485,
                    "molar_heat": 26.74,
                    "named_by": null,
                    "number": 49,
                    "period": 5,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Indium",
                    "spectral_img": null,
                    "summary": "Indium is a chemical element with symbol In and atomic number 49. It is a post-transition metallic element that is rare in Earth's crust. The metal is very soft, malleable and easily fusible, with a melting point higher than sodium, but lower than lithium or tin.",
                    "symbol": "In",
                    "xpos": 13,
                    "ypos": 5,
                    "shells": [
                        2,
                        8,
                        18,
                        18,
                        3
                    ]
                },
                {
                    "name": "Tin",
                    "appearance": "silvery-white (beta, \u03b2) or gray (alpha, \u03b1)",
                    "atomic_mass": 118.7107,
                    "boil": 2875,
                    "category": "post-transition metal",
                    "color": null,
                    "density": 7.365,
                    "discovered_by": "unknown, before 3500 BC",
                    "melt": 505.08,
                    "molar_heat": 27.112,
                    "named_by": null,
                    "number": 50,
                    "period": 5,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Tin",
                    "spectral_img": null,
                    "summary": "Tin is a chemical element with the symbol Sn (for Latin:stannum) and atomic number 50. It is a main group metal in group 14 of the periodic table. Tin shows a chemical similarity to both neighboring group-14 elements, germanium and lead, and has two possible oxidation states, +2 and the slightly more stable +4.",
                    "symbol": "Sn",
                    "xpos": 14,
                    "ypos": 5,
                    "shells": [
                        2,
                        8,
                        18,
                        18,
                        4
                    ]
                },
                {
                    "name": "Antimony",
                    "appearance": "silvery lustrous gray",
                    "atomic_mass": 121.7601,
                    "boil": 1908,
                    "category": "metalloid",
                    "color": null,
                    "density": 6.697,
                    "discovered_by": "unknown, before 3000 BC",
                    "melt": 903.78,
                    "molar_heat": 25.23,
                    "named_by": null,
                    "number": 51,
                    "period": 5,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Antimony",
                    "spectral_img": null,
                    "summary": "Antimony is a chemical element with symbol Sb (from Latin:stibium) and atomic number 51. A lustrous gray metalloid, it is found in nature mainly as the sulfide mineral stibnite (Sb2S3). Antimony compounds have been known since ancient times and were used for cosmetics; metallic antimony was also known, but it was erroneously identified as lead upon its discovery.",
                    "symbol": "Sb",
                    "xpos": 15,
                    "ypos": 5,
                    "shells": [
                        2,
                        8,
                        18,
                        18,
                        5
                    ]
                },
                {
                    "name": "Tellurium",
                    "appearance": null,
                    "atomic_mass": 127.603,
                    "boil": 1261,
                    "category": "metalloid",
                    "color": null,
                    "density": 6.24,
                    "discovered_by": "Franz-Joseph M\u00fcller von Reichenstein",
                    "melt": 722.66,
                    "molar_heat": 25.73,
                    "named_by": null,
                    "number": 52,
                    "period": 5,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Tellurium",
                    "spectral_img": null,
                    "summary": "Tellurium is a chemical element with symbol Te and atomic number 52. It is a brittle, mildly toxic, rare, silver-white metalloid. Tellurium is chemically related to selenium and sulfur.",
                    "symbol": "Te",
                    "xpos": 16,
                    "ypos": 5,
                    "shells": [
                        2,
                        8,
                        18,
                        18,
                        6
                    ]
                },
                {
                    "name": "Iodine",
                    "appearance": "lustrous metallic gray, violet as a gas",
                    "atomic_mass": 126.904473,
                    "boil": 457.4,
                    "category": "diatomic nonmetal",
                    "color": null,
                    "density": 4.933,
                    "discovered_by": "Bernard Courtois",
                    "melt": 386.85,
                    "molar_heat": null,
                    "named_by": null,
                    "number": 53,
                    "period": 5,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Iodine",
                    "spectral_img": null,
                    "summary": "Iodine is a chemical element with symbol I and atomic number 53. The name is from Greek \u1f30\u03bf\u03b5\u03b9\u03b4\u03ae\u03c2 ioeid\u0113s, meaning violet or purple, due to the color of iodine vapor. Iodine and its compounds are primarily used in nutrition, and industrially in the production of acetic acid and certain polymers.",
                    "symbol": "I",
                    "xpos": 17,
                    "ypos": 5,
                    "shells": [
                        2,
                        8,
                        18,
                        18,
                        7
                    ]
                },
                {
                    "name": "Xenon",
                    "appearance": "colorless gas, exhibiting a blue glow when placed in a high voltage electric field",
                    "atomic_mass": 131.2936,
                    "boil": 165.051,
                    "category": "noble gas",
                    "color": null,
                    "density": 5.894,
                    "discovered_by": "William Ramsay",
                    "melt": 161.4,
                    "molar_heat": null,
                    "named_by": null,
                    "number": 54,
                    "period": 5,
                    "phase": "Gas",
                    "source": "https://en.wikipedia.org/wiki/Xenon",
                    "spectral_img": "https://en.wikipedia.org/wiki/File:Xenon_Spectrum.jpg",
                    "summary": "Xenon is a chemical element with symbol Xe and atomic number 54. It is a colorless, dense, odorless noble gas, that occurs in the Earth's atmosphere in trace amounts. Although generally unreactive, xenon can undergo a few chemical reactions such as the formation of xenon hexafluoroplatinate, the first noble gas compound to be synthesized.",
                    "symbol": "Xe",
                    "xpos": 18,
                    "ypos": 5,
                    "shells": [
                        2,
                        8,
                        18,
                        18,
                        8
                    ]
                },
                {
                    "name": "Cesium",
                    "appearance": "silvery gold",
                    "atomic_mass": 132.905451966,
                    "boil": 944,
                    "category": "alkali metal",
                    "color": null,
                    "density": 1.93,
                    "discovered_by": "Robert Bunsen",
                    "melt": 301.7,
                    "molar_heat": 32.21,
                    "named_by": null,
                    "number": 55,
                    "period": 6,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Cesium",
                    "spectral_img": null,
                    "summary": "Caesium or cesium is a chemical element with symbol Cs and atomic number 55. It is a soft, silvery-gold alkali metal with a melting point of 28 \u00b0C (82 \u00b0F), which makes it one of only five elemental metals that are liquid at or near room temperature. Caesium is an alkali metal and has physical and chemical properties similar to those of rubidium and potassium.",
                    "symbol": "Cs",
                    "xpos": 1,
                    "ypos": 6,
                    "shells": [
                        2,
                        8,
                        18,
                        18,
                        8,
                        1
                    ]
                },
                {
                    "name": "Barium",
                    "appearance": null,
                    "atomic_mass": 137.3277,
                    "boil": 2118,
                    "category": "alkaline earth metal",
                    "color": null,
                    "density": 3.51,
                    "discovered_by": "Carl Wilhelm Scheele",
                    "melt": 1000,
                    "molar_heat": 28.07,
                    "named_by": null,
                    "number": 56,
                    "period": 6,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Barium",
                    "spectral_img": null,
                    "summary": "Barium is a chemical element with symbol Ba and atomic number 56. It is the fifth element in Group 2, a soft silvery metallic alkaline earth metal. Because of its high chemical reactivity barium is never found in nature as a free element.",
                    "symbol": "Ba",
                    "xpos": 2,
                    "ypos": 6,
                    "shells": [
                        2,
                        8,
                        18,
                        18,
                        8,
                        2
                    ]
                },
                {
                    "name": "Lanthanum",
                    "appearance": "silvery white",
                    "atomic_mass": 138.905477,
                    "boil": 3737,
                    "category": "lanthanide",
                    "color": null,
                    "density": 6.162,
                    "discovered_by": "Carl Gustaf Mosander",
                    "melt": 1193,
                    "molar_heat": 27.11,
                    "named_by": null,
                    "number": 57,
                    "period": 6,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Lanthanum",
                    "spectral_img": null,
                    "summary": "Lanthanum is a soft, ductile, silvery-white metallic chemical element with symbol La and atomic number 57. It tarnishes rapidly when exposed to air and is soft enough to be cut with a knife. It gave its name to the lanthanide series, a group of 15 similar elements between lanthanum and lutetium in the periodic table:it is also sometimes considered the first element of the 6th-period transition metals.",
                    "symbol": "La",
                    "xpos": 3,
                    "ypos": 9,
                    "shells": [
                        2,
                        8,
                        18,
                        18,
                        9,
                        2
                    ]
                },
                {
                    "name": "Cerium",
                    "appearance": "silvery white",
                    "atomic_mass": 140.1161,
                    "boil": 3716,
                    "category": "lanthanide",
                    "color": null,
                    "density": 6.77,
                    "discovered_by": "Martin Heinrich Klaproth",
                    "melt": 1068,
                    "molar_heat": 26.94,
                    "named_by": null,
                    "number": 58,
                    "period": 6,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Cerium",
                    "spectral_img": null,
                    "summary": "Cerium is a chemical element with symbol Ce and atomic number 58. It is a soft, silvery, ductile metal which easily oxidizes in air. Cerium was named after the dwarf planet Ceres (itself named after the Roman goddess of agriculture).",
                    "symbol": "Ce",
                    "xpos": 4,
                    "ypos": 9,
                    "shells": [
                        2,
                        8,
                        18,
                        19,
                        9,
                        2
                    ]
                },
                {
                    "name": "Praseodymium",
                    "appearance": "grayish white",
                    "atomic_mass": 140.907662,
                    "boil": 3403,
                    "category": "lanthanide",
                    "color": null,
                    "density": 6.77,
                    "discovered_by": "Carl Auer von Welsbach",
                    "melt": 1208,
                    "molar_heat": 27.2,
                    "named_by": null,
                    "number": 59,
                    "period": 6,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Praseodymium",
                    "spectral_img": null,
                    "summary": "Praseodymium is a chemical element with symbol Pr and atomic number 59. Praseodymium is a soft, silvery, malleable and ductile metal in the lanthanide group. It is valued for its magnetic, electrical, chemical, and optical properties.",
                    "symbol": "Pr",
                    "xpos": 5,
                    "ypos": 9,
                    "shells": [
                        2,
                        8,
                        18,
                        21,
                        8,
                        2
                    ]
                },
                {
                    "name": "Neodymium",
                    "appearance": "silvery white",
                    "atomic_mass": 144.2423,
                    "boil": 3347,
                    "category": "lanthanide",
                    "color": null,
                    "density": 7.01,
                    "discovered_by": "Carl Auer von Welsbach",
                    "melt": 1297,
                    "molar_heat": 27.45,
                    "named_by": null,
                    "number": 60,
                    "period": 6,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Neodymium",
                    "spectral_img": null,
                    "summary": "Neodymium is a chemical element with symbol Nd and atomic number 60. It is a soft silvery metal that tarnishes in air. Neodymium was discovered in 1885 by the Austrian chemist Carl Auer von Welsbach.",
                    "symbol": "Nd",
                    "xpos": 6,
                    "ypos": 9,
                    "shells": [
                        2,
                        8,
                        18,
                        22,
                        8,
                        2
                    ]
                },
                {
                    "name": "Promethium",
                    "appearance": "metallic",
                    "atomic_mass": 145,
                    "boil": 3273,
                    "category": "lanthanide",
                    "color": null,
                    "density": 7.26,
                    "discovered_by": "Chien Shiung Wu",
                    "melt": 1315,
                    "molar_heat": null,
                    "named_by": "Isotopes of promethium",
                    "number": 61,
                    "period": 6,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Promethium",
                    "spectral_img": null,
                    "summary": "Promethium, originally prometheum, is a chemical element with the symbol Pm and atomic number 61. All of its isotopes are radioactive; it is one of only two such elements that are followed in the periodic table by elements with stable forms, a distinction shared with technetium. Chemically, promethium is a lanthanide, which forms salts when combined with other elements.",
                    "symbol": "Pm",
                    "xpos": 7,
                    "ypos": 9,
                    "shells": [
                        2,
                        8,
                        18,
                        23,
                        8,
                        2
                    ]
                },
                {
                    "name": "Samarium",
                    "appearance": "silvery white",
                    "atomic_mass": 150.362,
                    "boil": 2173,
                    "category": "lanthanide",
                    "color": null,
                    "density": 7.52,
                    "discovered_by": "Lecoq de Boisbaudran",
                    "melt": 1345,
                    "molar_heat": 29.54,
                    "named_by": null,
                    "number": 62,
                    "period": 6,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Samarium",
                    "spectral_img": null,
                    "summary": "Samarium is a chemical element with symbol Sm and atomic number 62. It is a moderately hard silvery metal that readily oxidizes in air. Being a typical member of the lanthanide series, samarium usually assumes the oxidation state +3.",
                    "symbol": "Sm",
                    "xpos": 8,
                    "ypos": 9,
                    "shells": [
                        2,
                        8,
                        18,
                        24,
                        8,
                        2
                    ]
                },
                {
                    "name": "Europium",
                    "appearance": null,
                    "atomic_mass": 151.9641,
                    "boil": 1802,
                    "category": "lanthanide",
                    "color": null,
                    "density": 5.264,
                    "discovered_by": "Eug\u00e8ne-Anatole Demar\u00e7ay",
                    "melt": 1099,
                    "molar_heat": 27.66,
                    "named_by": null,
                    "number": 63,
                    "period": 6,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Europium",
                    "spectral_img": null,
                    "summary": "Europium is a chemical element with symbol Eu and atomic number 63. It was isolated in 1901 and is named after the continent of Europe. It is a moderately hard, silvery metal which readily oxidizes in air and water.",
                    "symbol": "Eu",
                    "xpos": 9,
                    "ypos": 9,
                    "shells": [
                        2,
                        8,
                        18,
                        25,
                        8,
                        2
                    ]
                },
                {
                    "name": "Gadolinium",
                    "appearance": "silvery white",
                    "atomic_mass": 157.253,
                    "boil": 3273,
                    "category": "lanthanide",
                    "color": null,
                    "density": 7.9,
                    "discovered_by": "Jean Charles Galissard de Marignac",
                    "melt": 1585,
                    "molar_heat": 37.03,
                    "named_by": null,
                    "number": 64,
                    "period": 6,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Gadolinium",
                    "spectral_img": null,
                    "summary": "Gadolinium is a chemical element with symbol Gd and atomic number 64. It is a silvery-white, malleable and ductile rare-earth metal. It is found in nature only in combined (salt) form.",
                    "symbol": "Gd",
                    "xpos": 10,
                    "ypos": 9,
                    "shells": [
                        2,
                        8,
                        18,
                        25,
                        9,
                        2
                    ]
                },
                {
                    "name": "Terbium",
                    "appearance": "silvery white",
                    "atomic_mass": 158.925352,
                    "boil": 3396,
                    "category": "lanthanide",
                    "color": null,
                    "density": 8.23,
                    "discovered_by": "Carl Gustaf Mosander",
                    "melt": 1629,
                    "molar_heat": 28.91,
                    "named_by": null,
                    "number": 65,
                    "period": 6,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Terbium",
                    "spectral_img": null,
                    "summary": "Terbium is a chemical element with symbol Tb and atomic number 65. It is a silvery-white rare earth metal that is malleable, ductile and soft enough to be cut with a knife. Terbium is never found in nature as a free element, but it is contained in many minerals, including cerite, gadolinite, monazite, xenotime and euxenite.",
                    "symbol": "Tb",
                    "xpos": 11,
                    "ypos": 9,
                    "shells": [
                        2,
                        8,
                        18,
                        27,
                        8,
                        2
                    ]
                },
                {
                    "name": "Dysprosium",
                    "appearance": "silvery white",
                    "atomic_mass": 162.5001,
                    "boil": 2840,
                    "category": "lanthanide",
                    "color": null,
                    "density": 8.54,
                    "discovered_by": "Lecoq de Boisbaudran",
                    "melt": 1680,
                    "molar_heat": 27.7,
                    "named_by": null,
                    "number": 66,
                    "period": 6,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Dysprosium",
                    "spectral_img": null,
                    "summary": "Dysprosium is a chemical element with the symbol Dy and atomic number 66. It is a rare earth element with a metallic silver luster. Dysprosium is never found in nature as a free element, though it is found in various minerals, such as xenotime.",
                    "symbol": "Dy",
                    "xpos": 12,
                    "ypos": 9,
                    "shells": [
                        2,
                        8,
                        18,
                        28,
                        8,
                        2
                    ]
                },
                {
                    "name": "Holmium",
                    "appearance": "silvery white",
                    "atomic_mass": 164.930332,
                    "boil": 2873,
                    "category": "lanthanide",
                    "color": null,
                    "density": 8.79,
                    "discovered_by": "Marc Delafontaine",
                    "melt": 1734,
                    "molar_heat": 27.15,
                    "named_by": null,
                    "number": 67,
                    "period": 6,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Holmium",
                    "spectral_img": null,
                    "summary": "Holmium is a chemical element with symbol Ho and atomic number 67. Part of the lanthanide series, holmium is a rare earth element. Holmium was discovered by Swedish chemist Per Theodor Cleve.",
                    "symbol": "Ho",
                    "xpos": 13,
                    "ypos": 9,
                    "shells": [
                        2,
                        8,
                        18,
                        29,
                        8,
                        2
                    ]
                },
                {
                    "name": "Erbium",
                    "appearance": "silvery white",
                    "atomic_mass": 167.2593,
                    "boil": 3141,
                    "category": "lanthanide",
                    "color": null,
                    "density": 9.066,
                    "discovered_by": "Carl Gustaf Mosander",
                    "melt": 1802,
                    "molar_heat": 28.12,
                    "named_by": null,
                    "number": 68,
                    "period": 6,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Erbium",
                    "spectral_img": null,
                    "summary": "Erbium is a chemical element in the lanthanide series, with symbol Er and atomic number 68. A silvery-white solid metal when artificially isolated, natural erbium is always found in chemical combination with other elements on Earth. As such, it is a rare earth element which is associated with several other rare elements in the mineral gadolinite from Ytterby in Sweden, where yttrium, ytterbium, and terbium were discovered.",
                    "symbol": "Er",
                    "xpos": 14,
                    "ypos": 9,
                    "shells": [
                        2,
                        8,
                        18,
                        30,
                        8,
                        2
                    ]
                },
                {
                    "name": "Thulium",
                    "appearance": "silvery gray",
                    "atomic_mass": 168.934222,
                    "boil": 2223,
                    "category": "lanthanide",
                    "color": null,
                    "density": 9.32,
                    "discovered_by": "Per Teodor Cleve",
                    "melt": 1818,
                    "molar_heat": 27.03,
                    "named_by": null,
                    "number": 69,
                    "period": 6,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Thulium",
                    "spectral_img": null,
                    "summary": "Thulium is a chemical element with symbol Tm and atomic number 69. It is the thirteenth and antepenultimate (third-last) element in the lanthanide series. Like the other lanthanides, the most common oxidation state is +3, seen in its oxide, halides and other compounds.",
                    "symbol": "Tm",
                    "xpos": 15,
                    "ypos": 9,
                    "shells": [
                        2,
                        8,
                        18,
                        31,
                        8,
                        2
                    ]
                },
                {
                    "name": "Ytterbium",
                    "appearance": null,
                    "atomic_mass": 173.0451,
                    "boil": 1469,
                    "category": "lanthanide",
                    "color": null,
                    "density": 6.9,
                    "discovered_by": "Jean Charles Galissard de Marignac",
                    "melt": 1097,
                    "molar_heat": 26.74,
                    "named_by": null,
                    "number": 70,
                    "period": 6,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Ytterbium",
                    "spectral_img": null,
                    "summary": "Ytterbium is a chemical element with symbol Yb and atomic number 70. It is the fourteenth and penultimate element in the lanthanide series, which is the basis of the relative stability of its +2 oxidation state. However, like the other lanthanides, its most common oxidation state is +3, seen in its oxide, halides and other compounds.",
                    "symbol": "Yb",
                    "xpos": 16,
                    "ypos": 9,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        8,
                        2
                    ]
                },
                {
                    "name": "Lutetium",
                    "appearance": "silvery white",
                    "atomic_mass": 174.96681,
                    "boil": 3675,
                    "category": "lanthanide",
                    "color": null,
                    "density": 9.841,
                    "discovered_by": "Georges Urbain",
                    "melt": 1925,
                    "molar_heat": 26.86,
                    "named_by": null,
                    "number": 71,
                    "period": 6,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Lutetium",
                    "spectral_img": null,
                    "summary": "Lutetium is a chemical element with symbol Lu and atomic number 71. It is a silvery white metal, which resists corrosion in dry, but not in moist air. It is considered the first element of the 6th-period transition metals and the last element in the lanthanide series, and is traditionally counted among the rare earths.",
                    "symbol": "Lu",
                    "xpos": 17,
                    "ypos": 9,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        9,
                        2
                    ]
                },
                {
                    "name": "Hafnium",
                    "appearance": "steel gray",
                    "atomic_mass": 178.492,
                    "boil": 4876,
                    "category": "transition metal",
                    "color": null,
                    "density": 13.31,
                    "discovered_by": "Dirk Coster",
                    "melt": 2506,
                    "molar_heat": 25.73,
                    "named_by": null,
                    "number": 72,
                    "period": 6,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Hafnium",
                    "spectral_img": "https://en.wikipedia.org/wiki/File:Hafnium_spectrum_visible.png",
                    "summary": "Hafnium is a chemical element with symbol Hf and atomic number 72. A lustrous, silvery gray, tetravalent transition metal, hafnium chemically resembles zirconium and is found in zirconium minerals. Its existence was predicted by Dmitri Mendeleev in 1869, though it was not identified until 1923, making it the penultimate stable element to be discovered (rhenium was identified two years later).",
                    "symbol": "Hf",
                    "xpos": 4,
                    "ypos": 6,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        10,
                        2
                    ]
                },
                {
                    "name": "Tantalum",
                    "appearance": "gray blue",
                    "atomic_mass": 180.947882,
                    "boil": 5731,
                    "category": "transition metal",
                    "color": null,
                    "density": 16.69,
                    "discovered_by": "Anders Gustaf Ekeberg",
                    "melt": 3290,
                    "molar_heat": 25.36,
                    "named_by": null,
                    "number": 73,
                    "period": 6,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Tantalum",
                    "spectral_img": "https://en.wikipedia.org/wiki/File:Tantalum_spectrum_visible.png",
                    "summary": "Tantalum is a chemical element with symbol Ta and atomic number 73. Previously known as tantalium, its name comes from Tantalus, an antihero from Greek mythology. Tantalum is a rare, hard, blue-gray, lustrous transition metal that is highly corrosion-resistant.",
                    "symbol": "Ta",
                    "xpos": 5,
                    "ypos": 6,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        11,
                        2
                    ]
                },
                {
                    "name": "Tungsten",
                    "appearance": "grayish white, lustrous",
                    "atomic_mass": 183.841,
                    "boil": 6203,
                    "category": "transition metal",
                    "color": null,
                    "density": 19.25,
                    "discovered_by": "Carl Wilhelm Scheele",
                    "melt": 3695,
                    "molar_heat": 24.27,
                    "named_by": null,
                    "number": 74,
                    "period": 6,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Tungsten",
                    "spectral_img": null,
                    "summary": "Tungsten, also known as wolfram, is a chemical element with symbol W and atomic number 74. The word tungsten comes from the Swedish language tung sten, which directly translates to heavy stone. Its name in Swedish is volfram, however, in order to distinguish it from scheelite, which in Swedish is alternatively named tungsten.",
                    "symbol": "W",
                    "xpos": 6,
                    "ypos": 6,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        12,
                        2
                    ]
                },
                {
                    "name": "Rhenium",
                    "appearance": "silvery-grayish",
                    "atomic_mass": 186.2071,
                    "boil": 5869,
                    "category": "transition metal",
                    "color": null,
                    "density": 21.02,
                    "discovered_by": "Masataka Ogawa",
                    "melt": 3459,
                    "molar_heat": 25.48,
                    "named_by": "Walter Noddack",
                    "number": 75,
                    "period": 6,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Rhenium",
                    "spectral_img": null,
                    "summary": "Rhenium is a chemical element with symbol Re and atomic number 75. It is a silvery-white, heavy, third-row transition metal in group 7 of the periodic table. With an estimated average concentration of 1 part per billion (ppb), rhenium is one of the rarest elements in the Earth's crust.",
                    "symbol": "Re",
                    "xpos": 7,
                    "ypos": 6,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        13,
                        2
                    ]
                },
                {
                    "name": "Osmium",
                    "appearance": "silvery, blue cast",
                    "atomic_mass": 190.233,
                    "boil": 5285,
                    "category": "transition metal",
                    "color": null,
                    "density": 22.59,
                    "discovered_by": "Smithson Tennant",
                    "melt": 3306,
                    "molar_heat": 24.7,
                    "named_by": null,
                    "number": 76,
                    "period": 6,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Osmium",
                    "spectral_img": null,
                    "summary": "Osmium (from Greek osme (\u1f40\u03c3\u03bc\u03ae) meaning \"smell\") is a chemical element with symbol Os and atomic number 76. It is a hard, brittle, bluish-white transition metal in the platinum group that is found as a trace element in alloys, mostly in platinum ores. Osmium is the densest naturally occurring element, with a density of 22.59 g/cm3.",
                    "symbol": "Os",
                    "xpos": 8,
                    "ypos": 6,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        14,
                        2
                    ]
                },
                {
                    "name": "Iridium",
                    "appearance": "silvery white",
                    "atomic_mass": 192.2173,
                    "boil": 4403,
                    "category": "transition metal",
                    "color": null,
                    "density": 22.56,
                    "discovered_by": "Smithson Tennant",
                    "melt": 2719,
                    "molar_heat": 25.1,
                    "named_by": null,
                    "number": 77,
                    "period": 6,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Iridium",
                    "spectral_img": null,
                    "summary": "Iridium is a chemical element with symbol Ir and atomic number 77. A very hard, brittle, silvery-white transition metal of the platinum group, iridium is generally credited with being the second densest element (after osmium) based on measured density, although calculations involving the space lattices of the elements show that iridium is denser. It is also the most corrosion-resistant metal, even at temperatures as high as 2000 \u00b0C. Although only certain molten salts and halogens are corrosive to solid iridium, finely divided iridium dust is much more reactive and can be flammable.",
                    "symbol": "Ir",
                    "xpos": 9,
                    "ypos": 6,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        15,
                        2
                    ]
                },
                {
                    "name": "Platinum",
                    "appearance": "silvery white",
                    "atomic_mass": 195.0849,
                    "boil": 4098,
                    "category": "transition metal",
                    "color": null,
                    "density": 21.45,
                    "discovered_by": "Antonio de Ulloa",
                    "melt": 2041.4,
                    "molar_heat": 25.86,
                    "named_by": null,
                    "number": 78,
                    "period": 6,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Platinum",
                    "spectral_img": null,
                    "summary": "Platinum is a chemical element with symbol Pt and atomic number 78. It is a dense, malleable, ductile, highly unreactive, precious, gray-white transition metal. Its name is derived from the Spanish term platina, which is literally translated into \"little silver\".",
                    "symbol": "Pt",
                    "xpos": 10,
                    "ypos": 6,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        17,
                        1
                    ]
                },
                {
                    "name": "Gold",
                    "appearance": "metallic yellow",
                    "atomic_mass": 196.9665695,
                    "boil": 3243,
                    "category": "transition metal",
                    "color": null,
                    "density": 19.3,
                    "discovered_by": "Middle East",
                    "melt": 1337.33,
                    "molar_heat": 25.418,
                    "named_by": null,
                    "number": 79,
                    "period": 6,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Gold",
                    "spectral_img": null,
                    "summary": "Gold is a chemical element with symbol Au (from Latin:aurum) and atomic number 79. In its purest form, it is a bright, slightly reddish yellow, dense, soft, malleable and ductile metal. Chemically, gold is a transition metal and a group 11 element.",
                    "symbol": "Au",
                    "xpos": 11,
                    "ypos": 6,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        18,
                        1
                    ]
                },
                {
                    "name": "Mercury",
                    "appearance": "silvery",
                    "atomic_mass": 200.5923,
                    "boil": 629.88,
                    "category": "post-transition metal",
                    "color": null,
                    "density": 13.534,
                    "discovered_by": "unknown, before 2000 BCE",
                    "melt": 234.321,
                    "molar_heat": 27.983,
                    "named_by": null,
                    "number": 80,
                    "period": 6,
                    "phase": "Liquid",
                    "source": "https://en.wikipedia.org/wiki/Mercury (Element)",
                    "spectral_img": null,
                    "summary": "Mercury is a chemical element with symbol Hg and atomic number 80. It is commonly known as quicksilver and was formerly named hydrargyrum (/ha\u026a\u02c8dr\u0251\u02d0rd\u0292\u0259r\u0259m/). A heavy, silvery d-block element, mercury is the only metallic element that is liquid at standard conditions for temperature and pressure; the only other element that is liquid under these conditions is bromine, though metals such as caesium, gallium, and rubidium melt just above room temperature.",
                    "symbol": "Hg",
                    "xpos": 12,
                    "ypos": 6,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        18,
                        2
                    ]
                },
                {
                    "name": "Thallium",
                    "appearance": "silvery white",
                    "atomic_mass": 204.38,
                    "boil": 1746,
                    "category": "post-transition metal",
                    "color": null,
                    "density": 11.85,
                    "discovered_by": "William Crookes",
                    "melt": 577,
                    "molar_heat": 26.32,
                    "named_by": null,
                    "number": 81,
                    "period": 6,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Thallium",
                    "spectral_img": null,
                    "summary": "Thallium is a chemical element with symbol Tl and atomic number 81. This soft gray post-transition metal is not found free in nature. When isolated, it resembles tin, but discolors when exposed to air.",
                    "symbol": "Tl",
                    "xpos": 13,
                    "ypos": 6,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        18,
                        3
                    ]
                },
                {
                    "name": "Lead",
                    "appearance": "metallic gray",
                    "atomic_mass": 207.21,
                    "boil": 2022,
                    "category": "post-transition metal",
                    "color": null,
                    "density": 11.34,
                    "discovered_by": "Middle East",
                    "melt": 600.61,
                    "molar_heat": 26.65,
                    "named_by": null,
                    "number": 82,
                    "period": 6,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Lead_(element)",
                    "spectral_img": null,
                    "summary": "Lead (/l\u025bd/) is a chemical element in the carbon group with symbol Pb (from Latin:plumbum) and atomic number 82. Lead is a soft, malleable and heavy post-transition metal. Metallic lead has a bluish-white color after being freshly cut, but it soon tarnishes to a dull grayish color when exposed to air.",
                    "symbol": "Pb",
                    "xpos": 14,
                    "ypos": 6,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        18,
                        4
                    ]
                },
                {
                    "name": "Bismuth",
                    "appearance": "lustrous silver",
                    "atomic_mass": 208.980401,
                    "boil": 1837,
                    "category": "post-transition metal",
                    "color": null,
                    "density": 9.78,
                    "discovered_by": "Claude Fran\u00e7ois Geoffroy",
                    "melt": 544.7,
                    "molar_heat": 25.52,
                    "named_by": null,
                    "number": 83,
                    "period": 6,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Bismuth",
                    "spectral_img": null,
                    "summary": "Bismuth is a chemical element with symbol Bi and atomic number 83. Bismuth, a pentavalent post-transition metal, chemically resembles arsenic and antimony. Elemental bismuth may occur naturally, although its sulfide and oxide form important commercial ores.",
                    "symbol": "Bi",
                    "xpos": 15,
                    "ypos": 6,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        18,
                        5
                    ]
                },
                {
                    "name": "Polonium",
                    "appearance": "silvery",
                    "atomic_mass": 209,
                    "boil": 1235,
                    "category": "post-transition metal",
                    "color": null,
                    "density": 9.196,
                    "discovered_by": "Pierre Curie",
                    "melt": 527,
                    "molar_heat": 26.4,
                    "named_by": null,
                    "number": 84,
                    "period": 6,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Polonium",
                    "spectral_img": null,
                    "summary": "Polonium is a chemical element with symbol Po and atomic number 84, discovered in 1898 by Marie Curie and Pierre Curie. A rare and highly radioactive element with no stable isotopes, polonium is chemically similar to bismuth and tellurium, and it occurs in uranium ores. Applications of polonium are few.",
                    "symbol": "Po",
                    "xpos": 16,
                    "ypos": 6,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        18,
                        6
                    ]
                },
                {
                    "name": "Astatine",
                    "appearance": "unknown, probably metallic",
                    "atomic_mass": 210,
                    "boil": 610,
                    "category": "metalloid",
                    "color": null,
                    "density": 26.35,
                    "discovered_by": "Dale R. Corson",
                    "melt": 575,
                    "molar_heat": null,
                    "named_by": null,
                    "number": 85,
                    "period": 6,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Astatine",
                    "spectral_img": null,
                    "summary": "Astatine is a very rare radioactive chemical element with the chemical symbol At and atomic number 85. It occurs on Earth as the decay product of various heavier elements. All its isotopes are short-lived; the most stable is astatine-210, with a half-life of 8.1 hours.",
                    "symbol": "At",
                    "xpos": 17,
                    "ypos": 6,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        18,
                        7
                    ]
                },
                {
                    "name": "Radon",
                    "appearance": "colorless gas, occasionally glows green or red in discharge tubes",
                    "atomic_mass": 222,
                    "boil": 211.5,
                    "category": "noble gas",
                    "color": null,
                    "density": 9.73,
                    "discovered_by": "Friedrich Ernst Dorn",
                    "melt": 202,
                    "molar_heat": null,
                    "named_by": null,
                    "number": 86,
                    "period": 6,
                    "phase": "Gas",
                    "source": "https://en.wikipedia.org/wiki/Radon",
                    "spectral_img": "https://en.wikipedia.org/wiki/File:Radon_spectrum.png",
                    "summary": "Radon is a chemical element with symbol Rn and atomic number 86. It is a radioactive, colorless, odorless, tasteless noble gas, occurring naturally as a decay product of radium. Its most stable isotope, 222Rn, has a half-life of 3.8 days.",
                    "symbol": "Rn",
                    "xpos": 18,
                    "ypos": 6,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        18,
                        8
                    ]
                },
                {
                    "name": "Francium",
                    "appearance": null,
                    "atomic_mass": 223,
                    "boil": 950,
                    "category": "alkali metal",
                    "color": null,
                    "density": 1.87,
                    "discovered_by": "Marguerite Perey",
                    "melt": 300,
                    "molar_heat": null,
                    "named_by": null,
                    "number": 87,
                    "period": 7,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Francium",
                    "spectral_img": null,
                    "summary": "Francium is a chemical element with symbol Fr and atomic number 87. It used to be known as eka-caesium and actinium K. It is the second-least electronegative element, behind only caesium. Francium is a highly radioactive metal that decays into astatine, radium, and radon.",
                    "symbol": "Fr",
                    "xpos": 1,
                    "ypos": 7,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        18,
                        8,
                        1
                    ]
                },
                {
                    "name": "Radium",
                    "appearance": "silvery white metallic",
                    "atomic_mass": 226,
                    "boil": 2010,
                    "category": "alkaline earth metal",
                    "color": null,
                    "density": 5.5,
                    "discovered_by": "Pierre Curie",
                    "melt": 1233,
                    "molar_heat": null,
                    "named_by": null,
                    "number": 88,
                    "period": 7,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Radium",
                    "spectral_img": null,
                    "summary": "Radium is a chemical element with symbol Ra and atomic number 88. It is the sixth element in group 2 of the periodic table, also known as the alkaline earth metals. Pure radium is almost colorless, but it readily combines with nitrogen (rather than oxygen) on exposure to air, forming a black surface layer of radium nitride (Ra3N2).",
                    "symbol": "Ra",
                    "xpos": 2,
                    "ypos": 7,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        18,
                        8,
                        2
                    ]
                },
                {
                    "name": "Actinium",
                    "appearance": null,
                    "atomic_mass": 227,
                    "boil": 3500,
                    "category": "actinide",
                    "color": null,
                    "density": 10,
                    "discovered_by": "Friedrich Oskar Giesel",
                    "melt": 1500,
                    "molar_heat": 27.2,
                    "named_by": null,
                    "number": 89,
                    "period": 7,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Actinium",
                    "spectral_img": null,
                    "summary": "Actinium is a radioactive chemical element with symbol Ac (not to be confused with the abbreviation for an acetyl group) and atomic number 89, which was discovered in 1899. It was the first non-primordial radioactive element to be isolated. Polonium, radium and radon were observed before actinium, but they were not isolated until 1902.",
                    "symbol": "Ac",
                    "xpos": 3,
                    "ypos": 10,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        18,
                        9,
                        2
                    ]
                },
                {
                    "name": "Thorium",
                    "appearance": "silvery, often with black tarnish",
                    "atomic_mass": 232.03774,
                    "boil": 5061,
                    "category": "actinide",
                    "color": null,
                    "density": 11.724,
                    "discovered_by": "J\u00f6ns Jakob Berzelius",
                    "melt": 2023,
                    "molar_heat": 26.23,
                    "named_by": null,
                    "number": 90,
                    "period": 7,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Thorium",
                    "spectral_img": null,
                    "summary": "Thorium is a chemical element with symbol Th and atomic number 90. A radioactive actinide metal, thorium is one of only two significantly radioactive elements that still occur naturally in large quantities as a primordial element (the other being uranium). It was discovered in 1828 by the Norwegian Reverend and amateur mineralogist Morten Thrane Esmark and identified by the Swedish chemist J\u00f6ns Jakob Berzelius, who named it after Thor, the Norse god of thunder.",
                    "symbol": "Th",
                    "xpos": 4,
                    "ypos": 10,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        18,
                        10,
                        2
                    ]
                },
                {
                    "name": "Protactinium",
                    "appearance": "bright, silvery metallic luster",
                    "atomic_mass": 231.035882,
                    "boil": 4300,
                    "category": "actinide",
                    "color": null,
                    "density": 15.37,
                    "discovered_by": "William Crookes",
                    "melt": 1841,
                    "molar_heat": null,
                    "named_by": "Otto Hahn",
                    "number": 91,
                    "period": 7,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Protactinium",
                    "spectral_img": null,
                    "summary": "Protactinium is a chemical element with symbol Pa and atomic number 91. It is a dense, silvery-gray metal which readily reacts with oxygen, water vapor and inorganic acids. It forms various chemical compounds where protactinium is usually present in the oxidation state +5, but can also assume +4 and even +2 or +3 states.",
                    "symbol": "Pa",
                    "xpos": 5,
                    "ypos": 10,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        20,
                        9,
                        2
                    ]
                },
                {
                    "name": "Uranium",
                    "appearance": null,
                    "atomic_mass": 238.028913,
                    "boil": 4404,
                    "category": "actinide",
                    "color": null,
                    "density": 19.1,
                    "discovered_by": "Martin Heinrich Klaproth",
                    "melt": 1405.3,
                    "molar_heat": 27.665,
                    "named_by": null,
                    "number": 92,
                    "period": 7,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Uranium",
                    "spectral_img": null,
                    "summary": "Uranium is a chemical element with symbol U and atomic number 92. It is a silvery-white metal in the actinide series of the periodic table. A uranium atom has 92 protons and 92 electrons, of which 6 are valence electrons.",
                    "symbol": "U",
                    "xpos": 6,
                    "ypos": 10,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        21,
                        9,
                        2
                    ]
                },
                {
                    "name": "Neptunium",
                    "appearance": "silvery metallic",
                    "atomic_mass": 237,
                    "boil": 4447,
                    "category": "actinide",
                    "color": null,
                    "density": 20.45,
                    "discovered_by": "Edwin McMillan",
                    "melt": 912,
                    "molar_heat": 29.46,
                    "named_by": null,
                    "number": 93,
                    "period": 7,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Neptunium",
                    "spectral_img": null,
                    "summary": "Neptunium is a chemical element with symbol Np and atomic number 93. A radioactive actinide metal, neptunium is the first transuranic element. Its position in the periodic table just after uranium, named after the planet Uranus, led to it being named after Neptune, the next planet beyond Uranus.",
                    "symbol": "Np",
                    "xpos": 7,
                    "ypos": 10,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        22,
                        9,
                        2
                    ]
                },
                {
                    "name": "Plutonium",
                    "appearance": "silvery white, tarnishing to dark gray in air",
                    "atomic_mass": 244,
                    "boil": 3505,
                    "category": "actinide",
                    "color": null,
                    "density": 19.816,
                    "discovered_by": "Glenn T. Seaborg",
                    "melt": 912.5,
                    "molar_heat": 35.5,
                    "named_by": null,
                    "number": 94,
                    "period": 7,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Plutonium",
                    "spectral_img": null,
                    "summary": "Plutonium is a transuranic radioactive chemical element with symbol Pu and atomic number 94. It is an actinide metal of silvery-gray appearance that tarnishes when exposed to air, and forms a dull coating when oxidized. The element normally exhibits six allotropes and four oxidation states.",
                    "symbol": "Pu",
                    "xpos": 8,
                    "ypos": 10,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        24,
                        8,
                        2
                    ]
                },
                {
                    "name": "Americium",
                    "appearance": "silvery white",
                    "atomic_mass": 243,
                    "boil": 2880,
                    "category": "actinide",
                    "color": null,
                    "density": 12,
                    "discovered_by": "Glenn T. Seaborg",
                    "melt": 1449,
                    "molar_heat": 62.7,
                    "named_by": null,
                    "number": 95,
                    "period": 7,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Americium",
                    "spectral_img": "https://en.wikipedia.org/wiki/File:Americium_spectrum_visible.png",
                    "summary": "Americium is a radioactive transuranic chemical element with symbol Am and atomic number 95. This member of the actinide series is located in the periodic table under the lanthanide element europium, and thus by analogy was named after the Americas. Americium was first produced in 1944 by the group of Glenn T.Seaborg from Berkeley, California, at the metallurgical laboratory of University of Chicago.",
                    "symbol": "Am",
                    "xpos": 9,
                    "ypos": 10,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        25,
                        8,
                        2
                    ]
                },
                {
                    "name": "Curium",
                    "appearance": "silvery metallic, glows purple in the dark",
                    "atomic_mass": 247,
                    "boil": 3383,
                    "category": "actinide",
                    "color": null,
                    "density": 13.51,
                    "discovered_by": "Glenn T. Seaborg",
                    "melt": 1613,
                    "molar_heat": null,
                    "named_by": null,
                    "number": 96,
                    "period": 7,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Curium",
                    "spectral_img": null,
                    "summary": "Curium is a transuranic radioactive chemical element with symbol Cm and atomic number 96. This element of the actinide series was named after Marie and Pierre Curie \u2013 both were known for their research on radioactivity. Curium was first intentionally produced and identified in July 1944 by the group of Glenn T. Seaborg at the University of California, Berkeley.",
                    "symbol": "Cm",
                    "xpos": 10,
                    "ypos": 10,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        25,
                        9,
                        2
                    ]
                },
                {
                    "name": "Berkelium",
                    "appearance": "silvery",
                    "atomic_mass": 247,
                    "boil": 2900,
                    "category": "actinide",
                    "color": null,
                    "density": 14.78,
                    "discovered_by": "Lawrence Berkeley National Laboratory",
                    "melt": 1259,
                    "molar_heat": null,
                    "named_by": null,
                    "number": 97,
                    "period": 7,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Berkelium",
                    "spectral_img": null,
                    "summary": "Berkelium is a transuranic radioactive chemical element with symbol Bk and atomic number 97. It is a member of the actinide and transuranium element series. It is named after the city of Berkeley, California, the location of the University of California Radiation Laboratory where it was discovered in December 1949.",
                    "symbol": "Bk",
                    "xpos": 11,
                    "ypos": 10,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        27,
                        8,
                        2
                    ]
                },
                {
                    "name": "Californium",
                    "appearance": "silvery",
                    "atomic_mass": 251,
                    "boil": 1743,
                    "category": "actinide",
                    "color": null,
                    "density": 15.1,
                    "discovered_by": "Lawrence Berkeley National Laboratory",
                    "melt": 1173,
                    "molar_heat": null,
                    "named_by": null,
                    "number": 98,
                    "period": 7,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Californium",
                    "spectral_img": null,
                    "summary": "Californium is a radioactive metallic chemical element with symbol Cf and atomic number 98. The element was first made in 1950 at the University of California Radiation Laboratory in Berkeley, by bombarding curium with alpha particles (helium-4 ions). It is an actinide element, the sixth transuranium element to be synthesized, and has the second-highest atomic mass of all the elements that have been produced in amounts large enough to see with the unaided eye (after einsteinium).",
                    "symbol": "Cf",
                    "xpos": 12,
                    "ypos": 10,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        28,
                        8,
                        2
                    ]
                },
                {
                    "name": "Einsteinium",
                    "appearance": "silver-colored",
                    "atomic_mass": 252,
                    "boil": 1269,
                    "category": "actinide",
                    "color": null,
                    "density": 8.84,
                    "discovered_by": "Lawrence Berkeley National Laboratory",
                    "melt": 1133,
                    "molar_heat": null,
                    "named_by": null,
                    "number": 99,
                    "period": 7,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Einsteinium",
                    "spectral_img": null,
                    "summary": "Einsteinium is a synthetic element with symbol Es and atomic number 99. It is the seventh transuranic element, and an actinide. Einsteinium was discovered as a component of the debris of the first hydrogen bomb explosion in 1952, and named after Albert Einstein.",
                    "symbol": "Es",
                    "xpos": 13,
                    "ypos": 10,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        29,
                        8,
                        2
                    ]
                },
                {
                    "name": "Fermium",
                    "appearance": null,
                    "atomic_mass": 257,
                    "boil": null,
                    "category": "actinide",
                    "color": null,
                    "density": null,
                    "discovered_by": "Lawrence Berkeley National Laboratory",
                    "melt": 1800,
                    "molar_heat": null,
                    "named_by": null,
                    "number": 100,
                    "period": 7,
                    "phase": "Unknown",
                    "source": "https://en.wikipedia.org/wiki/Fermium",
                    "spectral_img": null,
                    "summary": "Fermium is a synthetic element with symbol Fm and atomic number 100. It is a member of the actinide series. It is the heaviest element that can be formed by neutron bombardment of lighter elements, and hence the last element that can be prepared in macroscopic quantities, although pure fermium metal has not yet been prepared.",
                    "symbol": "Fm",
                    "xpos": 14,
                    "ypos": 10,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        30,
                        8,
                        2
                    ]
                },
                {
                    "name": "Mendelevium",
                    "appearance": null,
                    "atomic_mass": 258,
                    "boil": null,
                    "category": "actinide",
                    "color": null,
                    "density": null,
                    "discovered_by": "Lawrence Berkeley National Laboratory",
                    "melt": 1100,
                    "molar_heat": null,
                    "named_by": null,
                    "number": 101,
                    "period": 7,
                    "phase": "Unknown",
                    "source": "https://en.wikipedia.org/wiki/Mendelevium",
                    "spectral_img": null,
                    "summary": "Mendelevium is a synthetic element with chemical symbol Md (formerly Mv) and atomic number 101. A metallic radioactive transuranic element in the actinide series, it is the first element that currently cannot be produced in macroscopic quantities through neutron bombardment of lighter elements. It is the antepenultimate actinide and the ninth transuranic element.",
                    "symbol": "Md",
                    "xpos": 15,
                    "ypos": 10,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        31,
                        8,
                        2
                    ]
                },
                {
                    "name": "Nobelium",
                    "appearance": null,
                    "atomic_mass": 259,
                    "boil": null,
                    "category": "actinide",
                    "color": null,
                    "density": null,
                    "discovered_by": "Joint Institute for Nuclear Research",
                    "melt": 1100,
                    "molar_heat": null,
                    "named_by": null,
                    "number": 102,
                    "period": 7,
                    "phase": "Unknown",
                    "source": "https://en.wikipedia.org/wiki/Nobelium",
                    "spectral_img": null,
                    "summary": "Nobelium is a synthetic chemical element with symbol No and atomic number 102. It is named in honor of Alfred Nobel, the inventor of dynamite and benefactor of science. A radioactive metal, it is the tenth transuranic element and is the penultimate member of the actinide series.",
                    "symbol": "No",
                    "xpos": 16,
                    "ypos": 10,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        32,
                        8,
                        2
                    ]
                },
                {
                    "name": "Lawrencium",
                    "appearance": null,
                    "atomic_mass": 266,
                    "boil": null,
                    "category": "actinide",
                    "color": null,
                    "density": null,
                    "discovered_by": "Lawrence Berkeley National Laboratory",
                    "melt": 1900,
                    "molar_heat": null,
                    "named_by": null,
                    "number": 103,
                    "period": 7,
                    "phase": "Unknown",
                    "source": "https://en.wikipedia.org/wiki/Lawrencium",
                    "spectral_img": null,
                    "summary": "Lawrencium is a synthetic chemical element with chemical symbol Lr (formerly Lw) and atomic number 103. It is named in honor of Ernest Lawrence, inventor of the cyclotron, a device that was used to discover many artificial radioactive elements. A radioactive metal, lawrencium is the eleventh transuranic element and is also the final member of the actinide series.",
                    "symbol": "Lr",
                    "xpos": 17,
                    "ypos": 10,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        32,
                        8,
                        3
                    ]
                },
                {
                    "name": "Rutherfordium",
                    "appearance": null,
                    "atomic_mass": 267,
                    "boil": 5800,
                    "category": "transition metal",
                    "color": null,
                    "density": 23.2,
                    "discovered_by": "Joint Institute for Nuclear Research",
                    "melt": 2400,
                    "molar_heat": null,
                    "named_by": null,
                    "number": 104,
                    "period": 7,
                    "phase": "Unknown",
                    "source": "https://en.wikipedia.org/wiki/Rutherfordium",
                    "spectral_img": null,
                    "summary": "Rutherfordium is a chemical element with symbol Rf and atomic number 104, named in honor of physicist Ernest Rutherford. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and radioactive; the most stable known isotope, 267Rf, has a half-life of approximately 1.3 hours. In the periodic table of the elements, it is a d - block element and the second of the fourth - row transition elements.",
                    "symbol": "Rf",
                    "xpos": 4,
                    "ypos": 7,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        32,
                        10,
                        2
                    ]
                },
                {
                    "name": "Dubnium",
                    "appearance": null,
                    "atomic_mass": 268,
                    "boil": null,
                    "category": "transition metal",
                    "color": null,
                    "density": 29.3,
                    "discovered_by": "Joint Institute for Nuclear Research",
                    "melt": null,
                    "molar_heat": null,
                    "named_by": null,
                    "number": 105,
                    "period": 7,
                    "phase": "Unknown",
                    "source": "https://en.wikipedia.org/wiki/Dubnium",
                    "spectral_img": null,
                    "summary": "Dubnium is a chemical element with symbol Db and atomic number 105. It is named after the town of Dubna in Russia (north of Moscow), where it was first produced. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and radioactive; the most stable known isotope, dubnium-268, has a half-life of approximately 28 hours.",
                    "symbol": "Db",
                    "xpos": 5,
                    "ypos": 7,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        32,
                        11,
                        2
                    ]
                },
                {
                    "name": "Seaborgium",
                    "appearance": null,
                    "atomic_mass": 269,
                    "boil": null,
                    "category": "transition metal",
                    "color": null,
                    "density": 35.0,
                    "discovered_by": "Lawrence Berkeley National Laboratory",
                    "melt": null,
                    "molar_heat": null,
                    "named_by": null,
                    "number": 106,
                    "period": 7,
                    "phase": "Unknown",
                    "source": "https://en.wikipedia.org/wiki/Seaborgium",
                    "spectral_img": null,
                    "summary": "Seaborgium is a synthetic element with symbol Sg and atomic number 106. Its most stable isotope 271Sg has a half-life of 1.9 minutes. A more recently discovered isotope 269Sg has a potentially slightly longer half-life (ca.",
                    "symbol": "Sg",
                    "xpos": 6,
                    "ypos": 7,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        32,
                        12,
                        2
                    ]
                },
                {
                    "name": "Bohrium",
                    "appearance": null,
                    "atomic_mass": 270,
                    "boil": null,
                    "category": "transition metal",
                    "color": null,
                    "density": 37.1,
                    "discovered_by": "Gesellschaft f\u00fcr Schwerionenforschung",
                    "melt": null,
                    "molar_heat": null,
                    "named_by": null,
                    "number": 107,
                    "period": 7,
                    "phase": "Unknown",
                    "source": "https://en.wikipedia.org/wiki/Bohrium",
                    "spectral_img": null,
                    "summary": "Bohrium is a chemical element with symbol Bh and atomic number 107. It is named after Danish physicist Niels Bohr. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and radioactive; the most stable known isotope, 270Bh, has a half-life of approximately 61 seconds.",
                    "symbol": "Bh",
                    "xpos": 7,
                    "ypos": 7,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        32,
                        13,
                        2
                    ]
                },
                {
                    "name": "Hassium",
                    "appearance": null,
                    "atomic_mass": 269,
                    "boil": null,
                    "category": "transition metal",
                    "color": null,
                    "density": 40.7,
                    "discovered_by": "Gesellschaft f\u00fcr Schwerionenforschung",
                    "melt": 126,
                    "molar_heat": null,
                    "named_by": null,
                    "number": 108,
                    "period": 7,
                    "phase": "Unknown",
                    "source": "https://en.wikipedia.org/wiki/Hassium",
                    "spectral_img": null,
                    "summary": "Hassium is a chemical element with symbol Hs and atomic number 108, named after the German state of Hesse. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and radioactive; the most stable known isotope, 269Hs, has a half-life of approximately 9.7 seconds, although an unconfirmed metastable state, 277mHs, may have a longer half-life of about 130 seconds. More than 100 atoms of hassium have been synthesized to date.",
                    "symbol": "Hs",
                    "xpos": 8,
                    "ypos": 7,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        32,
                        14,
                        2
                    ]
                },
                {
                    "name": "Meitnerium",
                    "appearance": null,
                    "atomic_mass": 278,
                    "boil": null,
                    "category": "unknown, probably transition metal",
                    "color": null,
                    "density": 37.4,
                    "discovered_by": "Gesellschaft f\u00fcr Schwerionenforschung",
                    "melt": null,
                    "molar_heat": null,
                    "named_by": null,
                    "number": 109,
                    "period": 7,
                    "phase": "Unknown",
                    "source": "https://en.wikipedia.org/wiki/Meitnerium",
                    "spectral_img": null,
                    "summary": "Meitnerium is a chemical element with symbol Mt and atomic number 109. It is an extremely radioactive synthetic element (an element not found in nature that can be created in a laboratory). The most stable known isotope, meitnerium-278, has a half-life of 7.6 seconds.",
                    "symbol": "Mt",
                    "xpos": 9,
                    "ypos": 7,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        32,
                        15,
                        2
                    ]
                },
                {
                    "name": "Darmstadtium",
                    "appearance": null,
                    "atomic_mass": 281,
                    "boil": null,
                    "category": "unknown, probably transition metal",
                    "color": null,
                    "density": 34.8,
                    "discovered_by": "Gesellschaft f\u00fcr Schwerionenforschung",
                    "melt": null,
                    "molar_heat": null,
                    "named_by": null,
                    "number": 110,
                    "period": 7,
                    "phase": "Unknown",
                    "source": "https://en.wikipedia.org/wiki/Darmstadtium",
                    "spectral_img": null,
                    "summary": "Darmstadtium is a chemical element with symbol Ds and atomic number 110. It is an extremely radioactive synthetic element. The most stable known isotope, darmstadtium-281, has a half-life of approximately 10 seconds.",
                    "symbol": "Ds",
                    "xpos": 10,
                    "ypos": 7,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        32,
                        16,
                        2
                    ]
                },
                {
                    "name": "Roentgenium",
                    "appearance": null,
                    "atomic_mass": 282,
                    "boil": null,
                    "category": "unknown, probably transition metal",
                    "color": null,
                    "density": 28.7,
                    "discovered_by": "Gesellschaft f\u00fcr Schwerionenforschung",
                    "melt": null,
                    "molar_heat": null,
                    "named_by": null,
                    "number": 111,
                    "period": 7,
                    "phase": "Unknown",
                    "source": "https://en.wikipedia.org/wiki/Roentgenium",
                    "spectral_img": null,
                    "summary": "Roentgenium is a chemical element with symbol Rg and atomic number 111. It is an extremely radioactive synthetic element (an element that can be created in a laboratory but is not found in nature); the most stable known isotope, roentgenium-282, has a half-life of 2.1 minutes. Roentgenium was first created in 1994 by the GSI Helmholtz Centre for Heavy Ion Research near Darmstadt, Germany.",
                    "symbol": "Rg",
                    "xpos": 11,
                    "ypos": 7,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        32,
                        17,
                        2
                    ]
                },
                {
                    "name": "Copernicium",
                    "appearance": null,
                    "atomic_mass": 285,
                    "boil": 3570,
                    "category": "post-transition metal",
                    "color": null,
                    "density": 23.7,
                    "discovered_by": "Gesellschaft f\u00fcr Schwerionenforschung",
                    "melt": null,
                    "molar_heat": null,
                    "named_by": null,
                    "number": 112,
                    "period": 7,
                    "phase": "Unknown",
                    "source": "https://en.wikipedia.org/wiki/Copernicium",
                    "spectral_img": null,
                    "summary": "Copernicium is a chemical element with symbol Cn and atomic number 112. It is an extremely radioactive synthetic element that can only be created in a laboratory. The most stable known isotope, copernicium-285, has a half-life of approximately 29 seconds, but it is possible that this copernicium isotope may have a nuclear isomer with a longer half-life, 8.9 min.",
                    "symbol": "Cn",
                    "xpos": 12,
                    "ypos": 7,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        32,
                        18,
                        2
                    ]
                },
                {
                    "name": "Nihonium",
                    "appearance": null,
                    "atomic_mass": 286,
                    "boil": 1430,
                    "category": "unknown, probably transition metal",
                    "color": null,
                    "density": 16,
                    "discovered_by": "RIKEN",
                    "melt": 700,
                    "molar_heat": null,
                    "named_by": null,
                    "number": 113,
                    "period": 7,
                    "phase": "Unknown",
                    "source": "https://en.wikipedia.org/wiki/Ununtrium",
                    "spectral_img": null,
                    "summary": "Nihonium is a chemical element with atomic number 113. It has a symbol Nh. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and is extremely radioactive; its most stable known isotope, nihonium-286, has a half-life of 20 seconds.",
                    "symbol": "Nh",
                    "xpos": 13,
                    "ypos": 7,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        32,
                        18,
                        3
                    ]
                },
                {
                    "name": "Flerovium",
                    "appearance": null,
                    "atomic_mass": 289,
                    "boil": 420,
                    "category": "probably post-transition metal",
                    "color": null,
                    "density": 14,
                    "discovered_by": "Joint Institute for Nuclear Research",
                    "melt": 340,
                    "molar_heat": null,
                    "named_by": null,
                    "number": 114,
                    "period": 7,
                    "phase": "Unknown",
                    "source": "https://en.wikipedia.org/wiki/Flerovium",
                    "spectral_img": null,
                    "summary": "Flerovium is a superheavy artificial chemical element with symbol Fl and atomic number 114. It is an extremely radioactive synthetic element. The element is named after the Flerov Laboratory of Nuclear Reactions of the Joint Institute for Nuclear Research in Dubna, Russia, where the element was discovered in 1998.",
                    "symbol": "Fl",
                    "xpos": 14,
                    "ypos": 7,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        32,
                        18,
                        4
                    ]
                },
                {
                    "name": "Moscovium",
                    "appearance": null,
                    "atomic_mass": 289,
                    "boil": 1400,
                    "category": "unknown, probably post-transition metal",
                    "color": null,
                    "density": 13.5,
                    "discovered_by": "Joint Institute for Nuclear Research",
                    "melt": 670,
                    "molar_heat": null,
                    "named_by": null,
                    "number": 115,
                    "period": 7,
                    "phase": "Unknown",
                    "source": "https://en.wikipedia.org/wiki/Ununpentium",
                    "spectral_img": null,
                    "summary": "Moscovium is the name of a synthetic superheavy element in the periodic table that has the symbol Mc and has the atomic number 115. It is an extremely radioactive element; its most stable known isotope, moscovium-289, has a half-life of only 220 milliseconds. It is also known as eka-bismuth or simply element 115.",
                    "symbol": "Mc",
                    "xpos": 15,
                    "ypos": 7,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        32,
                        18,
                        5
                    ]
                },
                {
                    "name": "Livermorium",
                    "appearance": null,
                    "atomic_mass": 293,
                    "boil": 1085,
                    "category": "unknown, probably post-transition metal",
                    "color": null,
                    "density": 12.9,
                    "discovered_by": "Joint Institute for Nuclear Research",
                    "melt": 709,
                    "molar_heat": null,
                    "named_by": null,
                    "number": 116,
                    "period": 7,
                    "phase": "Unknown",
                    "source": "https://en.wikipedia.org/wiki/Livermorium",
                    "spectral_img": null,
                    "summary": "Livermorium is a synthetic superheavy element with symbol Lv and atomic number 116. It is an extremely radioactive element that has only been created in the laboratory and has not been observed in nature. The element is named after the Lawrence Livermore National Laboratory in the United States, which collaborated with the Joint Institute for Nuclear Research in Dubna, Russia to discover livermorium in 2000.",
                    "symbol": "Lv",
                    "xpos": 16,
                    "ypos": 7,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        32,
                        18,
                        6
                    ]
                },
                {
                    "name": "Tennessine",
                    "appearance": null,
                    "atomic_mass": 294,
                    "boil": 883,
                    "category": "unknown, probably metalloid",
                    "color": null,
                    "density": 7.17,
                    "discovered_by": "Joint Institute for Nuclear Research",
                    "melt": 723,
                    "molar_heat": null,
                    "named_by": null,
                    "number": 117,
                    "period": 7,
                    "phase": "Unknown",
                    "source": "https://en.wikipedia.org/wiki/Tennessine",
                    "spectral_img": null,
                    "summary": "Tennessine is a superheavy artificial chemical element with an atomic number of 117 and a symbol of Ts. Also known as eka-astatine or element 117, it is the second-heaviest known element and penultimate element of the 7th period of the periodic table. As of 2016, fifteen tennessine atoms have been observed:six when it was first synthesized in 2010, seven in 2012, and two in 2014.",
                    "symbol": "Ts",
                    "xpos": 17,
                    "ypos": 7,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        32,
                        18,
                        7
                    ]
                },
                {
                    "name": "Oganesson",
                    "appearance": null,
                    "atomic_mass": 294,
                    "boil": 350,
                    "category": "unknown, predicted to be noble gas",
                    "color": null,
                    "density": 4.95,
                    "discovered_by": "Joint Institute for Nuclear Research",
                    "melt": null,
                    "molar_heat": null,
                    "named_by": null,
                    "number": 118,
                    "period": 7,
                    "phase": "Unknown",
                    "source": "https://en.wikipedia.org/wiki/Oganesson",
                    "spectral_img": null,
                    "summary": "Oganesson is IUPAC's name for the transactinide element with the atomic number 118 and element symbol Og. It is also known as eka-radon or element 118, and on the periodic table of the elements it is a p-block element and the last one of the 7th period. Oganesson is currently the only synthetic member of group 18.",
                    "symbol": "Og",
                    "xpos": 18,
                    "ypos": 7,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        32,
                        18,
                        8
                    ]
                },
                {
                    "name": "Ununennium",
                    "appearance": null,
                    "atomic_mass": 315,
                    "boil": 630,
                    "category": "unknown, but predicted to be an alkali metal",
                    "color": null,
                    "density": 3,
                    "discovered_by": "GSI Helmholtz Centre for Heavy Ion Research",
                    "melt": null,
                    "molar_heat": null,
                    "named_by": null,
                    "number": 119,
                    "period": 8,
                    "phase": "Solid",
                    "source": "https://en.wikipedia.org/wiki/Ununennium",
                    "spectral_img": null,
                    "summary": "Ununennium, also known as eka-francium or simply element 119, is the hypothetical chemical element with symbol Uue and atomic number 119. Ununennium and Uue are the temporary systematic IUPAC name and symbol respectively, until a permanent name is decided upon. In the periodic table of the elements, it is expected to be an s-block element, an alkali metal, and the first element in the eighth period.",
                    "symbol": "Uue",
                    "xpos": 1,
                    "ypos": 8,
                    "shells": [
                        2,
                        8,
                        18,
                        32,
                        32,
                        18,
                        8,
                        1
                    ]
                }
            ];
    }
    return Data;
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