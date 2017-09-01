// Components
import { PCaptcha } from './pcaptcha.component';

import { routing } from './pcaptcha.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { CaptchaModule, GrowlModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    CaptchaModule,
    GrowlModule,
  ],
  declarations: [
    PCaptcha,
  ],
  providers: [
  ],
})
export class PCaptchaModule {
}
