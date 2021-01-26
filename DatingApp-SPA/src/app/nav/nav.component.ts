import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(public authService: AuthService, private alertifyService: AlertifyService, private router: Router) { }

  ngOnInit(): void{

  }

  login(): void{
    this.authService.login(this.model).subscribe(() => {
      this.alertifyService.success('Logged in successfully');
      this.router.navigate(['/members']);
    },
    (error: string) => {
      this.alertifyService.error(error);
    }
    );
  }

  loggedIn(): boolean{
    return this.authService.loggedIn();
  }

  logOut(): void{
    localStorage.removeItem('token');
    this.alertifyService.message('logged out');
    this.router.navigate(['/home']);
  }
}
