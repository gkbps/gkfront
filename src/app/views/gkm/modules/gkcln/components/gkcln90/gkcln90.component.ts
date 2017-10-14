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
  selector: 'gkcln-90',
  templateUrl: './gkcln90.html',
  styleUrls: ['./gkcln90.scss'],
})

export class GkCln90Component implements OnInit, OnDestroy {

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
    this.translate.get(['client', 'administration', 'administrationSubtitle', 'configuration', 'approval'])
      .subscribe((res)=>{

        this.title = res.client + ' - ' + res.administration;
        this.subtitle = res.administrationSubtitle;

        this.navItems = [
          {
            'url': this.prefix + '/' + this.prefix + '91',
            'img': this.sharedImagePath + '91.svg',
            'tcode': this.prefix + '91',
            'title': res.configuration
          },
          {
            'url': this.prefix + '/' + this.prefix + '92',
            'img': this.sharedImagePath + '92.svg',
            'tcode': this.prefix + '92',
            'title': res.approval
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
