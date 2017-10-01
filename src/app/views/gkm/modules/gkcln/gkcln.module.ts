// External
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataTableModule, SharedModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { MultiSelectModule } from 'primeng/primeng';
import { ContextMenuModule } from 'primeng/primeng';

// Internal
import { NgaModule } from '../../../../nga/nga.module';
import { GkClnFormModule } from './components/gkclnForm/gkclnForm.module';

import { GkClnComponent } from './gkcln.component';
import { GkClnRoutingModule } from './gkcln-routing.module';

import { GkCln00Component } from './components/gkcln00';
import { GkCln01Component } from './components/gkcln01';

import { GkCln10Component } from './components/gkcln10';
import { GkCln11Component } from './components/gkcln11';
import { GkCln12Component } from './components/gkcln12';
import { GkCln13Component } from './components/gkcln13';

import { GkCln20Component } from './components/gkcln20';
import { GkCln30Component } from './components/gkcln30';
import { GkCln40Component } from './components/gkcln40';
import { GkCln50Component } from './components/gkcln50';
import { GkCln60Component } from './components/gkcln60';
import { GkCln80Component } from './components/gkcln80';
import { GkCln90Component } from './components/gkcln90';

import { GkClientService } from '../../../../services/gkClient.service';

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

    NgaModule,
    GkClnFormModule,
  ],
  declarations: [
    GkCln00Component,
    GkCln01Component,

    GkCln10Component,
    GkCln11Component,
    GkCln12Component,
    GkCln13Component,

    GkCln20Component,

    GkCln30Component,

    GkCln40Component,

    GkCln50Component,

    GkCln60Component,

    GkCln80Component,

    GkCln90Component,

    GkClnComponent,
  ],
  providers: [
    GkClientService,
  ],
})
export class GkClnModule { }
