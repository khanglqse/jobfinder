import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {fakeBackendProvider} from '../helper/fakeBackend/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { AuthGuard } from './authentication/guardian';
// import { SummaryPipe } from './pipe/summary.pipe';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    // SummaryPipe
  ],
  providers: [
    fakeBackendProvider,
    MockBackend,
    AuthGuard,

  ]
})
export class HelperModule { }
