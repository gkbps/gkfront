import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[gkNavProfile]'
})
export class GkNavProfileDirective {
  constructor() { }

  // Check if element has class
  private hasClass(target: any, elementClassName: string) {
    return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
  }

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    console.log($event);

    var element = document.getElementById('profile-item');
    if (this.hasClass(element, 'active-topmenuitem')) {
      element.classList.remove('active-topmenuitem');
    } else {
      element.classList.add('active-topmenuitem');
      document.getElementById('setting-item').classList.remove('active-topmenuitem');
      document.getElementById('message-item').classList.remove('active-topmenuitem');
      document.getElementById('notification-item').classList.remove('active-topmenuitem');
    }
  }
}

@Directive({
  selector: '[gkNavProfileMobile]'
})
export class GkNavProfileMobileDirective {
  constructor() { }

  // Check if element has class
  private hasClass(target: any, elementClassName: string) {
    return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
  }

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    console.log($event);

    var element = document.getElementById('profile-item-mobile');
    if (this.hasClass(element, 'topbar-menu-active')) {
      element.classList.remove('topbar-menu-active');
    } else {
      element.classList.add('topbar-menu-active');
      document.getElementById('setting-item').classList.remove('active-topmenuitem');
      document.getElementById('message-item').classList.remove('active-topmenuitem');
      document.getElementById('notification-item').classList.remove('active-topmenuitem');
    }
  }
}

@Directive({
  selector: '[gkNavSetting]'
})
export class GkNavSettingDirective {
  constructor() { }

  // Check if element has class
  private hasClass(target: any, elementClassName: string) {
    return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
  }

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    console.log($event);

    var element = document.getElementById('setting-item');
    if (this.hasClass(element, 'active-topmenuitem')) {
      element.classList.remove('active-topmenuitem');
    } else {
      element.classList.add('active-topmenuitem');
      document.getElementById('profile-item').classList.remove('active-topmenuitem');
      document.getElementById('language-item').classList.remove('active-topmenuitem');
      document.getElementById('message-item').classList.remove('active-topmenuitem');
      document.getElementById('notification-item').classList.remove('active-topmenuitem');
    }
  }
}

@Directive({
  selector: '[gkNavLanguage]'
})
export class GkNavLanguageDirective {
  constructor() { }

  // Check if element has class
  private hasClass(target: any, elementClassName: string) {
    return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
  }

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    console.log($event);

    var element = document.getElementById('language-item');
    if (this.hasClass(element, 'active-topmenuitem')) {
      element.classList.remove('active-topmenuitem');
    } else {
      element.classList.add('active-topmenuitem');
      document.getElementById('profile-item').classList.remove('active-topmenuitem');
      document.getElementById('setting-item').classList.remove('active-topmenuitem');
      document.getElementById('message-item').classList.remove('active-topmenuitem');
      document.getElementById('notification-item').classList.remove('active-topmenuitem');
    }
  }
}

@Directive({
  selector: '[gkNavMessage]'
})
export class GkNavMessageDirective {
  constructor() { }

  // Check if element has class
  private hasClass(target: any, elementClassName: string) {
    return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
  }

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    console.log($event);

    var element = document.getElementById('message-item');
    if (this.hasClass(element, 'active-topmenuitem')) {
      element.classList.remove('active-topmenuitem');
    } else {
      element.classList.add('active-topmenuitem');
      document.getElementById('profile-item').classList.remove('active-topmenuitem');
      document.getElementById('setting-item').classList.remove('active-topmenuitem');
      document.getElementById('language-item').classList.remove('active-topmenuitem');
      document.getElementById('notification-item').classList.remove('active-topmenuitem');
    }
  }
}

@Directive({
  selector: '[gkNavNotification]'
})
export class GkNavNotificationDirective {
  constructor() { }

  // Check if element has class
  private hasClass(target: any, elementClassName: string) {
    return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
  }

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    console.log($event);

    var element = document.getElementById('notification-item');
    if (this.hasClass(element, 'active-topmenuitem')) {
      element.classList.remove('active-topmenuitem');
    } else {
      element.classList.add('active-topmenuitem');
      document.getElementById('profile-item').classList.remove('active-topmenuitem');
      document.getElementById('setting-item').classList.remove('active-topmenuitem');
      document.getElementById('language-item').classList.remove('active-topmenuitem');
      document.getElementById('message-item').classList.remove('active-topmenuitem');
    }
  }
}

export const GK_NAV_DROPDOWN_DIRECTIVES = [
    GkNavProfileDirective,
    GkNavSettingDirective,
    GkNavLanguageDirective,
    GkNavMessageDirective,
    GkNavNotificationDirective,
    GkNavProfileMobileDirective,
];
