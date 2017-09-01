// External
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pblockUI',
  templateUrl: './pblockUI.html',
  styleUrls: ['./pblockUI.scss'],
})

export class PBlockUI implements OnInit {

  blockedPanel: boolean = false;

  blockedDocument: boolean = false;

  blockDocument() {
      this.blockedDocument = true;
      setTimeout(() => {
          this.blockedDocument = false;
      }, 3000);
  }

  constructor(
  ) { }

  ngOnInit() {
  }

}
