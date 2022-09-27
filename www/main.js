(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/auth-guard */ 3200);




const redirectUnauthorizedToLogin = () => (0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__.redirectUnauthorizedTo)(['']);
const redirectLoggedInToHome = () => (0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__.redirectLoggedInTo)(['tabs']);
const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 107)).then((m) => m.LoginPageModule),
        ...(0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__.canActivate)(redirectLoggedInToHome),
    },
    {
        path: 'tabs',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 5564)).then(m => m.TabsPageModule),
    },
    {
        path: 'details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_details_details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/details/details.module */ 557)).then(m => m.DetailsPageModule),
        ...(0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__.canActivate)(redirectUnauthorizedToLogin),
    },
    {
        path: 'payment',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_payment_payment_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/payment/payment.module */ 4923)).then(m => m.PaymentPageModule)
    },
    {
        path: 'support',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_support_support_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/support/support.module */ 2602)).then(m => m.SupportPageModule)
    },
    {
        path: 'about',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/about/about.module */ 8114)).then(m => m.AboutPageModule)
    },
    {
        path: 'rating',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_rating_rating_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/rating/rating.module */ 4176)).then(m => m.RatingPageModule)
    },
    {
        path: 'network',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_network_network_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/network/network.module */ 7846)).then(m => m.NetworkPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/splash-screen */ 2239);
/* harmony import */ var _services_avatar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/avatar.service */ 5083);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/status-bar */ 9326);









let AppComponent = class AppComponent {
  constructor(avatar, platform, nav) {
    this.avatar = avatar;
    this.platform = platform;
    this.nav = nav;
    this.appPages = [{
      title: 'Payment',
      url: 'payment',
      icon: 'card',
      color: 'primary'
    }, {
      title: 'Promotion',
      url: 'promotion',
      icon: 'pricetag',
      color: 'primary'
    }, {
      title: 'Ride History',
      url: 'history',
      icon: 'timer',
      color: 'primary'
    }, {
      title: 'Support',
      url: 'support',
      icon: 'chatbubbles',
      color: 'primary'
    }, {
      title: 'About',
      url: 'about',
      icon: 'information-circle',
      color: 'primary'
    }];
    this.initialize();
  }

  initialize() {
    var _this = this;

    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.platform.ready().then( /*#__PURE__*/function () {
        var _ref = (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (readySource) {
          console.log('Platform ready from', readySource);
          yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_5__.StatusBar.setBackgroundColor({
            color: '#5238ff'
          });
          yield _this.LoadSplash();
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }

  LoadSplash() {
    var _this2 = this;

    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_3__.SplashScreen.show();
      yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_5__.StatusBar.setOverlaysWebView({
        overlay: true
      });
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)'); // Listen for changes to the prefers-color-scheme media query

      prefersDark.addListener(mediaQuery => _this2.toggleDarkTheme(mediaQuery.matches));

      _this2.toggleDarkTheme(prefersDark.matches);

      yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_5__.StatusBar.setOverlaysWebView({
        overlay: true
      });
    })();
  }

  toggleDarkTheme(shouldAdd) {
    if (shouldAdd) {
      _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_5__.StatusBar.setStyle({
        style: _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_5__.Style.Dark
      });
    } else {
      _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_5__.StatusBar.setStyle({
        style: _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_5__.Style.Light
      });
    }
  }

  gotoProfile() {
    this.nav.navigateForward('profile');
  }

  gotoPage(p) {
    this.nav.navigateForward(p);
  }

};

AppComponent.ctorParameters = () => [{
  type: _services_avatar_service__WEBPACK_IMPORTED_MODULE_4__.AvatarService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
}];

AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AppComponent);


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/app */ 9150);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ 3628);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/storage */ 2111);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ 6549);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ 6369);
/* harmony import */ var _otp_otp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./otp/otp.component */ 3096);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-otp-input */ 2981);
/* harmony import */ var _googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @googlemaps/google-maps-services-js */ 7614);
/* harmony import */ var _googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 8987);




















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _otp_otp_component__WEBPACK_IMPORTED_MODULE_6__.OtpComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            ng_otp_input__WEBPACK_IMPORTED_MODULE_11__.NgOtpInputModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_15__.provideFirebaseApp)(() => (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_15__.initializeApp)(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase)),
            (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__.provideAuth)(() => {
                if (_capacitor_core__WEBPACK_IMPORTED_MODULE_3__.Capacitor.isNativePlatform()) {
                    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.initializeAuth)((0,firebase_app__WEBPACK_IMPORTED_MODULE_5__.getApp)(), {
                        persistence: firebase_auth__WEBPACK_IMPORTED_MODULE_4__.indexedDBLocalPersistence,
                    });
                }
                else {
                    return (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__.getAuth)();
                }
            }),
            (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.provideFirestore)(() => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.getFirestore)()),
            (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__.provideStorage)(() => (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__.getStorage)()),
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicRouteStrategy }, firebase_auth__WEBPACK_IMPORTED_MODULE_4__.GoogleAuthProvider, firebase_auth__WEBPACK_IMPORTED_MODULE_4__.FacebookAuthProvider, _googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_7__.Client],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 3096:
/*!**************************************!*\
  !*** ./src/app/otp/otp.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpComponent": () => (/* binding */ OtpComponent)
/* harmony export */ });
/* harmony import */ var _workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _otp_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otp.component.html?ngResource */ 968);
/* harmony import */ var _otp_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./otp.component.scss?ngResource */ 6167);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_overlay_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/overlay.service */ 5596);
/* harmony import */ var _services_avatar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/avatar.service */ 5083);










let OtpComponent = class OtpComponent {
  constructor(modalCtrl, overlay, toastCtrl, auth, router, avatar) {
    this.modalCtrl = modalCtrl;
    this.overlay = overlay;
    this.toastCtrl = toastCtrl;
    this.auth = auth;
    this.router = router;
    this.avatar = avatar;
    this.isLoading = false;
    this.config = {
      length: 6,
      allowNumbersOnly: true
    };
  }

  ngOnInit() {
    console.log(this.phone);
  }

  onOtpChange(event) {
    this.otp = event;
    console.log(this.otp);
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  resend() {
    var _this = this;

    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const response = yield _this.auth.signInWithPhoneNumber(_this.countryCode + _this.phone);
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    })();
  }

  verifyOtp() {
    var _this2 = this;

    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this2.overlay.showLoader("");

        const response = yield _this2.auth.verifyOtp(_this2.otp);

        _this2.modalCtrl.dismiss(response);
      } catch (e) {
        console.log(e);
      }
    })();
  }

};

OtpComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}, {
  type: _services_overlay_service__WEBPACK_IMPORTED_MODULE_4__.OverlayService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
}, {
  type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _services_avatar_service__WEBPACK_IMPORTED_MODULE_5__.AvatarService
}];

OtpComponent.propDecorators = {
  phone: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }],
  countryCode: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }]
};
OtpComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-otp',
  template: _otp_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_otp_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], OtpComponent);


/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ 3628);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ 1577);




