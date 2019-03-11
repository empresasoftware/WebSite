"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var HomeStorefrontPageComponent = /** @class */ (function () {
    function HomeStorefrontPageComponent(route) {
        this.route = route;
        this.newCollectionProducts = [];
        this.summerSaleProducts = [];
        this.highlightedProducts = [];
        this.newCollectionProducts = route.snapshot.data['data'].new_collection;
        this.summerSaleProducts = route.snapshot.data['data'].summer_sale;
        this.highlightedProducts = route.snapshot.data['data'].banners;
    }
    HomeStorefrontPageComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-home-storefront-page',
            templateUrl: './storefront-page.component.html',
            styleUrls: [
                './styles/storefront-page.styles.scss'
            ],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], HomeStorefrontPageComponent);
    return HomeStorefrontPageComponent;
}());
exports.HomeStorefrontPageComponent = HomeStorefrontPageComponent;
//# sourceMappingURL=storefront-page.component.js.map