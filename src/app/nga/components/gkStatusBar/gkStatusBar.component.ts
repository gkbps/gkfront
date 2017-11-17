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
  selector: 'gk-status-bar',
  templateUrl: './gkStatusBar.html',
  styleUrls: ['gkStatusBar.scss']
})
export class GkStatusBarComponent implements OnInit {
  @Input() header: string = 'Hellow';
  @Input() statusList: string[];

  langSubscription: Subscription;

  constructor(
    private router: Router,
  ) {

  }

  ngOnInit () {
  }

}
