// Components
import { PEditor } from './peditor.component';

import { routing } from './peditor.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { EditorModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,    
    routing,

    EditorModule,
    ButtonModule,
  ],
  declarations: [
    PEditor,
  ],
  providers: [
  ],
})
export class PEditorModule {
}
