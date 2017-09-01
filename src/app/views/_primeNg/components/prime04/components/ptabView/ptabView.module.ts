// Components
import { PTabView } from './ptabView.component';

import { routing } from './ptabView.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { TabViewModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    TabViewModule,
    GrowlModule,
  ],
  declarations: [
    PTabView,
  ],
  providers: [
  ],
})
export class PTabViewModule {
}
