// Components
import { PResponsive } from './presponsive.component';

import { routing } from './presponsive.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { InputTextModule } from 'primeng/primeng';
import { InputTextareaModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';
import { AutoCompleteModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { SplitButtonModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';
import { PasswordModule } from 'primeng/primeng';
import { ListboxModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { DataTableModule } from 'primeng/primeng';
import { DataGridModule } from 'primeng/primeng';
import { CarouselModule } from 'primeng/primeng';
import { OrderListModule } from 'primeng/primeng';
import { PickListModule } from 'primeng/primeng';
import { MenuModule } from 'primeng/primeng';
import { PanelMenuModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
import { TreeModule } from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';

import { CarService } from './car.service';
import { CountryService } from './country.service';
import { NodeService } from './node.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    InputTextModule,
    InputTextareaModule,
    CalendarModule,
    AutoCompleteModule,
    ButtonModule,
    SplitButtonModule,
    DropdownModule,
    PasswordModule,
    ListboxModule,
    RadioButtonModule,
    DialogModule,
    PanelModule,
    DataTableModule,
    DataGridModule,
    CarouselModule,
    OrderListModule,
    PickListModule,
    MenuModule,
    PanelMenuModule,
    TabViewModule,
    TreeModule,
    CodeHighlighterModule,
  ],
  declarations: [
    PResponsive,
  ],
  providers: [
    CarService,
    CountryService,
    NodeService,
  ],
})
export class PResponsiveModule {
}
