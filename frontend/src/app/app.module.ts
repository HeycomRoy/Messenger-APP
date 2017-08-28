import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule} from '@angular/material';
import { MessageComponent} from './messages-component';


import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, MaterialModule ],
  declarations: [ AppComponent, MessageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
