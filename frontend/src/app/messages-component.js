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
var web_service_1 = require("./web.service");
var router_1 = require("@angular/router");
var MessagesComponent = (function () {
    function MessagesComponent(webService, route) {
        this.webService = webService;
        this.route = route;
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var name = this.route.snapshot.params.name;
        this.webService.getMessages(name);
        this.webService.getUser().subscribe();
    };
    return MessagesComponent;
}());
MessagesComponent = __decorate([
    core_1.Component({
        selector: 'messages',
        template: "\n      <div *ngFor=\"let message of webService.messages | async\">\n          <md-card class=\"card\">\n              <md-card-title [routerLink]=\"['/messages', message.owner]\" style=\"cursor: pointer;\">{{message.owner}}</md-card-title>\n              <md-card-content>{{message.text}}</md-card-content>\n          </md-card>\n      </div> \n  "
    }),
    __metadata("design:paramtypes", [web_service_1.WebService, router_1.ActivatedRoute])
], MessagesComponent);
exports.MessagesComponent = MessagesComponent;
//# sourceMappingURL=messages-component.js.map