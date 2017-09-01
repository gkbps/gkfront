// Components
import { Prime03 } from './prime03.component';

import { PCarouselModule } from './components/pcarousel/pcarousel.module';
import { PDataListModule } from './components/pdataList/pdataList.module';
import { PDataTableModule } from './components/pdataTable/pdataTable.module';
import { POrderListModule } from './components/porderList/porderList.module';
import { PPaginatorModule } from './components/ppaginator/ppaginator.module';
import { PScheduleModule } from './components/pschedule/pschedule.module';
import { PDataGridModule } from './components/pdataGrid/pdataGrid.module';
import { PDataScrollerModule } from './components/pdataScroller/pdataScroller.module';
import { POrgChartModule } from './components/porgChart/porgChart.module';
import { PGmapModule } from './components/pgmap/pgmap.module';
import { PPickListModule } from './components/ppickList/ppickList.module';
import { PTreeModule } from './components/ptree/ptree.module';
import { PTreeTableModule } from './components/ptreeTable/ptreeTable.module';

// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,         // Require for <router-outlet>
    
    

    PCarouselModule,
    PDataListModule,
    PDataTableModule,
    POrderListModule,
    PPaginatorModule,
    PScheduleModule,
    PDataGridModule,
    PDataScrollerModule,
    POrgChartModule,
    PGmapModule,
    PPickListModule,
    PTreeModule,
    PTreeTableModule,
  ],
  declarations: [
    Prime03,

  ],
  providers: [
  ],
})
export class Prime03Module {
}
