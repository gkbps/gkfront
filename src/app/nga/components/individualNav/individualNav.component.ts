import { TcodeService } from '../../services';

import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MenuItem, SelectItem } from 'primeng/primeng';

@Component({
  selector: 'individual-nav',
  templateUrl: './individualNav.html',
  styleUrls: ['./individualNav.scss'],
})
export class IndividualNav implements OnInit {

  @Input() prefix: string;

  items: MenuItem[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,

    private tcodeService: TcodeService,
  ) { }

  ngOnInit () {
    this.items = [
      {
        label: 'Create', icon: 'fa-plus',
        command: (event) => this.executeTCode('11')
      },
      {
        label: 'View', icon: 'fa-search',
        command: (event) => this.executeTCode('12')
      },
      {
        label: 'Edit', icon: 'fa-pencil',
        command: (event) => this.executeTCode('13')
      },
      {separator:true},
      {
        label: 'Disable', icon: 'fa-bookmark',
        command: (event) => this.executeTCode('14')
      },
      {
        label: 'Enable', icon: 'fa-bookmark-o',
        command: (event) => this.executeTCode('15')
      },
      {separator:true},
      {
        label: 'Mark', icon: 'fa-flag',
        command: (event) => this.executeTCode('16')
      },
      {
        label: 'Unmark', icon: 'fa-flag-o',
        command: (event) => this.executeTCode('17')
      },
      {separator:true},
      {
        label: 'Delete', icon: 'fa-trash',
        command: (event) => this.executeTCode('18')
      },
      {separator:true},
      {
        label: 'History', icon: 'fa-files-o',
        command: (event) => this.executeTCode('19')
      },

    ];

  }

  executeTCode(action: string): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const tcode: string = this.prefix + action;
      let id: string ='';

      // Action 11 does not have accompanied id
      if ((action!='11') && (params['id'])) {
        id = params['id'];
      }

      this.tcodeService.executeTCode(tcode, id);
    });


  }

}
