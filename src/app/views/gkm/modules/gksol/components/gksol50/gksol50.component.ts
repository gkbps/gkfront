// External
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenubarModule, MenuItem } from 'primeng/primeng';

// Internal
import { SecurityService, TcodeService, NavigationService } from '../../../../../../nga/services';

@Component({
  selector: 'gksol-50',
  templateUrl: './gksol50.html',
  styleUrls: ['./gksol50.scss'],
})

export class GkSol50Component implements OnInit {

  prefix: string = 'gksol';
  public sharedImagePath: string = 'modules/shared/';


  userRights: Array<any>;

  title: string = "Dashboard";
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
        'url': this.prefix + '/' + this.prefix + '51',
        'img': this.sharedImagePath + '51.svg',
        'tcode': this.prefix + '51',
        'title': 'KPIs'
      },
    ];
  }

}
