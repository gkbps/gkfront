import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

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
  selector: 'gk-change-dashboard',
  templateUrl: './gkChangeDashboard.html',
  styleUrls: ['gkChangeDashboard.scss']
})
export class GkChangeDashboardComponent implements OnInit {
  @Input() header: string = '';
  @Input() lastUpdate: string = '';
  @Input() data: any[];

  langSubscription: Subscription;

  constructor(
    private router: Router,
  ) {

  }

  ngOnInit () {
  }

}
