import { Component, Input, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import {
  LocalStorageService,
} from '../../../nga/services';

@Component({
  selector: 'gkm-full-layout',
  templateUrl: './gkm-full-layout.component.html'
})
export class GkmFullLayoutComponent implements OnInit {
  menu: any;

  constructor(
    private translate: TranslateService,
    private localStorage: LocalStorageService,
  ) {
    // Initialize language
    translate.use(localStorage.getLang());
  }

  ngOnInit() {
    this.menu = [
      { label: 'backToMain', icon: 'home', routerLink: ['/home'] },
      {
        label: 'client', icon: 'business',
        items: [
          { label: 'overview', icon: 'lightbulb_outline',
            items: [
              { label: 'navBoard', icon: 'view_module', routerLink: ['/gkcln/gkcln00'] },
              { label: 'masterList', icon: 'line_style', routerLink: ['/gkcln/gkcln01'] },
            ]
          },

          { label: 'individual', icon: 'done',
            items: [
              { label: 'navBoard', icon: 'view_module', routerLink: ['/gkcln/gkcln10'] },
              { label: 'create', icon: 'add', routerLink: ['/gkcln/gkcln11'] },
              { label: 'view', icon: 'search', routerLink: ['/gkcln/gkcln12'] },
              { label: 'edit', icon: 'edit', routerLink: ['/gkcln/gkcln13'] },
              { label: 'disable', icon: 'bookmark', routerLink: ['/gkcln/gkcln14'] },
              { label: 'enable', icon: 'bookmark_border', routerLink: ['/gkcln/gkcln15'] },
              { label: 'mark', icon: 'visibility_off', routerLink: ['/gkcln/gkcln16'] },
              { label: 'unmark', icon: 'visibility', routerLink: ['/gkcln/gkcln17'] },
              { label: 'delete', icon: 'delete_forever', routerLink: ['/gkcln/gkcln18'] },
              { label: 'viewChange', icon: 'track_changes', routerLink: ['/gkcln/gkcln19'] },
            ]
          },

          { label: 'collective', icon: 'done_all',
            items: [
              { label: 'navBoard', icon: 'view_module', routerLink: ['/gkcln/gkcln20'] },
              { label: 'upload', icon: 'file_upload', routerLink: ['/gkcln/gkcln21'] },
              { label: 'download', icon: 'file_download', routerLink: ['/gkcln/gkcln22'] },
              { label: 'upsert', icon: 'publish', routerLink: ['/gkcln/gkcln23'] },
              { label: 'inactivate', icon: 'layers_clear', routerLink: ['/gkcln/gkcln24'] },
              { label: 'activate', icon: 'layers', routerLink: ['/gkcln/gkcln25'] },
              { label: 'mark', icon: 'visibility_off', routerLink: ['/gkcln/gkcln26'] },
              { label: 'unmark', icon: 'visibility', routerLink: ['/gkcln/gkcln27'] },
              { label: 'clean', icon: 'delete_sweep', routerLink: ['/gkcln/gkcln28'] },
              { label: 'history', icon: 'history', routerLink: ['/gkcln/gkcln29'] },
            ]
          },

          { label: 'requests', icon: 'cloud',
            items: [
              { label: 'navBoard', icon: 'view_module', routerLink: ['/gkcln/gkcln30'] },
              { label: 'new', icon: 'assignment', routerLink: ['/gkcln/gkcln31'] },
              { label: 'update', icon: 'assignment_late', routerLink: ['/gkcln/gkcln32'] },
              { label: 'debitNote', icon: 'receipt', routerLink: ['/gkcln/gkcln33'] },
              { label: 'invoice', icon: 'receipt', routerLink: ['/gkcln/gkcln34'] },
              { label: 'creditNote', icon: 'receipt', routerLink: ['/gkcln/gkcln35'] },
              { label: 'receipt', icon: 'receipt', routerLink: ['/gkcln/gkcln36'] },
              { label: 'manualEntry', icon: 'description', routerLink: ['/gkcln/gkcln37'] },
            ]
          },

          { label: 'services', icon: 'apps',
            items: [
              { label: 'navBoard', icon: 'view_module', routerLink: ['/gkcln/gkcln40'] },
              { label: 'solutions', icon: 'business_center', routerLink: ['/gkcln/gkcln41'] },
              { label: 'roles', icon: 'group_add', routerLink: ['/gkcln/gkcln42'] },
              { label: 'tcodes', icon: 'device_hub', routerLink: ['/gkcln/gkcln43'] },
            ]
          },

          { label: 'dashboard', icon: 'dashboard',
            items: [
              { label: 'navBoard', icon: 'view_module', routerLink: ['/gkcln/gkcln50'] },
              { label: 'kpis', icon: 'insert_chart', routerLink: ['/gkcln/gkcln51'] },
            ]
          },

          { label: 'reports', icon: 'book',
            items: [
              { label: 'navBoard', icon: 'view_module', routerLink: ['/gkcln/gkcln60'] },
              { label: 'summaryReports', icon: 'chrome_reader_mode', routerLink: ['/gkcln/gkcln61'] },
              { label: 'navBoard', icon: 'view_module', routerLink: ['/gkcln/gkcln70'] },
              { label: 'detailReports', icon: 'chrome_reader_mode', routerLink: ['/gkcln/gkcln71'] },
            ]
          },

          { label: 'properties', icon: 'tune',
            items: [
              { label: 'navBoard', icon: 'view_module', routerLink: ['/gkcln/gkcln80'] },
              { label: 'dimensions', icon: 'extension', routerLink: ['/gkcln/gkcln81'] },
            ]
          },

          { label: 'administration', icon: 'settings',
            items: [
              { label: 'navBoard', icon: 'view_module', routerLink: ['/gkcln/gkcln90'] },
              { label: 'configuration', icon: 'build', routerLink: ['/gkcln/gkcln91'] },
              { label: 'approval', icon: 'people_outline', routerLink: ['/gkcln/gkcln92'] },
            ]
          },
        ]
      },

      {
        label: 'solution', icon: 'business_center',
        items: [
          { label: 'overview', icon: 'lightbulb_outline',
            items: [
              { label: 'navBoard', icon: 'view_module', routerLink: ['/gksol/gksol00'] },
              { label: 'masterList', icon: 'line_style', routerLink: ['/gksol/gksol01'] },
            ]
          },

          { label: 'individual', icon: 'done',
            items: [
              { label: 'navBoard', icon: 'view_module', routerLink: ['/gksol/gksol10'] },
              { label: 'create', icon: 'add', routerLink: ['/gksol/gksol11'] },
              { label: 'view', icon: 'search', routerLink: ['/gksol/gksol12'] },
              { label: 'edit', icon: 'edit', routerLink: ['/gksol/gksol13'] },
              { label: 'disable', icon: 'bookmark', routerLink: ['/gksol/gksol14'] },
              { label: 'enable', icon: 'bookmark_border', routerLink: ['/gksol/gksol15'] },
              { label: 'mark', icon: 'visibility_off', routerLink: ['/gksol/gksol16'] },
              { label: 'unmark', icon: 'visibility', routerLink: ['/gksol/gksol17'] },
              { label: 'delete', icon: 'delete_forever', routerLink: ['/gksol/gksol18'] },
              { label: 'viewChange', icon: 'track_changes', routerLink: ['/gksol/gksol19'] },
            ]
          },

          { label: 'collective', icon: 'done_all',
            items: [
              { label: 'navBoard', icon: 'view_module', routerLink: ['/gksol/gksol20'] },
              { label: 'upload', icon: 'file_upload', routerLink: ['/gksol/gksol21'] },
              { label: 'download', icon: 'file_download', routerLink: ['/gksol/gksol22'] },
              { label: 'upsert', icon: 'publish', routerLink: ['/gksol/gksol23'] },
              { label: 'inactivate', icon: 'layers_clear', routerLink: ['/gksol/gksol24'] },
              { label: 'activate', icon: 'layers', routerLink: ['/gksol/gksol25'] },
              { label: 'mark', icon: 'visibility_off', routerLink: ['/gksol/gksol26'] },
              { label: 'unmark', icon: 'visibility', routerLink: ['/gksol/gksol27'] },
              { label: 'clean', icon: 'delete_sweep', routerLink: ['/gksol/gksol28'] },
              { label: 'history', icon: 'history', routerLink: ['/gksol/gksol29'] },
            ]
          },

          { label: 'dashboard', icon: 'dashboard',
            items: [
              { label: 'navBoard', icon: 'view_module', routerLink: ['/gksol/gksol50'] },
              { label: 'kpis', icon: 'insert_chart', routerLink: ['/gksol/gksol51'] },
            ]
          },

          { label: 'reports', icon: 'book',
            items: [
              { label: 'navBoard', icon: 'view_module', routerLink: ['/gksol/gksol60'] },
              { label: 'summaryReports', icon: 'chrome_reader_mode', routerLink: ['/gksol/gksol61'] },
              { label: 'navBoard', icon: 'view_module', routerLink: ['/gksol/gksol70'] },
              { label: 'detailReports', icon: 'chrome_reader_mode', routerLink: ['/gksol/gksol71'] },
            ]
          },

        ]
       },
      {
        label: 'tcodes', icon: 'device_hub',
        items: [

          { label: 'overview', icon: 'lightbulb_outline',
            items: [
              { label: 'navBoard', icon: 'view_module', routerLink: ['/gktcd/gktcd00'] },
              { label: 'masterList', icon: 'line_style', routerLink: ['/gktcd/gktcd01'] },
            ]
          },

          { label: 'individual', icon: 'done',
            items: [
              { label: 'navBoard', icon: 'view_module', routerLink: ['/gktcd/gktcd10'] },
              { label: 'create', icon: 'add', routerLink: ['/gktcd/gktcd11'] },
              { label: 'view', icon: 'search', routerLink: ['/gktcd/gktcd12'] },
              { label: 'edit', icon: 'edit', routerLink: ['/gktcd/gktcd13'] },
              { label: 'disable', icon: 'bookmark', routerLink: ['/gktcd/gktcd14'] },
              { label: 'enable', icon: 'bookmark_border', routerLink: ['/gktcd/gktcd15'] },
              { label: 'mark', icon: 'visibility_off', routerLink: ['/gktcd/gktcd16'] },
              { label: 'unmark', icon: 'visibility', routerLink: ['/gktcd/gktcd17'] },
              { label: 'delete', icon: 'delete_forever', routerLink: ['/gktcd/gktcd18'] },
              { label: 'viewChange', icon: 'track_changes', routerLink: ['/gktcd/gktcd19'] },
            ]
          },

          { label: 'collective', icon: 'done_all',
            items: [
              { label: 'navBoard', icon: 'view_module', routerLink: ['/gktcd/gktcd20'] },
              { label: 'upload', icon: 'file_upload', routerLink: ['/gktcd/gktcd21'] },
              { label: 'download', icon: 'file_download', routerLink: ['/gktcd/gktcd22'] },
              { label: 'upsert', icon: 'publish', routerLink: ['/gktcd/gktcd23'] },
              { label: 'inactivate', icon: 'layers_clear', routerLink: ['/gktcd/gktcd24'] },
              { label: 'activate', icon: 'layers', routerLink: ['/gktcd/gktcd25'] },
              { label: 'mark', icon: 'visibility_off', routerLink: ['/gktcd/gktcd26'] },
              { label: 'unmark', icon: 'visibility', routerLink: ['/gktcd/gktcd27'] },
              { label: 'clean', icon: 'delete_sweep', routerLink: ['/gktcd/gktcd28'] },
              { label: 'history', icon: 'history', routerLink: ['/gktcd/gktcd29'] },
            ]
          },

          { label: 'dashboard', icon: 'dashboard',
            items: [
              { label: 'navBoard', icon: 'view_module', routerLink: ['/gktcd/gktcd50'] },
              { label: 'kpis', icon: 'insert_chart', routerLink: ['/gktcd/gktcd51'] },
            ]
          },

          { label: 'reports', icon: 'book',
            items: [
              { label: 'navBoard', icon: 'view_module', routerLink: ['/gktcd/gktcd60'] },
              { label: 'summaryReports', icon: 'chrome_reader_mode', routerLink: ['/gktcd/gktcd61'] },
              { label: 'navBoard', icon: 'view_module', routerLink: ['/gktcd/gktcd70'] },
              { label: 'detailReports', icon: 'chrome_reader_mode', routerLink: ['/gktcd/gktcd71'] },
            ]
          },

        ]
      },
    ]
  }

}
