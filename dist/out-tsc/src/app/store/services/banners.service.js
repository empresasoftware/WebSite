"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var common_1 = require("@angular/common");
var StoreBannersService = /** @class */ (function () {
    function StoreBannersService(http, baseHref) {
        this.http = http;
        this.baseHref = baseHref;
    }
    StoreBannersService.prototype.getBanners = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseHref + '/assets/data/banners.json')
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject();
            });
        });
    };
    StoreBannersService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__param(1, core_1.Inject(common_1.APP_BASE_HREF)),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient, String])
    ], StoreBannersService);
    return StoreBannersService;
}());
exports.StoreBannersService = StoreBannersService;
//# sourceMappingURL=banners.service.js.map