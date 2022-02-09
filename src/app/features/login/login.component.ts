import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private formBuilder: FormBuilder, private route: Router) {}

  ngOnInit(): void {}

  login(): void {
    if (this.loginForm.valid) {
      localStorage.setItem('user', JSON.stringify(this.loginForm.value));
      this.loginForm.reset();
      this.route.navigate(['dashboard']);
    }
  }
}
