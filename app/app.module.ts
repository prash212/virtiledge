import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { HttpClientModule } from '@angular/common/http';

import { CourseCategoryService } from '../app/services/course-category.service';
import { CoursesService } from './services/courses.service';
import { CourseDetailsService } from './services/course-details.service';
import { RegisterUserService } from './services/register-user.service';
import { SuccessComponent } from './success/success.component';
import { EventsComponent } from './events/events.component';
import { FaqService } from './services/faq.service';
import { EventsService } from './services/events.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CourseDetailComponent,
    RegisterComponent,
    LoginComponent,
    SuccessComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    CourseCategoryService,
    CoursesService,
    CourseDetailsService,
    RegisterUserService,
    FaqService,
    EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
