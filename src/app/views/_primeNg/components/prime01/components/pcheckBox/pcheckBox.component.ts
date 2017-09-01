// External
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pcheckBox',
  templateUrl: './pcheckBox.html',
  styleUrls: ['./pcheckBox.scss'],
})

export class PCheckBox implements OnInit {

  selectedCities: string[] = [];

  selectedCategories: string[] = ['Technology', 'Sports'];

  checked: boolean = false;

  constructor(
  ) { }

  ngOnInit() {
  }

}
