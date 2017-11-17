import { Component, OnInit,  OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

import { MenuItem } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';
import { Message } from 'primeng/primeng';

import { Subscription } from 'rxjs/Subscription';
import { TranslateService } from '@ngx-translate/core';

import { EventService } from './event.service';

export class MyEvent {
    id: number;
    title: string;
    start: string;
    end: string;
    allDay: boolean = true;
}

import {
  LocalStorageService,
  StateManagementService,
  SettingService,
  LanguageService
} from '../../../nga/services';

@Component({
  templateUrl: 'setting.component.html'
})
export class SettingComponent implements OnInit, OnDestroy {
  title = 'gkcln00';
  navItems: any[];
  public systemImagePath: string = 'modules/settings/';

  members = [
    'assets/images/avatar1.png',
    'assets/images/avatar2.png',
    'assets/images/avatar3.png'
  ];

  items: MenuItem[];
  taskList: any[];

  messageList: any[];
  chatData: any[];
  statusList: any[];
  globalSales: any[];
  userData: any;

  cars: any;
  data: any;

  msgs: Message[] = [];

  alertType: string;
  alertSubscription: Subscription;

  events: any[];
  header: any;
  event: MyEvent;
  dialogVisible: boolean = false;
  idGen: number = 100;

  langSubscription: Subscription;

  constructor(
    private translate: TranslateService,
    private localStorageService: LocalStorageService,
    private stateManagementService: StateManagementService,
    private settingService: SettingService,
    private eventService: EventService,
    private languageService: LanguageService,
  ) {
    stateManagementService.initState();

    // Initialize language
    this.translate.use(localStorageService.getLang());

    this.langSubscription = this.languageService.getLanguage()
      .subscribe(lang => {
        translate.use(lang);
      });

    this.alertSubscription = this.settingService.getAlertType()
      .subscribe(alertType => {
        this.alertType = alertType;
      });

    this.eventService.getEvents().then(events => {this.events = events;});
    this.header = {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    };
  }

  ngOnInit() {
    this.initGkNavBoard();
    this.initGkTaskList();
    this.initMessageList();
    this.initChatData();
    this.initStatusList();
    this.initGlobalSale();
    this.initDataTable();
    this.initUserData();
    this.initSchedule();
  }

  initGkNavBoard() {
    const imgPath = this.systemImagePath + 'circle/';
    const squareImgPath = this.systemImagePath + 'square/';

    this.navItems = [
      {
        'url': '',
        'img': imgPath + '1.jpg',
        'squareImg': squareImgPath + '1.jpg',
        'tcode': 'gkcln00',
        'title': 'gkcln00' // 'GK Clients Management'
      },
      {
        'url': '',
        'img': imgPath + '2.jpg',
        'squareImg': squareImgPath + '2.jpg',
        'tcode': 'gksol00',
        'title': 'gksol00' // 'GK Solutions Processing'
      },
      {
        'url': '',
        'img': imgPath + '3.jpg',
        'squareImg': squareImgPath + '3.jpg',
        'tcode': 'gktcd00',
        'title': 'gktcd00' // 'GK Tcodes Management'
      },
      {
        'url': '',
        'img': imgPath + '4.jpg',
        'squareImg': squareImgPath + '4.jpg',
        'tcode': 'gkcln00',
        'title': 'gkcln00' // 'GK Clients Management'
      },
      {
        'url': '',
        'img': imgPath + '5.jpg',
        'squareImg': squareImgPath + '5.jpg',
        'tcode': 'gksol00',
        'title': 'gksol00' // 'GK Solutions Processing'
      },
      {
        'url': '',
        'img': imgPath + '6.jpg',
        'squareImg': squareImgPath + '6.jpg',
        'tcode': 'gktcd00',
        'title': 'gktcd00' // 'GK Tcodes Management'
      },
      {
        'url': '',
        'img': imgPath + '7.jpg',
        'squareImg': squareImgPath + '7.jpg',
        'tcode': 'gkcln00',
        'title': 'gkcln00' // 'GK Clients Management'
      },
      {
        'url': '',
        'img': imgPath + '8.jpg',
        'squareImg': squareImgPath + '8.jpg',
        'tcode': 'gksol00',
        'title': 'gksol00' // 'GK Solutions Processing'
      }
    ];
  }

  initGkTaskList() {
    this.items = [{
        label: 'File',
        items: [
            {label: 'New', icon: 'ui-icon-add'},
            {label: 'Open', icon: 'ui-icon-search'}
        ]
    },
    {
        label: 'Edit',
        items: [
            {label: 'Undo', icon: 'ui-icon-undo'},
            {label: 'Redo', icon: 'ui-icon-redo'}
        ]
    }];

    this.taskList = [
      {
        status: false,
        label: 'Sales Reports',
        icon: 'shop'
      },
      {
        status: true,
        label: 'Pay Invoices',
        icon: 'credit_card'
      },
    ];

  }

  initMessageList() {
    this.messageList = [
      {
        'img': 'assets/images/avatar1.png',
        'name': 'Joshua Williams',
        'text': 'Sales reports attached.'
      },
      {
        'img': 'assets/images/avatar2.png',
        'name': 'Emily Watson',
        'text': 'Meeting at 2pm tomorrow.'
      },
    ]
  }

  initChatData() {
    this.chatData = [
      {
        'label': 'Sales Team',
        'messages': [
          {
            'img': 'assets/images/avatar2.png',
            'text': 'Retro occupy organic, stumptown shabby chic pour-over roof party DIY normcore.'
          },
          {
            'img': 'assets/images/avatar.png',
            'text': 'Actually artisan organic occupy, Wes Anderson ugh whatever pour-over gastropub selvage.'
          },
          {
            'img': 'assets/images/avatar2.png',
            'text': 'Chillwave craft beer tote bag stumptown quinoa hashtag.'
          },
          {
            'img': 'assets/images/avatar.png',
            'text': 'Dreamcatcher locavore iPhone chillwave, occupy trust fund slow-carb distillery art party narwhal.'
          },
          {
            'text': 'Sed ut perspiciatis unde omnis iste natus.'
          },
          {
            'img': 'assets/images/avatar2.png',
            'text': 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.'
          },
          {
            'img': 'assets/images/avatar.png',
            'text': 'At vero eos et accusamus.'
          },
        ]
      },
      {
        'label': 'Design Team',
        'messages': [
          {
            'img': 'assets/images/avatar3.png',
            'text': 'Cliche flannel fam mixtape.'
          },
          {
            'img': 'assets/images/avatar.png',
            'text': 'Tofu glossier bicycle rights banh mi direct trade austin salvia slow-carb occupy.'
          },
          {
            'img': 'assets/images/avatar3.png',
            'text': 'Crucifix tote bag pork belly distillery church-key jianbing jean shorts taxidermy.'
          },
          {
            'img': 'assets/images/avatar.png',
            'text': 'Deep v hexagon street art migas butcher, keytar biodiesel bicycle rights typewriter cornhole actually next.'
          },
          {
            'text': 'Oh. You need a little dummy text for your mockup? How quaint.'
          },
          {
            'img': 'assets/images/avatar3.png',
            'text': 'Salvia woke bushwick leggings mumblecore poke tumblr master cleanse.'
          },
          {
            'img': 'assets/images/avatar.png',
            'text': 'Skateboard ethical adaptogen, quinoa wolf poutine echo park.'
          },
        ]
      },
    ]
  }

  initStatusList() {
    this.statusList = [
      {
        'style': 'status-bar-1',
        'progress': '22%',
        'label': 'Users',
        'icon': ''
      },
      {
        'style': 'status-bar-2',
        'progress': '78%',
        'label': 'Confirmed',
        'icon': ''
      },
      {
        'style': 'status-bar-3',
        'progress': '51%',
        'label': 'Defects',
        'icon': ''
      },
      {
        'style': 'status-bar-4',
        'progress': '68%',
        'label': 'Issues',
        'icon': ''
      },
      {
        'style': 'status-bar-5',
        'progress': '80%',
        'label': 'Searches',
        'icon': ''
      },
    ]
  }

  initGlobalSale() {
    this.globalSales = [
      {
        'img': 'assets/images/dashboard/flag-brazil.png',
        'label': 'BRAZIL',
        'figure': '4234',
        'percent': '35%',
        'change': 1
      },
      {
        'img': 'assets/images/dashboard/flag-china.png',
        'label': 'CHINA',
        'figure': '3214',
        'percent': '25%',
        'change': 1
      },
      {
        'img': 'assets/images/dashboard/flag-belgium.png',
        'label': 'BELGIUM',
        'figure': '2842',
        'percent': '28%',
        'change': 1
      },
      {
        'img': 'assets/images/dashboard/flag-france.png',
        'label': 'FRANCE',
        'figure': '1942',
        'percent': '15%',
        'change': -1
      },
      {
        'img': 'assets/images/dashboard/flag-uk.png',
        'label': 'UK',
        'figure': '1956',
        'percent': '25%',
        'change': -1
      },
    ]
  }

  initDataTable() {
    this.cars = [
      { vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black', price: 500 },
      { vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White', price: 1000 },
      { vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue', price: 400 },
      { vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White', price: 600 },
      { vin: 'gf45wg5', year: 2011, brand: 'VW', color: 'Red', price: 700 },
      { vin: 'bhv5y5w', year: 2015, brand: 'Jaguar', color: 'Blue', price: 650 },
      { vin: 'ybw5fsd', year: 2012, brand: 'Ford', color: 'Yellow', price: 750 },
      { vin: '45665e5', year: 2011, brand: 'Mercedes', color: 'Brown', price: 470 },
      { vin: 'he6sb5v', year: 2015, brand: 'Ford', color: 'Black', price: 610 },
    ];
  }

  initUserData() {
    this.userData = [
      {
        'icon': 'assignment',
        'label': 'Tasks',
        'text': '3 open',
        'progress': '50%'
      },
      {
        'icon': 'attach_money',
        'label': 'Revenue',
        'text': '+20%',
        'progress': '20%'
      },
      {
        'icon': 'payment',
        'label': 'Payments',
        'text': '24 new',
        'progress': '65%'
      },
      {
        'icon': 'business_center',
        'label': 'Clients',
        'text': '+80%',
        'progress': '80%'
      },
      {
        'icon': 'pie_chart',
        'label': 'Turnover',
        'text': '+40%',
        'progress': '40%'
      },
    ];
  }

  initSchedule() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#4bc0c0'
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#565656'
        }
      ]
    }
  }

  selectData(event) {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index]});
  }

  handleDayClick(event) {
      this.event = new MyEvent();
      this.event.start = event.date.format();
      this.dialogVisible = true;
  }

  handleEventClick(e) {
      this.event = new MyEvent();
      this.event.title = e.calEvent.title;

      let start = e.calEvent.start;
      let end = e.calEvent.end;
      if(e.view.name === 'month') {
          start.stripTime();
      }

      if(end) {
          end.stripTime();
          this.event.end = end.format();
      }

      this.event.id = e.calEvent.id;
      this.event.start = start.format();
      this.event.allDay = e.calEvent.allDay;
      this.dialogVisible = true;
  }

  saveEvent() {
      //update
      if(this.event.id) {
          let index: number = this.findEventIndexById(this.event.id);
          if(index >= 0) {
              this.events[index] = this.event;
          }
      }
      //new
      else {
          this.event.id = this.idGen++;
          this.events.push(this.event);
          this.event = null;
      }

      this.dialogVisible = false;
  }

  deleteEvent() {
      let index: number = this.findEventIndexById(this.event.id);
      if(index >= 0) {
          this.events.splice(index, 1);
      }
      this.dialogVisible = false;
  }

  findEventIndexById(id: number) {
      let index = -1;
      for(let i = 0; i < this.events.length; i++) {
          if(id == this.events[i].id) {
              index = i;
              break;
          }
      }

      return index;
  }

  ngOnDestroy() {
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }

    if (this.alertSubscription) {
      this.alertSubscription.unsubscribe();
    }

  }

}

