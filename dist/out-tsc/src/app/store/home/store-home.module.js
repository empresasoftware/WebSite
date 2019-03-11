"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var carousel_1 = require("ngx-bootstrap/carousel");
var shared_1 = require("../../shared");
var __1 = require("../");
var storefront_page_component_1 = require("./components/storefront-page/storefront-page.component");
var storefront_page_resolver_1 = require("./resolvers/storefront-page.resolver");
exports.homeRoutes = [
    {
        path: '',
        component: storefront_page_component_1.HomeStorefrontPageComponent,
        resolve: {
            data: storefront_page_resolver_1.HomeStorefrontPageResolver
        }
    }
];
var StoreHomeModule = /** @class */ (function () {
    function StoreHomeModule() {
    }
    StoreHomeModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                storefront_page_component_1.HomeStorefrontPageComponent
            ],
            imports: [
                router_1.RouterModule.forChild(exports.homeRoutes),
                carousel_1.CarouselModule,
                common_1.CommonModule,
                shared_1.SharedModule,
                __1.StoreSharedModule
            ],
            providers: [
                storefront_page_resolver_1.HomeStorefrontPageResolver
            ]
        })
    ], StoreHomeModule);
    return StoreHomeModule;
}());
exports.StoreHomeModule = StoreHomeModule;
//# sourceMappingURL=store-home.module.js.map