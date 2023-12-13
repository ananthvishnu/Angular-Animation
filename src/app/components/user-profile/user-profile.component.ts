import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/interface/user.interface';
import { AuthServiceTsService } from 'src/app/shared/auth.service.ts.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  userData: any;
  constructor(
    public authService: AuthServiceTsService,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.http
      .get<{ user: UserInterface }>('https://api.realworld.io/api/user')
      .subscribe({
        next: (response) => {
          this.userData = response;
          this.authService.CurrentUserSig.set(response.user);
        },
        error: () => {
          this.authService.CurrentUserSig.set(null);
        },
      });
  }
}
