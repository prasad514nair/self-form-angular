import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-self',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
    submissionForm: FormGroup;
    submitAttempted: boolean;
    constructor(private fb: FormBuilder) {
    }

  ngOnInit(): void {
      this.submissionForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        address1: ['', Validators.required],
        address2: '',
      });
  }

  hasRequiredError(field) {
    const control = this.submissionForm.get(field);
    return (control.hasError('required') && (control.touched || this.submitAttempted));
  }

  onSubmit() {
    if (this.submissionForm.invalid) {
      this.submitAttempted = true;
      return;
    }
  }
}
