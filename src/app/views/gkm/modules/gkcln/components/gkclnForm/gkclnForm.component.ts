// External
import { Component, OnInit, OnChanges, SimpleChanges, EventEmitter, Input, Output, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Message } from 'primeng/primeng';

import { Subscription } from 'rxjs/Subscription';
import { TranslateService } from '@ngx-translate/core';

// Internal
import {
  SecurityService,
  TcodeService,
  NavigationService,
  ObjectService,
  APIResultHandlingService,
  LocalStorageService,
  LanguageService,
  SettingService,
} from '../../../../../../nga/services';

import { GkClientService } from '../../../../../../services/gkClient.service';

@Component({
  selector: 'gkclient-form',
  templateUrl: './gkclnForm.html',
  styleUrls: ['./gkclnForm.scss'],
})

export class GkClnForm implements OnInit, OnChanges, OnDestroy {

  @Input() tcode: any;

  id: string = '';
  client: any;
  /* To make form visible when
   * action = 11 for creation
   * action = 12 or 13 AND API return status 200
   */
  hasClient: boolean = false;

  prefix: string = '';
  action: string = '';
  formEditable: boolean = false;        // Action 11 and 13 allow form to be editted

  myForm: FormGroup;

  msgs: Message[] = [];

  alertType: string;

  langSubscription: Subscription;
  alertSubscription: Subscription;

