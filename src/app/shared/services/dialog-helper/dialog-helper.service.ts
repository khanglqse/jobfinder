import { Injectable, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs/Observable';
import { NotificationDialogComponent } from '../../components/notification-dialog/notification-dialog.component';
import { NOTIFICATION_STATUS } from '../../constants/notification-dialog.constants';

@Injectable()
export class DialogHelperService {

  constructor(private dialog: MatDialog) { }

  private openDialog(type: number, message: string, title) {
    const dialogRef = this.dialog.open(NotificationDialogComponent, {
      width: '360px',
      position: {
        top: '60px'
      },
      data: {
        type: type,
        message: message,
        title: title
      }
    });

    return dialogRef.afterClosed();
  }

  showSuccess(message: string, title: string = 'Successfuly'): void {
    this.openDialog(NOTIFICATION_STATUS.SUCCESS, message, title);
  }

  showWarning(message: string, title: string = 'Warning'): void {
    this.openDialog(NOTIFICATION_STATUS.WARNING, message, title);
  }

  showError(message: string, title: string = 'Error'): void {
    this.openDialog(NOTIFICATION_STATUS.ERROR, message, title);
  }

  showConfirm(message: string, title: string = 'Confirmation'): Observable<any> {
    return this.openDialog(NOTIFICATION_STATUS.CONFIRM, message, title);
  }
}
