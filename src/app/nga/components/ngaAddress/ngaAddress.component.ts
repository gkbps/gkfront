import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'nga-address',
  templateUrl: './ngaAddress.html',
  styleUrls: ['./ngaAddress.scss'],
})
export class NgaAddress implements OnInit {
  @Input() formEditable: boolean = false;
  @Input() item: number;
  @Input('formGroup') public addressItem: FormGroup;

  @Output() itemEvent: EventEmitter<any> = new EventEmitter();
  editStatus: boolean = false;

  constructor() {
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

}
