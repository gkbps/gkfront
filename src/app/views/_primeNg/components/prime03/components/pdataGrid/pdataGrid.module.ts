// Components
import { PDataGrid } from './pdataGrid.component';

import { routing } from './pdataGrid.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { DataGridModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';

import { CarService } from './car.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    DataGridModule,
    PanelModule,
    DialogModule,
  ],
  declarations: [
    PDataGrid,
  ],
  providers: [
    CarService,
  ],
})
export class PDataGridModule {
}
