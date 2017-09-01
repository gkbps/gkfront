// External
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'peditor',
  templateUrl: './peditor.html',
  styleUrls: ['./peditor.scss'],
})

export class PEditor implements OnInit {

  text1: string = '<div>Hello World!</div><div>PrimeNG <b>Editor</b> Rocks</div><div><br></div>';

  text2: string;

  constructor(
  ) { }

  ngOnInit() {
  }

}
