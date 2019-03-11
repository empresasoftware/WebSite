"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var FillContainerComponent = /** @class */ (function () {
    function FillContainerComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
    }
    Object.defineProperty(FillContainerComponent.prototype, "ratio", {
        set: function (ratio) {
            this._ratio = ratio || { w: 1, h: 1 };
        },
        enumerable: true,
        configurable: true
    });
    FillContainerComponent.prototype.ngOnChanges = function () {
        var ratio_height = (this._ratio.h / this._ratio.w * 100) + '%';
        // Conserve aspect ratio (see: http://stackoverflow.com/a/10441480/1116959)
        this._renderer.setStyle(this._elementRef.nativeElement, 'padding', '0px 0px ' + ratio_height + ' 0px');
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], FillContainerComponent.prototype, "ratio", null);
    FillContainerComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-fill-container',
            templateUrl: './fill-container.component.html',
            styleUrls: [
                './styles/fill-container.styles.scss'
            ],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer2])
    ], FillContainerComponent);
    return FillContainerComponent;
}());
exports.FillContainerComponent = FillContainerComponent;
//# sourceMappingURL=fill-container.component.js.map