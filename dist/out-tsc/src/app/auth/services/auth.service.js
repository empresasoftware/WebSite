"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        // MOCK:  Define a variable to store the user state. Don't use in production.
        //        You should call your own stateless API instead (and no need to store the user state)
        this.userAuthenticated = false;
        this.loggedInSubject = new rxjs_1.BehaviorSubject(this.isAuthenticated());
    }
    AuthService.prototype.canActivate = function (route, state) {
        // Here you should check if your user is logged in then return true, else return false and redirect him to login page
        if (!this.isAuthenticated()) {
            this.router.navigate(['/login']);
        }
        return this.isAuthenticated();
    };
    AuthService.prototype.loggedInObservable = function () {
        return this.loggedInSubject.asObservable();
    };
    AuthService.prototype.isAuthenticated = function () {
        // EXAMPLE: Call your API and check if the user is authenticated
        // return this.userApi.isAuthenticated();
        // MOCK: Don't use in production. Call your own API (as the example above)
        return this.userAuthenticated;
    };
    AuthService.prototype.signup = function (name, email, password, newsletter) {
        // EXAMPLE: Call your API and create the user in the database
        // return this.userApi.create({ email: email, password: password, name: name, newsletter: newsletter });
        // MOCK: Simulate the observable returned by the API
        var signupObservable = rxjs_1.of(true);
        return signupObservable;
    };
    AuthService.prototype.signin = function (email, password, rememberMe) {
        // EXAMPLE: Call your API and signin the user
        // const signinObservable = this.userApi.login({ email: email, password: password }, false, rememberMe);
        var _this = this;
        // MOCK: Simulate the observable returned by the API
        var signinObservable = rxjs_1.of(true);
        signinObservable.subscribe(function (res) {
            _this.userAuthenticated = res;
            _this.loggedInSubject.next(res);
        });
        return signinObservable;
    };
    AuthService.prototype.logout = function () {
        // EXAMPLE: Call your API and logout the user
        // const logoutObservable = this.userApi.logout();
        var _this = this;
        // MOCK: Simulate the observable returned by the API
        var logoutObservable = rxjs_1.of(false);
        logoutObservable.subscribe(function (res) {
            _this.userAuthenticated = res;
            _this.loggedInSubject.next(res);
        }, function (err) {
            console.log('Logout ERROR', err);
        });
        return logoutObservable;
    };
    AuthService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.Router])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map