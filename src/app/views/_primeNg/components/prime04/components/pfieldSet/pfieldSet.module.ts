// Components
import { PFieldSet } from './pfieldSet.component';

import { routing } from './pfieldSet.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { FieldsetModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    FieldsetModule,
    
  ],
  declarations: [
    PFieldSet,
  ],
  providers: [
  ],
})
export class PFieldSetModule {
}
