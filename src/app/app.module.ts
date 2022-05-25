import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './component/nav/nav.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FooterComponent } from './component/footer/footer.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxAccordionModule, IgxSwitchModule } from 'igniteui-angular';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    HomeComponent,
  ],
  exports: [RouterModule],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPageScrollCoreModule.forRoot({ duration: 500 }),
    MatDialogModule,
    BrowserAnimationsModule,
    IgxAccordionModule,
    IgxSwitchModule,
  ],
  providers: [],
  entryComponents: [RegisterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
