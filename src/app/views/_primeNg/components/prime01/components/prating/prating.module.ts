// Components
import { PRating } from './prating.component';

import { routing } from './prating.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { RatingModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,

    routing,

    RatingModule,

  ],
  declarations: [
    PRating,
  ],
  providers: [
  ],
})
export class PRatingModule {
}
