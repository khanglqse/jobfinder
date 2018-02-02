import { Directive, ElementRef ,Renderer} from '@angular/core';

@Directive({
  selector: '[iapControl]'
})
export class ControlDirective {

  constructor(private el: ElementRef, renderer: Renderer) {
    renderer.setElementStyle(el.nativeElement, 'display', 'none');
   }

}
