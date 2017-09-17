import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SecurityService } from '../../nga/services/security.service';
import { TCodeService } from '../../nga/services/tcode.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.scss'],
})
export class AppHeader {

  // public disabled = false;
  // public status: {isopen: boolean} = {isopen: false};
  //
  // public toggled(open: boolean): void {
  //   console.log('Dropdown is now: ', open);
  // }
  //
  // public toggleDropdown($event: MouseEvent): void {
  //   $event.preventDefault();
  //   $event.stopPropagation();
  //   this.status.isopen = !this.status.isopen;
  // }

  public tcodeExecution: string = '';

  constructor(
    private securityService: SecurityService,
    private tcodeService: TCodeService,
    private router: Router,
  ) { }

  ngOnInit(
  ): void {}

  public keyDownFunction(event) {
    if (event.keyCode == 13) {
      const url: string = this.tcodeService.urlLead(this.tcodeExecution);
      console.log(url);
      //this.tcodeExecution = '';
      //this.router.navigate([url]);
    }
  }

  public logOut() {
    this.securityService.logOut();
  }
}
