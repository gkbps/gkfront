// Components
import { PInputSwitch } from './pinputSwitch.component';

import { routing } from './pinputSwitch.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { InputSwitchModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,   
    routing,

    InputSwitchModule,
  ],
  declarations: [
    PInputSwitch,
  ],
  providers: [
  ],
})
export class PInputSwitchModule {
}
