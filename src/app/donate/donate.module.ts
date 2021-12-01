import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonateComponent } from './donate.component';
import {DonateRoutingModule} from "./donate-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [DonateComponent],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    DonateRoutingModule
  ]
})
export class DonateModule {}
