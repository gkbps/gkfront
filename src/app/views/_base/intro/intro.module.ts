import { IntroRoutingModule } from './intro-routing.module';
import { IntroComponent } from './intro.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AppTranslationModule } from '../../app.translation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    // AppTranslationModule,
    ReactiveFormsModule,
    FormsModule,    

    IntroRoutingModule,
  ],
  declarations: [
    IntroComponent,
  ],
  providers: [
  ],
})
export class IntroModule {}
