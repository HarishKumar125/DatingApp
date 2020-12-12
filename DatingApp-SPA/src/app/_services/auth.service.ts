import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:5050/auth/';

constructor(private http: HttpClient) { }

login(model: any): any{
  return this.http.post(this.baseUrl + 'login', model)
  .pipe(
    map((response: any) => {
      const user = response;
      if (user){
        localStorage.setItem('token', user.token);
      }
    })
  );
}

register(model: any): void{
  this.http.post(this.baseUrl + 'register', model).subscribe(next => {
    console.log('Registration successfull');
  },
  error => {
    console.log(error);
  });
}
}
