"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_support_support_module_ts"],{

/***/ 7544:
/*!*********************************************************!*\
  !*** ./src/app/pages/support/support-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportPageRoutingModule": () => (/* binding */ SupportPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _support_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support.page */ 6227);




const routes = [
    {
        path: '',
        component: _support_page__WEBPACK_IMPORTED_MODULE_0__.SupportPage
    }
];
let SupportPageRoutingModule = class SupportPageRoutingModule {
};
SupportPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SupportPageRoutingModule);



/***/ }),

/***/ 2602:
/*!*************************************************!*\
  !*** ./src/app/pages/support/support.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportPageModule": () => (/* binding */ SupportPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _support_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support-routing.module */ 7544);
/* harmony import */ var _support_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./support.page */ 6227);







let SupportPageModule = class SupportPageModule {
};
SupportPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _support_routing_module__WEBPACK_IMPORTED_MODULE_0__.SupportPageRoutingModule
        ],
        declarations: [_support_page__WEBPACK_IMPORTED_MODULE_1__.SupportPage]
    })
], SupportPageModule);



/***/ }),

/***/ 6227:
/*!***********************************************!*\
  !*** ./src/app/pages/support/support.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportPage": () => (/* binding */ SupportPage)
/* harmony export */ });
/* harmony import */ var _workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _support_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./support.page.html?ngResource */ 4619);
/* harmony import */ var _support_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./support.page.scss?ngResource */ 3009);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/status-bar */ 9326);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_avatar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/avatar.service */ 5083);









let SupportPage = class SupportPage {
  constructor(chatService, router) {
    this.chatService = chatService;
    this.router = router;
    this.newMsg = '';
  }

  ionViewDidEnter() {
    var _this = this;

    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.skeletOns = [{}, {}, {}, {}];
      _this.hideSkeleton = true;
      _this.messages = _this.chatService.getMessage();

      _this.messages.subscribe(d => {
        if (d.length == 0) {
          _this.hasNoData = true;
          _this.hideSkeleton = false;
        } else {
          _this.hideSkeleton = false;
          _this.hasNoData = false;
        }
      });
    })();
  }

  Show() {
    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.StatusBar.setOverlaysWebView({
        overlay: false
      });
    })();
  }

  Hide() {
    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.StatusBar.setOverlaysWebView({
        overlay: true
      });
    })();
  }

  ngOnInit() {}

  sendMessage() {
    var _this2 = this;

    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.chatService.addChatMessage(_this2.newMsg);
      _this2.newMsg = '';

      _this2.content.scrollToBottom();
    })();
  }

};

SupportPage.ctorParameters = () => [{
  type: src_app_services_avatar_service__WEBPACK_IMPORTED_MODULE_4__.AvatarService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}];

SupportPage.propDecorators = {
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent]
  }]
};
SupportPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-support',
  template: _support_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_support_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SupportPage);


/***/ }),

