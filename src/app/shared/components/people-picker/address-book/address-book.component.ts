import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { DropdownModel, UserControlInfo } from '../../../models/common.model';


@Component({
  selector: 'iap-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss']
})
export class AddressBookComponent implements OnInit {

  filters: DropdownModel[] = [
    { id: 1, name: 'User Name' },
    { id: 2, name: 'Email' },
    { id: 3, name: 'Role' },
  ];
  roles: DropdownModel[] = [
    { id: 1, name: 'Admin' },
    { id: 2, name: 'Reviewer' },
    { id: 3, name: 'Approver' },
  ];

  filterBy: number;
  selectedRow: any;
  displayedColumns: string[];
  selectedUser: UserControlInfo;
  dataSource: MatTableDataSource<UserControlInfo>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialogRef: MatDialogRef<AddressBookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.filterBy = 1;

    this.displayedColumns = ['name', 'email', 'roles'];
    this.dataSource = new MatTableDataSource<UserControlInfo>(ELEMENT_DATA);
    this.selectedRow = null;
    this.selectedUser = new UserControlInfo();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  ngOnInit() {
  }

  selectRow(row: any) {
    this.selectedRow = row;
  }

  onReturnData() {
    if (this.selectedRow) {
      this.selectedUser.id = this.selectedRow.id;
      this.selectedUser.name = this.selectedRow.name;
      this.selectedUser.email = this.selectedRow.email;
      this.selectedUser.roles = this.selectedRow.roles;
      this.dialogRef.close(this.selectedUser);
    } else {
      this.dialogRef.close();
    }
  }

}


const ELEMENT_DATA: UserControlInfo[] = [
  { id: 1, name: 'A', email: 'A@email', roles: ['Admin'] },
  { id: 1, name: 'A', email: 'A@email', roles: ['Admin', 'Admin1', 'Admin2'] },
  { id: 1, name: 'A', email: 'A@email', roles: ['Admin'] },
  { id: 1, name: 'A', email: 'A@email', roles: ['Admin'] },
  { id: 1, name: 'A', email: 'A@email', roles: ['Admin'] },
  { id: 1, name: 'A', email: 'A@email', roles: ['Admin', 'Admin1', 'Admin2'] },
  { id: 1, name: 'A', email: 'A@email', roles: ['Admin'] },
  { id: 1, name: 'A', email: 'A@email', roles: ['Admin'] },
  { id: 1, name: 'A', email: 'A@email', roles: ['Admin'] },
  { id: 1, name: 'A', email: 'A@email', roles: ['Admin'] },
];
