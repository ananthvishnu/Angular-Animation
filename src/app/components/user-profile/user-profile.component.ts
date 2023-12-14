import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { UserInterface } from 'src/app/interface/user.interface';
import { AuthServiceTsService } from 'src/app/shared/auth.service.ts.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  profileForm: FormGroup | any;
  userData: any;
  profileImageUrl: any;
  image: any;
  submitted: boolean = false;
  isLoading: boolean = false;

  constructor(
    public authService: AuthServiceTsService,
    private http: HttpClient,
    private fb: FormBuilder,
    private toaster: NgToastService,

  ) {}

  initialForm() {
    this.profileForm = this.fb.group({
      file: new FormControl(''),
      username: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email]),
      bio: new FormControl('',[Validators.required]),
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.profileForm.controls;
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.image = event.target.files[0];
      this.profileForm.get('file').setValue(this.image);
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profileImageUrl = e.target.result;
      };
      reader.readAsDataURL(this.image);
    }
  }

  ngOnInit(): void {
    this.initialForm();
    this.http
      .get<{ user: UserInterface }>('https://api.realworld.io/api/user')
      .subscribe({
        next: (response) => {
          this.userData = response;
          this.profileImageUrl = this.userData.user.image;
          this.authService.CurrentUserSig.set(response.user);
        },
        error: () => {
          this.authService.CurrentUserSig.set(null);
        },
      });
  }

  profileUpdate() {
    this.isLoading = true;
    if (true) {
      const data = {
        user: {
          bio: this.profileForm.get('bio').value,
          username: this.profileForm.get('username').value,
          email: this.profileForm.get('email').value,
          //image: this.profileForm.get('file').value.name,
          image: 'https://avatars.githubusercontent.com/u/124557188?v=4',
        },
      };
      this.http.put('https://api.realworld.io/api/user', data).subscribe({
        next: (response) => {
          this.toaster.warning({
            detail: 'SUCCESS',
            summary: 'Profile updated successfully',
            duration: 5000,
            position: 'topRight',
          });
          this.isLoading = false;
          this.submitted = false;
        },
        error: () => {
          this.isLoading = false;
          this.submitted = false;
          this.toaster.error({
            detail: 'ERROR',
            summary: 'Failed to update profile. Please try again.',
            sticky: true,
            position: 'topRight',
          });
        },
      });
    } else {
      this.submitted = true;
      this.isLoading = false;
    }
  }
}
