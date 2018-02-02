import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmissionChartComponent } from './submission-chart/submission-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  declarations: [
    SubmissionChartComponent,
  ],
  exports: [
    SubmissionChartComponent
  ],
})
export class ChartModule { }
