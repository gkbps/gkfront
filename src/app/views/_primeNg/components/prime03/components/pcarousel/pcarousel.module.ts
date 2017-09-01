// Components
import { PCarousel } from './pcarousel.component';

import { routing } from './pcarousel.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { CarouselModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    CarouselModule,
    GrowlModule,
    ButtonModule,
  ],
  declarations: [
    PCarousel,
  ],
  providers: [
  ],
})
export class PCarouselModule {
}
