import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { AppError } from './app-error';
import { NotFoundError } from './not-found-error';
import { BadInputError } from './bad-input-error';
import { InternalError } from './internal-server-error';
@Injectable()
export class DataService {
  constructor(private url, private http: Http) { }

  // getAll() {
  //   return this.http.get(this.url)
  //     .map(res => res.json())
  //     .catch(this.handleError);
  // }

  // create(resource) {
  //   return this.http.post(this.url, JSON.stringify(resource))
  //     .map(res => res.json())
  //     .catch(this.handleError);
  // }

  // update(resource) {
  //   return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
  //     .map(response => response.json())
  //     .catch(this.handleError);
  // }

  // delete(id) {
  //   return this.http.delete(this.url + '/' + id)
  //     .map(response => response.json())
  //     .catch(this.handleError);
  // }

  // private handleError(error: Response) {
  //   if (error.status === 400) {
  //     return Observable.throw(new BadInputError(error.json()));
  //   } else if (error.status === 404) {
  //     return Observable.throw(new NotFoundError());
  //   } else if (error.status === 500) {
  //     return Observable.throw(new InternalError());
  //   }
  //   return Observable.throw(new AppError(error));
  // }
}
