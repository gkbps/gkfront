// Components
import { POrgChart } from './porgChart.component';

import { routing } from './porgChart.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { OrganizationChartModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    OrganizationChartModule,
    GrowlModule,
  ],
  declarations: [
    POrgChart,
  ],
  providers: [
  ],
})
export class POrgChartModule {
}
