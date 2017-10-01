import { P401RoutingModule } from './401-routing.module';
import { P401Component } from './401.component';

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
    P401RoutingModule,
  ],
  declarations: [
    P401Component,
  ],
  providers: [
  ],
})
export class P401Module {}
