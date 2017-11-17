import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import * as $ from 'jquery';

import {
  LocalStorageService,
  BodyBackgroundService
} from '../../../nga/services';

@Component({
  templateUrl: 'intro.html',
  styleUrls: [
    'intro.scss',
  ]
})
export class IntroComponent implements OnInit, OnDestroy {

  constructor(
		private localStorageService: LocalStorageService,
    private bodyBackgroundService: BodyBackgroundService,
		private translate: TranslateService,
  ) {
    bodyBackgroundService.clearBodyBackground();
  }

  public changeLanguage(lang: string) {
		this.localStorageService.setLang(lang);
    this.translate.use(lang);
  }

  ngOnInit(){
    let element = document.getElementsByTagName("body")[0];
    element.classList.add('landing-body');
  }

  ngOnDestroy(){
		let element = document.getElementsByTagName("body")[0];
    element.classList.remove('landing-body');
	}

}
