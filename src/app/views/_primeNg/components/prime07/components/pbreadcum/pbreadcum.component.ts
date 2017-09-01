// External
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'pbreadcum',
  templateUrl: './pbreadcum.html',
  styleUrls: ['./pbreadcum.scss'],
})

export class PBreadcum implements OnInit {

  items: MenuItem[];

  ngOnInit() {
      this.items = [];
      this.items.push({label:'Categories'});
      this.items.push({label:'Sports'});
      this.items.push({label:'Football'});
      this.items.push({label:'Countries'});
      this.items.push({label:'Spain'});
      this.items.push({label:'F.C. Barcelona'});
      this.items.push({label:'Squad'});
      this.items.push({label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'});
  }

  constructor(
  ) { }

}
