import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from './app-config.model';

/**
 * Global variable containing actual config to use. Initialised via ajax call
 */
export let APP_CONFIG: AppConfig;

@Injectable()
export class AppConfigService {

  constructor(private http: HttpClient) { }

  public load() {
    return new Promise((resolve, reject) => {
      this.http.get(environment.configPath).map(res => res as any).catch((error: any): any => {
        reject(true);
        return Observable.throw('Server error');
      }).subscribe((envResponse: any) => {
        const config = new AppConfig();
        // Modify envResponse here if needed (e.g. to ajust parameters for https,...)
        APP_CONFIG = Object.assign(config, envResponse);
        resolve(true);
      });
    });
  }
}
