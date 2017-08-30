import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { MessageComponent } from './messages-component';
import { WebService } from './web.service';
import { NewMessageComponent } from './new-message.component';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, MaterialModule, FormsModule ],
  declarations: [ AppComponent, MessageComponent, NewMessageComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ WebService ]
})
export class AppModule { }
