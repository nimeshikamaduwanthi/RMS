import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './Modules/components/nav/nav.component';
import { LoginComponent } from './Modules/pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { FooterComponent } from './Modules/components/footer/footer.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './Modules/components/footer/footer.component';
import { HomeComponent } from './Modules/pages/home/home.component';
import { HomeModule } from './Modules/pages/home/home.module';
import { BlogComponent } from './Modules/pages/blog/blog.component';
import { BlogModule } from './Modules/pages/blog/blog.module';
import { IgxAccordionModule, IgxSwitchModule } from 'igniteui-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
  ],
  exports: [RouterModule],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HomeModule,
    BlogModule,
    NgxPageScrollCoreModule.forRoot({ duration: 2500 }),
    IgxAccordionModule,
    IgxSwitchModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
