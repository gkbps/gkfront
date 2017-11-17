import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams, ResponseContentType } from '@angular/http';
import { Router } from '@angular/router';
import { Message } from 'primeng/primeng';

import { TranslateService } from '@ngx-translate/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/do';
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
// import * as FileSaver from 'file-saver';
// import * as StreamSaver from 'streamsaver';

@Component({
  selector: 'download-form',
  templateUrl: './downloadForm.html',
  //styleUrls: ['./gkFileUpload.scss'],
})
export class DownloadForm implements OnInit {
  @Input() tcode: string;
  @Input() module: string;

  @Input() defaultValue: string = '';
  @ViewChild('inputText') public _inputText: ElementRef;

  action: string = '';
  url: string;

  msgs: Message[] = [];

  alertType: string;

  langSubscription: Subscription;
  alertSubscription: Subscription;

  constructor(
    private config: AppConfig,
    private http: Http,
    private router: Router,
    private securityService: SecurityService,
    private tcodeService: TcodeService,
    private apiResultHandlingService: APIResultHandlingService,
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
    this.url = this.config.apiUrl + '/' + this.module + '/download';
    // console.log(this.url);
    this.alertType = this.localStorage.getAlertType();
    console.log(this.alertType);
  }


  /* To get value and navigate the link */
  execute(): void {
    console.log(this.url);
    console.log(this._inputText.nativeElement.value);

    let params = new URLSearchParams();
    params.append('filename', this._inputText.nativeElement.value);

    let reqOptions = new RequestOptions({
      headers: this.securityService.jwt().headers,
      search: params
    });
    console.log(reqOptions);

    this.http.get(this.url, reqOptions) //this.securityService.jwt()
      .subscribe(
        (response: Response) => {
          const rootPath = this.config.apiUrl;

          const url = rootPath + '/repo/download/' + JSON.parse(response['_body']).filename;
          console.log(url);
          window.open(url);
          /*
          console.log(response.headers);
          var mediaType = 'text/csv; charset=utf-8';
          var blob = new Blob([response['_body']], {type: mediaType});
          var filename = this._inputText.nativeElement.value +'.csv';
          FileSaver.saveAs(blob, filename);
          console.log('success');
          */
        },
        (error) => {
          // alert(error._body);
          // Or emit an event to tell user
          this.handleAPIReturn(error);
          console.log(error);
        },
        () => { console.log('Subscription is completed'); },
      );
  }

  handleAPIReturn(result) {
    this.apiResultHandlingService.processAPIResult(result)
      .then((msg)=>{
        console.log(msg);
        this.msgs = [];
        this.msgs.push(msg);
        setTimeout(()=> { this.msgs =[]; }, 15000);
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
