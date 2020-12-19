import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private _ds: DataService, private _us: UserService, private route:Router) { }

  ngOnInit(): void {
    if(this._us.isLoggedIn()){
      this.route.navigate(['shop']);
    }
  }

  onSubmit(e){
    e.preventDefault();
    let param1 = e.target[0].value;
    let param2 = e.target[1].value;
    this._ds.postData('login', {param1, param2}).subscribe((res:any)=>{
      console.log(res);
      this._us.setLoggedIn();
      this.route.navigate(['shop']);
    });
    //param1:param1, param2:param2 "value pairing"
  }

  openSignup(){
    this.route.navigate(['signup']);
  }

}
