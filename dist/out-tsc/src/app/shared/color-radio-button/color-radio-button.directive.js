"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ColorRadioButtonDirective = /** @class */ (function () {
    function ColorRadioButtonDirective(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
    }
    ColorRadioButtonDirective.prototype.setColor = function (color) {
        this._renderer.setStyle(this._elementRef.nativeElement, 'backgroundColor', color);
        this._renderer.setStyle(this._elementRef.nativeElement, 'borderColor', color);
    };
    ColorRadioButtonDirective.prototype.ngOnInit = function () {
        this.setColor(this.appColorRadioBtn);
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], ColorRadioButtonDirective.prototype, "appColorRadioBtn", void 0);
    ColorRadioButtonDirective = tslib_1.__decorate([
        core_1.Directive({
            selector: '[appColorRadioBtn]'
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer2])
    ], ColorRadioButtonDirective);
    return ColorRadioButtonDirective;
}());
exports.ColorRadioButtonDirective = ColorRadioButtonDirective;
//# sourceMappingURL=color-radio-button.directive.js.map