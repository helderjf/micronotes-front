import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {RegisterPayload} from '../register-payload';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  registerPayload: RegisterPayload;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router:Router) {
    this.registerForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    this.registerPayload = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  ngOnInit() {
  }

  onSubmit() {
    this.registerPayload.firstName = this.registerForm.get('firstName').value;
    this.registerPayload.lastName = this.registerForm.get('lastName').value;
    this.registerPayload.email = this.registerForm.get('email').value;
    this.registerPayload.password = this.registerForm.get('password').value;
    this.registerPayload.confirmPassword = this.registerForm.get('confirmPassword').value;

    this.authService.register(this.registerPayload).subscribe(data => {
      console.log('register succes');
      this.router.navigateByUrl('/register-success');
    }, error => {
      console.log('register failed');
    });
  }
}