import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToggleMenuPopupDirective } from './toggle-menu-popup/toggle-menu-popup.directive';
import { InputNumberDirective } from './input-number/input-number.directive';
import { ToggleSiblingPopupDirective } from './toggle-sibling-popup/toggle-sibling-popup.directive';
import { TextColorDirective } from './text-color/text-color.directive';
import { ControlDirective } from './hidden-control/control.directive';
import { DropdownLoaderDirective } from './dropdown-loader/dropdown-loader.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ToggleMenuPopupDirective,
    TextColorDirective,
    InputNumberDirective,
    ToggleSiblingPopupDirective,
    ControlDirective,
    DropdownLoaderDirective,
  ],
  exports: [
    ToggleMenuPopupDirective,
    TextColorDirective,
    InputNumberDirective,
    ToggleSiblingPopupDirective,
    DropdownLoaderDirective,
  ]
})
export class DirectivesModule { }
