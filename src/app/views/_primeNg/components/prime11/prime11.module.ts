// Components
import { Prime11 } from './prime11.component';

import { PDragDropModule } from './components/pdragDrop/pdragDrop.module';
// import { Module } from './components';

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
    
    

    PDragDropModule,
  ],
  declarations: [
    Prime11,

  ],
  providers: [
  ],
})
export class Prime11Module {
}
