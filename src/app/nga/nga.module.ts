import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  SharedModule,

  // Input
  DropdownModule,
  MultiSelectModule,
  ChipsModule,
  AutoCompleteModule,
  InputTextModule,
  InputMaskModule,
  PasswordModule,
  InputTextareaModule,
  EditorModule,

  CheckboxModule,
  RadioButtonModule,
  InputSwitchModule,
  TriStateCheckboxModule,
  RatingModule,

  // Advance input
  CalendarModule,
  ColorPickerModule,
  ListboxModule,
  SliderModule,
  SpinnerModule,
  ProgressBarModule,
  InplaceModule,

  // Button
  ToggleButtonModule,
  SelectButtonModule,
  ButtonModule,
  SplitButtonModule,

  // Data presentation
  CarouselModule,
  DataTableModule,
  DataGridModule,
  DataListModule,
  DataScrollerModule,
  GMapModule,
  OrderListModule,
  OrganizationChartModule,
  PaginatorModule,
  PickListModule,
  ScheduleModule,
  TreeModule,
  TreeTableModule,
  TreeNode,
  GalleriaModule,

  // Grouping
  AccordionModule,
  FieldsetModule,
  PanelModule,
  TabViewModule,
  ToolbarModule,
  BreadcrumbModule,

  // Menu
  ContextMenuModule,
  MenuItem,
  MegaMenuModule,
  MenuModule,
  MenubarModule,
  PanelMenuModule,
  SlideMenuModule,
  StepsModule,
  TabMenuModule,
  TieredMenuModule,

  // Dialog
  DialogModule,
  ConfirmDialogModule,
  LightboxModule,
  OverlayPanelModule,
  TooltipModule,
  BlockUIModule,

  FileUploadModule,

  ChartModule,

  GrowlModule,
  MessagesModule,

  // Advance
  DragDropModule,
  CaptchaModule,
  CodeHighlighterModule,
  DeferModule,
  TerminalModule,

} from 'primeng/primeng';

const PRIMENG_MODULES = [
  SharedModule,

  // Input
  DropdownModule,
  MultiSelectModule,
  ChipsModule,
  AutoCompleteModule,
  InputTextModule,
  InputMaskModule,
  PasswordModule,
  InputTextareaModule,
  EditorModule,

  CheckboxModule,
  RadioButtonModule,
  InputSwitchModule,
  TriStateCheckboxModule,
  RatingModule,

  // Advance input
  CalendarModule,
  ColorPickerModule,
  ListboxModule,
  SliderModule,
  SpinnerModule,
  ProgressBarModule,
  InplaceModule,

  // Button
  ToggleButtonModule,
  SelectButtonModule,
  ButtonModule,
  SplitButtonModule,

  // Data presentation
  CarouselModule,
  DataTableModule,
  DataGridModule,
  DataListModule,
  DataScrollerModule,
  GMapModule,
  OrderListModule,
  OrganizationChartModule,
  PaginatorModule,
  PickListModule,
  ScheduleModule,
  TreeModule,
  TreeTableModule,
  GalleriaModule,

  // Grouping
  AccordionModule,
  FieldsetModule,
  PanelModule,
  TabViewModule,
  ToolbarModule,
  BreadcrumbModule,

  // Menu
  ContextMenuModule,
  MegaMenuModule,
  MenuModule,
  MenubarModule,
  PanelMenuModule,
  SlideMenuModule,
  StepsModule,
  TabMenuModule,
  TieredMenuModule,

  // Dialog
  DialogModule,
  ConfirmDialogModule,
  LightboxModule,
  OverlayPanelModule,
  TooltipModule,
  BlockUIModule,

  FileUploadModule,

  ChartModule,

  GrowlModule,
  MessagesModule,

  // Advance
  DragDropModule,
  CaptchaModule,
  CodeHighlighterModule,
  DeferModule,
  TerminalModule,
];

import {
  TreeDragDropService,
  ConfirmationService
} from 'primeng/primeng';

import { TerminalService } from 'primeng/components/terminal/terminalservice';

const PRIMENG_SERVICES = [
  TreeDragDropService,
  ConfirmationService,
  TerminalService,
];

import { AppTranslationModule } from '../app.translation.module';

import {
  NavBoard,
  LeadForm,
  IndividualNav,
  NgaAddress,
  NgaContact,
} from './components';
// import { } from './directives';
// import { } from './pipes';

const NGA_COMPONENTS = [
  NavBoard,
  LeadForm,
  IndividualNav,
  NgaAddress,
  NgaContact,
];

const NGA_DIRECTIVES = [
];

const NGA_PIPES = [
];

import {
  AuthenticationService,
  AuthGuard,
  TcodeGuard,
  SecurityService,
  TcodeService,
  LocalStorageService,
  NavigationService,
  ArrayService,
  ObjectService,
  PaginationService,
  APIResultHandlingService,
  LanguageService,
  SettingService,
} from './services';

const NGA_SERVICES = [
  AuthenticationService,
  AuthGuard,
  TcodeGuard,
  SecurityService,
  TcodeService,
  LocalStorageService,
  NavigationService,
  ArrayService,
  ObjectService,
  PaginationService,
  APIResultHandlingService,
  LanguageService,
  SettingService,
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

    ...PRIMENG_MODULES,
  ],
  exports: [
    AppTranslationModule,
    ...NGA_PIPES,
    ...NGA_DIRECTIVES,
    ...NGA_COMPONENTS,
    ...PRIMENG_MODULES,
  ],
})
export class NgaModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: NgaModule,
      providers: [
        ...NGA_VALIDATORS,
        ...NGA_SERVICES,
        ...PRIMENG_SERVICES,
      ],
    };
  }
}
