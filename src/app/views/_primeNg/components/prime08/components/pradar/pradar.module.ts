// Components
import { PRadar } from './pradar.component';

import { routing } from './pradar.routing';
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
    PRadar,
  ],
  providers: [
  ],
})
export class PRadarModule {
}
