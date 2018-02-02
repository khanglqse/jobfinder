import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { BaseRequestOptions } from '@angular/http';

import { DialogHelperService } from './dialog-helper/dialog-helper.service';
import { AuthenticationService } from './authentication/authentication.service';
import { BackgroundLoader } from './background-loader/background-loader.service';
import { IapHttpClient } from './iap-http-client/iap-http-client.service';
import { AppConfigService } from './app-config/app-config.service';
import { DataService } from './data-service/data-service.service';
import { DemoService } from './demo-service/demo.service';
import { ScrollToElementService } from './scroll-to-element/scroll-to-element.service';

/**
* Exported function so that it works with AOT
* @param {AppConfigService} configService
* @returns {Function}
*/
export function loadConfigService(configService: AppConfigService): Function {
  return () => {
    return configService.load();
  };
}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  providers: [
    // AuthenticationService,
    // DataService,
  ]
})
export class ServicesModule {
  static forRoot() {
    return {
      ngModule: ServicesModule,
      providers: [
        DatePipe,

        AuthenticationService,
        BaseRequestOptions,
        DialogHelperService,
        DemoService,
        BackgroundLoader,
        IapHttpClient,
        AppConfigService,
        { provide: APP_INITIALIZER, useFactory: loadConfigService, deps: [AppConfigService], multi: true },
        ScrollToElementService
      ]
    };
  }
}

