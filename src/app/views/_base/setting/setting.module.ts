import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Internal
import { NgaModule } from '../../../nga/nga.module';
import { SettingComponent } from './setting.component';
import { SettingRoutingModule } from './setting-routing.module';

import { EventService } from './event.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    SettingRoutingModule,
  ],
  declarations: [ SettingComponent ],
  providers: [
    EventService,
  ],
})
export class SettingModule { }
