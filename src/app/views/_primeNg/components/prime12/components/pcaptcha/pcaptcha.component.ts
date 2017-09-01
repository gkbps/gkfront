// External
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Message } from 'primeng/primeng';

@Component({
  selector: 'pcaptcha',
  templateUrl: './pcaptcha.html',
  styleUrls: ['./pcaptcha.scss'],
})

export class PCaptcha implements OnInit {

  msgs: Message[] = [];

  showResponse(event) {
      this.msgs = [];
      this.msgs.push({ severity: 'info', summary: 'Succees', detail: 'User Responded' });
  }

  constructor(
  ) { }

  ngOnInit() {
  }

}
