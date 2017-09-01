// Components
import { PChips } from './pchips.component';

import { routing } from './pchips.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';

import { ChipsModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    routing,

    ChipsModule,

  ],
  declarations: [
    PChips,
  ],
  providers: [
  ],
})
export class PChipsModule {
}
