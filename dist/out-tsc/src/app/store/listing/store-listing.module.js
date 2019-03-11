"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var dropdown_1 = require("ngx-bootstrap/dropdown");
var buttons_1 = require("ngx-bootstrap/buttons");
var shared_1 = require("../../shared");
var __1 = require("../");
var products_listing_page_component_1 = require("./components/products-listing-page/products-listing-page.component");
var products_listing_page_resolver_1 = require("./resolvers/products-listing-page.resolver");
exports.storeListingRoutes = [
    {
        path: '',
        component: products_listing_page_component_1.ProductsListingPageComponent,
        resolve: {
            data: products_listing_page_resolver_1.ProductsListingPageResolver
        }
    },
    {
        path: 'category/:slug',
        component: products_listing_page_component_1.ProductsListingPageComponent,
        resolve: {
            data: products_listing_page_resolver_1.ProductsListingPageResolver
        }
    },
    {
        path: 'tag/:slug',
        component: products_listing_page_component_1.ProductsListingPageComponent,
        resolve: {
            data: products_listing_page_resolver_1.ProductsListingPageResolver
        }
    }
];
var StoreListingModule = /** @class */ (function () {
    function StoreListingModule() {
    }
    StoreListingModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                products_listing_page_component_1.ProductsListingPageComponent
            ],
            imports: [
                router_1.RouterModule.forChild(exports.storeListingRoutes),
                common_1.CommonModule,
                shared_1.SharedModule,
                __1.StoreSharedModule,
                dropdown_1.BsDropdownModule.forRoot(),
                buttons_1.ButtonsModule
            ],
            providers: [
                products_listing_page_resolver_1.ProductsListingPageResolver
            ]
        })
    ], StoreListingModule);
    return StoreListingModule;
}());
exports.StoreListingModule = StoreListingModule;
//# sourceMappingURL=store-listing.module.js.map