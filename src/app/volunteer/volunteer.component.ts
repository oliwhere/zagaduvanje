import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ValidationService} from "../shared/errors/validation.service";
import {ToastrService} from "ngx-toastr";
@Component({
  selector: 'app-home',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css'],
})
export class VolunteerComponent implements OnInit {
  volunteerValidationForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private toastr: ToastrService) { }


  ngOnInit(): void {
    this.setValidationForm();
  }

  get f() { return this.volunteerValidationForm.controls; }

  private setValidationForm(): void {
    this.volunteerValidationForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.maxLength(9),ValidationService.positiveNumberValidator, Validators.min(0o70000000)]],
      adress:['', [Validators.required]],
    });
  }

  public onSubmit(): void {
    if (this.volunteerValidationForm.invalid) {
      return;
    }
    this.toastr.success('Successful Application ');
  }

  public resetForm(): void {
    this.volunteerValidationForm.reset();
  }
}
