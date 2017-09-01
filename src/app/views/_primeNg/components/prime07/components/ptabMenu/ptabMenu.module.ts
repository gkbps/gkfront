// Components
import { PTabMenu } from './ptabMenu.component';

import { routing } from './ptabMenu.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { TabMenuModule, MenuItem } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    TabMenuModule,
    
  ],
  declarations: [
    PTabMenu,
  ],
  providers: [
  ],
})
export class PTabMenuModule {
}
