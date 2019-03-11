"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var UserAccountPageComponent = /** @class */ (function () {
    function UserAccountPageComponent(route) {
        this.route = route;
        this.user = {};
        this.user = route.snapshot.data['data'].userData;
    }
    UserAccountPageComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-user-account-page',
            templateUrl: './user-account-page.component.html',
            styleUrls: [
                './styles/user-account-page.styles.scss'
            ],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], UserAccountPageComponent);
    return UserAccountPageComponent;
}());
exports.UserAccountPageComponent = UserAccountPageComponent;
//# sourceMappingURL=user-account-page.component.js.map