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
  styleUrls: [
    './ihover.scss',
    './navBoard.scss'
  ],
})

export class NavBoard implements OnInit {

  @Input() title: string;
  @Input() navItems: any[];

  items: MenuItem[];

  smallIcon: boolean = false;
  bgStatus: boolean = false;

  assetPath: string = '../../../../assets/';
  userRights: any[];

  navTypeSubscription: Subscription;
  navEffectSubscription: Subscription;

  navType = 'circle';
  navEffect = 'effect1';
  navDirection = 0;
  navAnimateLength = 1;
  navAnimate = [
    [
      'left_to_right',
      'right_to_left',
      'top_to_bottom',
      'bottom_to_top'
    ],
    [
      'scale_up',
      'scale_down'
    ],
    [
      'left_to_right',
      'right_to_left'
    ],
    [
      'top_to_bottom',
      'bottom_to_top'
    ],
    [
      'from_left_and_right',
      'top_to_bottom',
      'bottom_to_top'
    ],
    [
      'from_top_and_bottom',
      'from_left_and_right',
      'top_to_bottom',
      'bottom_to_top'
    ],
    [
      'left_and_right',
      'top_to_bottom',
      'bottom_to_top'
    ]
  ];

  constructor(
    private router: Router,
    private localStorage: LocalStorageService,
    private navigationService: NavigationService,
    private securityService: SecurityService,
    private tcodeService: TcodeService,
    private settingService: SettingService,
  ) {
    // Subscribe to change of navType
    this.navTypeSubscription = settingService.getNavType()
      .subscribe((navType) => {
        this.navType = navType;
        // To re-align navEffect after change to navType
        this.settingService.changeNavEffect(this.navEffect);
      });

      // Subscribe to change of navEffect
      this.navEffectSubscription = settingService.getNavEffect()
        .subscribe((navEffect) => {
          this.navEffect = navEffect;

          if (this.navType=='circle') {

            switch (this.navEffect) {
              case 'effect6':
                this.navDirection = 1;
                break;
              case 'effect10':
              case 'effect20':
                this.navDirection = 3;
                break;
              case 'effect13':
                this.navDirection = 4;
                break;
              case 'effect15':
              case 'effect16':
                this.navDirection = 2;
                break;
              default:
                this.navDirection = 0;
            }

          } else {

            switch (this.navEffect) {
              case 'effect1':
                this.navDirection = 6;
                break;
              case 'effect3':
                this.navDirection = 3;
                break;
              case 'effect5':
                this.navDirection = 2;
                break;
              case 'effect6':
                this.navDirection = 5;
                break;
              case 'effect8':
                this.navDirection = 1;
                break;
              case 'effect2':
              case 'effect4':
              case 'effect7':
              case 'effect9':
              case 'effect10':
              case 'effect11':
              case 'effect12':
              case 'effect13':
              case 'effect14':
              case 'effect15':
                this.navDirection = 0;
                break;
              default:
                const SquareEffect = [
                  'effect1', 'effect2', 'effect3', 'effect4', 'effect5',
                  'effect6', 'effect7', 'effect8', 'effect9', 'effect10',
                  'effect11', 'effect12', 'effect13', 'effect14', 'effect15',
                ];
                if (!SquareEffect.includes(this.navEffect)) {
                  this.navEffect = 'effect15';
                  this.navDirection = 0;
                }
                break;
            }

          }

        });
  }

  ngOnInit() {
    this.navigationService.trackHistory();

    this.navType = this.localStorage.getNavType();
    this.navEffect = this.localStorage.getNavEffect();

    // To use userMana to show or hide relevant or irrelevant tcode
    const currentUser: any = this.securityService.getCurrentUser();
    this.userRights = this.securityService.getMana();

    this.items = [
      { label: 'Circle Shape', command: (event) => { this.changeNavType('circle'); }},
      { label: 'Square Shape', command: (event) => { this.changeNavType('square'); }},
      { label: 'Toggle Backgroud', command: () => { this.toggleBackground(); }},
      { label: 'Toggle Size', command: () => { this.toggleSize(); }},
    ];
  }

  public changeNavType(navType) {
    this.settingService.changeNavType(navType);
  }

  toggleBackground() {
    this.bgStatus = !this.bgStatus;
  }

  toggleSize() {
    this.smallIcon = !this.smallIcon;
  }

}
