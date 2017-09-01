import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  FullLayout,
  SimpleLayout
} from './containers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: SimpleLayout,
    data: {
      title: 'Base'
    },
    children: [
      {
        path: '',
        loadChildren: './views/_base/pages.module#PagesModule',
      }
    ]
  },
  {
    path: 'gate',
    component: FullLayout,
    data: {
      title: 'Gates'
    },
    children: [
      {
        path: '',
        loadChildren: './views/_core/general/general.module#GeneralModule'
      },
    ]
  },
  {
    path: 'coreui',
    component: FullLayout,
    data: {
      title: 'CoreUI'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/_coreUI/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'components',
        loadChildren: './views/_coreUI/components/components.module#ComponentsModule'
      },
      {
        path: 'icons',
        loadChildren: './views/_coreUI/icons/icons.module#IconsModule'
      },
      {
        path: 'widgets',
        loadChildren: './views/_coreUI/widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'charts',
        loadChildren: './views/_coreUI/chartjs/chartjs.module#ChartJSModule'
      }
    ]
  },
  {
    path: 'prime',
    component: FullLayout,
    data: {
      title: 'PrimeNg'
    },
    children: [
      {
        path: '',
        loadChildren: './views/_primeNg/prime.module#PrimeModule'
      },
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
