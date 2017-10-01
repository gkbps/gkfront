import { P403RoutingModule } from './403-routing.module';
import { P403Component } from './403.component';

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
    P403RoutingModule,
  ],
  declarations: [
    P403Component,
  ],
  providers: [
  ],
})
export class P403Module {}
