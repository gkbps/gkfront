// External
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'ptoolbar',
  templateUrl: './ptoolbar.html',
  styleUrls: ['./ptoolbar.scss'],
})

export class PToolbar implements OnInit {

  items: MenuItem[];

  constructor(
  ) { }

  ngOnInit() {
    this.items = [
        {label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io'},
        {label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/theming']}
    ];
  }

}
