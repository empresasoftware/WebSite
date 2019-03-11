"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var carousel_1 = require("ngx-bootstrap/carousel");
var background_image_component_1 = require("./background-image/background-image.component");
var breadcrumbs_component_1 = require("./breadcrumbs/breadcrumbs.component");
var breadcrumbs_directive_1 = require("./breadcrumbs/breadcrumbs.directive");
var color_radio_button_directive_1 = require("./color-radio-button/color-radio-button.directive");
var fill_container_component_1 = require("./fill-container/fill-container.component");
var percentage_bar_rating_component_1 = require("./percentage-bar-rating/percentage-bar-rating.component");
var preload_image_component_1 = require("./preload-image/preload-image.component");
var search_bar_component_1 = require("./search-bar/search-bar.component");
var star_rating_component_1 = require("./star-rating/star-rating.component");
var stylish_carousel_component_1 = require("./stylish-carousel/stylish-carousel.component");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                // Shared components
                background_image_component_1.BackgroundImageComponent,
                breadcrumbs_component_1.BreadcrumbsComponent,
                breadcrumbs_directive_1.BreadcrumbsDirective,
                color_radio_button_directive_1.ColorRadioButtonDirective,
                fill_container_component_1.FillContainerComponent,
                percentage_bar_rating_component_1.PercentageBarRatingComponent,
                preload_image_component_1.PreloadImageComponent,
                search_bar_component_1.SearchBarComponent,
                star_rating_component_1.StarRatingComponent,
                stylish_carousel_component_1.StylishCarouselComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                router_1.RouterModule,
                carousel_1.CarouselModule.forRoot()
            ],
            exports: [
                // Shared components
                background_image_component_1.BackgroundImageComponent,
                breadcrumbs_component_1.BreadcrumbsComponent,
                breadcrumbs_directive_1.BreadcrumbsDirective,
                color_radio_button_directive_1.ColorRadioButtonDirective,
                fill_container_component_1.FillContainerComponent,
                percentage_bar_rating_component_1.PercentageBarRatingComponent,
                preload_image_component_1.PreloadImageComponent,
                search_bar_component_1.SearchBarComponent,
                star_rating_component_1.StarRatingComponent,
                stylish_carousel_component_1.StylishCarouselComponent,
                // Re-export these modules to prevent repeated imports (see: https://angular.io/guide/ngmodule#re-exporting-other-modules)
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                router_1.RouterModule
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map