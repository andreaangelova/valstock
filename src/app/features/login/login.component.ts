import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    name: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    // TODO: add guard
    if (this.loginService.isLoggedIn()) {
      this.route.navigate(['dashboard']);
    }
  }

  login(): void {
    if (this.loginForm.valid) {
      this.loginService.logIn(this.loginForm.value);
      this.loginForm.reset();
      this.route.navigate(['dashboard']);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
