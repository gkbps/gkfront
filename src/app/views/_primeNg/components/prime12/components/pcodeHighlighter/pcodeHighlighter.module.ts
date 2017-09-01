// Components
import { PCodeHighlighter } from './pcodeHighlighter.component';

import { routing } from './pcodeHighlighter.routing';
// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';



import { CodeHighlighterModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule,
    
    
    routing,

    CodeHighlighterModule,
  ],
  declarations: [
    PCodeHighlighter,
  ],
  providers: [
  ],
})
export class PCodeHighlighterModule {
}
