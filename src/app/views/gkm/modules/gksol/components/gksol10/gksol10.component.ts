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
  selector: 'gksol-10',
  templateUrl: './gksol10.html',
  styleUrls: ['./gksol10.scss'],
})

export class GkSol10Component implements OnInit, OnDestroy {

  prefix: string = 'gksol';
  public solImagePath: string = 'modules/sol/';

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
    this.translate.get(['solution', 'individual', 'individualSubtitle', 'create', 'view', 'edit', 'disable', 'enable', 'mark', 'unmark', 'delete', 'viewChange'])
      .subscribe((res)=>{

        this.title = res.solution + ' - ' + res.individual;
        this.subtitle = res.individualSubtitle;

        this.navItems = [
          {
            'url': this.prefix + '/' + this.prefix + '11',
            'img': this.solImagePath + '11a.svg',
            'tcode': this.prefix + '11',
            'title': res.create
          },
          {
            'url': this.prefix + '/' + this.prefix + '12',
            'img': this.solImagePath + '12a.svg',
            'tcode': this.prefix + '12',
            'title': res.view
          },
          {
            'url': this.prefix + '/' + this.prefix + '13',
            'img': this.solImagePath + '13a.svg',
            'tcode': this.prefix + '13',
            'title': res.edit
          },
          {
            'url': this.prefix + '/' + this.prefix + '14',
            'img': this.solImagePath + '14a.svg',
            'tcode': this.prefix + '14',
            'title': res.disable
          },
          {
            'url': this.prefix + '/' + this.prefix + '15',
            'img': this.solImagePath + '15a.svg',
            'tcode': this.prefix + '15',
            'title': res.enable
          },
          {
            'url': this.prefix + '/' + this.prefix + '16',
            'img': this.solImagePath + '16a.svg',
            'tcode': this.prefix + '16',
            'title': res.mark
          },
          {
            'url': this.prefix + '/' + this.prefix + '17',
            'img': this.solImagePath + '17a.svg',
            'tcode': this.prefix + '17',
            'title': res.unmark
          },
          {
            'url': this.prefix + '/' + this.prefix + '18',
            'img': this.solImagePath + '18a.svg',
            'tcode': this.prefix + '18',
            'title': res.delete
          },
          {
            'url': this.prefix + '/' + this.prefix + '19',
            'img': this.solImagePath + '19a.svg',
            'tcode': this.prefix + '19',
            'title': res.viewChange
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
