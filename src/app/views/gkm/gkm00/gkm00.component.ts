// External
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenubarModule, MenuItem } from 'primeng/primeng';

// Internal
import { NavigationService } from '../../../nga/services';

@Component({
  selector: 'gkm-00',
  templateUrl: './gkm00.html',
  styleUrls: ['./gkm00.scss'],
})

export class Gkm00Component implements OnInit {

  prefix: string = 'gkm';
  public systemImagePath: string = 'modules/gkm/';

  title: string = 'GK Management';
  subtitle: string = 'Navigation Board to manage GK business activites';
  navItems: any[];

  constructor(
    private router: Router,
    private navigationService: NavigationService,
  ) { }

  ngOnInit() {
    this.navigationService.trackHistory();

    this.initNavBoard();
  }

  initNavBoard() {
    this.navItems = [
      {
        'url': 'gkcln/gkcln00',
        'img': this.systemImagePath + 'gkcln.svg',
        'tcode': 'gkcln00',
        'title': 'GK Clients Management'
      },
      {
        'url': 'gksol/gksol00',
        'img': this.systemImagePath + 'gksol.svg',
        'tcode': 'gksol00',
        'title': 'GK Solutions Processing'
      },
      {
        'url': 'gktcd/gktcd00',
        'img': this.systemImagePath + 'gktcd.svg',
        'tcode': 'gktcd00',
        'title': 'GK Tcodes Management'
      },
    ];
  }

}
