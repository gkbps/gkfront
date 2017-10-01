// External
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenubarModule, MenuItem } from 'primeng/primeng';

// Internal
import { SecurityService, TcodeService, NavigationService } from '../../services';

@Component({
  selector: 'nav-board',
  templateUrl: './navBoard.html',
  styleUrls: ['./navBoard.scss', './navBox.scss'],
})

export class NavBoard implements OnInit {

  @Input() title: string;
  @Input() subtitle: string = 'Navigation Board';
  @Input() navType: string = 'box';
  @Input() navItems: any[];

  assetPath: string = '../../../../assets/';
  userRights: any[];

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
  }

  /* To get tcode and navigate the link */
  /*
  private onClick(prefix: string, action: string): void {
    const url: string = this.tcodeService.urlCombineTCode(prefix, action);
    this.router.navigate([url]);
  }
  */
}
