import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ValidationService} from "../shared/errors/validation.service";
import {ToastrService} from "ngx-toastr";
@Component({
  selector: 'app-home',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css'],
})
export class DonateComponent implements OnInit {
  donateValidationForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private toastr: ToastrService) { }


  ngOnInit(): void {
    this.setValidationForm();
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

  public onSubmit(): void {
    if (this.donateValidationForm.invalid) {
      return;
    }

    this.toastr.success('Successful Donation: ' + this.donateValidationForm.get('amount')?.value + 'DEN');
  }

  public resetForm(): void {
    this.donateValidationForm.reset();
  }
}
