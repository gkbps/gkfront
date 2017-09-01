// External
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'ptabMenu',
  templateUrl: './ptabMenu.html',
  styleUrls: ['./ptabMenu.scss'],
})

export class PTabMenu implements OnInit {

  items: MenuItem[];

  ngOnInit() {
      this.items = [
          {label: 'Stats', icon: 'fa-bar-chart'},
          {label: 'Calendar', icon: 'fa-calendar'},
          {label: 'Documentation', icon: 'fa-book'},
          {label: 'Support', icon: 'fa-support'},
          {label: 'Social', icon: 'fa-twitter'}
      ];
  }

  constructor(
  ) { }

}
