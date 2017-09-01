// Components
import { Prime08 } from './prime08.component';

import { PDoughnutModule } from './components/pdoughnut/pdoughnut.module';
import { PPolarAreaModule } from './components/ppolarArea/ppolarArea.module';
import { PRadarModule } from './components/pradar/pradar.module';
import { PBarModule } from './components/pbar/pbar.module';
import { PLineModule } from './components/pline/pline.module';
import { PPieModule } from './components/ppie/ppie.module';

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
    
    

    PDoughnutModule,
    PPolarAreaModule,
    PRadarModule,
    PBarModule,
    PLineModule,
    PPieModule,
  ],
  declarations: [
    Prime08,

  ],
  providers: [
  ],
})
export class Prime08Module {
}
