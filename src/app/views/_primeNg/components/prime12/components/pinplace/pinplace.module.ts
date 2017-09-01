// Components
import { PInplace } from './pinplace.component';

import { routing } from './pinplace.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { InplaceModule, InputTextModule, DataTableModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    InplaceModule,
    InputTextModule,
    DataTableModule,
  ],
  declarations: [
    PInplace,
  ],
  providers: [
  ],
})
export class PInplaceModule {
}
