import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VolunteerComponent} from "./volunteer.component";
import {VolunteerRoutingModule} from "./volunteer-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {NgbModalModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmVolunteerModalComponent} from "./confirm-volunteer-modal/confirm-volunteer-modal.component";
import {RemoveVolunteerModalComponent} from "./remove-volunteer-modal/remove-volunteer-modal.component";

@NgModule({
  declarations: [VolunteerComponent,ConfirmVolunteerModalComponent,RemoveVolunteerModalComponent],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    VolunteerRoutingModule,
    NgbModalModule
  ]
})
export class VolunteerModule {}
