"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ProductsListingComponent = /** @class */ (function () {
    function ProductsListingComponent() {
    }
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], ProductsListingComponent.prototype, "items", void 0);
    ProductsListingComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-products-listing',
            templateUrl: './products-listing.component.html',
            styleUrls: [
                './styles/products-listing.styles.scss'
            ],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], ProductsListingComponent);
    return ProductsListingComponent;
}());
exports.ProductsListingComponent = ProductsListingComponent;
//# sourceMappingURL=products-listing.component.js.map