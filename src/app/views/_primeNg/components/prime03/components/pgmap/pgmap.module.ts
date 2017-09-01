// Components
import { PGmap } from './pgmap.component';

import { routing } from './pgmap.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { GMapModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { CheckboxModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    GMapModule,
    DialogModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    GrowlModule,
  ],
  declarations: [
    PGmap,
  ],
  providers: [
  ],
})
export class PGmapModule {
}
