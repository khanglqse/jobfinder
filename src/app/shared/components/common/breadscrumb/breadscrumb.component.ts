import { Component, OnInit, Input } from '@angular/core';
import { BreadscrumbItem } from '../../../models/breadscrumb/breadscrumb-item.model';

@Component({
  selector: 'iap-breadscrumb',
  templateUrl: './breadscrumb.component.html',
  styleUrls: ['./breadscrumb.component.scss']
})
export class BreadscrumbComponent implements OnInit {

  @Input() data: BreadscrumbItem[];

  constructor() { }

  ngOnInit() {
    this.data = this.data || [
      { name: 'My Items', url: '/web/my-task' },
      { name: 'Master Data', url: '/web/master-data' },
      { name: 'Dashboard', url: '/web/dashboard' },
    ];
  }

}
