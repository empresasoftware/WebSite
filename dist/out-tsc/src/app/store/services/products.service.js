"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var common_1 = require("@angular/common");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var StoreProductsService = /** @class */ (function () {
    function StoreProductsService(http, baseHref) {
        this.http = http;
        this.baseHref = baseHref;
    }
    StoreProductsService.prototype.getProduct = function (slug) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var product = _this.http.get(_this.baseHref + '/assets/data/products.json')
                .pipe(operators_1.map(function (data) {
                return data.items.find(function (product) { return product.slug === slug; });
            }));
            var product_details = _this.http.get(_this.baseHref + '/assets/data/product-extra-details.json');
            rxjs_1.forkJoin(product, product_details).subscribe(function (data) {
                if (data[0] && data[1]) {
                    resolve(Object.assign({}, data[0], data[1]));
                }
                else {
                    reject();
                }
            }, function (err) {
                reject();
            });
        });
    };
    StoreProductsService.prototype.getProducts = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseHref + '/assets/data/products.json')
                .subscribe(function (data) { return resolve(data); }, function (err) { return reject(); });
        });
    };
    StoreProductsService.prototype.getProductsByCategory = function (category) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseHref + '/assets/data/products.json')
                .pipe(operators_1.map(function (products) {
                return products.items.filter(function (product) { return product.category === category; });
            }))
                .subscribe(function (data) { return resolve(data); }, function (err) { return reject(); });
        });
    };
    StoreProductsService.prototype.getProductsByTag = function (tag) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseHref + '/assets/data/products.json')
                .pipe(operators_1.map(function (products) {
                return products.items.filter(function (product) { return product.tag === tag; });
            }))
                .subscribe(function (data) { return resolve(data); }, function (err) { return reject(); });
        });
    };
    StoreProductsService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__param(1, core_1.Inject(common_1.APP_BASE_HREF)),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient, String])
    ], StoreProductsService);
    return StoreProductsService;
}());
exports.StoreProductsService = StoreProductsService;
//# sourceMappingURL=products.service.js.map