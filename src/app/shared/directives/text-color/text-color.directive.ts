import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[iapTextColor]'
})
export class TextColorDirective implements AfterViewInit {
  // tslint:disable-next-line:no-input-rename
  @Input('iapTextColor') color: string;
  constructor(private element: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.element.nativeElement.style.color = this.color;
  }



}
