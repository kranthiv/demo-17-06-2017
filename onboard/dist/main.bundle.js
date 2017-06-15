webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<onboard-header></onboard-header>\r\n<div>\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__onboard_routes_onboard_routes_module__ = __webpack_require__("./src/app/onboard-routes/onboard-routes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__journey_journey_component__ = __webpack_require__("./src/app/journey/journey.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_uuid_service__ = __webpack_require__("./src/app/shared/services/uuid.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_pouchdb_service__ = __webpack_require__("./src/app/shared/services/pouchdb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__steps_steps_component__ = __webpack_require__("./src/app/steps/steps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__step_step_component__ = __webpack_require__("./src/app/step/step.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_8__journey_journey_component__["a" /* JourneyComponent */],
            __WEBPACK_IMPORTED_MODULE_11__steps_steps_component__["a" /* StepsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__step_step_component__["a" /* StepComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdRadioModule */],
            __WEBPACK_IMPORTED_MODULE_5__onboard_routes_onboard_routes_module__["a" /* OnboardRoutesModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__shared_services_uuid_service__["a" /* UuidService */], __WEBPACK_IMPORTED_MODULE_10__shared_services_pouchdb_service__["a" /* PouchdbService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <h1>OnBording</h1>\n</header>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host header {\n  height: 45px;\n  background-color: #4fc3f7;\n  text-align: center;\n  padding-top: 10px; }\n\n:host h1 {\n  margin: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'onboard-header',
        template: __webpack_require__("./src/app/header/header.component.html"),
        styles: [__webpack_require__("./src/app/header/header.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "./src/app/journey/journey.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"setupJourney(journey)\" #journey=\"ngForm\">\n  <div class=\"journey__start\">\n    <div class=\"form__container\">\n      <md-input-container class=\"form__control\">\n        <input mdInput placeholder=\"Journey name\" name=\"name\" ngModel>\n      </md-input-container>\n      <md-input-container class=\"form__control\">\n        <input mdInput placeholder=\"Journey Description\" name=\"description\" ngModel>\n      </md-input-container>\n      <button md-raised-button class=\"form__control btn__primary\" type=\"submit\">Start Journey</button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/journey/journey.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  padding: 10px;\n  font-size: 15px; }\n\n.journey__start {\n  margin-top: 100px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/journey/journey.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_uuid_service__ = __webpack_require__("./src/app/shared/services/uuid.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__journey_service__ = __webpack_require__("./src/app/journey/journey.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__journey__ = __webpack_require__("./src/app/journey/journey.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JourneyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JourneyComponent = (function () {
    function JourneyComponent(uniqueIdService, journeyService, _router) {
        this.uniqueIdService = uniqueIdService;
        this.journeyService = journeyService;
        this._router = _router;
    }
    JourneyComponent.prototype.ngOnInit = function () {
    };
    JourneyComponent.prototype.setupJourney = function (journey) {
        console.log(this.uniqueIdService.genereateId(), "unique id enerated");
        console.log(journey, "journey");
        var j = new __WEBPACK_IMPORTED_MODULE_4__journey__["a" /* Journey */]();
        j.id = this.uniqueIdService.genereateId();
        j.name = journey.controls["name"].value;
        j.description = journey.controls["description"].value;
        this.journeyService.saveJourney(j);
        this._router.navigate(['/steps', j.name]);
        return false;
    };
    return JourneyComponent;
}());
JourneyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'onboard-journey',
        template: __webpack_require__("./src/app/journey/journey.component.html"),
        styles: [__webpack_require__("./src/app/journey/journey.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__journey_service__["a" /* JourneyService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_uuid_service__["a" /* UuidService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_uuid_service__["a" /* UuidService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__journey_service__["a" /* JourneyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__journey_service__["a" /* JourneyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], JourneyComponent);

var _a, _b, _c;
//# sourceMappingURL=journey.component.js.map

/***/ }),

/***/ "./src/app/journey/journey.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_pouchdb_service__ = __webpack_require__("./src/app/shared/services/pouchdb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__journey__ = __webpack_require__("./src/app/journey/journey.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JourneyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JourneyService = (function () {
    function JourneyService(_dbService) {
        this._dbService = _dbService;
    }
    JourneyService.prototype.saveJourney = function (journey) {
        var _this = this;
        return this._dbService.db.get(journey.id).then(function (result) {
            console.log(result);
            var journey = new __WEBPACK_IMPORTED_MODULE_2__journey__["a" /* Journey */]();
            journey._rev = result._rev;
            journey._id = result._id;
            return _this._dbService.db.put(journey);
        }, function (error) {
            if (error.status === 404) {
                journey._id = journey.id;
                return _this._dbService.db.put(journey);
            }
            else {
                return new Promise(function (resolve, reject) { return reject(error); });
            }
        });
    };
    return JourneyService;
}());
JourneyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_pouchdb_service__["a" /* PouchdbService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_pouchdb_service__["a" /* PouchdbService */]) === "function" && _a || Object])
], JourneyService);

var _a;
//# sourceMappingURL=journey.service.js.map

/***/ }),

/***/ "./src/app/journey/journey.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Journey; });
var Journey = (function () {
    function Journey() {
    }
    return Journey;
}());

//# sourceMappingURL=journey.js.map

/***/ }),

