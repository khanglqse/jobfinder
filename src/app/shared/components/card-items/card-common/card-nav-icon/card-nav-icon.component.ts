import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'iap-card-nav-icon',
  templateUrl: './card-nav-icon.component.html',
  styleUrls: ['./card-nav-icon.component.scss']
})
export class CardNavIconComponent implements OnInit {

  @Input() href: string;

  constructor() { }

  ngOnInit() {
  }

}
