import { NgModule } from '@angular/core';

import { GkmComponent } from './gkm.component';
import { GkmRoutingModule } from './gkm-routing.module';

@NgModule({
  imports: [
    GkmRoutingModule,
  ],
  declarations: [
    GkmComponent,
  ]
})
export class GkmModule { }
