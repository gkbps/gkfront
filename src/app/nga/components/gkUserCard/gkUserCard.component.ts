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
  selector: 'gk-user-card',
  templateUrl: './gkUserCard.html',
  styleUrls: ['gkUserCard.scss']
})
export class GkUserCardComponent implements OnInit {
  @Input() bgImage: string ='';
  @Input() userAvatar: string ='';
  @Input() userName: string ='';
  @Input() data: any[];

  langSubscription: Subscription;

  constructor(
    private router: Router,
  ) {

  }

  ngOnInit () {
  }

}
