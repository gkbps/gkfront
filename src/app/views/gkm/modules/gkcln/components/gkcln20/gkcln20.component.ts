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
  selector: 'gkcln-20',
  templateUrl: './gkcln20.html',
  styleUrls: ['./gkcln20.scss'],
})

export class GkCln20Component implements OnInit, OnDestroy {

  prefix: string = 'gkcln';
  public systemImagePath: string = 'modules/org/';

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
    this.translate.get(['client', 'collective', 'collectiveSubtitle', 'upload', 'download', 'upsert', 'inactivate', 'activate', 'mark', 'unmark', 'clean', 'history'])
      .subscribe((res)=>{

        this.title = res.client + ' - ' + res.collective;
        this.subtitle = res.collectiveSubtitle;        

        this.navItems = [
          {
            'url': this.prefix + '/' + this.prefix + '21',
            'img': this.systemImagePath + '21a.svg',
            'tcode': this.prefix + '21',
            'title': res.upload
          },
          {
            'url': this.prefix + '/' + this.prefix + '22',
            'img': this.systemImagePath + '22a.svg',
            'tcode': this.prefix + '22',
            'title': res.download
          },
          {
            'url': this.prefix + '/' + this.prefix + '23',
            'img': this.systemImagePath + '23a.svg',
            'tcode': this.prefix + '23',
            'title': res.upsert
          },
          {
            'url': this.prefix + '/' + this.prefix + '24',
            'img': this.systemImagePath + '24a.svg',
            'tcode': this.prefix + '24',
            'title': res.inactivate
          },
          {
            'url': this.prefix + '/' + this.prefix + '25',
            'img': this.systemImagePath + '25a.svg',
            'tcode': this.prefix + '25',
            'title': res.activate
          },
          {
            'url': this.prefix + '/' + this.prefix + '26',
            'img': this.systemImagePath + '26a.svg',
            'tcode': this.prefix + '26',
            'title': res.mark
          },
          {
            'url': this.prefix + '/' + this.prefix + '27',
            'img': this.systemImagePath + '27a.svg',
            'tcode': this.prefix + '27',
            'title': res.unmark
          },
          {
            'url': this.prefix + '/' + this.prefix + '28',
            'img': this.systemImagePath + '28a.svg',
            'tcode': this.prefix + '28',
            'title': res.clean
          },
          {
            'url': this.prefix + '/' + this.prefix + '29',
            'img': this.systemImagePath + '29a.svg',
            'tcode': this.prefix + '29',
            'title': res.history
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
