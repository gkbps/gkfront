// External
import { NgModule } from '@angular/core';

// Internal
import { NgaModule } from '../../nga/nga.module';
import { GkmComponent } from './gkm.component';
import { GkmRoutingModule } from './gkm-routing.module';

import { Gkm00Component } from './gkm00';


@NgModule({
  imports: [
    NgaModule,
    GkmRoutingModule,
  ],
  declarations: [
    GkmComponent,
    Gkm00Component,
  ]
})
export class GkmModule { }
