// Components
import { PUpload } from './pupload.component';

import { routing } from './pupload.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { FileUploadModule, GrowlModule, ButtonModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    FileUploadModule,
    GrowlModule,
    ButtonModule,
  ],
  declarations: [
    PUpload,
  ],
  providers: [
  ],
})
export class PUploadModule {
}
