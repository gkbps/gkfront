import { NgModule } from '@angular/core';

import { GeneralComponent } from './general.component';
import { GeneralRoutingModule } from './general-routing.module';

@NgModule({
  imports: [
    GeneralRoutingModule,    
  ],
  declarations: [ GeneralComponent ]
})
export class GeneralModule { }
