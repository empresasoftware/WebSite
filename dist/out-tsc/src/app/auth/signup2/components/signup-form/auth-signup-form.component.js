"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var auth_service_1 = require("../../../services/auth.service");
var AuthSignup2FormComponent = /** @class */ (function () {
    function AuthSignup2FormComponent(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.success = new core_1.EventEmitter();
        this.signupForm = formBuilder.group({
            name: new forms_1.FormControl('', forms_1.Validators.required),
            email: new forms_1.FormControl('', forms_1.Validators.compose([
                forms_1.Validators.email,
                forms_1.Validators.required
            ])),
            password: new forms_1.FormControl('', forms_1.Validators.required),
            newsletter: new forms_1.FormControl(false),
            terms: new forms_1.FormControl(false, forms_1.Validators.pattern('true'))
        });
    }
    AuthSignup2FormComponent.prototype.onSubmit = function () {
        this.doSignup(this.signupForm.value.name, this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.newsletter);
    };
    AuthSignup2FormComponent.prototype.doSignup = function (name, email, password, newsletter) {
        var _this = this;
        this.authService.signup(name, email, password, newsletter)
            .subscribe(function (res) {
            _this.success.emit(true);
            _this.signupForm.reset();
            if (_this.redirectUrl) {
                setTimeout(function () {
                    return _this.router.navigate([_this.redirectUrl]);
                }, 500);
            }
        }, function (err) {
            console.log('There was an ERROR while creating the account');
        });
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], AuthSignup2FormComponent.prototype, "redirectUrl", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], AuthSignup2FormComponent.prototype, "success", void 0);
    AuthSignup2FormComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-auth-signup-form',
            templateUrl: './auth-signup-form.component.html',
            styleUrls: [
                './styles/auth-signup-form.styles.scss'
            ],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        tslib_1.__metadata("design:paramtypes", [forms_1.FormBuilder,
            router_1.Router,
            auth_service_1.AuthService])
    ], AuthSignup2FormComponent);
    return AuthSignup2FormComponent;
}());
exports.AuthSignup2FormComponent = AuthSignup2FormComponent;
//# sourceMappingURL=auth-signup-form.component.js.map