"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var about_page_component_1 = require("./components/about-page/about-page.component");
var about_page_resolver_1 = require("./resolvers/about-page.resolver");
exports.miscAboutRoutes = [
    {
        path: '',
        component: about_page_component_1.AboutPageComponent,
        resolve: {
            data: about_page_resolver_1.AboutPageResolver
        }
    }
];
var MiscAboutModule = /** @class */ (function () {
    function MiscAboutModule() {
    }
    MiscAboutModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                about_page_component_1.AboutPageComponent
            ],
            imports: [
                router_1.RouterModule.forChild(exports.miscAboutRoutes),
                common_1.CommonModule
            ],
            providers: [
                about_page_resolver_1.AboutPageResolver
            ]
        })
    ], MiscAboutModule);
    return MiscAboutModule;
}());
exports.MiscAboutModule = MiscAboutModule;
//# sourceMappingURL=misc-about.module.js.map