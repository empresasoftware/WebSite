"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var AuthSigninPageComponent = /** @class */ (function () {
    function AuthSigninPageComponent() {
    }
    AuthSigninPageComponent.prototype.redirectAccount = function () {
        console.log('Do facebook login');
    };
    AuthSigninPageComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-auth-signin-page',
            templateUrl: './auth-signin-page.component.html',
            styleUrls: [
                './styles/auth-signin-page.styles.scss'
            ],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AuthSigninPageComponent);
    return AuthSigninPageComponent;
}());
exports.AuthSigninPageComponent = AuthSigninPageComponent;
//# sourceMappingURL=auth-signin-page.component.js.map