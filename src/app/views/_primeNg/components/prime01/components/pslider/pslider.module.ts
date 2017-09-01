// Components
import { PSlider } from './pslider.component';

import { routing } from './pslider.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { SliderModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    routing,

    SliderModule,
  ],
  declarations: [
    PSlider,
  ],
  providers: [
  ],
})
export class PSliderModule {
}
