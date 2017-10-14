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
} from '../../../nga/services';


@Component({
  selector: 'gkm-00',
  templateUrl: './gkm00.html',
  styleUrls: ['./gkm00.scss'],
})

export class Gkm00Component implements OnInit, OnDestroy {

  prefix: string = 'gkm';
  public systemImagePath: string = 'modules/gkm/';

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
    this.translate.get(['gkm00', 'gkm00Subtitle', 'gkcln00', 'gksol00', 'gktcd00'])
      .subscribe((res)=>{
        this.title = res.gkm00;
        this.subtitle = res.gkm00Subtitle;
        this.navItems = [
          {
            'url': 'gkcln/gkcln00',
            'img': this.systemImagePath + 'gkcln.svg',
            'tcode': 'gkcln00',
            'title': res.gkcln00 // 'GK Clients Management'
          },
          {
            'url': 'gksol/gksol00',
            'img': this.systemImagePath + 'gksol.svg',
            'tcode': 'gksol00',
            'title': res.gksol00 // 'GK Solutions Processing'
          },
          {
            'url': 'gktcd/gktcd00',
            'img': this.systemImagePath + 'gktcd.svg',
            'tcode': 'gktcd00',
            'title': res.gktcd00 // 'GK Tcodes Management'
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
