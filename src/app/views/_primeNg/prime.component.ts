import { Component, OnInit } from '@angular/core';

import { MenubarModule, MenuItem } from 'primeng/primeng';

@Component({
  selector: 'prime',
  templateUrl: './prime.html',
  styleUrls: ['./prime.scss'],
})

export class Prime implements OnInit {

  items: MenuItem[];

  constructor() {
  }

  ngOnInit() {

    this.items = [
      {
        label: 'Input',
        items: [
          {
            label: 'Input Group',
            routerLink: ['/prime/prime01/inputgroup'],
          },
          {
            label: 'Calendar',
            routerLink: ['/prime/prime01/calendar'],
          },
          {
            label: 'Chips',
            routerLink: ['/prime/prime01/chips'],
          },
          {
            label: 'Dropdown',
            routerLink: ['/prime/prime01/dropdown'],
          },
          {
            label: 'Input Switch',
            routerLink: ['/prime/prime01/inputSwitch'],
          },
          {
            label: 'Input Text Area',
            routerLink: ['/prime/prime01/inputTextArea'],
          },
          {
            label: 'Mask',
            routerLink: ['/prime/prime01/mask'],
          },
          {
            label: 'Password',
            routerLink: ['/prime/prime01/password'],
          },
          {
            label: 'Rating',
            routerLink: ['/prime/prime01/rating'],
          },
          {
            label: 'Spinner',
            routerLink: ['/prime/prime01/spinner'],
          },
          {
            label: 'Toggle Button',
            routerLink: ['/prime/prime01/toggleButton'],
          },
          {
            label: 'Auto Complete',
            routerLink: ['/prime/prime01/autoComplete'],
          },
          {
            label: 'Check Box',
            routerLink: ['/prime/prime01/checkBox'],
          },
          {
            label: 'Color Picker',
            routerLink: ['/prime/prime01/colorPicker'],
          },
          {
            label: 'Editor',
            routerLink: ['/prime/prime01/editor'],
          },
          {
            label: 'Input Text',
            routerLink: ['/prime/prime01/inputText'],
          },
          {
            label: 'List Box',
            routerLink: ['/prime/prime01/listBox'],
          },
          {
            label: 'Multi Select',
            routerLink: ['/prime/prime01/multiSelect'],
          },
          {
            label: 'Radio Button',
            routerLink: ['/prime/prime01/radioButton'],
          },
          {
            label: 'Slider',
            routerLink: ['/prime/prime01/slider'],
          },
          {
            label: 'Select Button',
            routerLink: ['/prime/prime01/selectButton'],
          },
          {
            label: 'Tri Checkbox',
            routerLink: ['/prime/prime01/triCheckbox'],
          },
        ],
      },
      {
        label: 'Button',
        items: [
          {
            label: 'Button',
            routerLink: ['/prime/prime02/button'],
          },
          {
            label: 'Split Button',
            routerLink: ['/prime/prime02/splitButton'],
          },
        ],
      },
      {
        label: 'Data',
        items: [
          {
            label: 'Carousel',
            routerLink: ['/prime/prime03/carousel'],
          },
          {
            label: 'Data List',
            routerLink: ['/prime/prime03/dataList'],
          },
          {
            label: 'Data Table',
            routerLink: ['/prime/prime03/dataTable'],
          },
          {
            label: 'Order List',
            routerLink: ['/prime/prime03/orderList'],
          },
          {
            label: 'Paginator',
            routerLink: ['/prime/prime03/paginator'],
          },
          {
            label: 'Schedule',
            routerLink: ['/prime/prime03/schedule'],
          },
          {
            label: 'Tree Table',
            routerLink: ['/prime/prime03/treeTable'],
          },
          {
            label: 'Data Grid',
            routerLink: ['/prime/prime03/dataGrid'],
          },
          {
            label: 'Data Scroller',
            routerLink: ['/prime/prime03/dataScroller'],
          },
          {
            label: 'Org Chart',
            routerLink: ['/prime/prime03/orgChart'],
          },
          {
            label: 'GMap',
            routerLink: ['/prime/prime03/gmap'],
          },
          {
            label: 'Pick List',
            routerLink: ['/prime/prime03/pickList'],
          },
          {
            label: 'Tree',
            routerLink: ['/prime/prime03/tree'],
          },
        ],
      },
      {
        label: 'Panel',
        items: [
          {
            label: 'Accordion',
            routerLink: ['/prime/prime04/accordion'],
          },
          {
            label: 'Panel',
            routerLink: ['/prime/prime04/panel'],
          },
          {
            label: 'Tab View',
            routerLink: ['/prime/prime04/tabView'],
          },
          {
            label: 'Field Set',
            routerLink: ['/prime/prime04/fieldSet'],
          },
          {
            label: 'Grid',
            routerLink: ['/prime/prime04/grid'],
          },
          {
            label: 'Toolbar',
            routerLink: ['/prime/prime04/toolbar'],
          },
        ],
      },
      {
        label: 'Overlay',
        items: [
          {
            label: 'Confirm Dialog',
            routerLink: ['/prime/prime05/confirmDialog'],
          },
          {
            label: 'Light Box',
            routerLink: ['/prime/prime05/lightBox'],
          },
          {
            label: 'Tool Tip',
            routerLink: ['/prime/prime05/toolTip'],
          },
          {
            label: 'Dialog',
            routerLink: ['/prime/prime05/dialog'],
          },
          {
            label: 'Overlay Panel',
            routerLink: ['/prime/prime05/overlayPanel'],
          },
        ],
      },
      {
        label: 'File',
        items: [
          {
            label: 'Upload',
            routerLink: ['/prime/prime06/upload'],
          },
        ],
      },
      {
        label: 'Menu',
        items: [
          {
            label: 'Menu Model',
            routerLink: ['/prime/prime07/menu'],
          },
          {
            label: 'Context Menu',
            routerLink: ['/prime/prime07/contextMenu'],
          },
          {
            label: 'Menu',
            routerLink: ['/prime/prime07/menu'],
          },
          {
            label: 'Panel Menu',
            routerLink: ['/prime/prime07/panelMenu'],
          },
          {
            label: 'Steps',
            routerLink: ['/prime/prime07/step'],
          },
          {
            label: 'Tiered Menu',
            routerLink: ['/prime/prime07/tieredMenu'],
          },
          {
            label: 'Breadcum',
            routerLink: ['/prime/prime07/breadcum'],
          },
          {
            label: 'Mega Menu',
            routerLink: ['/prime/prime07/megaMenu'],
          },
          {
            label: 'Menu Bar',
            routerLink: ['/prime/prime07/menuBar'],
          },
          {
            label: 'Slide Menu',
            routerLink: ['/prime/prime07/slideMenu'],
          },
          {
            label: 'Tab Menu',
            routerLink: ['/prime/prime07/tabMenu'],
          },
        ],
      },
      {
        label: 'Chart',
        items: [
          {
            label: 'Chart Model',
            routerLink: ['/prime/prime08/chartModel'],
          },
          {
            label: 'Doughnut',
            routerLink: ['/prime/prime08/doughnut'],
          },
          {
            label: 'Polar Area',
            routerLink: ['/prime/prime08/polarArea'],
          },
          {
            label: 'Radar',
            routerLink: ['/prime/prime08/radar'],
          },
          {
            label: 'Bar',
            routerLink: ['/prime/prime08/bar'],
          },
          {
            label: 'Line',
            routerLink: ['/prime/prime08/line'],
          },
          {
            label: 'Pie',
            routerLink: ['/prime/prime08/pie'],
          },
        ],
      },
      {
        label: 'Messages',
        items: [
          {
            label: 'Messages',
            routerLink: ['/prime/prime09/message'],
          },
          {
            label: 'Growl',
            routerLink: ['/prime/prime09/growl'],
          },
        ],
      },
      {
        label: 'Multimedia',
        items: [
          {
            label: 'Galarie',
            routerLink: ['/prime/prime10/galarie'],
          },
        ],
      },
      {
        label: 'Drag & Drop',
        items: [
          {
            label: 'Drag & Drop',
            routerLink: ['/prime/prime11/dragDrop'],
          },
        ],
      },
      {
        label: 'Misc',
        items: [
          {
            label: 'Responsive',
            routerLink: ['/prime/prime12/responsive'],
          },
          {
            label: 'Defer',
            routerLink: ['/prime/prime12/defer'],
          },
          {
            label: 'Captcha',
            routerLink: ['/prime/prime12/captcha'],
          },
          {
            label: 'Validation',
            routerLink: ['/prime/prime12/validation'],
          },
          {
            label: 'Code Highlighter',
            routerLink: ['/prime/prime12/codeHighlighter'],
          },
          {
            label: 'RTL',
            routerLink: ['/prime/prime12/rtl'],
          },
          {
            label: 'Block UI',
            routerLink: ['/prime/prime12/blockUI'],
          },
          {
            label: 'Inplace',
            routerLink: ['/prime/prime12/inplace'],
          },
          {
            label: 'Progress Bar',
            routerLink: ['/prime/prime12/progressBar'],
          },
          {
            label: 'Terminal',
            routerLink: ['/prime/prime12/terminal'],
          },
        ],
      },
    ];


  }

}
