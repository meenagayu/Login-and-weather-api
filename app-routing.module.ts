import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SkipComponent } from './skip/skip.component';
import { WeatherComponent } from './weather/weather.component';


const routes: Routes =[ 
      {path:'weather',component:WeatherComponent},
      {path:'skip',component:SkipComponent}, 
      {path:'**',component:AppComponent}
    ] 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
