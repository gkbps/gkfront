import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SecurityService, TcodeService, NavigationService, ObjectService } from '../../services';

@Component({
  selector: 'lead-form',
  templateUrl: './leadForm.html',
})
export class LeadForm implements OnInit {
  //@Input() tcode: string = '';

  currentUser: any;
  workingYear: any;
  userRights: string[];

  myForm: FormGroup;

  constructor(
    private router: Router,

    private securityService: SecurityService,
    private navigationService: NavigationService,
    private tcodeService: TcodeService,
    private objectService: ObjectService,
    private _fb: FormBuilder,
  ) { }

  ngOnInit () {
    this.navigationService.trackHistory();
    this.currentUser = this.securityService.getCurrentUser();
    this.workingYear = this.tcodeService.decode(this.currentUser.awt[1]);
    console.log(this.workingYear);
    this.initForm();
  }

  private initForm() {
    this.myForm = this._fb.group({
      workingYear: [this.workingYear, [Validators.required]],
      id: ['', [Validators.required]],
    });
  }

  private execute(): void {
    //this.gkCommonService.setLocalStorage('workingLge', this.myForm.controls['lge'].value);
    const urlComponents = this.router.url.split('/');
    console.log(urlComponents);
    const url = '/' + urlComponents[1] + '/' + urlComponents[2] + '/' + this.myForm.controls['id'].value;
    console.log(url);
    this.router.navigate([url]);
  }
}
