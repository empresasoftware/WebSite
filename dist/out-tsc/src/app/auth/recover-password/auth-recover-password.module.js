"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_recover_password_page_component_1 = require("./components/recover-password-page/auth-recover-password-page.component");
var auth_recover_password_page_resolver_1 = require("./resolvers/auth-recover-password-page.resolver");
var __1 = require("../");
exports.authRecoverPasswordRoutes = [
    {
        path: '',
        component: auth_recover_password_page_component_1.AuthRecoverPasswordPageComponent,
        resolve: {
            data: auth_recover_password_page_resolver_1.AuthRecoverPasswordPageResolver
        }
    }
];
var AuthRecoverPasswordModule = /** @class */ (function () {
    function AuthRecoverPasswordModule() {
    }
    AuthRecoverPasswordModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                auth_recover_password_page_component_1.AuthRecoverPasswordPageComponent
            ],
            imports: [
                router_1.RouterModule.forChild(exports.authRecoverPasswordRoutes),
                __1.AuthSharedModule
            ],
            providers: [
                auth_recover_password_page_resolver_1.AuthRecoverPasswordPageResolver
            ]
        })
    ], AuthRecoverPasswordModule);
    return AuthRecoverPasswordModule;
}());
exports.AuthRecoverPasswordModule = AuthRecoverPasswordModule;
//# sourceMappingURL=auth-recover-password.module.js.map