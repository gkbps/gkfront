import { AuthGuard, TcodeGuard } from './nga/services';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
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

export const routes: Routes = [
  {
    path: '',
    component: GkSimpleLayoutComponent,
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
    component: GkMainFullLayoutComponent,
    canActivateChild: [AuthGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'home',
        loadChildren: './views/home/home.module#HomeModule'
      },
    ]
  },
  {
    path: '',
    component: GkSettingFullLayoutComponent,
    canActivateChild: [AuthGuard],
    data: {
      title: 'System'
    },
    children: [
      {
        path: 'setting',
        loadChildren: './views/_base/setting/setting.module#SettingModule'
      }
    ]
  },
  {
    path: '',
    component: GkBlankFullLayoutComponent,
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
    component: GkMainFullLayoutComponent,
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
    component: GkMineFullLayoutComponent,
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
    component: GkmFullLayoutComponent,
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
    component: GkmFullLayoutComponent,
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
    component: GkmFullLayoutComponent,
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
    component: GkmFullLayoutComponent,
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
    component: GkSimpleLayoutComponent,
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
    path: 'prime',
    component: PrimeNGFullLayoutComponent, // SimpleLayout,
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
