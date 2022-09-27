"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_rating_rating_module_ts"],{

/***/ 1049:
/*!*******************************************************!*\
  !*** ./src/app/pages/rating/rating-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatingPageRoutingModule": () => (/* binding */ RatingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _rating_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rating.page */ 7977);




const routes = [
    {
        path: '',
        component: _rating_page__WEBPACK_IMPORTED_MODULE_0__.RatingPage
    }
];
let RatingPageRoutingModule = class RatingPageRoutingModule {
};
RatingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RatingPageRoutingModule);



/***/ }),

/***/ 4176:
/*!***********************************************!*\
  !*** ./src/app/pages/rating/rating.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatingPageModule": () => (/* binding */ RatingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _rating_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rating-routing.module */ 1049);
/* harmony import */ var _rating_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rating.page */ 7977);







let RatingPageModule = class RatingPageModule {
};
RatingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _rating_routing_module__WEBPACK_IMPORTED_MODULE_0__.RatingPageRoutingModule
        ],
        declarations: [_rating_page__WEBPACK_IMPORTED_MODULE_1__.RatingPage]
    })
], RatingPageModule);



/***/ }),

/***/ 7977:
/*!*********************************************!*\
  !*** ./src/app/pages/rating/rating.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatingPage": () => (/* binding */ RatingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _rating_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rating.page.html?ngResource */ 549);
/* harmony import */ var _rating_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rating.page.scss?ngResource */ 2277);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let RatingPage = class RatingPage {
    constructor() { }
    ngOnInit() {
    }
};
RatingPage.ctorParameters = () => [];
RatingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-rating',
        template: _rating_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_rating_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RatingPage);



/***/ }),

/***/ 2277:
/*!**********************************************************!*\
  !*** ./src/app/pages/rating/rating.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYXRpbmcucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 549:
/*!**********************************************************!*\
  !*** ./src/app/pages/rating/rating.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>rating</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_rating_rating_module_ts.js.map