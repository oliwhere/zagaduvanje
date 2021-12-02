import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ValidationService} from "../shared/errors/validation.service";
import {ToastrService} from "ngx-toastr";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ConfirmDonationModalComponent} from "./confirm-donation-modal/confirm-donation-modal.component";
import {DonateService} from "./donate.service";
import {RemoveDonationModalComponent} from "./remove-donation-modal/remove-donation-modal.component";
@Component({
  selector: 'app-home',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css'],
})
export class DonateComponent implements OnInit {
  donateValidationForm: FormGroup;
  donations: any[] = [];
  constructor(private formBuilder: FormBuilder,
              private modalService: NgbModal,
              public donateService: DonateService,
              private toastr: ToastrService) { }


  ngOnInit(): void {
    this.setValidationForm();
    if (this.activeDonations && this.activeDonations.length > 0) {
      this.donations = this.activeDonations;
    }
  }

  get f() { return this.donateValidationForm.controls; }

  private setValidationForm(): void {
    this.donateValidationForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: ['', [Validators.required, ValidationService.emailValidator]],
      amount: [100, [Validators.required, ValidationService.positiveNumberValidator, Validators.min(100)]]
    });
  }

  public get activeDonations(): any[] {
    return JSON.parse(<string>localStorage.getItem('donations'));
  }

  public openDonationConfirmationDialog(): void {
    const modalRef =  this.modalService.open(ConfirmDonationModalComponent, {windowClass: 'modal-holder'});
    modalRef.componentInstance.donation = this.donateValidationForm.value;

    modalRef.componentInstance.emitConfirm.subscribe((value: any) => {
      this.onSubmit();
    });
  }

  public openRemoveDonationDialog(i: number): void {
    const modalRef =  this.modalService.open(RemoveDonationModalComponent, {windowClass: 'modal-holder'});

    modalRef.componentInstance.emitConfirm.subscribe((value: any) => {
      this.removeDonation(i);
    });
  }

  public onSubmit(): void {
    if (this.donateValidationForm.invalid) {
      return;
    }

    this.donations.push(this.donateValidationForm.value)
    localStorage.setItem('donations', JSON.stringify(this.donations));
    this.toastr.success('Successful Donation: ' + this.donateValidationForm.get('amount')?.value + 'DEN');
    this.resetForm();
  }

  public removeDonation(i: number): void {
    const filteredDonations = this.activeDonations.filter( (donation: any, index: number) => index !== i);
    this.donations = this.donations.filter( (donation: any, index: number) => index !== i);
    localStorage.removeItem('donations');
    localStorage.setItem('donations', JSON.stringify(filteredDonations));
    this.toastr.success('Donation Removed');
  }

  public getTotalDonatedAmount(): number {
    if (!this.activeDonations || this.activeDonations.length === 0) {
      return 0;
    }

    let totalDonatedAmount = 0
    this.activeDonations.forEach( (donation: any) =>
      totalDonatedAmount = donation.amount + totalDonatedAmount
    );

    return totalDonatedAmount;
  }


  public resetForm(): void {
    this.donateValidationForm.reset();
  }
}
