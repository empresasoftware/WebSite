"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var collapse_1 = require("ngx-bootstrap/collapse");
var http_client_1 = require("@ngx-loading-bar/http-client");
var router_1 = require("@ngx-loading-bar/router");
// Core components
var error_404_page_component_1 = require("./404/error-404-page.component");
var footer_component_1 = require("./footer/footer.component");
var seo_directive_1 = require("./seo/seo.directive");
var top_navbar_component_1 = require("./top-navbar/top-navbar.component");
// Required modules
var shared_1 = require("../shared");
var auth_service_1 = require("../auth/services/auth.service");
var breadcrumbs_service_1 = require("../shared/breadcrumbs/breadcrumbs.service");
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                top_navbar_component_1.TopNavbarComponent,
                footer_component_1.FooterComponent,
                error_404_page_component_1.Error404PageComponent,
                seo_directive_1.SEODirective
            ],
            imports: [
                shared_1.SharedModule,
                collapse_1.CollapseModule,
                http_client_1.LoadingBarHttpClientModule,
                router_1.LoadingBarRouterModule
            ],
            providers: [
                auth_service_1.AuthService,
                breadcrumbs_service_1.BreadcrumbsService
            ],
            exports: [
                top_navbar_component_1.TopNavbarComponent,
                footer_component_1.FooterComponent,
                error_404_page_component_1.Error404PageComponent,
                seo_directive_1.SEODirective,
                // Re-exportable modules
                http_client_1.LoadingBarHttpClientModule,
                router_1.LoadingBarRouterModule
            ]
        })
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map