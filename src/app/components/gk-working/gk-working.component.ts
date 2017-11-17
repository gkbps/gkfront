import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { SelectItem } from 'primeng/primeng';

import { Subscription } from 'rxjs/Subscription';

import {
  SecurityService,
  LocalStorageService,
  SettingService,
  SessionService
} from '../../nga/services';

@Component({
  selector: 'gk-working',
  templateUrl: './gk-working.component.html',
  styleUrls: ['./fixed.scss'],
})
export class GkWorkingComponent implements OnInit {
  wkBarStatus: boolean = false;
  lges: SelectItem[];
  years: SelectItem[];
  selectedLge: any;
  selectedYear: any;

  wkBarSubscription: Subscription;

  constructor(
    private securityService: SecurityService,
    private localStorage: LocalStorageService,
    private settingService: SettingService,
    private sessionService: SessionService,
  ) { }
  ngOnInit() {
    const user = this.securityService.getCurrentUser();

    this.wkBarSubscription = this.settingService.getWkBarStatus()
      .subscribe(wkBarStatus => {
        this.wkBarStatus = wkBarStatus;
      });
    this.wkBarStatus = this.localStorage.getWkBar();  
    this.selectedLge = this.localStorage.getWkLge();
    this.selectedYear = this.localStorage.getWkYear();

    const thisYear = new Date().getFullYear();

    this.lges = [];
    this.lges.push({label:'Sanofi Aventis', value:'0475' });
    this.lges.push({label:'Sanofi Synthelabor', value: '4247' });
    this.lges.push({label:'Sanofi Vietnam', value: '1028' });

    this.years = [];
    this.years.push({label:'Year ' + thisYear, value: thisYear.toString() });
    this.years.push({label:'Year ' + (thisYear-1), value: (thisYear-1).toString() });
  }

  changeLge() {
    console.log(this.selectedLge);
    this.localStorage.setWkLge(this.selectedLge);
  }

  changeYear() {
    console.log(this.selectedYear);
    this.localStorage.setWkYear(this.selectedYear);
  }

  ngOnDestroy() {
    if (this.wkBarSubscription) {
      this.wkBarSubscription.unsubscribe();
    }

  }

}
