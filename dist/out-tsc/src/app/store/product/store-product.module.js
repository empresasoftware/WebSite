"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var carousel_1 = require("ngx-bootstrap/carousel");
var buttons_1 = require("ngx-bootstrap/buttons");
var modal_1 = require("ngx-bootstrap/modal");
var shared_1 = require("../../shared");
var auth_1 = require("../../auth");
var __1 = require("../");
var product_page_component_1 = require("./components/product-page/product-page.component");
var product_page_resolver_1 = require("./resolvers/product-page.resolver");
exports.productRoutes = [
    {
        path: '',
        component: product_page_component_1.ProductPageComponent,
        resolve: {
            data: product_page_resolver_1.ProductPageResolver
        }
    }
];
var StoreProductModule = /** @class */ (function () {
    function StoreProductModule() {
    }
    StoreProductModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                product_page_component_1.ProductPageComponent
            ],
            imports: [
                // Angular Modules
                router_1.RouterModule.forChild(exports.productRoutes),
                common_1.CommonModule,
                // ngx Modules
                carousel_1.CarouselModule,
                buttons_1.ButtonsModule,
                modal_1.ModalModule.forRoot(),
                // Our Modules
                shared_1.SharedModule,
                auth_1.AuthSharedModule,
                __1.StoreSharedModule
            ],
            providers: [
                product_page_resolver_1.ProductPageResolver
            ]
        })
    ], StoreProductModule);
    return StoreProductModule;
}());
exports.StoreProductModule = StoreProductModule;
//# sourceMappingURL=store-product.module.js.map