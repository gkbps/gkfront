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
  selector: 'gk-overview-box-header',
  templateUrl: './gkOverviewBoxHeader.html',
  styleUrls: ['gkOverviewBoxHeader.scss']
})
export class GkOverviewBoxHeaderComponent implements OnInit {
  @Input() style: string = 'task-box-1';
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() figure: string = '';

  langSubscription: Subscription;

  constructor(
    private router: Router,
  ) {

  }

  ngOnInit () {
  }

}
