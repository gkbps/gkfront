// Components
import { Prime06 } from './prime06.component';

import { PUploadModule } from './components/pupload/pupload.module';

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
    
    

    PUploadModule,
  ],
  declarations: [
    Prime06,

  ],
  providers: [
  ],
})
export class Prime06Module {
}
