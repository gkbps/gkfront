// Components
import { PDataTable } from './pdataTable.component';

import { routing } from './pdataTable.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { DataTableModule, SharedModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { MultiSelectModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';
import { ContextMenuModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';
import { SliderModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    DataTableModule,
    SharedModule,
    GrowlModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    MultiSelectModule,
    DropdownModule,
    ContextMenuModule,
    CalendarModule,
    SliderModule,
  ],
  declarations: [
    PDataTable,
  ],
  providers: [
  ],
})
export class PDataTableModule {
}
