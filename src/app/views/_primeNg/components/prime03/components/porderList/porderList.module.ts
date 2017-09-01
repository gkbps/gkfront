// Components
import { POrderList } from './porderList.component';

import { routing } from './porderList.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { OrderListModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    OrderListModule,
    
  ],
  declarations: [
    POrderList,
  ],
  providers: [
  ],
})
export class POrderListModule {
}
