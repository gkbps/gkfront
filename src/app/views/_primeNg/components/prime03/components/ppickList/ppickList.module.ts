// Components
import { PPickList } from './ppickList.component';

import { routing } from './ppickList.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { PickListModule } from 'primeng/primeng';

import { CarService } from './car.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    PickListModule,
  ],
  declarations: [
    PPickList,
  ],
  providers: [
    CarService,
  ],
})
export class PPickListModule {
}
