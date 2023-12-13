import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { UserInterface } from 'src/app/interface/user.interface';
import { AuthServiceTsService } from 'src/app/shared/auth.service.ts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;
  submitted: boolean = false;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private toaster: NgToastService,
    private http: HttpClient,
    private authService: AuthServiceTsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initialForm();
  }

  initialForm() {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  login() {
    this.http
      .post<{ user: UserInterface }>(
        'https://api.realworld.io/api/users/login',
        {
          user: this.loginForm.getRawValue(),
        }
      )
      .subscribe(
        (response) => {
          this.toaster.warning({
            detail: 'SUCCESS',
            summary: 'Login successfully',
            duration: 5000,
            position: 'topRight',
          });
          this.isLoading = false;
          this.submitted = false;
          localStorage.setItem('token', response.user.token);
          this.authService.CurrentUserSig.set(response.user);
          this.router.navigateByUrl('/home');
        },
        (error) => {
          this.isLoading = false;
          this.submitted = false;
          this.toaster.error({
            detail: 'ERROR',
            summary: 'Failed to login. Please try again.',
            sticky: true,
            position: 'topRight',
          });
        }
      );
  }
}
