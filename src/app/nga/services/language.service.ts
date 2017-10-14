import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { LocalStorageService } from './localStorage.service';

@Injectable()
export class LanguageService {
  private lang = new Subject<any>();

  constructor(
   private localStorage: LocalStorageService,
  ){ }

  changeLanguage(lang: string) {
    this.localStorage.setLang(lang);
    this.lang.next(lang);
  }

  getLanguage(): Observable<any> {
    return this.lang.asObservable();
  }
}
