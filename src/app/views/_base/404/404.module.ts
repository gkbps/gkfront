import { P404RoutingModule } from './404-routing.module';
import { P404Component } from './404.component';

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
    P404RoutingModule,
  ],
  declarations: [
    P404Component,
  ],
  providers: [
  ],
})
export class P404Module {}
