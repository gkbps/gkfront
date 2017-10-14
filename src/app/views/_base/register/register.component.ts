import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { EmailValidator, EqualPasswordsValidator } from '../../../nga/validators';
import { UserService } from '../../../services';
import { LocalStorageService, SecurityService } from '../../../nga/services';

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  public form: FormGroup;
  public firstname: AbstractControl;
  public lastname: AbstractControl;
  public username: AbstractControl;
  public email: AbstractControl;
  public password: AbstractControl;
  public repeatPassword: AbstractControl;
  public passwords: FormGroup;
  public token: AbstractControl;
  public submitted: boolean = false;

  model: any = {};
  loading = false;
  message: string;

  constructor(private router: Router,
    private userService: UserService,
    // private alertService: AlertService,
    private fb: FormBuilder,
    private securityService: SecurityService,
    private translate: TranslateService,
    private localStorage: LocalStorageService,
  ) {
    // Initialize language
    translate.use(localStorage.getLang());
    // get token
    this.model.token = this.securityService.getToken();

    this.form = fb.group(
      {
        'firstname': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
        'lastname': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'username': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
        'passwords': fb.group(
          {
            'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
          },
          {
            validator: EqualPasswordsValidator.validate('password', 'repeatPassword'),
          },
        ),
        'token': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    });

    this.firstname = this.form.controls['firstname'];
    this.lastname = this.form.controls['lastname'];
    this.username = this.form.controls['username'];
    this.email = this.form.controls['email'];
    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];
    this.token = this.form.controls['token'];
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      // console.log(values);
      this.register();
    }
  }

  // Add by HTD
  register() {
    this.loading = true;
    this.securityService.setToken(this.model.token);
    console.log(this.model);
    this.userService.create(this.model)
        .subscribe(
            data => {
                this.router.navigate(['/login']);
            },
            error => {
                this.message = error._body;
                this.loading = false;
            });
    }

}
