// External
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenubarModule, MenuItem } from 'primeng/primeng';

// Internal
import { NavigationService } from '../../../../../../nga/services';

@Component({
  selector: 'gkcln-00',
  templateUrl: './gkcln00.html',
  styleUrls: ['./gkcln00.scss'],
})

export class GkCln00Component implements OnInit {

  prefix: string = 'gkcln';
  public sharedImagePath: string = 'modules/shared/';
  public orgImagePath: string = 'modules/org/';

  title: string = 'GK Clients Management';
  subtitle: string ='Navigation Board to manage GK Clients';
  navItems: any[];

  constructor(
    private router: Router,
    private navigationService: NavigationService,
  ) { }

  ngOnInit() {
    this.navigationService.trackHistory();

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
        'img': this.orgImagePath + '10.svg',
        'tcode': this.prefix + '10',
        'title': 'Individual Processing'
      },
      {
        'url': this.prefix + '/' + this.prefix + '20',
        'img': this.orgImagePath + '20.svg',
        'tcode': this.prefix + '20',
        'title': 'Collective Processing'
      },
      {
        'url': this.prefix + '/' + this.prefix + '30',
        'img': this.sharedImagePath + '30.svg',
        'tcode': this.prefix + '30',
        'title': 'Requests / Reports Management'
      },
      {
        'url': this.prefix + '/' + this.prefix + '40',
        'img': this.sharedImagePath + '40.svg',
        'tcode': this.prefix + '40',
        'title': 'Client Services Management'
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
      {
        'url': this.prefix + '/' + this.prefix + '80',
        'img': this.sharedImagePath + '80.svg',
        'tcode': this.prefix + '80',
        'title': 'Setting'
      },
      {
        'url': this.prefix + '/' + this.prefix + '90',
        'img': this.sharedImagePath + '90.svg',
        'tcode': this.prefix + '90',
        'title': 'Administration'
      },
    ];
  }

}
