// External
import { Component, NgModule } from '@angular/core';
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

import {
	GkCln00Component,
	GkCln01Component,

	GkCln10Component,
	GkCln11Component,
	GkCln12Component,
	GkCln13Component,
	GkCln14Component,
	GkCln15Component,
	GkCln16Component,
	GkCln17Component,
	GkCln18Component,

	GkCln20Component,
	GkCln21Component,
	GkCln22Component,
	GkCln23Component,
	GkCln24Component,
	GkCln25Component,
	GkCln26Component,
	GkCln27Component,
	GkCln28Component,

	GkCln30Component,

	GkCln40Component,

	GkCln50Component,
	GkCln51Component,

	GkCln60Component,

	GkCln80Component,

	GkCln90Component,
} from './components';

const MODULE_COMPONENTS = [
	GkCln00Component,
	GkCln01Component,

	GkCln10Component,
	GkCln11Component,
	GkCln12Component,
	GkCln13Component,
	GkCln14Component,
	GkCln15Component,
	GkCln16Component,
	GkCln17Component,
	GkCln18Component,

	GkCln20Component,
	GkCln21Component,
	GkCln22Component,
	GkCln23Component,
	GkCln24Component,
	GkCln25Component,
	GkCln26Component,
	GkCln27Component,
	GkCln28Component,

	GkCln30Component,

	GkCln40Component,

	GkCln50Component,
	GkCln51Component,

	GkCln60Component,

	GkCln80Component,

	GkCln90Component,
];

import { GkClientService } from '../../../../services/gkClient.service';
import { GkCln51Service } from './components/gkcln51/gkcln51.service';

import { DynamicModule } from 'ng-dynamic-component';
import {
	DbGrid3,
	DbGrid4,
	DbGrid5,
	DbGrid6,
	DbGrid7,
	DbGrid8,
	DbGrid9,
	DbGrid12,
	GkClnDbOverviewAll,
	GkClnDbOverviewActive,
	GkClnDbOverviewInactive,
	GkClnDbOverviewMarked,
	GkClnDbChartDoughnut,
	GkClnDbChartPie,
	GkClnDbChartRadar,
	GkClnDbChartPolarArea,
	GkClnDbChartLine,
} from './components/gkclnDashboard/gkclnDashboard.component';

const DB_COMPONENTS = [
  DbGrid3,
	DbGrid4,
	DbGrid5,
	DbGrid6,
	DbGrid7,
	DbGrid8,
	DbGrid9,
	DbGrid12,
	GkClnDbOverviewAll,
	GkClnDbOverviewActive,
	GkClnDbOverviewInactive,
	GkClnDbOverviewMarked,
	GkClnDbChartDoughnut,
	GkClnDbChartPie,
	GkClnDbChartRadar,
	GkClnDbChartPolarArea,
	GkClnDbChartLine,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GkClnRoutingModule,

    // DataTableModule,
    // SharedModule,
    // GrowlModule,
    // ButtonModule,
    // MultiSelectModule,
    // ContextMenuModule,

    NgaModule,
    GkClnFormModule,
    DynamicModule.withComponents(DB_COMPONENTS),
  ],
  declarations: [
    GkClnComponent,
		MODULE_COMPONENTS,
    DB_COMPONENTS,
  ],
	// exports: [
  //
	// ],
  // entryComponents:[
  //   DB_COMPONENTS,
  // ],
  providers: [
    GkClientService,
    GkCln51Service,
  ],
})
export class GkClnModule { }
