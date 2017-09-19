import { NgModule } from '@angular/core';

import { MineComponent } from './mine.component';
import { MineRoutingModule } from './mine-routing.module';

import { InboxComponent } from './components/inbox/inbox.component';
import { OutboxComponent } from './components/outbox/outbox.component';

import { DraftComponent } from './components/draft/draft.component';
import { InProgressComponent } from './components/inProgress/inProgress.component';
import { DocumentingComponent } from './components/documenting/documenting.component';
import { FinishedComponent } from './components/finished/finished.component';

@NgModule({
  imports: [
    MineRoutingModule,
  ],
  declarations: [
    InboxComponent,
    OutboxComponent,

    DraftComponent,
    InProgressComponent,
    DocumentingComponent,
    FinishedComponent,
    
    MineComponent,
  ]
})
export class MineModule { }
