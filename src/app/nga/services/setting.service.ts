import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { LocalStorageService } from './localStorage.service';

@Injectable()
export class SettingService {
  private alertType = new Subject<any>();
  private navType = new Subject<any>();

  constructor(
   private localStorage: LocalStorageService,
  ){ }

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

}
