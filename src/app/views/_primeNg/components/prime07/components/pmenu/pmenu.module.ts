// Components
import { PMenu } from './pmenu.component';

import { routing } from './pmenu.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { MenuModule, MenuItem, ButtonModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    MenuModule,
    ButtonModule,
  ],
  declarations: [
    PMenu,
  ],
  providers: [
  ],
})
export class PMenuModule {
}
