import { Component, OnInit } from '@angular/core';

import { NavigationService } from '../../../../../../nga/services';

@Component({
  templateUrl: 'gkcln22.component.html'
})
export class GkCln22Component implements OnInit {

  tcode = 'gkcln22';
  module = 'gkClients';

  constructor (
    private navigationService: NavigationService,
  ) { }

  ngOnInit() {
    this.navigationService.trackHistory();
  }

}
