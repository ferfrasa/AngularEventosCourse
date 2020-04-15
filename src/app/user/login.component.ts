import { Component } from "@angular/core";
import { AuthService } from './auth.service';
import { Router} from '@angular/router'
@Component({
  templateUrl: './login.component.html'})

  export class LoginComponent {
    userName=''
    password=''
    constructor(private authService:AuthService, private router:Router){

    }

    login(formValues){
      alert(this.userName)
      this.authService.loginUser(this.userName, this.password)
      this.router.navigate(['events'])
    }
    cancel(){
      this.router.navigate(['events'])
    }
  }
