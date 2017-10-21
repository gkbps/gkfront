import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { NavigationService } from '../../../../../../nga/services';

@Component({
  templateUrl: 'gkcln15.component.html'
})
export class GkCln15Component implements OnInit {

  tcode = 'gkcln15';
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
