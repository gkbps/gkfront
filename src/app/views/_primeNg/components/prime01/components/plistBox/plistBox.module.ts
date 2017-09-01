// Components
import { PListBox } from './plistBox.component';

import { routing } from './plistBox.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { ListboxModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,    
    routing,

    ListboxModule,
    ButtonModule,
  ],
  declarations: [
    PListBox,
  ],
  providers: [
  ],
})
export class PListBoxModule {
}
