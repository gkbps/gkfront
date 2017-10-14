// External
import { Component, Input, OnInit,OnDestroy } from '@angular/core';
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
  selector: 'gktcd-00',
  templateUrl: './gktcd00.html',
  styleUrls: ['./gktcd00.scss'],
})

export class GkTcd00Component implements OnInit, OnDestroy {

  prefix: string = 'gktcd';
  public sharedImagePath: string = 'modules/shared/';
  public tcdImagePath: string = 'modules/tcd/';

  userRights: Array<any>;

  icon: string = '';
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
    this.translate.get(['gktcd00', 'gktcd00Subtitle', 'masterList', 'individual', 'collective', 'requests', 'gkcln40', 'dashboard', 'reports', 'settings', 'administration'])
      .subscribe((res)=>{

        this.title = res.gktcd00;
        this.subtitle = res.gktcd00Subtitle;

        this.navItems = [
          {
            'url': this.prefix + '/' + this.prefix + '01',
            'img': this.sharedImagePath + '01.svg',
            'tcode': this.prefix + '01',
            'title': res.masterList
          },
          {
            'url': this.prefix + '/' + this.prefix + '10',
            'img': this.tcdImagePath + '10.svg',
            'tcode': this.prefix + '10',
            'title': res.individual
          },
          {
            'url': this.prefix + '/' + this.prefix + '20',
            'img': this.tcdImagePath + '20.svg',
            'tcode': this.prefix + '20',
            'title': res.collective
          },
          {
            'url': this.prefix + '/' + this.prefix + '50',
            'img': this.sharedImagePath + '50.svg',
            'tcode': this.prefix + '50',
            'title': res.dashboard
          },
          {
            'url': this.prefix + '/' + this.prefix + '60',
            'img': this.sharedImagePath + '60.svg',
            'tcode': this.prefix + '60',
            'title': res.reports
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
