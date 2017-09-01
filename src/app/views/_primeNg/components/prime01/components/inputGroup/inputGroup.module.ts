// Components
import { InputGroup } from './inputGroup.component';

import { routing } from './inputGroup.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';

import { InputTextModule } from 'primeng/primeng';
import { CheckboxModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    routing,

    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    ButtonModule,
  ],
  declarations: [
    InputGroup,
  ],
  providers: [
  ],
})
export class InputGroupModule {
}
