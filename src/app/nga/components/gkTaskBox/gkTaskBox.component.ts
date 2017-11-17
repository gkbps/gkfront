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
  selector: 'gk-task-box',
  templateUrl: './gkTaskBox.html',
  styleUrls: ['./gkTaskBox.scss']
})
export class GkTaskBoxComponent implements OnInit {
  @Input() style: string = 'task-box-1';
  @Input() header: string = '';
  @Input() text: string = '';
  @Input() status: string = '';
  @Input() members: string[];

  langSubscription: Subscription;

  constructor(
    private router: Router,
  ) {

  }

  ngOnInit () {
  }

}
