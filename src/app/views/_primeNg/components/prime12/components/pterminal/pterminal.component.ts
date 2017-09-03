// External
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TerminalService } from './terminal.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'pterminal',
  templateUrl: './pterminal.html',
  styleUrls: ['./pterminal.scss'],
})

export class PTerminal implements OnInit {

  /*
  response: string;

  onCommand(event) {
      //event.command = entered command
      //in a real application connect to remote service to process the command and update the response field in return
      switch (event.command) {
        case 'date':
          this.response = 'Today is: ' + new Date().toDateString();
          break;
        case 'hello':
          this.response = 'Hi there';
          break;
        default:
            this.response = 'Unknown command: ' +event.command;
      }

  }
  */

  subscription: Subscription;

  constructor(private terminalService: TerminalService) {
      this.terminalService.commandHandler.subscribe(command => {
          let response = (command === 'date') ? new Date().toDateString() : 'Unknown command: ' + command;
          this.terminalService.sendResponse(response);
      });
  }

  ngOnDestroy() {
      if(this.subscription) {
          this.subscription.unsubscribe();
      }
  }

  ngOnInit() {
  }

}
