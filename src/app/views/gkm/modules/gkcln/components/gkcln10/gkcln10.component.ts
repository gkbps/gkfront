// External
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenubarModule, MenuItem } from 'primeng/primeng';

// Internal
import { NavigationService } from '../../../../../../nga/services';

@Component({
  selector: 'gkcln-10',
  templateUrl: './gkcln10.html',
  styleUrls: ['./gkcln10.scss'],
})

export class GkCln10Component implements OnInit {

  prefix: string = 'gkcln';
  public systemImagePath: string = 'modules/org/';

  title: string = "Client Indidual Processing";
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
        'url': this.prefix + '/' + this.prefix + '11',
        'img': this.systemImagePath + '11a.svg',
        'tcode': this.prefix + '11',
        'title': 'Create'
      },
      {
        'url': this.prefix + '/' + this.prefix + '12',
        'img': this.systemImagePath + '12a.svg',
        'tcode': this.prefix + '12',
        'title': 'View'
      },
      {
        'url': this.prefix + '/' + this.prefix + '13',
        'img': this.systemImagePath + '13a.svg',
        'tcode': this.prefix + '13',
        'title': 'Edit'
      },
      {
        'url': this.prefix + '/' + this.prefix + '14',
        'img': this.systemImagePath + '14a.svg',
        'tcode': this.prefix + '14',
        'title': 'Disable'
      },
      {
        'url': this.prefix + '/' + this.prefix + '15',
        'img': this.systemImagePath + '15a.svg',
        'tcode': this.prefix + '15',
        'title': 'Enable'
      },
      {
        'url': this.prefix + '/' + this.prefix + '16',
        'img': this.systemImagePath + '16a.svg',
        'tcode': this.prefix + '16',
        'title': 'Mark'
      },
      {
        'url': this.prefix + '/' + this.prefix + '17',
        'img': this.systemImagePath + '17a.svg',
        'tcode': this.prefix + '17',
        'title': 'Unmark'
      },
      {
        'url': this.prefix + '/' + this.prefix + '18',
        'img': this.systemImagePath + '18a.svg',
        'tcode': this.prefix + '18',
        'title': 'Delete'
      },
      {
        'url': this.prefix + '/' + this.prefix + '19',
        'img': this.systemImagePath + '19a.svg',
        'tcode': this.prefix + '19',
        'title': 'View Changes'
      },
    ];
  }

}