//   title = 'gkcln00';
//   navItems: any[];
//   public systemImagePath: string = 'modules/settings/';
//
//   items: MenuItem[];
//
//   cities: SelectItem[];
//   selectedCity: any;
//
//   cars: any;
//   data: any;
//
//   msgs: Message[] = [];
//
//   alertType: string;
//   alertSubscription: Subscription;
//
//   events: any[];
//   header: any;
//   event: MyEvent;
//   dialogVisible: boolean = false;
//   idGen: number = 100;
//
//   langSubscription: Subscription;
//
//   constructor(
//     private translate: TranslateService,
//     private localStorageService: LocalStorageService,
//     private stateManagementService: StateManagementService,
//     private settingService: SettingService,
//     private eventService: EventService,
//     private languageService: LanguageService,
//   ) {
//     stateManagementService.initState();
//
//     // Initialize language
//     this.translate.use(localStorageService.getLang());
//
//     this.langSubscription = this.languageService.getLanguage()
//       .subscribe(lang => {
//         translate.use(lang);
//       });
//
//     this.alertSubscription = this.settingService.getAlertType()
//       .subscribe(alertType => {
//         this.alertType = alertType;
//       });
//
//     this.eventService.getEvents().then(events => {this.events = events;});
//     this.header = {
//       left: 'prev,next today',
//       center: 'title',
//       right: 'month,agendaWeek,agendaDay'
//     };
//   }
//
//   ngOnInit() {
//     const imgPath = this.systemImagePath + 'circle/';
//     const squareImgPath = this.systemImagePath + 'square/';
//
//     this.navItems = [
//       {
//         'url': '',
//         'img': imgPath + '1.jpg',
//         'squareImg': squareImgPath + '1.jpg',
//         'tcode': 'gkcln00',
//         'title': 'gkcln00' // 'GK Clients Management'
//       },
//       {
//         'url': '',
//         'img': imgPath + '2.jpg',
//         'squareImg': squareImgPath + '2.jpg',
//         'tcode': 'gksol00',
//         'title': 'gksol00' // 'GK Solutions Processing'
//       },
//       {
//         'url': '',
//         'img': imgPath + '3.jpg',
//         'squareImg': squareImgPath + '3.jpg',
//         'tcode': 'gktcd00',
//         'title': 'gktcd00' // 'GK Tcodes Management'
//       },
//       {
//         'url': '',
//         'img': imgPath + '4.jpg',
//         'squareImg': squareImgPath + '4.jpg',
//         'tcode': 'gkcln00',
//         'title': 'gkcln00' // 'GK Clients Management'
//       },
//       {
//         'url': '',
//         'img': imgPath + '5.jpg',
//         'squareImg': squareImgPath + '5.jpg',
//         'tcode': 'gksol00',
//         'title': 'gksol00' // 'GK Solutions Processing'
//       },
//       {
//         'url': '',
//         'img': imgPath + '6.jpg',
//         'squareImg': squareImgPath + '6.jpg',
//         'tcode': 'gktcd00',
//         'title': 'gktcd00' // 'GK Tcodes Management'
//       },
//       {
//         'url': '',
//         'img': imgPath + '7.jpg',
//         'squareImg': squareImgPath + '7.jpg',
//         'tcode': 'gkcln00',
//         'title': 'gkcln00' // 'GK Clients Management'
//       },
//       {
//         'url': '',
//         'img': imgPath + '8.jpg',
//         'squareImg': squareImgPath + '8.jpg',
//         'tcode': 'gksol00',
//         'title': 'gksol00' // 'GK Solutions Processing'
//       }
//     ];
//
//
//     this.items = [{
//         label: 'File',
//         items: [
//             {label: 'New', icon: 'ui-icon-add'},
//             {label: 'Open', icon: 'ui-icon-search'}
//         ]
//     },
//     {
//         label: 'Edit',
//         items: [
//             {label: 'Undo', icon: 'ui-icon-undo'},
//             {label: 'Redo', icon: 'ui-icon-redo'}
//         ]
//     }];
//
//     this.cities = [];
//     this.cities.push({label:'New York', value:{id:1, name: 'New York', code: 'NY'}});
//     this.cities.push({label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}});
//     this.cities.push({label:'London', value:{id:3, name: 'London', code: 'LDN'}});
//     this.cities.push({label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}});
//     this.cities.push({label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}});
//
//     this.cars = [
//       { vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black', price: 500 },
//       { vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White', price: 1000 },
//       { vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue', price: 400 },
//       { vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White', price: 600 },
//       { vin: 'gf45wg5', year: 2011, brand: 'VW', color: 'Red', price: 700 },
//       { vin: 'bhv5y5w', year: 2015, brand: 'Jaguar', color: 'Blue', price: 650 },
//       { vin: 'ybw5fsd', year: 2012, brand: 'Ford', color: 'Yellow', price: 750 },
//       { vin: '45665e5', year: 2011, brand: 'Mercedes', color: 'Brown', price: 470 },
//       { vin: 'he6sb5v', year: 2015, brand: 'Ford', color: 'Black', price: 610 },
//     ];
//
//     this.data = {
//       labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//       datasets: [
//         {
//           label: 'First Dataset',
//           data: [65, 59, 80, 81, 56, 55, 40],
//           fill: false,
//           borderColor: '#4bc0c0'
//         },
//         {
//           label: 'Second Dataset',
//           data: [28, 48, 40, 19, 86, 27, 90],
//           fill: false,
//           borderColor: '#565656'
//         }
//       ]
//     }
//
//   }
//
//   selectData(event) {
//     this.msgs = [];
//     this.msgs.push({severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index]});
//   }
//
//   handleDayClick(event) {
//       this.event = new MyEvent();
//       this.event.start = event.date.format();
//       this.dialogVisible = true;
//   }
//
//   handleEventClick(e) {
//       this.event = new MyEvent();
//       this.event.title = e.calEvent.title;
//
//       let start = e.calEvent.start;
//       let end = e.calEvent.end;
//       if(e.view.name === 'month') {
//           start.stripTime();
//       }
//
//       if(end) {
//           end.stripTime();
//           this.event.end = end.format();
//       }
//
//       this.event.id = e.calEvent.id;
//       this.event.start = start.format();
//       this.event.allDay = e.calEvent.allDay;
//       this.dialogVisible = true;
//   }
//
//   saveEvent() {
//       //update
//       if(this.event.id) {
//           let index: number = this.findEventIndexById(this.event.id);
//           if(index >= 0) {
//               this.events[index] = this.event;
//           }
//       }
//       //new
//       else {
//           this.event.id = this.idGen++;
//           this.events.push(this.event);
//           this.event = null;
//       }
//
//       this.dialogVisible = false;
//   }
//
//   deleteEvent() {
//       let index: number = this.findEventIndexById(this.event.id);
//       if(index >= 0) {
//           this.events.splice(index, 1);
//       }
//       this.dialogVisible = false;
//   }
//
//   findEventIndexById(id: number) {
//       let index = -1;
//       for(let i = 0; i < this.events.length; i++) {
//           if(id == this.events[i].id) {
//               index = i;
//               break;
//           }
//       }
//
//       return index;
//   }
//
//   ngOnDestroy() {
//     if (this.langSubscription) {
//       this.langSubscription.unsubscribe();
//     }
//
//     if (this.alertSubscription) {
//       this.alertSubscription.unsubscribe();
//     }
//
//   }
//
// }
