import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SKIP_LOADER } from '../../constants/api.constants';


export interface IRequestOptions {
  headers?: HttpHeaders;
  observe?: 'body';
  params?: HttpParams;
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  body?: any;
}

@Injectable()
export class IapHttpClient extends HttpClient {

  constructor(handler: HttpHandler) {
    super(handler);
  }
  /**
   * Construct a GET request without loader running.
   */
  silentGet(url: string, options?: {
    headers?: HttpHeaders;
    observe?: 'body';
    params?: HttpParams;
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    body?: any;
  }) {
    if (options) {
      if (options.headers) {
        options.headers = options.headers.append(SKIP_LOADER, '');
      } else {
        options.headers = new HttpHeaders();
        options.headers = options.headers.append(SKIP_LOADER, '');
      }
    } else {
      options = {
        headers: new HttpHeaders()
      };
      options.headers = options.headers.append(SKIP_LOADER, '');
    }
    return this.get(url, options);
  }
}
