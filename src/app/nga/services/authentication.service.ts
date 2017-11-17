import { AppConfig } from '../../app.config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { LocalStorageService } from './localStorage.service';

@Injectable()
export class AuthenticationService {
  constructor(
    private http: Http,
    private config: AppConfig,
    private localStorage: LocalStorageService
  ) { }

  login(username: string, password: string, token: string) {
    return this.http.post(
      this.config.apiUrl + '/users/authenticate',
      { username: username, password: password, token: token })
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        const user = response.json();
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('mana', JSON.stringify(user.tcodes));
          delete user.tcodes;

          let env = this.localStorage.getEnv();
          env.wk.lge = user.defaultLge;
          this.localStorage.setEnv(JSON.stringify(env));
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
    });
  }

}
