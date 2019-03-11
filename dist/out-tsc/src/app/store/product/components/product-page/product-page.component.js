"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var modal_1 = require("ngx-bootstrap/modal");
var auth_1 = require("../../../../auth");
var auth_2 = require("../../../../auth");
var auth_service_1 = require("../../../../auth/services/auth.service");
var ProductPageComponent = /** @class */ (function () {
    function ProductPageComponent(route, formBuilder, modalService, authService) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.authService = authService;
        this.loggedInObservable = authService.loggedInObservable();
    }
    ProductPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (routeData) {
            var data = routeData['data'];
            if (data && data !== null && data.product) {
                _this.product = data.product;
                _this.relatedProducts = _this.product.related;
                if (_this.product.images && _this.product.images.length) {
                    _this.selectedImage = _this.product.images[0];
                }
                _this.productVariantForm = _this.formBuilder.group({
                    color_chooser: '#61fcc5',
                    size_chooser: '7.5'
                });
                _this.productRatingForm = _this.formBuilder.group({
                    overallRating: _this.product.rate.overall
                });
            }
        });
    };
    ProductPageComponent.prototype.selectImage = function (image) {
        this.selectedImage = image;
    };
    ProductPageComponent.prototype.openAuthModal = function () {
        console.log('openAuthModal');
        // Default option
        this.openSigninModal();
    };
    ProductPageComponent.prototype.openSigninModal = function () {
        var _this = this;
        console.log('openSigninModal');
        this.signinModal = this.modalService.show(auth_1.AuthSigninModalComponent);
        // Wire up signup intention from within signin modal
        this.signinModal.content.handleSignupIntention = function () {
            console.log('handling signup intention from within signin modal');
            _this.signinModal.hide();
            _this.openSignupModal();
        };
    };
    ProductPageComponent.prototype.openSignupModal = function () {
        var _this = this;
        console.log('openSignupModal');
        this.signupModal = this.modalService.show(auth_2.AuthSignupModalComponent);
        // Wire up signin intention from within signup modal
        this.signupModal.content.handleSigninIntention = function () {
            console.log('handling signin intention from within signup modal');
            _this.signupModal.hide();
            _this.openSigninModal();
        };
    };
    ProductPageComponent.prototype.onSubmit = function () {
        console.log('Proceed to product purchase flow');
    };
    ProductPageComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-product-page',
            templateUrl: './product-page.component.html',
            styleUrls: [
                './styles/product-page.styles.scss'
            ],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute,
            forms_1.FormBuilder,
            modal_1.BsModalService,
            auth_service_1.AuthService])
    ], ProductPageComponent);
    return ProductPageComponent;
}());
exports.ProductPageComponent = ProductPageComponent;
//# sourceMappingURL=product-page.component.js.map