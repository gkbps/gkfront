// External
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pdialog',
  templateUrl: './pdialog.html',
  styleUrls: ['./pdialog.scss'],
})

export class PDialog implements OnInit {

  display: boolean = false;

  showDialog() {
      this.display = true;
  }

  constructor(
  ) { }

  ngOnInit() {
  }

}
