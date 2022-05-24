import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FeaturesComponent } from '../../components/shared/features/features.component';
import { SharedModule } from '../../components/shared/shared.module';

@NgModule({
  declarations: [FeaturesComponent],
  exports: [FeaturesComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
