// Components
import { PTree } from './ptree.component';

import { routing } from './ptree.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { TreeModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { ContextMenuModule } from 'primeng/primeng';
import { TreeDragDropService } from 'primeng/primeng';

import { NodeService } from './node.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    TreeModule,
    GrowlModule,
    ButtonModule,
    ContextMenuModule,
  ],
  declarations: [
    PTree,
  ],
  providers: [
    TreeDragDropService,
    NodeService,
  ],
})
export class PTreeModule {
}
