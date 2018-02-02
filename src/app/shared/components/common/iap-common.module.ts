import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from './box/box.component';
import { LabelComponent } from './label/label.component';
import { SmallCardTemplateComponent } from './small-card-template/small-card-template.component';
import { ListSmallCardTemplateComponent } from './list-small-card-template/list-small-card-template.component';
import { MaterialModule } from './material.module';
import { AttachmentComponent } from './attachment/attachment.component';
import { AttachmentItemComponent } from './attachment-item/attachment-item.component';
import { FeatureLayoutComponent } from './feature-layout/feature-layout.component';
import { RouterModule } from '@angular/router';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { BreadscrumbComponent } from './breadscrumb/breadscrumb.component';
import { WfButtonComponent } from './wf-button/wf-button.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  declarations: [
    BoxComponent,
    LabelComponent,
    SmallCardTemplateComponent,
    ListSmallCardTemplateComponent,
    AttachmentComponent,
    AttachmentItemComponent,
    FeatureLayoutComponent,
    StarRatingComponent,
    BreadscrumbComponent,
    WfButtonComponent
  ],
  exports: [
    MaterialModule,
    BoxComponent,
    LabelComponent,
    SmallCardTemplateComponent,
    ListSmallCardTemplateComponent,
    AttachmentComponent,
    AttachmentItemComponent,
    FeatureLayoutComponent,
    StarRatingComponent,
    BreadscrumbComponent,
    WfButtonComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class IapCommonModule { }
