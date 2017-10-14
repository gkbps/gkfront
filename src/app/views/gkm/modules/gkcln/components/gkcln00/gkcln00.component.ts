// External
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';
import { TranslateService } from '@ngx-translate/core';

// Internal
import {
  NavigationService,
  LocalStorageService,
  LanguageService
} from '../../../../../../nga/services';

@Component({
  selector: 'gkcln-00',
  templateUrl: './gkcln00.html',
  styleUrls: ['./gkcln00.scss'],
})

export class GkCln00Component implements OnInit, OnDestroy {

  prefix: string = 'gkcln';
  public sharedImagePath: string = 'modules/shared/';
  public orgImagePath: string = 'modules/org/';

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

    this.initNavBoard();
  }

  initNavBoard() {
    this.translate.get(['gkcln00', 'gkcln00Subtitle', 'masterList', 'individual', 'collective', 'requests', 'gkcln40', 'dashboard', 'reports', 'settings', 'administration'])
      .subscribe((res)=>{

        this.title = res.gkcln00;
        this.subtitle = res.gkcln00Subtitle;

        this.navItems = [
          {
            'url': this.prefix + '/' + this.prefix + '01',
            'img': this.sharedImagePath + '01.svg',
            'tcode': this.prefix + '01',
            'title': res.masterList
          },
          {
            'url': this.prefix + '/' + this.prefix + '10',
            'img': this.orgImagePath + '10.svg',
            'tcode': this.prefix + '10',
            'title': res.individual
          },
          {
            'url': this.prefix + '/' + this.prefix + '20',
            'img': this.orgImagePath + '20.svg',
            'tcode': this.prefix + '20',
            'title': res.collective
          },
          {
            'url': this.prefix + '/' + this.prefix + '30',
            'img': this.sharedImagePath + '30.svg',
            'tcode': this.prefix + '30',
            'title': res.requests
          },
          {
            'url': this.prefix + '/' + this.prefix + '40',
            'img': this.sharedImagePath + '40.svg',
            'tcode': this.prefix + '40',
            'title': res.gkcln40
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
          {
            'url': this.prefix + '/' + this.prefix + '80',
            'img': this.sharedImagePath + '80.svg',
            'tcode': this.prefix + '80',
            'title': res.settings
          },
          {
            'url': this.prefix + '/' + this.prefix + '90',
            'img': this.sharedImagePath + '90.svg',
            'tcode': this.prefix + '90',
            'title': res.administration
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
