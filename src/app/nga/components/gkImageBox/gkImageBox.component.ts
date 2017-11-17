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
  selector: 'gk-image-box',
  templateUrl: './gkImageBox.html',
  styleUrls: ['gkImageBox.scss']
})
export class GkImageBoxComponent implements OnInit {
  @Input() image: string = '';
  @Input() header: string = '';
  @Input() icon: string = '';

  langSubscription: Subscription;

  constructor(
    private router: Router,
  ) {

  }

  ngOnInit () {
  }

}
