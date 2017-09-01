// Components
import { zx } from './zz.component';

import { routing } from './zz.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,
  ],
  declarations: [
    zx,
  ],
  providers: [
  ],
})
export class zxModule {
}
