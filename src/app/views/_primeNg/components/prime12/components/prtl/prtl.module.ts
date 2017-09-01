// Components
import { PRtl } from './prtl.component';

import { routing } from './prtl.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { DialogModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { AccordionModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    DialogModule,
    InputTextModule,
    ButtonModule,
    AccordionModule,
    TabViewModule,
  ],
  declarations: [
    PRtl,
  ],
  providers: [
  ],
})
export class PRtlModule {
}
