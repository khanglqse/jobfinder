import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'iap-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {
  @Input() name: string;

  constructor() {
    this.name = this.name || 'Name';
  }

  ngOnInit() {
  }

}
