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
var auth_service_1 = require("./auth.service");
var LoginComponent = (function () {
    function LoginComponent(auth) {
        this.auth = auth;
        this.loginData = {
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.login = function () {
        // console.log(this.loginData);
        this.auth.login(this.loginData);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        template: "\n      <md-card>\n          <md-input-container>\n              <input mdInput [(ngModel)]=\"loginData.email\" placeholder=\"Email\" type=\"email\"/>\n          </md-input-container>\n          <md-input-container>\n              <input mdInput [(ngModel)]=\"loginData.password\" placeholder=\"Password\" type=\"password\"/>\n          </md-input-container>\n          <button md-raised-button color=\"primary\" (click)=\"login()\">Login</button>\n      </md-card>\n  "
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map