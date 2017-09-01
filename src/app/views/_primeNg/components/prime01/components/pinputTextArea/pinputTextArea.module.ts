// Components
import { PInputTextArea } from './pinputTextArea.component';

import { routing } from './pinputTextArea.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { InputTextareaModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,    
    routing,

    InputTextareaModule,
  ],
  declarations: [
    PInputTextArea,
  ],
  providers: [
  ],
})
export class PInputTextAreaModule {
}
