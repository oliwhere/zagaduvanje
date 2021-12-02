import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../shared/errors/validation.service';
import { ToastrService } from 'ngx-toastr';
import {VolunteerService} from "./volunteer.service";
import {ConfirmVolunteerModalComponent} from "./confirm-volunteer-modal/confirm-volunteer-modal.component";
import  {RemoveVolunteerModalComponent} from "./remove-volunteer-modal/remove-volunteer-modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-home',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css'],
})
export class VolunteerComponent implements OnInit {
  volunteerValidationForm: FormGroup;
  volunteers: any[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    public volunteerService: VolunteerService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.setValidationForm();
  }

  get f() {
    return this.volunteerValidationForm.controls;
  }

  private setValidationForm(): void {
    this.volunteerValidationForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.maxLength(9),
          // ValidationService.positiveNumberValidator,
        ],
      ],
      adress: ['', [Validators.required]],
      location:['',]
    });
  }
  public get activeVolunteers(): any[] {
    return JSON.parse(<string>localStorage.getItem('volunteers'));
  }

  public openVolunteerConfirmationDialog(): void {
    const modalRef =  this.modalService.open(ConfirmVolunteerModalComponent, {windowClass: 'modal-holder'});
    modalRef.componentInstance.volunteering = this.volunteerValidationForm.value;

    modalRef.componentInstance.emitConfirm.subscribe((value: any) => {
      this.onSubmit();
    });
  }

  public openRemoveVolunteerDialog(i: number): void {
    const modalRef =  this.modalService.open(RemoveVolunteerModalComponent, {windowClass: 'modal-holder'});

    modalRef.componentInstance.emitConfirm.subscribe((value: any) => {
      this.removeVolunteer(i);
    });
  }

  public onSubmit(): void {
    if (this.volunteerValidationForm.invalid) {
      return;
    }

    this.volunteers.push(this.volunteerValidationForm.value)
    localStorage.setItem('volunteers', JSON.stringify(this.volunteers));
    this.toastr.success('Successful Application: Our new volunteer  ' + this.volunteerValidationForm.get('name')?.value + this.volunteerValidationForm.get('surname')?.value);
    this.resetForm();
  }

  public removeVolunteer(i: number): void {
    const filteredVolunteers = this.activeVolunteers.filter( (volunteers: any, index: number) => index !== i);
    this.volunteers = this.volunteers.filter( (volunteers: any, index: number) => index !== i);
    localStorage.removeItem('volunteers');
    localStorage.setItem('volunteers', JSON.stringify(filteredVolunteers));
    this.toastr.success('Volunteer Removed');
  }


  public resetForm(): void {
    this.volunteerValidationForm.reset();
  }
}
