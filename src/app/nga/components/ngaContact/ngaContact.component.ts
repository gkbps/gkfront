// External
import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';
import { TranslateService } from '@ngx-translate/core';

// Internal
import { LocalStorageService, LanguageService } from '../../services';

@Component({
  selector: 'nga-contact',
  templateUrl: './ngaContact.html',
  // styleUrls: ['./individualNav.scss'],
})
export class NgaContact implements OnInit, OnDestroy {
  @Input() formEditable: boolean = false;
  @Input() item: number;
  @Input('formGroup') public contactItem: FormGroup;

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

  removeContact(){
    this.itemEvent.emit({ action: 'removeContact', itemIndex: this.item });
  }

  updateContact() {
    this.itemEvent.emit({ action: 'updateContact', itemIndex: this.item });
  }

  setControlStatus() {
    if (this.formEditable) {
      this.contactItem.controls.name.enable();
      this.contactItem.controls.title.enable();
      this.contactItem.controls.phone.enable();
      this.contactItem.controls.email.enable();
    } else {
      this.contactItem.controls.name.disable();
      this.contactItem.controls.title.disable();
      this.contactItem.controls.phone.disable();
      this.contactItem.controls.email.disable();
    }
  }

  ngOnDestroy() {
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
  }

}
