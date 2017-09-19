import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GkClnComponent } from './gkcln.component';
import { GkClnRoutingModule } from './gkcln-routing.module';

import { GkCln01Component } from './components/gkcln01';

import { DataTableModule, SharedModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { MultiSelectModule } from 'primeng/primeng';
import { ContextMenuModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GkClnRoutingModule,

    DataTableModule,
    SharedModule,
    GrowlModule,
    ButtonModule,
    MultiSelectModule,
    ContextMenuModule,    
  ],
  declarations: [
    GkCln01Component,

    GkClnComponent,
  ]
})
export class GkClnModule { }
