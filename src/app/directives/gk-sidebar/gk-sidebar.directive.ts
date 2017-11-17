import { Directive, HostListener } from '@angular/core';
import {
  StateManagementService,
  LocalStorageService
} from '../../nga/services';

/**
 * Directive for managing wrapper status or overlay of Anchor in gk-logo
 */
@Directive({
  selector: '[gkLayoutToggler]',
})
export class GkLayourTogglerDirective {
  constructor(
    private stateManagementService: StateManagementService,
    private localStorageService: LocalStorageService,
  ) { }

  // Check if element has class
  private hasClass(target: any, elementClassName: string) {
    return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
  }

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    //console.log('click Anchor');
    var element = document.getElementById("layout-wrapper");
    if (this.hasClass(element, 'layout-wrapper-static')) {
      this.stateManagementService.wrapperStatic(false);
      this.localStorageService.setWrapperStatic(false);
      // element.classList.remove('layout-wrapper-static');
    } else {
      this.stateManagementService.wrapperStatic(true);
      this.localStorageService.setWrapperStatic(true);
      // element.classList.add('layout-wrapper-static');
    }
    $event.stopPropagation();
    return false; // prevent a href automatically open
  }

  @HostListener('mouseenter', ['$event'])
  onmouseenter($event: any) {
    $event.preventDefault();
    //console.log('mouseEnter Anchor');
    var element = document.getElementById("layout-sidebar");
    if (this.hasClass(element, 'layout-sidebar-active')) {
      this.stateManagementService.wrapperStaticForSidebar(true);
      // element.classList.add('layout-wrapper-static');
    }
    $event.stopPropagation();
    return false; // prevent a href automatically open
  }

  @HostListener('mouseleave', ['$event'])
  onmouseleave($event: any) {
    $event.preventDefault();
    //console.log('mouseLeave Anchor');
    var element = document.getElementById("layout-sidebar");
    if (this.hasClass(element, 'layout-sidebar-active')) {
      this.stateManagementService.wrapperStaticForSidebar(false);
      // element.classList.remove('layout-wrapper-static');
    }
    $event.stopPropagation();
    return false; // prevent a href automatically open
  }
}

/**
* Directive for managing wrapper status or overlay of Sidebar in gk-sidebar
* Sidebar Toggler in Web mode.
*/
@Directive({
  selector: '[gkSidebarToggler]'
})
export class GkSidebarTogglerDirective {
  constructor(
    private stateManagementService: StateManagementService
  ) { }

  // Check if element has class
  private hasClass(target: any, elementClassName: string) {
    return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
  }

  @HostListener('mouseenter', ['$event'])
  onmouseenter($event: any) {
    $event.preventDefault();
    //console.log('mouseEnter Sidebar');
    var element = document.getElementById("layout-sidebar");
    if (!this.hasClass(element, 'layout-sidebar-active')) {
      this.stateManagementService.sidebarActive(true);
      // element.classList.add('layout-sidebar-active');
    }
    $event.stopPropagation();
    return false; // prevent a href automatically open
  }

  @HostListener('mouseleave', ['$event'])
  onmouseleave($event: any) {
    $event.preventDefault();
    //console.log('mouseLeave Sidebar');
    var element = document.getElementById("layout-sidebar");
    if (this.hasClass(element, 'layout-sidebar-active')) {
      this.stateManagementService.sidebarActive(false);
      // element.classList.remove('layout-sidebar-active');
    }
    $event.stopPropagation();
    return false; // prevent a href automatically open
  }
}

/**
* Directive for managing active status of Sidebar in gk-sidebar
* Sidebar Toggler in Mobile mode.
*/
@Directive({
  selector: '[gkSidebarTogglerMobile]'
})
export class GkSidebarTogglerMobileDirective {
  constructor() { }

  // Check if element has class
  private hasClass(target: any, elementClassName: string) {
    return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
  }

  @HostListener('mouseenter', ['$event'])
  onmouseenter($event: any) {
    $event.preventDefault();
    //console.log('mouseEnter Sidebar Mobile');
    var element = document.getElementById("layout-sidebar");
    if (!this.hasClass(element, 'layout-sidebar-active')) {
      element.classList.add('layout-sidebar-active');
    }
    $event.stopPropagation();
    return false; // prevent a href automatically open
  }

  @HostListener('mouseleave', ['$event'])
  onmouseleave($event: any) {
    $event.preventDefault();
    //console.log('mouseLeave Sidebar Mobile');
    var element = document.getElementById("layout-sidebar");
    if (this.hasClass(element, 'layout-sidebar-active')) {
      element.classList.remove('layout-sidebar-active');
    }
    $event.stopPropagation();
    return false; // prevent a href automatically open
  }
}

export const GK_SIDEBAR_TOGGLE_DIRECTIVES = [
    GkLayourTogglerDirective,
    GkSidebarTogglerDirective,
    GkSidebarTogglerMobileDirective
];
