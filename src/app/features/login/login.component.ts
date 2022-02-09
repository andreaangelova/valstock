import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    name: '',
    password: '',
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  login(): void {
    console.log(this.loginForm.value);
    this.loginForm.reset();
  }
}
