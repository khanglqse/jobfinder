import { Component, OnInit } from '@angular/core';
import { routerTransition } from './feature-layout.animation';

@Component({
  selector: 'iap-feature-layout',
  templateUrl: './feature-layout.component.html',
  styleUrls: ['./feature-layout.component.scss'],
  animations: [routerTransition],
})
export class FeatureLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
