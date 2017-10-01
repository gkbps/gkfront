// External
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenubarModule, MenuItem } from 'primeng/primeng';

// Internal
import { SecurityService, TcodeService, NavigationService } from '../../../../../../nga/services';

@Component({
  selector: 'gksol-00',
  templateUrl: './gksol00.html',
  styleUrls: ['./gksol00.scss'],
})

export class GkSol00Component implements OnInit {

  prefix: string = 'gksol';
  public sharedImagePath: string = 'modules/shared/';
  public solImagePath: string = 'modules/sol/';

  userRights: Array<any>;

  icon: string = '';
  title: string = 'GK Solutions Management';
  subtitle: string = 'Navigation Board to manage GK Solutions';
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
        'url': this.prefix + '/' + this.prefix + '01',
        'img': this.sharedImagePath + '01.svg',
        'tcode': this.prefix + '01',
        'title': 'Master List'
      },
      {
        'url': this.prefix + '/' + this.prefix + '10',
        'img': this.solImagePath + '10.svg',
        'tcode': this.prefix + '10',
        'title': 'Individual Processing'
      },
      {
        'url': this.prefix + '/' + this.prefix + '20',
        'img': this.solImagePath + '20.svg',
        'tcode': this.prefix + '20',
        'title': 'Collective Processing'
      },
      {
        'url': this.prefix + '/' + this.prefix + '50',
        'img': this.sharedImagePath + '50.svg',
        'tcode': this.prefix + '50',
        'title': 'Dashboard'
      },
      {
        'url': this.prefix + '/' + this.prefix + '60',
        'img': this.sharedImagePath + '60.svg',
        'tcode': this.prefix + '60',
        'title': 'Summary & Detail Reports'
      },
    ];
  }

}
