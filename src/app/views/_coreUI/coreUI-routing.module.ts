import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'CoreUI'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'components',
        loadChildren: './components/components.module#ComponentsModule'
      },
      {
        path: 'icons',
        loadChildren: './icons/icons.module#IconsModule'
      },
      {
        path: 'widgets',
        loadChildren: './widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'charts',
        loadChildren: './chartjs/chartjs.module#ChartJSModule'
      },
      {
        path: 'invoice',
        loadChildren: './invoice/invoice.module#InvoiceModule'
      },
      {
        path: 'inbox',
        loadChildren: './email/inbox/inbox.module#InboxModule'
      },
      {
        path: 'message',
        loadChildren: './email/message/message.module#MessageModule'
      },
      {
        path: 'compose',
        loadChildren: './email/compose/compose.module#ComposeModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreUIRoutingModule {}
