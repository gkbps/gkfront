// External
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'ptieredMenu',
  templateUrl: './ptieredMenu.html',
  styleUrls: ['./ptieredMenu.scss'],
})

export class PTieredMenu implements OnInit {

  items: MenuItem[];

  ngOnInit() {
      this.items = [
          {
              label: 'File',
              items: [{
                      label: 'New',
                      icon: 'fa-plus',
                      items: [
                          {label: 'Project'},
                          {label: 'Other'},
                      ]
                  },
                  {label: 'Open'},
                  {label: 'Quit'}
              ]
          },
          {
              label: 'Edit',
              icon: 'fa-edit',
              items: [
                  {label: 'Undo', icon: 'fa-mail-forward'},
                  {label: 'Redo', icon: 'fa-mail-reply'}
              ]
          }
      ];
  }

  constructor(
  ) { }

}
