// Components
import { PBreadcum } from './pbreadcum.component';

import { routing } from './pbreadcum.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { BreadcrumbModule, MenuItem } from 'primeng/primeng';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    BreadcrumbModule,
  ],
  declarations: [
    PBreadcum,
  ],
  providers: [
  ],
})
export class PBreadcumModule {
}
