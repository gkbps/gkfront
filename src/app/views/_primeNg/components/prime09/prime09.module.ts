// Components
import { Prime09 } from './prime09.component';

import { PMessageModule } from './components/pmessage/pmessage.module';
import { PGrowlModule } from './components/pgrowl/pgrowl.module';
// import { } from './components';

// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,         // Require for <router-outlet>



    PMessageModule,
    PGrowlModule,
  ],
  declarations: [
    Prime09,

  ],
  providers: [
  ],
})
export class Prime09Module {
}
