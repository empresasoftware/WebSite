"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var AuthSignupPageComponent = /** @class */ (function () {
    function AuthSignupPageComponent() {
    }
    AuthSignupPageComponent.prototype.redirectAccount = function () {
        console.log('Do facebook signup');
    };
    AuthSignupPageComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-auth-signup-page',
            templateUrl: './auth-signup-page.component.html',
            styleUrls: [
                './styles/auth-signup-page.styles.scss'
            ],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AuthSignupPageComponent);
    return AuthSignupPageComponent;
}());
exports.AuthSignupPageComponent = AuthSignupPageComponent;
//# sourceMappingURL=auth-signup-page.component.js.map