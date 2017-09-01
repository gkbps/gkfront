// Components
import { PPanelMenu } from './ppanelMenu.component';

import { routing } from './ppanelMenu.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { PanelMenuModule, MenuItem} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    PanelMenuModule,
  ],
  declarations: [
    PPanelMenu,
  ],
  providers: [
  ],
})
export class PPanelMenuModule {
}
