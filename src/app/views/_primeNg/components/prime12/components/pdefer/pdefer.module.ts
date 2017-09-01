// Components
import { PDefer } from './pdefer.component';

import { routing } from './pdefer.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { DeferModule, GrowlModule, DataTableModule } from 'primeng/primeng';
import { CarService } from '../presponsive/car.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    DeferModule,
    GrowlModule,
    DataTableModule,
  ],
  declarations: [
    PDefer,
  ],
  providers: [
    CarService,
  ],
})
export class PDeferModule {
}
