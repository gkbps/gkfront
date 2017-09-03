import { NgModule } from '@angular/core';
import { InboxComponent } from './inbox.component';
import { InboxRoutingModule } from './inbox-routing.module';

@NgModule({
  imports: [
    InboxRoutingModule,
  ],
  declarations: [ InboxComponent ]
})
export class InboxModule { }
