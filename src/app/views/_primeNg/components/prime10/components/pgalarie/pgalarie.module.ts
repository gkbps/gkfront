// Components
import { PGalarie } from './pgalarie.component';

import { routing } from './pgalarie.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { GalleriaModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    GalleriaModule,

  ],
  declarations: [
    PGalarie,
  ],
  providers: [
  ],
})
export class PGalarieModule {
}
