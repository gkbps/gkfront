import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';

import {
  BodyBackgroundService,
  LocalStorageService,
  TcodeService,
  StateManagementService,
  ThemeService,
} from '../../../nga/services';

@Component({
  templateUrl: '401.component.html',
  styleUrls: ['./fixed.scss']
})
export class P401Component {
  public tcodeExecution: string = '';

  constructor(
    private bodyBackgroundService: BodyBackgroundService,
    private translate: TranslateService,
    private localStorage: LocalStorageService,
    private tcodeService: TcodeService,
    private router: Router,
    private stateManagementService:StateManagementService,
    private themeService: ThemeService,
  ) {
    // Initialize state
    this.stateManagementService.initState('exception-body accessdenied');
    const env = localStorage.getEnv();

    this.themeService.changeLayout(env.pref.layout) ;
    this.themeService.changeTheme(env.pref.theme) ; 

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
