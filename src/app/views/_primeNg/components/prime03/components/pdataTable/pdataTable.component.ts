// External
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  selector: 'pdataTable',
  templateUrl: './pdataTable.html',
  styleUrls: ['./pdataTable.scss'],
})

export class PDataTable implements OnInit {

  msgs: Message[] = [];

  cars: [Car];

  carsLoading: [Car];



  cars1: [Car];

  cars3: [any];

  loading: boolean;

  cols: any[];

  columnOptions: SelectItem[];

  first: number;

  multiSortMeta: any[];

  selectedCar: Car;

  selectedCars: Car[];

  items: MenuItem[];

  /*
   * Filter
   */

  carsFilter: Car = new PrimeCar();

  brands: SelectItem[];

  colors: SelectItem[];

  yearFilter: number;

  /*
   * Select
   */

  carsSelect: Car[];

  /*
   * CRUD
   */

   displayDialog: boolean;

   carCRUD: Car = new PrimeCar();

   selectedCarCRUD: Car;

   newCarCRUD: boolean;

   carsCRUD: Car[];

  constructor(
  ) { }

  ngOnInit() {

    this.cars = [
        { vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black', price: 500 },
        { vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White', price: 1000 },
        { vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue', price: 400 },
        { vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White', price: 600 },
        { vin: 'gf45wg5', year: 2011, brand: 'VW', color: 'Red', price: 700 },
        { vin: 'bhv5y5w', year: 2015, brand: 'Jaguar', color: 'Blue', price: 650 },
        { vin: 'ybw5fsd', year: 2012, brand: 'Ford', color: 'Yellow', price: 750 },
        { vin: '45665e5', year: 2011, brand: 'Mercedes', color: 'Brown', price: 470 },
        { vin: 'he6sb5v', year: 2015, brand: 'Ford', color: 'Black', price: 610 },
      ];

    // CRUD
    this.carsCRUD = JSON.parse(JSON.stringify(this.cars));

    // Filter
    this.carsFilter = JSON.parse(JSON.stringify(this.cars));

    // Select
    this.carsSelect = JSON.parse(JSON.stringify(this.cars));

    this.loading = true;
    setTimeout(() => {
        this.carsLoading = this.cars;
        this.loading = false;
    }, 3000);

    /*
     * Dynamic Column
     */
    this.cols = [
        { field: 'vin', header: 'Vin' },
        { field: 'year', header: 'Year' },
        { field: 'brand', header: 'Brand' },
        { field: 'color', header: 'Color' },
    ];

    this.columnOptions = [];
    for (let i = 0; i < this.cols.length; i++) {
        this.columnOptions.push({  label: this.cols[i].header, value: this.cols[i] });
    }

    /*
     *
     */
    this.multiSortMeta = [];
    this.multiSortMeta.push({  field: 'year', order: 1 });
    this.multiSortMeta.push({  field: 'brand', order: -1 });

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

    this.brands = [
        { label: 'Choose', value: null },
        { label: 'Audi', value: 'Audi' },
        { label: 'BMW', value: 'BMW' },
        { label: 'Fiat', value: 'Fiat' },
        { label: 'Ford', value: 'Ford' },
        { label: 'Honda', value: 'Honda' },
        { label: 'Jaguar', value: 'Jaguar' },
        { label: 'Mercedes', value: 'Mercedes' },
        { label: 'Renault', value: 'Renault' },
        { label: 'VW', value: 'VW' },
        { label: 'Volvo', value: 'Volvo' },
    ];

    this.colors = [];
    this.colors.push({ label: 'White', value: 'White' });
    this.colors.push({ label: 'Green', value: 'Green' });
    this.colors.push({ label: 'Silver', value: 'Silver' });
    this.colors.push({ label: 'Black', value: 'Black' });
    this.colors.push({ label: 'Red', value: 'Red' });
    this.colors.push({ label: 'Maroon', value: 'Maroon' });
    this.colors.push({ label: 'Brown', value: 'Brown' });
    this.colors.push({ label: 'Orange', value: 'Orange' });
    this.colors.push({ label: 'Blue', value: 'Blue' });


    setTimeout(() => {
      this.cars3 = [
          { 'brand': 'VW', 'year': 2012, 'color': 'Orange', 'vin': 'dsad231ff' },
          { 'brand': 'Audi', 'year': 2011, 'color': 'Black', 'vin': 'gwregre345' },
          { 'brand': 'Renault', 'year': 2005, 'color': 'Gray', 'vin': 'h354htr' },
          { 'brand': 'BMW', 'year': 2003, 'color': 'Blue', 'vin': 'j6w54qgh' },
          { 'brand': 'Mercedes', 'year': 1995, 'color': 'Orange', 'vin': 'hrtwy34' },
          { 'brand': 'Volvo', 'year': 2005, 'color': 'Black', 'vin': 'jejtyj' },
          { 'brand': 'Honda', 'year': 2012, 'color': 'Yellow', 'vin': 'g43gr' },
          { 'brand': 'Jaguar', 'year': 2013, 'color': 'Orange', 'vin': 'greg34' },
          { 'brand': 'Ford', 'year': 2000, 'color': 'Black', 'vin': 'h54hw5' },
          { 'brand': 'Fiat', 'year': 2013, 'color': 'Red', 'vin': '245t2s' },
          { 'brand': 'VW', 'year': 2012, 'color': 'Orange', 'vin': 'dsad231ff' },
          { 'brand': 'Audi', 'year': 2011, 'color': 'Black', 'vin': 'gwregre345' },
          { 'brand': 'Renault', 'year': 2005, 'color': 'Gray', 'vin': 'h354htr' },
          { 'brand': 'BMW', 'year': 2003, 'color': 'Blue', 'vin': 'j6w54qgh' },
          { 'brand': 'Mercedes', 'year': 1995, 'color': 'Orange', 'vin': 'hrtwy34' },
          { 'brand': 'Volvo', 'year': 2005, 'color': 'Black', 'vin': 'jejtyj' },
          { 'brand': 'Honda', 'year': 2012, 'color': 'Yellow', 'vin': 'g43gr' },
          { 'brand': 'Jaguar', 'year': 2013, 'color': 'Orange', 'vin': 'greg34' },
          { 'brand': 'Ford', 'year': 2000, 'color': 'Black', 'vin': 'h54hw5' },
          { 'brand': 'Fiat', 'year': 2013, 'color': 'Red', 'vin': '245t2s' },
          { 'brand': 'VW', 'year': 2012, 'color': 'Orange', 'vin': 'dsad231ff' },
          { 'brand': 'Audi', 'year': 2011, 'color': 'Black', 'vin': 'gwregre345' },
          { 'brand': 'Renault', 'year': 2005, 'color': 'Gray', 'vin': 'h354htr' },
          { 'brand': 'BMW', 'year': 2003, 'color': 'Blue', 'vin': 'j6w54qgh' },
          { 'brand': 'Mercedes', 'year': 1995, 'color': 'Orange', 'vin': 'hrtwy34' },
          { 'brand': 'Volvo', 'year': 2005, 'color': 'Black', 'vin': 'jejtyj' },
          { 'brand': 'Honda', 'year': 2012, 'color': 'Yellow', 'vin': 'g43gr' },
          { 'brand': 'Jaguar', 'year': 2013, 'color': 'Orange', 'vin': 'greg34' },
          { 'brand': 'Ford', 'year': 2000, 'color': 'Black', 'vin': 'h54hw5' },
          { 'brand': 'Fiat', 'year': 2013, 'color': 'Red', 'vin': '245t2s' },
          { 'brand': 'VW', 'year': 2012, 'color': 'Orange', 'vin': 'dsad231ff' },
          { 'brand': 'Audi', 'year': 2011, 'color': 'Black', 'vin': 'gwregre345' },
          { 'brand': 'Renault', 'year': 2005, 'color': 'Gray', 'vin': 'h354htr' },
          { 'brand': 'BMW', 'year': 2003, 'color': 'Blue', 'vin': 'j6w54qgh' },
          { 'brand': 'Mercedes', 'year': 1995, 'color': 'Orange', 'vin': 'hrtwy34' },
          { 'brand': 'Volvo', 'year': 2005, 'color': 'Black', 'vin': 'jejtyj' },
          { 'brand': 'Honda', 'year': 2012, 'color': 'Yellow', 'vin': 'g43gr' },
          { 'brand': 'Jaguar', 'year': 2013, 'color': 'Orange', 'vin': 'greg34' },
          { 'brand': 'Ford', 'year': 2000, 'color': 'Black', 'vin': 'h54hw5' },
          { 'brand': 'Fiat', 'year': 2013, 'color': 'Red', 'vin': '245t2s' },
      ];
      }, 25);
  }

  selectCar(car: Car) {
      this.msgs = [];
      this.msgs.push({  severity: 'info', summary: 'Car Select', detail: 'Vin: ' + car.vin });
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

  calculateGroupTotal(brand: string) {
      let total = 0;

      if (this.cars) {
          for (let car of this.cars) {
              if (car.brand === brand) {
                  total += car.price;
              }
          }
      }

      return total;
  }

  reset() {
    this.first = 0;
  }

  mysort(event) {
    //event.field = Field to sort
    //event.order = Sort order
  }

  loadData(event: LazyLoadEvent) {
    //event.first = First row offset
    //event.rows = Number of rows per page
    //event.sortField = Field name to sort in single sort mode
    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec in single sort mode
    //multiSortMeta: An array of SortMeta objects used in multiple columns sorting. Each SortMeta has field and order properties.
    //filters: Filters object having field as key and filter value, filter matchMode as value
    //globalFilter: Value of the global filter if available
    this.cars1 = this.cars; //do a request to a remote datasource using a service and return the cars that match the lazy load criteria
  }

  /*
   * CRUD
   */

   showDialogToAdd() {
         this.newCarCRUD = true;
         this.carCRUD = new PrimeCar();
         this.displayDialog = true;
     }

     save() {
         let carsCRUD = [...this.carsCRUD];
         if (this.newCarCRUD) {
            carsCRUD.push(this.carCRUD);
         } else {
            carsCRUD[this.findSelectedCarIndex()] = this.carCRUD;
         }

         this.carsCRUD = carsCRUD;
         this.carCRUD = null;
         this.displayDialog = false;
     }

     delete() {
         let index = this.findSelectedCarIndex();
         this.carsCRUD = this.carsCRUD.filter((val,i) => i!=index);
         this.carCRUD = null;
         this.displayDialog = false;
     }

     onRowSelect(event) {
         this.newCarCRUD = false;
         this.carCRUD = this.cloneCar(event.data);
         this.displayDialog = true;
     }

     cloneCar(c: Car): Car {
         let carCRUD = new PrimeCar();
         for(let prop in c) {
             carCRUD[prop] = c[prop];
         }
         return carCRUD;
     }

     findSelectedCarIndex(): number {
         return this.carsCRUD.indexOf(this.selectedCar);
     }
}
