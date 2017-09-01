// Components
import { PDataList } from './pdataList.component';

import { routing } from './pdataList.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { DataListModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    DataListModule,
  ],
  declarations: [
    PDataList,
  ],
  providers: [
  ],
})
export class PDataListModule {
}
