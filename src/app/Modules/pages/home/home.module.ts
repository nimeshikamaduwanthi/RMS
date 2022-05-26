import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FeaturesComponent } from '../../components/features/features.component';

import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { ContactComponent } from '../../components/contact/contact.component';
import { QuestionsComponent } from '../../components/questions/questions.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { FeaturesModule } from '../../components/features/features.module';
import { PricingModule } from '../../components/pricing/pricing.module';
import { PricingComponent } from '../../components/pricing/pricing.component';

@NgModule({
  declarations: [
    FeaturesComponent,
    PricingComponent,
    ContactComponent,
    QuestionsComponent,
    TestimonialsComponent,
  ],
  exports: [
    FeaturesComponent,
    PricingComponent,
    ContactComponent,
    QuestionsComponent,
    TestimonialsComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    NgxPageScrollCoreModule.forRoot({ duration: 500 }),
    FeaturesModule,
    PricingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
