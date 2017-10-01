// External
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenubarModule, MenuItem } from 'primeng/primeng';

// Internal
import { SecurityService, TcodeService, NavigationService } from '../../../../../../nga/services';

@Component({
  selector: 'gktcd-20',
  templateUrl: './gktcd20.html',
  styleUrls: ['./gktcd20.scss'],
})

export class GkTcd20Component implements OnInit {

  prefix: string = 'gktcd';
  public tcdImagePath: string = 'modules/tcd/';

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
        'img': this.tcdImagePath + '21a.svg',
        'tcode': this.prefix + '21',
        'title': 'Upload'
      },
      {
        'url': this.prefix + '/' + this.prefix + '22',
        'img': this.tcdImagePath + '22a.svg',
        'tcode': this.prefix + '22',
        'title': 'Download'
      },
      {
        'url': this.prefix + '/' + this.prefix + '23',
        'img': this.tcdImagePath + '23a.svg',
        'tcode': this.prefix + '23',
        'title': 'Upsert'
      },
      {
        'url': this.prefix + '/' + this.prefix + '24',
        'img': this.tcdImagePath + '24a.svg',
        'tcode': this.prefix + '24',
        'title': 'Inactivate'
      },
      {
        'url': this.prefix + '/' + this.prefix + '25',
        'img': this.tcdImagePath + '25a.svg',
        'tcode': this.prefix + '25',
        'title': 'Activate'
      },
      {
        'url': this.prefix + '/' + this.prefix + '26',
        'img': this.tcdImagePath + '26a.svg',
        'tcode': this.prefix + '26',
        'title': 'Mark'
      },
      {
        'url': this.prefix + '/' + this.prefix + '27',
        'img': this.tcdImagePath + '27a.svg',
        'tcode': this.prefix + '27',
        'title': 'Unmark'
      },
      {
        'url': this.prefix + '/' + this.prefix + '28',
        'img': this.tcdImagePath + '28a.svg',
        'tcode': this.prefix + '28',
        'title': 'Clean'
      },
      {
        'url': this.prefix + '/' + this.prefix + '29',
        'img': this.tcdImagePath + '29a.svg',
        'tcode': this.prefix + '29',
        'title': 'History'
      },
    ];
  }

}
