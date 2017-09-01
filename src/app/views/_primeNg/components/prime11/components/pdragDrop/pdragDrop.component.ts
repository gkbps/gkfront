// External
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Car } from './car.interface';
import { CarService } from './car.service';

@Component({
  selector: 'pdragDrop',
  templateUrl: './pdragDrop.html',
  styleUrls: ['./pdragDrop.scss'],
})

export class PDragDrop implements OnInit {

  availableCars: Car[];

  selectedCars: Car[];

  draggedCar: Car;

  constructor(private carService: CarService) { }

  ngOnInit() {
      this.selectedCars = [];
      // this.carService.getCarsSmall().then(cars => this.availableCars = cars);
      this.availableCars = JSON.parse(JSON.stringify(this.carService.getCarsLarge()));
  }

  dragStart(event,car: Car) {
      this.draggedCar = car;
  }

  drop(event) {
      if(this.draggedCar) {
          let draggedCarIndex = this.findIndex(this.draggedCar);
          this.selectedCars = [...this.selectedCars, this.draggedCar];
          this.availableCars = this.availableCars.filter((val,i) => i!=draggedCarIndex);
          this.draggedCar = null;
      }
  }

  dragEnd(event) {
      this.draggedCar = null;
  }

  findIndex(car: Car) {
      let index = -1;
      for(let i = 0; i < this.availableCars.length; i++) {
          if(car.vin === this.availableCars[i].vin) {
              index = i;
              break;
          }
      }
      return index;
  }

}
