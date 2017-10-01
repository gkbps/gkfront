// External
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenubarModule, MenuItem } from 'primeng/primeng';

// Internal
import { SecurityService, TcodeService, NavigationService } from '../../../../../../nga/services';

@Component({
  selector: 'gktcd-10',
  templateUrl: './gktcd10.html',
  styleUrls: ['./gktcd10.scss'],
})

export class GkTcd10Component implements OnInit {

  prefix: string = 'gktcd';
  public tcdImagePath: string = 'modules/tcd/';

  userRights: Array<any>;

  title: string = "Tcode Indidual Processing";
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
        'url': this.prefix + '/' + this.prefix + '11',
        'img': this.tcdImagePath + '11a.svg',
        'tcode': this.prefix + '11',
        'title': 'Create'
      },
      {
        'url': this.prefix + '/' + this.prefix + '12',
        'img': this.tcdImagePath + '12a.svg',
        'tcode': this.prefix + '12',
        'title': 'View'
      },
      {
        'url': this.prefix + '/' + this.prefix + '13',
        'img': this.tcdImagePath + '13a.svg',
        'tcode': this.prefix + '13',
        'title': 'Edit'
      },
      {
        'url': this.prefix + '/' + this.prefix + '14',
        'img': this.tcdImagePath + '14a.svg',
        'tcode': this.prefix + '14',
        'title': 'Disable'
      },
      {
        'url': this.prefix + '/' + this.prefix + '15',
        'img': this.tcdImagePath + '15a.svg',
        'tcode': this.prefix + '15',
        'title': 'Enable'
      },
      {
        'url': this.prefix + '/' + this.prefix + '16',
        'img': this.tcdImagePath + '16a.svg',
        'tcode': this.prefix + '16',
        'title': 'Mark'
      },
      {
        'url': this.prefix + '/' + this.prefix + '17',
        'img': this.tcdImagePath + '17a.svg',
        'tcode': this.prefix + '17',
        'title': 'Unmark'
      },
      {
        'url': this.prefix + '/' + this.prefix + '18',
        'img': this.tcdImagePath + '18a.svg',
        'tcode': this.prefix + '18',
        'title': 'Delete'
      },
      {
        'url': this.prefix + '/' + this.prefix + '19',
        'img': this.tcdImagePath + '19a.svg',
        'tcode': this.prefix + '19',
        'title': 'View Changes'
      },
    ];
  }

}
