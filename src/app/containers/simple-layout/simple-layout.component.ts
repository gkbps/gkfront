import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { LocalStorageService } from '../../nga/services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './simple-layout.component.html',
})
export class SimpleLayout implements OnInit {

  constructor (
    private translate: TranslateService,
    private localStorage: LocalStorageService,
  ) {
    // Initialize language
    translate.use(localStorage.getLang());
  }

  ngOnInit(): void { }
}
