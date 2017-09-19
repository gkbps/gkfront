import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppTranslationModule } from '../app.translation.module';

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

const PRIMENG_COMPONENTS = [
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

const PRIMENG_SERVICES = [
  TreeDragDropService,
  ConfirmationService
];

@NgModule({
  declarations: [
    // ...PRIMENG_COMPONENTS,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppTranslationModule,
    ...PRIMENG_COMPONENTS,
  ],
  exports: [
    ...PRIMENG_COMPONENTS,
  ],
})
export class PrimeNgModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: PrimeNgModule,
      providers: [
        ...PRIMENG_SERVICES,
      ],
    };
  }
}
