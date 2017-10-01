import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppTranslationModule } from '../../../../../../app.translation.module';
import { NgaModule } from '../../../../../../nga/nga.module';

import { GkClnForm } from './gkclnForm.component';

import {
  InputTextModule,
  InputTextareaModule,
  CalendarModule,
  AutoCompleteModule,
  ButtonModule,
  SplitButtonModule,
  DropdownModule,
  PasswordModule,
  ListboxModule,
  RadioButtonModule,
  DialogModule,
  PanelModule,
} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppTranslationModule,
    NgaModule,

    InputTextModule,
    InputTextareaModule,
    CalendarModule,
    AutoCompleteModule,
    ButtonModule,
    SplitButtonModule,
    DropdownModule,
    PasswordModule,
    ListboxModule,
    RadioButtonModule,
    DialogModule,
    PanelModule,
  ],
  declarations: [
    GkClnForm,
  ],
  providers: [

  ],
  exports: [
    GkClnForm,
  ],
})
export class GkClnFormModule {
}
