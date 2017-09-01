// External
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Message } from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'ppanel',
  templateUrl: './ppanel.html',
  styleUrls: ['./ppanel.scss'],
})

export class PPanel implements OnInit {

  msgs: Message[] = [];

  items: MenuItem[];

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

  constructor(
  ) { }


}
