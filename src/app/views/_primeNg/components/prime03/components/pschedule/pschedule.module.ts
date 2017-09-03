// Components
import { PSchedule } from './pschedule.component';
import { routing } from './pschedule.routing';

// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';

import { EventService } from './event.service';

import { ScheduleModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';
import { CheckboxModule } from 'primeng/primeng';

// To use Schedule need
// jquery
// moment
// fullcalendar
// installed and configured in package.json and .angular-cli.json

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    routing,

    ScheduleModule,
    DialogModule,
    CalendarModule,
    CheckboxModule,
  ],
  declarations: [
    PSchedule,
  ],
  providers: [
    EventService,
  ],
})
export class PScheduleModule {
}
