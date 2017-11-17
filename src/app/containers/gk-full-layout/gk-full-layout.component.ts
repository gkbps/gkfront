import { Component, Input, OnInit } from '@angular/core';

import {
  StateManagementService,
  BodyBackgroundService,
} from '../../nga/services';

@Component({
  selector: 'gk-full-layout',
  templateUrl: './gk-full-layout.component.html',
})
export class GkFullLayoutComponent implements OnInit {
  @Input() menu: any;

  constructor(
    private stateManagementService: StateManagementService,
    private bodyBackgroundService : BodyBackgroundService,
  ) { }

  ngOnInit(): void {
    this.stateManagementService.initState();
    this.bodyBackgroundService.clearBodyBackground();

    console.log(this.menu);
  }

}
