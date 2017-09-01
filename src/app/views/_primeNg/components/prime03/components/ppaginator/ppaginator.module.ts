// Components
import { PPaginator } from './ppaginator.component';

import { routing } from './ppaginator.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { PaginatorModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    PaginatorModule,

  ],
  declarations: [
    PPaginator,
  ],
  providers: [
  ],
})
export class PPaginatorModule {
}
