// External
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Car } from '../presponsive/car.interface';
import { CarService } from '../presponsive/car.service';

import { Message } from 'primeng/primeng';

@Component({
  selector: 'pdefer',
  templateUrl: './pdefer.html',
  styleUrls: ['./pdefer.scss'],
})

export class PDefer implements OnInit {

  cars: Car[];

  msgs: Message[] = [];

  constructor(private carService: CarService)  {}

  initData() {
      this.msgs = [{ severity: 'success', summary: 'Data Initialized', detail: 'Render Completed' }];
      // this.carService.getCarsSmall().then(cars => this.cars = cars);
      this.cars = this.carService.getCarsLarge();
   }

  ngOnInit() {
  }

}
