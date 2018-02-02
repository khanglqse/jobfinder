import { Component, OnInit, Input, Output, EventEmitter, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { ProgressBarStep } from '../../../../models/progress-bar/progress-bar-step.model';
import { ProgressBarStatus } from '../../../../models/progress-bar/progress-bar-status.enum';

@Component({
  selector: 'iap-progress-bar-large-step',
  templateUrl: './progress-bar-large-step.component.html',
  styleUrls: ['./progress-bar-large-step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarLargeStepComponent implements OnInit {

  @Input() data: ProgressBarStep;
  @Output() selectedStepChange = new EventEmitter<number>();
  @HostBinding('class.not-started') isNotStarted: boolean;

  isStepCompleted: boolean;

  constructor() { }

  ngOnInit() {
    this.setClassForProgressStep();
    this.checkStepCompleted();
  }

  setClassForProgressStep() {
    this.isNotStarted = this.data.status === ProgressBarStatus.NotStarted;
  }

  checkStepCompleted() {
    this.isStepCompleted = this.data.status === ProgressBarStatus.Completed;
  }

  toggleBar() {
    this.selectedStepChange.emit(this.data.stepIndex);
  }
}
