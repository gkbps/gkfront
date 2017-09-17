import { NgModule } from '@angular/core';

import { MineComponent } from './mine.component';
import { MineRoutingModule } from './mine-routing.module';

import { InboxComponent } from './components/inbox/inbox.component';
import { OutboxComponent } from './components/outbox/outbox.component';

@NgModule({
  imports: [
    MineRoutingModule,
  ],
  declarations: [
    InboxComponent,
    OutboxComponent,
    MineComponent,
  ]
})
export class MineModule { }
