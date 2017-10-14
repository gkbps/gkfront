import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';

import { LocalStorageService, TcodeService } from '../../../nga/services';

@Component({
  templateUrl: '404.component.html'
})
export class P404Component {
  public tcodeExecution: string = '';

  constructor(
    private translate: TranslateService,
    private localStorage: LocalStorageService,
    private tcodeService: TcodeService,
    private router: Router,
  ) {
    // Initialize language
    translate.use(localStorage.getLang());
  }

  public keyDownFunction(event) {
    if (event.keyCode == 13) {
      this.executeTcode()
    }
  }

  public executeTcode() {
    const url: string = this.tcodeService.urlLead(this.tcodeExecution);
    console.log(url);
    this.tcodeExecution = '';
    this.router.navigate([url]);
  }

}
