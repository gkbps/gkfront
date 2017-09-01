// Components
import { PGrid } from './pgrid.component';

import { routing } from './pgrid.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,
  ],
  declarations: [
    PGrid,
  ],
  providers: [
  ],
})
export class PGridModule {
}