let AuthService = class AuthService {
  constructor(auth) {
    this.auth = auth;
  }

  recaptcha() {
    this.appVerifier = new _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__.RecaptchaVerifier('sign-in-button', {
      size: 'invisible',
      callback: response => {
        console.log(response);
      },
      'expired-callback': () => {}
    }, this.auth);
  }

  signInWithPhoneNumber(phoneNumber) {
    var _this = this;

    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!_this.appVerifier) _this.recaptcha();
        const confirmationResult = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithPhoneNumber)(_this.auth, phoneNumber, _this.appVerifier);
        _this.confirmationResult = confirmationResult;
        return confirmationResult;
      } catch (e) {
        throw e;
      }
    })();
  }

  signInWithGoogle({
    token
  }) {
    var _this2 = this;

    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const sToken = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithCredential)(_this2.auth, token);
        console.log("its done", sToken);
      } catch (e) {
        throw e;
      }
    })();
  }

  verifyOtp(otp) {
    var _this3 = this;

    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!_this3.appVerifier) _this3.recaptcha();
        const result = yield _this3.confirmationResult.confirm(otp);
        console.log(result);
        const user = result?.user;
        console.log(user);
      } catch (e) {
        throw e?.message;
      }
    })();
  }

  logout() {
    return (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(this.auth);
  }

};

AuthService.ctorParameters = () => [{
  type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.Auth
}];

AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], AuthService);


/***/ }),

/***/ 5083:
/*!********************************************!*\
  !*** ./src/app/services/avatar.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvatarService": () => (/* binding */ AvatarService)
/* harmony export */ });
/* harmony import */ var _workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ 2111);
/* harmony import */ var geofire_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! geofire-common */ 3942);
/* harmony import */ var geofire_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(geofire_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ 7556);








let AvatarService = class AvatarService {
  constructor(auth, firestore, storage, authService) {
    var _this = this;

    this.auth = auth;
    this.firestore = firestore;
    this.storage = storage;
    this.authService = authService;
    this.auth.onAuthStateChanged(user => {
      if (user) {
        this.driverCollection = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(this.firestore, 'Drivers');
        this.getUserProfile(user).subscribe( /*#__PURE__*/function () {
          var _ref = (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
            _this.profile = data;

            if (_this.profile) {
              if (!_this.profile.Driver_phone) // await this.authService.logout();
                if (_this.profile.Driver_name) _this.userName = _this.profile.Driver_name;
              _this.pathM = `uploads/${_this.profile.uid}/profile.png`;
            }
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      } else {
        this.userName = "None";
      }
    });
  }

  getUserProfile(user) {
    const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(this.firestore, `Drivers/${user.uid}`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.docData)(userDocRef);
  }

  RequestRideWithRiderDetails(user_Loc_coord, user_Des_coord, ID) {
    var _this2 = this;

    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const loc = {
          Loc_lat: 5.5096,
          Loc_lng: 7.0391,
          Rider_id: 'syusyugdshgsghdsdssd',
          Rider_name: "Chinedu",
          Rider_phone: 6478947352,
          Rider_imgUrl: "https://avatars.githubusercontent.com/u/7928001?v=4",
          Rider_rating: 3,
          Des_lat: user_Des_coord.lat,
          Des_lng: user_Des_coord.lng,
          Rider_Location: 'Owerri Imo State',
          Rider_Destination: 'Kenville Hotels Amabar',
          Rider_email: 'chndht@gmiail.ccjd',
          countDown: 10,
          cancel: false,
          price: 2230,
          cash: true,
          time: ''
        };
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_this2.firestore, 'Drivers', ID);
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(userDocRef, {
          onlineState: false
        });
        console.log('deleted current driver ID');
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_this2.firestore, "Request", ID), { ...loc
        });
        console.log('Added New driver ID');
      } catch (e) {
        throw new Error(e);
      }
    })();
  }

  RejectRider() {
    var _this3 = this;

    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_this3.firestore, "Request", _this3.auth.currentUser.uid);
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(userDocRef, {
          cancel: true,
          start: false
        });

        _this3.updateOnlineState(true);

        return true;
      } catch (e) {
        alert(e);
        return null;
      }
    })();
  }

  PickRider() {
    var _this4 = this;

    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_this4.firestore, "Request", _this4.auth.currentUser.uid);
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(userDocRef, {
          start: true
        }); // this.updateOnlineState(true);

        return true;
      } catch (e) {
        alert(e);
        return null;
      }
    })();
  }

  EndRide() {
    var _this5 = this;

    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_this5.firestore, "Request", _this5.auth.currentUser.uid);
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(userDocRef, {
          stop: true,
          start: false
        }); // this.updateOnlineState(true);

        return true;
      } catch (e) {
        alert(e);
        return null;
      }
    })();
  }

  createHistory(user) {
    var _this6 = this;

    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const loc = {
          Loc_lat: user.Loc_lat,
          Loc_lng: user.Loc_lng,
          Rider_id: user.Rider_id,
          Rider_name: user.Rider_name,
          Rider_phone: user.Rider_phone,
          Rider_imgUrl: user.Rider_imgUrl,
          Rider_rating: user.Rider_rating,
          Des_lat: user.Des_lat,
          Des_lng: user.Des_lng,
          Rider_Location: user.Rider_Location,
          Rider_Destination: user.Rider_Destination,
          Rider_email: user.Rider_email,
          countDown: 0,
          cancel: false,
          price: user.price,
          cash: user.cash,
          time: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.serverTimestamp)()
        };
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_this6.firestore, "Drivers", `${_this6.auth.currentUser.uid}/History/${user.Rider_id}`), { ...loc
        });
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_this6.firestore, "AllRides", `${_this6.auth.currentUser.uid}/customer/${user.Rider_id}`), { ...loc
        });
      } catch (e) {
        alert(e);
      }
    })();
  } //GO offline()


  goOffline() {
    var _this7 = this;

    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.deleteDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_this7.firestore, "Drivers", _this7.auth.currentUser.uid));
    })();
  } //delete the driver that has a request sent to him.


  deleDriverFromRequest(ID) {
    var _this8 = this;

    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.deleteDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_this8.firestore, "Request", ID));
    })();
  }

  UpdateCountDown(time) {
    var _this9 = this;

    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_this9.firestore, "Request", _this9.auth.currentUser.uid);
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(userDocRef, {
          countDown: time
        });
        return true;
      } catch (e) {
        alert(e);
        return null;
      }
    })();
  } //Push driver info into the request database


  PushDriverToRequest(coord, name, email, phone, car, cartype, plate, imageUrl, document) {
    var _this10 = this;

    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const loc = {
          geohash: (0,geofire_common__WEBPACK_IMPORTED_MODULE_1__.geohashForLocation)([coord.coords.latitude, coord.coords.longitude]),
          Driver_lat: coord.coords.latitude,
          Driver_lng: coord.coords.longitude,
          Driver_id: _this10.auth.currentUser.uid,
          Driver_name: name,
          Driver_car: car,
          Driver_imgUrl: imageUrl,
          Driver_rating: 0,
          distance: 0,
          duration: 0,
          seats: 1,
          start: false,
          stop: false,
          intransit: false,
          cancel: false,
          Driver_cartype: cartype,
          Driver_plate: plate,
          Driver_num_rides: 0,
          Document: document,
          Driver_email: email,
          Driver_phone: phone,
          onlineState: false,
          Earnings: 0
        };
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_this10.firestore, "Request", _this10.auth.currentUser.uid), { ...loc
        });
      } catch (e) {
        throw new Error(e);
      }

      console.log('done');
    })();
  } ///create a new driver and publish info to database


  CreateNewDriver(coord, name, email, phone, car, cartype, plate, imageUrl, document) {
    var _this11 = this;

    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const loc = {
          geohash: (0,geofire_common__WEBPACK_IMPORTED_MODULE_1__.geohashForLocation)([coord.coords.latitude, coord.coords.longitude]),
          Driver_lat: coord.coords.latitude,
          Driver_lng: coord.coords.longitude,
          Driver_id: _this11.auth.currentUser.uid,
          Driver_name: name,
          Driver_car: car,
          Driver_imgUrl: imageUrl,
          Driver_rating: 0,
          distance: 0,
          duration: 0,
          seats: 1,
          start: false,
          stop: false,
          intransit: false,
          cancel: false,
          Driver_cartype: cartype,
          Driver_plate: plate,
          Driver_num_rides: 0,
          Document: document,
          Driver_email: email,
          Driver_phone: phone,
          onlineState: false,
          Earnings: 0
        };
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_this11.firestore, "Drivers", _this11.auth.currentUser.uid), { ...loc
        });
      } catch (e) {
        throw new Error(e);
      }
    })();
  }

  getDriver() {
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.collectionData)(this.driverCollection, {
      idField: 'id'
    });
  }

  update(pokemon) {
    const pokemonDocumentReference = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(this.firestore, `pokemon/${pokemon.Driver_id}`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(pokemonDocumentReference, { ...pokemon
    });
  }

  uploadImage(cameraFile, uid) {
    var _this12 = this;

    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const storageRef = (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__.ref)(_this12.storage, _this12.pathM);

      try {
        yield (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__.uploadString)(storageRef, cameraFile.base64String, 'base64');
        const imageUrl = yield (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__.getDownloadURL)(storageRef);
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_this12.firestore, `Drivers/${uid}`);
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)(userDocRef, {
          imageUrl
        });
        return true;
      } catch (e) {
        return null;
      }
    })();
  }

  getMessage() {
    const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(this.firestore, `Messages/${this.auth.currentUser.uid}/messages`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.collectionData)(userDocRef);
  }

  getCards() {
    const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(this.firestore, `Drivers/${this.auth.currentUser.uid}/Cards`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.collectionData)(userDocRef);
  }

  getEarnings() {
    const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(this.firestore, `Drivers/${this.auth.currentUser.uid}`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.docData)(userDocRef);
  }

  getCartypes() {
    const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(this.firestore, `Cartypes`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.collectionData)(userDocRef);
  }

  getRequests() {
    const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(this.firestore, `Request/${this.auth.currentUser.uid}`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.docData)(userDocRef);
  }

  getDrivers() {
    const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(this.firestore, `Drivers`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.collectionData)(userDocRef);
  }

  addChatMessage(msg) {
    var _this13 = this;

    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.addDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_this13.firestore, `Messages/${_this13.profile.Driver_id}/messages`), {
        msg: msg,
        from: _this13.auth.currentUser.uid,
        createdAt: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.serverTimestamp)(),
        myMsg: true,
        fromName: _this13.profile.Driver_name
      });
    })();
  }

  createCard(name, number, type, id) {
    var _this14 = this;

    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const loc = {
          name: name,
          number: number,
          type: type,
          id: id,
          selected: true
        };
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_this14.firestore, "Drivers", `${_this14.auth.currentUser.uid}/Cards/${name}`), { ...loc
        });
        return true;
      } catch (e) {
        alert(e);
        return null;
      }
    })();
  }

  updateCArd(name, number, type, id, state) {
    var _this15 = this;

    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const loc = {
          name: name,
          number: number,
          type: type,
          id: id,
          selected: state
        };
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_this15.firestore, "Drivers", `${_this15.profile.Rider_id}/Cards/${name}`), { ...loc
        });
        return true;
      } catch (e) {
        alert(e);
        return null;
      }
    })();
  }

  updateOnlineState(state) {
    var _this16 = this;

    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_this16.firestore, 'Drivers', `/${_this16.auth.currentUser.uid}/`);
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(userDocRef, {
          onlineState: state
        });
        return true;
      } catch (e) {
        alert(e);
        return null;
      }
    })();
  }

  updateEarnings(value) {
    var _this17 = this;

    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_this17.firestore, 'Drivers', `/${_this17.auth.currentUser.uid}/`);
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(userDocRef, {
          Earnings: value
        });
        return true;
      } catch (e) {
        alert(e);
        return null;
      }
    })();
  }

};

