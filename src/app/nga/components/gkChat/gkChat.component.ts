import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
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
  selector: 'gk-chat',
  templateUrl: './gkChat.html',
  styleUrls: ['gkChat.scss']
})
export class GkChatComponent implements OnInit {
  @Input() header: string = 'Chat';
  @Input() chatData: string[];

  user: any;
  userAvatar: string = 'assets/images/avatar.png';
    
  langSubscription: Subscription;

  constructor(
    private router: Router,
    private securityService: SecurityService,
    private changeDetectorRef: ChangeDetectorRef
  ) {

  }

  ngOnInit () {
    this.user = this.securityService.getCurrentUser();
    console.log(this.user);
  }

  ngAfterViewChecked() {
    this.changeDetectorRef.detectChanges();
  }

}
