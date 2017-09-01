// Components
import { PAccordion } from './paccordion.component';

import { routing } from './paccordion.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { AccordionModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    AccordionModule,
    GrowlModule,
    ButtonModule,
  ],
  declarations: [
    PAccordion,
  ],
  providers: [
  ],
})
export class PAccordionModule {
}
