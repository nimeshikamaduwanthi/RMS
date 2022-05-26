import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingPlanComponent } from './pricing-plan/pricing-plan.component';

@NgModule({
  declarations: [PricingPlanComponent],
  exports: [PricingPlanComponent],
  imports: [CommonModule],
})
export class PricingModule {}
