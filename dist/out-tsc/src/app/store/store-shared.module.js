"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var shared_1 = require("../shared");
var products_listing_component_1 = require("./listing/components/products-listing/products-listing.component");
var banners_service_1 = require("./services/banners.service");
var products_service_1 = require("./services/products.service");
var StoreSharedModule = /** @class */ (function () {
    function StoreSharedModule() {
    }
    StoreSharedModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                products_listing_component_1.ProductsListingComponent
            ],
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                shared_1.SharedModule
            ],
            providers: [
                banners_service_1.StoreBannersService,
                products_service_1.StoreProductsService
            ],
            exports: [
                products_listing_component_1.ProductsListingComponent
            ]
        })
    ], StoreSharedModule);
    return StoreSharedModule;
}());
exports.StoreSharedModule = StoreSharedModule;
//# sourceMappingURL=store-shared.module.js.map