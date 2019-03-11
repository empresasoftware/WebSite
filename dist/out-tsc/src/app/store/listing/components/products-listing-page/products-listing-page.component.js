"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var ProductsListingPageComponent = /** @class */ (function () {
    function ProductsListingPageComponent(route, formBuilder) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.products = [];
    }
    ProductsListingPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (routeData) {
            var listing_path = _this.route.snapshot.url[0]; // this can either be 'tag' or 'category'
            if (listing_path && listing_path.path === 'tag') {
                _this.tag_slug = _this.route.snapshot.params['slug'];
            }
            else if (listing_path && listing_path.path === 'category') {
                _this.category_slug = _this.route.snapshot.params['slug'];
            }
            _this.products = _this.route.snapshot.data['data'].products;
        });
        var color_options_group = new forms_1.FormGroup({
            _fc9961: new forms_1.FormControl(false),
            _007bff: new forms_1.FormControl(false),
            _6610f2: new forms_1.FormControl(true),
            _6f42c1: new forms_1.FormControl(false),
            _e83e8c: new forms_1.FormControl(false),
            _dc3545: new forms_1.FormControl(false),
            _ffc107: new forms_1.FormControl(false),
            _28a745: new forms_1.FormControl(false),
            _20c997: new forms_1.FormControl(false),
            _17a2b8: new forms_1.FormControl(false),
            _343a40: new forms_1.FormControl(false),
            _61fcc5: new forms_1.FormControl(true),
            _fc61ad: new forms_1.FormControl(false),
            _ffffff: new forms_1.FormControl(true),
            _6c757d: new forms_1.FormControl(false)
        });
        var size_options_group = new forms_1.FormGroup({
            _7: new forms_1.FormControl(true),
            _7_5: new forms_1.FormControl(true),
            _8: new forms_1.FormControl(true),
            _8_5: new forms_1.FormControl(false),
            _9: new forms_1.FormControl(false),
            _9_5: new forms_1.FormControl(false),
            _10: new forms_1.FormControl(false),
            _10_5: new forms_1.FormControl(false),
            _11: new forms_1.FormControl(false)
        });
        this.productsFiltersForm = this.formBuilder.group({
            color_filter: color_options_group,
            size_filter: size_options_group
        });
    };
    ProductsListingPageComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-products-listing-page',
            templateUrl: './products-listing-page.component.html',
            styleUrls: [
                './styles/products-listing-page.styles.scss'
            ],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute,
            forms_1.FormBuilder])
    ], ProductsListingPageComponent);
    return ProductsListingPageComponent;
}());
exports.ProductsListingPageComponent = ProductsListingPageComponent;
//# sourceMappingURL=products-listing-page.component.js.map