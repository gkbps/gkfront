import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from 'primeng/primeng';

import { Subscription } from 'rxjs/Subscription';
import { TranslateService } from '@ngx-translate/core';

import {
  SecurityService,
  TcodeService,
  NavigationService,
  LocalStorageService,
  ObjectService,
  LanguageService
} from '../../services';

@Component({
  selector: 'gk-task-list',
  templateUrl: './gkTaskList.html',
  styleUrls: ['gkTaskList.scss']
})
export class GkTaskListComponent implements OnInit {
  @Input() header: string = 'Hellow';
  @Input() menuItems: MenuItem[];
  @Input() taskList: any;

  langSubscription: Subscription;

  constructor(
    private router: Router,
  ) {

  }

  ngOnInit () {
    console.log(this.menuItems);
  }

}
