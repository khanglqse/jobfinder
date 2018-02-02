import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Button } from '../../../models/buttons/button.model';

@Component({
  selector: 'iap-wf-button',
  templateUrl: './wf-button.component.html',
  styleUrls: ['./wf-button.component.scss']
})
export class WfButtonComponent implements OnInit {

  @Input() button: Button;
  @Output() callBack: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {

  }

}
