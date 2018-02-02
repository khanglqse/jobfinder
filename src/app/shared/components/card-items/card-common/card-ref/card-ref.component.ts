import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'iap-card-ref',
  templateUrl: './card-ref.component.html',
  styleUrls: ['./card-ref.component.scss']
})
export class CardRefComponent implements OnInit {

  @Input() name: string;

  constructor() {
    this.name = this.name || 'AAP Ref No. (OPU)';
  }

  ngOnInit() {
  }

}
