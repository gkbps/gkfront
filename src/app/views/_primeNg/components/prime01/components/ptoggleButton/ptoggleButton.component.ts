// External
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ptoggleButton',
  templateUrl: './ptoggleButton.html',
  styleUrls: ['./ptoggleButton.scss'],
})

export class PToggleButton implements OnInit {

  checked1: boolean = false;

  checked2: boolean = true;

  constructor(
  ) { }

  ngOnInit() {
  }

}
