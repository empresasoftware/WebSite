"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_service_1 = require("../../auth/services/auth.service");
var TopNavbarComponent = /** @class */ (function () {
    function TopNavbarComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.navbarCollapsed = true;
        this.loggedInObservable = authService.loggedInObservable();
    }
    TopNavbarComponent.prototype.logout = function () {
        var _this = this;
        this.authService.logout()
            .subscribe(function (res) {
            setTimeout(function () {
                return _this.router.navigate(['/']);
            }, 500);
        }, function (err) {
            console.log('Could\'t log out the user');
        });
    };
    TopNavbarComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-top-navbar',
            styleUrls: ['./styles/top-navbar.styles.scss'],
            templateUrl: './top-navbar.component.html',
            encapsulation: core_1.ViewEncapsulation.None
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.Router, auth_service_1.AuthService])
    ], TopNavbarComponent);
    return TopNavbarComponent;
}());
exports.TopNavbarComponent = TopNavbarComponent;
//# sourceMappingURL=top-navbar.component.js.map