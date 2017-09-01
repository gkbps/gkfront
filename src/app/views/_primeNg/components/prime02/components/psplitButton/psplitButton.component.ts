// External
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Message, MenuItem } from 'primeng/primeng';

@Component({
  selector: 'psplitButton',
  templateUrl: './psplitButton.html',
  styleUrls: ['./psplitButton.scss'],
})

export class PSplitButton implements OnInit {

  msgs: Message[] = [];

  items: MenuItem[];

  constructor(
  ) { }

  ngOnInit() {
      this.items = [
          {label: 'Update', icon: 'fa-refresh', command: () => {
              this.update();
          }},
          {label: 'Delete', icon: 'fa-close', command: () => {
              this.delete();
          }},
          {label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io'},
          {label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/theming']}
      ];
  }

  save() {
      this.msgs = [];
      this.msgs.push({severity:'info', summary:'Success', detail:'Data Saved'});
  }

  update() {
      this.msgs = [];
      this.msgs.push({severity:'info', summary:'Success', detail:'Data Updated'});
  }

  delete() {
      this.msgs = [];
      this.msgs.push({severity:'info', summary:'Success', detail:'Data Deleted'});
  }

}
