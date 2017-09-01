// External
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pcolorPicker',
  templateUrl: './pcolorPicker.html',
  styleUrls: ['./pcolorPicker.scss'],
})

export class PColorPicker implements OnInit {

  color1: string;

  color2: string = '#1976D2';

  constructor(
  ) { }

  ngOnInit() {
  }

}
