// External
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenubarModule, MenuItem } from 'primeng/primeng';

// Internal
import { SecurityService, TcodeService, NavigationService } from '../../../../../../nga/services';

@Component({
  selector: 'gkcln-30',
  templateUrl: './gkcln30.html',
  styleUrls: ['./gkcln30.scss'],
})

export class GkCln30Component implements OnInit {

  prefix: string = 'gkcln';
  public orgImagePath: string = 'modules/org/';
  public docImagePath: string = 'modules/doc/';

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
        'url': this.prefix + '/' + this.prefix + '31',
        'img': this.orgImagePath + '11.svg',
        'tcode': this.prefix + '31',
        'title': 'New Client'
      },
      {
        'url': this.prefix + '/' + this.prefix + '32',
        'img': this.orgImagePath + '13.svg',
        'tcode': this.prefix + '32',
        'title': 'Update Client'
      },
      {
        'url': this.prefix + '/' + this.prefix + '33',
        'img': this.docImagePath + 'dbn.svg',
        'tcode': this.prefix + '33',
        'title': 'Debit Note'
      },
      {
        'url': this.prefix + '/' + this.prefix + '34',
        'img': this.docImagePath + 'inv.svg',
        'tcode': this.prefix + '34',
        'title': 'Invoice'
      },
      {
        'url': this.prefix + '/' + this.prefix + '35',
        'img': this.docImagePath + 'cdn.svg',
        'tcode': this.prefix + '35',
        'title': 'Credit Note'
      },
      {
        'url': this.prefix + '/' + this.prefix + '36',
        'img': this.docImagePath + 'rcp.svg',
        'tcode': this.prefix + '36',
        'title': 'Receipt'
      },
      {
        'url': this.prefix + '/' + this.prefix + '37',
        'img': this.docImagePath + 'adj.svg',
        'tcode': this.prefix + '37',
        'title': 'Manual Entry'
      },
    ];
  }

}
