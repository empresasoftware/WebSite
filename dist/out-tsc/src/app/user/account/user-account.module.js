"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var shared_1 = require("../../shared");
var __1 = require("../");
var auth_service_1 = require("../../auth/services/auth.service");
var user_account_page_component_1 = require("./components/account-page/user-account-page.component");
var user_account_page_resolver_1 = require("./resolvers/user-account-page.resolver");
exports.userAccountRoutes = [
    {
        path: '',
        component: user_account_page_component_1.UserAccountPageComponent,
        resolve: {
            data: user_account_page_resolver_1.UserAccountPageResolver
        },
        canActivate: [auth_service_1.AuthService]
    }
];
var UserAccountModule = /** @class */ (function () {
    function UserAccountModule() {
    }
    UserAccountModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                user_account_page_component_1.UserAccountPageComponent
            ],
            imports: [
                router_1.RouterModule.forChild(exports.userAccountRoutes),
                common_1.CommonModule,
                shared_1.SharedModule,
                __1.UserSharedModule
            ],
            providers: [
                user_account_page_resolver_1.UserAccountPageResolver
            ]
        })
    ], UserAccountModule);
    return UserAccountModule;
}());
exports.UserAccountModule = UserAccountModule;
//# sourceMappingURL=user-account.module.js.map