"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var AppComponent = /** @class */ (function () {
    function AppComponent(router, platformId) {
        this.router = router;
        this.platformId = platformId;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (evt) {
            if ((common_1.isPlatformServer(_this.platformId)) || (!(evt instanceof router_1.NavigationEnd))) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./styles/app.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        tslib_1.__param(1, core_1.Inject(core_1.PLATFORM_ID)),
        tslib_1.__metadata("design:paramtypes", [router_1.Router, Object])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map