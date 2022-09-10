import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button' 
import {MatInputModule} from '@angular/material/input'  
import {MatIconModule} from '@angular/material/icon' 
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkipComponent } from './skip/skip.component';
import { WeatherComponent } from './weather/weather.component'; 
@NgModule({
  declarations: [
    AppComponent,
    SkipComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule, 
    MatInputModule, 
    ReactiveFormsModule, 
    MatIconModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
