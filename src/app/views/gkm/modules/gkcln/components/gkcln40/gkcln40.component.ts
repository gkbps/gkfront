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
  selector: 'gkcln-40',
  templateUrl: './gkcln40.html',
  styleUrls: ['./gkcln40.scss'],
})

export class GkCln40Component implements OnInit, OnDestroy {

  prefix: string = 'gkcln';
  public solImagePath: string = 'modules/gkcln/';


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
    this.translate.get(['client', 'system', 'systemSubtitle', 'solutionsAssignment', 'tcodesAssignment', 'rolesAssignment'])
      .subscribe((res)=>{

        this.title = res.client + ' - ' + res.system;
        this.subtitle = res.systemSubtitle;

        this.navItems = [
          {
            'url': this.prefix + '/' + this.prefix + '41',
            'img': this.solImagePath + '31.svg',
            'tcode': this.prefix + '41',
            'title': res.solutionsAssignment
          },
          {
            'url': this.prefix + '/' + this.prefix + '42',
            'img': this.solImagePath + '32.svg',
            'tcode': this.prefix + '42',
            'title': res.tcodesAssignment
          },
          {
            'url': this.prefix + '/' + this.prefix + '43',
            'img': this.solImagePath + '33.svg',
            'tcode': this.prefix + '43',
            'title': res.rolesAssignment
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
