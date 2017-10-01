// External
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Internal
import { AuthGuard, TcodeGuard } from '../../../../nga/services';

import { GkClnComponent } from './gkcln.component';
import { GkCln00Component } from './components/gkcln00';
import { GkCln01Component } from './components/gkcln01';

import { GkCln10Component } from './components/gkcln10';
import { GkCln11Component } from './components/gkcln11';
import { GkCln12Component } from './components/gkcln12';
import { GkCln13Component } from './components/gkcln13';

import { GkCln20Component } from './components/gkcln20';
import { GkCln30Component } from './components/gkcln30';
import { GkCln40Component } from './components/gkcln40';
import { GkCln50Component } from './components/gkcln50';
import { GkCln60Component } from './components/gkcln60';
import { GkCln80Component } from './components/gkcln80';
import { GkCln90Component } from './components/gkcln90';

const routes: Routes = [
  {
    path: '',
    component: GkClnComponent,
    data: {
      title: 'GK Clients'
    },
    children: [
      {
        path: '',
        redirectTo: 'gkcln00',
        pathMatch: 'full',
      },
      {
        path: 'gkcln00',
        component: GkCln00Component,
        canActivate: [TcodeGuard],
        data: {
          title: 'Main'
        }
      },
      {
        path: 'gkcln01',
        component: GkCln01Component,
        canActivate: [TcodeGuard],
        data: {
          title: 'Master List'
        }
      },
      {
        path: 'gkcln10',
        component: GkCln10Component,
        canActivate: [TcodeGuard],
        data: {
          title: 'Individual'
        }
      },
      {
        path: 'gkcln11',
        component: GkCln11Component,
        canActivate: [TcodeGuard],
        data: {
          title: 'Create'
        }
      },
      {
        path: 'gkcln12',
        component: GkCln12Component,
        canActivate: [TcodeGuard],
        data: {
          title: 'Read'
        }
      },
      {
        path: 'gkcln12/:id',
        component: GkCln12Component,
        canActivate: [TcodeGuard],
        data: {
          title: 'Read'
        }
      },
      {
        path: 'gkcln13',
        component: GkCln13Component,
        canActivate: [TcodeGuard],
        data: {
          title: 'Update'
        }
      },
      {
        path: 'gkcln13/:id',
        component: GkCln13Component,
        canActivate: [TcodeGuard],
        data: {
          title: 'Update'
        }
      },
      {
        path: 'gkcln20',
        component: GkCln20Component,
        canActivate: [TcodeGuard],
        data: {
          title: 'Collective'
        }
      },
      {
        path: 'gkcln30',
        component: GkCln30Component,
        canActivate: [TcodeGuard],
        data: {
          title: 'Processes'
        }
      },
      {
        path: 'gkcln40',
        component: GkCln40Component,
        canActivate: [TcodeGuard],
        data: {
          title: 'Services'
        }
      },
      {
        path: 'gkcln50',
        component: GkCln50Component,
        canActivate: [TcodeGuard],
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'gkcln60',
        component: GkCln60Component,
        canActivate: [TcodeGuard],
        data: {
          title: 'Reports'
        }
      },
      {
        path: 'gkcln80',
        component: GkCln80Component,
        canActivate: [TcodeGuard],
        data: {
          title: 'Setting'
        }
      },
      {
        path: 'gkcln90',
        component: GkCln90Component,
        canActivate: [TcodeGuard],
        data: {
          title: 'Administration'
        }
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GkClnRoutingModule {}
