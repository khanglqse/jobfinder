import { Injectable } from '@angular/core';
import { DataService } from '../data-service/data-service.service';
import { Http } from '@angular/http';

@Injectable()
export class DemoService  {

  constructor(http: Http) {
    // super('https://jsonplaceholder.typicode.com/users', http);
  }
}

// this is for component code

// constructor(private service: DemoService){}
// ngOnInit(){
//   this.service.getAll()
//   .subscribe(posts => this.posts = posts);
// }
