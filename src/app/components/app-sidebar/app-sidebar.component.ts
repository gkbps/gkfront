import { Component, OnInit } from '@angular/core';
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
  ) { }

  ngOnInit(): void {
    const user = this.securityService.getCurrentUser();
    // console.log(user);
    this.username = user.firstName.toUpperCase() + ' ' + user.lastName.toUpperCase();
    this.title = user.title;
    this.avatar = user.avatar;
  }
}
