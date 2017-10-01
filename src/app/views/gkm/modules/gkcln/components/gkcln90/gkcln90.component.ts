// External
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenubarModule, MenuItem } from 'primeng/primeng';

// Internal
import { SecurityService, TcodeService, NavigationService } from '../../../../../../nga/services';

@Component({
  selector: 'gkcln-90',
  templateUrl: './gkcln90.html',
  styleUrls: ['./gkcln90.scss'],
})

export class GkCln90Component implements OnInit {

  prefix: string = 'gkcln';
  public sharedImagePath: string = 'modules/shared/';


  userRights: Array<any>;

  title: string = "Administration";
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
        'url': this.prefix + '/' + this.prefix + '91',
        'img': this.sharedImagePath + '91.svg',
        'tcode': this.prefix + '91',
        'title': 'Configuration'
      },
      {
        'url': this.prefix + '/' + this.prefix + '92',
        'img': this.sharedImagePath + '92.svg',
        'tcode': this.prefix + '92',
        'title': 'Approval Flow'
      },
    ];
  }

}
