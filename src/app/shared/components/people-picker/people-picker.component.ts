import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddressBookComponent } from './address-book/address-book.component';
import { UserControlInfo } from '../../models/common.model';

@Component({
  selector: 'iap-people-picker',
  templateUrl: './people-picker.component.html',
  styleUrls: ['./people-picker.component.scss']
})
export class PeoplePickerComponent implements OnInit {
  @Input() title: string;
  @Input() selectedUser: UserControlInfo;
  @Input() isRequired: boolean;

  @Output() selectedUserChange = new EventEmitter<any>();

  hasError: boolean;

  constructor(private dialog: MatDialog) {
    this.hasError = false;
  }

  ngOnInit() {
  }

  removeUser(event) {
    this.selectedUser = null;
    this.hasError = true;
    this.selectedUserChange.emit(this.selectedUser);
    event.stopPropagation();
  }

  openAddressBook() {
    const dialogRef = this.dialog.open(AddressBookComponent, {
      width: '700px',
    });

    dialogRef.afterClosed().subscribe((data: UserControlInfo) => {
      if (data) {
        this.selectedUser = data;
        this.hasError = false;
      } else {
        this.selectedUser = null;
        this.hasError = true;
      }
      this.selectedUserChange.emit(this.selectedUser);
    });

  }

}
