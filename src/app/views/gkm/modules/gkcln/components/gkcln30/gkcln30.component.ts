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
  selector: 'gkcln-30',
  templateUrl: './gkcln30.html',
  styleUrls: ['./gkcln30.scss'],
})

export class GkCln30Component implements OnInit, OnDestroy {

  prefix: string = 'gkcln';
  public orgImagePath: string = 'modules/org/';
  public docImagePath: string = 'modules/doc/';

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
    this.translate.get(['client', 'processes', 'processesSubtitle', 'new', 'update', 'debitNote', 'invoice', 'creditNote', 'receipt', 'manualEntry'])
      .subscribe((res)=>{

        this.title = res.client + ' - ' + res.processes;
        this.subtitle = res.processesSubtitle;

        this.navItems = [
          {
            'url': this.prefix + '/' + this.prefix + '31',
            'img': this.orgImagePath + '11.svg',
            'tcode': this.prefix + '31',
            'title': `${res.new} ${res.client}`
          },
          {
            'url': this.prefix + '/' + this.prefix + '32',
            'img': this.orgImagePath + '13.svg',
            'tcode': this.prefix + '32',
            'title': `${res.update} ${res.client}`
          },
          {
            'url': this.prefix + '/' + this.prefix + '33',
            'img': this.docImagePath + 'dbn.svg',
            'tcode': this.prefix + '33',
            'title': res.debitNote
          },
          {
            'url': this.prefix + '/' + this.prefix + '34',
            'img': this.docImagePath + 'inv.svg',
            'tcode': this.prefix + '34',
            'title': res.invoice
          },
          {
            'url': this.prefix + '/' + this.prefix + '35',
            'img': this.docImagePath + 'cdn.svg',
            'tcode': this.prefix + '35',
            'title': res.creditNote
          },
          {
            'url': this.prefix + '/' + this.prefix + '36',
            'img': this.docImagePath + 'rcp.svg',
            'tcode': this.prefix + '36',
            'title': res.receipt
          },
          {
            'url': this.prefix + '/' + this.prefix + '37',
            'img': this.docImagePath + 'adj.svg',
            'tcode': this.prefix + '37',
            'title': res.manualEntry
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
