import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { NavigationService } from '../../../../../../nga/services';

@Component({
  templateUrl: 'gkcln16.component.html'
})
export class GkCln16Component implements OnInit {

  tcode = 'gkcln16';
  id: string;

  constructor (
    private activatedRoute: ActivatedRoute,
    private navigationService: NavigationService,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
        this.id = params['id'];
      });

    this.navigationService.trackHistory();
  }

}
