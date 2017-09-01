// Components
import { Prime01 } from './prime01.component';

import { InputGroupModule } from './components/inputGroup/inputGroup.module';
import { PCalendarModule } from './components/pcalendar/pcalendar.module';
import { PChipsModule } from './components/pchips/pchips.module';
import { PDropdownModule } from './components/pdropdown/pdropdown.module';
import { PInputSwitchModule } from './components/pinputSwitch/pinputSwitch.module';
import { PInputTextAreaModule } from './components/pinputTextArea/pinputTextArea.module';
import { PMaskModule } from './components/pmask/pmask.module';
import { PPasswordModule } from './components/ppassword/ppassword.module';
import { PRatingModule } from './components/prating/prating.module';
import { PSpinnerModule } from './components/pspinner/pspinner.module';
import { PToggleButtonModule } from './components/ptoggleButton/ptoggleButton.module';
import { PAutoCompleteModule } from './components/pautoComplete/pautoComplete.module';
import { PCheckBoxModule } from './components/pcheckBox/pcheckBox.module';
import { PColorPickerModule } from './components/pcolorPicker/pcolorPicker.module';
import { PEditorModule } from './components/peditor/peditor.module';
import { PInputTextModule } from './components/pinputText/pinputText.module';
import { PListBoxModule } from './components/plistBox/plistBox.module';
import { PMultiSelectModule } from './components/pmultiSelect/pmultiSelect.module';
import { PRadioButtonModule } from './components/pradioButton/pradioButton.module';
import { PSliderModule } from './components/pslider/pslider.module';
import { PSelectButtonModule } from './components/pselectButton/pselectButton.module';
import { PTriCheckboxModule } from './components/ptriCheckbox/ptriCheckbox.module';


// External modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,         // Require for <router-outlet>
    
    

    InputGroupModule,
    PCalendarModule,
    PChipsModule,
    PDropdownModule,
    PInputSwitchModule,
    PInputTextAreaModule,
    PMaskModule,
    PPasswordModule,
    PRatingModule,
    PSpinnerModule,
    PToggleButtonModule,
    PAutoCompleteModule,
    PCheckBoxModule,
    PColorPickerModule,
    PEditorModule,
    PInputTextModule,
    PListBoxModule,
    PMultiSelectModule,
    PRadioButtonModule,
    PSliderModule,
    PSelectButtonModule,
    PTriCheckboxModule,
  ],
  declarations: [
    Prime01,

  ],
  providers: [
  ],
})
export class Prime01Module {
}
