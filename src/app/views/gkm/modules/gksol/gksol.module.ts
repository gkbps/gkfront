import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataTableModule, SharedModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { MultiSelectModule } from 'primeng/primeng';
import { ContextMenuModule } from 'primeng/primeng';

import { NgaModule } from '../../../../nga/nga.module';
// import { GkSolFormModule } from './components/gksolForm/gksolForm.module';

import { GkSolComponent } from './gksol.component';
import { GkSolRoutingModule } from './gksol-routing.module';

import { GkSol00Component } from './components/gksol00';
/*
import { GkSol01Component } from './components/gksol01';
*/
import { GkSol10Component } from './components/gksol10';
/*
import { GkSol11Component } from './components/gksol11';
import { GkSol12Component } from './components/gksol12';
*/
import { GkSol20Component } from './components/gksol20';
/*
import { GkSol30Component } from './components/gksol30';
import { GkSol40Component } from './components/gksol40';
*/
import { GkSol50Component } from './components/gksol50';
import { GkSol60Component } from './components/gksol60';
/*
import { GkSol80Component } from './components/gksol80';
import { GkSol90Component } from './components/gksol90';
*/

import { GkClientService } from '../../../../services/gkClient.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GkSolRoutingModule,

    DataTableModule,
    SharedModule,
    GrowlModule,
    ButtonModule,
    MultiSelectModule,
    ContextMenuModule,

    NgaModule,
    // GkSolFormModule,
  ],
  declarations: [
    GkSolComponent,
    GkSol00Component,
    /*
    GkSol01Component,
    */

    GkSol10Component,
    /*
    GkSol11Component,
    GkSol12Component,
    */
    GkSol20Component,
    /*
    GkSol30Component,

    GkSol40Component,

    */
    GkSol50Component,

    GkSol60Component,
    /*
    GkSol80Component,

    GkSol90Component,
    */
  ],
  providers: [
    GkClientService,
  ],
})
export class GkSolModule { }
