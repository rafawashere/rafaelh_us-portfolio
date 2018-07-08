webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"position-relative container\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"card mt-sm-3 col-md-8\">\r\n      <div class=\"card-body\">\r\n        <h3 class=\"mb-0\">Artist Directory</h3>\r\n        <div class=\"form-group\">\r\n          <div class=\"form-label\" *ngIf=\"query\"><strong>For:</strong>\r\n            {{ query }}\r\n          </div>\r\n          <input class=\"form-control mt-2\" type=\"text\"\r\n            [(ngModel)]=\"query\">\r\n        </div><!-- form-group -->\r\n      </div><!-- card-body -->\r\n    </div><!-- card -->\r\n  </div><!-- row -->\r\n\r\n  <div class=\"position-absolute container\" style=\"left: 0; z-index:10\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-sm-10 col-md-8 col-lg-6 col-xl-5\">\r\n        <div class=\"list-group\" *ngIf=\"query\">\r\n          <a href=\"#\" class=\"list-group-item list-group-item-action flex-column align-items-start\"\r\n            *ngFor=\"let artist of (artists | searchArtists: query)\"\r\n            (click)=\"showArtist(artist); query=''\"\r\n            [style.backgroundColor]=\"artist.highlight ? '#EEE' : '#FFF'\">\r\n            <app-artist-items [artist]=\"artist\"></app-artist-items>\r\n          </a><!-- link -->\r\n        </div><!-- list-group -->\r\n      </div><!-- col -->\r\n    </div><!-- row -->\r\n  </div><!-- container -->\r\n\r\n  <app-artist-details *ngIf=\"currentArtist\" [artist]=\"currentArtist\"></app-artist-details>\r\n</div><!-- position -->\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.query = '';
        this.artists = [];
    }
    AppComponent.prototype.showArtist = function (item) {
        this.query = item.name;
        item.highlight = !item.highlight;
        this.currentArtist = item;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('assets/data.json').subscribe(function (data) {
            _this.artists = data;
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [
                "\n      .list-group-item:first-child {\n        border-top-left-radius: 0;\n        border-top-right-radius: 0;\n        border-top: 0;\n      }\n    "
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__artist_items_artist_items_component__ = __webpack_require__("./src/app/artist-items/artist-items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_artists_pipe__ = __webpack_require__("./src/app/search-artists.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__artist_details_artist_details_component__ = __webpack_require__("./src/app/artist-details/artist-details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__artist_items_artist_items_component__["a" /* ArtistItemsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__search_artists_pipe__["a" /* SearchArtistsPipe */],
                __WEBPACK_IMPORTED_MODULE_7__artist_details_artist_details_component__["a" /* ArtistDetailsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/artist-details/artist-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-sm-4 col-lg-3\">\n      <img class=\"img-fluid rounded\" src=\"assets/images/{{artist.shortname}}.jpg\" alt=\"{{artist.name}} photo\">\n    </div>\n    <div class=\"col-sm-8 col-lg-4\">\n      <h2 class=\"mt-3 mt-sm-0 mb-0\">{{artist.name}}</h2>\n      <h4 class=\"mt-0\">{{artist.reknown}}</h4>\n      <p>{{artist.bio}}</p>\n    </div>\n  </div>\n</div><!--artistdetails-->\n"

/***/ }),

/***/ "./src/app/artist-details/artist-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArtistDetailsComponent = (function () {
    function ArtistDetailsComponent() {
    }
    ArtistDetailsComponent.prototype.ngOnInit = function () {
    };
    ArtistDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-artist-details',
            template: __webpack_require__("./src/app/artist-details/artist-details.component.html"),
            inputs: ['artist']
        }),
        __metadata("design:paramtypes", [])
    ], ArtistDetailsComponent);
    return ArtistDetailsComponent;
}());



/***/ }),

/***/ "./src/app/artist-items/artist-items.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"media\">\n  <img class=\"mr-3 rounded align-self-center img-fluid\" style=\"width: 70px;\" [src]=\"'./assets/images/' + artist.shortname + '_tn.jpg'\" alt=\"'Photo of ' + artist.name \">\n  <div class=\"media-body align-self-center\">\n    <h5 class=\"m-0\">{{ artist.name }}</h5>\n    {{ artist.reknown }}\n  </div><!-- media body -->\n</div><!-- media -->\n"

/***/ }),

/***/ "./src/app/artist-items/artist-items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistItemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArtistItemsComponent = (function () {
    function ArtistItemsComponent() {
    }
    ArtistItemsComponent.prototype.ngOnInit = function () {
    };
    ArtistItemsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-artist-items',
            template: __webpack_require__("./src/app/artist-items/artist-items.component.html"),
            inputs: ['artist']
        }),
        __metadata("design:paramtypes", [])
    ], ArtistItemsComponent);
    return ArtistItemsComponent;
}());



/***/ }),

/***/ "./src/app/search-artists.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchArtistsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchArtistsPipe = (function () {
    function SearchArtistsPipe() {
    }
    SearchArtistsPipe.prototype.transform = function (pipeData, pipeModifier) {
        return pipeData.filter(function (eachItem) {
            return (eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
                eachItem['reknown'].toLowerCase().includes(pipeModifier.toLowerCase()));
        });
    };
    SearchArtistsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Pipe */])({
            name: 'searchArtists'
        })
    ], SearchArtistsPipe);
    return SearchArtistsPipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
