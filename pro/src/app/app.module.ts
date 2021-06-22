import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
//import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
// import { Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VedComponent } from './ved/ved.component';
import { HomeComponent } from './home/home.component';
import { VediodetailComponent } from './videodetail/vediodetail.component';
import { VideolistComponent } from './videolist/videolist.component';
import { VideocentreComponent } from './videocentre/videocentre.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VedComponent,
    HomeComponent,
    VediodetailComponent,
    VideolistComponent,
    VideocentreComponent,
    SafePipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpClientModule,
    // Component
    HttpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
