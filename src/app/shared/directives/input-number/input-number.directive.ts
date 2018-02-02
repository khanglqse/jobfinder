import { Directive, ElementRef, HostListener, Input } from '@angular/core';

enum KeyCode {
  KEYBOARD_0 = 48,
  KEYBOARD_9 = 57,
  NUMPAD_0 = 96,
  NUMPAD_9 = 105,
  BACK_SPACE = 8,
  TAB = 9,
  SUBTRACT = 189,
  NUMPAD_SUBTRACT = 109,
  DECIMAL_POINT = 190,
  NUMPAD_DECIMAL_POINT = 110,
}


@Directive({
  selector: '[iapInputNumber]'
})
export class InputNumberDirective {

  @Input() isRealNumber = false;
  @Input() acceptNegative = false;

  constructor(private el: ElementRef) { }

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    if (event.shiftKey) {
      return false;
    }
    const keyCode = event.keyCode;
    const value = this.el.nativeElement.value;
    if (this.isAcceptInputSubtract(value, keyCode)) {
      return true;
    }

    if (this.isAcceptInputDecimalPoint(value, keyCode)) {
      return true;
    }

    if ((keyCode >= KeyCode.KEYBOARD_0 && keyCode <= KeyCode.KEYBOARD_9) ||
      (keyCode >= KeyCode.NUMPAD_0 && keyCode <= KeyCode.NUMPAD_9)) {
      return true;
    }
    if (keyCode === KeyCode.BACK_SPACE || keyCode === KeyCode.TAB) {
      return true;
    }
    return false;
  }


  isStartWithSubtract(value: string) {
    if (value.indexOf('-') === 0) {
      return true;
    }
    return false;
  }

  isAcceptInputSubtract(inputValue: string, keyCode: number) {
    if (inputValue.length === 0 &&
      this.acceptNegative &&
      !this.isStartWithSubtract(inputValue) &&
      (keyCode === KeyCode.SUBTRACT ||
        keyCode === KeyCode.NUMPAD_SUBTRACT)) {
      return true;
    }
    return false;
  }

  isContainDecimalPoint(value: string) {
    if (value.indexOf('.') >= 0) {
      return true;
    }
    return false;
  }

  isAcceptInputDecimalPoint(inputValue: string, keyCode: number) {

    if (inputValue.length === 1 &&
      this.isStartWithSubtract(inputValue)
    ) {
      return false;
    }

    if (inputValue.length > 0 &&
      this.isRealNumber &&
      !this.isContainDecimalPoint(inputValue) &&
      (keyCode === KeyCode.DECIMAL_POINT ||
        keyCode === KeyCode.NUMPAD_DECIMAL_POINT)) {
      return true;
    }
    return false;
  }
}
