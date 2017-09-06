import { Component } from '@angular/core';
import { AuthService} from './auth.service';

@Component({
  selector: 'nav',
  template: `
      <md-toolbar color="primary">
        <button md-button routerLink="/">Message APP</button>
        <button md-button routerLink="/messages">Messages</button>
        <span style="flex: 1 1 auto;"></span> <!--Style push everything below to the right-->
        <button *ngIf="!auth.isAuthenticated" md-button routerLink="/register">Register</button>
        <!-- checks if the user authenticated -->
        <button *ngIf="auth.isAuthenticated" md-button routerLink="/">Welcome {{auth.name}}</button>
        <button *ngIf="auth.isAuthenticated" md-button (click)="auth.logout()">Logout</button>
      </md-toolbar>
  `
})

export class NavComponent {

  constructor(private auth: AuthService) {}

}

