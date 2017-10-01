import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { NavigationService } from '../../../../../../nga/services';

@Component({
  templateUrl: 'gkcln13.component.html'
})
export class GkCln13Component implements OnInit {

  tcode = 'gkcln13';
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
