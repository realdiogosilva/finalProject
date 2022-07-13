"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_map_map_module_ts"],{

/***/ 6770:
/*!*************************************************!*\
  !*** ./src/app/pages/map/map-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPageRoutingModule": () => (/* binding */ MapPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.page */ 9763);




const routes = [
    {
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_0__.MapPage
    }
];
let MapPageRoutingModule = class MapPageRoutingModule {
};
MapPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MapPageRoutingModule);



/***/ }),

/***/ 6016:
/*!*****************************************!*\
  !*** ./src/app/pages/map/map.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPageModule": () => (/* binding */ MapPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _map_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-routing.module */ 6770);
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.page */ 9763);







let MapPageModule = class MapPageModule {
};
MapPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _map_routing_module__WEBPACK_IMPORTED_MODULE_0__.MapPageRoutingModule
        ],
        declarations: [_map_page__WEBPACK_IMPORTED_MODULE_1__.MapPage]
    })
], MapPageModule);



/***/ }),

/***/ 9763:
/*!***************************************!*\
  !*** ./src/app/pages/map/map.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPage": () => (/* binding */ MapPage)
/* harmony export */ });
/* harmony import */ var _Users_diogosilva_Desktop_Solwara_solwara_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _map_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.page.html?ngResource */ 512);
/* harmony import */ var _map_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map.page.scss?ngResource */ 9055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _capacitor_community_capacitor_googlemaps_native__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor-community/capacitor-googlemaps-native */ 2441);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/geolocation */ 7621);







let MapPage = class MapPage {
  constructor() {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.createMap();
  }

  createMap() {
    var _this = this;

    const boundingRect = this.mapView.nativeElement.getBoundingClientRect();
    _capacitor_community_capacitor_googlemaps_native__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.create({
      width: Math.round(boundingRect.width),
      height: Math.round(boundingRect.height),
      x: Math.round(boundingRect.x),
      y: Math.round(boundingRect.y),
      zoom: 5
    });
    _capacitor_community_capacitor_googlemaps_native__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMapReady', /*#__PURE__*/(0,_Users_diogosilva_Desktop_Solwara_solwara_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _capacitor_community_capacitor_googlemaps_native__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.setMapType({
        type: "hybrid" // hybrid, satellite, terrain

      });

      _this.showCurrentPosition();
    }));
  }

  post() {
    return (0,_Users_diogosilva_Desktop_Solwara_solwara_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const coordinates = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_4__.Geolocation.getCurrentPosition();
      console.log('Latitude:', coordinates.coords.latitude);
      console.log('Longitude:', coordinates.coords.longitude);
    })();
  }

  showCurrentPosition() {
    return (0,_Users_diogosilva_Desktop_Solwara_solwara_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_4__.Geolocation.requestPermissions().then( /*#__PURE__*/function () {
        var _ref2 = (0,_Users_diogosilva_Desktop_Solwara_solwara_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (premission) {
          const coordinates = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_4__.Geolocation.getCurrentPosition(); // Create our current location marker

          _capacitor_community_capacitor_googlemaps_native__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addMarker({
            latitude: coordinates.coords.latitude,
            longitude: coordinates.coords.longitude,
            title: 'Current User Location'
          }); // Focus the camera

          _capacitor_community_capacitor_googlemaps_native__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.setCamera({
            latitude: coordinates.coords.latitude,
            longitude: coordinates.coords.longitude,
            zoom: 12,
            bearing: 0
          });
        });

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }

};

MapPage.ctorParameters = () => [];

MapPage.propDecorators = {
  mapView: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild,
    args: ['map']
  }]
};
MapPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-map',
  template: _map_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_map_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], MapPage);


/***/ }),

/***/ 591:
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/definitions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 7621:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Geolocation": () => (/* binding */ Geolocation)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 6549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 591);

const Geolocation = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Geolocation', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_geolocation_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 8391)).then(m => new m.GeolocationWeb())
});



/***/ }),

/***/ 9055:
/*!****************************************************!*\
  !*** ./src/app/pages/map/map.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "#map {\n  height: 50vh;\n  margin: 20px;\n  border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBQ0oiLCJmaWxlIjoibWFwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXAge1xuICAgIGhlaWdodDogNTB2aDtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59Il19 */";

/***/ }),

/***/ 512:
/*!****************************************************!*\
  !*** ./src/app/pages/map/map.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header collapse=\"condense\" scroll-y=\"false\">\n  <br>\n  <br>\n  <ion-toolbar>\n    <ion-title size=\"large\" class=\"ion-text-center\">Map</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content scroll-y=\"false\">\n  <ion-list style=\"text-align:center\">\n  <div id=\"map\" #map></div>\n  <br>\n  <ion-button color=\"primary\" shape=\"round\" color=\"primary\" full (click)=\"post()\">SEND ALERT</ion-button>\n  <ion-button href=\"\" color=\"primary\" class=\"mainButton\" shape=\"round\">Back</ion-button>\n  </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_map_map_module_ts.js.map