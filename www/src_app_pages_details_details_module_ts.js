"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_details_details_module_ts"],{

/***/ 6244:
/*!*********************************************************!*\
  !*** ./src/app/pages/details/details-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPageRoutingModule": () => (/* binding */ DetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.page */ 5362);




const routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_0__.DetailsPage
    }
];
let DetailsPageRoutingModule = class DetailsPageRoutingModule {
};
DetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailsPageRoutingModule);



/***/ }),

/***/ 557:
/*!*************************************************!*\
  !*** ./src/app/pages/details/details.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPageModule": () => (/* binding */ DetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-routing.module */ 6244);
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.page */ 5362);







let DetailsPageModule = class DetailsPageModule {
};
DetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _details_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsPageRoutingModule
        ],
        declarations: [_details_page__WEBPACK_IMPORTED_MODULE_1__.DetailsPage]
    })
], DetailsPageModule);



/***/ }),

/***/ 5362:
/*!***********************************************!*\
  !*** ./src/app/pages/details/details.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPage": () => (/* binding */ DetailsPage)
/* harmony export */ });
/* harmony import */ var _workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.page.html?ngResource */ 6366);
/* harmony import */ var _details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details.page.scss?ngResource */ 791);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_avatar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/avatar.service */ 5083);
/* harmony import */ var src_app_services_overlay_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/overlay.service */ 5596);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/geolocation */ 7621);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/camera */ 4241);













let DetailsPage = class DetailsPage {
  constructor(overlay, authy, auth, avatar, router) {
    this.overlay = overlay;
    this.authy = authy;
    this.auth = auth;
    this.avatar = avatar;
    this.router = router;
    this.selected = 'Select Car Type';
  }

  ngOnInit() {
    this.avatar.getCartypes().subscribe(d => {
      console.log(d);
      this.cartypes = d;
    });
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
      fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(200)]
      }),
      lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(200)]
      }),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(200)]
      }),
      car: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(200)]
      }),
      plate: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(200)]
      })
    });
  }

  chooseCarType(even) {
    var _this = this;

    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(even.detail.value);
      _this.currentcar = even.detail.value.name;
    })();
  }

  changeImage() {
    var _this2 = this;

    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_7__.Camera.getPhoto({
          quality: 20,
          allowEditing: false,
          resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_7__.CameraResultType.DataUrl,
          source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_7__.CameraSource.Camera // Camera, Photos or Prompt!

        });
        _this2.imageURl = image.dataUrl;
        _this2.profileImage = image.dataUrl;
      } catch (e) {
        _this2.overlay.showAlert('Error', e);
      }
    })();
  }

  changeLicense() {
    var _this3 = this;

    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_7__.Camera.getPhoto({
          quality: 20,
          allowEditing: false,
          resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_7__.CameraResultType.DataUrl,
          source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_7__.CameraSource.Camera // Camera, Photos or Prompt!

        });
        _this3.licenseURl = image.dataUrl;
        _this3.licenseImage = image.dataUrl;
      } catch (e) {
        _this3.overlay.showAlert('Error', e);
      }
    })();
  }

  signIn() {
    var _this4 = this;

    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_6__.Geolocation.checkPermissions();
        const coordinates = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_6__.Geolocation.getCurrentPosition();
        _this4.approve2 = true;

        if (_this4.profileImage && _this4.licenseImage && _this4.currentcar && _this4.form.value.fullname && _this4.form.value.lastname && _this4.form.value.email && _this4.form.value.car && _this4.form.value.plate && _this4.imageURl && _this4.licenseURl) {
          yield _this4.avatar.CreateNewDriver(coordinates, _this4.form.value.fullname + '' + _this4.form.value.lastname, _this4.form.value.email, _this4.authy.currentUser.phoneNumber, _this4.form.value.car, _this4.currentcar, _this4.form.value.plate, _this4.imageURl, _this4.licenseURl);
          yield _this4.avatar.createCard('Cash', 0, 'cash', 'None');
          _this4.approve2 = false;

          _this4.router.navigateByUrl('tabs');
        } else {
          _this4.overlay.showAlert('Incomplete', "Complete the form");
        }
      } catch (e) {
        _this4.overlay.showAlert('Error', e);
      }
    })();
  }

};

DetailsPage.ctorParameters = () => [{
  type: src_app_services_overlay_service__WEBPACK_IMPORTED_MODULE_5__.OverlayService
}, {
  type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.Auth
}, {
  type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: src_app_services_avatar_service__WEBPACK_IMPORTED_MODULE_4__.AvatarService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
}];

DetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-details',
  template: _details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], DetailsPage);


/***/ }),

