// Components
import { PValidation } from './pvalidation.component';

import { routing } from './pvalidation.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { GrowlModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { InputTextareaModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // RouterModule,
    
    
    routing,

    GrowlModule,
    PanelModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
  ],
  declarations: [
    PValidation,
  ],
  providers: [
  ],
})
export class PValidationModule {
}
