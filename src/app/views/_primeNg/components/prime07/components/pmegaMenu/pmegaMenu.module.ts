// Components
import { PMegaMenu } from './pmegaMenu.component';

import { routing } from './pmegaMenu.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { MegaMenuModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    MegaMenuModule,
  ],
  declarations: [
    PMegaMenu,
  ],
  providers: [
  ],
})
export class PMegaMenuModule {
}
