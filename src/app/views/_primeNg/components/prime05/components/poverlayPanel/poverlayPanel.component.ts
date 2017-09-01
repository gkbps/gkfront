// External
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OverlayPanel } from 'primeng/primeng';
import { Car } from './car.interface';
import { CarService } from './car.service';

@Component({
  selector: 'poverlayPanel',
  templateUrl: './poverlayPanel.html',
  styleUrls: ['./poverlayPanel.scss'],
})

export class POverlayPanel implements OnInit {

  cars1: Car[];

  cars2: Car[];

  selectedCar: Car;

  constructor(private carService: CarService) { }

  ngOnInit() {
      // this.carService.getCarsSmall().then(cars => this.cars1 = cars);
      // this.carService.getCarsSmall().then(cars => this.cars2 = cars);
      this.cars1 = this.carService.getCarsLarge();
      this.cars2 = this.carService.getCarsLarge();
  }

  selectCar(event,car: Car, overlaypanel: OverlayPanel) {
      this.selectedCar = car;
      overlaypanel.toggle(event);
  }

}
