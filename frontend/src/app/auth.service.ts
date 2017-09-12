import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {

    BASE_URL = 'http://localhost:8180/auth';
    NAME_KEY = 'name';
    TOKEN_KEY = 'token';

    constructor(private http: Http, private router: Router) {}

    get name() {
        return localStorage.getItem(this.NAME_KEY);
    }

    get isAuthenticated() {
        // "!!"this returns true or false
        return !!localStorage.getItem(this.TOKEN_KEY);
    }

    get tokenHeader() {
      var header = new Headers({'Authorization': 'Bearer ' + localStorage.getItem(this.TOKEN_KEY)});
      return new RequestOptions({ headers: header});
    }

    login(loginData) {
        // console.log(loginData); //test the data
        this.http.post(this.BASE_URL + '/login', loginData).subscribe(res => {
            console.log(res.json());
            this.authenticate(res);
        });
    }

    register(user) {
        delete user.confirmPassword;
        this.http.post(this.BASE_URL + '/register', user).subscribe(res => {
            // console.log(res.json());
            this.authenticate(res);
        });
    }

    logout() {
      localStorage.removeItem(this.TOKEN_KEY);
      localStorage.removeItem(this.NAME_KEY);
    }

    authenticate(res){
        var authResponse = res.json();

        if (!authResponse.token) {
          return;
        }

        // Store the token in local storage
        localStorage.setItem(this.TOKEN_KEY, authResponse.token);
        localStorage.setItem(this.NAME_KEY, authResponse.firstName);
        //redirect
        this.router.navigate(['/']);
    }
}
