import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'iap-card-title',
  templateUrl: './card-title.component.html',
  styleUrls: ['./card-title.component.scss']
})
export class CardTitleComponent implements OnInit {

  @Input() name: string;

  constructor() {
    this.name = this.name || 'Title';
  }

  ngOnInit() {
  }

}
