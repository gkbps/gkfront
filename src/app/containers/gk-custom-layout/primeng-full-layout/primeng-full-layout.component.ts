import { Component, Input, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { LocalStorageService } from '../../../nga/services';

@Component({
  selector: 'primeng-full-layout',
  templateUrl: './primeng-full-layout.component.html'
})
export class PrimeNGFullLayoutComponent implements OnInit {
  menu: any;

  constructor(
    private translate: TranslateService,
    private localStorage: LocalStorageService,
  ) {
    // Initialize language
    translate.use(localStorage.getLang());
  }

  ngOnInit() {
    this.menu = [
      { label: 'Back to home', icon: 'home', routerLink: ['/home'] },
      {
        label: 'Input', icon: 'flip',
        items: [
          {
            label: 'Input Group', icon: 'check',
            routerLink: ['/prime/prime01/inputgroup'],
          },
          {
            label: 'Calendar', icon: 'check',
            routerLink: ['/prime/prime01/calendar'],
          },
          {
            label: 'Chips', icon: 'check',
            routerLink: ['/prime/prime01/chips'],
          },
          {
            label: 'Dropdown', icon: 'check',
            routerLink: ['/prime/prime01/dropdown'],
          },
          {
            label: 'Input Switch', icon: 'check',
            routerLink: ['/prime/prime01/inputSwitch'],
          },
          {
            label: 'Input Text Area', icon: 'check',
            routerLink: ['/prime/prime01/inputTextArea'],
          },
          {
            label: 'Mask', icon: 'check',
            routerLink: ['/prime/prime01/mask'],
          },
          {
            label: 'Password', icon: 'check',
            routerLink: ['/prime/prime01/password'],
          },
          {
            label: 'Rating', icon: 'check',
            routerLink: ['/prime/prime01/rating'],
          },
          {
            label: 'Spinner', icon: 'check',
            routerLink: ['/prime/prime01/spinner'],
          },
          {
            label: 'Toggle Button', icon: 'check',
            routerLink: ['/prime/prime01/toggleButton'],
          },
          {
            label: 'Auto Complete', icon: 'check',
            routerLink: ['/prime/prime01/autoComplete'],
          },
          {
            label: 'Check Box', icon: 'check',
            routerLink: ['/prime/prime01/checkBox'],
          },
          {
            label: 'Color Picker', icon: 'check',
            routerLink: ['/prime/prime01/colorPicker'],
          },
          {
            label: 'Editor', icon: 'check',
            routerLink: ['/prime/prime01/editor'],
          },
          {
            label: 'Input Text', icon: 'check',
            routerLink: ['/prime/prime01/inputText'],
          },
          {
            label: 'List Box',  icon: 'close',
            routerLink: ['/prime/prime01/listBox'],
          },
          {
            label: 'Multi Select', icon: 'check',
            routerLink: ['/prime/prime01/multiSelect'],
          },
          {
            label: 'Radio Button', icon: 'check',
            routerLink: ['/prime/prime01/radioButton'],
          },
          {
            label: 'Slider', icon: 'check',
            routerLink: ['/prime/prime01/slider'],
          },
          {
            label: 'Select Button', icon: 'check',
            routerLink: ['/prime/prime01/selectButton'],
          },
          {
            label: 'Tri Checkbox', icon: 'check',
            routerLink: ['/prime/prime01/triCheckbox'],
          },
        ],
      },
      {
        label: 'Button', icon: 'flip',
        items: [
          {
            label: 'Button', icon: 'check',
            routerLink: ['/prime/prime02/button'],
          },
          {
            label: 'Split Button', icon: 'check',
            routerLink: ['/prime/prime02/splitButton'],
          },
        ],
      },
      {
        label: 'Data', icon: 'flip',
        items: [
          {
            label: 'Carousel', icon: 'check',
            routerLink: ['/prime/prime03/carousel'],
          },
          {
            label: 'Data List', icon: 'check',
            routerLink: ['/prime/prime03/dataList'],
          },
          {
            label: 'Data Table', icon: 'check',
            routerLink: ['/prime/prime03/dataTable'],
          },
          {
            label: 'Order List', icon: 'close',
            routerLink: ['/prime/prime03/orderList'],
          },
          {
            label: 'Paginator', icon: 'check',
            routerLink: ['/prime/prime03/paginator'],
          },
          {
            label: 'Schedule', icon: 'check',
            routerLink: ['/prime/prime03/schedule'],
          },
          {
            label: 'Tree Table', icon: 'check',
            routerLink: ['/prime/prime03/treeTable'],
          },
          {
            label: 'Data Grid', icon: 'check',
            routerLink: ['/prime/prime03/dataGrid'],
          },
          {
            label: 'Data Scroller', icon: 'check',
            routerLink: ['/prime/prime03/dataScroller'],
          },
          {
            label: 'Org Chart', icon: 'check',
            routerLink: ['/prime/prime03/orgChart'],
          },
          {
            label: 'GMap', icon: 'close',
            routerLink: ['/prime/prime03/gmap'],
          },
          {
            label: 'Pick List', icon: 'close',
            routerLink: ['/prime/prime03/pickList'],
          },
          {
            label: 'Tree', icon: 'check',
            routerLink: ['/prime/prime03/tree'],
          },
        ],
      },
      {
        label: 'Panel', icon: 'flip',
        items: [
          {
            label: 'Accordion', icon: 'check',
            routerLink: ['/prime/prime04/accordion'],
          },
          {
            label: 'Panel', icon: 'close',
            routerLink: ['/prime/prime04/panel'],
          },
          {
            label: 'Tab View', icon: 'close',
            routerLink: ['/prime/prime04/tabView'],
          },
          {
            label: 'Field Set', icon: 'close',
            routerLink: ['/prime/prime04/fieldSet'],
          },
          {
            label: 'Grid', icon: 'check',
            routerLink: ['/prime/prime04/grid'],
          },
          {
            label: 'Toolbar', icon: 'close',
            routerLink: ['/prime/prime04/toolbar'],
          },
        ],
      },
      {
        label: 'Overlay', icon: 'flip',
        items: [
          {
            label: 'Confirm Dialog', icon: 'check',
            routerLink: ['/prime/prime05/confirmDialog'],
          },
          {
            label: 'Light Box', icon: 'check',
            routerLink: ['/prime/prime05/lightBox'],
          },
          {
            label: 'Tool Tip', icon: 'check',
            routerLink: ['/prime/prime05/toolTip'],
          },
          {
            label: 'Dialog', icon: 'check',
            routerLink: ['/prime/prime05/dialog'],
          },
          {
            label: 'Overlay Panel', icon: 'check',
            routerLink: ['/prime/prime05/overlayPanel'],
          },
        ],
      },
      {
        label: 'File', icon: 'flip',
        items: [
          {
            label: 'Upload', icon: 'check',
            routerLink: ['/prime/prime06/upload'],
          },
        ],
      },
      {
        label: 'Menu', icon: 'flip',
        items: [
          {
            label: 'Menu Model', icon: 'check',
            routerLink: ['/prime/prime07/menu'],
          },
          {
            label: 'Context Menu', icon: 'check',
            routerLink: ['/prime/prime07/contextMenu'],
          },
          {
            label: 'Menu', icon: 'check',
            routerLink: ['/prime/prime07/menu'],
          },
          {
            label: 'Panel Menu', icon: 'check',
            routerLink: ['/prime/prime07/panelMenu'],
          },
          {
            label: 'Steps', icon: 'check',
            routerLink: ['/prime/prime07/step'],
          },
          {
            label: 'Tiered Menu', icon: 'check',
            routerLink: ['/prime/prime07/tieredMenu'],
          },
          {
            label: 'Breadcum', icon: 'check',
            routerLink: ['/prime/prime07/breadcum'],
          },
          {
            label: 'Mega Menu', icon: 'close',
            routerLink: ['/prime/prime07/megaMenu'],
          },
          {
            label: 'Menu Bar', icon: 'close',
            routerLink: ['/prime/prime07/menuBar'],
          },
          {
            label: 'Slide Menu', icon: 'close',
            routerLink: ['/prime/prime07/slideMenu'],
          },
          {
            label: 'Tab Menu', icon: 'close',
            routerLink: ['/prime/prime07/tabMenu'],
          },
        ],
      },
      {
        label: 'Chart', icon: 'flip',
        items: [
          {
            label: 'Chart Model', icon: 'close',
            routerLink: ['/prime/prime08/chartModel'],
          },
          {
            label: 'Doughnut', icon: 'check',
            routerLink: ['/prime/prime08/doughnut'],
          },
          {
            label: 'Polar Area', icon: 'check',
            routerLink: ['/prime/prime08/polarArea'],
          },
          {
            label: 'Radar', icon: 'check',
            routerLink: ['/prime/prime08/radar'],
          },
          {
            label: 'Bar', icon: 'check',
            routerLink: ['/prime/prime08/bar'],
          },
          {
            label: 'Line', icon: 'check',
            routerLink: ['/prime/prime08/line'],
          },
          {
            label: 'Pie', icon: 'check',
            routerLink: ['/prime/prime08/pie'],
          },
        ],
      },
      {
        label: 'Messages', icon: 'flip',
        items: [
          {
            label: 'Messages', icon: 'check',
            routerLink: ['/prime/prime09/message'],
          },
          {
            label: 'Growl', icon: 'check',
            routerLink: ['/prime/prime09/growl'],
          },
        ],
      },
      {
        label: 'Multimedia', icon: 'flip',
        items: [
          {
            label: 'Galarie', icon: 'check',
            routerLink: ['/prime/prime10/galarie'],
          },
        ],
      },
      {
        label: 'Drag & Drop', icon: 'flip',
        items: [
          {
            label: 'Drag & Drop', icon: 'check',
            routerLink: ['/prime/prime11/dragDrop'],
          },
        ],
      },
      {
        label: 'Misc', icon: 'flip',
        items: [
          {
            label: 'Responsive', icon: 'check',
            routerLink: ['/prime/prime12/responsive'],
          },
          {
            label: 'Defer', icon: 'close',
            routerLink: ['/prime/prime12/defer'],
          },
          {
            label: 'Captcha', icon: 'close',
            routerLink: ['/prime/prime12/captcha'],
          },
          {
            label: 'Validation', icon: 'check',
            routerLink: ['/prime/prime12/validation'],
          },
          {
            label: 'Code Highlighter', icon: 'close',
            routerLink: ['/prime/prime12/codeHighlighter'],
          },
          {
            label: 'RTL', icon: 'close',
            routerLink: ['/prime/prime12/rtl'],
          },
          {
            label: 'Block UI', icon: 'close',
            routerLink: ['/prime/prime12/blockUI'],
          },
          {
            label: 'Inplace', icon: 'check',
            routerLink: ['/prime/prime12/inplace'],
          },
          {
            label: 'Progress Bar', icon: 'check',
            routerLink: ['/prime/prime12/progressBar'],
          },
          {
            label: 'Terminal', icon: 'check',
            routerLink: ['/prime/prime12/terminal'],
          },
        ],
      },
    ];
    /*
    this.menu = [
        {label: 'PrimeNg', icon: 'dashboard', routerLink: ['/prime']},
        {
            label: 'Input', icon: 'settings',
            items: [
                { label: 'Input Group', icon: 'view_quilt',
                  command: (event) => {
                    // this.app.layoutStatic = true;
                  }
                },
                { label: 'Overlay Menu', icon: 'flip_to-front',
                  command: (event) => {
                    // this.app.layoutStatic = false;
                  }
                },
                { label: 'Light Menu', icon: 'label',
                  command: (event) => {
                    // this.app.darkMenu = false;
                  }
                },
                { label: 'Dark Menu', icon: 'label_outline',
                  command: (event) => {
                    // this.app.darkMenu = true;
                  }
                }
            ]
        },
        {
            label: 'Layout Palette', icon: 'palette',
            items: [
                {
                    label: 'Flat', icon: 'format_paint',
                    items: [
                        {label: 'Blue Grey - Green', icon: 'brush', command: (event) => {this.changeLayout('bluegrey'); }},
                        {label: 'Indigo - Pink', icon: 'brush', command: (event) => {this.changeLayout('indigo'); }},
                        {label: 'Pink - Amber', icon: 'brush', command: (event) => {this.changeLayout('pink'); }},
                        {label: 'Deep Purple - Orange', icon: 'brush', command: (event) => {this.changeLayout('deeppurple'); }},
                        {label: 'Blue - Amber', icon: 'brush', command: (event) => {this.changeLayout('blue'); }},
                        {label: 'Light Blue - Blue Grey', icon: 'brush', command: (event) => {this.changeLayout('lightblue'); }},
                        {label: 'Cyan - Amber', icon: 'brush', command: (event) => {this.changeLayout('cyan'); }},
                        {label: 'Teal - Red', icon: 'brush', command: (event) => {this.changeLayout('teal'); }},
                        {label: 'Green - Brown', icon: 'brush', command: (event) => {this.changeLayout('green'); }},
                        {label: 'Light Green - Purple', icon: 'brush', command: (event) => {this.changeLayout('lightgreen'); }},
                        {label: 'Lime - Blue Grey', icon: 'brush', command: (event) => {this.changeLayout('lime'); }},
                        {label: 'Yellow - Teal', icon: 'brush', command: (event) => {this.changeLayout('yellow'); }},
                        {label: 'Amber - Pink', icon: 'brush', command: (event) => {this.changeLayout('amber'); }},
                        {label: 'Orange - Indigo', icon: 'brush', command: (event) => {this.changeLayout('orange'); }},
                        {label: 'Deep Orange - Cyan', icon: 'brush', command: (event) => {this.changeLayout('deeporange'); }},
                        {label: 'Brown - Cyan', icon: 'brush', command: (event) => {this.changeLayout('brown'); }},
                        {label: 'Grey - Indigo', icon: 'brush', command: (event) => {this.changeLayout('grey'); }}
                    ]
                },
                {
                    label: 'Special', icon: 'format_paint',
                    items: [
                        {label: 'Reflection', icon: 'brush', command: (event) => {this.changeLayout('reflection'); }},
                        {label: 'Moody', icon: 'brush', command: (event) => {this.changeLayout('moody'); }},
                        {label: 'Cityscape', icon: 'brush', command: (event) => {this.changeLayout('cityscape'); }},
                        {label: 'Cloudy', icon: 'brush', command: (event) => {this.changeLayout('cloudy'); }},
                        {label: 'Storm', icon: 'brush', command: (event) => {this.changeLayout('storm'); }},
                        {label: 'Palm', icon: 'brush', command: (event) => {this.changeLayout('palm'); }},
                        {label: 'Flatiron', icon: 'brush', command: (event) => {this.changeLayout('flatiron'); }}
                    ]
                },
            ]
        },
        {
            label: 'Themes', icon: 'brush', badge: '5',
            items: [
                {label: 'Blue Grey - Green', icon: 'brush', command: (event) => {this.changeTheme('bluegrey'); }},
                {label: 'Indigo - Pink', icon: 'brush', command: (event) => {this.changeTheme('indigo'); }},
                {label: 'Pink - Amber', icon: 'brush', command: (event) => {this.changeTheme('pink'); }},
                {label: 'Purple - Pink', icon: 'brush', command: (event) => {this.changeTheme('purple'); }},
                {label: 'Deep Purple - Orange', icon: 'brush', command: (event) => {this.changeTheme('deeppurple'); }},
                {label: 'Blue - Amber', icon: 'brush', command: (event) => {this.changeTheme('blue'); }},
                {label: 'Light Blue - Blue Grey', icon: 'brush', command: (event) => {this.changeTheme('lightblue'); }},
                {label: 'Cyan - Amber', icon: 'brush', command: (event) => {this.changeTheme('cyan'); }},
                {label: 'Teal - Red', icon: 'brush', command: (event) => {this.changeTheme('teal'); }},
                {label: 'Green - Brown', icon: 'brush', command: (event) => {this.changeTheme('green'); }},
                {label: 'Light Green - Purple', icon: 'brush', command: (event) => {this.changeTheme('lightgreen'); }},
                {label: 'Lime - Blue Grey', icon: 'brush', command: (event) => {this.changeTheme('lime'); }},
                {label: 'Yellow - Teal', icon: 'brush', command: (event) => {this.changeTheme('yellow'); }},
                {label: 'Amber - Pink', icon: 'brush', command: (event) => {this.changeTheme('amber'); }},
                {label: 'Orange - Indigo', icon: 'brush', command: (event) => {this.changeTheme('orange'); }},
                {label: 'Deep Orange - Cyan', icon: 'brush', command: (event) => {this.changeTheme('deeporange'); }},
                {label: 'Brown - Cyan', icon: 'brush', command: (event) => {this.changeTheme('brown'); }},
                {label: 'Grey - Indigo', icon: 'brush', command: (event) => {this.changeTheme('grey'); }}
            ]
        },
        {
            label: 'Components', icon: 'list', badge: '2', badgeStyleClass: 'orange-badge',
            items: [
                {label: 'Sample Page', icon: 'desktop_mac', routerLink: ['/sample']},
                {label: 'Forms', icon: 'input', routerLink: ['/forms']},
                {label: 'Data', icon: 'grid_on', routerLink: ['/data']},
                {label: 'Panels', icon: 'content_paste', routerLink: ['/panels']},
                {label: 'Overlays', icon: 'content_copy', routerLink: ['/overlays']},
                {label: 'Menus', icon: 'menu', routerLink: ['/menus']},
                {label: 'Messages', icon: 'message', routerLink: ['/messages']},
                {label: 'Charts', icon: 'insert_chart', routerLink: ['/charts']},
                {label: 'File', icon: 'attach_file', routerLink: ['/file']},
                {label: 'Misc', icon: 'toys', routerLink: ['/misc']}
            ]
        },
        {
            label: 'Template Pages', icon: 'get_app',
            items: [
                {label: 'Empty Page', icon: 'hourglass_empty', routerLink: ['/empty']},
                {label: 'Landing Page', icon: 'flight_land', url: 'assets/pages/landing.html', target: '_blank'},
                {label: 'Login Page', icon: 'verified_user', url: 'assets/pages/login.html', target: '_blank'},
                {label: 'Error Page', icon: 'error', url: 'assets/pages/error.html', target: '_blank'},
                {label: '404 Page', icon: 'error_outline', url: 'assets/pages/404.html', target: '_blank'},
                {label: 'Access Denied Page', icon: 'security', url: 'assets/pages/access.html', target: '_blank'}
            ]
        },
        {
            label: 'Menu Hierarchy', icon: 'menu',
            items: [
                {
                    label: 'Submenu 1', icon: 'subject',
                    items: [
                        {
                            label: 'Submenu 1.1', icon: 'subject',
                            items: [
                                {label: 'Submenu 1.1.1', icon: 'subject'},
                                {label: 'Submenu 1.1.2', icon: 'subject'},
                                {label: 'Submenu 1.1.3', icon: 'subject'},
                            ]
                        },
                        {
                            label: 'Submenu 1.2', icon: 'subject',
                            items: [
                                {label: 'Submenu 1.2.1', icon: 'subject'},
                                {label: 'Submenu 1.2.2', icon: 'subject'}
                            ]
                        },
                    ]
                },
                {
                    label: 'Submenu 2', icon: 'subject',
                    items: [
                        {
                            label: 'Submenu 2.1', icon: 'subject',
                            items: [
                                {label: 'Submenu 2.1.1', icon: 'subject'},
                                {label: 'Submenu 2.1.2', icon: 'subject'},
                                {label: 'Submenu 2.1.3', icon: 'subject'}
                            ]
                        },
                        {
                            label: 'Submenu 2.2', icon: 'subject',
                            items: [
                                {label: 'Submenu 2.2.1', icon: 'subject'},
                                {label: 'Submenu 2.2.2', icon: 'subject'}
                            ]
                        },
                    ]
                }
            ]
        },
        {label: 'Utils', icon: 'build', routerLink: ['/utils']},
        {label: 'Documentation', icon: 'find_in_page', routerLink: ['/documentation']},
        {label: 'Buy Now', icon: 'credit_card', url: 'https://www.primefaces.org/store'}
    ];
    */
  }

  changeLayout(layout) {
    console.log(layout);
  }

  changeTheme(theme) {
    console.log(theme);
  }
}
