"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var AuthSignupPageResolver = /** @class */ (function () {
    function AuthSignupPageResolver() {
    }
    AuthSignupPageResolver.prototype.resolve = function () {
        return new Promise(function (resolve, reject) {
            return resolve({
                seo: {
                    title: 'Create an account',
                    description: '',
                    keywords: '',
                    image_url: ''
                }
            });
        });
    };
    AuthSignupPageResolver = tslib_1.__decorate([
        core_1.Injectable()
    ], AuthSignupPageResolver);
    return AuthSignupPageResolver;
}());
exports.AuthSignupPageResolver = AuthSignupPageResolver;
//# sourceMappingURL=auth-signup-page.resolver.js.map