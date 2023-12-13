import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/interface/user.interface';
import { AuthServiceTsService } from 'src/app/shared/auth.service.ts.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userData:any
  constructor(
    public authService: AuthServiceTsService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.http
      .get<{ user: UserInterface }>('https://api.realworld.io/api/user')
      .subscribe({
        next: (response) => {
          this.userData = response
          console.log('response', response);
          this.authService.CurrentUserSig.set(response.user);
        },
        error: () => {
          this.authService.CurrentUserSig.set(null);
        }
      });
  }





  logout() {
    localStorage.setItem('token','');
    this.authService.CurrentUserSig.set(null);
    this.router.navigateByUrl('/login')
  }
}
