// External
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { MenubarModule, MenuItem } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';

import { Subscription } from 'rxjs/Subscription';
import { TranslateService } from '@ngx-translate/core';

// Internal
import {
  SecurityService,
  TcodeService,
  NavigationService,
  LocalStorageService,
  LanguageService,
  ArrayService
 } from '../../../../../../nga/services';

 import {
 	DbGrid3,
 	DbGrid4,
 	DbGrid5,
 	DbGrid6,
 	DbGrid7,
 	DbGrid8,
 	DbGrid9,
 	DbGrid12,
  GkClnDbOverviewAll,
	GkClnDbOverviewActive,
	GkClnDbOverviewInactive,
	GkClnDbOverviewMarked,
  GkClnDbChartDoughnut,
  GkClnDbChartPie,
  GkClnDbChartRadar,
  GkClnDbChartPolarArea,
  GkClnDbChartLine
} from '../gkclnDashboard/gkclnDashboard.component';

import { GkCln51Service } from './gkcln51.service';

export interface dbItem {
     img: string;
     label: string;
     grid: string;
     component: Function;
};

@Component({
  selector: 'gkcln-51',
  templateUrl: './gkcln51.html',
  styleUrls: ['./gkcln51.scss'],
  // entryComponents: [
  //   DbGrid3,
  // 	DbGrid4,
  // 	DbGrid5,
  // 	DbGrid6,
  // 	DbGrid7,
  // 	DbGrid8,
  // 	DbGrid9,
  // 	DbGrid12,
  // ]
})

export class GkCln51Component implements OnInit, OnDestroy {

  DB_COMPONENTS = {
    'DbGrid3': DbGrid3,
   	'DbGrid4': DbGrid4,
   	'DbGrid5': DbGrid5,
   	'DbGrid6': DbGrid6,
   	'DbGrid7': DbGrid7,
   	'DbGrid8': DbGrid8,
   	'DbGrid9': DbGrid9,
   	'DbGrid12': DbGrid12,
    'GkClnDbOverviewAll': GkClnDbOverviewAll,
    'GkClnDbOverviewActive': GkClnDbOverviewActive,
  	'GkClnDbOverviewInactive': GkClnDbOverviewInactive,
  	'GkClnDbOverviewMarked': GkClnDbOverviewMarked,
    'GkClnDbChartDoughnut': GkClnDbChartDoughnut,
    'GkClnDbChartPie': GkClnDbChartPie,
    'GkClnDbChartRadar': GkClnDbChartRadar,
    'GkClnDbChartPolarArea': GkClnDbChartPolarArea,
    'GkClnDbChartLine': GkClnDbChartLine
  };

  title = 'Dashboard';
  prefix: string = 'gkcln';
  userRights: Array<any>;

  // Dashboard Pages
  dbPages: SelectItem[];
  selectedDbPage: any;

  // Toggle Customization Panel
  customizeDb: boolean = false;

  // Standard layout
  stdLayoutList = [];
  selectedLayout: any;

  // Dashboard Page Items
  dbItems: any[];

  availableDbItems: any[]; //dbItem[];
  selectedDbItems: any[]; //dbItem[];
  adaptedDbItems: any[]; // Items in selected Pick List to be adopt layout

  inputs: any;
  outputs: any;
  langSubscription: Subscription;

  varComponents: any[];

  constructor(
    private router: Router,
    private localStorage: LocalStorageService,
    private translate: TranslateService,
    private navigationService: NavigationService,
    private languageService: LanguageService,
    private securityService: SecurityService,
    private tcodeService: TcodeService,
    private gkCln51Service: GkCln51Service,
    private arrayService: ArrayService
  ) {
    // Initialize language
    this.translate.use(localStorage.getLang());

    this.langSubscription = this.languageService.getLanguage()
      .subscribe(lang => {
        translate.use(lang);
      });
  }

  ngOnInit() {
    this.navigationService.trackHistory();

    const currentUser: any = this.securityService.getCurrentUser();
    this.userRights = this.securityService.getMana();

    this.initDashboardPages();
    this.selectedDbItems = [];

    this.initDashboardItems();
    this.availableDbItems = [];

    this.inputs = {
  		hello: 'world',
  		something: () => 'can be really complex'
  	};

  	this.outputs = {
  		onSomething: (type) => alert(type)
  	}

  }

