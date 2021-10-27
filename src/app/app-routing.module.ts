import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
{
  path:'home',
  component:HomeComponent
},
{
  path:'about',
  component:AboutComponent
},
{
  path:'gallery',
  component:GalleryComponent
},
{
  path:'location',
  component:LocationComponent
},
{
  path:'login',
  component:LoginComponent
},
{
path:'',
component:HomeComponent
},
{
  path:'**',
  component:ErrorComponent
},
{path:'register',
component:RegisterComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
