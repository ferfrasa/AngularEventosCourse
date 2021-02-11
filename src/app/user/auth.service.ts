import { Injectable } from "@angular/core";
import { IUser } from "./user.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from "rxjs";


@Injectable()
export class AuthService {
  currentUser:IUser

  constructor(private http: HttpClient){

  }
  loginUser(username:string, password:string){
    /*this.currentUser ={
      id: 1,
      userName: username,
      firstName: username,
      lastName:'papa'
    }*/

    let loginInfo= {username: username, password: password};
    let options = {headers: new HttpHeaders({'Content-Type':'application/json'})};

    return this.http.post('/api/login', loginInfo, options)
    .pipe(tap(data=>{//para no suscribirme
      this.currentUser= <IUser>data['user']
    }))
    .pipe(catchError(err =>{
      return of(false)
    }))

  }
  isAuthenticated(){
    return !!this.currentUser;
  }

  updateCurrentUser(firstName:string, lastName:string){
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;

    let options = {headers: new HttpHeaders({'Content-Type':'application/json'})};
    return this.http.put(`api/users/${this.currentUser.id}`,this.currentUser,options)



  }

  checkAuthenticationStatus(){
     this.http.get('/api/currentIdentity')
    .pipe(tap(data =>{
      if(data instanceof Object){
        this.currentUser = <IUser>data;
      }
    }

    )).subscribe()


  }

  logout(){
    this.currentUser = undefined
    let options = {headers: new HttpHeaders({'Content-Type':'application/json'})};
    return this.http.post('api/logout', {}, options)

  }

}
