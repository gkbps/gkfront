import { Prime } from './prime.component';
import { Prime00Module } from './components/prime00/prime00.module';

import { routing } from './prime.routing';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MenubarModule, MenuItem, ButtonModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,

    MenubarModule,
    ButtonModule,
    Prime00Module,
  ],
  declarations: [
    Prime,
  ],
  providers: [
  ],
  exports: [
  ],
})
export class PrimeModule {
}
