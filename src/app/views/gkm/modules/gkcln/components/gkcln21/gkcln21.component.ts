import { Component, OnInit } from '@angular/core';

import { NavigationService } from '../../../../../../nga/services';

@Component({
  templateUrl: 'gkcln21.component.html'
})
export class GkCln21Component implements OnInit {

  tcode = 'gkcln21';
  module = 'gkClients';

  constructor (
    private navigationService: NavigationService,
  ) { }

  ngOnInit() {
    this.navigationService.trackHistory();
  }

}
