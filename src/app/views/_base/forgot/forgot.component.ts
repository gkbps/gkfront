import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { EmailValidator, EqualPasswordsValidator } from '../../../nga/validators';
import { UserService } from '../../../services';
import {
  SecurityService,
  LocalStorageService,
  BodyBackgroundService,
  StateManagementService,
} from '../../../nga/services';

@Component({
  templateUrl: 'forgot.component.html',
  styleUrls: ['../login/fixed.scss']
})
export class ForgotComponent {

  public form: FormGroup;
  public email: AbstractControl;
  public token: AbstractControl;
  public submitted: boolean = false;

  model: any = {};
  loading = false;
  message: string;

  constructor(
      private router: Router,
      private userService: UserService,
      private fb: FormBuilder,
      private securityService: SecurityService,
      private translate: TranslateService,
      private localStorage: LocalStorageService,
      private bodyBackgroundService:BodyBackgroundService,
      private stateManagementService:StateManagementService,
  ) {
    // Initialize state
    this.stateManagementService.initState("login-body");

    // Initialize language
    translate.use(localStorage.getLang());

    // get token
    this.model.token = this.securityService.getToken();

    this.form = fb.group(
      {
        'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
        'token': [this.model.token, Validators.compose([Validators.required, Validators.minLength(4)])],
    });

    this.email = this.form.controls['email'];
    this.token = this.form.controls['token'];
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      // console.log(values);
      this.forgot();
    }
  }

  // Add by HTD
  forgot() {
    this.loading = true;
    this.securityService.setToken(this.model.token);
    console.log(this.model);
    this.userService.forgot(this.model)
        .subscribe(
            data => {
              console.log(data);
              this.router.navigate(['/login']);
            },
            error => {
                this.message = error._body;
                this.loading = false;
            });
    }

}
