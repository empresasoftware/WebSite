"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var BackgroundImageComponent = /** @class */ (function () {
    function BackgroundImageComponent(platformId, _elementRef, _renderer) {
        this.platformId = platformId;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._src = '';
    }
    Object.defineProperty(BackgroundImageComponent.prototype, "src", {
        set: function (val) {
            this._src = (val !== undefined && val !== null) ? val : '';
        },
        enumerable: true,
        configurable: true
    });
    BackgroundImageComponent.prototype.ngOnChanges = function () {
        this._update();
    };
    BackgroundImageComponent.prototype._update = function () {
        // When using ssr (server Side Rendering), avoid the loading animation while the browser loads the image resource
        if (common_1.isPlatformServer(this.platformId)) {
            this._loaded(true);
        }
        else {
            this._loaded(false);
        }
    };
    BackgroundImageComponent.prototype._loaded = function (isLoaded) {
        if (isLoaded) {
            this._renderer.setStyle(this._elementRef.nativeElement, 'backgroundImage', 'url(' + this._src + ')');
            this._renderer.addClass(this._elementRef.nativeElement, 'img-loaded');
        }
        else {
            this._renderer.removeClass(this._elementRef.nativeElement, 'img-loaded');
        }
    };
    tslib_1.__decorate([
        core_1.ViewChild('_img'),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], BackgroundImageComponent.prototype, "_imageElement", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], BackgroundImageComponent.prototype, "src", null);
    BackgroundImageComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-background-image',
            templateUrl: './background-image.component.html',
            styleUrls: [
                './styles/background-image.styles.scss'
            ],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        tslib_1.__param(0, core_1.Inject(core_1.PLATFORM_ID)),
        tslib_1.__metadata("design:paramtypes", [String, core_1.ElementRef,
            core_1.Renderer2])
    ], BackgroundImageComponent);
    return BackgroundImageComponent;
}());
exports.BackgroundImageComponent = BackgroundImageComponent;
//# sourceMappingURL=background-image.component.js.map