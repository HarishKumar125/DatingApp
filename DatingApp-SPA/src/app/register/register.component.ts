import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegistration = new EventEmitter();
  model: any = {};
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  register(){
    this.authService.register(this.model);
  }

  cancel(){
    this.cancelRegistration.emit(false);
    console.log('cancelled');
  }
}
