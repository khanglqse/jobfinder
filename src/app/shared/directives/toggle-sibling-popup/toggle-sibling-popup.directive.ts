import { Directive, Input, HostListener, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[iapToggleSiblingPopup]'
})
export class ToggleSiblingPopupDirective {

  @Input() animation: string;

  private targetState: TargetStateEnum;
  private target: HTMLElement;

  private upClass = 'iap-animation-up';
  private downClass = 'iap-animation-down';

  documentClicked: any;

  constructor(private el: ElementRef) {
    this.documentClicked = this.documentClickedHandler.bind(this);
  }

  @HostListener('click', ['$event']) onclick(event) {
    this.toggleDisplayed(event);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit(): void {
    this.target = this.el.nativeElement.nextElementSibling;
    if (this.target) {
      this.target.style.display = 'none';
      this.targetState = TargetStateEnum.HIDE;
    }
  }

  toggleDisplayed(event) {
    if (this.targetState === TargetStateEnum.SHOW) {
      this.target.style.display = 'none';
      this.targetState = TargetStateEnum.HIDE;
    } else {
      this.target.style.display = 'block';
      this.targetState = TargetStateEnum.SHOWING;
      document.addEventListener('click', this.documentClicked);

      switch (this.animation) {
        case 'up': {
          this.target.classList.add(this.upClass);
          break;
        }
        case 'down': {
          this.target.classList.add(this.downClass);
          break;
        }
        default: break;
      }
    }
  }

  documentClickedHandler(event) {
    const target = event.target;
    if (this.targetState === TargetStateEnum.SHOWING) {
      this.targetState = TargetStateEnum.SHOW;
      return;
    }

    if (!(target.isEqualNode(this.target) || this.target.contains(target))) {
      this.target.style.display = 'none';
      this.targetState = TargetStateEnum.HIDE;
      document.removeEventListener('click', this.documentClicked);
    }
  }
}

enum TargetStateEnum {
  SHOW = 1,
  SHOWING = 2,
  HIDE = 3
}