/***/ "./src/app/onboard-routes/onboard-routes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__journey_journey_component__ = __webpack_require__("./src/app/journey/journey.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__steps_steps_component__ = __webpack_require__("./src/app/steps/steps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__step_step_component__ = __webpack_require__("./src/app/step/step.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnboardRoutesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__journey_journey_component__["a" /* JourneyComponent */] },
    { path: 'steps/:name', component: __WEBPACK_IMPORTED_MODULE_3__steps_steps_component__["a" /* StepsComponent */] },
    { path: 'step', component: __WEBPACK_IMPORTED_MODULE_4__step_step_component__["a" /* StepComponent */] }
];
var OnboardRoutesModule = (function () {
    function OnboardRoutesModule() {
    }
    return OnboardRoutesModule;
}());
OnboardRoutesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], OnboardRoutesModule);

//# sourceMappingURL=onboard-routes.module.js.map

/***/ }),

/***/ "./src/app/shared/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return databaseName; });
var databaseName = "onboard";
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./src/app/shared/services/pouchdb.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pouchdb__ = __webpack_require__("./node_modules/pouchdb/lib/index-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pouchdb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pouchdb__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__("./src/app/shared/constants.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PouchdbService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PouchdbService = (function () {
    function PouchdbService() {
        this._isInstantiated = false;
        if (!this._isInstantiated) {
            this._db = new __WEBPACK_IMPORTED_MODULE_1_pouchdb__(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* databaseName */]);
            this._isInstantiated = true;
        }
    }
    Object.defineProperty(PouchdbService.prototype, "isInstantiated", {
        get: function () { return this._isInstantiated; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PouchdbService.prototype, "db", {
        get: function () {
            return this._db;
        },
        enumerable: true,
        configurable: true
    });
    return PouchdbService;
}());
PouchdbService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PouchdbService);

//# sourceMappingURL=pouchdb.service.js.map

/***/ }),

/***/ "./src/app/shared/services/uuid.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uuid__ = __webpack_require__("./node_modules/uuid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_uuid__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UuidService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UuidService = (function () {
    function UuidService() {
    }
    UuidService.prototype.genereateId = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_uuid__["v4"])();
    };
    return UuidService;
}());
UuidService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UuidService);

//# sourceMappingURL=uuid.service.js.map

/***/ }),

/***/ "./src/app/step/step.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"form__container\" style=\"margin-bottom: 0px;\">\n  Add new step\n</h2>\n<hr/>\n<form (ngSubmit)=\"save(step)\" #step=\"ngForm\">\n  <div class=\"journey__start\" style=\"margin-top: 100px;\">\n    <div class=\"form__container\">\n      <md-input-container class=\"form__control\">\n        <input mdInput placeholder=\"Title\" name=\"name\" ngModel>\n      </md-input-container>\n      <md-input-container class=\"form__control\">\n        <input mdInput placeholder=\"Description\" name=\"description\" ngModel>\n      </md-input-container>\n      <md-radio-group [(ngModel)]=\"position\" name=\"positions[0]\">\n        <md-radio-button *ngFor=\"let pos of positions\" [value]=\"pos\" class=\"form__control radio-button\">{{pos}}</md-radio-button>\n      </md-radio-group>\n      <button md-raised-button class=\"form__control btn__primary\"  style=\"margin-top: 20px;\" type=\"submit\">Save step</button>\n      <button md-raised-button class=\"form__control btn__primary\" style=\"margin-top: 10px;\" type=\"submit\">Cancel step</button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/step/step.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-radio-label-content {\n  margin-left: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/step/step.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StepComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StepComponent = (function () {
    function StepComponent(_router) {
        this._router = _router;
        this.position = "";
        this.positions = ["top", "right", "left", "bottom"];
    }
    StepComponent.prototype.ngOnInit = function () {
    };
    StepComponent.prototype.save = function (form) {
        console.log(form, "step");
        this._router.navigate(['steps', ""]);
        return false;
    };
    StepComponent.prototype.cancel = function () {
        this._router.navigate(['steps', ""]);
        return false;
    };
    return StepComponent;
}());
StepComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'onboard-step',
        template: __webpack_require__("./src/app/step/step.component.html"),
        styles: [__webpack_require__("./src/app/step/step.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], StepComponent);

var _a;
//# sourceMappingURL=step.component.js.map

/***/ }),

/***/ "./src/app/steps/steps.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"form__container\" style=\"margin-bottom: 0px;\">\n  {{journeyName}}\n</h2>\n<div class=\"form__control\">\n  <hr />\n</div>\n<div style=\"bottom: 0px;position: absolute;width: 100%;\">\n  <div class=\"form__container\">\n    <button md-raised-button class=\"form__control btn__primary\" type=\"submit\" (click)=\"addStep()\">Add Step</button>\n  </div>\n  <div class=\"form__container\">\n    <button md-raised-button class=\"form__control btn__primary\" type=\"submit\" (click)=\"cancel()\">Cancel journey</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/steps/steps.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/steps/steps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StepsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StepsComponent = (function () {
    function StepsComponent(_activatedRoute, _router) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
    }
    StepsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            console.log(params);
            _this.journeyName = params["name"];
        });
    };
    StepsComponent.prototype.addStep = function () {
        this._router.navigate(['step']);
    };
    StepsComponent.prototype.cancel = function () {
        this._router.navigate(['']);
    };
    return StepsComponent;
}());
StepsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'onboard-steps',
        template: __webpack_require__("./src/app/steps/steps.component.html"),
        styles: [__webpack_require__("./src/app/steps/steps.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], StepsComponent);

var _a, _b;
//# sourceMappingURL=steps.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map