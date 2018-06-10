import { Component, OnInit } from '@angular/core';
import { RegisterUserService } from '../services/register-user.service';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any = {};
  verifyEmailStatus:any = false;

  constructor(
    private registerUserService: RegisterUserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  register(user) {
    var _this = this;
    this.registerUserService.registerUser(user)
      .subscribe(function (response) {
        _this.router.navigate(['/success']);
      })
  }

  verifyEmail() {
    console.log(this.user.email);
    this.registerUserService.verifyEmail(this.user.email)
    .subscribe((response)=>{
      console.log(response['verifyEmail']['status']['type']);
      this.verifyEmailStatus = response['verifyEmail']['status']['type'];
    })
  }

}
