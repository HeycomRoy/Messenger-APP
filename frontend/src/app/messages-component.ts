import { Component } from '@angular/core';
import { WebService} from './web.service';

@Component({
  selector: 'messages',
  template: `
      <div *ngFor="let message of webService.messages">
          <md-card class="card">
              <md-card-title>{{message.owner}}</md-card-title>
              <md-card-content>{{message.text}}</md-card-content>
          </md-card>
      </div> 
  `
})

export class MessageComponent {

  constructor(private webService: WebService) {}

}

