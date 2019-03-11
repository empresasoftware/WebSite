"use strict";
// Inspired on: http://brianflove.com/2016/10/23/angular2-breadcrumb-using-router/
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var breadcrumbs_service_1 = require("./breadcrumbs.service");
var BreadcrumbsComponent = /** @class */ (function () {
    function BreadcrumbsComponent(breadcrumbsService) {
        this.breadcrumbsService = breadcrumbsService;
        this.breadcrumbsObservable = breadcrumbsService.breadcrumbsObservable();
    }
    BreadcrumbsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-breadcrumbs',
            styleUrls: ['./styles/breadcrumbs.styles.scss'],
            templateUrl: './breadcrumbs.component.html',
            encapsulation: core_1.ViewEncapsulation.None
        }),
        tslib_1.__metadata("design:paramtypes", [breadcrumbs_service_1.BreadcrumbsService])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
}());
exports.BreadcrumbsComponent = BreadcrumbsComponent;
//# sourceMappingURL=breadcrumbs.component.js.map