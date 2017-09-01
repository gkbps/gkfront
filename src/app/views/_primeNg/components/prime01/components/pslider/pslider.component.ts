// External
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pslider',
  templateUrl: './pslider.html',
  styleUrls: ['./pslider.scss'],
})

export class PSlider implements OnInit {

  val1: number;

  val2: number = 50;

  val3: number;

  val4: number;

  val5: number;

  rangeValues: number[] = [20,80];

  constructor(
  ) { }

  ngOnInit() {
  }

}
