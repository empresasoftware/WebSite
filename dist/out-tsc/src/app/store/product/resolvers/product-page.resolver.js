"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var products_service_1 = require("../../services/products.service");
var ProductPageResolver = /** @class */ (function () {
    function ProductPageResolver(productsService) {
        this.productsService = productsService;
    }
    ProductPageResolver.prototype.resolve = function (route) {
        var _this = this;
        var product_slug = route.params['slug'];
        return new Promise(function (resolve, reject) {
            if (product_slug) {
                _this.productsService.getProduct(product_slug)
                    .then(function (product) {
                    resolve({
                        product: product,
                        breadcrumbs: [
                            { url: '/', label: 'HOME' },
                            { url: '/products/category/' + product.category, label: product.category },
                            { url: '/product/' + product.slug, label: product.title }
                        ],
                        seo: {
                            title: 'Product name',
                            description: 'Your product description',
                            keywords: 'your, product, keywords'
                        }
                    });
                }, function (err) {
                    resolve({
                        seo: {
                            title: 'No product found',
                            robots: 'noindex, nofollow'
                        }
                    });
                });
            }
            else {
                resolve(null);
            }
        });
    };
    ProductPageResolver = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [products_service_1.StoreProductsService])
    ], ProductPageResolver);
    return ProductPageResolver;
}());
exports.ProductPageResolver = ProductPageResolver;
//# sourceMappingURL=product-page.resolver.js.map