AvatarService.ctorParameters = () => [{
  type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__.Auth
}, {
  type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.Firestore
}, {
  type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__.Storage
}, {
  type: _auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
}];

AvatarService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
  providedIn: 'root'
})], AvatarService);


/***/ }),

/***/ 5596:
/*!*********************************************!*\
  !*** ./src/app/services/overlay.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverlayService": () => (/* binding */ OverlayService)
/* harmony export */ });
/* harmony import */ var _workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);




let OverlayService = class OverlayService {
  constructor(loadingCtrl, toast, alertController) {
    this.loadingCtrl = loadingCtrl;
    this.toast = toast;
    this.alertController = alertController;
  }

  showLoader(msg) {
    if (!this.isLoading) this.isLoading = true;
    return this.loadingCtrl.create({
      message: msg,
      spinner: 'lines-sharp',
      cssClass: 'default-alert'
    }).then(res => {
      res.present().then(() => {
        if (!this.isLoading) {
          res.dismiss().then(() => {
            console.log('abort presenting');
          });
        }
      });
    }).catch(e => {
      this.isLoading = false;
      console.log(e);
    });
  }

  hideLoader() {
    if (this.isLoading) this.isLoading = false;
    return this.loadingCtrl.dismiss().then(() => console.log('dismissed')).catch(e => console.log(e));
  }

  showToast(message) {
    var _this = this;

    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.toast.create({
        message: message,
        position: 'top',
        duration: 500,
        cssClass: 'default-alert'
      });
      yield alert.present();
    })();
  }

  showAlert(header, message) {
    var _this2 = this;

    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        header,
        message,
        cssClass: 'default-alert',
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

};

OverlayService.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AlertController
}];

