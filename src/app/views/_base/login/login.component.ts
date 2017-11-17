import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { TranslateService } from '@ngx-translate/core';

import {
  AuthenticationService,
  SecurityService,
  LocalStorageService,
  BodyBackgroundService,
  ThemeService,
  StateManagementService,
} from '../../../nga/services';

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['./fixed.scss']
})
export class LoginComponent {

  public form: FormGroup;
  public username: AbstractControl;
  public password: AbstractControl;
  public token: AbstractControl;
  public submitted: boolean = false;

  model: any = {};
  loading = false;
  returnUrl: string;
  message: string;

  constructor(
    private localStorageService: LocalStorageService,
    private translate: TranslateService,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private fb: FormBuilder,
    private securityService: SecurityService,
    private bodyBackgroundService:BodyBackgroundService,
    private themeService: ThemeService,
    private stateManagementService:StateManagementService,
  ) {
    // Initialize state
    stateManagementService.initState("login-body");
    themeService.changeLayout(localStorageService.getLayout());

    // Initialize language
    translate.use(localStorageService.getLang());

    // get token
    this.model.token = this.securityService.getToken();

    // reset login status
    this.securityService.logOut();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';

    this.form = fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'token': [this.model.token, Validators.compose([Validators.required, Validators.minLength(4)])],
    });

    this.username = this.form.controls['username'];
    this.password = this.form.controls['password'];
    this.token = this.form.controls['token'];
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      // console.log(values);
      this.login();
    }
  }

  login() {
    this.loading = true;
    this.securityService.setToken(this.model.token);
    this.authenticationService.login(this.model.username, this.model.password, this.model.token)
      .subscribe(
        data => {
          // console.log(this.returnUrl);
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.message = error._body;
          this.loading = false;
        });
    }

}
