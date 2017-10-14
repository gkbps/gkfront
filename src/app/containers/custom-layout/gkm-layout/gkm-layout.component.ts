import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { LocalStorageService, NavigationService } from '../../../nga/services';

@Component({
  selector: 'gkm-layout',
  templateUrl: './gkm-layout.component.html'
})
export class GkmLayout implements OnInit {

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

  constructor(
    private translate: TranslateService,
    private localStorage: LocalStorageService,
    private navigationService: NavigationService,
  ){
    // Initialize language
    translate.use(localStorage.getLang());
  }

  ngOnInit(): void {}  
}
