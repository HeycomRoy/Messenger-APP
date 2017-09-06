"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.BASE_URL = 'http://localhost:8180/auth';
        this.NAME_KEY = 'name';
        this.TOKEN_KEY = 'token';
    }
    Object.defineProperty(AuthService.prototype, "name", {
        get: function () {
            return localStorage.getItem(this.NAME_KEY);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "isAuthenticated", {
        get: function () {
            // "!!"this returns true or false
            return !!localStorage.getItem(this.TOKEN_KEY);
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.register = function (user) {
        var _this = this;
        delete user.confirmPassword;
        this.http.post(this.BASE_URL + '/register', user).subscribe(function (res) {
            // console.log(res.json());
            var authResponse = res.json();
            if (!authResponse.token) {
                return;
            }
            // Store the token in local storage
            localStorage.setItem(_this.TOKEN_KEY, authResponse.token);
            localStorage.setItem(_this.NAME_KEY, authResponse.firstName);
            //redirect
            _this.router.navigate(['/']);
        });
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map