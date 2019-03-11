"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("./core");
exports.rootRoutes = [
    // STORE
    {
        path: '',
        loadChildren: './store/home/store-home.module#StoreHomeModule'
    },
    {
        path: 'products',
        loadChildren: './store/listing/store-listing.module#StoreListingModule'
    },
    {
        path: 'product/:slug',
        loadChildren: './store/product/store-product.module#StoreProductModule'
    },
    // AUTH
    {
        path: 'login',
        loadChildren: './auth/signin/auth-signin.module#AuthSigninModule'
    },
    {
        path: 'create-account',
        loadChildren: './auth/signup/auth-signup.module#AuthSignupModule'
    },
    {
        path: 'create-account2',
        loadChildren: './auth/signup2/auth-signup.module#AuthSignup2Module'
    },
    {
        path: 'create-account_election',
        loadChildren: './auth/signup_election/auth-signup-election.module#AuthSignup-electionModule'
    },
    {
        path: 'recover-password',
        loadChildren: './auth/recover-password/auth-recover-password.module#AuthRecoverPasswordModule'
    },
    // USER
    {
        path: 'user',
        loadChildren: './user/account/user-account.module#UserAccountModule'
    },
    // MISC
    {
        path: 'about',
        loadChildren: './misc/about/misc-about.module#MiscAboutModule'
    },
    {
        path: '404',
        component: core_1.Error404PageComponent
    },
    // There's a bug that's preventing wild card routes to be lazy loaded (see: https://github.com/angular/angular/issues/13848)
    // That's why the Error page should be eagerly loaded
    {
        path: '**',
        component: core_1.Error404PageComponent
    }
];
//# sourceMappingURL=app.routes.js.map