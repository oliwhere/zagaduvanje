import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonateComponent } from './donate.component';
import {DonateRoutingModule} from "./donate-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {NgbModalModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmDonationModalComponent} from "./confirm-donation-modal/confirm-donation-modal.component";
import {RemoveDonationModalComponent} from "./remove-donation-modal/remove-donation-modal.component";

@NgModule({
  declarations: [DonateComponent, ConfirmDonationModalComponent, RemoveDonationModalComponent],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    DonateRoutingModule,
    NgbModalModule
  ]
})
export class DonateModule {}
