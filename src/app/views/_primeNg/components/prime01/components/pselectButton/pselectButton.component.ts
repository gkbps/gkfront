// External
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'pselectButton',
  templateUrl: './pselectButton.html',
  styleUrls: ['./pselectButton.scss'],
})

export class PSelectButton implements OnInit {

  types: SelectItem[];

  selectedType: string;

  selectedTypes: string[] = ['Apartment','Studio'];

  constructor() {
      this.types = [];
      this.types.push({label: 'Apartment', value: 'Apartment'});
      this.types.push({label: 'House', value: 'House'});
      this.types.push({label: 'Studio', value: 'Studio'});
  }

  clear() {
      this.selectedType = null;
      this.selectedTypes = [];
  }

  ngOnInit() {
  }

}
