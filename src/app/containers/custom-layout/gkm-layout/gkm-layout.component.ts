import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../nga/services/navigation.service';

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
    private navigationService: NavigationService,
  ){ }

  ngOnInit(): void {}

  returnPrevious() {
    this.navigationService.returnPrevious();
  }
}
