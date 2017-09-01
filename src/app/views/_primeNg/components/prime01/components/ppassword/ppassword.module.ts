// Components
import { PPassword } from './ppassword.component';

import { routing } from './ppassword.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { PasswordModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
  
    routing,

    PasswordModule,
  ],
  declarations: [
    PPassword,
  ],
  providers: [
  ],
})
export class PPasswordModule {
}
