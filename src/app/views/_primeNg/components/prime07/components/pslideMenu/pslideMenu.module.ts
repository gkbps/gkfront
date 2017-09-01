// Components
import { PSlideMenu } from './pslideMenu.component';

import { routing } from './pslideMenu.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { SlideMenuModule, MenuItem, ButtonModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    SlideMenuModule,
    ButtonModule,
  ],
  declarations: [
    PSlideMenu,
  ],
  providers: [
  ],
})
export class PSlideMenuModule {
}
