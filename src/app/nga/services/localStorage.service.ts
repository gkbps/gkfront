import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor(
  ) { }

  /*****************************************************************************
   * TO UTILIZE LOCAL STORAGE
   * setLocalStorage
   * getLocalStorage
   * setWorkingLge
   * getWorkingLge
   * setWorkingEnv
   * getWorkingEnv
   *****************************************************************************/
  setLocalStorage(item: string, value: any) {
    localStorage.setItem(item, value);
  }

  getLocalStorage(item: string): any {
    return localStorage.getItem(item);
  }

  removeLocalStorage(item: string) {
    localStorage.removeItem(item);
  }

  setLang(lang: string) {
    localStorage.setItem('lang', lang);
  }

  getLang(): string {
    let lang = localStorage.getItem('lang');
    if (!lang) {
      lang = 'en';
      this.setLang(lang);
    }
    return lang;
  }

  setAlertType(alertType: string) {
    localStorage.setItem('alertType', alertType);
  }

  getAlertType(): string {
    let alertType = localStorage.getItem('alertType');
    if (!alertType) {
      alertType = 'alert';
      this.setAlertType(alertType);
    }
    return alertType;
  }

  setNavType(navType: string) {
    localStorage.setItem('navType', navType);
  }

  getNavType(): string {
    let navType = localStorage.getItem('navType');
    if (!navType) {
      navType = 'box';
      this.setNavType(navType);
    }
    return navType;
  }

  setEnv(env: string = '') {
    if (env == '' ) {
      env = JSON.stringify({
        'wk': {
          'lge': '',
          'year': new Date().getFullYear()
        },
        'pref': {
          'navStyle': 'box',
          'device': 'laptop',
          'home': '',
          'theme': '',
        }
      });
    }
    console.log(env);
    localStorage.setItem('env', env);
  }

  getEnv(): any {
    return JSON.parse(localStorage.getItem('env'));
  }

  setWkLge(lge: string) {
    let env = this.getEnv();
    env.wk.lge = lge.toLowerCase();
    this.setEnv(JSON.stringify(env));
  }

  getWkLge(): string {
    let env = this.getEnv();
    return env.wk.lge;
  }

  setWkYear(year: string) {
    let env = this.getEnv();
    env.wk.year = year.toLowerCase();
    this.setEnv(JSON.stringify(env));
  }

  getWkYear(): string {
    let env = this.getEnv();
    return env.wk.year;
  }

  pushError(error) {
    if (localStorage.getItem('errorHistory') === null) {
      localStorage.setItem('errorHistory', '[]');
    }
    const errorHistory: any[] = JSON.parse(localStorage.getItem('errorHistory'));
    while (errorHistory.length >= 10 ) {
      errorHistory.shift();
    }
    errorHistory.push(error);
    localStorage.setItem('errorHistory', JSON.stringify(errorHistory));
  }

  getErrors(last: boolean): string {
    const errors = JSON.parse(localStorage.getItem('errorHistory'));
    if (last) {
      return JSON.stringify(errors[errors.length-1])
    } else {
      return JSON.stringify(errors);
    }
  }

}
