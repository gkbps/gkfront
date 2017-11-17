import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { LocalStorageService } from './localStorage.service';

@Injectable()
export class SettingService {
  private wkBarStatus = new Subject<any>();
  private alertType = new Subject<any>();

  private navType = new Subject<any>();
  private navEffect = new Subject<any>();

  constructor(
   private localStorage: LocalStorageService,
  ){ }

  toggleWkBarStatus(status: boolean = false) {
    let currentWkBarStatus = !this.localStorage.getWkBar();
    if (status) {
      currentWkBarStatus = status;
    }
    this.localStorage.setWkBar(currentWkBarStatus);
    this.wkBarStatus.next(currentWkBarStatus);
    return currentWkBarStatus;
  }

  getWkBarStatus(): Observable<any> {
    return this.wkBarStatus.asObservable();
  }

  changeAlertType(alertType: string) {
    this.localStorage.setAlertType(alertType);
    this.alertType.next(alertType);
  }

  getAlertType(): Observable<any> {
    return this.alertType.asObservable();
  }

  changeNavType(navType: string) {
    this.localStorage.setNavType(navType);
    this.navType.next(navType);
  }

  getNavType(): Observable<any> {
    return this.navType.asObservable();
  }

  changeNavEffect(navEffect: string) {
    this.localStorage.setNavEffect(navEffect);
    this.navEffect.next(navEffect);
  }

  getNavEffect(): Observable<any> {
    return this.navEffect.asObservable();
  }

}
