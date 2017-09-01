// Components
import { PTreeTable } from './ptreeTable.component';

import { routing } from './ptreeTable.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { TreeTableModule, TreeNode, SharedModule, GrowlModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    TreeTableModule,
    SharedModule,
    GrowlModule,
  ],
  declarations: [
    PTreeTable,
  ],
  providers: [
  ],
})
export class PTreeTableModule {
}
