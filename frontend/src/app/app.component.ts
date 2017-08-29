import { Component } from '@angular/core';
import { MessageComponent} from './messages-component';
import { NewMessageComponent} from './new-message.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>Message APP</h1> 
    <new-message></new-message>
    <messages></messages>
  `,
})
export class AppComponent  {}
