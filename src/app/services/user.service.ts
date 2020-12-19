import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loggedIn:boolean= false;

  constructor() { }

  setLoggedIn(){
    // window.sessionStorage.setItem('login','true');
    this.loggedIn=true;
  }

  setLoggedOut(){
    // window.sessionStorage.setItem('login','true');
    this.loggedIn=false;
  }

  isLoggedIn(){
    console.log(this.loggedIn)
    return this.loggedIn;
  }

}
