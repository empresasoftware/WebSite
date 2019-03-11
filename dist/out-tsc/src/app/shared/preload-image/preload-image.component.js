"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var PreloadImageComponent = /** @class */ (function () {
    function PreloadImageComponent(platformId, _elementRef, _renderer) {
        this.platformId = platformId;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._src = '';
        this._title = '';
        this._alt = '';
        this._classes = '';
    }
    Object.defineProperty(PreloadImageComponent.prototype, "alt", {
        set: function (val) {
            this._alt = (val !== undefined && val !== null) ? val : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PreloadImageComponent.prototype, "title", {
        set: function (val) {
            this._title = (val !== undefined && val !== null) ? val : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PreloadImageComponent.prototype, "classes", {
        set: function (val) {
            this._classes = (val !== undefined && val !== null) ? val : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PreloadImageComponent.prototype, "src", {
        set: function (val) {
            this._src = (val !== undefined && val !== null) ? val : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PreloadImageComponent.prototype, "ratio", {
        set: function (ratio) {
            this._ratio = ratio || null;
        },
        enumerable: true,
        configurable: true
    });
    PreloadImageComponent.prototype.ngOnChanges = function () {
        var ratio_height = (this._ratio.h / this._ratio.w * 100) + '%';
        // Conserve aspect ratio (see: http://stackoverflow.com/a/10441480/1116959)
        this._renderer.setStyle(this._elementRef.nativeElement, 'padding', '0px 0px ' + ratio_height + ' 0px');
        this._update();
    };
    PreloadImageComponent.prototype._update = function () {
        // When using ssr (server Side Rendering), avoid the loading animation while the browser loads the image resource
        if (common_1.isPlatformServer(this.platformId)) {
            this._loaded(true);
        }
        else {
            this._loaded(false);
        }
    };
    PreloadImageComponent.prototype._loaded = function (isLoaded) {
        if (isLoaded) {
            this._renderer.addClass(this._elementRef.nativeElement, 'img-loaded');
        }
        else {
            this._renderer.removeClass(this._elementRef.nativeElement, 'img-loaded');
        }
    };
    tslib_1.__decorate([
        core_1.ViewChild('_img'),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], PreloadImageComponent.prototype, "_imageElement", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], PreloadImageComponent.prototype, "alt", null);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], PreloadImageComponent.prototype, "title", null);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], PreloadImageComponent.prototype, "classes", null);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], PreloadImageComponent.prototype, "src", null);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], PreloadImageComponent.prototype, "ratio", null);
    PreloadImageComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-preload-image',
            templateUrl: './preload-image.component.html',
            styleUrls: [
                './styles/preload-image.styles.scss'
            ],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        tslib_1.__param(0, core_1.Inject(core_1.PLATFORM_ID)),
        tslib_1.__metadata("design:paramtypes", [String, core_1.ElementRef,
            core_1.Renderer2])
    ], PreloadImageComponent);
    return PreloadImageComponent;
}());
exports.PreloadImageComponent = PreloadImageComponent;
//# sourceMappingURL=preload-image.component.js.map