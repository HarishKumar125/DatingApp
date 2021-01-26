import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { AuthService } from './_services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  jwtHelper = new JwtHelperService();
  item: any;
  constructor(private authService: AuthService, private httpClient: HttpClient){}

  ngOnInit(): void{
     const token = localStorage.getItem('token');
     if (token) {
          this.authService.decodedToken = this.jwtHelper.decodeToken(token);
     }
  }

  getRandomNumberBetween(min, max): number{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

  // GetData(): void{
  //   const id = this.getRandomNumberBetween(1, 10);
  //   const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  //   this.httpClient.get(url).subscribe(
  //     response => {
  //       this.item = response;
  //       console.log(response);
  //          });
  //   console.log(this.item);
  // }

}
