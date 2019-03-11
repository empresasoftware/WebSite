"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var PercentageBarRatingComponent = /** @class */ (function () {
    function PercentageBarRatingComponent() {
        this._min = 0;
        this._max = 100;
        this._tickInterval = 20;
    }
    Object.defineProperty(PercentageBarRatingComponent.prototype, "min", {
        set: function (val) {
            this._min = (val !== undefined && val !== null) ? val : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PercentageBarRatingComponent.prototype, "max", {
        set: function (val) {
            this._max = (val !== undefined && val !== null) ? val : 100;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PercentageBarRatingComponent.prototype, "tickInterval", {
        set: function (val) {
            this._tickInterval = (val !== undefined && val !== null) ? val : 20;
        },
        enumerable: true,
        configurable: true
    });
    PercentageBarRatingComponent.prototype.ngOnChanges = function () {
        this._marks = new Array(this._max / this._tickInterval);
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], PercentageBarRatingComponent.prototype, "min", null);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], PercentageBarRatingComponent.prototype, "max", null);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], PercentageBarRatingComponent.prototype, "tickInterval", null);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], PercentageBarRatingComponent.prototype, "rating", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], PercentageBarRatingComponent.prototype, "labels", void 0);
    PercentageBarRatingComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-percentage-bar-rating',
            templateUrl: './percentage-bar-rating.component.html',
            styleUrls: [
                './styles/percentage-bar-rating.styles.scss'
            ],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], PercentageBarRatingComponent);
    return PercentageBarRatingComponent;
}());
exports.PercentageBarRatingComponent = PercentageBarRatingComponent;
//# sourceMappingURL=percentage-bar-rating.component.js.map