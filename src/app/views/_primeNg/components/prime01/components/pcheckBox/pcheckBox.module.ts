// Components
import { PCheckBox } from './pcheckBox.component';

import { routing } from './pcheckBox.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';

import { CheckboxModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    routing,

    CheckboxModule,
  ],
  declarations: [
    PCheckBox,
  ],
  providers: [
  ],
})
export class PCheckBoxModule {
}
