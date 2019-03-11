"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var user_service_1 = require("./services/user.service");
var UserSharedModule = /** @class */ (function () {
    function UserSharedModule() {
    }
    UserSharedModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [],
            imports: [],
            entryComponents: [],
            providers: [
                user_service_1.UserService
            ],
            exports: []
        })
    ], UserSharedModule);
    return UserSharedModule;
}());
exports.UserSharedModule = UserSharedModule;
//# sourceMappingURL=user-shared.module.js.map