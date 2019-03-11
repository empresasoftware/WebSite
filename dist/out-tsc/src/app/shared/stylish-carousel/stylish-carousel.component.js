"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var carousel_1 = require("ngx-bootstrap/carousel");
var StylishCarouselComponent = /** @class */ (function () {
    function StylishCarouselComponent() {
    }
    StylishCarouselComponent.prototype.ngAfterContentInit = function () {
        // ContentChild is set
    };
    tslib_1.__decorate([
        core_1.ContentChild(carousel_1.CarouselComponent),
        tslib_1.__metadata("design:type", carousel_1.CarouselComponent)
    ], StylishCarouselComponent.prototype, "carousel", void 0);
    StylishCarouselComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-stylish-carousel',
            templateUrl: './stylish-carousel.component.html',
            styleUrls: [
                './styles/stylish-carousel.styles.scss'
            ],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], StylishCarouselComponent);
    return StylishCarouselComponent;
}());
exports.StylishCarouselComponent = StylishCarouselComponent;
//# sourceMappingURL=stylish-carousel.component.js.map