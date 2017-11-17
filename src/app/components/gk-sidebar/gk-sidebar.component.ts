import { Component, Input, OnInit } from '@angular/core';
//declare var jQuery: any;

@Component({
  selector: 'gk-sidebar',
  templateUrl: './gk-sidebar.component.html'
})
export class GkSidebarComponent implements OnInit {

  @Input() menu:any;
  selectedMenu: any;
  selectedSubMenu1: any;
  selectedSubMenu2: any;
  selectedSubMenu3: any;

  constructor() {

  }

  ngOnInit() {
    //jQuery(".nano").nanoScroller();
    // jQuery(".nano").nanoScroller({ sliderMaxHeight: 120 });
    //jQuery(".nano-pane").css("display", "block");
    //jQuery(".nano-pane").css("display","block");
    // jQuery(".nano-slider").css("display","block");
  }
  
  selectMenu($event, item) {
    $event.preventDefault();
    //console.log($event);
    this.selectedMenu = (this.selectedMenu === item ? null : item);
    this.selectedSubMenu1 = null;
    this.selectedSubMenu2 = null;
    this.selectedSubMenu3 = null;
    event.stopPropagation(); // To prevent event escalate to upper menu level
    this.executeCallback(event, item);
    return false; // To prevent href work automatically
  }

  isActiveMenu(item) {
    return this.selectedMenu === item;
  }

  selectSubMenu1($event, subitem1) {
    $event.preventDefault();
    this.selectedSubMenu1 = (this.selectedSubMenu1 === subitem1 ? null : subitem1);
    this.selectedSubMenu2 = null;
    this.selectedSubMenu3 = null;
    event.stopPropagation(); // To prevent event escalate to upper menu level
    this.executeCallback(event, subitem1);
    return false; // To prevent href work automatically
  }

  isActiveSubMenu1(subitem1) {
    return this.selectedSubMenu1 === subitem1;
  }

  selectSubMenu2($event, subitem2) {
    $event.preventDefault();
    this.selectedSubMenu2 = (this.selectedSubMenu2 === subitem2 ? null : subitem2);
    this.selectedSubMenu3 = null;
    event.stopPropagation(); // To prevent event escalate to upper menu level
    this.executeCallback(event, subitem2);
    return false; // To prevent href work automatically
  }

  isActiveSubMenu2(subitem2) {
    return this.selectedSubMenu2 === subitem2;
  }

  selectSubMenu3($event, subitem3) {
    $event.preventDefault();
    this.selectedSubMenu3 = (this.selectedSubMenu3 === subitem3 ? null : subitem3);
    event.stopPropagation(); // To prevent event escalate to upper menu level
    this.executeCallback(event, subitem3);
    return false; // To prevent href work automatically
  }

  isActiveSubMenu3(subitem3) {
    return this.selectedSubMenu3 === subitem3;
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
