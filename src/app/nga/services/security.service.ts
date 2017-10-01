import { Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

import { TcodeService } from './tcode.service';

@Injectable()
export class SecurityService {

  constructor(
    private tcodeService: TcodeService,
  ) {
  }

  /****************************************************************************
   * TO CREATE AUTHORIZATION HEADER WITH JWT TOKEN
   ****************************************************************************/
  jwt() {
      // get authorization header with jwt token from localStorage
      const currentUser: any = JSON.parse(localStorage.getItem('currentUser'));
      const awt: string = JSON.stringify(currentUser.awt);
      if (currentUser && currentUser.token) {
          const headers = new Headers({
            'authorization': 'Bearer ' + currentUser.token,
            'awt': awt, // Array Web Token
          });
          return new RequestOptions({ headers: headers });
      }
  }

  /****************************************************************************
   * SETTER / GETTER FOR SYSTEM SENSITIVE INFORMATION
   * Token
   * currentUser
   * Mana
   ****************************************************************************/

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  setCurrentUser(user: string) {
    localStorage.setItem('currentUser', user);
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  setMana(mana: string) {
    localStorage.setItem('mana', mana);
  }

  getMana(): string[] {
    return (JSON.parse(localStorage.getItem('mana')));
  }

  getDecodedMana(): string[] {
    return this.tcodeService.decode_array(JSON.parse(localStorage.getItem('mana')));
  }
  /****************************************************************************
   * TO LOG OUT AND CLEAN UP SESSION DATA
   ****************************************************************************/
  logOut() {
    // remove user from local storage to log user out
    localStorage.removeItem('history');
    localStorage.removeItem('mana');
    localStorage.removeItem('currentUser');
  }

}
