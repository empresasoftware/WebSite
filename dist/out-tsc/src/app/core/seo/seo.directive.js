"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var operators_1 = require("rxjs/operators");
var SEODirective = /** @class */ (function () {
    function SEODirective(activatedRoute, router, meta, title) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.meta = meta;
        this.title = title;
    }
    SEODirective.prototype.ngOnInit = function () {
        var _this = this;
        this._routerSubscription = this.router.events
            .pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }), operators_1.map(function () { return _this.activatedRoute; }), operators_1.map(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), operators_1.filter(function (route) { return route.outlet === 'primary'; }), operators_1.switchMap(function (route) { return route.data; }), operators_1.distinct())
            .subscribe(function (event) {
            if (event['data'] && event['data'].seo) {
                var seo_data = event['data'].seo;
                // If there is no SEO data set default values
                var title = seo_data.title ? seo_data.title : 'Default Title';
                var description = seo_data.description ? seo_data.description : 'Default Description';
                var keywords = seo_data.keywords ? seo_data.keywords : 'Default Keywords';
                // While in development mode keep robots with noindex to prevent Google from indexing a work in progress site
                var robots = seo_data.robots ? seo_data.robots : 'noindex, nofollow, noimageindex';
                _this.title.setTitle(title);
                _this.meta.updateTag({ name: 'description', content: description }, 'name=\'description\'');
                _this.meta.updateTag({ name: 'keywords', content: keywords }, 'name=\'keywords\'');
                _this.meta.updateTag({ name: 'robots', content: robots }, 'name=\'robots\'');
                // You can add more meta tags here for example social metas:
                // If you want to use this tags, you need to define them in the index.html file such as:
                // <meta name="twitter:title" content="">
                // Twitter
                // this.meta.updateTag({ name: 'twitter:title', content: title }, 'name=\'twitter:title\'');
                // this.meta.updateTag({ name: 'twitter:description', content: description }, 'name=\'twitter:description\'');
                // this.meta.updateTag({ name: 'twitter:image', content: tw_image_url }, 'name=\'twitter:image\'');
                // Facebook
                // this.meta.updateTag({ property: 'og:title', content: title }, 'property=\'og:title\'');
                // this.meta.updateTag({ property: 'og:description', content: description }, 'property=\'og:description\'');
                // this.meta.updateTag({ property: 'og:image', content: fb_image_url }, 'property=\'og:image\'');
                // Schema
                // this.meta.updateTag({ name: 'DC.title', content: title }, 'name=\'DC.title\'');
                // this.meta.updateTag({ name: 'DC.description', content: description }, 'name=\'DC.description\'');
            }
        });
    };
    SEODirective.prototype.ngOnDestroy = function () {
        if (this._routerSubscription) {
            this._routerSubscription.unsubscribe();
        }
    };
    SEODirective = tslib_1.__decorate([
        core_1.Directive({
            selector: '[appSeo]'
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            platform_browser_1.Meta,
            platform_browser_1.Title])
    ], SEODirective);
    return SEODirective;
}());
exports.SEODirective = SEODirective;
//# sourceMappingURL=seo.directive.js.map