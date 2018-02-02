import { Component, OnInit, Input, HostBinding, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ProgressBarStep } from '../../../../models/progress-bar/progress-bar-step.model';
import { ProgressBarStatus } from '../../../../models/progress-bar/progress-bar-status.enum';
import { Output } from '@angular/core';

@Component({
  selector: 'iap-progress-bar-small-step',
  templateUrl: './progress-bar-small-step.component.html',
  styleUrls: ['./progress-bar-small-step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarSmallStepComponent implements OnInit {

  @Input() data: ProgressBarStep;
  @Output() selectedStepChange = new EventEmitter<number>();
  @HostBinding('class.not-started') isNotStarted: boolean;

  isStepCompleted: boolean;


  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.setWidthForProgressStage();
    this.setClassForProgressStep();
    this.checkStepCompleted();
  }

  toggleBar() {
    this.selectedStepChange.emit(this.data.stepIndex);
  }

  getLastestStep(): string {
    const lstResult = this.data.listStepItem.filter(step => {
      return step.status !== ProgressBarStatus.NotStarted;
    });
    if (lstResult && lstResult.length > 0) {
      return lstResult[lstResult.length - 1].name;
    } else {
      return '';
    }
  }

  setWidthForProgressStage() {
    const stepWidth = 35;
    const stepItem = 42;
    const margin = 2;
    const statusWidth = stepWidth + stepItem * this.data.listStepItem.length - margin;
    const progressState = this.el.nativeElement.querySelector('.progress-stage');
    progressState.style.width = `${statusWidth}px`;
  }

  setClassForProgressStep() {
    this.isNotStarted = this.data.status === ProgressBarStatus.NotStarted;
  }

  checkStepCompleted() {
    this.isStepCompleted = this.data.status === ProgressBarStatus.Completed;
  }
}
