import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardStatusComponent } from './card-status/card-status.component';
import { CardRefComponent } from './card-ref/card-ref.component';
import { CardTitleComponent } from './card-title/card-title.component';
import { CardStateComponent } from './card-state/card-state.component';
import { CardInfoComponent } from './card-info/card-info.component';
import { CardInfoRowComponent } from './card-info-row/card-info-row.component';
import { CardNavIconRowComponent } from './card-nav-icon-row/card-nav-icon-row.component';
import { CardNavIconComponent } from './card-nav-icon/card-nav-icon.component';
import { CardNavComponent } from './card-nav/card-nav.component';
import { IapCommonModule } from '../../common/iap-common.module';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    IapCommonModule,
    RouterModule,
  ],
  declarations: [
    CardStatusComponent,
    CardRefComponent,
    CardTitleComponent,
    CardStateComponent,
    CardInfoComponent,
    CardInfoRowComponent,
    CardNavIconRowComponent,
    CardNavIconComponent,
    CardNavComponent,
  ],
  exports: [
    IapCommonModule,
    CardStatusComponent,
    CardRefComponent,
    CardTitleComponent,
    CardStateComponent,
    CardInfoComponent,
    CardInfoRowComponent,
    CardNavIconRowComponent,
    CardNavIconComponent,
    CardNavComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CardCommonModule { }
