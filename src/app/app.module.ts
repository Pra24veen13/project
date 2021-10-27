import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavlistComponent } from './navlist/navlist.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LocationComponent } from './location/location.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { NsService } from './ns.service';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavlistComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    LocationComponent,
    LoginComponent,
    ErrorComponent,
    C1Component,
    C2Component,
    C3Component,
    RegisterComponent,
    DashboardComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [NsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
