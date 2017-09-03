import { NgModule } from '@angular/core';
import { ComposeComponent } from './compose.component';
import { ComposeRoutingModule } from './compose-routing.module';

@NgModule({
  imports: [
    ComposeRoutingModule,
  ],
  declarations: [ ComposeComponent ]
})
export class ComposeModule { }
