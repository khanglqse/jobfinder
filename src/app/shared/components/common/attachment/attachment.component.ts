import { Component, OnInit, Input } from '@angular/core';
import { Attachment } from '../../../models/attachment/attachment.model';
import { ElementRef } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'iap-attachment',
  templateUrl: './attachment.component.html',
  styleUrls: ['./attachment.component.scss']
})
export class AttachmentComponent implements OnInit {

  @Input() data: Attachment[] = [];

  host: HTMLElement;
  browseBtn: HTMLElement;

  constructor(private el: ElementRef,
    private datePipe: DatePipe) {
    this.host = el.nativeElement;
  }

  ngOnInit() {
    this.browseBtn = <HTMLElement>this.host.querySelector('input[type="file"]');
  }

  openFileDialog() {
    if (this.browseBtn) {
      this.browseBtn.click();
    }
  }

  handleInputFileChange(event) {
    const src = <HTMLInputElement>event.srcElement;
    if (!src) {
      return;
    }
    const files = src.files;
    if (!files) {
      return;
    }
    for (let i = 0; i < files.length; i++) {
      this.data.unshift(
        {
          documentName: files[i].name,
          documentType: files[i].type,
          uploadedBy: 'Current User',
          uploadedDate: this.datePipe.transform(Date.now(), 'dd MM yyyy'),
        }
      );
    }
    src.value = '';
  }

}
