import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VolunteerComponent} from "./volunteer.component";
import {VolunteerRoutingModule} from "./volunteer-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [VolunteerComponent],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    VolunteerRoutingModule
  ]
})
export class VolunteerModule {}
