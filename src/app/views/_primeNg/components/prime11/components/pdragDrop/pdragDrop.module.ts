// Components
import { PDragDrop } from './pdragDrop.component';

import { routing } from './pdragDrop.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { DragDropModule, PanelModule, DataTableModule } from 'primeng/primeng';

import { CarService } from './car.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    DragDropModule,
    PanelModule,
    DataTableModule,
  ],
  declarations: [
    PDragDrop,
  ],
  providers: [
    CarService,
  ],
})
export class PDragDropModule {
}
