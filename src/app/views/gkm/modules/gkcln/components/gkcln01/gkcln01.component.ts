import { Component } from '@angular/core';

import { Car } from './car.interface';

import { Header } from 'primeng/primeng';
import { Footer } from 'primeng/primeng';
import { Message } from 'primeng/primeng';
import { MenuItem, SelectItem } from 'primeng/primeng';
import { LazyLoadEvent } from 'primeng/primeng';

class PrimeCar implements Car {

    constructor(public vin?, public year?, public brand?, public color?) {}
}


@Component({
  templateUrl: 'gkcln01.component.html'
})
export class GkCln01Component {

  msgs: Message[] = [];
  cars: [Car];
  cols: any[];

  columnOptions: SelectItem[];

  brands: SelectItem[];

  colors: SelectItem[];

  yearFilter: number;

  selectedCar: Car;

  items: MenuItem[];

  ngOnInit() {
    this.cars = [
      { brand: 'VW', year: 2012, color: 'Orange', vin: 'dsad231ff', price: 500 },
      { brand: 'Audi', year: 2011, color: 'Black', vin: 'gwregre345', price: 500 },
      { brand: 'Renault', year: 2005, color: 'Gray', vin: 'h354htr', price: 500 },
      { brand: 'BMW', year: 2003, color: 'Blue', vin: 'j6w54qgh', price: 500 },
      { brand: 'Mercedes', year: 1995, color: 'Orange', vin: 'hrtwy34', price: 500 },
      { brand: 'Volvo', year: 2005, color: 'Black', vin: 'jejtyj', price: 500 },
      { brand: 'Honda', year: 2012, color: 'Yellow', vin: 'g43gr', price: 500 },
      { brand: 'Jaguar', year: 2013, color: 'Orange', vin: 'greg34', price: 500 },
      { brand: 'Ford', year: 2000, color: 'Black', vin: 'h54hw5', price: 500 },
      { brand: 'Fiat', year: 2013, color: 'Red', vin: '245t2s', price: 500 },
      { brand: 'VW', year: 2012, color: 'Orange', vin: 'dsad231ff', price: 500 },
      { brand: 'Audi', year: 2011, color: 'Black', vin: 'gwregre345', price: 500 },
      { brand: 'Renault', year: 2005, color: 'Gray', vin: 'h354htr', price: 500 },
      { brand: 'BMW', year: 2003, color: 'Blue', vin: 'j6w54qgh', price: 500 },
      { brand: 'Mercedes', year: 1995, color: 'Orange', vin: 'hrtwy34', price: 500 },
      { brand: 'Volvo', year: 2005, color: 'Black', vin: 'jejtyj', price: 500 },
      { brand: 'Honda', year: 2012, color: 'Yellow', vin: 'g43gr', price: 500 },
      { brand: 'Jaguar', year: 2013, color: 'Orange', vin: 'greg34', price: 500 },
      { brand: 'Ford', year: 2000, color: 'Black', vin: 'h54hw5', price: 500 },
      { brand: 'Fiat', year: 2013, color: 'Red', vin: '245t2s', price: 500 },
      { brand: 'VW', year: 2012, color: 'Orange', vin: 'dsad231ff', price: 500 },
      { brand: 'Audi', year: 2011, color: 'Black', vin: 'gwregre345', price: 500 },
      { brand: 'Renault', year: 2005, color: 'Gray', vin: 'h354htr', price: 500 },
      { brand: 'BMW', year: 2003, color: 'Blue', vin: 'j6w54qgh', price: 500 },
      { brand: 'Mercedes', year: 1995, color: 'Orange', vin: 'hrtwy34', price: 500 },
      { brand: 'Volvo', year: 2005, color: 'Black', vin: 'jejtyj', price: 500 },
      { brand: 'Honda', year: 2012, color: 'Yellow', vin: 'g43gr', price: 500 },
      { brand: 'Jaguar', year: 2013, color: 'Orange', vin: 'greg34', price: 500 },
      { brand: 'Ford', year: 2000, color: 'Black', vin: 'h54hw5', price: 500 },
      { brand: 'Fiat', year: 2013, color: 'Red', vin: '245t2s', price: 500 },
      { brand: 'VW', year: 2012, color: 'Orange', vin: 'dsad231ff', price: 500 },
      { brand: 'Audi', year: 2011, color: 'Black', vin: 'gwregre345', price: 500 },
      { brand: 'Renault', year: 2005, color: 'Gray', vin: 'h354htr', price: 500 },
      { brand: 'BMW', year: 2003, color: 'Blue', vin: 'j6w54qgh', price: 500 },
      { brand: 'Mercedes', year: 1995, color: 'Orange', vin: 'hrtwy34', price: 500 },
      { brand: 'Volvo', year: 2005, color: 'Black', vin: 'jejtyj', price: 500 },
      { brand: 'Honda', year: 2012, color: 'Yellow', vin: 'g43gr', price: 500 },
      { brand: 'Jaguar', year: 2013, color: 'Orange', vin: 'greg34', price: 500 },
      { brand: 'Ford', year: 2000, color: 'Black', vin: 'h54hw5', price: 500 },
      { brand: 'Fiat', year: 2013, color: 'Red', vin: '245t2s', price: 500 },
    ];


    this.cols = [
        { field: 'vin', header: 'vin', width: '20%' },
        { field: 'year', header: 'year', width: '30%'  },
        { field: 'brand', header: 'brand', width: '15%'  },
        { field: 'color', header: 'color', width: '35%'  },
    ];

    this.columnOptions = [];
    for (let i = 0; i < this.cols.length; i++) {
        this.columnOptions.push({  label: this.cols[i].header, value: this.cols[i] });
    }

    this.items = [
      { label: 'View', icon: 'fa-search', command: (event) => this.viewCar(this.selectedCar)},
      { label: 'Delete', icon: 'fa-close', command: (event) => this.deleteCar(this.selectedCar)},
      {
          label: 'File',
          items: [{
                  label: 'New',
                  icon: 'fa-plus',
                  items: [
                      { label: 'Project' },
                      { label: 'Other' },
                  ],
              },
              { label: 'Open' },
              { label: 'Quit' },
          ],
      },
    ];

  }

  viewCar(car: Car) {
      this.msgs = [];
      this.msgs.push({  severity: 'info', summary: 'Car Selected', detail: car.vin + ' - ' + car.brand });
  }

  deleteCar(car: Car) {
      let index = -1;
      for (let i = 0; i < this.cars.length; i++) {
          if (this.cars[i].vin == car.vin) {
              index = i;
              break;
          }
      }
      this.cars.splice(index, 1);

      this.msgs = [];
      this.msgs.push({  severity: 'info', summary: 'Car Deleted', detail: car.vin + ' - ' + car.brand });
  }

}
