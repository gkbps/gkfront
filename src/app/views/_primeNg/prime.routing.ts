import { Prime } from './prime.component';
import { Prime00 } from './components/prime00';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Prime,
    children: [
      { path: 'prime', component: Prime00 },
      { path: 'prime00', component: Prime00 },
      { path: 'prime01', loadChildren: './components/prime01/prime01.module#Prime01Module' },
      { path: 'prime02', loadChildren: './components/prime02/prime02.module#Prime02Module' },
      { path: 'prime03', loadChildren: './components/prime03/prime03.module#Prime03Module' },
      { path: 'prime04', loadChildren: './components/prime04/prime04.module#Prime04Module' },
      { path: 'prime05', loadChildren: './components/prime05/prime05.module#Prime05Module' },
      { path: 'prime06', loadChildren: './components/prime06/prime06.module#Prime06Module' },
      { path: 'prime07', loadChildren: './components/prime07/prime07.module#Prime07Module' },
      { path: 'prime08', loadChildren: './components/prime08/prime08.module#Prime08Module' },
      { path: 'prime09', loadChildren: './components/prime09/prime09.module#Prime09Module' },
      { path: 'prime10', loadChildren: './components/prime10/prime10.module#Prime10Module' },
      { path: 'prime11', loadChildren: './components/prime11/prime11.module#Prime11Module' },
      { path: 'prime12', loadChildren: './components/prime12/prime12.module#Prime12Module' },
      // { path: 'prime99', loadChildren: './components/prime99/prime99.module#Prime99Module' },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
