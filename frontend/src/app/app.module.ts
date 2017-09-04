import { NgModule }      from '@angular/core';
import { RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { MessagesComponent } from './messages-component';
import { WebService } from './web.service';
import { NewMessageComponent } from './new-message.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }  from './app.component';
import { NavComponent } from './nav.component';
import { HomeComponent} from './home.component';

var routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
      path:'messages',
      component: MessagesComponent
    },
    {
      path:'messages/:name',
      component: MessagesComponent
    }
];

@NgModule({
  imports:      [ BrowserModule, MaterialModule, FormsModule, BrowserAnimationsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, MessagesComponent, NewMessageComponent, NavComponent, HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ WebService ]
})
export class AppModule { }
