// Components
import { PDropdown } from './pdropdown.component';

import { routing } from './pdropdown.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { DropdownModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,   
    routing,

    DropdownModule,
  ],
  declarations: [
    PDropdown,
  ],
  providers: [
  ],
})
export class PDropdownModule {
}
