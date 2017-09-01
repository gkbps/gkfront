// Components
import { PConfirmDialog } from './pconfirmDialog.component';

import { routing } from './pconfirmDialog.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { GrowlModule, ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    ConfirmDialogModule,
    GrowlModule,
  ],
  declarations: [
    PConfirmDialog,
  ],
  providers: [
    ConfirmationService,
  ],
})
export class PConfirmDialogModule {
}
