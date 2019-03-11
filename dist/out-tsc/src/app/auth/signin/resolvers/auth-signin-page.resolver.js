"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var AuthSigninPageResolver = /** @class */ (function () {
    function AuthSigninPageResolver() {
    }
    AuthSigninPageResolver.prototype.resolve = function () {
        return new Promise(function (resolve, reject) {
            return resolve({
                seo: {
                    title: 'Log in to your account',
                    description: '',
                    keywords: '',
                    image_url: ''
                }
            });
        });
    };
    AuthSigninPageResolver = tslib_1.__decorate([
        core_1.Injectable()
    ], AuthSigninPageResolver);
    return AuthSigninPageResolver;
}());
exports.AuthSigninPageResolver = AuthSigninPageResolver;
//# sourceMappingURL=auth-signin-page.resolver.js.map