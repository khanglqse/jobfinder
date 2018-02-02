import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from '../directives/directives.module';
import { CardItemModule } from './card-items/card-item.module';
import { ListCardItemModule } from './list-card-item/list-card-item.module';
import { NotificationDialogComponent } from './notification-dialog/notification-dialog.component';
import { PeoplePickerComponent } from './people-picker/people-picker.component';
import { AddressBookComponent } from './people-picker/address-book/address-book.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { DialogModule } from './dialog/dialog.module';
import { ChartModule } from './chart/chart.module';
import { ProgressBarModule } from './progress-bar/progress-bar.module';



@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
    CardItemModule,
    ListCardItemModule,
    DialogModule,
    ChartModule,
    ProgressBarModule,
  ],
  declarations: [
    NotificationDialogComponent,
    PeoplePickerComponent,
    AddressBookComponent,
    PageHeaderComponent,
  ],

  entryComponents: [
    NotificationDialogComponent,
    AddressBookComponent,
  ],

  exports: [
    NotificationDialogComponent,
    PeoplePickerComponent,
    AddressBookComponent,
    PageHeaderComponent,
    CardItemModule,
    ListCardItemModule,
    DialogModule,
    ChartModule,
    ProgressBarModule,
  ],
})
export class SharedComponentModule { }
