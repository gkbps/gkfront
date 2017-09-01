// Components
import { PInputText } from './pinputText.component';

import { routing } from './pinputText.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { InputTextModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,  
    routing,

    InputTextModule,
    ButtonModule,
  ],
  declarations: [
    PInputText,
  ],
  providers: [
  ],
})
export class PInputTextModule {
}
