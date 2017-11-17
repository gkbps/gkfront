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

  /* Customized localStorage */
  setLocalStorage(item: string, value: any) {
    localStorage.setItem(item, value);
  }

  getLocalStorage(item: string): any {
    return localStorage.getItem(item);
  }

  removeLocalStorage(item: string) {
    localStorage.removeItem(item);
  }

  /* Enviroment */
  setEnv(env: string = '') {
    if (env == '' ) {
      env = JSON.stringify({
        'wk': {
          'status': true,
          'lge': '',
          'year': new Date().getFullYear()
        },
        'pref': {
          'wrapperStatic': true,
          'lang': 'en',
          'navType': 'circle',
          'navEffect': 'effect1',
          'alertType': 'alert',
          'layout':'moody',
          'theme':'bluegrey',
          'dark': false,
          'home': '',
          'fav': [
            {
                label: 'Menu Hierarchy', icon: 'menu',
                items: [
                    {
                        label: 'Submenu 1', icon: 'subject',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'subject',
                                items: [
                                    {label: 'Submenu 1.1.1', icon: 'subject'},
                                    {label: 'Submenu 1.1.2', icon: 'subject'},
                                    {label: 'Submenu 1.1.3', icon: 'subject'},
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'subject',
                                items: [
                                    {label: 'Submenu 1.2.1', icon: 'subject'},
                                    {label: 'Submenu 1.2.2', icon: 'subject'}
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'subject',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'subject',
                                items: [
                                    {label: 'Submenu 2.1.1', icon: 'subject'},
                                    {label: 'Submenu 2.1.2', icon: 'subject'},
                                    {label: 'Submenu 2.1.3', icon: 'subject'}
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'subject',
                                items: [
                                    {
                                      label: 'Submenu 2.2.1', icon: 'subject',
                                      items: [
                                          {label: 'Submenu 2.2.1.2', icon: 'subject'},
                                          {label: 'Submenu 2.2.2.2', icon: 'subject'}
                                      ]
                                    },
                                    {label: 'Submenu 2.2.2', icon: 'subject'}
                                ]
                            },
                        ]
                    }
                ]
            }

          ]
        }
      });
    }
    // console.log(env);
    localStorage.setItem('env', env);
  }

  getEnv(): any {
    const env = localStorage.getItem('env');
    if (env) {
      return JSON.parse(env);
    } else {
      this.setEnv(); // To avoid null value
      return JSON.parse(localStorage.getItem('env'));
    }
  }

  /* Language */
  setWkBar(wkBarStatus: boolean) {
    let env = this.getEnv();
    if (env.wk.status !== wkBarStatus) {
      env.wk.status = wkBarStatus;
      this.setEnv(JSON.stringify(env));
    }
  }

  getWkBar(): boolean {
    const env = this.getEnv();
    return (env.wk.status);
  }

  /* Language */
  setLang(lang: string ='en') {
    let env = this.getEnv();
    if (env.pref.lang !== lang) {
      env.pref.lang = lang;
      this.setEnv(JSON.stringify(env));
    }
  }

  getLang(): string {
    const env = this.getEnv();
    return (env.pref.lang);
  }

  /* Layout */
  setLayout(layout: string ='moody') {
    let env = this.getEnv();
    if (env.pref.layout !== layout) {
      env.pref.layout = layout;
      this.setEnv(JSON.stringify(env));
    }
  }

  getLayout(): string {
    const env = this.getEnv();
    return (env.pref.layout);
  }

  /* Theme */
  setTheme(theme: string ='bluegrey') {
    let env = this.getEnv();
    if (env.pref.theme !== theme) {
      env.pref.theme = theme;
      this.setEnv(JSON.stringify(env));
    }
  }

  getTheme(): string {
    const env = this.getEnv();
    return (env.pref.theme);
  }

  /* Dark */
  setDark(dark: boolean = false) {
    let env = this.getEnv();
    if (env.pref.dark !== dark) {
      env.pref.dark = dark;
      this.setEnv(JSON.stringify(env));
    }
  }

  getDark(): boolean {
    const env = this.getEnv();
    return (env.pref.dark);
  }

  /* Alert Type */
  setAlertType(alertType: string = 'alert') {
    let env = this.getEnv();
    if (env.pref.alertType !== alertType) {
      env.pref.alertType = alertType;
      this.setEnv(JSON.stringify(env));
    }
  }

  getAlertType(): string {
    const env = this.getEnv();
    return (env.pref.alertType);
  }

  /* Nav Type */
  setNavType(navType: string = 'circle') {
    let env = this.getEnv();
    if (env.pref.navType !== navType) {
      env.pref.navType = navType;
      this.setEnv(JSON.stringify(env));
    }
  }

  getNavType(): string {
    const env = this.getEnv();
    return (env.pref.navType);
  }

  /* Nav Effect */
  setNavEffect(navEffect: string = 'effect1') {
    let env = this.getEnv();
    if (env.pref.navEffect !== navEffect) {
      env.pref.navEffect = navEffect;
      this.setEnv(JSON.stringify(env));
    }
  }

  getNavEffect(): string {
    const env = this.getEnv();
    return (env.pref.navEffect);
  }

  /* Working Legal Entity */
  setWkLge(lge: string) {
    const env = this.getEnv();
    const lcLge = lge.toLowerCase();
    if (env.wk.lge !== lcLge) {
      env.wk.lge = lcLge;
      this.setEnv(JSON.stringify(env));
    }
  }

  getWkLge(): string {
    const env = this.getEnv();
    return env.wk.lge;
  }

  /* Working Year */
  setWkYear(year: string) {
    const env = this.getEnv();
    if (env.wk.year !== year) {
      env.wk.year = year;
      this.setEnv(JSON.stringify(env));
    }
  }

  getWkYear(): string {
    const env = this.getEnv();
    return env.wk.year;
  }

  /* Wrapper Static State */
  setWrapperStatic(value) {
    const env = this.getEnv();
    if (env.pref.wrapperStatic !== value) {
      env.pref.wrapperStatic = value;
      this.setEnv(JSON.stringify(env));
    }
  }

  getWrapperStatic() {
    const env = this.getEnv();
    return env.pref.wrapperStatic;
  }

  /* Error */
  clearError() {
    localStorage.setItem('errorHistory', '[]');
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

  /* Favourite */
  setFavourite(fav: any = []) {
    let env = this.getEnv();    
    env.pref.fav = fav;
    this.setEnv(JSON.stringify(env));
  }

  getFavourite() {
    const env = this.getEnv();
    return (env.pref.fav);
  }

}
