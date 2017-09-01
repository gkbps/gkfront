// External
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pinputText',
  templateUrl: './pinputText.html',
  styleUrls: ['./pinputText.scss'],
})

export class PInputText implements OnInit {

  text: string;

  disabled: boolean = true;

  constructor(
  ) { }

  ngOnInit() {
  }

  toggleDisabled() {
      this.disabled = !this.disabled;
  }
}
