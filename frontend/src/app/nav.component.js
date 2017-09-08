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
var NavComponent = (function () {
    function NavComponent(auth) {
        this.auth = auth;
    }
    return NavComponent;
}());
NavComponent = __decorate([
    core_1.Component({
        selector: 'nav',
        template: "\n      <md-toolbar color=\"primary\">\n        <button md-button routerLink=\"/\">Message APP</button>\n        <button md-button routerLink=\"/messages\">Messages</button>\n        <span style=\"flex: 1 1 auto;\"></span> <!--Style push everything below to the right-->\n        <button *ngIf=\"!auth.isAuthenticated\" md-button routerLink=\"/login\">Login</button>\n        <button *ngIf=\"!auth.isAuthenticated\" md-button routerLink=\"/register\">Register</button>\n        <!-- checks if the user authenticated -->\n        <button *ngIf=\"auth.isAuthenticated\" md-button routerLink=\"/user\">Welcome {{auth.name}}</button>\n        <button *ngIf=\"auth.isAuthenticated\" md-button (click)=\"auth.logout()\">Logout</button>\n      </md-toolbar>\n  "
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], NavComponent);
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map