/***/ 3009:
/*!************************************************************!*\
  !*** ./src/app/pages/support/support.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".message-input {\n  width: 100%;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 6px;\n  resize: none;\n  margin-top: 0px;\n  --padding-start: 10px;\n}\n\n@keyframes slide-top {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n\n.slide-top {\n  animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n.message {\n  padding: 10px !important;\n  border-radius: 10px !important;\n  margin-bottom: 4px !important;\n  white-space: pre-wrap;\n}\n\n.my-message {\n  background: var(--ion-color-tertiary);\n  color: #fff;\n  animation-name: slide-top;\n  animation-duration: 0.5s;\n}\n\n.other-message {\n  background: var(--ion-color-secondary);\n  color: #fff;\n  animation-name: slide-top;\n  animation-duration: 0.6s;\n}\n\n.time {\n  color: #dfdfdf;\n  float: right;\n  font-size: small;\n}\n\nion-skeleton-text {\n  --background: rgba(0, 98, 255, 0.259);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cHBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNFLDJCQUFBO0VBQ0o7RUFDRTtJQUNFLHlCQUFBO0VBQ0o7QUFDRjs7QUFFRTtFQUNJLG1FQUFBO0FBQU47O0FBTUE7RUFDSSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtBQUhKOztBQU9BO0VBQ0kscUNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBQUpKOztBQU9BO0VBQ0ksc0NBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBQUpKOztBQU9BO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUpKOztBQU9BO0VBQ0kscUNBQUE7QUFKSiIsImZpbGUiOiJzdXBwb3J0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlLWlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgcmVzaXplOiBub25lO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtdG9wIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICB9XG4gIH1cbiAgXG4gIC5zbGlkZS10b3Age1xuICAgICAgYW5pbWF0aW9uOiBzbGlkZS10b3AgMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XG4gIH1cbiAgXG4gIFxuICBcbiBcbi5tZXNzYWdlIHtcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDRweCAhaW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICBcbn1cbiBcbi5teS1tZXNzYWdlIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS10b3A7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xufVxuIFxuLm90aGVyLW1lc3NhZ2Uge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS10b3A7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjZzO1xufVxuIFxuLnRpbWUge1xuICAgIGNvbG9yOiAjZGZkZmRmO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBmb250LXNpemU6IHNtYWxsO1xufVxuXG5pb24tc2tlbGV0b24tdGV4dCB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDk4LCAyNTUsIDAuMjU5KTtcbiAgfVxuICAiXX0= */";

/***/ }),

/***/ 4619:
/*!************************************************************!*\
  !*** ./src/app/pages/support/support.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\">\n        <ion-back-button></ion-back-button>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"primary\">\n        <ion-icon name=\"call\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\"> Support </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n \n<ion-content class=\"ion-padding\">\n \n  <ion-grid *ngIf=\"!hideSkeleton\">\n    <ion-row *ngFor=\"let message of messages | async\">\n      <ion-col size=\"9\" class=\"message\"\n        [offset]=\"message.myMsg ? 3 : 0\"\n        [ngClass]=\"{ 'my-message': message.myMsg, 'other-message': !message.myMsg }\">\n        <b>{{ message.fromName }}</b><br>\n        <span>{{ message.msg }}\n        </span>\n        <div class=\"time ion-text-right\"><br>{{ message.createdAt?.toMillis() | date:'short' }}</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <div *ngIf=\"hideSkeleton\">\n    <ion-item lines=\"none\" *ngFor=\"let item of skeletOns\">\n      <ion-thumbnail>\n        <ion-skeleton-text [animated]=\"true\" style=\"width: 250px; height: 400px;\"></ion-skeleton-text>\n      </ion-thumbnail>\n    </ion-item>\n\n    <ion-item lines=\"none\" *ngFor=\"let item of skeletOns\">\n      <ion-thumbnail>\n        <ion-skeleton-text  [animated]=\"true\" style=\"width: 250px; height: 400px; left: 100px\"></ion-skeleton-text>\n      </ion-thumbnail>\n    </ion-item>\n  </div>\n\n\n\n  \n  <ion-list class=\"ion-no-padding\" lines=\"none\">\n  <ion-img *ngIf=\"hasNoData\" src=\"../../../assets/imgs/chat.svg\"></ion-img>\n  <ion-list-header *ngIf=\"hasNoData\" style=\"margin-top: 10%\">\n    <ion-label color=\"primary\" class=\"ion-text-center\">\n      <h1>We Respond Immediately</h1>\n      <p>Tell Us How We can Help You.</p></ion-label>\n</ion-list-header>\n</ion-list>\n \n</ion-content>\n \n<ion-footer>\n  <ion-toolbar color=\"light\">\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"10\">\n        <ion-textarea autoGrow=\"true\" (ionFocus)=\"Show()\"  (ionBlur)=\"Hide()\" placeholder=\"Start Typing..\" class=\"message-input\" rows=\"1\" maxLength=\"500\" [(ngModel)]=\"newMsg\" >\n        </ion-textarea>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-button expand=\"block\" fill=\"clear\" color=\"primary\" [disabled]=\"newMsg === ''\"\n          class=\"msg-btn\" (click)=\"sendMessage()\">\n          <ion-icon name=\"send\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_support_support_module_ts.js.map