// External
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenubarModule, MenuItem } from 'primeng/primeng';

// Internal
import { SecurityService, TcodeService, NavigationService } from '../../../../../../nga/services';

@Component({
  selector: 'gkcln-40',
  templateUrl: './gkcln40.html',
  styleUrls: ['./gkcln40.scss'],
})

export class GkCln40Component implements OnInit {

  prefix: string = 'gkcln';
  public solImagePath: string = 'modules/gkcln/';


  userRights: Array<any>;

  title: string = "Requests / Reports Processes";
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
        'url': this.prefix + '/' + this.prefix + '41',
        'img': this.solImagePath + '31.svg',
        'tcode': this.prefix + '41',
        'title': 'Solutions Assignment'
      },
      {
        'url': this.prefix + '/' + this.prefix + '42',
        'img': this.solImagePath + '32.svg',
        'tcode': this.prefix + '42',
        'title': 'Tcodes Assignment'
      },
      {
        'url': this.prefix + '/' + this.prefix + '43',
        'img': this.solImagePath + '33.svg',
        'tcode': this.prefix + '43',
        'title': 'Standard Roles Allocation'
      },
    ];
  }

}
