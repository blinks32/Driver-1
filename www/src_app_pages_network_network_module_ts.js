"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_network_network_module_ts"],{

/***/ 7671:
/*!*********************************************************!*\
  !*** ./src/app/pages/network/network-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkPageRoutingModule": () => (/* binding */ NetworkPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _network_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./network.page */ 508);




const routes = [
    {
        path: '',
        component: _network_page__WEBPACK_IMPORTED_MODULE_0__.NetworkPage
    }
];
let NetworkPageRoutingModule = class NetworkPageRoutingModule {
};
NetworkPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NetworkPageRoutingModule);



/***/ }),

/***/ 7846:
/*!*************************************************!*\
  !*** ./src/app/pages/network/network.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkPageModule": () => (/* binding */ NetworkPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _network_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./network-routing.module */ 7671);
/* harmony import */ var _network_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./network.page */ 508);







let NetworkPageModule = class NetworkPageModule {
};
NetworkPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _network_routing_module__WEBPACK_IMPORTED_MODULE_0__.NetworkPageRoutingModule
        ],
        declarations: [_network_page__WEBPACK_IMPORTED_MODULE_1__.NetworkPage]
    })
], NetworkPageModule);



/***/ }),

/***/ 508:
/*!***********************************************!*\
  !*** ./src/app/pages/network/network.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkPage": () => (/* binding */ NetworkPage)
/* harmony export */ });
/* harmony import */ var _workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _network_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./network.page.html?ngResource */ 6734);
/* harmony import */ var _network_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./network.page.scss?ngResource */ 7533);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);





let NetworkPage = class NetworkPage {
  constructor() {}

  ngOnInit() {}

  CheckNetwork() {
    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }

};

NetworkPage.ctorParameters = () => [];

NetworkPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-network',
  template: _network_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_network_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], NetworkPage);


/***/ }),

/***/ 7533:
/*!************************************************************!*\
  !*** ./src/app/pages/network/network.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXR3b3JrLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 6734:
/*!************************************************************!*\
  !*** ./src/app/pages/network/network.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\">\n        <ion-back-button></ion-back-button>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> About </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-img src=\"../assets/imgs/about.svg\"></ion-img>\n\n  <ion-list-header style=\"margin-top: 10%\">\n    <ion-label color=\"primary\" class=\"ion-text-center\">\n      <h1>Network Error</h1>\n    </ion-label>\n</ion-list-header>\n\n<ion-button size=\"large\" type=\"submit\" color=\"primary\" (click)=\"CheckNetwork()\" expand=\"block\">\n  <ion-label *ngIf=\"!approve\">Try Again</ion-label> \n  <ion-progress-bar *ngIf=\"approve\"color='light' type=\"indeterminate\"></ion-progress-bar>\n</ion-button>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_network_network_module_ts.js.map