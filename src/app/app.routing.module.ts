import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';

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
import { GooglemapComponent } from './components/googlemap/googlemap.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component:LoginComponent  },
  { path: 'signup', component:SignupComponent  },
  { path: 'map', component:GooglemapComponent  },




  { path: 'about', component: AboutPageComponent },
  { path: 'service', component: ServicesPageComponent },
  { path: 'menu', component: MenuPageComponent },
  { path: 'events', component: EventsPageComponent },
  { path: 'contact', component: ContactPageComponent },

  { path: 'booking', component: BookingPageComponent },
  { path: 'blogs', component: BlogPageComponent },
  { path: 'team', component: TeamPageComponent },
  { path: 'testimonial', component: TestimonialPageComponent },


  { path: 'error', component: ErrorPageComponent },


  { path: '**', redirectTo: '/404' },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  providers: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
