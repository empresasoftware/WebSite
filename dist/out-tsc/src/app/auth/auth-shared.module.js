"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var shared_1 = require("../shared");
var auth_signin_form_component_1 = require("./signin/components/signin-form/auth-signin-form.component");
var auth_signin_modal_component_1 = require("./signin/components/signin-modal/auth-signin-modal.component");
var auth_signup_form_component_1 = require("./signup/components/signup-form/auth-signup-form.component");
var auth_signup_modal_component_1 = require("./signup/components/signup-modal/auth-signup-modal.component");
var auth_signup_form_component_2 = require("./signup2/components/signup-form/auth-signup-form.component");
var auth_recover_password_form_component_1 = require("./recover-password/components/recover-password-form/auth-recover-password-form.component");
var AuthSharedModule = /** @class */ (function () {
    function AuthSharedModule() {
    }
    AuthSharedModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                // Signin stuff
                auth_signin_form_component_1.AuthSigninFormComponent,
                auth_signin_modal_component_1.AuthSigninModalComponent,
                // Signup stuff
                auth_signup_form_component_1.AuthSignupFormComponent,
                auth_signup_modal_component_1.AuthSignupModalComponent,
                auth_signup_form_component_2.AuthSignup2FormComponent,
                // Recover password stuff
                auth_recover_password_form_component_1.AuthRecoverPasswordFormComponent
            ],
            imports: [
                shared_1.SharedModule
            ],
            entryComponents: [
                auth_signin_modal_component_1.AuthSigninModalComponent,
                auth_signup_modal_component_1.AuthSignupModalComponent
            ],
            exports: [
                // Signin stuff
                auth_signin_form_component_1.AuthSigninFormComponent,
                auth_signin_modal_component_1.AuthSigninModalComponent,
                // Signup stuff
                auth_signup_form_component_1.AuthSignupFormComponent,
                auth_signup_modal_component_1.AuthSignupModalComponent,
                // Recover password stuff
                auth_recover_password_form_component_1.AuthRecoverPasswordFormComponent
            ]
        })
    ], AuthSharedModule);
    return AuthSharedModule;
}());
exports.AuthSharedModule = AuthSharedModule;
//# sourceMappingURL=auth-shared.module.js.map