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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Dropdown\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Disabled</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-2\"><app-first></app-first></div>\n    <div class=\"col-md-10\"><router-outlet></router-outlet></div>\n  </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'alizadeh3';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _first_first_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./first/first.component */ "./src/app/first/first.component.ts");
/* harmony import */ var _second_second_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./second/second.component */ "./src/app/second/second.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");










var routes = [
    { path: 'main', component: _second_second_component__WEBPACK_IMPORTED_MODULE_8__["SecondComponent"] },
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_9__["CartComponent"] },
    { path: '**', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_9__["CartComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _first_first_component__WEBPACK_IMPORTED_MODULE_7__["FirstComponent"],
                _second_second_component__WEBPACK_IMPORTED_MODULE_8__["SecondComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_9__["CartComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  cart works!\n</p>\n"

/***/ }),

/***/ "./src/app/cart/cart.component.scss":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CartComponent = /** @class */ (function () {
    function CartComponent() {
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.scss */ "./src/app/cart/cart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/first/first.component.html":
/*!********************************************!*\
  !*** ./src/app/first/first.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>{{title}}</h3>\r\n<ul class=\"list-group\">\r\n  <li class=\"list-group-item\" *ngFor=\"let nicat of word \">\r\n     {{nicat.categoryName}}\r\n  </li>\r\n</ul>\r\n\r\n"

/***/ }),

/***/ "./src/app/first/first.component.scss":
/*!********************************************!*\
  !*** ./src/app/first/first.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  color: darkmagenta; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlyc3QvRDpcXGFuZ3VsYXJcXGFsaXphZGVoMy9zcmNcXGFwcFxcZmlyc3RcXGZpcnN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUUsbUJBQWtCLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9maXJzdC9maXJzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInB7Y29sb3I6IGRhcmttYWdlbnRhfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/first/first.component.ts":
/*!******************************************!*\
  !*** ./src/app/first/first.component.ts ***!
  \******************************************/
/*! exports provided: FirstComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstComponent", function() { return FirstComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _first_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./first.service */ "./src/app/first/first.service.ts");



var FirstComponent = /** @class */ (function () {
    function FirstComponent(firstService) {
        this.firstService = firstService;
        this.title = 'Categories';
    }
    FirstComponent.prototype.ngOnInit = function () {
        this.getAlizadeh();
    };
    FirstComponent.prototype.getAlizadeh = function () {
        var _this = this;
        this.firstService.getNicat().subscribe(function (res) {
            _this.word = res;
        });
    };
    FirstComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-first',
            template: __webpack_require__(/*! ./first.component.html */ "./src/app/first/first.component.html"),
            styles: [__webpack_require__(/*! ./first.component.scss */ "./src/app/first/first.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_first_service__WEBPACK_IMPORTED_MODULE_2__["FirstService"]])
    ], FirstComponent);
    return FirstComponent;
}());



/***/ }),

/***/ "./src/app/first/first.service.ts":
/*!****************************************!*\
  !*** ./src/app/first/first.service.ts ***!
  \****************************************/
/*! exports provided: FirstService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstService", function() { return FirstService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var FirstService = /** @class */ (function () {
    function FirstService(http) {
        this.http = http;
    }
    FirstService.prototype.getNicat = function () {
        return this.http.get('http://northwindapi.azurewebsites.net/api/categories');
    };
    FirstService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FirstService);
    return FirstService;
}());



/***/ }),

/***/ "./src/app/second/second.component.html":
/*!**********************************************!*\
  !*** ./src/app/second/second.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>{{title}}</h3>\r\n<table class=\"table\">\r\n  <tr *ngFor=\"let java of foods \">\r\n    <td>{{productId}}</td>\r\n    <td>{{java.categoryId}}</td>\r\n    <td>{{java.productName}}</td>\r\n    <td>{{java.unitPrice}}</td>\r\n    <td>{{java.quantityPerUnit}}</td>\r\n    <td>{{java.unitsInStock}}</td>\r\n  </tr>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/second/second.component.scss":
/*!**********************************************!*\
  !*** ./src/app/second/second.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  color: #11ff21; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vjb25kL0Q6XFxhbmd1bGFyXFxhbGl6YWRlaDMvc3JjXFxhcHBcXHNlY29uZFxcc2Vjb25kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBYyxFQUFFIiwiZmlsZSI6InNyYy9hcHAvc2Vjb25kL3NlY29uZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XHJcbiAgY29sb3I6ICMxMWZmMjE7fVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/second/second.component.ts":
/*!********************************************!*\
  !*** ./src/app/second/second.component.ts ***!
  \********************************************/
/*! exports provided: SecondComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondComponent", function() { return SecondComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _second_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./second.service */ "./src/app/second/second.service.ts");



var SecondComponent = /** @class */ (function () {
    function SecondComponent(data) {
        this.data = data;
        this.title = 'Product';
    }
    SecondComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    SecondComponent.prototype.getProducts = function () {
        var _this = this;
        this.data.getProducts().subscribe(function (res) {
            _this.foods = res;
        });
    };
    SecondComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-second',
            template: __webpack_require__(/*! ./second.component.html */ "./src/app/second/second.component.html"),
            styles: [__webpack_require__(/*! ./second.component.scss */ "./src/app/second/second.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_second_service__WEBPACK_IMPORTED_MODULE_2__["SecondService"]])
    ], SecondComponent);
    return SecondComponent;
}());



/***/ }),

/***/ "./src/app/second/second.service.ts":
/*!******************************************!*\
  !*** ./src/app/second/second.service.ts ***!
  \******************************************/
/*! exports provided: SecondService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondService", function() { return SecondService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SecondService = /** @class */ (function () {
    function SecondService(http) {
        this.http = http;
    }
    SecondService.prototype.getProducts = function () {
        return this.http.get('http://northwindapi.azurewebsites.' +
            'net/api/products');
    };
    SecondService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SecondService);
    return SecondService;
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
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angular\alizadeh3\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map