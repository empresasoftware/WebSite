"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var auth_service_1 = require("../../../services/auth.service");
var AuthSigninFormComponent = /** @class */ (function () {
    function AuthSigninFormComponent(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.success = new core_1.EventEmitter();
        this.signinForm = formBuilder.group({
            email: new forms_1.FormControl('', forms_1.Validators.compose([
                forms_1.Validators.email,
                forms_1.Validators.required
            ])),
            password: new forms_1.FormControl('', forms_1.Validators.required)
        });
    }
    AuthSigninFormComponent.prototype.onSubmit = function () {
        this.doSignin(this.signinForm.value.email, this.signinForm.value.password, true);
    };
    AuthSigninFormComponent.prototype.doSignin = function (email, password, rememberMe) {
        var _this = this;
        this.authService.signin(email, password, rememberMe)
            .subscribe(function (res) {
            _this.success.emit(true);
            _this.signinForm.reset();
            if (_this.redirectUrl) {
                setTimeout(function () {
                    return _this.router.navigate([_this.redirectUrl]);
                }, 500);
            }
        }, function (err) {
            _this.success.emit(false);
        });
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], AuthSigninFormComponent.prototype, "redirectUrl", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], AuthSigninFormComponent.prototype, "success", void 0);
    AuthSigninFormComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-auth-signin-form',
            templateUrl: './auth-signin-form.component.html',
            styleUrls: [
                './styles/auth-signin-form.styles.scss'
            ],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        tslib_1.__metadata("design:paramtypes", [forms_1.FormBuilder,
            router_1.Router,
            auth_service_1.AuthService])
    ], AuthSigninFormComponent);
    return AuthSigninFormComponent;
}());
exports.AuthSigninFormComponent = AuthSigninFormComponent;
//# sourceMappingURL=auth-signin-form.component.js.map