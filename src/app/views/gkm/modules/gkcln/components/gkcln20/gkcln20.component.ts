// External
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenubarModule, MenuItem } from 'primeng/primeng';

// Internal
import { SecurityService, TcodeService, NavigationService } from '../../../../../../nga/services';

@Component({
  selector: 'gkcln-20',
  templateUrl: './gkcln20.html',
  styleUrls: ['./gkcln20.scss'],
})

export class GkCln20Component implements OnInit {

  prefix: string = 'gkcln';
  public systemImagePath: string = 'modules/org/';

  userRights: Array<any>;

  title: string = "Client Collective Processing";
  navItems: any[];

  constructor(
    private router: Router,
    private navigationService: NavigationService,
    private securityService: SecurityService,
    private tcodeService: TcodeService,
  ) { }

  ngOnInit() {
    this.navigationService.trackHistory();

    const currentUser: any = this.securityService.getCurrentUser();
    this.userRights = this.securityService.getMana();

    this.initNavBoard();
  }

  initNavBoard() {
    this.navItems = [
      {
        'url': this.prefix + '/' + this.prefix + '21',
        'img': this.systemImagePath + '21a.svg',
        'tcode': this.prefix + '21',
        'title': 'Upload'
      },
      {
        'url': this.prefix + '/' + this.prefix + '22',
        'img': this.systemImagePath + '22a.svg',
        'tcode': this.prefix + '22',
        'title': 'Download'
      },
      {
        'url': this.prefix + '/' + this.prefix + '23',
        'img': this.systemImagePath + '23a.svg',
        'tcode': this.prefix + '23',
        'title': 'Upsert'
      },
      {
        'url': this.prefix + '/' + this.prefix + '24',
        'img': this.systemImagePath + '24a.svg',
        'tcode': this.prefix + '24',
        'title': 'Inactivate'
      },
      {
        'url': this.prefix + '/' + this.prefix + '25',
        'img': this.systemImagePath + '25a.svg',
        'tcode': this.prefix + '25',
        'title': 'Activate'
      },
      {
        'url': this.prefix + '/' + this.prefix + '26',
        'img': this.systemImagePath + '26a.svg',
        'tcode': this.prefix + '26',
        'title': 'Mark'
      },
      {
        'url': this.prefix + '/' + this.prefix + '27',
        'img': this.systemImagePath + '27a.svg',
        'tcode': this.prefix + '27',
        'title': 'Unmark'
      },
      {
        'url': this.prefix + '/' + this.prefix + '28',
        'img': this.systemImagePath + '28a.svg',
        'tcode': this.prefix + '28',
        'title': 'Clean'
      },
      {
        'url': this.prefix + '/' + this.prefix + '29',
        'img': this.systemImagePath + '29a.svg',
        'tcode': this.prefix + '29',
        'title': 'History'
      },
    ];
  }

}
