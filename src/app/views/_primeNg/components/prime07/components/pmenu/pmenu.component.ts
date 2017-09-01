// External
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'pmenu',
  templateUrl: './pmenu.html',
  styleUrls: ['./pmenu.scss'],
})

export class PMenu implements OnInit {

  items: MenuItem[];

  ngOnInit() {
      this.items = [{
          label: 'File',
          items: [
              {label: 'New', icon: 'fa-plus'},
              {label: 'Open', icon: 'fa-download'}
          ]
      },
      {
          label: 'Edit',
          items: [
              {label: 'Undo', icon: 'fa-refresh'},
              {label: 'Redo', icon: 'fa-repeat'}
          ]
      }];
  }

  constructor(
  ) { }

}
