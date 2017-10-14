// External
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { MenubarModule, MenuItem } from 'primeng/primeng';

import { Subscription } from 'rxjs/Subscription';
import { TranslateService } from '@ngx-translate/core';

// Internal
import {
  SecurityService,
  TcodeService,
  NavigationService,
  LocalStorageService,
  LanguageService
} from '../../../../../../nga/services';

@Component({
  selector: 'gkcln-80',
  templateUrl: './gkcln80.html',
  styleUrls: ['./gkcln80.scss'],
})

export class GkCln80Component implements OnInit, OnDestroy {

  prefix: string = 'gkcln';
  public sharedImagePath: string = 'modules/shared/';

  userRights: Array<any>;

  title: string;
  subtitle: string;
  navItems: any[];

  langSubscription: Subscription;

  constructor(
    private router: Router,
    private localStorage: LocalStorageService,
    private translate: TranslateService,
    private navigationService: NavigationService,
    private languageService: LanguageService,
    private securityService: SecurityService,
    private tcodeService: TcodeService,
  ) {
    // Initialize language
    this.translate.use(localStorage.getLang());

    this.langSubscription = this.languageService.getLanguage()
      .subscribe(lang => {
        translate.use(lang);
        this.initNavBoard();
      });
  }

  ngOnInit() {
    this.navigationService.trackHistory();

    const currentUser: any = this.securityService.getCurrentUser();
    this.userRights = this.securityService.getMana();

    this.initNavBoard();
  }

  initNavBoard() {
    this.translate.get(['client', 'settings', 'settingsSubtitle', 'properties'])
      .subscribe((res)=>{

        this.title = res.client + ' - ' + res.settings;
        this.subtitle = res.settingsSubtitle;

        this.navItems = [
          {
            'url': this.prefix + '/' + this.prefix + '81',
            'img': this.sharedImagePath + '81.svg',
            'tcode': this.prefix + '81',
            'title': res.properties
          },
        ];
      });
  }

  ngOnDestroy() {
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
  }

}
