import { Component, OnInit } from '@angular/core';

import { NavigationService } from '../../../../../../nga/services';

@Component({
  templateUrl: 'gkcln24.component.html'
})
export class GkCln24Component implements OnInit {

  tcode = 'gkcln24';
  module = 'gkClients';

  constructor (
    private navigationService: NavigationService,
  ) { }

  ngOnInit() {
    this.navigationService.trackHistory();
  }

}
