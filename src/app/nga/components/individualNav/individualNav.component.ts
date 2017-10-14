// External
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MenuItem, SelectItem } from 'primeng/primeng';

import { Subscription } from 'rxjs/Subscription';
import { TranslateService } from '@ngx-translate/core';

// Internal
import { TcodeService, LocalStorageService, LanguageService } from '../../services';

@Component({
  selector: 'individual-nav',
  templateUrl: './individualNav.html',
  styleUrls: ['./individualNav.scss'],
})
export class IndividualNav implements OnInit, OnDestroy {

  @Input() prefix: string;

  items: MenuItem[];

  langSubscription: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,

    private tcodeService: TcodeService,
    private localStorage: LocalStorageService,
    private translate: TranslateService,
    private languageService: LanguageService,
  ) {
    // Initialize language
    this.translate.use(localStorage.getLang());

    this.langSubscription = this.languageService.getLanguage()
      .subscribe(lang => {
        translate.use(lang);
        this.initNav();
      });
  }

  ngOnInit () {
    this.initNav();
  }

  initNav() {
    this.translate.get(['create', 'view', 'edit', 'disable', 'enable', 'mark', 'unmark', 'delete', 'viewChange'])
      .subscribe((res)=>{

        this.items = [
          {
            label: res.create, icon: 'fa-plus',
            command: (event) => this.executeTCode('11')
          },
          {
            label: res.view, icon: 'fa-search',
            command: (event) => this.executeTCode('12')
          },
          {
            label: res.edit, icon: 'fa-pencil',
            command: (event) => this.executeTCode('13')
          },
          {separator:true},
          {
            label: res.disable, icon: 'fa-bookmark',
            command: (event) => this.executeTCode('14')
          },
          {
            label: res.enable, icon: 'fa-bookmark-o',
            command: (event) => this.executeTCode('15')
          },
          {separator:true},
          {
            label: res.mark, icon: 'fa-flag',
            command: (event) => this.executeTCode('16')
          },
          {
            label: res.unmark, icon: 'fa-flag-o',
            command: (event) => this.executeTCode('17')
          },
          {separator:true},
          {
            label: res.delete, icon: 'fa-trash',
            command: (event) => this.executeTCode('18')
          },
          {separator:true},
          {
            label: res.viewChange, icon: 'fa-files-o',
            command: (event) => this.executeTCode('19')
          },
        ];

      });
  }

  executeTCode(action: string): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const tcode: string = this.prefix + action;
      let id: string ='';

      // Action 11 does not have accompanied id
      if ((action!='11') && (params['id'])) {
        id = params['id'];
      }

      this.tcodeService.executeTCode(tcode, id);
    });
  }

  ngOnDestroy() {
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
  }
  
}
