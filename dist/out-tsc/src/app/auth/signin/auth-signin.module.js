"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_signin_page_component_1 = require("./components/signin-page/auth-signin-page.component");
var auth_signin_page_resolver_1 = require("./resolvers/auth-signin-page.resolver");
var __1 = require("../");
exports.authSigninRoutes = [
    {
        path: '',
        component: auth_signin_page_component_1.AuthSigninPageComponent,
        resolve: {
            data: auth_signin_page_resolver_1.AuthSigninPageResolver
        }
    }
];
var AuthSigninModule = /** @class */ (function () {
    function AuthSigninModule() {
    }
    AuthSigninModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                auth_signin_page_component_1.AuthSigninPageComponent
            ],
            imports: [
                router_1.RouterModule.forChild(exports.authSigninRoutes),
                __1.AuthSharedModule
            ],
            providers: [
                auth_signin_page_resolver_1.AuthSigninPageResolver
            ]
        })
    ], AuthSigninModule);
    return AuthSigninModule;
}());
exports.AuthSigninModule = AuthSigninModule;
//# sourceMappingURL=auth-signin.module.js.map