"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var noop = function () { };
var StarRatingComponent = /** @class */ (function () {
    function StarRatingComponent() {
        this.max = 5;
        this.readOnly = false;
        this.propagateChange = noop;
    }
    StarRatingComponent_1 = StarRatingComponent;
    StarRatingComponent.prototype.ngOnInit = function () {
        var states = [];
        for (var i = 0; i < this.max; i++) {
            if (this.innerValue > i && this.innerValue < i + 1) {
                states[i] = 2;
            }
            else if (this.innerValue > i) {
                states[i] = 1;
            }
            else {
                states[i] = 0;
            }
        }
        this.range = states;
    };
    Object.defineProperty(StarRatingComponent.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (val) {
            if (val !== this.innerValue) {
                this.innerValue = val;
                this.propagateChange(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    StarRatingComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    StarRatingComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    StarRatingComponent.prototype.registerOnTouched = function () { };
    StarRatingComponent.prototype.rate = function (amount) {
        if (!this.readOnly && amount >= 0 && amount <= this.range.length) {
            this.value = amount;
        }
    };
    var StarRatingComponent_1;
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], StarRatingComponent.prototype, "max", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], StarRatingComponent.prototype, "readOnly", void 0);
    StarRatingComponent = StarRatingComponent_1 = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-star-rating',
            templateUrl: './star-rating.component.html',
            styleUrls: [
                './styles/star-rating.styles.scss'
            ],
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: StarRatingComponent_1,
                    multi: true
                }]
        })
    ], StarRatingComponent);
    return StarRatingComponent;
}());
exports.StarRatingComponent = StarRatingComponent;
//# sourceMappingURL=star-rating.component.js.map