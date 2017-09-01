// External
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pradioButton',
  templateUrl: './pradioButton.html',
  styleUrls: ['./pradioButton.scss'],
})

export class PRadioButton implements OnInit {

  val1: string;

  val2: string = 'Option 2';

  constructor(
  ) { }

  ngOnInit() {
  }

}
