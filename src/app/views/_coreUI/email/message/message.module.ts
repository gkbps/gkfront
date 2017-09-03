import { NgModule } from '@angular/core';
import { MessageComponent } from './message.component';
import { MessageRoutingModule } from './message-routing.module';

@NgModule({
  imports: [
    MessageRoutingModule,
  ],
  declarations: [ MessageComponent ]
})
export class MessageModule { }
