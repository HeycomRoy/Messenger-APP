// import { Component, ViewChild } from '@angular/core';    //******this without using view child
import { Component } from '@angular/core';
import { MessageComponent} from './messages-component';
import { NewMessageComponent} from './new-message.component';
import { NavComponent} from './nav.component';

@Component({
  selector: 'home',
  template: `
    <new-message></new-message>
    <messages></messages>
  `,
})
export class HomeComponent  {}
