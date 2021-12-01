import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolunteerComponent } from './volunteer.component';
import {VolunteerRoutingModule} from "./volunteer-routing.module";

@NgModule({
  declarations: [VolunteerComponent],
  imports: [
    CommonModule,
    VolunteerRoutingModule
  ]
})
export class VolunteerModule {}
