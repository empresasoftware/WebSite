"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var AuthSignup = /** @class */ (function () {
    function AuthSignup() {
    }
    AuthSignup = tslib_1.__decorate([
        core_1.Injectable()
    ], AuthSignup);
    return AuthSignup;
}());
exports.AuthSignup = AuthSignup;
-electionPageResolver;
implements;
Resolve < any > {
    resolve: function () {
        return new Promise(function (resolve, reject) {
            return resolve({
                seo: {
                    title: 'Create an account-election',
                    description: '',
                    keywords: '',
                    image_url: ''
                }
            });
        });
    }
};
//# sourceMappingURL=auth-signup-page.resolver.js.map