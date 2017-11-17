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

// import { SmoothScrollToDirective, SmoothScrollDirective } from "ng2-smooth-scroll";

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

// Containers
import {
  GkFullLayoutComponent,
  GkSimpleLayoutComponent,
  GkBlankFullLayoutComponent,
  GkMainFullLayoutComponent,
  GkSettingFullLayoutComponent,
  GkMineFullLayoutComponent,
  GkmFullLayoutComponent,
  PrimeNGFullLayoutComponent,
} from './containers';

const APP_CONTAINERS = [
  GkFullLayoutComponent,
  GkSimpleLayoutComponent,
  GkBlankFullLayoutComponent,
  GkMainFullLayoutComponent,
  GkSettingFullLayoutComponent,
  GkMineFullLayoutComponent,
  GkmFullLayoutComponent,
  PrimeNGFullLayoutComponent,
];

// Components
import {
  GkLogoComponent,
  GkSidebarComponent,
  GkSidebar1Component,
  GkSidebarMenuComponent,
  GkHeaderComponent,
  GkBreadcrumbsComponent,
  GkWorkingComponent,
  GkAside,
  GkFooterComponent,
} from './components';

const APP_COMPONENTS = [
  GkLogoComponent,
  GkSidebarComponent,
  GkSidebar1Component,
  GkSidebarMenuComponent,
  GkHeaderComponent,
  GkBreadcrumbsComponent,
  GkWorkingComponent,
  GkAside,
  GkFooterComponent,
];

// Directives
import {
  GK_NAV_DROPDOWN_DIRECTIVES,
  GK_SIDEBAR_TOGGLE_DIRECTIVES,

  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  SIDEBAR_TOGGLE_DIRECTIVES
} from './directives';

const APP_DIRECTIVES = [
  GK_NAV_DROPDOWN_DIRECTIVES,
  GK_SIDEBAR_TOGGLE_DIRECTIVES,

  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  SIDEBAR_TOGGLE_DIRECTIVES,
];

// Import 3rd party components
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { TabsModule } from 'ngx-bootstrap/tabs';
// import { ChartsModule } from 'ng2-charts/ng2-charts';

import { TranslateService } from '@ngx-translate/core';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    // SmoothScrollToDirective,
	  // SmoothScrollDirective,
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

    PerfectScrollbarModule,

    // BsDropdownModule.forRoot(),
    // TabsModule.forRoot(),
    // ChartsModule,

    // PrimeNgModule.forRoot(),
    NgaModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    AppConfig,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
})
export class AppModule { }
