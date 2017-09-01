// External
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'prating',
  templateUrl: './prating.html',
  styleUrls: ['./prating.scss'],
})

export class PRating implements OnInit {
  val1: number;

  val2: number = 5;

  val3: number;

  val4: number = 5;

  msg: string;

  handleRate(event) {
      this.msg = "You have rated " + event.value;
  }

  handleCancel(event) {
      this.msg = "Rating Cancelled";
  }

  constructor(
  ) { }

  ngOnInit() {
  }

}
