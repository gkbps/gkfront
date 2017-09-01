// Components
import { PDialog } from './pdialog.component';

import { routing } from './pdialog.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { DialogModule, ButtonModule } from 'primeng/primeng';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    DialogModule,
    ButtonModule,
  ],
  declarations: [
    PDialog,
  ],
  providers: [
  ],
})
export class PDialogModule {
}
