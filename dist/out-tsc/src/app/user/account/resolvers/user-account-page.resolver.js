"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var user_service_1 = require("../../services/user.service");
var UserAccountPageResolver = /** @class */ (function () {
    function UserAccountPageResolver(userDataService) {
        this.userDataService = userDataService;
    }
    UserAccountPageResolver.prototype.resolve = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var seo = {
                title: 'Account',
                description: 'Your account description',
                keywords: 'your, account, keywords'
            };
            _this.userDataService.getAccountData()
                .then(function (userData) {
                return resolve({
                    userData: userData,
                    seo: seo
                });
            });
        });
    };
    UserAccountPageResolver = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [user_service_1.UserService])
    ], UserAccountPageResolver);
    return UserAccountPageResolver;
}());
exports.UserAccountPageResolver = UserAccountPageResolver;
//# sourceMappingURL=user-account-page.resolver.js.map