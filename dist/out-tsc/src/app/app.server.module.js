"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var platform_server_1 = require("@angular/platform-server");
var module_map_ngfactory_loader_1 = require("@nguniversal/module-map-ngfactory-loader");
var app_module_1 = require("./app.module");
var app_component_1 = require("./app.component");
var common_1 = require("@angular/common");
var animations_1 = require("@angular/platform-browser/animations");
var environment_1 = require("./../environments/environment");
var AppServerModule = /** @class */ (function () {
    function AppServerModule() {
    }
    AppServerModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                // The AppServerModule should import your AppModule followed
                // by the ServerModule from @angular/platform-server.
                app_module_1.AppModule,
                platform_server_1.ServerModule,
                module_map_ngfactory_loader_1.ModuleMapLoaderModule,
                platform_server_1.ServerTransferStateModule,
                animations_1.NoopAnimationsModule
            ],
            // Since the bootstrapped component is not inherited from your
            // imported AppModule, it needs to be repeated here.
            bootstrap: [app_component_1.AppComponent],
            providers: [
                {
                    provide: common_1.APP_BASE_HREF,
                    useValue: "" + environment_1.environment.BASE_URL
                }
            ]
        })
    ], AppServerModule);
    return AppServerModule;
}());
exports.AppServerModule = AppServerModule;
//# sourceMappingURL=app.server.module.js.map