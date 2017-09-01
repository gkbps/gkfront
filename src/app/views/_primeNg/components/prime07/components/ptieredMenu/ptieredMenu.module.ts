// Components
import { PTieredMenu } from './ptieredMenu.component';

import { routing } from './ptieredMenu.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { TieredMenuModule, MenuItem, GrowlModule, ButtonModule } from 'primeng/primeng';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    TieredMenuModule,
    GrowlModule,
    ButtonModule,
  ],
  declarations: [
    PTieredMenu,
  ],
  providers: [
  ],
})
export class PTieredMenuModule {
}
