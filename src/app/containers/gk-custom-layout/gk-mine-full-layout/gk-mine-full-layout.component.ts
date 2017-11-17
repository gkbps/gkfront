import { Component, Input, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import {
  LocalStorageService,
  LanguageService,
  ThemeService,
  StateManagementService,
} from '../../../nga/services';

@Component({
  selector: 'gk-mine-full-layout',
  templateUrl: './gk-mine-full-layout.component.html'
})
export class GkMineFullLayoutComponent implements OnInit {
  menu1: any;
  menu: any;

  constructor(
    private translate: TranslateService,
    private localStorage: LocalStorageService,
    private languageService: LanguageService,
    private stateManagementService: StateManagementService,
    private themeService: ThemeService,
  ) {
    // Initialize state
    this.stateManagementService.initState();

    // Initialize language
    translate.use(localStorage.getLang());
  }

  ngOnInit() {
    const fav = this.localStorage.getFavourite();
    this.menu = [
      { label: 'backToMain', icon: 'home', routerLink: ['/home'] },
      { label: 'myBoxes', icon: 'inbox', routerLink: [],
        items: [
          { label: 'myTasks', icon: 'flip', routerLink: [],
            items: [
              { label: 'inbox', icon: 'filter_1', routerLink: ['/mine/mine11'] },
              { label: 'outbox', icon: 'filter_2', routerLink: ['/mine/mine12'] },
            ]
          },
          { label: 'myDocuments', icon: 'content_copy', routerLink: [],
            items: [
              { label: 'draft', icon: 'filter_1', routerLink: ['/mine/mine21'] },
              { label: 'inProgress', icon: 'filter_2', routerLink: ['/mine/mine22'] },
              { label: 'documenting', icon: 'filter_3', routerLink: ['/mine/mine23'] },
              { label: 'completed', icon: 'filter_4', routerLink: ['/mine/mine24'] },
            ]
          },
        ]
      },
      { label: 'myFavourites', icon: 'star_border', routerLink: [],
       items: fav
      }
    ];    
  }

}
