// Components
import { PDoughnut } from './pdoughnut.component';

import { routing } from './pdoughnut.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { ChartModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    ChartModule,
  ],
  declarations: [
    PDoughnut,
  ],
  providers: [
  ],
})
export class PDoughnutModule {
}
