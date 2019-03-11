"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var AuthRecoverPasswordFormComponent = /** @class */ (function () {
    function AuthRecoverPasswordFormComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.success = new core_1.EventEmitter();
        this.recoverPasswordForm = formBuilder.group({
            email: new forms_1.FormControl('', forms_1.Validators.compose([
                forms_1.Validators.email,
                forms_1.Validators.required
            ]))
        });
    }
    AuthRecoverPasswordFormComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('Recovering password ...');
        this.success.emit(true);
        this.recoverPasswordForm.reset();
        if (this.redirectUrl) {
            setTimeout(function () {
                return _this.router.navigate([_this.redirectUrl]);
            }, 1000);
        }
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], AuthRecoverPasswordFormComponent.prototype, "redirectUrl", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], AuthRecoverPasswordFormComponent.prototype, "success", void 0);
    AuthRecoverPasswordFormComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-auth-recover-password-form',
            templateUrl: './auth-recover-password-form.component.html',
            styleUrls: [
                './styles/auth-recover-password-form.styles.scss'
            ],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        tslib_1.__metadata("design:paramtypes", [forms_1.FormBuilder,
            router_1.Router])
    ], AuthRecoverPasswordFormComponent);
    return AuthRecoverPasswordFormComponent;
}());
exports.AuthRecoverPasswordFormComponent = AuthRecoverPasswordFormComponent;
//# sourceMappingURL=auth-recover-password-form.component.js.map