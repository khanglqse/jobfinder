import { Injectable } from '@angular/core';

@Injectable()
export class BackgroundLoader {

  loader: any;
  isShowing: boolean;

  constructor() {
    this.loader = document.querySelector('#loadingWrapper');
  }

  show() {
    if (this.loader) {
      this.loader.style.display = 'block';
      this.isShowing = true;
    }
  }

  hide() {
    if (this.loader) {
      this.loader.style.display = 'none';
      this.isShowing = false;
    }
  }
}
