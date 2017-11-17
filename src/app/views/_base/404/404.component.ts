import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';

import {
  BodyBackgroundService,
  LocalStorageService,
  TcodeService,
  StateManagementService,
} from '../../../nga/services';

@Component({
  templateUrl: '404.component.html',
  styleUrls: ['../401/fixed.scss']
})
export class P404Component {
  public tcodeExecution: string = '';

  constructor(
    private bodyBackgroundService: BodyBackgroundService,
    private translate: TranslateService,
    private localStorage: LocalStorageService,
    private tcodeService: TcodeService,
    private router: Router,
    private stateManagementService:StateManagementService,
  ) {
    // Initialize state
    this.stateManagementService.initState('exception-body notfound');
    
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
