// External
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { MenubarModule, MenuItem } from 'primeng/primeng';

import { Subscription } from 'rxjs/Subscription';
import { TranslateService } from '@ngx-translate/core';

// Internal
import {
  NavigationService,
  LocalStorageService,
  LanguageService
} from '../../../../../../nga/services';

@Component({
  selector: 'gkcln-10',
  templateUrl: './gkcln10.html',
  styleUrls: ['./gkcln10.scss'],
})

export class GkCln10Component implements OnInit, OnDestroy {

  prefix: string = 'gkcln';
  public systemImagePath: string = 'modules/org/';

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
    this.translate.get(['client', 'individual', 'individualSubtitle', 'create', 'view', 'edit', 'disable', 'enable', 'mark', 'unmark', 'delete', 'viewChange'])
      .subscribe((res)=>{
        this.title = res.client + ' - ' + res.individual;
        this.subtitle = res.individualSubtitle;

        this.navItems = [
          {
            'url': this.prefix + '/' + this.prefix + '11',
            'img': this.systemImagePath + '11a.svg',
            'tcode': this.prefix + '11',
            'title': res.create
          },
          {
            'url': this.prefix + '/' + this.prefix + '12',
            'img': this.systemImagePath + '12a.svg',
            'tcode': this.prefix + '12',
            'title': res.view
          },
          {
            'url': this.prefix + '/' + this.prefix + '13',
            'img': this.systemImagePath + '13a.svg',
            'tcode': this.prefix + '13',
            'title': res.edit
          },
          {
            'url': this.prefix + '/' + this.prefix + '14',
            'img': this.systemImagePath + '14a.svg',
            'tcode': this.prefix + '14',
            'title': res.disable
          },
          {
            'url': this.prefix + '/' + this.prefix + '15',
            'img': this.systemImagePath + '15a.svg',
            'tcode': this.prefix + '15',
            'title': res.enable
          },
          {
            'url': this.prefix + '/' + this.prefix + '16',
            'img': this.systemImagePath + '16a.svg',
            'tcode': this.prefix + '16',
            'title': res.mark
          },
          {
            'url': this.prefix + '/' + this.prefix + '17',
            'img': this.systemImagePath + '17a.svg',
            'tcode': this.prefix + '17',
            'title': res.unmark
          },
          {
            'url': this.prefix + '/' + this.prefix + '18',
            'img': this.systemImagePath + '18a.svg',
            'tcode': this.prefix + '18',
            'title': res.delete
          },
          {
            'url': this.prefix + '/' + this.prefix + '19',
            'img': this.systemImagePath + '19a.svg',
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
