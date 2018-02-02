import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'iap-submission-chart',
  templateUrl: './submission-chart.component.html',
  styleUrls: ['./submission-chart.component.scss']
})
export class SubmissionChartComponent implements OnInit {

  @Input() data: any[];
  view: any[];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  showYAxisLabel = true;
  yAxisLabel = 'No. of planned assurance';
  animations = true;

  colorScheme = {
    domain: ['#2e8ddb']
  };

  constructor() {
    Object.assign(this, this.data);
  }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
  }
}

