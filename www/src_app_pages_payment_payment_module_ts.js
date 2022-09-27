"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_payment_payment_module_ts"],{

/***/ 4018:
/*!*********************************************************!*\
  !*** ./src/app/pages/payment/payment-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPageRoutingModule": () => (/* binding */ PaymentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment.page */ 8622);




const routes = [
    {
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_0__.PaymentPage
    }
];
let PaymentPageRoutingModule = class PaymentPageRoutingModule {
};
PaymentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PaymentPageRoutingModule);



/***/ }),

/***/ 4923:
/*!*************************************************!*\
  !*** ./src/app/pages/payment/payment.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPageModule": () => (/* binding */ PaymentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-routing.module */ 4018);
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.page */ 8622);







let PaymentPageModule = class PaymentPageModule {
};
PaymentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentPageRoutingModule
        ],
        declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_1__.PaymentPage]
    })
], PaymentPageModule);



/***/ }),

/***/ 8622:
/*!***********************************************!*\
  !*** ./src/app/pages/payment/payment.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPage": () => (/* binding */ PaymentPage)
/* harmony export */ });
/* harmony import */ var _workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _payment_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.page.html?ngResource */ 9380);
/* harmony import */ var _payment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment.page.scss?ngResource */ 2576);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_services_avatar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/avatar.service */ 5083);
/* harmony import */ var src_app_services_overlay_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/overlay.service */ 5596);










let PaymentPage = class PaymentPage {
  constructor(prof, nav, http, alertCtrl, overlay, formBuilder) {
    this.prof = prof;
    this.nav = nav;
    this.http = http;
    this.alertCtrl = alertCtrl;
    this.overlay = overlay;
    this.formBuilder = formBuilder;
    this.stripe = Stripe('pk_test_0t85o0Llo0MbBfC9imSzznam');
    this.cash = 'cash';
  }

  ionViewDidEnter() {
    this.skeletOns = [{}, {}, {}, {}, {}];
    this.setupStripe();
    this.prof.getCards().subscribe(d => {
      console.log(d);
      this.cards = d;
      this.cards.forEach(element => {
        console.log(element);

        if (element.selected == true) {
          this.selected = element;
          this.selectedCard = element.name;
          console.log(this.selectedCard);
        }
      });
    });
  }

  chooseCard(event) {
    var _this = this;

    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(event);

      _this.overlay.showLoader('Please wait..');

      yield _this.prof.updateCArd(_this.selected.name, _this.selected.number, _this.selected.type, _this.selected.id, false);
      yield _this.prof.updateCArd(event.name, event.number, event.type, event.id, true);

      _this.overlay.hideLoader();
    })();
  }

  setupStripe() {
    var _this2 = this;

    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const appearance = {
        theme: 'flat',
        variables: {
          colorPrimary: '#0570de',
          colorBackground: '#ffffff',
          colorText: '#30313d',
          colorDanger: '#df1b41',
          fontFamily: 'Ideal Sans, system-ui, sans-serif',
          spacingUnit: '2px',
          borderRadius: '4px' // See all possible variables below

        }
      };

      let elements = _this2.stripe.elements();

      var style = {
        base: {
          color: '#32325d',
          lineHeight: '24px',
          fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
          fontSmoothing: 'antialiased',
          fontSize: '17px',
          '::placeholder': {
            color: '#aab7c4'
          }
        },
        invalid: {
          color: '#fa755a',
          iconColor: '#3880ff'
        }
      };
      _this2.card = elements.create('card', {
        style: style
      });

      _this2.card.mount('#card-element');

      _this2.card.addEventListener('change', event => {
        var displayError = document.getElementById('card-errors');

        if (event.error) {
          displayError.textContent = event.error.message;
        } else {
          displayError.textContent = '';
        }
      });

      var form = document.getElementById('payment-form');
      form.addEventListener('submit', event => {
        event.preventDefault();
        console.log(event, _this2.card);
        _this2.approve = true;

        _this2.stripe.createSource(_this2.card).then( /*#__PURE__*/function () {
          var _ref = (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (result) {
            _this2.approve = false;

            if (result.error) {
              var errorElement = document.getElementById('card-errors');
              errorElement.textContent = result.error.message;

              _this2.overlay.showAlert('Payment Error', result.error.message);
            } else {
              console.log(result.source.id);
              yield _this2.prof.updateCArd(_this2.selected.name, _this2.selected.number, _this2.selected.type, _this2.selected.id, false);
              yield _this2.prof.createCard(result.source.card.last4, result.source.card.last4, result.source.card.brand, result.source.id);

              _this2.card.removeEventListener('change', event => {});

              form.removeEventListener('submit', event => {});
              yield _this2.overlay.showToast('Successfully Added Card!');

              _this2.setupStripe(); //  this.makePayment(result.id);

            }
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      });
    })();
  }

  showPayMentAlert(title, subtitle, canLeave) {
    var _this3 = this;

    return (0,_workspace_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertCtrl.create({
        header: title,
        subHeader: subtitle,
        buttons: [{
          text: 'Approve',
          role: 'cancel',
          handler: () => {
            if (canLeave) {
              _this3.nav.pop();
            }
          }
        }],
        backdropDismiss: false
      });
      alert.present();
    })();
  }

  ngOnInit() {}

};

