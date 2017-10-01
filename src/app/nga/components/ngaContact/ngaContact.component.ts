import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'nga-contact',
  templateUrl: './ngaContact.html',
  // styleUrls: ['./individualNav.scss'],
})
export class NgaContact implements OnInit {
  @Input() formEditable: boolean = false;
  @Input() item: number;
  @Input('formGroup') public contactItem: FormGroup;

  @Output() itemEvent: EventEmitter<any> = new EventEmitter();
  editStatus: boolean = false;

  constructor() {
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
}
