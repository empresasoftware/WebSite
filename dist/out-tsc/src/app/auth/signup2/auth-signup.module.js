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
var AuthSignup2Module = /** @class */ (function () {
    function AuthSignup2Module() {
    }
    AuthSignup2Module = tslib_1.__decorate([
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
    ], AuthSignup2Module);
    return AuthSignup2Module;
}());
exports.AuthSignup2Module = AuthSignup2Module;
//# sourceMappingURL=auth-signup.module.js.map