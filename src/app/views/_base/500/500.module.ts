import { P500RoutingModule } from './500-routing.module';
import { P500Component } from './500.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AppTranslationModule } from '../../app.translation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    // AppTranslationModule,
    ReactiveFormsModule,
    FormsModule,
    P500RoutingModule,
  ],
  declarations: [
    P500Component,
  ],
  providers: [
  ],
})
export class P500Module {}
