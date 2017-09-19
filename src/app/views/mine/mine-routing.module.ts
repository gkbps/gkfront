import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MineComponent } from './mine.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { OutboxComponent } from './components/outbox/outbox.component';
import { DraftComponent } from './components/draft/draft.component';
import { InProgressComponent } from './components/inProgress/inProgress.component';
import { DocumentingComponent } from './components/documenting/documenting.component';
import { FinishedComponent } from './components/finished/finished.component';

const routes: Routes = [
  {
    path: '',
    component: MineComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'mine11',
        component: InboxComponent,
        data: {
          title: 'Inbox'
        }
      },
      {
        path: 'mine12',
        component: OutboxComponent,
        data: {
          title: 'Outbox'
        }
      },
      {
        path: 'mine21',
        component: DraftComponent,
        data: {
          title: 'Draft'
        }
      },
      {
        path: 'mine22',
        component: InProgressComponent,
        data: {
          title: 'In Progress'
        }
      },
      {
        path: 'mine23',
        component: DocumentingComponent,
        data: {
          title: 'Documenting'
        }
      },
      {
        path: 'mine24',
        component: FinishedComponent,
        data: {
          title: 'Finished'
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
