import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
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
    RegisterRoutingModule,
  ],
  declarations: [
    RegisterComponent,
  ],
  providers: [
    UserService,
  ],
})
export class RegisterModule {}
