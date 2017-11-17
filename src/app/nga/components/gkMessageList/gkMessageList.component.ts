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
  selector: 'gk-message-list',
  templateUrl: './gkMessageList.html',
  styleUrls: ['gkMessageList.scss']
})
export class GkMessageListComponent implements OnInit {
  @Input() header: string = '';
  @Input() messageList: any[];

  langSubscription: Subscription;

  constructor(
    private router: Router,
  ) {

  }

  ngOnInit () {
  }

}
