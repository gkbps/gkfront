import { Component, Input, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import {
  LocalStorageService,
  StateManagementService,
  ThemeService,
} from '../../../nga/services';

@Component({
  selector: 'gk-blank-full-layout',
  templateUrl: './gk-blank-full-layout.component.html'
})
export class GkBlankFullLayoutComponent implements OnInit {
  menu: any;

  constructor(
    private translate: TranslateService,
    private localStorage: LocalStorageService,
    private stateManagementService: StateManagementService,
    private themeService: ThemeService,
  ) {
    // Initialize language
    translate.use(localStorage.getLang());
  }

  ngOnInit() {
    this.menu = [
      {label: 'backToMain', icon: 'home', routerLink: ['/#/home']}
    ]
  }

}
