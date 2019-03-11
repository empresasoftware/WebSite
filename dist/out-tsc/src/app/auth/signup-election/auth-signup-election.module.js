"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var module_1 = require();
exports.AuthSignup = module_1.AuthSignup;
from;
"./components/signup-page/AuthSignup-electionPageComponent.component";
from;
'./resolvers/auth-signup-page.resolver';
var __1 = require("..");
exports.authSignupRoutes = [
    {
        path: '',
        component: module_1.AuthSignup - electionPageComponent,
        resolve: {
            data: module_1.AuthSignup - electionPageResolver
        }
    }
];
var AuthSignup = /** @class */ (function () {
    function AuthSignup() {
    }
    AuthSignup_1 = AuthSignup;
    var AuthSignup_1;
    AuthSignup = AuthSignup_1 = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                AuthSignup_1 - electionPageComponent
            ],
            imports: [
                router_1.RouterModule.forChild(exports.authSignupRoutes),
                __1.AuthSharedModule
            ],
            providers: [
                AuthSignup_1 - electionPageResolver
            ]
        })
    ], AuthSignup);
    return AuthSignup;
}());
exports.AuthSignup = AuthSignup;
-electionModule;
{ }
//# sourceMappingURL=auth-signup-election.module.js.map