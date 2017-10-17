import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import {
  SecurityService,
  LocalStorageService,
  SettingService,
  SessionService
} from '../../nga/services';

@Component({
  selector: 'app-aside',
  templateUrl: './app-aside.component.html'
})
export class AppAside {
  alertType: string;
  navType: string;
  lges: [any];
  wkLge: string;
  years: [any];
  wkYear: string;

  constructor(
    private securityService: SecurityService,
    private localStorage: LocalStorageService,
    private settingService: SettingService,
    private sessionService: SessionService,
  ) {
    this.alertType = localStorage.getAlertType();
    this.navType = localStorage.getNavType();
    console.log(this.navType == 'box');
    console.log(this.alertType == 'alert');
  }

  ngOnInit(): void {
    const user = this.securityService.getCurrentUser();

    this.lges = user.lges;

    const thisYear = new Date().getFullYear();
    this.years = [
      (thisYear-1).toString(),
      thisYear.toString()
    ];

    this.wkLge = this.securityService.getWkLge();
    this.wkYear = this.securityService.getWkYear();
  }

  changeWkParams($event) {
    // console.log($event);
    // console.log(this.wkLge, this.wkYear);
    this.securityService.setAwt(this.wkLge, this.wkYear);
    this.sessionService.updateAwt()
    .subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  public isBox() {
    return this.navType == 'box';
  }

  public isAlert() {
    return this.alertType == 'alert';
  }

  public changeAlertType() {
    if (this.alertType == 'alert') {
      this.alertType = 'toast';
      this.settingService.changeAlertType(this.alertType);
    } else {
      this.alertType = 'alert';
      this.settingService.changeAlertType(this.alertType);
    }
  }

  public changeNavType() {

    if (this.navType == 'box') {
      this.navType = 'round';
      this.settingService.changeNavType(this.navType);
    } else {
      this.navType = 'box';
      this.settingService.changeNavType(this.navType);
    }
  }

}
