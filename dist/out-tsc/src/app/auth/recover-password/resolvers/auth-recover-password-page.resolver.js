"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var AuthRecoverPasswordPageResolver = /** @class */ (function () {
    function AuthRecoverPasswordPageResolver() {
    }
    AuthRecoverPasswordPageResolver.prototype.resolve = function () {
        return new Promise(function (resolve, reject) {
            return resolve({
                seo: {
                    title: 'Recover your password',
                    description: '',
                    keywords: '',
                    image_url: ''
                }
            });
        });
    };
    AuthRecoverPasswordPageResolver = tslib_1.__decorate([
        core_1.Injectable()
    ], AuthRecoverPasswordPageResolver);
    return AuthRecoverPasswordPageResolver;
}());
exports.AuthRecoverPasswordPageResolver = AuthRecoverPasswordPageResolver;
//# sourceMappingURL=auth-recover-password-page.resolver.js.map