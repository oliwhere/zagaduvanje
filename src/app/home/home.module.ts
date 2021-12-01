import { GoogleMapsModule } from '@angular/google-maps';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import {HomeRoutingModule} from "./home-routing.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    GoogleMapsModule,
    HomeRoutingModule
  ]
})
export class HomeModule {}
