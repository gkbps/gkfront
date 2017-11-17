import { Component, Input } from '@angular/core';
import { ThemeService } from '../../nga/services/theme.service';

@Component({
  selector: '[gkSidebarMenu]',
  templateUrl: './gk-sidebar-menu.component.html',
  styleUrls: ['./fixed.scss']
})
export class GkSidebarMenuComponent {

  @Input() menu: any;
  selectedMenu: any;
  selectedSubMenu1: any;
  selectedSubMenu2: any;
  selectedSubMenu3: any;

  constructor(
    private themeService: ThemeService
  ) {
  }

  ngOnInit() {
  }

  selectMenu($event, item) {
    $event.preventDefault();
    this.selectedMenu = (this.selectedMenu === item ? null : item);
    event.stopPropagation(); // To prevent event escalate to upper menu level
    this.executeCallback(event, item);
    return false; // To prevent href work automatically
  }

  executeCallback(event, item) {
    if (typeof item.command == "function") {
      console.log("Callback here");
      item.command(event);
    }
  }

  changeLayout(layout) {

  }

  changeTheme(theme) {

  }
}
