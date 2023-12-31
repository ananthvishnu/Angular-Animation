import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
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
import Validation from '../../validations/password.valiation';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup | any;
  submitted: boolean = false;
  isLoading: boolean = false;
  visible: boolean = true;
  changetype: boolean = true;

  visible1: boolean = true;
  changetype1: boolean = true;

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

  viewpass() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  viewpass1() {
    this.visible1 = !this.visible1;
    this.changetype1 = !this.changetype1;
  }

  initialForm() {
    this.signupForm = this.fb.group(
      {
        username: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required]),
      },
      {
        validators: [Validation.match('password', 'confirmPassword')],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.signupForm.controls;
  }

  signup() {
    this.isLoading = true;
    if (this.signupForm.valid) {
      this.http
        .post<{ user: UserInterface }>('https://api.realworld.io/api/users', {
          user: this.signupForm.getRawValue(),
        })
        .subscribe(
          (response) => {
            this.toaster.warning({
              detail: 'SUCCESS',
              summary: 'Signup successfully',
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
              summary: 'Failed to signup. Please try again.',
              sticky: true,
              position: 'topRight',
            });
          }
        );
    } else {
      this.isLoading = false;
      this.submitted = true;
    }
  }
}
