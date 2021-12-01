import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css'],
})
export class DonateComponent implements OnInit {
  donateValidationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.setValidationForm();
  }

  get f() { return this.donateValidationForm.controls; }

  private setValidationForm(): void {
    this.donateValidationForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      amount: ['', [Validators.required]]
    });
  }

  public onSubmit(): void {
    if (this.donateValidationForm.invalid) {
      return;
    }
  }

  public cancel(): void {}
}
