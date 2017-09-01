// Components
import { PDataScroller } from './pdataScroller.component';

import { routing } from './pdataScroller.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { DataScrollerModule } from 'primeng/primeng';
// import { PanelModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';

import { CarService } from './car.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    DataScrollerModule,
    DialogModule,
  ],
  declarations: [
    PDataScroller,
  ],
  providers: [
    CarService,
  ],
})
export class PDataScrollerModule {
}
