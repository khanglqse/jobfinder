import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { AfterContentInit, AfterContentChecked } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'iap-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit, AfterContentChecked {

  @Input() value: number;
  @Input() disabled: boolean;
  componentId: number;
  listStar = [1, 2, 3, 4, 5];

  constructor(private elementRef: ElementRef) {
    this.componentId = Date.now() + Math.random() * 1000;
  }

  ngOnInit() {

  }

  ngAfterContentChecked() {
    const el = <HTMLElement>this.elementRef.nativeElement;
    const input = el.querySelector(`input[type="radio"][value="${this.value}"]`);
    if (input) {
      input.setAttribute('checked', 'checked');
    }
  }
}
