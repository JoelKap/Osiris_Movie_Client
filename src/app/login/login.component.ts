import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { touchAllFormFields } from '../helpers/validation';
import { LoginService } from '../service/login.service';
import { AuthService } from '../auth/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private loginService: LoginService,
              private formBuilder: FormBuilder,
              private toast: ToastrService,
              private router: Router,
              private authServ: AuthService) {
    this.createFormBuild();
  }

  ngOnInit() {
    if (this.authServ.isAuthenticated()) {
      this.router.navigateByUrl('/movie');
    } else {
      return;
    }
  }

  async login(): Promise<void> {
    if (!this.loginForm.valid) {
      touchAllFormFields(this.loginForm);
      return;
    }
    this.loginService.login(this.loginForm.value).then((response) => {
      if (response) {
        this.toast.success('Success', 'Log in successfully');
        this.router.navigateByUrl('/movie');
      } else {
        return;
      }
    }).catch((error) => {
      console.log(error);
      this.toast.error('fail', 'Log in failed');
    });
  }

  private createFormBuild() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      username: ['', Validators.required],
    });
  }
}
