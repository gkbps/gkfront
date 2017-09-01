// Components
import { PMessage } from './pmessage.component';

import { routing } from './pmessage.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { MessagesModule, ButtonModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    MessagesModule,
    ButtonModule,
  ],
  declarations: [
    PMessage,
  ],
  providers: [
  ],
})
export class PMessageModule {
}
