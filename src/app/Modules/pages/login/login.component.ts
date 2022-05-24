import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  credentials = {
    email: '',
    password: '',
  };

  showAlert = false;
  alertMsg = 'Please wait! We are loggin you in.';
  alertColor = 'blue';
  inSubmission = false;
  Name;
  isHiddenReg: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router
  ) {
    this.Name = data.name;
  }

  ngOnInit(): void {}

  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  email = new FormControl('', [Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),
  ]);
  confirm_password = new FormControl('', [Validators.required]);
  phoneNumber = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(10),
  ]);

  async login() {
    this.showAlert = true;
    this.alertMsg = 'Please wait! We are loggin you in.';
    this.alertColor = 'blue';
    this.inSubmission = true;

    try {
      this.credentials.email, this.credentials.password;
    } catch (e) {
      this.inSubmission = false;
      this.alertMsg = 'An unexpected error occurred. Please try again later';
      this.alertColor = 'red';

      console.log(e);

      return;
    }

    this.alertMsg = 'Success! You are now logged in.';
    this.alertColor = 'green';
  }

  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    password: this.password,
    confirm_password: this.confirm_password,
    phoneNumber: this.phoneNumber,
  });

  register() {
    this.showAlert = true;
    this.alertMsg = 'Please wait! Your account is being created';
    this.alertColor = 'blue';
    this.inSubmission = true;

    this.alertMsg = 'an unexpected error occurred!. Please try again later';
    this.alertColor = 'red';
    this.inSubmission = false;
    return;

    this.alertMsg = 'your account has been created!';
    this.alertColor = 'green';
  }

  goToLogin() {
    this.isHiddenReg = false;
  }

  goToRegister() {
    this.isHiddenReg = true;
  }
}
