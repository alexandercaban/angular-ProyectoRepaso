import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private cookieService: CookieService, private router: Router) { }

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      login    : ['', Validators.required],
      password : ['' , Validators.required]
    })
  }

  logueo(){
    this.cookieService.set('token_access', this.form.value.login, 1,'/')
    this.router.navigate(['/home']);
  }

}
