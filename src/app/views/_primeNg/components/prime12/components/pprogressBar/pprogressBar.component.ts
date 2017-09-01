// External
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Message } from 'primeng/primeng';

@Component({
  selector: 'pprogressBar',
  templateUrl: './pprogressBar.html',
  styleUrls: ['./pprogressBar.scss'],
})

export class PProgressBar implements OnInit {

  value: number = 0;

  msgs: Message[];

  ngOnInit() {
      let interval = setInterval(() => {
          this.value = this.value + Math.floor(Math.random() * 10) + 1;
          if(this.value >= 100) {
              this.value = 100;
              this.msgs = [{severity: 'info', summary: 'Success', detail: 'Process Completed'}];
              clearInterval(interval);
          }
      }, 2000);
  }

  constructor(
  ) { }

}
