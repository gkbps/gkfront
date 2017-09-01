import { Prime01 } from './prime01.component';
import { InputGroup } from './components/inputGroup/inputGroup.component';
import { PCalendar } from './components/pcalendar/pcalendar.component';
import { PChips } from './components/pchips/pchips.component';
import { PDropdown } from './components/pdropdown/pdropdown.component';
import { PInputSwitch } from './components/pinputSwitch/pinputSwitch.component';
import { PInputTextArea } from './components/pinputTextArea/pinputTextArea.component';
import { PMask } from './components/pmask/pmask.component';
import { PPassword } from './components/ppassword/ppassword.component';
import { PRating } from './components/prating/prating.component';
import { PSpinner } from './components/pspinner/pspinner.component';
import { PToggleButton } from './components/ptoggleButton/ptoggleButton.component';
import { PAutoComplete } from './components/pautoComplete/pautoComplete.component';
import { PCheckBox } from './components/pcheckBox/pcheckBox.component';
import { PColorPicker } from './components/pcolorPicker/pcolorPicker.component';
import { PEditor } from './components/peditor/peditor.component';
import { PInputText } from './components/pinputText/pinputText.component';
import { PListBox } from './components/plistBox/plistBox.component';
import { PMultiSelect } from './components/pmultiSelect/pmultiSelect.component';
import { PRadioButton } from './components/pradioButton/pradioButton.component';
import { PSlider } from './components/pslider/pslider.component';
import { PSelectButton } from './components/pselectButton/pselectButton.component';
import { PTriCheckbox } from './components/ptriCheckbox/ptriCheckbox.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Prime01,
    children: [
      // { path: '', component: Prime01 },
      { path: 'inputgroup', component: InputGroup },
      { path: 'calendar', component: PCalendar },
      { path: 'chips', component: PChips },
      { path: 'dropdown', component: PDropdown },
      { path: 'inputswitch', component: PInputSwitch },
      { path: 'inputtextarea', component: PInputSwitch },
      { path: 'mask', component: PMask },
      { path: 'password', component: PPassword },
      { path: 'rating', component: PRating },
      { path: 'spinner', component: PSpinner },
      { path: 'toggleButton', component: PToggleButton },
      { path: 'autoComplete', component: PAutoComplete },
      { path: 'checkBox', component: PCheckBox },
      { path: 'colorPicker', component: PColorPicker },
      { path: 'editor', component: PEditor },
      { path: 'input', component: PInputText },
      { path: 'listBox', component: PListBox },
      { path: 'multiSelect', component: PMultiSelect },
      { path: 'radioButton', component: PRadioButton },
      { path: 'slider', component: PSlider },
      { path: 'selectButton', component: PSelectButton },
      { path: 'triCheckbox', component: PTriCheckbox },

    ],
  },
];

export const routing = RouterModule.forChild(routes);
