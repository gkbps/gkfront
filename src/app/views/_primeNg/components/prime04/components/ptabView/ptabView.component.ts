// External
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Message } from 'primeng/primeng';

@Component({
  selector: 'ptabView',
  templateUrl: './ptabView.html',
  styleUrls: ['./ptabView.scss'],
})

export class PTabView implements OnInit {

  msgs: Message[];
    
  onTabChange(event) {
      this.msgs = [];
      this.msgs.push({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});
  }

  constructor(
  ) { }

  ngOnInit() {
  }

}
