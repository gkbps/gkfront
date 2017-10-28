import { Component, OnInit } from '@angular/core';

import { NavigationService } from '../../../../../../nga/services';

@Component({
  templateUrl: 'gkcln23.component.html'
})
export class GkCln23Component implements OnInit {

  tcode = 'gkcln23';
  module = 'gkClients';

  constructor (
    private navigationService: NavigationService,
  ) { }

  ngOnInit() {
    this.navigationService.trackHistory();
  }

}
