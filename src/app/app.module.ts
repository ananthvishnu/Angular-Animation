import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup' 
import {  HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { CommonModule } from '@angular/common';





import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FactComponent } from './components/fact/fact.component';
import { ServiceComponent } from './components/service/service.component';
import { EventsComponent } from './components/events/events.component';
import { MenuComponent } from './components/menu/menu.component';
import { BookUsComponent } from './components/book-us/book-us.component';
import { TeamComponent } from './components/team/team.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumComponent } from './components/breadcrum/breadcrum.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';

import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

import { BookingPageComponent } from './pages/booking-page/booking-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { TestimonialPageComponent } from './pages/testimonial-page/testimonial-page.component';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { authInterceptor } from './interceptor/auth.interceptor';
import { GooglemapComponent } from './components/googlemap/googlemap.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeroComponent,
    AboutUsComponent,
    FactComponent,
    ServiceComponent,
    EventsComponent,
    MenuComponent,
    BookUsComponent,
    TeamComponent,
    TestimonialComponent,
    BlogsComponent,
    ContactComponent,
    ErrorComponent,
    FooterComponent,
    BreadcrumComponent,
    AboutPageComponent,
    ServicesPageComponent,
    MenuPageComponent,
    EventsPageComponent,
    ContactPageComponent,
    ErrorPageComponent,
    BookingPageComponent,
    BlogPageComponent,
    TeamPageComponent,
    TestimonialPageComponent,
    LoginComponent,
    SignupComponent,
    GooglemapComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgToastModule,
    HttpClientModule,
    CommonModule


  ],
  providers: [
    provideHttpClient(withInterceptors([authInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
