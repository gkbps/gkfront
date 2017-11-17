import { Injectable } from '@angular/core';

@Injectable()
export class BodyBackgroundService {

  constructor( ) {
  }

  clearBodyBackground() {
    // Change background
    let element = document.getElementsByTagName("body")[0];
    element.removeAttribute("class");
  }

  setBodyBackground(strClass: string) {
    let element = document.getElementsByTagName("body")[0];
    element.removeAttribute("class");
    element.className = strClass;
  }

}
