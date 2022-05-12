import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogComponent } from './blog/blog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    FeaturesComponent,
    PricingComponent,
    BlogComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
})
export class ComponentModule {}
