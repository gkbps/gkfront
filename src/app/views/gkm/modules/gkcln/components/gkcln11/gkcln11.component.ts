import { Component, OnInit } from '@angular/core';

import { NavigationService } from '../../../../../../nga/services';

@Component({
  templateUrl: 'gkcln11.component.html'
})
export class GkCln11Component implements OnInit {

  tcode = 'gkcln11';

  constructor (
    private navigationService: NavigationService,
  ) { }

  ngOnInit() {
    this.navigationService.trackHistory();
  }

}
