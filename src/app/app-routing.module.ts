import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './Modules/pages/blog/blog.component';
import { FeaturesComponent } from './Modules/components/features/features.component';
import { HomeComponent } from './Modules/pages/home/home.component';
import { PricingComponent } from './Modules/components/pricing/pricing.component';
import { LoginComponent } from './Modules/pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'features',
    component: FeaturesComponent,
  },
  {
    path: 'pricing',
    component: PricingComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
