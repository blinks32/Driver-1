"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_history_history_module_ts"],{

/***/ 4207:
/*!*********************************************************!*\
  !*** ./src/app/pages/history/history-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryPageRoutingModule": () => (/* binding */ HistoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history.page */ 2722);




const routes = [
    {
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_0__.HistoryPage
    }
];
let HistoryPageRoutingModule = class HistoryPageRoutingModule {
};
HistoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HistoryPageRoutingModule);



/***/ }),

/***/ 608:
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryPageModule": () => (/* binding */ HistoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _history_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history-routing.module */ 4207);
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history.page */ 2722);







let HistoryPageModule = class HistoryPageModule {
};
HistoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _history_routing_module__WEBPACK_IMPORTED_MODULE_0__.HistoryPageRoutingModule
        ],
        declarations: [_history_page__WEBPACK_IMPORTED_MODULE_1__.HistoryPage]
    })
], HistoryPageModule);



/***/ }),

/***/ 2722:
/*!***********************************************!*\
  !*** ./src/app/pages/history/history.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryPage": () => (/* binding */ HistoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _history_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history.page.html?ngResource */ 6351);
/* harmony import */ var _history_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history.page.scss?ngResource */ 6496);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let HistoryPage = class HistoryPage {
    constructor(nav) {
        this.nav = nav;
    }
    ngOnInit() {
    }
    goBack() {
        this.nav.pop();
    }
};
HistoryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
HistoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-history',
        template: _history_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_history_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HistoryPage);



/***/ }),

/***/ 6496:
/*!************************************************************!*\
  !*** ./src/app/pages/history/history.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaXN0b3J5LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 6351:
/*!************************************************************!*\
  !*** ./src/app/pages/history/history.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" [translucent]=\"true\">\n  <ion-toolbar >\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\">\n        <ion-back-button></ion-back-button>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\"> History </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-img src=\"../assets/imgs/empty.svg\"></ion-img>\n\n  <ion-list-header style=\"margin-top: 10%\">\n    <ion-label color=\"primary\" class=\"ion-text-center\">\n      <h1>No Data</h1>\n      <p>Book a ride to see History</p></ion-label>\n</ion-list-header>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_history_history_module_ts.js.map