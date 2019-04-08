(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.8@@angular/core/fesm5/core.js");
/* harmony import */ var _service_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/dashboard.service */ "./src/app/service/dashboard.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(dashboardSrv) {
        this.dashboardSrv = dashboardSrv;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.pageViewCount();
    };
    AppComponent.prototype.pageViewCount = function () {
        this.dashboardSrv.addPageView().subscribe();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/_@angular_platform-browser@7.2.8@@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.8@@angular/core/fesm5/core.js");
/* harmony import */ var _router_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router/app-routing.module */ "./src/app/router/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/_@angular_platform-browser@7.2.8@@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/project-detail/project-detail.component */ "./src/app/components/project-detail/project-detail.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/_@angular_forms@7.2.8@@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_logo_logo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common/logo/logo.component */ "./src/app/common/logo/logo.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/_@angular_common@7.2.8@@angular/common/fesm5/http.js");
/* harmony import */ var _pipes_project_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipes/project.pipe */ "./src/app/pipes/project.pipe.ts");
/* harmony import */ var _pipes_common_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pipes/common.pipe */ "./src/app/pipes/common.pipe.ts");
/* harmony import */ var _pipes_skill_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pipes/skill.pipe */ "./src/app/pipes/skill.pipe.ts");
/* harmony import */ var _common_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./common/home-page/home-page.component */ "./src/app/common/home-page/home-page.component.ts");
/* harmony import */ var _common_sub_page_sub_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./common/sub-page/sub-page.component */ "./src/app/common/sub-page/sub-page.component.ts");
/* harmony import */ var _components_project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/project-edit/project-edit.component */ "./src/app/components/project-edit/project-edit.component.ts");
/* harmony import */ var _pipes_user_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pipes/user.pipe */ "./src/app/pipes/user.pipe.ts");
/* harmony import */ var _components_msg_msg_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/msg/msg.component */ "./src/app/components/msg/msg.component.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _service_skill_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./service/skill.service */ "./src/app/service/skill.service.ts");
/* harmony import */ var _service_project_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./service/project.service */ "./src/app/service/project.service.ts");
/* harmony import */ var _service_AuthInterceptor__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./service/AuthInterceptor */ "./src/app/service/AuthInterceptor.ts");
/* harmony import */ var _service_upload_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./service/upload.service */ "./src/app/service/upload.service.ts");
/* harmony import */ var _service_msg_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./service/msg.service */ "./src/app/service/msg.service.ts");































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _components_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_11__["ProjectDetailComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"],
                _common_logo_logo_component__WEBPACK_IMPORTED_MODULE_14__["LogoComponent"],
                _pipes_project_pipe__WEBPACK_IMPORTED_MODULE_16__["ProjectStatusPipe"],
                _pipes_project_pipe__WEBPACK_IMPORTED_MODULE_16__["ProjectStatusPipeText"],
                _pipes_project_pipe__WEBPACK_IMPORTED_MODULE_16__["ProjectColorPipe"],
                _pipes_common_pipe__WEBPACK_IMPORTED_MODULE_17__["ArrayPipe"],
                _pipes_skill_pipe__WEBPACK_IMPORTED_MODULE_18__["SkillPipe"],
                _common_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_19__["HomePageComponent"],
                _common_sub_page_sub_page_component__WEBPACK_IMPORTED_MODULE_20__["SubPageComponent"],
                _components_project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_21__["ProjectEditComponent"],
                _pipes_user_pipe__WEBPACK_IMPORTED_MODULE_22__["UserRolePipe"],
                _components_msg_msg_component__WEBPACK_IMPORTED_MODULE_23__["MsgComponent"],
                _components_project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_21__["addProjectSuccessDialog"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_8__["ChangePwdBottomSheet"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_8__["ChangeInfoBottomSheet"],
            ],
            entryComponents: [
                _components_project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_21__["addProjectSuccessDialog"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_8__["ChangePwdBottomSheet"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_8__["ChangeInfoBottomSheet"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _router_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_6__["AppMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]
            ],
            providers: [
                _service_auth_service__WEBPACK_IMPORTED_MODULE_24__["AuthService"],
                _service_user_service__WEBPACK_IMPORTED_MODULE_25__["UserService"],
                _service_project_service__WEBPACK_IMPORTED_MODULE_27__["ProjectService"],
                _service_skill_service__WEBPACK_IMPORTED_MODULE_26__["SkillService"],
                _service_upload_service__WEBPACK_IMPORTED_MODULE_29__["UploadService"],
                _service_msg_service__WEBPACK_IMPORTED_MODULE_30__["MsgService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"], useClass: _service_AuthInterceptor__WEBPACK_IMPORTED_MODULE_28__["AuthInterceptor"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/home-page/home-page.component.html":
/*!***********************************************************!*\
  !*** ./src/app/common/home-page/home-page.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- top nav -->\n<!-- <mat-toolbar>\n  <mat-toolbar-row>\n    <button mat-button class=\"left-btn\" (click)=\"sidenav.toggle()\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <span>Project Hub</span>\n    <button mat-icon-button class=\"right-btn\">\n      <mat-icon>search</mat-icon>\n    </button>\n  </mat-toolbar-row>\n</mat-toolbar> -->\n\n<mat-sidenav-container>\n  <!-- aside -->\n  <mat-sidenav #sidenav>\n\n  </mat-sidenav>\n  <!-- main -->\n  <section class=\"main\">\n    <router-outlet></router-outlet>\n  </section>\n  <!-- footer -->\n  <div class=\"footer-nav\">\n    <button mat-button routerLink=\"projects\" routerLinkActive=\"active\">\n      <mat-icon>view_headline</mat-icon>\n    </button>\n    <button mat-button routerLink=\"msgs\" routerLinkActive=\"active\">\n      <mat-icon [matBadge]=\"msgSrv.unReadMsg\" [matBadgeHidden]=\"!msgSrv.unReadMsg\" matBadgeSize=\"small\" matBadgeColor=\"warn\">message</mat-icon>\n    </button>\n    <button mat-button routerLink=\"user\" routerLinkActive=\"active\">\n      <mat-icon>account_box</mat-icon>\n    </button>\n  </div>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/common/home-page/home-page.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/common/home-page/home-page.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar {\n  background: #24292e;\n  color: #fff;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3); }\n  mat-toolbar mat-toolbar-row {\n    padding: 0; }\n  mat-toolbar .left-btn {\n    height: 100%;\n    margin-right: 6px; }\n  mat-toolbar span {\n    max-width: 200px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap; }\n  mat-toolbar .right-btn {\n    margin-right: 15px;\n    margin-left: auto; }\n  mat-sidenav {\n  min-width: 250px; }\n  .main {\n  height: 100vh;\n  min-height: 450px;\n  box-sizing: border-box;\n  overflow: scroll;\n  padding: 10px 1rem 65px 1rem;\n  background-color: #fafafa; }\n  .footer-nav {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  z-index: 10;\n  background-color: #fff;\n  border-top: 1px solid #eee;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n  .footer-nav button {\n    flex: 1;\n    min-height: 44px;\n    border-radius: 0; }\n  .footer-nav button.active mat-icon {\n      color: #24292e; }\n  .footer-nav button mat-icon {\n      color: #aaa; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb25zb24vd29yay9teS1wcm9qZWN0L2dyYWR1YXRpb24tcHJvamVjdC9Qcm9qZWN0SHViL3Byb2otaHViL3NyYy9hcHAvY29tbW9uL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGVBQWU7RUFDZixNQUFNO0VBQ04sUUFBUTtFQUNSLE9BQU87RUFDUCxXQVRZO0VBVVosMENBQXlDLEVBQUE7RUFSM0M7SUFXSSxVQUFVLEVBQUE7RUFYZDtJQWVJLFlBQVk7SUFDWixpQkFBaUIsRUFBQTtFQWhCckI7SUFtQkksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsbUJBQW1CLEVBQUE7RUF0QnZCO0lBeUJJLGtCQUFrQjtJQUNsQixpQkFBaUIsRUFBQTtFQU1yQjtFQUNFLGdCQUFnQixFQUFBO0VBSWxCO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1Qix5QkFBeUIsRUFBQTtFQUkzQjtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsT0FBTztFQUNQLFdBQVc7RUFDWCxXQXREWTtFQXVEWixzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCLEVBQUE7RUFWaEM7SUFhSSxPQUFPO0lBQ1AsZ0JBQWdCO0lBQ2hCLGdCQUFnQixFQUFBO0VBZnBCO01BbUJRLGNBQWMsRUFBQTtFQW5CdEI7TUF3Qk0sV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbmF2LWluZGV4OiAxMDtcbi8vIG5hdlxubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiAjMjQyOTJlO1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAkbmF2LWluZGV4O1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIC4zKTtcblxuICBtYXQtdG9vbGJhci1yb3cge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAubGVmdC1idG4ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgfVxuICBzcGFuIHtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuICAucmlnaHQtYnRuIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cblxufVxuXG4vLyBzaWRlXG5tYXQtc2lkZW5hdiB7XG4gIG1pbi13aWR0aDogMjUwcHg7XG59XG5cbi8vIG1haW5cbi5tYWluIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWluLWhlaWdodDogNDUwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIHBhZGRpbmc6IDEwcHggMXJlbSA2NXB4IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59XG5cbi8vIGZvb3RlclxuLmZvb3Rlci1uYXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6ICRuYXYtaW5kZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgYnV0dG9uIHtcbiAgICBmbGV4OiAxO1xuICAgIG1pbi1oZWlnaHQ6IDQ0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcblxuICAgICYuYWN0aXZlIHtcbiAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgY29sb3I6ICMyNDI5MmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWF0LWljb24ge1xuICAgICAgY29sb3I6ICNhYWE7XG4gICAgfVxuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/common/home-page/home-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/common/home-page/home-page.component.ts ***!
  \*********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.8@@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_msg_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/msg.service */ "./src/app/service/msg.service.ts");



var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(msgSrv) {
        this.msgSrv = msgSrv;
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/common/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/common/home-page/home-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_msg_service__WEBPACK_IMPORTED_MODULE_2__["MsgService"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/common/logo/logo.component.ts":
/*!***********************************************!*\
  !*** ./src/app/common/logo/logo.component.ts ***!
  \***********************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.8@@angular/core/fesm5/core.js");


var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
    }
    LogoComponent.prototype.ngOnInit = function () { };
    LogoComponent.prototype.getStyle = function () {
        return {
            'width': (this.size || 32) + "px",
            'height': (this.size || 32) + "px",
            'fill': this.color
        };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], LogoComponent.prototype, "size", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LogoComponent.prototype, "color", void 0);
    LogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logo',
            template: "\n    <div>\n      <img src=\"../../../assets/image/logo.png\">\n    </div>\n  ",
            styles: ["\n    div{\n      display: none;\n      text-align: center;\n    }\n    img {\n      width: 80%;\n      background: #424242;\n      border-radius: 6px;\n    }"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "./src/app/common/sub-page/sub-page.component.html":
/*!*********************************************************!*\
  !*** ./src/app/common/sub-page/sub-page.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- top nav -->\n<mat-toolbar>\n  <mat-toolbar-row>\n    <button mat-button class=\"left-btn\" (click)=\"back()\">\n      <mat-icon>arrow_back</mat-icon>\n    </button>\n    <span>{{subTitle}}</span>\n\n    <button mat-icon-button class=\"right-btn\" [matMenuTriggerFor]=\"appMenu\" [matMenuTriggerData]=\"{btns: menuBtns}\">\n      <mat-icon>more_vert</mat-icon>\n    </button>\n    <mat-menu #appMenu=\"matMenu\">\n      <ng-template matMenuContent let-btns=\"btns\">\n        <button mat-menu-item *ngFor=\"let btn of btns\">{{btn}}</button>\n      </ng-template>\n    </mat-menu>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<section class=\"main\" #scrollWrap>\n  <router-outlet></router-outlet>\n</section>"

/***/ }),

/***/ "./src/app/common/sub-page/sub-page.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/common/sub-page/sub-page.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  padding: 60px 1rem 65px 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb25zb24vd29yay9teS1wcm9qZWN0L2dyYWR1YXRpb24tcHJvamVjdC9Qcm9qZWN0SHViL3Byb2otaHViL3NyYy9hcHAvY29tbW9uL3N1Yi1wYWdlL3N1Yi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsNEJBQTRCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vc3ViLXBhZ2Uvc3ViLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5tYWluIHtcbiAgcGFkZGluZzogNjBweCAxcmVtIDY1cHggMXJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/common/sub-page/sub-page.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/sub-page/sub-page.component.ts ***!
  \*******************************************************/
/*! exports provided: SubPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubPageComponent", function() { return SubPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.8@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@7.2.8@@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/project.service */ "./src/app/service/project.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/_rxjs@6.3.3@rxjs/_esm5/operators/index.js");





var SubPageComponent = /** @class */ (function () {
    function SubPageComponent(router, route, projectSrv, elementRef) {
        this.router = router;
        this.route = route;
        this.projectSrv = projectSrv;
        this.elementRef = elementRef;
        this.menuBtns = [
            'btn1',
            'btn2',
            'btn3'
        ];
    }
    SubPageComponent.prototype.ngOnInit = function () {
        // this.handleScroll();
    };
    SubPageComponent.prototype.ngAfterViewChecked = function () {
        this.handleScroll();
    };
    // 检测
    SubPageComponent.prototype.ngDoCheck = function () {
        var _this = this;
        var routerTitle = this.route.snapshot.firstChild.data.title;
        if (routerTitle) {
            this.subTitle = routerTitle;
        }
        else {
            // 订阅 getTitle()，当进入页面获取到project详情时即可获得title
            this.projectSrv.getTitle().subscribe(function (title) {
                _this.subTitle = title;
            });
        }
    };
    // 返回上一页
    SubPageComponent.prototype.back = function () {
        history.back();
    };
    // 处理滚动
    SubPageComponent.prototype.handleScroll = function () {
        var _this = this;
        this.route.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (val) {
            return val.project_comment_id;
        })).subscribe(function (eleId) {
            var target = _this.elementRef.nativeElement.querySelector("#id-" + eleId);
            if (target) {
                var top_1 = target && target.offsetTop;
                try {
                    _this.scrollContainer.nativeElement.scrollTo({
                        top: top_1 - (window.innerHeight - 142),
                        behavior: "smooth"
                    });
                }
                catch (err) {
                    console.log('err: ', err);
                }
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollWrap'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SubPageComponent.prototype, "scrollContainer", void 0);
    SubPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sub-page',
            template: __webpack_require__(/*! ./sub-page.component.html */ "./src/app/common/sub-page/sub-page.component.html"),
            styles: [__webpack_require__(/*! ../home-page/home-page.component.scss */ "./src/app/common/home-page/home-page.component.scss"), __webpack_require__(/*! ./sub-page.component.scss */ "./src/app/common/sub-page/sub-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_service_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SubPageComponent);
    return SubPageComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mt-2\">\n\n  <mat-card-title class=\"d-flex align-items-center flex-column mb-3 mt-2\">\n    <app-logo [size]=\"40\" class=\"mb-3\"></app-logo>\n    <h2>请先登录</h2>\n  </mat-card-title>\n  <mat-card-subtitle class=\"text-center mb-4\">\n    <p>在ProjectHub轻松实现需求与开发完美对接</p>\n  </mat-card-subtitle>\n\n  <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit(loginForm)\">\n    <mat-card-content>\n      <div class=\"form-item\">\n        <label for=\"name\">邮箱</label>\n        <input type=\"email\" name=\"name\" [(ngModel)]=\"user.email\" required>\n      </div>\n      <div class=\"form-item\">\n        <label for=\"password\">密码</label>\n        <input type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" required>\n      </div>\n    </mat-card-content>\n    <mat-card-actions class=\"d-flex align-items-center justify-content-between\">\n      <a mat-button color=\"primary\" [routerLink]=\"['/sub/register']\" [queryParams]=\"{title: '注册账号'}\">注册账号</a>\n      <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!loginForm.valid\">\n        登录\n      </button>\n    </mat-card-actions>\n  </form>\n\n  <p class=\"copyright\">Copyright © 2019 ProjectHub </p>\n</mat-card>\n<br>\n<button mat-raised-button block color=\"primary\" (click)=\"fakeLogin(1)\">\n  测试用demander1登录\n</button><br>\n<button mat-raised-button block color=\"primary\" (click)=\"fakeLogin(2)\">\n  测试用dev1登录\n</button>"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nform .form-item {\n  display: flex;\n  align-items: center;\n  min-height: 60px; }\nform .form-item label {\n    flex: 0 0 40px; }\nform .form-item input {\n    height: 28px;\n    padding: 6px 10px;\n    font-size: 16px;\n    border-radius: 10px;\n    outline: none;\n    flex: 1;\n    border: 1px solid #ddd;\n    background-color: #fff; }\nform .form-item input::-webkit-input-placeholder {\n      color: #ddd;\n      font-size: 14px; }\nform .form-item input::-ms-input-placeholder {\n      color: #ddd;\n      font-size: 14px; }\nform .form-item input::placeholder {\n      color: #ddd;\n      font-size: 14px; }\nform .form-item input:focus {\n      border-color: #1a73e8; }\n.copyright {\n  text-align: center;\n  font-size: 12px;\n  color: #aaa; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb25zb24vd29yay9teS1wcm9qZWN0L2dyYWR1YXRpb24tcHJvamVjdC9Qcm9qZWN0SHViL3Byb2otaHViL25vZGVfbW9kdWxlcy9fQGFuZ3VsYXJfbWF0ZXJpYWxANy4zLjNAQGFuZ3VsYXIvbWF0ZXJpYWwvX3RoZW1pbmcuc2NzcyIsIi9Vc2Vycy9qb25zb24vd29yay9teS1wcm9qZWN0L2dyYWR1YXRpb24tcHJvamVjdC9Qcm9qZWN0SHViL3Byb2otaHViL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5MUNBLGtDQUFBO0FBZ2hEQSwyQ0FBQTtBQXdDQSxxQkFBQTtBQy80RkE7RUFFSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBO0FBSnBCO0lBT00sY0FBYyxFQUFBO0FBUHBCO0lBV00sWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixPQUFPO0lBQ1Asc0JBQXNCO0lBQ3RCLHNCQUFzQixFQUFBO0FBbEI1QjtNQW9CUSxXQUFXO01BQ1gsZUFBZSxFQUFBO0FBckJ2QjtNQW9CUSxXQUFXO01BQ1gsZUFBZSxFQUFBO0FBckJ2QjtNQW9CUSxXQUFXO01BQ1gsZUFBZSxFQUFBO0FBckJ2QjtNQXdCUSxxQkFBcUIsRUFBQTtBQVE3QjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCBhbGwgdGhlIHRoZW1pbmcgZnVuY3Rpb25hbGl0eS5cbi8vIFdlIGNhbiB1c2UgcmVsYXRpdmUgaW1wb3J0cyBmb3IgaW1wb3J0cyBmcm9tIHRoZSBjZGsgYmVjYXVzZSB3ZSBidW5kbGUgZXZlcnl0aGluZ1xuLy8gdXAgaW50byBhIHNpbmdsZSBmbGF0IHNjc3MgZmlsZSBmb3IgbWF0ZXJpYWwuXG4vLyBXZSB3YW50IG92ZXJsYXlzIHRvIGFsd2F5cyBhcHBlYXIgb3ZlciB1c2VyIGNvbnRlbnQsIHNvIHNldCBhIGJhc2VsaW5lXG4vLyB2ZXJ5IGhpZ2ggei1pbmRleCBmb3IgdGhlIG92ZXJsYXkgY29udGFpbmVyLCB3aGljaCBpcyB3aGVyZSB3ZSBjcmVhdGUgdGhlIG5ld1xuLy8gc3RhY2tpbmcgY29udGV4dCBmb3IgYWxsIG92ZXJsYXlzLlxuJGNkay16LWluZGV4LW92ZXJsYXktY29udGFpbmVyOiAxMDAwO1xuJGNkay16LWluZGV4LW92ZXJsYXk6IDEwMDA7XG4kY2RrLXotaW5kZXgtb3ZlcmxheS1iYWNrZHJvcDogMTAwMDtcblxuLy8gQmFja2dyb3VuZCBjb2xvciBmb3IgYWxsIG9mIHRoZSBiYWNrZHJvcHNcbiRjZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zMik7XG5cbi8vIERlZmF1bHQgYmFja2Ryb3AgYW5pbWF0aW9uIGlzIGJhc2VkIG9uIHRoZSBNYXRlcmlhbCBEZXNpZ24gc3dpZnQtZWFzZS1vdXQuXG4kYmFja2Ryb3AtYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDBtcyAhZGVmYXVsdDtcbiRiYWNrZHJvcC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSAhZGVmYXVsdDtcblxuXG5AbWl4aW4gY2RrLW92ZXJsYXkoKSB7XG4gIC5jZGstb3ZlcmxheS1jb250YWluZXIsIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gICAgLy8gRGlzYWJsZSBldmVudHMgZnJvbSBiZWluZyBjYXB0dXJlZCBvbiB0aGUgb3ZlcmxheSBjb250YWluZXIuXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAvLyBUaGUgY29udGFpbmVyIHNob3VsZCBiZSB0aGUgc2l6ZSBvZiB0aGUgdmlld3BvcnQuXG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLy8gVGhlIG92ZXJsYXktY29udGFpbmVyIGlzIGFuIGludmlzaWJsZSBlbGVtZW50IHdoaWNoIGNvbnRhaW5zIGFsbCBpbmRpdmlkdWFsIG92ZXJsYXlzLlxuICAuY2RrLW92ZXJsYXktY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXktY29udGFpbmVyO1xuXG4gICAgJjplbXB0eSB7XG4gICAgICAvLyBIaWRlIHRoZSBlbGVtZW50IHdoZW4gaXQgZG9lc24ndCBoYXZlIGFueSBjaGlsZCBub2Rlcy4gVGhpcyBkb2Vzbid0XG4gICAgICAvLyBpbmNsdWRlIG92ZXJsYXlzIHRoYXQgaGF2ZSBiZWVuIGRldGFjaGVkLCByYXRoZXIgdGhhbiBkaXNwb3NlZC5cbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLy8gV2UgdXNlIGFuIGV4dHJhIHdyYXBwZXIgZWxlbWVudCBpbiBvcmRlciB0byB1c2UgbWFrZSB0aGUgb3ZlcmxheSBpdHNlbGYgYSBmbGV4IGl0ZW0uXG4gIC8vIFRoaXMgbWFrZXMgY2VudGVyaW5nIHRoZSBvdmVybGF5IGVhc3kgd2l0aG91dCBydW5uaW5nIGludG8gdGhlIHN1YnBpeGVsIHJlbmRlcmluZ1xuICAvLyBwcm9ibGVtcyB0aWVkIHRvIHVzaW5nIGB0cmFuc2Zvcm1gIGFuZCB3aXRob3V0IGludGVyZmVyaW5nIHdpdGggdGhlIG90aGVyIHBvc2l0aW9uXG4gIC8vIHN0cmF0ZWdpZXMuXG4gIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXk7XG4gIH1cblxuICAvLyBBIHNpbmdsZSBvdmVybGF5IHBhbmUuXG4gIC5jZGstb3ZlcmxheS1wYW5lIHtcbiAgICAvLyBOb3RlOiBpdCdzIGltcG9ydGFudCBmb3IgdGhpcyBvbmUgdG8gc3RhcnQgb2ZmIGBhYnNvbHV0ZWAsXG4gICAgLy8gaW4gb3JkZXIgZm9yIHVzIHRvIGJlIGFibGUgdG8gbWVhc3VyZSBpdCBjb3JyZWN0bHkuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXk7XG5cbiAgICAvLyBGb3IgY29ubmVjdGVkLXBvc2l0aW9uIG92ZXJsYXlzLCB3ZSBzZXQgYGRpc3BsYXk6IGZsZXhgIGluXG4gICAgLy8gb3JkZXIgdG8gZm9yY2UgYG1heC13aWR0aGAgYW5kIGBtYXgtaGVpZ2h0YCB0byB0YWtlIGVmZmVjdC5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmNkay1vdmVybGF5LWJhY2tkcm9wIHtcbiAgICAvLyBUT0RPKGplbGJvdXJuKTogcmV1c2Ugc2lkZW5hdiBmdWxsc2NyZWVuIG1peGluLlxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG5cbiAgICB6LWluZGV4OiAkY2RrLXotaW5kZXgtb3ZlcmxheS1iYWNrZHJvcDtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJGJhY2tkcm9wLWFuaW1hdGlvbi1kdXJhdGlvbiAkYmFja2Ryb3AtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjtcbiAgICBvcGFjaXR5OiAwO1xuXG4gICAgJi5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgICAgIG9wYWNpdHk6IDE7XG5cbiAgICAgIC8vIEluIGhpZ2ggY29udHJhc3QgbW9kZSB0aGUgcmdiYSBiYWNrZ3JvdW5kIHdpbGwgYmVjb21lIHNvbGlkIHNvIHdlIG5lZWQgdG8gZmFsbCBiYWNrXG4gICAgICAvLyB0byBtYWtpbmcgaXQgb3BhcXVlIHVzaW5nIGBvcGFjaXR5YC4gTm90ZSB0aGF0IHdlIGNhbid0IHVzZSB0aGUgYGNkay1oaWdoLWNvbnRyYXN0YFxuICAgICAgLy8gbWl4aW4sIGJlY2F1c2Ugd2UgY2FuJ3Qgbm9ybWFsaXplIHRoZSBpbXBvcnQgcGF0aCB0byB0aGUgX2ExMXkuc2NzcyBib3RoIGZvciB0aGVcbiAgICAgIC8vIHNvdXJjZSBhbmQgd2hlbiB0aGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWQuIFNlZSAjMTA5MDguXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQ6ICRjZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wLWJhY2tncm91bmQ7XG4gIH1cblxuICAuY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3Age1xuICAgIC8vIE5vdGU6IGFzIG9mIEZpcmVmb3ggNTcsIGhhdmluZyB0aGUgYmFja2Ryb3AgYmUgYGJhY2tncm91bmQ6IG5vbmVgIHdpbGwgcHJldmVudCBpdCBmcm9tXG4gICAgLy8gY2FwdHVyaW5nIHRoZSB1c2VyJ3MgbW91c2Ugc2Nyb2xsIGV2ZW50cy4gU2luY2Ugd2UgYWxzbyBjYW4ndCB1c2Ugc29tZXRoaW5nIGxpa2VcbiAgICAvLyBgcmdiYSgwLCAwLCAwLCAwKWAsIHdlIHdvcmsgYXJvdW5kIHRoZSBpbmNvbnNpc3RlbmN5IGJ5IG5vdCBzZXR0aW5nIHRoZSBiYWNrZ3JvdW5kIGF0XG4gICAgLy8gYWxsIGFuZCB1c2luZyBgb3BhY2l0eWAgdG8gbWFrZSB0aGUgZWxlbWVudCB0cmFuc3BhcmVudC5cbiAgICAmLCAmLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cblxuICAvLyBPdmVybGF5IHBhcmVudCBlbGVtZW50IHVzZWQgd2l0aCB0aGUgY29ubmVjdGVkIHBvc2l0aW9uIHN0cmF0ZWd5LiBVc2VkIHRvIGNvbnN0cmFpbiB0aGVcbiAgLy8gb3ZlcmxheSBlbGVtZW50J3Mgc2l6ZSB0byBmaXQgd2l0aGluIHRoZSB2aWV3cG9ydC5cbiAgLmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAkY2RrLXotaW5kZXgtb3ZlcmxheTtcblxuICAgIC8vIFdlIHVzZSBgZGlzcGxheTogZmxleGAgb24gdGhpcyBlbGVtZW50IGV4Y2x1c2l2ZWx5IGZvciBjZW50ZXJpbmcgY29ubmVjdGVkIG92ZXJsYXlzLlxuICAgIC8vIFdoZW4gKm5vdCogY2VudGVyaW5nLCBhIHRvcC9sZWZ0L2JvdHRvbS9yaWdodCB3aWxsIGJlIHNldCB3aGljaCBvdmVycmlkZXMgdGhlIG5vcm1hbFxuICAgIC8vIGZsZXggbGF5b3V0LlxuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAvLyBXZSB1c2UgdGhlIGBjb2x1bW5gIGRpcmVjdGlvbiBoZXJlIHRvIGF2b2lkIHNvbWUgZmxleGJveCBpc3N1ZXMgaW4gRWRnZVxuICAgIC8vIHdoZW4gdXNpbmcgdGhlIFwiZ3JvdyBhZnRlciBvcGVuXCIgb3B0aW9ucy5cbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLy8gQWRkIHNvbWUgZGltZW5zaW9ucyBzbyB0aGUgZWxlbWVudCBoYXMgYW4gYGlubmVyVGV4dGAgd2hpY2ggc29tZSBwZW9wbGUgZGVwZW5kIG9uIGluIHRlc3RzLlxuICAgIG1pbi13aWR0aDogMXB4O1xuICAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgfVxuXG4gIC8vIFVzZWQgd2hlbiBkaXNhYmxpbmcgZ2xvYmFsIHNjcm9sbGluZy5cbiAgLmNkay1nbG9iYWwtc2Nyb2xsYmxvY2sge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcblxuICAgIC8vIE5lY2Vzc2FyeSBmb3IgdGhlIGNvbnRlbnQgbm90IHRvIGxvc2UgaXRzIHdpZHRoLiBOb3RlIHRoYXQgd2UncmUgdXNpbmcgMTAwJSwgaW5zdGVhZCBvZlxuICAgIC8vIDEwMHZ3LCBiZWNhdXNlIDEwMHZ3IGluY2x1ZGVzIHRoZSB3aWR0aCBwbHVzIHRoZSBzY3JvbGxiYXIsIHdoZXJlYXMgMTAwJSBpcyB0aGUgd2lkdGhcbiAgICAvLyB0aGF0IHRoZSBlbGVtZW50IGhhZCBiZWZvcmUgd2UgbWFkZSBpdCBgZml4ZWRgLlxuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLy8gTm90ZTogdGhpcyB3aWxsIGFsd2F5cyBhZGQgYSBzY3JvbGxiYXIgdG8gd2hhdGV2ZXIgZWxlbWVudCBpdCBpcyBvbiwgd2hpY2ggY2FuXG4gICAgLy8gcG90ZW50aWFsbHkgcmVzdWx0IGluIGRvdWJsZSBzY3JvbGxiYXJzLiBJdCBzaG91bGRuJ3QgYmUgYW4gaXNzdWUsIGJlY2F1c2Ugd2Ugd29uJ3RcbiAgICAvLyBibG9jayBzY3JvbGxpbmcgb24gYSBwYWdlIHRoYXQgZG9lc24ndCBoYXZlIGEgc2Nyb2xsYmFyIGluIHRoZSBmaXJzdCBwbGFjZS5cbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIH1cbn1cblxuQG1peGluIGNkay1hMTF5IHtcbiAgLmNkay12aXN1YWxseS1oaWRkZW4ge1xuICAgIGJvcmRlcjogMDtcbiAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICAgIGhlaWdodDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxcHg7XG5cbiAgICAvLyBBdm9pZCBicm93c2VycyByZW5kZXJpbmcgdGhlIGZvY3VzIHJpbmcgaW4gc29tZSBjYXNlcy5cbiAgICBvdXRsaW5lOiAwO1xuXG4gICAgLy8gQXZvaWQgc29tZSBjYXNlcyB3aGVyZSB0aGUgYnJvd3NlciB3aWxsIHN0aWxsIHJlbmRlciB0aGUgbmF0aXZlIGNvbnRyb2xzIChzZWUgIzkwNDkpLlxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIH1cbn1cblxuLy8gQXBwbGllcyBzdHlsZXMgZm9yIHVzZXJzIGluIGhpZ2ggY29udHJhc3QgbW9kZS4gTm90ZSB0aGF0IHRoaXMgb25seSBhcHBsaWVzXG4vLyB0byBNaWNyb3NvZnQgYnJvd3NlcnMuIENocm9tZSBjYW4gYmUgaW5jbHVkZWQgYnkgY2hlY2tpbmcgZm9yIHRoZSBgaHRtbFtoY11gXG4vLyBhdHRyaWJ1dGUsIGhvd2V2ZXIgQ2hyb21lIGhhbmRsZXMgaGlnaCBjb250cmFzdCBkaWZmZXJlbnRseS5cbi8vXG4vLyBAcGFyYW0gdGFyZ2V0IFdoaWNoIGtpbmQgb2YgaGlnaCBjb250cmFzdCBzZXR0aW5nIHRvIHRhcmdldC4gRGVmYXVsdHMgdG8gYGFjdGl2ZWAsIGNhbiBiZVxuLy8gICAgYHdoaXRlLW9uLWJsYWNrYCBvciBgYmxhY2stb24td2hpdGVgLlxuQG1peGluIGNkay1oaWdoLWNvbnRyYXN0KCR0YXJnZXQ6IGFjdGl2ZSkge1xuICBAbWVkaWEgKC1tcy1oaWdoLWNvbnRyYXN0OiAkdGFyZ2V0KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gQ29yZSBzdHlsZXMgdGhhdCBlbmFibGUgbW9uaXRvcmluZyBhdXRvZmlsbCBzdGF0ZSBvZiB0ZXh0IGZpZWxkcy5cbkBtaXhpbiBjZGstdGV4dC1maWVsZCB7XG4gIC8vIEtleWZyYW1lcyB0aGF0IGFwcGx5IG5vIHN0eWxlcywgYnV0IGFsbG93IHVzIHRvIG1vbml0b3Igd2hlbiBhbiB0ZXh0IGZpZWxkIGJlY29tZXMgYXV0b2ZpbGxlZFxuICAvLyBieSB3YXRjaGluZyBmb3IgdGhlIGFuaW1hdGlvbiBldmVudHMgdGhhdCBhcmUgZmlyZWQgd2hlbiB0aGV5IHN0YXJ0LiBOb3RlOiB0aGUgLyohKi8gY29tbWVudCBpc1xuICAvLyBuZWVkZWQgdG8gcHJldmVudCBMaWJTYXNzIGZyb20gc3RyaXBwaW5nIHRoZSBrZXlmcmFtZXMgb3V0LlxuICAvLyBCYXNlZCBvbjogaHR0cHM6Ly9tZWRpdW0uY29tL0BicnVubi9kZXRlY3RpbmctYXV0b2ZpbGxlZC1maWVsZHMtaW4tamF2YXNjcmlwdC1hZWQ1OThkMjVkYTdcbiAgQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCB7LyohKi99XG4gIEBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kIHsvKiEqL31cblxuICAuY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOi13ZWJraXQtYXV0b2ZpbGwge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydDtcbiAgfVxuXG4gIC5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6bm90KDotd2Via2l0LWF1dG9maWxsKSB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWVuZDtcbiAgfVxuXG4gIC8vIFJlbW92ZSB0aGUgcmVzaXplIGhhbmRsZSBvbiBhdXRvc2l6aW5nIHRleHRhcmVhcywgYmVjYXVzZSB3aGF0ZXZlciBoZWlnaHRcbiAgLy8gdGhlIHVzZXIgcmVzaXplZCB0byB3aWxsIGJlIG92ZXJ3cml0dGVuIG9uY2UgdGhleSBzdGFydCB0eXBpbmcgYWdhaW4uXG4gIHRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZSB7XG4gICAgcmVzaXplOiBub25lO1xuICB9XG5cbiAgLy8gVGhpcyBjbGFzcyBpcyB0ZW1wb3JhcmlseSBhcHBsaWVkIHRvIHRoZSB0ZXh0YXJlYSB3aGVuIGl0IGlzIGJlaW5nIG1lYXN1cmVkLiBJdCBpcyBpbW1lZGlhdGVseVxuICAvLyByZW1vdmVkIHdoZW4gbWVhc3VyaW5nIGlzIGNvbXBsZXRlLiBXZSB1c2UgYCFpbXBvcnRhbnRgIHJ1bGVzIGhlcmUgdG8gbWFrZSBzdXJlIHVzZXItc3BlY2lmaWVkXG4gIC8vIHJ1bGVzIGRvIG5vdCBpbnRlcmZlcmUgd2l0aCB0aGUgbWVhc3VyZW1lbnQuXG4gIHRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmcge1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICAvLyBIYXZpbmcgMnB4IHRvcCBhbmQgYm90dG9tIHBhZGRpbmcgc2VlbXMgdG8gZml4IGEgYnVnIHdoZXJlIENocm9tZSBnZXRzIGFuIGluY29ycmVjdFxuICAgIC8vIG1lYXN1cmVtZW50LiBXZSBqdXN0IGhhdmUgdG8gYWNjb3VudCBmb3IgaXQgbGF0ZXIgYW5kIHN1YnRyYWN0IGl0IG9mZiB0aGUgZmluYWwgcmVzdWx0LlxuICAgIHBhZGRpbmc6IDJweCAwICFpbXBvcnRhbnQ7XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcbiAgfVxufVxuXG4vLyBVc2VkIHRvIGdlbmVyYXRlIFVJRHMgZm9yIGtleWZyYW1lcyB1c2VkIHRvIGNoYW5nZSB0aGUgdGV4dCBmaWVsZCBhdXRvZmlsbCBzdHlsZXMuXG4kY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnQ6IDA7XG5cbi8vIE1peGluIHVzZWQgdG8gYXBwbHkgY3VzdG9tIGJhY2tncm91bmQgYW5kIGZvcmVncm91bmQgY29sb3JzIHRvIGFuIGF1dG9maWxsZWQgdGV4dCBmaWVsZC5cbi8vIEJhc2VkIG9uOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNzgxNTQ5L1xuLy8gcmVtb3ZpbmctaW5wdXQtYmFja2dyb3VuZC1jb2xvdXItZm9yLWNocm9tZS1hdXRvY29tcGxldGUjYW5zd2VyLTM3NDMyMjYwXG5AbWl4aW4gY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3IoJGJhY2tncm91bmQsICRmb3JlZ3JvdW5kOicnKSB7XG4gIEBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItI3skY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnR9IHtcbiAgICB0byB7XG4gICAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbiAgICAgIEBpZiAkZm9yZWdyb3VuZCAhPSAnJyB7IGNvbG9yOiAkZm9yZWdyb3VuZDsgfVxuICAgIH1cbiAgfVxuXG4gICY6LXdlYmtpdC1hdXRvZmlsbCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLSN7JGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50fTtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICB9XG5cbiAgJi5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6LXdlYmtpdC1hdXRvZmlsbCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci0jeyRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudH07XG4gIH1cblxuICAkY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnQ6XG4gICAgICAkY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnQgKyAxICFnbG9iYWw7XG59XG5cblxuLy8gQ29yZSBzdHlsZXMgdGhhdCBjYW4gYmUgdXNlZCB0byBhcHBseSBtYXRlcmlhbCBkZXNpZ24gdHJlYXRtZW50cyB0byBhbnkgZWxlbWVudC5cbi8vIE1lZGlhIHF1ZXJpZXNcbi8vIFRPRE8oam9zZXBocGVycm90dCk6IENoYW5nZSAkbWF0LXhzbWFsbCBhbmQgJG1hdC1zbWFsbCB1c2FnZXMgdG8gcmVseSBvbiBCcmVha3BvaW50T2JzZXJ2ZXIsXG4kbWF0LXhzbWFsbDogJ21heC13aWR0aDogNTk5cHgnO1xuJG1hdC1zbWFsbDogJ21heC13aWR0aDogOTU5cHgnO1xuXG4vLyBUT0RPOiBSZXZpc2l0IGFsbCB6LWluZGljZXMgYmVmb3JlIGJldGFcbi8vIHotaW5kZXggbWFzdGVyIGxpc3RcblxuJHotaW5kZXgtZmFiOiAyMCAhZGVmYXVsdDtcbiR6LWluZGV4LWRyYXdlcjogMTAwICFkZWZhdWx0O1xuXG4vLyBHbG9iYWwgY29uc3RhbnRzXG4kcGk6IDMuMTQxNTkyNjU7XG5cbi8vIFBhZGRpbmcgYmV0d2VlbiBpbnB1dCB0b2dnbGVzIGFuZCB0aGVpciBsYWJlbHNcbiRtYXQtdG9nZ2xlLXBhZGRpbmc6IDhweCAhZGVmYXVsdDtcbi8vIFdpZHRoIGFuZCBoZWlnaHQgb2YgaW5wdXQgdG9nZ2xlc1xuJG1hdC10b2dnbGUtc2l6ZTogMjBweCAhZGVmYXVsdDtcblxuLy8gRWFzaW5nIEN1cnZlc1xuLy8gVE9ETyhqZWxib3Vybik6IGFsbCBvZiB0aGVzZSBuZWVkIHRvIGJlIHJldmlzaXRlZFxuXG4vLyBUaGUgZGVmYXVsdCBhbmltYXRpb24gY3VydmVzIHVzZWQgYnkgbWF0ZXJpYWwgZGVzaWduLlxuJG1hdC1saW5lYXItb3V0LXNsb3ctaW4tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAwLjEpICFkZWZhdWx0O1xuJG1hdC1mYXN0LW91dC1zbG93LWluLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAhZGVmYXVsdDtcbiRtYXQtZmFzdC1vdXQtbGluZWFyLWluLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSkgIWRlZmF1bHQ7XG5cbiRlYXNlLWluLW91dC1jdXJ2ZS1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMjUsIDEpICFkZWZhdWx0O1xuXG4kc3dpZnQtZWFzZS1vdXQtZHVyYXRpb246IDQwMG1zICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSkgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1vdXQ6IGFsbCAkc3dpZnQtZWFzZS1vdXQtZHVyYXRpb24gJHN3aWZ0LWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbiAhZGVmYXVsdDtcblxuJHN3aWZ0LWVhc2UtaW4tZHVyYXRpb246IDMwMG1zICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW4tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC41NSwgMC4yKSAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLWluOiBhbGwgJHN3aWZ0LWVhc2UtaW4tZHVyYXRpb24gJHN3aWZ0LWVhc2UtaW4tdGltaW5nLWZ1bmN0aW9uICFkZWZhdWx0O1xuXG4kc3dpZnQtZWFzZS1pbi1vdXQtZHVyYXRpb246IDUwMG1zICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW4tb3V0LXRpbWluZy1mdW5jdGlvbjogJGVhc2UtaW4tb3V0LWN1cnZlLWZ1bmN0aW9uICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW4tb3V0OiBhbGwgJHN3aWZ0LWVhc2UtaW4tb3V0LWR1cmF0aW9uICRzd2lmdC1lYXNlLWluLW91dC10aW1pbmctZnVuY3Rpb24gIWRlZmF1bHQ7XG5cbiRzd2lmdC1saW5lYXItZHVyYXRpb246IDgwbXMgIWRlZmF1bHQ7XG4kc3dpZnQtbGluZWFyLXRpbWluZy1mdW5jdGlvbjogbGluZWFyICFkZWZhdWx0O1xuJHN3aWZ0LWxpbmVhcjogYWxsICRzd2lmdC1saW5lYXItZHVyYXRpb24gJHN3aWZ0LWxpbmVhci10aW1pbmctZnVuY3Rpb24gIWRlZmF1bHQ7XG5cblxuXG4vLyBBIGNvbGxlY3Rpb24gb2YgbWl4aW5zIGFuZCBDU1MgY2xhc3NlcyB0aGF0IGNhbiBiZSB1c2VkIHRvIGFwcGx5IGVsZXZhdGlvbiB0byBhIG1hdGVyaWFsXG4vLyBlbGVtZW50LlxuLy8gU2VlOiBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9lbnZpcm9ubWVudC9lbGV2YXRpb24uaHRtbFxuLy8gRXhhbXBsZXM6XG4vL1xuLy9cbi8vIC5tYXQtZm9vIHtcbi8vICAgQGluY2x1ZGUgJG1hdC1lbGV2YXRpb24oMik7XG4vL1xuLy8gICAmOmFjdGl2ZSB7XG4vLyAgICAgQGluY2x1ZGUgJG1hdC1lbGV2YXRpb24oOCk7XG4vLyAgIH1cbi8vIH1cbi8vXG4vLyA8ZGl2IGlkPVwiZXh0ZXJuYWwtY2FyZFwiIGNsYXNzPVwibWF0LWVsZXZhdGlvbi16MlwiPjxwPlNvbWUgY29udGVudDwvcD48L2Rpdj5cbi8vXG4vLyBGb3IgYW4gZXhwbGFuYXRpb24gb2YgdGhlIGRlc2lnbiBiZWhpbmQgaG93IGVsZXZhdGlvbiBpcyBpbXBsZW1lbnRlZCwgc2VlIHRoZSBkZXNpZ24gZG9jIGF0XG4vLyBodHRwczovL2dvby5nbC9LcTBrOVouXG5cbi8vIENvbG9ycyBmb3IgdW1icmEsIHBlbnVtYnJhLCBhbmQgYW1iaWVudCBzaGFkb3dzLiBBcyBkZXNjcmliZWQgaW4gdGhlIGRlc2lnbiBkb2MsIGVhY2ggZWxldmF0aW9uXG4vLyBsZXZlbCBpcyBjcmVhdGVkIHVzaW5nIGEgc2V0IG9mIDMgc2hhZG93IHZhbHVlcywgb25lIGZvciB1bWJyYSAodGhlIHNoYWRvdyByZXByZXNlbnRpbmcgdGhlXG4vLyBzcGFjZSBjb21wbGV0ZWx5IG9ic2N1cmVkIGJ5IGFuIG9iamVjdCByZWxhdGl2ZSB0byBpdHMgbGlnaHQgc291cmNlKSwgb25lIGZvciBwZW51bWJyYSAodGhlXG4vLyBzcGFjZSBwYXJ0aWFsbHkgb2JzY3VyZWQgYnkgYW4gb2JqZWN0KSwgYW5kIG9uZSBmb3IgYW1iaWVudCAodGhlIHNwYWNlIHdoaWNoIGNvbnRhaW5zIHRoZSBvYmplY3Rcbi8vIGl0c2VsZikuIEZvciBhIGZ1cnRoZXIgZXhwbGFuYXRpb24gb2YgdGhlc2UgdGVybXMgYW5kIHRoZWlyIG1lYW5pbmdzLCBzZWVcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VtYnJhLF9wZW51bWJyYV9hbmRfYW50dW1icmEuXG5cbi8vIE1hcHMgZm9yIHRoZSBkaWZmZXJlbnQgc2hhZG93IHNldHMgYW5kIHRoZWlyIHZhbHVlcyB3aXRoaW4gZWFjaCB6LXNwYWNlLiBUaGVzZSB2YWx1ZXMgd2VyZVxuLy8gY3JlYXRlZCBieSB0YWtpbmcgYSBmZXcgcmVmZXJlbmNlIHNoYWRvdyBzZXRzIGNyZWF0ZWQgYnkgR29vZ2xlJ3MgRGVzaWduZXJzIGFuZCBpbnRlcnBvbGF0aW5nXG4vLyBhbGwgb2YgdGhlIHZhbHVlcyBiZXR3ZWVuIHRoZW0uXG5cbkBmdW5jdGlvbiBfZ2V0LXVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKHR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvciwgcmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMnB4IDFweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI6ICcwcHggM3B4IDFweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDM6ICcwcHggM3B4IDNweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggMnB4IDRweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDU6ICcwcHggM3B4IDVweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggM3B4IDVweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggNHB4IDVweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggNXB4IDVweCAtM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggNXB4IDZweCAtM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDZweCA2cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMTogJzBweCA2cHggN3B4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggN3B4IDhweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDdweCA4cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNDogJzBweCA3cHggOXB4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggOHB4IDlweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDhweCAxMHB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTc6ICcwcHggOHB4IDExcHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxODogJzBweCA5cHggMTFweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDlweCAxMnB4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjA6ICcwcHggMTBweCAxM3B4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggMTBweCAxM3B4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjI6ICcwcHggMTBweCAxNHB4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjM6ICcwcHggMTFweCAxNHB4IC03cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggMTFweCAxNXB4IC03cHggI3skc2hhZG93LWNvbG9yfSdcbiAgKTtcbn1cblxuQGZ1bmN0aW9uIF9nZXQtcGVudW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYodHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMXB4IDFweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAycHggMnB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDNweCA0cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggNHB4IDVweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNTogJzBweCA1cHggOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDZweCAxMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDdweCAxMHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDhweCAxMHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDlweCAxMnB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCAxMHB4IDE0cHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDExOiAnMHB4IDExcHggMTVweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggMTJweCAxN3B4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCAxM3B4IDE5cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE0OiAnMHB4IDE0cHggMjFweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggMTVweCAyMnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCAxNnB4IDI0cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDE3cHggMjZweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggMThweCAyOHB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCAxOXB4IDI5cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDIwcHggMzFweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggMjFweCAzM3B4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMjogJzBweCAyMnB4IDM1cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDIzcHggMzZweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggMjRweCAzOHB4IDNweCAjeyRzaGFkb3ctY29sb3J9J1xuICApO1xufVxuXG5AZnVuY3Rpb24gX2dldC1hbWJpZW50LW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKHR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvciwgcmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMiksICRjb2xvcik7XG5cbiAgQHJldHVybiAoXG4gICAgMDogJzBweCAwcHggMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOiAnMHB4IDFweCAzcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI6ICcwcHggMXB4IDVweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMzogJzBweCAxcHggOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA0OiAnMHB4IDFweCAxMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA1OiAnMHB4IDFweCAxNHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDFweCAxOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDJweCAxNnB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDNweCAxNHB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDNweCAxNnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCA0cHggMThweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTE6ICcwcHggNHB4IDIwcHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEyOiAnMHB4IDVweCAyMnB4IDRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCA1cHggMjRweCA0cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTQ6ICcwcHggNXB4IDI2cHggNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE1OiAnMHB4IDZweCAyOHB4IDVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCA2cHggMzBweCA1cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTc6ICcwcHggNnB4IDMycHggNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE4OiAnMHB4IDdweCAzNHB4IDZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCA3cHggMzZweCA2cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjA6ICcwcHggOHB4IDM4cHggN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIxOiAnMHB4IDhweCA0MHB4IDdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMjogJzBweCA4cHggNDJweCA3cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjM6ICcwcHggOXB4IDQ0cHggOHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI0OiAnMHB4IDlweCA0NnB4IDhweCAjeyRzaGFkb3ctY29sb3J9J1xuICApO1xufVxuXG4vLyBUaGUgZGVmYXVsdCBkdXJhdGlvbiB2YWx1ZSBmb3IgZWxldmF0aW9uIHRyYW5zaXRpb25zLlxuJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1kdXJhdGlvbjogMjgwbXMgIWRlZmF1bHQ7XG5cbi8vIFRoZSBkZWZhdWx0IGVhc2luZyB2YWx1ZSBmb3IgZWxldmF0aW9uIHRyYW5zaXRpb25zLlxuJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ICRtYXQtZmFzdC1vdXQtc2xvdy1pbi10aW1pbmctZnVuY3Rpb247XG5cbi8vIFRoZSBkZWZhdWx0IGNvbG9yIGZvciBlbGV2YXRpb24gc2hhZG93cy5cbiRtYXQtZWxldmF0aW9uLWNvbG9yOiBibGFjayAhZGVmYXVsdDtcblxuLy8gVGhlIGRlZmF1bHQgb3BhY2l0eSBzY2FsaW5nIHZhbHVlIGZvciBlbGV2YXRpb24gc2hhZG93cy5cbiRtYXQtZWxldmF0aW9uLW9wYWNpdHk6IDEgIWRlZmF1bHQ7XG5cbi8vIFByZWZpeCBmb3IgZWxldmF0aW9uLXJlbGF0ZWQgc2VsZWN0b3JzLlxuJF9tYXQtZWxldmF0aW9uLXByZWZpeDogJ21hdC1lbGV2YXRpb24teic7XG5cbi8vIEFwcGxpZXMgdGhlIGNvcnJlY3QgY3NzIHJ1bGVzIHRvIGFuIGVsZW1lbnQgdG8gZ2l2ZSBpdCB0aGUgZWxldmF0aW9uIHNwZWNpZmllZCBieSAkelZhbHVlLlxuLy8gVGhlICR6VmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDI0LlxuQG1peGluIG1hdC1lbGV2YXRpb24oJHpWYWx1ZSwgJGNvbG9yOiAkbWF0LWVsZXZhdGlvbi1jb2xvciwgJG9wYWNpdHk6ICRtYXQtZWxldmF0aW9uLW9wYWNpdHkpIHtcbiAgQGlmIHR5cGUtb2YoJHpWYWx1ZSkgIT0gbnVtYmVyIG9yIG5vdCB1bml0bGVzcygkelZhbHVlKSB7XG4gICAgQGVycm9yICckelZhbHVlIG11c3QgYmUgYSB1bml0bGVzcyBudW1iZXInO1xuICB9XG4gIEBpZiAkelZhbHVlIDwgMCBvciAkelZhbHVlID4gMjQge1xuICAgIEBlcnJvciAnJHpWYWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMjQnO1xuICB9XG5cbiAgYm94LXNoYWRvdzogI3ttYXAtZ2V0KF9nZXQtdW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX0sXG4gICAgICAgICAgICAgICN7bWFwLWdldChfZ2V0LXBlbnVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSwgJHpWYWx1ZSl9LFxuICAgICAgICAgICAgICAje21hcC1nZXQoX2dldC1hbWJpZW50LW1hcCgkY29sb3IsICRvcGFjaXR5KSwgJHpWYWx1ZSl9O1xufVxuXG5AbWl4aW4gX21hdC10aGVtZS1lbGV2YXRpb24oJHpWYWx1ZSwgJHRoZW1lLCAkb3BhY2l0eTogJG1hdC1lbGV2YXRpb24tb3BhY2l0eSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkZWxldmF0aW9uLWNvbG9yOiBtYXAtZ2V0KCRmb3JlZ3JvdW5kLCBlbGV2YXRpb24pO1xuICAkZWxldmF0aW9uLWNvbG9yLW9yLWRlZmF1bHQ6IGlmKCRlbGV2YXRpb24tY29sb3IgPT0gbnVsbCwgJG1hdC1lbGV2YXRpb24tY29sb3IsICRlbGV2YXRpb24tY29sb3IpO1xuXG4gIEBpbmNsdWRlIG1hdC1lbGV2YXRpb24oJHpWYWx1ZSwgJGVsZXZhdGlvbi1jb2xvci1vci1kZWZhdWx0LCAkb3BhY2l0eSk7XG59XG5cbi8vIEFwcGxpZXMgdGhlIGVsZXZhdGlvbiB0byBhbiBlbGVtZW50IGluIGEgbWFubmVyIHRoYXQgYWxsb3dzXG4vLyBjb25zdW1lcnMgdG8gb3ZlcnJpZGUgaXQgdmlhIHRoZSBNYXRlcmlhbCBlbGV2YXRpb24gY2xhc3Nlcy5cbkBtaXhpbiBtYXQtb3ZlcnJpZGFibGUtZWxldmF0aW9uKFxuICAgICR6VmFsdWUsXG4gICAgJGNvbG9yOiAkbWF0LWVsZXZhdGlvbi1jb2xvcixcbiAgICAkb3BhY2l0eTogJG1hdC1lbGV2YXRpb24tb3BhY2l0eSkge1xuICAmOm5vdChbY2xhc3MqPScjeyRfbWF0LWVsZXZhdGlvbi1wcmVmaXh9J10pIHtcbiAgICBAaW5jbHVkZSBtYXQtZWxldmF0aW9uKCR6VmFsdWUsICRjb2xvciwgJG9wYWNpdHkpO1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigkelZhbHVlLCAkdGhlbWUsICRvcGFjaXR5OiAkbWF0LWVsZXZhdGlvbi1vcGFjaXR5KSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRlbGV2YXRpb24tY29sb3I6IG1hcC1nZXQoJGZvcmVncm91bmQsIGVsZXZhdGlvbik7XG4gICRlbGV2YXRpb24tY29sb3Itb3ItZGVmYXVsdDogaWYoJGVsZXZhdGlvbi1jb2xvciA9PSBudWxsLCAkbWF0LWVsZXZhdGlvbi1jb2xvciwgJGVsZXZhdGlvbi1jb2xvcik7XG5cbiAgQGluY2x1ZGUgbWF0LW92ZXJyaWRhYmxlLWVsZXZhdGlvbigkelZhbHVlLCAkZWxldmF0aW9uLWNvbG9yLW9yLWRlZmF1bHQsICRvcGFjaXR5KTtcbn1cblxuLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGNhbiBiZSB1c2VkIGFzIHRoZSB2YWx1ZSBmb3IgYSB0cmFuc2l0aW9uIHByb3BlcnR5IGZvciBlbGV2YXRpb24uXG4vLyBDYWxsaW5nIHRoaXMgZnVuY3Rpb24gZGlyZWN0bHkgaXMgdXNlZnVsIGluIHNpdHVhdGlvbnMgd2hlcmUgYSBjb21wb25lbnQgbmVlZHMgdG8gdHJhbnNpdGlvblxuLy8gbW9yZSB0aGFuIG9uZSBwcm9wZXJ0eS5cbi8vXG4vLyAuZm9vIHtcbi8vICAgdHJhbnNpdGlvbjogbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKCksIG9wYWNpdHkgMTAwbXMgZWFzZTtcbi8vIH1cbkBmdW5jdGlvbiBtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tcHJvcGVydHktdmFsdWUoXG4gICAgJGR1cmF0aW9uOiAkbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLWR1cmF0aW9uLFxuICAgICRlYXNpbmc6ICRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKSB7XG4gIEByZXR1cm4gYm94LXNoYWRvdyAjeyRkdXJhdGlvbn0gI3skZWFzaW5nfTtcbn1cblxuLy8gQXBwbGllcyB0aGUgY29ycmVjdCBjc3MgcnVsZXMgbmVlZGVkIHRvIGhhdmUgYW4gZWxlbWVudCB0cmFuc2l0aW9uIGJldHdlZW4gZWxldmF0aW9ucy5cbi8vIFRoaXMgbWl4aW4gc2hvdWxkIGJlIGFwcGxpZWQgdG8gZWxlbWVudHMgd2hvc2UgZWxldmF0aW9uIHZhbHVlcyB3aWxsIGNoYW5nZSBkZXBlbmRpbmcgb24gdGhlaXJcbi8vIGNvbnRleHQgKGUuZy4gd2hlbiBhY3RpdmUgb3IgZGlzYWJsZWQpLlxuLy9cbi8vIE5PVEUodHJhdmlza2F1Zm1hbik6IEJvdGggdGhpcyBtaXhpbiBhbmQgdGhlIGFib3ZlIGZ1bmN0aW9uIHVzZSBkZWZhdWx0IHBhcmFtZXRlcnMgc28gdGhleSBjYW5cbi8vIGJlIHVzZWQgaW4gdGhlIHNhbWUgd2F5IGJ5IGNsaWVudHMuXG5AbWl4aW4gbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uKFxuICAgICRkdXJhdGlvbjogJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1kdXJhdGlvbixcbiAgICAkZWFzaW5nOiAkbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbikge1xuICB0cmFuc2l0aW9uOiBtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tcHJvcGVydHktdmFsdWUoJGR1cmF0aW9uLCAkZWFzaW5nKTtcbn1cblxuLy8gQ29sb3IgcGFsZXR0ZXMgZnJvbSB0aGUgTWF0ZXJpYWwgRGVzaWduIHNwZWMuXG4vLyBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vY29sb3IvXG4vL1xuLy8gQ29udHJhc3QgY29sb3JzIGFyZSBoYXJkLWNvZGVkIGJlY2F1c2UgaXQgaXMgdG9vIGRpZmZpY3VsdCAocHJvYmFibHkgaW1wb3NzaWJsZSkgdG9cbi8vIGNhbGN1bGF0ZSB0aGVtLiBUaGVzZSBjb250cmFzdCBjb2xvcnMgYXJlIHB1bGxlZCBmcm9tIHRoZSBwdWJsaWMgTWF0ZXJpYWwgRGVzaWduIHNwZWMgc3dhdGNoZXMuXG4vLyBXaGlsZSB0aGUgY29udHJhc3QgY29sb3JzIGluIHRoZSBzcGVjIGFyZSBub3QgcHJlc2NyaXB0aXZlLCB3ZSB1c2UgdGhlbSBmb3IgY29udmVuaWVuY2UuXG5cblxuLy8gQGRlcHJlY2F0ZWQgcmVuYW1lZCB0byAkZGFyay1wcmltYXJ5LXRleHQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kYmxhY2stODctb3BhY2l0eTogcmdiYShibGFjaywgMC44Nyk7XG4vLyBAZGVwcmVjYXRlZCByZW5hbWVkIHRvICRsaWdodC1wcmltYXJ5LXRleHQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kd2hpdGUtODctb3BhY2l0eTogcmdiYSh3aGl0ZSwgMC44Nyk7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGRhcmstW3NlY29uZGFyeS10ZXh0LGRpc2FibGVkLXRleHQsZGl2aWRlcnMsZm9jdXNlZF0gaW5zdGVhZC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiRibGFjay0xMi1vcGFjaXR5OiByZ2JhKGJsYWNrLCAwLjEyKTtcbi8vIEBkZXByZWNhdGVkIHVzZSAkbGlnaHQtW3NlY29uZGFyeS10ZXh0LGRpc2FibGVkLXRleHQsZGl2aWRlcnMsZm9jdXNlZF0gaW5zdGVhZC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiR3aGl0ZS0xMi1vcGFjaXR5OiByZ2JhKHdoaXRlLCAwLjEyKTtcbi8vIEBkZXByZWNhdGVkIHVzZSAkZGFyay1bc2Vjb25kYXJ5LXRleHQsZGlzYWJsZWQtdGV4dCxkaXZpZGVycyxmb2N1c2VkXSBpbnN0ZWFkLlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJGJsYWNrLTYtb3BhY2l0eTogcmdiYShibGFjaywgMC4wNik7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGxpZ2h0LVtzZWNvbmRhcnktdGV4dCxkaXNhYmxlZC10ZXh0LGRpdmlkZXJzLGZvY3VzZWRdIGluc3RlYWQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kd2hpdGUtNi1vcGFjaXR5OiByZ2JhKHdoaXRlLCAwLjA2KTtcblxuJGRhcmstcHJpbWFyeS10ZXh0OiByZ2JhKGJsYWNrLCAwLjg3KTtcbiRkYXJrLXNlY29uZGFyeS10ZXh0OiByZ2JhKGJsYWNrLCAwLjU0KTtcbiRkYXJrLWRpc2FibGVkLXRleHQ6IHJnYmEoYmxhY2ssIDAuMzgpO1xuJGRhcmstZGl2aWRlcnM6IHJnYmEoYmxhY2ssIDAuMTIpO1xuJGRhcmstZm9jdXNlZDogcmdiYShibGFjaywgMC4xMik7XG4kbGlnaHQtcHJpbWFyeS10ZXh0OiB3aGl0ZTtcbiRsaWdodC1zZWNvbmRhcnktdGV4dDogcmdiYSh3aGl0ZSwgMC43KTtcbiRsaWdodC1kaXNhYmxlZC10ZXh0OiByZ2JhKHdoaXRlLCAwLjUpO1xuJGxpZ2h0LWRpdmlkZXJzOiByZ2JhKHdoaXRlLCAwLjEyKTtcbiRsaWdodC1mb2N1c2VkOiByZ2JhKHdoaXRlLCAwLjEyKTtcblxuJG1hdC1yZWQ6IChcbiAgNTA6ICNmZmViZWUsXG4gIDEwMDogI2ZmY2RkMixcbiAgMjAwOiAjZWY5YTlhLFxuICAzMDA6ICNlNTczNzMsXG4gIDQwMDogI2VmNTM1MCxcbiAgNTAwOiAjZjQ0MzM2LFxuICA2MDA6ICNlNTM5MzUsXG4gIDcwMDogI2QzMmYyZixcbiAgODAwOiAjYzYyODI4LFxuICA5MDA6ICNiNzFjMWMsXG4gIEExMDA6ICNmZjhhODAsXG4gIEEyMDA6ICNmZjUyNTIsXG4gIEE0MDA6ICNmZjE3NDQsXG4gIEE3MDA6ICNkNTAwMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1waW5rOiAoXG4gIDUwOiAjZmNlNGVjLFxuICAxMDA6ICNmOGJiZDAsXG4gIDIwMDogI2Y0OGZiMSxcbiAgMzAwOiAjZjA2MjkyLFxuICA0MDA6ICNlYzQwN2EsXG4gIDUwMDogI2U5MWU2MyxcbiAgNjAwOiAjZDgxYjYwLFxuICA3MDA6ICNjMjE4NWIsXG4gIDgwMDogI2FkMTQ1NyxcbiAgOTAwOiAjODgwZTRmLFxuICBBMTAwOiAjZmY4MGFiLFxuICBBMjAwOiAjZmY0MDgxLFxuICBBNDAwOiAjZjUwMDU3LFxuICBBNzAwOiAjYzUxMTYyLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtcHVycGxlOiAoXG4gIDUwOiAjZjNlNWY1LFxuICAxMDA6ICNlMWJlZTcsXG4gIDIwMDogI2NlOTNkOCxcbiAgMzAwOiAjYmE2OGM4LFxuICA0MDA6ICNhYjQ3YmMsXG4gIDUwMDogIzljMjdiMCxcbiAgNjAwOiAjOGUyNGFhLFxuICA3MDA6ICM3YjFmYTIsXG4gIDgwMDogIzZhMWI5YSxcbiAgOTAwOiAjNGExNDhjLFxuICBBMTAwOiAjZWE4MGZjLFxuICBBMjAwOiAjZTA0MGZiLFxuICBBNDAwOiAjZDUwMGY5LFxuICBBNzAwOiAjYWEwMGZmLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1kZWVwLXB1cnBsZTogKFxuICA1MDogI2VkZTdmNixcbiAgMTAwOiAjZDFjNGU5LFxuICAyMDA6ICNiMzlkZGIsXG4gIDMwMDogIzk1NzVjZCxcbiAgNDAwOiAjN2U1N2MyLFxuICA1MDA6ICM2NzNhYjcsXG4gIDYwMDogIzVlMzViMSxcbiAgNzAwOiAjNTEyZGE4LFxuICA4MDA6ICM0NTI3YTAsXG4gIDkwMDogIzMxMWI5MixcbiAgQTEwMDogI2IzODhmZixcbiAgQTIwMDogIzdjNGRmZixcbiAgQTQwMDogIzY1MWZmZixcbiAgQTcwMDogIzYyMDBlYSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtaW5kaWdvOiAoXG4gIDUwOiAjZThlYWY2LFxuICAxMDA6ICNjNWNhZTksXG4gIDIwMDogIzlmYThkYSxcbiAgMzAwOiAjNzk4NmNiLFxuICA0MDA6ICM1YzZiYzAsXG4gIDUwMDogIzNmNTFiNSxcbiAgNjAwOiAjMzk0OWFiLFxuICA3MDA6ICMzMDNmOWYsXG4gIDgwMDogIzI4MzU5MyxcbiAgOTAwOiAjMWEyMzdlLFxuICBBMTAwOiAjOGM5ZWZmLFxuICBBMjAwOiAjNTM2ZGZlLFxuICBBNDAwOiAjM2Q1YWZlLFxuICBBNzAwOiAjMzA0ZmZlLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1ibHVlOiAoXG4gIDUwOiAjZTNmMmZkLFxuICAxMDA6ICNiYmRlZmIsXG4gIDIwMDogIzkwY2FmOSxcbiAgMzAwOiAjNjRiNWY2LFxuICA0MDA6ICM0MmE1ZjUsXG4gIDUwMDogIzIxOTZmMyxcbiAgNjAwOiAjMWU4OGU1LFxuICA3MDA6ICMxOTc2ZDIsXG4gIDgwMDogIzE1NjVjMCxcbiAgOTAwOiAjMGQ0N2ExLFxuICBBMTAwOiAjODJiMWZmLFxuICBBMjAwOiAjNDQ4YWZmLFxuICBBNDAwOiAjMjk3OWZmLFxuICBBNzAwOiAjMjk2MmZmLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtbGlnaHQtYmx1ZTogKFxuICA1MDogI2UxZjVmZSxcbiAgMTAwOiAjYjNlNWZjLFxuICAyMDA6ICM4MWQ0ZmEsXG4gIDMwMDogIzRmYzNmNyxcbiAgNDAwOiAjMjliNmY2LFxuICA1MDA6ICMwM2E5ZjQsXG4gIDYwMDogIzAzOWJlNSxcbiAgNzAwOiAjMDI4OGQxLFxuICA4MDA6ICMwMjc3YmQsXG4gIDkwMDogIzAxNTc5YixcbiAgQTEwMDogIzgwZDhmZixcbiAgQTIwMDogIzQwYzRmZixcbiAgQTQwMDogIzAwYjBmZixcbiAgQTcwMDogIzAwOTFlYSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1jeWFuOiAoXG4gIDUwOiAjZTBmN2ZhLFxuICAxMDA6ICNiMmViZjIsXG4gIDIwMDogIzgwZGVlYSxcbiAgMzAwOiAjNGRkMGUxLFxuICA0MDA6ICMyNmM2ZGEsXG4gIDUwMDogIzAwYmNkNCxcbiAgNjAwOiAjMDBhY2MxLFxuICA3MDA6ICMwMDk3YTcsXG4gIDgwMDogIzAwODM4ZixcbiAgOTAwOiAjMDA2MDY0LFxuICBBMTAwOiAjODRmZmZmLFxuICBBMjAwOiAjMThmZmZmLFxuICBBNDAwOiAjMDBlNWZmLFxuICBBNzAwOiAjMDBiOGQ0LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtdGVhbDogKFxuICA1MDogI2UwZjJmMSxcbiAgMTAwOiAjYjJkZmRiLFxuICAyMDA6ICM4MGNiYzQsXG4gIDMwMDogIzRkYjZhYyxcbiAgNDAwOiAjMjZhNjlhLFxuICA1MDA6ICMwMDk2ODgsXG4gIDYwMDogIzAwODk3YixcbiAgNzAwOiAjMDA3OTZiLFxuICA4MDA6ICMwMDY5NWMsXG4gIDkwMDogIzAwNGQ0MCxcbiAgQTEwMDogI2E3ZmZlYixcbiAgQTIwMDogIzY0ZmZkYSxcbiAgQTQwMDogIzFkZTliNixcbiAgQTcwMDogIzAwYmZhNSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWdyZWVuOiAoXG4gIDUwOiAjZThmNWU5LFxuICAxMDA6ICNjOGU2YzksXG4gIDIwMDogI2E1ZDZhNyxcbiAgMzAwOiAjODFjNzg0LFxuICA0MDA6ICM2NmJiNmEsXG4gIDUwMDogIzRjYWY1MCxcbiAgNjAwOiAjNDNhMDQ3LFxuICA3MDA6ICMzODhlM2MsXG4gIDgwMDogIzJlN2QzMixcbiAgOTAwOiAjMWI1ZTIwLFxuICBBMTAwOiAjYjlmNmNhLFxuICBBMjAwOiAjNjlmMGFlLFxuICBBNDAwOiAjMDBlNjc2LFxuICBBNzAwOiAjMDBjODUzLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1saWdodC1ncmVlbjogKFxuICA1MDogI2YxZjhlOSxcbiAgMTAwOiAjZGNlZGM4LFxuICAyMDA6ICNjNWUxYTUsXG4gIDMwMDogI2FlZDU4MSxcbiAgNDAwOiAjOWNjYzY1LFxuICA1MDA6ICM4YmMzNGEsXG4gIDYwMDogIzdjYjM0MixcbiAgNzAwOiAjNjg5ZjM4LFxuICA4MDA6ICM1NThiMmYsXG4gIDkwMDogIzMzNjkxZSxcbiAgQTEwMDogI2NjZmY5MCxcbiAgQTIwMDogI2IyZmY1OSxcbiAgQTQwMDogIzc2ZmYwMyxcbiAgQTcwMDogIzY0ZGQxNyxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1saW1lOiAoXG4gIDUwOiAjZjlmYmU3LFxuICAxMDA6ICNmMGY0YzMsXG4gIDIwMDogI2U2ZWU5YyxcbiAgMzAwOiAjZGNlNzc1LFxuICA0MDA6ICNkNGUxNTcsXG4gIDUwMDogI2NkZGMzOSxcbiAgNjAwOiAjYzBjYTMzLFxuICA3MDA6ICNhZmI0MmIsXG4gIDgwMDogIzllOWQyNCxcbiAgOTAwOiAjODI3NzE3LFxuICBBMTAwOiAjZjRmZjgxLFxuICBBMjAwOiAjZWVmZjQxLFxuICBBNDAwOiAjYzZmZjAwLFxuICBBNzAwOiAjYWVlYTAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC15ZWxsb3c6IChcbiAgNTA6ICNmZmZkZTcsXG4gIDEwMDogI2ZmZjljNCxcbiAgMjAwOiAjZmZmNTlkLFxuICAzMDA6ICNmZmYxNzYsXG4gIDQwMDogI2ZmZWU1OCxcbiAgNTAwOiAjZmZlYjNiLFxuICA2MDA6ICNmZGQ4MzUsXG4gIDcwMDogI2ZiYzAyZCxcbiAgODAwOiAjZjlhODI1LFxuICA5MDA6ICNmNTdmMTcsXG4gIEExMDA6ICNmZmZmOGQsXG4gIEEyMDA6ICNmZmZmMDAsXG4gIEE0MDA6ICNmZmVhMDAsXG4gIEE3MDA6ICNmZmQ2MDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtYW1iZXI6IChcbiAgNTA6ICNmZmY4ZTEsXG4gIDEwMDogI2ZmZWNiMyxcbiAgMjAwOiAjZmZlMDgyLFxuICAzMDA6ICNmZmQ1NGYsXG4gIDQwMDogI2ZmY2EyOCxcbiAgNTAwOiAjZmZjMTA3LFxuICA2MDA6ICNmZmIzMDAsXG4gIDcwMDogI2ZmYTAwMCxcbiAgODAwOiAjZmY4ZjAwLFxuICA5MDA6ICNmZjZmMDAsXG4gIEExMDA6ICNmZmU1N2YsXG4gIEEyMDA6ICNmZmQ3NDAsXG4gIEE0MDA6ICNmZmM0MDAsXG4gIEE3MDA6ICNmZmFiMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtb3JhbmdlOiAoXG4gIDUwOiAjZmZmM2UwLFxuICAxMDA6ICNmZmUwYjIsXG4gIDIwMDogI2ZmY2M4MCxcbiAgMzAwOiAjZmZiNzRkLFxuICA0MDA6ICNmZmE3MjYsXG4gIDUwMDogI2ZmOTgwMCxcbiAgNjAwOiAjZmI4YzAwLFxuICA3MDA6ICNmNTdjMDAsXG4gIDgwMDogI2VmNmMwMCxcbiAgOTAwOiAjZTY1MTAwLFxuICBBMTAwOiAjZmZkMTgwLFxuICBBMjAwOiAjZmZhYjQwLFxuICBBNDAwOiAjZmY5MTAwLFxuICBBNzAwOiAjZmY2ZDAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiBibGFjayxcbiAgKVxuKTtcblxuJG1hdC1kZWVwLW9yYW5nZTogKFxuICA1MDogI2ZiZTllNyxcbiAgMTAwOiAjZmZjY2JjLFxuICAyMDA6ICNmZmFiOTEsXG4gIDMwMDogI2ZmOGE2NSxcbiAgNDAwOiAjZmY3MDQzLFxuICA1MDA6ICNmZjU3MjIsXG4gIDYwMDogI2Y0NTExZSxcbiAgNzAwOiAjZTY0YTE5LFxuICA4MDA6ICNkODQzMTUsXG4gIDkwMDogI2JmMzYwYyxcbiAgQTEwMDogI2ZmOWU4MCxcbiAgQTIwMDogI2ZmNmU0MCxcbiAgQTQwMDogI2ZmM2QwMCxcbiAgQTcwMDogI2RkMmMwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtYnJvd246IChcbiAgNTA6ICNlZmViZTksXG4gIDEwMDogI2Q3Y2NjOCxcbiAgMjAwOiAjYmNhYWE0LFxuICAzMDA6ICNhMTg4N2YsXG4gIDQwMDogIzhkNmU2MyxcbiAgNTAwOiAjNzk1NTQ4LFxuICA2MDA6ICM2ZDRjNDEsXG4gIDcwMDogIzVkNDAzNyxcbiAgODAwOiAjNGUzNDJlLFxuICA5MDA6ICMzZTI3MjMsXG4gIEExMDA6ICNkN2NjYzgsXG4gIEEyMDA6ICNiY2FhYTQsXG4gIEE0MDA6ICM4ZDZlNjMsXG4gIEE3MDA6ICM1ZDQwMzcsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtZ3JleTogKFxuICA1MDogI2ZhZmFmYSxcbiAgMTAwOiAjZjVmNWY1LFxuICAyMDA6ICNlZWVlZWUsXG4gIDMwMDogI2UwZTBlMCxcbiAgNDAwOiAjYmRiZGJkLFxuICA1MDA6ICM5ZTllOWUsXG4gIDYwMDogIzc1NzU3NSxcbiAgNzAwOiAjNjE2MTYxLFxuICA4MDA6ICM0MjQyNDIsXG4gIDkwMDogIzIxMjEyMSxcbiAgQTEwMDogI2ZmZmZmZixcbiAgQTIwMDogI2VlZWVlZSxcbiAgQTQwMDogI2JkYmRiZCxcbiAgQTcwMDogIzYxNjE2MSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4vLyBBbGlhcyBmb3IgYWx0ZXJuYXRlIHNwZWxsaW5nLlxuJG1hdC1ncmF5OiAkbWF0LWdyZXk7XG5cbiRtYXQtYmx1ZS1ncmV5OiAoXG4gIDUwOiAjZWNlZmYxLFxuICAxMDA6ICNjZmQ4ZGMsXG4gIDIwMDogI2IwYmVjNSxcbiAgMzAwOiAjOTBhNGFlLFxuICA0MDA6ICM3ODkwOWMsXG4gIDUwMDogIzYwN2Q4YixcbiAgNjAwOiAjNTQ2ZTdhLFxuICA3MDA6ICM0NTVhNjQsXG4gIDgwMDogIzM3NDc0ZixcbiAgOTAwOiAjMjYzMjM4LFxuICBBMTAwOiAjY2ZkOGRjLFxuICBBMjAwOiAjYjBiZWM1LFxuICBBNDAwOiAjNzg5MDljLFxuICBBNzAwOiAjNDU1YTY0LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbi8vIEFsaWFzIGZvciBhbHRlcm5hdGUgc3BlbGxpbmcuXG4kbWF0LWJsdWUtZ3JheTogJG1hdC1ibHVlLWdyZXk7XG5cblxuLy8gQmFja2dyb3VuZCBwYWxldHRlIGZvciBsaWdodCB0aGVtZXMuXG4kbWF0LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ6IChcbiAgc3RhdHVzLWJhcjogbWFwX2dldCgkbWF0LWdyZXksIDMwMCksXG4gIGFwcC1iYXI6ICAgIG1hcF9nZXQoJG1hdC1ncmV5LCAxMDApLFxuICBiYWNrZ3JvdW5kOiBtYXBfZ2V0KCRtYXQtZ3JleSwgNTApLFxuICBob3ZlcjogICAgICByZ2JhKGJsYWNrLCAwLjA0KSwgLy8gVE9ETyhrYXJhKTogY2hlY2sgc3R5bGUgd2l0aCBNYXRlcmlhbCBEZXNpZ24gVVhcbiAgY2FyZDogICAgICAgd2hpdGUsXG4gIGRpYWxvZzogICAgIHdoaXRlLFxuICBkaXNhYmxlZC1idXR0b246IHJnYmEoYmxhY2ssIDAuMTIpLFxuICByYWlzZWQtYnV0dG9uOiB3aGl0ZSxcbiAgZm9jdXNlZC1idXR0b246ICRkYXJrLWZvY3VzZWQsXG4gIHNlbGVjdGVkLWJ1dHRvbjogbWFwX2dldCgkbWF0LWdyZXksIDMwMCksXG4gIHNlbGVjdGVkLWRpc2FibGVkLWJ1dHRvbjogbWFwX2dldCgkbWF0LWdyZXksIDQwMCksXG4gIGRpc2FibGVkLWJ1dHRvbi10b2dnbGU6IG1hcF9nZXQoJG1hdC1ncmV5LCAyMDApLFxuICB1bnNlbGVjdGVkLWNoaXA6IG1hcF9nZXQoJG1hdC1ncmV5LCAzMDApLFxuICBkaXNhYmxlZC1saXN0LW9wdGlvbjogbWFwX2dldCgkbWF0LWdyZXksIDIwMCksXG4pO1xuXG4vLyBCYWNrZ3JvdW5kIHBhbGV0dGUgZm9yIGRhcmsgdGhlbWVzLlxuJG1hdC1kYXJrLXRoZW1lLWJhY2tncm91bmQ6IChcbiAgc3RhdHVzLWJhcjogYmxhY2ssXG4gIGFwcC1iYXI6ICAgIG1hcF9nZXQoJG1hdC1ncmV5LCA5MDApLFxuICBiYWNrZ3JvdW5kOiAjMzAzMDMwLFxuICBob3ZlcjogICAgICByZ2JhKHdoaXRlLCAwLjA0KSwgLy8gVE9ETyhrYXJhKTogY2hlY2sgc3R5bGUgd2l0aCBNYXRlcmlhbCBEZXNpZ24gVVhcbiAgY2FyZDogICAgICAgbWFwX2dldCgkbWF0LWdyZXksIDgwMCksXG4gIGRpYWxvZzogICAgIG1hcF9nZXQoJG1hdC1ncmV5LCA4MDApLFxuICBkaXNhYmxlZC1idXR0b246IHJnYmEod2hpdGUsIDAuMTIpLFxuICByYWlzZWQtYnV0dG9uOiBtYXAtZ2V0KCRtYXQtZ3JleSwgODAwKSxcbiAgZm9jdXNlZC1idXR0b246ICRsaWdodC1mb2N1c2VkLFxuICBzZWxlY3RlZC1idXR0b246IG1hcF9nZXQoJG1hdC1ncmV5LCA5MDApLFxuICBzZWxlY3RlZC1kaXNhYmxlZC1idXR0b246IG1hcF9nZXQoJG1hdC1ncmV5LCA4MDApLFxuICBkaXNhYmxlZC1idXR0b24tdG9nZ2xlOiBibGFjayxcbiAgdW5zZWxlY3RlZC1jaGlwOiBtYXBfZ2V0KCRtYXQtZ3JleSwgNzAwKSxcbiAgZGlzYWJsZWQtbGlzdC1vcHRpb246IGJsYWNrLFxuKTtcblxuLy8gRm9yZWdyb3VuZCBwYWxldHRlIGZvciBsaWdodCB0aGVtZXMuXG4kbWF0LWxpZ2h0LXRoZW1lLWZvcmVncm91bmQ6IChcbiAgYmFzZTogICAgICAgICAgICAgIGJsYWNrLFxuICBkaXZpZGVyOiAgICAgICAgICAgJGRhcmstZGl2aWRlcnMsXG4gIGRpdmlkZXJzOiAgICAgICAgICAkZGFyay1kaXZpZGVycyxcbiAgZGlzYWJsZWQ6ICAgICAgICAgICRkYXJrLWRpc2FibGVkLXRleHQsXG4gIGRpc2FibGVkLWJ1dHRvbjogICByZ2JhKGJsYWNrLCAwLjI2KSxcbiAgZGlzYWJsZWQtdGV4dDogICAgICRkYXJrLWRpc2FibGVkLXRleHQsXG4gIGVsZXZhdGlvbjogICAgICAgICBibGFjayxcbiAgaGludC10ZXh0OiAgICAgICAgICRkYXJrLWRpc2FibGVkLXRleHQsXG4gIHNlY29uZGFyeS10ZXh0OiAgICAkZGFyay1zZWNvbmRhcnktdGV4dCxcbiAgaWNvbjogICAgICAgICAgICAgIHJnYmEoYmxhY2ssIDAuNTQpLFxuICBpY29uczogICAgICAgICAgICAgcmdiYShibGFjaywgMC41NCksXG4gIHRleHQ6ICAgICAgICAgICAgICByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgc2xpZGVyLW1pbjogICAgICAgIHJnYmEoYmxhY2ssIDAuODcpLFxuICBzbGlkZXItb2ZmOiAgICAgICAgcmdiYShibGFjaywgMC4yNiksXG4gIHNsaWRlci1vZmYtYWN0aXZlOiByZ2JhKGJsYWNrLCAwLjM4KSxcbik7XG5cbi8vIEZvcmVncm91bmQgcGFsZXR0ZSBmb3IgZGFyayB0aGVtZXMuXG4kbWF0LWRhcmstdGhlbWUtZm9yZWdyb3VuZDogKFxuICBiYXNlOiAgICAgICAgICAgICAgd2hpdGUsXG4gIGRpdmlkZXI6ICAgICAgICAgICAkbGlnaHQtZGl2aWRlcnMsXG4gIGRpdmlkZXJzOiAgICAgICAgICAkbGlnaHQtZGl2aWRlcnMsXG4gIGRpc2FibGVkOiAgICAgICAgICAkbGlnaHQtZGlzYWJsZWQtdGV4dCxcbiAgZGlzYWJsZWQtYnV0dG9uOiAgIHJnYmEod2hpdGUsIDAuMyksXG4gIGRpc2FibGVkLXRleHQ6ICAgICAkbGlnaHQtZGlzYWJsZWQtdGV4dCxcbiAgZWxldmF0aW9uOiAgICAgICAgIGJsYWNrLFxuICBoaW50LXRleHQ6ICAgICAgICAgJGxpZ2h0LWRpc2FibGVkLXRleHQsXG4gIHNlY29uZGFyeS10ZXh0OiAgICAkbGlnaHQtc2Vjb25kYXJ5LXRleHQsXG4gIGljb246ICAgICAgICAgICAgICB3aGl0ZSxcbiAgaWNvbnM6ICAgICAgICAgICAgIHdoaXRlLFxuICB0ZXh0OiAgICAgICAgICAgICAgd2hpdGUsXG4gIHNsaWRlci1taW46ICAgICAgICB3aGl0ZSxcbiAgc2xpZGVyLW9mZjogICAgICAgIHJnYmEod2hpdGUsIDAuMyksXG4gIHNsaWRlci1vZmYtYWN0aXZlOiByZ2JhKHdoaXRlLCAwLjMpLFxuKTtcblxuXG5cbi8vIEZvciBhIGdpdmVuIGh1ZSBpbiBhIHBhbGV0dGUsIHJldHVybiB0aGUgY29udHJhc3QgY29sb3IgZnJvbSB0aGUgbWFwIG9mIGNvbnRyYXN0IHBhbGV0dGVzLlxuLy8gQHBhcmFtICRjb2xvci1tYXBcbi8vIEBwYXJhbSAkaHVlXG5AZnVuY3Rpb24gbWF0LWNvbnRyYXN0KCRwYWxldHRlLCAkaHVlKSB7XG4gIEByZXR1cm4gbWFwLWdldChtYXAtZ2V0KCRwYWxldHRlLCBjb250cmFzdCksICRodWUpO1xufVxuXG5cbi8vIENyZWF0ZXMgYSBtYXAgb2YgaHVlcyB0byBjb2xvcnMgZm9yIGEgdGhlbWUuIFRoaXMgaXMgdXNlZCB0byBkZWZpbmUgYSB0aGVtZSBwYWxldHRlIGluIHRlcm1zXG4vLyBvZiB0aGUgTWF0ZXJpYWwgRGVzaWduIGh1ZXMuXG4vLyBAcGFyYW0gJGNvbG9yLW1hcFxuLy8gQHBhcmFtICRwcmltYXJ5XG4vLyBAcGFyYW0gJGxpZ2h0ZXJcbkBmdW5jdGlvbiBtYXQtcGFsZXR0ZSgkYmFzZS1wYWxldHRlLCAkZGVmYXVsdDogNTAwLCAkbGlnaHRlcjogMTAwLCAkZGFya2VyOiA3MDApIHtcbiAgJHJlc3VsdDogbWFwX21lcmdlKCRiYXNlLXBhbGV0dGUsIChcbiAgICBkZWZhdWx0OiBtYXAtZ2V0KCRiYXNlLXBhbGV0dGUsICRkZWZhdWx0KSxcbiAgICBsaWdodGVyOiBtYXAtZ2V0KCRiYXNlLXBhbGV0dGUsICRsaWdodGVyKSxcbiAgICBkYXJrZXI6IG1hcC1nZXQoJGJhc2UtcGFsZXR0ZSwgJGRhcmtlciksXG5cbiAgICBkZWZhdWx0LWNvbnRyYXN0OiBtYXQtY29udHJhc3QoJGJhc2UtcGFsZXR0ZSwgJGRlZmF1bHQpLFxuICAgIGxpZ2h0ZXItY29udHJhc3Q6IG1hdC1jb250cmFzdCgkYmFzZS1wYWxldHRlLCAkbGlnaHRlciksXG4gICAgZGFya2VyLWNvbnRyYXN0OiBtYXQtY29udHJhc3QoJGJhc2UtcGFsZXR0ZSwgJGRhcmtlcilcbiAgKSk7XG5cbiAgLy8gRm9yIGVhY2ggaHVlIGluIHRoZSBwYWxldHRlLCBhZGQgYSBcIi1jb250cmFzdFwiIGNvbG9yIHRvIHRoZSBtYXAuXG4gIEBlYWNoICRodWUsICRjb2xvciBpbiAkYmFzZS1wYWxldHRlIHtcbiAgICAkcmVzdWx0OiBtYXBfbWVyZ2UoJHJlc3VsdCwgKFxuICAgICAgJyN7JGh1ZX0tY29udHJhc3QnOiBtYXQtY29udHJhc3QoJGJhc2UtcGFsZXR0ZSwgJGh1ZSlcbiAgICApKTtcbiAgfVxuXG4gIEByZXR1cm4gJHJlc3VsdDtcbn1cblxuXG4vLyBHZXRzIGEgY29sb3IgZnJvbSBhIHRoZW1lIHBhbGV0dGUgKHRoZSBvdXRwdXQgb2YgbWF0LXBhbGV0dGUpLlxuLy8gVGhlIGh1ZSBjYW4gYmUgb25lIG9mIHRoZSBzdGFuZGFyZCB2YWx1ZXMgKDUwMCwgQTQwMCwgZXRjLiksIG9uZSBvZiB0aGUgdGhyZWUgcHJlY29uZmlndXJlZFxuLy8gaHVlcyAoZGVmYXVsdCwgbGlnaHRlciwgZGFya2VyKSwgb3IgYW55IG9mIHRoZSBhZm9yZW1lbnRpb25lZCBwcmVmaXhlZCB3aXRoIFwiLWNvbnRyYXN0XCIuXG4vL1xuLy8gQHBhcmFtICRjb2xvci1tYXAgVGhlIHRoZW1lIHBhbGV0dGUgKG91dHB1dCBvZiBtYXQtcGFsZXR0ZSkuXG4vLyBAcGFyYW0gJGh1ZSBUaGUgaHVlIGZyb20gdGhlIHBhbGV0dGUgdG8gdXNlLiBJZiB0aGlzIGlzIGEgdmFsdWUgYmV0d2VlbiAwIGFuZCAxLCBpdCB3aWxsXG4vLyAgICAgYmUgdHJlYXRlZCBhcyBvcGFjaXR5LlxuLy8gQHBhcmFtICRvcGFjaXR5IFRoZSBhbHBoYSBjaGFubmVsIHZhbHVlIGZvciB0aGUgY29sb3IuXG5AZnVuY3Rpb24gbWF0LWNvbG9yKCRwYWxldHRlLCAkaHVlOiBkZWZhdWx0LCAkb3BhY2l0eTogbnVsbCkge1xuICAvLyBJZiBodWVLZXkgaXMgYSBudW1iZXIgYmV0d2VlbiB6ZXJvIGFuZCBvbmUsIHRoZW4gaXQgYWN0dWFsbHkgY29udGFpbnMgYW5cbiAgLy8gb3BhY2l0eSB2YWx1ZSwgc28gcmVjYWxsIHRoaXMgZnVuY3Rpb24gd2l0aCB0aGUgZGVmYXVsdCBodWUgYW5kIHRoYXQgZ2l2ZW4gb3BhY2l0eS5cbiAgQGlmIHR5cGUtb2YoJGh1ZSkgPT0gbnVtYmVyIGFuZCAkaHVlID49IDAgYW5kICRodWUgPD0gMSB7XG4gICAgQHJldHVybiBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQsICRodWUpO1xuICB9XG5cbiAgJGNvbG9yOiBtYXAtZ2V0KCRwYWxldHRlLCAkaHVlKTtcblxuICBAaWYgKHR5cGUtb2YoJGNvbG9yKSAhPSBjb2xvcikge1xuICAgIC8vIElmIHRoZSAkY29sb3IgcmVzb2x2ZWQgdG8gc29tZXRoaW5nIGRpZmZlcmVudCBmcm9tIGEgY29sb3IgKGUuZy4gYSBDU1MgdmFyaWFibGUpLFxuICAgIC8vIHdlIGNhbid0IGFwcGx5IHRoZSBvcGFjaXR5IGFueXdheSBzbyB3ZSByZXR1cm4gdGhlIHZhbHVlIGFzIGlzLCBvdGhlcndpc2UgU2FzcyBjYW5cbiAgICAvLyB0aHJvdyBhbiBlcnJvciBvciBvdXRwdXQgc29tZXRoaW5nIGludmFsaWQuXG4gICAgQHJldHVybiAkY29sb3I7XG4gIH1cblxuICBAcmV0dXJuIHJnYmEoJGNvbG9yLCBpZigkb3BhY2l0eSA9PSBudWxsLCBvcGFjaXR5KCRjb2xvciksICRvcGFjaXR5KSk7XG59XG5cblxuLy8gQ3JlYXRlcyBhIGNvbnRhaW5lciBvYmplY3QgZm9yIGEgbGlnaHQgdGhlbWUgdG8gYmUgZ2l2ZW4gdG8gaW5kaXZpZHVhbCBjb21wb25lbnQgdGhlbWUgbWl4aW5zLlxuQGZ1bmN0aW9uIG1hdC1saWdodC10aGVtZSgkcHJpbWFyeSwgJGFjY2VudCwgJHdhcm46IG1hdC1wYWxldHRlKCRtYXQtcmVkKSkge1xuICBAcmV0dXJuIChcbiAgICBwcmltYXJ5OiAkcHJpbWFyeSxcbiAgICBhY2NlbnQ6ICRhY2NlbnQsXG4gICAgd2FybjogJHdhcm4sXG4gICAgaXMtZGFyazogZmFsc2UsXG4gICAgZm9yZWdyb3VuZDogJG1hdC1saWdodC10aGVtZS1mb3JlZ3JvdW5kLFxuICAgIGJhY2tncm91bmQ6ICRtYXQtbGlnaHQtdGhlbWUtYmFja2dyb3VuZCxcbiAgKTtcbn1cblxuXG4vLyBDcmVhdGVzIGEgY29udGFpbmVyIG9iamVjdCBmb3IgYSBkYXJrIHRoZW1lIHRvIGJlIGdpdmVuIHRvIGluZGl2aWR1YWwgY29tcG9uZW50IHRoZW1lIG1peGlucy5cbkBmdW5jdGlvbiBtYXQtZGFyay10aGVtZSgkcHJpbWFyeSwgJGFjY2VudCwgJHdhcm46IG1hdC1wYWxldHRlKCRtYXQtcmVkKSkge1xuICBAcmV0dXJuIChcbiAgICBwcmltYXJ5OiAkcHJpbWFyeSxcbiAgICBhY2NlbnQ6ICRhY2NlbnQsXG4gICAgd2FybjogJHdhcm4sXG4gICAgaXMtZGFyazogdHJ1ZSxcbiAgICBmb3JlZ3JvdW5kOiAkbWF0LWRhcmstdGhlbWUtZm9yZWdyb3VuZCxcbiAgICBiYWNrZ3JvdW5kOiAkbWF0LWRhcmstdGhlbWUtYmFja2dyb3VuZCxcbiAgKTtcbn1cblxuXG5cbiRtYXQtcmlwcGxlLWNvbG9yLW9wYWNpdHk6IDAuMTtcblxuQG1peGluIG1hdC1yaXBwbGUoKSB7XG5cbiAgLy8gVGhlIGhvc3QgZWxlbWVudCBvZiBhbiBtYXQtcmlwcGxlIGRpcmVjdGl2ZSBzaG91bGQgYWx3YXlzIGhhdmUgYSBwb3NpdGlvbiBvZiBcImFic29sdXRlXCIgb3JcbiAgLy8gXCJyZWxhdGl2ZVwiIHNvIHRoYXQgdGhlIHJpcHBsZXMgaW5zaWRlIGFyZSBjb3JyZWN0bHkgcG9zaXRpb25lZCByZWxhdGl2ZWx5IHRvIHRoZSBjb250YWluZXIuXG4gIC5tYXQtcmlwcGxlIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgLy8gQnkgZGVmYXVsdCwgZXZlcnkgcmlwcGxlIGNvbnRhaW5lciBzaG91bGQgaGF2ZSBwb3NpdGlvbjogcmVsYXRpdmUgaW4gZmF2b3Igb2YgY3JlYXRpbmcgYW5cbiAgICAvLyBlYXN5IEFQSSBmb3IgZGV2ZWxvcGVycyB1c2luZyB0aGUgTWF0UmlwcGxlIGRpcmVjdGl2ZS5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAubWF0LXJpcHBsZS5tYXQtcmlwcGxlLXVuYm91bmRlZCB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cblxuICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSwgdHJhbnNmb3JtIDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuXG4gICAgLy8gSW4gaGlnaCBjb250cmFzdCBtb2RlIHRoZSByaXBwbGUgaXMgb3BhcXVlLCBjYXVzaW5nIGl0IHRvIG9ic3RydWN0IHRoZSBjb250ZW50LlxuICAgIEBpbmNsdWRlIGNkay1oaWdoLWNvbnRyYXN0IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbi8qIFRoZW1lIGZvciB0aGUgcmlwcGxlIGVsZW1lbnRzLiovXG5AbWl4aW4gbWF0LXJpcHBsZS10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcF9nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQtYmFzZTogbWFwX2dldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG5cbiAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgLy8gSWYgdGhlIHJpcHBsZSBjb2xvciBpcyByZXNvbHZlcyB0byBhIGNvbG9yICp0eXBlKiwgd2UgY2FuIHVzZSBpdCBkaXJlY3RseSwgb3RoZXJ3aXNlXG4gICAgLy8gKGUuZy4gaXQgcmVzb2x2ZXMgdG8gYSBDU1MgdmFyaWFibGUpIHdlIGZhbGwgYmFjayB0byB1c2luZyB0aGUgY29sb3IgYW5kIHNldHRpbmcgYW4gb3BhY2l0eS5cbiAgICBAaWYgKHR5cGUtb2YoJGZvcmVncm91bmQtYmFzZSkgPT0gY29sb3IpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGZvcmVncm91bmQtYmFzZSwgJG1hdC1yaXBwbGUtY29sb3Itb3BhY2l0eSk7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRmb3JlZ3JvdW5kLWJhc2U7XG4gICAgICBvcGFjaXR5OiAkbWF0LXJpcHBsZS1jb2xvci1vcGFjaXR5O1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gVXRpbGl0eSBmb3IgZmV0Y2hpbmcgYSBuZXN0ZWQgdmFsdWUgZnJvbSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCAkbmFtZSkge1xuICBAcmV0dXJuIG1hcC1nZXQobWFwLWdldCgkY29uZmlnLCAkbGV2ZWwpLCAkbmFtZSk7XG59XG5cbi8vIEdldHMgdGhlIGZvbnQgc2l6ZSBmb3IgYSBsZXZlbCBpbnNpZGUgYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBtYXQtZm9udC1zaXplKCRjb25maWcsICRsZXZlbCkge1xuICBAcmV0dXJuIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBmb250LXNpemUpO1xufVxuXG4vLyBHZXRzIHRoZSBsaW5lIGhlaWdodCBmb3IgYSBsZXZlbCBpbnNpZGUgYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgJGxldmVsKSB7XG4gIEByZXR1cm4gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGxpbmUtaGVpZ2h0KTtcbn1cblxuLy8gR2V0cyB0aGUgZm9udCB3ZWlnaHQgZm9yIGEgbGV2ZWwgaW5zaWRlIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsICRsZXZlbCkge1xuICBAcmV0dXJuIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBmb250LXdlaWdodCk7XG59XG5cbi8vIEdldHMgdGhlIGxldHRlciBzcGFjaW5nIGZvciBhIGxldmVsIGluc2lkZSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIG1hdC1sZXR0ZXItc3BhY2luZygkY29uZmlnLCAkbGV2ZWwpIHtcbiAgQHJldHVybiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgbGV0dGVyLXNwYWNpbmcpO1xufVxuXG4vLyBHZXRzIHRoZSBmb250LWZhbWlseSBmcm9tIGEgdHlwb2dyYXBoeSBjb25maWcgYW5kIHJlbW92ZXMgdGhlIHF1b3RlcyBhcm91bmQgaXQuXG5AZnVuY3Rpb24gbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsICRsZXZlbDogbnVsbCkge1xuICAkZm9udC1mYW1pbHk6IG1hcC1nZXQoJGNvbmZpZywgZm9udC1mYW1pbHkpO1xuXG4gIEBpZiAkbGV2ZWwgIT0gbnVsbCB7XG4gICAgJGZvbnQtZmFtaWx5OiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgZm9udC1mYW1pbHkpO1xuICB9XG5cbiAgLy8gR3VhcmQgYWdhaW5zdCB1bnF1b3Rpbmcgbm9uLXN0cmluZyB2YWx1ZXMsIGJlY2F1c2UgaXQncyBkZXByZWNhdGVkLlxuICBAcmV0dXJuIGlmKHR5cGUtb2YoJGZvbnQtZmFtaWx5KSA9PSBzdHJpbmcsIHVucXVvdGUoJGZvbnQtZmFtaWx5KSwgJGZvbnQtZmFtaWx5KTtcbn1cblxuLy8gT3V0cHV0cyB0aGUgc2hvcnRoYW5kIGBmb250YCBDU1MgcHJvcGVydHksIGJhc2VkIG9uIGEgc2V0IG9mIHR5cG9ncmFwaHkgdmFsdWVzLiBGYWxscyBiYWNrIHRvXG4vLyB0aGUgaW5kaXZpZHVhbCBwcm9wZXJ0aWVzIGlmIGEgdmFsdWUgdGhhdCBpc24ndCBhbGxvd2VkIGluIHRoZSBzaG9ydGhhbmQgaXMgcGFzc2VkIGluLlxuQG1peGluIG1hdC10eXBvZ3JhcGh5LWZvbnQtc2hvcnRoYW5kKCRmb250LXNpemUsICRmb250LXdlaWdodCwgJGxpbmUtaGVpZ2h0LCAkZm9udC1mYW1pbHkpIHtcbiAgLy8gSWYgYW55IG9mIHRoZSB2YWx1ZXMgYXJlIHNldCB0byBgaW5oZXJpdGAsIHdlIGNhbid0IHVzZSB0aGUgc2hvcnRoYW5kXG4gIC8vIHNvIHdlIGZhbGwgYmFjayB0byBwYXNzaW5nIGluIHRoZSBpbmRpdmlkdWFsIHByb3BlcnRpZXMuXG4gIEBpZiAoJGZvbnQtc2l6ZSA9PSBpbmhlcml0IG9yXG4gICAgICAgJGZvbnQtd2VpZ2h0ID09IGluaGVyaXQgb3JcbiAgICAgICAkbGluZS1oZWlnaHQgPT0gaW5oZXJpdCBvclxuICAgICAgICRmb250LWZhbWlseSA9PSBpbmhlcml0IG9yXG4gICAgICAgJGZvbnQtc2l6ZSA9PSBudWxsIG9yXG4gICAgICAgJGZvbnQtd2VpZ2h0ID09IG51bGwgb3JcbiAgICAgICAkbGluZS1oZWlnaHQgPT0gbnVsbCBvclxuICAgICAgICRmb250LWZhbWlseSA9PSBudWxsKSB7XG5cbiAgICBmb250LXNpemU6ICRmb250LXNpemU7XG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbiAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIH1cbiAgQGVsc2Uge1xuICAgIC8vIE90aGVyd2lzZSB1c2UgdGhlIHNob3J0aGFuZCBgZm9udGAsIGJlY2F1c2UgaXQncyB0aGUgbGVhc3QgYW1vdW50IG9mIGJ5dGVzLiBOb3RlXG4gICAgLy8gdGhhdCB3ZSBuZWVkIHRvIHVzZSBpbnRlcnBvbGF0aW9uIGZvciBgZm9udC1zaXplL2xpbmUtaGVpZ2h0YCBpbiBvcmRlciB0byBwcmV2ZW50XG4gICAgLy8gU2FzcyBmcm9tIGRpdmlkaW5nIHRoZSB0d28gdmFsdWVzLlxuICAgIGZvbnQ6ICRmb250LXdlaWdodCAjeyRmb250LXNpemV9LyN7JGxpbmUtaGVpZ2h0fSAkZm9udC1mYW1pbHk7XG4gIH1cbn1cblxuLy8gQ29udmVydHMgYSB0eXBvZ3JhcGh5IGxldmVsIGludG8gQ1NTIHN0eWxlcy5cbkBtaXhpbiBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgJGxldmVsKSB7XG4gICRmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgJGxldmVsKTtcbiAgJGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgJGxldmVsKTtcbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgJGxldmVsKTtcbiAgJGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgJGxldmVsKTtcblxuICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1mb250LXNob3J0aGFuZCgkZm9udC1zaXplLCAkZm9udC13ZWlnaHQsICRsaW5lLWhlaWdodCwgJGZvbnQtZmFtaWx5KTtcbiAgbGV0dGVyLXNwYWNpbmc6IG1hdC1sZXR0ZXItc3BhY2luZygkY29uZmlnLCAkbGV2ZWwpO1xufVxuXG5cbkBtaXhpbiBtYXQtb3B0aW9uLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAubWF0LW9wdGlvbiB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmOmhvdmVyOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCksXG4gICAgJjpmb2N1czpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgIH1cblxuICAgIC8vIEluIG11bHRpcGxlIG1vZGUgdGhlcmUgaXMgYSBjaGVja2JveCB0byBzaG93IHRoYXQgdGhlIG9wdGlvbiBpcyBzZWxlY3RlZC5cbiAgICAmLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgfVxuXG4gICAgJi5tYXQtYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuXG4gICAgJi5tYXQtb3B0aW9uLWRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1wcmltYXJ5IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgfVxuXG4gIC5tYXQtYWNjZW50IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICB9XG5cbiAgLm1hdC13YXJuIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LW9wdGlvbi10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1vcHRpb24ge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBzdWJoZWFkaW5nLTIpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtb3B0Z3JvdXAtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1vcHRncm91cC1sYWJlbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1vcHRncm91cC1kaXNhYmxlZCAubWF0LW9wdGdyb3VwLWxhYmVsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtb3B0Z3JvdXAtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtb3B0Z3JvdXAtbGFiZWwge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTIpO1xuICB9XG59XG5cblxuXG5AbWl4aW4gbWF0LXBzZXVkby1jaGVja2JveC10aGVtZSgkdGhlbWUpIHtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG5cbiAgLy8gTk9URSh0cmF2aXNrYXVmbWFuKTogV2hpbGUgdGhlIHNwZWMgY2FsbHMgZm9yIHRyYW5zbHVjZW50IGJsYWNrcy93aGl0ZXMgZm9yIGRpc2FibGVkIGNvbG9ycyxcbiAgLy8gdGhpcyBkb2VzIG5vdCB3b3JrIHdlbGwgd2l0aCBlbGVtZW50cyBsYXllcmVkIG9uIHRvcCBvZiBvbmUgYW5vdGhlci4gVG8gZ2V0IGFyb3VuZCB0aGlzIHdlXG4gIC8vIGJsZW5kIHRoZSBjb2xvcnMgdG9nZXRoZXIgYmFzZWQgb24gdGhlIGJhc2UgY29sb3IgYW5kIHRoZSB0aGVtZSBiYWNrZ3JvdW5kLlxuICAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrOiAjNjg2ODY4O1xuICAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodDogI2IwYjBiMDtcbiAgJGRpc2FibGVkLWNvbG9yOiBpZigkaXMtZGFyay10aGVtZSwgJHdoaXRlLTMwcGN0LW9wYWNpdHktb24tZGFyaywgJGJsYWNrLTI2cGN0LW9wYWNpdHktb24tbGlnaHQpO1xuICAkY29sb3JlZC1ib3gtc2VsZWN0b3I6ICcubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLCAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlJztcblxuICAubWF0LXBzZXVkby1jaGVja2JveCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCksIHNlY29uZGFyeS10ZXh0KTtcblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGJhY2tncm91bmQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIERlZmF1bHQgdG8gdGhlIGFjY2VudCBjb2xvci4gTm90ZSB0aGF0IHRoZSBwc2V1ZG8gY2hlY2tib3hlcyBhcmUgbWVhbnQgdG8gaW5oZXJpdCB0aGVcbiAgLy8gdGhlbWUgZnJvbSB0aGVpciBwYXJlbnQsIHJhdGhlciB0aGFuIGltcGxlbWVudGluZyB0aGVpciBvd24gdGhlbWluZywgd2hpY2ggaXMgd2h5IHdlXG4gIC8vIGRvbid0IGF0dGFjaCB0byB0aGUgYG1hdC0qYCBjbGFzc2VzLlxuICAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlLFxuICAubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIGFjY2VudCkpO1xuICB9XG5cbiAgLm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIHByaW1hcnkpKTtcbiAgfVxuXG4gIC5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXdhcm4gLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCB3YXJuKSk7XG4gIH1cblxuICAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICAmLm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZDogJGRpc2FibGVkLWNvbG9yO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gUmVwcmVzZW50cyBhIHR5cG9ncmFwaHkgbGV2ZWwgZnJvbSB0aGUgTWF0ZXJpYWwgZGVzaWduIHNwZWMuXG5AZnVuY3Rpb24gbWF0LXR5cG9ncmFwaHktbGV2ZWwoXG4gICRmb250LXNpemUsXG4gICRsaW5lLWhlaWdodDogJGZvbnQtc2l6ZSxcbiAgJGZvbnQtd2VpZ2h0OiA0MDAsXG4gICRmb250LWZhbWlseTogbnVsbCxcbiAgJGxldHRlci1zcGFjaW5nOiBudWxsKSB7XG5cbiAgQHJldHVybiAoXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLFxuICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQsXG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodCxcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LFxuICAgIGxldHRlci1zcGFjaW5nOiAkbGV0dGVyLXNwYWNpbmdcbiAgKTtcbn1cblxuLy8gUmVwcmVzZW50cyBhIGNvbGxlY3Rpb24gb2YgdHlwb2dyYXBoeSBsZXZlbHMuXG4vLyBEZWZhdWx0cyBjb21lIGZyb20gaHR0cHM6Ly9tYXRlcmlhbC5pby9ndWlkZWxpbmVzL3N0eWxlL3R5cG9ncmFwaHkuaHRtbFxuQGZ1bmN0aW9uIG1hdC10eXBvZ3JhcGh5LWNvbmZpZyhcbiAgJGZvbnQtZmFtaWx5OiAgICdSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZicsXG4gICRkaXNwbGF5LTQ6ICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxMTJweCwgMTEycHgsIDMwMCksXG4gICRkaXNwbGF5LTM6ICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCg1NnB4LCA1NnB4LCA0MDApLFxuICAkZGlzcGxheS0yOiAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoNDVweCwgNDhweCwgNDAwKSxcbiAgJGRpc3BsYXktMTogICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDM0cHgsIDQwcHgsIDQwMCksXG4gICRoZWFkbGluZTogICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgyNHB4LCAzMnB4LCA0MDApLFxuICAkdGl0bGU6ICAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMjBweCwgMzJweCwgNTAwKSxcbiAgJHN1YmhlYWRpbmctMjogIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE2cHgsIDI4cHgsIDQwMCksXG4gICRzdWJoZWFkaW5nLTE6ICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxNXB4LCAyNHB4LCA0MDApLFxuICAkYm9keS0yOiAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTRweCwgMjRweCwgNTAwKSxcbiAgJGJvZHktMTogICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE0cHgsIDIwcHgsIDQwMCksXG4gICRjYXB0aW9uOiAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxMnB4LCAyMHB4LCA0MDApLFxuICAkYnV0dG9uOiAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTRweCwgMTRweCwgNTAwKSxcbiAgLy8gTGluZS1oZWlnaHQgbXVzdCBiZSB1bml0LWxlc3MgZnJhY3Rpb24gb2YgdGhlIGZvbnQtc2l6ZS5cbiAgJGlucHV0OiAgICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKGluaGVyaXQsIDEuMTI1LCA0MDApXG4pIHtcblxuICAvLyBEZWNsYXJlIGFuIGluaXRpYWwgbWFwIHdpdGggYWxsIG9mIHRoZSBsZXZlbHMuXG4gICRjb25maWc6IChcbiAgICBkaXNwbGF5LTQ6ICAgICAgJGRpc3BsYXktNCxcbiAgICBkaXNwbGF5LTM6ICAgICAgJGRpc3BsYXktMyxcbiAgICBkaXNwbGF5LTI6ICAgICAgJGRpc3BsYXktMixcbiAgICBkaXNwbGF5LTE6ICAgICAgJGRpc3BsYXktMSxcbiAgICBoZWFkbGluZTogICAgICAgJGhlYWRsaW5lLFxuICAgIHRpdGxlOiAgICAgICAgICAkdGl0bGUsXG4gICAgc3ViaGVhZGluZy0yOiAgICRzdWJoZWFkaW5nLTIsXG4gICAgc3ViaGVhZGluZy0xOiAgICRzdWJoZWFkaW5nLTEsXG4gICAgYm9keS0yOiAgICAgICAgICRib2R5LTIsXG4gICAgYm9keS0xOiAgICAgICAgICRib2R5LTEsXG4gICAgY2FwdGlvbjogICAgICAgICRjYXB0aW9uLFxuICAgIGJ1dHRvbjogICAgICAgICAkYnV0dG9uLFxuICAgIGlucHV0OiAgICAgICAgICAkaW5wdXQsXG4gICk7XG5cbiAgLy8gTG9vcCB0aHJvdWdoIHRoZSBsZXZlbHMgYW5kIHNldCB0aGUgYGZvbnQtZmFtaWx5YCBvZiB0aGUgb25lcyB0aGF0IGRvbid0IGhhdmUgb25lIHRvIHRoZSBiYXNlLlxuICAvLyBOb3RlIHRoYXQgU2FzcyBjYW4ndCBtb2RpZnkgbWFwcyBpbiBwbGFjZSwgd2hpY2ggbWVhbnMgdGhhdCB3ZSBuZWVkIHRvIG1lcmdlIGFuZCByZS1hc3NpZ24uXG4gIEBlYWNoICRrZXksICRsZXZlbCBpbiAkY29uZmlnIHtcbiAgICBAaWYgbWFwLWdldCgkbGV2ZWwsIGZvbnQtZmFtaWx5KSA9PSBudWxsIHtcbiAgICAgICRuZXctbGV2ZWw6IG1hcC1tZXJnZSgkbGV2ZWwsIChmb250LWZhbWlseTogJGZvbnQtZmFtaWx5KSk7XG4gICAgICAkY29uZmlnOiBtYXAtbWVyZ2UoJGNvbmZpZywgKCRrZXk6ICRuZXctbGV2ZWwpKTtcbiAgICB9XG4gIH1cblxuICAvLyBBZGQgdGhlIGJhc2UgZm9udCBmYW1pbHkgdG8gdGhlIGNvbmZpZy5cbiAgQHJldHVybiBtYXAtbWVyZ2UoJGNvbmZpZywgKGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHkpKTtcbn1cblxuLy8gQWRkcyB0aGUgYmFzZSB0eXBvZ3JhcGh5IHN0eWxlcywgYmFzZWQgb24gYSBjb25maWcuXG5AbWl4aW4gbWF0LWJhc2UtdHlwb2dyYXBoeSgkY29uZmlnLCAkc2VsZWN0b3I6ICcubWF0LXR5cG9ncmFwaHknKSB7XG4gIC5tYXQtaDEsIC5tYXQtaGVhZGxpbmUsICN7JHNlbGVjdG9yfSBoMSB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGhlYWRsaW5lKTtcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xuICB9XG5cbiAgLm1hdC1oMiwgLm1hdC10aXRsZSwgI3skc2VsZWN0b3J9IGgyIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgdGl0bGUpO1xuICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gIH1cblxuICAubWF0LWgzLCAubWF0LXN1YmhlYWRpbmctMiwgI3skc2VsZWN0b3J9IGgzIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xuICB9XG5cbiAgLm1hdC1oNCwgLm1hdC1zdWJoZWFkaW5nLTEsICN7JHNlbGVjdG9yfSBoNCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHN1YmhlYWRpbmctMSk7XG4gICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgfVxuXG4gIC8vIE5vdGU6IHRoZSBzcGVjIGRvZXNuJ3QgaGF2ZSBhbnl0aGluZyB0aGF0IHdvdWxkIGNvcnJlc3BvbmQgdG8gaDUgYW5kIGg2LCBidXQgd2UgYWRkIHRoZXNlIGZvclxuICAvLyBjb25zaXN0ZW5jeS4gVGhlIGZvbnQgc2l6ZXMgY29tZSBmcm9tIHRoZSBDaHJvbWUgdXNlciBhZ2VudCBzdHlsZXMgd2hpY2ggaGF2ZSBoNSBhdCAwLjgzZW1cbiAgLy8gYW5kIGg2IGF0IDAuNjdlbS5cbiAgLm1hdC1oNSwgI3skc2VsZWN0b3J9IGg1IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1mb250LXNob3J0aGFuZChcbiAgICAgIG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKSAqIDAuODMsXG4gICAgICBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKSxcbiAgICAgIG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBib2R5LTEpLFxuICAgICAgbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMSlcbiAgICApO1xuXG4gICAgbWFyZ2luOiAwIDAgMTJweDtcbiAgfVxuXG4gIC5tYXQtaDYsICN7JHNlbGVjdG9yfSBoNiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktZm9udC1zaG9ydGhhbmQoXG4gICAgICBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSkgKiAwLjY3LFxuICAgICAgbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSksXG4gICAgICBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgYm9keS0xKSxcbiAgICAgIG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTEpXG4gICAgKTtcblxuICAgIG1hcmdpbjogMCAwIDEycHg7XG4gIH1cblxuICAubWF0LWJvZHktc3Ryb25nLCAubWF0LWJvZHktMiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMik7XG4gIH1cblxuICAubWF0LWJvZHksIC5tYXQtYm9keS0xLCAjeyRzZWxlY3Rvcn0ge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTEpO1xuXG4gICAgcCB7XG4gICAgICBtYXJnaW46IDAgMCAxMnB4O1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc21hbGwsIC5tYXQtY2FwdGlvbiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGNhcHRpb24pO1xuICB9XG5cbiAgLy8gTm90ZTogVGhlIHNwZWMgZG9lc24ndCBtZW50aW9uIGxldHRlciBzcGFjaW5nLiBUaGUgdmFsdWUgY29tZXMgZnJvbVxuICAvLyBleWViYWxsaW5nIGl0IHVudGlsIGl0IGxvb2tlZCBleGFjdGx5IGxpa2UgdGhlIHNwZWMgZXhhbXBsZXMuXG4gIC5tYXQtZGlzcGxheS00LCAjeyRzZWxlY3Rvcn0gLm1hdC1kaXNwbGF5LTQge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBkaXNwbGF5LTQpO1xuICAgIG1hcmdpbjogMCAwIDU2cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjA1ZW07XG4gIH1cblxuICAubWF0LWRpc3BsYXktMywgI3skc2VsZWN0b3J9IC5tYXQtZGlzcGxheS0zIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgZGlzcGxheS0zKTtcbiAgICBtYXJnaW46IDAgMCA2NHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICB9XG5cbiAgLm1hdC1kaXNwbGF5LTIsICN7JHNlbGVjdG9yfSAubWF0LWRpc3BsYXktMiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGRpc3BsYXktMik7XG4gICAgbWFyZ2luOiAwIDAgNjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDA1ZW07XG4gIH1cblxuICAubWF0LWRpc3BsYXktMSwgI3skc2VsZWN0b3J9IC5tYXQtZGlzcGxheS0xIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgZGlzcGxheS0xKTtcbiAgICBtYXJnaW46IDAgMCA2NHB4O1xuICB9XG59XG5cblxuXG5cbkBtaXhpbiBtYXQtYXV0b2NvbXBsZXRlLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuXG4gIC5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig0LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAvLyBTZWxlY3RlZCBvcHRpb25zIGluIGF1dG9jb21wbGV0ZXMgc2hvdWxkIG5vdCBiZSBncmF5LCBidXQgd2VcbiAgICAvLyBvbmx5IHdhbnQgdG8gb3ZlcnJpZGUgdGhlIGJhY2tncm91bmQgZm9yIHNlbGVjdGVkIG9wdGlvbnMgaWZcbiAgICAvLyB0aGV5IGFyZSAqbm90KiBpbiBob3ZlciBvciBmb2N1cyBzdGF0ZS4gVGhpcyBjaGFuZ2UgaGFzIHRvIGJlXG4gICAgLy8gbWFkZSBoZXJlIGJlY2F1c2UgYmFzZSBvcHRpb24gc3R5bGVzIGFyZSBzaGFyZWQgYmV0d2VlbiB0aGVcbiAgICAvLyBhdXRvY29tcGxldGUgYW5kIHRoZSBzZWxlY3QuXG4gICAgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LWFjdGl2ZSk6bm90KDpob3Zlcikge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcblxuICAgICAgJjpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuQG1peGluIG1hdC1hdXRvY29tcGxldGUtdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuLy8gVGhpcyBjb250YWlucyBhbGwgb2YgdGhlIHN0eWxlcyBmb3IgdGhlIGJhZGdlXG4vLyByYXRoZXIgdGhhbiBqdXN0IHRoZSBjb2xvci90aGVtZSBiZWNhdXNlIG9mXG4vLyBubyBzdHlsZSBzaGVldCBzdXBwb3J0IGZvciBkaXJlY3RpdmVzLlxuXG5cblxuXG5cbiRtYXQtYmFkZ2UtZm9udC1zaXplOiAxMnB4O1xuJG1hdC1iYWRnZS1mb250LXdlaWdodDogNjAwO1xuJG1hdC1iYWRnZS1kZWZhdWx0LXNpemU6IDIycHggIWRlZmF1bHQ7XG4kbWF0LWJhZGdlLXNtYWxsLXNpemU6ICRtYXQtYmFkZ2UtZGVmYXVsdC1zaXplIC0gNjtcbiRtYXQtYmFkZ2UtbGFyZ2Utc2l6ZTogJG1hdC1iYWRnZS1kZWZhdWx0LXNpemUgKyA2O1xuXG4vLyBNaXhpbiBmb3IgYnVpbGRpbmcgb2Zmc2V0IGdpdmVuIGRpZmZlcmVudCBzaXplc1xuQG1peGluIF9tYXQtYmFkZ2Utc2l6ZSgkc2l6ZSkge1xuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIHdpZHRoOiAkc2l6ZTtcbiAgICBoZWlnaHQ6ICRzaXplO1xuICAgIGxpbmUtaGVpZ2h0OiAkc2l6ZTtcbiAgfVxuXG4gICYubWF0LWJhZGdlLWFib3ZlIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgdG9wOiAtJHNpemUgLyAyO1xuICAgIH1cbiAgfVxuXG4gICYubWF0LWJhZGdlLWJlbG93IHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgYm90dG9tOiAtJHNpemUgLyAyO1xuICAgIH1cbiAgfVxuXG4gICYubWF0LWJhZGdlLWJlZm9yZSB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGxlZnQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICBbZGlyPSdydGwnXSAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBsZWZ0OiBhdXRvO1xuICAgICAgcmlnaHQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1hZnRlciB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIHJpZ2h0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICByaWdodDogYXV0bztcbiAgICAgIGxlZnQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1vdmVybGFwIHtcbiAgICAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgbGVmdDogLSRzaXplIC8gMjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBbZGlyPSdydGwnXSAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgcmlnaHQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgcmlnaHQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGxlZnQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtYmFkZ2UtdGhlbWUoJHRoZW1lKSB7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRwcmltYXJ5KTtcblxuICAgIEBpbmNsdWRlIGNkay1oaWdoLWNvbnRyYXN0IHtcbiAgICAgIG91dGxpbmU6IHNvbGlkIDFweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZS1hY2NlbnQge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2Utd2FybiB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIGRlZmF1bHQtY29udHJhc3QpO1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAubWF0LWJhZGdlLWhpZGRlbiB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZS1kaXNhYmxlZCB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICRhcHAtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnYmFja2dyb3VuZCcpO1xuICAgICAgJGJhZGdlLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLWJ1dHRvbik7XG5cbiAgICAgIC8vIFRoZSBkaXNhYmxlZCBjb2xvciB1c3VhbGx5IGhhcyBzb21lIGtpbmQgb2Ygb3BhY2l0eSwgYnV0IGJlY2F1c2UgdGhlIGJhZGdlIGlzIG92ZXJsYXllZFxuICAgICAgLy8gb24gdG9wIG9mIHNvbWV0aGluZyBlbHNlLCBpdCB3b24ndCBsb29rIGdvb2QgaWYgaXQncyBvcGFxdWUuIElmIGl0IGlzIGEgY29sb3IgKnR5cGUqLFxuICAgICAgLy8gd2UgY29udmVydCBpdCBpbnRvIGEgc29saWQgY29sb3IgYnkgdGFraW5nIHRoZSBvcGFjaXR5IGZyb20gdGhlIHJnYmEgdmFsdWUgYW5kIHVzaW5nXG4gICAgICAvLyB0aGUgdmFsdWUgdG8gZGV0ZXJtaW5lIHRoZSBwZXJjZW50YWdlIG9mIHRoZSBiYWNrZ3JvdW5kIHRvIHB1dCBpbnRvIGZvcmVncm91bmQgd2hlblxuICAgICAgLy8gbWl4aW5nIHRoZSBjb2xvcnMgdG9nZXRoZXIuXG4gICAgICBAaWYgKHR5cGUtb2YoJGJhZGdlLWNvbG9yKSA9PSBjb2xvciBhbmQgdHlwZS1vZigkYXBwLWJhY2tncm91bmQpID09IGNvbG9yKSB7XG4gICAgICAgICRiYWRnZS1vcGFjaXR5OiBvcGFjaXR5KCRiYWRnZS1jb2xvcik7XG4gICAgICAgIGJhY2tncm91bmQ6IG1peCgkYXBwLWJhY2tncm91bmQsIHJnYmEoJGJhZGdlLWNvbG9yLCAxKSwgKDEgLSAkYmFkZ2Utb3BhY2l0eSkgKiAxMDAlKTtcbiAgICAgIH1cbiAgICAgIEBlbHNlIHtcbiAgICAgICAgYmFja2dyb3VuZDogJGJhZGdlLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIC8vIFRoZSBhY3RpdmUgY2xhc3MgaXMgYWRkZWQgYWZ0ZXIgdGhlIGVsZW1lbnQgaXMgYWRkZWRcbiAgLy8gc28gaXQgY2FuIGFuaW1hdGUgc2NhbGUgdG8gZGVmYXVsdFxuICAubWF0LWJhZGdlLWNvbnRlbnQubWF0LWJhZGdlLWFjdGl2ZSB7XG4gICAgLy8gU2NhbGUgdG8gYG5vbmVgIGluc3RlYWQgb2YgYDFgIHRvIGF2b2lkIGJsdXJyeSB0ZXh0IGluIHNvbWUgYnJvd3NlcnMuXG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG5cbiAgLm1hdC1iYWRnZS1zbWFsbCB7XG4gICAgQGluY2x1ZGUgX21hdC1iYWRnZS1zaXplKCRtYXQtYmFkZ2Utc21hbGwtc2l6ZSk7XG4gIH1cbiAgLm1hdC1iYWRnZS1tZWRpdW0ge1xuICAgIEBpbmNsdWRlIF9tYXQtYmFkZ2Utc2l6ZSgkbWF0LWJhZGdlLWRlZmF1bHQtc2l6ZSk7XG4gIH1cbiAgLm1hdC1iYWRnZS1sYXJnZSB7XG4gICAgQGluY2x1ZGUgX21hdC1iYWRnZS1zaXplKCRtYXQtYmFkZ2UtbGFyZ2Utc2l6ZSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1iYWRnZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBmb250LXdlaWdodDogJG1hdC1iYWRnZS1mb250LXdlaWdodDtcbiAgICBmb250LXNpemU6ICRtYXQtYmFkZ2UtZm9udC1zaXplO1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWJhZGdlLXNtYWxsIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgZm9udC1zaXplOiAkbWF0LWJhZGdlLWZvbnQtc2l6ZSAvIDI7XG4gIH1cblxuICAubWF0LWJhZGdlLWxhcmdlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgZm9udC1zaXplOiAkbWF0LWJhZGdlLWZvbnQtc2l6ZSAqIDI7XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LWJvdHRvbS1zaGVldC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXIge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDE2LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlhbG9nKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJvdHRvbS1zaGVldC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1ib3R0b20tc2hlZXQtY29udGFpbmVyIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuXG5cbiRfbWF0LWJ1dHRvbi1yaXBwbGUtb3BhY2l0eTogMC4xO1xuXG4vLyBBcHBsaWVzIGEgZm9jdXMgc3R5bGUgdG8gYW4gbWF0LWJ1dHRvbiBlbGVtZW50IGZvciBlYWNoIG9mIHRoZSBzdXBwb3J0ZWQgcGFsZXR0ZXMuXG5AbWl4aW4gX21hdC1idXR0b24tZm9jdXMtb3ZlcmxheS1jb2xvcigkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgJi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICB9XG5cbiAgJi5tYXQtYWNjZW50IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgfVxuXG4gICYubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgfVxuXG4gICZbZGlzYWJsZWRdIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LWJ1dHRvbi1yaXBwbGUtY29sb3IoJHRoZW1lLCAkaHVlLCAkb3BhY2l0eTogJF9tYXQtYnV0dG9uLXJpcHBsZS1vcGFjaXR5KSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gICYubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCAkaHVlLCAkb3BhY2l0eSk7XG4gIH1cblxuICAmLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsICRodWUsICRvcGFjaXR5KTtcbiAgfVxuXG4gICYubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuLCAkaHVlLCAkb3BhY2l0eSk7XG4gIH1cbn1cblxuLy8gQXBwbGllcyBhIHByb3BlcnR5IHRvIGFuIG1hdC1idXR0b24gZWxlbWVudCBmb3IgZWFjaCBvZiB0aGUgc3VwcG9ydGVkIHBhbGV0dGVzLlxuQG1peGluIF9tYXQtYnV0dG9uLXRoZW1lLXByb3BlcnR5KCR0aGVtZSwgJHByb3BlcnR5LCAkaHVlKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gICYubWF0LXByaW1hcnkge1xuICAgICN7JHByb3BlcnR5fTogbWF0LWNvbG9yKCRwcmltYXJ5LCAkaHVlKTtcbiAgfVxuICAmLm1hdC1hY2NlbnQge1xuICAgICN7JHByb3BlcnR5fTogbWF0LWNvbG9yKCRhY2NlbnQsICRodWUpO1xuICB9XG4gICYubWF0LXdhcm4ge1xuICAgICN7JHByb3BlcnR5fTogbWF0LWNvbG9yKCR3YXJuLCAkaHVlKTtcbiAgfVxuXG4gICYubWF0LXByaW1hcnksICYubWF0LWFjY2VudCwgJi5tYXQtd2FybiwgJltkaXNhYmxlZF0ge1xuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICRwYWxldHRlOiBpZigkcHJvcGVydHkgPT0gJ2NvbG9yJywgJGZvcmVncm91bmQsICRiYWNrZ3JvdW5kKTtcbiAgICAgICN7JHByb3BlcnR5fTogbWF0LWNvbG9yKCRwYWxldHRlLCBkaXNhYmxlZC1idXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJ1dHRvbi10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1idXR0b24sIC5tYXQtaWNvbi1idXR0b24sIC5tYXQtc3Ryb2tlZC1idXR0b24ge1xuICAgIC8vIEJ1dHRvbnMgd2l0aG91dCBhIGJhY2tncm91bmQgY29sb3Igc2hvdWxkIGluaGVyaXQgdGhlIGZvbnQgY29sb3IuIFRoaXMgaXMgbmVjZXNzYXJ5IHRvXG4gICAgLy8gZW5zdXJlIHRoYXQgdGhlIGJ1dHRvbiBpcyByZWFkYWJsZSBvbiBjdXN0b20gYmFja2dyb3VuZCBjb2xvcnMuIEl0J3Mgd3JvbmcgdG8gYWx3YXlzIGFzc3VtZVxuICAgIC8vIHRoYXQgdGhvc2UgYnV0dG9ucyBhcmUgYWx3YXlzIHBsYWNlZCBpbnNpZGUgb2YgY29udGFpbmVycyB3aXRoIHRoZSBkZWZhdWx0IGJhY2tncm91bmRcbiAgICAvLyBjb2xvciBvZiB0aGUgdGhlbWUgKGUuZy4gdGhlbWVkIHRvb2xiYXJzKS5cbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXRoZW1lLXByb3BlcnR5KCR0aGVtZSwgJ2NvbG9yJywgZGVmYXVsdCk7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tZm9jdXMtb3ZlcmxheS1jb2xvcigkdGhlbWUpO1xuXG4gICAgLy8gU2V0dXAgdGhlIHJpcHBsZSBjb2xvciB0byBiZSBiYXNlZCBvbiB0aGUgdGV4dCBjb2xvci4gVGhpcyBlbnN1cmVzIHRoYXQgdGhlIHJpcHBsZXNcbiAgICAvLyBhcmUgbWF0Y2hpbmcgd2l0aCB0aGUgY3VycmVudCB0aGVtZSBwYWxldHRlIGFuZCBhcmUgaW4gY29udHJhc3QgdG8gdGhlIGJhY2tncm91bmQgY29sb3JcbiAgICAvLyAoZS5nIGluIHRoZW1lZCB0b29sYmFycykuXG4gICAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBvcGFjaXR5OiAkX21hdC1idXR0b24tcmlwcGxlLW9wYWNpdHk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZDogbWFwX2dldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG4gIH1cblxuICAvLyBOb3RlOiB0aGlzIG5lZWRzIGEgYml0IGV4dHJhIHNwZWNpZmljaXR5LCBiZWNhdXNlIHdlJ3JlIG5vdCBndWFyYW50ZWVkIHRoZSBpbmNsdXNpb25cbiAgLy8gb3JkZXIgb2YgdGhlIHRoZW1lIHN0eWxlcyBhbmQgdGhlIGJ1dHRvbiByZXNldCBtYXkgZW5kIHVwIHJlc2V0dGluZyB0aGlzIGFzIHdlbGwuXG4gIC5tYXQtc3Ryb2tlZC1idXR0b246bm90KFtkaXNhYmxlZF0pIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWZsYXQtYnV0dG9uLCAubWF0LXJhaXNlZC1idXR0b24sIC5tYXQtZmFiLCAubWF0LW1pbmktZmFiIHtcbiAgICAvLyBEZWZhdWx0IGZvbnQgYW5kIGJhY2tncm91bmQgY29sb3Igd2hlbiBub3QgdXNpbmcgYW55IGNvbG9yIHBhbGV0dGUuXG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCByYWlzZWQtYnV0dG9uKTtcblxuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXRoZW1lLXByb3BlcnR5KCR0aGVtZSwgJ2NvbG9yJywgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJHRoZW1lLCAnYmFja2dyb3VuZC1jb2xvcicsIGRlZmF1bHQpO1xuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXJpcHBsZS1jb2xvcigkdGhlbWUsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG5cbiAgLm1hdC1zdHJva2VkLWJ1dHRvbiwgLm1hdC1mbGF0LWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMiwgJHRoZW1lKTtcblxuICAgICY6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig4LCAkdGhlbWUpO1xuICAgIH1cblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDAsICR0aGVtZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDYsICR0aGVtZSk7XG5cbiAgICAmOm5vdChbZGlzYWJsZWRdKTphY3RpdmUge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMTIsICR0aGVtZSk7XG4gICAgfVxuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1idXR0b24tdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtYnV0dG9uLCAubWF0LXJhaXNlZC1idXR0b24sIC5tYXQtaWNvbi1idXR0b24sIC5tYXQtc3Ryb2tlZC1idXR0b24sXG4gIC5tYXQtZmxhdC1idXR0b24sIC5tYXQtZmFiLCAubWF0LW1pbmktZmFiIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYnV0dG9uKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtYnV0dG9uLXRvZ2dsZS10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGRpdmlkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUsXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMiwgJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQsXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuXG4gICAgLm1hdC1idXR0b24tdG9nZ2xlLWZvY3VzLW92ZXJsYXkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBmb2N1c2VkLWJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG5cbiAgICAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGZvY3VzZWQtYnV0dG9uLCAxKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUgKyAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggJGRpdmlkZXItY29sb3I7XG4gIH1cblxuICBbZGlyPSdydGwnXSAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUgKyAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQubWF0LWJ1dHRvbi10b2dnbGUtdmVydGljYWwge1xuICAgIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAkZGl2aWRlci1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBzZWxlY3RlZC1idXR0b24pO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcblxuICAgICYubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLWJ1dHRvbik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaXNhYmxlZC1idXR0b24tdG9nZ2xlKTtcblxuICAgICYubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIH1cblxuICAgICYubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHNlbGVjdGVkLWRpc2FibGVkLWJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCxcbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIGJvcmRlcjogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtYnV0dG9uLXRvZ2dsZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG59XG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtY2FyZC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWNhcmQge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDEsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgIC8vIE5lZWRzIGV4dHJhIHNwZWNpZmljaXR5IHRvIGJlIGFibGUgdG8gb3ZlcnJpZGUgdGhlIGVsZXZhdGlvbiBzZWxlY3RvcnMuXG4gICAgJi5tYXQtY2FyZC1mbGF0IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDAsICR0aGVtZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1jYXJkLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWNhcmQge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWNhcmQtdGl0bGUge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgaGVhZGxpbmUpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgdGl0bGUpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgdGl0bGUpO1xuICB9XG5cbiAgLm1hdC1jYXJkLXN1YnRpdGxlLFxuICAubWF0LWNhcmQtY29udGVudCB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtY2hlY2tib3gtdGhlbWUoJHRoZW1lKSB7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG5cbiAgLy8gVGhlIGNvbG9yIG9mIHRoZSBjaGVja2JveCdzIGNoZWNrbWFyayAvIG1peGVkbWFyay5cbiAgJGNoZWNrYm94LW1hcmstY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYmFja2dyb3VuZCk7XG5cbiAgLy8gTk9URSh0cmF2aXNrYXVmbWFuKTogV2hpbGUgdGhlIHNwZWMgY2FsbHMgZm9yIHRyYW5zbHVjZW50IGJsYWNrcy93aGl0ZXMgZm9yIGRpc2FibGVkIGNvbG9ycyxcbiAgLy8gdGhpcyBkb2VzIG5vdCB3b3JrIHdlbGwgd2l0aCBlbGVtZW50cyBsYXllcmVkIG9uIHRvcCBvZiBvbmUgYW5vdGhlci4gVG8gZ2V0IGFyb3VuZCB0aGlzIHdlXG4gIC8vIGJsZW5kIHRoZSBjb2xvcnMgdG9nZXRoZXIgYmFzZWQgb24gdGhlIGJhc2UgY29sb3IgYW5kIHRoZSB0aGVtZSBiYWNrZ3JvdW5kLlxuICAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrOiAjNjg2ODY4O1xuICAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodDogI2IwYjBiMDtcbiAgJGRpc2FibGVkLWNvbG9yOiBpZigkaXMtZGFyay10aGVtZSwgJHdoaXRlLTMwcGN0LW9wYWNpdHktb24tZGFyaywgJGJsYWNrLTI2cGN0LW9wYWNpdHktb24tbGlnaHQpO1xuXG4gIC5tYXQtY2hlY2tib3gtZnJhbWUge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWNoZWNrbWFyayB7XG4gICAgZmlsbDogJGNoZWNrYm94LW1hcmstY29sb3I7XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWNoZWNrbWFyay1wYXRoIHtcbiAgICAvLyAhaW1wb3J0YW50IGlzIG5lZWRlZCBoZXJlIGJlY2F1c2UgYSBzdHJva2UgbXVzdCBiZSBzZXQgYXMgYW5cbiAgICAvLyBhdHRyaWJ1dGUgb24gdGhlIFNWRyBpbiBvcmRlciBmb3IgbGluZSBhbmltYXRpb24gdG8gd29yayBwcm9wZXJseS5cbiAgICBzdHJva2U6ICRjaGVja2JveC1tYXJrLWNvbG9yICFpbXBvcnRhbnQ7XG5cbiAgICBAaW5jbHVkZSBjZGstaGlnaC1jb250cmFzdChibGFjay1vbi13aGl0ZSkge1xuICAgICAgLy8gSGF2aW5nIHRoZSBvbmUgYWJvdmUgYmUgIWltcG9ydGFudCBlbmRzIHVwIG92ZXJyaWRpbmcgdGhlIGJyb3dzZXIncyBhdXRvbWF0aWNcbiAgICAgIC8vIGNvbG9yIGludmVyc2lvbiBzbyB3ZSBuZWVkIHRvIHJlLWludmVydCBpdCBvdXJzZWx2ZXMgZm9yIGJsYWNrLW9uLXdoaXRlLlxuICAgICAgc3Ryb2tlOiAjMDAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jaGVja2JveC1taXhlZG1hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjaGVja2JveC1tYXJrLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLCAubWF0LWNoZWNrYm94LWNoZWNrZWQge1xuICAgICYubWF0LXByaW1hcnkgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWRpc2FibGVkIHtcbiAgICAmLm1hdC1jaGVja2JveC1jaGVja2VkLFxuICAgICYubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICAgICAgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6bm90KC5tYXQtY2hlY2tib3gtY2hlY2tlZCkge1xuICAgICAgLm1hdC1jaGVja2JveC1mcmFtZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtY2hlY2tib3gtbGFiZWwge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGNkay1oaWdoLWNvbnRyYXN0IHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gIH1cblxuICAvLyBUaGlzIG9uZSBpcyBtb3ZlZCBkb3duIGhlcmUgc28gaXQgY2FuIHRhcmdldCBib3RoXG4gIC8vIHRoZSB0aGVtZSBjb2xvcnMgYW5kIHRoZSBkaXNhYmxlZCBzdGF0ZS5cbiAgQGluY2x1ZGUgY2RrLWhpZ2gtY29udHJhc3Qge1xuICAgIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICAvLyBOZWVkcyB0byBiZSByZW1vdmVkIGJlY2F1c2UgaXQgaGlkZXMgdGhlIGNoZWNrYm94IG91dGxpbmUuXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2hlY2tib3g6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpIHtcbiAgICAmLm1hdC1wcmltYXJ5IC5tYXQtY2hlY2tib3gtcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiAubWF0LWNoZWNrYm94LXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtY2hlY2tib3gtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtY2hlY2tib3gge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAvLyBUT0RPKGthcmEpOiBSZW1vdmUgdGhpcyBzdHlsZSB3aGVuIGZpeGluZyB2ZXJ0aWNhbCBiYXNlbGluZVxuICAubWF0LWNoZWNrYm94LWxheW91dCAubWF0LWNoZWNrYm94LWxhYmVsIHtcbiAgICBsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gIH1cbn1cblxuXG5cblxuXG5cbiRtYXQtY2hpcC1yZW1vdmUtZm9udC1zaXplOiAxOHB4O1xuXG5AbWl4aW4gbWF0LWNoaXBzLWNvbG9yKCRmb3JlZ3JvdW5kLCAkYmFja2dyb3VuZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcbiAgY29sb3I6ICRmb3JlZ3JvdW5kO1xuXG4gIC5tYXQtY2hpcC1yZW1vdmUge1xuICAgIGNvbG9yOiAkZm9yZWdyb3VuZDtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gIH1cbn1cblxuQG1peGluIG1hdC1jaGlwcy10aGVtZS1jb2xvcigkcGFsZXR0ZSkge1xuICBAaW5jbHVkZSBtYXQtY2hpcHMtY29sb3IobWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KSwgbWF0LWNvbG9yKCRwYWxldHRlKSk7XG5cbiAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0LCAwLjEpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtY2hpcHMtdGhlbWUoJHRoZW1lKSB7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gICR1bnNlbGVjdGVkLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgdW5zZWxlY3RlZC1jaGlwKTtcbiAgJHVuc2VsZWN0ZWQtZm9yZWdyb3VuZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAge1xuICAgIEBpbmNsdWRlIG1hdC1jaGlwcy1jb2xvcigkdW5zZWxlY3RlZC1mb3JlZ3JvdW5kLCAkdW5zZWxlY3RlZC1iYWNrZ3JvdW5kKTtcblxuICAgICY6bm90KC5tYXQtY2hpcC1kaXNhYmxlZCkge1xuICAgICAgJjphY3RpdmUge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigzLCAkdGhlbWUpO1xuICAgICAgfVxuXG4gICAgICAubWF0LWNoaXAtcmVtb3ZlOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC41NDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1hdC1jaGlwLWRpc2FibGVkIHtcbiAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICB9XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXBfZ2V0KCRmb3JlZ3JvdW5kLCBiYXNlKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQge1xuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgbWF0LWNoaXBzLXRoZW1lLWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jaGlwcy10aGVtZS1jb2xvcigkd2Fybik7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jaGlwcy10aGVtZS1jb2xvcigkYWNjZW50KTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1jaGlwcy10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1jaGlwIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0yKTtcbiAgICBmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG5cbiAgICAubWF0LWNoaXAtdHJhaWxpbmctaWNvbi5tYXQtaWNvbixcbiAgICAubWF0LWNoaXAtcmVtb3ZlLm1hdC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogJG1hdC1jaGlwLXJlbW92ZS1mb250LXNpemU7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC10YWJsZS10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXRhYmxlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gIH1cblxuICAubWF0LXRhYmxlIHRoZWFkLCAubWF0LXRhYmxlIHRib2R5LCAubWF0LXRhYmxlIHRmb290LFxuICBtYXQtaGVhZGVyLXJvdywgbWF0LXJvdywgbWF0LWZvb3Rlci1yb3csXG4gIFttYXQtaGVhZGVyLXJvd10sIFttYXQtcm93XSwgW21hdC1mb290ZXItcm93XSxcbiAgLm1hdC10YWJsZS1zdGlja3kge1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIH1cblxuICBtYXQtcm93LCBtYXQtaGVhZGVyLXJvdywgbWF0LWZvb3Rlci1yb3csXG4gIHRoLm1hdC1oZWFkZXItY2VsbCwgdGQubWF0LWNlbGwsIHRkLm1hdC1mb290ZXItY2VsbCB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtaGVhZGVyLWNlbGwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2VsbCwgLm1hdC1mb290ZXItY2VsbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC10YWJsZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC10YWJsZSB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtaGVhZGVyLWNlbGwge1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICBmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gIH1cblxuICAubWF0LWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwge1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG5cblxuXG5cbiRtYXQtZGF0ZXBpY2tlci1zZWxlY3RlZC10b2RheS1ib3gtc2hhZG93LXdpZHRoOiAxcHg7XG4kbWF0LWRhdGVwaWNrZXItc2VsZWN0ZWQtZmFkZS1hbW91bnQ6IDAuNjtcbiRtYXQtZGF0ZXBpY2tlci10b2RheS1mYWRlLWFtb3VudDogMC4yO1xuJG1hdC1jYWxlbmRhci1ib2R5LWZvbnQtc2l6ZTogMTNweCAhZGVmYXVsdDtcbiRtYXQtY2FsZW5kYXItd2Vla2RheS10YWJsZS1mb250LXNpemU6IDExcHggIWRlZmF1bHQ7XG5cbkBtaXhpbiBfbWF0LWRhdGVwaWNrZXItY29sb3IoJHBhbGV0dGUpIHtcbiAgLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkID4gLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgICAkYmFja2dyb3VuZDogbWF0LWNvbG9yKCRwYWxldHRlKTtcblxuICAgIEBpZiAodHlwZS1vZigkYmFja2dyb3VuZCkgPT0gY29sb3IpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGZhZGUtb3V0KCRiYWNrZ3JvdW5kLCAkbWF0LWRhdGVwaWNrZXItc2VsZWN0ZWQtZmFkZS1hbW91bnQpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICAvLyBJZiB3ZSBjb3VsZG4ndCByZXNvbHZlIHRvIGJhY2tncm91bmQgdG8gYSBjb2xvciAoZS5nLiBpdCdzIGEgQ1NTIHZhcmlhYmxlKSxcbiAgICAgIC8vIGZhbGwgYmFjayB0byBmYWRpbmcgdGhlIGNvbnRlbnQgb3V0IHZpYSBgb3BhY2l0eWAuXG4gICAgICBvcGFjaXR5OiAkbWF0LWRhdGVwaWNrZXItdG9kYXktZmFkZS1hbW91bnQ7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAkbWF0LWRhdGVwaWNrZXItc2VsZWN0ZWQtdG9kYXktYm94LXNoYWRvdy13aWR0aFxuICAgICAgICAgICAgICAgIG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1kYXRlcGlja2VyLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuXG4gIC5tYXQtY2FsZW5kYXItYXJyb3cge1xuICAgIGJvcmRlci10b3AtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaWNvbik7XG4gIH1cblxuICAvLyBUaGUgcHJldi9uZXh0IGJ1dHRvbnMgbmVlZCBhIGJpdCBtb3JlIHNwZWNpZmljaXR5IHRvXG4gIC8vIGF2b2lkIGJlaW5nIG92ZXJ3cml0dGVuIGJ5IHRoZSAubWF0LWljb24tYnV0dG9uLlxuICAubWF0LWRhdGVwaWNrZXItdG9nZ2xlLFxuICAubWF0LWRhdGVwaWNrZXItY29udGVudCAubWF0LWNhbGVuZGFyLW5leHQtYnV0dG9uLFxuICAubWF0LWRhdGVwaWNrZXItY29udGVudCAubWF0LWNhbGVuZGFyLXByZXZpb3VzLWJ1dHRvbiB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaWNvbik7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyLWRpdmlkZXI6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWxhYmVsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkID4gLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktY2VsbDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkKTpob3ZlcixcbiAgLmNkay1rZXlib2FyZC1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmUsXG4gIC5jZGstcHJvZ3JhbS1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmUge1xuICAgICYgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSB7XG4gICAgLy8gTm90ZTogdGhvdWdoIGl0J3Mgbm90IHRleHQsIHRoZSBib3JkZXIgaXMgYSBoaW50IGFib3V0IHRoZSBmYWN0IHRoYXQgdGhpcyBpcyB0b2RheSdzIGRhdGUsXG4gICAgLy8gc28gd2UgdXNlIHRoZSBoaW50IGNvbG9yLlxuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkID4gLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpIHtcbiAgICAkY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcblxuICAgIEBpZiAodHlwZS1vZigkY29sb3IpID09IGNvbG9yKSB7XG4gICAgICBib3JkZXItY29sb3I6IGZhZGUtb3V0KCRjb2xvciwgJG1hdC1kYXRlcGlja2VyLXRvZGF5LWZhZGUtYW1vdW50KTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgLy8gSWYgdGhlIGNvbG9yIGRpZG4ndCByZXNvbHZlIHRvIGEgY29sb3IgdmFsdWUsIGJ1dCBzb21ldGhpbmcgbGlrZSBhIENTUyB2YXJpYWJsZSwgd2UgY2FuJ3RcbiAgICAgIC8vIGZhZGUgaXQgb3V0IHNvIHdlIGZhbGwgYmFjayB0byByZWR1Y2luZyB0aGUgZWxlbWVudCBvcGFjaXR5LiBOb3RlIHRoYXQgd2UgZG9uJ3QgdXNlIHRoZVxuICAgICAgLy8gJG1hdC1kYXRlcGlja2VyLXRvZGF5LWZhZGUtYW1vdW50LCBiZWNhdXNlIGhpbnQgdGV4dCB1c3VhbGx5IGhhcyBzb21lIG9wYWNpdHkgYXBwbGllZFxuICAgICAgLy8gdG8gaXQgYWxyZWFkeSBhbmQgd2UgZG9uJ3Qgd2FudCB0aGVtIHRvIHN0YWNrIG9uIHRvcCBvZiBlYWNoIG90aGVyLlxuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgfVxuXG4gIEBpbmNsdWRlIF9tYXQtZGF0ZXBpY2tlci1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSkpO1xuXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbig0LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgQGluY2x1ZGUgX21hdC1kYXRlcGlja2VyLWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpKTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZGF0ZXBpY2tlci1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgd2FybikpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50LXRvdWNoIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigwLCAkdGhlbWUpO1xuICB9XG5cbiAgLm1hdC1kYXRlcGlja2VyLXRvZ2dsZS1hY3RpdmUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIHByaW1hcnkpKTtcblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpKTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIHdhcm4pKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1kYXRlcGlja2VyLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWNhbGVuZGFyIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5IHtcbiAgICBmb250LXNpemU6ICRtYXQtY2FsZW5kYXItYm9keS1mb250LXNpemU7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktbGFiZWwsXG4gIC5tYXQtY2FsZW5kYXItcGVyaW9kLWJ1dHRvbiB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlciB0aCB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogJG1hdC1jYWxlbmRhci13ZWVrZGF5LXRhYmxlLWZvbnQtc2l6ZTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtZGlhbG9nLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMjQsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaWFsb2cpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtZGlhbG9nLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWRpYWxvZy10aXRsZSB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHRpdGxlKTtcbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1leHBhbnNpb24tcGFuZWwtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDIsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtYWN0aW9uLXJvdyB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICAgICY6bm90KFthcmlhLWRpc2FibGVkPSd0cnVlJ10pIHtcbiAgICAgICYuY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gICAgICAmLmNkay1wcm9ncmFtLWZvY3VzZWQsXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gRGlzYWJsZSB0aGUgaG92ZXIgb24gdG91Y2ggZGV2aWNlcyBzaW5jZSBpdCBjYW4gYXBwZWFyIGxpa2UgaXQgaXMgc3R1Y2suIFdlIGNhbid0IHVzZVxuICAvLyBgQG1lZGlhIChob3ZlcilgIGFib3ZlLCBiZWNhdXNlIHRoZSBkZXNrdG9wIHN1cHBvcnQgYnJvd3NlciBzdXBwb3J0IGlzbid0IGdyZWF0LlxuICBAbWVkaWEgKGhvdmVyOiBub25lKSB7XG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5kZWQpOm5vdChbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddKVxuICAgICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbixcbiAgLm1hdC1leHBhbnNpb24taW5kaWNhdG9yOjphZnRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9J3RydWUnXSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtYnV0dG9uKTtcblxuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtZXhwYW5zaW9uLXBhbmVsLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIHN1YmhlYWRpbmctMSk7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIHN1YmhlYWRpbmctMSk7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBzdWJoZWFkaW5nLTEpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG5cbi8vIFRoaXMgbWl4aW4gd2lsbCBlbnN1cmUgdGhhdCBsaW5lcyB0aGF0IG92ZXJmbG93IHRoZSBjb250YWluZXIgd2lsbCBoaWRlIHRoZSBvdmVyZmxvdyBhbmRcbi8vIHRydW5jYXRlIG5lYXRseSB3aXRoIGFuIGVsbGlwc2lzLlxuQG1peGluIG1hdC10cnVuY2F0ZS1saW5lKCkge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLy8gTWl4aW4gdG8gcHJvdmlkZSBhbGwgbWF0LWxpbmUgc3R5bGVzLCBjaGFuZ2luZyBzZWNvbmRhcnkgZm9udCBzaXplIGJhc2VkIG9uIHdoZXRoZXIgdGhlIGxpc3Rcbi8vIGlzIGluIGRlbnNlIG1vZGUuXG5AbWl4aW4gbWF0LWxpbmUtYmFzZSgkc2Vjb25kYXJ5LWZvbnQtc2l6ZSkge1xuICAubWF0LWxpbmUge1xuICAgIEBpbmNsdWRlIG1hdC10cnVuY2F0ZS1saW5lKCk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgIC8vIGFsbCBsaW5lcyBidXQgdGhlIHRvcCBsaW5lIHNob3VsZCBoYXZlIHNtYWxsZXIgdGV4dFxuICAgICY6bnRoLWNoaWxkKG4rMikge1xuICAgICAgZm9udC1zaXplOiAkc2Vjb25kYXJ5LWZvbnQtc2l6ZTtcbiAgICB9XG4gIH1cbn1cblxuLy8gVGhpcyBtaXhpbiBub3JtYWxpemVzIGRlZmF1bHQgZWxlbWVudCBzdHlsZXMsIGUuZy4gZm9udCB3ZWlnaHQgZm9yIGhlYWRpbmcgdGV4dC5cbkBtaXhpbiBtYXQtbm9ybWFsaXplLXRleHQoKSB7XG4gICYgPiAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgfVxufVxuXG4vLyBUaGlzIG1peGluIHByb3ZpZGVzIGJhc2Ugc3R5bGVzIGZvciB0aGUgd3JhcHBlciBhcm91bmQgbWF0LWxpbmUgZWxlbWVudHMgaW4gYSBsaXN0LlxuQG1peGluIG1hdC1saW5lLXdyYXBwZXItYmFzZSgpIHtcbiAgQGluY2x1ZGUgbWF0LW5vcm1hbGl6ZS10ZXh0KCk7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLy8gTXVzdCByZW1vdmUgd3JhcHBlciB3aGVuIGxpbmVzIGFyZSBlbXB0eSBvciBpdCB0YWtlcyB1cCBob3Jpem9udGFsXG4gIC8vIHNwYWNlIGFuZCBwdXNoZXMgb3RoZXIgZWxlbWVudHMgdG8gdGhlIHJpZ2h0LlxuICAmOmVtcHR5IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cblxuXG4vLyBJbmNsdWRlIHRoaXMgZW1wdHkgbWl4aW4gZm9yIGNvbnNpc3RlbmN5IHdpdGggdGhlIG90aGVyIGNvbXBvbmVudHMuXG5AbWl4aW4gbWF0LWdyaWQtbGlzdC10aGVtZSgkdGhlbWUpIHsgfVxuXG5AbWl4aW4gbWF0LWdyaWQtbGlzdC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1ncmlkLXRpbGUtaGVhZGVyLFxuICAubWF0LWdyaWQtdGlsZS1mb290ZXIge1xuICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKSk7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cblxuLy8gSW5jbHVkZSB0aGlzIGVtcHR5IG1peGluIGZvciBjb25zaXN0ZW5jeSB3aXRoIHRoZSBvdGhlciBjb21wb25lbnRzLlxuQG1peGluIG1hdC1pY29uLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWljb24ge1xuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1pY29uLXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cblxuXG5cblxuLy8gUmVuZGVycyBhIGdyYWRpZW50IGZvciBzaG93aW5nIHRoZSBkYXNoZWQgbGluZSB3aGVuIHRoZSBpbnB1dCBpcyBkaXNhYmxlZC5cbi8vIFVubGlrZSB1c2luZyBhIGJvcmRlciwgYSBncmFkaWVudCBhbGxvd3MgdXMgdG8gYWRqdXN0IHRoZSBzcGFjaW5nIG9mIHRoZSBkb3R0ZWQgbGluZVxuLy8gdG8gbWF0Y2ggdGhlIE1hdGVyaWFsIERlc2lnbiBzcGVjLlxuQG1peGluIG1hdC1jb250cm9sLWRpc2FibGVkLXVuZGVybGluZSgkY29sb3IpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkY29sb3IgMCUsICRjb2xvciAzMyUsIHRyYW5zcGFyZW50IDAlKTtcbiAgYmFja2dyb3VuZC1zaXplOiA0cHggMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xufVxuXG4vLyBGaWd1cmVzIG91dCB0aGUgY29sb3Igb2YgdGhlIHBsYWNlaG9sZGVyIGZvciBhIGZvcm0gY29udHJvbC5cbi8vIFVzZWQgcHJpbWFyaWx5IHRvIHByZXZlbnQgdGhlIHZhcmlvdXMgZm9ybSBjb250cm9scyBmcm9tXG4vLyBiZWNvbWluZyBvdXQgb2Ygc3luYyBzaW5jZSB0aGVzZSBjb2xvcnMgYXJlbid0IGluIGEgcGFsZXR0ZS5cbkBmdW5jdGlvbiBfbWF0LWNvbnRyb2wtcGxhY2Vob2xkZXItY29sb3IoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gIEByZXR1cm4gbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNSwgMC40MikpO1xufVxuXG5cbi8qIHN0eWxlbGludC1kaXNhYmxlIG1hdGVyaWFsL25vLXByZWZpeGVzICovXG5AbWl4aW4gdXNlci1zZWxlY3QoJHZhbHVlKSB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6ICR2YWx1ZTtcbiAgLW1vei11c2VyLXNlbGVjdDogJHZhbHVlO1xuICAtbXMtdXNlci1zZWxlY3Q6ICR2YWx1ZTtcbiAgdXNlci1zZWxlY3Q6ICR2YWx1ZTtcbn1cblxuQG1peGluIGlucHV0LXBsYWNlaG9sZGVyIHtcbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cblxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gY3Vyc29yLWdyYWIge1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcbiAgY3Vyc29yOiBncmFiO1xufVxuXG5AbWl4aW4gY3Vyc29yLWdyYWJiaW5nIHtcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nO1xuICBjdXJzb3I6IGdyYWJiaW5nO1xufVxuXG5AbWl4aW4gYmFja2ZhY2UtdmlzaWJpbGl0eSgkdmFsdWUpIHtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiAkdmFsdWU7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6ICR2YWx1ZTtcbn1cbi8qIHN0eWxlbGludC1lbmFibGUgKi9cblxuXG5cbkBtaXhpbiBtYXQtaW5wdXQtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0IC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtaW5wdXQtZWxlbWVudDpkaXNhYmxlZCxcbiAgLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gIH1cblxuICAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuXG4gICAgQGluY2x1ZGUgaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6IF9tYXQtY29udHJvbC1wbGFjZWhvbGRlci1jb2xvcigkdGhlbWUpO1xuICAgIH1cblxuICAgIC8vIE9uIGRhcmsgdGhlbWVzIHdlIHNldCB0aGUgbmF0aXZlIGBzZWxlY3RgIGNvbG9yIHRvIHNvbWUgc2hhZGUgb2Ygd2hpdGUsXG4gICAgLy8gaG93ZXZlciB0aGUgY29sb3IgcHJvcGFnYXRlcyB0byBhbGwgb2YgdGhlIGBvcHRpb25gIGVsZW1lbnRzLCB3aGljaCBhcmVcbiAgICAvLyBhbHdheXMgb24gYSB3aGl0ZSBiYWNrZ3JvdW5kIGluc2lkZSB0aGUgZHJvcGRvd24sIGNhdXNpbmcgdGhlbSB0byBibGVuZCBpbi5cbiAgICAvLyBTaW5jZSB3ZSBjYW4ndCBjaGFuZ2UgYmFja2dyb3VuZCBvZiB0aGUgZHJvcGRvd24sIHdlIG5lZWQgdG8gZXhwbGljaXRseVxuICAgIC8vIHJlc2V0IHRoZSBjb2xvciBvZiB0aGUgb3B0aW9ucyB0byBzb21ldGhpbmcgZGFyay5cbiAgICBAaWYgKG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKSkge1xuICAgICAgb3B0aW9uIHtcbiAgICAgICAgY29sb3I6ICRkYXJrLXByaW1hcnktdGV4dDtcbiAgICAgIH1cblxuICAgICAgb3B0aW9uOmRpc2FibGVkIHtcbiAgICAgICAgY29sb3I6ICRkYXJrLWRpc2FibGVkLXRleHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1hY2NlbnQgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICB9XG5cbiAgLm1hdC13YXJuIC5tYXQtaW5wdXQtZWxlbWVudCxcbiAgLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gIH1cbn1cblxuQG1peGluIG1hdC1pbnB1dC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuXG4gIC8vIFRoZSBhbW91bnQgb2Ygc3BhY2UgYmV0d2VlbiB0aGUgdG9wIG9mIHRoZSBsaW5lIGFuZCB0aGUgdG9wIG9mIHRoZSBhY3R1YWwgdGV4dFxuICAvLyAoYXMgYSBmcmFjdGlvbiBvZiB0aGUgZm9udC1zaXplKS5cbiAgJGxpbmUtc3BhY2luZzogKCRsaW5lLWhlaWdodCAtIDEpIC8gMjtcblxuICAvLyA8aW5wdXQ+IGVsZW1lbnRzIHNlZW0gdG8gaGF2ZSB0aGVpciBoZWlnaHQgc2V0IHNsaWdodGx5IHRvbyBsYXJnZSBvbiBTYWZhcmkgY2F1c2luZyB0aGUgdGV4dCB0b1xuICAvLyBiZSBtaXNhbGlnbmVkIHcuci50LiB0aGUgcGxhY2Vob2xkZXIuIEFkZGluZyB0aGlzIG1hcmdpbiBjb3JyZWN0cyBpdC5cbiAgaW5wdXQubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIG1hcmdpbi10b3A6IC0kbGluZS1zcGFjaW5nICogMWVtO1xuICB9XG59XG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtbGlzdC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWxpc3QtYmFzZSB7XG4gICAgLm1hdC1saXN0LWl0ZW0ge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1saXN0LW9wdGlvbiB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXN1YmhlYWRlciB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1saXN0LWl0ZW0tZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlzYWJsZWQtbGlzdC1vcHRpb24pO1xuICB9XG5cbiAgLm1hdC1saXN0LW9wdGlvbixcbiAgLm1hdC1uYXYtbGlzdCAubWF0LWxpc3QtaXRlbSB7XG4gICAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdob3ZlcicpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWxpc3QtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gICRmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuXG4gIC5tYXQtbGlzdC1pdGVtIHtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICB9XG5cbiAgLm1hdC1saXN0LW9wdGlvbiB7XG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgfVxuXG4gIC8vIERlZmF1bHQgbGlzdFxuICAubWF0LWxpc3QtYmFzZSB7XG4gICAgLm1hdC1saXN0LWl0ZW0ge1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIHN1YmhlYWRpbmctMik7XG4gICAgICBAaW5jbHVkZSBtYXQtbGluZS1iYXNlKG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKSk7XG4gICAgfVxuXG4gICAgLm1hdC1saXN0LW9wdGlvbiB7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpKTtcbiAgICB9XG5cbiAgICAubWF0LXN1YmhlYWRlciB7XG4gICAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMik7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0yKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgICB9XG4gIH1cblxuICAvLyBEZW5zZSBsaXN0XG4gIC5tYXQtbGlzdC1iYXNlW2RlbnNlXSB7XG4gICAgLm1hdC1saXN0LWl0ZW0ge1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pKTtcbiAgICB9XG5cbiAgICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKSk7XG4gICAgfVxuXG4gICAgLm1hdC1zdWJoZWFkZXIge1xuICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1tZW51LXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtbWVudS1wYW5lbCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oNCwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gIH1cblxuICAubWF0LW1lbnUtaXRlbSB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ3RleHQnKTtcblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICYsICY6OmFmdGVyIHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1tZW51LWl0ZW0gLm1hdC1pY29uLW5vLWNvbG9yLFxuICAubWF0LW1lbnUtaXRlbS1zdWJtZW51LXRyaWdnZXI6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnaWNvbicpO1xuICB9XG5cbiAgLm1hdC1tZW51LWl0ZW06aG92ZXIsXG4gIC5tYXQtbWVudS1pdGVtLmNkay1wcm9ncmFtLWZvY3VzZWQsXG4gIC5tYXQtbWVudS1pdGVtLmNkay1rZXlib2FyZC1mb2N1c2VkLFxuICAubWF0LW1lbnUtaXRlbS1oaWdobGlnaHRlZCB7XG4gICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnaG92ZXInKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1tZW51LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LW1lbnUtaXRlbSB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LXBhZ2luYXRvci10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcblxuICAubWF0LXBhZ2luYXRvciB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICB9XG5cbiAgLm1hdC1wYWdpbmF0b3IsXG4gIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsXG4gIC5tYXQtcGFnaW5hdG9yLWluY3JlbWVudCB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBtYXQtY29sb3IoJGZvcmVncm91bmQsICdpY29uJyk7XG4gIH1cblxuICAubWF0LXBhZ2luYXRvci1maXJzdCxcbiAgLm1hdC1wYWdpbmF0b3ItbGFzdCB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgfVxuXG4gIC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIHtcbiAgICAubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsXG4gICAgLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50LFxuICAgIC5tYXQtcGFnaW5hdG9yLWZpcnN0LFxuICAgIC5tYXQtcGFnaW5hdG9yLWxhc3Qge1xuICAgICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsICdkaXNhYmxlZCcpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXBhZ2luYXRvci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1wYWdpbmF0b3IsXG4gIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC1wcm9ncmVzcy1iYXItdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICAgIGZpbGw6IG1hdC1jb2xvcigkcHJpbWFyeSwgbGlnaHRlcik7XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgbGlnaHRlcik7XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQge1xuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICAgICAgZmlsbDogbWF0LWNvbG9yKCRhY2NlbnQsIGxpZ2h0ZXIpO1xuICAgIH1cblxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgbGlnaHRlcik7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIHtcbiAgICAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kIHtcbiAgICAgIGZpbGw6IG1hdC1jb2xvcigkd2FybiwgbGlnaHRlcik7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkd2FybiwgbGlnaHRlcik7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1wcm9ncmVzcy1iYXItdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgLm1hdC1wcm9ncmVzcy1zcGlubmVyLCAubWF0LXNwaW5uZXIge1xuICAgIGNpcmNsZSB7XG4gICAgICBzdHJva2U6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IGNpcmNsZSB7XG4gICAgICBzdHJva2U6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIGNpcmNsZSB7XG4gICAgICBzdHJva2U6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG5cblxuXG5cbkBtaXhpbiBfbWF0LXJhZGlvLWNvbG9yKCRwYWxldHRlKSB7XG4gICYubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgfVxuXG4gIC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLFxuICAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50Om5vdCgubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlKSxcbiAgJi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlLFxuICAmOmFjdGl2ZSAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtcmFkaW8tdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1yYWRpby1idXR0b24ge1xuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgX21hdC1yYWRpby1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtcmFkaW8tY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXJhZGlvLWNvbG9yKCR3YXJuKTtcbiAgICB9XG5cbiAgICAvLyBUaGlzIG5lZWRzIGV4dHJhIHNwZWNpZmljaXR5LCBiZWNhdXNlIHRoZSBjbGFzc2VzIGFib3ZlIGFyZSBjb21iaW5lZFxuICAgIC8vIChlLmcuIGAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50YCkgd2hpY2ggaW5jcmVhc2VzIHRoZWlyIHNwZWNpZmljaXR5IGEgbG90LlxuICAgIC8vIFRPRE86IGNvbnNpZGVyIG1ha2luZyB0aGUgc2VsZWN0b3JzIGludG8gZGVzY2VuZGFudHMgKGAubWF0LXByaW1hcnkgLm1hdC1yYWRpby1idXR0b25gKS5cbiAgICAmLm1hdC1yYWRpby1kaXNhYmxlZCB7XG4gICAgICAmLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlLFxuICAgICAgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgICAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQpO1xuICAgICAgfVxuXG4gICAgICAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50LFxuICAgICAgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkKTtcbiAgICAgIH1cblxuICAgICAgLm1hdC1yYWRpby1sYWJlbC1jb250ZW50IHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN3aXRjaCB0aGlzIHRvIGEgc29saWQgY29sb3Igc2luY2Ugd2UncmUgdXNpbmcgYG9wYWNpdHlgXG4gICAgLy8gdG8gY29udHJvbCBob3cgb3BhcXVlIHRoZSByaXBwbGUgc2hvdWxkIGJlLlxuICAgIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwX2dldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcmFkaW8tdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG59XG5cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1zZWxlY3QtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gIC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogX21hdC1jb250cm9sLXBsYWNlaG9sZGVyLWNvbG9yKCR0aGVtZSk7XG4gIH1cblxuICAubWF0LXNlbGVjdC1kaXNhYmxlZCAubWF0LXNlbGVjdC12YWx1ZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gIH1cblxuICAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtcGFuZWwge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oNCwgJHRoZW1lKTtcblxuICAgIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIsIDAuMTIpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgJi5tYXQtZm9jdXNlZCB7XG4gICAgICAmLm1hdC1wcmltYXJ5IC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgICB9XG5cbiAgICAgICYubWF0LWFjY2VudCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgICB9XG5cbiAgICAgICYubWF0LXdhcm4gLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LXNlbGVjdC5tYXQtc2VsZWN0LWludmFsaWQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuXG4gICAgLm1hdC1zZWxlY3QubWF0LXNlbGVjdC1kaXNhYmxlZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1zZWxlY3QtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcblxuICAubWF0LXNlbGVjdCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICAgIGhlaWdodDogJGxpbmUtaGVpZ2h0ICogMWVtO1xuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LXNpZGVuYXYtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gICRkcmF3ZXItYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaWFsb2cpO1xuICAkZHJhd2VyLWNvbnRhaW5lci1iYWNrZ3JvdW5kLWNvbG9yOiAgbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kKTtcbiAgJGRyYXdlci1wdXNoLWJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlhbG9nKTtcbiAgJGRyYXdlci1zaWRlLWJvcmRlcjogc29saWQgMXB4IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG5cbiAgLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZHJhd2VyLWNvbnRhaW5lci1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1kcmF3ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRkcmF3ZXItYmFja2dyb3VuZC1jb2xvcjtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICYubWF0LWRyYXdlci1wdXNoIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkcmF3ZXItcHVzaC1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIH1cblxuICAgICY6bm90KC5tYXQtZHJhd2VyLXNpZGUpIHtcbiAgICAgIC8vIFRoZSBlbGV2YXRpb24gb2Ygei0xNiBpcyBub3RlZCBpbiB0aGUgZGVzaWduIHNwZWNpZmljYXRpb25zLlxuICAgICAgLy8gU2VlIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2NvbXBvbmVudHMvbmF2aWdhdGlvbi1kcmF3ZXIuaHRtbFxuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMTYsICR0aGVtZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1kcmF3ZXItc2lkZSB7XG4gICAgYm9yZGVyLXJpZ2h0OiAkZHJhd2VyLXNpZGUtYm9yZGVyO1xuXG4gICAgJi5tYXQtZHJhd2VyLWVuZCB7XG4gICAgICBib3JkZXItbGVmdDogJGRyYXdlci1zaWRlLWJvcmRlcjtcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICB9XG4gIH1cblxuICBbZGlyPSdydGwnXSAubWF0LWRyYXdlci1zaWRlIHtcbiAgICBib3JkZXItbGVmdDogJGRyYXdlci1zaWRlLWJvcmRlcjtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG5cbiAgICAmLm1hdC1kcmF3ZXItZW5kIHtcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAkZHJhd2VyLXNpZGUtYm9yZGVyO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZHJhd2VyLWJhY2tkcm9wLm1hdC1kcmF3ZXItc2hvd24ge1xuICAgICRvcGFjaXR5OiAwLjY7XG4gICAgJGJhY2tkcm9wLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQsICRvcGFjaXR5KTtcblxuICAgIEBpZiAodHlwZS1vZigkYmFja2Ryb3AtY29sb3IpID09IGNvbG9yKSB7XG4gICAgICAvLyBXZSB1c2UgaW52ZXJ0KCkgaGVyZSB0byBoYXZlIHRoZSBkYXJrZW4gdGhlIGJhY2tncm91bmQgY29sb3IgZXhwZWN0ZWQgdG8gYmUgdXNlZC4gSWYgdGhlXG4gICAgICAvLyBiYWNrZ3JvdW5kIGlzIGxpZ2h0LCB3ZSB1c2UgYSBkYXJrIGJhY2tkcm9wLiBJZiB0aGUgYmFja2dyb3VuZCBpcyBkYXJrLFxuICAgICAgLy8gd2UgdXNlIGEgbGlnaHQgYmFja2Ryb3AuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbnZlcnQoJGJhY2tkcm9wLWNvbG9yKTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgLy8gSWYgd2UgY291bGRuJ3QgcmVzb2x2ZSB0aGUgYmFja2Ryb3AgY29sb3IgdG8gYSBjb2xvciB2YWx1ZSwgZmFsbCBiYWNrIHRvIHVzaW5nXG4gICAgICAvLyBgb3BhY2l0eWAgdG8gbWFrZSBpdCBvcGFxdWUgc2luY2UgaXRzIGVuZCB2YWx1ZSBjb3VsZCBiZSBhIHNvbGlkIGNvbG9yLlxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tkcm9wLWNvbG9yO1xuICAgICAgb3BhY2l0eTogJG9wYWNpdHk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtc2lkZW5hdi10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG5cblxuXG5cblxuQG1peGluIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJHBhbGV0dGUsICR0aHVtYi1jaGVja2VkLWh1ZSkge1xuICAmLm1hdC1jaGVja2VkIHtcbiAgICAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuXG4gICAgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgICAgIC8vIE9wYWNpdHkgaXMgZGV0ZXJtaW5lZCBmcm9tIHRoZSBzcGVjcyBmb3IgdGhlIHNlbGVjdGlvbiBjb250cm9scy5cbiAgICAgIC8vIFNlZTogaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vY29tcG9uZW50cy9zZWxlY3Rpb24tY29udHJvbHMuaHRtbCNzcGVjc1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCAkdGh1bWItY2hlY2tlZC1odWUsIDAuNTQpO1xuICAgIH1cblxuICAgIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgLy8gU2V0IG5vIG9wYWNpdHkgZm9yIHRoZSByaXBwbGVzIGJlY2F1c2UgdGhlIHJpcHBsZSBvcGFjaXR5IHdpbGwgYmUgYWRqdXN0ZWQgZHluYW1pY2FsbHlcbiAgICAgIC8vIGJhc2VkIG9uIHRoZSB0eXBlIG9mIGludGVyYWN0aW9uIHdpdGggdGhlIHNsaWRlLXRvZ2dsZSAoZS5nLiBmb3IgaG92ZXIsIGZvY3VzKVxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCAkdGh1bWItY2hlY2tlZC1odWUpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNsaWRlLXRvZ2dsZS10aGVtZSgkdGhlbWUpIHtcbiAgJGlzLWRhcms6IG1hcF9nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLy8gQ29sb3IgaHVlcyBhcmUgYmFzZWQgb24gdGhlIHNwZWNzIHdoaWNoIGJyaWVmbHkgc2hvdyB0aGUgaHVlcyB0aGF0IGFyZSBhcHBsaWVkIHRvIGEgc3dpdGNoLlxuICAvLyBUaGUgMjAxOCBzcGVjcyBubyBsb25nZXIgZGVzY3JpYmUgaG93IGRhcmsgc3dpdGNoZXMgc2hvdWxkIGxvb2sgbGlrZS4gRHVlIHRvIHRoZSBsYWNrIG9mXG4gIC8vIGluZm9ybWF0aW9uIGZvciBkYXJrIHRoZW1lZCBzd2l0Y2hlcywgd2UgcGFydGlhbGx5IGtlZXAgdGhlIG9sZCBiZWhhdmlvciB0aGF0IGlzIGJhc2VkIG9uXG4gIC8vIHRoZSBwcmV2aW91cyBzcGVjaWZpY2F0aW9ucy4gRm9yIHRoZSBjaGVja2VkIGNvbG9yIHdlIGFsd2F5cyB1c2UgdGhlIGBkZWZhdWx0YCBodWUgYmVjYXVzZVxuICAvLyB0aGF0IGZvbGxvd3MgTURDIGFuZCBhbHNvIG1ha2VzIGl0IGVhc2llciBmb3IgcGVvcGxlIHRvIGNyZWF0ZSBhIGN1c3RvbSB0aGVtZSB3aXRob3V0IG5lZWRpbmdcbiAgLy8gdG8gc3BlY2lmeSBlYWNoIGh1ZSBpbmRpdmlkdWFsbHkuXG4gICR0aHVtYi11bmNoZWNrZWQtaHVlOiBpZigkaXMtZGFyaywgNDAwLCA1MCk7XG4gICR0aHVtYi1jaGVja2VkLWh1ZTogZGVmYXVsdDtcblxuICAkYmFyLXVuY2hlY2tlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZCk7XG4gICRyaXBwbGUtdW5jaGVja2VkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGJhc2UpO1xuXG4gIC5tYXQtc2xpZGUtdG9nZ2xlIHtcbiAgICBAaW5jbHVkZSBfbWF0LXNsaWRlLXRvZ2dsZS1jaGVja2VkKCRhY2NlbnQsICR0aHVtYi1jaGVja2VkLWh1ZSk7XG5cbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJHByaW1hcnksICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXNsaWRlLXRvZ2dsZS1jaGVja2VkKCR3YXJuLCAkdGh1bWItY2hlY2tlZC1odWUpO1xuICAgIH1cblxuICAgICY6bm90KC5tYXQtY2hlY2tlZCkgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICAvLyBTZXQgbm8gb3BhY2l0eSBmb3IgdGhlIHJpcHBsZXMgYmVjYXVzZSB0aGUgcmlwcGxlIG9wYWNpdHkgd2lsbCBiZSBhZGp1c3RlZCBkeW5hbWljYWxseVxuICAgICAgLy8gYmFzZWQgb24gdGhlIHR5cGUgb2YgaW50ZXJhY3Rpb24gd2l0aCB0aGUgc2xpZGUtdG9nZ2xlIChlLmcuIGZvciBob3ZlciwgZm9jdXMpXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmlwcGxlLXVuY2hlY2tlZC1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMSwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJG1hdC1ncmV5LCAkdGh1bWItdW5jaGVja2VkLWh1ZSk7XG4gIH1cblxuICAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYXItdW5jaGVja2VkLWNvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc2xpZGUtdG9nZ2xlLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXNsaWRlLXRvZ2dsZS1jb250ZW50IHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG59XG5cblxuXG5cblxuQG1peGluIF9tYXQtc2xpZGVyLWlubmVyLWNvbnRlbnQtdGhlbWUoJHBhbGV0dGUpIHtcbiAgLm1hdC1zbGlkZXItdHJhY2stZmlsbCxcbiAgLm1hdC1zbGlkZXItdGh1bWIsXG4gIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICB9XG5cbiAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbGlkZXItdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gICRtYXQtc2xpZGVyLW9mZi1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItb2ZmKTtcbiAgJG1hdC1zbGlkZXItb2ZmLWZvY3VzZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW9mZi1hY3RpdmUpO1xuICAkbWF0LXNsaWRlci1kaXNhYmxlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItb2ZmKTtcbiAgJG1hdC1zbGlkZXItbGFiZWxlZC1taW4tdmFsdWUtdGh1bWItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW1pbik7XG4gICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1vZmYpO1xuICAkbWF0LXNsaWRlci1mb2N1cy1yaW5nLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgZGVmYXVsdCwgMC4yKTtcbiAgJG1hdC1zbGlkZXItZm9jdXMtcmluZy1taW4tdmFsdWUtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSwgMC4xMik7XG4gICRtYXQtc2xpZGVyLXRpY2stY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSwgMC43KTtcbiAgJG1hdC1zbGlkZXItdGljay1zaXplOiAycHg7XG5cbiAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItb2ZmLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1wcmltYXJ5IHtcbiAgICBAaW5jbHVkZSBfbWF0LXNsaWRlci1pbm5lci1jb250ZW50LXRoZW1lKCRwcmltYXJ5KTtcbiAgfVxuXG4gIC5tYXQtYWNjZW50IHtcbiAgICBAaW5jbHVkZSBfbWF0LXNsaWRlci1pbm5lci1jb250ZW50LXRoZW1lKCRhY2NlbnQpO1xuICB9XG5cbiAgLm1hdC13YXJuIHtcbiAgICBAaW5jbHVkZSBfbWF0LXNsaWRlci1pbm5lci1jb250ZW50LXRoZW1lKCR3YXJuKTtcbiAgfVxuXG4gIC5tYXQtc2xpZGVyLWZvY3VzLXJpbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWZvY3VzLXJpbmctY29sb3I7XG4gIH1cblxuICAubWF0LXNsaWRlcjpob3ZlcixcbiAgLmNkay1mb2N1c2VkIHtcbiAgICAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLW9mZi1mb2N1c2VkLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGVyLWRpc2FibGVkIHtcbiAgICAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kLFxuICAgIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsXG4gICAgLm1hdC1zbGlkZXItdGh1bWIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItZGlzYWJsZWQtY29sb3I7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXItbWluLXZhbHVlIHtcbiAgICAubWF0LXNsaWRlci1mb2N1cy1yaW5nIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWZvY3VzLXJpbmctbWluLXZhbHVlLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nIHtcbiAgICAgIC5tYXQtc2xpZGVyLXRodW1iLFxuICAgICAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1sYWJlbGVkLW1pbi12YWx1ZS10aHVtYi1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgJi5jZGstZm9jdXNlZCB7XG4gICAgICAgIC5tYXQtc2xpZGVyLXRodW1iLFxuICAgICAgICAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItbGFiZWxlZC1taW4tdmFsdWUtdGh1bWItbGFiZWwtY29sb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKSB7XG4gICAgICAubWF0LXNsaWRlci10aHVtYiB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJG1hdC1zbGlkZXItb2ZmLWNvbG9yO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlcixcbiAgICAgICYuY2RrLWZvY3VzZWQge1xuICAgICAgICAubWF0LXNsaWRlci10aHVtYiB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkbWF0LXNsaWRlci1vZmYtZm9jdXNlZC1jb2xvcjtcbiAgICAgICAgfVxuXG4gICAgICAgICYubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10aHVtYiB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkbWF0LXNsaWRlci1kaXNhYmxlZC1jb2xvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGVyLWhhcy10aWNrcyAubWF0LXNsaWRlci13cmFwcGVyOjphZnRlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAkbWF0LXNsaWRlci10aWNrLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1zbGlkZXItaG9yaXpvbnRhbCAubWF0LXNsaWRlci10aWNrcyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJG1hdC1zbGlkZXItdGljay1jb2xvcixcbiAgICAgICAgJG1hdC1zbGlkZXItdGljay1jb2xvciAkbWF0LXNsaWRlci10aWNrLXNpemUsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTtcbiAgICAvLyBGaXJlZm94IGRvZXNuJ3QgZHJhdyB0aGUgZ3JhZGllbnQgY29ycmVjdGx5IHdpdGggJ3RvIHJpZ2h0J1xuICAgIC8vIChzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTMxNDMxOSkuXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1yZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDAuMDAwMWRlZywgJG1hdC1zbGlkZXItdGljay1jb2xvcixcbiAgICAgICAgJG1hdC1zbGlkZXItdGljay1jb2xvciAkbWF0LXNsaWRlci10aWNrLXNpemUsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTtcbiAgfVxuXG4gIC5tYXQtc2xpZGVyLXZlcnRpY2FsIC5tYXQtc2xpZGVyLXRpY2tzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJG1hdC1zbGlkZXItdGljay1jb2xvcixcbiAgICAgICAgJG1hdC1zbGlkZXItdGljay1jb2xvciAkbWF0LXNsaWRlci10aWNrLXNpemUsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNsaWRlci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dCB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXN0ZXBwZXItdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgLm1hdC1zdGVwLWhlYWRlciB7XG4gICAgJi5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcbiAgICAmLmNkay1wcm9ncmFtLWZvY3VzZWQsXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICB9XG5cbiAgICAvLyBPbiB0b3VjaCBkZXZpY2VzIHRoZSA6aG92ZXIgc3RhdGUgd2lsbCBsaW5nZXIgb24gdGhlIGVsZW1lbnQgYWZ0ZXIgYSB0YXAuXG4gICAgLy8gUmVzZXQgaXQgdmlhIGBAbWVkaWFgIGFmdGVyIHRoZSBkZWNsYXJhdGlvbiwgYmVjYXVzZSB0aGUgbWVkaWEgcXVlcnkgaXNuJ3RcbiAgICAvLyBzdXBwb3J0ZWQgYnkgYWxsIGJyb3dzZXJzIHlldC5cbiAgICBAbWVkaWEgKGhvdmVyOiBub25lKSB7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtbGFiZWwsXG4gICAgLm1hdC1zdGVwLW9wdGlvbmFsIHtcbiAgICAgIC8vIFRPRE8oam9zZXBocGVycm90dCk6IFVwZGF0ZSB0byB1c2luZyBhIGNvcnJlY3RlZCBkaXNhYmxlZC10ZXh0IGNvbnRyYXN0XG4gICAgICAvLyBpbnN0ZWFkIG9mIHNlY29uZGFyeS10ZXh0LlxuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1pY29uIHtcbiAgICAgIC8vIFRPRE8oam9zZXBocGVycm90dCk6IFVwZGF0ZSB0byB1c2luZyBhIGNvcnJlY3RlZCBkaXNhYmxlZC10ZXh0IGNvbnRyYXN0XG4gICAgICAvLyBpbnN0ZWFkIG9mIHNlY29uZGFyeS10ZXh0LlxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCxcbiAgICAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1kb25lLFxuICAgIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVycm9yIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWxhYmVsLm1hdC1zdGVwLWxhYmVsLWFjdGl2ZSB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtZXJyb3Ige1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zdGVwcGVyLWhvcml6b250YWwsIC5tYXQtc3RlcHBlci12ZXJ0aWNhbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgfVxuXG4gIC5tYXQtc3RlcHBlci12ZXJ0aWNhbC1saW5lOjpiZWZvcmUge1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjpiZWZvcmUsXG4gIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcjo6YWZ0ZXIsXG4gIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmUge1xuICAgIGJvcmRlci10b3AtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cbn1cblxuQG1peGluIG1hdC1zdGVwcGVyLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXN0ZXBwZXItdmVydGljYWwsIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1zdGVwLWxhYmVsIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpO1xuICAgIH07XG4gIH1cblxuICAubWF0LXN0ZXAtc3ViLWxhYmVsLWVycm9yIHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG5cbiAgLm1hdC1zdGVwLWxhYmVsLWVycm9yIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxuXG4gIC5tYXQtc3RlcC1sYWJlbC1zZWxlY3RlZCB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTIpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgICB9O1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc29ydC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXNvcnQtaGVhZGVyLWFycm93IHtcbiAgICAkdGFibGUtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICAgICR0ZXh0LWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcblxuICAgIC8vIEJlY2F1c2UgdGhlIGFycm93IGlzIG1hZGUgdXAgb2YgbXVsdGlwbGUgZWxlbWVudHMgdGhhdCBhcmUgc3RhY2tlZCBvbiB0b3Agb2YgZWFjaCBvdGhlcixcbiAgICAvLyB3ZSBjYW4ndCB1c2UgdGhlIHNlbWktdHJhc3BhcmVudCBjb2xvciBmcm9tIHRoZSB0aGVtZSBkaXJlY3RseS4gSWYgdGhlIHZhbHVlIGlzIGEgY29sb3JcbiAgICAvLyAqdHlwZSosIHdlIGNvbnZlcnQgaXQgaW50byBhIHNvbGlkIGNvbG9yIGJ5IHRha2luZyB0aGUgb3BhY2l0eSBmcm9tIHRoZSByZ2JhIHZhbHVlIGFuZFxuICAgIC8vIHVzaW5nIHRoZSB2YWx1ZSB0byBkZXRlcm1pbmUgdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIGJhY2tncm91bmQgdG8gcHV0IGludG8gZm9yZWdyb3VuZFxuICAgIC8vIHdoZW4gbWl4aW5nIHRoZSBjb2xvcnMgdG9nZXRoZXIuIE90aGVyd2lzZSwgaWYgaXQgcmVzb2x2ZXMgdG8gc29tZXRoaW5nIGRpZmZlcmVudFxuICAgIC8vIChlLmcuIGl0IHJlc29sdmVzIHRvIGEgQ1NTIHZhcmlhYmxlKSwgd2UgdXNlIHRoZSBjb2xvciBkaXJlY3RseS5cbiAgICBAaWYgKHR5cGUtb2YoJHRhYmxlLWJhY2tncm91bmQpID09IGNvbG9yIGFuZCB0eXBlLW9mKCR0ZXh0LWNvbG9yKSA9PSBjb2xvcikge1xuICAgICAgJHRleHQtb3BhY2l0eTogb3BhY2l0eSgkdGV4dC1jb2xvcik7XG4gICAgICBjb2xvcjogbWl4KCR0YWJsZS1iYWNrZ3JvdW5kLCByZ2JhKCR0ZXh0LWNvbG9yLCAxKSwgKDEgLSAkdGV4dC1vcGFjaXR5KSAqIDEwMCUpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICBjb2xvcjogJHRleHQtY29sb3I7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtc29ydC10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtdGFicy10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRoZWFkZXItYm9yZGVyOiAxcHggc29saWQgbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcblxuICAubWF0LXRhYi1uYXYtYmFyLFxuICAubWF0LXRhYi1oZWFkZXIge1xuICAgIGJvcmRlci1ib3R0b206ICRoZWFkZXItYm9yZGVyO1xuICB9XG5cbiAgLm1hdC10YWItZ3JvdXAtaW52ZXJ0ZWQtaGVhZGVyIHtcbiAgICAubWF0LXRhYi1uYXYtYmFyLFxuICAgIC5tYXQtdGFiLWhlYWRlciB7XG4gICAgICBib3JkZXItdG9wOiAkaGVhZGVyLWJvcmRlcjtcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWxpbmsge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJi5tYXQtdGFiLWRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgfVxuXG4gIC8vIFJlbW92ZSBoZWFkZXIgYm9yZGVyIHdoZW4gdGhlcmUgaXMgYSBiYWNrZ3JvdW5kIGNvbG9yXG4gIC5tYXQtdGFiLWdyb3VwW2NsYXNzKj0nbWF0LWJhY2tncm91bmQtJ10gLm1hdC10YWItaGVhZGVyLFxuICAubWF0LXRhYi1uYXYtYmFyW2NsYXNzKj0nbWF0LWJhY2tncm91bmQtJ10ge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgfVxuXG4gIC5tYXQtdGFiLWdyb3VwLCAubWF0LXRhYi1uYXYtYmFyIHtcbiAgICAkdGhlbWUtY29sb3JzOiAoXG4gICAgICBwcmltYXJ5OiAkcHJpbWFyeSxcbiAgICAgIGFjY2VudDogJGFjY2VudCxcbiAgICAgIHdhcm46ICR3YXJuXG4gICAgKTtcblxuICAgIEBlYWNoICRuYW1lLCAkY29sb3IgaW4gJHRoZW1lLWNvbG9ycyB7XG4gICAgICAvLyBTZXQgdGhlIGZvcmVncm91bmQgY29sb3Igb2YgdGhlIHRhYnNcbiAgICAgICYubWF0LSN7JG5hbWV9IHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC10YWItbGFiZWwtZm9jdXMoJGNvbG9yKTtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1pbmstYmFyKCRjb2xvcik7XG5cbiAgICAgICAgLy8gT3ZlcnJpZGUgaW5rIGJhciB3aGVuIGJhY2tncm91bmQgY29sb3IgaXMgdGhlIHNhbWVcbiAgICAgICAgJi5tYXQtYmFja2dyb3VuZC0jeyRuYW1lfSB7XG4gICAgICAgICAgQGluY2x1ZGUgX21hdC1pbmstYmFyKCRjb2xvciwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBAZWFjaCAkbmFtZSwgJGNvbG9yIGluICR0aGVtZS1jb2xvcnMge1xuICAgICAgLy8gU2V0IGJhY2tncm91bmQgY29sb3Igb2YgdGhlIHRhYnMgYW5kIG92ZXJyaWRlIGZvY3VzIGNvbG9yXG4gICAgICAmLm1hdC1iYWNrZ3JvdW5kLSN7JG5hbWV9IHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC10YWItbGFiZWwtZm9jdXMoJGNvbG9yKTtcbiAgICAgICAgQGluY2x1ZGUgX21hdC10YWJzLWJhY2tncm91bmQoJGNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIF9tYXQtaW5rLWJhcigkY29sb3IsICRodWU6IGRlZmF1bHQpIHtcbiAgLm1hdC1pbmstYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGNvbG9yLCAkaHVlKTtcbiAgfVxufVxuXG5AbWl4aW4gX21hdC10YWItbGFiZWwtZm9jdXMoJHRhYi1mb2N1cy1jb2xvcikge1xuICAubWF0LXRhYi1sYWJlbCxcbiAgLm1hdC10YWItbGluayB7XG4gICAgJi5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcbiAgICAmLmNkay1wcm9ncmFtLWZvY3VzZWQge1xuICAgICAgJjpub3QoLm1hdC10YWItZGlzYWJsZWQpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR0YWItZm9jdXMtY29sb3IsIGxpZ2h0ZXIsIDAuMyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfbWF0LXRhYnMtYmFja2dyb3VuZCgkYmFja2dyb3VuZC1jb2xvcikge1xuICAvLyBTZXQgYmFja2dyb3VuZCBjb2xvciBmb3IgdGhlIHRhYiBncm91cFxuICAubWF0LXRhYi1oZWFkZXIsIC5tYXQtdGFiLWxpbmtzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IpO1xuICB9XG5cbiAgLy8gU2V0IGxhYmVscyB0byBjb250cmFzdCBhZ2FpbnN0IGJhY2tncm91bmRcbiAgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWxpbmsge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QpO1xuXG4gICAgJi5tYXQtdGFiLWRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QsIDAuNCk7XG4gICAgfVxuICB9XG5cbiAgLy8gU2V0IHBhZ2luYXRpb24gY2hldnJvbnMgdG8gY29udHJhc3QgYmFja2dyb3VuZFxuICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cblxuICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCwgMC40KTtcbiAgfVxuXG4gIC8vIFNldCByaXBwbGVzIGNvbG9yIHRvIGJlIHRoZSBjb250cmFzdCBjb2xvciBvZiB0aGUgbmV3IGJhY2tncm91bmQuIE90aGVyd2lzZSB0aGUgcmlwcGxlXG4gIC8vIGNvbG9yIHdpbGwgYmUgYmFzZWQgb24gdGhlIGFwcCBiYWNrZ3JvdW5kIGNvbG9yLlxuICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QsIDAuMTIpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdGFicy10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC10YWItZ3JvdXAge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbGluayB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYnV0dG9uKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYnV0dG9uKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJ1dHRvbik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gX21hdC10b29sYmFyLWNvbG9yKCRwYWxldHRlKSB7XG4gIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gIGNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpO1xufVxuXG5AbWl4aW4gX21hdC10b29sYmFyLWZvcm0tZmllbGQtb3ZlcnJpZGVzIHtcbiAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSxcbiAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSxcbiAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgLm1hdC1zZWxlY3QtdmFsdWUsXG4gIC5tYXQtc2VsZWN0LWFycm93LFxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG5cbiAgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogY3VycmVudENvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdG9vbGJhci10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC10b29sYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGFwcC1iYXIpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItY29sb3IoJHdhcm4pO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIF9tYXQtdG9vbGJhci1mb3JtLWZpZWxkLW92ZXJyaWRlcztcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRvb2xiYXItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtdG9vbGJhcixcbiAgLm1hdC10b29sYmFyIGgxLFxuICAubWF0LXRvb2xiYXIgaDIsXG4gIC5tYXQtdG9vbGJhciBoMyxcbiAgLm1hdC10b29sYmFyIGg0LFxuICAubWF0LXRvb2xiYXIgaDUsXG4gIC5tYXQtdG9vbGJhciBoNiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHRpdGxlKTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuXG5cblxuXG4kbWF0LXRvb2x0aXAtdGFyZ2V0LWhlaWdodDogMjJweDtcbiRtYXQtdG9vbHRpcC1mb250LXNpemU6IDEwcHg7XG4kbWF0LXRvb2x0aXAtdmVydGljYWwtcGFkZGluZzogKCRtYXQtdG9vbHRpcC10YXJnZXQtaGVpZ2h0IC0gJG1hdC10b29sdGlwLWZvbnQtc2l6ZSkgLyAyO1xuXG4kbWF0LXRvb2x0aXAtaGFuZHNldC10YXJnZXQtaGVpZ2h0OiAzMHB4O1xuJG1hdC10b29sdGlwLWhhbmRzZXQtZm9udC1zaXplOiAxNHB4O1xuJG1hdC10b29sdGlwLWhhbmRzZXQtdmVydGljYWwtcGFkZGluZzpcbiAgICAoJG1hdC10b29sdGlwLWhhbmRzZXQtdGFyZ2V0LWhlaWdodCAtICRtYXQtdG9vbHRpcC1oYW5kc2V0LWZvbnQtc2l6ZSkgLyAyO1xuXG5AbWl4aW4gbWF0LXRvb2x0aXAtdGhlbWUoJHRoZW1lKSB7XG4gIC5tYXQtdG9vbHRpcCB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRtYXQtZ3JleSwgNzAwLCAwLjkpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdG9vbHRpcC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC10b29sdGlwIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICAgIGZvbnQtc2l6ZTogJG1hdC10b29sdGlwLWZvbnQtc2l6ZTtcbiAgICBwYWRkaW5nLXRvcDogJG1hdC10b29sdGlwLXZlcnRpY2FsLXBhZGRpbmc7XG4gICAgcGFkZGluZy1ib3R0b206ICRtYXQtdG9vbHRpcC12ZXJ0aWNhbC1wYWRkaW5nO1xuICB9XG5cbiAgLm1hdC10b29sdGlwLWhhbmRzZXQge1xuICAgIGZvbnQtc2l6ZTogJG1hdC10b29sdGlwLWhhbmRzZXQtZm9udC1zaXplO1xuICAgIHBhZGRpbmctdG9wOiAkbWF0LXRvb2x0aXAtaGFuZHNldC12ZXJ0aWNhbC1wYWRkaW5nO1xuICAgIHBhZGRpbmctYm90dG9tOiAkbWF0LXRvb2x0aXAtaGFuZHNldC12ZXJ0aWNhbC1wYWRkaW5nO1xuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC1zbmFjay1iYXItdGhlbWUoJHRoZW1lKSB7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuXG4gIC5tYXQtc25hY2stYmFyLWNvbnRhaW5lciB7XG4gICAgLy8gVXNlIHRoZSBwcmltYXJ5IHRleHQgb24gdGhlIGRhcmsgdGhlbWUsIGV2ZW4gdGhvdWdoIHRoZSBsaWdodGVyIG9uZSB1c2VzXG4gICAgLy8gYSBzZWNvbmRhcnksIGJlY2F1c2UgdGhlIGNvbnRyYXN0IG9uIHRoZSBsaWdodCBwcmltYXJ5IHRleHQgaXMgcG9vci5cbiAgICBjb2xvcjogaWYoJGlzLWRhcmstdGhlbWUsICRkYXJrLXByaW1hcnktdGV4dCwgJGxpZ2h0LXNlY29uZGFyeS10ZXh0KTtcbiAgICBiYWNrZ3JvdW5kOiBpZigkaXMtZGFyay10aGVtZSwgbWFwLWdldCgkbWF0LWdyZXksIDUwKSwgIzMyMzIzMik7XG5cbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbig2LCAkdGhlbWUpO1xuICB9XG5cbiAgLm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9uIHtcbiAgICBjb2xvcjogaWYoJGlzLWRhcmstdGhlbWUsIGluaGVyaXQsIG1hdC1jb2xvcigkYWNjZW50KSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbmFjay1iYXItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtc2ltcGxlLXNuYWNrYmFyIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2ltcGxlLXNuYWNrYmFyLWFjdGlvbiB7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBpbmhlcml0O1xuICAgICAgc2l6ZTogaW5oZXJpdDtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJ1dHRvbik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgb25seSBhcHBseSB0byB0aGUgZmlsbCBhcHBlYXJhbmNlIG9mIHRoZSBmb3JtLWZpZWxkLlxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtZmlsbC10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcblxuICAkZmlsbC1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGJhc2UsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjEsIDAuMDQpKTtcbiAgJGZpbGwtZGlzYWJsZWQtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlLCBpZigkaXMtZGFyay10aGVtZSwgMC4wNSwgMC4wMikpO1xuICAkdW5kZXJsaW5lLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjUsIDAuNDIpKTtcbiAgJGxhYmVsLWRpc2FibGVkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwge1xuICAgIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRmaWxsLWJhY2tncm91bmQ7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmlsbC1kaXNhYmxlZC1iYWNrZ3JvdW5kO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmU6OmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgY29sb3I6ICRsYWJlbC1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZTo6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFVzZWQgdG8gbWFrZSBpbnN0YW5jZXMgb2YgdGhlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyBtaXhpbiBuZWdsaWdpYmx5IGRpZmZlcmVudCxcbi8vIGFuZCBwcmV2ZW50IEdvb2dsZSdzIENTUyBPcHRpbWl6ZXIgZnJvbSBjb2xsYXBzaW5nIHRoZSBkZWNsYXJhdGlvbnMuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugc29tZVxuLy8gb2YgdGhlIHNlbGVjdG9ycyBjb250YWluIHBzZXVkby1jbGFzc2VzIG5vdCByZWNvZ25pemVkIGluIGFsbCBicm93c2Vycy4gSWYgYSBicm93c2VyIGVuY291bnRlcnNcbi8vIGFuIHVua25vd24gcHNldWRvLWNsYXNzIGl0IHdpbGwgZGlzY2FyZCB0aGUgZW50aXJlIHJ1bGUgc2V0LlxuJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlOiAwO1xuXG4vLyBBcHBsaWVzIGEgZmxvYXRpbmcgbGFiZWwgYWJvdmUgdGhlIGZvcm0gZmllbGQgY29udHJvbCBpdHNlbGYuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLWZpbGwtbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtZmlsbC1kZWR1cGUpXG4gICAgICAgICAgICAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuICB3aWR0aDogMTAwJSAvICRmb250LXNjYWxlICsgJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlO1xuXG4gICRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtZmlsbC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgYW5kIHN1YnNjcmlwdC5cbiAgJHN1YnNjcmlwdC1mb250LXNjYWxlOiAwLjc1O1xuICAvLyBUaGUgcGFkZGluZyBvbiB0b3Agb2YgdGhlIGluZml4LlxuICAkaW5maXgtcGFkZGluZy10b3A6IDAuMjVlbTtcbiAgLy8gVGhlIHBhZGRpbmcgYmVsb3cgdGhlIGluZml4LlxuICAkaW5maXgtcGFkZGluZy1ib3R0b206IDAuNzVlbTtcbiAgLy8gVGhlIG1hcmdpbiBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLWluZml4IHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgJGluZml4LW1hcmdpbi10b3A6IDFlbSAqICRsaW5lLWhlaWdodCAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIGFtb3VudCB3ZSBvZmZzZXQgdGhlIGxhYmVsIGZyb20gdGhlIGlucHV0IHRleHQgaW4gdGhlIGZpbGwgYXBwZWFyYW5jZS5cbiAgJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQ6IC0wLjVlbTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIHtcbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgICAgcGFkZGluZzogJGluZml4LXBhZGRpbmctdG9wIDAgJGluZml4LXBhZGRpbmctYm90dG9tIDA7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZy10b3A7XG4gICAgICBtYXJnaW4tdG9wOiAkZmlsbC1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldDtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1maWxsLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmctdG9wICsgJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWZpbGwtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZy10b3AgKyAkZmlsbC1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldCxcbiAgICAgICAgICAgICAgICAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IG9ubHkgYXBwbHkgdG8gdGhlIGxlZ2FjeSBhcHBlYXJhbmNlIG9mIHRoZSBmb3JtLWZpZWxkLlxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtbGVnYWN5LXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gICRsYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICR1bmRlcmxpbmUtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNywgMC40MikpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gICAgfVxuXG4gICAgLm1hdC1oaW50IHtcbiAgICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICBAaW5jbHVkZSBtYXQtY29udHJvbC1kaXNhYmxlZC11bmRlcmxpbmUoJHVuZGVybGluZS1jb2xvcik7XG4gICAgfVxuICB9XG59XG5cbi8vIFVzZWQgdG8gbWFrZSBpbnN0YW5jZXMgb2YgdGhlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyBtaXhpbiBuZWdsaWdpYmx5IGRpZmZlcmVudCxcbi8vIGFuZCBwcmV2ZW50IEdvb2dsZSdzIENTUyBPcHRpbWl6ZXIgZnJvbSBjb2xsYXBzaW5nIHRoZSBkZWNsYXJhdGlvbnMuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugc29tZVxuLy8gb2YgdGhlIHNlbGVjdG9ycyBjb250YWluIHBzZXVkby1jbGFzc2VzIG5vdCByZWNvZ25pemVkIGluIGFsbCBicm93c2Vycy4gSWYgYSBicm93c2VyIGVuY291bnRlcnNcbi8vIGFuIHVua25vd24gcHNldWRvLWNsYXNzIGl0IHdpbGwgZGlzY2FyZCB0aGUgZW50aXJlIHJ1bGUgc2V0LlxuJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGU6IDA7XG5cbi8vIEFwcGxpZXMgYSBmbG9hdGluZyBsYWJlbCBhYm92ZSB0aGUgZm9ybSBmaWVsZCBjb250cm9sIGl0c2VsZi5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgLy8gV2UgdXNlIHBlcnNwZWN0aXZlIHRvIGZpeCB0aGUgdGV4dCBibHVycmluZXNzIGFzIGRlc2NyaWJlZCBoZXJlOlxuICAvLyBodHRwOi8vd3d3LnVzZXJhZ2VudG1hbi5jb20vYmxvZy8yMDE0LzA1LzA0L2ZpeGluZy10eXBvZ3JhcGh5LWluc2lkZS1vZi0yLWQtY3NzLXRyYW5zZm9ybXMvXG4gIC8vIFRoaXMgcmVzdWx0cyBpbiBhIHNtYWxsIGppdHRlciBhZnRlciB0aGUgbGFiZWwgZmxvYXRzIG9uIEZpcmVmb3gsIHdoaWNoIHRoZVxuICAvLyB0cmFuc2xhdGVaIGZpeGVzLlxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcpIHNjYWxlKCRmb250LXNjYWxlKSBwZXJzcGVjdGl2ZSgxMDBweClcbiAgdHJhbnNsYXRlWigwLjAwMXB4ICsgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUpO1xuICAvLyBUaGUgdHJpY2tzIGFib3ZlIHVzZWQgdG8gc21vb3RoIG91dCB0aGUgYW5pbWF0aW9uIG9uIGNocm9tZSBhbmQgZmlyZWZveCBhY3R1YWxseSBtYWtlIHRoaW5nc1xuICAvLyB3b3JzZSBvbiBJRSwgc28gd2UgZG9uJ3QgaW5jbHVkZSB0aGVtIGluIHRoZSBJRSB2ZXJzaW9uLlxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUpXG4gICAgICAgICAgICAgICAgICBzY2FsZSgkZm9udC1zY2FsZSk7XG5cbiAgd2lkdGg6IDEwMCUgLyAkZm9udC1zY2FsZSArICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlO1xuXG4gICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlOiAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuLy8gU2FtZSBhcyBtaXhpbiBhYm92ZSwgYnV0IG9taXRzIHRoZSB0cmFuc2xhdGVaIGZvciBwcmludGluZyBwdXJwb3Nlcy5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nLXByaW50KCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgLy8gVGhpcyByZXN1bHRzIGluIGEgc21hbGwgaml0dGVyIGFmdGVyIHRoZSBsYWJlbCBmbG9hdHMgb24gRmlyZWZveCwgd2hpY2ggdGhlXG4gIC8vIHRyYW5zbGF0ZVogZml4ZXMuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlKVxuICAgICAgICAgICAgICAgICAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuICAvLyBUaGUgdHJpY2tzIGFib3ZlIHVzZWQgdG8gc21vb3RoIG91dCB0aGUgYW5pbWF0aW9uIG9uIGNocm9tZSBhbmQgZmlyZWZveCBhY3R1YWxseSBtYWtlIHRoaW5nc1xuICAvLyB3b3JzZSBvbiBJRSwgc28gd2UgZG9uJ3QgaW5jbHVkZSB0aGVtIGluIHRoZSBJRSB2ZXJzaW9uLlxuICAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1sZWdhY3ktdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsIGFuZCBzdWJzY3JpcHQuXG4gICRzdWJzY3JpcHQtZm9udC1zY2FsZTogMC43NTtcbiAgLy8gVGhlIGFtb3VudCBvZiBzcGFjZSBiZXR3ZWVuIHRoZSB0b3Agb2YgdGhlIGxpbmUgYW5kIHRoZSB0b3Agb2YgdGhlIGFjdHVhbCB0ZXh0XG4gIC8vIChhcyBhIGZyYWN0aW9uIG9mIHRoZSBmb250LXNpemUpLlxuICAkbGluZS1zcGFjaW5nOiAoJGxpbmUtaGVpZ2h0IC0gMSkgLyAyO1xuICAvLyBUaGUgcGFkZGluZyBvbiB0aGUgaW5maXguIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLCBidXQgc2VlbSB0byBtZWFzdXJlIGZyb20gdGhlIGVkZ2VcbiAgLy8gb2YgdGhlIHRleHQgaXRzZWxmLCBub3QgdGhlIGVkZ2Ugb2YgdGhlIGxpbmU7IHRoZXJlZm9yZSB3ZSBzdWJ0cmFjdCBvZmYgdGhlIGxpbmUgc3BhY2luZy5cbiAgJGluZml4LXBhZGRpbmc6IDAuNWVtIC0gJGxpbmUtc3BhY2luZztcbiAgLy8gVGhlIG1hcmdpbiBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLWluZml4IHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgJGluZml4LW1hcmdpbi10b3A6IDFlbSAqICRsaW5lLWhlaWdodCAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIHNwYWNlIGJldHdlZW4gdGhlIGJvdHRvbSBvZiB0aGUgLm1hdC1mb3JtLWZpZWxkLWZsZXggYXJlYSBhbmQgdGhlIHN1YnNjcmlwdCB3cmFwcGVyLlxuICAvLyBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZSwgYnV0IHRoaXMgbWFyZ2luIGlzIGFwcGxpZWQgdG8gYW4gZWxlbWVudCB3aXRoIHRoZSBzdWJzY3JpcHRcbiAgLy8gdGV4dCBmb250IHNpemUsIHNvIHdlIG5lZWQgdG8gZGl2aWRlIGJ5IHRoZSBzY2FsZSBmYWN0b3IgdG8gbWFrZSBpdCBoYWxmIG9mIHRoZSBvcmlnaW5hbCB0ZXh0XG4gIC8vIHNpemUuIFdlIGFnYWluIG5lZWQgdG8gc3VidHJhY3Qgb2ZmIHRoZSBsaW5lIHNwYWNpbmcgc2luY2UgdGhlIG1vY2tzIG1lYXN1cmUgdG8gdGhlIGVkZ2Ugb2YgdGhlXG4gIC8vIHRleHQsIG5vdCB0aGUgIGVkZ2Ugb2YgdGhlIGxpbmUuXG4gICRzdWJzY3JpcHQtbWFyZ2luLXRvcDogMC41ZW0gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGUgLSAoJGxpbmUtc3BhY2luZyAqIDIpO1xuICAvLyBUaGUgcGFkZGluZyBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLXdyYXBwZXIgdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIHN1YnNjcmlwdCwgc2luY2UgaXQnc1xuICAvLyBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQuIFRoaXMgaXMgYSBjb21iaW5hdGlvbiBvZiB0aGUgc3Vic2NyaXB0J3MgbWFyZ2luIGFuZCBsaW5lLWhlaWdodCwgYnV0IHdlXG4gIC8vIG5lZWQgdG8gbXVsdGlwbHkgYnkgdGhlIHN1YnNjcmlwdCBmb250IHNjYWxlIGZhY3RvciBzaW5jZSB0aGUgd3JhcHBlciBoYXMgYSBsYXJnZXIgZm9udCBzaXplLlxuICAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTogKCRzdWJzY3JpcHQtbWFyZ2luLXRvcCArICRsaW5lLWhlaWdodCkgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IHtcbiAgICAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogJHdyYXBwZXItcGFkZGluZy1ib3R0b207XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICAgIHBhZGRpbmc6ICRpbmZpeC1wYWRkaW5nIDA7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cblxuICAgICAgLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMCB3aWxsIHJlbHkgb24gQXV0b2ZpbGxNb25pdG9yIGluc3RlYWQuXG4gICAgICAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZztcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIC8vIFdlIHdhbnQgdGhlIHVuZGVybGluZSB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAgIC8vIHNvIHdlIG1vdmUgaXQgdXAgYnkgdGhlIHBhZGRpbmcgYW1vdW50LlxuICAgICAgYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICAgICAgbWFyZ2luLXRvcDogJHN1YnNjcmlwdC1tYXJnaW4tdG9wO1xuXG4gICAgICAvLyBXZSB3YW50IHRoZSBzdWJzY3JpcHQgdG8gc3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgY29udGVudCBib3gsIG5vdCB0aGUgcGFkZGluZyBib3gsXG4gICAgICAvLyBzbyB3ZSBtb3ZlIGl0IHVwIGJ5IHRoZSBwYWRkaW5nIGFtb3VudCAoYWRqdXN0ZWQgZm9yIHRoZSBzbWFsbGVyIGZvbnQgc2l6ZSk7XG4gICAgICB0b3A6IGNhbGMoMTAwJSAtICN7JHdyYXBwZXItcGFkZGluZy1ib3R0b20gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGV9KTtcbiAgICB9XG4gIH1cblxuICAvLyB0cmFuc2xhdGVaIGNhdXNlcyB0aGUgbGFiZWwgdG8gbm90IGFwcGVhciB3aGlsZSBwcmludGluZywgc28gd2Ugb3ZlcnJpZGUgaXQgdG8gbm90XG4gIC8vIGFwcGx5IHRyYW5zbGF0ZVogd2hpbGUgcHJpbnRpbmdcbiAgQG1lZGlhIHByaW50IHtcbiAgICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kge1xuICAgICAgJi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nLXByaW50KFxuICAgICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMCB3aWxsIHJlbHkgb24gQXV0b2ZpbGxNb25pdG9yIGluc3RlYWQuXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1hdXRvZmlsbC1jb250cm9sOi13ZWJraXQtYXV0b2ZpbGwgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmctcHJpbnQoXG4gICAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nLXByaW50KFxuICAgICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IG9ubHkgYXBwbHkgdG8gdGhlIG91dGxpbmUgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS1maWVsZC5cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gICRsYWJlbC1kaXNhYmxlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgJG91dGxpbmUtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuMywgMC4xMikpO1xuICAkb3V0bGluZS1jb2xvci1ob3ZlcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMSwgMC44NykpO1xuICAkb3V0bGluZS1jb2xvci1wcmltYXJ5OiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAkb3V0bGluZS1jb2xvci1hY2NlbnQ6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgJG91dGxpbmUtY29sb3Itd2FybjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgJG91dGxpbmUtY29sb3ItZGlzYWJsZWQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuMTUsIDAuMDYpKTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIHtcbiAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gICAgICBjb2xvcjogJG91dGxpbmUtY29sb3I7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLWhvdmVyO1xuICAgIH1cblxuICAgICYubWF0LWZvY3VzZWQge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3ItcHJpbWFyeTtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtYWNjZW50IC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLWFjY2VudDtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci13YXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENsYXNzIHJlcGVhdGVkIHNvIHRoYXQgcnVsZSBpcyBzcGVjaWZpYyBlbm91Z2ggdG8gb3ZlcnJpZGUgZm9jdXNlZCBhY2NlbnQgY29sb3IgY2FzZS5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWludmFsaWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCB7XG4gICAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci13YXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgY29sb3I6ICRsYWJlbC1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3ItZGlzYWJsZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFVzZWQgdG8gbWFrZSBpbnN0YW5jZXMgb2YgdGhlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyBtaXhpbiBuZWdsaWdpYmx5IGRpZmZlcmVudCxcbi8vIGFuZCBwcmV2ZW50IEdvb2dsZSdzIENTUyBPcHRpbWl6ZXIgZnJvbSBjb2xsYXBzaW5nIHRoZSBkZWNsYXJhdGlvbnMuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugc29tZVxuLy8gb2YgdGhlIHNlbGVjdG9ycyBjb250YWluIHBzZXVkby1jbGFzc2VzIG5vdCByZWNvZ25pemVkIGluIGFsbCBicm93c2Vycy4gSWYgYSBicm93c2VyIGVuY291bnRlcnNcbi8vIGFuIHVua25vd24gcHNldWRvLWNsYXNzIGl0IHdpbGwgZGlzY2FyZCB0aGUgZW50aXJlIHJ1bGUgc2V0LlxuJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlOiAwO1xuXG4vLyBBcHBsaWVzIGEgZmxvYXRpbmcgbGFiZWwgYWJvdmUgdGhlIGZvcm0gZmllbGQgY29udHJvbCBpdHNlbGYuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLW91dGxpbmUtbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGUpXG4gIHNjYWxlKCRmb250LXNjYWxlKTtcbiAgd2lkdGg6IDEwMCUgLyAkZm9udC1zY2FsZSArICRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZTtcblxuICAkbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsIGFuZCBzdWJzY3JpcHQuXG4gICRzdWJzY3JpcHQtZm9udC1zY2FsZTogMC43NTtcbiAgLy8gVGhlIHBhZGRpbmcgYWJvdmUgYW5kIGJlbG93IHRoZSBpbmZpeC5cbiAgJGluZml4LXBhZGRpbmc6IDFlbTtcbiAgLy8gVGhlIG1hcmdpbiBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLWluZml4IHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgJGluZml4LW1hcmdpbi10b3A6IDFlbSAqICRsaW5lLWhlaWdodCAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIHNwYWNlIGJldHdlZW4gdGhlIGJvdHRvbSBvZiB0aGUgLm1hdC1mb3JtLWZpZWxkLWZsZXggYXJlYSBhbmQgdGhlIHN1YnNjcmlwdCB3cmFwcGVyLlxuICAvLyBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZSwgYnV0IHRoaXMgbWFyZ2luIGlzIGFwcGxpZWQgdG8gYW4gZWxlbWVudCB3aXRoIHRoZSBzdWJzY3JpcHRcbiAgLy8gdGV4dCBmb250IHNpemUsIHNvIHdlIG5lZWQgdG8gZGl2aWRlIGJ5IHRoZSBzY2FsZSBmYWN0b3IgdG8gbWFrZSBpdCBoYWxmIG9mIHRoZSBvcmlnaW5hbCB0ZXh0XG4gIC8vIHNpemUuXG4gICRzdWJzY3JpcHQtbWFyZ2luLXRvcDogMC41ZW0gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBwYWRkaW5nIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtd3JhcHBlciB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgc3Vic2NyaXB0LCBzaW5jZSBpdCdzXG4gIC8vIGFic29sdXRlbHkgcG9zaXRpb25lZC4gVGhpcyBpcyBhIGNvbWJpbmF0aW9uIG9mIHRoZSBzdWJzY3JpcHQncyBtYXJnaW4gYW5kIGxpbmUtaGVpZ2h0LCBidXQgd2VcbiAgLy8gbmVlZCB0byBtdWx0aXBseSBieSB0aGUgc3Vic2NyaXB0IGZvbnQgc2NhbGUgZmFjdG9yIHNpbmNlIHRoZSB3cmFwcGVyIGhhcyBhIGxhcmdlciBmb250IHNpemUuXG4gICR3cmFwcGVyLXBhZGRpbmctYm90dG9tOiAoJHN1YnNjcmlwdC1tYXJnaW4tdG9wICsgJGxpbmUtaGVpZ2h0KSAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIGFtb3VudCB3ZSBvZmZzZXQgdGhlIGxhYmVsIGZyb20gdGhlIGlucHV0IHRleHQgaW4gdGhlIG91dGxpbmUgYXBwZWFyYW5jZS5cbiAgJG91dGxpbmUtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQ6IC0wLjI1ZW07XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICAgIHBhZGRpbmc6ICRpbmZpeC1wYWRkaW5nIDAgJGluZml4LXBhZGRpbmcgMDtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgdG9wOiAkaW5maXgtbWFyZ2luLXRvcCArICRpbmZpeC1wYWRkaW5nO1xuICAgICAgbWFyZ2luLXRvcDogJG91dGxpbmUtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQ7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtb3V0bGluZS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nICsgJG91dGxpbmUtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLW91dGxpbmUtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZyArICRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0LFxuICAgICAgICAgICAgICAgICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgb25seSBhcHBseSB0byB0aGUgc3RhbmRhcmQgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS1maWVsZC5cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gICR1bmRlcmxpbmUtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNywgMC40MikpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jb250cm9sLWRpc2FibGVkLXVuZGVybGluZSgkdW5kZXJsaW5lLWNvbG9yKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLXR5cG9ncmFwaHkoJGNvbmZpZykge31cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBhcHBseSB0byBhbGwgYXBwZWFyYW5jZXMgb2YgdGhlIGZvcm0tZmllbGQuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gIC8vIExhYmVsIGNvbG9ycy4gUmVxdWlyZWQgaXMgdXNlZCBmb3IgdGhlIGAqYCBzdGFyIHNob3duIGluIHRoZSBsYWJlbC5cbiAgJGxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0LCBpZigkaXMtZGFyay10aGVtZSwgMC43LCAwLjYpKTtcbiAgJGZvY3VzZWQtbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICRyZXF1aXJlZC1sYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuXG4gIC8vIFVuZGVybGluZSBjb2xvcnMuXG4gICR1bmRlcmxpbmUtY29sb3ItYmFzZTogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMSwgMC44NykpO1xuICAkdW5kZXJsaW5lLWNvbG9yLWFjY2VudDogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAkdW5kZXJsaW5lLWNvbG9yLXdhcm46IG1hdC1jb2xvcigkd2Fybik7XG4gICR1bmRlcmxpbmUtZm9jdXNlZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcblxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gIH1cblxuICAubWF0LWhpbnQge1xuICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICBjb2xvcjogJGZvY3VzZWQtbGFiZWwtY29sb3I7XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYWNjZW50O1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICB9XG4gIH1cblxuICAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XG4gICAgY29sb3I6ICRyZXF1aXJlZC1sYWJlbC1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYmFzZTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWZvY3VzZWQtY29sb3I7XG5cbiAgICAgICYubWF0LWFjY2VudCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYWNjZW50O1xuICAgICAgfVxuXG4gICAgICAmLm1hdC13YXJuIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb2N1c2VkOm5vdCgubWF0LWZvcm0tZmllbGQtaW52YWxpZCkge1xuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtZm9jdXNlZC1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci1hY2NlbnQ7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgfVxuICB9XG5cbiAgLy8gU3R5bGluZyBmb3IgdGhlIGVycm9yIHN0YXRlIG9mIHRoZSBmb3JtIGZpZWxkLiBOb3RlIHRoYXQgd2hpbGUgdGhlIHNhbWUgY2FuIGJlXG4gIC8vIGFjaGlldmVkIHdpdGggdGhlIG5nLSogY2xhc3Nlcywgd2UgdXNlIHRoaXMgYXBwcm9hY2ggaW4gb3JkZXIgdG8gZW5zdXJlIHRoYXQgdGhlIHNhbWVcbiAgLy8gbG9naWMgaXMgdXNlZCB0byBzdHlsZSB0aGUgZXJyb3Igc3RhdGUgYW5kIHRvIHNob3cgdGhlIGVycm9yIG1lc3NhZ2VzLlxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG5cbiAgICAgICYubWF0LWFjY2VudCxcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXIge1xuICAgICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsXG4gICAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZS5tYXQtYWNjZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICB9XG4gIH1cblxuICAubWF0LWVycm9yIHtcbiAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICB9XG5cbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtbGVnYWN5LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLWZpbGwtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGVtZSgkdGhlbWUpO1xufVxuXG4vLyBVc2VkIHRvIG1ha2UgaW5zdGFuY2VzIG9mIHRoZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcgbWl4aW4gbmVnbGlnaWJseSBkaWZmZXJlbnQsXG4vLyBhbmQgcHJldmVudCBHb29nbGUncyBDU1MgT3B0aW1pemVyIGZyb20gY29sbGFwc2luZyB0aGUgZGVjbGFyYXRpb25zLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNvbWVcbi8vIG9mIHRoZSBzZWxlY3RvcnMgY29udGFpbiBwc2V1ZG8tY2xhc3NlcyBub3QgcmVjb2duaXplZCBpbiBhbGwgYnJvd3NlcnMuIElmIGEgYnJvd3NlciBlbmNvdW50ZXJzXG4vLyBhbiB1bmtub3duIHBzZXVkby1jbGFzcyBpdCB3aWxsIGRpc2NhcmQgdGhlIGVudGlyZSBydWxlIHNldC5cbiRtYXQtZm9ybS1maWVsZC1kZWR1cGU6IDA7XG5cbi8vIEFwcGxpZXMgYSBmbG9hdGluZyBsYWJlbCBhYm92ZSB0aGUgZm9ybSBmaWVsZCBjb250cm9sIGl0c2VsZi5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtZGVkdXBlKVxuICAgICAgICAgICAgIHNjYWxlKCRmb250LXNjYWxlKTtcbiAgd2lkdGg6IDEwMCUgLyAkZm9udC1zY2FsZSArICRtYXQtZm9ybS1maWVsZC1kZWR1cGU7XG5cbiAgJG1hdC1mb3JtLWZpZWxkLWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG5cbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsIGFuZCBzdWJzY3JpcHQuXG4gICRzdWJzY3JpcHQtZm9udC1zY2FsZTogMC43NTtcbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIHByZWZpeCBhbmQgc3VmZml4IGljb25zLlxuICAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGU6IDEuNTtcblxuICAvLyBUaGUgcGFkZGluZyBvbiB0aGUgaW5maXguIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLlxuICAkaW5maXgtcGFkZGluZzogMC41ZW07XG4gIC8vIFRoZSBtYXJnaW4gYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC1pbmZpeCB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICRpbmZpeC1tYXJnaW4tdG9wOiAxZW0gKiAkbGluZS1oZWlnaHQgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIEZvbnQgc2l6ZSB0byB1c2UgZm9yIHRoZSBsYWJlbCBhbmQgc3Vic2NyaXB0IHRleHQuXG4gICRzdWJzY3JpcHQtZm9udC1zaXplOiAkc3Vic2NyaXB0LWZvbnQtc2NhbGUgKiAxMDAlO1xuICAvLyBGb250IHNpemUgdG8gdXNlIGZvciB0aGUgZm9yIHRoZSBwcmVmaXggYW5kIHN1ZmZpeCBpY29ucy5cbiAgJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNpemU6ICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zY2FsZSAqIDEwMCU7XG4gIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBib3R0b20gb2YgdGhlIC5tYXQtZm9ybS1maWVsZC1mbGV4IGFyZWEgYW5kIHRoZSBzdWJzY3JpcHQgd3JhcHBlci5cbiAgLy8gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUsIGJ1dCB0aGlzIG1hcmdpbiBpcyBhcHBsaWVkIHRvIGFuIGVsZW1lbnQgd2l0aCB0aGUgc3Vic2NyaXB0XG4gIC8vIHRleHQgZm9udCBzaXplLCBzbyB3ZSBuZWVkIHRvIGRpdmlkZSBieSB0aGUgc2NhbGUgZmFjdG9yIHRvIG1ha2UgaXQgaGFsZiBvZiB0aGUgb3JpZ2luYWwgdGV4dFxuICAvLyBzaXplLlxuICAkc3Vic2NyaXB0LW1hcmdpbi10b3A6IDAuNWVtIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgcGFkZGluZyBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLXdyYXBwZXIgdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIHN1YnNjcmlwdCwgc2luY2UgaXQnc1xuICAvLyBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQuIFRoaXMgaXMgYSBjb21iaW5hdGlvbiBvZiB0aGUgc3Vic2NyaXB0J3MgbWFyZ2luIGFuZCBsaW5lLWhlaWdodCwgYnV0IHdlXG4gIC8vIG5lZWQgdG8gbXVsdGlwbHkgYnkgdGhlIHN1YnNjcmlwdCBmb250IHNjYWxlIGZhY3RvciBzaW5jZSB0aGUgd3JhcHBlciBoYXMgYSBsYXJnZXIgZm9udCBzaXplLlxuICAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTogKCRzdWJzY3JpcHQtbWFyZ2luLXRvcCArICRsaW5lLWhlaWdodCkgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG5cbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgaW5wdXQpO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1wcmVmaXgsXG4gIC5tYXQtZm9ybS1maWVsZC1zdWZmaXgge1xuICAgIC8vIEFsbG93IGljb25zIGluIGEgcHJlZml4IG9yIHN1ZmZpeCB0byBhZGFwdCB0byB0aGUgY29ycmVjdCBzaXplLlxuICAgIC5tYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6ICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zaXplO1xuICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgICB9XG5cbiAgICAvLyBBbGxvdyBpY29uIGJ1dHRvbnMgaW4gYSBwcmVmaXggb3Igc3VmZml4IHRvIGFkYXB0IHRvIHRoZSBjb3JyZWN0IHNpemUuXG4gICAgLm1hdC1pY29uLWJ1dHRvbiB7XG4gICAgICBoZWlnaHQ6ICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zY2FsZSAqIDFlbTtcbiAgICAgIHdpZHRoOiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGUgKiAxZW07XG5cbiAgICAgIC5tYXQtaWNvbiB7XG4gICAgICAgIGhlaWdodDogJGxpbmUtaGVpZ2h0ICogMWVtO1xuICAgICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgcGFkZGluZzogJGluZml4LXBhZGRpbmcgMDtcbiAgICAvLyBUaHJvd3Mgb2ZmIHRoZSBiYXNlbGluZSBpZiB3ZSBkbyBpdCBhcyBhIHJlYWwgbWFyZ2luLCBzbyB3ZSBkbyBpdCBhcyBhIGJvcmRlciBpbnN0ZWFkLlxuICAgIGJvcmRlci10b3A6ICRpbmZpeC1tYXJnaW4tdG9wIHNvbGlkIHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgIH1cblxuICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcbiAgICB0b3A6IC0kaW5maXgtbWFyZ2luLXRvcDtcbiAgICBwYWRkaW5nLXRvcDogJGluZml4LW1hcmdpbi10b3A7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZztcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgIC8vIFdlIHdhbnQgdGhlIHVuZGVybGluZSB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAvLyBzbyB3ZSBtb3ZlIGl0IHVwIGJ5IHRoZSBwYWRkaW5nIGFtb3VudC5cbiAgICBib3R0b206ICR3cmFwcGVyLXBhZGRpbmctYm90dG9tO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHtcbiAgICBmb250LXNpemU6ICRzdWJzY3JpcHQtZm9udC1zaXplO1xuICAgIG1hcmdpbi10b3A6ICRzdWJzY3JpcHQtbWFyZ2luLXRvcDtcblxuICAgIC8vIFdlIHdhbnQgdGhlIHN1YnNjcmlwdCB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAvLyBzbyB3ZSBtb3ZlIGl0IHVwIGJ5IHRoZSBwYWRkaW5nIGFtb3VudCAoYWRqdXN0ZWQgZm9yIHRoZSBzbWFsbGVyIGZvbnQgc2l6ZSk7XG4gICAgdG9wOiBjYWxjKDEwMCUgLSAjeyR3cmFwcGVyLXBhZGRpbmctYm90dG9tIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlfSk7XG4gIH1cblxuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1sZWdhY3ktdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtc3RhbmRhcmQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtZmlsbC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1vdXRsaW5lLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG59XG5cblxuXG5cblxuQG1peGluIG1hdC10cmVlLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtdHJlZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICB9XG5cbiAgLm1hdC10cmVlLW5vZGUsXG4gIC5tYXQtbmVzdGVkLXRyZWUtbm9kZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC10cmVlLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXRyZWUge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXRyZWUtbm9kZSxcbiAgLm1hdC1uZXN0ZWQtdHJlZS1ub2RlIHtcbiAgICBmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSk7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cbi8vIEluY2x1ZGVzIGFsbCBvZiB0aGUgdHlwb2dyYXBoaWMgc3R5bGVzLlxuQG1peGluIGFuZ3VsYXItbWF0ZXJpYWwtdHlwb2dyYXBoeSgkY29uZmlnOiBudWxsKSB7XG4gIEBpZiAkY29uZmlnID09IG51bGwge1xuICAgICRjb25maWc6IG1hdC10eXBvZ3JhcGh5LWNvbmZpZygpO1xuICB9XG5cbiAgQGluY2x1ZGUgbWF0LWJhZGdlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1iYXNlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1hdXRvY29tcGxldGUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWJvdHRvbS1zaGVldC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYnV0dG9uLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1idXR0b24tdG9nZ2xlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1jYXJkLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1jaGVja2JveC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtY2hpcHMtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXRhYmxlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1kYXRlcGlja2VyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1kaWFsb2ctdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWV4cGFuc2lvbi1wYW5lbC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZ3JpZC1saXN0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1pY29uLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1pbnB1dC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtbWVudS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcGFnaW5hdG9yLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wcm9ncmVzcy1iYXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXByb2dyZXNzLXNwaW5uZXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXJhZGlvLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zZWxlY3QtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNpZGVuYXYtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNsaWRlLXRvZ2dsZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc2xpZGVyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zdGVwcGVyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zb3J0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10YWJzLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10b29sYmFyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10b29sdGlwLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1saXN0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1vcHRpb24tdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LW9wdGdyb3VwLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zbmFjay1iYXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXRyZWUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbn1cblxuXG4vLyBNaXhpbiB0aGF0IHJlbmRlcnMgYWxsIG9mIHRoZSBjb3JlIHN0eWxlcyB0aGF0IGFyZSBub3QgdGhlbWUtZGVwZW5kZW50LlxuQG1peGluIG1hdC1jb3JlKCR0eXBvZ3JhcGh5LWNvbmZpZzogbnVsbCkge1xuICBAaW5jbHVkZSBhbmd1bGFyLW1hdGVyaWFsLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHktY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXJpcHBsZSgpO1xuICBAaW5jbHVkZSBjZGstYTExeSgpO1xuICBAaW5jbHVkZSBjZGstb3ZlcmxheSgpO1xuICBAaW5jbHVkZSBjZGstdGV4dC1maWVsZCgpO1xufVxuXG4vLyBNaXhpbiB0aGF0IHJlbmRlcnMgYWxsIG9mIHRoZSBjb3JlIHN0eWxlcyB0aGF0IGRlcGVuZCBvbiB0aGUgdGhlbWUuXG5AbWl4aW4gbWF0LWNvcmUtdGhlbWUoJHRoZW1lKSB7XG4gIEBpbmNsdWRlIG1hdC1yaXBwbGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LW9wdGlvbi10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtb3B0Z3JvdXAtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXBzZXVkby1jaGVja2JveC10aGVtZSgkdGhlbWUpO1xuXG4gIC8vIFByb3ZpZGVzIGV4dGVybmFsIENTUyBjbGFzc2VzIGZvciBlYWNoIGVsZXZhdGlvbiB2YWx1ZS4gRWFjaCBDU1MgY2xhc3MgaXMgZm9ybWF0dGVkIGFzXG4gIC8vIGBtYXQtZWxldmF0aW9uLXokelZhbHVlYCB3aGVyZSBgJHpWYWx1ZWAgY29ycmVzcG9uZHMgdG8gdGhlIHotc3BhY2UgdG8gd2hpY2ggdGhlIGVsZW1lbnQgaXNcbiAgLy8gZWxldmF0ZWQuXG4gIEBmb3IgJHpWYWx1ZSBmcm9tIDAgdGhyb3VnaCAyNCB7XG4gICAgLiN7JF9tYXQtZWxldmF0aW9uLXByZWZpeH0jeyR6VmFsdWV9IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKCR6VmFsdWUsICR0aGVtZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gV3JhcHBlciBlbGVtZW50IHRoYXQgcHJvdmlkZXMgdGhlIHRoZW1lIGJhY2tncm91bmQgd2hlbiB0aGUgdXNlcidzIGNvbnRlbnQgaXNuJ3RcbiAgLy8gaW5zaWRlIG9mIGEgYG1hdC1zaWRlbmF2LWNvbnRhaW5lcmAuIE5vdGUgdGhhdCB3ZSBuZWVkIHRvIGV4Y2x1ZGUgdGhlIGFtcGVyc2FuZFxuICAvLyBzZWxlY3RvciBpbiBjYXNlIHRoZSBtaXhpbiBpcyBpbmNsdWRlZCBhdCB0aGUgdG9wIGxldmVsLlxuICAubWF0LWFwcC1iYWNrZ3JvdW5kI3tpZigmLCAnLCAmLm1hdC1hcHAtYmFja2dyb3VuZCcsICcnKX0ge1xuICAgICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYmFja2dyb3VuZCk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAvLyBNYXJrZXIgdGhhdCBpcyB1c2VkIHRvIGRldGVybWluZSB3aGV0aGVyIHRoZSB1c2VyIGhhcyBhZGRlZCBhIHRoZW1lIHRvIHRoZWlyIHBhZ2UuXG4gIEBhdC1yb290IHtcbiAgICAubWF0LXRoZW1lLWxvYWRlZC1tYXJrZXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1kaXZpZGVyLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtZGl2aWRlciB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtZGl2aWRlci12ZXJ0aWNhbCB7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIENyZWF0ZSBhIHRoZW1lLlxuQG1peGluIGFuZ3VsYXItbWF0ZXJpYWwtdGhlbWUoJHRoZW1lKSB7XG4gIEBpbmNsdWRlIG1hdC1jb3JlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1hdXRvY29tcGxldGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWJhZGdlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1ib3R0b20tc2hlZXQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWJ1dHRvbi10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtYnV0dG9uLXRvZ2dsZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtY2FyZC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtY2hlY2tib3gtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWNoaXBzLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC10YWJsZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZGF0ZXBpY2tlci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZGlhbG9nLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1kaXZpZGVyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1leHBhbnNpb24tcGFuZWwtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWdyaWQtbGlzdC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtaWNvbi10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtaW5wdXQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWxpc3QtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LW1lbnUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXBhZ2luYXRvci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtcHJvZ3Jlc3MtYmFyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1wcm9ncmVzcy1zcGlubmVyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1yYWRpby10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc2VsZWN0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zaWRlbmF2LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zbGlkZS10b2dnbGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNsaWRlci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc3RlcHBlci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc29ydC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdGFicy10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdG9vbGJhci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdG9vbHRpcC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdHJlZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc25hY2stYmFyLXRoZW1lKCR0aGVtZSk7XG59XG4iLCJAaW1wb3J0ICd+QGFuZ3VsYXIvbWF0ZXJpYWwvdGhlbWluZyc7XG5cbmZvcm0ge1xuICAuZm9ybS1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogNjBweDtcblxuICAgIGxhYmVsIHtcbiAgICAgIGZsZXg6IDAgMCA0MHB4O1xuICAgIH1cblxuICAgIGlucHV0IHtcbiAgICAgIGhlaWdodDogMjhweDtcbiAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBmbGV4OiAxO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiAjZGRkO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMWE3M2U4O1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbn1cblxuLmNvcHlyaWdodCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2FhYTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.8@@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@7.2.8@@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/_@angular_material@7.3.3@@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/user.service */ "./src/app/service/user.service.ts");






// import { CookieService } from 'src/app/service/cookie.service';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authSrv, userSrv, router, route, snackBar) {
        this.authSrv = authSrv;
        this.userSrv = userSrv;
        this.router = router;
        this.route = route;
        this.snackBar = snackBar;
        this.user = {
            email: '',
            password: '',
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userSrv.login(this.user).subscribe(function (resTpl) {
            if (resTpl.code === 0) {
                var user = resTpl.data;
                localStorage.setItem('ph-token', user.token);
                _this.snackBar.open("\u767B\u5F55\u6210\u529F\uFF01\u6B22\u8FCE\u60A8\uFF0C" + user.profile.name);
                // 重定向到授权前的路由
                _this.router.navigate([_this.authSrv.redirectUrl], {
                    replaceUrl: true,
                });
            }
            else {
                _this.snackBar.open(resTpl.msg);
            }
        });
    };
    LoginComponent.prototype.fakeLogin = function (i) {
        var _this = this;
        var user = {
            email: i === 1 ? 'demand1@ph.com' : 'dev1@ph.com',
            password: '123123',
        };
        this.userSrv.login(user).subscribe(function (resTpl) {
            if (resTpl.code === 0) {
                var user_1 = resTpl.data;
                localStorage.setItem('ph-token', user_1.token);
                _this.snackBar.open("\u767B\u5F55\u6210\u529F\uFF01\u6B22\u8FCE\u60A8\uFF0C" + user_1.profile.name);
                // 重定向到授权前的路由
                _this.router.navigate([_this.authSrv.redirectUrl], {
                    replaceUrl: true,
                });
            }
            else {
                _this.snackBar.open(resTpl.msg);
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            src_app_service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/msg/msg.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/msg/msg.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"msg-wrap\">\n  <mat-list>\n    <h3 matSubheader\n      class=\"d-flex align-items-center justify-content-between\">\n      <button mat-button\n        color=\"warn\"\n        (click)=\"delChecked()\">删除已读</button>\n    </h3>\n    <div class=\"mt-5 text-center\"\n      *ngIf=\"msgs?.length == 0; else msgList\">\n      还没有新消息~\n    </div>\n    <ng-template #msgList>\n      <mat-nav-list >\n        <div *ngFor=\"let item of msgs\">\n          <a mat-list-item\n            *ngIf=\"!item.isAction\"\n            [ngClass]=\"{'checked': item.checked }\"\n            (click)=\"navigateToProject(item)\">\n            <img matListAvatar\n              *ngIf=\"item.from_user.profile.avatar as avatar\"\n              [src]=\"avatar\">\n            <h4 mat-line\n              class=\"d-flex align-items-center justify-content-between\">\n              {{item.from_user.profile.name | titlecase}}\n              <span>{{item.create_time | date: 'yyyy-MM-dd hh:mm:ss'}}</span>\n            </h4>\n            <p mat-line> {{item.content}} </p>\n            <mat-divider></mat-divider>\n          </a>\n          <mat-expansion-panel *ngIf=\"item.isAction\"\n            [ngClass]=\"{'checked': item.checked}\">\n            <mat-expansion-panel-header [ngClass]=\"{'checked': item.checked}\">\n              <mat-panel-title>\n                <img matListAvatar\n                  *ngIf=\"item.from_user.profile.avatar as avatar\"\n                  [src]=\"avatar\">\n                {{item.from_user.profile.name}}\n              </mat-panel-title>\n              <mat-panel-description>\n                {{item.checked ? '已处理' : '未处理'}}\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n            <p>{{item.content}}</p>\n            <div *ngIf=\"!item.checked\">\n              <button block\n                mat-raised-button\n                color=\"accent\"\n                class=\"mb-3 mt-4\"\n                (click)=\"actionMsg(item, true)\">确认</button>\n              <button block\n                mat-raised-button\n                (click)=\"actionMsg(item, false)\">取消</button>\n            </div>\n          </mat-expansion-panel>\n          <mat-divider></mat-divider>\n        </div>\n      </mat-nav-list>\n    </ng-template>\n  </mat-list>\n</div>"

/***/ }),

/***/ "./src/app/components/msg/msg.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/msg/msg.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".msg-wrap {\n  margin: -10px -1rem 0; }\n\nmat-list a.mat-list-item {\n  background-color: #fff; }\n\nmat-list a.mat-list-item.checked {\n    background-color: #f9f9f9; }\n\nmat-expansion-panel.checked,\nmat-expansion-panel-header.checked {\n  background-color: #f9f9f9; }\n\nmat-expansion-panel-header {\n  line-height: 40px;\n  padding: 6px 16px; }\n\nmat-expansion-panel-header img {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    margin-right: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb25zb24vd29yay9teS1wcm9qZWN0L2dyYWR1YXRpb24tcHJvamVjdC9Qcm9qZWN0SHViL3Byb2otaHViL3NyYy9hcHAvY29tcG9uZW50cy9tc2cvbXNnLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCLEVBQUE7O0FBR3ZCO0VBRUksc0JBQXNCLEVBQUE7O0FBRjFCO0lBS00seUJBQXlCLEVBQUE7O0FBSy9COztFQUdJLHlCQUF5QixFQUFBOztBQUk3QjtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTs7QUFGbkI7SUFLSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXNnL21zZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tc2ctd3JhcCB7XG4gIG1hcmdpbjogLTEwcHggLTFyZW0gMDtcbn1cblxubWF0LWxpc3Qge1xuICBhLm1hdC1saXN0LWl0ZW0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cbiAgICAmLmNoZWNrZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgICB9XG4gIH1cbn1cblxubWF0LWV4cGFuc2lvbi1wYW5lbCxcbm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgJi5jaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICB9XG59XG5cbm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDZweCAxNnB4O1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/msg/msg.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/msg/msg.component.ts ***!
  \*************************************************/
/*! exports provided: MsgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgComponent", function() { return MsgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.8@@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_router_7_2_8_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! _@angular_router@7.2.8@@angular/router */ "./node_modules/_@angular_router@7.2.8@@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/_@angular_material@7.3.3@@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_service_project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/project.service */ "./src/app/service/project.service.ts");
/* harmony import */ var src_app_service_msg_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/msg.service */ "./src/app/service/msg.service.ts");







var MsgComponent = /** @class */ (function () {
    function MsgComponent(userSrv, router, snackBar, projectSrv, msgSrv) {
        this.userSrv = userSrv;
        this.router = router;
        this.snackBar = snackBar;
        this.projectSrv = projectSrv;
        this.msgSrv = msgSrv;
        this.msgs = [];
    }
    MsgComponent.prototype.ngOnInit = function () {
        this.handleGetMsgs();
    };
    // 获取信息
    MsgComponent.prototype.handleGetMsgs = function () {
        var _this = this;
        this.msgSrv.getMsgs().subscribe(function (res) {
            if (res.code === 0) {
                _this.msgs = res.data;
            }
        });
    };
    // 删除已读
    MsgComponent.prototype.delChecked = function () {
        var _this = this;
        var myConfirm = confirm('删除后不可恢复！确认删除？');
        if (!myConfirm)
            return;
        this.msgSrv.delReadMsg().subscribe(function () {
            _this.handleGetMsgs();
        });
    };
    // 标记为已读并跳转到项目
    MsgComponent.prototype.navigateToProject = function (msg) {
        var _this = this;
        msg.checked = true;
        this.msgSrv.readMsg(msg._id).subscribe(function (res) {
            if (res.code === 0) {
                _this.router.navigate(['/sub/project', msg.project_id], {
                    queryParams: { 'project_comment_id': msg.project_comment_id }
                });
            }
        });
    };
    // 操作通知
    MsgComponent.prototype.actionMsg = function (msg, confirm) {
        // 确认：更新项目状态
        if (confirm) {
            this.projectSrv.updateProjectStatus(msg.project_id, msg.action, msg.from_user).subscribe();
        }
        // 统一操作：
        // 已读
        this.msgSrv.readMsg(msg._id).subscribe();
        // 发送反馈信息
        this.sendMsg(msg, confirm);
        // 刷新
        this.handleGetMsgs();
    };
    // 
    MsgComponent.prototype.sendMsg = function (msg, confirm) {
        // 发送反馈消息
        var data = {
            user_id: msg.from_user._id,
            project_id: msg.project_id,
            project_comment_id: null,
            action: 0,
            content: this.userSrv.userInfo.profile.name + ((confirm ? '通过' : '驳回') + "\u4E86\u60A8\u7684\u66F4\u65B0\u9879\u76EE\u8FDB\u5EA6\u7533\u8BF7")
        };
        this.msgSrv.sendMsg(data).subscribe();
    };
    MsgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-msg',
            template: __webpack_require__(/*! ./msg.component.html */ "./src/app/components/msg/msg.component.html"),
            styles: [__webpack_require__(/*! ./msg.component.scss */ "./src/app/components/msg/msg.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router_7_2_8_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            src_app_service_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"],
            src_app_service_msg_service__WEBPACK_IMPORTED_MODULE_6__["MsgService"]])
    ], MsgComponent);
    return MsgComponent;
}());



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div style=\"margin: 100px 0;\" class=\"text-center\">\n  <p>404 Not Found</p><br><br>\n  <button mat-raised-button routerLink=\"/home/projects\">返回首页</button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.8@@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/components/not-found/not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/project-detail/project-detail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/project-detail/project-detail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"project && project.audit === 1; else unpass\">\n  <!-- main -->\n  <div class=\"proj-item\">\n    <h2>发布者</h2>\n    <div class=\"top-info demand-user\"\n      [routerLink]=\"['/home/user']\"\n      [queryParams]=\"{'id': project.demand_user._id}\">\n      <img *ngIf=\"project.demand_user.profile.avatar as avatar\"\n        [src]=\"avatar\">\n      <div class=\"text\">\n        <h6>{{project.demand_user.profile.name}}</h6>\n        <p>{{project.demand_user.profile.desc}}</p>\n      </div>\n    </div>\n    <div *ngIf=\"project.dev_user\">\n      <h2>开发者</h2>\n      <div class=\"top-info demand-user\"\n        [routerLink]=\"['/home/user']\"\n        [queryParams]=\"{'id': project.dev_user._id}\">\n        <img *ngIf=\"project.dev_user.profile.avatar as avatar\"\n          [src]=\"avatar\">\n        <div class=\"text\">\n          <h6>{{project.dev_user.profile.name}}</h6>\n          <p>{{project.dev_user.profile.desc}}</p>\n        </div>\n      </div>\n    </div>\n    <h2>项目名称</h2>\n    <div class=\"desc\">{{project.title}}</div>\n    <h2>项目详情</h2>\n    <div class=\"desc\">{{project.desc}}</div>\n    <h2>发布时间</h2>\n    <div class=\"desc\">{{project.create_time | date: 'yyyy-MM-dd hh:mm:ss'}}</div>\n    <h2>技能需求</h2>\n    <mat-chip-list>\n      <mat-chip *ngFor=\"let item of project.skills | array\"\n        color=\"accent\">{{ item | skill }}</mat-chip>\n    </mat-chip-list>\n    <h2>项目预算</h2>\n    <div class=\"desc\">\n      <p class=\"price\">￥{{project.price}}</p>\n    </div>\n    <h2>项目进度</h2>\n    <mat-chip-list>\n      <div class=\"status-row\">\n        <div class=\"status-item\"\n          *ngFor=\"let item of [0,1,2,3]\">\n          <mat-chip color=\"accent\"\n            :selected=\"{{item === project.status}}\">{{ item | projectStatus }}</mat-chip>\n          <p>{{item | projectStatusText}}</p>\n        </div>\n      </div>\n    </mat-chip-list>\n    <div *ngIf=\"userSrv.userInfo.role === 3\">\n      <button *ngIf=\"project.status === 0\"\n        mat-raised-button\n        color=\"accent\"\n        block\n        (click)=\"applyProject(1)\">申请接单</button>\n      <button *ngIf=\"project.status === 1 && project.dev_user._id === userSrv.userInfo._id\"\n        mat-raised-button\n        color=\"accent\"\n        block\n        (click)=\"applyProject(2)\">提交验收</button>\n      <button *ngIf=\"project.status === 2 && project.dev_user._id === userSrv.userInfo._id\"\n        mat-raised-button\n        color=\"accent\"\n        block\n        (click)=\"applyProject(3)\">申请结款</button>\n    </div>\n  </div>\n  <!-- 评论 -->\n  <div *ngIf=\"!!project.comments\">\n    <div class=\"comment-item\"\n      *ngFor=\"let item of project.comments; let i=index\"\n      id=\"{{'id-' + item._id}}\">\n      <div class=\"top-info\">\n        <img *ngIf=\"item.user.profile.avatar\"\n          [src]=\"item.user.profile.avatar\">\n        <div class=\"text\">\n          <div>\n            <h6>{{item.user.profile.name}}</h6>\n            <span>#{{ i + 1 }}</span>\n          </div>\n          <p>{{item.create_time | date: 'yyyy-MM-dd hh:mm:ss'}}</p>\n          <p class=\"content\">{{item.content}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- bottom -->\n  <footer>\n    <!-- 只有 项目的需求者 和 开发者 才可以评论，其余需求者不可评论-->\n    <div class=\"comments\"\n      *ngIf=\"userSrv.userInfo._id === project.demand_user._id || userSrv.userInfo.role != 2\">\n      <img *ngIf=\"userSrv.userInfo.profile.avatar\"\n        [src]=\"userSrv.userInfo.profile.avatar\">\n      <div class=\"add-comments-wrap\">\n        <input type=\"text\"\n          placeholder=\"添加评论...\"\n          [(ngModel)]=\"commentContent\"\n          maxlength=\"50\"\n          required>\n      </div>\n      <button mat-button\n        [disabled]=\"!commentContent\"\n        (click)=\"addComment()\">\n        <mat-icon>send</mat-icon>\n      </button>\n    </div>\n  </footer>\n</div>\n\n<!-- 审核 -->\n<ng-template #unpass>\n  <span [ngSwitch]=\"project?.audit\"\n    class=\"audit\">\n    <div *ngSwitchCase=\"0\">\n      <img src=\"../../../assets/image/404.svg\">\n      <p>项目审核中</p>\n    </div>\n    <div *ngSwitchCase=\"2\">\n      <img src=\"../../../assets/image/403.svg\">\n      <p>项目未通过审核</p>\n      <br>\n      <button mat-raised-button\n        (click)=\"showHelp = !showHelp\">查看帮助</button>\n      <p class=\"mt-5\"\n        style=\"line-height: 1.4;text-indent: 2em;\"\n        *ngIf=\"showHelp\">项目含义描述清晰、禁止发布或出售违反宪法精神和中华人民共和国相关法律法规、带有民族歧视性、夸大宣传并带有欺骗性、有损于社会主义道德风尚或者有其他不良影响的信息、商品、服务等。项目含义描述清晰、禁止发布或出售违反宪法精神和中华人民共和国相关法律法规、带有民族歧视性、夸大宣传并带有欺骗性、有损于社会主义道德风尚或者有其他不良影响的信息、商品、服务等。项目含义描述清晰、禁止发布或出售违反宪法精神和中华人民共和国相关法律法规、带有民族歧视性、夸大宣传并带有欺骗性、有损于社会主义道德风尚或者有其他不良影响的信息、商品、服务等。项目含义描述清晰、禁止发布或出售违反宪法精神和中华人民共和国相关法律法规、带有民族歧视性、夸大宣传并带有欺骗性、有损于社会主义道德风尚或者有其他不良影响的信息、商品、服务等。</p>\n    </div>\n  </span>\n</ng-template>"

/***/ }),

/***/ "./src/app/components/project-detail/project-detail.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/project-detail/project-detail.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".proj-item, .comment-item {\n  width: calc(100% + 2rem);\n  padding: 10px 1rem;\n  box-sizing: border-box;\n  margin: 0px -1rem 15px;\n  border-bottom: 1px solid #eee;\n  background-color: #fff; }\n  .proj-item h2, .comment-item h2 {\n    font-weight: bold;\n    margin: 20px 0 15px -8px;\n    border-left: 4px solid #2196f3;\n    padding-left: 10px; }\n  .proj-item .top-info, .comment-item .top-info {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 10px; }\n  .proj-item .top-info.demand-user, .comment-item .top-info.demand-user {\n      background: #f9f9f9;\n      padding: 20px 10px; }\n  .proj-item .top-info img, .comment-item .top-info img {\n      width: 40px;\n      height: 40px;\n      border-radius: 50%;\n      margin-right: 8px;\n      border-bottom: 1px solid #eee; }\n  .proj-item .top-info .text, .comment-item .top-info .text {\n      flex: 1;\n      width: 100%;\n      display: flex;\n      flex-direction: column;\n      align-items: flex-start;\n      justify-content: space-between;\n      overflow: hidden; }\n  .proj-item .top-info .text h6, .comment-item .top-info .text h6 {\n        width: 100%;\n        font-size: 16px;\n        font-weight: bold;\n        min-height: 20px; }\n  .proj-item .top-info .text p, .comment-item .top-info .text p {\n        font-size: 12px;\n        color: #aaa; }\n  .proj-item .desc, .comment-item .desc {\n    font-size: 14px;\n    line-height: 1.5;\n    color: #555; }\n  .proj-item .desc .price, .comment-item .desc .price {\n      color: #f00; }\n  .proj-item mat-chip-list, .comment-item mat-chip-list {\n    display: block;\n    margin: 6px 0 3px; }\n  .proj-item mat-chip-list mat-chip, .comment-item mat-chip-list mat-chip {\n      font-size: 12px;\n      padding: 4px 10px;\n      min-height: 24px; }\n  .proj-item .status-row, .comment-item .status-row {\n    margin: 6px 0 3px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: space-around;\n    position: relative; }\n  .proj-item .status-row:after, .comment-item .status-row:after {\n      content: '';\n      display: block;\n      position: absolute;\n      left: 20px;\n      top: 10px;\n      height: 100%;\n      border-right: 1px solid #aaa; }\n  .proj-item .status-row .status-item, .comment-item .status-row .status-item {\n      position: relative;\n      z-index: 2;\n      margin-bottom: 12px; }\n  .proj-item .status-row .status-item p, .comment-item .status-row .status-item p {\n        font-size: 14px;\n        margin-left: 26px;\n        margin-top: 5px; }\n  .comment-item {\n  border-top: 1px solid #eee;\n  padding: 10px; }\n  .comment-item .top-info {\n    align-items: flex-start;\n    margin: 0; }\n  .comment-item .top-info .text div {\n      display: flex;\n      align-items: center;\n      justify-content: flex-start;\n      width: 100%; }\n  .comment-item .top-info .text div span {\n        font-size: 12px;\n        color: #aaa; }\n  .comment-item .top-info .text h6 {\n      margin: 0; }\n  .comment-item .top-info .text p {\n      font-size: 13px;\n      margin-bottom: 5px; }\n  .comment-item .top-info .text p.content {\n        color: #666;\n        line-height: 1.2; }\n  footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  z-index: 20;\n  background-color: #fff; }\n  footer .comments {\n    border-top: 1px solid #eee;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-left: 15px;\n    box-sizing: border-box; }\n  footer .comments img {\n      width: 36px;\n      height: 36px;\n      margin: 5px 0px;\n      margin-right: 15px;\n      border-radius: 50%; }\n  footer .comments .add-comments-wrap {\n      flex: 1;\n      font-size: 14px;\n      color: #aaa; }\n  footer .comments .add-comments-wrap input {\n        border: none !important;\n        outline: none !important;\n        height: 30px;\n        width: 100%; }\n  .audit {\n  color: rgba(0, 0, 0, 0.45); }\n  .audit > div {\n    text-align: center; }\n  .audit img {\n    width: 200px;\n    margin: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb25zb24vd29yay9teS1wcm9qZWN0L2dyYWR1YXRpb24tcHJvamVjdC9Qcm9qZWN0SHViL3Byb2otaHViL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LWRldGFpbC9wcm9qZWN0LWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0Isc0JBQXNCLEVBQUE7RUFOeEI7SUFTSSxpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLDhCQUE4QjtJQUM5QixrQkFBa0IsRUFBQTtFQVp0QjtJQWdCSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixtQkFBbUIsRUFBQTtFQW5CdkI7TUFzQk0sbUJBQW1CO01BQ25CLGtCQUFrQixFQUFBO0VBdkJ4QjtNQTJCTSxXQUFXO01BQ1gsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixpQkFBaUI7TUFDakIsNkJBQTZCLEVBQUE7RUEvQm5DO01BbUNNLE9BQU87TUFDUCxXQUFXO01BQ1gsYUFBYTtNQUNiLHNCQUFzQjtNQUN0Qix1QkFBdUI7TUFDdkIsOEJBQThCO01BQzlCLGdCQUFnQixFQUFBO0VBekN0QjtRQTRDUSxXQUFXO1FBQ1gsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixnQkFBZ0IsRUFBQTtFQS9DeEI7UUFtRFEsZUFBZTtRQUNmLFdBQVcsRUFBQTtFQXBEbkI7SUE0REksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXLEVBQUE7RUE5RGY7TUFpRU0sV0FBVyxFQUFBO0VBakVqQjtJQXNFSSxjQUFjO0lBQ2QsaUJBQWlCLEVBQUE7RUF2RXJCO01BMEVNLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsZ0JBQWdCLEVBQUE7RUE1RXRCO0lBaUZJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0Isa0JBQWtCLEVBQUE7RUF0RnRCO01BeUZNLFdBQVc7TUFDWCxjQUFjO01BQ2Qsa0JBQWtCO01BQ2xCLFVBQVU7TUFDVixTQUFTO01BQ1QsWUFBWTtNQUNaLDRCQUE0QixFQUFBO0VBL0ZsQztNQW1HTSxrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLG1CQUFtQixFQUFBO0VBckd6QjtRQXdHUSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGVBQWUsRUFBQTtFQVF2QjtFQUVFLDBCQUEwQjtFQUMxQixhQUFhLEVBQUE7RUFIZjtJQU1JLHVCQUF1QjtJQUN2QixTQUFTLEVBQUE7RUFQYjtNQVdRLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsMkJBQTJCO01BQzNCLFdBQVcsRUFBQTtFQWRuQjtRQWlCVSxlQUFlO1FBQ2YsV0FBVyxFQUFBO0VBbEJyQjtNQXVCUSxTQUFTLEVBQUE7RUF2QmpCO01BMkJRLGVBQWU7TUFDZixrQkFBa0IsRUFBQTtFQTVCMUI7UUErQlUsV0FBVztRQUNYLGdCQUFnQixFQUFBO0VBUzFCO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLFdBQVc7RUFDWCxzQkFBc0IsRUFBQTtFQU54QjtJQVdJLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsc0JBQXNCLEVBQUE7RUFoQjFCO01BbUJNLFdBQVc7TUFDWCxZQUFZO01BQ1osZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixrQkFBa0IsRUFBQTtFQXZCeEI7TUEyQk0sT0FBTztNQUNQLGVBQWU7TUFDZixXQUFXLEVBQUE7RUE3QmpCO1FBZ0NRLHVCQUF1QjtRQUN2Qix3QkFBd0I7UUFDeEIsWUFBWTtRQUNaLFdBQVcsRUFBQTtFQU1uQjtFQUNFLDBCQUF5QixFQUFBO0VBRDNCO0lBSUksa0JBQWtCLEVBQUE7RUFKdEI7SUFRSSxZQUFZO0lBQ1osWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LWRldGFpbC9wcm9qZWN0LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOmhueebrlxuLnByb2otaXRlbSB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyAycmVtKTtcbiAgcGFkZGluZzogMTBweCAxcmVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDBweCAtMXJlbSAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblxuICBoMiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiAyMHB4IDAgMTVweCAtOHB4O1xuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzIxOTZmMztcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cblxuICAudG9wLWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICYuZGVtYW5kLXVzZXIge1xuICAgICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICAgIH1cblxuICAgIC50ZXh0IHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICBoNiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBtaW4taGVpZ2h0OiAyMHB4O1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogI2FhYTtcbiAgICAgIH1cblxuICAgIH1cblxuICB9XG5cbiAgLmRlc2Mge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiAjNTU1O1xuXG4gICAgLnByaWNlIHtcbiAgICAgIGNvbG9yOiAjZjAwO1xuICAgIH1cbiAgfVxuXG4gIG1hdC1jaGlwLWxpc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogNnB4IDAgM3B4O1xuXG4gICAgbWF0LWNoaXAge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgICBtaW4taGVpZ2h0OiAyNHB4O1xuICAgIH1cbiAgfVxuXG4gIC5zdGF0dXMtcm93IHtcbiAgICBtYXJnaW46IDZweCAwIDNweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMjBweDtcbiAgICAgIHRvcDogMTBweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNhYWE7XG4gICAgfVxuXG4gICAgLnN0YXR1cy1pdGVtIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMjZweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgfVxuICAgIH1cblxuICB9XG59XG5cbi8vIOWNleS4quivhOiuulxuLmNvbW1lbnQtaXRlbSB7XG4gIEBleHRlbmQgLnByb2otaXRlbTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XG4gIHBhZGRpbmc6IDEwcHg7XG5cbiAgLnRvcC1pbmZvIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBtYXJnaW46IDA7XG5cbiAgICAudGV4dCB7XG4gICAgICBkaXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBjb2xvcjogI2FhYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBoNiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuXG4gICAgICAgICYuY29udGVudCB7XG4gICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG5cbi8vIGZvb3RlclxuZm9vdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAyMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblxuICAuYnRucy1vcHQge31cblxuICAuY29tbWVudHMge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICBtYXJnaW46IDVweCAwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuXG4gICAgLmFkZC1jb21tZW50cy13cmFwIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogI2FhYTtcblxuICAgICAgaW5wdXQge1xuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uYXVkaXQge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNDUpO1xuXG4gICY+ZGl2IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICBpbWcge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW46IDQwcHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/project-detail/project-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/project-detail/project-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProjectDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailComponent", function() { return ProjectDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.8@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@7.2.8@@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/project.service */ "./src/app/service/project.service.ts");
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/_@angular_material@7.3.3@@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_service_msg_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/msg.service */ "./src/app/service/msg.service.ts");
/* harmony import */ var src_app_models_Msg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/Msg */ "./src/app/models/Msg.ts");








var ProjectDetailComponent = /** @class */ (function () {
    function ProjectDetailComponent(route, router, projectSrv, userSrv, snackBar, msgSrv) {
        this.route = route;
        this.router = router;
        this.projectSrv = projectSrv;
        this.userSrv = userSrv;
        this.snackBar = snackBar;
        this.msgSrv = msgSrv;
        this.showHelp = false;
    }
    ProjectDetailComponent.prototype.ngOnInit = function () {
        this.handleGetProj();
    };
    // 获取项目详情
    ProjectDetailComponent.prototype.handleGetProj = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.projectSrv.getProject(id).subscribe(function (res) {
                if (res.code === 0) {
                    var proj = res.data;
                    _this.project = proj;
                    _this.projectSrv.setTitle(proj.title);
                }
            });
        });
    };
    // 添加评论
    ProjectDetailComponent.prototype.addComment = function () {
        var _this = this;
        this.projectSrv.addProjectComment(this.project._id, this.commentContent).subscribe(function (res) {
            if (res.code == 0) {
                _this.snackBar.open('评论成功');
                var data = res.data;
                _this.handleGetProj();
                // 不给自己推送消息
                if (_this.project.demand_user._id !== _this.userSrv.userInfo._id) {
                    _this.sendCommentMsg(_this.commentContent, data.comments[data.comments.length - 1]._id);
                }
                _this.commentContent = '';
            }
        });
    };
    // 申请更新项目状态 进度
    ProjectDetailComponent.prototype.applyProject = function (action) {
        var _this = this;
        console.log('action: ', action);
        var userInfo = this.userSrv.userInfo;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.projectSrv.getProject(id).subscribe(function (res) {
                if (res.code === 0) {
                    var proj = res.data;
                    _this.project = proj;
                    // 如果applys中有相同用户id和aciton=status，说明已经申请过
                    var hasApply = proj.applys.filter(function (i) {
                        return i.user_id === userInfo._id && i.status == action && new Date().getTime() <= i.deadline;
                    }).length;
                    if (hasApply) {
                        _this.snackBar.open('您24小时之内已经申请过了，请等待需求发布者反馈');
                    }
                    else {
                        // 更新项目apply
                        var data = {
                            apply: {
                                user_id: userInfo._id,
                                status: action,
                                deadline: new Date().getTime() + (1 * 24 * 3600 * 1000)
                            }
                        };
                        _this.projectSrv.updateProject(_this.project._id, data).subscribe(function () {
                            // 发送申请消息
                            var content = userInfo.profile.name + src_app_models_Msg__WEBPACK_IMPORTED_MODULE_7__["Action"][action];
                            _this.sendCommentMsg(content, null, action);
                        });
                    }
                }
            });
        });
    };
    // 推送需要操作的消息
    ProjectDetailComponent.prototype.sendCommentMsg = function (content, project_comment_id, action) {
        if (action === void 0) { action = 0; }
        var data = {
            user_id: this.project.demand_user._id,
            project_id: this.project._id,
            project_comment_id: project_comment_id,
            action: action,
            content: content
        };
        this.msgSrv.sendMsg(data).subscribe();
    };
    ProjectDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-detail',
            template: __webpack_require__(/*! ./project-detail.component.html */ "./src/app/components/project-detail/project-detail.component.html"),
            styles: [__webpack_require__(/*! ./project-detail.component.scss */ "./src/app/components/project-detail/project-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_service_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"],
            src_app_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            src_app_service_msg_service__WEBPACK_IMPORTED_MODULE_6__["MsgService"]])
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/project-edit/project-edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/project-edit/project-edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"projectForm\" (ngSubmit)=\"onSubmit()\">\n  <!-- title -->\n  <mat-form-field appearance=\"outline\">\n    <mat-label>项目名称/标题</mat-label>\n    <input matInput formControlName=\"title\" required maxlength=\"10\">\n    <mat-hint>10个字以内</mat-hint>\n  </mat-form-field>\n  <!-- desc -->\n  <mat-form-field appearance=\"outline\">\n    <mat-label>项目简介</mat-label>\n    <textarea matInput formControlName=\"desc\" required maxlength=\"400\" rows=\"6\"></textarea>\n    <mat-hint>描述一下你的项目，400个字以内</mat-hint>\n  </mat-form-field>\n  <!-- skill -->\n  <mat-form-field appearance=\"outline\">\n    <mat-label>技能需求</mat-label>\n    <mat-select formControlName=\"skills\" multiple>\n      <mat-option *ngFor=\"let item of skills\" [value]=\"item.id\">{{item.name}}</mat-option>\n    </mat-select>\n    <mat-hint>不了解相关技能可不填</mat-hint>\n  </mat-form-field>\n  <!-- cycle -->\n  <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n    <mat-label>期望开发时间</mat-label>\n    <mat-select formControlName=\"cycle\" required>\n      <mat-option *ngFor=\"let item of cycles\" [value]=\"item.value\">{{item.name}}</mat-option>\n    </mat-select>\n    <mat-hint>具体开发时间和项目等其他信息有关</mat-hint>\n  </mat-form-field>\n  <!-- price -->\n  <mat-form-field appearance=\"outline\">\n    <mat-label>开发预算</mat-label>\n    <input type=\"number\" matInput formControlName=\"price\" required min=\"0\">\n    <mat-hint>单位：元</mat-hint>\n  </mat-form-field>\n  <!--  -->\n  <button type=\"submit\" mat-raised-button color=\"accent\" [disabled]=\"projectForm.invalid\">发布</button>\n  <p class=\"tips\">\n    <mat-icon inline>info</mat-icon>\n    项目发布后，平台会对项目进行初步审核，审核通过后即可发布。工作人员或接受需求的开发人员可能会通过手机号联系您，请保持手机畅通。\n  </p>\n\n</form>"

/***/ }),

/***/ "./src/app/components/project-edit/project-edit.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/project-edit/project-edit.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 100%; }\n\nbutton[type=submit] {\n  width: 100%;\n  margin-top: 30px; }\n\n.tips {\n  font-size: 12px;\n  margin-top: 20px;\n  color: #aaa;\n  line-height: 1.4; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb25zb24vd29yay9teS1wcm9qZWN0L2dyYWR1YXRpb24tcHJvamVjdC9Qcm9qZWN0SHViL3Byb2otaHViL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LWVkaXQvcHJvamVjdC1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsV0FBVztFQUNYLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LWVkaXQvcHJvamVjdC1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuYnV0dG9uW3R5cGU9c3VibWl0XSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4udGlwcyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgY29sb3I6ICNhYWE7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/project-edit/project-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/project-edit/project-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProjectEditComponent, addProjectSuccessDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectEditComponent", function() { return ProjectEditComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProjectSuccessDialog", function() { return addProjectSuccessDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.8@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/_@angular_forms@7.2.8@@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_service_skill_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/skill.service */ "./src/app/service/skill.service.ts");
/* harmony import */ var src_app_service_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/project.service */ "./src/app/service/project.service.ts");
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/_@angular_material@7.3.3@@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@7.2.8@@angular/router/fesm5/router.js");









var ProjectEditComponent = /** @class */ (function () {
    function ProjectEditComponent(fb, skillService, projectSrv, userSrv, snackBar, dialog, router) {
        this.fb = fb;
        this.skillService = skillService;
        this.projectSrv = projectSrv;
        this.userSrv = userSrv;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.router = router;
        this.cycles = [
            { name: '1天', value: 1 },
            { name: '3天', value: 3 },
            { name: '5天', value: 5 },
            { name: '7天', value: 7 },
            { name: '1个月', value: 30 },
            { name: '3个月', value: 90 },
            { name: '5个月', value: 150 },
            { name: '7个月', value: 210 },
        ];
    }
    ProjectEditComponent.prototype.ngOnInit = function () {
        // 
        this.handleGetSkills();
        this.initForm();
    };
    // 获取全部skill
    ProjectEditComponent.prototype.handleGetSkills = function () {
        var _this = this;
        this.skillService.getSkills().subscribe(function (res) {
            _this.skills = res.data;
        });
    };
    // 项目初始化
    ProjectEditComponent.prototype.initForm = function () {
        this.projectForm = this.fb.group({
            title: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            desc: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            skills: [[]],
            cycle: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            price: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]]
        });
        // this.projectForm = this.fb.group({
        //   title: ['项目', [
        //     Validators.required
        //   ]],
        //   desc: ['项目详情项目详情项目详情项目详情，项目详情项目详情项目详情项目详情项目详情项目详情项目详情项目详情项目详情项目详情项目详情项目详情。', [
        //     Validators.required
        //   ]],
        //   skills: [[]],
        //   cycle: ['12', [
        //     Validators.required
        //   ]],
        //   price: ['2', [
        //     Validators.required
        //   ]]
        // })
    };
    ProjectEditComponent.prototype.onSubmit = function () {
        var _this = this;
        var data = this.projectForm.value;
        if (data.skills) {
            data.skills = data.skills.join(',');
        }
        this.projectSrv.addProject(data).subscribe(function (res) {
            console.log('res: ', res);
            _this.dialog.open(addProjectSuccessDialog, {
                data: res.data
            });
        });
    };
    ProjectEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-edit',
            template: __webpack_require__(/*! ./project-edit.component.html */ "./src/app/components/project-edit/project-edit.component.html"),
            styles: [__webpack_require__(/*! ./project-edit.component.scss */ "./src/app/components/project-edit/project-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_service_skill_service__WEBPACK_IMPORTED_MODULE_3__["SkillService"],
            src_app_service_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"],
            src_app_service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], ProjectEditComponent);
    return ProjectEditComponent;
}());

/**
 * @description 发布成功的dialog
 */
var addProjectSuccessDialog = /** @class */ (function () {
    function addProjectSuccessDialog(dialogRef, router, data) {
        this.dialogRef = dialogRef;
        this.router = router;
        this.data = data;
    }
    addProjectSuccessDialog.prototype.onCancel = function () {
        this.dialogRef.close();
        this.router.navigate(['/home/projects']);
    };
    addProjectSuccessDialog.prototype.onOk = function () {
        console.log('this.id: ', this.data);
        this.router.navigate(['/sub/project', this.data._id], {
            replaceUrl: true
        });
    };
    addProjectSuccessDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-project-success-dialog',
            template: "\n    <h2 mat-dialog-title>\u63D0\u793A</h2>\n    <div mat-dialog-content>\n      <p>\u9879\u76EE\u53D1\u5E03\u6210\u529F\uFF01</p>\n    </div>\n    <div mat-dialog-actions>\n      <button mat-button (click)=\"onCancel()\">\u53D6\u6D88</button>\n      <button mat-button [mat-dialog-close]=\"true\" (click)=\"onOk()\" cdkFocusInitial>\u67E5\u770B\u9879\u76EE</button>\n    </div>\n  ",
            styles: [__webpack_require__(/*! ./project-edit.component.scss */ "./src/app/components/project-edit/project-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], Object])
    ], addProjectSuccessDialog);
    return addProjectSuccessDialog;
}());



/***/ }),

/***/ "./src/app/components/projects/projects.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/projects/projects.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"projs\"\n  *ngIf=\"projects?.length; else NoProject\">\n  <div class=\"proj-item\"\n    *ngFor=\"let item of projects\"\n    [routerLink]=\"[ '/sub/project', item._id ]\">\n    <div class=\"top-info\">\n      <img *ngIf=\"item.demand_user.profile.avatar as avatar\"\n        [src]=\"avatar\">\n      <div class=\"text\">\n        <h6>{{item.title}}</h6>\n        <p>{{item.create_time | date: 'yyyy-MM-dd hh:mm:ss'}}</p>\n      </div>\n    </div>\n    <div class=\"desc\">\n      <span>{{item.desc}}</span>\n      <a>阅读全文</a>\n    </div>\n    <mat-chip-list>\n      <mat-chip color=\"{{ item.status | projectColor }}\"\n        selected>{{ item.status | projectStatus }}</mat-chip>\n    </mat-chip-list>\n  </div>\n</section>\n\n<ng-template #NoProject>\n  <p class=\"mt-5 text-center\">还没有项目~</p>\n</ng-template>\n\n<div class=\"fix-add-btn\"\n  *ngIf=\"userSrv.userInfo && userSrv.userInfo.role !== 3\">\n  <!-- <div class=\"fix-add-btn\"> -->\n  <button mat-fab\n    routerLink=\"/sub/project-edit/0\">\n    <mat-icon>add</mat-icon>\n  </button>\n</div>"

/***/ }),

/***/ "./src/app/components/projects/projects.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/projects/projects.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cursor {\n  cursor: pointer; }\n\n.toe, .proj-item .top-info .text h6 {\n  text-overflow: ellipsis;\n  overflow-x: hidden;\n  overflow-y: auto;\n  white-space: nowrap; }\n\n.toe2 {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  text-overflow: ellipsis;\n  overflow: hidden; }\n\n.white-bg {\n  background-color: #fff;\n  color: #000; }\n\n.text-center {\n  text-align: center; }\n\n/* \n  display \n*/\n\n.d-none {\n  display: none !important; }\n\n.d-inline {\n  display: inline !important; }\n\n.d-inline-block {\n  display: inline-block !important; }\n\n.d-block {\n  display: block !important; }\n\n.d-table {\n  display: table !important; }\n\n.d-table-row {\n  display: table-row !important; }\n\n.d-table-cell {\n  display: table-cell !important; }\n\n.d-flex {\n  display: flex !important; }\n\n.d-inline-flex {\n  display: inline-flex !important; }\n\n@media (min-width: 576px) {\n  .d-sm-none {\n    display: none !important; }\n  .d-sm-inline {\n    display: inline !important; }\n  .d-sm-inline-block {\n    display: inline-block !important; }\n  .d-sm-block {\n    display: block !important; }\n  .d-sm-table {\n    display: table !important; }\n  .d-sm-table-row {\n    display: table-row !important; }\n  .d-sm-table-cell {\n    display: table-cell !important; }\n  .d-sm-flex {\n    display: flex !important; }\n  .d-sm-inline-flex {\n    display: inline-flex !important; } }\n\n@media (min-width: 768px) {\n  .d-md-none {\n    display: none !important; }\n  .d-md-inline {\n    display: inline !important; }\n  .d-md-inline-block {\n    display: inline-block !important; }\n  .d-md-block {\n    display: block !important; }\n  .d-md-table {\n    display: table !important; }\n  .d-md-table-row {\n    display: table-row !important; }\n  .d-md-table-cell {\n    display: table-cell !important; }\n  .d-md-flex {\n    display: flex !important; }\n  .d-md-inline-flex {\n    display: inline-flex !important; } }\n\n@media (min-width: 992px) {\n  .d-lg-none {\n    display: none !important; }\n  .d-lg-inline {\n    display: inline !important; }\n  .d-lg-inline-block {\n    display: inline-block !important; }\n  .d-lg-block {\n    display: block !important; }\n  .d-lg-table {\n    display: table !important; }\n  .d-lg-table-row {\n    display: table-row !important; }\n  .d-lg-table-cell {\n    display: table-cell !important; }\n  .d-lg-flex {\n    display: flex !important; }\n  .d-lg-inline-flex {\n    display: inline-flex !important; } }\n\n@media (min-width: 1200px) {\n  .d-xl-none {\n    display: none !important; }\n  .d-xl-inline {\n    display: inline !important; }\n  .d-xl-inline-block {\n    display: inline-block !important; }\n  .d-xl-block {\n    display: block !important; }\n  .d-xl-table {\n    display: table !important; }\n  .d-xl-table-row {\n    display: table-row !important; }\n  .d-xl-table-cell {\n    display: table-cell !important; }\n  .d-xl-flex {\n    display: flex !important; }\n  .d-xl-inline-flex {\n    display: inline-flex !important; } }\n\n/* \n  flex \n*/\n\n.flex-row {\n  flex-direction: row !important; }\n\n.flex-column {\n  flex-direction: column !important; }\n\n.flex-row-reverse {\n  flex-direction: row-reverse !important; }\n\n.flex-column-reverse {\n  flex-direction: column-reverse !important; }\n\n.flex-wrap {\n  flex-wrap: wrap !important; }\n\n.flex-nowrap {\n  flex-wrap: nowrap !important; }\n\n.flex-wrap-reverse {\n  flex-wrap: wrap-reverse !important; }\n\n.justify-content-start {\n  justify-content: flex-start !important; }\n\n.justify-content-end {\n  justify-content: flex-end !important; }\n\n.justify-content-center {\n  justify-content: center !important; }\n\n.justify-content-between {\n  justify-content: space-between !important; }\n\n.justify-content-around {\n  justify-content: space-around !important; }\n\n.align-items-start {\n  align-items: flex-start !important; }\n\n.align-items-end {\n  align-items: flex-end !important; }\n\n.align-items-center {\n  align-items: center !important; }\n\n.align-items-baseline {\n  align-items: baseline !important; }\n\n.align-items-stretch {\n  align-items: stretch !important; }\n\n.align-content-start {\n  align-content: flex-start !important; }\n\n.align-content-end {\n  align-content: flex-end !important; }\n\n.align-content-center {\n  align-content: center !important; }\n\n.align-content-between {\n  align-content: space-between !important; }\n\n.align-content-around {\n  align-content: space-around !important; }\n\n.align-content-stretch {\n  align-content: stretch !important; }\n\n.align-self-auto {\n  align-self: auto !important; }\n\n.align-self-start {\n  align-self: flex-start !important; }\n\n.align-self-end {\n  align-self: flex-end !important; }\n\n.align-self-center {\n  align-self: center !important; }\n\n.align-self-baseline {\n  align-self: baseline !important; }\n\n.align-self-stretch {\n  align-self: stretch !important; }\n\n@media (min-width: 576px) {\n  .flex-sm-row {\n    flex-direction: row !important; }\n  .flex-sm-column {\n    flex-direction: column !important; }\n  .flex-sm-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-sm-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-sm-wrap {\n    flex-wrap: wrap !important; }\n  .flex-sm-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-sm-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .justify-content-sm-start {\n    justify-content: flex-start !important; }\n  .justify-content-sm-end {\n    justify-content: flex-end !important; }\n  .justify-content-sm-center {\n    justify-content: center !important; }\n  .justify-content-sm-between {\n    justify-content: space-between !important; }\n  .justify-content-sm-around {\n    justify-content: space-around !important; }\n  .align-items-sm-start {\n    align-items: flex-start !important; }\n  .align-items-sm-end {\n    align-items: flex-end !important; }\n  .align-items-sm-center {\n    align-items: center !important; }\n  .align-items-sm-baseline {\n    align-items: baseline !important; }\n  .align-items-sm-stretch {\n    align-items: stretch !important; }\n  .align-content-sm-start {\n    align-content: flex-start !important; }\n  .align-content-sm-end {\n    align-content: flex-end !important; }\n  .align-content-sm-center {\n    align-content: center !important; }\n  .align-content-sm-between {\n    align-content: space-between !important; }\n  .align-content-sm-around {\n    align-content: space-around !important; }\n  .align-content-sm-stretch {\n    align-content: stretch !important; }\n  .align-self-sm-auto {\n    align-self: auto !important; }\n  .align-self-sm-start {\n    align-self: flex-start !important; }\n  .align-self-sm-end {\n    align-self: flex-end !important; }\n  .align-self-sm-center {\n    align-self: center !important; }\n  .align-self-sm-baseline {\n    align-self: baseline !important; }\n  .align-self-sm-stretch {\n    align-self: stretch !important; } }\n\n@media (min-width: 768px) {\n  .flex-md-row {\n    flex-direction: row !important; }\n  .flex-md-column {\n    flex-direction: column !important; }\n  .flex-md-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-md-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-md-wrap {\n    flex-wrap: wrap !important; }\n  .flex-md-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-md-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .justify-content-md-start {\n    justify-content: flex-start !important; }\n  .justify-content-md-end {\n    justify-content: flex-end !important; }\n  .justify-content-md-center {\n    justify-content: center !important; }\n  .justify-content-md-between {\n    justify-content: space-between !important; }\n  .justify-content-md-around {\n    justify-content: space-around !important; }\n  .align-items-md-start {\n    align-items: flex-start !important; }\n  .align-items-md-end {\n    align-items: flex-end !important; }\n  .align-items-md-center {\n    align-items: center !important; }\n  .align-items-md-baseline {\n    align-items: baseline !important; }\n  .align-items-md-stretch {\n    align-items: stretch !important; }\n  .align-content-md-start {\n    align-content: flex-start !important; }\n  .align-content-md-end {\n    align-content: flex-end !important; }\n  .align-content-md-center {\n    align-content: center !important; }\n  .align-content-md-between {\n    align-content: space-between !important; }\n  .align-content-md-around {\n    align-content: space-around !important; }\n  .align-content-md-stretch {\n    align-content: stretch !important; }\n  .align-self-md-auto {\n    align-self: auto !important; }\n  .align-self-md-start {\n    align-self: flex-start !important; }\n  .align-self-md-end {\n    align-self: flex-end !important; }\n  .align-self-md-center {\n    align-self: center !important; }\n  .align-self-md-baseline {\n    align-self: baseline !important; }\n  .align-self-md-stretch {\n    align-self: stretch !important; } }\n\n@media (min-width: 992px) {\n  .flex-lg-row {\n    flex-direction: row !important; }\n  .flex-lg-column {\n    flex-direction: column !important; }\n  .flex-lg-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-lg-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-lg-wrap {\n    flex-wrap: wrap !important; }\n  .flex-lg-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-lg-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .justify-content-lg-start {\n    justify-content: flex-start !important; }\n  .justify-content-lg-end {\n    justify-content: flex-end !important; }\n  .justify-content-lg-center {\n    justify-content: center !important; }\n  .justify-content-lg-between {\n    justify-content: space-between !important; }\n  .justify-content-lg-around {\n    justify-content: space-around !important; }\n  .align-items-lg-start {\n    align-items: flex-start !important; }\n  .align-items-lg-end {\n    align-items: flex-end !important; }\n  .align-items-lg-center {\n    align-items: center !important; }\n  .align-items-lg-baseline {\n    align-items: baseline !important; }\n  .align-items-lg-stretch {\n    align-items: stretch !important; }\n  .align-content-lg-start {\n    align-content: flex-start !important; }\n  .align-content-lg-end {\n    align-content: flex-end !important; }\n  .align-content-lg-center {\n    align-content: center !important; }\n  .align-content-lg-between {\n    align-content: space-between !important; }\n  .align-content-lg-around {\n    align-content: space-around !important; }\n  .align-content-lg-stretch {\n    align-content: stretch !important; }\n  .align-self-lg-auto {\n    align-self: auto !important; }\n  .align-self-lg-start {\n    align-self: flex-start !important; }\n  .align-self-lg-end {\n    align-self: flex-end !important; }\n  .align-self-lg-center {\n    align-self: center !important; }\n  .align-self-lg-baseline {\n    align-self: baseline !important; }\n  .align-self-lg-stretch {\n    align-self: stretch !important; } }\n\n@media (min-width: 1200px) {\n  .flex-xl-row {\n    flex-direction: row !important; }\n  .flex-xl-column {\n    flex-direction: column !important; }\n  .flex-xl-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-xl-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-xl-wrap {\n    flex-wrap: wrap !important; }\n  .flex-xl-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-xl-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .justify-content-xl-start {\n    justify-content: flex-start !important; }\n  .justify-content-xl-end {\n    justify-content: flex-end !important; }\n  .justify-content-xl-center {\n    justify-content: center !important; }\n  .justify-content-xl-between {\n    justify-content: space-between !important; }\n  .justify-content-xl-around {\n    justify-content: space-around !important; }\n  .align-items-xl-start {\n    align-items: flex-start !important; }\n  .align-items-xl-end {\n    align-items: flex-end !important; }\n  .align-items-xl-center {\n    align-items: center !important; }\n  .align-items-xl-baseline {\n    align-items: baseline !important; }\n  .align-items-xl-stretch {\n    align-items: stretch !important; }\n  .align-content-xl-start {\n    align-content: flex-start !important; }\n  .align-content-xl-end {\n    align-content: flex-end !important; }\n  .align-content-xl-center {\n    align-content: center !important; }\n  .align-content-xl-between {\n    align-content: space-between !important; }\n  .align-content-xl-around {\n    align-content: space-around !important; }\n  .align-content-xl-stretch {\n    align-content: stretch !important; }\n  .align-self-xl-auto {\n    align-self: auto !important; }\n  .align-self-xl-start {\n    align-self: flex-start !important; }\n  .align-self-xl-end {\n    align-self: flex-end !important; }\n  .align-self-xl-center {\n    align-self: center !important; }\n  .align-self-xl-baseline {\n    align-self: baseline !important; }\n  .align-self-xl-stretch {\n    align-self: stretch !important; } }\n\n/*\n  Margin and Padding\n*/\n\n.m-0 {\n  margin: 0 !important; }\n\n.mt-0,\n.my-0 {\n  margin-top: 0 !important; }\n\n.mr-0,\n.mx-0 {\n  margin-right: 0 !important; }\n\n.mb-0,\n.my-0 {\n  margin-bottom: 0 !important; }\n\n.ml-0,\n.mx-0 {\n  margin-left: 0 !important; }\n\n.m-1 {\n  margin: 0.25rem !important; }\n\n.mt-1,\n.my-1 {\n  margin-top: 0.25rem !important; }\n\n.mr-1,\n.mx-1 {\n  margin-right: 0.25rem !important; }\n\n.mb-1,\n.my-1 {\n  margin-bottom: 0.25rem !important; }\n\n.ml-1,\n.mx-1 {\n  margin-left: 0.25rem !important; }\n\n.m-2 {\n  margin: 0.5rem !important; }\n\n.mt-2,\n.my-2 {\n  margin-top: 0.5rem !important; }\n\n.mr-2,\n.mx-2 {\n  margin-right: 0.5rem !important; }\n\n.mb-2,\n.my-2 {\n  margin-bottom: 0.5rem !important; }\n\n.ml-2,\n.mx-2 {\n  margin-left: 0.5rem !important; }\n\n.m-3 {\n  margin: 1rem !important; }\n\n.mt-3,\n.my-3 {\n  margin-top: 1rem !important; }\n\n.mr-3,\n.mx-3 {\n  margin-right: 1rem !important; }\n\n.mb-3,\n.my-3 {\n  margin-bottom: 1rem !important; }\n\n.ml-3,\n.mx-3 {\n  margin-left: 1rem !important; }\n\n.m-4 {\n  margin: 1.5rem !important; }\n\n.mt-4,\n.my-4 {\n  margin-top: 1.5rem !important; }\n\n.mr-4,\n.mx-4 {\n  margin-right: 1.5rem !important; }\n\n.mb-4,\n.my-4 {\n  margin-bottom: 1.5rem !important; }\n\n.ml-4,\n.mx-4 {\n  margin-left: 1.5rem !important; }\n\n.m-5 {\n  margin: 3rem !important; }\n\n.mt-5,\n.my-5 {\n  margin-top: 3rem !important; }\n\n.mr-5,\n.mx-5 {\n  margin-right: 3rem !important; }\n\n.mb-5,\n.my-5 {\n  margin-bottom: 3rem !important; }\n\n.ml-5,\n.mx-5 {\n  margin-left: 3rem !important; }\n\n.p-0 {\n  padding: 0 !important; }\n\n.pt-0,\n.py-0 {\n  padding-top: 0 !important; }\n\n.pr-0,\n.px-0 {\n  padding-right: 0 !important; }\n\n.pb-0,\n.py-0 {\n  padding-bottom: 0 !important; }\n\n.pl-0,\n.px-0 {\n  padding-left: 0 !important; }\n\n.p-1 {\n  padding: 0.25rem !important; }\n\n.pt-1,\n.py-1 {\n  padding-top: 0.25rem !important; }\n\n.pr-1,\n.px-1 {\n  padding-right: 0.25rem !important; }\n\n.pb-1,\n.py-1 {\n  padding-bottom: 0.25rem !important; }\n\n.pl-1,\n.px-1 {\n  padding-left: 0.25rem !important; }\n\n.p-2 {\n  padding: 0.5rem !important; }\n\n.pt-2,\n.py-2 {\n  padding-top: 0.5rem !important; }\n\n.pr-2,\n.px-2 {\n  padding-right: 0.5rem !important; }\n\n.pb-2,\n.py-2 {\n  padding-bottom: 0.5rem !important; }\n\n.pl-2,\n.px-2 {\n  padding-left: 0.5rem !important; }\n\n.p-3 {\n  padding: 1rem !important; }\n\n.pt-3,\n.py-3 {\n  padding-top: 1rem !important; }\n\n.pr-3,\n.px-3 {\n  padding-right: 1rem !important; }\n\n.pb-3,\n.py-3 {\n  padding-bottom: 1rem !important; }\n\n.pl-3,\n.px-3 {\n  padding-left: 1rem !important; }\n\n.p-4 {\n  padding: 1.5rem !important; }\n\n.pt-4,\n.py-4 {\n  padding-top: 1.5rem !important; }\n\n.pr-4,\n.px-4 {\n  padding-right: 1.5rem !important; }\n\n.pb-4,\n.py-4 {\n  padding-bottom: 1.5rem !important; }\n\n.pl-4,\n.px-4 {\n  padding-left: 1.5rem !important; }\n\n.p-5 {\n  padding: 3rem !important; }\n\n.pt-5,\n.py-5 {\n  padding-top: 3rem !important; }\n\n.pr-5,\n.px-5 {\n  padding-right: 3rem !important; }\n\n.pb-5,\n.py-5 {\n  padding-bottom: 3rem !important; }\n\n.pl-5,\n.px-5 {\n  padding-left: 3rem !important; }\n\n.m-auto {\n  margin: auto !important; }\n\n.mt-auto,\n.my-auto {\n  margin-top: auto !important; }\n\n.mr-auto,\n.mx-auto {\n  margin-right: auto !important; }\n\n.mb-auto,\n.my-auto {\n  margin-bottom: auto !important; }\n\n.ml-auto,\n.mx-auto {\n  margin-left: auto !important; }\n\n@media (min-width: 576px) {\n  .m-sm-0 {\n    margin: 0 !important; }\n  .mt-sm-0,\n  .my-sm-0 {\n    margin-top: 0 !important; }\n  .mr-sm-0,\n  .mx-sm-0 {\n    margin-right: 0 !important; }\n  .mb-sm-0,\n  .my-sm-0 {\n    margin-bottom: 0 !important; }\n  .ml-sm-0,\n  .mx-sm-0 {\n    margin-left: 0 !important; }\n  .m-sm-1 {\n    margin: 0.25rem !important; }\n  .mt-sm-1,\n  .my-sm-1 {\n    margin-top: 0.25rem !important; }\n  .mr-sm-1,\n  .mx-sm-1 {\n    margin-right: 0.25rem !important; }\n  .mb-sm-1,\n  .my-sm-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-sm-1,\n  .mx-sm-1 {\n    margin-left: 0.25rem !important; }\n  .m-sm-2 {\n    margin: 0.5rem !important; }\n  .mt-sm-2,\n  .my-sm-2 {\n    margin-top: 0.5rem !important; }\n  .mr-sm-2,\n  .mx-sm-2 {\n    margin-right: 0.5rem !important; }\n  .mb-sm-2,\n  .my-sm-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-sm-2,\n  .mx-sm-2 {\n    margin-left: 0.5rem !important; }\n  .m-sm-3 {\n    margin: 1rem !important; }\n  .mt-sm-3,\n  .my-sm-3 {\n    margin-top: 1rem !important; }\n  .mr-sm-3,\n  .mx-sm-3 {\n    margin-right: 1rem !important; }\n  .mb-sm-3,\n  .my-sm-3 {\n    margin-bottom: 1rem !important; }\n  .ml-sm-3,\n  .mx-sm-3 {\n    margin-left: 1rem !important; }\n  .m-sm-4 {\n    margin: 1.5rem !important; }\n  .mt-sm-4,\n  .my-sm-4 {\n    margin-top: 1.5rem !important; }\n  .mr-sm-4,\n  .mx-sm-4 {\n    margin-right: 1.5rem !important; }\n  .mb-sm-4,\n  .my-sm-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-sm-4,\n  .mx-sm-4 {\n    margin-left: 1.5rem !important; }\n  .m-sm-5 {\n    margin: 3rem !important; }\n  .mt-sm-5,\n  .my-sm-5 {\n    margin-top: 3rem !important; }\n  .mr-sm-5,\n  .mx-sm-5 {\n    margin-right: 3rem !important; }\n  .mb-sm-5,\n  .my-sm-5 {\n    margin-bottom: 3rem !important; }\n  .ml-sm-5,\n  .mx-sm-5 {\n    margin-left: 3rem !important; }\n  .p-sm-0 {\n    padding: 0 !important; }\n  .pt-sm-0,\n  .py-sm-0 {\n    padding-top: 0 !important; }\n  .pr-sm-0,\n  .px-sm-0 {\n    padding-right: 0 !important; }\n  .pb-sm-0,\n  .py-sm-0 {\n    padding-bottom: 0 !important; }\n  .pl-sm-0,\n  .px-sm-0 {\n    padding-left: 0 !important; }\n  .p-sm-1 {\n    padding: 0.25rem !important; }\n  .pt-sm-1,\n  .py-sm-1 {\n    padding-top: 0.25rem !important; }\n  .pr-sm-1,\n  .px-sm-1 {\n    padding-right: 0.25rem !important; }\n  .pb-sm-1,\n  .py-sm-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-sm-1,\n  .px-sm-1 {\n    padding-left: 0.25rem !important; }\n  .p-sm-2 {\n    padding: 0.5rem !important; }\n  .pt-sm-2,\n  .py-sm-2 {\n    padding-top: 0.5rem !important; }\n  .pr-sm-2,\n  .px-sm-2 {\n    padding-right: 0.5rem !important; }\n  .pb-sm-2,\n  .py-sm-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-sm-2,\n  .px-sm-2 {\n    padding-left: 0.5rem !important; }\n  .p-sm-3 {\n    padding: 1rem !important; }\n  .pt-sm-3,\n  .py-sm-3 {\n    padding-top: 1rem !important; }\n  .pr-sm-3,\n  .px-sm-3 {\n    padding-right: 1rem !important; }\n  .pb-sm-3,\n  .py-sm-3 {\n    padding-bottom: 1rem !important; }\n  .pl-sm-3,\n  .px-sm-3 {\n    padding-left: 1rem !important; }\n  .p-sm-4 {\n    padding: 1.5rem !important; }\n  .pt-sm-4,\n  .py-sm-4 {\n    padding-top: 1.5rem !important; }\n  .pr-sm-4,\n  .px-sm-4 {\n    padding-right: 1.5rem !important; }\n  .pb-sm-4,\n  .py-sm-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-sm-4,\n  .px-sm-4 {\n    padding-left: 1.5rem !important; }\n  .p-sm-5 {\n    padding: 3rem !important; }\n  .pt-sm-5,\n  .py-sm-5 {\n    padding-top: 3rem !important; }\n  .pr-sm-5,\n  .px-sm-5 {\n    padding-right: 3rem !important; }\n  .pb-sm-5,\n  .py-sm-5 {\n    padding-bottom: 3rem !important; }\n  .pl-sm-5,\n  .px-sm-5 {\n    padding-left: 3rem !important; }\n  .m-sm-auto {\n    margin: auto !important; }\n  .mt-sm-auto,\n  .my-sm-auto {\n    margin-top: auto !important; }\n  .mr-sm-auto,\n  .mx-sm-auto {\n    margin-right: auto !important; }\n  .mb-sm-auto,\n  .my-sm-auto {\n    margin-bottom: auto !important; }\n  .ml-sm-auto,\n  .mx-sm-auto {\n    margin-left: auto !important; } }\n\n@media (min-width: 768px) {\n  .m-md-0 {\n    margin: 0 !important; }\n  .mt-md-0,\n  .my-md-0 {\n    margin-top: 0 !important; }\n  .mr-md-0,\n  .mx-md-0 {\n    margin-right: 0 !important; }\n  .mb-md-0,\n  .my-md-0 {\n    margin-bottom: 0 !important; }\n  .ml-md-0,\n  .mx-md-0 {\n    margin-left: 0 !important; }\n  .m-md-1 {\n    margin: 0.25rem !important; }\n  .mt-md-1,\n  .my-md-1 {\n    margin-top: 0.25rem !important; }\n  .mr-md-1,\n  .mx-md-1 {\n    margin-right: 0.25rem !important; }\n  .mb-md-1,\n  .my-md-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-md-1,\n  .mx-md-1 {\n    margin-left: 0.25rem !important; }\n  .m-md-2 {\n    margin: 0.5rem !important; }\n  .mt-md-2,\n  .my-md-2 {\n    margin-top: 0.5rem !important; }\n  .mr-md-2,\n  .mx-md-2 {\n    margin-right: 0.5rem !important; }\n  .mb-md-2,\n  .my-md-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-md-2,\n  .mx-md-2 {\n    margin-left: 0.5rem !important; }\n  .m-md-3 {\n    margin: 1rem !important; }\n  .mt-md-3,\n  .my-md-3 {\n    margin-top: 1rem !important; }\n  .mr-md-3,\n  .mx-md-3 {\n    margin-right: 1rem !important; }\n  .mb-md-3,\n  .my-md-3 {\n    margin-bottom: 1rem !important; }\n  .ml-md-3,\n  .mx-md-3 {\n    margin-left: 1rem !important; }\n  .m-md-4 {\n    margin: 1.5rem !important; }\n  .mt-md-4,\n  .my-md-4 {\n    margin-top: 1.5rem !important; }\n  .mr-md-4,\n  .mx-md-4 {\n    margin-right: 1.5rem !important; }\n  .mb-md-4,\n  .my-md-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-md-4,\n  .mx-md-4 {\n    margin-left: 1.5rem !important; }\n  .m-md-5 {\n    margin: 3rem !important; }\n  .mt-md-5,\n  .my-md-5 {\n    margin-top: 3rem !important; }\n  .mr-md-5,\n  .mx-md-5 {\n    margin-right: 3rem !important; }\n  .mb-md-5,\n  .my-md-5 {\n    margin-bottom: 3rem !important; }\n  .ml-md-5,\n  .mx-md-5 {\n    margin-left: 3rem !important; }\n  .p-md-0 {\n    padding: 0 !important; }\n  .pt-md-0,\n  .py-md-0 {\n    padding-top: 0 !important; }\n  .pr-md-0,\n  .px-md-0 {\n    padding-right: 0 !important; }\n  .pb-md-0,\n  .py-md-0 {\n    padding-bottom: 0 !important; }\n  .pl-md-0,\n  .px-md-0 {\n    padding-left: 0 !important; }\n  .p-md-1 {\n    padding: 0.25rem !important; }\n  .pt-md-1,\n  .py-md-1 {\n    padding-top: 0.25rem !important; }\n  .pr-md-1,\n  .px-md-1 {\n    padding-right: 0.25rem !important; }\n  .pb-md-1,\n  .py-md-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-md-1,\n  .px-md-1 {\n    padding-left: 0.25rem !important; }\n  .p-md-2 {\n    padding: 0.5rem !important; }\n  .pt-md-2,\n  .py-md-2 {\n    padding-top: 0.5rem !important; }\n  .pr-md-2,\n  .px-md-2 {\n    padding-right: 0.5rem !important; }\n  .pb-md-2,\n  .py-md-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-md-2,\n  .px-md-2 {\n    padding-left: 0.5rem !important; }\n  .p-md-3 {\n    padding: 1rem !important; }\n  .pt-md-3,\n  .py-md-3 {\n    padding-top: 1rem !important; }\n  .pr-md-3,\n  .px-md-3 {\n    padding-right: 1rem !important; }\n  .pb-md-3,\n  .py-md-3 {\n    padding-bottom: 1rem !important; }\n  .pl-md-3,\n  .px-md-3 {\n    padding-left: 1rem !important; }\n  .p-md-4 {\n    padding: 1.5rem !important; }\n  .pt-md-4,\n  .py-md-4 {\n    padding-top: 1.5rem !important; }\n  .pr-md-4,\n  .px-md-4 {\n    padding-right: 1.5rem !important; }\n  .pb-md-4,\n  .py-md-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-md-4,\n  .px-md-4 {\n    padding-left: 1.5rem !important; }\n  .p-md-5 {\n    padding: 3rem !important; }\n  .pt-md-5,\n  .py-md-5 {\n    padding-top: 3rem !important; }\n  .pr-md-5,\n  .px-md-5 {\n    padding-right: 3rem !important; }\n  .pb-md-5,\n  .py-md-5 {\n    padding-bottom: 3rem !important; }\n  .pl-md-5,\n  .px-md-5 {\n    padding-left: 3rem !important; }\n  .m-md-auto {\n    margin: auto !important; }\n  .mt-md-auto,\n  .my-md-auto {\n    margin-top: auto !important; }\n  .mr-md-auto,\n  .mx-md-auto {\n    margin-right: auto !important; }\n  .mb-md-auto,\n  .my-md-auto {\n    margin-bottom: auto !important; }\n  .ml-md-auto,\n  .mx-md-auto {\n    margin-left: auto !important; } }\n\n@media (min-width: 992px) {\n  .m-lg-0 {\n    margin: 0 !important; }\n  .mt-lg-0,\n  .my-lg-0 {\n    margin-top: 0 !important; }\n  .mr-lg-0,\n  .mx-lg-0 {\n    margin-right: 0 !important; }\n  .mb-lg-0,\n  .my-lg-0 {\n    margin-bottom: 0 !important; }\n  .ml-lg-0,\n  .mx-lg-0 {\n    margin-left: 0 !important; }\n  .m-lg-1 {\n    margin: 0.25rem !important; }\n  .mt-lg-1,\n  .my-lg-1 {\n    margin-top: 0.25rem !important; }\n  .mr-lg-1,\n  .mx-lg-1 {\n    margin-right: 0.25rem !important; }\n  .mb-lg-1,\n  .my-lg-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-lg-1,\n  .mx-lg-1 {\n    margin-left: 0.25rem !important; }\n  .m-lg-2 {\n    margin: 0.5rem !important; }\n  .mt-lg-2,\n  .my-lg-2 {\n    margin-top: 0.5rem !important; }\n  .mr-lg-2,\n  .mx-lg-2 {\n    margin-right: 0.5rem !important; }\n  .mb-lg-2,\n  .my-lg-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-lg-2,\n  .mx-lg-2 {\n    margin-left: 0.5rem !important; }\n  .m-lg-3 {\n    margin: 1rem !important; }\n  .mt-lg-3,\n  .my-lg-3 {\n    margin-top: 1rem !important; }\n  .mr-lg-3,\n  .mx-lg-3 {\n    margin-right: 1rem !important; }\n  .mb-lg-3,\n  .my-lg-3 {\n    margin-bottom: 1rem !important; }\n  .ml-lg-3,\n  .mx-lg-3 {\n    margin-left: 1rem !important; }\n  .m-lg-4 {\n    margin: 1.5rem !important; }\n  .mt-lg-4,\n  .my-lg-4 {\n    margin-top: 1.5rem !important; }\n  .mr-lg-4,\n  .mx-lg-4 {\n    margin-right: 1.5rem !important; }\n  .mb-lg-4,\n  .my-lg-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-lg-4,\n  .mx-lg-4 {\n    margin-left: 1.5rem !important; }\n  .m-lg-5 {\n    margin: 3rem !important; }\n  .mt-lg-5,\n  .my-lg-5 {\n    margin-top: 3rem !important; }\n  .mr-lg-5,\n  .mx-lg-5 {\n    margin-right: 3rem !important; }\n  .mb-lg-5,\n  .my-lg-5 {\n    margin-bottom: 3rem !important; }\n  .ml-lg-5,\n  .mx-lg-5 {\n    margin-left: 3rem !important; }\n  .p-lg-0 {\n    padding: 0 !important; }\n  .pt-lg-0,\n  .py-lg-0 {\n    padding-top: 0 !important; }\n  .pr-lg-0,\n  .px-lg-0 {\n    padding-right: 0 !important; }\n  .pb-lg-0,\n  .py-lg-0 {\n    padding-bottom: 0 !important; }\n  .pl-lg-0,\n  .px-lg-0 {\n    padding-left: 0 !important; }\n  .p-lg-1 {\n    padding: 0.25rem !important; }\n  .pt-lg-1,\n  .py-lg-1 {\n    padding-top: 0.25rem !important; }\n  .pr-lg-1,\n  .px-lg-1 {\n    padding-right: 0.25rem !important; }\n  .pb-lg-1,\n  .py-lg-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-lg-1,\n  .px-lg-1 {\n    padding-left: 0.25rem !important; }\n  .p-lg-2 {\n    padding: 0.5rem !important; }\n  .pt-lg-2,\n  .py-lg-2 {\n    padding-top: 0.5rem !important; }\n  .pr-lg-2,\n  .px-lg-2 {\n    padding-right: 0.5rem !important; }\n  .pb-lg-2,\n  .py-lg-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-lg-2,\n  .px-lg-2 {\n    padding-left: 0.5rem !important; }\n  .p-lg-3 {\n    padding: 1rem !important; }\n  .pt-lg-3,\n  .py-lg-3 {\n    padding-top: 1rem !important; }\n  .pr-lg-3,\n  .px-lg-3 {\n    padding-right: 1rem !important; }\n  .pb-lg-3,\n  .py-lg-3 {\n    padding-bottom: 1rem !important; }\n  .pl-lg-3,\n  .px-lg-3 {\n    padding-left: 1rem !important; }\n  .p-lg-4 {\n    padding: 1.5rem !important; }\n  .pt-lg-4,\n  .py-lg-4 {\n    padding-top: 1.5rem !important; }\n  .pr-lg-4,\n  .px-lg-4 {\n    padding-right: 1.5rem !important; }\n  .pb-lg-4,\n  .py-lg-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-lg-4,\n  .px-lg-4 {\n    padding-left: 1.5rem !important; }\n  .p-lg-5 {\n    padding: 3rem !important; }\n  .pt-lg-5,\n  .py-lg-5 {\n    padding-top: 3rem !important; }\n  .pr-lg-5,\n  .px-lg-5 {\n    padding-right: 3rem !important; }\n  .pb-lg-5,\n  .py-lg-5 {\n    padding-bottom: 3rem !important; }\n  .pl-lg-5,\n  .px-lg-5 {\n    padding-left: 3rem !important; }\n  .m-lg-auto {\n    margin: auto !important; }\n  .mt-lg-auto,\n  .my-lg-auto {\n    margin-top: auto !important; }\n  .mr-lg-auto,\n  .mx-lg-auto {\n    margin-right: auto !important; }\n  .mb-lg-auto,\n  .my-lg-auto {\n    margin-bottom: auto !important; }\n  .ml-lg-auto,\n  .mx-lg-auto {\n    margin-left: auto !important; } }\n\n@media (min-width: 1200px) {\n  .m-xl-0 {\n    margin: 0 !important; }\n  .mt-xl-0,\n  .my-xl-0 {\n    margin-top: 0 !important; }\n  .mr-xl-0,\n  .mx-xl-0 {\n    margin-right: 0 !important; }\n  .mb-xl-0,\n  .my-xl-0 {\n    margin-bottom: 0 !important; }\n  .ml-xl-0,\n  .mx-xl-0 {\n    margin-left: 0 !important; }\n  .m-xl-1 {\n    margin: 0.25rem !important; }\n  .mt-xl-1,\n  .my-xl-1 {\n    margin-top: 0.25rem !important; }\n  .mr-xl-1,\n  .mx-xl-1 {\n    margin-right: 0.25rem !important; }\n  .mb-xl-1,\n  .my-xl-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-xl-1,\n  .mx-xl-1 {\n    margin-left: 0.25rem !important; }\n  .m-xl-2 {\n    margin: 0.5rem !important; }\n  .mt-xl-2,\n  .my-xl-2 {\n    margin-top: 0.5rem !important; }\n  .mr-xl-2,\n  .mx-xl-2 {\n    margin-right: 0.5rem !important; }\n  .mb-xl-2,\n  .my-xl-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-xl-2,\n  .mx-xl-2 {\n    margin-left: 0.5rem !important; }\n  .m-xl-3 {\n    margin: 1rem !important; }\n  .mt-xl-3,\n  .my-xl-3 {\n    margin-top: 1rem !important; }\n  .mr-xl-3,\n  .mx-xl-3 {\n    margin-right: 1rem !important; }\n  .mb-xl-3,\n  .my-xl-3 {\n    margin-bottom: 1rem !important; }\n  .ml-xl-3,\n  .mx-xl-3 {\n    margin-left: 1rem !important; }\n  .m-xl-4 {\n    margin: 1.5rem !important; }\n  .mt-xl-4,\n  .my-xl-4 {\n    margin-top: 1.5rem !important; }\n  .mr-xl-4,\n  .mx-xl-4 {\n    margin-right: 1.5rem !important; }\n  .mb-xl-4,\n  .my-xl-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-xl-4,\n  .mx-xl-4 {\n    margin-left: 1.5rem !important; }\n  .m-xl-5 {\n    margin: 3rem !important; }\n  .mt-xl-5,\n  .my-xl-5 {\n    margin-top: 3rem !important; }\n  .mr-xl-5,\n  .mx-xl-5 {\n    margin-right: 3rem !important; }\n  .mb-xl-5,\n  .my-xl-5 {\n    margin-bottom: 3rem !important; }\n  .ml-xl-5,\n  .mx-xl-5 {\n    margin-left: 3rem !important; }\n  .p-xl-0 {\n    padding: 0 !important; }\n  .pt-xl-0,\n  .py-xl-0 {\n    padding-top: 0 !important; }\n  .pr-xl-0,\n  .px-xl-0 {\n    padding-right: 0 !important; }\n  .pb-xl-0,\n  .py-xl-0 {\n    padding-bottom: 0 !important; }\n  .pl-xl-0,\n  .px-xl-0 {\n    padding-left: 0 !important; }\n  .p-xl-1 {\n    padding: 0.25rem !important; }\n  .pt-xl-1,\n  .py-xl-1 {\n    padding-top: 0.25rem !important; }\n  .pr-xl-1,\n  .px-xl-1 {\n    padding-right: 0.25rem !important; }\n  .pb-xl-1,\n  .py-xl-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-xl-1,\n  .px-xl-1 {\n    padding-left: 0.25rem !important; }\n  .p-xl-2 {\n    padding: 0.5rem !important; }\n  .pt-xl-2,\n  .py-xl-2 {\n    padding-top: 0.5rem !important; }\n  .pr-xl-2,\n  .px-xl-2 {\n    padding-right: 0.5rem !important; }\n  .pb-xl-2,\n  .py-xl-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-xl-2,\n  .px-xl-2 {\n    padding-left: 0.5rem !important; }\n  .p-xl-3 {\n    padding: 1rem !important; }\n  .pt-xl-3,\n  .py-xl-3 {\n    padding-top: 1rem !important; }\n  .pr-xl-3,\n  .px-xl-3 {\n    padding-right: 1rem !important; }\n  .pb-xl-3,\n  .py-xl-3 {\n    padding-bottom: 1rem !important; }\n  .pl-xl-3,\n  .px-xl-3 {\n    padding-left: 1rem !important; }\n  .p-xl-4 {\n    padding: 1.5rem !important; }\n  .pt-xl-4,\n  .py-xl-4 {\n    padding-top: 1.5rem !important; }\n  .pr-xl-4,\n  .px-xl-4 {\n    padding-right: 1.5rem !important; }\n  .pb-xl-4,\n  .py-xl-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-xl-4,\n  .px-xl-4 {\n    padding-left: 1.5rem !important; }\n  .p-xl-5 {\n    padding: 3rem !important; }\n  .pt-xl-5,\n  .py-xl-5 {\n    padding-top: 3rem !important; }\n  .pr-xl-5,\n  .px-xl-5 {\n    padding-right: 3rem !important; }\n  .pb-xl-5,\n  .py-xl-5 {\n    padding-bottom: 3rem !important; }\n  .pl-xl-5,\n  .px-xl-5 {\n    padding-left: 3rem !important; }\n  .m-xl-auto {\n    margin: auto !important; }\n  .mt-xl-auto,\n  .my-xl-auto {\n    margin-top: auto !important; }\n  .mr-xl-auto,\n  .mx-xl-auto {\n    margin-right: auto !important; }\n  .mb-xl-auto,\n  .my-xl-auto {\n    margin-bottom: auto !important; }\n  .ml-xl-auto,\n  .mx-xl-auto {\n    margin-left: auto !important; } }\n\n/*\n  Flot\n*/\n\n.float-left {\n  float: left; }\n\n.float-right {\n  float: right; }\n\n.float-none {\n  float: none; }\n\n@media (min-width: 576px) {\n  .float-sm-left {\n    float: left; }\n  .float-sm-right {\n    float: right; }\n  .float-sm-none {\n    float: none; } }\n\n@media (min-width: 768px) {\n  .float-md-left {\n    float: left; }\n  .float-md-right {\n    float: right; }\n  .float-md-none {\n    float: none; } }\n\n@media (min-width: 992px) {\n  .float-lg-left {\n    float: left; }\n  .float-lg-right {\n    float: right; }\n  .float-lg-none {\n    float: none; } }\n\n@media (min-width: 1200px) {\n  .float-xl-left {\n    float: left; }\n  .float-xl-right {\n    float: right; }\n  .float-xl-none {\n    float: none; } }\n\n.clearfix::after, .clearfix::before {\n  content: \"\";\n  display: block;\n  visibility: hidden;\n  height: 0;\n  clear: both; }\n\n.proj-item {\n  max-height: 300px; }\n\n.proj-item .top-info {\n    background: #fff;\n    padding: 0; }\n\n.proj-item .top-info .text {\n      height: 35px; }\n\n.proj-item .top-info .text h6 {\n        margin-bottom: 0; }\n\n.proj-item .desc a {\n    color: #2196f3; }\n\n.fix-add-btn {\n  position: fixed;\n  bottom: 65px;\n  right: 30px;\n  border-radius: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb25zb24vd29yay9teS1wcm9qZWN0L2dyYWR1YXRpb24tcHJvamVjdC9Qcm9qZWN0SHViL3Byb2otaHViL3NyYy9hc3NldHMvY3NzL2NsYXNzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvam9uc29uL3dvcmsvbXktcHJvamVjdC9ncmFkdWF0aW9uLXByb2plY3QvUHJvamVjdEh1Yi9wcm9qLWh1Yi9zcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUNGLEVBQUE7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixnQkFBZ0IsRUFFbEI7O0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVyxFQUFBOztBQUViO0VBQ0Usa0JBQWtCLEVBQUE7O0FBaUpwQjs7Q0NqSkM7O0FEd0pHO0VBQTJCLHdCQUF3QixFQUFBOztBQUNuRDtFQUEyQiwwQkFBMEIsRUFBQTs7QUFDckQ7RUFBMkIsZ0NBQWdDLEVBQUE7O0FBQzNEO0VBQTJCLHlCQUF5QixFQUFBOztBQUNwRDtFQUEyQix5QkFBeUIsRUFBQTs7QUFDcEQ7RUFBMkIsNkJBQTZCLEVBQUE7O0FBQ3hEO0VBQTJCLDhCQUE4QixFQUFBOztBQUN6RDtFQUEyQix3QkFBd0IsRUFBQTs7QUFDbkQ7RUFBMkIsK0JBQStCLEVBQUE7O0FBL0UxRDtFQXVFQTtJQUEyQix3QkFBd0IsRUFBQTtFQUNuRDtJQUEyQiwwQkFBMEIsRUFBQTtFQUNyRDtJQUEyQixnQ0FBZ0MsRUFBQTtFQUMzRDtJQUEyQix5QkFBeUIsRUFBQTtFQUNwRDtJQUEyQix5QkFBeUIsRUFBQTtFQUNwRDtJQUEyQiw2QkFBNkIsRUFBQTtFQUN4RDtJQUEyQiw4QkFBOEIsRUFBQTtFQUN6RDtJQUEyQix3QkFBd0IsRUFBQTtFQUNuRDtJQUEyQiwrQkFBK0IsRUFBQSxFQUFJOztBQS9FOUQ7RUF1RUE7SUFBMkIsd0JBQXdCLEVBQUE7RUFDbkQ7SUFBMkIsMEJBQTBCLEVBQUE7RUFDckQ7SUFBMkIsZ0NBQWdDLEVBQUE7RUFDM0Q7SUFBMkIseUJBQXlCLEVBQUE7RUFDcEQ7SUFBMkIseUJBQXlCLEVBQUE7RUFDcEQ7SUFBMkIsNkJBQTZCLEVBQUE7RUFDeEQ7SUFBMkIsOEJBQThCLEVBQUE7RUFDekQ7SUFBMkIsd0JBQXdCLEVBQUE7RUFDbkQ7SUFBMkIsK0JBQStCLEVBQUEsRUFBSTs7QUEvRTlEO0VBdUVBO0lBQTJCLHdCQUF3QixFQUFBO0VBQ25EO0lBQTJCLDBCQUEwQixFQUFBO0VBQ3JEO0lBQTJCLGdDQUFnQyxFQUFBO0VBQzNEO0lBQTJCLHlCQUF5QixFQUFBO0VBQ3BEO0lBQTJCLHlCQUF5QixFQUFBO0VBQ3BEO0lBQTJCLDZCQUE2QixFQUFBO0VBQ3hEO0lBQTJCLDhCQUE4QixFQUFBO0VBQ3pEO0lBQTJCLHdCQUF3QixFQUFBO0VBQ25EO0lBQTJCLCtCQUErQixFQUFBLEVBQUk7O0FBL0U5RDtFQXVFQTtJQUEyQix3QkFBd0IsRUFBQTtFQUNuRDtJQUEyQiwwQkFBMEIsRUFBQTtFQUNyRDtJQUEyQixnQ0FBZ0MsRUFBQTtFQUMzRDtJQUEyQix5QkFBeUIsRUFBQTtFQUNwRDtJQUEyQix5QkFBeUIsRUFBQTtFQUNwRDtJQUEyQiw2QkFBNkIsRUFBQTtFQUN4RDtJQUEyQiw4QkFBOEIsRUFBQTtFQUN6RDtJQUEyQix3QkFBd0IsRUFBQTtFQUNuRDtJQUEyQiwrQkFBK0IsRUFBQSxFQUFJOztBQUdsRTs7Q0NyREM7O0FENERHO0VBQWdDLDhCQUE4QixFQUFBOztBQUM5RDtFQUFnQyxpQ0FBaUMsRUFBQTs7QUFDakU7RUFBZ0Msc0NBQXNDLEVBQUE7O0FBQ3RFO0VBQWdDLHlDQUF5QyxFQUFBOztBQUV6RTtFQUE4QiwwQkFBMEIsRUFBQTs7QUFDeEQ7RUFBOEIsNEJBQTRCLEVBQUE7O0FBQzFEO0VBQThCLGtDQUFrQyxFQUFBOztBQUVoRTtFQUFvQyxzQ0FBc0MsRUFBQTs7QUFDMUU7RUFBb0Msb0NBQW9DLEVBQUE7O0FBQ3hFO0VBQW9DLGtDQUFrQyxFQUFBOztBQUN0RTtFQUFvQyx5Q0FBeUMsRUFBQTs7QUFDN0U7RUFBb0Msd0NBQXdDLEVBQUE7O0FBRTVFO0VBQWlDLGtDQUFrQyxFQUFBOztBQUNuRTtFQUFpQyxnQ0FBZ0MsRUFBQTs7QUFDakU7RUFBaUMsOEJBQThCLEVBQUE7O0FBQy9EO0VBQWlDLGdDQUFnQyxFQUFBOztBQUNqRTtFQUFpQywrQkFBK0IsRUFBQTs7QUFFaEU7RUFBa0Msb0NBQW9DLEVBQUE7O0FBQ3RFO0VBQWtDLGtDQUFrQyxFQUFBOztBQUNwRTtFQUFrQyxnQ0FBZ0MsRUFBQTs7QUFDbEU7RUFBa0MsdUNBQXVDLEVBQUE7O0FBQ3pFO0VBQWtDLHNDQUFzQyxFQUFBOztBQUN4RTtFQUFrQyxpQ0FBaUMsRUFBQTs7QUFFbkU7RUFBZ0MsMkJBQTJCLEVBQUE7O0FBQzNEO0VBQWdDLGlDQUFpQyxFQUFBOztBQUNqRTtFQUFnQywrQkFBK0IsRUFBQTs7QUFDL0Q7RUFBZ0MsNkJBQTZCLEVBQUE7O0FBQzdEO0VBQWdDLCtCQUErQixFQUFBOztBQUMvRDtFQUFnQyw4QkFBOEIsRUFBQTs7QUExSDlEO0VBeUZBO0lBQWdDLDhCQUE4QixFQUFBO0VBQzlEO0lBQWdDLGlDQUFpQyxFQUFBO0VBQ2pFO0lBQWdDLHNDQUFzQyxFQUFBO0VBQ3RFO0lBQWdDLHlDQUF5QyxFQUFBO0VBRXpFO0lBQThCLDBCQUEwQixFQUFBO0VBQ3hEO0lBQThCLDRCQUE0QixFQUFBO0VBQzFEO0lBQThCLGtDQUFrQyxFQUFBO0VBRWhFO0lBQW9DLHNDQUFzQyxFQUFBO0VBQzFFO0lBQW9DLG9DQUFvQyxFQUFBO0VBQ3hFO0lBQW9DLGtDQUFrQyxFQUFBO0VBQ3RFO0lBQW9DLHlDQUF5QyxFQUFBO0VBQzdFO0lBQW9DLHdDQUF3QyxFQUFBO0VBRTVFO0lBQWlDLGtDQUFrQyxFQUFBO0VBQ25FO0lBQWlDLGdDQUFnQyxFQUFBO0VBQ2pFO0lBQWlDLDhCQUE4QixFQUFBO0VBQy9EO0lBQWlDLGdDQUFnQyxFQUFBO0VBQ2pFO0lBQWlDLCtCQUErQixFQUFBO0VBRWhFO0lBQWtDLG9DQUFvQyxFQUFBO0VBQ3RFO0lBQWtDLGtDQUFrQyxFQUFBO0VBQ3BFO0lBQWtDLGdDQUFnQyxFQUFBO0VBQ2xFO0lBQWtDLHVDQUF1QyxFQUFBO0VBQ3pFO0lBQWtDLHNDQUFzQyxFQUFBO0VBQ3hFO0lBQWtDLGlDQUFpQyxFQUFBO0VBRW5FO0lBQWdDLDJCQUEyQixFQUFBO0VBQzNEO0lBQWdDLGlDQUFpQyxFQUFBO0VBQ2pFO0lBQWdDLCtCQUErQixFQUFBO0VBQy9EO0lBQWdDLDZCQUE2QixFQUFBO0VBQzdEO0lBQWdDLCtCQUErQixFQUFBO0VBQy9EO0lBQWdDLDhCQUE4QixFQUFBLEVBQUk7O0FBMUhsRTtFQXlGQTtJQUFnQyw4QkFBOEIsRUFBQTtFQUM5RDtJQUFnQyxpQ0FBaUMsRUFBQTtFQUNqRTtJQUFnQyxzQ0FBc0MsRUFBQTtFQUN0RTtJQUFnQyx5Q0FBeUMsRUFBQTtFQUV6RTtJQUE4QiwwQkFBMEIsRUFBQTtFQUN4RDtJQUE4Qiw0QkFBNEIsRUFBQTtFQUMxRDtJQUE4QixrQ0FBa0MsRUFBQTtFQUVoRTtJQUFvQyxzQ0FBc0MsRUFBQTtFQUMxRTtJQUFvQyxvQ0FBb0MsRUFBQTtFQUN4RTtJQUFvQyxrQ0FBa0MsRUFBQTtFQUN0RTtJQUFvQyx5Q0FBeUMsRUFBQTtFQUM3RTtJQUFvQyx3Q0FBd0MsRUFBQTtFQUU1RTtJQUFpQyxrQ0FBa0MsRUFBQTtFQUNuRTtJQUFpQyxnQ0FBZ0MsRUFBQTtFQUNqRTtJQUFpQyw4QkFBOEIsRUFBQTtFQUMvRDtJQUFpQyxnQ0FBZ0MsRUFBQTtFQUNqRTtJQUFpQywrQkFBK0IsRUFBQTtFQUVoRTtJQUFrQyxvQ0FBb0MsRUFBQTtFQUN0RTtJQUFrQyxrQ0FBa0MsRUFBQTtFQUNwRTtJQUFrQyxnQ0FBZ0MsRUFBQTtFQUNsRTtJQUFrQyx1Q0FBdUMsRUFBQTtFQUN6RTtJQUFrQyxzQ0FBc0MsRUFBQTtFQUN4RTtJQUFrQyxpQ0FBaUMsRUFBQTtFQUVuRTtJQUFnQywyQkFBMkIsRUFBQTtFQUMzRDtJQUFnQyxpQ0FBaUMsRUFBQTtFQUNqRTtJQUFnQywrQkFBK0IsRUFBQTtFQUMvRDtJQUFnQyw2QkFBNkIsRUFBQTtFQUM3RDtJQUFnQywrQkFBK0IsRUFBQTtFQUMvRDtJQUFnQyw4QkFBOEIsRUFBQSxFQUFJOztBQTFIbEU7RUF5RkE7SUFBZ0MsOEJBQThCLEVBQUE7RUFDOUQ7SUFBZ0MsaUNBQWlDLEVBQUE7RUFDakU7SUFBZ0Msc0NBQXNDLEVBQUE7RUFDdEU7SUFBZ0MseUNBQXlDLEVBQUE7RUFFekU7SUFBOEIsMEJBQTBCLEVBQUE7RUFDeEQ7SUFBOEIsNEJBQTRCLEVBQUE7RUFDMUQ7SUFBOEIsa0NBQWtDLEVBQUE7RUFFaEU7SUFBb0Msc0NBQXNDLEVBQUE7RUFDMUU7SUFBb0Msb0NBQW9DLEVBQUE7RUFDeEU7SUFBb0Msa0NBQWtDLEVBQUE7RUFDdEU7SUFBb0MseUNBQXlDLEVBQUE7RUFDN0U7SUFBb0Msd0NBQXdDLEVBQUE7RUFFNUU7SUFBaUMsa0NBQWtDLEVBQUE7RUFDbkU7SUFBaUMsZ0NBQWdDLEVBQUE7RUFDakU7SUFBaUMsOEJBQThCLEVBQUE7RUFDL0Q7SUFBaUMsZ0NBQWdDLEVBQUE7RUFDakU7SUFBaUMsK0JBQStCLEVBQUE7RUFFaEU7SUFBa0Msb0NBQW9DLEVBQUE7RUFDdEU7SUFBa0Msa0NBQWtDLEVBQUE7RUFDcEU7SUFBa0MsZ0NBQWdDLEVBQUE7RUFDbEU7SUFBa0MsdUNBQXVDLEVBQUE7RUFDekU7SUFBa0Msc0NBQXNDLEVBQUE7RUFDeEU7SUFBa0MsaUNBQWlDLEVBQUE7RUFFbkU7SUFBZ0MsMkJBQTJCLEVBQUE7RUFDM0Q7SUFBZ0MsaUNBQWlDLEVBQUE7RUFDakU7SUFBZ0MsK0JBQStCLEVBQUE7RUFDL0Q7SUFBZ0MsNkJBQTZCLEVBQUE7RUFDN0Q7SUFBZ0MsK0JBQStCLEVBQUE7RUFDL0Q7SUFBZ0MsOEJBQThCLEVBQUEsRUFBSTs7QUExSGxFO0VBeUZBO0lBQWdDLDhCQUE4QixFQUFBO0VBQzlEO0lBQWdDLGlDQUFpQyxFQUFBO0VBQ2pFO0lBQWdDLHNDQUFzQyxFQUFBO0VBQ3RFO0lBQWdDLHlDQUF5QyxFQUFBO0VBRXpFO0lBQThCLDBCQUEwQixFQUFBO0VBQ3hEO0lBQThCLDRCQUE0QixFQUFBO0VBQzFEO0lBQThCLGtDQUFrQyxFQUFBO0VBRWhFO0lBQW9DLHNDQUFzQyxFQUFBO0VBQzFFO0lBQW9DLG9DQUFvQyxFQUFBO0VBQ3hFO0lBQW9DLGtDQUFrQyxFQUFBO0VBQ3RFO0lBQW9DLHlDQUF5QyxFQUFBO0VBQzdFO0lBQW9DLHdDQUF3QyxFQUFBO0VBRTVFO0lBQWlDLGtDQUFrQyxFQUFBO0VBQ25FO0lBQWlDLGdDQUFnQyxFQUFBO0VBQ2pFO0lBQWlDLDhCQUE4QixFQUFBO0VBQy9EO0lBQWlDLGdDQUFnQyxFQUFBO0VBQ2pFO0lBQWlDLCtCQUErQixFQUFBO0VBRWhFO0lBQWtDLG9DQUFvQyxFQUFBO0VBQ3RFO0lBQWtDLGtDQUFrQyxFQUFBO0VBQ3BFO0lBQWtDLGdDQUFnQyxFQUFBO0VBQ2xFO0lBQWtDLHVDQUF1QyxFQUFBO0VBQ3pFO0lBQWtDLHNDQUFzQyxFQUFBO0VBQ3hFO0lBQWtDLGlDQUFpQyxFQUFBO0VBRW5FO0lBQWdDLDJCQUEyQixFQUFBO0VBQzNEO0lBQWdDLGlDQUFpQyxFQUFBO0VBQ2pFO0lBQWdDLCtCQUErQixFQUFBO0VBQy9EO0lBQWdDLDZCQUE2QixFQUFBO0VBQzdEO0lBQWdDLCtCQUErQixFQUFBO0VBQy9EO0lBQWdDLDhCQUE4QixFQUFBLEVBQUk7O0FBR3RFOztDQzBPQzs7QURoT087RUFBZ0Msb0JBQTRCLEVBQUE7O0FBQzVEOztFQUVFLHdCQUFvQyxFQUFBOztBQUV0Qzs7RUFFRSwwQkFBd0MsRUFBQTs7QUFFMUM7O0VBRUUsMkJBQTBDLEVBQUE7O0FBRTVDOztFQUVFLHlCQUFzQyxFQUFBOztBQWZ4QztFQUFnQywwQkFBNEIsRUFBQTs7QUFDNUQ7O0VBRUUsOEJBQW9DLEVBQUE7O0FBRXRDOztFQUVFLGdDQUF3QyxFQUFBOztBQUUxQzs7RUFFRSxpQ0FBMEMsRUFBQTs7QUFFNUM7O0VBRUUsK0JBQXNDLEVBQUE7O0FBZnhDO0VBQWdDLHlCQUE0QixFQUFBOztBQUM1RDs7RUFFRSw2QkFBb0MsRUFBQTs7QUFFdEM7O0VBRUUsK0JBQXdDLEVBQUE7O0FBRTFDOztFQUVFLGdDQUEwQyxFQUFBOztBQUU1Qzs7RUFFRSw4QkFBc0MsRUFBQTs7QUFmeEM7RUFBZ0MsdUJBQTRCLEVBQUE7O0FBQzVEOztFQUVFLDJCQUFvQyxFQUFBOztBQUV0Qzs7RUFFRSw2QkFBd0MsRUFBQTs7QUFFMUM7O0VBRUUsOEJBQTBDLEVBQUE7O0FBRTVDOztFQUVFLDRCQUFzQyxFQUFBOztBQWZ4QztFQUFnQyx5QkFBNEIsRUFBQTs7QUFDNUQ7O0VBRUUsNkJBQW9DLEVBQUE7O0FBRXRDOztFQUVFLCtCQUF3QyxFQUFBOztBQUUxQzs7RUFFRSxnQ0FBMEMsRUFBQTs7QUFFNUM7O0VBRUUsOEJBQXNDLEVBQUE7O0FBZnhDO0VBQWdDLHVCQUE0QixFQUFBOztBQUM1RDs7RUFFRSwyQkFBb0MsRUFBQTs7QUFFdEM7O0VBRUUsNkJBQXdDLEVBQUE7O0FBRTFDOztFQUVFLDhCQUEwQyxFQUFBOztBQUU1Qzs7RUFFRSw0QkFBc0MsRUFBQTs7QUFmeEM7RUFBZ0MscUJBQTRCLEVBQUE7O0FBQzVEOztFQUVFLHlCQUFvQyxFQUFBOztBQUV0Qzs7RUFFRSwyQkFBd0MsRUFBQTs7QUFFMUM7O0VBRUUsNEJBQTBDLEVBQUE7O0FBRTVDOztFQUVFLDBCQUFzQyxFQUFBOztBQWZ4QztFQUFnQywyQkFBNEIsRUFBQTs7QUFDNUQ7O0VBRUUsK0JBQW9DLEVBQUE7O0FBRXRDOztFQUVFLGlDQUF3QyxFQUFBOztBQUUxQzs7RUFFRSxrQ0FBMEMsRUFBQTs7QUFFNUM7O0VBRUUsZ0NBQXNDLEVBQUE7O0FBZnhDO0VBQWdDLDBCQUE0QixFQUFBOztBQUM1RDs7RUFFRSw4QkFBb0MsRUFBQTs7QUFFdEM7O0VBRUUsZ0NBQXdDLEVBQUE7O0FBRTFDOztFQUVFLGlDQUEwQyxFQUFBOztBQUU1Qzs7RUFFRSwrQkFBc0MsRUFBQTs7QUFmeEM7RUFBZ0Msd0JBQTRCLEVBQUE7O0FBQzVEOztFQUVFLDRCQUFvQyxFQUFBOztBQUV0Qzs7RUFFRSw4QkFBd0MsRUFBQTs7QUFFMUM7O0VBRUUsK0JBQTBDLEVBQUE7O0FBRTVDOztFQUVFLDZCQUFzQyxFQUFBOztBQWZ4QztFQUFnQywwQkFBNEIsRUFBQTs7QUFDNUQ7O0VBRUUsOEJBQW9DLEVBQUE7O0FBRXRDOztFQUVFLGdDQUF3QyxFQUFBOztBQUUxQzs7RUFFRSxpQ0FBMEMsRUFBQTs7QUFFNUM7O0VBRUUsK0JBQXNDLEVBQUE7O0FBZnhDO0VBQWdDLHdCQUE0QixFQUFBOztBQUM1RDs7RUFFRSw0QkFBb0MsRUFBQTs7QUFFdEM7O0VBRUUsOEJBQXdDLEVBQUE7O0FBRTFDOztFQUVFLCtCQUEwQyxFQUFBOztBQUU1Qzs7RUFFRSw2QkFBc0MsRUFBQTs7QUFNNUM7RUFBbUIsdUJBQXVCLEVBQUE7O0FBQzFDOztFQUVFLDJCQUEyQixFQUFBOztBQUU3Qjs7RUFFRSw2QkFBNkIsRUFBQTs7QUFFL0I7O0VBRUUsOEJBQThCLEVBQUE7O0FBRWhDOztFQUVFLDRCQUE0QixFQUFBOztBQTNLOUI7RUF1SUk7SUFBZ0Msb0JBQTRCLEVBQUE7RUFDNUQ7O0lBRUUsd0JBQW9DLEVBQUE7RUFFdEM7O0lBRUUsMEJBQXdDLEVBQUE7RUFFMUM7O0lBRUUsMkJBQTBDLEVBQUE7RUFFNUM7O0lBRUUseUJBQXNDLEVBQUE7RUFmeEM7SUFBZ0MsMEJBQTRCLEVBQUE7RUFDNUQ7O0lBRUUsOEJBQW9DLEVBQUE7RUFFdEM7O0lBRUUsZ0NBQXdDLEVBQUE7RUFFMUM7O0lBRUUsaUNBQTBDLEVBQUE7RUFFNUM7O0lBRUUsK0JBQXNDLEVBQUE7RUFmeEM7SUFBZ0MseUJBQTRCLEVBQUE7RUFDNUQ7O0lBRUUsNkJBQW9DLEVBQUE7RUFFdEM7O0lBRUUsK0JBQXdDLEVBQUE7RUFFMUM7O0lBRUUsZ0NBQTBDLEVBQUE7RUFFNUM7O0lBRUUsOEJBQXNDLEVBQUE7RUFmeEM7SUFBZ0MsdUJBQTRCLEVBQUE7RUFDNUQ7O0lBRUUsMkJBQW9DLEVBQUE7RUFFdEM7O0lBRUUsNkJBQXdDLEVBQUE7RUFFMUM7O0lBRUUsOEJBQTBDLEVBQUE7RUFFNUM7O0lBRUUsNEJBQXNDLEVBQUE7RUFmeEM7SUFBZ0MseUJBQTRCLEVBQUE7RUFDNUQ7O0lBRUUsNkJBQW9DLEVBQUE7RUFFdEM7O0lBRUUsK0JBQXdDLEVBQUE7RUFFMUM7O0lBRUUsZ0NBQTBDLEVBQUE7RUFFNUM7O0lBRUUsOEJBQXNDLEVBQUE7RUFmeEM7SUFBZ0MsdUJBQTRCLEVBQUE7RUFDNUQ7O0lBRUUsMkJBQW9DLEVBQUE7RUFFdEM7O0lBRUUsNkJBQXdDLEVBQUE7RUFFMUM7O0lBRUUsOEJBQTBDLEVBQUE7RUFFNUM7O0lBRUUsNEJBQXNDLEVBQUE7RUFmeEM7SUFBZ0MscUJBQTRCLEVBQUE7RUFDNUQ7O0lBRUUseUJBQW9DLEVBQUE7RUFFdEM7O0lBRUUsMkJBQXdDLEVBQUE7RUFFMUM7O0lBRUUsNEJBQTBDLEVBQUE7RUFFNUM7O0lBRUUsMEJBQXNDLEVBQUE7RUFmeEM7SUFBZ0MsMkJBQTRCLEVBQUE7RUFDNUQ7O0lBRUUsK0JBQW9DLEVBQUE7RUFFdEM7O0lBRUUsaUNBQXdDLEVBQUE7RUFFMUM7O0lBRUUsa0NBQTBDLEVBQUE7RUFFNUM7O0lBRUUsZ0NBQXNDLEVBQUE7RUFmeEM7SUFBZ0MsMEJBQTRCLEVBQUE7RUFDNUQ7O0lBRUUsOEJBQW9DLEVBQUE7RUFFdEM7O0lBRUUsZ0NBQXdDLEVBQUE7RUFFMUM7O0lBRUUsaUNBQTBDLEVBQUE7RUFFNUM7O0lBRUUsK0JBQXNDLEVBQUE7RUFmeEM7SUFBZ0Msd0JBQTRCLEVBQUE7RUFDNUQ7O0lBRUUsNEJBQW9DLEVBQUE7RUFFdEM7O0lBRUUsOEJBQXdDLEVBQUE7RUFFMUM7O0lBRUUsK0JBQTBDLEVBQUE7RUFFNUM7O0lBRUUsNkJBQXNDLEVBQUE7RUFmeEM7SUFBZ0MsMEJBQTRCLEVBQUE7RUFDNUQ7O0lBRUUsOEJBQW9DLEVBQUE7RUFFdEM7O0lBRUUsZ0NBQXdDLEVBQUE7RUFFMUM7O0lBRUUsaUNBQTBDLEVBQUE7RUFFNUM7O0lBRUUsK0JBQXNDLEVBQUE7RUFmeEM7SUFBZ0Msd0JBQTRCLEVBQUE7RUFDNUQ7O0lBRUUsNEJBQW9DLEVBQUE7RUFFdEM7O0lBRUUsOEJBQXdDLEVBQUE7RUFFMUM7O0lBRUUsK0JBQTBDLEVBQUE7RUFFNUM7O0lBRUUsNkJBQXNDLEVBQUE7RUFNNUM7SUFBbUIsdUJBQXVCLEVBQUE7RUFDMUM7O0lBRUUsMkJBQTJCLEVBQUE7RUFFN0I7O0lBRUUsNkJBQTZCLEVBQUE7RUFFL0I7O0lBRUUsOEJBQThCLEVBQUE7RUFFaEM7O0lBRUUsNEJBQTRCLEVBQUEsRUFDN0I7O0FBNUtEO0VBdUlJO0lBQWdDLG9CQUE0QixFQUFBO0VBQzVEOztJQUVFLHdCQUFvQyxFQUFBO0VBRXRDOztJQUVFLDBCQUF3QyxFQUFBO0VBRTFDOztJQUVFLDJCQUEwQyxFQUFBO0VBRTVDOztJQUVFLHlCQUFzQyxFQUFBO0VBZnhDO0lBQWdDLDBCQUE0QixFQUFBO0VBQzVEOztJQUVFLDhCQUFvQyxFQUFBO0VBRXRDOztJQUVFLGdDQUF3QyxFQUFBO0VBRTFDOztJQUVFLGlDQUEwQyxFQUFBO0VBRTVDOztJQUVFLCtCQUFzQyxFQUFBO0VBZnhDO0lBQWdDLHlCQUE0QixFQUFBO0VBQzVEOztJQUVFLDZCQUFvQyxFQUFBO0VBRXRDOztJQUVFLCtCQUF3QyxFQUFBO0VBRTFDOztJQUVFLGdDQUEwQyxFQUFBO0VBRTVDOztJQUVFLDhCQUFzQyxFQUFBO0VBZnhDO0lBQWdDLHVCQUE0QixFQUFBO0VBQzVEOztJQUVFLDJCQUFvQyxFQUFBO0VBRXRDOztJQUVFLDZCQUF3QyxFQUFBO0VBRTFDOztJQUVFLDhCQUEwQyxFQUFBO0VBRTVDOztJQUVFLDRCQUFzQyxFQUFBO0VBZnhDO0lBQWdDLHlCQUE0QixFQUFBO0VBQzVEOztJQUVFLDZCQUFvQyxFQUFBO0VBRXRDOztJQUVFLCtCQUF3QyxFQUFBO0VBRTFDOztJQUVFLGdDQUEwQyxFQUFBO0VBRTVDOztJQUVFLDhCQUFzQyxFQUFBO0VBZnhDO0lBQWdDLHVCQUE0QixFQUFBO0VBQzVEOztJQUVFLDJCQUFvQyxFQUFBO0VBRXRDOztJQUVFLDZCQUF3QyxFQUFBO0VBRTFDOztJQUVFLDhCQUEwQyxFQUFBO0VBRTVDOztJQUVFLDRCQUFzQyxFQUFBO0VBZnhDO0lBQWdDLHFCQUE0QixFQUFBO0VBQzVEOztJQUVFLHlCQUFvQyxFQUFBO0VBRXRDOztJQUVFLDJCQUF3QyxFQUFBO0VBRTFDOztJQUVFLDRCQUEwQyxFQUFBO0VBRTVDOztJQUVFLDBCQUFzQyxFQUFBO0VBZnhDO0lBQWdDLDJCQUE0QixFQUFBO0VBQzVEOztJQUVFLCtCQUFvQyxFQUFBO0VBRXRDOztJQUVFLGlDQUF3QyxFQUFBO0VBRTFDOztJQUVFLGtDQUEwQyxFQUFBO0VBRTVDOztJQUVFLGdDQUFzQyxFQUFBO0VBZnhDO0lBQWdDLDBCQUE0QixFQUFBO0VBQzVEOztJQUVFLDhCQUFvQyxFQUFBO0VBRXRDOztJQUVFLGdDQUF3QyxFQUFBO0VBRTFDOztJQUVFLGlDQUEwQyxFQUFBO0VBRTVDOztJQUVFLCtCQUFzQyxFQUFBO0VBZnhDO0lBQWdDLHdCQUE0QixFQUFBO0VBQzVEOztJQUVFLDRCQUFvQyxFQUFBO0VBRXRDOztJQUVFLDhCQUF3QyxFQUFBO0VBRTFDOztJQUVFLCtCQUEwQyxFQUFBO0VBRTVDOztJQUVFLDZCQUFzQyxFQUFBO0VBZnhDO0lBQWdDLDBCQUE0QixFQUFBO0VBQzVEOztJQUVFLDhCQUFvQyxFQUFBO0VBRXRDOztJQUVFLGdDQUF3QyxFQUFBO0VBRTFDOztJQUVFLGlDQUEwQyxFQUFBO0VBRTVDOztJQUVFLCtCQUFzQyxFQUFBO0VBZnhDO0lBQWdDLHdCQUE0QixFQUFBO0VBQzVEOztJQUVFLDRCQUFvQyxFQUFBO0VBRXRDOztJQUVFLDhCQUF3QyxFQUFBO0VBRTFDOztJQUVFLCtCQUEwQyxFQUFBO0VBRTVDOztJQUVFLDZCQUFzQyxFQUFBO0VBTTVDO0lBQW1CLHVCQUF1QixFQUFBO0VBQzFDOztJQUVFLDJCQUEyQixFQUFBO0VBRTdCOztJQUVFLDZCQUE2QixFQUFBO0VBRS9COztJQUVFLDhCQUE4QixFQUFBO0VBRWhDOztJQUVFLDRCQUE0QixFQUFBLEVBQzdCOztBQTVLRDtFQXVJSTtJQUFnQyxvQkFBNEIsRUFBQTtFQUM1RDs7SUFFRSx3QkFBb0MsRUFBQTtFQUV0Qzs7SUFFRSwwQkFBd0MsRUFBQTtFQUUxQzs7SUFFRSwyQkFBMEMsRUFBQTtFQUU1Qzs7SUFFRSx5QkFBc0MsRUFBQTtFQWZ4QztJQUFnQywwQkFBNEIsRUFBQTtFQUM1RDs7SUFFRSw4QkFBb0MsRUFBQTtFQUV0Qzs7SUFFRSxnQ0FBd0MsRUFBQTtFQUUxQzs7SUFFRSxpQ0FBMEMsRUFBQTtFQUU1Qzs7SUFFRSwrQkFBc0MsRUFBQTtFQWZ4QztJQUFnQyx5QkFBNEIsRUFBQTtFQUM1RDs7SUFFRSw2QkFBb0MsRUFBQTtFQUV0Qzs7SUFFRSwrQkFBd0MsRUFBQTtFQUUxQzs7SUFFRSxnQ0FBMEMsRUFBQTtFQUU1Qzs7SUFFRSw4QkFBc0MsRUFBQTtFQWZ4QztJQUFnQyx1QkFBNEIsRUFBQTtFQUM1RDs7SUFFRSwyQkFBb0MsRUFBQTtFQUV0Qzs7SUFFRSw2QkFBd0MsRUFBQTtFQUUxQzs7SUFFRSw4QkFBMEMsRUFBQTtFQUU1Qzs7SUFFRSw0QkFBc0MsRUFBQTtFQWZ4QztJQUFnQyx5QkFBNEIsRUFBQTtFQUM1RDs7SUFFRSw2QkFBb0MsRUFBQTtFQUV0Qzs7SUFFRSwrQkFBd0MsRUFBQTtFQUUxQzs7SUFFRSxnQ0FBMEMsRUFBQTtFQUU1Qzs7SUFFRSw4QkFBc0MsRUFBQTtFQWZ4QztJQUFnQyx1QkFBNEIsRUFBQTtFQUM1RDs7SUFFRSwyQkFBb0MsRUFBQTtFQUV0Qzs7SUFFRSw2QkFBd0MsRUFBQTtFQUUxQzs7SUFFRSw4QkFBMEMsRUFBQTtFQUU1Qzs7SUFFRSw0QkFBc0MsRUFBQTtFQWZ4QztJQUFnQyxxQkFBNEIsRUFBQTtFQUM1RDs7SUFFRSx5QkFBb0MsRUFBQTtFQUV0Qzs7SUFFRSwyQkFBd0MsRUFBQTtFQUUxQzs7SUFFRSw0QkFBMEMsRUFBQTtFQUU1Qzs7SUFFRSwwQkFBc0MsRUFBQTtFQWZ4QztJQUFnQywyQkFBNEIsRUFBQTtFQUM1RDs7SUFFRSwrQkFBb0MsRUFBQTtFQUV0Qzs7SUFFRSxpQ0FBd0MsRUFBQTtFQUUxQzs7SUFFRSxrQ0FBMEMsRUFBQTtFQUU1Qzs7SUFFRSxnQ0FBc0MsRUFBQTtFQWZ4QztJQUFnQywwQkFBNEIsRUFBQTtFQUM1RDs7SUFFRSw4QkFBb0MsRUFBQTtFQUV0Qzs7SUFFRSxnQ0FBd0MsRUFBQTtFQUUxQzs7SUFFRSxpQ0FBMEMsRUFBQTtFQUU1Qzs7SUFFRSwrQkFBc0MsRUFBQTtFQWZ4QztJQUFnQyx3QkFBNEIsRUFBQTtFQUM1RDs7SUFFRSw0QkFBb0MsRUFBQTtFQUV0Qzs7SUFFRSw4QkFBd0MsRUFBQTtFQUUxQzs7SUFFRSwrQkFBMEMsRUFBQTtFQUU1Qzs7SUFFRSw2QkFBc0MsRUFBQTtFQWZ4QztJQUFnQywwQkFBNEIsRUFBQTtFQUM1RDs7SUFFRSw4QkFBb0MsRUFBQTtFQUV0Qzs7SUFFRSxnQ0FBd0MsRUFBQTtFQUUxQzs7SUFFRSxpQ0FBMEMsRUFBQTtFQUU1Qzs7SUFFRSwrQkFBc0MsRUFBQTtFQWZ4QztJQUFnQyx3QkFBNEIsRUFBQTtFQUM1RDs7SUFFRSw0QkFBb0MsRUFBQTtFQUV0Qzs7SUFFRSw4QkFBd0MsRUFBQTtFQUUxQzs7SUFFRSwrQkFBMEMsRUFBQTtFQUU1Qzs7SUFFRSw2QkFBc0MsRUFBQTtFQU01QztJQUFtQix1QkFBdUIsRUFBQTtFQUMxQzs7SUFFRSwyQkFBMkIsRUFBQTtFQUU3Qjs7SUFFRSw2QkFBNkIsRUFBQTtFQUUvQjs7SUFFRSw4QkFBOEIsRUFBQTtFQUVoQzs7SUFFRSw0QkFBNEIsRUFBQSxFQUM3Qjs7QUE1S0Q7RUF1SUk7SUFBZ0Msb0JBQTRCLEVBQUE7RUFDNUQ7O0lBRUUsd0JBQW9DLEVBQUE7RUFFdEM7O0lBRUUsMEJBQXdDLEVBQUE7RUFFMUM7O0lBRUUsMkJBQTBDLEVBQUE7RUFFNUM7O0lBRUUseUJBQXNDLEVBQUE7RUFmeEM7SUFBZ0MsMEJBQTRCLEVBQUE7RUFDNUQ7O0lBRUUsOEJBQW9DLEVBQUE7RUFFdEM7O0lBRUUsZ0NBQXdDLEVBQUE7RUFFMUM7O0lBRUUsaUNBQTBDLEVBQUE7RUFFNUM7O0lBRUUsK0JBQXNDLEVBQUE7RUFmeEM7SUFBZ0MseUJBQTRCLEVBQUE7RUFDNUQ7O0lBRUUsNkJBQW9DLEVBQUE7RUFFdEM7O0lBRUUsK0JBQXdDLEVBQUE7RUFFMUM7O0lBRUUsZ0NBQTBDLEVBQUE7RUFFNUM7O0lBRUUsOEJBQXNDLEVBQUE7RUFmeEM7SUFBZ0MsdUJBQTRCLEVBQUE7RUFDNUQ7O0lBRUUsMkJBQW9DLEVBQUE7RUFFdEM7O0lBRUUsNkJBQXdDLEVBQUE7RUFFMUM7O0lBRUUsOEJBQTBDLEVBQUE7RUFFNUM7O0lBRUUsNEJBQXNDLEVBQUE7RUFmeEM7SUFBZ0MseUJBQTRCLEVBQUE7RUFDNUQ7O0lBRUUsNkJBQW9DLEVBQUE7RUFFdEM7O0lBRUUsK0JBQXdDLEVBQUE7RUFFMUM7O0lBRUUsZ0NBQTBDLEVBQUE7RUFFNUM7O0lBRUUsOEJBQXNDLEVBQUE7RUFmeEM7SUFBZ0MsdUJBQTRCLEVBQUE7RUFDNUQ7O0lBRUUsMkJBQW9DLEVBQUE7RUFFdEM7O0lBRUUsNkJBQXdDLEVBQUE7RUFFMUM7O0lBRUUsOEJBQTBDLEVBQUE7RUFFNUM7O0lBRUUsNEJBQXNDLEVBQUE7RUFmeEM7SUFBZ0MscUJBQTRCLEVBQUE7RUFDNUQ7O0lBRUUseUJBQW9DLEVBQUE7RUFFdEM7O0lBRUUsMkJBQXdDLEVBQUE7RUFFMUM7O0lBRUUsNEJBQTBDLEVBQUE7RUFFNUM7O0lBRUUsMEJBQXNDLEVBQUE7RUFmeEM7SUFBZ0MsMkJBQTRCLEVBQUE7RUFDNUQ7O0lBRUUsK0JBQW9DLEVBQUE7RUFFdEM7O0lBRUUsaUNBQXdDLEVBQUE7RUFFMUM7O0lBRUUsa0NBQTBDLEVBQUE7RUFFNUM7O0lBRUUsZ0NBQXNDLEVBQUE7RUFmeEM7SUFBZ0MsMEJBQTRCLEVBQUE7RUFDNUQ7O0lBRUUsOEJBQW9DLEVBQUE7RUFFdEM7O0lBRUUsZ0NBQXdDLEVBQUE7RUFFMUM7O0lBRUUsaUNBQTBDLEVBQUE7RUFFNUM7O0lBRUUsK0JBQXNDLEVBQUE7RUFmeEM7SUFBZ0Msd0JBQTRCLEVBQUE7RUFDNUQ7O0lBRUUsNEJBQW9DLEVBQUE7RUFFdEM7O0lBRUUsOEJBQXdDLEVBQUE7RUFFMUM7O0lBRUUsK0JBQTBDLEVBQUE7RUFFNUM7O0lBRUUsNkJBQXNDLEVBQUE7RUFmeEM7SUFBZ0MsMEJBQTRCLEVBQUE7RUFDNUQ7O0lBRUUsOEJBQW9DLEVBQUE7RUFFdEM7O0lBRUUsZ0NBQXdDLEVBQUE7RUFFMUM7O0lBRUUsaUNBQTBDLEVBQUE7RUFFNUM7O0lBRUUsK0JBQXNDLEVBQUE7RUFmeEM7SUFBZ0Msd0JBQTRCLEVBQUE7RUFDNUQ7O0lBRUUsNEJBQW9DLEVBQUE7RUFFdEM7O0lBRUUsOEJBQXdDLEVBQUE7RUFFMUM7O0lBRUUsK0JBQTBDLEVBQUE7RUFFNUM7O0lBRUUsNkJBQXNDLEVBQUE7RUFNNUM7SUFBbUIsdUJBQXVCLEVBQUE7RUFDMUM7O0lBRUUsMkJBQTJCLEVBQUE7RUFFN0I7O0lBRUUsNkJBQTZCLEVBQUE7RUFFL0I7O0lBRUUsOEJBQThCLEVBQUE7RUFFaEM7O0lBRUUsNEJBQTRCLEVBQUEsRUFDN0I7O0FBR0w7O0NDa3BDQzs7QUQzb0NHO0VBQXdCLFdBQVcsRUFBQTs7QUFDbkM7RUFBd0IsWUFBWSxFQUFBOztBQUNwQztFQUF3QixXQUFXLEVBQUE7O0FBeExuQztFQXNMQTtJQUF3QixXQUFXLEVBQUE7RUFDbkM7SUFBd0IsWUFBWSxFQUFBO0VBQ3BDO0lBQXdCLFdBQVcsRUFBQSxFQUFJOztBQXhMdkM7RUFzTEE7SUFBd0IsV0FBVyxFQUFBO0VBQ25DO0lBQXdCLFlBQVksRUFBQTtFQUNwQztJQUF3QixXQUFXLEVBQUEsRUFBSTs7QUF4THZDO0VBc0xBO0lBQXdCLFdBQVcsRUFBQTtFQUNuQztJQUF3QixZQUFZLEVBQUE7RUFDcEM7SUFBd0IsV0FBVyxFQUFBLEVBQUk7O0FBeEx2QztFQXNMQTtJQUF3QixXQUFXLEVBQUE7RUFDbkM7SUFBd0IsWUFBWSxFQUFBO0VBQ3BDO0lBQXdCLFdBQVcsRUFBQSxFQUFJOztBQUczQztFQUdJLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXLEVBQUE7O0FFMVNmO0VBQ0UsaUJBQWlCLEVBQUE7O0FBRG5CO0lBSUksZ0JBQWdCO0lBQ2hCLFVBQVUsRUFBQTs7QUFMZDtNQVFNLFlBQVksRUFBQTs7QUFSbEI7UUFZUSxnQkFBZ0IsRUFBQTs7QUFaeEI7SUFvQk0sY0FBYyxFQUFBOztBQUtwQjtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uY3Vyc29yIHtcbiAgY3Vyc29yOiBwb2ludGVyXG59XG5cbi50b2Uge1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4udG9lMiB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsXG59XG4ud2hpdGUtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzAwMDtcbn1cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiRzcGFjZXI6IDFyZW0gIWRlZmF1bHQ7XG4kc3BhY2VyczogKCkgIWRlZmF1bHQ7XG4kc3BhY2VyczogbWFwLW1lcmdlKChcbiAgMDogMCxcbiAgMTogKCRzcGFjZXIgKiAuMjUpLFxuICAyOiAoJHNwYWNlciAqIC41KSxcbiAgMzogJHNwYWNlcixcbiAgNDogKCRzcGFjZXIgKiAxLjUpLFxuICA1OiAoJHNwYWNlciAqIDMpXG4pLCAkc3BhY2Vycyk7XG5cbiRncmlkLWJyZWFrcG9pbnRzOiAoXG4gIHhzOiAwLFxuICBzbTogNTc2cHgsXG4gIG1kOiA3NjhweCxcbiAgbGc6IDk5MnB4LFxuICB4bDogMTIwMHB4XG4pICFkZWZhdWx0O1xuXG4vLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIGxhcmdlc3QgKGxhc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGFzIHRoZSBtaW5pbXVtIG9mIHRoZSBuZXh0IG9uZSBsZXNzIDAuMDJweFxuLy8gdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gLjAycHgsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8qIFxuICBkaXNwbGF5IFxuKi9cbkBlYWNoICRicmVha3BvaW50IGluIG1hcC1rZXlzKCRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQpIHtcbiAgICAkaW5maXg6IGJyZWFrcG9pbnQtaW5maXgoJGJyZWFrcG9pbnQsICRncmlkLWJyZWFrcG9pbnRzKTtcblxuICAgIC5kI3skaW5maXh9LW5vbmUgICAgICAgICB7IGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuICAgIC5kI3skaW5maXh9LWlubGluZSAgICAgICB7IGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50OyB9XG4gICAgLmQjeyRpbmZpeH0taW5saW5lLWJsb2NrIHsgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7IH1cbiAgICAuZCN7JGluZml4fS1ibG9jayAgICAgICAgeyBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyB9XG4gICAgLmQjeyRpbmZpeH0tdGFibGUgICAgICAgIHsgZGlzcGxheTogdGFibGUgIWltcG9ydGFudDsgfVxuICAgIC5kI3skaW5maXh9LXRhYmxlLXJvdyAgICB7IGRpc3BsYXk6IHRhYmxlLXJvdyAhaW1wb3J0YW50OyB9XG4gICAgLmQjeyRpbmZpeH0tdGFibGUtY2VsbCAgIHsgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50OyB9XG4gICAgLmQjeyRpbmZpeH0tZmxleCAgICAgICAgIHsgZGlzcGxheTogZmxleCAhaW1wb3J0YW50OyB9XG4gICAgLmQjeyRpbmZpeH0taW5saW5lLWZsZXggIHsgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDsgfVxuICB9XG59XG4vKiBcbiAgZmxleCBcbiovXG5AZWFjaCAkYnJlYWtwb2ludCBpbiBtYXAta2V5cygkZ3JpZC1icmVha3BvaW50cykge1xuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50KSB7XG4gICAgJGluZml4OiBicmVha3BvaW50LWluZml4KCRicmVha3BvaW50LCAkZ3JpZC1icmVha3BvaW50cyk7XG5cbiAgICAuZmxleCN7JGluZml4fS1yb3cgICAgICAgICAgICB7IGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDsgfVxuICAgIC5mbGV4I3skaW5maXh9LWNvbHVtbiAgICAgICAgIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50OyB9XG4gICAgLmZsZXgjeyRpbmZpeH0tcm93LXJldmVyc2UgICAgeyBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2UgIWltcG9ydGFudDsgfVxuICAgIC5mbGV4I3skaW5maXh9LWNvbHVtbi1yZXZlcnNlIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlICFpbXBvcnRhbnQ7IH1cblxuICAgIC5mbGV4I3skaW5maXh9LXdyYXAgICAgICAgICB7IGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50OyB9XG4gICAgLmZsZXgjeyRpbmZpeH0tbm93cmFwICAgICAgIHsgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDsgfVxuICAgIC5mbGV4I3skaW5maXh9LXdyYXAtcmV2ZXJzZSB7IGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlICFpbXBvcnRhbnQ7IH1cblxuICAgIC5qdXN0aWZ5LWNvbnRlbnQjeyRpbmZpeH0tc3RhcnQgICB7IGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50OyB9XG4gICAgLmp1c3RpZnktY29udGVudCN7JGluZml4fS1lbmQgICAgIHsganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50OyB9XG4gICAgLmp1c3RpZnktY29udGVudCN7JGluZml4fS1jZW50ZXIgIHsganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDsgfVxuICAgIC5qdXN0aWZ5LWNvbnRlbnQjeyRpbmZpeH0tYmV0d2VlbiB7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50OyB9XG4gICAgLmp1c3RpZnktY29udGVudCN7JGluZml4fS1hcm91bmQgIHsganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDsgfVxuXG4gICAgLmFsaWduLWl0ZW1zI3skaW5maXh9LXN0YXJ0ICAgIHsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDsgfVxuICAgIC5hbGlnbi1pdGVtcyN7JGluZml4fS1lbmQgICAgICB7IGFsaWduLWl0ZW1zOiBmbGV4LWVuZCAhaW1wb3J0YW50OyB9XG4gICAgLmFsaWduLWl0ZW1zI3skaW5maXh9LWNlbnRlciAgIHsgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50OyB9XG4gICAgLmFsaWduLWl0ZW1zI3skaW5maXh9LWJhc2VsaW5lIHsgYWxpZ24taXRlbXM6IGJhc2VsaW5lICFpbXBvcnRhbnQ7IH1cbiAgICAuYWxpZ24taXRlbXMjeyRpbmZpeH0tc3RyZXRjaCAgeyBhbGlnbi1pdGVtczogc3RyZXRjaCAhaW1wb3J0YW50OyB9XG5cbiAgICAuYWxpZ24tY29udGVudCN7JGluZml4fS1zdGFydCAgIHsgYWxpZ24tY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50OyB9XG4gICAgLmFsaWduLWNvbnRlbnQjeyRpbmZpeH0tZW5kICAgICB7IGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7IH1cbiAgICAuYWxpZ24tY29udGVudCN7JGluZml4fS1jZW50ZXIgIHsgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7IH1cbiAgICAuYWxpZ24tY29udGVudCN7JGluZml4fS1iZXR3ZWVuIHsgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50OyB9XG4gICAgLmFsaWduLWNvbnRlbnQjeyRpbmZpeH0tYXJvdW5kICB7IGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50OyB9XG4gICAgLmFsaWduLWNvbnRlbnQjeyRpbmZpeH0tc3RyZXRjaCB7IGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2ggIWltcG9ydGFudDsgfVxuXG4gICAgLmFsaWduLXNlbGYjeyRpbmZpeH0tYXV0byAgICAgeyBhbGlnbi1zZWxmOiBhdXRvICFpbXBvcnRhbnQ7IH1cbiAgICAuYWxpZ24tc2VsZiN7JGluZml4fS1zdGFydCAgICB7IGFsaWduLXNlbGY6IGZsZXgtc3RhcnQgIWltcG9ydGFudDsgfVxuICAgIC5hbGlnbi1zZWxmI3skaW5maXh9LWVuZCAgICAgIHsgYWxpZ24tc2VsZjogZmxleC1lbmQgIWltcG9ydGFudDsgfVxuICAgIC5hbGlnbi1zZWxmI3skaW5maXh9LWNlbnRlciAgIHsgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7IH1cbiAgICAuYWxpZ24tc2VsZiN7JGluZml4fS1iYXNlbGluZSB7IGFsaWduLXNlbGY6IGJhc2VsaW5lICFpbXBvcnRhbnQ7IH1cbiAgICAuYWxpZ24tc2VsZiN7JGluZml4fS1zdHJldGNoICB7IGFsaWduLXNlbGY6IHN0cmV0Y2ggIWltcG9ydGFudDsgfVxuICB9XG59XG4vKlxuICBNYXJnaW4gYW5kIFBhZGRpbmdcbiovXG5AZWFjaCAkYnJlYWtwb2ludCBpbiBtYXAta2V5cygkZ3JpZC1icmVha3BvaW50cykge1xuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50KSB7XG4gICAgJGluZml4OiBicmVha3BvaW50LWluZml4KCRicmVha3BvaW50LCAkZ3JpZC1icmVha3BvaW50cyk7XG5cbiAgICBAZWFjaCAkcHJvcCwgJGFiYnJldiBpbiAobWFyZ2luOiBtLCBwYWRkaW5nOiBwKSB7XG4gICAgICBAZWFjaCAkc2l6ZSwgJGxlbmd0aCBpbiAkc3BhY2VycyB7XG5cbiAgICAgICAgLiN7JGFiYnJldn0jeyRpbmZpeH0tI3skc2l6ZX0geyAjeyRwcm9wfTogJGxlbmd0aCAhaW1wb3J0YW50OyB9XG4gICAgICAgIC4jeyRhYmJyZXZ9dCN7JGluZml4fS0jeyRzaXplfSxcbiAgICAgICAgLiN7JGFiYnJldn15I3skaW5maXh9LSN7JHNpemV9IHtcbiAgICAgICAgICAjeyRwcm9wfS10b3A6ICRsZW5ndGggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAuI3skYWJicmV2fXIjeyRpbmZpeH0tI3skc2l6ZX0sXG4gICAgICAgIC4jeyRhYmJyZXZ9eCN7JGluZml4fS0jeyRzaXplfSB7XG4gICAgICAgICAgI3skcHJvcH0tcmlnaHQ6ICRsZW5ndGggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAuI3skYWJicmV2fWIjeyRpbmZpeH0tI3skc2l6ZX0sXG4gICAgICAgIC4jeyRhYmJyZXZ9eSN7JGluZml4fS0jeyRzaXplfSB7XG4gICAgICAgICAgI3skcHJvcH0tYm90dG9tOiAkbGVuZ3RoICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLiN7JGFiYnJldn1sI3skaW5maXh9LSN7JHNpemV9LFxuICAgICAgICAuI3skYWJicmV2fXgjeyRpbmZpeH0tI3skc2l6ZX0ge1xuICAgICAgICAgICN7JHByb3B9LWxlZnQ6ICRsZW5ndGggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNvbWUgc3BlY2lhbCBtYXJnaW4gdXRpbHNcbiAgICAubSN7JGluZml4fS1hdXRvIHsgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7IH1cbiAgICAubXQjeyRpbmZpeH0tYXV0byxcbiAgICAubXkjeyRpbmZpeH0tYXV0byB7XG4gICAgICBtYXJnaW4tdG9wOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5tciN7JGluZml4fS1hdXRvLFxuICAgIC5teCN7JGluZml4fS1hdXRvIHtcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAubWIjeyRpbmZpeH0tYXV0byxcbiAgICAubXkjeyRpbmZpeH0tYXV0byB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5tbCN7JGluZml4fS1hdXRvLFxuICAgIC5teCN7JGluZml4fS1hdXRvIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4vKlxuICBGbG90XG4qL1xuQGVhY2ggJGJyZWFrcG9pbnQgaW4gbWFwLWtleXMoJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCkge1xuICAgICRpbmZpeDogYnJlYWtwb2ludC1pbmZpeCgkYnJlYWtwb2ludCwgJGdyaWQtYnJlYWtwb2ludHMpO1xuXG4gICAgLmZsb2F0I3skaW5maXh9LWxlZnQgIHsgZmxvYXQ6IGxlZnQ7IH1cbiAgICAuZmxvYXQjeyRpbmZpeH0tcmlnaHQgeyBmbG9hdDogcmlnaHQ7IH1cbiAgICAuZmxvYXQjeyRpbmZpeH0tbm9uZSAgeyBmbG9hdDogbm9uZTsgfVxuICB9XG59XG4uY2xlYXJmaXh7XG4gICY6OmFmdGVyLFxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGhlaWdodDogMDtcbiAgICBjbGVhcjogYm90aDtcbiAgfVxufSIsIi5jdXJzb3Ige1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLnRvZSwgLnByb2otaXRlbSAudG9wLWluZm8gLnRleHQgaDYge1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG5cbi50b2UyIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7IH1cblxuLndoaXRlLWJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMwMDA7IH1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi8qIFxuICBkaXNwbGF5IFxuKi9cbi5kLW5vbmUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cblxuLmQtaW5saW5lIHtcbiAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7IH1cblxuLmQtaW5saW5lLWJsb2NrIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7IH1cblxuLmQtYmxvY2sge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyB9XG5cbi5kLXRhYmxlIHtcbiAgZGlzcGxheTogdGFibGUgIWltcG9ydGFudDsgfVxuXG4uZC10YWJsZS1yb3cge1xuICBkaXNwbGF5OiB0YWJsZS1yb3cgIWltcG9ydGFudDsgfVxuXG4uZC10YWJsZS1jZWxsIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50OyB9XG5cbi5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7IH1cblxuLmQtaW5saW5lLWZsZXgge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50OyB9XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuZC1zbS1ub25lIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cbiAgLmQtc20taW5saW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDsgfVxuICAuZC1zbS1pbmxpbmUtYmxvY2sge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50OyB9XG4gIC5kLXNtLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyB9XG4gIC5kLXNtLXRhYmxlIHtcbiAgICBkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50OyB9XG4gIC5kLXNtLXRhYmxlLXJvdyB7XG4gICAgZGlzcGxheTogdGFibGUtcm93ICFpbXBvcnRhbnQ7IH1cbiAgLmQtc20tdGFibGUtY2VsbCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50OyB9XG4gIC5kLXNtLWZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDsgfVxuICAuZC1zbS1pbmxpbmUtZmxleCB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDsgfSB9XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuZC1tZC1ub25lIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cbiAgLmQtbWQtaW5saW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDsgfVxuICAuZC1tZC1pbmxpbmUtYmxvY2sge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50OyB9XG4gIC5kLW1kLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyB9XG4gIC5kLW1kLXRhYmxlIHtcbiAgICBkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50OyB9XG4gIC5kLW1kLXRhYmxlLXJvdyB7XG4gICAgZGlzcGxheTogdGFibGUtcm93ICFpbXBvcnRhbnQ7IH1cbiAgLmQtbWQtdGFibGUtY2VsbCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50OyB9XG4gIC5kLW1kLWZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDsgfVxuICAuZC1tZC1pbmxpbmUtZmxleCB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDsgfSB9XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuZC1sZy1ub25lIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cbiAgLmQtbGctaW5saW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDsgfVxuICAuZC1sZy1pbmxpbmUtYmxvY2sge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50OyB9XG4gIC5kLWxnLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyB9XG4gIC5kLWxnLXRhYmxlIHtcbiAgICBkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50OyB9XG4gIC5kLWxnLXRhYmxlLXJvdyB7XG4gICAgZGlzcGxheTogdGFibGUtcm93ICFpbXBvcnRhbnQ7IH1cbiAgLmQtbGctdGFibGUtY2VsbCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50OyB9XG4gIC5kLWxnLWZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDsgfVxuICAuZC1sZy1pbmxpbmUtZmxleCB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDsgfSB9XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmQteGwtbm9uZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG4gIC5kLXhsLWlubGluZSB7XG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7IH1cbiAgLmQteGwtaW5saW5lLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDsgfVxuICAuZC14bC1ibG9jayB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsgfVxuICAuZC14bC10YWJsZSB7XG4gICAgZGlzcGxheTogdGFibGUgIWltcG9ydGFudDsgfVxuICAuZC14bC10YWJsZS1yb3cge1xuICAgIGRpc3BsYXk6IHRhYmxlLXJvdyAhaW1wb3J0YW50OyB9XG4gIC5kLXhsLXRhYmxlLWNlbGwge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDsgfVxuICAuZC14bC1mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7IH1cbiAgLmQteGwtaW5saW5lLWZsZXgge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7IH0gfVxuXG4vKiBcbiAgZmxleCBcbiovXG4uZmxleC1yb3cge1xuICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7IH1cblxuLmZsZXgtY29sdW1uIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50OyB9XG5cbi5mbGV4LXJvdy1yZXZlcnNlIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlICFpbXBvcnRhbnQ7IH1cblxuLmZsZXgtY29sdW1uLXJldmVyc2Uge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2UgIWltcG9ydGFudDsgfVxuXG4uZmxleC13cmFwIHtcbiAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7IH1cblxuLmZsZXgtbm93cmFwIHtcbiAgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDsgfVxuXG4uZmxleC13cmFwLXJldmVyc2Uge1xuICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZSAhaW1wb3J0YW50OyB9XG5cbi5qdXN0aWZ5LWNvbnRlbnQtc3RhcnQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDsgfVxuXG4uanVzdGlmeS1jb250ZW50LWVuZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDsgfVxuXG4uanVzdGlmeS1jb250ZW50LWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7IH1cblxuLmp1c3RpZnktY29udGVudC1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7IH1cblxuLmp1c3RpZnktY29udGVudC1hcm91bmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50OyB9XG5cbi5hbGlnbi1pdGVtcy1zdGFydCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7IH1cblxuLmFsaWduLWl0ZW1zLWVuZCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZCAhaW1wb3J0YW50OyB9XG5cbi5hbGlnbi1pdGVtcy1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7IH1cblxuLmFsaWduLWl0ZW1zLWJhc2VsaW5lIHtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lICFpbXBvcnRhbnQ7IH1cblxuLmFsaWduLWl0ZW1zLXN0cmV0Y2gge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaCAhaW1wb3J0YW50OyB9XG5cbi5hbGlnbi1jb250ZW50LXN0YXJ0IHtcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50OyB9XG5cbi5hbGlnbi1jb250ZW50LWVuZCB7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7IH1cblxuLmFsaWduLWNvbnRlbnQtY2VudGVyIHtcbiAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7IH1cblxuLmFsaWduLWNvbnRlbnQtYmV0d2VlbiB7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDsgfVxuXG4uYWxpZ24tY29udGVudC1hcm91bmQge1xuICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDsgfVxuXG4uYWxpZ24tY29udGVudC1zdHJldGNoIHtcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaCAhaW1wb3J0YW50OyB9XG5cbi5hbGlnbi1zZWxmLWF1dG8ge1xuICBhbGlnbi1zZWxmOiBhdXRvICFpbXBvcnRhbnQ7IH1cblxuLmFsaWduLXNlbGYtc3RhcnQge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7IH1cblxuLmFsaWduLXNlbGYtZW5kIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQgIWltcG9ydGFudDsgfVxuXG4uYWxpZ24tc2VsZi1jZW50ZXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDsgfVxuXG4uYWxpZ24tc2VsZi1iYXNlbGluZSB7XG4gIGFsaWduLXNlbGY6IGJhc2VsaW5lICFpbXBvcnRhbnQ7IH1cblxuLmFsaWduLXNlbGYtc3RyZXRjaCB7XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2ggIWltcG9ydGFudDsgfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmZsZXgtc20tcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7IH1cbiAgLmZsZXgtc20tY29sdW1uIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7IH1cbiAgLmZsZXgtc20tcm93LXJldmVyc2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZSAhaW1wb3J0YW50OyB9XG4gIC5mbGV4LXNtLWNvbHVtbi1yZXZlcnNlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2UgIWltcG9ydGFudDsgfVxuICAuZmxleC1zbS13cmFwIHtcbiAgICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDsgfVxuICAuZmxleC1zbS1ub3dyYXAge1xuICAgIGZsZXgtd3JhcDogbm93cmFwICFpbXBvcnRhbnQ7IH1cbiAgLmZsZXgtc20td3JhcC1yZXZlcnNlIHtcbiAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZSAhaW1wb3J0YW50OyB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQtc20tc3RhcnQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50OyB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQtc20tZW5kIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7IH1cbiAgLmp1c3RpZnktY29udGVudC1zbS1jZW50ZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7IH1cbiAgLmp1c3RpZnktY29udGVudC1zbS1iZXR3ZWVuIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDsgfVxuICAuanVzdGlmeS1jb250ZW50LXNtLWFyb3VuZCB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDsgfVxuICAuYWxpZ24taXRlbXMtc20tc3RhcnQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWl0ZW1zLXNtLWVuZCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWl0ZW1zLXNtLWNlbnRlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1pdGVtcy1zbS1iYXNlbGluZSB7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWl0ZW1zLXNtLXN0cmV0Y2gge1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWNvbnRlbnQtc20tc3RhcnQge1xuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDsgfVxuICAuYWxpZ24tY29udGVudC1zbS1lbmQge1xuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWNvbnRlbnQtc20tY2VudGVyIHtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDsgfVxuICAuYWxpZ24tY29udGVudC1zbS1iZXR3ZWVuIHtcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWNvbnRlbnQtc20tYXJvdW5kIHtcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDsgfVxuICAuYWxpZ24tY29udGVudC1zbS1zdHJldGNoIHtcbiAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLXNlbGYtc20tYXV0byB7XG4gICAgYWxpZ24tc2VsZjogYXV0byAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1zZWxmLXNtLXN0YXJ0IHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLXNlbGYtc20tZW5kIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1zZWxmLXNtLWNlbnRlciB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLXNlbGYtc20tYmFzZWxpbmUge1xuICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLXNlbGYtc20tc3RyZXRjaCB7XG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaCAhaW1wb3J0YW50OyB9IH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5mbGV4LW1kLXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50OyB9XG4gIC5mbGV4LW1kLWNvbHVtbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50OyB9XG4gIC5mbGV4LW1kLXJvdy1yZXZlcnNlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2UgIWltcG9ydGFudDsgfVxuICAuZmxleC1tZC1jb2x1bW4tcmV2ZXJzZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlICFpbXBvcnRhbnQ7IH1cbiAgLmZsZXgtbWQtd3JhcCB7XG4gICAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7IH1cbiAgLmZsZXgtbWQtbm93cmFwIHtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcCAhaW1wb3J0YW50OyB9XG4gIC5mbGV4LW1kLXdyYXAtcmV2ZXJzZSB7XG4gICAgZmxleC13cmFwOiB3cmFwLXJldmVyc2UgIWltcG9ydGFudDsgfVxuICAuanVzdGlmeS1jb250ZW50LW1kLXN0YXJ0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDsgfVxuICAuanVzdGlmeS1jb250ZW50LW1kLWVuZCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50OyB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50OyB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQtbWQtYmV0d2VlbiB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7IH1cbiAgLmp1c3RpZnktY29udGVudC1tZC1hcm91bmQge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWl0ZW1zLW1kLXN0YXJ0IHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1pdGVtcy1tZC1lbmQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1pdGVtcy1tZC1jZW50ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDsgfVxuICAuYWxpZ24taXRlbXMtbWQtYmFzZWxpbmUge1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZSAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1pdGVtcy1tZC1zdHJldGNoIHtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1jb250ZW50LW1kLXN0YXJ0IHtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWNvbnRlbnQtbWQtZW5kIHtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1jb250ZW50LW1kLWNlbnRlciB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWNvbnRlbnQtbWQtYmV0d2VlbiB7XG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1jb250ZW50LW1kLWFyb3VuZCB7XG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWNvbnRlbnQtbWQtc3RyZXRjaCB7XG4gICAgYWxpZ24tY29udGVudDogc3RyZXRjaCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1zZWxmLW1kLWF1dG8ge1xuICAgIGFsaWduLXNlbGY6IGF1dG8gIWltcG9ydGFudDsgfVxuICAuYWxpZ24tc2VsZi1tZC1zdGFydCB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1zZWxmLW1kLWVuZCB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQgIWltcG9ydGFudDsgfVxuICAuYWxpZ24tc2VsZi1tZC1jZW50ZXIge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1zZWxmLW1kLWJhc2VsaW5lIHtcbiAgICBhbGlnbi1zZWxmOiBiYXNlbGluZSAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1zZWxmLW1kLXN0cmV0Y2gge1xuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2ggIWltcG9ydGFudDsgfSB9XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuZmxleC1sZy1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDsgfVxuICAuZmxleC1sZy1jb2x1bW4ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDsgfVxuICAuZmxleC1sZy1yb3ctcmV2ZXJzZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlICFpbXBvcnRhbnQ7IH1cbiAgLmZsZXgtbGctY29sdW1uLXJldmVyc2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZSAhaW1wb3J0YW50OyB9XG4gIC5mbGV4LWxnLXdyYXAge1xuICAgIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50OyB9XG4gIC5mbGV4LWxnLW5vd3JhcCB7XG4gICAgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDsgfVxuICAuZmxleC1sZy13cmFwLXJldmVyc2Uge1xuICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlICFpbXBvcnRhbnQ7IH1cbiAgLmp1c3RpZnktY29udGVudC1sZy1zdGFydCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7IH1cbiAgLmp1c3RpZnktY29udGVudC1sZy1lbmQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDsgfVxuICAuanVzdGlmeS1jb250ZW50LWxnLWNlbnRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDsgfVxuICAuanVzdGlmeS1jb250ZW50LWxnLWJldHdlZW4ge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50OyB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQtbGctYXJvdW5kIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1pdGVtcy1sZy1zdGFydCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDsgfVxuICAuYWxpZ24taXRlbXMtbGctZW5kIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDsgfVxuICAuYWxpZ24taXRlbXMtbGctY2VudGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWl0ZW1zLWxnLWJhc2VsaW5lIHtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmUgIWltcG9ydGFudDsgfVxuICAuYWxpZ24taXRlbXMtbGctc3RyZXRjaCB7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2ggIWltcG9ydGFudDsgfVxuICAuYWxpZ24tY29udGVudC1sZy1zdGFydCB7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1jb250ZW50LWxnLWVuZCB7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDsgfVxuICAuYWxpZ24tY29udGVudC1sZy1jZW50ZXIge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1jb250ZW50LWxnLWJldHdlZW4ge1xuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDsgfVxuICAuYWxpZ24tY29udGVudC1sZy1hcm91bmQge1xuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1jb250ZW50LWxnLXN0cmV0Y2gge1xuICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2ggIWltcG9ydGFudDsgfVxuICAuYWxpZ24tc2VsZi1sZy1hdXRvIHtcbiAgICBhbGlnbi1zZWxmOiBhdXRvICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLXNlbGYtbGctc3RhcnQge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQgIWltcG9ydGFudDsgfVxuICAuYWxpZ24tc2VsZi1sZy1lbmQge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLXNlbGYtbGctY2VudGVyIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDsgfVxuICAuYWxpZ24tc2VsZi1sZy1iYXNlbGluZSB7XG4gICAgYWxpZ24tc2VsZjogYmFzZWxpbmUgIWltcG9ydGFudDsgfVxuICAuYWxpZ24tc2VsZi1sZy1zdHJldGNoIHtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoICFpbXBvcnRhbnQ7IH0gfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5mbGV4LXhsLXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50OyB9XG4gIC5mbGV4LXhsLWNvbHVtbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50OyB9XG4gIC5mbGV4LXhsLXJvdy1yZXZlcnNlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2UgIWltcG9ydGFudDsgfVxuICAuZmxleC14bC1jb2x1bW4tcmV2ZXJzZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlICFpbXBvcnRhbnQ7IH1cbiAgLmZsZXgteGwtd3JhcCB7XG4gICAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7IH1cbiAgLmZsZXgteGwtbm93cmFwIHtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcCAhaW1wb3J0YW50OyB9XG4gIC5mbGV4LXhsLXdyYXAtcmV2ZXJzZSB7XG4gICAgZmxleC13cmFwOiB3cmFwLXJldmVyc2UgIWltcG9ydGFudDsgfVxuICAuanVzdGlmeS1jb250ZW50LXhsLXN0YXJ0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDsgfVxuICAuanVzdGlmeS1jb250ZW50LXhsLWVuZCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50OyB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQteGwtY2VudGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50OyB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQteGwtYmV0d2VlbiB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7IH1cbiAgLmp1c3RpZnktY29udGVudC14bC1hcm91bmQge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWl0ZW1zLXhsLXN0YXJ0IHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1pdGVtcy14bC1lbmQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1pdGVtcy14bC1jZW50ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDsgfVxuICAuYWxpZ24taXRlbXMteGwtYmFzZWxpbmUge1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZSAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1pdGVtcy14bC1zdHJldGNoIHtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1jb250ZW50LXhsLXN0YXJ0IHtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWNvbnRlbnQteGwtZW5kIHtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1jb250ZW50LXhsLWNlbnRlciB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWNvbnRlbnQteGwtYmV0d2VlbiB7XG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1jb250ZW50LXhsLWFyb3VuZCB7XG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWNvbnRlbnQteGwtc3RyZXRjaCB7XG4gICAgYWxpZ24tY29udGVudDogc3RyZXRjaCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1zZWxmLXhsLWF1dG8ge1xuICAgIGFsaWduLXNlbGY6IGF1dG8gIWltcG9ydGFudDsgfVxuICAuYWxpZ24tc2VsZi14bC1zdGFydCB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1zZWxmLXhsLWVuZCB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQgIWltcG9ydGFudDsgfVxuICAuYWxpZ24tc2VsZi14bC1jZW50ZXIge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1zZWxmLXhsLWJhc2VsaW5lIHtcbiAgICBhbGlnbi1zZWxmOiBiYXNlbGluZSAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1zZWxmLXhsLXN0cmV0Y2gge1xuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2ggIWltcG9ydGFudDsgfSB9XG5cbi8qXG4gIE1hcmdpbiBhbmQgUGFkZGluZ1xuKi9cbi5tLTAge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDsgfVxuXG4ubXQtMCxcbi5teS0wIHtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50OyB9XG5cbi5tci0wLFxuLm14LTAge1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDsgfVxuXG4ubWItMCxcbi5teS0wIHtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50OyB9XG5cbi5tbC0wLFxuLm14LTAge1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50OyB9XG5cbi5tLTEge1xuICBtYXJnaW46IDAuMjVyZW0gIWltcG9ydGFudDsgfVxuXG4ubXQtMSxcbi5teS0xIHtcbiAgbWFyZ2luLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50OyB9XG5cbi5tci0xLFxuLm14LTEge1xuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDsgfVxuXG4ubWItMSxcbi5teS0xIHtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50OyB9XG5cbi5tbC0xLFxuLm14LTEge1xuICBtYXJnaW4tbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50OyB9XG5cbi5tLTIge1xuICBtYXJnaW46IDAuNXJlbSAhaW1wb3J0YW50OyB9XG5cbi5tdC0yLFxuLm15LTIge1xuICBtYXJnaW4tdG9wOiAwLjVyZW0gIWltcG9ydGFudDsgfVxuXG4ubXItMixcbi5teC0yIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDsgfVxuXG4ubWItMixcbi5teS0yIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7IH1cblxuLm1sLTIsXG4ubXgtMiB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDsgfVxuXG4ubS0zIHtcbiAgbWFyZ2luOiAxcmVtICFpbXBvcnRhbnQ7IH1cblxuLm10LTMsXG4ubXktMyB7XG4gIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDsgfVxuXG4ubXItMyxcbi5teC0zIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7IH1cblxuLm1iLTMsXG4ubXktMyB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDsgfVxuXG4ubWwtMyxcbi5teC0zIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDsgfVxuXG4ubS00IHtcbiAgbWFyZ2luOiAxLjVyZW0gIWltcG9ydGFudDsgfVxuXG4ubXQtNCxcbi5teS00IHtcbiAgbWFyZ2luLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7IH1cblxuLm1yLTQsXG4ubXgtNCB7XG4gIG1hcmdpbi1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7IH1cblxuLm1iLTQsXG4ubXktNCB7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50OyB9XG5cbi5tbC00LFxuLm14LTQge1xuICBtYXJnaW4tbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7IH1cblxuLm0tNSB7XG4gIG1hcmdpbjogM3JlbSAhaW1wb3J0YW50OyB9XG5cbi5tdC01LFxuLm15LTUge1xuICBtYXJnaW4tdG9wOiAzcmVtICFpbXBvcnRhbnQ7IH1cblxuLm1yLTUsXG4ubXgtNSB7XG4gIG1hcmdpbi1yaWdodDogM3JlbSAhaW1wb3J0YW50OyB9XG5cbi5tYi01LFxuLm15LTUge1xuICBtYXJnaW4tYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7IH1cblxuLm1sLTUsXG4ubXgtNSB7XG4gIG1hcmdpbi1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7IH1cblxuLnAtMCB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDsgfVxuXG4ucHQtMCxcbi5weS0wIHtcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDsgfVxuXG4ucHItMCxcbi5weC0wIHtcbiAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50OyB9XG5cbi5wYi0wLFxuLnB5LTAge1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50OyB9XG5cbi5wbC0wLFxuLnB4LTAge1xuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDsgfVxuXG4ucC0xIHtcbiAgcGFkZGluZzogMC4yNXJlbSAhaW1wb3J0YW50OyB9XG5cbi5wdC0xLFxuLnB5LTEge1xuICBwYWRkaW5nLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50OyB9XG5cbi5wci0xLFxuLnB4LTEge1xuICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7IH1cblxuLnBiLTEsXG4ucHktMSB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7IH1cblxuLnBsLTEsXG4ucHgtMSB7XG4gIHBhZGRpbmctbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50OyB9XG5cbi5wLTIge1xuICBwYWRkaW5nOiAwLjVyZW0gIWltcG9ydGFudDsgfVxuXG4ucHQtMixcbi5weS0yIHtcbiAgcGFkZGluZy10b3A6IDAuNXJlbSAhaW1wb3J0YW50OyB9XG5cbi5wci0yLFxuLnB4LTIge1xuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDsgfVxuXG4ucGItMixcbi5weS0yIHtcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50OyB9XG5cbi5wbC0yLFxuLnB4LTIge1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50OyB9XG5cbi5wLTMge1xuICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7IH1cblxuLnB0LTMsXG4ucHktMyB7XG4gIHBhZGRpbmctdG9wOiAxcmVtICFpbXBvcnRhbnQ7IH1cblxuLnByLTMsXG4ucHgtMyB7XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW0gIWltcG9ydGFudDsgfVxuXG4ucGItMyxcbi5weS0zIHtcbiAgcGFkZGluZy1ib3R0b206IDFyZW0gIWltcG9ydGFudDsgfVxuXG4ucGwtMyxcbi5weC0zIHtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7IH1cblxuLnAtNCB7XG4gIHBhZGRpbmc6IDEuNXJlbSAhaW1wb3J0YW50OyB9XG5cbi5wdC00LFxuLnB5LTQge1xuICBwYWRkaW5nLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7IH1cblxuLnByLTQsXG4ucHgtNCB7XG4gIHBhZGRpbmctcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50OyB9XG5cbi5wYi00LFxuLnB5LTQge1xuICBwYWRkaW5nLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7IH1cblxuLnBsLTQsXG4ucHgtNCB7XG4gIHBhZGRpbmctbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7IH1cblxuLnAtNSB7XG4gIHBhZGRpbmc6IDNyZW0gIWltcG9ydGFudDsgfVxuXG4ucHQtNSxcbi5weS01IHtcbiAgcGFkZGluZy10b3A6IDNyZW0gIWltcG9ydGFudDsgfVxuXG4ucHItNSxcbi5weC01IHtcbiAgcGFkZGluZy1yaWdodDogM3JlbSAhaW1wb3J0YW50OyB9XG5cbi5wYi01LFxuLnB5LTUge1xuICBwYWRkaW5nLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50OyB9XG5cbi5wbC01LFxuLnB4LTUge1xuICBwYWRkaW5nLWxlZnQ6IDNyZW0gIWltcG9ydGFudDsgfVxuXG4ubS1hdXRvIHtcbiAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7IH1cblxuLm10LWF1dG8sXG4ubXktYXV0byB7XG4gIG1hcmdpbi10b3A6IGF1dG8gIWltcG9ydGFudDsgfVxuXG4ubXItYXV0byxcbi5teC1hdXRvIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7IH1cblxuLm1iLWF1dG8sXG4ubXktYXV0byB7XG4gIG1hcmdpbi1ib3R0b206IGF1dG8gIWltcG9ydGFudDsgfVxuXG4ubWwtYXV0byxcbi5teC1hdXRvIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDsgfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLm0tc20tMCB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7IH1cbiAgLm10LXNtLTAsXG4gIC5teS1zbS0wIHtcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7IH1cbiAgLm1yLXNtLTAsXG4gIC5teC1zbS0wIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDsgfVxuICAubWItc20tMCxcbiAgLm15LXNtLTAge1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDsgfVxuICAubWwtc20tMCxcbiAgLm14LXNtLTAge1xuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7IH1cbiAgLm0tc20tMSB7XG4gICAgbWFyZ2luOiAwLjI1cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm10LXNtLTEsXG4gIC5teS1zbS0xIHtcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1yLXNtLTEsXG4gIC5teC1zbS0xIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDsgfVxuICAubWItc20tMSxcbiAgLm15LXNtLTEge1xuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDsgfVxuICAubWwtc20tMSxcbiAgLm14LXNtLTEge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm0tc20tMiB7XG4gICAgbWFyZ2luOiAwLjVyZW0gIWltcG9ydGFudDsgfVxuICAubXQtc20tMixcbiAgLm15LXNtLTIge1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5tci1zbS0yLFxuICAubXgtc20tMiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDsgfVxuICAubWItc20tMixcbiAgLm15LXNtLTIge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5tbC1zbS0yLFxuICAubXgtc20tMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5tLXNtLTMge1xuICAgIG1hcmdpbjogMXJlbSAhaW1wb3J0YW50OyB9XG4gIC5tdC1zbS0zLFxuICAubXktc20tMyB7XG4gICAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50OyB9XG4gIC5tci1zbS0zLFxuICAubXgtc20tMyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1iLXNtLTMsXG4gIC5teS1zbS0zIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1sLXNtLTMsXG4gIC5teC1zbS0zIHtcbiAgICBtYXJnaW4tbGVmdDogMXJlbSAhaW1wb3J0YW50OyB9XG4gIC5tLXNtLTQge1xuICAgIG1hcmdpbjogMS41cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm10LXNtLTQsXG4gIC5teS1zbS00IHtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW0gIWltcG9ydGFudDsgfVxuICAubXItc20tNCxcbiAgLm14LXNtLTQge1xuICAgIG1hcmdpbi1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1iLXNtLTQsXG4gIC5teS1zbS00IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDsgfVxuICAubWwtc20tNCxcbiAgLm14LXNtLTQge1xuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDsgfVxuICAubS1zbS01IHtcbiAgICBtYXJnaW46IDNyZW0gIWltcG9ydGFudDsgfVxuICAubXQtc20tNSxcbiAgLm15LXNtLTUge1xuICAgIG1hcmdpbi10b3A6IDNyZW0gIWltcG9ydGFudDsgfVxuICAubXItc20tNSxcbiAgLm14LXNtLTUge1xuICAgIG1hcmdpbi1yaWdodDogM3JlbSAhaW1wb3J0YW50OyB9XG4gIC5tYi1zbS01LFxuICAubXktc20tNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50OyB9XG4gIC5tbC1zbS01LFxuICAubXgtc20tNSB7XG4gICAgbWFyZ2luLWxlZnQ6IDNyZW0gIWltcG9ydGFudDsgfVxuICAucC1zbS0wIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7IH1cbiAgLnB0LXNtLTAsXG4gIC5weS1zbS0wIHtcbiAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50OyB9XG4gIC5wci1zbS0wLFxuICAucHgtc20tMCB7XG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50OyB9XG4gIC5wYi1zbS0wLFxuICAucHktc20tMCB7XG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDsgfVxuICAucGwtc20tMCxcbiAgLnB4LXNtLTAge1xuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50OyB9XG4gIC5wLXNtLTEge1xuICAgIHBhZGRpbmc6IDAuMjVyZW0gIWltcG9ydGFudDsgfVxuICAucHQtc20tMSxcbiAgLnB5LXNtLTEge1xuICAgIHBhZGRpbmctdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7IH1cbiAgLnByLXNtLTEsXG4gIC5weC1zbS0xIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7IH1cbiAgLnBiLXNtLTEsXG4gIC5weS1zbS0xIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5wbC1zbS0xLFxuICAucHgtc20tMSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7IH1cbiAgLnAtc20tMiB7XG4gICAgcGFkZGluZzogMC41cmVtICFpbXBvcnRhbnQ7IH1cbiAgLnB0LXNtLTIsXG4gIC5weS1zbS0yIHtcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7IH1cbiAgLnByLXNtLTIsXG4gIC5weC1zbS0yIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDsgfVxuICAucGItc20tMixcbiAgLnB5LXNtLTIge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDsgfVxuICAucGwtc20tMixcbiAgLnB4LXNtLTIge1xuICAgIHBhZGRpbmctbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7IH1cbiAgLnAtc20tMyB7XG4gICAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50OyB9XG4gIC5wdC1zbS0zLFxuICAucHktc20tMyB7XG4gICAgcGFkZGluZy10b3A6IDFyZW0gIWltcG9ydGFudDsgfVxuICAucHItc20tMyxcbiAgLnB4LXNtLTMge1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW0gIWltcG9ydGFudDsgfVxuICAucGItc20tMyxcbiAgLnB5LXNtLTMge1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7IH1cbiAgLnBsLXNtLTMsXG4gIC5weC1zbS0zIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW0gIWltcG9ydGFudDsgfVxuICAucC1zbS00IHtcbiAgICBwYWRkaW5nOiAxLjVyZW0gIWltcG9ydGFudDsgfVxuICAucHQtc20tNCxcbiAgLnB5LXNtLTQge1xuICAgIHBhZGRpbmctdG9wOiAxLjVyZW0gIWltcG9ydGFudDsgfVxuICAucHItc20tNCxcbiAgLnB4LXNtLTQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5wYi1zbS00LFxuICAucHktc20tNCB7XG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5wbC1zbS00LFxuICAucHgtc20tNCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDsgfVxuICAucC1zbS01IHtcbiAgICBwYWRkaW5nOiAzcmVtICFpbXBvcnRhbnQ7IH1cbiAgLnB0LXNtLTUsXG4gIC5weS1zbS01IHtcbiAgICBwYWRkaW5nLXRvcDogM3JlbSAhaW1wb3J0YW50OyB9XG4gIC5wci1zbS01LFxuICAucHgtc20tNSB7XG4gICAgcGFkZGluZy1yaWdodDogM3JlbSAhaW1wb3J0YW50OyB9XG4gIC5wYi1zbS01LFxuICAucHktc20tNSB7XG4gICAgcGFkZGluZy1ib3R0b206IDNyZW0gIWltcG9ydGFudDsgfVxuICAucGwtc20tNSxcbiAgLnB4LXNtLTUge1xuICAgIHBhZGRpbmctbGVmdDogM3JlbSAhaW1wb3J0YW50OyB9XG4gIC5tLXNtLWF1dG8ge1xuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50OyB9XG4gIC5tdC1zbS1hdXRvLFxuICAubXktc20tYXV0byB7XG4gICAgbWFyZ2luLXRvcDogYXV0byAhaW1wb3J0YW50OyB9XG4gIC5tci1zbS1hdXRvLFxuICAubXgtc20tYXV0byB7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7IH1cbiAgLm1iLXNtLWF1dG8sXG4gIC5teS1zbS1hdXRvIHtcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7IH1cbiAgLm1sLXNtLWF1dG8sXG4gIC5teC1zbS1hdXRvIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50OyB9IH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5tLW1kLTAge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50OyB9XG4gIC5tdC1tZC0wLFxuICAubXktbWQtMCB7XG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50OyB9XG4gIC5tci1tZC0wLFxuICAubXgtbWQtMCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7IH1cbiAgLm1iLW1kLTAsXG4gIC5teS1tZC0wIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7IH1cbiAgLm1sLW1kLTAsXG4gIC5teC1tZC0wIHtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50OyB9XG4gIC5tLW1kLTEge1xuICAgIG1hcmdpbjogMC4yNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5tdC1tZC0xLFxuICAubXktbWQtMSB7XG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5tci1tZC0xLFxuICAubXgtbWQtMSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1iLW1kLTEsXG4gIC5teS1tZC0xIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1sLW1kLTEsXG4gIC5teC1tZC0xIHtcbiAgICBtYXJnaW4tbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5tLW1kLTIge1xuICAgIG1hcmdpbjogMC41cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm10LW1kLTIsXG4gIC5teS1tZC0yIHtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW0gIWltcG9ydGFudDsgfVxuICAubXItbWQtMixcbiAgLm14LW1kLTIge1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1iLW1kLTIsXG4gIC5teS1tZC0yIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDsgfVxuICAubWwtbWQtMixcbiAgLm14LW1kLTIge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDsgfVxuICAubS1tZC0zIHtcbiAgICBtYXJnaW46IDFyZW0gIWltcG9ydGFudDsgfVxuICAubXQtbWQtMyxcbiAgLm15LW1kLTMge1xuICAgIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDsgfVxuICAubXItbWQtMyxcbiAgLm14LW1kLTMge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50OyB9XG4gIC5tYi1tZC0zLFxuICAubXktbWQtMyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50OyB9XG4gIC5tbC1tZC0zLFxuICAubXgtbWQtMyB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDsgfVxuICAubS1tZC00IHtcbiAgICBtYXJnaW46IDEuNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5tdC1tZC00LFxuICAubXktbWQtNCB7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1yLW1kLTQsXG4gIC5teC1tZC00IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5tYi1tZC00LFxuICAubXktbWQtNCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1sLW1kLTQsXG4gIC5teC1tZC00IHtcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm0tbWQtNSB7XG4gICAgbWFyZ2luOiAzcmVtICFpbXBvcnRhbnQ7IH1cbiAgLm10LW1kLTUsXG4gIC5teS1tZC01IHtcbiAgICBtYXJnaW4tdG9wOiAzcmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1yLW1kLTUsXG4gIC5teC1tZC01IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW0gIWltcG9ydGFudDsgfVxuICAubWItbWQtNSxcbiAgLm15LW1kLTUge1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW0gIWltcG9ydGFudDsgfVxuICAubWwtbWQtNSxcbiAgLm14LW1kLTUge1xuICAgIG1hcmdpbi1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7IH1cbiAgLnAtbWQtMCB7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50OyB9XG4gIC5wdC1tZC0wLFxuICAucHktbWQtMCB7XG4gICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDsgfVxuICAucHItbWQtMCxcbiAgLnB4LW1kLTAge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDsgfVxuICAucGItbWQtMCxcbiAgLnB5LW1kLTAge1xuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7IH1cbiAgLnBsLW1kLTAsXG4gIC5weC1tZC0wIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDsgfVxuICAucC1tZC0xIHtcbiAgICBwYWRkaW5nOiAwLjI1cmVtICFpbXBvcnRhbnQ7IH1cbiAgLnB0LW1kLTEsXG4gIC5weS1tZC0xIHtcbiAgICBwYWRkaW5nLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5wci1tZC0xLFxuICAucHgtbWQtMSB7XG4gICAgcGFkZGluZy1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5wYi1tZC0xLFxuICAucHktbWQtMSB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDsgfVxuICAucGwtbWQtMSxcbiAgLnB4LW1kLTEge1xuICAgIHBhZGRpbmctbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5wLW1kLTIge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5wdC1tZC0yLFxuICAucHktbWQtMiB7XG4gICAgcGFkZGluZy10b3A6IDAuNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5wci1tZC0yLFxuICAucHgtbWQtMiB7XG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7IH1cbiAgLnBiLW1kLTIsXG4gIC5weS1tZC0yIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7IH1cbiAgLnBsLW1kLTIsXG4gIC5weC1tZC0yIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5wLW1kLTMge1xuICAgIHBhZGRpbmc6IDFyZW0gIWltcG9ydGFudDsgfVxuICAucHQtbWQtMyxcbiAgLnB5LW1kLTMge1xuICAgIHBhZGRpbmctdG9wOiAxcmVtICFpbXBvcnRhbnQ7IH1cbiAgLnByLW1kLTMsXG4gIC5weC1tZC0zIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7IH1cbiAgLnBiLW1kLTMsXG4gIC5weS1tZC0zIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50OyB9XG4gIC5wbC1tZC0zLFxuICAucHgtbWQtMyB7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7IH1cbiAgLnAtbWQtNCB7XG4gICAgcGFkZGluZzogMS41cmVtICFpbXBvcnRhbnQ7IH1cbiAgLnB0LW1kLTQsXG4gIC5weS1tZC00IHtcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7IH1cbiAgLnByLW1kLTQsXG4gIC5weC1tZC00IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDsgfVxuICAucGItbWQtNCxcbiAgLnB5LW1kLTQge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDsgfVxuICAucGwtbWQtNCxcbiAgLnB4LW1kLTQge1xuICAgIHBhZGRpbmctbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7IH1cbiAgLnAtbWQtNSB7XG4gICAgcGFkZGluZzogM3JlbSAhaW1wb3J0YW50OyB9XG4gIC5wdC1tZC01LFxuICAucHktbWQtNSB7XG4gICAgcGFkZGluZy10b3A6IDNyZW0gIWltcG9ydGFudDsgfVxuICAucHItbWQtNSxcbiAgLnB4LW1kLTUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW0gIWltcG9ydGFudDsgfVxuICAucGItbWQtNSxcbiAgLnB5LW1kLTUge1xuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7IH1cbiAgLnBsLW1kLTUsXG4gIC5weC1tZC01IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW0gIWltcG9ydGFudDsgfVxuICAubS1tZC1hdXRvIHtcbiAgICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDsgfVxuICAubXQtbWQtYXV0byxcbiAgLm15LW1kLWF1dG8ge1xuICAgIG1hcmdpbi10b3A6IGF1dG8gIWltcG9ydGFudDsgfVxuICAubXItbWQtYXV0byxcbiAgLm14LW1kLWF1dG8ge1xuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50OyB9XG4gIC5tYi1tZC1hdXRvLFxuICAubXktbWQtYXV0byB7XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0byAhaW1wb3J0YW50OyB9XG4gIC5tbC1tZC1hdXRvLFxuICAubXgtbWQtYXV0byB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDsgfSB9XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAubS1sZy0wIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDsgfVxuICAubXQtbGctMCxcbiAgLm15LWxnLTAge1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDsgfVxuICAubXItbGctMCxcbiAgLm14LWxnLTAge1xuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50OyB9XG4gIC5tYi1sZy0wLFxuICAubXktbGctMCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50OyB9XG4gIC5tbC1sZy0wLFxuICAubXgtbGctMCB7XG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDsgfVxuICAubS1sZy0xIHtcbiAgICBtYXJnaW46IDAuMjVyZW0gIWltcG9ydGFudDsgfVxuICAubXQtbGctMSxcbiAgLm15LWxnLTEge1xuICAgIG1hcmdpbi10b3A6IDAuMjVyZW0gIWltcG9ydGFudDsgfVxuICAubXItbGctMSxcbiAgLm14LWxnLTEge1xuICAgIG1hcmdpbi1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5tYi1sZy0xLFxuICAubXktbGctMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5tbC1sZy0xLFxuICAubXgtbGctMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDsgfVxuICAubS1sZy0yIHtcbiAgICBtYXJnaW46IDAuNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5tdC1sZy0yLFxuICAubXktbGctMiB7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1yLWxnLTIsXG4gIC5teC1sZy0yIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5tYi1sZy0yLFxuICAubXktbGctMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1sLWxnLTIsXG4gIC5teC1sZy0yIHtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm0tbGctMyB7XG4gICAgbWFyZ2luOiAxcmVtICFpbXBvcnRhbnQ7IH1cbiAgLm10LWxnLTMsXG4gIC5teS1sZy0zIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1yLWxnLTMsXG4gIC5teC1sZy0zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW0gIWltcG9ydGFudDsgfVxuICAubWItbGctMyxcbiAgLm15LWxnLTMge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDsgfVxuICAubWwtbGctMyxcbiAgLm14LWxnLTMge1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7IH1cbiAgLm0tbGctNCB7XG4gICAgbWFyZ2luOiAxLjVyZW0gIWltcG9ydGFudDsgfVxuICAubXQtbGctNCxcbiAgLm15LWxnLTQge1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5tci1sZy00LFxuICAubXgtbGctNCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDsgfVxuICAubWItbGctNCxcbiAgLm15LWxnLTQge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5tbC1sZy00LFxuICAubXgtbGctNCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5tLWxnLTUge1xuICAgIG1hcmdpbjogM3JlbSAhaW1wb3J0YW50OyB9XG4gIC5tdC1sZy01LFxuICAubXktbGctNSB7XG4gICAgbWFyZ2luLXRvcDogM3JlbSAhaW1wb3J0YW50OyB9XG4gIC5tci1sZy01LFxuICAubXgtbGctNSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1iLWxnLTUsXG4gIC5teS1sZy01IHtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1sLWxnLTUsXG4gIC5teC1sZy01IHtcbiAgICBtYXJnaW4tbGVmdDogM3JlbSAhaW1wb3J0YW50OyB9XG4gIC5wLWxnLTAge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDsgfVxuICAucHQtbGctMCxcbiAgLnB5LWxnLTAge1xuICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7IH1cbiAgLnByLWxnLTAsXG4gIC5weC1sZy0wIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7IH1cbiAgLnBiLWxnLTAsXG4gIC5weS1sZy0wIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50OyB9XG4gIC5wbC1sZy0wLFxuICAucHgtbGctMCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7IH1cbiAgLnAtbGctMSB7XG4gICAgcGFkZGluZzogMC4yNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5wdC1sZy0xLFxuICAucHktbGctMSB7XG4gICAgcGFkZGluZy10b3A6IDAuMjVyZW0gIWltcG9ydGFudDsgfVxuICAucHItbGctMSxcbiAgLnB4LWxnLTEge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDsgfVxuICAucGItbGctMSxcbiAgLnB5LWxnLTEge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7IH1cbiAgLnBsLWxnLTEsXG4gIC5weC1sZy0xIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDsgfVxuICAucC1sZy0yIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gIWltcG9ydGFudDsgfVxuICAucHQtbGctMixcbiAgLnB5LWxnLTIge1xuICAgIHBhZGRpbmctdG9wOiAwLjVyZW0gIWltcG9ydGFudDsgfVxuICAucHItbGctMixcbiAgLnB4LWxnLTIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5wYi1sZy0yLFxuICAucHktbGctMiB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5wbC1sZy0yLFxuICAucHgtbGctMiB7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDsgfVxuICAucC1sZy0zIHtcbiAgICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7IH1cbiAgLnB0LWxnLTMsXG4gIC5weS1sZy0zIHtcbiAgICBwYWRkaW5nLXRvcDogMXJlbSAhaW1wb3J0YW50OyB9XG4gIC5wci1sZy0zLFxuICAucHgtbGctMyB7XG4gICAgcGFkZGluZy1yaWdodDogMXJlbSAhaW1wb3J0YW50OyB9XG4gIC5wYi1sZy0zLFxuICAucHktbGctMyB7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW0gIWltcG9ydGFudDsgfVxuICAucGwtbGctMyxcbiAgLnB4LWxnLTMge1xuICAgIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50OyB9XG4gIC5wLWxnLTQge1xuICAgIHBhZGRpbmc6IDEuNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5wdC1sZy00LFxuICAucHktbGctNCB7XG4gICAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5wci1sZy00LFxuICAucHgtbGctNCB7XG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7IH1cbiAgLnBiLWxnLTQsXG4gIC5weS1sZy00IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7IH1cbiAgLnBsLWxnLTQsXG4gIC5weC1sZy00IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5wLWxnLTUge1xuICAgIHBhZGRpbmc6IDNyZW0gIWltcG9ydGFudDsgfVxuICAucHQtbGctNSxcbiAgLnB5LWxnLTUge1xuICAgIHBhZGRpbmctdG9wOiAzcmVtICFpbXBvcnRhbnQ7IH1cbiAgLnByLWxnLTUsXG4gIC5weC1sZy01IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7IH1cbiAgLnBiLWxnLTUsXG4gIC5weS1sZy01IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50OyB9XG4gIC5wbC1sZy01LFxuICAucHgtbGctNSB7XG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7IH1cbiAgLm0tbGctYXV0byB7XG4gICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7IH1cbiAgLm10LWxnLWF1dG8sXG4gIC5teS1sZy1hdXRvIHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvICFpbXBvcnRhbnQ7IH1cbiAgLm1yLWxnLWF1dG8sXG4gIC5teC1sZy1hdXRvIHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDsgfVxuICAubWItbGctYXV0byxcbiAgLm15LWxnLWF1dG8ge1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG8gIWltcG9ydGFudDsgfVxuICAubWwtbGctYXV0byxcbiAgLm14LWxnLWF1dG8ge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7IH0gfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5tLXhsLTAge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50OyB9XG4gIC5tdC14bC0wLFxuICAubXkteGwtMCB7XG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50OyB9XG4gIC5tci14bC0wLFxuICAubXgteGwtMCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7IH1cbiAgLm1iLXhsLTAsXG4gIC5teS14bC0wIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7IH1cbiAgLm1sLXhsLTAsXG4gIC5teC14bC0wIHtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50OyB9XG4gIC5tLXhsLTEge1xuICAgIG1hcmdpbjogMC4yNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5tdC14bC0xLFxuICAubXkteGwtMSB7XG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5tci14bC0xLFxuICAubXgteGwtMSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1iLXhsLTEsXG4gIC5teS14bC0xIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1sLXhsLTEsXG4gIC5teC14bC0xIHtcbiAgICBtYXJnaW4tbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5tLXhsLTIge1xuICAgIG1hcmdpbjogMC41cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm10LXhsLTIsXG4gIC5teS14bC0yIHtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW0gIWltcG9ydGFudDsgfVxuICAubXIteGwtMixcbiAgLm14LXhsLTIge1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1iLXhsLTIsXG4gIC5teS14bC0yIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDsgfVxuICAubWwteGwtMixcbiAgLm14LXhsLTIge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDsgfVxuICAubS14bC0zIHtcbiAgICBtYXJnaW46IDFyZW0gIWltcG9ydGFudDsgfVxuICAubXQteGwtMyxcbiAgLm15LXhsLTMge1xuICAgIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDsgfVxuICAubXIteGwtMyxcbiAgLm14LXhsLTMge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50OyB9XG4gIC5tYi14bC0zLFxuICAubXkteGwtMyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50OyB9XG4gIC5tbC14bC0zLFxuICAubXgteGwtMyB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDsgfVxuICAubS14bC00IHtcbiAgICBtYXJnaW46IDEuNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5tdC14bC00LFxuICAubXkteGwtNCB7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1yLXhsLTQsXG4gIC5teC14bC00IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5tYi14bC00LFxuICAubXkteGwtNCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1sLXhsLTQsXG4gIC5teC14bC00IHtcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm0teGwtNSB7XG4gICAgbWFyZ2luOiAzcmVtICFpbXBvcnRhbnQ7IH1cbiAgLm10LXhsLTUsXG4gIC5teS14bC01IHtcbiAgICBtYXJnaW4tdG9wOiAzcmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1yLXhsLTUsXG4gIC5teC14bC01IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW0gIWltcG9ydGFudDsgfVxuICAubWIteGwtNSxcbiAgLm15LXhsLTUge1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW0gIWltcG9ydGFudDsgfVxuICAubWwteGwtNSxcbiAgLm14LXhsLTUge1xuICAgIG1hcmdpbi1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7IH1cbiAgLnAteGwtMCB7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50OyB9XG4gIC5wdC14bC0wLFxuICAucHkteGwtMCB7XG4gICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDsgfVxuICAucHIteGwtMCxcbiAgLnB4LXhsLTAge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDsgfVxuICAucGIteGwtMCxcbiAgLnB5LXhsLTAge1xuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7IH1cbiAgLnBsLXhsLTAsXG4gIC5weC14bC0wIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDsgfVxuICAucC14bC0xIHtcbiAgICBwYWRkaW5nOiAwLjI1cmVtICFpbXBvcnRhbnQ7IH1cbiAgLnB0LXhsLTEsXG4gIC5weS14bC0xIHtcbiAgICBwYWRkaW5nLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5wci14bC0xLFxuICAucHgteGwtMSB7XG4gICAgcGFkZGluZy1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5wYi14bC0xLFxuICAucHkteGwtMSB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDsgfVxuICAucGwteGwtMSxcbiAgLnB4LXhsLTEge1xuICAgIHBhZGRpbmctbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5wLXhsLTIge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5wdC14bC0yLFxuICAucHkteGwtMiB7XG4gICAgcGFkZGluZy10b3A6IDAuNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5wci14bC0yLFxuICAucHgteGwtMiB7XG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7IH1cbiAgLnBiLXhsLTIsXG4gIC5weS14bC0yIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7IH1cbiAgLnBsLXhsLTIsXG4gIC5weC14bC0yIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50OyB9XG4gIC5wLXhsLTMge1xuICAgIHBhZGRpbmc6IDFyZW0gIWltcG9ydGFudDsgfVxuICAucHQteGwtMyxcbiAgLnB5LXhsLTMge1xuICAgIHBhZGRpbmctdG9wOiAxcmVtICFpbXBvcnRhbnQ7IH1cbiAgLnByLXhsLTMsXG4gIC5weC14bC0zIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7IH1cbiAgLnBiLXhsLTMsXG4gIC5weS14bC0zIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50OyB9XG4gIC5wbC14bC0zLFxuICAucHgteGwtMyB7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7IH1cbiAgLnAteGwtNCB7XG4gICAgcGFkZGluZzogMS41cmVtICFpbXBvcnRhbnQ7IH1cbiAgLnB0LXhsLTQsXG4gIC5weS14bC00IHtcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7IH1cbiAgLnByLXhsLTQsXG4gIC5weC14bC00IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDsgfVxuICAucGIteGwtNCxcbiAgLnB5LXhsLTQge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDsgfVxuICAucGwteGwtNCxcbiAgLnB4LXhsLTQge1xuICAgIHBhZGRpbmctbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7IH1cbiAgLnAteGwtNSB7XG4gICAgcGFkZGluZzogM3JlbSAhaW1wb3J0YW50OyB9XG4gIC5wdC14bC01LFxuICAucHkteGwtNSB7XG4gICAgcGFkZGluZy10b3A6IDNyZW0gIWltcG9ydGFudDsgfVxuICAucHIteGwtNSxcbiAgLnB4LXhsLTUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW0gIWltcG9ydGFudDsgfVxuICAucGIteGwtNSxcbiAgLnB5LXhsLTUge1xuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7IH1cbiAgLnBsLXhsLTUsXG4gIC5weC14bC01IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW0gIWltcG9ydGFudDsgfVxuICAubS14bC1hdXRvIHtcbiAgICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDsgfVxuICAubXQteGwtYXV0byxcbiAgLm15LXhsLWF1dG8ge1xuICAgIG1hcmdpbi10b3A6IGF1dG8gIWltcG9ydGFudDsgfVxuICAubXIteGwtYXV0byxcbiAgLm14LXhsLWF1dG8ge1xuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50OyB9XG4gIC5tYi14bC1hdXRvLFxuICAubXkteGwtYXV0byB7XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0byAhaW1wb3J0YW50OyB9XG4gIC5tbC14bC1hdXRvLFxuICAubXgteGwtYXV0byB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDsgfSB9XG5cbi8qXG4gIEZsb3RcbiovXG4uZmxvYXQtbGVmdCB7XG4gIGZsb2F0OiBsZWZ0OyB9XG5cbi5mbG9hdC1yaWdodCB7XG4gIGZsb2F0OiByaWdodDsgfVxuXG4uZmxvYXQtbm9uZSB7XG4gIGZsb2F0OiBub25lOyB9XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuZmxvYXQtc20tbGVmdCB7XG4gICAgZmxvYXQ6IGxlZnQ7IH1cbiAgLmZsb2F0LXNtLXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQ7IH1cbiAgLmZsb2F0LXNtLW5vbmUge1xuICAgIGZsb2F0OiBub25lOyB9IH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5mbG9hdC1tZC1sZWZ0IHtcbiAgICBmbG9hdDogbGVmdDsgfVxuICAuZmxvYXQtbWQtcmlnaHQge1xuICAgIGZsb2F0OiByaWdodDsgfVxuICAuZmxvYXQtbWQtbm9uZSB7XG4gICAgZmxvYXQ6IG5vbmU7IH0gfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmZsb2F0LWxnLWxlZnQge1xuICAgIGZsb2F0OiBsZWZ0OyB9XG4gIC5mbG9hdC1sZy1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0OyB9XG4gIC5mbG9hdC1sZy1ub25lIHtcbiAgICBmbG9hdDogbm9uZTsgfSB9XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmZsb2F0LXhsLWxlZnQge1xuICAgIGZsb2F0OiBsZWZ0OyB9XG4gIC5mbG9hdC14bC1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0OyB9XG4gIC5mbG9hdC14bC1ub25lIHtcbiAgICBmbG9hdDogbm9uZTsgfSB9XG5cbi5jbGVhcmZpeDo6YWZ0ZXIsIC5jbGVhcmZpeDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgaGVpZ2h0OiAwO1xuICBjbGVhcjogYm90aDsgfVxuXG4ucHJvai1pdGVtIHtcbiAgbWF4LWhlaWdodDogMzAwcHg7IH1cbiAgLnByb2otaXRlbSAudG9wLWluZm8ge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMDsgfVxuICAgIC5wcm9qLWl0ZW0gLnRvcC1pbmZvIC50ZXh0IHtcbiAgICAgIGhlaWdodDogMzVweDsgfVxuICAgICAgLnByb2otaXRlbSAudG9wLWluZm8gLnRleHQgaDYge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwOyB9XG4gIC5wcm9qLWl0ZW0gLmRlc2MgYSB7XG4gICAgY29sb3I6ICMyMTk2ZjM7IH1cblxuLmZpeC1hZGQtYnRuIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDY1cHg7XG4gIHJpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7IH1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvY3NzL2NsYXNzLnNjc3NcIjtcblxuLnByb2otaXRlbSB7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuXG4gIC50b3AtaW5mbyB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgLnRleHQge1xuICAgICAgaGVpZ2h0OiAzNXB4O1xuXG4gICAgICBoNiB7XG4gICAgICAgIEBleHRlbmQgLnRvZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIC5kZXNjIHtcbiAgICBhIHtcbiAgICAgIGNvbG9yOiAjMjE5NmYzO1xuICAgIH1cbiAgfVxufVxuXG4uZml4LWFkZC1idG4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNjVweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/projects/projects.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.8@@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/project.service */ "./src/app/service/project.service.ts");
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/user.service */ "./src/app/service/user.service.ts");




var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(projectSrv, userSrv) {
        this.projectSrv = projectSrv;
        this.userSrv = userSrv;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.handleGetProjects();
    };
    ProjectsComponent.prototype.handleGetProjects = function () {
        var _this = this;
        this.projectSrv.getProjects().subscribe(function (res) {
            if (res.code === 0) {
                _this.projects = res.data.filter(function (item) {
                    item.desc = item.desc.substr(0, 100) + '...';
                    return item.audit === 1;
                });
            }
        });
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/components/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ../project-detail/project-detail.component.scss */ "./src/app/components/project-detail/project-detail.component.scss"), __webpack_require__(/*! ./projects.component.scss */ "./src/app/components/projects/projects.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"],
            src_app_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mt-2\">\n  <mat-card-title class=\"d-flex align-items-center flex-column mb-3 mt-2\">\n    <app-logo [size]=\"40\" class=\"mb-3\"></app-logo>\n    <h2>注册</h2>\n  </mat-card-title>\n  <mat-card-subtitle class=\"text-center mb-4\">\n    <p>在ProjectHub轻松实现需求与开发完美对接</p>\n  </mat-card-subtitle>\n\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n    <mat-card-content>\n      <!-- 邮箱 -->\n      <div class=\"form-item\">\n        <label>邮 箱</label>\n        <input type=\"email\" formControlName=\"email\" required placeholder=\"请输入邮箱\">\n      </div>\n      <mat-error *ngIf=\"email.invalid && (email.dirty || email.touched)\">\n        <div *ngIf=\"email.getError('required') Else emailInvaildTpl\">\n          请输入邮箱\n        </div>\n        <ng-template #emailInvaildTpl>请输入正确邮箱格式</ng-template>\n      </mat-error>\n      <form formGroupName=\"pwd\">\n        <!-- 密码 -->\n        <div class=\"form-item\">\n          <label>密 码</label>\n          <input type=\"password\" formControlName=\"password\" required minlength=\"6\" placeholder=\"请输入6~15位的密码\">\n        </div>\n        <mat-error *ngIf=\"password.invalid && (password.dirty || password.touched)\">\n          <div *ngIf=\"password.getError('required')\">\n            请输入密码\n          </div>\n          <div *ngIf=\"password.getError('minlength')\">\n            密码不可小于6位\n          </div>\n          <div *ngIf=\"password.getError('maxlength')\">\n            密码不可大于15位\n          </div>\n        </mat-error>\n        <!-- 确认密码 -->\n        <div class=\"form-item\">\n          <label>确认密码</label>\n          <input type=\"password\" formControlName=\"password2\" required minlength=\"6\" placeholder=\"请确认密码\">\n        </div>\n        <mat-error *ngIf=\"pwd.invalid && password.valid && (password2.dirty || password2.touched)\">\n          {{ pwd.getError('notEqual') }}\n        </mat-error>\n      </form>\n      <form formGroupName=\"profile\">\n        <!-- 昵称 -->\n        <div class=\"form-item\">\n          <label>昵 称</label>\n          <input type=\"text\" formControlName=\"name\" required maxlength=\"10\" placeholder=\"请输入昵称，不得大于10个字符\">\n        </div>\n        <mat-error *ngIf=\"name.invalid && (name.dirty || name.touched)\">\n          <div *ngIf=\"name.getError('required')\">\n            请输入昵称\n          </div>\n        </mat-error>\n        <!-- 手机号 -->\n        <div class=\"form-item\">\n          <label>手机号</label>\n          <input type=\"phone\" formControlName=\"phone\" required maxlength=\"11\" placeholder=\"请输入手机号\">\n        </div>\n        <mat-error *ngIf=\"phone.invalid && (phone.dirty || phone.touched)\">\n          <div *ngIf=\"phone.getError('required')\">\n            请输入手机号\n          </div>\n          <div *ngIf=\"phone.getError('pattern')\">\n            请输入正确手机号\n          </div>\n        </mat-error>\n      </form>\n      <!-- 身份 -->\n      <div class=\"form-item\">\n        <label>选择身份</label>\n        <mat-radio-group formControlName=\"role\" required>\n          <mat-radio-button [value]=\"2\">我是产品经理</mat-radio-button>\n          &nbsp;&nbsp;&nbsp;&nbsp;\n          <mat-radio-button [value]=\"3\">我是开发者</mat-radio-button>\n        </mat-radio-group>\n      </div>\n    </mat-card-content>\n    <mat-card-actions class=\"d-flex align-items-center justify-content-between\">\n      <a mat-button color=\"primary\" [routerLink]=\"['/sub/login']\" [queryParams]=\"{title: '登录'}\">去登录</a>\n      <!-- <button mat-raised-button color=\"primary\" type=\"submit\"> -->\n        <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"registerForm.invalid\">\n        注册\n      </button>\n    </mat-card-actions>\n  </form>\n\n  <p class=\"copyright\">Copyright © 2019 ProjectHub </p>\n</mat-card>"

/***/ }),

/***/ "./src/app/components/register/register.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form .form-item label {\n  flex: 0 0 70px; }\n\nmat-error {\n  display: block;\n  margin-left: 70px;\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb25zb24vd29yay9teS1wcm9qZWN0L2dyYWR1YXRpb24tcHJvamVjdC9Qcm9qZWN0SHViL3Byb2otaHViL3NyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdNLGNBQWMsRUFBQTs7QUFLcEI7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xuICAuZm9ybS1pdGVtIHtcbiAgICBsYWJlbCB7XG4gICAgICBmbGV4OiAwIDAgNzBweDtcbiAgICB9XG4gIH1cbn1cblxubWF0LWVycm9yIHsgICAgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogNzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.8@@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@7.2.8@@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/_@angular_material@7.3.3@@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/_@angular_forms@7.2.8@@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_validators_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/validators/validators */ "./src/app/validators/validators.ts");
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/user.service */ "./src/app/service/user.service.ts");








var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router, snackBar, fb, userSrv) {
        this.authService = authService;
        this.router = router;
        this.snackBar = snackBar;
        this.fb = fb;
        this.userSrv = userSrv;
    }
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () {
            return this.registerForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () {
            return this.registerForm.get('pwd.password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password2", {
        get: function () {
            return this.registerForm.get('pwd.password2');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "pwd", {
        get: function () {
            return this.registerForm.get('pwd');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "name", {
        get: function () {
            return this.registerForm.get('profile').get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "phone", {
        get: function () {
            return this.registerForm.get('profile').get('phone');
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.fb.group({
            email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email
                ]],
            pwd: this.fb.group({
                password: ['', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(15)
                    ]],
                password2: ['', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    ]]
            }, { validator: src_app_validators_validators__WEBPACK_IMPORTED_MODULE_6__["passwordEqulaValidator"] }),
            role: [3, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            create_time: [new Date()],
            profile: this.fb.group({
                name: ['', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(10)
                    ]],
                phone: ['', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^1(3|4|5|6|7|8|9)\d{9}$/)
                    ]],
            })
        });
        // this.registerForm = this.fb.group({
        //   email: ['dev1@ph.com', [
        //     Validators.required,
        //     Validators.email
        //   ]],
        //   pwd: this.fb.group({
        //     password: ['123123', [
        //       Validators.required,
        //       Validators.minLength(6),
        //       Validators.maxLength(15)
        //     ]],
        //     password2: ['123123', [
        //       Validators.required,
        //     ]]
        //   }, { validator: passwordEqulaValidator }),
        //   role: [3, [Validators.required]],
        //   create_time: [new Date()],
        //   profile: this.fb.group({
        //     name: ['dev1', [
        //       Validators.required,
        //       Validators.maxLength(10)
        //     ]],
        //     phone: ['17812312312', [
        //       Validators.required,
        //       Validators.pattern(/^1(3|4|5|6|7|8|9)\d{9}$/)
        //     ]],
        //   })
        // })
    };
    // 提交
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        var formData = this.registerForm.value;
        var newUser = {
            email: formData.email,
            password: formData.pwd.password,
            password2: formData.pwd.password2,
            role: formData.role,
            profile: formData.profile,
        };
        this.userSrv.register(newUser).subscribe(function (res) {
            _this.snackBar.open(res.msg);
            if (res.code === 0) {
                _this.router.navigate(['sub/login']);
            }
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ../login/login.component.scss */ "./src/app/components/login/login.component.scss"), __webpack_require__(/*! ./register.component.scss */ "./src/app/components/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            src_app_service_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"userInfo\">\n  <mat-card-title class=\"d-flex align-items-center flex-column mb-3\">\n    <img class=\"avatar\"\n      (click)=\"handleChooseImg()\"\n      *ngIf=\"userInfo.profile.avatar as avatar\"\n      [src]=\"avatar\">\n    <input type=\"file\"\n      id=\"avatar-input\"\n      hidden\n      (change)=\"uploadImg($event)\" />\n    <h2>\n      {{userInfo.profile.name}}\n    </h2>\n    <p class=\"text-center\">{{userInfo.profile.desc}}</p>\n  </mat-card-title>\n  <mat-list>\n    <mat-divider></mat-divider>\n    <h3 matSubheader>信息</h3>\n    <mat-list-item>\n      <mat-icon matListIcon>account_circle</mat-icon>\n      <h3 mat-line>{{userInfo.role | userRole}}</h3>\n    </mat-list-item>\n    <mat-list-item>\n      <mat-icon matListIcon>email</mat-icon>\n      <h3 mat-line>{{userInfo.email}}</h3>\n    </mat-list-item>\n    <mat-list-item>\n      <mat-icon matListIcon>phone</mat-icon>\n      <h3 mat-line>{{userInfo.profile.phone}}</h3>\n    </mat-list-item>\n  </mat-list>\n  <mat-list *ngIf=\"selfProfile\">\n    <h3 matSubheader>功能</h3>\n    <mat-nav-list>\n      <a mat-list-item\n        (click)=\"openChangeInfo()\">\n        <!-- <mat-icon matListIcon>edit</mat-icon> -->\n        <mat-icon matListIcon>settings</mat-icon>\n        <h3 mat-line>修改信息</h3>\n      </a>\n      <a mat-list-item\n        (click)=\"openChangePwd()\">\n        <mat-icon matListIcon>security</mat-icon>\n        <h3 mat-line>修改密码</h3>\n      </a>\n    </mat-nav-list>\n    <h3 matSubheader>功能</h3>\n    <mat-nav-list *ngIf=\"userInfo.role !== 3\">\n      <a mat-list-item>\n        <mat-icon matListIcon>settings</mat-icon>\n        <h3 mat-line>我发布的项目</h3>\n      </a>\n    </mat-nav-list>\n  </mat-list>\n\n</mat-card>\n<button *ngIf=\"selfProfile\"\n  class=\"mt-3\"\n  mat-raised-button\n  color=\"warn\"\n  block\n  (click)=\"handleLoginOut()\">退出登录</button>"

/***/ }),

/***/ "./src/app/components/user/user.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card-title img.avatar {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  border: 1px solid #aaa; }\n\nmat-card-title h2 {\n  margin: 15px 0; }\n\nmat-card-title p {\n  color: #ccc;\n  font-size: 13px; }\n\nmat-list {\n  margin: 0 -16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb25zb24vd29yay9teS1wcm9qZWN0L2dyYWR1YXRpb24tcHJvamVjdC9Qcm9qZWN0SHViL3Byb2otaHViL3NyYy9hcHAvY29tcG9uZW50cy91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBQTs7QUFOMUI7RUFTSSxjQUFjLEVBQUE7O0FBVGxCO0VBWUksV0FBVztFQUNYLGVBQWUsRUFBQTs7QUFJbkI7RUFDRSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkLXRpdGxlIHtcblxuICBpbWcuYXZhdGFyIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XG4gIH1cbiAgaDIge1xuICAgIG1hcmdpbjogMTVweCAwO1xuICB9XG4gIHAge1xuICAgIGNvbG9yOiAjY2NjO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxufVxuXG5tYXQtbGlzdCB7XG4gIG1hcmdpbjogMCAtMTZweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent, ChangePwdBottomSheet, ChangeInfoBottomSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePwdBottomSheet", function() { return ChangePwdBottomSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeInfoBottomSheet", function() { return ChangeInfoBottomSheet; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.8@@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@7.2.8@@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/_rxjs@6.3.3@rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/_@angular_material@7.3.3@@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/_@angular_forms@7.2.8@@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_service_upload_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/upload.service */ "./src/app/service/upload.service.ts");









var UserComponent = /** @class */ (function () {
    function UserComponent(userSrv, router, route, authService, bottomSheet, elementRef, uploadSrv, snackBar) {
        this.userSrv = userSrv;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.bottomSheet = bottomSheet;
        this.elementRef = elementRef;
        this.uploadSrv = uploadSrv;
        this.snackBar = snackBar;
        this.selfProfile = true;
    }
    UserComponent.prototype.ngOnInit = function () {
        console.log('user oninit');
        this.handleGetUserInfo();
    };
    // 获取用户信息
    UserComponent.prototype.handleGetUserInfo = function () {
        var _this = this;
        this.route.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (params) {
            return params['id'];
        })).subscribe(function (id) {
            _this.selfProfile = true;
            // 如果是查看别人的 profile 则设置 selfProfile 为 false
            if (id)
                _this.selfProfile = false;
            // 获取用户信息
            _this.userSrv.getUserInfo(id).subscribe(function (res) {
                _this.userInfo = res.data;
            });
        });
    };
    // 退出登录
    UserComponent.prototype.handleLoginOut = function () {
        this.authService.logout();
    };
    // 修改信息
    UserComponent.prototype.openChangeInfo = function () {
        var _this = this;
        var bs = this.bottomSheet.open(ChangeInfoBottomSheet);
        bs.afterDismissed().subscribe(function () {
            _this.handleGetUserInfo();
        });
    };
    // 修改密码
    UserComponent.prototype.openChangePwd = function () {
        this.bottomSheet.open(ChangePwdBottomSheet);
    };
    // 选择图片
    UserComponent.prototype.handleChooseImg = function () {
        var input = this.elementRef.nativeElement.querySelector("#avatar-input");
        input.click();
    };
    // 头像上传
    UserComponent.prototype.uploadImg = function (e) {
        var _this = this;
        var input = this.elementRef.nativeElement.querySelector("#avatar-input");
        var file = e.target.files[0];
        console.log('file: ', file);
        this.uploadSrv.uploadImg(file).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            if (res.code === 0)
                return res.data;
        })).subscribe(function (path) {
            _this.userInfo.profile.avatar = 'api/' + path;
            _this.userSrv.updateUserInfo(_this.userInfo).subscribe(function (res) {
                if (res.code === 0) {
                    // 清空input
                    input.value = '';
                    _this.snackBar.open('头像更新成功');
                }
            });
        });
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/components/user/user.component.html"),
            providers: [],
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/components/user/user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheet"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            src_app_service_upload_service__WEBPACK_IMPORTED_MODULE_8__["UploadService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], UserComponent);
    return UserComponent;
}());

var ChangePwdBottomSheet = /** @class */ (function () {
    function ChangePwdBottomSheet(data, bottomSheetRef, fb, userSrv, authSrv) {
        this.data = data;
        this.bottomSheetRef = bottomSheetRef;
        this.fb = fb;
        this.userSrv = userSrv;
        this.authSrv = authSrv;
        this.pwdFrom = this.fb.group({
            oldPwd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            newPwd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            reNewPwd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
    }
    ChangePwdBottomSheet.prototype.onSubmit = function () {
        var _this = this;
        var form = this.pwdFrom.value;
        if (form.newPwd !== form.reNewPwd)
            return alert('两次密码不一致');
        this.userSrv.updatePassword(form.oldPwd, form.newPwd).subscribe(function (res) {
            if (res.code === 0) {
                alert('修改成功，请重新登录');
                _this.authSrv.logout();
                _this.bottomSheetRef.dismiss();
            }
        });
    };
    ChangePwdBottomSheet = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'change-pwd-bottom-sheet',
            template: "\n    <form [formGroup]=\"pwdFrom\" (ngSubmit)=\"onSubmit()\" style=\"padding: 30px 0;\">\n      <mat-form-field appearance=\"outline\">\n        <mat-label>\u539F\u5BC6\u7801</mat-label>\n        <input matInput formControlName=\"oldPwd\" required>\n        <mat-hint>10\u4E2A\u5B57\u4EE5\u5185</mat-hint>\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\">\n        <mat-label>\u65B0\u5BC6\u7801</mat-label>\n        <input matInput formControlName=\"newPwd\" required minlength=\"6\" maxlength=\"16\">\n        <mat-hint>10\u4E2A\u5B57\u4EE5\u5185</mat-hint>\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\">\n        <mat-label>\u91CD\u590D\u65B0\u5BC6\u7801</mat-label>\n        <input matInput formControlName=\"reNewPwd\" required minlength=\"6\" maxlength=\"16\">\n        <mat-hint>10\u4E2A\u5B57\u4EE5\u5185</mat-hint>\n      </mat-form-field>\n      <button class=\"mt-3\" mat-raised-button color=\"accent\" block type=\"submit\">\u786E\u8BA4\u4FEE\u6539</button>      \n    </form>\n  ",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_BOTTOM_SHEET_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheetRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ChangePwdBottomSheet);
    return ChangePwdBottomSheet;
}());

var ChangeInfoBottomSheet = /** @class */ (function () {
    function ChangeInfoBottomSheet(data, bottomSheetRef, fb, userSrv, authSrv) {
        this.data = data;
        this.bottomSheetRef = bottomSheetRef;
        this.fb = fb;
        this.userSrv = userSrv;
        this.authSrv = authSrv;
        this.profile = this.userSrv.userInfo.profile;
        this.infoFrom = this.fb.group({
            name: [this.userSrv.userInfo.profile.name, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            phone: [this.userSrv.userInfo.profile.phone, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(/^1(3|4|5|6|7|8|9)\d{9}$/)
                ]],
            desc: [this.userSrv.userInfo.profile.desc]
        });
    }
    ChangeInfoBottomSheet.prototype.onSubmit = function () {
        var _this = this;
        var form = this.infoFrom.value;
        this.userSrv.userInfo.profile.name = form.name;
        this.userSrv.userInfo.profile.phone = form.phone;
        this.userSrv.userInfo.profile.desc = form.desc;
        this.userSrv.updateUserInfo(this.userSrv.userInfo).subscribe(function (res) {
            if (res.code === 0) {
                alert('修改成功');
                _this.bottomSheetRef.dismiss();
            }
        });
    };
    ChangeInfoBottomSheet = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'change-info-overview-example-sheet',
            template: "\n    <form [formGroup]=\"infoFrom\" \n      (ngSubmit)=\"onSubmit()\" \n      style=\"padding: 30px 0;\">\n      <mat-form-field appearance=\"outline\">\n        <mat-label>\u6635\u79F0</mat-label>\n        <input matInput formControlName=\"name\" required maxlength=\"10\">\n        <mat-hint></mat-hint>\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\">\n        <mat-label>\u7535\u8BDD</mat-label>\n        <input matInput formControlName=\"phone\" required maxlength=\"11\">\n        <mat-hint></mat-hint>\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\">\n        <mat-label>\u7B80\u4ECB</mat-label>\n        <input matInput formControlName=\"desc\">\n        <mat-hint></mat-hint>\n      </mat-form-field>\n      <button class=\"mt-3\" mat-raised-button color=\"accent\" block type=\"submit\">\u786E\u8BA4\u4FEE\u6539</button>      \n    </form>\n  ",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_BOTTOM_SHEET_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheetRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ChangeInfoBottomSheet);
    return ChangeInfoBottomSheet;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.8@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/_@angular_material@7.3.3@@angular/material/esm5/material.es5.js");



var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
            ],
            providers: [
                // snack bar
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_SNACK_BAR_DEFAULT_OPTIONS"],
                    useValue: {
                        duration: 1000,
                        panelClass: 'white-bg',
                        verticalPosition: 'top'
                    }
                }
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "./src/app/models/Msg.ts":
/*!*******************************!*\
  !*** ./src/app/models/Msg.ts ***!
  \*******************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/**
 * @description 操作
 */
var Action;
(function (Action) {
    Action[Action["\u7BA1\u7406\u5458\u5BA1\u6838\u6D88\u606F"] = 0] = "\u7BA1\u7406\u5458\u5BA1\u6838\u6D88\u606F";
    Action[Action["\u5F00\u53D1\u8005\u7533\u8BF7\u63A5\u5355"] = 1] = "\u5F00\u53D1\u8005\u7533\u8BF7\u63A5\u5355";
    Action[Action["\u5F00\u53D1\u8005\u7533\u8BF7\u9A8C\u6536"] = 2] = "\u5F00\u53D1\u8005\u7533\u8BF7\u9A8C\u6536";
    Action[Action["\u5F00\u53D1\u8005\u7533\u8BF7\u7ED3\u6B3E"] = 3] = "\u5F00\u53D1\u8005\u7533\u8BF7\u7ED3\u6B3E";
})(Action || (Action = {}));


/***/ }),

/***/ "./src/app/models/Project.ts":
/*!***********************************!*\
  !*** ./src/app/models/Project.ts ***!
  \***********************************/
/*! exports provided: Audit, Status, StatusText, Color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Audit", function() { return Audit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusText", function() { return StatusText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/**
 * @description 审核状态
 */
var Audit;
(function (Audit) {
    Audit[Audit["\u672A\u5BA1\u6838"] = 0] = "\u672A\u5BA1\u6838";
    Audit[Audit["\u5BA1\u6838\u901A\u8FC7"] = 1] = "\u5BA1\u6838\u901A\u8FC7";
    Audit[Audit["\u5BA1\u6838\u4E0D\u901A\u8FC7"] = 2] = "\u5BA1\u6838\u4E0D\u901A\u8FC7";
})(Audit || (Audit = {}));
/**
 * @description 项目状态
 * 0：已发布，未接受
 * 1：已发布，已接受，开发中未交付
 * 3：已发布，已接受，已开发已交付，验收中未结款
 * 4：已发布，已接受，已开发已交付，已验收已结款
 *  */
var Status;
(function (Status) {
    Status[Status["\u65B0\u53D1\u5E03\u9879\u76EE"] = 0] = "\u65B0\u53D1\u5E03\u9879\u76EE";
    Status[Status["\u9879\u76EE\u5F00\u53D1\u4E2D"] = 1] = "\u9879\u76EE\u5F00\u53D1\u4E2D";
    Status[Status["\u9879\u76EE\u9A8C\u6536\u4E2D"] = 2] = "\u9879\u76EE\u9A8C\u6536\u4E2D";
    Status[Status["\u9879\u76EE\u5DF2\u7ED3\u6B3E"] = 3] = "\u9879\u76EE\u5DF2\u7ED3\u6B3E";
})(Status || (Status = {}));
var StatusText;
(function (StatusText) {
    StatusText[StatusText["\u9879\u76EE\u5DF2\u53D1\u5E03\uFF0C\u8FD8\u6CA1\u6709\u5F00\u53D1\u4EBA\u5458\u63A5\u5355"] = 0] = "\u9879\u76EE\u5DF2\u53D1\u5E03\uFF0C\u8FD8\u6CA1\u6709\u5F00\u53D1\u4EBA\u5458\u63A5\u5355";
    StatusText[StatusText["\u5DF2\u6709\u5F00\u53D1\u4EBA\u5458\u5BF9\u63A5\uFF0C\u9879\u76EE\u5F00\u53D1\u4E2D"] = 1] = "\u5DF2\u6709\u5F00\u53D1\u4EBA\u5458\u5BF9\u63A5\uFF0C\u9879\u76EE\u5F00\u53D1\u4E2D";
    StatusText[StatusText["\u5F00\u53D1\u4EBA\u5458\u5F00\u53D1\u5DF2\u5B8C\u6210\uFF0C\u9879\u76EE\u9A8C\u6536\u4E2D"] = 2] = "\u5F00\u53D1\u4EBA\u5458\u5F00\u53D1\u5DF2\u5B8C\u6210\uFF0C\u9879\u76EE\u9A8C\u6536\u4E2D";
    StatusText[StatusText["\u9879\u76EE\u5DF2\u5B8C\u6210"] = 3] = "\u9879\u76EE\u5DF2\u5B8C\u6210";
})(StatusText || (StatusText = {}));
/**
 * @description 项目状态的颜色
 */
var Color;
(function (Color) {
    Color[Color["warn"] = 0] = "warn";
    Color[Color["accent"] = 1] = "accent";
    Color[Color["primary"] = 2] = "primary";
    Color[Color["theme"] = 3] = "theme";
})(Color || (Color = {}));


/***/ }),

/***/ "./src/app/models/Skill.ts":
/*!*********************************!*\
  !*** ./src/app/models/Skill.ts ***!
  \*********************************/
/*! exports provided: Skill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skill", function() { return Skill; });
var Skill;
(function (Skill) {
    Skill[Skill["Html"] = 0] = "Html";
    Skill[Skill["Css"] = 1] = "Css";
    Skill[Skill["JavaScript"] = 2] = "JavaScript";
    Skill[Skill["TypeScript"] = 3] = "TypeScript";
    Skill[Skill["Vue"] = 4] = "Vue";
    Skill[Skill["Angular"] = 5] = "Angular";
    Skill[Skill["React"] = 6] = "React";
    Skill[Skill["Bootstrap"] = 7] = "Bootstrap";
})(Skill || (Skill = {}));


/***/ }),

/***/ "./src/app/models/User.ts":
/*!********************************!*\
  !*** ./src/app/models/User.ts ***!
  \********************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
// 用户身份
var Role;
(function (Role) {
    Role[Role["admin"] = 1] = "admin";
    Role[Role["demander"] = 2] = "demander";
    Role[Role["developer"] = 3] = "developer";
})(Role || (Role = {}));


/***/ }),

/***/ "./src/app/pipes/common.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/common.pipe.ts ***!
  \**************************************/
/*! exports provided: ArrayPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayPipe", function() { return ArrayPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.8@@angular/core/fesm5/core.js");


var ArrayPipe = /** @class */ (function () {
    function ArrayPipe() {
    }
    ArrayPipe.prototype.transform = function (value) {
        return value && value.split(',');
    };
    ArrayPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'array' })
    ], ArrayPipe);
    return ArrayPipe;
}());



/***/ }),

/***/ "./src/app/pipes/project.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/project.pipe.ts ***!
  \***************************************/
/*! exports provided: ProjectStatusPipe, ProjectStatusPipeText, ProjectColorPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectStatusPipe", function() { return ProjectStatusPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectStatusPipeText", function() { return ProjectStatusPipeText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectColorPipe", function() { return ProjectColorPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.8@@angular/core/fesm5/core.js");
/* harmony import */ var _models_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Project */ "./src/app/models/Project.ts");



// 返回项目状态名称
var ProjectStatusPipe = /** @class */ (function () {
    function ProjectStatusPipe() {
    }
    ProjectStatusPipe.prototype.transform = function (value) {
        return _models_Project__WEBPACK_IMPORTED_MODULE_2__["Status"][value];
    };
    ProjectStatusPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'projectStatus' })
    ], ProjectStatusPipe);
    return ProjectStatusPipe;
}());

// 返回项目状态详细
var ProjectStatusPipeText = /** @class */ (function () {
    function ProjectStatusPipeText() {
    }
    ProjectStatusPipeText.prototype.transform = function (value) {
        return _models_Project__WEBPACK_IMPORTED_MODULE_2__["StatusText"][value];
    };
    ProjectStatusPipeText = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'projectStatusText' })
    ], ProjectStatusPipeText);
    return ProjectStatusPipeText;
}());

// 返回项目颜色
var ProjectColorPipe = /** @class */ (function () {
    function ProjectColorPipe() {
    }
    ProjectColorPipe.prototype.transform = function (value) {
        return _models_Project__WEBPACK_IMPORTED_MODULE_2__["Color"][value];
    };
    ProjectColorPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'projectColor' })
    ], ProjectColorPipe);
    return ProjectColorPipe;
}());



/***/ }),

/***/ "./src/app/pipes/skill.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pipes/skill.pipe.ts ***!
  \*************************************/
/*! exports provided: SkillPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillPipe", function() { return SkillPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.8@@angular/core/fesm5/core.js");
/* harmony import */ var _models_Skill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Skill */ "./src/app/models/Skill.ts");



var SkillPipe = /** @class */ (function () {
    function SkillPipe() {
    }
    SkillPipe.prototype.transform = function (value) {
        return _models_Skill__WEBPACK_IMPORTED_MODULE_2__["Skill"][value];
    };
    SkillPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'skill' })
    ], SkillPipe);
    return SkillPipe;
}());



/***/ }),

/***/ "./src/app/pipes/user.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/user.pipe.ts ***!
  \************************************/
/*! exports provided: UserRolePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRolePipe", function() { return UserRolePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.8@@angular/core/fesm5/core.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/User */ "./src/app/models/User.ts");



var UserRolePipe = /** @class */ (function () {
    function UserRolePipe() {
    }
    UserRolePipe.prototype.transform = function (value, args) {
        return _models_User__WEBPACK_IMPORTED_MODULE_2__["Role"][value];
    };
    UserRolePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'userRole'
        })
    ], UserRolePipe);
    return UserRolePipe;
}());



/***/ }),

/***/ "./src/app/router/app-routing.module.ts":
/*!**********************************************!*\
  !*** ./src/app/router/app-routing.module.ts ***!
  \**********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.8@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@7.2.8@@angular/router/fesm5/router.js");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/project-detail/project-detail.component */ "./src/app/components/project-detail/project-detail.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _common_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/home-page/home-page.component */ "./src/app/common/home-page/home-page.component.ts");
/* harmony import */ var _common_sub_page_sub_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/sub-page/sub-page.component */ "./src/app/common/sub-page/sub-page.component.ts");
/* harmony import */ var _components_project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/project-edit/project-edit.component */ "./src/app/components/project-edit/project-edit.component.ts");
/* harmony import */ var _components_msg_msg_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/msg/msg.component */ "./src/app/components/msg/msg.component.ts");














var routes = [
    {
        path: 'home',
        component: _common_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__["HomePageComponent"],
        children: [
            {
                path: 'projects',
                component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"]
            },
            {
                path: 'msgs',
                component: _components_msg_msg_component__WEBPACK_IMPORTED_MODULE_13__["MsgComponent"],
                canActivate: [_service_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
            },
            {
                path: 'user',
                component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"],
                canActivate: [_service_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
            },
        ]
    },
    {
        path: 'sub',
        component: _common_sub_page_sub_page_component__WEBPACK_IMPORTED_MODULE_11__["SubPageComponent"],
        children: [
            {
                path: 'project/:id',
                component: _components_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_5__["ProjectDetailComponent"],
                canActivate: [_service_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
            },
            {
                path: 'project-edit/:id',
                component: _components_project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_12__["ProjectEditComponent"],
                canActivate: [_service_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
                // HostGuard
                data: {
                    title: '编辑项目需求'
                },
            },
            {
                path: 'register',
                component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                data: {
                    title: '注册'
                }
            },
            {
                path: 'login',
                component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                data: {
                    title: '登录'
                }
            },
        ]
    },
    {
        path: '',
        redirectTo: 'home/projects',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"],
        data: {
            title: '404 Not Found'
        }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/service/AuthInterceptor.ts":
/*!********************************************!*\
  !*** ./src/app/service/AuthInterceptor.ts ***!
  \********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.8@@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/_rxjs@6.3.3@rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/_rxjs@6.3.3@rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router_7_2_8_angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! _@angular_router@7.2.8@@angular/router */ "./node_modules/_@angular_router@7.2.8@@angular/router/fesm5/router.js");





var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(router) {
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var token = localStorage.getItem('ph-token') ? localStorage.getItem('ph-token') : '';
        var clonedRequest = req.clone({
            headers: req.headers.set("Authorization", token)
        });
        return next.handle(clonedRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (event) {
            // console.log('event: ', event);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(event);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            switch (err.status) {
                // case 200:
                case 401: // 未登录状态码
                    alert('身份信息过期，请重新登录');
                    _this.router.navigate(['/sub/login']);
                // case 404:
                // case 500:
                default:
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(event);
            }
        }));
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router_7_2_8_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService, AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.8@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@7.2.8@@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/_@angular_common@7.2.8@@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/service/user.service.ts");





var AuthService = /** @class */ (function () {
    function AuthService(http, userSrv, router) {
        var _this = this;
        this.http = http;
        this.userSrv = userSrv;
        this.router = router;
        this.loginState = false;
        this.redirectUrl = 'home/projects';
        // 查看cookie中是否有登录信息
        if (localStorage.getItem('ph-token')) {
            this.userSrv.getUserInfo().subscribe(function (user) {
                _this.loginState = true;
                console.log('login');
                // this.userSrv.login(user).subscribe()
            });
        }
    }
    // 获取登录状态
    AuthService.prototype.getAuthState = function () {
        return this.loginState;
    };
    AuthService.prototype.logout = function () {
        var myConfirm = confirm('确定退出登录？');
        if (myConfirm) {
            localStorage.removeItem('ph-token');
            this.router.navigate(['sub/login']);
        }
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());

// auth guard
var AuthGuard = /** @class */ (function () {
    function AuthGuard(authSrv, router, userSrv) {
        this.authSrv = authSrv;
        this.router = router;
        this.userSrv = userSrv;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        // 如果已登录，不守卫
        if (localStorage.getItem('ph-token') || this.authSrv.getAuthState() || this.userSrv.userInfo)
            return true;
        // 分割出params，不然会报错
        var redirectUrl = state.url.split('?')[0];
        // 保存进入前的路由
        this.authSrv.redirectUrl = redirectUrl;
        console.log('进入前的路由: ', redirectUrl);
        this.router.navigate(['/sub/login']);
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [AuthService,
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/service/dashboard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/dashboard.service.ts ***!
  \**********************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.8@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/_@angular_common@7.2.8@@angular/common/fesm5/http.js");



var DashboardService = /** @class */ (function () {
    function DashboardService(http) {
        this.http = http;
    }
    DashboardService.prototype.addPageView = function () {
        return this.http.post('/api/dashboard', {});
    };
    DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/service/msg.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/msg.service.ts ***!
  \****************************************/
/*! exports provided: MsgService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgService", function() { return MsgService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.8@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/_@angular_common@7.2.8@@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/_@angular_material@7.3.3@@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/_rxjs@6.3.3@rxjs/_esm5/operators/index.js");






var MsgService = /** @class */ (function () {
    function MsgService(http, userSrv, snackBar) {
        this.http = http;
        this.userSrv = userSrv;
        this.snackBar = snackBar;
        this.unReadMsg = 0; // 未读消息数量
    }
    // 获取用户消息
    MsgService.prototype.getMsgs = function () {
        var _this = this;
        return this.http.get('api/msg').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            _this.unReadMsg = res.data.filter(function (i) { return !i.checked; }).length;
            _this.snackBar.open(res.msg);
        }));
    };
    // 推送消息
    MsgService.prototype.sendMsg = function (data) {
        var _this = this;
        if (data.action && data.action !== undefined) {
            data.isAction = true;
        }
        return this.http.post('api/msg', data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            if (data.isAction) {
                _this.snackBar.open(res.msg);
            }
        }));
    };
    // 消息已读
    MsgService.prototype.readMsg = function (mid) {
        return this.http.patch("api/msg/" + mid, {});
    };
    // 删除已读
    MsgService.prototype.delReadMsg = function () {
        var _this = this;
        return this.http.delete("api/msg/", {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            _this.snackBar.open(res.msg);
        }));
    };
    MsgService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], MsgService);
    return MsgService;
}());



/***/ }),

/***/ "./src/app/service/project.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/project.service.ts ***!
  \********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.8@@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/_rxjs@6.3.3@rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/_@angular_common@7.2.8@@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/_rxjs@6.3.3@rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/_@angular_material@7.3.3@@angular/material/esm5/material.es5.js");







var ProjectService = /** @class */ (function () {
    function ProjectService(http, userSrv, snackBar) {
        this.http = http;
        this.userSrv = userSrv;
        this.snackBar = snackBar;
    }
    // 获取全部project
    ProjectService.prototype.getProjects = function () {
        var _this = this;
        return this.http.get('api/project').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            _this.snackBar.open(res.msg);
        }));
    };
    // 获取单个project详情
    ProjectService.prototype.getProject = function (id) {
        return this.http.get("api/project/" + id);
        // .pipe(
        //   tap((res: ResTpl) => {
        //     this.snackBar.open(res.msg);
        //   })
        // )
    };
    // 设置title
    ProjectService.prototype.setTitle = function (title) {
        this.projectTitle = title;
    };
    // 获取title
    ProjectService.prototype.getTitle = function () {
        var _this = this;
        // 创建一个Observable对象，subpage订阅值
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            if (_this.projectTitle) {
                observer.next(_this.projectTitle);
                observer.complete();
            }
            return { unsubscribe: function () { } };
        });
    };
    // 发布项目
    ProjectService.prototype.addProject = function (data) {
        return this.http.post('api/project', data);
    };
    // 更新项目信息
    ProjectService.prototype.updateProject = function (pid, data) {
        var _this = this;
        return this.http.patch("api/project/" + pid, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            _this.snackBar.open(res.msg);
        }));
    };
    // 更新项目评论
    ProjectService.prototype.addProjectComment = function (pid, content) {
        var _this = this;
        var obj = {
            content: content
        };
        return this.http.patch("api/project/" + pid, obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            _this.snackBar.open(res.msg);
        }));
    };
    // 更新项目状态
    ProjectService.prototype.updateProjectStatus = function (pid, status, dev_user) {
        var _this = this;
        var obj = {
            status: status,
            dev_user: dev_user,
        };
        return this.http.patch("api/project/" + pid, obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            _this.snackBar.open(res.msg);
        }));
    };
    ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/service/skill.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/skill.service.ts ***!
  \******************************************/
/*! exports provided: SkillService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillService", function() { return SkillService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.8@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/_@angular_common@7.2.8@@angular/common/fesm5/http.js");



var SkillService = /** @class */ (function () {
    function SkillService(http) {
        this.http = http;
    }
    SkillService.prototype.getSkills = function () {
        return this.http.get('/api/skill');
    };
    SkillService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SkillService);
    return SkillService;
}());



/***/ }),

/***/ "./src/app/service/upload.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/upload.service.ts ***!
  \*******************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.8@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/_@angular_common@7.2.8@@angular/common/fesm5/http.js");



var UploadService = /** @class */ (function () {
    function UploadService(http) {
        this.http = http;
    }
    UploadService.prototype.uploadImg = function (img) {
        var data = new FormData();
        data.append('files', img);
        return this.http.post('/api/upload/img', data);
    };
    UploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./src/app/service/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.9.3@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.8@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/_@angular_common@7.2.8@@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/_rxjs@6.3.3@rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/_@angular_material@7.3.3@@angular/material/esm5/material.es5.js");





var UserService = /** @class */ (function () {
    function UserService(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
    }
    // 用户注册
    UserService.prototype.register = function (user) {
        return this.http.post('/api/user/register', user);
    };
    // 用户登录
    UserService.prototype.login = function (user) {
        var _this = this;
        return this.http.post('/api/user/login', user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            if (res.code === 0) {
                _this.setUserInfo(res.data);
            }
        }));
    };
    UserService.prototype.setUserInfo = function (user) {
        this.userInfo = user;
    };
    // 获取用户信息
    UserService.prototype.getUserInfo = function (id) {
        var _this = this;
        if (id) {
            return this.http.get("/api/user/" + id);
        }
        else {
            return this.http.get("/api/user/self").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
                if (res.code === 0) {
                    _this.userInfo = res.data;
                }
            }));
        }
    };
    // 更新信息
    UserService.prototype.updateUserInfo = function (data) {
        var _this = this;
        return this.http.patch("api/user/" + this.userInfo._id, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            _this.snackBar.open(res.msg);
            if (res.code === 0)
                _this.userInfo = res.data;
        }));
    };
    // 修改密码
    UserService.prototype.updatePassword = function (oldPwd, newPwd) {
        var _this = this;
        var data = {
            oldPwd: oldPwd,
            newPwd: newPwd
        };
        return this.http.patch("api/user/password/" + 'updatePassword', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            _this.snackBar.open(res.msg);
            console.log('res: ', res);
        }));
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/validators/validators.ts":
/*!******************************************!*\
  !*** ./src/app/validators/validators.ts ***!
  \******************************************/
/*! exports provided: passwordValidator, passwordEqulaValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordValidator", function() { return passwordValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordEqulaValidator", function() { return passwordEqulaValidator; });
function passwordValidator(control) {
    var reg = /[0-9]/;
    return reg.test(control.value) ? null : { passwordError: '密码只能是数字' };
}
function passwordEqulaValidator(group) {
    var password = group.get('password');
    var password2 = group.get('password2');
    return password.value === password2.value ? null : { notEqual: '两次密码不一致' };
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.8@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/_@angular_platform-browser-dynamic@7.2.8@@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/_hammerjs@2.0.8@hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jonson/work/my-project/graduation-project/ProjectHub/proj-hub/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map