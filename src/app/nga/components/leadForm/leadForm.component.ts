import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';
import { TranslateService } from '@ngx-translate/core';

import {
  SecurityService,
  TcodeService,
  NavigationService,
  LocalStorageService,
  ObjectService,
  LanguageService
} from '../../services';

@Component({
  selector: 'lead-form',
  templateUrl: './leadForm.html',
})
export class LeadForm implements OnInit, OnDestroy {
  //@Input() tcode: string = '';

  currentUser: any;
  workingLge: any;
  workingYear: any;
  userRights: string[];

  myForm: FormGroup;

  langSubscription: Subscription;

  constructor(
    private router: Router,

    private securityService: SecurityService,
    private navigationService: NavigationService,
    private tcodeService: TcodeService,
    private localStorage: LocalStorageService,
    private objectService: ObjectService,
    private _fb: FormBuilder,
    private translate: TranslateService,
    private languageService: LanguageService,
  ) {
    // Initialize language
    this.translate.use(localStorage.getLang());

    this.langSubscription = this.languageService.getLanguage()
      .subscribe(lang => {
        translate.use(lang);
      });
  }

  ngOnInit () {
    this.navigationService.trackHistory();
    this.currentUser = this.securityService.getCurrentUser();
    this.workingLge = this.tcodeService.decode(this.currentUser.awt[0]);
    this.workingYear = this.tcodeService.decode(this.currentUser.awt[1]);
    console.log(this.workingYear);
    this.initForm();
  }

  private initForm() {
    this.myForm = this._fb.group({
      workingLge: [{value: this.workingLge, disabled: true}, [Validators.required]],
      workingYear: [{value: this.workingYear, disabled: true}, [Validators.required]],
      id: ['', [Validators.required]],
    });
  }

  execute(): void {
    const urlComponents = this.router.url.split('/');
    console.log(urlComponents);
    const url = '/' + urlComponents[1] + '/' + urlComponents[2] + '/' + this.myForm.controls['id'].value;
    console.log(url);
    this.router.navigate([url]);
  }

  ngOnDestroy() {
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
  }

}
