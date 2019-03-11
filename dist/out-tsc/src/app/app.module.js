"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var common_1 = require("@nguniversal/common");
var http_1 = require("@angular/common/http");
var common_2 = require("@angular/common");
var animations_1 = require("@angular/platform-browser/animations");
var environment_1 = require("./../environments/environment");
var app_routes_1 = require("./app.routes");
var core_module_1 = require("./core/core.module");
var shared_module_1 = require("./shared/shared.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule.withServerTransition({ appId: 'my-app' }),
                http_1.HttpClientModule,
                router_1.RouterModule.forRoot(app_routes_1.rootRoutes, {
                    // enableTracing :true, // For debugging
                    preloadingStrategy: router_1.PreloadAllModules,
                    initialNavigation: 'enabled',
                    useHash: false
                }),
                core_module_1.CoreModule,
                shared_module_1.SharedModule,
                animations_1.BrowserAnimationsModule,
                common_1.TransferHttpCacheModule
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                {
                    provide: common_2.APP_BASE_HREF,
                    useValue: "" + environment_1.environment.BASE_URL
                }
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map