PaymentPage.ctorParameters = () => [{
  type: src_app_services_avatar_service__WEBPACK_IMPORTED_MODULE_3__.AvatarService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
}, {
  type: src_app_services_overlay_service__WEBPACK_IMPORTED_MODULE_4__.OverlayService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
}];

PaymentPage.propDecorators = {
  stripeButton: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
    args: ['paymentform', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef
    }]
  }]
};
PaymentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-payment',
  template: _payment_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_payment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], PaymentPage);


/***/ }),

/***/ 2576:
/*!************************************************************!*\
  !*** ./src/app/pages/payment/payment.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "@keyframes slide-top {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n.slide-top {\n  animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\nion-item {\n  animation-name: slide-top;\n  animation-duration: 0.5s;\n}\n.test {\n  animation-name: slide-top;\n  animation-duration: 0.6s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFDRSwyQkFBQTtFQUNKO0VBQ0U7SUFDRSx5QkFBQTtFQUNKO0FBQ0Y7QUFFRTtFQUNJLG1FQUFBO0FBQU47QUFHRTtFQUNFLHlCQUFBO0VBQ0Esd0JBQUE7QUFBSjtBQUdFO0VBQ0UseUJBQUE7RUFDQSx3QkFBQTtBQUFKIiwiZmlsZSI6InBheW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBzbGlkZS10b3Age1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICAgIH1cbiAgfVxuICBcbiAgLnNsaWRlLXRvcCB7XG4gICAgICBhbmltYXRpb246IHNsaWRlLXRvcCAwLjVzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcbiAgfVxuXG4gIGlvbi1pdGVte1xuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS10b3A7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICB9XG5cbiAgLnRlc3R7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlLXRvcDtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNnM7XG4gIH1cbiAgIl19 */";

/***/ }),

/***/ 9380:
/*!************************************************************!*\
  !*** ./src/app/pages/payment/payment.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" [translucent]=\"true\">\n  <ion-toolbar >\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\">\n        <ion-back-button></ion-back-button>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> Payment </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n\n<ion-content class=\"ion-text-center ion-padding\">\n\n  <ion-list>\n  <ion-list-header class=\"ion-text-center\">\n    <ion-label color=\"primary\"><h1>Add New Card</h1></ion-label>\n  </ion-list-header>\n\n\n  <ion-card>\n    <ion-card-content>\n      <form action=\"/\" method=\"post\" id=\"payment-form\">\n        <div class=\"form-row ion-padding-bottom\">\n          <div id=\"card-element\"> <!-- a Stripe Element will be inserted here. --> </div>\n          <!-- Used to display Element errors -->\n          <div id=\"card-errors\" role=\"alert\"></div>\n        </div>\n\n          <ion-button expand=\"block\" size='large' type=\"submit\" color=\"primary\">\n            <ion-icon *ngIf=\"!approve\" color='light' slot=\"icon-only\" name=\"checkmark-sharp\"></ion-icon>\n            <ion-progress-bar *ngIf=\"approve\"color='light' type=\"indeterminate\"></ion-progress-bar>\n            <ion-label *ngIf=\"!approve\">Proceed</ion-label> \n             \n          </ion-button>\n        \n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-list>\n  \n      <ion-list  lines=\"none\" class=\"ion-padding-bottom\">\n        <ion-list-header class=\"ion-text-center\">\n          <ion-label color=\"primary\">Payment Methods</ion-label>\n        </ion-list-header>\n        <ion-radio-group *ngIf=\"cards\"[value]=\"selectedCard\" >\n          \n              <ion-item *ngFor=\"let card of cards\" (click)=\"chooseCard(card)\">\n              <ion-label>\n                <h1 color=\"primary\">{{card.name}}</h1>\n                <p>{{card.type}}</p>\n              </ion-label>\n              \n             \n              <ion-radio slot=\"start\" [value]=\"card.name\" ></ion-radio>\n              <ion-icon *ngIf=\"card.type == cash\" color='success' slot=\"end\" name=\"cash-sharp\"></ion-icon>\n              <ion-icon *ngIf=\"card.type != cash\" color='primary' slot=\"end\" name=\"card-sharp\"></ion-icon>\n            </ion-item>\n        </ion-radio-group>\n      </ion-list>\n\n\n      <ion-list *ngIf=\"!cards\" lines=\"none\" class=\"ion-padding-bottom\">\n        <ion-radio-group>\n       <ion-item *ngFor=\"let item of skeletOns\">\n        <ion-label><ion-skeleton-text [animated]=\"true\" ></ion-skeleton-text></ion-label>\n          \n       <ion-skeleton-text  [animated]=\"true\" style=\"width: 30px;\" ></ion-skeleton-text>\n          \n          <ion-skeleton-text slot=\"end\" [animated]=\"true\" style=\"width: 30px;\"></ion-skeleton-text>\n         \n       </ion-item>\n    </ion-radio-group>\n      </ion-list>\n \n      <ion-list-header>\n        <ion-label color=\"primary\" class=\"ion-text-center test\">\n          <h1>Test Card</h1>\n          <p>4242424242424242 2/25 544 1324</p>\n        </ion-label>\n    </ion-list-header>\n\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_payment_payment_module_ts.js.map