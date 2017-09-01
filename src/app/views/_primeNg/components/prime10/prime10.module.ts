// Components
import { Prime10 } from './prime10.component';

import { PGalarieModule } from './components/pgalarie/pgalarie.module';
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
    
    

    PGalarieModule,
  ],
  declarations: [
    Prime10,

  ],
  providers: [
  ],
})
export class Prime10Module {
}
