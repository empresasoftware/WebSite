"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var modal_1 = require("ngx-bootstrap/modal");
var AuthSigninModalComponent = /** @class */ (function () {
    function AuthSigninModalComponent(modalRef) {
        this.modalRef = modalRef;
    }
    AuthSigninModalComponent.prototype.handleSignupIntention = function () {
        console.log('Default behavior - AuthSigninModalComponent - handleSignupIntention()');
    };
    AuthSigninModalComponent.prototype.handleSocialSigninIntention = function () {
        console.log('Default behavior - AuthSigninModalComponent - handleSocialSigninIntention()');
    };
    AuthSigninModalComponent.prototype.signinSuccess = function (success) {
        if (success) {
            this.modalRef.hide();
        }
    };
    AuthSigninModalComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-auth-signin-modal',
            templateUrl: './auth-signin-modal.component.html',
            styleUrls: [
                './styles/auth-signin-modal.styles.scss'
            ],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        tslib_1.__metadata("design:paramtypes", [modal_1.BsModalRef])
    ], AuthSigninModalComponent);
    return AuthSigninModalComponent;
}());
exports.AuthSigninModalComponent = AuthSigninModalComponent;
//# sourceMappingURL=auth-signin-modal.component.js.map