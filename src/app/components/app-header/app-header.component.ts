// External
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

// Internal
import { AppConfig } from '../../app.config';
import {
  LocalStorageService,
  SecurityService,
  TcodeService,
  LanguageService
} from '../../nga/services';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.scss'],
})
export class AppHeader {
  username;
  avatar;
  lang;

  countNotification = 5;
  paramNotification = { value: this.countNotification };
  countMessage = 10;
  paramMessage = { value: this.countMessage };
  countTask = 15;
  paramTask = { value: this.countTask };
  countComment = 20;

  // public disabled = false;
  // public status: {isopen: boolean} = {isopen: false};
  //
  // public toggled(open: boolean): void {
  //   console.log('Dropdown is now: ', open);
  // }
  //
  // public toggleDropdown($event: MouseEvent): void {
  //   $event.preventDefault();
  //   $event.stopPropagation();
  //   this.status.isopen = !this.status.isopen;
  // }

  public tcodeExecution: string = '';

  constructor(
    private localStorage: LocalStorageService,
    private translate: TranslateService,
    private securityService: SecurityService,
    private tcodeService: TcodeService,
    private router: Router,
    private languageService: LanguageService,
    private config: AppConfig,
  ) {
    // Initialize language
    this.lang = localStorage.getLang();
    translate.use(this.lang);
  }

  ngOnInit(
  ): void {
    const user = this.securityService.getCurrentUser();
    this.username = user.username;

    const rootPath = this.config.apiUrl;
    this.avatar = rootPath + '/repo/' + this.securityService.getToken() + '/users/' + user.avatar;
    // console.log(this.avatar);
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
  }

  public logOut() {
    this.securityService.logOut();
  }
}
