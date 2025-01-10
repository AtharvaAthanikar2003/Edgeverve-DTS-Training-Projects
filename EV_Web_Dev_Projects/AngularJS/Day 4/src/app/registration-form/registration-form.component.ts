import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  registerForm!: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  validateEmail(c: FormControl) {
    let EMAIL_REGEXP = /^[\w._]+@[A-Za-z]+\.(com|co\.in|or)$/;
    return EMAIL_REGEXP.test(c.value) ? null : {
      emailError: {
        message: "Email is invalid"
      }
    };
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: this.formBuilder.group({  
        street: [],
        zip: [],
        city: []
      }),
      email: ['', this.validateEmail]
    });
  }
}
