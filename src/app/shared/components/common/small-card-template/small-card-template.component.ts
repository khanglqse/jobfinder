import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'iap-small-card-template',
  templateUrl: './small-card-template.component.html',
  styleUrls: ['./small-card-template.component.scss']
})
export class SmallCardTemplateComponent implements OnInit {

  @Input() color: string;

  constructor() { }

  ngOnInit() {
  }

}
