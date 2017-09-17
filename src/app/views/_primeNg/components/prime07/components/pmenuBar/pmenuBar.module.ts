// Components
import { PMenuBar } from './pmenuBar.component';

import { routing } from './pmenuBar.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';

import { MenubarModule, MenuItem, ButtonModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,

    routing,
    MenubarModule,
    ButtonModule,
  ],
  declarations: [
    PMenuBar,
  ],
  providers: [
  ],
})
export class PMenuBarModule {
}
