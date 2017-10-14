// External
import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';
import { TranslateService } from '@ngx-translate/core';

// Internal
import { LocalStorageService, LanguageService } from '../../services';

@Component({
  selector: 'nga-address',
  templateUrl: './ngaAddress.html',
  styleUrls: ['./ngaAddress.scss'],
})
export class NgaAddress implements OnInit, OnDestroy {
  @Input() formEditable: boolean = false;
  @Input() item: number;
  @Input('formGroup') public addressItem: FormGroup;

  @Output() itemEvent: EventEmitter<any> = new EventEmitter();
  editStatus: boolean = false;

  langSubscription: Subscription;

  constructor(
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
    this.setControlStatus();
  }

  removeAddress(){
    this.itemEvent.emit({ action: 'removeAddress', itemIndex: this.item });
  }

  /*
  updateAddress() {
    this.itemEvent.emit({ action: 'updateAddress', itemIndex: this.item });
  }
  */

  setControlStatus() {
    if (this.formEditable) {
      this.addressItem.controls.type.enable();
      this.addressItem.controls.line1.enable();
      this.addressItem.controls.line2.enable();
      this.addressItem.controls.line3.enable();
      this.addressItem.controls.line4.enable();
      this.addressItem.controls.line5.enable();
    } else {
      this.addressItem.controls.type.disable();
      this.addressItem.controls.line1.disable();
      this.addressItem.controls.line2.disable();
      this.addressItem.controls.line3.disable();
      this.addressItem.controls.line4.disable();
      this.addressItem.controls.line5.disable();
    }
  }

  ngOnDestroy() {
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
  }

}
