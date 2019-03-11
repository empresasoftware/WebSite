"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var products_service_1 = require("../../services/products.service");
var ProductsListingPageResolver = /** @class */ (function () {
    function ProductsListingPageResolver(productsService) {
        this.productsService = productsService;
    }
    ProductsListingPageResolver.prototype.resolve = function (route) {
        var _this = this;
        var category_slug;
        var tag_slug;
        if (route.url[0] && (route.url[0].path === 'tag')) {
            tag_slug = route.params['slug'];
        }
        else if (route.url[0] && (route.url[0].path === 'category')) {
            category_slug = route.params['slug'];
        }
        return new Promise(function (resolve, reject) {
            if (category_slug) {
                // If the user is requesting products under a specific category
                rxjs_1.forkJoin(_this.productsService.getProductsByCategory(category_slug)).subscribe(function (data) {
                    resolve({
                        products: data[0],
                        breadcrumbs: [
                            { url: '/', label: 'HOME' },
                            { url: '/products/category/' + category_slug, label: category_slug }
                        ],
                        seo: {
                            title: category_slug + ' Category Products Listing',
                            description: 'Your product listing description',
                            keywords: 'your, product, listing, keywords'
                        }
                    });
                });
            }
            else if (tag_slug) {
                // If the user is requesting products under a specific tag
                rxjs_1.forkJoin(_this.productsService.getProductsByTag(tag_slug)).subscribe(function (data) {
                    resolve({
                        products: data[0],
                        breadcrumbs: [
                            { url: '/', label: 'HOME' },
                            { url: '/products/tag/' + tag_slug, label: tag_slug }
                        ],
                        seo: {
                            title: tag_slug + ' Tag Products Listing',
                            description: 'Your product listing description',
                            keywords: 'your, product, listing, keywords'
                        }
                    });
                });
            }
            else {
                // Default option, when the user requests all products
                rxjs_1.forkJoin(_this.productsService.getProducts()).subscribe(function (data) {
                    resolve({
                        products: data[0].items,
                        breadcrumbs: [
                            { url: '/', label: 'HOME' },
                            { url: '/products', label: 'ALL products' }
                        ],
                        seo: {
                            title: 'Products Listing',
                            description: 'Your product listing description',
                            keywords: 'your, product, listing, keywords'
                        }
                    });
                });
            }
        });
    };
    ProductsListingPageResolver = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [products_service_1.StoreProductsService])
    ], ProductsListingPageResolver);
    return ProductsListingPageResolver;
}());
exports.ProductsListingPageResolver = ProductsListingPageResolver;
//# sourceMappingURL=products-listing-page.resolver.js.map