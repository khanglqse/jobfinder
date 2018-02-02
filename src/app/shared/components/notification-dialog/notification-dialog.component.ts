import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NOTIFICATION_STATUS, NOTIFICATION_ICON, NOTIFICATION_CLASS_COLOR } from '../../constants/notification-dialog.constants';

@Component({
  selector: 'iap-notification-dialog',
  templateUrl: './notification-dialog.component.html',
  styleUrls: ['./notification-dialog.component.scss']
})
export class NotificationDialogComponent implements OnInit {

  isSuccess: Boolean;
  isError: Boolean;
  isWarning: Boolean;
  isConfirm: Boolean;
  iconText: String;
  classColor: String;
  title: String;
  message: String;
  constructor(
    public dialogRef: MatDialogRef<NotificationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.message = data.message;
    switch (data.type) {
      case NOTIFICATION_STATUS.SUCCESS: {
        this.isSuccess = true;
        this.title = data.title || 'Success';
        this.iconText = NOTIFICATION_ICON.SUCCESS;
        this.classColor = NOTIFICATION_CLASS_COLOR.SUCCESS;
        break;
      }
      case NOTIFICATION_STATUS.WARNING: {
        this.isWarning = true;
        this.title = data.title || 'Warning';
        this.iconText = NOTIFICATION_ICON.WARNING;
        this.classColor = NOTIFICATION_CLASS_COLOR.WARNING;
        break;
      }
      case NOTIFICATION_STATUS.ERROR: {
        this.isError = true;
        this.title = data.title || 'Error';
        this.iconText = NOTIFICATION_ICON.ERROR;
        this.classColor = NOTIFICATION_CLASS_COLOR.ERROR;
        break;
      }
      case NOTIFICATION_STATUS.CONFIRM: {
        this.isConfirm = true;
        this.title = data.title || 'Confirmation';
        this.iconText = NOTIFICATION_ICON.CONFIRM;
        this.classColor = NOTIFICATION_CLASS_COLOR.CONFIRM;
        break;
      }
      default: break;
    }
  }

  ngOnInit() {
  }

}
