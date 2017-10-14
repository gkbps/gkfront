// External
import { Component, OnDestroy } from '@angular/core';

import { Header } from 'primeng/primeng';
import { Footer } from 'primeng/primeng';
import { Message } from 'primeng/primeng';
import { MenuItem, SelectItem } from 'primeng/primeng';
import { LazyLoadEvent } from 'primeng/primeng';

import { Subscription } from 'rxjs/Subscription';
import { TranslateService } from '@ngx-translate/core';

// Internal
import {
  SecurityService,
  TcodeService,
  NavigationService,
  APIResultHandlingService,
  LocalStorageService,
  LanguageService,
  SettingService,
} from '../../../../../../nga/services';

import { GkClientService } from '../../../../../../services/gkClient.service';

@Component({
  templateUrl: 'gkcln01.component.html'
})
export class GkCln01Component implements OnDestroy {

  userRights: string[];

  msgs: Message[] = [];

  clients: any[];               // List of clients for Datatable, type: GkClient[];
  selectedClient: any;          // Type: GkClient;

  loading: boolean;
  cols: any[];                  // Header columns on the fly
  columnOptions: SelectItem[];

  first: number = 0;
  totalRecords: number;
  multiSortMeta: any;

  items: MenuItem[];            // Items of menubar and context menu

  alertType: string;

  langSubscription: Subscription;
  alertSubscription: Subscription;

  constructor (
    private securityService: SecurityService,
    private tcodeService: TcodeService,
    private navigationService: NavigationService,
    private gkClientService: GkClientService,
    private apiResultHandlingService: APIResultHandlingService,
    private localStorage: LocalStorageService,
    private translate: TranslateService,
    private languageService: LanguageService,
    private settingService: SettingService,
  ) {
    // Initialize language
    this.translate.use(localStorage.getLang());

    this.langSubscription = this.languageService.getLanguage()
      .subscribe(lang => {
        translate.use(lang);
        this.initDataTableColumn();
        this.initMenuItems();
      });

    this.alertSubscription = this.settingService.getAlertType()
      .subscribe(alertType => {
        this.alertType = alertType;
      });
  }

  ngOnInit() {
    //this.getData();

    this.navigationService.trackHistory();

    this.alertType = this.localStorage.getAlertType();

    // Performance: To avoid multiple read of Mana for menu item disable setting
    this.userRights = this.securityService.getMana();

    this.loading = true;

    this.initDataTableColumn();

    this.initMenuItems();
  }

  getData() {
    this.gkClientService.findMasterList()
      .subscribe(
        result => {
          this.clients = result.data;
          this.loading = false;
        },
        error => {
          this.handleAPIReturn(error);
        }
      );
  }

  initDataTableColumn() {
    this.translate.get(['id', 'description', 'db', 'status', 'marked'])
      .subscribe((res)=>{

        this.cols = [
          { field: '_id', header: res.id, width: '20%' },
          { field: 'name', header: res.description, width: '45%'  },
          { field: 'clientDb', header: res.db, width: '15%'  },
          { field: 'status1', header: res.status, width: '10%'},
          { field: 'status2', header: res.marked, width: '10%' },
        ];

        this.columnOptions = [];
        for (let i = 0; i < this.cols.length; i++) {
            this.columnOptions.push({  label: this.cols[i].header, value: this.cols[i] });
        }

      });
  }

  initMenuItems() {
    this.translate.get(['create', 'view', 'edit', 'disable', 'enable', 'mark', 'unmark', 'delete', 'viewChange'])
      .subscribe((res)=>{

        this.items = [
          {
            label: res.create, icon: 'fa-plus',
            command: (event) => this.tcodeService.executeTCode('gkcln11'),
            disabled: !this.tcodeService.checkTcodeInEncodeArray('gkcln11', this.userRights),
          },
          {
            label: res.view, icon: 'fa-search',
            command: (event) => this.tcodeService.executeTCode('gkcln12', this.selectedClient? this.selectedClient._id : null),
            disabled: !this.tcodeService.checkTcodeInEncodeArray('gkcln12', this.userRights),
          },
          {
            label: res.edit, icon: 'fa-pencil',
            command: (event) => this.tcodeService.executeTCode('gkcln13', this.selectedClient? this.selectedClient._id : null),
            disabled: !this.tcodeService.checkTcodeInEncodeArray('gkcln13', this.userRights),
          },
          {separator:true},
          {
            label: res.disable, icon: 'fa-bookmark',
            command: (event) => this.tcodeService.executeTCode('gkcln14', this.selectedClient? this.selectedClient._id : null),
            disabled: !this.tcodeService.checkTcodeInEncodeArray('gkcln14', this.userRights),
          },
          {
            label: res.enable, icon: 'fa-bookmark-o',
            command: (event) => this.tcodeService.executeTCode('gkcln15', this.selectedClient? this.selectedClient._id : null),
            disabled: !this.tcodeService.checkTcodeInEncodeArray('gkcln15', this.userRights),
          },
          {separator:true},
          {
            label: res.mark, icon: 'fa-flag',
            command: (event) => this.tcodeService.executeTCode('gkcln16', this.selectedClient? this.selectedClient._id : null),
            disabled: !this.tcodeService.checkTcodeInEncodeArray('gkcln16', this.userRights),
          },
          {
            label: res.unmark, icon: 'fa-flag-o',
            command: (event) => this.tcodeService.executeTCode('gkcln17', this.selectedClient? this.selectedClient._id : null),
            disabled: !this.tcodeService.checkTcodeInEncodeArray('gkcln17', this.userRights),
          },
          {separator:true},
          {
            label: res.delete, icon: 'fa-trash',
            command: (event) => this.tcodeService.executeTCode('gkcln18', this.selectedClient? this.selectedClient._id : null),
            disabled: !this.tcodeService.checkTcodeInEncodeArray('gkcln18', this.userRights),
          },
          {separator:true},
          {
            label: res.viewChange, icon: 'fa-files-o',
            command: (event) => this.tcodeService.executeTCode('gkcln19', this.selectedClient? this.selectedClient._id : null),
            disabled: !this.tcodeService.checkTcodeInEncodeArray('gkcln19', this.userRights),
          },
        ];

      });
  }

  loadData(event: LazyLoadEvent) {

    let sort ={};
    if (event.sortField) {
      sort[event.sortField] = event.sortOrder;
    }
    // console.log(sort);
    this.gkClientService.findMasterListPagination(event.globalFilter, sort, event.first, event.rows)
      .subscribe(
        result => {
          // console.log(result);
          this.clients = result.data;
          this.totalRecords = result.total;
          this.loading = false;
        },
        error => {
          this.handleAPIReturn(error);
        }
      );
  }

  handleAPIReturn(result) {
    this.apiResultHandlingService.processAPIResult(result)
      .then((msg)=>{
        this.msgs = [];
        this.msgs.push(msg);
        setTimeout(()=> { this.msgs =[]; }, 10000);
      });
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
