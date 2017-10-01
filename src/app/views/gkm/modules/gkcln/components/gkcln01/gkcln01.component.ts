// External
import { Component } from '@angular/core';

import { Header } from 'primeng/primeng';
import { Footer } from 'primeng/primeng';
import { Message } from 'primeng/primeng';
import { MenuItem, SelectItem } from 'primeng/primeng';
import { LazyLoadEvent } from 'primeng/primeng';

// Internal
import {
  SecurityService,
  TcodeService,
  NavigationService,
  APIResultHandlingService
} from '../../../../../../nga/services';
import { GkClientService } from '../../../../../../services/gkClient.service';

@Component({
  templateUrl: 'gkcln01.component.html'
})
export class GkCln01Component {

  userRights: string[];

  msgs: Message[] = [];

  clients: any[];               // List of clients for Datatable, type: GkClient[];
  selectedClient: any;          // Type: GkClient;

  loading: boolean;
  cols: any[];                  // Header columns on the fly
  columnOptions: SelectItem[];

  first: number = 0;

  items: MenuItem[];            // Items of menubar and context menu

  constructor (
    private securityService: SecurityService,
    private tcodeService: TcodeService,
    private navigationService: NavigationService,
    private gkClientService: GkClientService,
    private apiResultHandlingService: APIResultHandlingService,
  ) {
  }

  ngOnInit() {
    this.getData();

    this.navigationService.trackHistory();

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
    this.cols = [
      { field: '_id', header: 'ID', width: '20%' },
      { field: 'name', header: 'Name', width: '45%'  },
      { field: 'clientDb', header: 'DB', width: '15%'  },
      { field: 'status1', header: 'Status', width: '10%'},
      { field: 'status2', header: 'Marked', width: '10%' },
    ];

    this.columnOptions = [];
    for (let i = 0; i < this.cols.length; i++) {
        this.columnOptions.push({  label: this.cols[i].header, value: this.cols[i] });
    }
  }

  initMenuItems() {
    this.items = [
      {
        label: 'Create', icon: 'fa-plus',
        command: (event) => this.tcodeService.executeTCode('gkcln11'),
        disabled: !this.tcodeService.checkTcodeInEncodeArray('gkcln11', this.userRights),
      },
      {
        label: 'View', icon: 'fa-search',
        command: (event) => this.tcodeService.executeTCode('gkcln12', this.selectedClient? this.selectedClient._id : null),
        disabled: !this.tcodeService.checkTcodeInEncodeArray('gkcln12', this.userRights),
      },
      {
        label: 'Edit', icon: 'fa-pencil',
        command: (event) => this.tcodeService.executeTCode('gkcln13', this.selectedClient? this.selectedClient._id : null),
        disabled: !this.tcodeService.checkTcodeInEncodeArray('gkcln13', this.userRights),
      },
      {separator:true},
      {
        label: 'Disable', icon: 'fa-bookmark',
        command: (event) => this.tcodeService.executeTCode('gkcln14', this.selectedClient? this.selectedClient._id : null),
        disabled: !this.tcodeService.checkTcodeInEncodeArray('gkcln14', this.userRights),
      },
      {
        label: 'Enable', icon: 'fa-bookmark-o',
        command: (event) => this.tcodeService.executeTCode('gkcln15', this.selectedClient? this.selectedClient._id : null),
        disabled: !this.tcodeService.checkTcodeInEncodeArray('gkcln15', this.userRights),
      },
      {separator:true},
      {
        label: 'Mark', icon: 'fa-flag',
        command: (event) => this.tcodeService.executeTCode('gkcln16', this.selectedClient? this.selectedClient._id : null),
        disabled: !this.tcodeService.checkTcodeInEncodeArray('gkcln16', this.userRights),
      },
      {
        label: 'Unmark', icon: 'fa-flag-o',
        command: (event) => this.tcodeService.executeTCode('gkcln17', this.selectedClient? this.selectedClient._id : null),
        disabled: !this.tcodeService.checkTcodeInEncodeArray('gkcln17', this.userRights),
      },
      {separator:true},
      {
        label: 'Delete', icon: 'fa-trash',
        command: (event) => this.tcodeService.executeTCode('gkcln18', this.selectedClient? this.selectedClient._id : null),
        disabled: !this.tcodeService.checkTcodeInEncodeArray('gkcln18', this.userRights),
      },
      {separator:true},
      {
        label: 'History', icon: 'fa-files-o',
        command: (event) => this.tcodeService.executeTCode('gkcln19', this.selectedClient? this.selectedClient._id : null),
        disabled: !this.tcodeService.checkTcodeInEncodeArray('gkcln19', this.userRights),
      },
    ];
  }

  handleAPIReturn(result) {
    let processedResult = this.apiResultHandlingService.processAPIResult(result);

    if (result.status==201) {
    }

    this.msgs = [];
    this.msgs.push({
      severity: processedResult.severity,
      summary: processedResult.summary,
      detail: processedResult.detail
    });

    setTimeout(()=> {
      this.msgs =[];
    }, 5000);
  }

}
