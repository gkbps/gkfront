// Components
import { POverlayPanel } from './poverlayPanel.component';

import { routing } from './poverlayPanel.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { OverlayPanelModule, DataTableModule, ButtonModule } from 'primeng/primeng';
import { CarService } from './car.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    OverlayPanelModule,
    DataTableModule,
    ButtonModule,
  ],
  declarations: [
    POverlayPanel,
  ],
  providers: [
    CarService,
  ],
})
export class POverlayPanelModule {
}
