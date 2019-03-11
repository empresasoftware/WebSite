"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var AboutPageResolver = /** @class */ (function () {
    function AboutPageResolver() {
    }
    AboutPageResolver.prototype.resolve = function () {
        return new Promise(function (resolve, reject) {
            return resolve({
                seo: {
                    title: 'About Us',
                    description: '',
                    keywords: '',
                    image_url: ''
                }
            });
        });
    };
    AboutPageResolver = tslib_1.__decorate([
        core_1.Injectable()
    ], AboutPageResolver);
    return AboutPageResolver;
}());
exports.AboutPageResolver = AboutPageResolver;
//# sourceMappingURL=about-page.resolver.js.map