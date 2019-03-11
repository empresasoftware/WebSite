"use strict";
// Inspired on: http://brianflove.com/2016/10/23/angular2-breadcrumb-using-router/
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var operators_1 = require("rxjs/operators");
var breadcrumbs_service_1 = require("./breadcrumbs.service");
var BreadcrumbsDirective = /** @class */ (function () {
    function BreadcrumbsDirective(activatedRoute, router, breadcrumbsService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.breadcrumbsService = breadcrumbsService;
    }
    BreadcrumbsDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._routerSubscription = this.router.events
            .pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }), operators_1.map(function () { return _this.activatedRoute; }), operators_1.map(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), operators_1.filter(function (route) { return route.outlet === 'primary'; }), operators_1.switchMap(function (route) { return route.data; }))
            .subscribe(function (event) {
            if (event['data'] && event['data'].breadcrumbs) {
                _this.breadcrumbsService.setBreadcrumbs(event['data'].breadcrumbs);
            }
            else {
                // Empty breadcrumbs
                _this.breadcrumbsService.setBreadcrumbs([]);
            }
        });
    };
    BreadcrumbsDirective.prototype.ngOnDestroy = function () {
        if (this._routerSubscription) {
            this._routerSubscription.unsubscribe();
        }
    };
    BreadcrumbsDirective = tslib_1.__decorate([
        core_1.Directive({
            selector: '[appBreadcrumbs]'
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            breadcrumbs_service_1.BreadcrumbsService])
    ], BreadcrumbsDirective);
    return BreadcrumbsDirective;
}());
exports.BreadcrumbsDirective = BreadcrumbsDirective;
//# sourceMappingURL=breadcrumbs.directive.js.map