import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Internal
import { NgaModule } from '../../nga/nga.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

import { EventService } from './event.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    HomeRoutingModule,
  ],
  declarations: [ HomeComponent ],
  providers: [
    EventService,
  ],
})
export class HomeModule { }
