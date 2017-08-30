// import { Component, ViewChild } from '@angular/core';    //******this without using view child
import { Component } from '@angular/core';
import { MessageComponent} from './messages-component';
import { NewMessageComponent} from './new-message.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>Message APP</h1> 
    <!--<new-message (onPosted)="onPosted($event)"></new-message>--> <!--without viewChild-->
    <new-message></new-message>
    <messages></messages>
  `,
})
export class AppComponent  {

  // @ViewChild(MessageComponent) messages: MessageComponent;    //******this without using view child

  // onPosted(message) {                                        //******this without using view child
  //   this.messages.messages.push(message);
  // }

}
