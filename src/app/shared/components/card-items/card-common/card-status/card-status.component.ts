import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'iap-card-status',
  templateUrl: './card-status.component.html',
  styleUrls: ['./card-status.component.scss']
})
export class CardStatusComponent implements OnInit {

  @Input() time: string;
  @Input() status: string;

  constructor() { }

  ngOnInit() {
    this.time = this.time || '18:30, 19 Oct 2019';
    this.status = this.status || 'Draft';
  }

}
