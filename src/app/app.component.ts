import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from './nga/services';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnDestroy {

  constructor(
    private router: Router,
    private translate: TranslateService,
    private localStorage: LocalStorageService,
  ) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        // console.log(val);
        // translate.use(localStorage.getLang());
      }
    });
  }

  ngOnDestroy() {
  }

}
