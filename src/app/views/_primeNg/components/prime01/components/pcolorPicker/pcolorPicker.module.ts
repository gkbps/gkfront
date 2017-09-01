// Components
import { PColorPicker } from './pcolorPicker.component';

import { routing } from './pcolorPicker.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';

import { ColorPickerModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    routing,
    ColorPickerModule,
  ],
  declarations: [
    PColorPicker,
  ],
  providers: [
  ],
})
export class PColorPickerModule {
}
