// External
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pbutton',
  templateUrl: './pbutton.html',
  styleUrls: ['./pbutton.scss'],
})

export class PButton implements OnInit {
  clicks: number = 0;

  count() {
      this.clicks++;
  }
  
  constructor(
  ) { }

  ngOnInit() {
  }

}
