import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppTranslationModule } from '../app.translation.module';

// import { } from './components';
// import { } from './directives';
// import { } from './pipes';



const NGA_COMPONENTS = [
];

const NGA_DIRECTIVES = [
];

const NGA_PIPES = [
];

import {
  AuthenticationService,
  AuthGuard,
  TCodeGuard,
  SecurityService,
  TCodeService,
  LocalStorageService,
  NavigationService,
  ArrayService,
  ObjectService,
  PaginationService,
} from './services';

const NGA_SERVICES = [
  AuthenticationService,
  AuthGuard,
  TCodeGuard,
  SecurityService,
  TCodeService,
  LocalStorageService,
  NavigationService,
  ArrayService,
  ObjectService,
  PaginationService,

];

import {
  EmailValidator,
  EqualPasswordsValidator,
} from './validators';

const NGA_VALIDATORS = [
  EmailValidator,
  EqualPasswordsValidator,
];

@NgModule({
  declarations: [
    ...NGA_PIPES,
    ...NGA_DIRECTIVES,
    ...NGA_COMPONENTS,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppTranslationModule,
  ],
  exports: [
    ...NGA_PIPES,
    ...NGA_DIRECTIVES,
    ...NGA_COMPONENTS,
  ],
})
export class NgaModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: NgaModule,
      providers: [
        ...NGA_VALIDATORS,
        ...NGA_SERVICES,
      ],
    };
  }
}