  initDashboardItems() {
    // this.availableDbItems = this.gkCln51Service.getDbList()
    this.dbItems = [
      {
        'img': 'ee8a89d8',
        'label': 'Blank 3',
        'grid': 'ui-g-3',
        'component': 'DbGrid3',
        'blank': true
      },
      {
        'img': '642b3edc',
        'label': 'Blank 4',
        'grid': 'ui-g-4',
        'component': 'DbGrid4',
        'blank': true
      },
      {
        'img': '19ec7580',
        'label': 'Blank 5',
        'grid': 'ui-g-5',
        'component': 'DbGrid5',
        'blank': true
      },
      {
        'img': '39980f30',
        'label': 'Blank 6',
        'grid': 'ui-g-6',
        'component': 'DbGrid6',
        'blank': true
      },
      {
        'img': '39980f31',
        'label': 'Blank 7',
        'grid': 'ui-g-7',
        'component': 'DbGrid7',
        'blank': true
      },
      {
        'img': '39980f32',
        'label': 'Blank 8',
        'grid': 'ui-g-8',
        'component': 'DbGrid8',
        'blank': true
      },
      {
        'img': '39980f30',
        'label': 'Blank 9',
        'grid': 'ui-g-9',
        'component': 'DbGrid9',
        'blank': true
      },
      {
        'img': '39980f34',
        'label': 'Blank 12',
        'grid': 'ui-g-12',
        'component': 'DbGrid12',
        'blank': true
      },
      {
        'img': '39980f34',
        'label': 'Overview All',
        'grid': 'ui-g-3',
        'component': 'GkClnDbOverviewAll',
      },
      {
        'img': '39980f34',
        'label': 'Overview Active',
        'grid': 'ui-g-3',
        'component': 'GkClnDbOverviewActive'
      },
      {
        'img': '39980f34',
        'label': 'Overview Inactive',
        'grid': 'ui-g-3',
        'component': 'GkClnDbOverviewInactive'
      },
      {
        'img': '39980f34',
        'label': 'Overview Marked',
        'grid': 'ui-g-3',
        'component': 'GkClnDbOverviewMarked'
      },
      {
        'img': '39980f34',
        'label': 'Composition Doughnut',
        'grid': 'ui-g-3',
        'component': 'GkClnDbChartDoughnut'
      },
      {
        'img': '39980f34',
        'label': 'Composition Pie',
        'grid': 'ui-g-3',
        'component': 'GkClnDbChartPie'
      },
      {
        'img': '39980f34',
        'label': 'Radar',
        'grid': 'ui-g-6',
        'component': 'GkClnDbChartRadar'
      },
      {
        'img': '39980f34',
        'label': 'Polar Area',
        'grid': 'ui-g-6',
        'component': 'GkClnDbChartPolarArea'
      },
      {
        'img': '39980f34',
        'label': 'Line',
        'grid': 'ui-g-6',
        'component': 'GkClnDbChartLine'
      },
    ];
  }

  initDashboardPages() {
    this.dbPages =
    [
      {
        label: 'Dashboard 1',
        value: {
          label: 'Dashboard 1',
          value: [
            {
              'img': '39980f34',
              'label': 'Overview All',
              'grid': 'ui-g-3',
              'component': 'GkClnDbOverviewAll',
            },
            {
              'img': '39980f34',
              'label': 'Overview Active',
              'grid': 'ui-g-3',
              'component': 'GkClnDbOverviewActive'
            },
            {
              'img': '39980f34',
              'label': 'Overview Inactive',
              'grid': 'ui-g-3',
              'component': 'GkClnDbOverviewInactive'
            },
            {
              'img': '39980f34',
              'label': 'Overview Marked',
              'grid': 'ui-g-3',
              'component': 'GkClnDbOverviewMarked'
            },
          ]
        }
      },

      {
        label: 'Dashboard 2',
        value: {
          label: 'Dashboard 2',
          value: [
            {
              'img': '39980f34',
              'label': 'Polar Area',
              'grid': 'ui-g-6',
              'component': 'GkClnDbChartPolarArea'
            },
            {
              'img': '39980f34',
              'label': 'Line',
              'grid': 'ui-g-6',
              'component': 'GkClnDbChartLine'
            },
          ]
        }
      },
    ];

    this.stdLayoutList = [
      {
        label: '3 / 12',
        value: 'ui-g-3'
      },
      {
        label: '4 / 12',
        value: 'ui-g-4'
      },
      {
        label: '5 / 12',
        value: 'ui-g-5'
      },
      {
        label: '6 / 12',
        value: 'ui-g-6'
      },
      {
        label: '7 / 12',
        value: 'ui-g-7'
      },
      {
        label: '8 / 12',
        value: 'ui-g-8'
      },
      {
        label: '9 / 12',
        value: 'ui-g-9'
      },
      {
        label: '12 / 12',
        value: 'ui-g-12'
      },
    ];
    this.selectedLayout = this.stdLayoutList[0];
  }

  changePage() {
    console.log(this.selectedDbItems);
    this.selectedDbItems = this.selectedDbPage.value;
    this.availableDbItems = this.arrayService.getAvailable(this.dbItems, this.selectedDbPage.value);
  }

  toggleCustomize() {
    this.customizeDb = !this.customizeDb;
  }

  selectItems($event) {
    // console.log(this.selectedLayout);
    // console.log($event);
    this.adaptedDbItems = JSON.parse(JSON.stringify($event.items));
    if ($event.items.length == 1) {
      this.selectedLayout = $event.items[0]['grid'];
    }
  }

  adaptLayout() {
    if (this.adaptedDbItems) {
      for (let i=0; i < this.adaptedDbItems.length; i++) {
        for (let j=0; j < this.selectedDbItems.length; j++) {
          if (JSON.stringify(this.adaptedDbItems[i]) == JSON.stringify(this.selectedDbItems[j])) {
            if (this.selectedLayout) {
                this.adaptedDbItems[i]['grid'] = this.selectedLayout;
                this.selectedDbItems[j]['grid'] = this.selectedLayout;
            }
            break;
          }
        }
      }
    }
  }

  savePageLayout() {
    console.log(this.selectedDbPage.label);
    console.log(this.selectedDbItems);
  }

  ngOnDestroy() {
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
  }
}
