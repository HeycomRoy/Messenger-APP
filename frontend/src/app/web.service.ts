import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Subject} from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { MdSnackBar} from '@angular/material';
import { AuthService } from './auth.service';

@Injectable()
export class WebService {

  BASE_URL = 'http://localhost:8180/api';

  private messageStore = [];

  private messageSubject = new Subject();

  messages = this.messageSubject.asObservable();

  constructor(private http: Http, private sb: MdSnackBar, private auth: AuthService) {
      this.getMessages('');
  }

  getMessages(user) {

      user = (user) ? '/' + user : '';
      this.http.get(this.BASE_URL + '/messages' + user).subscribe(response => {
          this.messageStore = response.json();
          this.messageSubject.next(this.messageStore);
      }, error => {
        this.handleError('Unable to get messages!!');
      });
  }

  async postMessage(message) {
    try {
        var response = await this.http.post(this.BASE_URL + '/messages', message).toPromise();
        this.messageStore.push(response.json());
        this.messageSubject.next(this.messageStore);
    }catch (error) {
        this.handleError('Unable to post a new message!!');
    }

  }

  getUser() {
      return this.http.get(this.BASE_URL + '/users/me', this.auth.tokenHeader).map(res => res.json());
  }

  saveUser(userData) {
    return this.http.post(this.BASE_URL + '/users/me', userData, this.auth.tokenHeader).map(res => res.json());
  }

  //error handling function
  private handleError(error) {
    console.log(error);
    this.sb.open(error, 'close', {duration: 4000});
  }

}
