import { Component, OnInit, Input } from '@angular/core';
import { Attachment } from '../../../models/attachment/attachment.model';

@Component({
  selector: 'iap-attachment-item',
  templateUrl: './attachment-item.component.html',
  styleUrls: ['./attachment-item.component.scss']
})
export class AttachmentItemComponent implements OnInit {

  @Input() data: Attachment;

  constructor() { }

  ngOnInit() {
    if (!this.data) {
      this.data = {
        id: 1,
        documentName: 'AtthDocName.doc',
        documentType: 'AtthDocType',
        uploadedBy: 'Name Surname',
        uploadedDate: 'dd mm yyyy'
      };
    }
  }

}
