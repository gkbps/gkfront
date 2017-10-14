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
  selector: 'gktcd-50',
  templateUrl: './gktcd50.html',
  styleUrls: ['./gktcd50.scss'],
})

export class GkTcd50Component implements OnInit, OnDestroy {

  prefix: string = 'gktcd';
  public tcdImagePath: string = 'modules/shared/';


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
    this.translate.get(['tcodes', 'dashboard', 'dashboardSubtitle', 'kpis'])
      .subscribe((res)=>{

        this.title = res.tcodes + ' - ' + res.dashboard;
        this.subtitle = res.dashboardSubtitle;

        this.navItems = [
          {
            'url': this.prefix + '/' + this.prefix + '51',
            'img': this.tcdImagePath + '51.svg',
            'tcode': this.prefix + '51',
            'title': 'KPIs'
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
