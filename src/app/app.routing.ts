import { AuthGuard, TcodeGuard } from './nga/services';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  FullLayout,
  SimpleLayout,

  BaseLayout,
  MainLayout,
  MineLayout,
  GkmLayout,
  CoreUILayout,
} from './containers';

export const routes: Routes = [
  {
    path: '',
    component: SimpleLayout,
    data: {
      title: 'Public'
    },
    children: [
      {
        path: '',
        redirectTo: 'intro', // mainpage
        pathMatch: 'full',
      },
      {
        path: 'intro',
        loadChildren: './views/_base/intro/intro.module#IntroModule',
      },
      {
        path: 'login',
        loadChildren: './views/_base/login/login.module#LoginModule',
      },
      {
        path: 'register',
        loadChildren: './views/_base/register/register.module#RegisterModule',
      },
      {
        path: 'forgot',
        loadChildren: './views/_base/forgot/forgot.module#ForgotModule',
      },
      {
        path: '401',
        loadChildren: './views/_base/401/401.module#P401Module',
      },
      {
        path: '403',
        loadChildren: './views/_base/403/403.module#P403Module',
      },
      {
        path: '404',
        loadChildren: './views/_base/404/404.module#P404Module',
      },
      {
        path: '500',
        loadChildren: './views/_base/500/500.module#P500Module',
      },
    ]
  },
  {
    path: '',
    component: BaseLayout,
    data: {
      title: 'Base'
    },
    children: [
      {
        path: 'terminal',
        loadChildren: './views/_base/gkTerminal/gkTerminal.module#GkTerminalModule',
      },
    ]
  },
  {
    path: 'main',
    component: MainLayout,
    canActivateChild: [AuthGuard],
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        loadChildren: './views/main/main.module#MainModule'
      },
    ]
  },
  {
    path: 'mine',
    component: MineLayout,
    canActivateChild: [AuthGuard],
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        loadChildren: './views/mine/mine.module#MineModule'
      },
    ]
  },
  {
    path: 'gkm',
    component: GkmLayout,
    canActivateChild: [AuthGuard],
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        loadChildren: './views/gkm/gkm.module#GkmModule'
      },
    ]
  },
  {
    path: 'gkcln',
    component: GkmLayout,
    canActivateChild: [AuthGuard],
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        loadChildren: './views/gkm/modules/gkcln/gkcln.module#GkClnModule'
      },
    ]
  },
  {
    path: 'gksol',
    component: GkmLayout,
    canActivateChild: [AuthGuard],
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        loadChildren: './views/gkm/modules/gksol/gksol.module#GkSolModule'
      },
    ]
  },
  {
    path: 'gktcd',
    component: GkmLayout,
    canActivateChild: [AuthGuard],
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        loadChildren: './views/gkm/modules/gktcd/gktcd.module#GkTcdModule'
      },
    ]
  },
  {
    path: 'system',
    component: SimpleLayout,
    canActivateChild: [AuthGuard],
    data: {
      title: 'System'
    },
    children: [
      {
        path: 'prime',
        loadChildren: './views/_primeNg/prime.module#PrimeModule'
      },
    ]
  },
  {
    path: 'coreui',
    component: CoreUILayout,
    canActivateChild: [AuthGuard],
    data: {
      title: 'Core UI'
    },
    children: [
      {
        path: '',
        loadChildren: './views/_coreUI/coreUI.module#CoreUIModule'
      },
    ]
  },
  {
    path: 'prime',
    component: SimpleLayout,
    canActivateChild: [AuthGuard],
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
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
