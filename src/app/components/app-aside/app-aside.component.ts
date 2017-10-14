import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import {
  LocalStorageService,
  SettingService
} from '../../nga/services';

@Component({
  selector: 'app-aside',
  templateUrl: './app-aside.component.html'
})
export class AppAside {
  alertType: string;
  navType: string;

  constructor(
    private localStorage: LocalStorageService,
    private settingService: SettingService,
  ) {
    this.alertType = localStorage.getAlertType();
    this.navType = localStorage.getNavType();
    console.log(this.navType == 'box');
    console.log(this.alertType == 'alert');
  }

  ngOnInit(): void {}

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
