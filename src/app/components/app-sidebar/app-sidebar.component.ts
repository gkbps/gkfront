// External
import { Component, OnInit } from '@angular/core';

// Internal
import { AppConfig } from '../../app.config';
import { SecurityService } from '../../nga/services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.scss'],
})

export class AppSidebar implements OnInit {
  username;
  title;
  avatar;

  constructor (
    private securityService: SecurityService,
    private config: AppConfig,
  ) { }

  ngOnInit(): void {
    const user = this.securityService.getCurrentUser();
    // console.log(user);
    this.username = user.firstName.toUpperCase() + ' ' + user.lastName.toUpperCase();
    this.title = user.title;

    const rootPath = this.config.apiUrl;
    this.avatar = rootPath + '/repo/' + this.securityService.getToken() + '/users/' + user.avatar;
    // console.log(this.avatar);
  }
}
