// Components
import { Prime02 } from './prime02.component';

import { PButtonModule } from './components/pbutton/pbutton.module';
import { PSplitButtonModule } from './components/psplitButton/psplitButton.module';

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
    
    

    PButtonModule,
    PSplitButtonModule,
  ],
  declarations: [
    Prime02,

  ],
  providers: [
  ],
})
export class Prime02Module {
}
