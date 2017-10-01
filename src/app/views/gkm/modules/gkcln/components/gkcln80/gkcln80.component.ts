// External
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenubarModule, MenuItem } from 'primeng/primeng';

// Internal
import { SecurityService, TcodeService, NavigationService } from '../../../../../../nga/services';

@Component({
  selector: 'gkcln-80',
  templateUrl: './gkcln80.html',
  styleUrls: ['./gkcln80.scss'],
})

export class GkCln80Component implements OnInit {

  prefix: string = 'gkcln';
  public sharedImagePath: string = 'modules/shared/';


  userRights: Array<any>;

  title: string = "Setting";
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
        'url': this.prefix + '/' + this.prefix + '81',
        'img': this.sharedImagePath + '81.svg',
        'tcode': this.prefix + '81',
        'title': 'Properties'
      },
    ];
  }

}
