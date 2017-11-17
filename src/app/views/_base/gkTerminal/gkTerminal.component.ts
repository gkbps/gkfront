import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { TerminalService } from 'primeng/components/terminal/terminalservice';
import { Subscription } from 'rxjs/Subscription';
import { SecurityService, LocalStorageService, LanguageService } from '../../../nga/services'

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'gk-terminal',
  templateUrl: 'gkTerminal.component.html'
})
export class GkTerminalComponent implements OnDestroy {

  user: any;
  response: string ='';
  subscription: Subscription;
  langSubscription: Subscription;

  constructor(
    private router: Router,
    private terminalService: TerminalService,
    private security: SecurityService,
    private localStorage: LocalStorageService,
    private translate: TranslateService,
    private languageService: LanguageService,
  ) {
    // Initialize language
    translate.use(localStorage.getLang());

    this.langSubscription = this.languageService.getLanguage()
      .subscribe(lang => { translate.use(lang); });

    this.user = security.getCurrentUser();

    this.terminalService.commandHandler.subscribe(command => {

      const parts = command.toLowerCase().trim().split(" ");
      console.log(parts);
      switch (parts[0]) {
        case 'date':
          this.response = 'Today is: ' + new Date().toDateString();
          break;

        case 'clear':
          switch (parts[1]) {
            case 'error':
              this.localStorage.clearError();
              break;
            default:
              break;
            }
          break;

        case 'show':
          let data;

          switch (parts[1]) {
            case 'error':
              if (parts[2] == 'last') {
                data = localStorage.getErrors(true);
              } else {
                data = localStorage.getErrors(false);
              }
              this.response = data;
              break;

            case 'lang':
              data = localStorage.getLang();
              this.response = `Current language is "${localStorage.getLang()}"`;
              break;

            case 'wklge':
              data = localStorage.getWkLge();
              this.response = `Working Legal Entity is "${data}"`;
              break;

            case 'wkyear':
              data = localStorage.getWkYear();
              this.response = `Working Year is "${data}"`;
              break;

            default:
              this.response = `show
              [error]         To show list of error(s) during system operation
                  []              To show list of all errors
                  [last]          To show the last error
              [lang]          To show the current language
              [wklge]         To show working legal entity
              [wkyear]        To show working year
              `;
              break;
          }
          break;

        case 'login':
        case 'logout':
          this.response = 'Goodbye!...';
          setTimeout(()=>{
            this.router.navigate(['/login']);
          }, 3000);
          break;

        case 'hello':
          this.response = 'Hi there';
          if (parts[1]) this.response += ' ' + parts[1];
          break;

        default:
          this.response = 'Unknown command: ' + command;
      }

      //this.terminalService.sendResponse(this.response);
      //this.terminalService.sendResponse('Completed');
    });
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }

    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }

  }

}
