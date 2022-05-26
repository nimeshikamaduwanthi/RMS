import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureBoxComponent } from './feature-box/feature-box.component';

@NgModule({
  declarations: [FeatureBoxComponent],
  exports: [FeatureBoxComponent],
  imports: [CommonModule],
})
export class FeaturesModule {}
