import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegistration = new EventEmitter();
  model: any = {};
  constructor(private authService: AuthService, private alertifyService: AlertifyService) { }

  ngOnInit(): void {}

  register(){
    this.authService.register(this.model).subscribe(next => {
      this.alertifyService.success('Registered successfully');
    },
    (error) => {
      this.alertifyService.error(error);
    });
  }

  cancel(): void{
    this.cancelRegistration.emit(false);
    console.log('cancelled');
  }
}
