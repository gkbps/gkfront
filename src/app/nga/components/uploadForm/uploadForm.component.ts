import { Component, OnInit, Input, ViewChild, ElementRef, Renderer } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';

import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { AppConfig } from '../../../app.config';
import { SecurityService, TcodeService, LocalStorageService, LanguageService } from '../../services';

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
  url: string;

  langSubscription: Subscription;

  constructor(
    private config: AppConfig,
    private http: Http,
    private el: ElementRef,
    private router: Router,
    private securityService: SecurityService,
    private tcodeService: TcodeService,
    private renderer: Renderer,
    private localStorage: LocalStorageService,
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
    this.action = this.tcodeService.extractAction(this.tcode);
    this.url = this.config.apiUrl + '/' + this.module + '/upload/';
    // console.log(this.url);
  }

  bringFileSelector(): boolean {
    this.renderer.invokeElementMethod(this._fileUpload.nativeElement, 'click');
    return false;
  }

  fileChanged(event) {
    console.log(event.target.files[0]);
    this._inputText.nativeElement.value = event.target.files[0].name;
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
         .map((res: Response) => res.json())
         .subscribe(
           (success) => {
             alert(success.message);
             // Or emit an event to tell user or trigger data processing
             console.log(success);
           },
           (error) => {
             alert(error._body);
             // Or emit an event to tell user
             console.log(error);
           },
           () => { console.log('Subscription is completed'); },
         );
     }
  }

  ngOnDestroy() {
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
  }

}