OverlayService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], OverlayService);


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    firebase: {
        apiKey: 'AIzaSyBkTdGfmj3LAKMmIssUMStIm4WoAb9bWHI',
        authDomain: 'go-technologies-84545.firebaseapp.com',
        projectId: 'go-technologies-84545',
        storageBucket: 'go-technologies-84545.appspot.com',
        messagingSenderId: '57521838388',
        appId: "1:57521838388:web:f2ad277d45a98c9c1f6d61"
    },
    production: false,
    apiKey: "AIzaSyAeMk4MVpph70vAAWkIwNebjUXbLq-S9pI",
    CountryJson: [
        {
            "name": "Afghanistan",
            "dialCode": "+93",
            "isoCode": "AF",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/af.svg"
        },
        {
            "name": "Aland Islands",
            "dialCode": "+358",
            "isoCode": "AX",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ax.svg"
        },
        {
            "name": "Albania",
            "dialCode": "+355",
            "isoCode": "AL",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/al.svg"
        },
        {
            "name": "Algeria",
            "dialCode": "+213",
            "isoCode": "DZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/dz.svg"
        },
        {
            "name": "American Samoa",
            "dialCode": "+1684",
            "isoCode": "AS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/as.svg"
        },
        {
            "name": "Andorra",
            "dialCode": "+376",
            "isoCode": "AD",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ad.svg"
        },
        {
            "name": "Angola",
            "dialCode": "+244",
            "isoCode": "AO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ao.svg"
        },
        {
            "name": "Anguilla",
            "dialCode": "+1264",
            "isoCode": "AI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ai.svg"
        },
        {
            "name": "Antarctica",
            "dialCode": "+672",
            "isoCode": "AQ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/aq.svg"
        },
        {
            "name": "Antigua and Barbuda",
            "dialCode": "+1268",
            "isoCode": "AG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ag.svg"
        },
        {
            "name": "Argentina",
            "dialCode": "+54",
            "isoCode": "AR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ar.svg"
        },
        {
            "name": "Armenia",
            "dialCode": "+374",
            "isoCode": "AM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/am.svg"
        },
        {
            "name": "Aruba",
            "dialCode": "+297",
            "isoCode": "AW",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/aw.svg"
        },
        {
            "name": "Ascension Island",
            "dialCode": "+247",
            "isoCode": "AC",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ac.svg"
        },
        {
            "name": "Australia",
            "dialCode": "+61",
            "isoCode": "AU",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/au.svg"
        },
        {
            "name": "Austria",
            "dialCode": "+43",
            "isoCode": "AT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/at.svg"
        },
        {
            "name": "Azerbaijan",
            "dialCode": "+994",
            "isoCode": "AZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/az.svg"
        },
        {
            "name": "Bahamas",
            "dialCode": "+1242",
            "isoCode": "BS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bs.svg"
        },
        {
            "name": "Bahrain",
            "dialCode": "+973",
            "isoCode": "BH",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bh.svg"
        },
        {
            "name": "Bangladesh",
            "dialCode": "+880",
            "isoCode": "BD",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bd.svg"
        },
        {
            "name": "Barbados",
            "dialCode": "+1246",
            "isoCode": "BB",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bb.svg"
        },
        {
            "name": "Belarus",
            "dialCode": "+375",
            "isoCode": "BY",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/by.svg"
        },
        {
            "name": "Belgium",
            "dialCode": "+32",
            "isoCode": "BE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/be.svg"
        },
        {
            "name": "Belize",
            "dialCode": "+501",
            "isoCode": "BZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bz.svg"
        },
        {
            "name": "Benin",
            "dialCode": "+229",
            "isoCode": "BJ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bj.svg"
        },
        {
            "name": "Bermuda",
            "dialCode": "+1441",
            "isoCode": "BM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bm.svg"
        },
        {
            "name": "Bhutan",
            "dialCode": "+975",
            "isoCode": "BT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bt.svg"
        },
        {
            "name": "Bolivia",
            "dialCode": "+591",
            "isoCode": "BO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bo.svg"
        },
        {
            "name": "Bosnia and Herzegovina",
            "dialCode": "+387",
            "isoCode": "BA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ba.svg"
        },
        {
            "name": "Botswana",
            "dialCode": "+267",
            "isoCode": "BW",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bw.svg"
        },
        {
            "name": "Brazil",
            "dialCode": "+55",
            "isoCode": "BR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/br.svg"
        },
        {
            "name": "British Indian Ocean Territory",
            "dialCode": "+246",
            "isoCode": "IO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/io.svg"
        },
        {
            "name": "Brunei Darussalam",
            "dialCode": "+673",
            "isoCode": "BN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bn.svg"
        },
        {
            "name": "Bulgaria",
            "dialCode": "+359",
            "isoCode": "BG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bg.svg"
        },
        {
            "name": "Burkina Faso",
            "dialCode": "+226",
            "isoCode": "BF",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bf.svg"
        },
        {
            "name": "Burundi",
            "dialCode": "+257",
            "isoCode": "BI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bi.svg"
        },
        {
            "name": "Cambodia",
            "dialCode": "+855",
            "isoCode": "KH",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/kh.svg"
        },
        {
            "name": "Cameroon",
            "dialCode": "+237",
            "isoCode": "CM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cm.svg"
        },
        {
            "name": "Canada",
            "dialCode": "+1",
            "isoCode": "CA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ca.svg"
        },
        {
            "name": "Cape Verde",
            "dialCode": "+238",
            "isoCode": "CV",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cv.svg"
        },
        {
            "name": "Cayman Islands",
            "dialCode": "+1345",
            "isoCode": "KY",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ky.svg"
        },
        {
            "name": "Central African Republic",
            "dialCode": "+236",
            "isoCode": "CF",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cf.svg"
        },
        {
            "name": "Chad",
            "dialCode": "+235",
            "isoCode": "TD",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/td.svg"
        },
        {
            "name": "Chile",
            "dialCode": "+56",
            "isoCode": "CL",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cl.svg"
        },
        {
            "name": "China",
            "dialCode": "+86",
            "isoCode": "CN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cn.svg"
        },
        {
            "name": "Christmas Island",
            "dialCode": "+61",
            "isoCode": "CX",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cx.svg"
        },
        {
            "name": "Cocos (Keeling) Islands",
            "dialCode": "+61",
            "isoCode": "CC",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cc.svg"
        },
        {
            "name": "Colombia",
            "dialCode": "+57",
            "isoCode": "CO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/co.svg"
        },
        {
            "name": "Comoros",
            "dialCode": "+269",
            "isoCode": "KM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/km.svg"
        },
        {
            "name": "Congo",
            "dialCode": "+242",
            "isoCode": "CG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cg.svg"
        },
        {
            "name": "Cook Islands",
            "dialCode": "+682",
            "isoCode": "CK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ck.svg"
        },
        {
            "name": "Costa Rica",
            "dialCode": "+506",
            "isoCode": "CR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cr.svg"
        },
        {
            "name": "Croatia",
            "dialCode": "+385",
            "isoCode": "HR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/hr.svg"
        },
        {
            "name": "Cuba",
            "dialCode": "+53",
            "isoCode": "CU",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cu.svg"
        },
        {
            "name": "Cyprus",
            "dialCode": "+357",
            "isoCode": "CY",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cy.svg"
        },
        {
            "name": "Czech Republic",
            "dialCode": "+420",
            "isoCode": "CZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cz.svg"
        },
        {
            "name": "Democratic Republic of the Congo",
            "dialCode": "+243",
            "isoCode": "CD",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cd.svg"
        },
        {
            "name": "Denmark",
            "dialCode": "+45",
            "isoCode": "DK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/dk.svg"
        },
        {
            "name": "Djibouti",
            "dialCode": "+253",
            "isoCode": "DJ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/dj.svg"
        },
        {
            "name": "Dominica",
            "dialCode": "+1767",
            "isoCode": "DM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/dm.svg"
        },
        {
            "name": "Dominican Republic",
            "dialCode": "+1849",
            "isoCode": "DO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/do.svg"
        },
        {
            "name": "Ecuador",
            "dialCode": "+593",
            "isoCode": "EC",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ec.svg"
        },
        {
            "name": "Egypt",
            "dialCode": "+20",
            "isoCode": "EG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/eg.svg"
        },
        {
            "name": "El Salvador",
            "dialCode": "+503",
            "isoCode": "SV",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sv.svg"
        },
        {
            "name": "Equatorial Guinea",
            "dialCode": "+240",
            "isoCode": "GQ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gq.svg"
        },
        {
            "name": "Eritrea",
            "dialCode": "+291",
            "isoCode": "ER",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/er.svg"
        },
        {
            "name": "Estonia",
            "dialCode": "+372",
            "isoCode": "EE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ee.svg"
        },
        {
            "name": "Eswatini",
            "dialCode": "+268",
            "isoCode": "SZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sz.svg"
        },
        {
            "name": "Ethiopia",
            "dialCode": "+251",
            "isoCode": "ET",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/et.svg"
        },
        {
            "name": "Falkland Islands (Malvinas)",
            "dialCode": "+500",
            "isoCode": "FK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/fk.svg"
        },
        {
            "name": "Faroe Islands",
            "dialCode": "+298",
            "isoCode": "FO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/fo.svg"
        },
        {
            "name": "Fiji",
            "dialCode": "+679",
            "isoCode": "FJ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/fj.svg"
        },
        {
            "name": "Finland",
            "dialCode": "+358",
            "isoCode": "FI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/fi.svg"
        },
        {
            "name": "France",
            "dialCode": "+33",
            "isoCode": "FR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/fr.svg"
        },
        {
            "name": "French Guiana",
            "dialCode": "+594",
            "isoCode": "GF",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gf.svg"
        },
        {
            "name": "French Polynesia",
            "dialCode": "+689",
            "isoCode": "PF",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pf.svg"
        },
        {
            "name": "Gabon",
            "dialCode": "+241",
            "isoCode": "GA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ga.svg"
        },
        {
            "name": "Gambia",
            "dialCode": "+220",
            "isoCode": "GM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gm.svg"
        },
        {
            "name": "Georgia",
            "dialCode": "+995",
            "isoCode": "GE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ge.svg"
        },
        {
            "name": "Germany",
            "dialCode": "+49",
            "isoCode": "DE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/de.svg"
        },
        {
            "name": "Ghana",
            "dialCode": "+233",
            "isoCode": "GH",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gh.svg"
        },
        {
            "name": "Gibraltar",
            "dialCode": "+350",
            "isoCode": "GI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gi.svg"
        },
        {
            "name": "Greece",
            "dialCode": "+30",
            "isoCode": "GR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gr.svg"
        },
        {
            "name": "Greenland",
            "dialCode": "+299",
            "isoCode": "GL",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gl.svg"
        },
        {
            "name": "Grenada",
            "dialCode": "+1473",
            "isoCode": "GD",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gd.svg"
        },
        {
            "name": "Guadeloupe",
            "dialCode": "+590",
            "isoCode": "GP",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gp.svg"
        },
        {
            "name": "Guam",
            "dialCode": "+1671",
            "isoCode": "GU",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gu.svg"
        },
        {
            "name": "Guatemala",
            "dialCode": "+502",
            "isoCode": "GT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gt.svg"
        },
        {
            "name": "Guernsey",
            "dialCode": "+44-1481",
            "isoCode": "GG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gg.svg"
        },
        {
            "name": "Guinea",
            "dialCode": "+224",
            "isoCode": "GN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gn.svg"
        },
        {
            "name": "Guinea-Bissau",
            "dialCode": "+245",
            "isoCode": "GW",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gw.svg"
        },
        {
            "name": "Guyana",
            "dialCode": "+592",
            "isoCode": "GY",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gy.svg"
        },
        {
            "name": "Haiti",
            "dialCode": "+509",
            "isoCode": "HT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ht.svg"
        },
        {
            "name": "Holy See (Vatican City State)",
            "dialCode": "+379",
            "isoCode": "VA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/va.svg"
        },
        {
            "name": "Honduras",
            "dialCode": "+504",
            "isoCode": "HN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/hn.svg"
        },
        {
            "name": "Hong Kong",
            "dialCode": "+852",
            "isoCode": "HK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/hk.svg"
        },
        {
            "name": "Hungary",
            "dialCode": "+36",
            "isoCode": "HU",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/hu.svg"
        },
        {
            "name": "Iceland",
            "dialCode": "+354",
            "isoCode": "IS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/is.svg"
        },
        {
            "name": "India",
            "dialCode": "+91",
            "isoCode": "IN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/in.svg"
        },
        {
            "name": "Indonesia",
            "dialCode": "+62",
            "isoCode": "ID",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/id.svg"
        },
        {
            "name": "Iran",
            "dialCode": "+98",
            "isoCode": "IR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ir.svg"
        },
        {
            "name": "Iraq",
            "dialCode": "+964",
            "isoCode": "IQ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/iq.svg"
        },
        {
            "name": "Ireland",
            "dialCode": "+353",
            "isoCode": "IE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ie.svg"
        },
        {
            "name": "Isle of Man",
            "dialCode": "+44-1624",
            "isoCode": "IM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/im.svg"
        },
        {
            "name": "Israel",
            "dialCode": "+972",
            "isoCode": "IL",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/il.svg"
        },
        {
            "name": "Italy",
            "dialCode": "+39",
            "isoCode": "IT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/it.svg"
        },
        {
            "name": "Ivory Coast / Cote d'Ivoire",
            "dialCode": "+225",
            "isoCode": "CI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ci.svg"
        },
        {
            "name": "Jamaica",
            "dialCode": "+1876",
            "isoCode": "JM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/jm.svg"
        },
        {
            "name": "Japan",
            "dialCode": "+81",
            "isoCode": "JP",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/jp.svg"
        },
        {
            "name": "Jersey",
            "dialCode": "+44-1534",
            "isoCode": "JE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/je.svg"
        },
        {
            "name": "Jordan",
            "dialCode": "+962",
            "isoCode": "JO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/jo.svg"
        },
        {
            "name": "Kazakhstan",
            "dialCode": "+77",
            "isoCode": "KZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/kz.svg"
        },
        {
            "name": "Kenya",
            "dialCode": "+254",
            "isoCode": "KE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ke.svg"
        },
        {
            "name": "Kiribati",
            "dialCode": "+686",
            "isoCode": "KI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ki.svg"
        },
        {
            "name": "Korea, Democratic People's Republic of Korea",
            "dialCode": "+850",
            "isoCode": "KP",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/kp.svg"
        },
        {
            "name": "Korea, Republic of South Korea",
            "dialCode": "+82",
            "isoCode": "KR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/kr.svg"
        },
        {
            "name": "Kosovo",
            "dialCode": "+383",
            "isoCode": "XK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/xk.svg"
        },
        {
            "name": "Kuwait",
            "dialCode": "+965",
            "isoCode": "KW",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/kw.svg"
        },
        {
            "name": "Kyrgyzstan",
            "dialCode": "+996",
            "isoCode": "KG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/kg.svg"
        },
        {
            "name": "Laos",
            "dialCode": "+856",
            "isoCode": "LA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/la.svg"
        },
        {
            "name": "Latvia",
            "dialCode": "+371",
            "isoCode": "LV",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/lv.svg"
        },
        {
            "name": "Lebanon",
            "dialCode": "+961",
            "isoCode": "LB",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/lb.svg"
        },
        {
            "name": "Lesotho",
            "dialCode": "+266",
            "isoCode": "LS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ls.svg"
        },
        {
            "name": "Liberia",
            "dialCode": "+231",
            "isoCode": "LR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/lr.svg"
        },
        {
            "name": "Libya",
            "dialCode": "+218",
            "isoCode": "LY",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ly.svg"
        },
        {
            "name": "Liechtenstein",
            "dialCode": "+423",
            "isoCode": "LI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/li.svg"
        },
        {
            "name": "Lithuania",
            "dialCode": "+370",
            "isoCode": "LT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/lt.svg"
        },
        {
            "name": "Luxembourg",
            "dialCode": "+352",
            "isoCode": "LU",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/lu.svg"
        },
        {
            "name": "Macau",
            "dialCode": "+853",
            "isoCode": "MO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mo.svg"
        },
        {
            "name": "Madagascar",
            "dialCode": "+261",
            "isoCode": "MG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mg.svg"
        },
        {
            "name": "Malawi",
            "dialCode": "+265",
            "isoCode": "MW",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mw.svg"
        },
        {
            "name": "Malaysia",
            "dialCode": "+60",
            "isoCode": "MY",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/my.svg"
        },
        {
            "name": "Maldives",
            "dialCode": "+960",
            "isoCode": "MV",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mv.svg"
        },
        {
            "name": "Mali",
            "dialCode": "+223",
            "isoCode": "ML",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ml.svg"
        },
        {
            "name": "Malta",
            "dialCode": "+356",
            "isoCode": "MT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mt.svg"
        },
        {
            "name": "Marshall Islands",
            "dialCode": "+692",
            "isoCode": "MH",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mh.svg"
        },
        {
            "name": "Martinique",
            "dialCode": "+596",
            "isoCode": "MQ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mq.svg"
        },
        {
            "name": "Mauritania",
            "dialCode": "+222",
            "isoCode": "MR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mr.svg"
        },
        {
            "name": "Mauritius",
            "dialCode": "+230",
            "isoCode": "MU",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mu.svg"
        },
        {
            "name": "Mayotte",
            "dialCode": "+262",
            "isoCode": "YT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/yt.svg"
        },
        {
            "name": "Mexico",
            "dialCode": "+52",
            "isoCode": "MX",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mx.svg"
        },
        {
            "name": "Micronesia, Federated States of Micronesia",
            "dialCode": "+691",
            "isoCode": "FM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/fm.svg"
        },
        {
            "name": "Moldova",
            "dialCode": "+373",
            "isoCode": "MD",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/md.svg"
        },
        {
            "name": "Monaco",
            "dialCode": "+377",
            "isoCode": "MC",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mc.svg"
        },
        {
            "name": "Mongolia",
            "dialCode": "+976",
            "isoCode": "MN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mn.svg"
        },
        {
            "name": "Montenegro",
            "dialCode": "+382",
            "isoCode": "ME",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/me.svg"
        },
        {
            "name": "Montserrat",
            "dialCode": "+1664",
            "isoCode": "MS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ms.svg"
        },
        {
            "name": "Morocco",
            "dialCode": "+212",
            "isoCode": "MA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ma.svg"
        },
        {
            "name": "Mozambique",
            "dialCode": "+258",
            "isoCode": "MZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mz.svg"
        },
        {
            "name": "Myanmar",
            "dialCode": "+95",
            "isoCode": "MM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mm.svg"
        },
        {
            "name": "Namibia",
            "dialCode": "+264",
            "isoCode": "NA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/na.svg"
        },
        {
            "name": "Nauru",
            "dialCode": "+674",
            "isoCode": "NR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/nr.svg"
        },
        {
            "name": "Nepal",
            "dialCode": "+977",
            "isoCode": "NP",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/np.svg"
        },
        {
            "name": "Netherlands",
            "dialCode": "+31",
            "isoCode": "NL",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/nl.svg"
        },
        {
            "name": "Netherlands Antilles",
            "dialCode": "+599",
            "isoCode": "AN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/an.svg"
        },
        {
            "name": "New Caledonia",
            "dialCode": "+687",
            "isoCode": "NC",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/nc.svg"
        },
        {
            "name": "New Zealand",
            "dialCode": "+64",
            "isoCode": "NZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/nz.svg"
        },
        {
            "name": "Nicaragua",
            "dialCode": "+505",
            "isoCode": "NI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ni.svg"
        },
        {
            "name": "Niger",
            "dialCode": "+227",
            "isoCode": "NE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ne.svg"
        },
        {
            "name": "Nigeria",
            "dialCode": "+234",
            "isoCode": "NG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ng.svg"
        },
        {
            "name": "Niue",
            "dialCode": "+683",
            "isoCode": "NU",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/nu.svg"
        },
        {
            "name": "Norfolk Island",
            "dialCode": "+672",
            "isoCode": "NF",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/nf.svg"
        },
        {
            "name": "North Macedonia",
            "dialCode": "+389",
            "isoCode": "MK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mk.svg"
        },
        {
            "name": "Northern Mariana Islands",
            "dialCode": "+1670",
            "isoCode": "MP",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mp.svg"
        },
        {
            "name": "Norway",
            "dialCode": "+47",
            "isoCode": "NO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/no.svg"
        },
        {
            "name": "Oman",
            "dialCode": "+968",
            "isoCode": "OM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/om.svg"
        },
        {
            "name": "Pakistan",
            "dialCode": "+92",
            "isoCode": "PK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pk.svg"
        },
        {
            "name": "Palau",
            "dialCode": "+680",
            "isoCode": "PW",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pw.svg"
        },
        {
            "name": "Palestine",
            "dialCode": "+970",
            "isoCode": "PS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ps.svg"
        },
        {
            "name": "Panama",
            "dialCode": "+507",
            "isoCode": "PA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pa.svg"
        },
        {
            "name": "Papua New Guinea",
            "dialCode": "+675",
            "isoCode": "PG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pg.svg"
        },
        {
            "name": "Paraguay",
            "dialCode": "+595",
            "isoCode": "PY",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/py.svg"
        },
        {
            "name": "Peru",
            "dialCode": "+51",
            "isoCode": "PE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pe.svg"
        },
        {
            "name": "Philippines",
            "dialCode": "+63",
            "isoCode": "PH",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ph.svg"
        },
        {
            "name": "Pitcairn",
            "dialCode": "+872",
            "isoCode": "PN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pn.svg"
        },
        {
            "name": "Poland",
            "dialCode": "+48",
            "isoCode": "PL",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pl.svg"
        },
        {
            "name": "Portugal",
            "dialCode": "+351",
            "isoCode": "PT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pt.svg"
        },
        {
            "name": "Puerto Rico",
            "dialCode": "+1939",
            "isoCode": "PR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pr.svg"
        },
        {
            "name": "Qatar",
            "dialCode": "+974",
            "isoCode": "QA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/qa.svg"
        },
        {
            "name": "Reunion",
            "dialCode": "+262",
            "isoCode": "RE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/re.svg"
        },
        {
            "name": "Romania",
            "dialCode": "+40",
            "isoCode": "RO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ro.svg"
        },
        {
            "name": "Russia",
            "dialCode": "+7",
            "isoCode": "RU",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ru.svg"
        },
        {
            "name": "Rwanda",
            "dialCode": "+250",
            "isoCode": "RW",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/rw.svg"
        },
        {
            "name": "Saint Barthelemy",
            "dialCode": "+590",
            "isoCode": "BL",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bl.svg"
        },
        {
            "name": "Saint Helena, Ascension and Tristan Da Cunha",
            "dialCode": "+290",
            "isoCode": "SH",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sh.svg"
        },
        {
            "name": "Saint Kitts and Nevis",
            "dialCode": "+1869",
            "isoCode": "KN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/kn.svg"
        },
        {
            "name": "Saint Lucia",
            "dialCode": "+1758",
            "isoCode": "LC",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/lc.svg"
        },
        {
            "name": "Saint Martin",
            "dialCode": "+590",
            "isoCode": "MF",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mf.svg"
        },
        {
            "name": "Saint Pierre and Miquelon",
            "dialCode": "+508",
            "isoCode": "PM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pm.svg"
        },
        {
            "name": "Saint Vincent and the Grenadines",
            "dialCode": "+1784",
            "isoCode": "VC",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/vc.svg"
        },
        {
            "name": "Samoa",
            "dialCode": "+685",
            "isoCode": "WS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ws.svg"
        },
        {
            "name": "San Marino",
            "dialCode": "+378",
            "isoCode": "SM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sm.svg"
        },
        {
            "name": "Sao Tome and Principe",
            "dialCode": "+239",
            "isoCode": "ST",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/st.svg"
        },
        {
            "name": "Saudi Arabia",
            "dialCode": "+966",
            "isoCode": "SA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sa.svg"
        },
        {
            "name": "Senegal",
            "dialCode": "+221",
            "isoCode": "SN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sn.svg"
        },
        {
            "name": "Serbia",
            "dialCode": "+381",
            "isoCode": "RS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/rs.svg"
        },
        {
            "name": "Seychelles",
            "dialCode": "+248",
            "isoCode": "SC",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sc.svg"
        },
        {
            "name": "Sierra Leone",
            "dialCode": "+232",
            "isoCode": "SL",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sl.svg"
        },
        {
            "name": "Singapore",
            "dialCode": "+65",
            "isoCode": "SG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sg.svg"
        },
        {
            "name": "Sint Maarten",
            "dialCode": "+1721",
            "isoCode": "SX",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sx.svg"
        },
        {
            "name": "Slovakia",
            "dialCode": "+421",
            "isoCode": "SK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sk.svg"
        },
        {
            "name": "Slovenia",
            "dialCode": "+386",
            "isoCode": "SI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/si.svg"
        },
        {
            "name": "Solomon Islands",
            "dialCode": "+677",
            "isoCode": "SB",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sb.svg"
        },
        {
            "name": "Somalia",
            "dialCode": "+252",
            "isoCode": "SO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/so.svg"
        },
        {
            "name": "South Africa",
            "dialCode": "+27",
            "isoCode": "ZA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/za.svg"
        },
        {
            "name": "South Georgia and the South Sandwich Islands",
            "dialCode": "+500",
            "isoCode": "GS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gs.svg"
        },
        {
            "name": "South Sudan",
            "dialCode": "+211",
            "isoCode": "SS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ss.svg"
        },
        {
            "name": "Spain",
            "dialCode": "+34",
            "isoCode": "ES",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/es.svg"
        },
        {
            "name": "Sri Lanka",
            "dialCode": "+94",
            "isoCode": "LK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/lk.svg"
        },
        {
            "name": "Sudan",
            "dialCode": "+249",
            "isoCode": "SD",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sd.svg"
        },
        {
            "name": "Suriname",
            "dialCode": "+597",
            "isoCode": "SR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sr.svg"
        },
        {
            "name": "Svalbard and Jan Mayen",
            "dialCode": "+47",
            "isoCode": "SJ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sj.svg"
        },
        {
            "name": "Sweden",
            "dialCode": "+46",
            "isoCode": "SE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/se.svg"
        },
        {
            "name": "Switzerland",
            "dialCode": "+41",
            "isoCode": "CH",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ch.svg"
        },
        {
            "name": "Syrian Arab Republic",
            "dialCode": "+963",
            "isoCode": "SY",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sy.svg"
        },
        {
            "name": "Taiwan",
            "dialCode": "+886",
            "isoCode": "TW",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tw.svg"
        },
        {
            "name": "Tajikistan",
            "dialCode": "+992",
            "isoCode": "TJ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tj.svg"
        },
        {
            "name": "Tanzania, United Republic of Tanzania",
            "dialCode": "+255",
            "isoCode": "TZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tz.svg"
        },
        {
            "name": "Thailand",
            "dialCode": "+66",
            "isoCode": "TH",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/th.svg"
        },
        {
            "name": "Timor-Leste",
            "dialCode": "+670",
            "isoCode": "TL",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tl.svg"
        },
        {
            "name": "Togo",
            "dialCode": "+228",
            "isoCode": "TG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tg.svg"
        },
        {
            "name": "Tokelau",
            "dialCode": "+690",
            "isoCode": "TK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tk.svg"
        },
        {
            "name": "Tonga",
            "dialCode": "+676",
            "isoCode": "TO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/to.svg"
        },
        {
            "name": "Trinidad and Tobago",
            "dialCode": "+1868",
            "isoCode": "TT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tt.svg"
        },
        {
            "name": "Tunisia",
            "dialCode": "+216",
            "isoCode": "TN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tn.svg"
        },
        {
            "name": "Turkey",
            "dialCode": "+90",
            "isoCode": "TR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tr.svg"
        },
        {
            "name": "Turkmenistan",
            "dialCode": "+993",
            "isoCode": "TM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tm.svg"
        },
        {
            "name": "Turks and Caicos Islands",
            "dialCode": "+1649",
            "isoCode": "TC",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tc.svg"
        },
        {
            "name": "Tuvalu",
            "dialCode": "+688",
            "isoCode": "TV",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tv.svg"
        },
        {
            "name": "Uganda",
            "dialCode": "+256",
            "isoCode": "UG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ug.svg"
        },
        {
            "name": "Ukraine",
            "dialCode": "+380",
            "isoCode": "UA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ua.svg"
        },
        {
            "name": "United Arab Emirates",
            "dialCode": "+971",
            "isoCode": "AE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ae.svg"
        },
        {
            "name": "United Kingdom",
            "dialCode": "+44",
            "isoCode": "GB",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gb.svg"
        },
        {
            "name": "United States",
            "dialCode": "+1",
            "isoCode": "US",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/us.svg"
        },
        {
            "name": "United States Minor Outlying Islands",
            "dialCode": "+246",
            "isoCode": "UMI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/umi.svg"
        },
        {
            "name": "Uruguay",
            "dialCode": "+598",
            "isoCode": "UY",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/uy.svg"
        },
        {
            "name": "Uzbekistan",
            "dialCode": "+998",
            "isoCode": "UZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/uz.svg"
        },
        {
            "name": "Vanuatu",
            "dialCode": "+678",
            "isoCode": "VU",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/vu.svg"
        },
        {
            "name": "Venezuela, Bolivarian Republic of Venezuela",
            "dialCode": "+58",
            "isoCode": "VE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ve.svg"
        },
        {
            "name": "Vietnam",
            "dialCode": "+84",
            "isoCode": "VN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/vn.svg"
        },
        {
            "name": "Virgin Islands, British",
            "dialCode": "+1284",
            "isoCode": "VG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/vg.svg"
        },
        {
            "name": "Virgin Islands, U.S.",
            "dialCode": "+1340",
            "isoCode": "VI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/vi.svg"
        },
        {
            "name": "Wallis and Futuna",
            "dialCode": "+681",
            "isoCode": "WF",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/wf.svg"
        },
        {
            "name": "Yemen",
            "dialCode": "+967",
            "isoCode": "YE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ye.svg"
        },
        {
            "name": "Zambia",
            "dialCode": "+260",
            "isoCode": "ZM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/zm.svg"
        },
        {
            "name": "Zimbabwe",
            "dialCode": "+263",
            "isoCode": "ZW",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/zw.svg"
        }
    ]
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  min-height: 70px;\n  margin-bottom: 16px;\n}\n\n.allItems {\n  margin-top: 8px;\n  font-size: 19px;\n}\n\n.allItems ion-icon {\n  font-size: 29px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 20px;\n  margin-bottom: 90px;\n  color: #757575;\n  min-height: 20px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJFQUFBO0FBQ0o7O0FBRUU7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtBQUNKOztBQUVFO0VBQ0UsbUJBQUE7QUFDSjs7QUFFRTs7RUFFRSxrQkFBQTtBQUNKOztBQUVFO0VBQ0UsMkRBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUU7RUFDQyxlQUFBO0VBQ0EsZUFBQTtBQUNIOztBQUFHO0VBQ0MsZUFBQTtBQUVKOztBQUVFO0VBQ0UsZUFBQTtFQUVBLG1CQUFBO0VBRUEsY0FBQTtFQUVBLGdCQUFBO0FBRko7O0FBS0U7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFLRTtFQUNFLHNEQUFBO0FBRko7O0FBS0U7RUFDRSwrQkFBQTtBQUZKOztBQUtFO0VBQ0UsY0FBQTtBQUZKOztBQUtFO0VBQ0UsZ0JBQUE7QUFGSjs7QUFLRTtFQUNFLHNCQUFBO0FBRko7O0FBS0U7RUFDRSxtQkFBQTtBQUZKOztBQUtFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUtFO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRko7O0FBS0U7RUFDRSwrQkFBQTtBQUZKOztBQUtFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFGSjs7QUFLRTtFQUNFLGtCQUFBO0FBRko7O0FBS0U7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUtFO0VBQ0Usa0JBQUE7QUFGSjs7QUFLRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUVBLG9DQUFBO0FBSEo7O0FBTUU7RUFDRSxpQ0FBQTtBQUhKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG4gIH1cbiAgXG4gIGlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24tbGlzdCB7XG4gICAgcGFkZGluZzogMjBweCAwO1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24tbm90ZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuICBcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuICBpb24tbWVudS5tZCBpb24tbm90ZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbiAgfVxuICBcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBtaW4taGVpZ2h0OiA3MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIH1cblxuICAuYWxsSXRlbXN7XG4gICBtYXJnaW4tdG9wOiA4cHg7XG4gICBmb250LXNpemU6IDE5cHg7XG4gICBpb24taWNvbntcbiAgICBmb250LXNpemU6IDI5cHg7XG4gICB9XG4gIH1cbiAgXG4gIGlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICBcbiAgICBtYXJnaW4tYm90dG9tOiA5MHB4O1xuICBcbiAgICBjb2xvcjogIzc1NzU3NTtcblxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XG4gIH1cbiAgXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbiAgXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG4gIH1cbiAgXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gICAgY29sb3I6ICM2MTZlN2U7XG4gIH1cbiAgXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBcbiAgaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB9XG4gIFxuICBpb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICAgIHBhZGRpbmc6IDIwcHggMCAwIDA7XG4gIH1cbiAgXG4gIGlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICBcbiAgaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG4gIH1cbiAgXG4gIGlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuICBcbiAgaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6ICM3Mzg0OWE7XG4gIH1cbiAgXG4gIGlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfVxuICBcbiAgaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcbiAgaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxuICBcbiAgaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIH1cbiAgXG4gIGlvbi1ub3RlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICBcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIH1cbiAgXG4gIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH0iXX0= */";

/***/ }),

