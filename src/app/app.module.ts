import { AppConfig } from './app.config';

import { NgaModule } from './nga/nga.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// Containers
import {
  FullLayout,
  SimpleLayout,

  BaseLayout,
  MainLayout,
  MineLayout,
  GkmLayout,
  CoreUILayout,
} from './containers';

const APP_CONTAINERS = [
  FullLayout,
  SimpleLayout,

  BaseLayout,
  MainLayout,
  MineLayout,
  GkmLayout,
  CoreUILayout,
];

// Components
import {
  AppAside,
  AppBreadcrumbs,
  AppFooter,
  AppHeader,
  AppSidebar,
} from './components';

const APP_COMPONENTS = [
  AppAside,
  AppBreadcrumbs,
  AppFooter,
  AppHeader,
  AppSidebar,
];

// Directives
import {
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  SIDEBAR_TOGGLE_DIRECTIVES
} from './directives';

const APP_DIRECTIVES = [
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  SIDEBAR_TOGGLE_DIRECTIVES,
];

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { TranslateService } from '@ngx-translate/core';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,

    // PrimeNgModule.forRoot(),
    NgaModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    AppConfig,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
})
export class AppModule { }