  constructor(
    private http: Http,
    private router: Router,
    private activatedRoute: ActivatedRoute,

    private gkClientService: GkClientService,
    private securityService: SecurityService,
    private navigationService: NavigationService,
    private tcodeService: TcodeService,
    private objectService: ObjectService,
    private apiResultHandlingService: APIResultHandlingService,
    private _fb: FormBuilder,

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

  ngOnChanges(changes: SimpleChanges) {
    /*
    if (changes['id']) {
      console.log(this.id);
      this.initBasicModelThenGetData();
      //this.buildForm();
    }
    */
  }

  ngOnInit() {
    this.parseTcode();
    this.initBasicModelThenGetData();
    // console.log(this.myForm);

    this.alertType = this.localStorage.getAlertType();
    this.silentAction();
  }

  private parseTcode(){
    this.prefix = this.tcodeService.extractPrefix(this.tcode);
    this.action = this.tcodeService.extractAction(this.tcode);
    this.formEditable = this.tcodeService.formEditable(this.tcode);
    if (this.action == '11') {
      this.hasClient = true;
    }
    //console.log(this.prefix, this.action, this.formEditable);
  }

  private initBasicModelThenGetData() {
    // To early interact with API restful server
    this.activatedRoute.params.subscribe((params: Params) => {
        if (params['id']) {
          this.id = params['id'];
          this.getData(this.id);
        }
      });

    this.initBasicModel();
    // console.log(this.id);
    // console.log(this.client);
  }

  initBasicModel() {
    this.client =  {
      name: '',
      addresses: [],
      contacts: [],
      clientDb: '',
      solutions: [],
      remarks: [],
    }
    this.buildForm();
  }

  getData(id: string): void {
    this.gkClientService.findById(id)
      .subscribe(
        result => {
          //console.log(result);
          this.client = result.data;
          this.hasClient = true;    // 12 & 13 hasClient = API status 200
          this.buildForm();         // rebuild form after fetching client data
        },
        error => {
          this.handleAPIReturn(error);
        }
      );
  }

  /****************************************************************************
   * Form Construction
   ****************************************************************************/
  private buildForm(): void {
    this.initForm();
    this.setControlStatus();

    if (!this.client) return;

    // Data Block 1 - Addresses
    const hasAddresses: boolean = this.objectService.hasProp(this.client, 'addresses');
    if (hasAddresses) {
      const countAddresses: number = this.client.addresses.length;
      // console.log(`Number of nested addresses: ${countAddresses}`);
      for (let addressCounter = 0; addressCounter < countAddresses; addressCounter++) {
        let addressControl = <FormArray> this.myForm.controls['addresses'];
        addressControl.push(this.addAddressWithData(this.client.addresses[addressCounter]));
      }
    }

    // Data Block 2 - Contacts
    const hasContacts: boolean = this.objectService.hasProp(this.client, 'contacts');
    if (hasContacts) {
      const countContacts: number = this.client.contacts.length;
      // console.log(`Number of nested contacts: ${countContacts}`);
      for (let contactCounter = 0; contactCounter < countContacts; contactCounter++) {
        let contactControl = <FormArray> this.myForm.controls['contacts'];
        contactControl.push(this.addContactWithData(this.client.contacts[contactCounter]));
      }
    }

  }

  private initForm() {
    this.myForm = this._fb.group({
      _id: [
        {
          value: this.client._id,
          disabled: false
        }
      ],
      name: [this.client.name,
        [
          Validators.required,
          Validators.minLength(5),
        ]
      ],
      addresses: this._fb.array([]),
      contacts: this._fb.array([]),
      clientDb: [this.client.clientDb,
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9]*$'),       //Alphanumeric
          Validators.minLength(3),
        ]
      ],
      solutions: this._fb.array([]),
      remarks: this._fb.array([]),
      status1: [this.client.status1],
      status2: [this.client.status2],
    });
  }

  setControlStatus() {
    //console.log(this.formEditable);
    if (!this.formEditable) {
      //console.log('disable');
      this.myForm.controls.name.disable();
      this.myForm.controls.clientDb.disable();
    } else {
      //console.log('enable');
      this.myForm.controls.name.enable();
      this.myForm.controls.clientDb.enable();
    }
  }

  /****************************************************************************
   * Addresses
   ****************************************************************************/
  private addAddress() {
    return this._fb.group({
      type: ['',
        [
          Validators.required,
          Validators.minLength(3),
        ]
      ],
      line1: ['',
        [
          Validators.required,
          Validators.minLength(1),
        ]
      ],
      line2: [''],
      line3: [''],
      line4: [''],
      line5: [''],
    });
  }

  private addAddressWithData(addressData: any) {
    return this._fb.group({
      type: [addressData.type,
        [
          Validators.required,
          Validators.minLength(3),
        ]
      ],
      line1: [addressData.line1,
        [
          Validators.required,
          Validators.minLength(1),
        ]
      ],
      line2: [addressData.line2],
      line3: [addressData.line3],
      line4: [addressData.line4],
      line5: [addressData.line5],
    });
  }

  newAddress() {
    const control = <FormArray> this.myForm.controls['addresses'];
    control.push(this.addAddress());
  }

  removeAddress(i: number) {
    const control = <FormArray> this.myForm.controls['addresses'];
    control.removeAt(i);
  }

  /****************************************************************************
   * Contacts
   ****************************************************************************/
  private addContact() {
    return this._fb.group({
      title: ['',
        [
          Validators.required,
          Validators.minLength(1),
        ]
      ],
      name: ['',
        [
          Validators.required,
          Validators.minLength(1),
        ]
      ],

      phone: ['',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),     // Number Only
        ]
      ],
      email: ['',
        [
          Validators.required,
          Validators.email,                  // Email
        ]
      ],
    });
  }

  private addContactWithData(contactData: any) {
    return this._fb.group({
      title: [contactData.title,
        [
          Validators.required,
          Validators.minLength(1),
        ]
      ],
      name: [contactData.name,
        [
          Validators.required,
          Validators.minLength(1),
        ]
      ],

      phone: [contactData.phone,
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
        ]
      ],
      email: [contactData.email,
        [
          Validators.required,
          Validators.email,
        ]
      ],
    });
  }

  newContact() {
    const control = <FormArray> this.myForm.controls['contacts'];
    control.push(this.addContact());
  }

  removeContact(i: number) {
    const control = <FormArray> this.myForm.controls['contacts'];
    control.removeAt(i);
  }

  /****************************************************************************
   * Remark
   ****************************************************************************/
  private addRemark() {
    return this._fb.group({
      remark: [''],
    });
  }

  private addRemarkWithData() {
    return this._fb.group({
      remark: [''],
    });
  }

  newRemark() {
    const control = <FormArray> this.myForm.controls['remarks'];
    control.push(this.addRemark());
  }

  removeRemark(i: number) {
    const control = <FormArray> this.myForm.controls['remarks'];
    control.removeAt(i);
  }

  /****************************************************************************
   * Event Handler
   ****************************************************************************/
  handleEvent($event) {
    console.log($event);
    const addresses = <FormArray> this.myForm.controls['addresses'];
    const contacts = <FormArray> this.myForm.controls['contacts'];
    switch ($event['action']) {
      case 'removeAddress':
        addresses.removeAt($event['itemIndex']);
        break;

      case 'removeContact':
        contacts.removeAt($event['itemIndex']);
        break;

      default:
        break;
    }
  }

  /****************************************************************************
   * Form Action
   ****************************************************************************/
  submitForm() {
    if (this.myForm.valid) {
      const clientData: any = this.myForm['_value'];
      // console.log(clientData);
      this.saveClient(clientData);
    }
  }

  saveClient(client: any) {

    switch (this.action) {
      case '11':
        this.gkClientService.create(this.myForm.value)
          .subscribe(
            result => {
              this.handleAPIReturn(result);
            },
            error => {
              this.handleAPIReturn(error);
            }
          );
        break;

      case '13':
        this.gkClientService.update(this.myForm.value)
          .subscribe(
            result => {
              this.handleAPIReturn(result);
            },
            error => {
              this.handleAPIReturn(error);
            }
          );
        break;

      default:
        break;
    }
  }

  /****************************************************************************
   * Form Silent Action
   ****************************************************************************/
  silentAction() {
    console.log(this.action);
    switch (this.action) {

      case '14':
        this.gkClientService.disable(this.id)
          .subscribe(
            result => {
              this.handleAPIReturn(result);
            },
            error => {
              this.handleAPIReturn(error);
            }
          );
        break;

      case '15':
        this.gkClientService.enable(this.id)
          .subscribe(
            result => {
              this.handleAPIReturn(result);
            },
            error => {
              this.handleAPIReturn(error);
            }
          );
        break;

      case '16':
        console.log('Mark');
        this.gkClientService.mark(this.id)
          .subscribe(
            result => {
              this.handleAPIReturn(result);
            },
            error => {
              this.handleAPIReturn(error);
            }
          );
        break;

      case '17':
        console.log('Unmark');
        this.gkClientService.unmark(this.id)
          .subscribe(
            result => {
              this.handleAPIReturn(result);
            },
            error => {
              this.handleAPIReturn(error);
            }
          );
        break;

      case '18':
        this.gkClientService.delete(this.id)
          .subscribe(
            result => {
              this.handleAPIReturn(result);
            },
            error => {
              this.handleAPIReturn(error);
            }
          );
        break;

      default:
        break;
    }
  }

  handleAPIReturn(result) {
    this.apiResultHandlingService.processAPIResult(result)
      .then((msg)=>{
        if (result.status==201) {
          this.initBasicModel();
        }
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
