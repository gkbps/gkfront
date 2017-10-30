// External
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { MenubarModule, MenuItem } from 'primeng/primeng';

// Internal
import {
  LocalStorageService,
  SecurityService,
  TcodeService,
  NavigationService,
  SettingService
} from '../../services';

@Component({
  selector: 'nav-board',
  templateUrl: './navBoard.html',
  styleUrls: ['./navBoard.scss', './navBox.scss', './navRound.scss'],
})

export class NavBoard implements OnInit {

  @Input() title: string;
  @Input() subtitle: string = 'Navigation Board';
  @Input() navType: string;
  @Input() navItems: any[];

  assetPath: string = '../../../../assets/';
  userRights: any[];

  navSubscription: Subscription;

  constructor(
    private router: Router,
    private localStorage: LocalStorageService,
    private navigationService: NavigationService,
    private securityService: SecurityService,
    private tcodeService: TcodeService,
    private settingService: SettingService,
  ) {
    this.navSubscription = settingService.getNavType()
      .subscribe((navType) => {
        this.navType = navType;
      })
  }

  ngOnInit() {
    this.navigationService.trackHistory();

    this.navType = this.localStorage.getNavType();

    const currentUser: any = this.securityService.getCurrentUser();
    this.userRights = this.securityService.getMana();
  }

}
