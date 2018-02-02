import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'iap-card-nav',
  templateUrl: './card-nav.component.html',
  styleUrls: ['./card-nav.component.scss']
})
export class CardNavComponent implements OnInit {
  @Input() href: string;

  constructor() { }

  ngOnInit() {
  }

}
