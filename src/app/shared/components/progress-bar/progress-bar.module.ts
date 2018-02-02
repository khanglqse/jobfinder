import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarSmallComponent } from './progress-bar-small/progress-bar-small.component';
import { ProgressBarSmallItemComponent } from './progress-bar-small/progress-bar-small-item/progress-bar-small-item.component';
import { IapCommonModule } from '../common/iap-common.module';
import { ProgressBarSmallStepComponent } from './progress-bar-small/progress-bar-small-step/progress-bar-small-step.component';
import { ProgressBarLargeComponent } from './progress-bar-large/progress-bar-large.component';
import { ProgressBarLargeStepComponent } from './progress-bar-large/progress-bar-large-step/progress-bar-large-step.component';
import { ProgressBarLargeItemComponent } from './progress-bar-large/progress-bar-large-item/progress-bar-large-item.component';

@NgModule({
  imports: [
    CommonModule,
    IapCommonModule
  ],
  declarations: [
    ProgressBarSmallComponent,
    ProgressBarSmallItemComponent,
    ProgressBarSmallStepComponent,
    ProgressBarLargeComponent,
    ProgressBarLargeStepComponent,
    ProgressBarLargeItemComponent,
  ],
  exports: [
    ProgressBarSmallComponent,
    ProgressBarSmallItemComponent,
    ProgressBarSmallStepComponent,
    ProgressBarLargeComponent,
    ProgressBarLargeStepComponent,
    ProgressBarLargeItemComponent,
  ]
})
export class ProgressBarModule { }
