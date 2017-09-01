// Components
import { PMultiSelect } from './pmultiSelect.component';

import { routing } from './pmultiSelect.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { MultiSelectModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,

    routing,

    MultiSelectModule,

  ],
  declarations: [
    PMultiSelect,
  ],
  providers: [
  ],
})
export class PMultiSelectModule {
}
