import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MineComponent } from './mine.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { OutboxComponent } from './components/outbox/outbox.component';

const routes: Routes = [
  {
    path: '',
    component: MineComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'mine101',
        component: InboxComponent,
        data: {
          title: 'Inbox'
        }
      },
      {
        path: 'mine102',
        component: OutboxComponent,
        data: {
          title: 'Outbox'
        }
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MineRoutingModule {}
