// import { Component, Output, EventEmitter } from '@angular/core';     //******* with out the viewChild
import { Component } from '@angular/core';
import { WebService } from './web.service';
import { AuthService} from './auth.service';

@Component({
  selector: 'new-message',
  template: `
      <md-card class="card">
          <md-card-content>
              <!--<md-input-container>-->
                  <!--&lt;!&ndash;two way bundling [(ngModel)] also need to import in app.module.ts&ndash;&gt;-->
                  <!--<input [(ngModel)]="message.owner" mdInput placeholder="Name"/>-->
              <!--</md-input-container>-->
              <md-input-container>
                  <textarea [(ngModel)]="message.text" mdInput placeholder="Message"></textarea>
              </md-input-container>
              <md-card-actions>
                  <button (click)="post()" md-button color="primary">POST</button>
              </md-card-actions>
          </md-card-content>
      </md-card>
  `
})

export class NewMessageComponent {

  // @Output() onPosted = new EventEmitter();    //******* with out the viewChild

  constructor(private webService: WebService, private auth: AuthService) {}

  message = {
    owner: this.auth.name,
    text: ""
  }

  post() {
    // console.log(this.message);
    this.webService.postMessage(this.message);
    // this.onPosted.emit(this.message);    //******* with out the viewChild
  }

}
