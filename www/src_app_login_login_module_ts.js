"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage],
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 6710);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _otp_otp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../otp/otp.component */ 3096);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _services_overlay_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/overlay.service */ 5596);
/* harmony import */ var _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @codetrix-studio/capacitor-google-auth */ 1784);
/* harmony import */ var _angular_fire_auth___WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/auth/ */ 1577);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/status-bar */ 9326);
/* harmony import */ var _services_avatar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/avatar.service */ 5083);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @capacitor/splash-screen */ 2239);

















let LoginPage = class LoginPage {
  constructor(modalCtrl, auth, router, nav, authY, avatar, overlay) {
    this.modalCtrl = modalCtrl;
    this.auth = auth;
    this.router = router;
    this.nav = nav;
    this.authY = authY;
    this.avatar = avatar;
    this.overlay = overlay;
    this.CountryJson = _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.CountryJson;
    this.flag = "https://cdn.kcak11.com/CountryFlags/countries/ng.svg";
    this.slideOpts = {
      initialSlide: 0,
      speed: 300,
      autoplay: true
    };

    if (!(0,_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.isPlatform)('capacitor')) {
      _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_7__.GoogleAuth.initialize();
    }

    let country = 'Nigeria';
    this.CountryCode = '+1';
    this.numberT = '+1';
  }

  HideSplash() {
    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_10__.SplashScreen.hide();
    })();
  }

  ngOnInit() {
    var _this = this;

    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup({
        phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(null, {
          validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.maxLength(10)]
        })
      }); // this.router.navigateByUrl('details');
      // this.show();
    })();
  }

  countryCodeChange($event) {
    console.log($event.detail.value.toString());
    this.CountryCode = '';
    this.numberT = $event.detail.value.toString();
  }

  Show() {
    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_8__.StatusBar.setOverlaysWebView({
        overlay: false
      }); // StatusBar.setStyle({ style: Style.Light });
    })();
  }

  Hide() {
    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_8__.StatusBar.setOverlaysWebView({
        overlay: true
      }); // StatusBar.setStyle({ style: Style.Light });
    })();
  }

  signIn() {
    var _this2 = this;

    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!_this2.form.valid) {
          _this2.form.markAllAsTouched();

          return;
        }

        console.log(_this2.form.value);
        _this2.approve2 = true;
        const response = yield _this2.auth.signInWithPhoneNumber(_this2.numberT + _this2.form.value.phone);
        _this2.approve2 = false;
        const options = {
          component: _otp_otp_component__WEBPACK_IMPORTED_MODULE_3__.OtpComponent,
          componentProps: {
            phone: _this2.form.value.phone,
            countryCode: _this2.numberT
          },
          swipeToClose: true
        };

        const modal = _this2.modalCtrl.create(options);

        (yield modal).present();
        const data = (yield modal).onWillDismiss();

        _this2.authY.onAuthStateChanged( /*#__PURE__*/function () {
          var _ref = (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user) {
            _this2.avatar.getUserProfile(user).subscribe( /*#__PURE__*/function () {
              var _ref2 = (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
                if (!data) {
                  _this2.router.navigateByUrl('details');

                  _this2.overlay.hideLoader();
                } else {
                  _this2.router.navigateByUrl('tabs');

                  _this2.overlay.hideLoader();
                }
              });

              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }());
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());

        console.log(data);
      } catch (e) {
        console.log(e);

        _this2.overlay.showAlert('Error', JSON.stringify(e));

        _this2.approve2 = false;
      }
    })();
  }

};

LoginPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController
}, {
  type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.NavController
}, {
  type: _angular_fire_auth___WEBPACK_IMPORTED_MODULE_15__.Auth
}, {
  type: _services_avatar_service__WEBPACK_IMPORTED_MODULE_9__.AvatarService
}, {
  type: _services_overlay_service__WEBPACK_IMPORTED_MODULE_6__.OverlayService
}];

LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginPage);


/***/ }),

/***/ 5579:
/*!*************************************************************************************!*\
  !*** ./node_modules/@codetrix-studio/capacitor-google-auth/dist/esm/definitions.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/// <reference types="@capacitor/cli" />


/***/ }),

