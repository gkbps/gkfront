// Components
import { PAutoComplete } from './pautoComplete.component';

import { routing } from './pautoComplete.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';

import { AutoCompleteModule } from 'primeng/primeng';
import { CountryService } from './country.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    routing,

    AutoCompleteModule,
  ],
  declarations: [
    PAutoComplete,
  ],
  providers: [
    CountryService,
  ],
})
export class PAutoCompleteModule {
}
