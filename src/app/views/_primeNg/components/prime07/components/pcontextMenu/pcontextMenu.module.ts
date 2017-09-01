// Components
import { PContextMenu } from './pcontextMenu.component';

import { routing } from './pcontextMenu.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { ContextMenuModule, MenuItem } from 'primeng/primeng';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    ContextMenuModule,
  ],
  declarations: [
    PContextMenu,
  ],
  providers: [
  ],
})
export class PContextMenuModule {
}
