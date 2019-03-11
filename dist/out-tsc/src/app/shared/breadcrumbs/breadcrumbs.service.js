"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var BreadcrumbsService = /** @class */ (function () {
    function BreadcrumbsService() {
        this.breadcrumbsSubject = new rxjs_1.BehaviorSubject([]);
    }
    BreadcrumbsService.prototype.breadcrumbsObservable = function () {
        return this.breadcrumbsSubject.asObservable();
    };
    BreadcrumbsService.prototype.setBreadcrumbs = function (breadcrumbs) {
        this.breadcrumbsSubject.next(breadcrumbs);
    };
    BreadcrumbsService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], BreadcrumbsService);
    return BreadcrumbsService;
}());
exports.BreadcrumbsService = BreadcrumbsService;
//# sourceMappingURL=breadcrumbs.service.js.map