/***/ 6167:
/*!***************************************************!*\
  !*** ./src/app/otp/otp.component.scss?ngResource ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";

/***/ }),

/***/ 968:
/*!***************************************************!*\
  !*** ./src/app/otp/otp.component.html?ngResource ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border\" [translucent]=\"true\">\n  <ion-toolbar >\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" (click)=\"closeModal()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon> \n      </ion-button>\n    </ion-buttons>\n    <ion-title> Back </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n  \n  <ion-content class=\"ion-no-border\">\n  \n    <ion-list lines=\"none\">\n      <ion-list-header>\n        <ion-label align=\"center\"><h1>Enter Verification Code</h1></ion-label>\n      </ion-list-header>\n  \n      <ion-item class=\"ion-margin\" lines=\"none\">\n        <ion-label >\n         \n          <div class=\"ion-padding-top ion-padding-bottom\" align=\"center\">\n            <ng-otp-input [ngStyle]=\"{'width':'70%', 'height':'70%', 'font-weight':'800'}\"\n              (onInputChange)=\"onOtpChange($event)\"\n              [config]=\"config\">\n            </ng-otp-input>\n          </div>\n        </ion-label>\n      </ion-item>\n  \n      <ion-item lines=\"none\" class=\"ion-margin ion-padding-top\">\n        <ion-button shape='round' size=\"large\" expand=\"block\" color=\"primary\" slot=\"start\" (click)=\"resend()\">\n          RESEND OTP\n        </ion-button>\n        <ion-button  shape='round' size=\"large\" expand=\"block\" slot=\"end\" [disabled]=\"!otp\" color=\"primary\" (click)=\"verifyOtp()\">\n           Continue\n        </ion-button>\n    \n      </ion-item>\n    </ion-list>\n  \n  </ion-content>";

/***/ }),

/***/ 2480:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map