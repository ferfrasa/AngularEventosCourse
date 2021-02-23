import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class AuthService {
  currentUser: IUser;

  constructor(private http: HttpClient) {

  }
  loginUser(username: string, password: string) {
    /*this.currentUser ={
      id: 1,
      userName: username,
      firstName: username,
      lastName:'papa'
    }*/

    const loginInfo = {username, password};
    const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

    return this.http.post('/api/login', loginInfo, options)
    .pipe(tap(data => {// para no suscribirme
      this.currentUser = data.user as IUser;
    }))
    .pipe(catchError(err => {
      return of(false);
    }));

  }
  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;

    const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.put(`api/users/${this.currentUser.id}`, this.currentUser, options);



  }

  checkAuthenticationStatus() {
     this.http.get('/api/currentIdentity')
    .pipe(tap(data => {
      if (data instanceof Object) {
        this.currentUser = data as IUser;
      }
    }

    )).subscribe();


  }

  logout() {
    this.currentUser = undefined;
    const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post('api/logout', {}, options);

  }

}
