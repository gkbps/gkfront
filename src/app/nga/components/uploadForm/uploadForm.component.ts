import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Renderer
} from '@angular/core';
import { Http, Response } from '@angular/http';
// import { Router } from '@angular/router';
import { Message } from 'primeng/primeng';

import { TranslateService } from '@ngx-translate/core';

// import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
// import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { AppConfig } from '../../../app.config';
import {
  SecurityService,
  TcodeService,
  APIResultHandlingService,
  LocalStorageService,
  LanguageService,
  SettingService,
} from '../../services';

@Component({
  selector: 'upload-form',
  templateUrl: './uploadForm.html',
  //styleUrls: ['./gkFileUpload.scss'],
})
export class UploadForm implements OnInit {
  @Input() tcode: string;
  @Input() module: string;

  @Input() defaultValue: string = '';
  @ViewChild('fileUpload') public _fileUpload: ElementRef;
  @ViewChild('inputText') public _inputText: ElementRef;

  action: string = '';
  actionUrl: string = '';
  url: string;

  msgs: Message[] = [];

  alertType: string;

  langSubscription: Subscription;
  alertSubscription: Subscription;

  constructor(
    private config: AppConfig,
    private http: Http,
    private el: ElementRef,
    // private router: Router,
    private securityService: SecurityService,
    private tcodeService: TcodeService,
    private apiResultHandlingService: APIResultHandlingService,
    private renderer: Renderer,
    private localStorage: LocalStorageService,
    private translate: TranslateService,
    private languageService: LanguageService,
    private settingService: SettingService,
  ) {
    // Initialize language
    this.translate.use(localStorage.getLang());

    this.langSubscription = this.languageService.getLanguage()
      .subscribe(lang => {
        translate.use(lang);
      });

    this.alertSubscription = this.settingService.getAlertType()
      .subscribe(alertType => {
        this.alertType = alertType;
      });
  }

  ngOnInit () {
    this.action = this.tcodeService.extractAction(this.tcode);
    switch (this.action) {
      case '21':
        this.actionUrl = '/upload/';
        break;

      case '23':
        this.actionUrl = '/upsert/';
        break;

      case '24':
        this.actionUrl = '/disableCollective/';
        break;

      case '25':
        this.actionUrl = '/enableCollective/';
        break;

      case '26':
        this.actionUrl = '/markCollective/';
        break;

      case '27':
        this.actionUrl = '/unmarkCollective/';
        break;

      case '28':
        this.actionUrl = '/deleteCollective/';
        break;

      default:
        break;
    }
    this.url = this.config.apiUrl + '/' + this.module + this.actionUrl;
    //this.url = this.config.apiUrl + '/' + this.module + '/upload/';

    // console.log(this.url);
    this.alertType = this.localStorage.getAlertType();
    console.log(this.alertType);
  }

  bringFileSelector(): boolean {
    this.renderer.invokeElementMethod(this._fileUpload.nativeElement, 'click');
    return false;
  }

  fileChanged(event) {
    console.log(event.target.files[0]);
    if (event.target.files[0]) {
      this._inputText.nativeElement.value = event.target.files[0].name;
    }
  }

  /* To get value and navigate the link */
  private execute(): void {
    const files = this._fileUpload.nativeElement.files;
    // const inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#file');
    // const fileCount: number = inputEl.files.length;
    const formData = new FormData();
    if (files.length) {
    // if (fileCount > 0) {
       const file = files[0];
       formData.append('file', file);
       // formData.append('file', inputEl.files.item(0));
       this.http.post(this.url, formData, this.securityService.jwt())
         // Do not map to have full response headers and _body
         // .map((res: Response) => res.json())
         .subscribe(
           (success) => {
             this.handleAPIReturn(success);
           },
           (error) => {
             this.handleAPIReturn(error);
           },
           () => { console.log('Subscription is completed'); },
         );
     }
  }

  handleAPIReturn(result) {
    this.apiResultHandlingService.processAPIResult(result)
      .then((msg)=>{
        console.log(msg);
        this.msgs = [];
        this.msgs.push(msg);
        setTimeout(()=> { this.msgs =[]; }, 20000);
      });
  }

  ngOnDestroy() {
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }

    if (this.alertSubscription) {
      this.alertSubscription.unsubscribe();
    }
  }

}
