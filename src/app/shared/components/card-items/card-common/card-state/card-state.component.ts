import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'iap-card-state',
  templateUrl: './card-state.component.html',
  styleUrls: ['./card-state.component.scss']
})
export class CardStateComponent implements OnInit {

  @Input() isComply: boolean;

  constructor() {
    this.isComply = this.isComply || false;
  }

  ngOnInit() {
  }

}
