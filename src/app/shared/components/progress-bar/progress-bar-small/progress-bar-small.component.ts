import { Component, OnInit, Input, ElementRef, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { ProgressBarStep } from '../../../models/progress-bar/progress-bar-step.model';
import { ProgressBar } from '../../../models/progress-bar/progress-bar.model';
import { ProgressBarStatus } from '../../../models/progress-bar/progress-bar-status.enum';

@Component({
  selector: 'iap-progress-bar-small',
  templateUrl: './progress-bar-small.component.html',
  styleUrls: ['./progress-bar-small.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarSmallComponent implements OnInit, AfterViewInit {

  @Input() data: ProgressBar;
  host: HTMLElement;


  constructor(private el: ElementRef) {
    this.host = <HTMLElement>this.el.nativeElement;
  }

  ngOnInit() {
    this.data = {
      listStep: [
        {
          name: 'Annual Assurance Planning',
          stepIndex: 1,
          status: ProgressBarStatus.Completed,
          listStepItem: [
            {
              name: 'AAP Submission',
              status: ProgressBarStatus.Completed
            },
            {
              name: 'AAP Consolidation',
              status: ProgressBarStatus.Completed
            },
            {
              name: 'AAP Endorsement',
              status: ProgressBarStatus.Completed
            },
            {
              name: 'AAP Approval',
              status: ProgressBarStatus.Completed
            },
          ]
        },
        {
          name: 'Assurance Planning',
          stepIndex: 2,
          status: ProgressBarStatus.InProgress,
          listStepItem: [
            {
              name: 'AP Trigger',
              status: ProgressBarStatus.Completed
            },
            {
              name: 'AP Submission',
              status: ProgressBarStatus.InProgress
            },
          ]
        },
        {
          name: 'Assurance Fieldwork & Reporting',
          stepIndex: 3,
          status: ProgressBarStatus.NotStarted,
          listStepItem: []
        },
        {
          name: 'Post Assurance & Monitoring',
          stepIndex: 4,
          status: ProgressBarStatus.NotStarted,
          listStepItem: [
            {
              name: 'Action Party Assignment',
              status: ProgressBarStatus.NotStarted
            },
            {
              name: 'Action Item Execution',
              status: ProgressBarStatus.NotStarted
            },
            {
              name: 'Action Item Verification',
              status: ProgressBarStatus.NotStarted
            },
            {
              name: 'Assurance Closure',
              status: ProgressBarStatus.NotStarted
            },
          ]
        },
      ]
    };
  }

  ngAfterViewInit() {
    this.expandStep(2);
  }

  onSelectedStepChanged(stepIndex: number) {
    this.expandStep(stepIndex);
  }

  private expandStep(stepIndex) {
    const selectedStep = this.host.querySelector(`iap-progress-bar-small-step[step="${stepIndex}"]`);
    selectedStep.classList.remove('collapse');
    selectedStep.classList.add('expand');
    this.collapseOthersStep(stepIndex);
  }

  private collapseOthersStep(stepIndex) {
    const notSelectedSteps = this.host.querySelectorAll(`iap-progress-bar-small-step:not([step="${stepIndex}"])`);
    for (let index = 0; index < notSelectedSteps.length; index++) {
      const element = notSelectedSteps[index];
      element.classList.remove('expand');
      element.classList.add('collapse');
    }
  }

}
