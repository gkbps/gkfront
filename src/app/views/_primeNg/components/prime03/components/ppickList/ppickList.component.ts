// External
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Car {
    vin?;
    year?;
    brand?;
    color?;
    price?;
}

import { CarService } from './car.service';

@Component({
  selector: 'ppickList',
  templateUrl: './ppickList.html',
  styleUrls: ['./ppickList.scss'],
})

export class PPickList implements OnInit {

  sourceCars: Car[];

  targetCars: Car[];

  constructor(private carService: CarService) { }

    ngOnInit() {
        this.sourceCars = this.carService.getCarsLarge();
        // this.carService.getCarsSmall().then(cars => this.sourceCars = cars);
        this.targetCars = [];
    }

}
