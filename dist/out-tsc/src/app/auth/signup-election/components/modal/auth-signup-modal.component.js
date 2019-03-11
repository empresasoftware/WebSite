"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var modal_1 = require("ngx-bootstrap/modal");
var AuthSignupModalComponent = /** @class */ (function () {
    function AuthSignupModalComponent(modalRef) {
        this.modalRef = modalRef;
    }
    AuthSignupModalComponent.prototype.handleSigninIntention = function () {
        console.log('Default behavior - AuthSignupModalComponent - handleSigninIntention()');
    };
    AuthSignupModalComponent.prototype.handleSocialSignupIntention = function () {
        console.log('Default behavior - AuthSignupModalComponent - handleSocialSignupIntention()');
    };
    AuthSignupModalComponent.prototype.signupSuccess = function (success) {
        if (success) {
            this.modalRef.hide();
        }
    };
    AuthSignupModalComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-auth-signup-modal',
            templateUrl: './auth-signup-modal.component.html',
            styleUrls: [
                './styles/auth-signup-modal.styles.scss'
            ],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        tslib_1.__metadata("design:paramtypes", [modal_1.BsModalRef])
    ], AuthSignupModalComponent);
    return AuthSignupModalComponent;
}());
exports.AuthSignupModalComponent = AuthSignupModalComponent;
//# sourceMappingURL=auth-signup-modal.component.js.map