/***/ 791:
/*!************************************************************!*\
  !*** ./src/app/pages/details/details.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "ion-img {\n  margin: auto;\n  width: auto;\n}\n\nion-avatar {\n  width: 128px;\n  height: 128px;\n}\n\n.preview {\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n}\n\n.fallback {\n  width: 128px;\n  height: 128px;\n  border-radius: 50%;\n  background: #bfbfbf;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFERjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBQUo7O0FBSUU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQURKOztBQUlFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUZKOztBQU1FO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBSEo7O0FBTUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFISjs7QUFNRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBSEo7O0FBTUU7RUFDRSxxQkFBQTtBQUhKIiwiZmlsZSI6ImRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmlvbi1pbWd7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IGF1dG87XG59XG5pb24tYXZhdGFyIHtcbiAgICB3aWR0aDogMTI4cHg7XG4gICAgaGVpZ2h0OiAxMjhweDtcbiAgIFxuICB9XG4gIFxuICAucHJldmlldyB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIFxuICAuZmFsbGJhY2sge1xuICAgIHdpZHRoOiAxMjhweDtcbiAgICBoZWlnaHQ6IDEyOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjYmZiZmJmO1xuICBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuIFxuICBcbiAgI2NvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgfVxuICBcbiAgI2NvbnRhaW5lciBzdHJvbmcge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgfVxuICBcbiAgI2NvbnRhaW5lciBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgY29sb3I6ICM4YzhjOGM7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIFxuICAjY29udGFpbmVyIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG5cblxuICBcbiAgIl19 */";

/***/ }),

/***/ 6366:
/*!************************************************************!*\
  !*** ./src/app/pages/details/details.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n<!-- <ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"ion-text-center\">\n \n    <ion-title> Complete Your Profile </ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n\n  <ion-list class=\"ion-padding\">\n   \n    <ion-item-group>\n      <form [formGroup]=\"form\" >\n\n        <div>\n          <ion-list-header>\n           \n            <ion-label color=\"primary\" class=\"ion-text-center\">\n              <h1>Personal Information</h1>\n              </ion-label>\n             </ion-list-header>\n          <ion-item class=\"ion-margin\">\n\n\n            <ion-input \n              formControlName=\"fullname\" \n              placeholder=\"First Name\" \n              type=\"text\"\n              minlength=\"1\"\n              maxlength=\"200\">\n            </ion-input>\n          </ion-item>\n\n          <ion-item class=\"ion-margin\">\n\n            <ion-input \n              formControlName=\"lastname\" \n              placeholder=\"Last Name\" \n              type=\"text\"\n              minlength=\"1\"\n              maxlength=\"200\">\n            </ion-input>\n          </ion-item>\n\n          <ion-item class=\"ion-margin\">\n            <ion-input \n            formControlName=\"email\" \n            placeholder=\"Your Email\" \n            type=\"text\"\n            minlength=\"1\"\n            maxlength=\"200\">\n          </ion-input>\n          </ion-item>\n\n        </div>\n\n\n        <div >\n          <ion-list-header class=\"ion-padding-top\" >\n           \n            <ion-label color=\"primary\" class=\"ion-text-center\">\n             \n              <h1>Car Information</h1>\n              </ion-label>\n             </ion-list-header>\n          <ion-item class=\"ion-margin\">\n\n\n            <ion-input \n              formControlName=\"car\" \n              placeholder=\"Car Name\" \n              type=\"text\"\n              minlength=\"1\"\n              maxlength=\"200\">\n            </ion-input>\n          </ion-item>\n\n          <ion-item class=\"ion-margin\">\n            <ion-select placeholder=\"{{selected}}\" [value]=\"selected\" (ionChange)=\"chooseCarType($event)\">\n            <ion-select-option *ngFor=\"let card of cartypes\" [value]=\"card\">{{card.name}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n\n          <ion-item class=\"ion-margin\">\n            <ion-input \n            formControlName=\"plate\" \n            placeholder=\"Car Plate Number\" \n            type=\"text\"\n            minlength=\"1\"\n            maxlength=\"200\">\n          </ion-input>\n          </ion-item>\n\n        </div>\n\n       \n\n\n\n      </form>\n\n\n      <ion-list lines=\"none\">\n        <ion-list-header >\n         \n          <ion-label color=\"primary\" class=\"ion-text-center\">\n            <h1>Documents</h1>\n            </ion-label>\n           </ion-list-header>\n\n\n           <ion-item >\n\n            <div slot=\"start\" class=\"preview\">\n\n              <ion-avatar (click)=\"changeImage()\">\n                <img *ngIf=\"profileImage; else placeholder_avatar;\" [src]=\"profileImage\" />\n          \n                <ng-template #placeholder_avatar>\n                  <div class=\"fallback\">\n                    <p>Profile Picture</p>\n                  </div>\n                </ng-template>\n              </ion-avatar>\n              \n            </div>\n\n            <div slot=\"end\" class=\"preview\">\n\n              <ion-avatar (click)=\"changeLicense()\">\n                <img *ngIf=\"licenseImage; else placeholder_avatar;\" [src]=\"licenseImage\" />\n          \n                <ng-template #placeholder_avatar>\n                  <div class=\"fallback\">\n                    <p>License</p>\n                  </div>\n                </ng-template>\n              </ion-avatar>\n              \n            </div>\n           </ion-item>\n          </ion-list>\n\n\n      <ion-button shape=\"round\" size=\"large\" type=\"submit\" [disabled]=\"!form.valid\" color=\"primary\" (click)=\"signIn()\" expand=\"block\">\n        <ion-label *ngIf=\"!approve2\">Continue</ion-label>\n        <ion-icon *ngIf=\"!approve2\" color='light' slot=\"end\" name=\"arrow-forward\"></ion-icon>\n        <ion-progress-bar *ngIf=\"approve2\" color='light' type=\"indeterminate\"></ion-progress-bar>\n      </ion-button>\n\n    </ion-item-group>\n\n\n\n\n      </ion-list>\n\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_details_details_module_ts.js.map