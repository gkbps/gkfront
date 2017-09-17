import { ForgotRoutingModule } from './forgot-routing.module';
import { ForgotComponent } from './forgot.component';
import { UserService } from '../../../services';

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
    ForgotRoutingModule,
  ],
  declarations: [
    ForgotComponent,
  ],
  providers: [
    UserService,
  ],
})
export class ForgotModule {}
