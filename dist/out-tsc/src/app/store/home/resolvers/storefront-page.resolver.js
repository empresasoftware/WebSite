"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var products_service_1 = require("../../services/products.service");
var banners_service_1 = require("../../services/banners.service");
var HomeStorefrontPageResolver = /** @class */ (function () {
    function HomeStorefrontPageResolver(productsService, bannersService) {
        this.productsService = productsService;
        this.bannersService = bannersService;
    }
    HomeStorefrontPageResolver.prototype.resolve = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            rxjs_1.forkJoin(_this.productsService.getProductsByTag('new-collection'), _this.productsService.getProductsByTag('summer'), _this.bannersService.getBanners()).subscribe(function (data) {
                resolve({
                    new_collection: data[0],
                    summer_sale: data[1],
                    banners: data[2],
                    seo: {
                        title: 'Home',
                        description: 'Your home description',
                        keywords: 'your, home, keywords'
                    }
                });
            });
        });
    };
    HomeStorefrontPageResolver = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [products_service_1.StoreProductsService,
            banners_service_1.StoreBannersService])
    ], HomeStorefrontPageResolver);
    return HomeStorefrontPageResolver;
}());
exports.HomeStorefrontPageResolver = HomeStorefrontPageResolver;
//# sourceMappingURL=storefront-page.resolver.js.map