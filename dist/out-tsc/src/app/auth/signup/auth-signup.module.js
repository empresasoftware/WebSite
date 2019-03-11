"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_signup_page_component_1 = require("./components/signup-page/auth-signup-page.component");
var auth_signup_page_resolver_1 = require("./resolvers/auth-signup-page.resolver");
var __1 = require("../");
exports.authSignupRoutes = [
    {
        path: '',
        component: auth_signup_page_component_1.AuthSignupPageComponent,
        resolve: {
            data: auth_signup_page_resolver_1.AuthSignupPageResolver
        }
    }
];
var AuthSignupModule = /** @class */ (function () {
    function AuthSignupModule() {
    }
    AuthSignupModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                auth_signup_page_component_1.AuthSignupPageComponent
            ],
            imports: [
                router_1.RouterModule.forChild(exports.authSignupRoutes),
                __1.AuthSharedModule
            ],
            providers: [
                auth_signup_page_resolver_1.AuthSignupPageResolver
            ]
        })
    ], AuthSignupModule);
    return AuthSignupModule;
}());
exports.AuthSignupModule = AuthSignupModule;
//# sourceMappingURL=auth-signup.module.js.map