import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { FeaturesComponent } from './component/features/features.component';
import { PricingComponent } from './component/pricing/pricing.component';
import { BlogComponent } from './component/blog/blog.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'home',
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
    path: 'log',
    component: LoginComponent,
  },
  {
    path: 'reg',
    component: RegisterComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
