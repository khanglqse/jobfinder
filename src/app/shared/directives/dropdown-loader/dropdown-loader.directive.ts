import { Directive, ViewChildren, QueryList, ContentChildren, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { MatOption } from '@angular/material';
import { AfterViewChecked, OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { IapHttpClient } from '../../services/iap-http-client/iap-http-client.service';
import { HttpParams } from '@angular/common/http';

@Directive({
  selector: '[iapDropdownLoader]'
})
export class DropdownLoaderDirective implements OnInit {

  @ContentChildren(MatOption) options: QueryList<MatOption>;

  hostElement: HTMLElement;

  @Input() url: string;
  @Input() params: HttpParams;
  @Output() dataChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(private el: ElementRef,
    private http: IapHttpClient
  ) {
    this.hostElement = <HTMLElement>el.nativeElement;
  }

  ngOnInit() {
    this.hideSelectArrow();
    this.hostElement.classList.add('dropdown-loader');
    this.http.silentGet(this.url, { params: this.params })
      .subscribe(data => {
        this.dataChange.emit(data);
        this.hostElement.classList.remove('dropdown-loader');
        this.showSelectArrow();
      }, (err => {
        this.hostElement.classList.remove('dropdown-loader');
        this.showSelectArrow();
      }));
  }

  private hideSelectArrow() {
    const selectArrow = this.getSelectArrow();
    if (selectArrow) {
      selectArrow.style.display = 'none';
    }
  }

  private showSelectArrow() {
    const selectArrow = this.getSelectArrow();
    if (selectArrow) {
      selectArrow.style.display = 'table-cell';
    }
  }

  private getSelectArrow(): HTMLElement {
    return <HTMLElement>this.hostElement.querySelector('.mat-select-arrow-wrapper');
  }

}
