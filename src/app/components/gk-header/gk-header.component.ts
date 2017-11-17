// External
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

// Internal
import { AppConfig } from '../../app.config';
import {
  LocalStorageService,
  SecurityService,
  TcodeService,
  NavigationService,
  LanguageService,
  SettingService,
} from '../../nga/services';

@Component({
  selector: 'gk-header',
  templateUrl: './gk-header.component.html',
  styleUrls: ['./fixed.scss']
})
export class GkHeaderComponent {
  username;
  avatar;
  lang;
  currentWkBarStatus;

  public form: FormGroup;
  public tcodeExecution: string = '';

  constructor(
    private localStorage: LocalStorageService,
    private translate: TranslateService,
    private securityService: SecurityService,
    private tcodeService: TcodeService,
    private navigationService: NavigationService,
    private settingService: SettingService,
    private router: Router,

    private languageService: LanguageService,
    private config: AppConfig,
  ){
    // Initialize language
    this.lang = localStorage.getLang();
    translate.use(this.lang);
    this.currentWkBarStatus = this.localStorage.getWkBar();
  }

  ngOnInit(): void {
    const user = this.securityService.getCurrentUser();
    this.username = user.username;

    const rootPath = this.config.apiUrl;
    this.avatar = rootPath + '/repo/' + this.securityService.getToken() + '/users/' + user.avatar;
  }

  public keyDownFunction(event) {
    if (event.keyCode == 13) {
      const url: string = this.tcodeService.urlLead(this.tcodeExecution);
      console.log(url);
      this.tcodeExecution = '';
      this.router.navigate([url]);
    }
  }

  public changeLanguage(lang: string) {
    this.lang = lang;
    this.languageService.changeLanguage(lang);
    this.translate.use(lang);
    //return false; // prevent a href automatically link
  }

  public toggleWkBar() {
    console.log('Toggle WkBar');
    this.currentWkBarStatus = this.settingService.toggleWkBarStatus();
    return false;
  }

  public logOut() {
    // this.securityService.logOut();
    this.navigationService.gotoLogin();
  }

}
