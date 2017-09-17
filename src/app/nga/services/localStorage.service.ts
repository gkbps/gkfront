import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor(
  ) { }

  /*****************************************************************************
   * TO UTILIZE LOCAL STORAGE
   * setLocalStorage
   * getLocalStorage
   * getCurrentUser
   * getWorkingLge
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

  setWorkingLge(lge: string) {
    localStorage.setItem('workingLge', lge);
  }

  getWorkingLge(): string {
    return localStorage.getItem('workingLge');
  }

  setCollapsePref(pref: boolean) {
    this.setLocalStorage('collapsePref', pref);
  }

  getCollapsePref(): boolean {
    if (this.getLocalStorage('collapsePref') != undefined) {
      return this.getLocalStorage('collapsePref');
    } else {
      this.setCollapsePref(true);
      return false;
    }

  }

}
