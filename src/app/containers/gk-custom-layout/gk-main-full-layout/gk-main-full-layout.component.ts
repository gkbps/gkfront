import { Component, Input, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import {
  LocalStorageService,
  StateManagementService,
  SettingService,
  ThemeService,
} from '../../../nga/services';

@Component({
  selector: 'gk-main-full-layout',
  templateUrl: './gk-main-full-layout.component.html'
})
export class GkMainFullLayoutComponent implements OnInit {
  menu: any;

  constructor(
    private translate: TranslateService,
    private localStorage: LocalStorageService,
    private settingService: SettingService,
    private stateManagementService: StateManagementService,
    private themeService: ThemeService,
  ) {
    // Initialize language
    translate.use(localStorage.getLang());
  }

  ngOnInit() {

    this.menu = [
      {label: 'backToMain', icon: 'dashboard', routerLink: ['/']},
      {
          label: 'menu_modes', icon: 'settings',
          items: [
              { label: 'static_menu', icon: 'view_quilt',
                command: (event) => {
                  this.stateManagementService.wrapperStatic(true);
                  // this.app.layoutStatic = true;
                }
              },
              { label: 'overlay_menu', icon: 'flip_to-front',
                command: (event) => {
                  this.stateManagementService.wrapperStatic(false);
                  // this.app.layoutStatic = false;
                }
              },
              { label: 'light_menu', icon: 'label',
                command: (event) => {
                  this.stateManagementService.sidebarDark(false);
                  // this.app.darkMenu = false;
                }
              },
              { label: 'dark_menu', icon: 'label_outline',
                command: (event) => {
                  this.stateManagementService.sidebarDark(true);
                  // this.app.darkMenu = true;
                }
              }
          ]
      },
      {
          label: 'layout_pallete', icon: 'palette',
          items: [
              {
                  label: 'flat', icon: 'format_paint',
                  items: [
                      {label: 'blue_grey_green', icon: 'brush', command: (event) => {this.changeLayout('bluegrey'); }},
                      {label: 'indigo_pink', icon: 'brush', command: (event) => {this.changeLayout('indigo'); }},
                      {label: 'pink_amber', icon: 'brush', command: (event) => {this.changeLayout('pink'); }},
                      {label: 'deep_purple_orange', icon: 'brush', command: (event) => {this.changeLayout('deeppurple'); }},
                      {label: 'blue_amber', icon: 'brush', command: (event) => {this.changeLayout('blue'); }},
                      {label: 'light_blue_blue_grey', icon: 'brush', command: (event) => {this.changeLayout('lightblue'); }},
                      {label: 'cyan_amber', icon: 'brush', command: (event) => {this.changeLayout('cyan'); }},
                      {label: 'teal_red', icon: 'brush', command: (event) => {this.changeLayout('teal'); }},
                      {label: 'green_brown', icon: 'brush', command: (event) => {this.changeLayout('green'); }},
                      {label: 'light_green_purple', icon: 'brush', command: (event) => {this.changeLayout('lightgreen'); }},
                      {label: 'lime_blue_grey', icon: 'brush', command: (event) => {this.changeLayout('lime'); }},
                      {label: 'yellow_teal', icon: 'brush', command: (event) => {this.changeLayout('yellow'); }},
                      {label: 'amber_pink', icon: 'brush', command: (event) => {this.changeLayout('amber'); }},
                      {label: 'orange_indigo', icon: 'brush', command: (event) => {this.changeLayout('orange'); }},
                      {label: 'deep_orange_cyan', icon: 'brush', command: (event) => {this.changeLayout('deeporange'); }},
                      {label: 'brown_cyan', icon: 'brush', command: (event) => {this.changeLayout('brown'); }},
                      {label: 'grey_indigo', icon: 'brush', command: (event) => {this.changeLayout('grey'); }}
                  ]
              },
              {
                  label: 'special', icon: 'format_paint',
                  items: [
                      {label: 'reflection', icon: 'brush', command: (event) => {this.changeLayout('reflection'); }},
                      {label: 'moody', icon: 'brush', command: (event) => {this.changeLayout('moody'); }},
                      {label: 'cityscape', icon: 'brush', command: (event) => {this.changeLayout('cityscape'); }},
                      {label: 'cloudy', icon: 'brush', command: (event) => {this.changeLayout('cloudy'); }},
                      {label: 'storm', icon: 'brush', command: (event) => {this.changeLayout('storm'); }},
                      {label: 'palm', icon: 'brush', command: (event) => {this.changeLayout('palm'); }},
                      {label: 'flatiron', icon: 'brush', command: (event) => {this.changeLayout('flatiron'); }}
                  ]
              },
          ]
      },
      {
          label: 'themes', icon: 'brush', badge: '5',
          items: [
              {label: 'blue_grey_green', icon: 'brush', command: (event) => {this.changeTheme('bluegrey'); }},
              {label: 'indigo_pink', icon: 'brush', command: (event) => {this.changeTheme('indigo'); }},
              {label: 'pink_amber', icon: 'brush', command: (event) => {this.changeTheme('pink'); }},
              {label: 'purple_pink', icon: 'brush', command: (event) => {this.changeTheme('purple'); }},

              {label: 'deep_purple_orange', icon: 'brush', command: (event) => {this.changeTheme('deeppurple'); }},
              {label: 'blue_amber', icon: 'brush', command: (event) => {this.changeTheme('blue'); }},
              {label: 'light_blue_blue_grey', icon: 'brush', command: (event) => {this.changeTheme('lightblue'); }},
              {label: 'cyan_amber', icon: 'brush', command: (event) => {this.changeTheme('cyan'); }},
              {label: 'teal_red', icon: 'brush', command: (event) => {this.changeTheme('teal'); }},
              {label: 'green_brown', icon: 'brush', command: (event) => {this.changeTheme('green'); }},
              {label: 'light_green_purple', icon: 'brush', command: (event) => {this.changeTheme('lightgreen'); }},
              {label: 'lime_blue_grey', icon: 'brush', command: (event) => {this.changeTheme('lime'); }},
              {label: 'yellow_teal', icon: 'brush', command: (event) => {this.changeTheme('yellow'); }},
              {label: 'amber_pink', icon: 'brush', command: (event) => {this.changeTheme('amber'); }},
              {label: 'orange_indigo', icon: 'brush', command: (event) => {this.changeTheme('orange'); }},
              {label: 'deep_orange_cyan', icon: 'brush', command: (event) => {this.changeTheme('deeporange'); }},
              {label: 'brown_cyan', icon: 'brush', command: (event) => {this.changeTheme('brown'); }},
              {label: 'grey_indigo', icon: 'brush', command: (event) => {this.changeTheme('grey'); }}
          ]
      },
      {
          label: 'preference', icon: 'format_color_fill',
          items: [
              {
                label: 'navType', icon: 'navigation',
                items: [
                  {
                    label: 'Shape', icon: 'navigation',
                    items: [
                      {label: 'Circle', icon: 'hdr_weak', command: (event) => {this.changeNavType('circle'); }},
                      {label: 'Square', icon: 'crop_portrait', command: (event) => {this.changeNavType('square'); }},
                    ]
                  },
                  {
                    label: 'Shape Effect',
                    items: [
                      {label: 'Effect 1', command: (event) => { this.changeNavEffect('effect1'); }},
                      {label: 'Effect 2', command: (event) => { this.changeNavEffect('effect2'); }},
                      {label: 'Effect 3', command: (event) => { this.changeNavEffect('effect3'); }},
                      {label: 'Effect 4', command: (event) => { this.changeNavEffect('effect4'); }},
                      {label: 'Effect 5', command: (event) => { this.changeNavEffect('effect5'); }},
                      {label: 'Effect 6', command: (event) => { this.changeNavEffect('effect6'); }},
                      {label: 'Effect 7', command: (event) => { this.changeNavEffect('effect7'); }},
                      {label: 'Effect 8', command: (event) => { this.changeNavEffect('effect8'); }},
                      {label: 'Effect 9', command: (event) => { this.changeNavEffect('effect9'); }},
                      {label: 'Effect 10', command: (event) => { this.changeNavEffect('effect10'); }},
                      {label: 'Effect 11', command: (event) => { this.changeNavEffect('effect11'); }},
                      {label: 'Effect 12', command: (event) => { this.changeNavEffect('effect12'); }},
                      {label: 'Effect 13', command: (event) => { this.changeNavEffect('effect13'); }},
                      {label: 'Effect 14', command: (event) => { this.changeNavEffect('effect14'); }},
                      {label: 'Effect 15', command: (event) => { this.changeNavEffect('effect15'); }},
                      {label: 'Effect 16 (Circle only)', command: (event) => { this.changeNavEffect('effect16'); }},
                      {label: 'Effect 17 (Circle only)', command: (event) => { this.changeNavEffect('effect17'); }},
                      {label: 'Effect 18 (Circle only)', command: (event) => { this.changeNavEffect('effect18'); }},
                      {label: 'Effect 19 (Circle only)', command: (event) => { this.changeNavEffect('effect19'); }},
                      {label: 'Effect 20 (Circle only)', command: (event) => { this.changeNavEffect('effect20'); }}
                    ]
                  },
                ]
              },
              {
                  label: 'alertType', icon: 'notifications',
                  items: [
                      {label: 'toast', icon: 'chat', command: (event) => {this.changeAlertType('alert'); }},
                      {label: 'message', icon: 'view_headline', command: (event) => {this.changeAlertType('toast'); }},
                  ]
              },
          ]
      },
    ];

  }

  changeLayout(layout) {
    console.log(layout);
    this.themeService.changeLayout(layout);
    return false;
  }

  changeTheme(theme) {
    console.log(theme);
    this.themeService.changeTheme(theme);
    return false;
  }

  public changeAlertType(alertType) {
    this.settingService.changeAlertType(alertType);
  }

  public changeNavType(navType) {
    this.settingService.changeNavType(navType);
  }

  public changeNavEffect(navEffect) {
    this.settingService.changeNavEffect(navEffect);
  }

}
