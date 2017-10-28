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
import { GkCln14Component } from './components/gkcln14';
import { GkCln15Component } from './components/gkcln15';
import { GkCln16Component } from './components/gkcln16';
import { GkCln17Component } from './components/gkcln17';
import { GkCln18Component } from './components/gkcln18';

import { GkCln20Component } from './components/gkcln20';
import { GkCln21Component } from './components/gkcln21';
import { GkCln22Component } from './components/gkcln22';
import { GkCln23Component } from './components/gkcln23';

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
          title: 'View'
        }
      },
      {
        path: 'gkcln12/:id',
        component: GkCln12Component,
        canActivate: [TcodeGuard],
        data: {
          title: 'View'
        }
      },
      {
        path: 'gkcln13',
        component: GkCln13Component,
        canActivate: [TcodeGuard],
        data: {
          title: 'Edit'
        }
      },
      {
        path: 'gkcln13/:id',
        component: GkCln13Component,
        canActivate: [TcodeGuard],
        data: {
          title: 'Edit'
        }
      },
      {
        path: 'gkcln14',
        component: GkCln14Component,
        canActivate: [TcodeGuard],
        data: {
          title: 'Disable'
        }
      },
      {
        path: 'gkcln14/:id',
        component: GkCln14Component,
        canActivate: [TcodeGuard],
        data: {
          title: 'Disable'
        }
      },
      {
        path: 'gkcln15',
        component: GkCln15Component,
        canActivate: [TcodeGuard],
        data: {
          title: 'Disable'
        }
      },
      {
        path: 'gkcln15/:id',
        component: GkCln15Component,
        canActivate: [TcodeGuard],
        data: {
          title: 'Disable'
        }
      },
      {
        path: 'gkcln16',
        component: GkCln16Component,
        canActivate: [TcodeGuard],
        data: {
          title: 'Enable'
        }
      },
      {
        path: 'gkcln16/:id',
        component: GkCln16Component,
        canActivate: [TcodeGuard],
        data: {
          title: 'Enable'
        }
      },
      {
        path: 'gkcln17',
        component: GkCln17Component,
        canActivate: [TcodeGuard],
        data: {
          title: 'Unmark'
        }
      },
      {
        path: 'gkcln17/:id',
        component: GkCln17Component,
        canActivate: [TcodeGuard],
        data: {
          title: 'Unmark'
        }
      },
      {
        path: 'gkcln18',
        component: GkCln18Component,
        canActivate: [TcodeGuard],
        data: {
          title: 'Delete'
        }
      },
      {
        path: 'gkcln18/:id',
        component: GkCln18Component,
        canActivate: [TcodeGuard],
        data: {
          title: 'Delete'
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
        path: 'gkcln21',
        component: GkCln21Component,
        canActivate: [TcodeGuard],
        data: {
          title: 'Upload'
        }
      },
      {
        path: 'gkcln22',
        component: GkCln22Component,
        canActivate: [TcodeGuard],
        data: {
          title: 'Download'
        }
      },
      {
        path: 'gkcln23',
        component: GkCln23Component,
        canActivate: [TcodeGuard],
        data: {
          title: 'Upsert'
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
