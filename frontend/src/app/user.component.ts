// import { Component, Output, EventEmitter } from '@angular/core';     //******* with out the viewChild
import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component({
  selector: 'user',
  template: `
      <md-card class="card">
          <md-card-content>
              <md-input-container>
                  <!--two way bundling [(ngModel)] also need to import in app.module.ts-->
                  <input [(ngModel)]="model.firstName" mdInput placeholder="Fist Name"/>
              </md-input-container>
              <md-input-container>
                  <input [(ngModel)]="model.lastName" mdInput placeholder="Last Name">
              </md-input-container>
              <md-card-actions>
                  <button (click)="post()" md-raised-button color="primary">Save</button>
              </md-card-actions>
          </md-card-content>
      </md-card>
  `
})

export class UserComponent {

  // @Output() onPosted = new EventEmitter();    //******* with out the viewChild

  constructor(private webService: WebService) {}

  model = {
    firstName: "",
    lastName: ""
  }

  ngOnInit() {
      this.webService.getUser().subscribe(res => {
          this.model.firstName = res.firstName;
          this.model.lastName = res.lastName;
      });
  }

  post() {
    // console.log(this.message);
    this.webService.saveUser(this.model).subscribe();
    // this.onPosted.emit(this.message);    //******* with out the viewChild
  }

}
