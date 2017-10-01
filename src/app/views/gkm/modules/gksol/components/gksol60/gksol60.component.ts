// External
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenubarModule, MenuItem } from 'primeng/primeng';

// Internal
import { SecurityService, TcodeService, NavigationService } from '../../../../../../nga/services';

@Component({
  selector: 'gksol-60',
  templateUrl: './gksol60.html',
  styleUrls: ['./gksol60.scss'],
})

export class GkSol60Component implements OnInit {

  prefix: string = 'gksol';
  public sharedImagePath: string = 'modules/shared/';


  userRights: Array<any>;

  title: string = "Reports";
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
        'url': this.prefix + '/' + this.prefix + '61',
        'img': this.sharedImagePath + '51.svg',
        'tcode': this.prefix + '61',
        'title': 'KPIs'
      },
    ];
  }

}