/***/ 1784:
/*!*******************************************************************************!*\
  !*** ./node_modules/@codetrix-studio/capacitor-google-auth/dist/esm/index.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleAuth": () => (/* binding */ GoogleAuth)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 6549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 5579);

const GoogleAuth = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('GoogleAuth', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_codetrix-studio_capacitor-google-auth_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 4707)).then(m => new m.GoogleAuthWeb())
});



/***/ }),

/***/ 7047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "@keyframes slide-left {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-100px);\n  }\n}\n@keyframes slide-right {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(100px);\n  }\n}\n.slide-left {\n  animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n.slide-right {\n  animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\nion-footer ion-row {\n  background: transparent;\n  display: block;\n}\nion-footer ion-row ion-fab-button {\n  margin-right: 2.5vh;\n}\nion-footer ion-row ion-list ion-list-header ion-label {\n  font-weight: bold;\n  font-size: 1.8rem;\n}\nion-footer ion-row ion-list ion-input, ion-footer ion-row ion-list ion-text {\n  font-size: 1.3rem;\n}\nion-footer ion-row ion-list .error {\n  font-size: 0.75em !important;\n}\nion-toolbar, ion-header {\n  height: 44px;\n}\nion-img {\n  margin: auto;\n  width: auto;\n}\nion-slides {\n  height: 440px;\n}\nion-select {\n  color: var(--ion-color-primary);\n  --placeholder-opacity: 1;\n  width: 30%;\n  justify-content: center;\n  font-size: 24px;\n  font-weight: 500;\n}\n.pm-awesome-divider {\n  width: 100%;\n  text-align: center;\n  margin-top: 20px;\n}\n.shadow-top {\n  box-shadow: 0px -1.5px 1.5px rgba(196, 196, 196, 0.414);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJO0lBQ0Usd0JBQUE7RUFBSjtFQUVFO0lBQ0UsNkJBQUE7RUFBSjtBQUNGO0FBR0U7RUFDRTtJQUNFLHdCQUFBO0VBREo7RUFHRTtJQUNFLDRCQUFBO0VBREo7QUFDRjtBQUlBO0VBQ0Msb0VBQUE7QUFGRDtBQUtBO0VBQ0MscUVBQUE7QUFGRDtBQU1JO0VBQ0ksdUJBQUE7RUFDQSxjQUFBO0FBSFI7QUFJUTtFQUNJLG1CQUFBO0FBRlo7QUFTZ0I7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBUHBCO0FBV1k7RUFDSSxpQkFBQTtBQVRoQjtBQWFRO0VBQ0ksNEJBQUE7QUFYWjtBQWlCQTtFQUVFLFlBQUE7QUFmRjtBQWtCQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBZkY7QUFrQkE7RUFDRSxhQUFBO0FBZkY7QUFtQkE7RUFDRSwrQkFBQTtFQUNBLHdCQUFBO0VBQ0MsVUFBQTtFQUNELHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBaEJGO0FBbUJBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFoQko7QUFvQkE7RUFFRSx1REFBQTtBQWxCRiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBrZXlmcmFtZXMgc2xpZGUtbGVmdCB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgc2xpZGUtcmlnaHQge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwcHgpO1xuICAgIH1cbiAgfVxuICBcbi5zbGlkZS1sZWZ0IHtcblx0YW5pbWF0aW9uOiBzbGlkZS1sZWZ0IDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xufVxuXG4uc2xpZGUtcmlnaHQge1xuXHRhbmltYXRpb246IHNsaWRlLXJpZ2h0IDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgICBpb24tcm93IHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIuNXZoO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1saXN0IHtcbiAgICAgICAgICAgIC8vYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcbiAgICAgICAgICAgICAgLy8gcGFkZGluZy1ib3R0b206IDh2aDtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICBpb24tbGlzdC1oZWFkZXIge1xuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWlucHV0LCBpb24tdGV4dCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1ZW0gIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tdG9vbGJhciwgaW9uLWhlYWRlcntcbiBcbiAgaGVpZ2h0OiA0NHB4O1xufVxuXG5pb24taW1ne1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiA0NDBweDtcbn1cblxuXG5pb24tc2VsZWN0IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuICAgd2lkdGg6IDMwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnBtLWF3ZXNvbWUtZGl2aWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cblxuLnNoYWRvdy10b3BcbntcbiAgYm94LXNoYWRvdzogMHB4IC0xLjVweCAxLjVweCByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuNDE0KTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "\n\n<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-list lines=\"none\">\n  <ion-list-header class=\"ion-padding\" >\n    <ion-label color=\"primary\" class=\"ion-text-center\">\n      <h1>GO DRIVER</h1>\n      <p>Drive and earn With Confidence and integrity</p></ion-label>\n</ion-list-header>\n\n    <ion-img src=\"../assets/imgs/jok.png\"></ion-img>\n      \n      </ion-list>\n</ion-header>\n\n<ion-content class=\"ion-no-border\">\n\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n\n  \n  \n  <ion-row class=\"ion-no-padding\">\n    <ion-list class=\"ion-no-padding\">\n     \n      <ion-item-group class=\"ion-margin-horizontal\">\n        <form [formGroup]=\"form\" class=\"ion-padding\"> \n\n          <div id=\"sign-in-button\"></div>\n\n          <div class=\"ion-margin-vertical\">\n            \n            \n            <ion-item >\n                 <!-- <ion-label color=\"primary\"><h1>{{CountryCode}}</h1></ion-label> -->\n                <ion-select slot=\"start\" placeholder=\"{{CountryCode}}\" (ionChange)=\"countryCodeChange($event)\">\n                  <ion-select-option  *ngFor=\"let country of CountryJson\" [value]='country.dialCode'>\n                      {{country.dialCode}} {{country.name}}\n                  </ion-select-option>\n                </ion-select>\n           \n\n              <ion-input \n                formControlName=\"phone\" \n                placeholder=\"Mobile Number\" \n                type=\"tel\"\n                clearInput\n                minlength=\"10\"\n                (ionFocus)=\"Show()\"\n                (ionBlur)=\"Hide()\"\n                maxlength=\"10\">\n              </ion-input>\n            </ion-item>\n\n\n            <ion-text class=\"ion-text-center\" *ngIf=\"!form.get('phone').valid && form.get('phone').touched\">\n              <ion-text class=\"error\" *ngIf=\"form.get('phone').hasError('required')\" color=\"danger\">\n                * Please enter the Mobile Number\n              </ion-text>\n              <ion-text class=\"error\" *ngIf=\"form.get('phone').hasError('minlength') \n                && !form.get('phone').hasError('required')\" color=\"danger\">\n                * Please enter a valid Mobile Number\n              </ion-text>\n            </ion-text>\n              \n          </div>\n\n          \n              <ion-button  shape='round' size=\"large\" type=\"submit\" [disabled]=\"!form.get('phone').valid\" color=\"primary\" (click)=\"signIn()\" expand=\"block\">\n                <ion-label *ngIf=\"!approve2\">Continue</ion-label>\n                <ion-icon *ngIf=\"!approve2\" color='light' slot=\"end\" name=\"arrow-forward\"></ion-icon>\n                <ion-progress-bar *ngIf=\"approve2\" color='light' type=\"indeterminate\"></ion-progress-bar>\n              </ion-button>\n          \n\n        </form>\n\n\n        <!-- <ion-label class=\"pm-awesome-divider\" color='medium' data-label=\"or\">OR</ion-label>\n\n       \n\n        <ion-row  class=\"ion-no-padding\">\n          <ion-col>\n            <ion-button size=\"large\" type=\"submit\" color=\"primary\" (click)=\"loginWithGoogle()\" expand=\"block\">\n              <ion-icon *ngIf=\"!approve\" color='light' slot=\"icon-only\" name=\"logo-google\"></ion-icon>\n              <ion-label *ngIf=\"!approve\">oogle</ion-label> \n              <ion-progress-bar *ngIf=\"approve\"color='light' type=\"indeterminate\"></ion-progress-bar>\n            </ion-button>\n          </ion-col>\n        </ion-row> -->\n      </ion-item-group>\n    </ion-list>\n  </ion-row>\n\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map