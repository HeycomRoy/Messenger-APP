"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var MessageComponent = (function () {
    function MessageComponent() {
        this.messages = [{ text: 'text one', owner: 'Tim' }, { text: 'text two', owner: 'Pet' }];
    }
    return MessageComponent;
}());
MessageComponent = __decorate([
    core_1.Component({
        selector: 'messages',
        template: "\n    <div *ngFor=\"let message of messages\">\n      <md-card style=\"margin: 8px;\">\n        <md-card-title>{{message.owner}}</md-card-title>\n        <md-card-content>{{message.text}}</md-card-content>\n      </md-card>\n    </div> "
    })
], MessageComponent);
exports.MessageComponent = MessageComponent;
//# sourceMappingURL=messages-component.js.map