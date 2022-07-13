"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_travel-request_travel-request_module_ts"],{

/***/ 1068:
/*!***********************************************************************!*\
  !*** ./src/app/pages/travel-request/travel-request-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TravelRequestPageRoutingModule": () => (/* binding */ TravelRequestPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _travel_request_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./travel-request.page */ 9435);




const routes = [
    {
        path: '',
        component: _travel_request_page__WEBPACK_IMPORTED_MODULE_0__.TravelRequestPage
    }
];
let TravelRequestPageRoutingModule = class TravelRequestPageRoutingModule {
};
TravelRequestPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TravelRequestPageRoutingModule);



/***/ }),

/***/ 5528:
/*!***************************************************************!*\
  !*** ./src/app/pages/travel-request/travel-request.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TravelRequestPageModule": () => (/* binding */ TravelRequestPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _travel_request_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./travel-request-routing.module */ 1068);
/* harmony import */ var _travel_request_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./travel-request.page */ 9435);







let TravelRequestPageModule = class TravelRequestPageModule {
};
TravelRequestPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _travel_request_routing_module__WEBPACK_IMPORTED_MODULE_0__.TravelRequestPageRoutingModule
        ],
        declarations: [_travel_request_page__WEBPACK_IMPORTED_MODULE_1__.TravelRequestPage]
    })
], TravelRequestPageModule);



/***/ }),

/***/ 9435:
/*!*************************************************************!*\
  !*** ./src/app/pages/travel-request/travel-request.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TravelRequestPage": () => (/* binding */ TravelRequestPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _travel_request_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./travel-request.page.html?ngResource */ 1225);
/* harmony import */ var _travel_request_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./travel-request.page.scss?ngResource */ 8245);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let TravelRequestPage = class TravelRequestPage {
    constructor() { }
    post() {
        console.log('name', this.name);
        console.log('vessel', this.vessel);
    }
    ngOnInit() {
    }
};
TravelRequestPage.ctorParameters = () => [];
TravelRequestPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-travel-request',
        template: _travel_request_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_travel_request_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TravelRequestPage);



/***/ }),

/***/ 8245:
/*!**************************************************************************!*\
  !*** ./src/app/pages/travel-request/travel-request.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "#container {\n  background-color: #ffffff;\n}\n\n.inputClass {\n  border-color: var(--ion-color-medium-shade);\n  border-radius: 3px;\n  border-width: 1px;\n  box-shadow: 2px gray;\n  background: #f8f9fa;\n  color: var(--ion-color-success-contrast);\n}\n\n.inputText {\n  font-weight: 500;\n}\n\n.mainButton {\n  width: 414px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYXZlbC1yZXF1ZXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0o7O0FBR0E7RUFDSSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQUFKIiwiZmlsZSI6InRyYXZlbC1yZXF1ZXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIgeyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuXG59XG5cbi5pbnB1dENsYXNzIHsgXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm94LXNoYWRvdzogMnB4IGdyYXk7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QpO1xufVxuXG4uaW5wdXRUZXh0e1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tYWluQnV0dG9uIHsgXG4gICAgd2lkdGg6IDQxNHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgfSJdfQ== */";

/***/ }),

/***/ 1225:
/*!**************************************************************************!*\
  !*** ./src/app/pages/travel-request/travel-request.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "  <ion-header collapse=\"condense\" scroll-y=\"false\">\n    <br>\n    <br>\n    <ion-toolbar>\n      <ion-title size=\"large\" class=\"ion-text-center\">Travel Request</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content scroll-y=\"false\">\n  <div id=\"container\">\n    <ion-item lines=\"none\">\n      <ion-label class=\"inputText\" position=\"stacked\" color=\"primary\">Name </ion-label>\n      <ion-input class=\"inputClass\" type=\"text\" [(ngModel)]=\"name\"></ion-input>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label class=\"inputText\" position=\"stacked\" color=\"primary\">Vessel </ion-label>\n      <ion-input class=\"inputClass\" type=\"text\" [(ngModel)]=\"vessel\"></ion-input>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label class=\"inputText\" position=\"stacked\" color=\"primary\">Vessel Identifier</ion-label>\n      <ion-input class=\"inputClass\" type=\"number\" [(ngModel)]=\"vesselIdentifier\"></ion-input>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label class=\"inputText\" position=\"stacked\" color=\"primary\">Type</ion-label>\n      <ion-input class=\"inputClass\" type=\"text\" [(ngModel)]=\"type\"></ion-input>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label class=\"inputText\" position=\"stacked\" color=\"primary\">Type of Report</ion-label>\n      <ion-input class=\"inputClass\" type=\"text\" [(ngModel)]=\"TypeOfReport\"></ion-input>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label class=\"inputText\" position=\"stacked\" color=\"primary\">Details</ion-label>\n      <ion-input class=\"inputClass\" type=\"text\" [(ngModel)]=\"details\"></ion-input>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label class=\"inputText\" position=\"stacked\" color=\"primary\">Destination</ion-label>\n      <ion-input class=\"inputClass\" type=\"text\" [(ngModel)]=\"Destination\"></ion-input>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label class=\"inputText\" position=\"stacked\" color=\"primary\">Number of people on board</ion-label>\n      <ion-input class=\"inputClass\" type=\"number\" [(ngModel)]=\"NumberOfPeopleOnBoard\"></ion-input>\n    </ion-item>\n    <br>\n    <ion-item lines=\"none\">\n      <ion-button color=\"primary\" class=\"mainButton\" shape=\"round\" full (click)=\"post()\">Submit</ion-button>\n      <ion-button href=\"\" color=\"primary\" class=\"mainButton\" shape=\"round\">Cancel/Back</ion-button>\n    </ion-item>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_travel-request_travel-request_module_ts.js.map